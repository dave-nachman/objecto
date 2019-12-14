// Compiled by ClojureScript 1.10.520 {}
goog.provide('objecto.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('objecto.repl');
goog.require('objecto.env');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof objecto !== 'undefined') && (typeof objecto.core !== 'undefined') && (typeof objecto.core.app_state !== 'undefined')){
} else {
objecto.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output","output",-1105869043),"",new cljs.core.Keyword(null,"input","input",556931961),""], null));
}
objecto.core.evaluate = (function objecto$core$evaluate(){
return cljs.core.swap_BANG_.call(null,objecto.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"output","output",-1105869043),objecto.repl.read_eval.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,objecto.core.app_state))));
});
objecto.core.render_env_kv = (function objecto$core$render_env_kv(p__39449){
var vec__39450 = p__39449;
var k = cljs.core.nth.call(null,vec__39450,(0),null);
var v = cljs.core.nth.call(null,vec__39450,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.name.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)], null)], null);
});
objecto.core.main = (function objecto$core$main(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__39453_SHARP_){
return cljs.core.swap_BANG_.call(null,objecto.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input","input",556931961),p1__39453_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),objecto.core.evaluate], null),"Evaluate"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,objecto.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Environment"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.call(null,objecto.core.render_env_kv,cljs.core.deref.call(null,objecto.env.env))], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [objecto.core.main], null),document.getElementById("app"));
objecto.core.on_js_reload = (function objecto$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1576358205395
