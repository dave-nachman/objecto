goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29848__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29849__i = 0, G__29849__a = new Array(arguments.length -  0);
while (G__29849__i < G__29849__a.length) {G__29849__a[G__29849__i] = arguments[G__29849__i + 0]; ++G__29849__i;}
  args = new cljs.core.IndexedSeq(G__29849__a,0,null);
} 
return G__29848__delegate.call(this,args);};
G__29848.cljs$lang$maxFixedArity = 0;
G__29848.cljs$lang$applyTo = (function (arglist__29850){
var args = cljs.core.seq(arglist__29850);
return G__29848__delegate(args);
});
G__29848.cljs$core$IFn$_invoke$arity$variadic = G__29848__delegate;
return G__29848;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29851__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29851 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29852__i = 0, G__29852__a = new Array(arguments.length -  0);
while (G__29852__i < G__29852__a.length) {G__29852__a[G__29852__i] = arguments[G__29852__i + 0]; ++G__29852__i;}
  args = new cljs.core.IndexedSeq(G__29852__a,0,null);
} 
return G__29851__delegate.call(this,args);};
G__29851.cljs$lang$maxFixedArity = 0;
G__29851.cljs$lang$applyTo = (function (arglist__29853){
var args = cljs.core.seq(arglist__29853);
return G__29851__delegate(args);
});
G__29851.cljs$core$IFn$_invoke$arity$variadic = G__29851__delegate;
return G__29851;
})()
);

return null;
});
