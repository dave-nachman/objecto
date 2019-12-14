goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29716__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29717__i = 0, G__29717__a = new Array(arguments.length -  0);
while (G__29717__i < G__29717__a.length) {G__29717__a[G__29717__i] = arguments[G__29717__i + 0]; ++G__29717__i;}
  args = new cljs.core.IndexedSeq(G__29717__a,0,null);
} 
return G__29716__delegate.call(this,args);};
G__29716.cljs$lang$maxFixedArity = 0;
G__29716.cljs$lang$applyTo = (function (arglist__29718){
var args = cljs.core.seq(arglist__29718);
return G__29716__delegate(args);
});
G__29716.cljs$core$IFn$_invoke$arity$variadic = G__29716__delegate;
return G__29716;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29719__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29720__i = 0, G__29720__a = new Array(arguments.length -  0);
while (G__29720__i < G__29720__a.length) {G__29720__a[G__29720__i] = arguments[G__29720__i + 0]; ++G__29720__i;}
  args = new cljs.core.IndexedSeq(G__29720__a,0,null);
} 
return G__29719__delegate.call(this,args);};
G__29719.cljs$lang$maxFixedArity = 0;
G__29719.cljs$lang$applyTo = (function (arglist__29721){
var args = cljs.core.seq(arglist__29721);
return G__29719__delegate(args);
});
G__29719.cljs$core$IFn$_invoke$arity$variadic = G__29719__delegate;
return G__29719;
})()
);

return null;
});
