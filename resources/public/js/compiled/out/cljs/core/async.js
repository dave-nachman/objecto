// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35115 = arguments.length;
switch (G__35115) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35116 = (function (f,blockable,meta35117){
this.f = f;
this.blockable = blockable;
this.meta35117 = meta35117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35118,meta35117__$1){
var self__ = this;
var _35118__$1 = this;
return (new cljs.core.async.t_cljs$core$async35116(self__.f,self__.blockable,meta35117__$1));
});

cljs.core.async.t_cljs$core$async35116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35118){
var self__ = this;
var _35118__$1 = this;
return self__.meta35117;
});

cljs.core.async.t_cljs$core$async35116.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35116.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35117","meta35117",1740278159,null)], null);
});

cljs.core.async.t_cljs$core$async35116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35116";

cljs.core.async.t_cljs$core$async35116.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async35116");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35116.
 */
cljs.core.async.__GT_t_cljs$core$async35116 = (function cljs$core$async$__GT_t_cljs$core$async35116(f__$1,blockable__$1,meta35117){
return (new cljs.core.async.t_cljs$core$async35116(f__$1,blockable__$1,meta35117));
});

}

return (new cljs.core.async.t_cljs$core$async35116(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__35122 = arguments.length;
switch (G__35122) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__35125 = arguments.length;
switch (G__35125) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__35128 = arguments.length;
switch (G__35128) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35130 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35130);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35130,ret){
return (function (){
return fn1.call(null,val_35130);
});})(val_35130,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__35132 = arguments.length;
switch (G__35132) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___35134 = n;
var x_35135 = (0);
while(true){
if((x_35135 < n__4607__auto___35134)){
(a[x_35135] = x_35135);

var G__35136 = (x_35135 + (1));
x_35135 = G__35136;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35137 = (function (flag,meta35138){
this.flag = flag;
this.meta35138 = meta35138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35139,meta35138__$1){
var self__ = this;
var _35139__$1 = this;
return (new cljs.core.async.t_cljs$core$async35137(self__.flag,meta35138__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35139){
var self__ = this;
var _35139__$1 = this;
return self__.meta35138;
});})(flag))
;

cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35137.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35138","meta35138",570850867,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35137";

cljs.core.async.t_cljs$core$async35137.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async35137");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35137.
 */
cljs.core.async.__GT_t_cljs$core$async35137 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35137(flag__$1,meta35138){
return (new cljs.core.async.t_cljs$core$async35137(flag__$1,meta35138));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35137(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35140 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35140 = (function (flag,cb,meta35141){
this.flag = flag;
this.cb = cb;
this.meta35141 = meta35141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35142,meta35141__$1){
var self__ = this;
var _35142__$1 = this;
return (new cljs.core.async.t_cljs$core$async35140(self__.flag,self__.cb,meta35141__$1));
});

cljs.core.async.t_cljs$core$async35140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35142){
var self__ = this;
var _35142__$1 = this;
return self__.meta35141;
});

cljs.core.async.t_cljs$core$async35140.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35140.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35141","meta35141",1793721181,null)], null);
});

cljs.core.async.t_cljs$core$async35140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35140";

cljs.core.async.t_cljs$core$async35140.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async35140");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35140.
 */
cljs.core.async.__GT_t_cljs$core$async35140 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35140(flag__$1,cb__$1,meta35141){
return (new cljs.core.async.t_cljs$core$async35140(flag__$1,cb__$1,meta35141));
});

}

