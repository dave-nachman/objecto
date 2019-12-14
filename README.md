# objecto

Objecto is a tiny, incomplete interpreted implementation of [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk) written in Clojurescript.

My goal for this project was to learn more about Smalltalk through implementing it, as well as practice writing an intepreter in Clojure(script).

Along with the interpreter is a simple web app REPL.

## Approach

In traditional lisp fashion, objecto implements *read* and *eval* functions, forming the building blocks of the read/eval/print/loop formed by the web app REPL.

The reader is implemented using the [instaparse](https://github.com/Engelberg/instaparse) parsing library.