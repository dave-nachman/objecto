goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29435__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29436__i = 0, G__29436__a = new Array(arguments.length -  0);
while (G__29436__i < G__29436__a.length) {G__29436__a[G__29436__i] = arguments[G__29436__i + 0]; ++G__29436__i;}
  args = new cljs.core.IndexedSeq(G__29436__a,0,null);
} 
return G__29435__delegate.call(this,args);};
G__29435.cljs$lang$maxFixedArity = 0;
G__29435.cljs$lang$applyTo = (function (arglist__29437){
var args = cljs.core.seq(arglist__29437);
return G__29435__delegate(args);
});
G__29435.cljs$core$IFn$_invoke$arity$variadic = G__29435__delegate;
return G__29435;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29438__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29439__i = 0, G__29439__a = new Array(arguments.length -  0);
while (G__29439__i < G__29439__a.length) {G__29439__a[G__29439__i] = arguments[G__29439__i + 0]; ++G__29439__i;}
  args = new cljs.core.IndexedSeq(G__29439__a,0,null);
} 
return G__29438__delegate.call(this,args);};
G__29438.cljs$lang$maxFixedArity = 0;
G__29438.cljs$lang$applyTo = (function (arglist__29440){
var args = cljs.core.seq(arglist__29440);
return G__29438__delegate(args);
});
G__29438.cljs$core$IFn$_invoke$arity$variadic = G__29438__delegate;
return G__29438;
})()
);

return null;
});
