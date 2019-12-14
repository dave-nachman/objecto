goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29456__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29457__i = 0, G__29457__a = new Array(arguments.length -  0);
while (G__29457__i < G__29457__a.length) {G__29457__a[G__29457__i] = arguments[G__29457__i + 0]; ++G__29457__i;}
  args = new cljs.core.IndexedSeq(G__29457__a,0,null);
} 
return G__29456__delegate.call(this,args);};
G__29456.cljs$lang$maxFixedArity = 0;
G__29456.cljs$lang$applyTo = (function (arglist__29458){
var args = cljs.core.seq(arglist__29458);
return G__29456__delegate(args);
});
G__29456.cljs$core$IFn$_invoke$arity$variadic = G__29456__delegate;
return G__29456;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29459__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29460__i = 0, G__29460__a = new Array(arguments.length -  0);
while (G__29460__i < G__29460__a.length) {G__29460__a[G__29460__i] = arguments[G__29460__i + 0]; ++G__29460__i;}
  args = new cljs.core.IndexedSeq(G__29460__a,0,null);
} 
return G__29459__delegate.call(this,args);};
G__29459.cljs$lang$maxFixedArity = 0;
G__29459.cljs$lang$applyTo = (function (arglist__29461){
var args = cljs.core.seq(arglist__29461);
return G__29459__delegate(args);
});
G__29459.cljs$core$IFn$_invoke$arity$variadic = G__29459__delegate;
return G__29459;
})()
);

return null;
});
