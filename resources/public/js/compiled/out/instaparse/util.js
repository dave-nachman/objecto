// Compiled by ClojureScript 1.10.520 {}
goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26623 = arguments.length;
var i__4731__auto___26624 = (0);
while(true){
if((i__4731__auto___26624 < len__4730__auto___26623)){
args__4736__auto__.push((arguments[i__4731__auto___26624]));

var G__26625 = (i__4731__auto___26624 + (1));
i__4731__auto___26624 = G__26625;
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
instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq26622){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26622));
});

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26627 = arguments.length;
var i__4731__auto___26628 = (0);
while(true){
if((i__4731__auto___26628 < len__4730__auto___26627)){
args__4736__auto__.push((arguments[i__4731__auto___26628]));

var G__26629 = (i__4731__auto___26628 + (1));
i__4731__auto___26628 = G__26629;
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
instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq26626){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26626));
});

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__26630 = "";
var G__26630__$1 = (cljs.core.truth_(re.ignoreCase)?[G__26630,"i"].join(''):G__26630);
var G__26630__$2 = (cljs.core.truth_(re.multiline)?[G__26630__$1,"m"].join(''):G__26630__$1);
if(cljs.core.truth_(re.unicode)){
return [G__26630__$2,"u"].join('');
} else {
return G__26630__$2;
}
});

//# sourceMappingURL=util.js.map?rel=1576338709649
