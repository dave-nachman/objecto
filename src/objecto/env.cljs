(ns objecto.env)

(declare set-env)

(defn subclass [inst params env]
    (assoc inst :super inst :ident (rand-int 100000000)))
    
(defn new-instance [inst params env]
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
     :ident 2
     :ifTrue:ifFalse 
     (fn [self params env]
       (if self 
         ((:value (get params :ifTrue {:value (fn [_ _ _] nil)})) self [] env) 
         ((:value (get params :ifFalse {:value (fn [_ _ _] nil)})) self [] env)))} 
    
    :Number
    {:double (fn [x _ _] (* x 2))
     :ident 1
     :type :class
     :add (fn [x params _] (+ x (:add params)))
     :> (fn [x y _] (> x y))
     :+ (fn [x y _] (+ x y))}}))
