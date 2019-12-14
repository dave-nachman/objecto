goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29393__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29394__i = 0, G__29394__a = new Array(arguments.length -  0);
while (G__29394__i < G__29394__a.length) {G__29394__a[G__29394__i] = arguments[G__29394__i + 0]; ++G__29394__i;}
  args = new cljs.core.IndexedSeq(G__29394__a,0,null);
} 
return G__29393__delegate.call(this,args);};
G__29393.cljs$lang$maxFixedArity = 0;
G__29393.cljs$lang$applyTo = (function (arglist__29395){
var args = cljs.core.seq(arglist__29395);
return G__29393__delegate(args);
});
G__29393.cljs$core$IFn$_invoke$arity$variadic = G__29393__delegate;
return G__29393;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29396__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29397__i = 0, G__29397__a = new Array(arguments.length -  0);
while (G__29397__i < G__29397__a.length) {G__29397__a[G__29397__i] = arguments[G__29397__i + 0]; ++G__29397__i;}
  args = new cljs.core.IndexedSeq(G__29397__a,0,null);
} 
return G__29396__delegate.call(this,args);};
G__29396.cljs$lang$maxFixedArity = 0;
G__29396.cljs$lang$applyTo = (function (arglist__29398){
var args = cljs.core.seq(arglist__29398);
return G__29396__delegate(args);
});
G__29396.cljs$core$IFn$_invoke$arity$variadic = G__29396__delegate;
return G__29396;
})()
);

return null;
});
