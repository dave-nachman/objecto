goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29603__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29604__i = 0, G__29604__a = new Array(arguments.length -  0);
while (G__29604__i < G__29604__a.length) {G__29604__a[G__29604__i] = arguments[G__29604__i + 0]; ++G__29604__i;}
  args = new cljs.core.IndexedSeq(G__29604__a,0,null);
} 
return G__29603__delegate.call(this,args);};
G__29603.cljs$lang$maxFixedArity = 0;
G__29603.cljs$lang$applyTo = (function (arglist__29605){
var args = cljs.core.seq(arglist__29605);
return G__29603__delegate(args);
});
G__29603.cljs$core$IFn$_invoke$arity$variadic = G__29603__delegate;
return G__29603;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29606__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29607__i = 0, G__29607__a = new Array(arguments.length -  0);
while (G__29607__i < G__29607__a.length) {G__29607__a[G__29607__i] = arguments[G__29607__i + 0]; ++G__29607__i;}
  args = new cljs.core.IndexedSeq(G__29607__a,0,null);
} 
return G__29606__delegate.call(this,args);};
G__29606.cljs$lang$maxFixedArity = 0;
G__29606.cljs$lang$applyTo = (function (arglist__29608){
var args = cljs.core.seq(arglist__29608);
return G__29606__delegate(args);
});
G__29606.cljs$core$IFn$_invoke$arity$variadic = G__29606__delegate;
return G__29606;
})()
);

return null;
});
