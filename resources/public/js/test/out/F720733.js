goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29309__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29309 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29310__i = 0, G__29310__a = new Array(arguments.length -  0);
while (G__29310__i < G__29310__a.length) {G__29310__a[G__29310__i] = arguments[G__29310__i + 0]; ++G__29310__i;}
  args = new cljs.core.IndexedSeq(G__29310__a,0,null);
} 
return G__29309__delegate.call(this,args);};
G__29309.cljs$lang$maxFixedArity = 0;
G__29309.cljs$lang$applyTo = (function (arglist__29311){
var args = cljs.core.seq(arglist__29311);
return G__29309__delegate(args);
});
G__29309.cljs$core$IFn$_invoke$arity$variadic = G__29309__delegate;
return G__29309;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29312__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29313__i = 0, G__29313__a = new Array(arguments.length -  0);
while (G__29313__i < G__29313__a.length) {G__29313__a[G__29313__i] = arguments[G__29313__i + 0]; ++G__29313__i;}
  args = new cljs.core.IndexedSeq(G__29313__a,0,null);
} 
return G__29312__delegate.call(this,args);};
G__29312.cljs$lang$maxFixedArity = 0;
G__29312.cljs$lang$applyTo = (function (arglist__29314){
var args = cljs.core.seq(arglist__29314);
return G__29312__delegate(args);
});
G__29312.cljs$core$IFn$_invoke$arity$variadic = G__29312__delegate;
return G__29312;
})()
);

return null;
});
