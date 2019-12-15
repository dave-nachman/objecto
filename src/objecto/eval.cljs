(ns objecto.eval
  (:require [clojure.edn :as edn]
            [instaparse.core :as insta]))

(declare eval-inner)

(defn- assign [ast env]
  (let [[[_ [_ ident] value]] ast]
    (assoc env (keyword ident) (eval-inner [value] env))))

(defn- read-literal [ast _env]
  (let [[[_ value]] ast]
    (edn/read-string value)))

(defn- read-string [ast _env]
  (let [[[_ value]] ast]
    (clojure.string/replace value "'" "")))

(defn- get-meta-class [class]
  (->> class
       (filter (fn [[k _]] (clojure.string/starts-with? (name k) "class__")))
       (map (fn [[k v]] [(keyword (clojure.string/replace (name k) "class__" "")) v]))
       (into {})))

(defn- o-class? [obj]
  (and (map? obj) (= (:type obj) :class)))

(defn- get-class [instance env]
  (cond
     ;; literals
    (number? instance) (env :Number)
    (string? instance) (env :String)
    (boolean? instance) (env :Boolean)
    (nil? instance) (env :Nil)

     ;; class
    (o-class? instance) (get-meta-class instance)

     ;; instance
    :else instance))


(defn- extract-identifier [param]
  (if (= (first param) :identifier)
    (last param)
    (last (second param))))

(defn- eval-param [param env]
  (if (= (first param) :identifier)
    [(keyword (last param)) nil]
    (let [[_ [_ id] value] param]
      [(keyword id) (eval-inner [value] env)])))

(defn- eval-params [params env]
  (let [converted (map (fn [p] (eval-param p env)) params)]
     ;; add "__raw" for the sake of pulling out multiple "value" params for code block evaluation
    (assoc (into {} converted) :__raw converted)))

(defn- get-method [identifier class]
  (let [method (identifier class)]
    (if method
      method
      (if (:super class)
        (get-method identifier (:super class))
        (if (:class class)
          (get-method identifier (:class class))
          (throw (js/Error. (str "message not understood: " identifier))))))))

(defn- message [ast env]
  (let [[[_ raw-instance & params]] ast
        identifier (keyword (clojure.string/join ":" (map extract-identifier params)))
        instance (eval-inner [raw-instance] env)
        class (get-class instance env)
        method (get-method identifier class)]
    (method instance (eval-params params env) env)))

(defn- binary-message [ast env]
  (let [[[_ raw-left [_ op] raw-right]] ast
        left (eval-inner [raw-left] env)
        right (eval-inner [raw-right] env)
        class (get-class left env)
        method (get-method (keyword op) class)]
    (method left right env)))

(defn- identifier [ast env]
  (let [[[_ value]] ast]
    (if (contains? env (keyword value))
      (get env (keyword value))
      (throw (js/Error. (str "missing identifier: " value))))))

;; TODO: add support for multiple expressions and return expressions
(defn- code-block [ast env]
  (let [[[_ [_ & params] & nodes]] ast]
    {:type :code-block
     :code (first ast)
     :value
     (fn [_ args _]
       (let [value-params (filter (fn [[k _]] (= k :value)) (:__raw args))
             zipped (map vector params (map second value-params))
             new-env (reduce (fn [env [k v]] (assoc env (keyword k) v)) env zipped)]
         (eval-inner [(first nodes)] new-env)))}))

(defn- eval-inner [ast env]
  (let [[[head]] ast]
    (case head
      :assignment (assign ast env)
      :unary-message (message ast env)
      :keyword-message (message ast env)
      :return-expr (message (second (first ast)) env)
      :binary-message (binary-message ast env)
      :identifier (identifier ast env)
      :code-block (code-block ast env)
      :string (read-string ast env)
      :number (read-literal ast env)
      :boolean (read-literal ast env)
      :nil (read-literal ast env)
      :symbol (keyword (read-literal ast env)))))

(defn- method-definition [ast env]
  (let [[[_ [_ receiver] [_ method-name] [_ _] & body]] ast]
    (assoc-in
     env
     [(keyword receiver) (keyword method-name)]
     (fn [self _params raw-env]
       (let [env (assoc raw-env :self self)] ; add self to environment
         (eval-inner body env))))))

;; TODO: remove repetition with eval-inner
(defn- eval-one [ast in]
  (let [env (:env in)]
    (case (first ast)
      :assignment {:env (assign [ast] env) :value nil}
      :method-definition {:env (method-definition [ast] env) :value nil}
      :return-expr (eval-one (second ast) in)
      :unary-message {:env env :value (message [ast] env)}
      :keyword-message {:env env :value (message [ast] env)}
      :binary-message {:env env :value (binary-message [ast] env)}
      :identifier {:env env :value (identifier [ast] env)}
      :code-block {:env env :value (code-block [ast] env)}
      :string {:env env :value (read-string [ast] env)}
      :number {:env env :value (read-literal [ast] env)}
      :boolean {:env env :value (read-literal [ast] env)}
      :nil {:env env :value (read-literal [ast] env)}
      :symbol {:env env :value (keyword (read-literal [ast] env))})))

(defn eval [ast env]
  (if (insta/failure? ast)
    {:env env :value "Parsing error"}
    (reduce (fn [in node] (eval-one node in)) {:env env} ast)))
