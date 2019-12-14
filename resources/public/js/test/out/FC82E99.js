goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29372__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29373__i = 0, G__29373__a = new Array(arguments.length -  0);
while (G__29373__i < G__29373__a.length) {G__29373__a[G__29373__i] = arguments[G__29373__i + 0]; ++G__29373__i;}
  args = new cljs.core.IndexedSeq(G__29373__a,0,null);
} 
return G__29372__delegate.call(this,args);};
G__29372.cljs$lang$maxFixedArity = 0;
G__29372.cljs$lang$applyTo = (function (arglist__29374){
var args = cljs.core.seq(arglist__29374);
return G__29372__delegate(args);
});
G__29372.cljs$core$IFn$_invoke$arity$variadic = G__29372__delegate;
return G__29372;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29375__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29376__i = 0, G__29376__a = new Array(arguments.length -  0);
while (G__29376__i < G__29376__a.length) {G__29376__a[G__29376__i] = arguments[G__29376__i + 0]; ++G__29376__i;}
  args = new cljs.core.IndexedSeq(G__29376__a,0,null);
} 
return G__29375__delegate.call(this,args);};
G__29375.cljs$lang$maxFixedArity = 0;
G__29375.cljs$lang$applyTo = (function (arglist__29377){
var args = cljs.core.seq(arglist__29377);
return G__29375__delegate(args);
});
G__29375.cljs$core$IFn$_invoke$arity$variadic = G__29375__delegate;
return G__29375;
})()
);

return null;
});