return (new cljs.core.async.t_cljs$core$async35140(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35143_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35143_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35144_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35144_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35145 = (i + (1));
i = G__35145;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35151 = arguments.length;
var i__4731__auto___35152 = (0);
while(true){
if((i__4731__auto___35152 < len__4730__auto___35151)){
args__4736__auto__.push((arguments[i__4731__auto___35152]));

var G__35153 = (i__4731__auto___35152 + (1));
i__4731__auto___35152 = G__35153;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35148){
var map__35149 = p__35148;
var map__35149__$1 = (((((!((map__35149 == null))))?(((((map__35149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35149):map__35149);
var opts = map__35149__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35146){
var G__35147 = cljs.core.first.call(null,seq35146);
var seq35146__$1 = cljs.core.next.call(null,seq35146);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35147,seq35146__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__35155 = arguments.length;
switch (G__35155) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35055__auto___35201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___35201){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___35201){
return (function (state_35179){
var state_val_35180 = (state_35179[(1)]);
if((state_val_35180 === (7))){
var inst_35175 = (state_35179[(2)]);
var state_35179__$1 = state_35179;
var statearr_35181_35202 = state_35179__$1;
(statearr_35181_35202[(2)] = inst_35175);

(statearr_35181_35202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35180 === (1))){
var state_35179__$1 = state_35179;
var statearr_35182_35203 = state_35179__$1;
(statearr_35182_35203[(2)] = null);

(statearr_35182_35203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35180 === (4))){
var inst_35158 = (state_35179[(7)]);
var inst_35158__$1 = (state_35179[(2)]);
var inst_35159 = (inst_35158__$1 == null);
var state_35179__$1 = (function (){var statearr_35183 = state_35179;
(statearr_35183[(7)] = inst_35158__$1);

return statearr_35183;
})();
if(cljs.core.truth_(inst_35159)){
var statearr_35184_35204 = state_35179__$1;
(statearr_35184_35204[(1)] = (5));

} else {
var statearr_35185_35205 = state_35179__$1;
(statearr_35185_35205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35180 === (13))){
var state_35179__$1 = state_35179;
var statearr_35186_35206 = state_35179__$1;
(statearr_35186_35206[(2)] = null);

(statearr_35186_35206[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35180 === (6))){
var inst_35158 = (state_35179[(7)]);
var state_35179__$1 = state_35179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35179__$1,(11),to,inst_35158);
} else {
if((state_val_35180 === (3))){
var inst_35177 = (state_35179[(2)]);
var state_35179__$1 = state_35179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35179__$1,inst_35177);
} else {
if((state_val_35180 === (12))){
var state_35179__$1 = state_35179;
var statearr_35187_35207 = state_35179__$1;
(statearr_35187_35207[(2)] = null);

(statearr_35187_35207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35180 === (2))){
var state_35179__$1 = state_35179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35179__$1,(4),from);
} else {
if((state_val_35180 === (11))){
var inst_35168 = (state_35179[(2)]);
var state_35179__$1 = state_35179;
if(cljs.core.truth_(inst_35168)){
var statearr_35188_35208 = state_35179__$1;
(statearr_35188_35208[(1)] = (12));

} else {
var statearr_35189_35209 = state_35179__$1;
(statearr_35189_35209[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35180 === (9))){
var state_35179__$1 = state_35179;
var statearr_35190_35210 = state_35179__$1;
(statearr_35190_35210[(2)] = null);

(statearr_35190_35210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35180 === (5))){
var state_35179__$1 = state_35179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35191_35211 = state_35179__$1;
(statearr_35191_35211[(1)] = (8));

} else {
var statearr_35192_35212 = state_35179__$1;
(statearr_35192_35212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35180 === (14))){
var inst_35173 = (state_35179[(2)]);
var state_35179__$1 = state_35179;
var statearr_35193_35213 = state_35179__$1;
(statearr_35193_35213[(2)] = inst_35173);

(statearr_35193_35213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35180 === (10))){
var inst_35165 = (state_35179[(2)]);
var state_35179__$1 = state_35179;
var statearr_35194_35214 = state_35179__$1;
(statearr_35194_35214[(2)] = inst_35165);

(statearr_35194_35214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35180 === (8))){
var inst_35162 = cljs.core.async.close_BANG_.call(null,to);
var state_35179__$1 = state_35179;
var statearr_35195_35215 = state_35179__$1;
(statearr_35195_35215[(2)] = inst_35162);

(statearr_35195_35215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto___35201))
;
return ((function (switch__34960__auto__,c__35055__auto___35201){
return (function() {
var cljs$core$async$state_machine__34961__auto__ = null;
var cljs$core$async$state_machine__34961__auto____0 = (function (){
var statearr_35196 = [null,null,null,null,null,null,null,null];
(statearr_35196[(0)] = cljs$core$async$state_machine__34961__auto__);

(statearr_35196[(1)] = (1));

return statearr_35196;
});
var cljs$core$async$state_machine__34961__auto____1 = (function (state_35179){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_35179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e35197){if((e35197 instanceof Object)){
var ex__34964__auto__ = e35197;
var statearr_35198_35216 = state_35179;
(statearr_35198_35216[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35217 = state_35179;
state_35179 = G__35217;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$state_machine__34961__auto__ = function(state_35179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34961__auto____1.call(this,state_35179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34961__auto____0;
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34961__auto____1;
return cljs$core$async$state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___35201))
})();
var state__35057__auto__ = (function (){var statearr_35199 = f__35056__auto__.call(null);
(statearr_35199[(6)] = c__35055__auto___35201);

return statearr_35199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___35201))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__35218){
var vec__35219 = p__35218;
var v = cljs.core.nth.call(null,vec__35219,(0),null);
var p = cljs.core.nth.call(null,vec__35219,(1),null);
var job = vec__35219;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35055__auto___35390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___35390,res,vec__35219,v,p,job,jobs,results){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___35390,res,vec__35219,v,p,job,jobs,results){
return (function (state_35226){
var state_val_35227 = (state_35226[(1)]);
if((state_val_35227 === (1))){
var state_35226__$1 = state_35226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35226__$1,(2),res,v);
} else {
if((state_val_35227 === (2))){
var inst_35223 = (state_35226[(2)]);
var inst_35224 = cljs.core.async.close_BANG_.call(null,res);
var state_35226__$1 = (function (){var statearr_35228 = state_35226;
(statearr_35228[(7)] = inst_35223);

return statearr_35228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35226__$1,inst_35224);
} else {
return null;
}
}
});})(c__35055__auto___35390,res,vec__35219,v,p,job,jobs,results))
;
return ((function (switch__34960__auto__,c__35055__auto___35390,res,vec__35219,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0 = (function (){
var statearr_35229 = [null,null,null,null,null,null,null,null];
(statearr_35229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__);

(statearr_35229[(1)] = (1));

return statearr_35229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1 = (function (state_35226){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_35226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e35230){if((e35230 instanceof Object)){
var ex__34964__auto__ = e35230;
var statearr_35231_35391 = state_35226;
(statearr_35231_35391[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35392 = state_35226;
state_35226 = G__35392;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__ = function(state_35226){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1.call(this,state_35226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___35390,res,vec__35219,v,p,job,jobs,results))
})();
var state__35057__auto__ = (function (){var statearr_35232 = f__35056__auto__.call(null);
(statearr_35232[(6)] = c__35055__auto___35390);

return statearr_35232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___35390,res,vec__35219,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35233){
var vec__35234 = p__35233;
var v = cljs.core.nth.call(null,vec__35234,(0),null);
var p = cljs.core.nth.call(null,vec__35234,(1),null);
var job = vec__35234;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___35393 = n;
var __35394 = (0);
while(true){
if((__35394 < n__4607__auto___35393)){
var G__35237_35395 = type;
var G__35237_35396__$1 = (((G__35237_35395 instanceof cljs.core.Keyword))?G__35237_35395.fqn:null);
switch (G__35237_35396__$1) {
case "compute":
var c__35055__auto___35398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35394,c__35055__auto___35398,G__35237_35395,G__35237_35396__$1,n__4607__auto___35393,jobs,results,process,async){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (__35394,c__35055__auto___35398,G__35237_35395,G__35237_35396__$1,n__4607__auto___35393,jobs,results,process,async){
return (function (state_35250){
var state_val_35251 = (state_35250[(1)]);
if((state_val_35251 === (1))){
var state_35250__$1 = state_35250;
var statearr_35252_35399 = state_35250__$1;
(statearr_35252_35399[(2)] = null);

(statearr_35252_35399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (2))){
var state_35250__$1 = state_35250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35250__$1,(4),jobs);
} else {
if((state_val_35251 === (3))){
var inst_35248 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35250__$1,inst_35248);
} else {
if((state_val_35251 === (4))){
var inst_35240 = (state_35250[(2)]);
var inst_35241 = process.call(null,inst_35240);
var state_35250__$1 = state_35250;
if(cljs.core.truth_(inst_35241)){
var statearr_35253_35400 = state_35250__$1;
(statearr_35253_35400[(1)] = (5));

} else {
var statearr_35254_35401 = state_35250__$1;
(statearr_35254_35401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (5))){
var state_35250__$1 = state_35250;
var statearr_35255_35402 = state_35250__$1;
(statearr_35255_35402[(2)] = null);

(statearr_35255_35402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (6))){
var state_35250__$1 = state_35250;
var statearr_35256_35403 = state_35250__$1;
(statearr_35256_35403[(2)] = null);

(statearr_35256_35403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (7))){
var inst_35246 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35257_35404 = state_35250__$1;
(statearr_35257_35404[(2)] = inst_35246);

(statearr_35257_35404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35394,c__35055__auto___35398,G__35237_35395,G__35237_35396__$1,n__4607__auto___35393,jobs,results,process,async))
;
return ((function (__35394,switch__34960__auto__,c__35055__auto___35398,G__35237_35395,G__35237_35396__$1,n__4607__auto___35393,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0 = (function (){
var statearr_35258 = [null,null,null,null,null,null,null];
(statearr_35258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__);

(statearr_35258[(1)] = (1));

return statearr_35258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1 = (function (state_35250){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_35250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e35259){if((e35259 instanceof Object)){
var ex__34964__auto__ = e35259;
var statearr_35260_35405 = state_35250;
(statearr_35260_35405[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35406 = state_35250;
state_35250 = G__35406;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__ = function(state_35250){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1.call(this,state_35250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__;
})()
;})(__35394,switch__34960__auto__,c__35055__auto___35398,G__35237_35395,G__35237_35396__$1,n__4607__auto___35393,jobs,results,process,async))
})();
var state__35057__auto__ = (function (){var statearr_35261 = f__35056__auto__.call(null);
(statearr_35261[(6)] = c__35055__auto___35398);

return statearr_35261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(__35394,c__35055__auto___35398,G__35237_35395,G__35237_35396__$1,n__4607__auto___35393,jobs,results,process,async))
);


break;
case "async":
var c__35055__auto___35407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35394,c__35055__auto___35407,G__35237_35395,G__35237_35396__$1,n__4607__auto___35393,jobs,results,process,async){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (__35394,c__35055__auto___35407,G__35237_35395,G__35237_35396__$1,n__4607__auto___35393,jobs,results,process,async){
return (function (state_35274){
var state_val_35275 = (state_35274[(1)]);
if((state_val_35275 === (1))){
var state_35274__$1 = state_35274;
var statearr_35276_35408 = state_35274__$1;
(statearr_35276_35408[(2)] = null);

(statearr_35276_35408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (2))){
var state_35274__$1 = state_35274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35274__$1,(4),jobs);
} else {
if((state_val_35275 === (3))){
var inst_35272 = (state_35274[(2)]);
var state_35274__$1 = state_35274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35274__$1,inst_35272);
} else {
if((state_val_35275 === (4))){
var inst_35264 = (state_35274[(2)]);
var inst_35265 = async.call(null,inst_35264);
var state_35274__$1 = state_35274;
if(cljs.core.truth_(inst_35265)){
var statearr_35277_35409 = state_35274__$1;
(statearr_35277_35409[(1)] = (5));

} else {
var statearr_35278_35410 = state_35274__$1;
(statearr_35278_35410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (5))){
var state_35274__$1 = state_35274;
var statearr_35279_35411 = state_35274__$1;
(statearr_35279_35411[(2)] = null);

(statearr_35279_35411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (6))){
var state_35274__$1 = state_35274;
var statearr_35280_35412 = state_35274__$1;
(statearr_35280_35412[(2)] = null);

(statearr_35280_35412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (7))){
var inst_35270 = (state_35274[(2)]);
var state_35274__$1 = state_35274;
var statearr_35281_35413 = state_35274__$1;
(statearr_35281_35413[(2)] = inst_35270);

(statearr_35281_35413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35394,c__35055__auto___35407,G__35237_35395,G__35237_35396__$1,n__4607__auto___35393,jobs,results,process,async))
;
return ((function (__35394,switch__34960__auto__,c__35055__auto___35407,G__35237_35395,G__35237_35396__$1,n__4607__auto___35393,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0 = (function (){
var statearr_35282 = [null,null,null,null,null,null,null];
(statearr_35282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__);

(statearr_35282[(1)] = (1));

return statearr_35282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1 = (function (state_35274){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_35274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e35283){if((e35283 instanceof Object)){
var ex__34964__auto__ = e35283;
var statearr_35284_35414 = state_35274;
(statearr_35284_35414[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35415 = state_35274;
state_35274 = G__35415;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__ = function(state_35274){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1.call(this,state_35274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__;
})()
;})(__35394,switch__34960__auto__,c__35055__auto___35407,G__35237_35395,G__35237_35396__$1,n__4607__auto___35393,jobs,results,process,async))
})();
var state__35057__auto__ = (function (){var statearr_35285 = f__35056__auto__.call(null);
(statearr_35285[(6)] = c__35055__auto___35407);

return statearr_35285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(__35394,c__35055__auto___35407,G__35237_35395,G__35237_35396__$1,n__4607__auto___35393,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35237_35396__$1)].join('')));

}

var G__35416 = (__35394 + (1));
__35394 = G__35416;
continue;
} else {
}
break;
}

var c__35055__auto___35417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___35417,jobs,results,process,async){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___35417,jobs,results,process,async){
return (function (state_35307){
var state_val_35308 = (state_35307[(1)]);
if((state_val_35308 === (7))){
var inst_35303 = (state_35307[(2)]);
var state_35307__$1 = state_35307;
var statearr_35309_35418 = state_35307__$1;
(statearr_35309_35418[(2)] = inst_35303);

(statearr_35309_35418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (1))){
var state_35307__$1 = state_35307;
var statearr_35310_35419 = state_35307__$1;
(statearr_35310_35419[(2)] = null);

(statearr_35310_35419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (4))){
var inst_35288 = (state_35307[(7)]);
var inst_35288__$1 = (state_35307[(2)]);
var inst_35289 = (inst_35288__$1 == null);
var state_35307__$1 = (function (){var statearr_35311 = state_35307;
(statearr_35311[(7)] = inst_35288__$1);

return statearr_35311;
})();
if(cljs.core.truth_(inst_35289)){
var statearr_35312_35420 = state_35307__$1;
(statearr_35312_35420[(1)] = (5));

} else {
var statearr_35313_35421 = state_35307__$1;
(statearr_35313_35421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (6))){
var inst_35293 = (state_35307[(8)]);
var inst_35288 = (state_35307[(7)]);
var inst_35293__$1 = cljs.core.async.chan.call(null,(1));
var inst_35294 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35295 = [inst_35288,inst_35293__$1];
var inst_35296 = (new cljs.core.PersistentVector(null,2,(5),inst_35294,inst_35295,null));
var state_35307__$1 = (function (){var statearr_35314 = state_35307;
(statearr_35314[(8)] = inst_35293__$1);

return statearr_35314;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35307__$1,(8),jobs,inst_35296);
} else {
if((state_val_35308 === (3))){
var inst_35305 = (state_35307[(2)]);
var state_35307__$1 = state_35307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35307__$1,inst_35305);
} else {
if((state_val_35308 === (2))){
var state_35307__$1 = state_35307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35307__$1,(4),from);
} else {
if((state_val_35308 === (9))){
var inst_35300 = (state_35307[(2)]);
var state_35307__$1 = (function (){var statearr_35315 = state_35307;
(statearr_35315[(9)] = inst_35300);

return statearr_35315;
})();
var statearr_35316_35422 = state_35307__$1;
(statearr_35316_35422[(2)] = null);

(statearr_35316_35422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (5))){
var inst_35291 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35307__$1 = state_35307;
var statearr_35317_35423 = state_35307__$1;
(statearr_35317_35423[(2)] = inst_35291);

(statearr_35317_35423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (8))){
var inst_35293 = (state_35307[(8)]);
var inst_35298 = (state_35307[(2)]);
var state_35307__$1 = (function (){var statearr_35318 = state_35307;
(statearr_35318[(10)] = inst_35298);

return statearr_35318;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35307__$1,(9),results,inst_35293);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__35055__auto___35417,jobs,results,process,async))
;
return ((function (switch__34960__auto__,c__35055__auto___35417,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0 = (function (){
var statearr_35319 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__);

(statearr_35319[(1)] = (1));

return statearr_35319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1 = (function (state_35307){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_35307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e35320){if((e35320 instanceof Object)){
var ex__34964__auto__ = e35320;
var statearr_35321_35424 = state_35307;
(statearr_35321_35424[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35425 = state_35307;
state_35307 = G__35425;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__ = function(state_35307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1.call(this,state_35307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___35417,jobs,results,process,async))
})();
var state__35057__auto__ = (function (){var statearr_35322 = f__35056__auto__.call(null);
(statearr_35322[(6)] = c__35055__auto___35417);

return statearr_35322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___35417,jobs,results,process,async))
);


var c__35055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto__,jobs,results,process,async){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto__,jobs,results,process,async){
return (function (state_35360){
var state_val_35361 = (state_35360[(1)]);
if((state_val_35361 === (7))){
var inst_35356 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35362_35426 = state_35360__$1;
(statearr_35362_35426[(2)] = inst_35356);

(statearr_35362_35426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (20))){
var state_35360__$1 = state_35360;
var statearr_35363_35427 = state_35360__$1;
(statearr_35363_35427[(2)] = null);

(statearr_35363_35427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (1))){
var state_35360__$1 = state_35360;
var statearr_35364_35428 = state_35360__$1;
(statearr_35364_35428[(2)] = null);

(statearr_35364_35428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (4))){
var inst_35325 = (state_35360[(7)]);
var inst_35325__$1 = (state_35360[(2)]);
var inst_35326 = (inst_35325__$1 == null);
var state_35360__$1 = (function (){var statearr_35365 = state_35360;
(statearr_35365[(7)] = inst_35325__$1);

return statearr_35365;
})();
if(cljs.core.truth_(inst_35326)){
var statearr_35366_35429 = state_35360__$1;
(statearr_35366_35429[(1)] = (5));

} else {
var statearr_35367_35430 = state_35360__$1;
(statearr_35367_35430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (15))){
var inst_35338 = (state_35360[(8)]);
var state_35360__$1 = state_35360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35360__$1,(18),to,inst_35338);
} else {
if((state_val_35361 === (21))){
var inst_35351 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35368_35431 = state_35360__$1;
(statearr_35368_35431[(2)] = inst_35351);

(statearr_35368_35431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (13))){
var inst_35353 = (state_35360[(2)]);
var state_35360__$1 = (function (){var statearr_35369 = state_35360;
(statearr_35369[(9)] = inst_35353);

return statearr_35369;
})();
var statearr_35370_35432 = state_35360__$1;
(statearr_35370_35432[(2)] = null);

(statearr_35370_35432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (6))){
var inst_35325 = (state_35360[(7)]);
var state_35360__$1 = state_35360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35360__$1,(11),inst_35325);
} else {
if((state_val_35361 === (17))){
var inst_35346 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
if(cljs.core.truth_(inst_35346)){
var statearr_35371_35433 = state_35360__$1;
(statearr_35371_35433[(1)] = (19));

} else {
var statearr_35372_35434 = state_35360__$1;
(statearr_35372_35434[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (3))){
var inst_35358 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35360__$1,inst_35358);
} else {
if((state_val_35361 === (12))){
var inst_35335 = (state_35360[(10)]);
var state_35360__$1 = state_35360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35360__$1,(14),inst_35335);
} else {
if((state_val_35361 === (2))){
var state_35360__$1 = state_35360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35360__$1,(4),results);
} else {
if((state_val_35361 === (19))){
var state_35360__$1 = state_35360;
var statearr_35373_35435 = state_35360__$1;
(statearr_35373_35435[(2)] = null);

(statearr_35373_35435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (11))){
var inst_35335 = (state_35360[(2)]);
var state_35360__$1 = (function (){var statearr_35374 = state_35360;
(statearr_35374[(10)] = inst_35335);

return statearr_35374;
})();
var statearr_35375_35436 = state_35360__$1;
(statearr_35375_35436[(2)] = null);

(statearr_35375_35436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (9))){
var state_35360__$1 = state_35360;
var statearr_35376_35437 = state_35360__$1;
(statearr_35376_35437[(2)] = null);

(statearr_35376_35437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (5))){
var state_35360__$1 = state_35360;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35377_35438 = state_35360__$1;
(statearr_35377_35438[(1)] = (8));

} else {
var statearr_35378_35439 = state_35360__$1;
(statearr_35378_35439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (14))){
var inst_35340 = (state_35360[(11)]);
var inst_35338 = (state_35360[(8)]);
var inst_35338__$1 = (state_35360[(2)]);
var inst_35339 = (inst_35338__$1 == null);
var inst_35340__$1 = cljs.core.not.call(null,inst_35339);
var state_35360__$1 = (function (){var statearr_35379 = state_35360;
(statearr_35379[(11)] = inst_35340__$1);

(statearr_35379[(8)] = inst_35338__$1);

return statearr_35379;
})();
if(inst_35340__$1){
var statearr_35380_35440 = state_35360__$1;
(statearr_35380_35440[(1)] = (15));

} else {
var statearr_35381_35441 = state_35360__$1;
(statearr_35381_35441[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (16))){
var inst_35340 = (state_35360[(11)]);
var state_35360__$1 = state_35360;
var statearr_35382_35442 = state_35360__$1;
(statearr_35382_35442[(2)] = inst_35340);

(statearr_35382_35442[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (10))){
var inst_35332 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35383_35443 = state_35360__$1;
(statearr_35383_35443[(2)] = inst_35332);

(statearr_35383_35443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (18))){
var inst_35343 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35384_35444 = state_35360__$1;
(statearr_35384_35444[(2)] = inst_35343);

(statearr_35384_35444[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (8))){
var inst_35329 = cljs.core.async.close_BANG_.call(null,to);
var state_35360__$1 = state_35360;
var statearr_35385_35445 = state_35360__$1;
(statearr_35385_35445[(2)] = inst_35329);

(statearr_35385_35445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto__,jobs,results,process,async))
;
return ((function (switch__34960__auto__,c__35055__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0 = (function (){
var statearr_35386 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35386[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__);

(statearr_35386[(1)] = (1));

return statearr_35386;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1 = (function (state_35360){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_35360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e35387){if((e35387 instanceof Object)){
var ex__34964__auto__ = e35387;
var statearr_35388_35446 = state_35360;
(statearr_35388_35446[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35447 = state_35360;
state_35360 = G__35447;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__ = function(state_35360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1.call(this,state_35360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34961__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto__,jobs,results,process,async))
})();
var state__35057__auto__ = (function (){var statearr_35389 = f__35056__auto__.call(null);
(statearr_35389[(6)] = c__35055__auto__);

return statearr_35389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto__,jobs,results,process,async))
);

return c__35055__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__35449 = arguments.length;
switch (G__35449) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__35452 = arguments.length;
switch (G__35452) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__35455 = arguments.length;
switch (G__35455) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35055__auto___35504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___35504,tc,fc){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___35504,tc,fc){
return (function (state_35481){
var state_val_35482 = (state_35481[(1)]);
if((state_val_35482 === (7))){
var inst_35477 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
var statearr_35483_35505 = state_35481__$1;
(statearr_35483_35505[(2)] = inst_35477);

(statearr_35483_35505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (1))){
var state_35481__$1 = state_35481;
var statearr_35484_35506 = state_35481__$1;
(statearr_35484_35506[(2)] = null);

(statearr_35484_35506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (4))){
var inst_35458 = (state_35481[(7)]);
var inst_35458__$1 = (state_35481[(2)]);
var inst_35459 = (inst_35458__$1 == null);
var state_35481__$1 = (function (){var statearr_35485 = state_35481;
(statearr_35485[(7)] = inst_35458__$1);

return statearr_35485;
})();
if(cljs.core.truth_(inst_35459)){
var statearr_35486_35507 = state_35481__$1;
(statearr_35486_35507[(1)] = (5));

} else {
var statearr_35487_35508 = state_35481__$1;
(statearr_35487_35508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (13))){
var state_35481__$1 = state_35481;
var statearr_35488_35509 = state_35481__$1;
(statearr_35488_35509[(2)] = null);

(statearr_35488_35509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (6))){
var inst_35458 = (state_35481[(7)]);
var inst_35464 = p.call(null,inst_35458);
var state_35481__$1 = state_35481;
if(cljs.core.truth_(inst_35464)){
var statearr_35489_35510 = state_35481__$1;
(statearr_35489_35510[(1)] = (9));

} else {
var statearr_35490_35511 = state_35481__$1;
(statearr_35490_35511[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (3))){
var inst_35479 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35481__$1,inst_35479);
} else {
if((state_val_35482 === (12))){
var state_35481__$1 = state_35481;
var statearr_35491_35512 = state_35481__$1;
(statearr_35491_35512[(2)] = null);

(statearr_35491_35512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (2))){
var state_35481__$1 = state_35481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35481__$1,(4),ch);
} else {
if((state_val_35482 === (11))){
var inst_35458 = (state_35481[(7)]);
var inst_35468 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35481__$1,(8),inst_35468,inst_35458);
} else {
if((state_val_35482 === (9))){
var state_35481__$1 = state_35481;
var statearr_35492_35513 = state_35481__$1;
(statearr_35492_35513[(2)] = tc);

(statearr_35492_35513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (5))){
var inst_35461 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35462 = cljs.core.async.close_BANG_.call(null,fc);
var state_35481__$1 = (function (){var statearr_35493 = state_35481;
(statearr_35493[(8)] = inst_35461);

return statearr_35493;
})();
var statearr_35494_35514 = state_35481__$1;
(statearr_35494_35514[(2)] = inst_35462);

(statearr_35494_35514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (14))){
var inst_35475 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
var statearr_35495_35515 = state_35481__$1;
(statearr_35495_35515[(2)] = inst_35475);

(statearr_35495_35515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (10))){
var state_35481__$1 = state_35481;
var statearr_35496_35516 = state_35481__$1;
(statearr_35496_35516[(2)] = fc);

(statearr_35496_35516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (8))){
var inst_35470 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
if(cljs.core.truth_(inst_35470)){
var statearr_35497_35517 = state_35481__$1;
(statearr_35497_35517[(1)] = (12));

} else {
var statearr_35498_35518 = state_35481__$1;
(statearr_35498_35518[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto___35504,tc,fc))
;
return ((function (switch__34960__auto__,c__35055__auto___35504,tc,fc){
return (function() {
var cljs$core$async$state_machine__34961__auto__ = null;
var cljs$core$async$state_machine__34961__auto____0 = (function (){
var statearr_35499 = [null,null,null,null,null,null,null,null,null];
(statearr_35499[(0)] = cljs$core$async$state_machine__34961__auto__);

(statearr_35499[(1)] = (1));

return statearr_35499;
});
var cljs$core$async$state_machine__34961__auto____1 = (function (state_35481){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_35481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e35500){if((e35500 instanceof Object)){
var ex__34964__auto__ = e35500;
var statearr_35501_35519 = state_35481;
(statearr_35501_35519[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35520 = state_35481;
state_35481 = G__35520;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$state_machine__34961__auto__ = function(state_35481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34961__auto____1.call(this,state_35481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34961__auto____0;
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34961__auto____1;
return cljs$core$async$state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___35504,tc,fc))
})();
var state__35057__auto__ = (function (){var statearr_35502 = f__35056__auto__.call(null);
(statearr_35502[(6)] = c__35055__auto___35504);

return statearr_35502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___35504,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto__){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto__){
return (function (state_35541){
var state_val_35542 = (state_35541[(1)]);
if((state_val_35542 === (7))){
var inst_35537 = (state_35541[(2)]);
var state_35541__$1 = state_35541;
var statearr_35543_35561 = state_35541__$1;
(statearr_35543_35561[(2)] = inst_35537);

(statearr_35543_35561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (1))){
var inst_35521 = init;
var state_35541__$1 = (function (){var statearr_35544 = state_35541;
(statearr_35544[(7)] = inst_35521);

return statearr_35544;
})();
var statearr_35545_35562 = state_35541__$1;
(statearr_35545_35562[(2)] = null);

(statearr_35545_35562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (4))){
var inst_35524 = (state_35541[(8)]);
var inst_35524__$1 = (state_35541[(2)]);
var inst_35525 = (inst_35524__$1 == null);
var state_35541__$1 = (function (){var statearr_35546 = state_35541;
(statearr_35546[(8)] = inst_35524__$1);

return statearr_35546;
})();
if(cljs.core.truth_(inst_35525)){
var statearr_35547_35563 = state_35541__$1;
(statearr_35547_35563[(1)] = (5));

} else {
var statearr_35548_35564 = state_35541__$1;
(statearr_35548_35564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (6))){
var inst_35524 = (state_35541[(8)]);
var inst_35521 = (state_35541[(7)]);
var inst_35528 = (state_35541[(9)]);
var inst_35528__$1 = f.call(null,inst_35521,inst_35524);
var inst_35529 = cljs.core.reduced_QMARK_.call(null,inst_35528__$1);
var state_35541__$1 = (function (){var statearr_35549 = state_35541;
(statearr_35549[(9)] = inst_35528__$1);

return statearr_35549;
})();
if(inst_35529){
var statearr_35550_35565 = state_35541__$1;
(statearr_35550_35565[(1)] = (8));

} else {
var statearr_35551_35566 = state_35541__$1;
(statearr_35551_35566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (3))){
var inst_35539 = (state_35541[(2)]);
var state_35541__$1 = state_35541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35541__$1,inst_35539);
} else {
if((state_val_35542 === (2))){
var state_35541__$1 = state_35541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35541__$1,(4),ch);
} else {
if((state_val_35542 === (9))){
var inst_35528 = (state_35541[(9)]);
var inst_35521 = inst_35528;
var state_35541__$1 = (function (){var statearr_35552 = state_35541;
(statearr_35552[(7)] = inst_35521);

return statearr_35552;
})();
var statearr_35553_35567 = state_35541__$1;
(statearr_35553_35567[(2)] = null);

(statearr_35553_35567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (5))){
var inst_35521 = (state_35541[(7)]);
var state_35541__$1 = state_35541;
var statearr_35554_35568 = state_35541__$1;
(statearr_35554_35568[(2)] = inst_35521);

(statearr_35554_35568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (10))){
var inst_35535 = (state_35541[(2)]);
var state_35541__$1 = state_35541;
var statearr_35555_35569 = state_35541__$1;
(statearr_35555_35569[(2)] = inst_35535);

(statearr_35555_35569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (8))){
var inst_35528 = (state_35541[(9)]);
var inst_35531 = cljs.core.deref.call(null,inst_35528);
var state_35541__$1 = state_35541;
var statearr_35556_35570 = state_35541__$1;
(statearr_35556_35570[(2)] = inst_35531);

(statearr_35556_35570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto__))
;
return ((function (switch__34960__auto__,c__35055__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34961__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34961__auto____0 = (function (){
var statearr_35557 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35557[(0)] = cljs$core$async$reduce_$_state_machine__34961__auto__);

(statearr_35557[(1)] = (1));

return statearr_35557;
});
var cljs$core$async$reduce_$_state_machine__34961__auto____1 = (function (state_35541){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_35541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e35558){if((e35558 instanceof Object)){
var ex__34964__auto__ = e35558;
var statearr_35559_35571 = state_35541;
(statearr_35559_35571[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35572 = state_35541;
state_35541 = G__35572;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34961__auto__ = function(state_35541){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34961__auto____1.call(this,state_35541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34961__auto____0;
cljs$core$async$reduce_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34961__auto____1;
return cljs$core$async$reduce_$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto__))
})();
var state__35057__auto__ = (function (){var statearr_35560 = f__35056__auto__.call(null);
(statearr_35560[(6)] = c__35055__auto__);

return statearr_35560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto__))
);

return c__35055__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto__,f__$1){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto__,f__$1){
return (function (state_35578){
var state_val_35579 = (state_35578[(1)]);
if((state_val_35579 === (1))){
var inst_35573 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35578__$1 = state_35578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35578__$1,(2),inst_35573);
} else {
if((state_val_35579 === (2))){
var inst_35575 = (state_35578[(2)]);
var inst_35576 = f__$1.call(null,inst_35575);
var state_35578__$1 = state_35578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35578__$1,inst_35576);
} else {
return null;
}
}
});})(c__35055__auto__,f__$1))
;
return ((function (switch__34960__auto__,c__35055__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34961__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34961__auto____0 = (function (){
var statearr_35580 = [null,null,null,null,null,null,null];
(statearr_35580[(0)] = cljs$core$async$transduce_$_state_machine__34961__auto__);

(statearr_35580[(1)] = (1));

return statearr_35580;
});
var cljs$core$async$transduce_$_state_machine__34961__auto____1 = (function (state_35578){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_35578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e35581){if((e35581 instanceof Object)){
var ex__34964__auto__ = e35581;
var statearr_35582_35584 = state_35578;
(statearr_35582_35584[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35585 = state_35578;
state_35578 = G__35585;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34961__auto__ = function(state_35578){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34961__auto____1.call(this,state_35578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34961__auto____0;
cljs$core$async$transduce_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34961__auto____1;
return cljs$core$async$transduce_$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto__,f__$1))
})();
var state__35057__auto__ = (function (){var statearr_35583 = f__35056__auto__.call(null);
(statearr_35583[(6)] = c__35055__auto__);

return statearr_35583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto__,f__$1))
);

return c__35055__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35587 = arguments.length;
switch (G__35587) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto__){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto__){
return (function (state_35612){
var state_val_35613 = (state_35612[(1)]);
if((state_val_35613 === (7))){
var inst_35594 = (state_35612[(2)]);
var state_35612__$1 = state_35612;
var statearr_35614_35635 = state_35612__$1;
(statearr_35614_35635[(2)] = inst_35594);

(statearr_35614_35635[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (1))){
var inst_35588 = cljs.core.seq.call(null,coll);
var inst_35589 = inst_35588;
var state_35612__$1 = (function (){var statearr_35615 = state_35612;
(statearr_35615[(7)] = inst_35589);

return statearr_35615;
})();
var statearr_35616_35636 = state_35612__$1;
(statearr_35616_35636[(2)] = null);

(statearr_35616_35636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (4))){
var inst_35589 = (state_35612[(7)]);
var inst_35592 = cljs.core.first.call(null,inst_35589);
var state_35612__$1 = state_35612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35612__$1,(7),ch,inst_35592);
} else {
if((state_val_35613 === (13))){
var inst_35606 = (state_35612[(2)]);
var state_35612__$1 = state_35612;
var statearr_35617_35637 = state_35612__$1;
(statearr_35617_35637[(2)] = inst_35606);

(statearr_35617_35637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (6))){
var inst_35597 = (state_35612[(2)]);
var state_35612__$1 = state_35612;
if(cljs.core.truth_(inst_35597)){
var statearr_35618_35638 = state_35612__$1;
(statearr_35618_35638[(1)] = (8));

} else {
var statearr_35619_35639 = state_35612__$1;
(statearr_35619_35639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (3))){
var inst_35610 = (state_35612[(2)]);
var state_35612__$1 = state_35612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35612__$1,inst_35610);
} else {
if((state_val_35613 === (12))){
var state_35612__$1 = state_35612;
var statearr_35620_35640 = state_35612__$1;
(statearr_35620_35640[(2)] = null);

(statearr_35620_35640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (2))){
var inst_35589 = (state_35612[(7)]);
var state_35612__$1 = state_35612;
if(cljs.core.truth_(inst_35589)){
var statearr_35621_35641 = state_35612__$1;
(statearr_35621_35641[(1)] = (4));

} else {
var statearr_35622_35642 = state_35612__$1;
(statearr_35622_35642[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (11))){
var inst_35603 = cljs.core.async.close_BANG_.call(null,ch);
var state_35612__$1 = state_35612;
var statearr_35623_35643 = state_35612__$1;
(statearr_35623_35643[(2)] = inst_35603);

(statearr_35623_35643[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (9))){
var state_35612__$1 = state_35612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35624_35644 = state_35612__$1;
(statearr_35624_35644[(1)] = (11));

} else {
var statearr_35625_35645 = state_35612__$1;
(statearr_35625_35645[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (5))){
var inst_35589 = (state_35612[(7)]);
var state_35612__$1 = state_35612;
var statearr_35626_35646 = state_35612__$1;
(statearr_35626_35646[(2)] = inst_35589);

(statearr_35626_35646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (10))){
var inst_35608 = (state_35612[(2)]);
var state_35612__$1 = state_35612;
var statearr_35627_35647 = state_35612__$1;
(statearr_35627_35647[(2)] = inst_35608);

(statearr_35627_35647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (8))){
var inst_35589 = (state_35612[(7)]);
var inst_35599 = cljs.core.next.call(null,inst_35589);
var inst_35589__$1 = inst_35599;
var state_35612__$1 = (function (){var statearr_35628 = state_35612;
(statearr_35628[(7)] = inst_35589__$1);

return statearr_35628;
})();
var statearr_35629_35648 = state_35612__$1;
(statearr_35629_35648[(2)] = null);

(statearr_35629_35648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto__))
;
return ((function (switch__34960__auto__,c__35055__auto__){
return (function() {
var cljs$core$async$state_machine__34961__auto__ = null;
var cljs$core$async$state_machine__34961__auto____0 = (function (){
var statearr_35630 = [null,null,null,null,null,null,null,null];
(statearr_35630[(0)] = cljs$core$async$state_machine__34961__auto__);

(statearr_35630[(1)] = (1));

return statearr_35630;
});
var cljs$core$async$state_machine__34961__auto____1 = (function (state_35612){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_35612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e35631){if((e35631 instanceof Object)){
var ex__34964__auto__ = e35631;
var statearr_35632_35649 = state_35612;
(statearr_35632_35649[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35650 = state_35612;
state_35612 = G__35650;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$state_machine__34961__auto__ = function(state_35612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34961__auto____1.call(this,state_35612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34961__auto____0;
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34961__auto____1;
return cljs$core$async$state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto__))
})();
var state__35057__auto__ = (function (){var statearr_35633 = f__35056__auto__.call(null);
(statearr_35633[(6)] = c__35055__auto__);

return statearr_35633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto__))
);

return c__35055__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35651 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35651 = (function (ch,cs,meta35652){
this.ch = ch;
this.cs = cs;
this.meta35652 = meta35652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35653,meta35652__$1){
var self__ = this;
var _35653__$1 = this;
return (new cljs.core.async.t_cljs$core$async35651(self__.ch,self__.cs,meta35652__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35653){
var self__ = this;
var _35653__$1 = this;
return self__.meta35652;
});})(cs))
;

cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35651.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35651.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35652","meta35652",2096416572,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35651";

cljs.core.async.t_cljs$core$async35651.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async35651");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35651.
 */
cljs.core.async.__GT_t_cljs$core$async35651 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35651(ch__$1,cs__$1,meta35652){
return (new cljs.core.async.t_cljs$core$async35651(ch__$1,cs__$1,meta35652));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35651(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__35055__auto___35873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___35873,cs,m,dchan,dctr,done){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___35873,cs,m,dchan,dctr,done){
return (function (state_35788){
var state_val_35789 = (state_35788[(1)]);
if((state_val_35789 === (7))){
var inst_35784 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
var statearr_35790_35874 = state_35788__$1;
(statearr_35790_35874[(2)] = inst_35784);

(statearr_35790_35874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (20))){
var inst_35687 = (state_35788[(7)]);
var inst_35699 = cljs.core.first.call(null,inst_35687);
var inst_35700 = cljs.core.nth.call(null,inst_35699,(0),null);
var inst_35701 = cljs.core.nth.call(null,inst_35699,(1),null);
var state_35788__$1 = (function (){var statearr_35791 = state_35788;
(statearr_35791[(8)] = inst_35700);

return statearr_35791;
})();
if(cljs.core.truth_(inst_35701)){
var statearr_35792_35875 = state_35788__$1;
(statearr_35792_35875[(1)] = (22));

} else {
var statearr_35793_35876 = state_35788__$1;
(statearr_35793_35876[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (27))){
var inst_35736 = (state_35788[(9)]);
var inst_35731 = (state_35788[(10)]);
var inst_35729 = (state_35788[(11)]);
var inst_35656 = (state_35788[(12)]);
var inst_35736__$1 = cljs.core._nth.call(null,inst_35729,inst_35731);
var inst_35737 = cljs.core.async.put_BANG_.call(null,inst_35736__$1,inst_35656,done);
var state_35788__$1 = (function (){var statearr_35794 = state_35788;
(statearr_35794[(9)] = inst_35736__$1);

return statearr_35794;
})();
if(cljs.core.truth_(inst_35737)){
var statearr_35795_35877 = state_35788__$1;
(statearr_35795_35877[(1)] = (30));

} else {
var statearr_35796_35878 = state_35788__$1;
(statearr_35796_35878[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (1))){
var state_35788__$1 = state_35788;
var statearr_35797_35879 = state_35788__$1;
(statearr_35797_35879[(2)] = null);

(statearr_35797_35879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (24))){
var inst_35687 = (state_35788[(7)]);
var inst_35706 = (state_35788[(2)]);
var inst_35707 = cljs.core.next.call(null,inst_35687);
var inst_35665 = inst_35707;
var inst_35666 = null;
var inst_35667 = (0);
var inst_35668 = (0);
var state_35788__$1 = (function (){var statearr_35798 = state_35788;
(statearr_35798[(13)] = inst_35667);

(statearr_35798[(14)] = inst_35666);

(statearr_35798[(15)] = inst_35706);

(statearr_35798[(16)] = inst_35668);

(statearr_35798[(17)] = inst_35665);

return statearr_35798;
})();
var statearr_35799_35880 = state_35788__$1;
(statearr_35799_35880[(2)] = null);

(statearr_35799_35880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (39))){
var state_35788__$1 = state_35788;
var statearr_35803_35881 = state_35788__$1;
(statearr_35803_35881[(2)] = null);

(statearr_35803_35881[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (4))){
var inst_35656 = (state_35788[(12)]);
var inst_35656__$1 = (state_35788[(2)]);
var inst_35657 = (inst_35656__$1 == null);
var state_35788__$1 = (function (){var statearr_35804 = state_35788;
(statearr_35804[(12)] = inst_35656__$1);

return statearr_35804;
})();
if(cljs.core.truth_(inst_35657)){
var statearr_35805_35882 = state_35788__$1;
(statearr_35805_35882[(1)] = (5));

} else {
var statearr_35806_35883 = state_35788__$1;
(statearr_35806_35883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (15))){
var inst_35667 = (state_35788[(13)]);
var inst_35666 = (state_35788[(14)]);
var inst_35668 = (state_35788[(16)]);
var inst_35665 = (state_35788[(17)]);
var inst_35683 = (state_35788[(2)]);
var inst_35684 = (inst_35668 + (1));
var tmp35800 = inst_35667;
var tmp35801 = inst_35666;
var tmp35802 = inst_35665;
var inst_35665__$1 = tmp35802;
var inst_35666__$1 = tmp35801;
var inst_35667__$1 = tmp35800;
var inst_35668__$1 = inst_35684;
var state_35788__$1 = (function (){var statearr_35807 = state_35788;
(statearr_35807[(13)] = inst_35667__$1);

(statearr_35807[(18)] = inst_35683);

(statearr_35807[(14)] = inst_35666__$1);

(statearr_35807[(16)] = inst_35668__$1);

(statearr_35807[(17)] = inst_35665__$1);

return statearr_35807;
})();
var statearr_35808_35884 = state_35788__$1;
(statearr_35808_35884[(2)] = null);

(statearr_35808_35884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (21))){
var inst_35710 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
var statearr_35812_35885 = state_35788__$1;
(statearr_35812_35885[(2)] = inst_35710);

(statearr_35812_35885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (31))){
var inst_35736 = (state_35788[(9)]);
var inst_35740 = done.call(null,null);
var inst_35741 = cljs.core.async.untap_STAR_.call(null,m,inst_35736);
var state_35788__$1 = (function (){var statearr_35813 = state_35788;
(statearr_35813[(19)] = inst_35740);

return statearr_35813;
})();
var statearr_35814_35886 = state_35788__$1;
(statearr_35814_35886[(2)] = inst_35741);

(statearr_35814_35886[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (32))){
var inst_35730 = (state_35788[(20)]);
var inst_35728 = (state_35788[(21)]);
var inst_35731 = (state_35788[(10)]);
var inst_35729 = (state_35788[(11)]);
var inst_35743 = (state_35788[(2)]);
var inst_35744 = (inst_35731 + (1));
var tmp35809 = inst_35730;
var tmp35810 = inst_35728;
var tmp35811 = inst_35729;
var inst_35728__$1 = tmp35810;
var inst_35729__$1 = tmp35811;
var inst_35730__$1 = tmp35809;
var inst_35731__$1 = inst_35744;
var state_35788__$1 = (function (){var statearr_35815 = state_35788;
(statearr_35815[(20)] = inst_35730__$1);

(statearr_35815[(21)] = inst_35728__$1);

(statearr_35815[(22)] = inst_35743);

(statearr_35815[(10)] = inst_35731__$1);

(statearr_35815[(11)] = inst_35729__$1);

return statearr_35815;
})();
var statearr_35816_35887 = state_35788__$1;
(statearr_35816_35887[(2)] = null);

(statearr_35816_35887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (40))){
var inst_35756 = (state_35788[(23)]);
var inst_35760 = done.call(null,null);
var inst_35761 = cljs.core.async.untap_STAR_.call(null,m,inst_35756);
var state_35788__$1 = (function (){var statearr_35817 = state_35788;
(statearr_35817[(24)] = inst_35760);

return statearr_35817;
})();
var statearr_35818_35888 = state_35788__$1;
(statearr_35818_35888[(2)] = inst_35761);

(statearr_35818_35888[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (33))){
var inst_35747 = (state_35788[(25)]);
var inst_35749 = cljs.core.chunked_seq_QMARK_.call(null,inst_35747);
var state_35788__$1 = state_35788;
if(inst_35749){
var statearr_35819_35889 = state_35788__$1;
(statearr_35819_35889[(1)] = (36));

} else {
var statearr_35820_35890 = state_35788__$1;
(statearr_35820_35890[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (13))){
var inst_35677 = (state_35788[(26)]);
var inst_35680 = cljs.core.async.close_BANG_.call(null,inst_35677);
var state_35788__$1 = state_35788;
var statearr_35821_35891 = state_35788__$1;
(statearr_35821_35891[(2)] = inst_35680);

(statearr_35821_35891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (22))){
var inst_35700 = (state_35788[(8)]);
var inst_35703 = cljs.core.async.close_BANG_.call(null,inst_35700);
var state_35788__$1 = state_35788;
var statearr_35822_35892 = state_35788__$1;
(statearr_35822_35892[(2)] = inst_35703);

(statearr_35822_35892[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (36))){
var inst_35747 = (state_35788[(25)]);
var inst_35751 = cljs.core.chunk_first.call(null,inst_35747);
var inst_35752 = cljs.core.chunk_rest.call(null,inst_35747);
var inst_35753 = cljs.core.count.call(null,inst_35751);
var inst_35728 = inst_35752;
var inst_35729 = inst_35751;
var inst_35730 = inst_35753;
var inst_35731 = (0);
var state_35788__$1 = (function (){var statearr_35823 = state_35788;
(statearr_35823[(20)] = inst_35730);

(statearr_35823[(21)] = inst_35728);

(statearr_35823[(10)] = inst_35731);

(statearr_35823[(11)] = inst_35729);

return statearr_35823;
})();
var statearr_35824_35893 = state_35788__$1;
(statearr_35824_35893[(2)] = null);

(statearr_35824_35893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (41))){
var inst_35747 = (state_35788[(25)]);
var inst_35763 = (state_35788[(2)]);
var inst_35764 = cljs.core.next.call(null,inst_35747);
var inst_35728 = inst_35764;
var inst_35729 = null;
var inst_35730 = (0);
var inst_35731 = (0);
var state_35788__$1 = (function (){var statearr_35825 = state_35788;
(statearr_35825[(20)] = inst_35730);

(statearr_35825[(21)] = inst_35728);

(statearr_35825[(10)] = inst_35731);

(statearr_35825[(27)] = inst_35763);

(statearr_35825[(11)] = inst_35729);

return statearr_35825;
})();
var statearr_35826_35894 = state_35788__$1;
(statearr_35826_35894[(2)] = null);

(statearr_35826_35894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (43))){
var state_35788__$1 = state_35788;
var statearr_35827_35895 = state_35788__$1;
(statearr_35827_35895[(2)] = null);

(statearr_35827_35895[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (29))){
var inst_35772 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
var statearr_35828_35896 = state_35788__$1;
(statearr_35828_35896[(2)] = inst_35772);

(statearr_35828_35896[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (44))){
var inst_35781 = (state_35788[(2)]);
var state_35788__$1 = (function (){var statearr_35829 = state_35788;
(statearr_35829[(28)] = inst_35781);

return statearr_35829;
})();
var statearr_35830_35897 = state_35788__$1;
(statearr_35830_35897[(2)] = null);

(statearr_35830_35897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (6))){
var inst_35720 = (state_35788[(29)]);
var inst_35719 = cljs.core.deref.call(null,cs);
var inst_35720__$1 = cljs.core.keys.call(null,inst_35719);
var inst_35721 = cljs.core.count.call(null,inst_35720__$1);
var inst_35722 = cljs.core.reset_BANG_.call(null,dctr,inst_35721);
var inst_35727 = cljs.core.seq.call(null,inst_35720__$1);
var inst_35728 = inst_35727;
var inst_35729 = null;
var inst_35730 = (0);
var inst_35731 = (0);
var state_35788__$1 = (function (){var statearr_35831 = state_35788;
(statearr_35831[(20)] = inst_35730);

(statearr_35831[(21)] = inst_35728);

(statearr_35831[(30)] = inst_35722);

(statearr_35831[(29)] = inst_35720__$1);

(statearr_35831[(10)] = inst_35731);

(statearr_35831[(11)] = inst_35729);

return statearr_35831;
})();
var statearr_35832_35898 = state_35788__$1;
(statearr_35832_35898[(2)] = null);

(statearr_35832_35898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (28))){
var inst_35728 = (state_35788[(21)]);
var inst_35747 = (state_35788[(25)]);
var inst_35747__$1 = cljs.core.seq.call(null,inst_35728);
var state_35788__$1 = (function (){var statearr_35833 = state_35788;
(statearr_35833[(25)] = inst_35747__$1);

return statearr_35833;
})();
if(inst_35747__$1){
var statearr_35834_35899 = state_35788__$1;
(statearr_35834_35899[(1)] = (33));

} else {
var statearr_35835_35900 = state_35788__$1;
(statearr_35835_35900[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (25))){
var inst_35730 = (state_35788[(20)]);
var inst_35731 = (state_35788[(10)]);
var inst_35733 = (inst_35731 < inst_35730);
var inst_35734 = inst_35733;
var state_35788__$1 = state_35788;
if(cljs.core.truth_(inst_35734)){
var statearr_35836_35901 = state_35788__$1;
(statearr_35836_35901[(1)] = (27));

} else {
var statearr_35837_35902 = state_35788__$1;
(statearr_35837_35902[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (34))){
var state_35788__$1 = state_35788;
var statearr_35838_35903 = state_35788__$1;
(statearr_35838_35903[(2)] = null);

(statearr_35838_35903[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (17))){
var state_35788__$1 = state_35788;
var statearr_35839_35904 = state_35788__$1;
(statearr_35839_35904[(2)] = null);

(statearr_35839_35904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (3))){
var inst_35786 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35788__$1,inst_35786);
} else {
if((state_val_35789 === (12))){
var inst_35715 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
var statearr_35840_35905 = state_35788__$1;
(statearr_35840_35905[(2)] = inst_35715);

(statearr_35840_35905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (2))){
var state_35788__$1 = state_35788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35788__$1,(4),ch);
} else {
if((state_val_35789 === (23))){
var state_35788__$1 = state_35788;
var statearr_35841_35906 = state_35788__$1;
(statearr_35841_35906[(2)] = null);

(statearr_35841_35906[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (35))){
var inst_35770 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
var statearr_35842_35907 = state_35788__$1;
(statearr_35842_35907[(2)] = inst_35770);

(statearr_35842_35907[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (19))){
var inst_35687 = (state_35788[(7)]);
var inst_35691 = cljs.core.chunk_first.call(null,inst_35687);
var inst_35692 = cljs.core.chunk_rest.call(null,inst_35687);
var inst_35693 = cljs.core.count.call(null,inst_35691);
var inst_35665 = inst_35692;
var inst_35666 = inst_35691;
var inst_35667 = inst_35693;
var inst_35668 = (0);
var state_35788__$1 = (function (){var statearr_35843 = state_35788;
(statearr_35843[(13)] = inst_35667);

(statearr_35843[(14)] = inst_35666);

(statearr_35843[(16)] = inst_35668);

(statearr_35843[(17)] = inst_35665);

return statearr_35843;
})();
var statearr_35844_35908 = state_35788__$1;
(statearr_35844_35908[(2)] = null);

(statearr_35844_35908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (11))){
var inst_35687 = (state_35788[(7)]);
var inst_35665 = (state_35788[(17)]);
var inst_35687__$1 = cljs.core.seq.call(null,inst_35665);
var state_35788__$1 = (function (){var statearr_35845 = state_35788;
(statearr_35845[(7)] = inst_35687__$1);

return statearr_35845;
})();
if(inst_35687__$1){
var statearr_35846_35909 = state_35788__$1;
(statearr_35846_35909[(1)] = (16));

} else {
var statearr_35847_35910 = state_35788__$1;
(statearr_35847_35910[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (9))){
var inst_35717 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
var statearr_35848_35911 = state_35788__$1;
(statearr_35848_35911[(2)] = inst_35717);

(statearr_35848_35911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (5))){
var inst_35663 = cljs.core.deref.call(null,cs);
var inst_35664 = cljs.core.seq.call(null,inst_35663);
var inst_35665 = inst_35664;
var inst_35666 = null;
var inst_35667 = (0);
var inst_35668 = (0);
var state_35788__$1 = (function (){var statearr_35849 = state_35788;
(statearr_35849[(13)] = inst_35667);

(statearr_35849[(14)] = inst_35666);

(statearr_35849[(16)] = inst_35668);

(statearr_35849[(17)] = inst_35665);

return statearr_35849;
})();
var statearr_35850_35912 = state_35788__$1;
(statearr_35850_35912[(2)] = null);

(statearr_35850_35912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (14))){
var state_35788__$1 = state_35788;
var statearr_35851_35913 = state_35788__$1;
(statearr_35851_35913[(2)] = null);

(statearr_35851_35913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (45))){
var inst_35778 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
var statearr_35852_35914 = state_35788__$1;
(statearr_35852_35914[(2)] = inst_35778);

(statearr_35852_35914[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (26))){
var inst_35720 = (state_35788[(29)]);
var inst_35774 = (state_35788[(2)]);
var inst_35775 = cljs.core.seq.call(null,inst_35720);
var state_35788__$1 = (function (){var statearr_35853 = state_35788;
(statearr_35853[(31)] = inst_35774);

return statearr_35853;
})();
if(inst_35775){
var statearr_35854_35915 = state_35788__$1;
(statearr_35854_35915[(1)] = (42));

} else {
var statearr_35855_35916 = state_35788__$1;
(statearr_35855_35916[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (16))){
var inst_35687 = (state_35788[(7)]);
var inst_35689 = cljs.core.chunked_seq_QMARK_.call(null,inst_35687);
var state_35788__$1 = state_35788;
if(inst_35689){
var statearr_35856_35917 = state_35788__$1;
(statearr_35856_35917[(1)] = (19));

} else {
var statearr_35857_35918 = state_35788__$1;
(statearr_35857_35918[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (38))){
var inst_35767 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
var statearr_35858_35919 = state_35788__$1;
(statearr_35858_35919[(2)] = inst_35767);

(statearr_35858_35919[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (30))){
var state_35788__$1 = state_35788;
var statearr_35859_35920 = state_35788__$1;
(statearr_35859_35920[(2)] = null);

(statearr_35859_35920[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (10))){
var inst_35666 = (state_35788[(14)]);
var inst_35668 = (state_35788[(16)]);
var inst_35676 = cljs.core._nth.call(null,inst_35666,inst_35668);
var inst_35677 = cljs.core.nth.call(null,inst_35676,(0),null);
var inst_35678 = cljs.core.nth.call(null,inst_35676,(1),null);
var state_35788__$1 = (function (){var statearr_35860 = state_35788;
(statearr_35860[(26)] = inst_35677);

return statearr_35860;
})();
if(cljs.core.truth_(inst_35678)){
var statearr_35861_35921 = state_35788__$1;
(statearr_35861_35921[(1)] = (13));

} else {
var statearr_35862_35922 = state_35788__$1;
(statearr_35862_35922[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (18))){
var inst_35713 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
var statearr_35863_35923 = state_35788__$1;
(statearr_35863_35923[(2)] = inst_35713);

(statearr_35863_35923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (42))){
var state_35788__$1 = state_35788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35788__$1,(45),dchan);
} else {
if((state_val_35789 === (37))){
var inst_35756 = (state_35788[(23)]);
var inst_35747 = (state_35788[(25)]);
var inst_35656 = (state_35788[(12)]);
var inst_35756__$1 = cljs.core.first.call(null,inst_35747);
var inst_35757 = cljs.core.async.put_BANG_.call(null,inst_35756__$1,inst_35656,done);
var state_35788__$1 = (function (){var statearr_35864 = state_35788;
(statearr_35864[(23)] = inst_35756__$1);

return statearr_35864;
})();
if(cljs.core.truth_(inst_35757)){
var statearr_35865_35924 = state_35788__$1;
(statearr_35865_35924[(1)] = (39));

} else {
var statearr_35866_35925 = state_35788__$1;
(statearr_35866_35925[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (8))){
var inst_35667 = (state_35788[(13)]);
var inst_35668 = (state_35788[(16)]);
var inst_35670 = (inst_35668 < inst_35667);
var inst_35671 = inst_35670;
var state_35788__$1 = state_35788;
if(cljs.core.truth_(inst_35671)){
var statearr_35867_35926 = state_35788__$1;
(statearr_35867_35926[(1)] = (10));

} else {
var statearr_35868_35927 = state_35788__$1;
(statearr_35868_35927[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto___35873,cs,m,dchan,dctr,done))
;
return ((function (switch__34960__auto__,c__35055__auto___35873,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34961__auto__ = null;
var cljs$core$async$mult_$_state_machine__34961__auto____0 = (function (){
var statearr_35869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35869[(0)] = cljs$core$async$mult_$_state_machine__34961__auto__);

(statearr_35869[(1)] = (1));

return statearr_35869;
});
var cljs$core$async$mult_$_state_machine__34961__auto____1 = (function (state_35788){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_35788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e35870){if((e35870 instanceof Object)){
var ex__34964__auto__ = e35870;
var statearr_35871_35928 = state_35788;
(statearr_35871_35928[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35929 = state_35788;
state_35788 = G__35929;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34961__auto__ = function(state_35788){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34961__auto____1.call(this,state_35788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34961__auto____0;
cljs$core$async$mult_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34961__auto____1;
return cljs$core$async$mult_$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___35873,cs,m,dchan,dctr,done))
})();
var state__35057__auto__ = (function (){var statearr_35872 = f__35056__auto__.call(null);
(statearr_35872[(6)] = c__35055__auto___35873);

return statearr_35872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___35873,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35931 = arguments.length;
switch (G__35931) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35943 = arguments.length;
var i__4731__auto___35944 = (0);
while(true){
if((i__4731__auto___35944 < len__4730__auto___35943)){
args__4736__auto__.push((arguments[i__4731__auto___35944]));

var G__35945 = (i__4731__auto___35944 + (1));
i__4731__auto___35944 = G__35945;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35937){
var map__35938 = p__35937;
var map__35938__$1 = (((((!((map__35938 == null))))?(((((map__35938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35938):map__35938);
var opts = map__35938__$1;
var statearr_35940_35946 = state;
(statearr_35940_35946[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__35938,map__35938__$1,opts){
return (function (val){
var statearr_35941_35947 = state;
(statearr_35941_35947[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35938,map__35938__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_35942_35948 = state;
(statearr_35942_35948[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35933){
var G__35934 = cljs.core.first.call(null,seq35933);
var seq35933__$1 = cljs.core.next.call(null,seq35933);
var G__35935 = cljs.core.first.call(null,seq35933__$1);
var seq35933__$2 = cljs.core.next.call(null,seq35933__$1);
var G__35936 = cljs.core.first.call(null,seq35933__$2);
var seq35933__$3 = cljs.core.next.call(null,seq35933__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35934,G__35935,G__35936,seq35933__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35949 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35949 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35950){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35950 = meta35950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35951,meta35950__$1){
var self__ = this;
var _35951__$1 = this;
return (new cljs.core.async.t_cljs$core$async35949(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35950__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35951){
var self__ = this;
var _35951__$1 = this;
return self__.meta35950;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35949.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35950","meta35950",1491808835,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35949";

cljs.core.async.t_cljs$core$async35949.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async35949");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35949.
 */
cljs.core.async.__GT_t_cljs$core$async35949 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35949(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35950){
return (new cljs.core.async.t_cljs$core$async35949(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35950));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35949(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35055__auto___36113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___36113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___36113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36053){
var state_val_36054 = (state_36053[(1)]);
if((state_val_36054 === (7))){
var inst_35968 = (state_36053[(2)]);
var state_36053__$1 = state_36053;
var statearr_36055_36114 = state_36053__$1;
(statearr_36055_36114[(2)] = inst_35968);

(statearr_36055_36114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (20))){
var inst_35980 = (state_36053[(7)]);
var state_36053__$1 = state_36053;
var statearr_36056_36115 = state_36053__$1;
(statearr_36056_36115[(2)] = inst_35980);

(statearr_36056_36115[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (27))){
var state_36053__$1 = state_36053;
var statearr_36057_36116 = state_36053__$1;
(statearr_36057_36116[(2)] = null);

(statearr_36057_36116[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (1))){
var inst_35955 = (state_36053[(8)]);
var inst_35955__$1 = calc_state.call(null);
var inst_35957 = (inst_35955__$1 == null);
var inst_35958 = cljs.core.not.call(null,inst_35957);
var state_36053__$1 = (function (){var statearr_36058 = state_36053;
(statearr_36058[(8)] = inst_35955__$1);

return statearr_36058;
})();
if(inst_35958){
var statearr_36059_36117 = state_36053__$1;
(statearr_36059_36117[(1)] = (2));

} else {
var statearr_36060_36118 = state_36053__$1;
(statearr_36060_36118[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (24))){
var inst_36013 = (state_36053[(9)]);
var inst_36004 = (state_36053[(10)]);
var inst_36027 = (state_36053[(11)]);
var inst_36027__$1 = inst_36004.call(null,inst_36013);
var state_36053__$1 = (function (){var statearr_36061 = state_36053;
(statearr_36061[(11)] = inst_36027__$1);

return statearr_36061;
})();
if(cljs.core.truth_(inst_36027__$1)){
var statearr_36062_36119 = state_36053__$1;
(statearr_36062_36119[(1)] = (29));

} else {
var statearr_36063_36120 = state_36053__$1;
(statearr_36063_36120[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (4))){
var inst_35971 = (state_36053[(2)]);
var state_36053__$1 = state_36053;
if(cljs.core.truth_(inst_35971)){
var statearr_36064_36121 = state_36053__$1;
(statearr_36064_36121[(1)] = (8));

} else {
var statearr_36065_36122 = state_36053__$1;
(statearr_36065_36122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (15))){
var inst_35998 = (state_36053[(2)]);
var state_36053__$1 = state_36053;
if(cljs.core.truth_(inst_35998)){
var statearr_36066_36123 = state_36053__$1;
(statearr_36066_36123[(1)] = (19));

} else {
var statearr_36067_36124 = state_36053__$1;
(statearr_36067_36124[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (21))){
var inst_36003 = (state_36053[(12)]);
var inst_36003__$1 = (state_36053[(2)]);
var inst_36004 = cljs.core.get.call(null,inst_36003__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36005 = cljs.core.get.call(null,inst_36003__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36006 = cljs.core.get.call(null,inst_36003__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36053__$1 = (function (){var statearr_36068 = state_36053;
(statearr_36068[(13)] = inst_36005);

(statearr_36068[(10)] = inst_36004);

(statearr_36068[(12)] = inst_36003__$1);

return statearr_36068;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36053__$1,(22),inst_36006);
} else {
if((state_val_36054 === (31))){
var inst_36035 = (state_36053[(2)]);
var state_36053__$1 = state_36053;
if(cljs.core.truth_(inst_36035)){
var statearr_36069_36125 = state_36053__$1;
(statearr_36069_36125[(1)] = (32));

} else {
var statearr_36070_36126 = state_36053__$1;
(statearr_36070_36126[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (32))){
var inst_36012 = (state_36053[(14)]);
var state_36053__$1 = state_36053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36053__$1,(35),out,inst_36012);
} else {
if((state_val_36054 === (33))){
var inst_36003 = (state_36053[(12)]);
var inst_35980 = inst_36003;
var state_36053__$1 = (function (){var statearr_36071 = state_36053;
(statearr_36071[(7)] = inst_35980);

return statearr_36071;
})();
var statearr_36072_36127 = state_36053__$1;
(statearr_36072_36127[(2)] = null);

(statearr_36072_36127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (13))){
var inst_35980 = (state_36053[(7)]);
var inst_35987 = inst_35980.cljs$lang$protocol_mask$partition0$;
var inst_35988 = (inst_35987 & (64));
var inst_35989 = inst_35980.cljs$core$ISeq$;
var inst_35990 = (cljs.core.PROTOCOL_SENTINEL === inst_35989);
var inst_35991 = ((inst_35988) || (inst_35990));
var state_36053__$1 = state_36053;
if(cljs.core.truth_(inst_35991)){
var statearr_36073_36128 = state_36053__$1;
(statearr_36073_36128[(1)] = (16));

} else {
var statearr_36074_36129 = state_36053__$1;
(statearr_36074_36129[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (22))){
var inst_36012 = (state_36053[(14)]);
var inst_36013 = (state_36053[(9)]);
var inst_36011 = (state_36053[(2)]);
var inst_36012__$1 = cljs.core.nth.call(null,inst_36011,(0),null);
var inst_36013__$1 = cljs.core.nth.call(null,inst_36011,(1),null);
var inst_36014 = (inst_36012__$1 == null);
var inst_36015 = cljs.core._EQ_.call(null,inst_36013__$1,change);
var inst_36016 = ((inst_36014) || (inst_36015));
var state_36053__$1 = (function (){var statearr_36075 = state_36053;
(statearr_36075[(14)] = inst_36012__$1);

(statearr_36075[(9)] = inst_36013__$1);

return statearr_36075;
})();
if(cljs.core.truth_(inst_36016)){
var statearr_36076_36130 = state_36053__$1;
(statearr_36076_36130[(1)] = (23));

} else {
var statearr_36077_36131 = state_36053__$1;
(statearr_36077_36131[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (36))){
var inst_36003 = (state_36053[(12)]);
var inst_35980 = inst_36003;
var state_36053__$1 = (function (){var statearr_36078 = state_36053;
(statearr_36078[(7)] = inst_35980);

return statearr_36078;
})();
var statearr_36079_36132 = state_36053__$1;
(statearr_36079_36132[(2)] = null);

(statearr_36079_36132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (29))){
var inst_36027 = (state_36053[(11)]);
var state_36053__$1 = state_36053;
var statearr_36080_36133 = state_36053__$1;
(statearr_36080_36133[(2)] = inst_36027);

(statearr_36080_36133[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (6))){
var state_36053__$1 = state_36053;
var statearr_36081_36134 = state_36053__$1;
(statearr_36081_36134[(2)] = false);

(statearr_36081_36134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (28))){
var inst_36023 = (state_36053[(2)]);
var inst_36024 = calc_state.call(null);
var inst_35980 = inst_36024;
var state_36053__$1 = (function (){var statearr_36082 = state_36053;
(statearr_36082[(7)] = inst_35980);

(statearr_36082[(15)] = inst_36023);

return statearr_36082;
})();
var statearr_36083_36135 = state_36053__$1;
(statearr_36083_36135[(2)] = null);

(statearr_36083_36135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (25))){
var inst_36049 = (state_36053[(2)]);
var state_36053__$1 = state_36053;
var statearr_36084_36136 = state_36053__$1;
(statearr_36084_36136[(2)] = inst_36049);

(statearr_36084_36136[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (34))){
var inst_36047 = (state_36053[(2)]);
var state_36053__$1 = state_36053;
var statearr_36085_36137 = state_36053__$1;
(statearr_36085_36137[(2)] = inst_36047);

(statearr_36085_36137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (17))){
var state_36053__$1 = state_36053;
var statearr_36086_36138 = state_36053__$1;
(statearr_36086_36138[(2)] = false);

(statearr_36086_36138[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (3))){
var state_36053__$1 = state_36053;
var statearr_36087_36139 = state_36053__$1;
(statearr_36087_36139[(2)] = false);

(statearr_36087_36139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (12))){
var inst_36051 = (state_36053[(2)]);
var state_36053__$1 = state_36053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36053__$1,inst_36051);
} else {
if((state_val_36054 === (2))){
var inst_35955 = (state_36053[(8)]);
var inst_35960 = inst_35955.cljs$lang$protocol_mask$partition0$;
var inst_35961 = (inst_35960 & (64));
var inst_35962 = inst_35955.cljs$core$ISeq$;
var inst_35963 = (cljs.core.PROTOCOL_SENTINEL === inst_35962);
var inst_35964 = ((inst_35961) || (inst_35963));
var state_36053__$1 = state_36053;
if(cljs.core.truth_(inst_35964)){
var statearr_36088_36140 = state_36053__$1;
(statearr_36088_36140[(1)] = (5));

} else {
var statearr_36089_36141 = state_36053__$1;
(statearr_36089_36141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (23))){
var inst_36012 = (state_36053[(14)]);
var inst_36018 = (inst_36012 == null);
var state_36053__$1 = state_36053;
if(cljs.core.truth_(inst_36018)){
var statearr_36090_36142 = state_36053__$1;
(statearr_36090_36142[(1)] = (26));

} else {
var statearr_36091_36143 = state_36053__$1;
(statearr_36091_36143[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (35))){
var inst_36038 = (state_36053[(2)]);
var state_36053__$1 = state_36053;
if(cljs.core.truth_(inst_36038)){
var statearr_36092_36144 = state_36053__$1;
(statearr_36092_36144[(1)] = (36));

} else {
var statearr_36093_36145 = state_36053__$1;
(statearr_36093_36145[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (19))){
var inst_35980 = (state_36053[(7)]);
var inst_36000 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35980);
var state_36053__$1 = state_36053;
var statearr_36094_36146 = state_36053__$1;
(statearr_36094_36146[(2)] = inst_36000);

(statearr_36094_36146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (11))){
var inst_35980 = (state_36053[(7)]);
var inst_35984 = (inst_35980 == null);
var inst_35985 = cljs.core.not.call(null,inst_35984);
var state_36053__$1 = state_36053;
if(inst_35985){
var statearr_36095_36147 = state_36053__$1;
(statearr_36095_36147[(1)] = (13));

} else {
var statearr_36096_36148 = state_36053__$1;
(statearr_36096_36148[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (9))){
var inst_35955 = (state_36053[(8)]);
var state_36053__$1 = state_36053;
var statearr_36097_36149 = state_36053__$1;
(statearr_36097_36149[(2)] = inst_35955);

(statearr_36097_36149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (5))){
var state_36053__$1 = state_36053;
var statearr_36098_36150 = state_36053__$1;
(statearr_36098_36150[(2)] = true);

(statearr_36098_36150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (14))){
var state_36053__$1 = state_36053;
var statearr_36099_36151 = state_36053__$1;
(statearr_36099_36151[(2)] = false);

(statearr_36099_36151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (26))){
var inst_36013 = (state_36053[(9)]);
var inst_36020 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36013);
var state_36053__$1 = state_36053;
var statearr_36100_36152 = state_36053__$1;
(statearr_36100_36152[(2)] = inst_36020);

(statearr_36100_36152[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (16))){
var state_36053__$1 = state_36053;
var statearr_36101_36153 = state_36053__$1;
(statearr_36101_36153[(2)] = true);

(statearr_36101_36153[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (38))){
var inst_36043 = (state_36053[(2)]);
var state_36053__$1 = state_36053;
var statearr_36102_36154 = state_36053__$1;
(statearr_36102_36154[(2)] = inst_36043);

(statearr_36102_36154[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (30))){
var inst_36013 = (state_36053[(9)]);
var inst_36005 = (state_36053[(13)]);
var inst_36004 = (state_36053[(10)]);
var inst_36030 = cljs.core.empty_QMARK_.call(null,inst_36004);
var inst_36031 = inst_36005.call(null,inst_36013);
var inst_36032 = cljs.core.not.call(null,inst_36031);
var inst_36033 = ((inst_36030) && (inst_36032));
var state_36053__$1 = state_36053;
var statearr_36103_36155 = state_36053__$1;
(statearr_36103_36155[(2)] = inst_36033);

(statearr_36103_36155[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (10))){
var inst_35955 = (state_36053[(8)]);
var inst_35976 = (state_36053[(2)]);
var inst_35977 = cljs.core.get.call(null,inst_35976,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35978 = cljs.core.get.call(null,inst_35976,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35979 = cljs.core.get.call(null,inst_35976,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35980 = inst_35955;
var state_36053__$1 = (function (){var statearr_36104 = state_36053;
(statearr_36104[(16)] = inst_35978);

(statearr_36104[(17)] = inst_35979);

(statearr_36104[(7)] = inst_35980);

(statearr_36104[(18)] = inst_35977);

return statearr_36104;
})();
var statearr_36105_36156 = state_36053__$1;
(statearr_36105_36156[(2)] = null);

(statearr_36105_36156[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (18))){
var inst_35995 = (state_36053[(2)]);
var state_36053__$1 = state_36053;
var statearr_36106_36157 = state_36053__$1;
(statearr_36106_36157[(2)] = inst_35995);

(statearr_36106_36157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (37))){
var state_36053__$1 = state_36053;
var statearr_36107_36158 = state_36053__$1;
(statearr_36107_36158[(2)] = null);

(statearr_36107_36158[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (8))){
var inst_35955 = (state_36053[(8)]);
var inst_35973 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35955);
var state_36053__$1 = state_36053;
var statearr_36108_36159 = state_36053__$1;
(statearr_36108_36159[(2)] = inst_35973);

(statearr_36108_36159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto___36113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34960__auto__,c__35055__auto___36113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34961__auto__ = null;
var cljs$core$async$mix_$_state_machine__34961__auto____0 = (function (){
var statearr_36109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36109[(0)] = cljs$core$async$mix_$_state_machine__34961__auto__);

(statearr_36109[(1)] = (1));

return statearr_36109;
});
var cljs$core$async$mix_$_state_machine__34961__auto____1 = (function (state_36053){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_36053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e36110){if((e36110 instanceof Object)){
var ex__34964__auto__ = e36110;
var statearr_36111_36160 = state_36053;
(statearr_36111_36160[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36161 = state_36053;
state_36053 = G__36161;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34961__auto__ = function(state_36053){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34961__auto____1.call(this,state_36053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34961__auto____0;
cljs$core$async$mix_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34961__auto____1;
return cljs$core$async$mix_$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___36113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35057__auto__ = (function (){var statearr_36112 = f__35056__auto__.call(null);
(statearr_36112[(6)] = c__35055__auto___36113);

return statearr_36112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___36113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36163 = arguments.length;
switch (G__36163) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__36167 = arguments.length;
switch (G__36167) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__36165_SHARP_){
if(cljs.core.truth_(p1__36165_SHARP_.call(null,topic))){
return p1__36165_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36165_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36168 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36168 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36169){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36169 = meta36169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36170,meta36169__$1){
var self__ = this;
var _36170__$1 = this;
return (new cljs.core.async.t_cljs$core$async36168(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36169__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36170){
var self__ = this;
var _36170__$1 = this;
return self__.meta36169;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36168.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36168.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36168.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36168.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36168.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36168.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36168.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36168.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36169","meta36169",-1643749658,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36168";

cljs.core.async.t_cljs$core$async36168.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async36168");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36168.
 */
cljs.core.async.__GT_t_cljs$core$async36168 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36168(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36169){
return (new cljs.core.async.t_cljs$core$async36168(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36169));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36168(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35055__auto___36288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___36288,mults,ensure_mult,p){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___36288,mults,ensure_mult,p){
return (function (state_36242){
var state_val_36243 = (state_36242[(1)]);
if((state_val_36243 === (7))){
var inst_36238 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36244_36289 = state_36242__$1;
(statearr_36244_36289[(2)] = inst_36238);

(statearr_36244_36289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (20))){
var state_36242__$1 = state_36242;
var statearr_36245_36290 = state_36242__$1;
(statearr_36245_36290[(2)] = null);

(statearr_36245_36290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (1))){
var state_36242__$1 = state_36242;
var statearr_36246_36291 = state_36242__$1;
(statearr_36246_36291[(2)] = null);

(statearr_36246_36291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (24))){
var inst_36221 = (state_36242[(7)]);
var inst_36230 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36221);
var state_36242__$1 = state_36242;
var statearr_36247_36292 = state_36242__$1;
(statearr_36247_36292[(2)] = inst_36230);

(statearr_36247_36292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (4))){
var inst_36173 = (state_36242[(8)]);
var inst_36173__$1 = (state_36242[(2)]);
var inst_36174 = (inst_36173__$1 == null);
var state_36242__$1 = (function (){var statearr_36248 = state_36242;
(statearr_36248[(8)] = inst_36173__$1);

return statearr_36248;
})();
if(cljs.core.truth_(inst_36174)){
var statearr_36249_36293 = state_36242__$1;
(statearr_36249_36293[(1)] = (5));

} else {
var statearr_36250_36294 = state_36242__$1;
(statearr_36250_36294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (15))){
var inst_36215 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36251_36295 = state_36242__$1;
(statearr_36251_36295[(2)] = inst_36215);

(statearr_36251_36295[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (21))){
var inst_36235 = (state_36242[(2)]);
var state_36242__$1 = (function (){var statearr_36252 = state_36242;
(statearr_36252[(9)] = inst_36235);

return statearr_36252;
})();
var statearr_36253_36296 = state_36242__$1;
(statearr_36253_36296[(2)] = null);

(statearr_36253_36296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (13))){
var inst_36197 = (state_36242[(10)]);
var inst_36199 = cljs.core.chunked_seq_QMARK_.call(null,inst_36197);
var state_36242__$1 = state_36242;
if(inst_36199){
var statearr_36254_36297 = state_36242__$1;
(statearr_36254_36297[(1)] = (16));

} else {
var statearr_36255_36298 = state_36242__$1;
(statearr_36255_36298[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (22))){
var inst_36227 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
if(cljs.core.truth_(inst_36227)){
var statearr_36256_36299 = state_36242__$1;
(statearr_36256_36299[(1)] = (23));

} else {
var statearr_36257_36300 = state_36242__$1;
(statearr_36257_36300[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (6))){
var inst_36221 = (state_36242[(7)]);
var inst_36173 = (state_36242[(8)]);
var inst_36223 = (state_36242[(11)]);
var inst_36221__$1 = topic_fn.call(null,inst_36173);
var inst_36222 = cljs.core.deref.call(null,mults);
var inst_36223__$1 = cljs.core.get.call(null,inst_36222,inst_36221__$1);
var state_36242__$1 = (function (){var statearr_36258 = state_36242;
(statearr_36258[(7)] = inst_36221__$1);

(statearr_36258[(11)] = inst_36223__$1);

return statearr_36258;
})();
if(cljs.core.truth_(inst_36223__$1)){
var statearr_36259_36301 = state_36242__$1;
(statearr_36259_36301[(1)] = (19));

} else {
var statearr_36260_36302 = state_36242__$1;
(statearr_36260_36302[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (25))){
var inst_36232 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36261_36303 = state_36242__$1;
(statearr_36261_36303[(2)] = inst_36232);

(statearr_36261_36303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (17))){
var inst_36197 = (state_36242[(10)]);
var inst_36206 = cljs.core.first.call(null,inst_36197);
var inst_36207 = cljs.core.async.muxch_STAR_.call(null,inst_36206);
var inst_36208 = cljs.core.async.close_BANG_.call(null,inst_36207);
var inst_36209 = cljs.core.next.call(null,inst_36197);
var inst_36183 = inst_36209;
var inst_36184 = null;
var inst_36185 = (0);
var inst_36186 = (0);
var state_36242__$1 = (function (){var statearr_36262 = state_36242;
(statearr_36262[(12)] = inst_36185);

(statearr_36262[(13)] = inst_36208);

(statearr_36262[(14)] = inst_36186);

(statearr_36262[(15)] = inst_36184);

(statearr_36262[(16)] = inst_36183);

return statearr_36262;
})();
var statearr_36263_36304 = state_36242__$1;
(statearr_36263_36304[(2)] = null);

(statearr_36263_36304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (3))){
var inst_36240 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36242__$1,inst_36240);
} else {
if((state_val_36243 === (12))){
var inst_36217 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36264_36305 = state_36242__$1;
(statearr_36264_36305[(2)] = inst_36217);

(statearr_36264_36305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (2))){
var state_36242__$1 = state_36242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36242__$1,(4),ch);
} else {
if((state_val_36243 === (23))){
var state_36242__$1 = state_36242;
var statearr_36265_36306 = state_36242__$1;
(statearr_36265_36306[(2)] = null);

(statearr_36265_36306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (19))){
var inst_36173 = (state_36242[(8)]);
var inst_36223 = (state_36242[(11)]);
var inst_36225 = cljs.core.async.muxch_STAR_.call(null,inst_36223);
var state_36242__$1 = state_36242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36242__$1,(22),inst_36225,inst_36173);
} else {
if((state_val_36243 === (11))){
var inst_36183 = (state_36242[(16)]);
var inst_36197 = (state_36242[(10)]);
var inst_36197__$1 = cljs.core.seq.call(null,inst_36183);
var state_36242__$1 = (function (){var statearr_36266 = state_36242;
(statearr_36266[(10)] = inst_36197__$1);

return statearr_36266;
})();
if(inst_36197__$1){
var statearr_36267_36307 = state_36242__$1;
(statearr_36267_36307[(1)] = (13));

} else {
var statearr_36268_36308 = state_36242__$1;
(statearr_36268_36308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (9))){
var inst_36219 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36269_36309 = state_36242__$1;
(statearr_36269_36309[(2)] = inst_36219);

(statearr_36269_36309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (5))){
var inst_36180 = cljs.core.deref.call(null,mults);
var inst_36181 = cljs.core.vals.call(null,inst_36180);
var inst_36182 = cljs.core.seq.call(null,inst_36181);
var inst_36183 = inst_36182;
var inst_36184 = null;
var inst_36185 = (0);
var inst_36186 = (0);
var state_36242__$1 = (function (){var statearr_36270 = state_36242;
(statearr_36270[(12)] = inst_36185);

(statearr_36270[(14)] = inst_36186);

(statearr_36270[(15)] = inst_36184);

(statearr_36270[(16)] = inst_36183);

return statearr_36270;
})();
var statearr_36271_36310 = state_36242__$1;
(statearr_36271_36310[(2)] = null);

(statearr_36271_36310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (14))){
var state_36242__$1 = state_36242;
var statearr_36275_36311 = state_36242__$1;
(statearr_36275_36311[(2)] = null);

(statearr_36275_36311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (16))){
var inst_36197 = (state_36242[(10)]);
var inst_36201 = cljs.core.chunk_first.call(null,inst_36197);
var inst_36202 = cljs.core.chunk_rest.call(null,inst_36197);
var inst_36203 = cljs.core.count.call(null,inst_36201);
var inst_36183 = inst_36202;
var inst_36184 = inst_36201;
var inst_36185 = inst_36203;
var inst_36186 = (0);
var state_36242__$1 = (function (){var statearr_36276 = state_36242;
(statearr_36276[(12)] = inst_36185);

(statearr_36276[(14)] = inst_36186);

(statearr_36276[(15)] = inst_36184);

(statearr_36276[(16)] = inst_36183);

return statearr_36276;
})();
var statearr_36277_36312 = state_36242__$1;
(statearr_36277_36312[(2)] = null);

(statearr_36277_36312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (10))){
var inst_36185 = (state_36242[(12)]);
var inst_36186 = (state_36242[(14)]);
var inst_36184 = (state_36242[(15)]);
var inst_36183 = (state_36242[(16)]);
var inst_36191 = cljs.core._nth.call(null,inst_36184,inst_36186);
var inst_36192 = cljs.core.async.muxch_STAR_.call(null,inst_36191);
var inst_36193 = cljs.core.async.close_BANG_.call(null,inst_36192);
var inst_36194 = (inst_36186 + (1));
var tmp36272 = inst_36185;
var tmp36273 = inst_36184;
var tmp36274 = inst_36183;
var inst_36183__$1 = tmp36274;
var inst_36184__$1 = tmp36273;
var inst_36185__$1 = tmp36272;
var inst_36186__$1 = inst_36194;
var state_36242__$1 = (function (){var statearr_36278 = state_36242;
(statearr_36278[(12)] = inst_36185__$1);

(statearr_36278[(14)] = inst_36186__$1);

(statearr_36278[(15)] = inst_36184__$1);

(statearr_36278[(16)] = inst_36183__$1);

(statearr_36278[(17)] = inst_36193);

return statearr_36278;
})();
var statearr_36279_36313 = state_36242__$1;
(statearr_36279_36313[(2)] = null);

(statearr_36279_36313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (18))){
var inst_36212 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36280_36314 = state_36242__$1;
(statearr_36280_36314[(2)] = inst_36212);

(statearr_36280_36314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (8))){
var inst_36185 = (state_36242[(12)]);
var inst_36186 = (state_36242[(14)]);
var inst_36188 = (inst_36186 < inst_36185);
var inst_36189 = inst_36188;
var state_36242__$1 = state_36242;
if(cljs.core.truth_(inst_36189)){
var statearr_36281_36315 = state_36242__$1;
(statearr_36281_36315[(1)] = (10));

} else {
var statearr_36282_36316 = state_36242__$1;
(statearr_36282_36316[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto___36288,mults,ensure_mult,p))
;
return ((function (switch__34960__auto__,c__35055__auto___36288,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34961__auto__ = null;
var cljs$core$async$state_machine__34961__auto____0 = (function (){
var statearr_36283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36283[(0)] = cljs$core$async$state_machine__34961__auto__);

(statearr_36283[(1)] = (1));

return statearr_36283;
});
var cljs$core$async$state_machine__34961__auto____1 = (function (state_36242){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_36242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e36284){if((e36284 instanceof Object)){
var ex__34964__auto__ = e36284;
var statearr_36285_36317 = state_36242;
(statearr_36285_36317[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36318 = state_36242;
state_36242 = G__36318;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$state_machine__34961__auto__ = function(state_36242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34961__auto____1.call(this,state_36242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34961__auto____0;
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34961__auto____1;
return cljs$core$async$state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___36288,mults,ensure_mult,p))
})();
var state__35057__auto__ = (function (){var statearr_36286 = f__35056__auto__.call(null);
(statearr_36286[(6)] = c__35055__auto___36288);

return statearr_36286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___36288,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36320 = arguments.length;
switch (G__36320) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36323 = arguments.length;
switch (G__36323) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36326 = arguments.length;
switch (G__36326) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__35055__auto___36393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___36393,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___36393,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36365){
var state_val_36366 = (state_36365[(1)]);
if((state_val_36366 === (7))){
var state_36365__$1 = state_36365;
var statearr_36367_36394 = state_36365__$1;
(statearr_36367_36394[(2)] = null);

(statearr_36367_36394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (1))){
var state_36365__$1 = state_36365;
var statearr_36368_36395 = state_36365__$1;
(statearr_36368_36395[(2)] = null);

(statearr_36368_36395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (4))){
var inst_36329 = (state_36365[(7)]);
var inst_36331 = (inst_36329 < cnt);
var state_36365__$1 = state_36365;
if(cljs.core.truth_(inst_36331)){
var statearr_36369_36396 = state_36365__$1;
(statearr_36369_36396[(1)] = (6));

} else {
var statearr_36370_36397 = state_36365__$1;
(statearr_36370_36397[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (15))){
var inst_36361 = (state_36365[(2)]);
var state_36365__$1 = state_36365;
var statearr_36371_36398 = state_36365__$1;
(statearr_36371_36398[(2)] = inst_36361);

(statearr_36371_36398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (13))){
var inst_36354 = cljs.core.async.close_BANG_.call(null,out);
var state_36365__$1 = state_36365;
var statearr_36372_36399 = state_36365__$1;
(statearr_36372_36399[(2)] = inst_36354);

(statearr_36372_36399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (6))){
var state_36365__$1 = state_36365;
var statearr_36373_36400 = state_36365__$1;
(statearr_36373_36400[(2)] = null);

(statearr_36373_36400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (3))){
var inst_36363 = (state_36365[(2)]);
var state_36365__$1 = state_36365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36365__$1,inst_36363);
} else {
if((state_val_36366 === (12))){
var inst_36351 = (state_36365[(8)]);
var inst_36351__$1 = (state_36365[(2)]);
var inst_36352 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36351__$1);
var state_36365__$1 = (function (){var statearr_36374 = state_36365;
(statearr_36374[(8)] = inst_36351__$1);

return statearr_36374;
})();
if(cljs.core.truth_(inst_36352)){
var statearr_36375_36401 = state_36365__$1;
(statearr_36375_36401[(1)] = (13));

} else {
var statearr_36376_36402 = state_36365__$1;
(statearr_36376_36402[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (2))){
var inst_36328 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36329 = (0);
var state_36365__$1 = (function (){var statearr_36377 = state_36365;
(statearr_36377[(9)] = inst_36328);

(statearr_36377[(7)] = inst_36329);

return statearr_36377;
})();
var statearr_36378_36403 = state_36365__$1;
(statearr_36378_36403[(2)] = null);

(statearr_36378_36403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (11))){
var inst_36329 = (state_36365[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36365,(10),Object,null,(9));
var inst_36338 = chs__$1.call(null,inst_36329);
var inst_36339 = done.call(null,inst_36329);
var inst_36340 = cljs.core.async.take_BANG_.call(null,inst_36338,inst_36339);
var state_36365__$1 = state_36365;
var statearr_36379_36404 = state_36365__$1;
(statearr_36379_36404[(2)] = inst_36340);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36365__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (9))){
var inst_36329 = (state_36365[(7)]);
var inst_36342 = (state_36365[(2)]);
var inst_36343 = (inst_36329 + (1));
var inst_36329__$1 = inst_36343;
var state_36365__$1 = (function (){var statearr_36380 = state_36365;
(statearr_36380[(10)] = inst_36342);

(statearr_36380[(7)] = inst_36329__$1);

return statearr_36380;
})();
var statearr_36381_36405 = state_36365__$1;
(statearr_36381_36405[(2)] = null);

(statearr_36381_36405[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (5))){
var inst_36349 = (state_36365[(2)]);
var state_36365__$1 = (function (){var statearr_36382 = state_36365;
(statearr_36382[(11)] = inst_36349);

return statearr_36382;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36365__$1,(12),dchan);
} else {
if((state_val_36366 === (14))){
var inst_36351 = (state_36365[(8)]);
var inst_36356 = cljs.core.apply.call(null,f,inst_36351);
var state_36365__$1 = state_36365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36365__$1,(16),out,inst_36356);
} else {
if((state_val_36366 === (16))){
var inst_36358 = (state_36365[(2)]);
var state_36365__$1 = (function (){var statearr_36383 = state_36365;
(statearr_36383[(12)] = inst_36358);

return statearr_36383;
})();
var statearr_36384_36406 = state_36365__$1;
(statearr_36384_36406[(2)] = null);

(statearr_36384_36406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (10))){
var inst_36333 = (state_36365[(2)]);
var inst_36334 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36365__$1 = (function (){var statearr_36385 = state_36365;
(statearr_36385[(13)] = inst_36333);

return statearr_36385;
})();
var statearr_36386_36407 = state_36365__$1;
(statearr_36386_36407[(2)] = inst_36334);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36365__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (8))){
var inst_36347 = (state_36365[(2)]);
var state_36365__$1 = state_36365;
var statearr_36387_36408 = state_36365__$1;
(statearr_36387_36408[(2)] = inst_36347);

(statearr_36387_36408[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto___36393,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34960__auto__,c__35055__auto___36393,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34961__auto__ = null;
var cljs$core$async$state_machine__34961__auto____0 = (function (){
var statearr_36388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36388[(0)] = cljs$core$async$state_machine__34961__auto__);

(statearr_36388[(1)] = (1));

return statearr_36388;
});
var cljs$core$async$state_machine__34961__auto____1 = (function (state_36365){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_36365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e36389){if((e36389 instanceof Object)){
var ex__34964__auto__ = e36389;
var statearr_36390_36409 = state_36365;
(statearr_36390_36409[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36410 = state_36365;
state_36365 = G__36410;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$state_machine__34961__auto__ = function(state_36365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34961__auto____1.call(this,state_36365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34961__auto____0;
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34961__auto____1;
return cljs$core$async$state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___36393,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35057__auto__ = (function (){var statearr_36391 = f__35056__auto__.call(null);
(statearr_36391[(6)] = c__35055__auto___36393);

return statearr_36391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___36393,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36413 = arguments.length;
switch (G__36413) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35055__auto___36467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___36467,out){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___36467,out){
return (function (state_36445){
var state_val_36446 = (state_36445[(1)]);
if((state_val_36446 === (7))){
var inst_36425 = (state_36445[(7)]);
var inst_36424 = (state_36445[(8)]);
var inst_36424__$1 = (state_36445[(2)]);
var inst_36425__$1 = cljs.core.nth.call(null,inst_36424__$1,(0),null);
var inst_36426 = cljs.core.nth.call(null,inst_36424__$1,(1),null);
var inst_36427 = (inst_36425__$1 == null);
var state_36445__$1 = (function (){var statearr_36447 = state_36445;
(statearr_36447[(7)] = inst_36425__$1);

(statearr_36447[(9)] = inst_36426);

(statearr_36447[(8)] = inst_36424__$1);

return statearr_36447;
})();
if(cljs.core.truth_(inst_36427)){
var statearr_36448_36468 = state_36445__$1;
(statearr_36448_36468[(1)] = (8));

} else {
var statearr_36449_36469 = state_36445__$1;
(statearr_36449_36469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (1))){
var inst_36414 = cljs.core.vec.call(null,chs);
var inst_36415 = inst_36414;
var state_36445__$1 = (function (){var statearr_36450 = state_36445;
(statearr_36450[(10)] = inst_36415);

return statearr_36450;
})();
var statearr_36451_36470 = state_36445__$1;
(statearr_36451_36470[(2)] = null);

(statearr_36451_36470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (4))){
var inst_36415 = (state_36445[(10)]);
var state_36445__$1 = state_36445;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36445__$1,(7),inst_36415);
} else {
if((state_val_36446 === (6))){
var inst_36441 = (state_36445[(2)]);
var state_36445__$1 = state_36445;
var statearr_36452_36471 = state_36445__$1;
(statearr_36452_36471[(2)] = inst_36441);

(statearr_36452_36471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (3))){
var inst_36443 = (state_36445[(2)]);
var state_36445__$1 = state_36445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36445__$1,inst_36443);
} else {
if((state_val_36446 === (2))){
var inst_36415 = (state_36445[(10)]);
var inst_36417 = cljs.core.count.call(null,inst_36415);
var inst_36418 = (inst_36417 > (0));
var state_36445__$1 = state_36445;
if(cljs.core.truth_(inst_36418)){
var statearr_36454_36472 = state_36445__$1;
(statearr_36454_36472[(1)] = (4));

} else {
var statearr_36455_36473 = state_36445__$1;
(statearr_36455_36473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (11))){
var inst_36415 = (state_36445[(10)]);
var inst_36434 = (state_36445[(2)]);
var tmp36453 = inst_36415;
var inst_36415__$1 = tmp36453;
var state_36445__$1 = (function (){var statearr_36456 = state_36445;
(statearr_36456[(10)] = inst_36415__$1);

(statearr_36456[(11)] = inst_36434);

return statearr_36456;
})();
var statearr_36457_36474 = state_36445__$1;
(statearr_36457_36474[(2)] = null);

(statearr_36457_36474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (9))){
var inst_36425 = (state_36445[(7)]);
var state_36445__$1 = state_36445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36445__$1,(11),out,inst_36425);
} else {
if((state_val_36446 === (5))){
var inst_36439 = cljs.core.async.close_BANG_.call(null,out);
var state_36445__$1 = state_36445;
var statearr_36458_36475 = state_36445__$1;
(statearr_36458_36475[(2)] = inst_36439);

(statearr_36458_36475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (10))){
var inst_36437 = (state_36445[(2)]);
var state_36445__$1 = state_36445;
var statearr_36459_36476 = state_36445__$1;
(statearr_36459_36476[(2)] = inst_36437);

(statearr_36459_36476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (8))){
var inst_36425 = (state_36445[(7)]);
var inst_36426 = (state_36445[(9)]);
var inst_36415 = (state_36445[(10)]);
var inst_36424 = (state_36445[(8)]);
var inst_36429 = (function (){var cs = inst_36415;
var vec__36420 = inst_36424;
var v = inst_36425;
var c = inst_36426;
return ((function (cs,vec__36420,v,c,inst_36425,inst_36426,inst_36415,inst_36424,state_val_36446,c__35055__auto___36467,out){
return (function (p1__36411_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36411_SHARP_);
});
;})(cs,vec__36420,v,c,inst_36425,inst_36426,inst_36415,inst_36424,state_val_36446,c__35055__auto___36467,out))
})();
var inst_36430 = cljs.core.filterv.call(null,inst_36429,inst_36415);
var inst_36415__$1 = inst_36430;
var state_36445__$1 = (function (){var statearr_36460 = state_36445;
(statearr_36460[(10)] = inst_36415__$1);

return statearr_36460;
})();
var statearr_36461_36477 = state_36445__$1;
(statearr_36461_36477[(2)] = null);

(statearr_36461_36477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto___36467,out))
;
return ((function (switch__34960__auto__,c__35055__auto___36467,out){
return (function() {
var cljs$core$async$state_machine__34961__auto__ = null;
var cljs$core$async$state_machine__34961__auto____0 = (function (){
var statearr_36462 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36462[(0)] = cljs$core$async$state_machine__34961__auto__);

(statearr_36462[(1)] = (1));

return statearr_36462;
});
var cljs$core$async$state_machine__34961__auto____1 = (function (state_36445){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_36445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e36463){if((e36463 instanceof Object)){
var ex__34964__auto__ = e36463;
var statearr_36464_36478 = state_36445;
(statearr_36464_36478[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36479 = state_36445;
state_36445 = G__36479;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$state_machine__34961__auto__ = function(state_36445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34961__auto____1.call(this,state_36445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34961__auto____0;
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34961__auto____1;
return cljs$core$async$state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___36467,out))
})();
var state__35057__auto__ = (function (){var statearr_36465 = f__35056__auto__.call(null);
(statearr_36465[(6)] = c__35055__auto___36467);

return statearr_36465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___36467,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36481 = arguments.length;
switch (G__36481) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35055__auto___36526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___36526,out){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___36526,out){
return (function (state_36505){
var state_val_36506 = (state_36505[(1)]);
if((state_val_36506 === (7))){
var inst_36487 = (state_36505[(7)]);
var inst_36487__$1 = (state_36505[(2)]);
var inst_36488 = (inst_36487__$1 == null);
var inst_36489 = cljs.core.not.call(null,inst_36488);
var state_36505__$1 = (function (){var statearr_36507 = state_36505;
(statearr_36507[(7)] = inst_36487__$1);

return statearr_36507;
})();
if(inst_36489){
var statearr_36508_36527 = state_36505__$1;
(statearr_36508_36527[(1)] = (8));

} else {
var statearr_36509_36528 = state_36505__$1;
(statearr_36509_36528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36506 === (1))){
var inst_36482 = (0);
var state_36505__$1 = (function (){var statearr_36510 = state_36505;
(statearr_36510[(8)] = inst_36482);

return statearr_36510;
})();
var statearr_36511_36529 = state_36505__$1;
(statearr_36511_36529[(2)] = null);

(statearr_36511_36529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36506 === (4))){
var state_36505__$1 = state_36505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36505__$1,(7),ch);
} else {
if((state_val_36506 === (6))){
var inst_36500 = (state_36505[(2)]);
var state_36505__$1 = state_36505;
var statearr_36512_36530 = state_36505__$1;
(statearr_36512_36530[(2)] = inst_36500);

(statearr_36512_36530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36506 === (3))){
var inst_36502 = (state_36505[(2)]);
var inst_36503 = cljs.core.async.close_BANG_.call(null,out);
var state_36505__$1 = (function (){var statearr_36513 = state_36505;
(statearr_36513[(9)] = inst_36502);

return statearr_36513;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36505__$1,inst_36503);
} else {
if((state_val_36506 === (2))){
var inst_36482 = (state_36505[(8)]);
var inst_36484 = (inst_36482 < n);
var state_36505__$1 = state_36505;
if(cljs.core.truth_(inst_36484)){
var statearr_36514_36531 = state_36505__$1;
(statearr_36514_36531[(1)] = (4));

} else {
var statearr_36515_36532 = state_36505__$1;
(statearr_36515_36532[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36506 === (11))){
var inst_36482 = (state_36505[(8)]);
var inst_36492 = (state_36505[(2)]);
var inst_36493 = (inst_36482 + (1));
var inst_36482__$1 = inst_36493;
var state_36505__$1 = (function (){var statearr_36516 = state_36505;
(statearr_36516[(10)] = inst_36492);

(statearr_36516[(8)] = inst_36482__$1);

return statearr_36516;
})();
var statearr_36517_36533 = state_36505__$1;
(statearr_36517_36533[(2)] = null);

(statearr_36517_36533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36506 === (9))){
var state_36505__$1 = state_36505;
var statearr_36518_36534 = state_36505__$1;
(statearr_36518_36534[(2)] = null);

(statearr_36518_36534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36506 === (5))){
var state_36505__$1 = state_36505;
var statearr_36519_36535 = state_36505__$1;
(statearr_36519_36535[(2)] = null);

(statearr_36519_36535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36506 === (10))){
var inst_36497 = (state_36505[(2)]);
var state_36505__$1 = state_36505;
var statearr_36520_36536 = state_36505__$1;
(statearr_36520_36536[(2)] = inst_36497);

(statearr_36520_36536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36506 === (8))){
var inst_36487 = (state_36505[(7)]);
var state_36505__$1 = state_36505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36505__$1,(11),out,inst_36487);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto___36526,out))
;
return ((function (switch__34960__auto__,c__35055__auto___36526,out){
return (function() {
var cljs$core$async$state_machine__34961__auto__ = null;
var cljs$core$async$state_machine__34961__auto____0 = (function (){
var statearr_36521 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36521[(0)] = cljs$core$async$state_machine__34961__auto__);

(statearr_36521[(1)] = (1));

return statearr_36521;
});
var cljs$core$async$state_machine__34961__auto____1 = (function (state_36505){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_36505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e36522){if((e36522 instanceof Object)){
var ex__34964__auto__ = e36522;
var statearr_36523_36537 = state_36505;
(statearr_36523_36537[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36538 = state_36505;
state_36505 = G__36538;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$state_machine__34961__auto__ = function(state_36505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34961__auto____1.call(this,state_36505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34961__auto____0;
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34961__auto____1;
return cljs$core$async$state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___36526,out))
})();
var state__35057__auto__ = (function (){var statearr_36524 = f__35056__auto__.call(null);
(statearr_36524[(6)] = c__35055__auto___36526);

return statearr_36524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___36526,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36540 = (function (f,ch,meta36541){
this.f = f;
this.ch = ch;
this.meta36541 = meta36541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36542,meta36541__$1){
var self__ = this;
var _36542__$1 = this;
return (new cljs.core.async.t_cljs$core$async36540(self__.f,self__.ch,meta36541__$1));
});

cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36542){
var self__ = this;
var _36542__$1 = this;
return self__.meta36541;
});

cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36543 = (function (f,ch,meta36541,_,fn1,meta36544){
this.f = f;
this.ch = ch;
this.meta36541 = meta36541;
this._ = _;
this.fn1 = fn1;
this.meta36544 = meta36544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36545,meta36544__$1){
var self__ = this;
var _36545__$1 = this;
return (new cljs.core.async.t_cljs$core$async36543(self__.f,self__.ch,self__.meta36541,self__._,self__.fn1,meta36544__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36545){
var self__ = this;
var _36545__$1 = this;
return self__.meta36544;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36543.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36543.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36539_SHARP_){
return f1.call(null,(((p1__36539_SHARP_ == null))?null:self__.f.call(null,p1__36539_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36543.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36541","meta36541",-606269877,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36540","cljs.core.async/t_cljs$core$async36540",1561966029,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36544","meta36544",-544094278,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36543";

cljs.core.async.t_cljs$core$async36543.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async36543");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36543.
 */
cljs.core.async.__GT_t_cljs$core$async36543 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36543(f__$1,ch__$1,meta36541__$1,___$2,fn1__$1,meta36544){
return (new cljs.core.async.t_cljs$core$async36543(f__$1,ch__$1,meta36541__$1,___$2,fn1__$1,meta36544));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36543(self__.f,self__.ch,self__.meta36541,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36541","meta36541",-606269877,null)], null);
});

cljs.core.async.t_cljs$core$async36540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36540";

cljs.core.async.t_cljs$core$async36540.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async36540");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36540.
 */
cljs.core.async.__GT_t_cljs$core$async36540 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36540(f__$1,ch__$1,meta36541){
return (new cljs.core.async.t_cljs$core$async36540(f__$1,ch__$1,meta36541));
});

}

return (new cljs.core.async.t_cljs$core$async36540(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36546 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36546 = (function (f,ch,meta36547){
this.f = f;
this.ch = ch;
this.meta36547 = meta36547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36548,meta36547__$1){
var self__ = this;
var _36548__$1 = this;
return (new cljs.core.async.t_cljs$core$async36546(self__.f,self__.ch,meta36547__$1));
});

cljs.core.async.t_cljs$core$async36546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36548){
var self__ = this;
var _36548__$1 = this;
return self__.meta36547;
});

cljs.core.async.t_cljs$core$async36546.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36546.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36546.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36546.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36546.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36546.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36547","meta36547",-723260908,null)], null);
});

cljs.core.async.t_cljs$core$async36546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36546";

cljs.core.async.t_cljs$core$async36546.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async36546");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36546.
 */
cljs.core.async.__GT_t_cljs$core$async36546 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36546(f__$1,ch__$1,meta36547){
return (new cljs.core.async.t_cljs$core$async36546(f__$1,ch__$1,meta36547));
});

}

return (new cljs.core.async.t_cljs$core$async36546(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36549 = (function (p,ch,meta36550){
this.p = p;
this.ch = ch;
this.meta36550 = meta36550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36551,meta36550__$1){
var self__ = this;
var _36551__$1 = this;
return (new cljs.core.async.t_cljs$core$async36549(self__.p,self__.ch,meta36550__$1));
});

cljs.core.async.t_cljs$core$async36549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36551){
var self__ = this;
var _36551__$1 = this;
return self__.meta36550;
});

cljs.core.async.t_cljs$core$async36549.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36549.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36549.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36549.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36549.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36549.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36549.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36550","meta36550",-224219289,null)], null);
});

cljs.core.async.t_cljs$core$async36549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36549";

cljs.core.async.t_cljs$core$async36549.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async36549");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36549.
 */
cljs.core.async.__GT_t_cljs$core$async36549 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36549(p__$1,ch__$1,meta36550){
return (new cljs.core.async.t_cljs$core$async36549(p__$1,ch__$1,meta36550));
});

}

return (new cljs.core.async.t_cljs$core$async36549(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36553 = arguments.length;
switch (G__36553) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35055__auto___36593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___36593,out){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___36593,out){
return (function (state_36574){
var state_val_36575 = (state_36574[(1)]);
if((state_val_36575 === (7))){
var inst_36570 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
var statearr_36576_36594 = state_36574__$1;
(statearr_36576_36594[(2)] = inst_36570);

(statearr_36576_36594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (1))){
var state_36574__$1 = state_36574;
var statearr_36577_36595 = state_36574__$1;
(statearr_36577_36595[(2)] = null);

(statearr_36577_36595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (4))){
var inst_36556 = (state_36574[(7)]);
var inst_36556__$1 = (state_36574[(2)]);
var inst_36557 = (inst_36556__$1 == null);
var state_36574__$1 = (function (){var statearr_36578 = state_36574;
(statearr_36578[(7)] = inst_36556__$1);

return statearr_36578;
})();
if(cljs.core.truth_(inst_36557)){
var statearr_36579_36596 = state_36574__$1;
(statearr_36579_36596[(1)] = (5));

} else {
var statearr_36580_36597 = state_36574__$1;
(statearr_36580_36597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (6))){
var inst_36556 = (state_36574[(7)]);
var inst_36561 = p.call(null,inst_36556);
var state_36574__$1 = state_36574;
if(cljs.core.truth_(inst_36561)){
var statearr_36581_36598 = state_36574__$1;
(statearr_36581_36598[(1)] = (8));

} else {
var statearr_36582_36599 = state_36574__$1;
(statearr_36582_36599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (3))){
var inst_36572 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36574__$1,inst_36572);
} else {
if((state_val_36575 === (2))){
var state_36574__$1 = state_36574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36574__$1,(4),ch);
} else {
if((state_val_36575 === (11))){
var inst_36564 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
var statearr_36583_36600 = state_36574__$1;
(statearr_36583_36600[(2)] = inst_36564);

(statearr_36583_36600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (9))){
var state_36574__$1 = state_36574;
var statearr_36584_36601 = state_36574__$1;
(statearr_36584_36601[(2)] = null);

(statearr_36584_36601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (5))){
var inst_36559 = cljs.core.async.close_BANG_.call(null,out);
var state_36574__$1 = state_36574;
var statearr_36585_36602 = state_36574__$1;
(statearr_36585_36602[(2)] = inst_36559);

(statearr_36585_36602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (10))){
var inst_36567 = (state_36574[(2)]);
var state_36574__$1 = (function (){var statearr_36586 = state_36574;
(statearr_36586[(8)] = inst_36567);

return statearr_36586;
})();
var statearr_36587_36603 = state_36574__$1;
(statearr_36587_36603[(2)] = null);

(statearr_36587_36603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (8))){
var inst_36556 = (state_36574[(7)]);
var state_36574__$1 = state_36574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36574__$1,(11),out,inst_36556);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto___36593,out))
;
return ((function (switch__34960__auto__,c__35055__auto___36593,out){
return (function() {
var cljs$core$async$state_machine__34961__auto__ = null;
var cljs$core$async$state_machine__34961__auto____0 = (function (){
var statearr_36588 = [null,null,null,null,null,null,null,null,null];
(statearr_36588[(0)] = cljs$core$async$state_machine__34961__auto__);

(statearr_36588[(1)] = (1));

return statearr_36588;
});
var cljs$core$async$state_machine__34961__auto____1 = (function (state_36574){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_36574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e36589){if((e36589 instanceof Object)){
var ex__34964__auto__ = e36589;
var statearr_36590_36604 = state_36574;
(statearr_36590_36604[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36605 = state_36574;
state_36574 = G__36605;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$state_machine__34961__auto__ = function(state_36574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34961__auto____1.call(this,state_36574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34961__auto____0;
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34961__auto____1;
return cljs$core$async$state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___36593,out))
})();
var state__35057__auto__ = (function (){var statearr_36591 = f__35056__auto__.call(null);
(statearr_36591[(6)] = c__35055__auto___36593);

return statearr_36591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___36593,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36607 = arguments.length;
switch (G__36607) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto__){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto__){
return (function (state_36670){
var state_val_36671 = (state_36670[(1)]);
if((state_val_36671 === (7))){
var inst_36666 = (state_36670[(2)]);
var state_36670__$1 = state_36670;
var statearr_36672_36710 = state_36670__$1;
(statearr_36672_36710[(2)] = inst_36666);

(statearr_36672_36710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (20))){
var inst_36636 = (state_36670[(7)]);
var inst_36647 = (state_36670[(2)]);
var inst_36648 = cljs.core.next.call(null,inst_36636);
var inst_36622 = inst_36648;
var inst_36623 = null;
var inst_36624 = (0);
var inst_36625 = (0);
var state_36670__$1 = (function (){var statearr_36673 = state_36670;
(statearr_36673[(8)] = inst_36624);

(statearr_36673[(9)] = inst_36622);

(statearr_36673[(10)] = inst_36625);

(statearr_36673[(11)] = inst_36647);

(statearr_36673[(12)] = inst_36623);

return statearr_36673;
})();
var statearr_36674_36711 = state_36670__$1;
(statearr_36674_36711[(2)] = null);

(statearr_36674_36711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (1))){
var state_36670__$1 = state_36670;
var statearr_36675_36712 = state_36670__$1;
(statearr_36675_36712[(2)] = null);

(statearr_36675_36712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (4))){
var inst_36611 = (state_36670[(13)]);
var inst_36611__$1 = (state_36670[(2)]);
var inst_36612 = (inst_36611__$1 == null);
var state_36670__$1 = (function (){var statearr_36676 = state_36670;
(statearr_36676[(13)] = inst_36611__$1);

return statearr_36676;
})();
if(cljs.core.truth_(inst_36612)){
var statearr_36677_36713 = state_36670__$1;
(statearr_36677_36713[(1)] = (5));

} else {
var statearr_36678_36714 = state_36670__$1;
(statearr_36678_36714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (15))){
var state_36670__$1 = state_36670;
var statearr_36682_36715 = state_36670__$1;
(statearr_36682_36715[(2)] = null);

(statearr_36682_36715[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (21))){
var state_36670__$1 = state_36670;
var statearr_36683_36716 = state_36670__$1;
(statearr_36683_36716[(2)] = null);

(statearr_36683_36716[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (13))){
var inst_36624 = (state_36670[(8)]);
var inst_36622 = (state_36670[(9)]);
var inst_36625 = (state_36670[(10)]);
var inst_36623 = (state_36670[(12)]);
var inst_36632 = (state_36670[(2)]);
var inst_36633 = (inst_36625 + (1));
var tmp36679 = inst_36624;
var tmp36680 = inst_36622;
var tmp36681 = inst_36623;
var inst_36622__$1 = tmp36680;
var inst_36623__$1 = tmp36681;
var inst_36624__$1 = tmp36679;
var inst_36625__$1 = inst_36633;
var state_36670__$1 = (function (){var statearr_36684 = state_36670;
(statearr_36684[(8)] = inst_36624__$1);

(statearr_36684[(9)] = inst_36622__$1);

(statearr_36684[(14)] = inst_36632);

(statearr_36684[(10)] = inst_36625__$1);

(statearr_36684[(12)] = inst_36623__$1);

return statearr_36684;
})();
var statearr_36685_36717 = state_36670__$1;
(statearr_36685_36717[(2)] = null);

(statearr_36685_36717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (22))){
var state_36670__$1 = state_36670;
var statearr_36686_36718 = state_36670__$1;
(statearr_36686_36718[(2)] = null);

(statearr_36686_36718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (6))){
var inst_36611 = (state_36670[(13)]);
var inst_36620 = f.call(null,inst_36611);
var inst_36621 = cljs.core.seq.call(null,inst_36620);
var inst_36622 = inst_36621;
var inst_36623 = null;
var inst_36624 = (0);
var inst_36625 = (0);
var state_36670__$1 = (function (){var statearr_36687 = state_36670;
(statearr_36687[(8)] = inst_36624);

(statearr_36687[(9)] = inst_36622);

(statearr_36687[(10)] = inst_36625);

(statearr_36687[(12)] = inst_36623);

return statearr_36687;
})();
var statearr_36688_36719 = state_36670__$1;
(statearr_36688_36719[(2)] = null);

(statearr_36688_36719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (17))){
var inst_36636 = (state_36670[(7)]);
var inst_36640 = cljs.core.chunk_first.call(null,inst_36636);
var inst_36641 = cljs.core.chunk_rest.call(null,inst_36636);
var inst_36642 = cljs.core.count.call(null,inst_36640);
var inst_36622 = inst_36641;
var inst_36623 = inst_36640;
var inst_36624 = inst_36642;
var inst_36625 = (0);
var state_36670__$1 = (function (){var statearr_36689 = state_36670;
(statearr_36689[(8)] = inst_36624);

(statearr_36689[(9)] = inst_36622);

(statearr_36689[(10)] = inst_36625);

(statearr_36689[(12)] = inst_36623);

return statearr_36689;
})();
var statearr_36690_36720 = state_36670__$1;
(statearr_36690_36720[(2)] = null);

(statearr_36690_36720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (3))){
var inst_36668 = (state_36670[(2)]);
var state_36670__$1 = state_36670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36670__$1,inst_36668);
} else {
if((state_val_36671 === (12))){
var inst_36656 = (state_36670[(2)]);
var state_36670__$1 = state_36670;
var statearr_36691_36721 = state_36670__$1;
(statearr_36691_36721[(2)] = inst_36656);

(statearr_36691_36721[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (2))){
var state_36670__$1 = state_36670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36670__$1,(4),in$);
} else {
if((state_val_36671 === (23))){
var inst_36664 = (state_36670[(2)]);
var state_36670__$1 = state_36670;
var statearr_36692_36722 = state_36670__$1;
(statearr_36692_36722[(2)] = inst_36664);

(statearr_36692_36722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (19))){
var inst_36651 = (state_36670[(2)]);
var state_36670__$1 = state_36670;
var statearr_36693_36723 = state_36670__$1;
(statearr_36693_36723[(2)] = inst_36651);

(statearr_36693_36723[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (11))){
var inst_36636 = (state_36670[(7)]);
var inst_36622 = (state_36670[(9)]);
var inst_36636__$1 = cljs.core.seq.call(null,inst_36622);
var state_36670__$1 = (function (){var statearr_36694 = state_36670;
(statearr_36694[(7)] = inst_36636__$1);

return statearr_36694;
})();
if(inst_36636__$1){
var statearr_36695_36724 = state_36670__$1;
(statearr_36695_36724[(1)] = (14));

} else {
var statearr_36696_36725 = state_36670__$1;
(statearr_36696_36725[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (9))){
var inst_36658 = (state_36670[(2)]);
var inst_36659 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36670__$1 = (function (){var statearr_36697 = state_36670;
(statearr_36697[(15)] = inst_36658);

return statearr_36697;
})();
if(cljs.core.truth_(inst_36659)){
var statearr_36698_36726 = state_36670__$1;
(statearr_36698_36726[(1)] = (21));

} else {
var statearr_36699_36727 = state_36670__$1;
(statearr_36699_36727[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (5))){
var inst_36614 = cljs.core.async.close_BANG_.call(null,out);
var state_36670__$1 = state_36670;
var statearr_36700_36728 = state_36670__$1;
(statearr_36700_36728[(2)] = inst_36614);

(statearr_36700_36728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (14))){
var inst_36636 = (state_36670[(7)]);
var inst_36638 = cljs.core.chunked_seq_QMARK_.call(null,inst_36636);
var state_36670__$1 = state_36670;
if(inst_36638){
var statearr_36701_36729 = state_36670__$1;
(statearr_36701_36729[(1)] = (17));

} else {
var statearr_36702_36730 = state_36670__$1;
(statearr_36702_36730[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (16))){
var inst_36654 = (state_36670[(2)]);
var state_36670__$1 = state_36670;
var statearr_36703_36731 = state_36670__$1;
(statearr_36703_36731[(2)] = inst_36654);

(statearr_36703_36731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (10))){
var inst_36625 = (state_36670[(10)]);
var inst_36623 = (state_36670[(12)]);
var inst_36630 = cljs.core._nth.call(null,inst_36623,inst_36625);
var state_36670__$1 = state_36670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36670__$1,(13),out,inst_36630);
} else {
if((state_val_36671 === (18))){
var inst_36636 = (state_36670[(7)]);
var inst_36645 = cljs.core.first.call(null,inst_36636);
var state_36670__$1 = state_36670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36670__$1,(20),out,inst_36645);
} else {
if((state_val_36671 === (8))){
var inst_36624 = (state_36670[(8)]);
var inst_36625 = (state_36670[(10)]);
var inst_36627 = (inst_36625 < inst_36624);
var inst_36628 = inst_36627;
var state_36670__$1 = state_36670;
if(cljs.core.truth_(inst_36628)){
var statearr_36704_36732 = state_36670__$1;
(statearr_36704_36732[(1)] = (10));

} else {
var statearr_36705_36733 = state_36670__$1;
(statearr_36705_36733[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto__))
;
return ((function (switch__34960__auto__,c__35055__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34961__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34961__auto____0 = (function (){
var statearr_36706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36706[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34961__auto__);

(statearr_36706[(1)] = (1));

return statearr_36706;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34961__auto____1 = (function (state_36670){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_36670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e36707){if((e36707 instanceof Object)){
var ex__34964__auto__ = e36707;
var statearr_36708_36734 = state_36670;
(statearr_36708_36734[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36735 = state_36670;
state_36670 = G__36735;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34961__auto__ = function(state_36670){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34961__auto____1.call(this,state_36670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34961__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34961__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto__))
})();
var state__35057__auto__ = (function (){var statearr_36709 = f__35056__auto__.call(null);
(statearr_36709[(6)] = c__35055__auto__);

return statearr_36709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto__))
);

return c__35055__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36737 = arguments.length;
switch (G__36737) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36740 = arguments.length;
switch (G__36740) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36743 = arguments.length;
switch (G__36743) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35055__auto___36790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___36790,out){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___36790,out){
return (function (state_36767){
var state_val_36768 = (state_36767[(1)]);
if((state_val_36768 === (7))){
var inst_36762 = (state_36767[(2)]);
var state_36767__$1 = state_36767;
var statearr_36769_36791 = state_36767__$1;
(statearr_36769_36791[(2)] = inst_36762);

(statearr_36769_36791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36768 === (1))){
var inst_36744 = null;
var state_36767__$1 = (function (){var statearr_36770 = state_36767;
(statearr_36770[(7)] = inst_36744);

return statearr_36770;
})();
var statearr_36771_36792 = state_36767__$1;
(statearr_36771_36792[(2)] = null);

(statearr_36771_36792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36768 === (4))){
var inst_36747 = (state_36767[(8)]);
var inst_36747__$1 = (state_36767[(2)]);
var inst_36748 = (inst_36747__$1 == null);
var inst_36749 = cljs.core.not.call(null,inst_36748);
var state_36767__$1 = (function (){var statearr_36772 = state_36767;
(statearr_36772[(8)] = inst_36747__$1);

return statearr_36772;
})();
if(inst_36749){
var statearr_36773_36793 = state_36767__$1;
(statearr_36773_36793[(1)] = (5));

} else {
var statearr_36774_36794 = state_36767__$1;
(statearr_36774_36794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36768 === (6))){
var state_36767__$1 = state_36767;
var statearr_36775_36795 = state_36767__$1;
(statearr_36775_36795[(2)] = null);

(statearr_36775_36795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36768 === (3))){
var inst_36764 = (state_36767[(2)]);
var inst_36765 = cljs.core.async.close_BANG_.call(null,out);
var state_36767__$1 = (function (){var statearr_36776 = state_36767;
(statearr_36776[(9)] = inst_36764);

return statearr_36776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36767__$1,inst_36765);
} else {
if((state_val_36768 === (2))){
var state_36767__$1 = state_36767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36767__$1,(4),ch);
} else {
if((state_val_36768 === (11))){
var inst_36747 = (state_36767[(8)]);
var inst_36756 = (state_36767[(2)]);
var inst_36744 = inst_36747;
var state_36767__$1 = (function (){var statearr_36777 = state_36767;
(statearr_36777[(7)] = inst_36744);

(statearr_36777[(10)] = inst_36756);

return statearr_36777;
})();
var statearr_36778_36796 = state_36767__$1;
(statearr_36778_36796[(2)] = null);

(statearr_36778_36796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36768 === (9))){
var inst_36747 = (state_36767[(8)]);
var state_36767__$1 = state_36767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36767__$1,(11),out,inst_36747);
} else {
if((state_val_36768 === (5))){
var inst_36744 = (state_36767[(7)]);
var inst_36747 = (state_36767[(8)]);
var inst_36751 = cljs.core._EQ_.call(null,inst_36747,inst_36744);
var state_36767__$1 = state_36767;
if(inst_36751){
var statearr_36780_36797 = state_36767__$1;
(statearr_36780_36797[(1)] = (8));

} else {
var statearr_36781_36798 = state_36767__$1;
(statearr_36781_36798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36768 === (10))){
var inst_36759 = (state_36767[(2)]);
var state_36767__$1 = state_36767;
var statearr_36782_36799 = state_36767__$1;
(statearr_36782_36799[(2)] = inst_36759);

(statearr_36782_36799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36768 === (8))){
var inst_36744 = (state_36767[(7)]);
var tmp36779 = inst_36744;
var inst_36744__$1 = tmp36779;
var state_36767__$1 = (function (){var statearr_36783 = state_36767;
(statearr_36783[(7)] = inst_36744__$1);

return statearr_36783;
})();
var statearr_36784_36800 = state_36767__$1;
(statearr_36784_36800[(2)] = null);

(statearr_36784_36800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto___36790,out))
;
return ((function (switch__34960__auto__,c__35055__auto___36790,out){
return (function() {
var cljs$core$async$state_machine__34961__auto__ = null;
var cljs$core$async$state_machine__34961__auto____0 = (function (){
var statearr_36785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36785[(0)] = cljs$core$async$state_machine__34961__auto__);

(statearr_36785[(1)] = (1));

return statearr_36785;
});
var cljs$core$async$state_machine__34961__auto____1 = (function (state_36767){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_36767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e36786){if((e36786 instanceof Object)){
var ex__34964__auto__ = e36786;
var statearr_36787_36801 = state_36767;
(statearr_36787_36801[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36802 = state_36767;
state_36767 = G__36802;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$state_machine__34961__auto__ = function(state_36767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34961__auto____1.call(this,state_36767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34961__auto____0;
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34961__auto____1;
return cljs$core$async$state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___36790,out))
})();
var state__35057__auto__ = (function (){var statearr_36788 = f__35056__auto__.call(null);
(statearr_36788[(6)] = c__35055__auto___36790);

return statearr_36788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___36790,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36804 = arguments.length;
switch (G__36804) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35055__auto___36870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___36870,out){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___36870,out){
return (function (state_36842){
var state_val_36843 = (state_36842[(1)]);
if((state_val_36843 === (7))){
var inst_36838 = (state_36842[(2)]);
var state_36842__$1 = state_36842;
var statearr_36844_36871 = state_36842__$1;
(statearr_36844_36871[(2)] = inst_36838);

(statearr_36844_36871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (1))){
var inst_36805 = (new Array(n));
var inst_36806 = inst_36805;
var inst_36807 = (0);
var state_36842__$1 = (function (){var statearr_36845 = state_36842;
(statearr_36845[(7)] = inst_36807);

(statearr_36845[(8)] = inst_36806);

return statearr_36845;
})();
var statearr_36846_36872 = state_36842__$1;
(statearr_36846_36872[(2)] = null);

(statearr_36846_36872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (4))){
var inst_36810 = (state_36842[(9)]);
var inst_36810__$1 = (state_36842[(2)]);
var inst_36811 = (inst_36810__$1 == null);
var inst_36812 = cljs.core.not.call(null,inst_36811);
var state_36842__$1 = (function (){var statearr_36847 = state_36842;
(statearr_36847[(9)] = inst_36810__$1);

return statearr_36847;
})();
if(inst_36812){
var statearr_36848_36873 = state_36842__$1;
(statearr_36848_36873[(1)] = (5));

} else {
var statearr_36849_36874 = state_36842__$1;
(statearr_36849_36874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (15))){
var inst_36832 = (state_36842[(2)]);
var state_36842__$1 = state_36842;
var statearr_36850_36875 = state_36842__$1;
(statearr_36850_36875[(2)] = inst_36832);

(statearr_36850_36875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (13))){
var state_36842__$1 = state_36842;
var statearr_36851_36876 = state_36842__$1;
(statearr_36851_36876[(2)] = null);

(statearr_36851_36876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (6))){
var inst_36807 = (state_36842[(7)]);
var inst_36828 = (inst_36807 > (0));
var state_36842__$1 = state_36842;
if(cljs.core.truth_(inst_36828)){
var statearr_36852_36877 = state_36842__$1;
(statearr_36852_36877[(1)] = (12));

} else {
var statearr_36853_36878 = state_36842__$1;
(statearr_36853_36878[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (3))){
var inst_36840 = (state_36842[(2)]);
var state_36842__$1 = state_36842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36842__$1,inst_36840);
} else {
if((state_val_36843 === (12))){
var inst_36806 = (state_36842[(8)]);
var inst_36830 = cljs.core.vec.call(null,inst_36806);
var state_36842__$1 = state_36842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36842__$1,(15),out,inst_36830);
} else {
if((state_val_36843 === (2))){
var state_36842__$1 = state_36842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36842__$1,(4),ch);
} else {
if((state_val_36843 === (11))){
var inst_36822 = (state_36842[(2)]);
var inst_36823 = (new Array(n));
var inst_36806 = inst_36823;
var inst_36807 = (0);
var state_36842__$1 = (function (){var statearr_36854 = state_36842;
(statearr_36854[(7)] = inst_36807);

(statearr_36854[(8)] = inst_36806);

(statearr_36854[(10)] = inst_36822);

return statearr_36854;
})();
var statearr_36855_36879 = state_36842__$1;
(statearr_36855_36879[(2)] = null);

(statearr_36855_36879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (9))){
var inst_36806 = (state_36842[(8)]);
var inst_36820 = cljs.core.vec.call(null,inst_36806);
var state_36842__$1 = state_36842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36842__$1,(11),out,inst_36820);
} else {
if((state_val_36843 === (5))){
var inst_36815 = (state_36842[(11)]);
var inst_36810 = (state_36842[(9)]);
var inst_36807 = (state_36842[(7)]);
var inst_36806 = (state_36842[(8)]);
var inst_36814 = (inst_36806[inst_36807] = inst_36810);
var inst_36815__$1 = (inst_36807 + (1));
var inst_36816 = (inst_36815__$1 < n);
var state_36842__$1 = (function (){var statearr_36856 = state_36842;
(statearr_36856[(12)] = inst_36814);

(statearr_36856[(11)] = inst_36815__$1);

return statearr_36856;
})();
if(cljs.core.truth_(inst_36816)){
var statearr_36857_36880 = state_36842__$1;
(statearr_36857_36880[(1)] = (8));

} else {
var statearr_36858_36881 = state_36842__$1;
(statearr_36858_36881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (14))){
var inst_36835 = (state_36842[(2)]);
var inst_36836 = cljs.core.async.close_BANG_.call(null,out);
var state_36842__$1 = (function (){var statearr_36860 = state_36842;
(statearr_36860[(13)] = inst_36835);

return statearr_36860;
})();
var statearr_36861_36882 = state_36842__$1;
(statearr_36861_36882[(2)] = inst_36836);

(statearr_36861_36882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (10))){
var inst_36826 = (state_36842[(2)]);
var state_36842__$1 = state_36842;
var statearr_36862_36883 = state_36842__$1;
(statearr_36862_36883[(2)] = inst_36826);

(statearr_36862_36883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (8))){
var inst_36815 = (state_36842[(11)]);
var inst_36806 = (state_36842[(8)]);
var tmp36859 = inst_36806;
var inst_36806__$1 = tmp36859;
var inst_36807 = inst_36815;
var state_36842__$1 = (function (){var statearr_36863 = state_36842;
(statearr_36863[(7)] = inst_36807);

(statearr_36863[(8)] = inst_36806__$1);

return statearr_36863;
})();
var statearr_36864_36884 = state_36842__$1;
(statearr_36864_36884[(2)] = null);

(statearr_36864_36884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto___36870,out))
;
return ((function (switch__34960__auto__,c__35055__auto___36870,out){
return (function() {
var cljs$core$async$state_machine__34961__auto__ = null;
var cljs$core$async$state_machine__34961__auto____0 = (function (){
var statearr_36865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36865[(0)] = cljs$core$async$state_machine__34961__auto__);

(statearr_36865[(1)] = (1));

return statearr_36865;
});
var cljs$core$async$state_machine__34961__auto____1 = (function (state_36842){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_36842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e36866){if((e36866 instanceof Object)){
var ex__34964__auto__ = e36866;
var statearr_36867_36885 = state_36842;
(statearr_36867_36885[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36886 = state_36842;
state_36842 = G__36886;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$state_machine__34961__auto__ = function(state_36842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34961__auto____1.call(this,state_36842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34961__auto____0;
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34961__auto____1;
return cljs$core$async$state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___36870,out))
})();
var state__35057__auto__ = (function (){var statearr_36868 = f__35056__auto__.call(null);
(statearr_36868[(6)] = c__35055__auto___36870);

return statearr_36868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___36870,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36888 = arguments.length;
switch (G__36888) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35055__auto___36958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___36958,out){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___36958,out){
return (function (state_36930){
var state_val_36931 = (state_36930[(1)]);
if((state_val_36931 === (7))){
var inst_36926 = (state_36930[(2)]);
var state_36930__$1 = state_36930;
var statearr_36932_36959 = state_36930__$1;
(statearr_36932_36959[(2)] = inst_36926);

(statearr_36932_36959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (1))){
var inst_36889 = [];
var inst_36890 = inst_36889;
var inst_36891 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36930__$1 = (function (){var statearr_36933 = state_36930;
(statearr_36933[(7)] = inst_36890);

(statearr_36933[(8)] = inst_36891);

return statearr_36933;
})();
var statearr_36934_36960 = state_36930__$1;
(statearr_36934_36960[(2)] = null);

(statearr_36934_36960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (4))){
var inst_36894 = (state_36930[(9)]);
var inst_36894__$1 = (state_36930[(2)]);
var inst_36895 = (inst_36894__$1 == null);
var inst_36896 = cljs.core.not.call(null,inst_36895);
var state_36930__$1 = (function (){var statearr_36935 = state_36930;
(statearr_36935[(9)] = inst_36894__$1);

return statearr_36935;
})();
if(inst_36896){
var statearr_36936_36961 = state_36930__$1;
(statearr_36936_36961[(1)] = (5));

} else {
var statearr_36937_36962 = state_36930__$1;
(statearr_36937_36962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (15))){
var inst_36920 = (state_36930[(2)]);
var state_36930__$1 = state_36930;
var statearr_36938_36963 = state_36930__$1;
(statearr_36938_36963[(2)] = inst_36920);

(statearr_36938_36963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (13))){
var state_36930__$1 = state_36930;
var statearr_36939_36964 = state_36930__$1;
(statearr_36939_36964[(2)] = null);

(statearr_36939_36964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (6))){
var inst_36890 = (state_36930[(7)]);
var inst_36915 = inst_36890.length;
var inst_36916 = (inst_36915 > (0));
var state_36930__$1 = state_36930;
if(cljs.core.truth_(inst_36916)){
var statearr_36940_36965 = state_36930__$1;
(statearr_36940_36965[(1)] = (12));

} else {
var statearr_36941_36966 = state_36930__$1;
(statearr_36941_36966[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (3))){
var inst_36928 = (state_36930[(2)]);
var state_36930__$1 = state_36930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36930__$1,inst_36928);
} else {
if((state_val_36931 === (12))){
var inst_36890 = (state_36930[(7)]);
var inst_36918 = cljs.core.vec.call(null,inst_36890);
var state_36930__$1 = state_36930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36930__$1,(15),out,inst_36918);
} else {
if((state_val_36931 === (2))){
var state_36930__$1 = state_36930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36930__$1,(4),ch);
} else {
if((state_val_36931 === (11))){
var inst_36898 = (state_36930[(10)]);
var inst_36894 = (state_36930[(9)]);
var inst_36908 = (state_36930[(2)]);
var inst_36909 = [];
var inst_36910 = inst_36909.push(inst_36894);
var inst_36890 = inst_36909;
var inst_36891 = inst_36898;
var state_36930__$1 = (function (){var statearr_36942 = state_36930;
(statearr_36942[(7)] = inst_36890);

(statearr_36942[(11)] = inst_36910);

(statearr_36942[(12)] = inst_36908);

(statearr_36942[(8)] = inst_36891);

return statearr_36942;
})();
var statearr_36943_36967 = state_36930__$1;
(statearr_36943_36967[(2)] = null);

(statearr_36943_36967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (9))){
var inst_36890 = (state_36930[(7)]);
var inst_36906 = cljs.core.vec.call(null,inst_36890);
var state_36930__$1 = state_36930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36930__$1,(11),out,inst_36906);
} else {
if((state_val_36931 === (5))){
var inst_36898 = (state_36930[(10)]);
var inst_36894 = (state_36930[(9)]);
var inst_36891 = (state_36930[(8)]);
var inst_36898__$1 = f.call(null,inst_36894);
var inst_36899 = cljs.core._EQ_.call(null,inst_36898__$1,inst_36891);
var inst_36900 = cljs.core.keyword_identical_QMARK_.call(null,inst_36891,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36901 = ((inst_36899) || (inst_36900));
var state_36930__$1 = (function (){var statearr_36944 = state_36930;
(statearr_36944[(10)] = inst_36898__$1);

return statearr_36944;
})();
if(cljs.core.truth_(inst_36901)){
var statearr_36945_36968 = state_36930__$1;
(statearr_36945_36968[(1)] = (8));

} else {
var statearr_36946_36969 = state_36930__$1;
(statearr_36946_36969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (14))){
var inst_36923 = (state_36930[(2)]);
var inst_36924 = cljs.core.async.close_BANG_.call(null,out);
var state_36930__$1 = (function (){var statearr_36948 = state_36930;
(statearr_36948[(13)] = inst_36923);

return statearr_36948;
})();
var statearr_36949_36970 = state_36930__$1;
(statearr_36949_36970[(2)] = inst_36924);

(statearr_36949_36970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (10))){
var inst_36913 = (state_36930[(2)]);
var state_36930__$1 = state_36930;
var statearr_36950_36971 = state_36930__$1;
(statearr_36950_36971[(2)] = inst_36913);

(statearr_36950_36971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (8))){
var inst_36898 = (state_36930[(10)]);
var inst_36890 = (state_36930[(7)]);
var inst_36894 = (state_36930[(9)]);
var inst_36903 = inst_36890.push(inst_36894);
var tmp36947 = inst_36890;
var inst_36890__$1 = tmp36947;
var inst_36891 = inst_36898;
var state_36930__$1 = (function (){var statearr_36951 = state_36930;
(statearr_36951[(7)] = inst_36890__$1);

(statearr_36951[(8)] = inst_36891);

(statearr_36951[(14)] = inst_36903);

return statearr_36951;
})();
var statearr_36952_36972 = state_36930__$1;
(statearr_36952_36972[(2)] = null);

(statearr_36952_36972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto___36958,out))
;
return ((function (switch__34960__auto__,c__35055__auto___36958,out){
return (function() {
var cljs$core$async$state_machine__34961__auto__ = null;
var cljs$core$async$state_machine__34961__auto____0 = (function (){
var statearr_36953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36953[(0)] = cljs$core$async$state_machine__34961__auto__);

(statearr_36953[(1)] = (1));

return statearr_36953;
});
var cljs$core$async$state_machine__34961__auto____1 = (function (state_36930){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_36930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e36954){if((e36954 instanceof Object)){
var ex__34964__auto__ = e36954;
var statearr_36955_36973 = state_36930;
(statearr_36955_36973[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36974 = state_36930;
state_36930 = G__36974;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
cljs$core$async$state_machine__34961__auto__ = function(state_36930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34961__auto____1.call(this,state_36930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34961__auto____0;
cljs$core$async$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34961__auto____1;
return cljs$core$async$state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___36958,out))
})();
var state__35057__auto__ = (function (){var statearr_36956 = f__35056__auto__.call(null);
(statearr_36956[(6)] = c__35055__auto___36958);

return statearr_36956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___36958,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1576361244613
