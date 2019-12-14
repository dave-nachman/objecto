goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__30047__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30048__i = 0, G__30048__a = new Array(arguments.length -  0);
while (G__30048__i < G__30048__a.length) {G__30048__a[G__30048__i] = arguments[G__30048__i + 0]; ++G__30048__i;}
  args = new cljs.core.IndexedSeq(G__30048__a,0,null);
} 
return G__30047__delegate.call(this,args);};
G__30047.cljs$lang$maxFixedArity = 0;
G__30047.cljs$lang$applyTo = (function (arglist__30049){
var args = cljs.core.seq(arglist__30049);
return G__30047__delegate(args);
});
G__30047.cljs$core$IFn$_invoke$arity$variadic = G__30047__delegate;
return G__30047;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__30050__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30051__i = 0, G__30051__a = new Array(arguments.length -  0);
while (G__30051__i < G__30051__a.length) {G__30051__a[G__30051__i] = arguments[G__30051__i + 0]; ++G__30051__i;}
  args = new cljs.core.IndexedSeq(G__30051__a,0,null);
} 
return G__30050__delegate.call(this,args);};
G__30050.cljs$lang$maxFixedArity = 0;
G__30050.cljs$lang$applyTo = (function (arglist__30052){
var args = cljs.core.seq(arglist__30052);
return G__30050__delegate(args);
});
G__30050.cljs$core$IFn$_invoke$arity$variadic = G__30050__delegate;
return G__30050;
})()
);

return null;
});
