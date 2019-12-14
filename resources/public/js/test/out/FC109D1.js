goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__29649__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29650__i = 0, G__29650__a = new Array(arguments.length -  0);
while (G__29650__i < G__29650__a.length) {G__29650__a[G__29650__i] = arguments[G__29650__i + 0]; ++G__29650__i;}
  args = new cljs.core.IndexedSeq(G__29650__a,0,null);
} 
return G__29649__delegate.call(this,args);};
G__29649.cljs$lang$maxFixedArity = 0;
G__29649.cljs$lang$applyTo = (function (arglist__29651){
var args = cljs.core.seq(arglist__29651);
return G__29649__delegate(args);
});
G__29649.cljs$core$IFn$_invoke$arity$variadic = G__29649__delegate;
return G__29649;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__29652__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29653__i = 0, G__29653__a = new Array(arguments.length -  0);
while (G__29653__i < G__29653__a.length) {G__29653__a[G__29653__i] = arguments[G__29653__i + 0]; ++G__29653__i;}
  args = new cljs.core.IndexedSeq(G__29653__a,0,null);
} 
return G__29652__delegate.call(this,args);};
G__29652.cljs$lang$maxFixedArity = 0;
G__29652.cljs$lang$applyTo = (function (arglist__29654){
var args = cljs.core.seq(arglist__29654);
return G__29652__delegate(args);
});
G__29652.cljs$core$IFn$_invoke$arity$variadic = G__29652__delegate;
return G__29652;
})()
);

return null;
});
