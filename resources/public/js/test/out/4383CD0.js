goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29695__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29696__i = 0, G__29696__a = new Array(arguments.length -  0);
while (G__29696__i < G__29696__a.length) {G__29696__a[G__29696__i] = arguments[G__29696__i + 0]; ++G__29696__i;}
  args = new cljs.core.IndexedSeq(G__29696__a,0,null);
} 
return G__29695__delegate.call(this,args);};
G__29695.cljs$lang$maxFixedArity = 0;
G__29695.cljs$lang$applyTo = (function (arglist__29697){
var args = cljs.core.seq(arglist__29697);
return G__29695__delegate(args);
});
G__29695.cljs$core$IFn$_invoke$arity$variadic = G__29695__delegate;
return G__29695;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29698__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29699__i = 0, G__29699__a = new Array(arguments.length -  0);
while (G__29699__i < G__29699__a.length) {G__29699__a[G__29699__i] = arguments[G__29699__i + 0]; ++G__29699__i;}
  args = new cljs.core.IndexedSeq(G__29699__a,0,null);
} 
return G__29698__delegate.call(this,args);};
G__29698.cljs$lang$maxFixedArity = 0;
G__29698.cljs$lang$applyTo = (function (arglist__29700){
var args = cljs.core.seq(arglist__29700);
return G__29698__delegate(args);
});
G__29698.cljs$core$IFn$_invoke$arity$variadic = G__29698__delegate;
return G__29698;
})()
);

return null;
});
