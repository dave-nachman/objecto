goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29804__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29805__i = 0, G__29805__a = new Array(arguments.length -  0);
while (G__29805__i < G__29805__a.length) {G__29805__a[G__29805__i] = arguments[G__29805__i + 0]; ++G__29805__i;}
  args = new cljs.core.IndexedSeq(G__29805__a,0,null);
} 
return G__29804__delegate.call(this,args);};
G__29804.cljs$lang$maxFixedArity = 0;
G__29804.cljs$lang$applyTo = (function (arglist__29806){
var args = cljs.core.seq(arglist__29806);
return G__29804__delegate(args);
});
G__29804.cljs$core$IFn$_invoke$arity$variadic = G__29804__delegate;
return G__29804;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29807__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29808__i = 0, G__29808__a = new Array(arguments.length -  0);
while (G__29808__i < G__29808__a.length) {G__29808__a[G__29808__i] = arguments[G__29808__i + 0]; ++G__29808__i;}
  args = new cljs.core.IndexedSeq(G__29808__a,0,null);
} 
return G__29807__delegate.call(this,args);};
G__29807.cljs$lang$maxFixedArity = 0;
G__29807.cljs$lang$applyTo = (function (arglist__29809){
var args = cljs.core.seq(arglist__29809);
return G__29807__delegate(args);
});
G__29807.cljs$core$IFn$_invoke$arity$variadic = G__29807__delegate;
return G__29807;
})()
);

return null;
});
