goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29414__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29415__i = 0, G__29415__a = new Array(arguments.length -  0);
while (G__29415__i < G__29415__a.length) {G__29415__a[G__29415__i] = arguments[G__29415__i + 0]; ++G__29415__i;}
  args = new cljs.core.IndexedSeq(G__29415__a,0,null);
} 
return G__29414__delegate.call(this,args);};
G__29414.cljs$lang$maxFixedArity = 0;
G__29414.cljs$lang$applyTo = (function (arglist__29416){
var args = cljs.core.seq(arglist__29416);
return G__29414__delegate(args);
});
G__29414.cljs$core$IFn$_invoke$arity$variadic = G__29414__delegate;
return G__29414;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29417__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29417 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29418__i = 0, G__29418__a = new Array(arguments.length -  0);
while (G__29418__i < G__29418__a.length) {G__29418__a[G__29418__i] = arguments[G__29418__i + 0]; ++G__29418__i;}
  args = new cljs.core.IndexedSeq(G__29418__a,0,null);
} 
return G__29417__delegate.call(this,args);};
G__29417.cljs$lang$maxFixedArity = 0;
G__29417.cljs$lang$applyTo = (function (arglist__29419){
var args = cljs.core.seq(arglist__29419);
return G__29417__delegate(args);
});
G__29417.cljs$core$IFn$_invoke$arity$variadic = G__29417__delegate;
return G__29417;
})()
);

return null;
});
