// Compiled by ClojureScript 1.10.520 {}
goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26621 = arguments.length;
var i__4731__auto___26622 = (0);
while(true){
if((i__4731__auto___26622 < len__4730__auto___26621)){
args__4736__auto__.push((arguments[i__4731__auto___26622]));

var G__26623 = (i__4731__auto___26622 + (1));
i__4731__auto___26622 = G__26623;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.call(null,cljs.core.str,message);
throw text;
});

instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq26620){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26620));
});

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26625 = arguments.length;
var i__4731__auto___26626 = (0);
while(true){
if((i__4731__auto___26626 < len__4730__auto___26625)){
args__4736__auto__.push((arguments[i__4731__auto___26626]));

var G__26627 = (i__4731__auto___26626 + (1));
i__4731__auto___26626 = G__26627;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.call(null,cljs.core.str,message);
throw text;
});

instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq26624){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26624));
});

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__26628 = "";
var G__26628__$1 = (cljs.core.truth_(re.ignoreCase)?[G__26628,"i"].join(''):G__26628);
var G__26628__$2 = (cljs.core.truth_(re.multiline)?[G__26628__$1,"m"].join(''):G__26628__$1);
if(cljs.core.truth_(re.unicode)){
return [G__26628__$2,"u"].join('');
} else {
return G__26628__$2;
}
});

//# sourceMappingURL=util.js.map?rel=1576361227001
