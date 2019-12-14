goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29330__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29331__i = 0, G__29331__a = new Array(arguments.length -  0);
while (G__29331__i < G__29331__a.length) {G__29331__a[G__29331__i] = arguments[G__29331__i + 0]; ++G__29331__i;}
  args = new cljs.core.IndexedSeq(G__29331__a,0,null);
} 
return G__29330__delegate.call(this,args);};
G__29330.cljs$lang$maxFixedArity = 0;
G__29330.cljs$lang$applyTo = (function (arglist__29332){
var args = cljs.core.seq(arglist__29332);
return G__29330__delegate(args);
});
G__29330.cljs$core$IFn$_invoke$arity$variadic = G__29330__delegate;
return G__29330;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29333__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29334__i = 0, G__29334__a = new Array(arguments.length -  0);
while (G__29334__i < G__29334__a.length) {G__29334__a[G__29334__i] = arguments[G__29334__i + 0]; ++G__29334__i;}
  args = new cljs.core.IndexedSeq(G__29334__a,0,null);
} 
return G__29333__delegate.call(this,args);};
G__29333.cljs$lang$maxFixedArity = 0;
G__29333.cljs$lang$applyTo = (function (arglist__29335){
var args = cljs.core.seq(arglist__29335);
return G__29333__delegate(args);
});
G__29333.cljs$core$IFn$_invoke$arity$variadic = G__29333__delegate;
return G__29333;
})()
);

return null;
});
