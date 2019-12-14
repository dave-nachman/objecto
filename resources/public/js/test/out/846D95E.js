goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29892__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29892 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29893__i = 0, G__29893__a = new Array(arguments.length -  0);
while (G__29893__i < G__29893__a.length) {G__29893__a[G__29893__i] = arguments[G__29893__i + 0]; ++G__29893__i;}
  args = new cljs.core.IndexedSeq(G__29893__a,0,null);
} 
return G__29892__delegate.call(this,args);};
G__29892.cljs$lang$maxFixedArity = 0;
G__29892.cljs$lang$applyTo = (function (arglist__29894){
var args = cljs.core.seq(arglist__29894);
return G__29892__delegate(args);
});
G__29892.cljs$core$IFn$_invoke$arity$variadic = G__29892__delegate;
return G__29892;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29895__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29896__i = 0, G__29896__a = new Array(arguments.length -  0);
while (G__29896__i < G__29896__a.length) {G__29896__a[G__29896__i] = arguments[G__29896__i + 0]; ++G__29896__i;}
  args = new cljs.core.IndexedSeq(G__29896__a,0,null);
} 
return G__29895__delegate.call(this,args);};
G__29895.cljs$lang$maxFixedArity = 0;
G__29895.cljs$lang$applyTo = (function (arglist__29897){
var args = cljs.core.seq(arglist__29897);
return G__29895__delegate(args);
});
G__29895.cljs$core$IFn$_invoke$arity$variadic = G__29895__delegate;
return G__29895;
})()
);

return null;
});
