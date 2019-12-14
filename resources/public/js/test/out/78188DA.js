goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__30091__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30091 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30092__i = 0, G__30092__a = new Array(arguments.length -  0);
while (G__30092__i < G__30092__a.length) {G__30092__a[G__30092__i] = arguments[G__30092__i + 0]; ++G__30092__i;}
  args = new cljs.core.IndexedSeq(G__30092__a,0,null);
} 
return G__30091__delegate.call(this,args);};
G__30091.cljs$lang$maxFixedArity = 0;
G__30091.cljs$lang$applyTo = (function (arglist__30093){
var args = cljs.core.seq(arglist__30093);
return G__30091__delegate(args);
});
G__30091.cljs$core$IFn$_invoke$arity$variadic = G__30091__delegate;
return G__30091;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__30094__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30095__i = 0, G__30095__a = new Array(arguments.length -  0);
while (G__30095__i < G__30095__a.length) {G__30095__a[G__30095__i] = arguments[G__30095__i + 0]; ++G__30095__i;}
  args = new cljs.core.IndexedSeq(G__30095__a,0,null);
} 
return G__30094__delegate.call(this,args);};
G__30094.cljs$lang$maxFixedArity = 0;
G__30094.cljs$lang$applyTo = (function (arglist__30096){
var args = cljs.core.seq(arglist__30096);
return G__30094__delegate(args);
});
G__30094.cljs$core$IFn$_invoke$arity$variadic = G__30094__delegate;
return G__30094;
})()
);

return null;
});
