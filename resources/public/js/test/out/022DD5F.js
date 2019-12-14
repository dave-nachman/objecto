goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29519__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29520__i = 0, G__29520__a = new Array(arguments.length -  0);
while (G__29520__i < G__29520__a.length) {G__29520__a[G__29520__i] = arguments[G__29520__i + 0]; ++G__29520__i;}
  args = new cljs.core.IndexedSeq(G__29520__a,0,null);
} 
return G__29519__delegate.call(this,args);};
G__29519.cljs$lang$maxFixedArity = 0;
G__29519.cljs$lang$applyTo = (function (arglist__29521){
var args = cljs.core.seq(arglist__29521);
return G__29519__delegate(args);
});
G__29519.cljs$core$IFn$_invoke$arity$variadic = G__29519__delegate;
return G__29519;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29522__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29523__i = 0, G__29523__a = new Array(arguments.length -  0);
while (G__29523__i < G__29523__a.length) {G__29523__a[G__29523__i] = arguments[G__29523__i + 0]; ++G__29523__i;}
  args = new cljs.core.IndexedSeq(G__29523__a,0,null);
} 
return G__29522__delegate.call(this,args);};
G__29522.cljs$lang$maxFixedArity = 0;
G__29522.cljs$lang$applyTo = (function (arglist__29524){
var args = cljs.core.seq(arglist__29524);
return G__29522__delegate(args);
});
G__29522.cljs$core$IFn$_invoke$arity$variadic = G__29522__delegate;
return G__29522;
})()
);

return null;
});
