goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__30135__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30136__i = 0, G__30136__a = new Array(arguments.length -  0);
while (G__30136__i < G__30136__a.length) {G__30136__a[G__30136__i] = arguments[G__30136__i + 0]; ++G__30136__i;}
  args = new cljs.core.IndexedSeq(G__30136__a,0,null);
} 
return G__30135__delegate.call(this,args);};
G__30135.cljs$lang$maxFixedArity = 0;
G__30135.cljs$lang$applyTo = (function (arglist__30137){
var args = cljs.core.seq(arglist__30137);
return G__30135__delegate(args);
});
G__30135.cljs$core$IFn$_invoke$arity$variadic = G__30135__delegate;
return G__30135;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__30138__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30139__i = 0, G__30139__a = new Array(arguments.length -  0);
while (G__30139__i < G__30139__a.length) {G__30139__a[G__30139__i] = arguments[G__30139__i + 0]; ++G__30139__i;}
  args = new cljs.core.IndexedSeq(G__30139__a,0,null);
} 
return G__30138__delegate.call(this,args);};
G__30138.cljs$lang$maxFixedArity = 0;
G__30138.cljs$lang$applyTo = (function (arglist__30140){
var args = cljs.core.seq(arglist__30140);
return G__30138__delegate(args);
});
G__30138.cljs$core$IFn$_invoke$arity$variadic = G__30138__delegate;
return G__30138;
})()
);

return null;
});
