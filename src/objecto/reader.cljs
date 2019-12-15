(ns objecto.reader
  (:require [instaparse.core :as insta]))

(def read
  (insta/parser
   "<start> = <w>? (top | top <'.'> (<w> top <'.'>)*) <w>?
    <top> = method-definition | expr | comment
    <expr> = assignment | unary-message | cascaded-message | keyword-message | bin-or-value | return-expr
    return-expr = <return> <w>? expr
    <bin-or-value> = binary-parens-message | binary-message | value
    assignment = identifier <w> <':='> <w> expr
    <message> = value | unary-message | binary-parens-message | binary-message 
    keyword-message = message (<w> param)+
    cascaded-message = message <w> cascade-stmt (<';'> <w> cascade-stmt)*
    cascade-stmt = param (<w> param)*
    unary-message = (value | unary-message) <w> identifier
    <binary-parens-message> = <'('> binary-message <')'>
    binary-message = message <w> binary-identifier <w> (value | unary-message | binary-parens-message)
    <value> = (identifier | character | string | number | boolean | nil | symbol | code-block) <(<w> comment)>?
    array = <'#('> (<w>? value <w>?) * <') '> (* need to finish adding *)
    identifier = #'[A-z]+'
    symbol = bare-symbol | quoted-symbol
    <bare-symbol> = <'#'> #'[A-z]+'
    <quoted-symbol> = <\"#'\"> #'[A-z ]+' <\"'\">
    string = <\"'\"> #'[A-z ]+' <\"'\">
    comment = <'\"'> #'([^\"]|\\n)+' <'\"'> 
    number = #'-?\\d+(\\.\\d+)?'
    character = <'$'> #'[A-z]'
    boolean = 'true' | 'false'
    nil = 'nil'
    return = <'^'>
    param = identifier <':'> <w> expr
    code-block = <'['> code-block-params <w>? (expr <'.'> <w>)* expr <w>? <']'>
    code-block-params = (<w?> (<':'> #'[A-z]+' <w>?)+ <'|'>) | <w>?
    binary-identifier = #'[+/\\*~<>=@%&?!,]+'
    locals = <'|'> <w>? identifier? (<w> identifier)* <w>? <'|'>
    method-definition = expr <w>? <'>>'> <w>? identifier <(<w> comment)>? <w> locals <w> (expr <'.'> <w>?)* (expr <'.'>? <w>?)
    w = #'( |\n)+'
   "))