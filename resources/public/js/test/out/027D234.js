goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__30003__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30004__i = 0, G__30004__a = new Array(arguments.length -  0);
while (G__30004__i < G__30004__a.length) {G__30004__a[G__30004__i] = arguments[G__30004__i + 0]; ++G__30004__i;}
  args = new cljs.core.IndexedSeq(G__30004__a,0,null);
} 
return G__30003__delegate.call(this,args);};
G__30003.cljs$lang$maxFixedArity = 0;
G__30003.cljs$lang$applyTo = (function (arglist__30005){
var args = cljs.core.seq(arglist__30005);
return G__30003__delegate(args);
});
G__30003.cljs$core$IFn$_invoke$arity$variadic = G__30003__delegate;
return G__30003;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__30006__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30007__i = 0, G__30007__a = new Array(arguments.length -  0);
while (G__30007__i < G__30007__a.length) {G__30007__a[G__30007__i] = arguments[G__30007__i + 0]; ++G__30007__i;}
  args = new cljs.core.IndexedSeq(G__30007__a,0,null);
} 
return G__30006__delegate.call(this,args);};
G__30006.cljs$lang$maxFixedArity = 0;
G__30006.cljs$lang$applyTo = (function (arglist__30008){
var args = cljs.core.seq(arglist__30008);
return G__30006__delegate(args);
});
G__30006.cljs$core$IFn$_invoke$arity$variadic = G__30006__delegate;
return G__30006;
})()
);

return null;
});
