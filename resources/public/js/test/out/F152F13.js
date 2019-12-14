goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29498__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29499__i = 0, G__29499__a = new Array(arguments.length -  0);
while (G__29499__i < G__29499__a.length) {G__29499__a[G__29499__i] = arguments[G__29499__i + 0]; ++G__29499__i;}
  args = new cljs.core.IndexedSeq(G__29499__a,0,null);
} 
return G__29498__delegate.call(this,args);};
G__29498.cljs$lang$maxFixedArity = 0;
G__29498.cljs$lang$applyTo = (function (arglist__29500){
var args = cljs.core.seq(arglist__29500);
return G__29498__delegate(args);
});
G__29498.cljs$core$IFn$_invoke$arity$variadic = G__29498__delegate;
return G__29498;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29501__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29502__i = 0, G__29502__a = new Array(arguments.length -  0);
while (G__29502__i < G__29502__a.length) {G__29502__a[G__29502__i] = arguments[G__29502__i + 0]; ++G__29502__i;}
  args = new cljs.core.IndexedSeq(G__29502__a,0,null);
} 
return G__29501__delegate.call(this,args);};
G__29501.cljs$lang$maxFixedArity = 0;
G__29501.cljs$lang$applyTo = (function (arglist__29503){
var args = cljs.core.seq(arglist__29503);
return G__29501__delegate(args);
});
G__29501.cljs$core$IFn$_invoke$arity$variadic = G__29501__delegate;
return G__29501;
})()
);

return null;
});
