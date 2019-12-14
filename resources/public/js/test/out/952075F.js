goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29477__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29477 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29478__i = 0, G__29478__a = new Array(arguments.length -  0);
while (G__29478__i < G__29478__a.length) {G__29478__a[G__29478__i] = arguments[G__29478__i + 0]; ++G__29478__i;}
  args = new cljs.core.IndexedSeq(G__29478__a,0,null);
} 
return G__29477__delegate.call(this,args);};
G__29477.cljs$lang$maxFixedArity = 0;
G__29477.cljs$lang$applyTo = (function (arglist__29479){
var args = cljs.core.seq(arglist__29479);
return G__29477__delegate(args);
});
G__29477.cljs$core$IFn$_invoke$arity$variadic = G__29477__delegate;
return G__29477;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29480__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29481__i = 0, G__29481__a = new Array(arguments.length -  0);
while (G__29481__i < G__29481__a.length) {G__29481__a[G__29481__i] = arguments[G__29481__i + 0]; ++G__29481__i;}
  args = new cljs.core.IndexedSeq(G__29481__a,0,null);
} 
return G__29480__delegate.call(this,args);};
G__29480.cljs$lang$maxFixedArity = 0;
G__29480.cljs$lang$applyTo = (function (arglist__29482){
var args = cljs.core.seq(arglist__29482);
return G__29480__delegate(args);
});
G__29480.cljs$core$IFn$_invoke$arity$variadic = G__29480__delegate;
return G__29480;
})()
);

return null;
});
