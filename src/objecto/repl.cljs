(ns objecto.repl
  (:require [objecto.reader :as reader]
            [objecto.eval :as eval]
            [objecto.env :refer [env]]))

(defn get-class-name [value env]
  (let [ident (:ident value)
        match (filter (fn [[_ v]] (and (map? v) (= ident (:ident v)))) env)]
      (if match
        (name (first (first match)))
        "<???>"))) 

(defn format-value [value env]
    (if (map? value)
      (cond
        (= (:type value) :code-block) (:code value)
        (:class value) (str "instance:" (get-class-name (:class value) env))
        :else (get-class-name value env)) 
      value))

(defn set-env [result]
  (let [new-env (:env result)
        value (:value result)]
    (reset! env new-env)
    (format-value value new-env)))
 
(defn read-eval [input]
   (-> input
    reader/read
    (eval/eval @env)
    set-env))
  

(read-eval "[x | x ] value:")

(read-eval "-23 abs")

(read-eval "'x' double")