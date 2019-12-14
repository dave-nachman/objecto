// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.core.rrb_vector');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.rrbt');
goog.require('clojure.core.rrb_vector.interop');
/**
 * Concatenates the given vectors in logarithmic time.
 */
clojure.core.rrb_vector.catvec = (function clojure$core$rrb_vector$catvec(var_args){
var G__26929 = arguments.length;
switch (G__26929) {
case 0:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___26931 = arguments.length;
var i__4731__auto___26932 = (0);
while(true){
if((i__4731__auto___26932 < len__4730__auto___26931)){
args_arr__4751__auto__.push((arguments[i__4731__auto___26932]));

var G__26933 = (i__4731__auto___26932 + (1));
i__4731__auto___26932 = G__26933;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1 = (function (v1){
return v1;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3 = (function (v1,v2,v3){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),v3);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4 = (function (v1,v2,v3,v4){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4));
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,v3,v4,vn){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4)),cljs.core.apply.call(null,clojure.core.rrb_vector.catvec,vn));
});

/** @this {Function} */
clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq26924){
var G__26925 = cljs.core.first.call(null,seq26924);
var seq26924__$1 = cljs.core.next.call(null,seq26924);
var G__26926 = cljs.core.first.call(null,seq26924__$1);
var seq26924__$2 = cljs.core.next.call(null,seq26924__$1);
var G__26927 = cljs.core.first.call(null,seq26924__$2);
var seq26924__$3 = cljs.core.next.call(null,seq26924__$2);
var G__26928 = cljs.core.first.call(null,seq26924__$3);
var seq26924__$4 = cljs.core.next.call(null,seq26924__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26925,G__26926,G__26927,G__26928,seq26924__$4);
});

clojure.core.rrb_vector.catvec.cljs$lang$maxFixedArity = (4);

/**
 * Returns a new vector containing the elements of the given vector v
 *   lying between the start (inclusive) and end (exclusive) indices in
 *   logarithmic time. end defaults to end of vector. The resulting
 *   vector shares structure with the original, but does not hold on to
 *   any elements of the original vector lying outside the given index
 *   range.
 */
clojure.core.rrb_vector.subvec = (function clojure$core$rrb_vector$subvec(var_args){
var G__26935 = arguments.length;
switch (G__26935) {
case 2:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,cljs.core.count.call(null,v));
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,end);
});

clojure.core.rrb_vector.subvec.cljs$lang$maxFixedArity = 3;

/**
 * Creates a new vector containing the args.
 */
clojure.core.rrb_vector.vector = (function clojure$core$rrb_vector$vector(var_args){
var G__26943 = arguments.length;
switch (G__26943) {
case 0:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___26950 = arguments.length;
var i__4731__auto___26951 = (0);
while(true){
if((i__4731__auto___26951 < len__4730__auto___26950)){
args_arr__4751__auto__.push((arguments[i__4731__auto___26951]));

var G__26952 = (i__4731__auto___26951 + (1));
i__4731__auto___26951 = G__26952;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0 = (function (){
var arr__26944 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__26944,null,(0)));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__26945 = [null];
(arr__26945[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__26945,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__26946 = [null,null];
(arr__26946[(0)] = x1);

(arr__26946[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__26946,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__26947 = [null,null,null];
(arr__26947[(0)] = x1);

(arr__26947[(1)] = x2);

(arr__26947[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__26947,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__26948 = [null,null,null,null];
(arr__26948[(0)] = x1);

(arr__26948[(1)] = x2);

(arr__26948[(2)] = x3);

(arr__26948[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__26948,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,x3,x4,xn){
return cljs.core.into.call(null,clojure.core.rrb_vector.vector.call(null,x1,x2,x3,x4),xn);
});

/** @this {Function} */
clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq26938){
var G__26939 = cljs.core.first.call(null,seq26938);
var seq26938__$1 = cljs.core.next.call(null,seq26938);
var G__26940 = cljs.core.first.call(null,seq26938__$1);
var seq26938__$2 = cljs.core.next.call(null,seq26938__$1);
var G__26941 = cljs.core.first.call(null,seq26938__$2);
var seq26938__$3 = cljs.core.next.call(null,seq26938__$2);
var G__26942 = cljs.core.first.call(null,seq26938__$3);
var seq26938__$4 = cljs.core.next.call(null,seq26938__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26939,G__26940,G__26941,G__26942,seq26938__$4);
});

clojure.core.rrb_vector.vector.cljs$lang$maxFixedArity = (4);

/**
 * Returns a vector containing the contents of coll.
 * 
 *   If coll is a vector, returns an RRB vector using the internal tree
 *   of coll.
 */
clojure.core.rrb_vector.vec = (function clojure$core$rrb_vector$vec(coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return clojure.core.rrb_vector.rrbt._as_rrbt.call(null,coll);
} else {
return cljs.core.apply.call(null,clojure.core.rrb_vector.vector,coll);
}
});

//# sourceMappingURL=rrb_vector.js.map?rel=1576339899644
