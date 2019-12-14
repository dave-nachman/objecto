goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29351__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29352__i = 0, G__29352__a = new Array(arguments.length -  0);
while (G__29352__i < G__29352__a.length) {G__29352__a[G__29352__i] = arguments[G__29352__i + 0]; ++G__29352__i;}
  args = new cljs.core.IndexedSeq(G__29352__a,0,null);
} 
return G__29351__delegate.call(this,args);};
G__29351.cljs$lang$maxFixedArity = 0;
G__29351.cljs$lang$applyTo = (function (arglist__29353){
var args = cljs.core.seq(arglist__29353);
return G__29351__delegate(args);
});
G__29351.cljs$core$IFn$_invoke$arity$variadic = G__29351__delegate;
return G__29351;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29354__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29355__i = 0, G__29355__a = new Array(arguments.length -  0);
while (G__29355__i < G__29355__a.length) {G__29355__a[G__29355__i] = arguments[G__29355__i + 0]; ++G__29355__i;}
  args = new cljs.core.IndexedSeq(G__29355__a,0,null);
} 
return G__29354__delegate.call(this,args);};
G__29354.cljs$lang$maxFixedArity = 0;
G__29354.cljs$lang$applyTo = (function (arglist__29356){
var args = cljs.core.seq(arglist__29356);
return G__29354__delegate(args);
});
G__29354.cljs$core$IFn$_invoke$arity$variadic = G__29354__delegate;
return G__29354;
})()
);

return null;
});
