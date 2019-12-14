goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__30223__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30224__i = 0, G__30224__a = new Array(arguments.length -  0);
while (G__30224__i < G__30224__a.length) {G__30224__a[G__30224__i] = arguments[G__30224__i + 0]; ++G__30224__i;}
  args = new cljs.core.IndexedSeq(G__30224__a,0,null);
} 
return G__30223__delegate.call(this,args);};
G__30223.cljs$lang$maxFixedArity = 0;
G__30223.cljs$lang$applyTo = (function (arglist__30225){
var args = cljs.core.seq(arglist__30225);
return G__30223__delegate(args);
});
G__30223.cljs$core$IFn$_invoke$arity$variadic = G__30223__delegate;
return G__30223;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__30226__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30227__i = 0, G__30227__a = new Array(arguments.length -  0);
while (G__30227__i < G__30227__a.length) {G__30227__a[G__30227__i] = arguments[G__30227__i + 0]; ++G__30227__i;}
  args = new cljs.core.IndexedSeq(G__30227__a,0,null);
} 
return G__30226__delegate.call(this,args);};
G__30226.cljs$lang$maxFixedArity = 0;
G__30226.cljs$lang$applyTo = (function (arglist__30228){
var args = cljs.core.seq(arglist__30228);
return G__30226__delegate(args);
});
G__30226.cljs$core$IFn$_invoke$arity$variadic = G__30226__delegate;
return G__30226;
})()
);

return null;
});
