goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29540__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29541__i = 0, G__29541__a = new Array(arguments.length -  0);
while (G__29541__i < G__29541__a.length) {G__29541__a[G__29541__i] = arguments[G__29541__i + 0]; ++G__29541__i;}
  args = new cljs.core.IndexedSeq(G__29541__a,0,null);
} 
return G__29540__delegate.call(this,args);};
G__29540.cljs$lang$maxFixedArity = 0;
G__29540.cljs$lang$applyTo = (function (arglist__29542){
var args = cljs.core.seq(arglist__29542);
return G__29540__delegate(args);
});
G__29540.cljs$core$IFn$_invoke$arity$variadic = G__29540__delegate;
return G__29540;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29543__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29544__i = 0, G__29544__a = new Array(arguments.length -  0);
while (G__29544__i < G__29544__a.length) {G__29544__a[G__29544__i] = arguments[G__29544__i + 0]; ++G__29544__i;}
  args = new cljs.core.IndexedSeq(G__29544__a,0,null);
} 
return G__29543__delegate.call(this,args);};
G__29543.cljs$lang$maxFixedArity = 0;
G__29543.cljs$lang$applyTo = (function (arglist__29545){
var args = cljs.core.seq(arglist__29545);
return G__29543__delegate(args);
});
G__29543.cljs$core$IFn$_invoke$arity$variadic = G__29543__delegate;
return G__29543;
})()
);

return null;
});
