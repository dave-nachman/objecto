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
var G__28791__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28792__i = 0, G__28792__a = new Array(arguments.length -  0);
while (G__28792__i < G__28792__a.length) {G__28792__a[G__28792__i] = arguments[G__28792__i + 0]; ++G__28792__i;}
  args = new cljs.core.IndexedSeq(G__28792__a,0,null);
} 
return G__28791__delegate.call(this,args);};
G__28791.cljs$lang$maxFixedArity = 0;
G__28791.cljs$lang$applyTo = (function (arglist__28793){
var args = cljs.core.seq(arglist__28793);
return G__28791__delegate(args);
});
G__28791.cljs$core$IFn$_invoke$arity$variadic = G__28791__delegate;
return G__28791;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28794__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28794 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28795__i = 0, G__28795__a = new Array(arguments.length -  0);
while (G__28795__i < G__28795__a.length) {G__28795__a[G__28795__i] = arguments[G__28795__i + 0]; ++G__28795__i;}
  args = new cljs.core.IndexedSeq(G__28795__a,0,null);
} 
return G__28794__delegate.call(this,args);};
G__28794.cljs$lang$maxFixedArity = 0;
G__28794.cljs$lang$applyTo = (function (arglist__28796){
var args = cljs.core.seq(arglist__28796);
return G__28794__delegate(args);
});
G__28794.cljs$core$IFn$_invoke$arity$variadic = G__28794__delegate;
return G__28794;
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

//# sourceMappingURL=debug.js.map?rel=1576338716507
