// Compiled by ClojureScript 1.10.520 {}
goog.provide('objecto.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('objecto.repl');
goog.require('objecto.env');
if((typeof objecto !== 'undefined') && (typeof objecto.ui !== 'undefined') && (typeof objecto.ui.app_state !== 'undefined')){
} else {
objecto.ui.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output","output",-1105869043),"",new cljs.core.Keyword(null,"input","input",556931961),""], null));
}
objecto.ui.evaluate = (function objecto$ui$evaluate(){
try{return cljs.core.swap_BANG_.call(null,objecto.ui.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"output","output",-1105869043),objecto.repl.read_eval.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,objecto.ui.app_state))));
}catch (e42641){if((e42641 instanceof Object)){
var e = e42641;
return cljs.core.swap_BANG_.call(null,objecto.ui.app_state,cljs.core.assoc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
} else {
throw e42641;

}
}});
objecto.ui.render_env_kv = (function objecto$ui$render_env_kv(p__42642){
var vec__42643 = p__42642;
var k = cljs.core.nth.call(null,vec__42643,(0),null);
var v = cljs.core.nth.call(null,vec__42643,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.name.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)], null)], null);
});
objecto.ui.ui = (function objecto$ui$ui(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"70%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Objecto"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42646_SHARP_){
return cljs.core.swap_BANG_.call(null,objecto.ui.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input","input",556931961),p1__42646_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),objecto.ui.evaluate], null),"Evaluate"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,objecto.ui.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Environment"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.call(null,objecto.ui.render_env_kv,cljs.core.deref.call(null,objecto.env.env))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),""], null)], null)], null);
});

//# sourceMappingURL=ui.js.map?rel=1576362120021
