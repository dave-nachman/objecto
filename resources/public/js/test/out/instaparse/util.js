// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24646 = arguments.length;
var i__4731__auto___24647 = (0);
while(true){
if((i__4731__auto___24647 < len__4730__auto___24646)){
args__4736__auto__.push((arguments[i__4731__auto___24647]));

var G__24648 = (i__4731__auto___24647 + (1));
i__4731__auto___24647 = G__24648;
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
instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq24645){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24645));
});

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24650 = arguments.length;
var i__4731__auto___24651 = (0);
while(true){
if((i__4731__auto___24651 < len__4730__auto___24650)){
args__4736__auto__.push((arguments[i__4731__auto___24651]));

var G__24652 = (i__4731__auto___24651 + (1));
i__4731__auto___24651 = G__24652;
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
instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq24649){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24649));
});

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__24653 = "";
var G__24653__$1 = (cljs.core.truth_(re.ignoreCase)?[G__24653,"i"].join(''):G__24653);
var G__24653__$2 = (cljs.core.truth_(re.multiline)?[G__24653__$1,"m"].join(''):G__24653__$1);
if(cljs.core.truth_(re.unicode)){
return [G__24653__$2,"u"].join('');
} else {
return G__24653__$2;
}
});
