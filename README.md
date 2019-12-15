# objecto

Objecto is a tiny, WIP interpreted implementation of [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk) written in Clojurescript.

My goal for this project was to learn more about Smalltalk through implementing it, as well as practice writing an intepreter in Clojure(script).

Along with the interpreter is a [hosted web REPL](https://still-brushlands-69617.herokuapp.com/), to allow people to easily try out the language.

## Approach

In traditional lisp fashion, objecto implements *read* and *eval* functions, forming the building blocks of the read/eval/print/loop formed by the web app REPL.

The reader is implemented using the [instaparse](https://github.com/Engelberg/instaparse) parsing library, with the UI implemented using [reagent](https://github.com/reagent-project/reagent)

The book [Pharo By Example](http://books.pharo.org/pharo-by-example/) was very helpful in for understanding and implementing Smalltalk syntax and semantics (Pharo is a modern dialect of Smalltalk). 

## Status

Right now only a subset of Smalltalk is implemented, and even for that subset, more tests should be added to ensure correctness.

- [Incomplete] Pretty printing
- [Incomplete] Class definitions
