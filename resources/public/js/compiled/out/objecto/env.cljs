(ns objecto.env)

(defn subclass [inst _params _env]
  (assoc inst :super inst :ident (rand-int 100000000)))

(defn new-instance [inst _params _env]
  {:class inst})

(def env
  (atom
   {:Object
    {:subclass subclass
     :ident 0
     :type :class
     :gclass (fn [_ _ _] "class")
     :class__new new-instance}

    :Boolean
    {:type :class
     :ident 1
     :ifTrue:ifFalse
     (fn [self params env]
       (if self
         ((:value (get params :ifTrue {:value (fn [_ _ _] nil)})) self [] env)
         ((:value (get params :ifFalse {:value (fn [_ _ _] nil)})) self [] env)))}

    :String
    {:type :class
     :ident 2
     :double (fn [x _ _] (str x x))
     :index 
     (fn [self params env]
       (clojure.string/index-of self (get params :index)))} 

    :Number
    {:double (fn [x _ _] (* x 2))
     :abs (fn [x _ _] (Math/abs x))
     :ident 3
     :type :class
     :add (fn [x params _] (+ x (:add params)))
     :> (fn [x y _] (> x y))
     :+ (fn [x y _] (+ x y))}}))
