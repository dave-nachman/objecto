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
var G__31954 = arguments.length;
switch (G__31954) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31955 = (function (f,blockable,meta31956){
this.f = f;
this.blockable = blockable;
this.meta31956 = meta31956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31957,meta31956__$1){
var self__ = this;
var _31957__$1 = this;
return (new cljs.core.async.t_cljs$core$async31955(self__.f,self__.blockable,meta31956__$1));
});

cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31957){
var self__ = this;
var _31957__$1 = this;
return self__.meta31956;
});

cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31956","meta31956",-2060337444,null)], null);
});

cljs.core.async.t_cljs$core$async31955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31955";

cljs.core.async.t_cljs$core$async31955.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31955");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31955.
 */
cljs.core.async.__GT_t_cljs$core$async31955 = (function cljs$core$async$__GT_t_cljs$core$async31955(f__$1,blockable__$1,meta31956){
return (new cljs.core.async.t_cljs$core$async31955(f__$1,blockable__$1,meta31956));
});

}

return (new cljs.core.async.t_cljs$core$async31955(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31961 = arguments.length;
switch (G__31961) {
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
var G__31964 = arguments.length;
switch (G__31964) {
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
var G__31967 = arguments.length;
switch (G__31967) {
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
var val_31969 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31969);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31969,ret){
return (function (){
return fn1.call(null,val_31969);
});})(val_31969,ret))
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
var G__31971 = arguments.length;
switch (G__31971) {
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
var n__4607__auto___31973 = n;
var x_31974 = (0);
while(true){
if((x_31974 < n__4607__auto___31973)){
(a[x_31974] = x_31974);

var G__31975 = (x_31974 + (1));
x_31974 = G__31975;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31976 = (function (flag,meta31977){
this.flag = flag;
this.meta31977 = meta31977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31978,meta31977__$1){
var self__ = this;
var _31978__$1 = this;
return (new cljs.core.async.t_cljs$core$async31976(self__.flag,meta31977__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31978){
var self__ = this;
var _31978__$1 = this;
return self__.meta31977;
});})(flag))
;

cljs.core.async.t_cljs$core$async31976.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31976.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31976.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31977","meta31977",1743962577,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31976";

cljs.core.async.t_cljs$core$async31976.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31976");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31976.
 */
cljs.core.async.__GT_t_cljs$core$async31976 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31976(flag__$1,meta31977){
return (new cljs.core.async.t_cljs$core$async31976(flag__$1,meta31977));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31976(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31979 = (function (flag,cb,meta31980){
this.flag = flag;
this.cb = cb;
this.meta31980 = meta31980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31981,meta31980__$1){
var self__ = this;
var _31981__$1 = this;
return (new cljs.core.async.t_cljs$core$async31979(self__.flag,self__.cb,meta31980__$1));
});

cljs.core.async.t_cljs$core$async31979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31981){
var self__ = this;
var _31981__$1 = this;
return self__.meta31980;
});

cljs.core.async.t_cljs$core$async31979.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31980","meta31980",-834389073,null)], null);
});

cljs.core.async.t_cljs$core$async31979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31979";

cljs.core.async.t_cljs$core$async31979.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31979");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31979.
 */
cljs.core.async.__GT_t_cljs$core$async31979 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31979(flag__$1,cb__$1,meta31980){
return (new cljs.core.async.t_cljs$core$async31979(flag__$1,cb__$1,meta31980));
});

}

