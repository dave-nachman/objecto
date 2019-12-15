(ns objecto.pprint)

(defn- code-block [[_ [_ & params] & nodes]]
  (if (count params)
     (str "|" (clojure.string/join params " ") "|")))
     

;; TODO: finish pretty print
(defn pprint [ast]
   (case (first ast)
     :code-block (code-block ast)
     (str ast)))
