// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__28790__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28791__i = 0, G__28791__a = new Array(arguments.length -  0);
while (G__28791__i < G__28791__a.length) {G__28791__a[G__28791__i] = arguments[G__28791__i + 0]; ++G__28791__i;}
  args = new cljs.core.IndexedSeq(G__28791__a,0,null);
} 
return G__28790__delegate.call(this,args);};
G__28790.cljs$lang$maxFixedArity = 0;
G__28790.cljs$lang$applyTo = (function (arglist__28792){
var args = cljs.core.seq(arglist__28792);
return G__28790__delegate(args);
});
G__28790.cljs$core$IFn$_invoke$arity$variadic = G__28790__delegate;
return G__28790;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28793__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28794__i = 0, G__28794__a = new Array(arguments.length -  0);
while (G__28794__i < G__28794__a.length) {G__28794__a[G__28794__i] = arguments[G__28794__i + 0]; ++G__28794__i;}
  args = new cljs.core.IndexedSeq(G__28794__a,0,null);
} 
return G__28793__delegate.call(this,args);};
G__28793.cljs$lang$maxFixedArity = 0;
G__28793.cljs$lang$applyTo = (function (arglist__28795){
var args = cljs.core.seq(arglist__28795);
return G__28793__delegate(args);
});
G__28793.cljs$core$IFn$_invoke$arity$variadic = G__28793__delegate;
return G__28793;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1576361233652