return (new cljs.core.async.t_cljs$core$async31979(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31982_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31982_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31983_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31983_SHARP_,port], null));
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
var G__31984 = (i + (1));
i = G__31984;
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
var len__4730__auto___31990 = arguments.length;
var i__4731__auto___31991 = (0);
while(true){
if((i__4731__auto___31991 < len__4730__auto___31990)){
args__4736__auto__.push((arguments[i__4731__auto___31991]));

var G__31992 = (i__4731__auto___31991 + (1));
i__4731__auto___31991 = G__31992;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31987){
var map__31988 = p__31987;
var map__31988__$1 = (((((!((map__31988 == null))))?(((((map__31988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31988):map__31988);
var opts = map__31988__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31985){
var G__31986 = cljs.core.first.call(null,seq31985);
var seq31985__$1 = cljs.core.next.call(null,seq31985);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31986,seq31985__$1);
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
var G__31994 = arguments.length;
switch (G__31994) {
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
var c__31894__auto___32040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___32040){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___32040){
return (function (state_32018){
var state_val_32019 = (state_32018[(1)]);
if((state_val_32019 === (7))){
var inst_32014 = (state_32018[(2)]);
var state_32018__$1 = state_32018;
var statearr_32020_32041 = state_32018__$1;
(statearr_32020_32041[(2)] = inst_32014);

(statearr_32020_32041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (1))){
var state_32018__$1 = state_32018;
var statearr_32021_32042 = state_32018__$1;
(statearr_32021_32042[(2)] = null);

(statearr_32021_32042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (4))){
var inst_31997 = (state_32018[(7)]);
var inst_31997__$1 = (state_32018[(2)]);
var inst_31998 = (inst_31997__$1 == null);
var state_32018__$1 = (function (){var statearr_32022 = state_32018;
(statearr_32022[(7)] = inst_31997__$1);

return statearr_32022;
})();
if(cljs.core.truth_(inst_31998)){
var statearr_32023_32043 = state_32018__$1;
(statearr_32023_32043[(1)] = (5));

} else {
var statearr_32024_32044 = state_32018__$1;
(statearr_32024_32044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (13))){
var state_32018__$1 = state_32018;
var statearr_32025_32045 = state_32018__$1;
(statearr_32025_32045[(2)] = null);

(statearr_32025_32045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (6))){
var inst_31997 = (state_32018[(7)]);
var state_32018__$1 = state_32018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32018__$1,(11),to,inst_31997);
} else {
if((state_val_32019 === (3))){
var inst_32016 = (state_32018[(2)]);
var state_32018__$1 = state_32018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32018__$1,inst_32016);
} else {
if((state_val_32019 === (12))){
var state_32018__$1 = state_32018;
var statearr_32026_32046 = state_32018__$1;
(statearr_32026_32046[(2)] = null);

(statearr_32026_32046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (2))){
var state_32018__$1 = state_32018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32018__$1,(4),from);
} else {
if((state_val_32019 === (11))){
var inst_32007 = (state_32018[(2)]);
var state_32018__$1 = state_32018;
if(cljs.core.truth_(inst_32007)){
var statearr_32027_32047 = state_32018__$1;
(statearr_32027_32047[(1)] = (12));

} else {
var statearr_32028_32048 = state_32018__$1;
(statearr_32028_32048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (9))){
var state_32018__$1 = state_32018;
var statearr_32029_32049 = state_32018__$1;
(statearr_32029_32049[(2)] = null);

(statearr_32029_32049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (5))){
var state_32018__$1 = state_32018;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32030_32050 = state_32018__$1;
(statearr_32030_32050[(1)] = (8));

} else {
var statearr_32031_32051 = state_32018__$1;
(statearr_32031_32051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (14))){
var inst_32012 = (state_32018[(2)]);
var state_32018__$1 = state_32018;
var statearr_32032_32052 = state_32018__$1;
(statearr_32032_32052[(2)] = inst_32012);

(statearr_32032_32052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (10))){
var inst_32004 = (state_32018[(2)]);
var state_32018__$1 = state_32018;
var statearr_32033_32053 = state_32018__$1;
(statearr_32033_32053[(2)] = inst_32004);

(statearr_32033_32053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (8))){
var inst_32001 = cljs.core.async.close_BANG_.call(null,to);
var state_32018__$1 = state_32018;
var statearr_32034_32054 = state_32018__$1;
(statearr_32034_32054[(2)] = inst_32001);

(statearr_32034_32054[(1)] = (10));


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
});})(c__31894__auto___32040))
;
return ((function (switch__31799__auto__,c__31894__auto___32040){
return (function() {
var cljs$core$async$state_machine__31800__auto__ = null;
var cljs$core$async$state_machine__31800__auto____0 = (function (){
var statearr_32035 = [null,null,null,null,null,null,null,null];
(statearr_32035[(0)] = cljs$core$async$state_machine__31800__auto__);

(statearr_32035[(1)] = (1));

return statearr_32035;
});
var cljs$core$async$state_machine__31800__auto____1 = (function (state_32018){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_32018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e32036){if((e32036 instanceof Object)){
var ex__31803__auto__ = e32036;
var statearr_32037_32055 = state_32018;
(statearr_32037_32055[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32056 = state_32018;
state_32018 = G__32056;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$state_machine__31800__auto__ = function(state_32018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31800__auto____1.call(this,state_32018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31800__auto____0;
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31800__auto____1;
return cljs$core$async$state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___32040))
})();
var state__31896__auto__ = (function (){var statearr_32038 = f__31895__auto__.call(null);
(statearr_32038[(6)] = c__31894__auto___32040);

return statearr_32038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___32040))
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
return (function (p__32057){
var vec__32058 = p__32057;
var v = cljs.core.nth.call(null,vec__32058,(0),null);
var p = cljs.core.nth.call(null,vec__32058,(1),null);
var job = vec__32058;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31894__auto___32229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___32229,res,vec__32058,v,p,job,jobs,results){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___32229,res,vec__32058,v,p,job,jobs,results){
return (function (state_32065){
var state_val_32066 = (state_32065[(1)]);
if((state_val_32066 === (1))){
var state_32065__$1 = state_32065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32065__$1,(2),res,v);
} else {
if((state_val_32066 === (2))){
var inst_32062 = (state_32065[(2)]);
var inst_32063 = cljs.core.async.close_BANG_.call(null,res);
var state_32065__$1 = (function (){var statearr_32067 = state_32065;
(statearr_32067[(7)] = inst_32062);

return statearr_32067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32065__$1,inst_32063);
} else {
return null;
}
}
});})(c__31894__auto___32229,res,vec__32058,v,p,job,jobs,results))
;
return ((function (switch__31799__auto__,c__31894__auto___32229,res,vec__32058,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0 = (function (){
var statearr_32068 = [null,null,null,null,null,null,null,null];
(statearr_32068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__);

(statearr_32068[(1)] = (1));

return statearr_32068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1 = (function (state_32065){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_32065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e32069){if((e32069 instanceof Object)){
var ex__31803__auto__ = e32069;
var statearr_32070_32230 = state_32065;
(statearr_32070_32230[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32231 = state_32065;
state_32065 = G__32231;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__ = function(state_32065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1.call(this,state_32065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___32229,res,vec__32058,v,p,job,jobs,results))
})();
var state__31896__auto__ = (function (){var statearr_32071 = f__31895__auto__.call(null);
(statearr_32071[(6)] = c__31894__auto___32229);

return statearr_32071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___32229,res,vec__32058,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32072){
var vec__32073 = p__32072;
var v = cljs.core.nth.call(null,vec__32073,(0),null);
var p = cljs.core.nth.call(null,vec__32073,(1),null);
var job = vec__32073;
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
var n__4607__auto___32232 = n;
var __32233 = (0);
while(true){
if((__32233 < n__4607__auto___32232)){
var G__32076_32234 = type;
var G__32076_32235__$1 = (((G__32076_32234 instanceof cljs.core.Keyword))?G__32076_32234.fqn:null);
switch (G__32076_32235__$1) {
case "compute":
var c__31894__auto___32237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32233,c__31894__auto___32237,G__32076_32234,G__32076_32235__$1,n__4607__auto___32232,jobs,results,process,async){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (__32233,c__31894__auto___32237,G__32076_32234,G__32076_32235__$1,n__4607__auto___32232,jobs,results,process,async){
return (function (state_32089){
var state_val_32090 = (state_32089[(1)]);
if((state_val_32090 === (1))){
var state_32089__$1 = state_32089;
var statearr_32091_32238 = state_32089__$1;
(statearr_32091_32238[(2)] = null);

(statearr_32091_32238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (2))){
var state_32089__$1 = state_32089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32089__$1,(4),jobs);
} else {
if((state_val_32090 === (3))){
var inst_32087 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32089__$1,inst_32087);
} else {
if((state_val_32090 === (4))){
var inst_32079 = (state_32089[(2)]);
var inst_32080 = process.call(null,inst_32079);
var state_32089__$1 = state_32089;
if(cljs.core.truth_(inst_32080)){
var statearr_32092_32239 = state_32089__$1;
(statearr_32092_32239[(1)] = (5));

} else {
var statearr_32093_32240 = state_32089__$1;
(statearr_32093_32240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (5))){
var state_32089__$1 = state_32089;
var statearr_32094_32241 = state_32089__$1;
(statearr_32094_32241[(2)] = null);

(statearr_32094_32241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (6))){
var state_32089__$1 = state_32089;
var statearr_32095_32242 = state_32089__$1;
(statearr_32095_32242[(2)] = null);

(statearr_32095_32242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (7))){
var inst_32085 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
var statearr_32096_32243 = state_32089__$1;
(statearr_32096_32243[(2)] = inst_32085);

(statearr_32096_32243[(1)] = (3));


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
});})(__32233,c__31894__auto___32237,G__32076_32234,G__32076_32235__$1,n__4607__auto___32232,jobs,results,process,async))
;
return ((function (__32233,switch__31799__auto__,c__31894__auto___32237,G__32076_32234,G__32076_32235__$1,n__4607__auto___32232,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0 = (function (){
var statearr_32097 = [null,null,null,null,null,null,null];
(statearr_32097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__);

(statearr_32097[(1)] = (1));

return statearr_32097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1 = (function (state_32089){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_32089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e32098){if((e32098 instanceof Object)){
var ex__31803__auto__ = e32098;
var statearr_32099_32244 = state_32089;
(statearr_32099_32244[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32245 = state_32089;
state_32089 = G__32245;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__ = function(state_32089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1.call(this,state_32089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__;
})()
;})(__32233,switch__31799__auto__,c__31894__auto___32237,G__32076_32234,G__32076_32235__$1,n__4607__auto___32232,jobs,results,process,async))
})();
var state__31896__auto__ = (function (){var statearr_32100 = f__31895__auto__.call(null);
(statearr_32100[(6)] = c__31894__auto___32237);

return statearr_32100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(__32233,c__31894__auto___32237,G__32076_32234,G__32076_32235__$1,n__4607__auto___32232,jobs,results,process,async))
);


break;
case "async":
var c__31894__auto___32246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32233,c__31894__auto___32246,G__32076_32234,G__32076_32235__$1,n__4607__auto___32232,jobs,results,process,async){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (__32233,c__31894__auto___32246,G__32076_32234,G__32076_32235__$1,n__4607__auto___32232,jobs,results,process,async){
return (function (state_32113){
var state_val_32114 = (state_32113[(1)]);
if((state_val_32114 === (1))){
var state_32113__$1 = state_32113;
var statearr_32115_32247 = state_32113__$1;
(statearr_32115_32247[(2)] = null);

(statearr_32115_32247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (2))){
var state_32113__$1 = state_32113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32113__$1,(4),jobs);
} else {
if((state_val_32114 === (3))){
var inst_32111 = (state_32113[(2)]);
var state_32113__$1 = state_32113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32113__$1,inst_32111);
} else {
if((state_val_32114 === (4))){
var inst_32103 = (state_32113[(2)]);
var inst_32104 = async.call(null,inst_32103);
var state_32113__$1 = state_32113;
if(cljs.core.truth_(inst_32104)){
var statearr_32116_32248 = state_32113__$1;
(statearr_32116_32248[(1)] = (5));

} else {
var statearr_32117_32249 = state_32113__$1;
(statearr_32117_32249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (5))){
var state_32113__$1 = state_32113;
var statearr_32118_32250 = state_32113__$1;
(statearr_32118_32250[(2)] = null);

(statearr_32118_32250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (6))){
var state_32113__$1 = state_32113;
var statearr_32119_32251 = state_32113__$1;
(statearr_32119_32251[(2)] = null);

(statearr_32119_32251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (7))){
var inst_32109 = (state_32113[(2)]);
var state_32113__$1 = state_32113;
var statearr_32120_32252 = state_32113__$1;
(statearr_32120_32252[(2)] = inst_32109);

(statearr_32120_32252[(1)] = (3));


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
});})(__32233,c__31894__auto___32246,G__32076_32234,G__32076_32235__$1,n__4607__auto___32232,jobs,results,process,async))
;
return ((function (__32233,switch__31799__auto__,c__31894__auto___32246,G__32076_32234,G__32076_32235__$1,n__4607__auto___32232,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0 = (function (){
var statearr_32121 = [null,null,null,null,null,null,null];
(statearr_32121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__);

(statearr_32121[(1)] = (1));

return statearr_32121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1 = (function (state_32113){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_32113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e32122){if((e32122 instanceof Object)){
var ex__31803__auto__ = e32122;
var statearr_32123_32253 = state_32113;
(statearr_32123_32253[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32254 = state_32113;
state_32113 = G__32254;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__ = function(state_32113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1.call(this,state_32113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__;
})()
;})(__32233,switch__31799__auto__,c__31894__auto___32246,G__32076_32234,G__32076_32235__$1,n__4607__auto___32232,jobs,results,process,async))
})();
var state__31896__auto__ = (function (){var statearr_32124 = f__31895__auto__.call(null);
(statearr_32124[(6)] = c__31894__auto___32246);

return statearr_32124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(__32233,c__31894__auto___32246,G__32076_32234,G__32076_32235__$1,n__4607__auto___32232,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32076_32235__$1)].join('')));

}

var G__32255 = (__32233 + (1));
__32233 = G__32255;
continue;
} else {
}
break;
}

var c__31894__auto___32256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___32256,jobs,results,process,async){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___32256,jobs,results,process,async){
return (function (state_32146){
var state_val_32147 = (state_32146[(1)]);
if((state_val_32147 === (7))){
var inst_32142 = (state_32146[(2)]);
var state_32146__$1 = state_32146;
var statearr_32148_32257 = state_32146__$1;
(statearr_32148_32257[(2)] = inst_32142);

(statearr_32148_32257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32147 === (1))){
var state_32146__$1 = state_32146;
var statearr_32149_32258 = state_32146__$1;
(statearr_32149_32258[(2)] = null);

(statearr_32149_32258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32147 === (4))){
var inst_32127 = (state_32146[(7)]);
var inst_32127__$1 = (state_32146[(2)]);
var inst_32128 = (inst_32127__$1 == null);
var state_32146__$1 = (function (){var statearr_32150 = state_32146;
(statearr_32150[(7)] = inst_32127__$1);

return statearr_32150;
})();
if(cljs.core.truth_(inst_32128)){
var statearr_32151_32259 = state_32146__$1;
(statearr_32151_32259[(1)] = (5));

} else {
var statearr_32152_32260 = state_32146__$1;
(statearr_32152_32260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32147 === (6))){
var inst_32127 = (state_32146[(7)]);
var inst_32132 = (state_32146[(8)]);
var inst_32132__$1 = cljs.core.async.chan.call(null,(1));
var inst_32133 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32134 = [inst_32127,inst_32132__$1];
var inst_32135 = (new cljs.core.PersistentVector(null,2,(5),inst_32133,inst_32134,null));
var state_32146__$1 = (function (){var statearr_32153 = state_32146;
(statearr_32153[(8)] = inst_32132__$1);

return statearr_32153;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32146__$1,(8),jobs,inst_32135);
} else {
if((state_val_32147 === (3))){
var inst_32144 = (state_32146[(2)]);
var state_32146__$1 = state_32146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32146__$1,inst_32144);
} else {
if((state_val_32147 === (2))){
var state_32146__$1 = state_32146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32146__$1,(4),from);
} else {
if((state_val_32147 === (9))){
var inst_32139 = (state_32146[(2)]);
var state_32146__$1 = (function (){var statearr_32154 = state_32146;
(statearr_32154[(9)] = inst_32139);

return statearr_32154;
})();
var statearr_32155_32261 = state_32146__$1;
(statearr_32155_32261[(2)] = null);

(statearr_32155_32261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32147 === (5))){
var inst_32130 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32146__$1 = state_32146;
var statearr_32156_32262 = state_32146__$1;
(statearr_32156_32262[(2)] = inst_32130);

(statearr_32156_32262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32147 === (8))){
var inst_32132 = (state_32146[(8)]);
var inst_32137 = (state_32146[(2)]);
var state_32146__$1 = (function (){var statearr_32157 = state_32146;
(statearr_32157[(10)] = inst_32137);

return statearr_32157;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32146__$1,(9),results,inst_32132);
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
});})(c__31894__auto___32256,jobs,results,process,async))
;
return ((function (switch__31799__auto__,c__31894__auto___32256,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0 = (function (){
var statearr_32158 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__);

(statearr_32158[(1)] = (1));

return statearr_32158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1 = (function (state_32146){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_32146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e32159){if((e32159 instanceof Object)){
var ex__31803__auto__ = e32159;
var statearr_32160_32263 = state_32146;
(statearr_32160_32263[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32264 = state_32146;
state_32146 = G__32264;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__ = function(state_32146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1.call(this,state_32146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___32256,jobs,results,process,async))
})();
var state__31896__auto__ = (function (){var statearr_32161 = f__31895__auto__.call(null);
(statearr_32161[(6)] = c__31894__auto___32256);

return statearr_32161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___32256,jobs,results,process,async))
);


var c__31894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto__,jobs,results,process,async){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto__,jobs,results,process,async){
return (function (state_32199){
var state_val_32200 = (state_32199[(1)]);
if((state_val_32200 === (7))){
var inst_32195 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
var statearr_32201_32265 = state_32199__$1;
(statearr_32201_32265[(2)] = inst_32195);

(statearr_32201_32265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (20))){
var state_32199__$1 = state_32199;
var statearr_32202_32266 = state_32199__$1;
(statearr_32202_32266[(2)] = null);

(statearr_32202_32266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (1))){
var state_32199__$1 = state_32199;
var statearr_32203_32267 = state_32199__$1;
(statearr_32203_32267[(2)] = null);

(statearr_32203_32267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (4))){
var inst_32164 = (state_32199[(7)]);
var inst_32164__$1 = (state_32199[(2)]);
var inst_32165 = (inst_32164__$1 == null);
var state_32199__$1 = (function (){var statearr_32204 = state_32199;
(statearr_32204[(7)] = inst_32164__$1);

return statearr_32204;
})();
if(cljs.core.truth_(inst_32165)){
var statearr_32205_32268 = state_32199__$1;
(statearr_32205_32268[(1)] = (5));

} else {
var statearr_32206_32269 = state_32199__$1;
(statearr_32206_32269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (15))){
var inst_32177 = (state_32199[(8)]);
var state_32199__$1 = state_32199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32199__$1,(18),to,inst_32177);
} else {
if((state_val_32200 === (21))){
var inst_32190 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
var statearr_32207_32270 = state_32199__$1;
(statearr_32207_32270[(2)] = inst_32190);

(statearr_32207_32270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (13))){
var inst_32192 = (state_32199[(2)]);
var state_32199__$1 = (function (){var statearr_32208 = state_32199;
(statearr_32208[(9)] = inst_32192);

return statearr_32208;
})();
var statearr_32209_32271 = state_32199__$1;
(statearr_32209_32271[(2)] = null);

(statearr_32209_32271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (6))){
var inst_32164 = (state_32199[(7)]);
var state_32199__$1 = state_32199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32199__$1,(11),inst_32164);
} else {
if((state_val_32200 === (17))){
var inst_32185 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
if(cljs.core.truth_(inst_32185)){
var statearr_32210_32272 = state_32199__$1;
(statearr_32210_32272[(1)] = (19));

} else {
var statearr_32211_32273 = state_32199__$1;
(statearr_32211_32273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (3))){
var inst_32197 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32199__$1,inst_32197);
} else {
if((state_val_32200 === (12))){
var inst_32174 = (state_32199[(10)]);
var state_32199__$1 = state_32199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32199__$1,(14),inst_32174);
} else {
if((state_val_32200 === (2))){
var state_32199__$1 = state_32199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32199__$1,(4),results);
} else {
if((state_val_32200 === (19))){
var state_32199__$1 = state_32199;
var statearr_32212_32274 = state_32199__$1;
(statearr_32212_32274[(2)] = null);

(statearr_32212_32274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (11))){
var inst_32174 = (state_32199[(2)]);
var state_32199__$1 = (function (){var statearr_32213 = state_32199;
(statearr_32213[(10)] = inst_32174);

return statearr_32213;
})();
var statearr_32214_32275 = state_32199__$1;
(statearr_32214_32275[(2)] = null);

(statearr_32214_32275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (9))){
var state_32199__$1 = state_32199;
var statearr_32215_32276 = state_32199__$1;
(statearr_32215_32276[(2)] = null);

(statearr_32215_32276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (5))){
var state_32199__$1 = state_32199;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32216_32277 = state_32199__$1;
(statearr_32216_32277[(1)] = (8));

} else {
var statearr_32217_32278 = state_32199__$1;
(statearr_32217_32278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (14))){
var inst_32179 = (state_32199[(11)]);
var inst_32177 = (state_32199[(8)]);
var inst_32177__$1 = (state_32199[(2)]);
var inst_32178 = (inst_32177__$1 == null);
var inst_32179__$1 = cljs.core.not.call(null,inst_32178);
var state_32199__$1 = (function (){var statearr_32218 = state_32199;
(statearr_32218[(11)] = inst_32179__$1);

(statearr_32218[(8)] = inst_32177__$1);

return statearr_32218;
})();
if(inst_32179__$1){
var statearr_32219_32279 = state_32199__$1;
(statearr_32219_32279[(1)] = (15));

} else {
var statearr_32220_32280 = state_32199__$1;
(statearr_32220_32280[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (16))){
var inst_32179 = (state_32199[(11)]);
var state_32199__$1 = state_32199;
var statearr_32221_32281 = state_32199__$1;
(statearr_32221_32281[(2)] = inst_32179);

(statearr_32221_32281[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (10))){
var inst_32171 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
var statearr_32222_32282 = state_32199__$1;
(statearr_32222_32282[(2)] = inst_32171);

(statearr_32222_32282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (18))){
var inst_32182 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
var statearr_32223_32283 = state_32199__$1;
(statearr_32223_32283[(2)] = inst_32182);

(statearr_32223_32283[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (8))){
var inst_32168 = cljs.core.async.close_BANG_.call(null,to);
var state_32199__$1 = state_32199;
var statearr_32224_32284 = state_32199__$1;
(statearr_32224_32284[(2)] = inst_32168);

(statearr_32224_32284[(1)] = (10));


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
});})(c__31894__auto__,jobs,results,process,async))
;
return ((function (switch__31799__auto__,c__31894__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0 = (function (){
var statearr_32225 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32225[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__);

(statearr_32225[(1)] = (1));

return statearr_32225;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1 = (function (state_32199){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_32199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e32226){if((e32226 instanceof Object)){
var ex__31803__auto__ = e32226;
var statearr_32227_32285 = state_32199;
(statearr_32227_32285[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32286 = state_32199;
state_32199 = G__32286;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__ = function(state_32199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1.call(this,state_32199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto__,jobs,results,process,async))
})();
var state__31896__auto__ = (function (){var statearr_32228 = f__31895__auto__.call(null);
(statearr_32228[(6)] = c__31894__auto__);

return statearr_32228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto__,jobs,results,process,async))
);

return c__31894__auto__;
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
var G__32288 = arguments.length;
switch (G__32288) {
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
var G__32291 = arguments.length;
switch (G__32291) {
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
var G__32294 = arguments.length;
switch (G__32294) {
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
var c__31894__auto___32343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___32343,tc,fc){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___32343,tc,fc){
return (function (state_32320){
var state_val_32321 = (state_32320[(1)]);
if((state_val_32321 === (7))){
var inst_32316 = (state_32320[(2)]);
var state_32320__$1 = state_32320;
var statearr_32322_32344 = state_32320__$1;
(statearr_32322_32344[(2)] = inst_32316);

(statearr_32322_32344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (1))){
var state_32320__$1 = state_32320;
var statearr_32323_32345 = state_32320__$1;
(statearr_32323_32345[(2)] = null);

(statearr_32323_32345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (4))){
var inst_32297 = (state_32320[(7)]);
var inst_32297__$1 = (state_32320[(2)]);
var inst_32298 = (inst_32297__$1 == null);
var state_32320__$1 = (function (){var statearr_32324 = state_32320;
(statearr_32324[(7)] = inst_32297__$1);

return statearr_32324;
})();
if(cljs.core.truth_(inst_32298)){
var statearr_32325_32346 = state_32320__$1;
(statearr_32325_32346[(1)] = (5));

} else {
var statearr_32326_32347 = state_32320__$1;
(statearr_32326_32347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (13))){
var state_32320__$1 = state_32320;
var statearr_32327_32348 = state_32320__$1;
(statearr_32327_32348[(2)] = null);

(statearr_32327_32348[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (6))){
var inst_32297 = (state_32320[(7)]);
var inst_32303 = p.call(null,inst_32297);
var state_32320__$1 = state_32320;
if(cljs.core.truth_(inst_32303)){
var statearr_32328_32349 = state_32320__$1;
(statearr_32328_32349[(1)] = (9));

} else {
var statearr_32329_32350 = state_32320__$1;
(statearr_32329_32350[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (3))){
var inst_32318 = (state_32320[(2)]);
var state_32320__$1 = state_32320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32320__$1,inst_32318);
} else {
if((state_val_32321 === (12))){
var state_32320__$1 = state_32320;
var statearr_32330_32351 = state_32320__$1;
(statearr_32330_32351[(2)] = null);

(statearr_32330_32351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (2))){
var state_32320__$1 = state_32320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32320__$1,(4),ch);
} else {
if((state_val_32321 === (11))){
var inst_32297 = (state_32320[(7)]);
var inst_32307 = (state_32320[(2)]);
var state_32320__$1 = state_32320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32320__$1,(8),inst_32307,inst_32297);
} else {
if((state_val_32321 === (9))){
var state_32320__$1 = state_32320;
var statearr_32331_32352 = state_32320__$1;
(statearr_32331_32352[(2)] = tc);

(statearr_32331_32352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (5))){
var inst_32300 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32301 = cljs.core.async.close_BANG_.call(null,fc);
var state_32320__$1 = (function (){var statearr_32332 = state_32320;
(statearr_32332[(8)] = inst_32300);

return statearr_32332;
})();
var statearr_32333_32353 = state_32320__$1;
(statearr_32333_32353[(2)] = inst_32301);

(statearr_32333_32353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (14))){
var inst_32314 = (state_32320[(2)]);
var state_32320__$1 = state_32320;
var statearr_32334_32354 = state_32320__$1;
(statearr_32334_32354[(2)] = inst_32314);

(statearr_32334_32354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (10))){
var state_32320__$1 = state_32320;
var statearr_32335_32355 = state_32320__$1;
(statearr_32335_32355[(2)] = fc);

(statearr_32335_32355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (8))){
var inst_32309 = (state_32320[(2)]);
var state_32320__$1 = state_32320;
if(cljs.core.truth_(inst_32309)){
var statearr_32336_32356 = state_32320__$1;
(statearr_32336_32356[(1)] = (12));

} else {
var statearr_32337_32357 = state_32320__$1;
(statearr_32337_32357[(1)] = (13));

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
});})(c__31894__auto___32343,tc,fc))
;
return ((function (switch__31799__auto__,c__31894__auto___32343,tc,fc){
return (function() {
var cljs$core$async$state_machine__31800__auto__ = null;
var cljs$core$async$state_machine__31800__auto____0 = (function (){
var statearr_32338 = [null,null,null,null,null,null,null,null,null];
(statearr_32338[(0)] = cljs$core$async$state_machine__31800__auto__);

(statearr_32338[(1)] = (1));

return statearr_32338;
});
var cljs$core$async$state_machine__31800__auto____1 = (function (state_32320){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_32320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e32339){if((e32339 instanceof Object)){
var ex__31803__auto__ = e32339;
var statearr_32340_32358 = state_32320;
(statearr_32340_32358[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32359 = state_32320;
state_32320 = G__32359;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$state_machine__31800__auto__ = function(state_32320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31800__auto____1.call(this,state_32320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31800__auto____0;
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31800__auto____1;
return cljs$core$async$state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___32343,tc,fc))
})();
var state__31896__auto__ = (function (){var statearr_32341 = f__31895__auto__.call(null);
(statearr_32341[(6)] = c__31894__auto___32343);

return statearr_32341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___32343,tc,fc))
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
var c__31894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto__){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto__){
return (function (state_32380){
var state_val_32381 = (state_32380[(1)]);
if((state_val_32381 === (7))){
var inst_32376 = (state_32380[(2)]);
var state_32380__$1 = state_32380;
var statearr_32382_32400 = state_32380__$1;
(statearr_32382_32400[(2)] = inst_32376);

(statearr_32382_32400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32381 === (1))){
var inst_32360 = init;
var state_32380__$1 = (function (){var statearr_32383 = state_32380;
(statearr_32383[(7)] = inst_32360);

return statearr_32383;
})();
var statearr_32384_32401 = state_32380__$1;
(statearr_32384_32401[(2)] = null);

(statearr_32384_32401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32381 === (4))){
var inst_32363 = (state_32380[(8)]);
var inst_32363__$1 = (state_32380[(2)]);
var inst_32364 = (inst_32363__$1 == null);
var state_32380__$1 = (function (){var statearr_32385 = state_32380;
(statearr_32385[(8)] = inst_32363__$1);

return statearr_32385;
})();
if(cljs.core.truth_(inst_32364)){
var statearr_32386_32402 = state_32380__$1;
(statearr_32386_32402[(1)] = (5));

} else {
var statearr_32387_32403 = state_32380__$1;
(statearr_32387_32403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32381 === (6))){
var inst_32363 = (state_32380[(8)]);
var inst_32367 = (state_32380[(9)]);
var inst_32360 = (state_32380[(7)]);
var inst_32367__$1 = f.call(null,inst_32360,inst_32363);
var inst_32368 = cljs.core.reduced_QMARK_.call(null,inst_32367__$1);
var state_32380__$1 = (function (){var statearr_32388 = state_32380;
(statearr_32388[(9)] = inst_32367__$1);

return statearr_32388;
})();
if(inst_32368){
var statearr_32389_32404 = state_32380__$1;
(statearr_32389_32404[(1)] = (8));

} else {
var statearr_32390_32405 = state_32380__$1;
(statearr_32390_32405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32381 === (3))){
var inst_32378 = (state_32380[(2)]);
var state_32380__$1 = state_32380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32380__$1,inst_32378);
} else {
if((state_val_32381 === (2))){
var state_32380__$1 = state_32380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32380__$1,(4),ch);
} else {
if((state_val_32381 === (9))){
var inst_32367 = (state_32380[(9)]);
var inst_32360 = inst_32367;
var state_32380__$1 = (function (){var statearr_32391 = state_32380;
(statearr_32391[(7)] = inst_32360);

return statearr_32391;
})();
var statearr_32392_32406 = state_32380__$1;
(statearr_32392_32406[(2)] = null);

(statearr_32392_32406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32381 === (5))){
var inst_32360 = (state_32380[(7)]);
var state_32380__$1 = state_32380;
var statearr_32393_32407 = state_32380__$1;
(statearr_32393_32407[(2)] = inst_32360);

(statearr_32393_32407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32381 === (10))){
var inst_32374 = (state_32380[(2)]);
var state_32380__$1 = state_32380;
var statearr_32394_32408 = state_32380__$1;
(statearr_32394_32408[(2)] = inst_32374);

(statearr_32394_32408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32381 === (8))){
var inst_32367 = (state_32380[(9)]);
var inst_32370 = cljs.core.deref.call(null,inst_32367);
var state_32380__$1 = state_32380;
var statearr_32395_32409 = state_32380__$1;
(statearr_32395_32409[(2)] = inst_32370);

(statearr_32395_32409[(1)] = (10));


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
});})(c__31894__auto__))
;
return ((function (switch__31799__auto__,c__31894__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31800__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31800__auto____0 = (function (){
var statearr_32396 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32396[(0)] = cljs$core$async$reduce_$_state_machine__31800__auto__);

(statearr_32396[(1)] = (1));

return statearr_32396;
});
var cljs$core$async$reduce_$_state_machine__31800__auto____1 = (function (state_32380){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_32380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e32397){if((e32397 instanceof Object)){
var ex__31803__auto__ = e32397;
var statearr_32398_32410 = state_32380;
(statearr_32398_32410[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32411 = state_32380;
state_32380 = G__32411;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31800__auto__ = function(state_32380){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31800__auto____1.call(this,state_32380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31800__auto____0;
cljs$core$async$reduce_$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31800__auto____1;
return cljs$core$async$reduce_$_state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto__))
})();
var state__31896__auto__ = (function (){var statearr_32399 = f__31895__auto__.call(null);
(statearr_32399[(6)] = c__31894__auto__);

return statearr_32399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto__))
);

return c__31894__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto__,f__$1){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto__,f__$1){
return (function (state_32417){
var state_val_32418 = (state_32417[(1)]);
if((state_val_32418 === (1))){
var inst_32412 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32417__$1 = state_32417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32417__$1,(2),inst_32412);
} else {
if((state_val_32418 === (2))){
var inst_32414 = (state_32417[(2)]);
var inst_32415 = f__$1.call(null,inst_32414);
var state_32417__$1 = state_32417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32417__$1,inst_32415);
} else {
return null;
}
}
});})(c__31894__auto__,f__$1))
;
return ((function (switch__31799__auto__,c__31894__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31800__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31800__auto____0 = (function (){
var statearr_32419 = [null,null,null,null,null,null,null];
(statearr_32419[(0)] = cljs$core$async$transduce_$_state_machine__31800__auto__);

(statearr_32419[(1)] = (1));

return statearr_32419;
});
var cljs$core$async$transduce_$_state_machine__31800__auto____1 = (function (state_32417){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_32417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e32420){if((e32420 instanceof Object)){
var ex__31803__auto__ = e32420;
var statearr_32421_32423 = state_32417;
(statearr_32421_32423[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32424 = state_32417;
state_32417 = G__32424;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31800__auto__ = function(state_32417){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31800__auto____1.call(this,state_32417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31800__auto____0;
cljs$core$async$transduce_$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31800__auto____1;
return cljs$core$async$transduce_$_state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto__,f__$1))
})();
var state__31896__auto__ = (function (){var statearr_32422 = f__31895__auto__.call(null);
(statearr_32422[(6)] = c__31894__auto__);

return statearr_32422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto__,f__$1))
);

return c__31894__auto__;
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
var G__32426 = arguments.length;
switch (G__32426) {
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
var c__31894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto__){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto__){
return (function (state_32451){
var state_val_32452 = (state_32451[(1)]);
if((state_val_32452 === (7))){
var inst_32433 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
var statearr_32453_32474 = state_32451__$1;
(statearr_32453_32474[(2)] = inst_32433);

(statearr_32453_32474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (1))){
var inst_32427 = cljs.core.seq.call(null,coll);
var inst_32428 = inst_32427;
var state_32451__$1 = (function (){var statearr_32454 = state_32451;
(statearr_32454[(7)] = inst_32428);

return statearr_32454;
})();
var statearr_32455_32475 = state_32451__$1;
(statearr_32455_32475[(2)] = null);

(statearr_32455_32475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (4))){
var inst_32428 = (state_32451[(7)]);
var inst_32431 = cljs.core.first.call(null,inst_32428);
var state_32451__$1 = state_32451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32451__$1,(7),ch,inst_32431);
} else {
if((state_val_32452 === (13))){
var inst_32445 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
var statearr_32456_32476 = state_32451__$1;
(statearr_32456_32476[(2)] = inst_32445);

(statearr_32456_32476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (6))){
var inst_32436 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
if(cljs.core.truth_(inst_32436)){
var statearr_32457_32477 = state_32451__$1;
(statearr_32457_32477[(1)] = (8));

} else {
var statearr_32458_32478 = state_32451__$1;
(statearr_32458_32478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (3))){
var inst_32449 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32451__$1,inst_32449);
} else {
if((state_val_32452 === (12))){
var state_32451__$1 = state_32451;
var statearr_32459_32479 = state_32451__$1;
(statearr_32459_32479[(2)] = null);

(statearr_32459_32479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (2))){
var inst_32428 = (state_32451[(7)]);
var state_32451__$1 = state_32451;
if(cljs.core.truth_(inst_32428)){
var statearr_32460_32480 = state_32451__$1;
(statearr_32460_32480[(1)] = (4));

} else {
var statearr_32461_32481 = state_32451__$1;
(statearr_32461_32481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (11))){
var inst_32442 = cljs.core.async.close_BANG_.call(null,ch);
var state_32451__$1 = state_32451;
var statearr_32462_32482 = state_32451__$1;
(statearr_32462_32482[(2)] = inst_32442);

(statearr_32462_32482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (9))){
var state_32451__$1 = state_32451;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32463_32483 = state_32451__$1;
(statearr_32463_32483[(1)] = (11));

} else {
var statearr_32464_32484 = state_32451__$1;
(statearr_32464_32484[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (5))){
var inst_32428 = (state_32451[(7)]);
var state_32451__$1 = state_32451;
var statearr_32465_32485 = state_32451__$1;
(statearr_32465_32485[(2)] = inst_32428);

(statearr_32465_32485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (10))){
var inst_32447 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
var statearr_32466_32486 = state_32451__$1;
(statearr_32466_32486[(2)] = inst_32447);

(statearr_32466_32486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (8))){
var inst_32428 = (state_32451[(7)]);
var inst_32438 = cljs.core.next.call(null,inst_32428);
var inst_32428__$1 = inst_32438;
var state_32451__$1 = (function (){var statearr_32467 = state_32451;
(statearr_32467[(7)] = inst_32428__$1);

return statearr_32467;
})();
var statearr_32468_32487 = state_32451__$1;
(statearr_32468_32487[(2)] = null);

(statearr_32468_32487[(1)] = (2));


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
});})(c__31894__auto__))
;
return ((function (switch__31799__auto__,c__31894__auto__){
return (function() {
var cljs$core$async$state_machine__31800__auto__ = null;
var cljs$core$async$state_machine__31800__auto____0 = (function (){
var statearr_32469 = [null,null,null,null,null,null,null,null];
(statearr_32469[(0)] = cljs$core$async$state_machine__31800__auto__);

(statearr_32469[(1)] = (1));

return statearr_32469;
});
var cljs$core$async$state_machine__31800__auto____1 = (function (state_32451){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_32451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e32470){if((e32470 instanceof Object)){
var ex__31803__auto__ = e32470;
var statearr_32471_32488 = state_32451;
(statearr_32471_32488[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32489 = state_32451;
state_32451 = G__32489;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$state_machine__31800__auto__ = function(state_32451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31800__auto____1.call(this,state_32451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31800__auto____0;
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31800__auto____1;
return cljs$core$async$state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto__))
})();
var state__31896__auto__ = (function (){var statearr_32472 = f__31895__auto__.call(null);
(statearr_32472[(6)] = c__31894__auto__);

return statearr_32472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto__))
);

return c__31894__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32490 = (function (ch,cs,meta32491){
this.ch = ch;
this.cs = cs;
this.meta32491 = meta32491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32492,meta32491__$1){
var self__ = this;
var _32492__$1 = this;
return (new cljs.core.async.t_cljs$core$async32490(self__.ch,self__.cs,meta32491__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32492){
var self__ = this;
var _32492__$1 = this;
return self__.meta32491;
});})(cs))
;

cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32490.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32491","meta32491",725367387,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32490";

cljs.core.async.t_cljs$core$async32490.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32490");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32490.
 */
cljs.core.async.__GT_t_cljs$core$async32490 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32490(ch__$1,cs__$1,meta32491){
return (new cljs.core.async.t_cljs$core$async32490(ch__$1,cs__$1,meta32491));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32490(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31894__auto___32712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___32712,cs,m,dchan,dctr,done){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___32712,cs,m,dchan,dctr,done){
return (function (state_32627){
var state_val_32628 = (state_32627[(1)]);
if((state_val_32628 === (7))){
var inst_32623 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32629_32713 = state_32627__$1;
(statearr_32629_32713[(2)] = inst_32623);

(statearr_32629_32713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (20))){
var inst_32526 = (state_32627[(7)]);
var inst_32538 = cljs.core.first.call(null,inst_32526);
var inst_32539 = cljs.core.nth.call(null,inst_32538,(0),null);
var inst_32540 = cljs.core.nth.call(null,inst_32538,(1),null);
var state_32627__$1 = (function (){var statearr_32630 = state_32627;
(statearr_32630[(8)] = inst_32539);

return statearr_32630;
})();
if(cljs.core.truth_(inst_32540)){
var statearr_32631_32714 = state_32627__$1;
(statearr_32631_32714[(1)] = (22));

} else {
var statearr_32632_32715 = state_32627__$1;
(statearr_32632_32715[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (27))){
var inst_32568 = (state_32627[(9)]);
var inst_32575 = (state_32627[(10)]);
var inst_32495 = (state_32627[(11)]);
var inst_32570 = (state_32627[(12)]);
var inst_32575__$1 = cljs.core._nth.call(null,inst_32568,inst_32570);
var inst_32576 = cljs.core.async.put_BANG_.call(null,inst_32575__$1,inst_32495,done);
var state_32627__$1 = (function (){var statearr_32633 = state_32627;
(statearr_32633[(10)] = inst_32575__$1);

return statearr_32633;
})();
if(cljs.core.truth_(inst_32576)){
var statearr_32634_32716 = state_32627__$1;
(statearr_32634_32716[(1)] = (30));

} else {
var statearr_32635_32717 = state_32627__$1;
(statearr_32635_32717[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (1))){
var state_32627__$1 = state_32627;
var statearr_32636_32718 = state_32627__$1;
(statearr_32636_32718[(2)] = null);

(statearr_32636_32718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (24))){
var inst_32526 = (state_32627[(7)]);
var inst_32545 = (state_32627[(2)]);
var inst_32546 = cljs.core.next.call(null,inst_32526);
var inst_32504 = inst_32546;
var inst_32505 = null;
var inst_32506 = (0);
var inst_32507 = (0);
var state_32627__$1 = (function (){var statearr_32637 = state_32627;
(statearr_32637[(13)] = inst_32504);

(statearr_32637[(14)] = inst_32545);

(statearr_32637[(15)] = inst_32506);

(statearr_32637[(16)] = inst_32507);

(statearr_32637[(17)] = inst_32505);

return statearr_32637;
})();
var statearr_32638_32719 = state_32627__$1;
(statearr_32638_32719[(2)] = null);

(statearr_32638_32719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (39))){
var state_32627__$1 = state_32627;
var statearr_32642_32720 = state_32627__$1;
(statearr_32642_32720[(2)] = null);

(statearr_32642_32720[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (4))){
var inst_32495 = (state_32627[(11)]);
var inst_32495__$1 = (state_32627[(2)]);
var inst_32496 = (inst_32495__$1 == null);
var state_32627__$1 = (function (){var statearr_32643 = state_32627;
(statearr_32643[(11)] = inst_32495__$1);

return statearr_32643;
})();
if(cljs.core.truth_(inst_32496)){
var statearr_32644_32721 = state_32627__$1;
(statearr_32644_32721[(1)] = (5));

} else {
var statearr_32645_32722 = state_32627__$1;
(statearr_32645_32722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (15))){
var inst_32504 = (state_32627[(13)]);
var inst_32506 = (state_32627[(15)]);
var inst_32507 = (state_32627[(16)]);
var inst_32505 = (state_32627[(17)]);
var inst_32522 = (state_32627[(2)]);
var inst_32523 = (inst_32507 + (1));
var tmp32639 = inst_32504;
var tmp32640 = inst_32506;
var tmp32641 = inst_32505;
var inst_32504__$1 = tmp32639;
var inst_32505__$1 = tmp32641;
var inst_32506__$1 = tmp32640;
var inst_32507__$1 = inst_32523;
var state_32627__$1 = (function (){var statearr_32646 = state_32627;
(statearr_32646[(13)] = inst_32504__$1);

(statearr_32646[(18)] = inst_32522);

(statearr_32646[(15)] = inst_32506__$1);

(statearr_32646[(16)] = inst_32507__$1);

(statearr_32646[(17)] = inst_32505__$1);

return statearr_32646;
})();
var statearr_32647_32723 = state_32627__$1;
(statearr_32647_32723[(2)] = null);

(statearr_32647_32723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (21))){
var inst_32549 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32651_32724 = state_32627__$1;
(statearr_32651_32724[(2)] = inst_32549);

(statearr_32651_32724[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (31))){
var inst_32575 = (state_32627[(10)]);
var inst_32579 = done.call(null,null);
var inst_32580 = cljs.core.async.untap_STAR_.call(null,m,inst_32575);
var state_32627__$1 = (function (){var statearr_32652 = state_32627;
(statearr_32652[(19)] = inst_32579);

return statearr_32652;
})();
var statearr_32653_32725 = state_32627__$1;
(statearr_32653_32725[(2)] = inst_32580);

(statearr_32653_32725[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (32))){
var inst_32569 = (state_32627[(20)]);
var inst_32568 = (state_32627[(9)]);
var inst_32567 = (state_32627[(21)]);
var inst_32570 = (state_32627[(12)]);
var inst_32582 = (state_32627[(2)]);
var inst_32583 = (inst_32570 + (1));
var tmp32648 = inst_32569;
var tmp32649 = inst_32568;
var tmp32650 = inst_32567;
var inst_32567__$1 = tmp32650;
var inst_32568__$1 = tmp32649;
var inst_32569__$1 = tmp32648;
var inst_32570__$1 = inst_32583;
var state_32627__$1 = (function (){var statearr_32654 = state_32627;
(statearr_32654[(20)] = inst_32569__$1);

(statearr_32654[(9)] = inst_32568__$1);

(statearr_32654[(22)] = inst_32582);

(statearr_32654[(21)] = inst_32567__$1);

(statearr_32654[(12)] = inst_32570__$1);

return statearr_32654;
})();
var statearr_32655_32726 = state_32627__$1;
(statearr_32655_32726[(2)] = null);

(statearr_32655_32726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (40))){
var inst_32595 = (state_32627[(23)]);
var inst_32599 = done.call(null,null);
var inst_32600 = cljs.core.async.untap_STAR_.call(null,m,inst_32595);
var state_32627__$1 = (function (){var statearr_32656 = state_32627;
(statearr_32656[(24)] = inst_32599);

return statearr_32656;
})();
var statearr_32657_32727 = state_32627__$1;
(statearr_32657_32727[(2)] = inst_32600);

(statearr_32657_32727[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (33))){
var inst_32586 = (state_32627[(25)]);
var inst_32588 = cljs.core.chunked_seq_QMARK_.call(null,inst_32586);
var state_32627__$1 = state_32627;
if(inst_32588){
var statearr_32658_32728 = state_32627__$1;
(statearr_32658_32728[(1)] = (36));

} else {
var statearr_32659_32729 = state_32627__$1;
(statearr_32659_32729[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (13))){
var inst_32516 = (state_32627[(26)]);
var inst_32519 = cljs.core.async.close_BANG_.call(null,inst_32516);
var state_32627__$1 = state_32627;
var statearr_32660_32730 = state_32627__$1;
(statearr_32660_32730[(2)] = inst_32519);

(statearr_32660_32730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (22))){
var inst_32539 = (state_32627[(8)]);
var inst_32542 = cljs.core.async.close_BANG_.call(null,inst_32539);
var state_32627__$1 = state_32627;
var statearr_32661_32731 = state_32627__$1;
(statearr_32661_32731[(2)] = inst_32542);

(statearr_32661_32731[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (36))){
var inst_32586 = (state_32627[(25)]);
var inst_32590 = cljs.core.chunk_first.call(null,inst_32586);
var inst_32591 = cljs.core.chunk_rest.call(null,inst_32586);
var inst_32592 = cljs.core.count.call(null,inst_32590);
var inst_32567 = inst_32591;
var inst_32568 = inst_32590;
var inst_32569 = inst_32592;
var inst_32570 = (0);
var state_32627__$1 = (function (){var statearr_32662 = state_32627;
(statearr_32662[(20)] = inst_32569);

(statearr_32662[(9)] = inst_32568);

(statearr_32662[(21)] = inst_32567);

(statearr_32662[(12)] = inst_32570);

return statearr_32662;
})();
var statearr_32663_32732 = state_32627__$1;
(statearr_32663_32732[(2)] = null);

(statearr_32663_32732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (41))){
var inst_32586 = (state_32627[(25)]);
var inst_32602 = (state_32627[(2)]);
var inst_32603 = cljs.core.next.call(null,inst_32586);
var inst_32567 = inst_32603;
var inst_32568 = null;
var inst_32569 = (0);
var inst_32570 = (0);
var state_32627__$1 = (function (){var statearr_32664 = state_32627;
(statearr_32664[(20)] = inst_32569);

(statearr_32664[(27)] = inst_32602);

(statearr_32664[(9)] = inst_32568);

(statearr_32664[(21)] = inst_32567);

(statearr_32664[(12)] = inst_32570);

return statearr_32664;
})();
var statearr_32665_32733 = state_32627__$1;
(statearr_32665_32733[(2)] = null);

(statearr_32665_32733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (43))){
var state_32627__$1 = state_32627;
var statearr_32666_32734 = state_32627__$1;
(statearr_32666_32734[(2)] = null);

(statearr_32666_32734[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (29))){
var inst_32611 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32667_32735 = state_32627__$1;
(statearr_32667_32735[(2)] = inst_32611);

(statearr_32667_32735[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (44))){
var inst_32620 = (state_32627[(2)]);
var state_32627__$1 = (function (){var statearr_32668 = state_32627;
(statearr_32668[(28)] = inst_32620);

return statearr_32668;
})();
var statearr_32669_32736 = state_32627__$1;
(statearr_32669_32736[(2)] = null);

(statearr_32669_32736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (6))){
var inst_32559 = (state_32627[(29)]);
var inst_32558 = cljs.core.deref.call(null,cs);
var inst_32559__$1 = cljs.core.keys.call(null,inst_32558);
var inst_32560 = cljs.core.count.call(null,inst_32559__$1);
var inst_32561 = cljs.core.reset_BANG_.call(null,dctr,inst_32560);
var inst_32566 = cljs.core.seq.call(null,inst_32559__$1);
var inst_32567 = inst_32566;
var inst_32568 = null;
var inst_32569 = (0);
var inst_32570 = (0);
var state_32627__$1 = (function (){var statearr_32670 = state_32627;
(statearr_32670[(20)] = inst_32569);

(statearr_32670[(9)] = inst_32568);

(statearr_32670[(29)] = inst_32559__$1);

(statearr_32670[(30)] = inst_32561);

(statearr_32670[(21)] = inst_32567);

(statearr_32670[(12)] = inst_32570);

return statearr_32670;
})();
var statearr_32671_32737 = state_32627__$1;
(statearr_32671_32737[(2)] = null);

(statearr_32671_32737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (28))){
var inst_32586 = (state_32627[(25)]);
var inst_32567 = (state_32627[(21)]);
var inst_32586__$1 = cljs.core.seq.call(null,inst_32567);
var state_32627__$1 = (function (){var statearr_32672 = state_32627;
(statearr_32672[(25)] = inst_32586__$1);

return statearr_32672;
})();
if(inst_32586__$1){
var statearr_32673_32738 = state_32627__$1;
(statearr_32673_32738[(1)] = (33));

} else {
var statearr_32674_32739 = state_32627__$1;
(statearr_32674_32739[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (25))){
var inst_32569 = (state_32627[(20)]);
var inst_32570 = (state_32627[(12)]);
var inst_32572 = (inst_32570 < inst_32569);
var inst_32573 = inst_32572;
var state_32627__$1 = state_32627;
if(cljs.core.truth_(inst_32573)){
var statearr_32675_32740 = state_32627__$1;
(statearr_32675_32740[(1)] = (27));

} else {
var statearr_32676_32741 = state_32627__$1;
(statearr_32676_32741[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (34))){
var state_32627__$1 = state_32627;
var statearr_32677_32742 = state_32627__$1;
(statearr_32677_32742[(2)] = null);

(statearr_32677_32742[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (17))){
var state_32627__$1 = state_32627;
var statearr_32678_32743 = state_32627__$1;
(statearr_32678_32743[(2)] = null);

(statearr_32678_32743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (3))){
var inst_32625 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32627__$1,inst_32625);
} else {
if((state_val_32628 === (12))){
var inst_32554 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32679_32744 = state_32627__$1;
(statearr_32679_32744[(2)] = inst_32554);

(statearr_32679_32744[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (2))){
var state_32627__$1 = state_32627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32627__$1,(4),ch);
} else {
if((state_val_32628 === (23))){
var state_32627__$1 = state_32627;
var statearr_32680_32745 = state_32627__$1;
(statearr_32680_32745[(2)] = null);

(statearr_32680_32745[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (35))){
var inst_32609 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32681_32746 = state_32627__$1;
(statearr_32681_32746[(2)] = inst_32609);

(statearr_32681_32746[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (19))){
var inst_32526 = (state_32627[(7)]);
var inst_32530 = cljs.core.chunk_first.call(null,inst_32526);
var inst_32531 = cljs.core.chunk_rest.call(null,inst_32526);
var inst_32532 = cljs.core.count.call(null,inst_32530);
var inst_32504 = inst_32531;
var inst_32505 = inst_32530;
var inst_32506 = inst_32532;
var inst_32507 = (0);
var state_32627__$1 = (function (){var statearr_32682 = state_32627;
(statearr_32682[(13)] = inst_32504);

(statearr_32682[(15)] = inst_32506);

(statearr_32682[(16)] = inst_32507);

(statearr_32682[(17)] = inst_32505);

return statearr_32682;
})();
var statearr_32683_32747 = state_32627__$1;
(statearr_32683_32747[(2)] = null);

(statearr_32683_32747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (11))){
var inst_32526 = (state_32627[(7)]);
var inst_32504 = (state_32627[(13)]);
var inst_32526__$1 = cljs.core.seq.call(null,inst_32504);
var state_32627__$1 = (function (){var statearr_32684 = state_32627;
(statearr_32684[(7)] = inst_32526__$1);

return statearr_32684;
})();
if(inst_32526__$1){
var statearr_32685_32748 = state_32627__$1;
(statearr_32685_32748[(1)] = (16));

} else {
var statearr_32686_32749 = state_32627__$1;
(statearr_32686_32749[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (9))){
var inst_32556 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32687_32750 = state_32627__$1;
(statearr_32687_32750[(2)] = inst_32556);

(statearr_32687_32750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (5))){
var inst_32502 = cljs.core.deref.call(null,cs);
var inst_32503 = cljs.core.seq.call(null,inst_32502);
var inst_32504 = inst_32503;
var inst_32505 = null;
var inst_32506 = (0);
var inst_32507 = (0);
var state_32627__$1 = (function (){var statearr_32688 = state_32627;
(statearr_32688[(13)] = inst_32504);

(statearr_32688[(15)] = inst_32506);

(statearr_32688[(16)] = inst_32507);

(statearr_32688[(17)] = inst_32505);

return statearr_32688;
})();
var statearr_32689_32751 = state_32627__$1;
(statearr_32689_32751[(2)] = null);

(statearr_32689_32751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (14))){
var state_32627__$1 = state_32627;
var statearr_32690_32752 = state_32627__$1;
(statearr_32690_32752[(2)] = null);

(statearr_32690_32752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (45))){
var inst_32617 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32691_32753 = state_32627__$1;
(statearr_32691_32753[(2)] = inst_32617);

(statearr_32691_32753[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (26))){
var inst_32559 = (state_32627[(29)]);
var inst_32613 = (state_32627[(2)]);
var inst_32614 = cljs.core.seq.call(null,inst_32559);
var state_32627__$1 = (function (){var statearr_32692 = state_32627;
(statearr_32692[(31)] = inst_32613);

return statearr_32692;
})();
if(inst_32614){
var statearr_32693_32754 = state_32627__$1;
(statearr_32693_32754[(1)] = (42));

} else {
var statearr_32694_32755 = state_32627__$1;
(statearr_32694_32755[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (16))){
var inst_32526 = (state_32627[(7)]);
var inst_32528 = cljs.core.chunked_seq_QMARK_.call(null,inst_32526);
var state_32627__$1 = state_32627;
if(inst_32528){
var statearr_32695_32756 = state_32627__$1;
(statearr_32695_32756[(1)] = (19));

} else {
var statearr_32696_32757 = state_32627__$1;
(statearr_32696_32757[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (38))){
var inst_32606 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32697_32758 = state_32627__$1;
(statearr_32697_32758[(2)] = inst_32606);

(statearr_32697_32758[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (30))){
var state_32627__$1 = state_32627;
var statearr_32698_32759 = state_32627__$1;
(statearr_32698_32759[(2)] = null);

(statearr_32698_32759[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (10))){
var inst_32507 = (state_32627[(16)]);
var inst_32505 = (state_32627[(17)]);
var inst_32515 = cljs.core._nth.call(null,inst_32505,inst_32507);
var inst_32516 = cljs.core.nth.call(null,inst_32515,(0),null);
var inst_32517 = cljs.core.nth.call(null,inst_32515,(1),null);
var state_32627__$1 = (function (){var statearr_32699 = state_32627;
(statearr_32699[(26)] = inst_32516);

return statearr_32699;
})();
if(cljs.core.truth_(inst_32517)){
var statearr_32700_32760 = state_32627__$1;
(statearr_32700_32760[(1)] = (13));

} else {
var statearr_32701_32761 = state_32627__$1;
(statearr_32701_32761[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (18))){
var inst_32552 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32702_32762 = state_32627__$1;
(statearr_32702_32762[(2)] = inst_32552);

(statearr_32702_32762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (42))){
var state_32627__$1 = state_32627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32627__$1,(45),dchan);
} else {
if((state_val_32628 === (37))){
var inst_32586 = (state_32627[(25)]);
var inst_32595 = (state_32627[(23)]);
var inst_32495 = (state_32627[(11)]);
var inst_32595__$1 = cljs.core.first.call(null,inst_32586);
var inst_32596 = cljs.core.async.put_BANG_.call(null,inst_32595__$1,inst_32495,done);
var state_32627__$1 = (function (){var statearr_32703 = state_32627;
(statearr_32703[(23)] = inst_32595__$1);

return statearr_32703;
})();
if(cljs.core.truth_(inst_32596)){
var statearr_32704_32763 = state_32627__$1;
(statearr_32704_32763[(1)] = (39));

} else {
var statearr_32705_32764 = state_32627__$1;
(statearr_32705_32764[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (8))){
var inst_32506 = (state_32627[(15)]);
var inst_32507 = (state_32627[(16)]);
var inst_32509 = (inst_32507 < inst_32506);
var inst_32510 = inst_32509;
var state_32627__$1 = state_32627;
if(cljs.core.truth_(inst_32510)){
var statearr_32706_32765 = state_32627__$1;
(statearr_32706_32765[(1)] = (10));

} else {
var statearr_32707_32766 = state_32627__$1;
(statearr_32707_32766[(1)] = (11));

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
});})(c__31894__auto___32712,cs,m,dchan,dctr,done))
;
return ((function (switch__31799__auto__,c__31894__auto___32712,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31800__auto__ = null;
var cljs$core$async$mult_$_state_machine__31800__auto____0 = (function (){
var statearr_32708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32708[(0)] = cljs$core$async$mult_$_state_machine__31800__auto__);

(statearr_32708[(1)] = (1));

return statearr_32708;
});
var cljs$core$async$mult_$_state_machine__31800__auto____1 = (function (state_32627){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_32627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e32709){if((e32709 instanceof Object)){
var ex__31803__auto__ = e32709;
var statearr_32710_32767 = state_32627;
(statearr_32710_32767[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32768 = state_32627;
state_32627 = G__32768;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31800__auto__ = function(state_32627){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31800__auto____1.call(this,state_32627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31800__auto____0;
cljs$core$async$mult_$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31800__auto____1;
return cljs$core$async$mult_$_state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___32712,cs,m,dchan,dctr,done))
})();
var state__31896__auto__ = (function (){var statearr_32711 = f__31895__auto__.call(null);
(statearr_32711[(6)] = c__31894__auto___32712);

return statearr_32711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___32712,cs,m,dchan,dctr,done))
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
var G__32770 = arguments.length;
switch (G__32770) {
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
var len__4730__auto___32782 = arguments.length;
var i__4731__auto___32783 = (0);
while(true){
if((i__4731__auto___32783 < len__4730__auto___32782)){
args__4736__auto__.push((arguments[i__4731__auto___32783]));

var G__32784 = (i__4731__auto___32783 + (1));
i__4731__auto___32783 = G__32784;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32776){
var map__32777 = p__32776;
var map__32777__$1 = (((((!((map__32777 == null))))?(((((map__32777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32777):map__32777);
var opts = map__32777__$1;
var statearr_32779_32785 = state;
(statearr_32779_32785[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__32777,map__32777__$1,opts){
return (function (val){
var statearr_32780_32786 = state;
(statearr_32780_32786[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32777,map__32777__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_32781_32787 = state;
(statearr_32781_32787[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32772){
var G__32773 = cljs.core.first.call(null,seq32772);
var seq32772__$1 = cljs.core.next.call(null,seq32772);
var G__32774 = cljs.core.first.call(null,seq32772__$1);
var seq32772__$2 = cljs.core.next.call(null,seq32772__$1);
var G__32775 = cljs.core.first.call(null,seq32772__$2);
var seq32772__$3 = cljs.core.next.call(null,seq32772__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32773,G__32774,G__32775,seq32772__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32788 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32789){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32789 = meta32789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32790,meta32789__$1){
var self__ = this;
var _32790__$1 = this;
return (new cljs.core.async.t_cljs$core$async32788(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32789__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32790){
var self__ = this;
var _32790__$1 = this;
return self__.meta32789;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32788.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32789","meta32789",1580762687,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32788";

cljs.core.async.t_cljs$core$async32788.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32788");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32788.
 */
cljs.core.async.__GT_t_cljs$core$async32788 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32788(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32789){
return (new cljs.core.async.t_cljs$core$async32788(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32789));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32788(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31894__auto___32952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___32952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___32952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32892){
var state_val_32893 = (state_32892[(1)]);
if((state_val_32893 === (7))){
var inst_32807 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
var statearr_32894_32953 = state_32892__$1;
(statearr_32894_32953[(2)] = inst_32807);

(statearr_32894_32953[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (20))){
var inst_32819 = (state_32892[(7)]);
var state_32892__$1 = state_32892;
var statearr_32895_32954 = state_32892__$1;
(statearr_32895_32954[(2)] = inst_32819);

(statearr_32895_32954[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (27))){
var state_32892__$1 = state_32892;
var statearr_32896_32955 = state_32892__$1;
(statearr_32896_32955[(2)] = null);

(statearr_32896_32955[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (1))){
var inst_32794 = (state_32892[(8)]);
var inst_32794__$1 = calc_state.call(null);
var inst_32796 = (inst_32794__$1 == null);
var inst_32797 = cljs.core.not.call(null,inst_32796);
var state_32892__$1 = (function (){var statearr_32897 = state_32892;
(statearr_32897[(8)] = inst_32794__$1);

return statearr_32897;
})();
if(inst_32797){
var statearr_32898_32956 = state_32892__$1;
(statearr_32898_32956[(1)] = (2));

} else {
var statearr_32899_32957 = state_32892__$1;
(statearr_32899_32957[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (24))){
var inst_32843 = (state_32892[(9)]);
var inst_32866 = (state_32892[(10)]);
var inst_32852 = (state_32892[(11)]);
var inst_32866__$1 = inst_32843.call(null,inst_32852);
var state_32892__$1 = (function (){var statearr_32900 = state_32892;
(statearr_32900[(10)] = inst_32866__$1);

return statearr_32900;
})();
if(cljs.core.truth_(inst_32866__$1)){
var statearr_32901_32958 = state_32892__$1;
(statearr_32901_32958[(1)] = (29));

} else {
var statearr_32902_32959 = state_32892__$1;
(statearr_32902_32959[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (4))){
var inst_32810 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
if(cljs.core.truth_(inst_32810)){
var statearr_32903_32960 = state_32892__$1;
(statearr_32903_32960[(1)] = (8));

} else {
var statearr_32904_32961 = state_32892__$1;
(statearr_32904_32961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (15))){
var inst_32837 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
if(cljs.core.truth_(inst_32837)){
var statearr_32905_32962 = state_32892__$1;
(statearr_32905_32962[(1)] = (19));

} else {
var statearr_32906_32963 = state_32892__$1;
(statearr_32906_32963[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (21))){
var inst_32842 = (state_32892[(12)]);
var inst_32842__$1 = (state_32892[(2)]);
var inst_32843 = cljs.core.get.call(null,inst_32842__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32844 = cljs.core.get.call(null,inst_32842__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32845 = cljs.core.get.call(null,inst_32842__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32892__$1 = (function (){var statearr_32907 = state_32892;
(statearr_32907[(9)] = inst_32843);

(statearr_32907[(13)] = inst_32844);

(statearr_32907[(12)] = inst_32842__$1);

return statearr_32907;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32892__$1,(22),inst_32845);
} else {
if((state_val_32893 === (31))){
var inst_32874 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
if(cljs.core.truth_(inst_32874)){
var statearr_32908_32964 = state_32892__$1;
(statearr_32908_32964[(1)] = (32));

} else {
var statearr_32909_32965 = state_32892__$1;
(statearr_32909_32965[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (32))){
var inst_32851 = (state_32892[(14)]);
var state_32892__$1 = state_32892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32892__$1,(35),out,inst_32851);
} else {
if((state_val_32893 === (33))){
var inst_32842 = (state_32892[(12)]);
var inst_32819 = inst_32842;
var state_32892__$1 = (function (){var statearr_32910 = state_32892;
(statearr_32910[(7)] = inst_32819);

return statearr_32910;
})();
var statearr_32911_32966 = state_32892__$1;
(statearr_32911_32966[(2)] = null);

(statearr_32911_32966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (13))){
var inst_32819 = (state_32892[(7)]);
var inst_32826 = inst_32819.cljs$lang$protocol_mask$partition0$;
var inst_32827 = (inst_32826 & (64));
var inst_32828 = inst_32819.cljs$core$ISeq$;
var inst_32829 = (cljs.core.PROTOCOL_SENTINEL === inst_32828);
var inst_32830 = ((inst_32827) || (inst_32829));
var state_32892__$1 = state_32892;
if(cljs.core.truth_(inst_32830)){
var statearr_32912_32967 = state_32892__$1;
(statearr_32912_32967[(1)] = (16));

} else {
var statearr_32913_32968 = state_32892__$1;
(statearr_32913_32968[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (22))){
var inst_32851 = (state_32892[(14)]);
var inst_32852 = (state_32892[(11)]);
var inst_32850 = (state_32892[(2)]);
var inst_32851__$1 = cljs.core.nth.call(null,inst_32850,(0),null);
var inst_32852__$1 = cljs.core.nth.call(null,inst_32850,(1),null);
var inst_32853 = (inst_32851__$1 == null);
var inst_32854 = cljs.core._EQ_.call(null,inst_32852__$1,change);
var inst_32855 = ((inst_32853) || (inst_32854));
var state_32892__$1 = (function (){var statearr_32914 = state_32892;
(statearr_32914[(14)] = inst_32851__$1);

(statearr_32914[(11)] = inst_32852__$1);

return statearr_32914;
})();
if(cljs.core.truth_(inst_32855)){
var statearr_32915_32969 = state_32892__$1;
(statearr_32915_32969[(1)] = (23));

} else {
var statearr_32916_32970 = state_32892__$1;
(statearr_32916_32970[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (36))){
var inst_32842 = (state_32892[(12)]);
var inst_32819 = inst_32842;
var state_32892__$1 = (function (){var statearr_32917 = state_32892;
(statearr_32917[(7)] = inst_32819);

return statearr_32917;
})();
var statearr_32918_32971 = state_32892__$1;
(statearr_32918_32971[(2)] = null);

(statearr_32918_32971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (29))){
var inst_32866 = (state_32892[(10)]);
var state_32892__$1 = state_32892;
var statearr_32919_32972 = state_32892__$1;
(statearr_32919_32972[(2)] = inst_32866);

(statearr_32919_32972[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (6))){
var state_32892__$1 = state_32892;
var statearr_32920_32973 = state_32892__$1;
(statearr_32920_32973[(2)] = false);

(statearr_32920_32973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (28))){
var inst_32862 = (state_32892[(2)]);
var inst_32863 = calc_state.call(null);
var inst_32819 = inst_32863;
var state_32892__$1 = (function (){var statearr_32921 = state_32892;
(statearr_32921[(15)] = inst_32862);

(statearr_32921[(7)] = inst_32819);

return statearr_32921;
})();
var statearr_32922_32974 = state_32892__$1;
(statearr_32922_32974[(2)] = null);

(statearr_32922_32974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (25))){
var inst_32888 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
var statearr_32923_32975 = state_32892__$1;
(statearr_32923_32975[(2)] = inst_32888);

(statearr_32923_32975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (34))){
var inst_32886 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
var statearr_32924_32976 = state_32892__$1;
(statearr_32924_32976[(2)] = inst_32886);

(statearr_32924_32976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (17))){
var state_32892__$1 = state_32892;
var statearr_32925_32977 = state_32892__$1;
(statearr_32925_32977[(2)] = false);

(statearr_32925_32977[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (3))){
var state_32892__$1 = state_32892;
var statearr_32926_32978 = state_32892__$1;
(statearr_32926_32978[(2)] = false);

(statearr_32926_32978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (12))){
var inst_32890 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32892__$1,inst_32890);
} else {
if((state_val_32893 === (2))){
var inst_32794 = (state_32892[(8)]);
var inst_32799 = inst_32794.cljs$lang$protocol_mask$partition0$;
var inst_32800 = (inst_32799 & (64));
var inst_32801 = inst_32794.cljs$core$ISeq$;
var inst_32802 = (cljs.core.PROTOCOL_SENTINEL === inst_32801);
var inst_32803 = ((inst_32800) || (inst_32802));
var state_32892__$1 = state_32892;
if(cljs.core.truth_(inst_32803)){
var statearr_32927_32979 = state_32892__$1;
(statearr_32927_32979[(1)] = (5));

} else {
var statearr_32928_32980 = state_32892__$1;
(statearr_32928_32980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (23))){
var inst_32851 = (state_32892[(14)]);
var inst_32857 = (inst_32851 == null);
var state_32892__$1 = state_32892;
if(cljs.core.truth_(inst_32857)){
var statearr_32929_32981 = state_32892__$1;
(statearr_32929_32981[(1)] = (26));

} else {
var statearr_32930_32982 = state_32892__$1;
(statearr_32930_32982[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (35))){
var inst_32877 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
if(cljs.core.truth_(inst_32877)){
var statearr_32931_32983 = state_32892__$1;
(statearr_32931_32983[(1)] = (36));

} else {
var statearr_32932_32984 = state_32892__$1;
(statearr_32932_32984[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (19))){
var inst_32819 = (state_32892[(7)]);
var inst_32839 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32819);
var state_32892__$1 = state_32892;
var statearr_32933_32985 = state_32892__$1;
(statearr_32933_32985[(2)] = inst_32839);

(statearr_32933_32985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (11))){
var inst_32819 = (state_32892[(7)]);
var inst_32823 = (inst_32819 == null);
var inst_32824 = cljs.core.not.call(null,inst_32823);
var state_32892__$1 = state_32892;
if(inst_32824){
var statearr_32934_32986 = state_32892__$1;
(statearr_32934_32986[(1)] = (13));

} else {
var statearr_32935_32987 = state_32892__$1;
(statearr_32935_32987[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (9))){
var inst_32794 = (state_32892[(8)]);
var state_32892__$1 = state_32892;
var statearr_32936_32988 = state_32892__$1;
(statearr_32936_32988[(2)] = inst_32794);

(statearr_32936_32988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (5))){
var state_32892__$1 = state_32892;
var statearr_32937_32989 = state_32892__$1;
(statearr_32937_32989[(2)] = true);

(statearr_32937_32989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (14))){
var state_32892__$1 = state_32892;
var statearr_32938_32990 = state_32892__$1;
(statearr_32938_32990[(2)] = false);

(statearr_32938_32990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (26))){
var inst_32852 = (state_32892[(11)]);
var inst_32859 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32852);
var state_32892__$1 = state_32892;
var statearr_32939_32991 = state_32892__$1;
(statearr_32939_32991[(2)] = inst_32859);

(statearr_32939_32991[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (16))){
var state_32892__$1 = state_32892;
var statearr_32940_32992 = state_32892__$1;
(statearr_32940_32992[(2)] = true);

(statearr_32940_32992[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (38))){
var inst_32882 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
var statearr_32941_32993 = state_32892__$1;
(statearr_32941_32993[(2)] = inst_32882);

(statearr_32941_32993[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (30))){
var inst_32843 = (state_32892[(9)]);
var inst_32844 = (state_32892[(13)]);
var inst_32852 = (state_32892[(11)]);
var inst_32869 = cljs.core.empty_QMARK_.call(null,inst_32843);
var inst_32870 = inst_32844.call(null,inst_32852);
var inst_32871 = cljs.core.not.call(null,inst_32870);
var inst_32872 = ((inst_32869) && (inst_32871));
var state_32892__$1 = state_32892;
var statearr_32942_32994 = state_32892__$1;
(statearr_32942_32994[(2)] = inst_32872);

(statearr_32942_32994[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (10))){
var inst_32794 = (state_32892[(8)]);
var inst_32815 = (state_32892[(2)]);
var inst_32816 = cljs.core.get.call(null,inst_32815,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32817 = cljs.core.get.call(null,inst_32815,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32818 = cljs.core.get.call(null,inst_32815,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32819 = inst_32794;
var state_32892__$1 = (function (){var statearr_32943 = state_32892;
(statearr_32943[(16)] = inst_32817);

(statearr_32943[(17)] = inst_32818);

(statearr_32943[(7)] = inst_32819);

(statearr_32943[(18)] = inst_32816);

return statearr_32943;
})();
var statearr_32944_32995 = state_32892__$1;
(statearr_32944_32995[(2)] = null);

(statearr_32944_32995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (18))){
var inst_32834 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
var statearr_32945_32996 = state_32892__$1;
(statearr_32945_32996[(2)] = inst_32834);

(statearr_32945_32996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (37))){
var state_32892__$1 = state_32892;
var statearr_32946_32997 = state_32892__$1;
(statearr_32946_32997[(2)] = null);

(statearr_32946_32997[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (8))){
var inst_32794 = (state_32892[(8)]);
var inst_32812 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32794);
var state_32892__$1 = state_32892;
var statearr_32947_32998 = state_32892__$1;
(statearr_32947_32998[(2)] = inst_32812);

(statearr_32947_32998[(1)] = (10));


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
});})(c__31894__auto___32952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31799__auto__,c__31894__auto___32952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31800__auto__ = null;
var cljs$core$async$mix_$_state_machine__31800__auto____0 = (function (){
var statearr_32948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32948[(0)] = cljs$core$async$mix_$_state_machine__31800__auto__);

(statearr_32948[(1)] = (1));

return statearr_32948;
});
var cljs$core$async$mix_$_state_machine__31800__auto____1 = (function (state_32892){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_32892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e32949){if((e32949 instanceof Object)){
var ex__31803__auto__ = e32949;
var statearr_32950_32999 = state_32892;
(statearr_32950_32999[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33000 = state_32892;
state_32892 = G__33000;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31800__auto__ = function(state_32892){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31800__auto____1.call(this,state_32892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31800__auto____0;
cljs$core$async$mix_$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31800__auto____1;
return cljs$core$async$mix_$_state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___32952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31896__auto__ = (function (){var statearr_32951 = f__31895__auto__.call(null);
(statearr_32951[(6)] = c__31894__auto___32952);

return statearr_32951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___32952,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__33002 = arguments.length;
switch (G__33002) {
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
var G__33006 = arguments.length;
switch (G__33006) {
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
return (function (p1__33004_SHARP_){
if(cljs.core.truth_(p1__33004_SHARP_.call(null,topic))){
return p1__33004_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33004_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33007 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33007 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33008){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33008 = meta33008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33009,meta33008__$1){
var self__ = this;
var _33009__$1 = this;
return (new cljs.core.async.t_cljs$core$async33007(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33008__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33009){
var self__ = this;
var _33009__$1 = this;
return self__.meta33008;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33007.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33007.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33008","meta33008",-1569820904,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33007";

cljs.core.async.t_cljs$core$async33007.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33007");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33007.
 */
cljs.core.async.__GT_t_cljs$core$async33007 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33007(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33008){
return (new cljs.core.async.t_cljs$core$async33007(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33008));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33007(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31894__auto___33127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___33127,mults,ensure_mult,p){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___33127,mults,ensure_mult,p){
return (function (state_33081){
var state_val_33082 = (state_33081[(1)]);
if((state_val_33082 === (7))){
var inst_33077 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33083_33128 = state_33081__$1;
(statearr_33083_33128[(2)] = inst_33077);

(statearr_33083_33128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (20))){
var state_33081__$1 = state_33081;
var statearr_33084_33129 = state_33081__$1;
(statearr_33084_33129[(2)] = null);

(statearr_33084_33129[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (1))){
var state_33081__$1 = state_33081;
var statearr_33085_33130 = state_33081__$1;
(statearr_33085_33130[(2)] = null);

(statearr_33085_33130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (24))){
var inst_33060 = (state_33081[(7)]);
var inst_33069 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33060);
var state_33081__$1 = state_33081;
var statearr_33086_33131 = state_33081__$1;
(statearr_33086_33131[(2)] = inst_33069);

(statearr_33086_33131[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (4))){
var inst_33012 = (state_33081[(8)]);
var inst_33012__$1 = (state_33081[(2)]);
var inst_33013 = (inst_33012__$1 == null);
var state_33081__$1 = (function (){var statearr_33087 = state_33081;
(statearr_33087[(8)] = inst_33012__$1);

return statearr_33087;
})();
if(cljs.core.truth_(inst_33013)){
var statearr_33088_33132 = state_33081__$1;
(statearr_33088_33132[(1)] = (5));

} else {
var statearr_33089_33133 = state_33081__$1;
(statearr_33089_33133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (15))){
var inst_33054 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33090_33134 = state_33081__$1;
(statearr_33090_33134[(2)] = inst_33054);

(statearr_33090_33134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (21))){
var inst_33074 = (state_33081[(2)]);
var state_33081__$1 = (function (){var statearr_33091 = state_33081;
(statearr_33091[(9)] = inst_33074);

return statearr_33091;
})();
var statearr_33092_33135 = state_33081__$1;
(statearr_33092_33135[(2)] = null);

(statearr_33092_33135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (13))){
var inst_33036 = (state_33081[(10)]);
var inst_33038 = cljs.core.chunked_seq_QMARK_.call(null,inst_33036);
var state_33081__$1 = state_33081;
if(inst_33038){
var statearr_33093_33136 = state_33081__$1;
(statearr_33093_33136[(1)] = (16));

} else {
var statearr_33094_33137 = state_33081__$1;
(statearr_33094_33137[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (22))){
var inst_33066 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
if(cljs.core.truth_(inst_33066)){
var statearr_33095_33138 = state_33081__$1;
(statearr_33095_33138[(1)] = (23));

} else {
var statearr_33096_33139 = state_33081__$1;
(statearr_33096_33139[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (6))){
var inst_33060 = (state_33081[(7)]);
var inst_33012 = (state_33081[(8)]);
var inst_33062 = (state_33081[(11)]);
var inst_33060__$1 = topic_fn.call(null,inst_33012);
var inst_33061 = cljs.core.deref.call(null,mults);
var inst_33062__$1 = cljs.core.get.call(null,inst_33061,inst_33060__$1);
var state_33081__$1 = (function (){var statearr_33097 = state_33081;
(statearr_33097[(7)] = inst_33060__$1);

(statearr_33097[(11)] = inst_33062__$1);

return statearr_33097;
})();
if(cljs.core.truth_(inst_33062__$1)){
var statearr_33098_33140 = state_33081__$1;
(statearr_33098_33140[(1)] = (19));

} else {
var statearr_33099_33141 = state_33081__$1;
(statearr_33099_33141[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (25))){
var inst_33071 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33100_33142 = state_33081__$1;
(statearr_33100_33142[(2)] = inst_33071);

(statearr_33100_33142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (17))){
var inst_33036 = (state_33081[(10)]);
var inst_33045 = cljs.core.first.call(null,inst_33036);
var inst_33046 = cljs.core.async.muxch_STAR_.call(null,inst_33045);
var inst_33047 = cljs.core.async.close_BANG_.call(null,inst_33046);
var inst_33048 = cljs.core.next.call(null,inst_33036);
var inst_33022 = inst_33048;
var inst_33023 = null;
var inst_33024 = (0);
var inst_33025 = (0);
var state_33081__$1 = (function (){var statearr_33101 = state_33081;
(statearr_33101[(12)] = inst_33025);

(statearr_33101[(13)] = inst_33022);

(statearr_33101[(14)] = inst_33024);

(statearr_33101[(15)] = inst_33023);

(statearr_33101[(16)] = inst_33047);

return statearr_33101;
})();
var statearr_33102_33143 = state_33081__$1;
(statearr_33102_33143[(2)] = null);

(statearr_33102_33143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (3))){
var inst_33079 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33081__$1,inst_33079);
} else {
if((state_val_33082 === (12))){
var inst_33056 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33103_33144 = state_33081__$1;
(statearr_33103_33144[(2)] = inst_33056);

(statearr_33103_33144[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (2))){
var state_33081__$1 = state_33081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33081__$1,(4),ch);
} else {
if((state_val_33082 === (23))){
var state_33081__$1 = state_33081;
var statearr_33104_33145 = state_33081__$1;
(statearr_33104_33145[(2)] = null);

(statearr_33104_33145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (19))){
var inst_33012 = (state_33081[(8)]);
var inst_33062 = (state_33081[(11)]);
var inst_33064 = cljs.core.async.muxch_STAR_.call(null,inst_33062);
var state_33081__$1 = state_33081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33081__$1,(22),inst_33064,inst_33012);
} else {
if((state_val_33082 === (11))){
var inst_33036 = (state_33081[(10)]);
var inst_33022 = (state_33081[(13)]);
var inst_33036__$1 = cljs.core.seq.call(null,inst_33022);
var state_33081__$1 = (function (){var statearr_33105 = state_33081;
(statearr_33105[(10)] = inst_33036__$1);

return statearr_33105;
})();
if(inst_33036__$1){
var statearr_33106_33146 = state_33081__$1;
(statearr_33106_33146[(1)] = (13));

} else {
var statearr_33107_33147 = state_33081__$1;
(statearr_33107_33147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (9))){
var inst_33058 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33108_33148 = state_33081__$1;
(statearr_33108_33148[(2)] = inst_33058);

(statearr_33108_33148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (5))){
var inst_33019 = cljs.core.deref.call(null,mults);
var inst_33020 = cljs.core.vals.call(null,inst_33019);
var inst_33021 = cljs.core.seq.call(null,inst_33020);
var inst_33022 = inst_33021;
var inst_33023 = null;
var inst_33024 = (0);
var inst_33025 = (0);
var state_33081__$1 = (function (){var statearr_33109 = state_33081;
(statearr_33109[(12)] = inst_33025);

(statearr_33109[(13)] = inst_33022);

(statearr_33109[(14)] = inst_33024);

(statearr_33109[(15)] = inst_33023);

return statearr_33109;
})();
var statearr_33110_33149 = state_33081__$1;
(statearr_33110_33149[(2)] = null);

(statearr_33110_33149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (14))){
var state_33081__$1 = state_33081;
var statearr_33114_33150 = state_33081__$1;
(statearr_33114_33150[(2)] = null);

(statearr_33114_33150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (16))){
var inst_33036 = (state_33081[(10)]);
var inst_33040 = cljs.core.chunk_first.call(null,inst_33036);
var inst_33041 = cljs.core.chunk_rest.call(null,inst_33036);
var inst_33042 = cljs.core.count.call(null,inst_33040);
var inst_33022 = inst_33041;
var inst_33023 = inst_33040;
var inst_33024 = inst_33042;
var inst_33025 = (0);
var state_33081__$1 = (function (){var statearr_33115 = state_33081;
(statearr_33115[(12)] = inst_33025);

(statearr_33115[(13)] = inst_33022);

(statearr_33115[(14)] = inst_33024);

(statearr_33115[(15)] = inst_33023);

return statearr_33115;
})();
var statearr_33116_33151 = state_33081__$1;
(statearr_33116_33151[(2)] = null);

(statearr_33116_33151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (10))){
var inst_33025 = (state_33081[(12)]);
var inst_33022 = (state_33081[(13)]);
var inst_33024 = (state_33081[(14)]);
var inst_33023 = (state_33081[(15)]);
var inst_33030 = cljs.core._nth.call(null,inst_33023,inst_33025);
var inst_33031 = cljs.core.async.muxch_STAR_.call(null,inst_33030);
var inst_33032 = cljs.core.async.close_BANG_.call(null,inst_33031);
var inst_33033 = (inst_33025 + (1));
var tmp33111 = inst_33022;
var tmp33112 = inst_33024;
var tmp33113 = inst_33023;
var inst_33022__$1 = tmp33111;
var inst_33023__$1 = tmp33113;
var inst_33024__$1 = tmp33112;
var inst_33025__$1 = inst_33033;
var state_33081__$1 = (function (){var statearr_33117 = state_33081;
(statearr_33117[(17)] = inst_33032);

(statearr_33117[(12)] = inst_33025__$1);

(statearr_33117[(13)] = inst_33022__$1);

(statearr_33117[(14)] = inst_33024__$1);

(statearr_33117[(15)] = inst_33023__$1);

return statearr_33117;
})();
var statearr_33118_33152 = state_33081__$1;
(statearr_33118_33152[(2)] = null);

(statearr_33118_33152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (18))){
var inst_33051 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33119_33153 = state_33081__$1;
(statearr_33119_33153[(2)] = inst_33051);

(statearr_33119_33153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (8))){
var inst_33025 = (state_33081[(12)]);
var inst_33024 = (state_33081[(14)]);
var inst_33027 = (inst_33025 < inst_33024);
var inst_33028 = inst_33027;
var state_33081__$1 = state_33081;
if(cljs.core.truth_(inst_33028)){
var statearr_33120_33154 = state_33081__$1;
(statearr_33120_33154[(1)] = (10));

} else {
var statearr_33121_33155 = state_33081__$1;
(statearr_33121_33155[(1)] = (11));

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
});})(c__31894__auto___33127,mults,ensure_mult,p))
;
return ((function (switch__31799__auto__,c__31894__auto___33127,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31800__auto__ = null;
var cljs$core$async$state_machine__31800__auto____0 = (function (){
var statearr_33122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33122[(0)] = cljs$core$async$state_machine__31800__auto__);

(statearr_33122[(1)] = (1));

return statearr_33122;
});
var cljs$core$async$state_machine__31800__auto____1 = (function (state_33081){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_33081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e33123){if((e33123 instanceof Object)){
var ex__31803__auto__ = e33123;
var statearr_33124_33156 = state_33081;
(statearr_33124_33156[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33157 = state_33081;
state_33081 = G__33157;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$state_machine__31800__auto__ = function(state_33081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31800__auto____1.call(this,state_33081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31800__auto____0;
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31800__auto____1;
return cljs$core$async$state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___33127,mults,ensure_mult,p))
})();
var state__31896__auto__ = (function (){var statearr_33125 = f__31895__auto__.call(null);
(statearr_33125[(6)] = c__31894__auto___33127);

return statearr_33125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___33127,mults,ensure_mult,p))
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
var G__33159 = arguments.length;
switch (G__33159) {
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
var G__33162 = arguments.length;
switch (G__33162) {
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
var G__33165 = arguments.length;
switch (G__33165) {
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
var c__31894__auto___33232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___33232,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___33232,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33204){
var state_val_33205 = (state_33204[(1)]);
if((state_val_33205 === (7))){
var state_33204__$1 = state_33204;
var statearr_33206_33233 = state_33204__$1;
(statearr_33206_33233[(2)] = null);

(statearr_33206_33233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (1))){
var state_33204__$1 = state_33204;
var statearr_33207_33234 = state_33204__$1;
(statearr_33207_33234[(2)] = null);

(statearr_33207_33234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (4))){
var inst_33168 = (state_33204[(7)]);
var inst_33170 = (inst_33168 < cnt);
var state_33204__$1 = state_33204;
if(cljs.core.truth_(inst_33170)){
var statearr_33208_33235 = state_33204__$1;
(statearr_33208_33235[(1)] = (6));

} else {
var statearr_33209_33236 = state_33204__$1;
(statearr_33209_33236[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (15))){
var inst_33200 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
var statearr_33210_33237 = state_33204__$1;
(statearr_33210_33237[(2)] = inst_33200);

(statearr_33210_33237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (13))){
var inst_33193 = cljs.core.async.close_BANG_.call(null,out);
var state_33204__$1 = state_33204;
var statearr_33211_33238 = state_33204__$1;
(statearr_33211_33238[(2)] = inst_33193);

(statearr_33211_33238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (6))){
var state_33204__$1 = state_33204;
var statearr_33212_33239 = state_33204__$1;
(statearr_33212_33239[(2)] = null);

(statearr_33212_33239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (3))){
var inst_33202 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33204__$1,inst_33202);
} else {
if((state_val_33205 === (12))){
var inst_33190 = (state_33204[(8)]);
var inst_33190__$1 = (state_33204[(2)]);
var inst_33191 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33190__$1);
var state_33204__$1 = (function (){var statearr_33213 = state_33204;
(statearr_33213[(8)] = inst_33190__$1);

return statearr_33213;
})();
if(cljs.core.truth_(inst_33191)){
var statearr_33214_33240 = state_33204__$1;
(statearr_33214_33240[(1)] = (13));

} else {
var statearr_33215_33241 = state_33204__$1;
(statearr_33215_33241[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (2))){
var inst_33167 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33168 = (0);
var state_33204__$1 = (function (){var statearr_33216 = state_33204;
(statearr_33216[(9)] = inst_33167);

(statearr_33216[(7)] = inst_33168);

return statearr_33216;
})();
var statearr_33217_33242 = state_33204__$1;
(statearr_33217_33242[(2)] = null);

(statearr_33217_33242[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (11))){
var inst_33168 = (state_33204[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33204,(10),Object,null,(9));
var inst_33177 = chs__$1.call(null,inst_33168);
var inst_33178 = done.call(null,inst_33168);
var inst_33179 = cljs.core.async.take_BANG_.call(null,inst_33177,inst_33178);
var state_33204__$1 = state_33204;
var statearr_33218_33243 = state_33204__$1;
(statearr_33218_33243[(2)] = inst_33179);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33204__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (9))){
var inst_33168 = (state_33204[(7)]);
var inst_33181 = (state_33204[(2)]);
var inst_33182 = (inst_33168 + (1));
var inst_33168__$1 = inst_33182;
var state_33204__$1 = (function (){var statearr_33219 = state_33204;
(statearr_33219[(10)] = inst_33181);

(statearr_33219[(7)] = inst_33168__$1);

return statearr_33219;
})();
var statearr_33220_33244 = state_33204__$1;
(statearr_33220_33244[(2)] = null);

(statearr_33220_33244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (5))){
var inst_33188 = (state_33204[(2)]);
var state_33204__$1 = (function (){var statearr_33221 = state_33204;
(statearr_33221[(11)] = inst_33188);

return statearr_33221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33204__$1,(12),dchan);
} else {
if((state_val_33205 === (14))){
var inst_33190 = (state_33204[(8)]);
var inst_33195 = cljs.core.apply.call(null,f,inst_33190);
var state_33204__$1 = state_33204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33204__$1,(16),out,inst_33195);
} else {
if((state_val_33205 === (16))){
var inst_33197 = (state_33204[(2)]);
var state_33204__$1 = (function (){var statearr_33222 = state_33204;
(statearr_33222[(12)] = inst_33197);

return statearr_33222;
})();
var statearr_33223_33245 = state_33204__$1;
(statearr_33223_33245[(2)] = null);

(statearr_33223_33245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (10))){
var inst_33172 = (state_33204[(2)]);
var inst_33173 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33204__$1 = (function (){var statearr_33224 = state_33204;
(statearr_33224[(13)] = inst_33172);

return statearr_33224;
})();
var statearr_33225_33246 = state_33204__$1;
(statearr_33225_33246[(2)] = inst_33173);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33204__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (8))){
var inst_33186 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
var statearr_33226_33247 = state_33204__$1;
(statearr_33226_33247[(2)] = inst_33186);

(statearr_33226_33247[(1)] = (5));


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
});})(c__31894__auto___33232,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31799__auto__,c__31894__auto___33232,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31800__auto__ = null;
var cljs$core$async$state_machine__31800__auto____0 = (function (){
var statearr_33227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33227[(0)] = cljs$core$async$state_machine__31800__auto__);

(statearr_33227[(1)] = (1));

return statearr_33227;
});
var cljs$core$async$state_machine__31800__auto____1 = (function (state_33204){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_33204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e33228){if((e33228 instanceof Object)){
var ex__31803__auto__ = e33228;
var statearr_33229_33248 = state_33204;
(statearr_33229_33248[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33249 = state_33204;
state_33204 = G__33249;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$state_machine__31800__auto__ = function(state_33204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31800__auto____1.call(this,state_33204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31800__auto____0;
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31800__auto____1;
return cljs$core$async$state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___33232,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31896__auto__ = (function (){var statearr_33230 = f__31895__auto__.call(null);
(statearr_33230[(6)] = c__31894__auto___33232);

return statearr_33230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___33232,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33252 = arguments.length;
switch (G__33252) {
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
var c__31894__auto___33306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___33306,out){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___33306,out){
return (function (state_33284){
var state_val_33285 = (state_33284[(1)]);
if((state_val_33285 === (7))){
var inst_33263 = (state_33284[(7)]);
var inst_33264 = (state_33284[(8)]);
var inst_33263__$1 = (state_33284[(2)]);
var inst_33264__$1 = cljs.core.nth.call(null,inst_33263__$1,(0),null);
var inst_33265 = cljs.core.nth.call(null,inst_33263__$1,(1),null);
var inst_33266 = (inst_33264__$1 == null);
var state_33284__$1 = (function (){var statearr_33286 = state_33284;
(statearr_33286[(7)] = inst_33263__$1);

(statearr_33286[(8)] = inst_33264__$1);

(statearr_33286[(9)] = inst_33265);

return statearr_33286;
})();
if(cljs.core.truth_(inst_33266)){
var statearr_33287_33307 = state_33284__$1;
(statearr_33287_33307[(1)] = (8));

} else {
var statearr_33288_33308 = state_33284__$1;
(statearr_33288_33308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33285 === (1))){
var inst_33253 = cljs.core.vec.call(null,chs);
var inst_33254 = inst_33253;
var state_33284__$1 = (function (){var statearr_33289 = state_33284;
(statearr_33289[(10)] = inst_33254);

return statearr_33289;
})();
var statearr_33290_33309 = state_33284__$1;
(statearr_33290_33309[(2)] = null);

(statearr_33290_33309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33285 === (4))){
var inst_33254 = (state_33284[(10)]);
var state_33284__$1 = state_33284;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33284__$1,(7),inst_33254);
} else {
if((state_val_33285 === (6))){
var inst_33280 = (state_33284[(2)]);
var state_33284__$1 = state_33284;
var statearr_33291_33310 = state_33284__$1;
(statearr_33291_33310[(2)] = inst_33280);

(statearr_33291_33310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33285 === (3))){
var inst_33282 = (state_33284[(2)]);
var state_33284__$1 = state_33284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33284__$1,inst_33282);
} else {
if((state_val_33285 === (2))){
var inst_33254 = (state_33284[(10)]);
var inst_33256 = cljs.core.count.call(null,inst_33254);
var inst_33257 = (inst_33256 > (0));
var state_33284__$1 = state_33284;
if(cljs.core.truth_(inst_33257)){
var statearr_33293_33311 = state_33284__$1;
(statearr_33293_33311[(1)] = (4));

} else {
var statearr_33294_33312 = state_33284__$1;
(statearr_33294_33312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33285 === (11))){
var inst_33254 = (state_33284[(10)]);
var inst_33273 = (state_33284[(2)]);
var tmp33292 = inst_33254;
var inst_33254__$1 = tmp33292;
var state_33284__$1 = (function (){var statearr_33295 = state_33284;
(statearr_33295[(11)] = inst_33273);

(statearr_33295[(10)] = inst_33254__$1);

return statearr_33295;
})();
var statearr_33296_33313 = state_33284__$1;
(statearr_33296_33313[(2)] = null);

(statearr_33296_33313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33285 === (9))){
var inst_33264 = (state_33284[(8)]);
var state_33284__$1 = state_33284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33284__$1,(11),out,inst_33264);
} else {
if((state_val_33285 === (5))){
var inst_33278 = cljs.core.async.close_BANG_.call(null,out);
var state_33284__$1 = state_33284;
var statearr_33297_33314 = state_33284__$1;
(statearr_33297_33314[(2)] = inst_33278);

(statearr_33297_33314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33285 === (10))){
var inst_33276 = (state_33284[(2)]);
var state_33284__$1 = state_33284;
var statearr_33298_33315 = state_33284__$1;
(statearr_33298_33315[(2)] = inst_33276);

(statearr_33298_33315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33285 === (8))){
var inst_33263 = (state_33284[(7)]);
var inst_33264 = (state_33284[(8)]);
var inst_33254 = (state_33284[(10)]);
var inst_33265 = (state_33284[(9)]);
var inst_33268 = (function (){var cs = inst_33254;
var vec__33259 = inst_33263;
var v = inst_33264;
var c = inst_33265;
return ((function (cs,vec__33259,v,c,inst_33263,inst_33264,inst_33254,inst_33265,state_val_33285,c__31894__auto___33306,out){
return (function (p1__33250_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33250_SHARP_);
});
;})(cs,vec__33259,v,c,inst_33263,inst_33264,inst_33254,inst_33265,state_val_33285,c__31894__auto___33306,out))
})();
var inst_33269 = cljs.core.filterv.call(null,inst_33268,inst_33254);
var inst_33254__$1 = inst_33269;
var state_33284__$1 = (function (){var statearr_33299 = state_33284;
(statearr_33299[(10)] = inst_33254__$1);

return statearr_33299;
})();
var statearr_33300_33316 = state_33284__$1;
(statearr_33300_33316[(2)] = null);

(statearr_33300_33316[(1)] = (2));


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
});})(c__31894__auto___33306,out))
;
return ((function (switch__31799__auto__,c__31894__auto___33306,out){
return (function() {
var cljs$core$async$state_machine__31800__auto__ = null;
var cljs$core$async$state_machine__31800__auto____0 = (function (){
var statearr_33301 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33301[(0)] = cljs$core$async$state_machine__31800__auto__);

(statearr_33301[(1)] = (1));

return statearr_33301;
});
var cljs$core$async$state_machine__31800__auto____1 = (function (state_33284){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_33284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e33302){if((e33302 instanceof Object)){
var ex__31803__auto__ = e33302;
var statearr_33303_33317 = state_33284;
(statearr_33303_33317[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33318 = state_33284;
state_33284 = G__33318;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$state_machine__31800__auto__ = function(state_33284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31800__auto____1.call(this,state_33284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31800__auto____0;
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31800__auto____1;
return cljs$core$async$state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___33306,out))
})();
var state__31896__auto__ = (function (){var statearr_33304 = f__31895__auto__.call(null);
(statearr_33304[(6)] = c__31894__auto___33306);

return statearr_33304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___33306,out))
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
var G__33320 = arguments.length;
switch (G__33320) {
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
var c__31894__auto___33365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___33365,out){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___33365,out){
return (function (state_33344){
var state_val_33345 = (state_33344[(1)]);
if((state_val_33345 === (7))){
var inst_33326 = (state_33344[(7)]);
var inst_33326__$1 = (state_33344[(2)]);
var inst_33327 = (inst_33326__$1 == null);
var inst_33328 = cljs.core.not.call(null,inst_33327);
var state_33344__$1 = (function (){var statearr_33346 = state_33344;
(statearr_33346[(7)] = inst_33326__$1);

return statearr_33346;
})();
if(inst_33328){
var statearr_33347_33366 = state_33344__$1;
(statearr_33347_33366[(1)] = (8));

} else {
var statearr_33348_33367 = state_33344__$1;
(statearr_33348_33367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (1))){
var inst_33321 = (0);
var state_33344__$1 = (function (){var statearr_33349 = state_33344;
(statearr_33349[(8)] = inst_33321);

return statearr_33349;
})();
var statearr_33350_33368 = state_33344__$1;
(statearr_33350_33368[(2)] = null);

(statearr_33350_33368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (4))){
var state_33344__$1 = state_33344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33344__$1,(7),ch);
} else {
if((state_val_33345 === (6))){
var inst_33339 = (state_33344[(2)]);
var state_33344__$1 = state_33344;
var statearr_33351_33369 = state_33344__$1;
(statearr_33351_33369[(2)] = inst_33339);

(statearr_33351_33369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (3))){
var inst_33341 = (state_33344[(2)]);
var inst_33342 = cljs.core.async.close_BANG_.call(null,out);
var state_33344__$1 = (function (){var statearr_33352 = state_33344;
(statearr_33352[(9)] = inst_33341);

return statearr_33352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33344__$1,inst_33342);
} else {
if((state_val_33345 === (2))){
var inst_33321 = (state_33344[(8)]);
var inst_33323 = (inst_33321 < n);
var state_33344__$1 = state_33344;
if(cljs.core.truth_(inst_33323)){
var statearr_33353_33370 = state_33344__$1;
(statearr_33353_33370[(1)] = (4));

} else {
var statearr_33354_33371 = state_33344__$1;
(statearr_33354_33371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (11))){
var inst_33321 = (state_33344[(8)]);
var inst_33331 = (state_33344[(2)]);
var inst_33332 = (inst_33321 + (1));
var inst_33321__$1 = inst_33332;
var state_33344__$1 = (function (){var statearr_33355 = state_33344;
(statearr_33355[(8)] = inst_33321__$1);

(statearr_33355[(10)] = inst_33331);

return statearr_33355;
})();
var statearr_33356_33372 = state_33344__$1;
(statearr_33356_33372[(2)] = null);

(statearr_33356_33372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (9))){
var state_33344__$1 = state_33344;
var statearr_33357_33373 = state_33344__$1;
(statearr_33357_33373[(2)] = null);

(statearr_33357_33373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (5))){
var state_33344__$1 = state_33344;
var statearr_33358_33374 = state_33344__$1;
(statearr_33358_33374[(2)] = null);

(statearr_33358_33374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (10))){
var inst_33336 = (state_33344[(2)]);
var state_33344__$1 = state_33344;
var statearr_33359_33375 = state_33344__$1;
(statearr_33359_33375[(2)] = inst_33336);

(statearr_33359_33375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (8))){
var inst_33326 = (state_33344[(7)]);
var state_33344__$1 = state_33344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33344__$1,(11),out,inst_33326);
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
});})(c__31894__auto___33365,out))
;
return ((function (switch__31799__auto__,c__31894__auto___33365,out){
return (function() {
var cljs$core$async$state_machine__31800__auto__ = null;
var cljs$core$async$state_machine__31800__auto____0 = (function (){
var statearr_33360 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33360[(0)] = cljs$core$async$state_machine__31800__auto__);

(statearr_33360[(1)] = (1));

return statearr_33360;
});
var cljs$core$async$state_machine__31800__auto____1 = (function (state_33344){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_33344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e33361){if((e33361 instanceof Object)){
var ex__31803__auto__ = e33361;
var statearr_33362_33376 = state_33344;
(statearr_33362_33376[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33377 = state_33344;
state_33344 = G__33377;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$state_machine__31800__auto__ = function(state_33344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31800__auto____1.call(this,state_33344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31800__auto____0;
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31800__auto____1;
return cljs$core$async$state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___33365,out))
})();
var state__31896__auto__ = (function (){var statearr_33363 = f__31895__auto__.call(null);
(statearr_33363[(6)] = c__31894__auto___33365);

return statearr_33363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___33365,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33379 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33379 = (function (f,ch,meta33380){
this.f = f;
this.ch = ch;
this.meta33380 = meta33380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33381,meta33380__$1){
var self__ = this;
var _33381__$1 = this;
return (new cljs.core.async.t_cljs$core$async33379(self__.f,self__.ch,meta33380__$1));
});

cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33381){
var self__ = this;
var _33381__$1 = this;
return self__.meta33380;
});

cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33382 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33382 = (function (f,ch,meta33380,_,fn1,meta33383){
this.f = f;
this.ch = ch;
this.meta33380 = meta33380;
this._ = _;
this.fn1 = fn1;
this.meta33383 = meta33383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33384,meta33383__$1){
var self__ = this;
var _33384__$1 = this;
return (new cljs.core.async.t_cljs$core$async33382(self__.f,self__.ch,self__.meta33380,self__._,self__.fn1,meta33383__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33384){
var self__ = this;
var _33384__$1 = this;
return self__.meta33383;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33378_SHARP_){
return f1.call(null,(((p1__33378_SHARP_ == null))?null:self__.f.call(null,p1__33378_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33382.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33380","meta33380",1673800428,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33379","cljs.core.async/t_cljs$core$async33379",-643533771,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33383","meta33383",-1237222896,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33382.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33382";

cljs.core.async.t_cljs$core$async33382.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33382");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33382.
 */
cljs.core.async.__GT_t_cljs$core$async33382 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33382(f__$1,ch__$1,meta33380__$1,___$2,fn1__$1,meta33383){
return (new cljs.core.async.t_cljs$core$async33382(f__$1,ch__$1,meta33380__$1,___$2,fn1__$1,meta33383));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33382(self__.f,self__.ch,self__.meta33380,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33380","meta33380",1673800428,null)], null);
});

cljs.core.async.t_cljs$core$async33379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33379";

cljs.core.async.t_cljs$core$async33379.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33379");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33379.
 */
cljs.core.async.__GT_t_cljs$core$async33379 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33379(f__$1,ch__$1,meta33380){
return (new cljs.core.async.t_cljs$core$async33379(f__$1,ch__$1,meta33380));
});

}

return (new cljs.core.async.t_cljs$core$async33379(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33385 = (function (f,ch,meta33386){
this.f = f;
this.ch = ch;
this.meta33386 = meta33386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33387,meta33386__$1){
var self__ = this;
var _33387__$1 = this;
return (new cljs.core.async.t_cljs$core$async33385(self__.f,self__.ch,meta33386__$1));
});

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33387){
var self__ = this;
var _33387__$1 = this;
return self__.meta33386;
});

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33385.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33386","meta33386",1987997787,null)], null);
});

cljs.core.async.t_cljs$core$async33385.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33385";

cljs.core.async.t_cljs$core$async33385.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33385");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33385.
 */
cljs.core.async.__GT_t_cljs$core$async33385 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33385(f__$1,ch__$1,meta33386){
return (new cljs.core.async.t_cljs$core$async33385(f__$1,ch__$1,meta33386));
});

}

return (new cljs.core.async.t_cljs$core$async33385(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33388 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33388 = (function (p,ch,meta33389){
this.p = p;
this.ch = ch;
this.meta33389 = meta33389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33390,meta33389__$1){
var self__ = this;
var _33390__$1 = this;
return (new cljs.core.async.t_cljs$core$async33388(self__.p,self__.ch,meta33389__$1));
});

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33390){
var self__ = this;
var _33390__$1 = this;
return self__.meta33389;
});

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33389","meta33389",-878680316,null)], null);
});

cljs.core.async.t_cljs$core$async33388.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33388";

cljs.core.async.t_cljs$core$async33388.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33388");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33388.
 */
cljs.core.async.__GT_t_cljs$core$async33388 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33388(p__$1,ch__$1,meta33389){
return (new cljs.core.async.t_cljs$core$async33388(p__$1,ch__$1,meta33389));
});

}

return (new cljs.core.async.t_cljs$core$async33388(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33392 = arguments.length;
switch (G__33392) {
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
var c__31894__auto___33432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___33432,out){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___33432,out){
return (function (state_33413){
var state_val_33414 = (state_33413[(1)]);
if((state_val_33414 === (7))){
var inst_33409 = (state_33413[(2)]);
var state_33413__$1 = state_33413;
var statearr_33415_33433 = state_33413__$1;
(statearr_33415_33433[(2)] = inst_33409);

(statearr_33415_33433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33414 === (1))){
var state_33413__$1 = state_33413;
var statearr_33416_33434 = state_33413__$1;
(statearr_33416_33434[(2)] = null);

(statearr_33416_33434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33414 === (4))){
var inst_33395 = (state_33413[(7)]);
var inst_33395__$1 = (state_33413[(2)]);
var inst_33396 = (inst_33395__$1 == null);
var state_33413__$1 = (function (){var statearr_33417 = state_33413;
(statearr_33417[(7)] = inst_33395__$1);

return statearr_33417;
})();
if(cljs.core.truth_(inst_33396)){
var statearr_33418_33435 = state_33413__$1;
(statearr_33418_33435[(1)] = (5));

} else {
var statearr_33419_33436 = state_33413__$1;
(statearr_33419_33436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33414 === (6))){
var inst_33395 = (state_33413[(7)]);
var inst_33400 = p.call(null,inst_33395);
var state_33413__$1 = state_33413;
if(cljs.core.truth_(inst_33400)){
var statearr_33420_33437 = state_33413__$1;
(statearr_33420_33437[(1)] = (8));

} else {
var statearr_33421_33438 = state_33413__$1;
(statearr_33421_33438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33414 === (3))){
var inst_33411 = (state_33413[(2)]);
var state_33413__$1 = state_33413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33413__$1,inst_33411);
} else {
if((state_val_33414 === (2))){
var state_33413__$1 = state_33413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33413__$1,(4),ch);
} else {
if((state_val_33414 === (11))){
var inst_33403 = (state_33413[(2)]);
var state_33413__$1 = state_33413;
var statearr_33422_33439 = state_33413__$1;
(statearr_33422_33439[(2)] = inst_33403);

(statearr_33422_33439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33414 === (9))){
var state_33413__$1 = state_33413;
var statearr_33423_33440 = state_33413__$1;
(statearr_33423_33440[(2)] = null);

(statearr_33423_33440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33414 === (5))){
var inst_33398 = cljs.core.async.close_BANG_.call(null,out);
var state_33413__$1 = state_33413;
var statearr_33424_33441 = state_33413__$1;
(statearr_33424_33441[(2)] = inst_33398);

(statearr_33424_33441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33414 === (10))){
var inst_33406 = (state_33413[(2)]);
var state_33413__$1 = (function (){var statearr_33425 = state_33413;
(statearr_33425[(8)] = inst_33406);

return statearr_33425;
})();
var statearr_33426_33442 = state_33413__$1;
(statearr_33426_33442[(2)] = null);

(statearr_33426_33442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33414 === (8))){
var inst_33395 = (state_33413[(7)]);
var state_33413__$1 = state_33413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33413__$1,(11),out,inst_33395);
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
});})(c__31894__auto___33432,out))
;
return ((function (switch__31799__auto__,c__31894__auto___33432,out){
return (function() {
var cljs$core$async$state_machine__31800__auto__ = null;
var cljs$core$async$state_machine__31800__auto____0 = (function (){
var statearr_33427 = [null,null,null,null,null,null,null,null,null];
(statearr_33427[(0)] = cljs$core$async$state_machine__31800__auto__);

(statearr_33427[(1)] = (1));

return statearr_33427;
});
var cljs$core$async$state_machine__31800__auto____1 = (function (state_33413){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_33413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e33428){if((e33428 instanceof Object)){
var ex__31803__auto__ = e33428;
var statearr_33429_33443 = state_33413;
(statearr_33429_33443[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33444 = state_33413;
state_33413 = G__33444;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$state_machine__31800__auto__ = function(state_33413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31800__auto____1.call(this,state_33413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31800__auto____0;
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31800__auto____1;
return cljs$core$async$state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___33432,out))
})();
var state__31896__auto__ = (function (){var statearr_33430 = f__31895__auto__.call(null);
(statearr_33430[(6)] = c__31894__auto___33432);

return statearr_33430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___33432,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33446 = arguments.length;
switch (G__33446) {
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
var c__31894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto__){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto__){
return (function (state_33509){
var state_val_33510 = (state_33509[(1)]);
if((state_val_33510 === (7))){
var inst_33505 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
var statearr_33511_33549 = state_33509__$1;
(statearr_33511_33549[(2)] = inst_33505);

(statearr_33511_33549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (20))){
var inst_33475 = (state_33509[(7)]);
var inst_33486 = (state_33509[(2)]);
var inst_33487 = cljs.core.next.call(null,inst_33475);
var inst_33461 = inst_33487;
var inst_33462 = null;
var inst_33463 = (0);
var inst_33464 = (0);
var state_33509__$1 = (function (){var statearr_33512 = state_33509;
(statearr_33512[(8)] = inst_33463);

(statearr_33512[(9)] = inst_33461);

(statearr_33512[(10)] = inst_33462);

(statearr_33512[(11)] = inst_33486);

(statearr_33512[(12)] = inst_33464);

return statearr_33512;
})();
var statearr_33513_33550 = state_33509__$1;
(statearr_33513_33550[(2)] = null);

(statearr_33513_33550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (1))){
var state_33509__$1 = state_33509;
var statearr_33514_33551 = state_33509__$1;
(statearr_33514_33551[(2)] = null);

(statearr_33514_33551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (4))){
var inst_33450 = (state_33509[(13)]);
var inst_33450__$1 = (state_33509[(2)]);
var inst_33451 = (inst_33450__$1 == null);
var state_33509__$1 = (function (){var statearr_33515 = state_33509;
(statearr_33515[(13)] = inst_33450__$1);

return statearr_33515;
})();
if(cljs.core.truth_(inst_33451)){
var statearr_33516_33552 = state_33509__$1;
(statearr_33516_33552[(1)] = (5));

} else {
var statearr_33517_33553 = state_33509__$1;
(statearr_33517_33553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (15))){
var state_33509__$1 = state_33509;
var statearr_33521_33554 = state_33509__$1;
(statearr_33521_33554[(2)] = null);

(statearr_33521_33554[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (21))){
var state_33509__$1 = state_33509;
var statearr_33522_33555 = state_33509__$1;
(statearr_33522_33555[(2)] = null);

(statearr_33522_33555[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (13))){
var inst_33463 = (state_33509[(8)]);
var inst_33461 = (state_33509[(9)]);
var inst_33462 = (state_33509[(10)]);
var inst_33464 = (state_33509[(12)]);
var inst_33471 = (state_33509[(2)]);
var inst_33472 = (inst_33464 + (1));
var tmp33518 = inst_33463;
var tmp33519 = inst_33461;
var tmp33520 = inst_33462;
var inst_33461__$1 = tmp33519;
var inst_33462__$1 = tmp33520;
var inst_33463__$1 = tmp33518;
var inst_33464__$1 = inst_33472;
var state_33509__$1 = (function (){var statearr_33523 = state_33509;
(statearr_33523[(8)] = inst_33463__$1);

(statearr_33523[(9)] = inst_33461__$1);

(statearr_33523[(14)] = inst_33471);

(statearr_33523[(10)] = inst_33462__$1);

(statearr_33523[(12)] = inst_33464__$1);

return statearr_33523;
})();
var statearr_33524_33556 = state_33509__$1;
(statearr_33524_33556[(2)] = null);

(statearr_33524_33556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (22))){
var state_33509__$1 = state_33509;
var statearr_33525_33557 = state_33509__$1;
(statearr_33525_33557[(2)] = null);

(statearr_33525_33557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (6))){
var inst_33450 = (state_33509[(13)]);
var inst_33459 = f.call(null,inst_33450);
var inst_33460 = cljs.core.seq.call(null,inst_33459);
var inst_33461 = inst_33460;
var inst_33462 = null;
var inst_33463 = (0);
var inst_33464 = (0);
var state_33509__$1 = (function (){var statearr_33526 = state_33509;
(statearr_33526[(8)] = inst_33463);

(statearr_33526[(9)] = inst_33461);

(statearr_33526[(10)] = inst_33462);

(statearr_33526[(12)] = inst_33464);

return statearr_33526;
})();
var statearr_33527_33558 = state_33509__$1;
(statearr_33527_33558[(2)] = null);

(statearr_33527_33558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (17))){
var inst_33475 = (state_33509[(7)]);
var inst_33479 = cljs.core.chunk_first.call(null,inst_33475);
var inst_33480 = cljs.core.chunk_rest.call(null,inst_33475);
var inst_33481 = cljs.core.count.call(null,inst_33479);
var inst_33461 = inst_33480;
var inst_33462 = inst_33479;
var inst_33463 = inst_33481;
var inst_33464 = (0);
var state_33509__$1 = (function (){var statearr_33528 = state_33509;
(statearr_33528[(8)] = inst_33463);

(statearr_33528[(9)] = inst_33461);

(statearr_33528[(10)] = inst_33462);

(statearr_33528[(12)] = inst_33464);

return statearr_33528;
})();
var statearr_33529_33559 = state_33509__$1;
(statearr_33529_33559[(2)] = null);

(statearr_33529_33559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (3))){
var inst_33507 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33509__$1,inst_33507);
} else {
if((state_val_33510 === (12))){
var inst_33495 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
var statearr_33530_33560 = state_33509__$1;
(statearr_33530_33560[(2)] = inst_33495);

(statearr_33530_33560[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (2))){
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33509__$1,(4),in$);
} else {
if((state_val_33510 === (23))){
var inst_33503 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
var statearr_33531_33561 = state_33509__$1;
(statearr_33531_33561[(2)] = inst_33503);

(statearr_33531_33561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (19))){
var inst_33490 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
var statearr_33532_33562 = state_33509__$1;
(statearr_33532_33562[(2)] = inst_33490);

(statearr_33532_33562[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (11))){
var inst_33475 = (state_33509[(7)]);
var inst_33461 = (state_33509[(9)]);
var inst_33475__$1 = cljs.core.seq.call(null,inst_33461);
var state_33509__$1 = (function (){var statearr_33533 = state_33509;
(statearr_33533[(7)] = inst_33475__$1);

return statearr_33533;
})();
if(inst_33475__$1){
var statearr_33534_33563 = state_33509__$1;
(statearr_33534_33563[(1)] = (14));

} else {
var statearr_33535_33564 = state_33509__$1;
(statearr_33535_33564[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (9))){
var inst_33497 = (state_33509[(2)]);
var inst_33498 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33509__$1 = (function (){var statearr_33536 = state_33509;
(statearr_33536[(15)] = inst_33497);

return statearr_33536;
})();
if(cljs.core.truth_(inst_33498)){
var statearr_33537_33565 = state_33509__$1;
(statearr_33537_33565[(1)] = (21));

} else {
var statearr_33538_33566 = state_33509__$1;
(statearr_33538_33566[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (5))){
var inst_33453 = cljs.core.async.close_BANG_.call(null,out);
var state_33509__$1 = state_33509;
var statearr_33539_33567 = state_33509__$1;
(statearr_33539_33567[(2)] = inst_33453);

(statearr_33539_33567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (14))){
var inst_33475 = (state_33509[(7)]);
var inst_33477 = cljs.core.chunked_seq_QMARK_.call(null,inst_33475);
var state_33509__$1 = state_33509;
if(inst_33477){
var statearr_33540_33568 = state_33509__$1;
(statearr_33540_33568[(1)] = (17));

} else {
var statearr_33541_33569 = state_33509__$1;
(statearr_33541_33569[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (16))){
var inst_33493 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
var statearr_33542_33570 = state_33509__$1;
(statearr_33542_33570[(2)] = inst_33493);

(statearr_33542_33570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (10))){
var inst_33462 = (state_33509[(10)]);
var inst_33464 = (state_33509[(12)]);
var inst_33469 = cljs.core._nth.call(null,inst_33462,inst_33464);
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33509__$1,(13),out,inst_33469);
} else {
if((state_val_33510 === (18))){
var inst_33475 = (state_33509[(7)]);
var inst_33484 = cljs.core.first.call(null,inst_33475);
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33509__$1,(20),out,inst_33484);
} else {
if((state_val_33510 === (8))){
var inst_33463 = (state_33509[(8)]);
var inst_33464 = (state_33509[(12)]);
var inst_33466 = (inst_33464 < inst_33463);
var inst_33467 = inst_33466;
var state_33509__$1 = state_33509;
if(cljs.core.truth_(inst_33467)){
var statearr_33543_33571 = state_33509__$1;
(statearr_33543_33571[(1)] = (10));

} else {
var statearr_33544_33572 = state_33509__$1;
(statearr_33544_33572[(1)] = (11));

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
});})(c__31894__auto__))
;
return ((function (switch__31799__auto__,c__31894__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31800__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31800__auto____0 = (function (){
var statearr_33545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33545[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31800__auto__);

(statearr_33545[(1)] = (1));

return statearr_33545;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31800__auto____1 = (function (state_33509){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_33509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e33546){if((e33546 instanceof Object)){
var ex__31803__auto__ = e33546;
var statearr_33547_33573 = state_33509;
(statearr_33547_33573[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33574 = state_33509;
state_33509 = G__33574;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31800__auto__ = function(state_33509){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31800__auto____1.call(this,state_33509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31800__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31800__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto__))
})();
var state__31896__auto__ = (function (){var statearr_33548 = f__31895__auto__.call(null);
(statearr_33548[(6)] = c__31894__auto__);

return statearr_33548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto__))
);

return c__31894__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33576 = arguments.length;
switch (G__33576) {
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
var G__33579 = arguments.length;
switch (G__33579) {
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
var G__33582 = arguments.length;
switch (G__33582) {
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
var c__31894__auto___33629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___33629,out){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___33629,out){
return (function (state_33606){
var state_val_33607 = (state_33606[(1)]);
if((state_val_33607 === (7))){
var inst_33601 = (state_33606[(2)]);
var state_33606__$1 = state_33606;
var statearr_33608_33630 = state_33606__$1;
(statearr_33608_33630[(2)] = inst_33601);

(statearr_33608_33630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (1))){
var inst_33583 = null;
var state_33606__$1 = (function (){var statearr_33609 = state_33606;
(statearr_33609[(7)] = inst_33583);

return statearr_33609;
})();
var statearr_33610_33631 = state_33606__$1;
(statearr_33610_33631[(2)] = null);

(statearr_33610_33631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (4))){
var inst_33586 = (state_33606[(8)]);
var inst_33586__$1 = (state_33606[(2)]);
var inst_33587 = (inst_33586__$1 == null);
var inst_33588 = cljs.core.not.call(null,inst_33587);
var state_33606__$1 = (function (){var statearr_33611 = state_33606;
(statearr_33611[(8)] = inst_33586__$1);

return statearr_33611;
})();
if(inst_33588){
var statearr_33612_33632 = state_33606__$1;
(statearr_33612_33632[(1)] = (5));

} else {
var statearr_33613_33633 = state_33606__$1;
(statearr_33613_33633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (6))){
var state_33606__$1 = state_33606;
var statearr_33614_33634 = state_33606__$1;
(statearr_33614_33634[(2)] = null);

(statearr_33614_33634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (3))){
var inst_33603 = (state_33606[(2)]);
var inst_33604 = cljs.core.async.close_BANG_.call(null,out);
var state_33606__$1 = (function (){var statearr_33615 = state_33606;
(statearr_33615[(9)] = inst_33603);

return statearr_33615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33606__$1,inst_33604);
} else {
if((state_val_33607 === (2))){
var state_33606__$1 = state_33606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33606__$1,(4),ch);
} else {
if((state_val_33607 === (11))){
var inst_33586 = (state_33606[(8)]);
var inst_33595 = (state_33606[(2)]);
var inst_33583 = inst_33586;
var state_33606__$1 = (function (){var statearr_33616 = state_33606;
(statearr_33616[(7)] = inst_33583);

(statearr_33616[(10)] = inst_33595);

return statearr_33616;
})();
var statearr_33617_33635 = state_33606__$1;
(statearr_33617_33635[(2)] = null);

(statearr_33617_33635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (9))){
var inst_33586 = (state_33606[(8)]);
var state_33606__$1 = state_33606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33606__$1,(11),out,inst_33586);
} else {
if((state_val_33607 === (5))){
var inst_33583 = (state_33606[(7)]);
var inst_33586 = (state_33606[(8)]);
var inst_33590 = cljs.core._EQ_.call(null,inst_33586,inst_33583);
var state_33606__$1 = state_33606;
if(inst_33590){
var statearr_33619_33636 = state_33606__$1;
(statearr_33619_33636[(1)] = (8));

} else {
var statearr_33620_33637 = state_33606__$1;
(statearr_33620_33637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (10))){
var inst_33598 = (state_33606[(2)]);
var state_33606__$1 = state_33606;
var statearr_33621_33638 = state_33606__$1;
(statearr_33621_33638[(2)] = inst_33598);

(statearr_33621_33638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33607 === (8))){
var inst_33583 = (state_33606[(7)]);
var tmp33618 = inst_33583;
var inst_33583__$1 = tmp33618;
var state_33606__$1 = (function (){var statearr_33622 = state_33606;
(statearr_33622[(7)] = inst_33583__$1);

return statearr_33622;
})();
var statearr_33623_33639 = state_33606__$1;
(statearr_33623_33639[(2)] = null);

(statearr_33623_33639[(1)] = (2));


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
});})(c__31894__auto___33629,out))
;
return ((function (switch__31799__auto__,c__31894__auto___33629,out){
return (function() {
var cljs$core$async$state_machine__31800__auto__ = null;
var cljs$core$async$state_machine__31800__auto____0 = (function (){
var statearr_33624 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33624[(0)] = cljs$core$async$state_machine__31800__auto__);

(statearr_33624[(1)] = (1));

return statearr_33624;
});
var cljs$core$async$state_machine__31800__auto____1 = (function (state_33606){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_33606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e33625){if((e33625 instanceof Object)){
var ex__31803__auto__ = e33625;
var statearr_33626_33640 = state_33606;
(statearr_33626_33640[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33641 = state_33606;
state_33606 = G__33641;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$state_machine__31800__auto__ = function(state_33606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31800__auto____1.call(this,state_33606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31800__auto____0;
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31800__auto____1;
return cljs$core$async$state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___33629,out))
})();
var state__31896__auto__ = (function (){var statearr_33627 = f__31895__auto__.call(null);
(statearr_33627[(6)] = c__31894__auto___33629);

return statearr_33627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___33629,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33643 = arguments.length;
switch (G__33643) {
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
var c__31894__auto___33709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___33709,out){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___33709,out){
return (function (state_33681){
var state_val_33682 = (state_33681[(1)]);
if((state_val_33682 === (7))){
var inst_33677 = (state_33681[(2)]);
var state_33681__$1 = state_33681;
var statearr_33683_33710 = state_33681__$1;
(statearr_33683_33710[(2)] = inst_33677);

(statearr_33683_33710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (1))){
var inst_33644 = (new Array(n));
var inst_33645 = inst_33644;
var inst_33646 = (0);
var state_33681__$1 = (function (){var statearr_33684 = state_33681;
(statearr_33684[(7)] = inst_33646);

(statearr_33684[(8)] = inst_33645);

return statearr_33684;
})();
var statearr_33685_33711 = state_33681__$1;
(statearr_33685_33711[(2)] = null);

(statearr_33685_33711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (4))){
var inst_33649 = (state_33681[(9)]);
var inst_33649__$1 = (state_33681[(2)]);
var inst_33650 = (inst_33649__$1 == null);
var inst_33651 = cljs.core.not.call(null,inst_33650);
var state_33681__$1 = (function (){var statearr_33686 = state_33681;
(statearr_33686[(9)] = inst_33649__$1);

return statearr_33686;
})();
if(inst_33651){
var statearr_33687_33712 = state_33681__$1;
(statearr_33687_33712[(1)] = (5));

} else {
var statearr_33688_33713 = state_33681__$1;
(statearr_33688_33713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (15))){
var inst_33671 = (state_33681[(2)]);
var state_33681__$1 = state_33681;
var statearr_33689_33714 = state_33681__$1;
(statearr_33689_33714[(2)] = inst_33671);

(statearr_33689_33714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (13))){
var state_33681__$1 = state_33681;
var statearr_33690_33715 = state_33681__$1;
(statearr_33690_33715[(2)] = null);

(statearr_33690_33715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (6))){
var inst_33646 = (state_33681[(7)]);
var inst_33667 = (inst_33646 > (0));
var state_33681__$1 = state_33681;
if(cljs.core.truth_(inst_33667)){
var statearr_33691_33716 = state_33681__$1;
(statearr_33691_33716[(1)] = (12));

} else {
var statearr_33692_33717 = state_33681__$1;
(statearr_33692_33717[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (3))){
var inst_33679 = (state_33681[(2)]);
var state_33681__$1 = state_33681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33681__$1,inst_33679);
} else {
if((state_val_33682 === (12))){
var inst_33645 = (state_33681[(8)]);
var inst_33669 = cljs.core.vec.call(null,inst_33645);
var state_33681__$1 = state_33681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33681__$1,(15),out,inst_33669);
} else {
if((state_val_33682 === (2))){
var state_33681__$1 = state_33681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33681__$1,(4),ch);
} else {
if((state_val_33682 === (11))){
var inst_33661 = (state_33681[(2)]);
var inst_33662 = (new Array(n));
var inst_33645 = inst_33662;
var inst_33646 = (0);
var state_33681__$1 = (function (){var statearr_33693 = state_33681;
(statearr_33693[(10)] = inst_33661);

(statearr_33693[(7)] = inst_33646);

(statearr_33693[(8)] = inst_33645);

return statearr_33693;
})();
var statearr_33694_33718 = state_33681__$1;
(statearr_33694_33718[(2)] = null);

(statearr_33694_33718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (9))){
var inst_33645 = (state_33681[(8)]);
var inst_33659 = cljs.core.vec.call(null,inst_33645);
var state_33681__$1 = state_33681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33681__$1,(11),out,inst_33659);
} else {
if((state_val_33682 === (5))){
var inst_33646 = (state_33681[(7)]);
var inst_33649 = (state_33681[(9)]);
var inst_33645 = (state_33681[(8)]);
var inst_33654 = (state_33681[(11)]);
var inst_33653 = (inst_33645[inst_33646] = inst_33649);
var inst_33654__$1 = (inst_33646 + (1));
var inst_33655 = (inst_33654__$1 < n);
var state_33681__$1 = (function (){var statearr_33695 = state_33681;
(statearr_33695[(11)] = inst_33654__$1);

(statearr_33695[(12)] = inst_33653);

return statearr_33695;
})();
if(cljs.core.truth_(inst_33655)){
var statearr_33696_33719 = state_33681__$1;
(statearr_33696_33719[(1)] = (8));

} else {
var statearr_33697_33720 = state_33681__$1;
(statearr_33697_33720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (14))){
var inst_33674 = (state_33681[(2)]);
var inst_33675 = cljs.core.async.close_BANG_.call(null,out);
var state_33681__$1 = (function (){var statearr_33699 = state_33681;
(statearr_33699[(13)] = inst_33674);

return statearr_33699;
})();
var statearr_33700_33721 = state_33681__$1;
(statearr_33700_33721[(2)] = inst_33675);

(statearr_33700_33721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (10))){
var inst_33665 = (state_33681[(2)]);
var state_33681__$1 = state_33681;
var statearr_33701_33722 = state_33681__$1;
(statearr_33701_33722[(2)] = inst_33665);

(statearr_33701_33722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (8))){
var inst_33645 = (state_33681[(8)]);
var inst_33654 = (state_33681[(11)]);
var tmp33698 = inst_33645;
var inst_33645__$1 = tmp33698;
var inst_33646 = inst_33654;
var state_33681__$1 = (function (){var statearr_33702 = state_33681;
(statearr_33702[(7)] = inst_33646);

(statearr_33702[(8)] = inst_33645__$1);

return statearr_33702;
})();
var statearr_33703_33723 = state_33681__$1;
(statearr_33703_33723[(2)] = null);

(statearr_33703_33723[(1)] = (2));


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
});})(c__31894__auto___33709,out))
;
return ((function (switch__31799__auto__,c__31894__auto___33709,out){
return (function() {
var cljs$core$async$state_machine__31800__auto__ = null;
var cljs$core$async$state_machine__31800__auto____0 = (function (){
var statearr_33704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33704[(0)] = cljs$core$async$state_machine__31800__auto__);

(statearr_33704[(1)] = (1));

return statearr_33704;
});
var cljs$core$async$state_machine__31800__auto____1 = (function (state_33681){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_33681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e33705){if((e33705 instanceof Object)){
var ex__31803__auto__ = e33705;
var statearr_33706_33724 = state_33681;
(statearr_33706_33724[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33725 = state_33681;
state_33681 = G__33725;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$state_machine__31800__auto__ = function(state_33681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31800__auto____1.call(this,state_33681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31800__auto____0;
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31800__auto____1;
return cljs$core$async$state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___33709,out))
})();
var state__31896__auto__ = (function (){var statearr_33707 = f__31895__auto__.call(null);
(statearr_33707[(6)] = c__31894__auto___33709);

return statearr_33707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___33709,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33727 = arguments.length;
switch (G__33727) {
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
var c__31894__auto___33797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___33797,out){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___33797,out){
return (function (state_33769){
var state_val_33770 = (state_33769[(1)]);
if((state_val_33770 === (7))){
var inst_33765 = (state_33769[(2)]);
var state_33769__$1 = state_33769;
var statearr_33771_33798 = state_33769__$1;
(statearr_33771_33798[(2)] = inst_33765);

(statearr_33771_33798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (1))){
var inst_33728 = [];
var inst_33729 = inst_33728;
var inst_33730 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33769__$1 = (function (){var statearr_33772 = state_33769;
(statearr_33772[(7)] = inst_33730);

(statearr_33772[(8)] = inst_33729);

return statearr_33772;
})();
var statearr_33773_33799 = state_33769__$1;
(statearr_33773_33799[(2)] = null);

(statearr_33773_33799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (4))){
var inst_33733 = (state_33769[(9)]);
var inst_33733__$1 = (state_33769[(2)]);
var inst_33734 = (inst_33733__$1 == null);
var inst_33735 = cljs.core.not.call(null,inst_33734);
var state_33769__$1 = (function (){var statearr_33774 = state_33769;
(statearr_33774[(9)] = inst_33733__$1);

return statearr_33774;
})();
if(inst_33735){
var statearr_33775_33800 = state_33769__$1;
(statearr_33775_33800[(1)] = (5));

} else {
var statearr_33776_33801 = state_33769__$1;
(statearr_33776_33801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (15))){
var inst_33759 = (state_33769[(2)]);
var state_33769__$1 = state_33769;
var statearr_33777_33802 = state_33769__$1;
(statearr_33777_33802[(2)] = inst_33759);

(statearr_33777_33802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (13))){
var state_33769__$1 = state_33769;
var statearr_33778_33803 = state_33769__$1;
(statearr_33778_33803[(2)] = null);

(statearr_33778_33803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (6))){
var inst_33729 = (state_33769[(8)]);
var inst_33754 = inst_33729.length;
var inst_33755 = (inst_33754 > (0));
var state_33769__$1 = state_33769;
if(cljs.core.truth_(inst_33755)){
var statearr_33779_33804 = state_33769__$1;
(statearr_33779_33804[(1)] = (12));

} else {
var statearr_33780_33805 = state_33769__$1;
(statearr_33780_33805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (3))){
var inst_33767 = (state_33769[(2)]);
var state_33769__$1 = state_33769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33769__$1,inst_33767);
} else {
if((state_val_33770 === (12))){
var inst_33729 = (state_33769[(8)]);
var inst_33757 = cljs.core.vec.call(null,inst_33729);
var state_33769__$1 = state_33769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33769__$1,(15),out,inst_33757);
} else {
if((state_val_33770 === (2))){
var state_33769__$1 = state_33769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33769__$1,(4),ch);
} else {
if((state_val_33770 === (11))){
var inst_33733 = (state_33769[(9)]);
var inst_33737 = (state_33769[(10)]);
var inst_33747 = (state_33769[(2)]);
var inst_33748 = [];
var inst_33749 = inst_33748.push(inst_33733);
var inst_33729 = inst_33748;
var inst_33730 = inst_33737;
var state_33769__$1 = (function (){var statearr_33781 = state_33769;
(statearr_33781[(11)] = inst_33749);

(statearr_33781[(7)] = inst_33730);

(statearr_33781[(8)] = inst_33729);

(statearr_33781[(12)] = inst_33747);

return statearr_33781;
})();
var statearr_33782_33806 = state_33769__$1;
(statearr_33782_33806[(2)] = null);

(statearr_33782_33806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (9))){
var inst_33729 = (state_33769[(8)]);
var inst_33745 = cljs.core.vec.call(null,inst_33729);
var state_33769__$1 = state_33769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33769__$1,(11),out,inst_33745);
} else {
if((state_val_33770 === (5))){
var inst_33733 = (state_33769[(9)]);
var inst_33730 = (state_33769[(7)]);
var inst_33737 = (state_33769[(10)]);
var inst_33737__$1 = f.call(null,inst_33733);
var inst_33738 = cljs.core._EQ_.call(null,inst_33737__$1,inst_33730);
var inst_33739 = cljs.core.keyword_identical_QMARK_.call(null,inst_33730,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33740 = ((inst_33738) || (inst_33739));
var state_33769__$1 = (function (){var statearr_33783 = state_33769;
(statearr_33783[(10)] = inst_33737__$1);

return statearr_33783;
})();
if(cljs.core.truth_(inst_33740)){
var statearr_33784_33807 = state_33769__$1;
(statearr_33784_33807[(1)] = (8));

} else {
var statearr_33785_33808 = state_33769__$1;
(statearr_33785_33808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (14))){
var inst_33762 = (state_33769[(2)]);
var inst_33763 = cljs.core.async.close_BANG_.call(null,out);
var state_33769__$1 = (function (){var statearr_33787 = state_33769;
(statearr_33787[(13)] = inst_33762);

return statearr_33787;
})();
var statearr_33788_33809 = state_33769__$1;
(statearr_33788_33809[(2)] = inst_33763);

(statearr_33788_33809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (10))){
var inst_33752 = (state_33769[(2)]);
var state_33769__$1 = state_33769;
var statearr_33789_33810 = state_33769__$1;
(statearr_33789_33810[(2)] = inst_33752);

(statearr_33789_33810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (8))){
var inst_33733 = (state_33769[(9)]);
var inst_33729 = (state_33769[(8)]);
var inst_33737 = (state_33769[(10)]);
var inst_33742 = inst_33729.push(inst_33733);
var tmp33786 = inst_33729;
var inst_33729__$1 = tmp33786;
var inst_33730 = inst_33737;
var state_33769__$1 = (function (){var statearr_33790 = state_33769;
(statearr_33790[(7)] = inst_33730);

(statearr_33790[(14)] = inst_33742);

(statearr_33790[(8)] = inst_33729__$1);

return statearr_33790;
})();
var statearr_33791_33811 = state_33769__$1;
(statearr_33791_33811[(2)] = null);

(statearr_33791_33811[(1)] = (2));


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
});})(c__31894__auto___33797,out))
;
return ((function (switch__31799__auto__,c__31894__auto___33797,out){
return (function() {
var cljs$core$async$state_machine__31800__auto__ = null;
var cljs$core$async$state_machine__31800__auto____0 = (function (){
var statearr_33792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33792[(0)] = cljs$core$async$state_machine__31800__auto__);

(statearr_33792[(1)] = (1));

return statearr_33792;
});
var cljs$core$async$state_machine__31800__auto____1 = (function (state_33769){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_33769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e33793){if((e33793 instanceof Object)){
var ex__31803__auto__ = e33793;
var statearr_33794_33812 = state_33769;
(statearr_33794_33812[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33813 = state_33769;
state_33769 = G__33813;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
cljs$core$async$state_machine__31800__auto__ = function(state_33769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31800__auto____1.call(this,state_33769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31800__auto____0;
cljs$core$async$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31800__auto____1;
return cljs$core$async$state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___33797,out))
})();
var state__31896__auto__ = (function (){var statearr_33795 = f__31895__auto__.call(null);
(statearr_33795[(6)] = c__31894__auto___33797);

return statearr_33795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___33797,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1576339912697
