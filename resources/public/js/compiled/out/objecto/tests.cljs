(ns objecto.tests
  (:require  [cljs.test :refer-macros [deftest is testing run-tests]]
             [objecto.reader :refer [read]]
             [objecto.repl :refer [read-eval]]))

;; Reader 
(deftest read-number
 (is (= (first (read "42.")) [:number "42"])))

(deftest read-identifier
  (is (= (first (read "ddd.")) [:identifier "ddd"])))

(deftest read-multiple-identifiers
  (is (= (into [] (read "a. b.")) [[:identifier "a"] [:identifier "b"]])))

(deftest read-string
  (is (= (first (read "'string'")) [:string "string"])))

(deftest read-comment
  (is (= (first (read "\"comment\"")) [:comment "comment"])))

(deftest read-code-block
  (is 
     (= 
        (read "[ a + b ]") 
        [[:code-block 
          [:code-block-params]
          [:binary-message [:identifier "a"] [:binary-identifier "+"] [:identifier "b"]]]])))

(deftest read-unary-message
  (is (= (first (read "receiver message."))
         [:unary-message [:identifier "receiver"] [:identifier "message"]])))

(deftest read-nested-unary-message
  (is (= (first (read "a b c."))
         [:unary-message [:unary-message [:identifier "a"] [:identifier "b"]]
                         [:identifier "c"]]))) 
;; Eval        
(deftest test-number
  (is (= (read-eval "42.") 42)))
