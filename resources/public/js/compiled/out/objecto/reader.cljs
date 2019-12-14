(ns objecto.reader
  (:require [instaparse.core :as insta]))

(def read
  (insta/parser
   "<start> = <w>? (top | top <'.'> (<w> top <'.'>)*) <w>?
    <top> = expr | assignment | method-definition | comment
    <expr> = unary-message | keyword-message | bin-or-value | return-expr | cascaded-message
    return-expr = <return> <w>? expr
    <bin-or-value> = binary-message | value
    assignment = identifier <w> <':='> <w> expr
    keyword-message = (value | unary-message | binary-message) (<w> param)+
    cascaded-message = (value | unary-message | binary-message) <w> cascade-stmt (<';'> <w> cascade-stmt)*
    cascade-stmt = param (<w> param)*
    unary-message = (value | unary-message) <w> identifier
    binary-message = (value | unary-message | binary-message) <w> binary-identifier <w> (value | unary-message)
    <value> = (identifier | string | number | boolean | nil | symbol | code-block) <(<w> comment)>?
    identifier = #'[A-z]+'
    symbol = bare-symbol | quoted-symbol
    <bare-symbol> = <'#'> #'[A-z]+'
    <quoted-symbol> = <\"#'\"> #'[A-z ]+' <\"'\">
    string = <\"'\"> #'[A-z ]+' <\"'\">
    comment = <'\"'> #'[A-z ]+' <'\"'> 
    number = #'\\d+'
    boolean = 'true' | 'false'
    nil = 'nil'
    return = <'^'>
    param = identifier <':'> <w> expr
    code-block = <'['> code-block-params <w>? expr <w>? <']'>
    code-block-params = (<w?> (<':'> #'[A-z]+' <w>?)* <'|'>) | <w>?
    binary-identifier = #'[+/\\*~<>=@%|&?!,]+'
    locals = <'|'> <w>? identifier? (<w> identifier)* <w>? <'|'>
    method-definition = expr <w>? <'>>'> <w>? identifier <w> locals <w> (expr <'.'>)*
    w = #'( |\n)+'
   "))
