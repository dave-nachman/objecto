goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__30179__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30180__i = 0, G__30180__a = new Array(arguments.length -  0);
while (G__30180__i < G__30180__a.length) {G__30180__a[G__30180__i] = arguments[G__30180__i + 0]; ++G__30180__i;}
  args = new cljs.core.IndexedSeq(G__30180__a,0,null);
} 
return G__30179__delegate.call(this,args);};
G__30179.cljs$lang$maxFixedArity = 0;
G__30179.cljs$lang$applyTo = (function (arglist__30181){
var args = cljs.core.seq(arglist__30181);
return G__30179__delegate(args);
});
G__30179.cljs$core$IFn$_invoke$arity$variadic = G__30179__delegate;
return G__30179;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__30182__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30183__i = 0, G__30183__a = new Array(arguments.length -  0);
while (G__30183__i < G__30183__a.length) {G__30183__a[G__30183__i] = arguments[G__30183__i + 0]; ++G__30183__i;}
  args = new cljs.core.IndexedSeq(G__30183__a,0,null);
} 
return G__30182__delegate.call(this,args);};
G__30182.cljs$lang$maxFixedArity = 0;
G__30182.cljs$lang$applyTo = (function (arglist__30184){
var args = cljs.core.seq(arglist__30184);
return G__30182__delegate(args);
});
G__30182.cljs$core$IFn$_invoke$arity$variadic = G__30182__delegate;
return G__30182;
})()
);

return null;
});
