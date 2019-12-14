goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29936__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29937__i = 0, G__29937__a = new Array(arguments.length -  0);
while (G__29937__i < G__29937__a.length) {G__29937__a[G__29937__i] = arguments[G__29937__i + 0]; ++G__29937__i;}
  args = new cljs.core.IndexedSeq(G__29937__a,0,null);
} 
return G__29936__delegate.call(this,args);};
G__29936.cljs$lang$maxFixedArity = 0;
G__29936.cljs$lang$applyTo = (function (arglist__29938){
var args = cljs.core.seq(arglist__29938);
return G__29936__delegate(args);
});
G__29936.cljs$core$IFn$_invoke$arity$variadic = G__29936__delegate;
return G__29936;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29939__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29940__i = 0, G__29940__a = new Array(arguments.length -  0);
while (G__29940__i < G__29940__a.length) {G__29940__a[G__29940__i] = arguments[G__29940__i + 0]; ++G__29940__i;}
  args = new cljs.core.IndexedSeq(G__29940__a,0,null);
} 
return G__29939__delegate.call(this,args);};
G__29939.cljs$lang$maxFixedArity = 0;
G__29939.cljs$lang$applyTo = (function (arglist__29941){
var args = cljs.core.seq(arglist__29941);
return G__29939__delegate(args);
});
G__29939.cljs$core$IFn$_invoke$arity$variadic = G__29939__delegate;
return G__29939;
})()
);

return null;
});
