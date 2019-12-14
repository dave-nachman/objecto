// Compiled by ClojureScript 1.10.520 {}
goog.provide('objecto.reader');
goog.require('cljs.core');
goog.require('instaparse.core');
objecto.reader.read = instaparse.core.parser.call(null,"<start> = <w>? (top | top <'.'> (<w> top <'.'>)*) <w>?\n    <top> = expr | assignment | method-definition | comment\n    <expr> = unary-message | keyword-message | bin-or-value | return-expr | cascaded-message\n    return-expr = <return> <w>? expr\n    <bin-or-value> = binary-message | value\n    assignment = identifier <w> <':='> <w> expr\n    keyword-message = (value | unary-message | binary-message) (<w> param)+\n    cascaded-message = (value | unary-message | binary-message) <w> cascade-stmt (<';'> <w> cascade-stmt)*\n    cascade-stmt = param (<w> param)*\n    unary-message = (value | unary-message) <w> identifier\n    binary-message = (value | unary-message | binary-message) <w> binary-identifier <w> (value | unary-message)\n    <value> = (identifier | string | number | boolean | nil | symbol | code-block) <(<w> comment)>?\n    identifier = #'[A-z]+'\n    symbol = bare-symbol | quoted-symbol\n    <bare-symbol> = <'#'> #'[A-z]+'\n    <quoted-symbol> = <\"#'\"> #'[A-z ]+' <\"'\">\n    string = <\"'\"> #'[A-z ]+' <\"'\">\n    comment = <'\"'> #'[A-z ]+' <'\"'> \n    number = #'\\d+'\n    boolean = 'true' | 'false'\n    nil = 'nil'\n    return = <'^'>\n    param = identifier <':'> <w> expr\n    code-block = <'['> code-block-params <w>? expr <w>? <']'>\n    code-block-params = (<w?> (<':'> #'[A-z]+' <w>?)* <'|'>) | <w>?\n    binary-identifier = #'[+/\\*~<>=@%|&?!,]+'\n    locals = <'|'> <w>? identifier? (<w> identifier)* <w>? <'|'>\n    method-definition = expr <w>? <'>>'> <w>? identifier <w> locals <w> (expr <'.'>)*\n    w = #'( |\n)+'\n   ");

//# sourceMappingURL=reader.js.map?rel=1576340585792