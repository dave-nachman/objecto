goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29561__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29562__i = 0, G__29562__a = new Array(arguments.length -  0);
while (G__29562__i < G__29562__a.length) {G__29562__a[G__29562__i] = arguments[G__29562__i + 0]; ++G__29562__i;}
  args = new cljs.core.IndexedSeq(G__29562__a,0,null);
} 
return G__29561__delegate.call(this,args);};
G__29561.cljs$lang$maxFixedArity = 0;
G__29561.cljs$lang$applyTo = (function (arglist__29563){
var args = cljs.core.seq(arglist__29563);
return G__29561__delegate(args);
});
G__29561.cljs$core$IFn$_invoke$arity$variadic = G__29561__delegate;
return G__29561;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29564__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29565__i = 0, G__29565__a = new Array(arguments.length -  0);
while (G__29565__i < G__29565__a.length) {G__29565__a[G__29565__i] = arguments[G__29565__i + 0]; ++G__29565__i;}
  args = new cljs.core.IndexedSeq(G__29565__a,0,null);
} 
return G__29564__delegate.call(this,args);};
G__29564.cljs$lang$maxFixedArity = 0;
G__29564.cljs$lang$applyTo = (function (arglist__29566){
var args = cljs.core.seq(arglist__29566);
return G__29564__delegate(args);
});
G__29564.cljs$core$IFn$_invoke$arity$variadic = G__29564__delegate;
return G__29564;
})()
);

return null;
});
