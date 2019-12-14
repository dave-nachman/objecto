goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29957__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29958__i = 0, G__29958__a = new Array(arguments.length -  0);
while (G__29958__i < G__29958__a.length) {G__29958__a[G__29958__i] = arguments[G__29958__i + 0]; ++G__29958__i;}
  args = new cljs.core.IndexedSeq(G__29958__a,0,null);
} 
return G__29957__delegate.call(this,args);};
G__29957.cljs$lang$maxFixedArity = 0;
G__29957.cljs$lang$applyTo = (function (arglist__29959){
var args = cljs.core.seq(arglist__29959);
return G__29957__delegate(args);
});
G__29957.cljs$core$IFn$_invoke$arity$variadic = G__29957__delegate;
return G__29957;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29960__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29961__i = 0, G__29961__a = new Array(arguments.length -  0);
while (G__29961__i < G__29961__a.length) {G__29961__a[G__29961__i] = arguments[G__29961__i + 0]; ++G__29961__i;}
  args = new cljs.core.IndexedSeq(G__29961__a,0,null);
} 
return G__29960__delegate.call(this,args);};
G__29960.cljs$lang$maxFixedArity = 0;
G__29960.cljs$lang$applyTo = (function (arglist__29962){
var args = cljs.core.seq(arglist__29962);
return G__29960__delegate(args);
});
G__29960.cljs$core$IFn$_invoke$arity$variadic = G__29960__delegate;
return G__29960;
})()
);

return null;
});
