// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38591){
var map__38592 = p__38591;
var map__38592__$1 = (((((!((map__38592 == null))))?(((((map__38592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38592):map__38592);
var m = map__38592__$1;
var n = cljs.core.get.call(null,map__38592__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38592__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38594_38626 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38595_38627 = null;
var count__38596_38628 = (0);
var i__38597_38629 = (0);
while(true){
if((i__38597_38629 < count__38596_38628)){
var f_38630 = cljs.core._nth.call(null,chunk__38595_38627,i__38597_38629);
cljs.core.println.call(null,"  ",f_38630);


var G__38631 = seq__38594_38626;
var G__38632 = chunk__38595_38627;
var G__38633 = count__38596_38628;
var G__38634 = (i__38597_38629 + (1));
seq__38594_38626 = G__38631;
chunk__38595_38627 = G__38632;
count__38596_38628 = G__38633;
i__38597_38629 = G__38634;
continue;
} else {
var temp__5720__auto___38635 = cljs.core.seq.call(null,seq__38594_38626);
if(temp__5720__auto___38635){
var seq__38594_38636__$1 = temp__5720__auto___38635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38594_38636__$1)){
var c__4550__auto___38637 = cljs.core.chunk_first.call(null,seq__38594_38636__$1);
var G__38638 = cljs.core.chunk_rest.call(null,seq__38594_38636__$1);
var G__38639 = c__4550__auto___38637;
var G__38640 = cljs.core.count.call(null,c__4550__auto___38637);
var G__38641 = (0);
seq__38594_38626 = G__38638;
chunk__38595_38627 = G__38639;
count__38596_38628 = G__38640;
i__38597_38629 = G__38641;
continue;
} else {
var f_38642 = cljs.core.first.call(null,seq__38594_38636__$1);
cljs.core.println.call(null,"  ",f_38642);


var G__38643 = cljs.core.next.call(null,seq__38594_38636__$1);
var G__38644 = null;
var G__38645 = (0);
var G__38646 = (0);
seq__38594_38626 = G__38643;
chunk__38595_38627 = G__38644;
count__38596_38628 = G__38645;
i__38597_38629 = G__38646;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38647 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38647);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38647)))?cljs.core.second.call(null,arglists_38647):arglists_38647));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38598_38648 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38599_38649 = null;
var count__38600_38650 = (0);
var i__38601_38651 = (0);
while(true){
if((i__38601_38651 < count__38600_38650)){
var vec__38612_38652 = cljs.core._nth.call(null,chunk__38599_38649,i__38601_38651);
var name_38653 = cljs.core.nth.call(null,vec__38612_38652,(0),null);
var map__38615_38654 = cljs.core.nth.call(null,vec__38612_38652,(1),null);
var map__38615_38655__$1 = (((((!((map__38615_38654 == null))))?(((((map__38615_38654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38615_38654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38615_38654):map__38615_38654);
var doc_38656 = cljs.core.get.call(null,map__38615_38655__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38657 = cljs.core.get.call(null,map__38615_38655__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38653);

cljs.core.println.call(null," ",arglists_38657);

if(cljs.core.truth_(doc_38656)){
cljs.core.println.call(null," ",doc_38656);
} else {
}


var G__38658 = seq__38598_38648;
var G__38659 = chunk__38599_38649;
var G__38660 = count__38600_38650;
var G__38661 = (i__38601_38651 + (1));
seq__38598_38648 = G__38658;
chunk__38599_38649 = G__38659;
count__38600_38650 = G__38660;
i__38601_38651 = G__38661;
continue;
} else {
var temp__5720__auto___38662 = cljs.core.seq.call(null,seq__38598_38648);
if(temp__5720__auto___38662){
var seq__38598_38663__$1 = temp__5720__auto___38662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38598_38663__$1)){
var c__4550__auto___38664 = cljs.core.chunk_first.call(null,seq__38598_38663__$1);
var G__38665 = cljs.core.chunk_rest.call(null,seq__38598_38663__$1);
var G__38666 = c__4550__auto___38664;
var G__38667 = cljs.core.count.call(null,c__4550__auto___38664);
var G__38668 = (0);
seq__38598_38648 = G__38665;
chunk__38599_38649 = G__38666;
count__38600_38650 = G__38667;
i__38601_38651 = G__38668;
continue;
} else {
var vec__38617_38669 = cljs.core.first.call(null,seq__38598_38663__$1);
var name_38670 = cljs.core.nth.call(null,vec__38617_38669,(0),null);
var map__38620_38671 = cljs.core.nth.call(null,vec__38617_38669,(1),null);
var map__38620_38672__$1 = (((((!((map__38620_38671 == null))))?(((((map__38620_38671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38620_38671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38620_38671):map__38620_38671);
var doc_38673 = cljs.core.get.call(null,map__38620_38672__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38674 = cljs.core.get.call(null,map__38620_38672__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38670);

cljs.core.println.call(null," ",arglists_38674);

if(cljs.core.truth_(doc_38673)){
cljs.core.println.call(null," ",doc_38673);
} else {
}


var G__38675 = cljs.core.next.call(null,seq__38598_38663__$1);
var G__38676 = null;
var G__38677 = (0);
var G__38678 = (0);
seq__38598_38648 = G__38675;
chunk__38599_38649 = G__38676;
count__38600_38650 = G__38677;
i__38601_38651 = G__38678;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__38622 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38623 = null;
var count__38624 = (0);
var i__38625 = (0);
while(true){
if((i__38625 < count__38624)){
var role = cljs.core._nth.call(null,chunk__38623,i__38625);
var temp__5720__auto___38679__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___38679__$1)){
var spec_38680 = temp__5720__auto___38679__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38680));
} else {
}


var G__38681 = seq__38622;
var G__38682 = chunk__38623;
var G__38683 = count__38624;
var G__38684 = (i__38625 + (1));
seq__38622 = G__38681;
chunk__38623 = G__38682;
count__38624 = G__38683;
i__38625 = G__38684;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__38622);
if(temp__5720__auto____$1){
var seq__38622__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38622__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__38622__$1);
var G__38685 = cljs.core.chunk_rest.call(null,seq__38622__$1);
var G__38686 = c__4550__auto__;
var G__38687 = cljs.core.count.call(null,c__4550__auto__);
var G__38688 = (0);
seq__38622 = G__38685;
chunk__38623 = G__38686;
count__38624 = G__38687;
i__38625 = G__38688;
continue;
} else {
var role = cljs.core.first.call(null,seq__38622__$1);
var temp__5720__auto___38689__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___38689__$2)){
var spec_38690 = temp__5720__auto___38689__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38690));
} else {
}


var G__38691 = cljs.core.next.call(null,seq__38622__$1);
var G__38692 = null;
var G__38693 = (0);
var G__38694 = (0);
seq__38622 = G__38691;
chunk__38623 = G__38692;
count__38624 = G__38693;
i__38625 = G__38694;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38695 = cljs.core.conj.call(null,via,t);
var G__38696 = cljs.core.ex_cause.call(null,t);
via = G__38695;
t = G__38696;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38699 = datafied_throwable;
var map__38699__$1 = (((((!((map__38699 == null))))?(((((map__38699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38699):map__38699);
var via = cljs.core.get.call(null,map__38699__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__38699__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__38699__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38700 = cljs.core.last.call(null,via);
var map__38700__$1 = (((((!((map__38700 == null))))?(((((map__38700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38700):map__38700);
var type = cljs.core.get.call(null,map__38700__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__38700__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__38700__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38701 = data;
var map__38701__$1 = (((((!((map__38701 == null))))?(((((map__38701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38701):map__38701);
var problems = cljs.core.get.call(null,map__38701__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__38701__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__38701__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38702 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__38702__$1 = (((((!((map__38702 == null))))?(((((map__38702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38702):map__38702);
var top_data = map__38702__$1;
var source = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__38707 = phase;
var G__38707__$1 = (((G__38707 instanceof cljs.core.Keyword))?G__38707.fqn:null);
switch (G__38707__$1) {
case "read-source":
var map__38708 = data;
var map__38708__$1 = (((((!((map__38708 == null))))?(((((map__38708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38708):map__38708);
var line = cljs.core.get.call(null,map__38708__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__38708__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38710 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__38710__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__38710,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38710);
var G__38710__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__38710__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38710__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__38710__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38710__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38711 = top_data;
var G__38711__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__38711,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38711);
var G__38711__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__38711__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38711__$1);
var G__38711__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__38711__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38711__$2);
var G__38711__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__38711__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38711__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__38711__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38711__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38712 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__38712,(0),null);
var method = cljs.core.nth.call(null,vec__38712,(1),null);
var file = cljs.core.nth.call(null,vec__38712,(2),null);
var line = cljs.core.nth.call(null,vec__38712,(3),null);
var G__38715 = top_data;
var G__38715__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__38715,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38715);
var G__38715__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__38715__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38715__$1);
var G__38715__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__38715__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38715__$2);
var G__38715__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__38715__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38715__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__38715__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38715__$4;
}

break;
case "execution":
var vec__38716 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__38716,(0),null);
var method = cljs.core.nth.call(null,vec__38716,(1),null);
var file = cljs.core.nth.call(null,vec__38716,(2),null);
var line = cljs.core.nth.call(null,vec__38716,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__38716,source__$1,method,file,line,G__38707,G__38707__$1,map__38699,map__38699__$1,via,trace,phase,map__38700,map__38700__$1,type,message,data,map__38701,map__38701__$1,problems,fn,caller,map__38702,map__38702__$1,top_data,source){
return (function (p1__38698_SHARP_){
var or__4131__auto__ = (p1__38698_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__38698_SHARP_);
}
});})(vec__38716,source__$1,method,file,line,G__38707,G__38707__$1,map__38699,map__38699__$1,via,trace,phase,map__38700,map__38700__$1,type,message,data,map__38701,map__38701__$1,problems,fn,caller,map__38702,map__38702__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__38719 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38719__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__38719,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38719);
var G__38719__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__38719__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38719__$1);
var G__38719__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__38719__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38719__$2);
var G__38719__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__38719__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38719__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__38719__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38719__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38707__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38723){
var map__38724 = p__38723;
var map__38724__$1 = (((((!((map__38724 == null))))?(((((map__38724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38724):map__38724);
var triage_data = map__38724__$1;
var phase = cljs.core.get.call(null,map__38724__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__38724__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__38724__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__38724__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__38724__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__38724__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__38724__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__38724__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38726 = phase;
var G__38726__$1 = (((G__38726 instanceof cljs.core.Keyword))?G__38726.fqn:null);
switch (G__38726__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38727_38736 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38728_38737 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38729_38738 = true;
var _STAR_print_fn_STAR__temp_val__38730_38739 = ((function (_STAR_print_newline_STAR__orig_val__38727_38736,_STAR_print_fn_STAR__orig_val__38728_38737,_STAR_print_newline_STAR__temp_val__38729_38738,sb__4661__auto__,G__38726,G__38726__$1,loc,class_name,simple_class,cause_type,format,map__38724,map__38724__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__38727_38736,_STAR_print_fn_STAR__orig_val__38728_38737,_STAR_print_newline_STAR__temp_val__38729_38738,sb__4661__auto__,G__38726,G__38726__$1,loc,class_name,simple_class,cause_type,format,map__38724,map__38724__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38729_38738;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38730_38739;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__38727_38736,_STAR_print_fn_STAR__orig_val__38728_38737,_STAR_print_newline_STAR__temp_val__38729_38738,_STAR_print_fn_STAR__temp_val__38730_38739,sb__4661__auto__,G__38726,G__38726__$1,loc,class_name,simple_class,cause_type,format,map__38724,map__38724__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__38727_38736,_STAR_print_fn_STAR__orig_val__38728_38737,_STAR_print_newline_STAR__temp_val__38729_38738,_STAR_print_fn_STAR__temp_val__38730_38739,sb__4661__auto__,G__38726,G__38726__$1,loc,class_name,simple_class,cause_type,format,map__38724,map__38724__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__38721_SHARP_){
return cljs.core.dissoc.call(null,p1__38721_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__38727_38736,_STAR_print_fn_STAR__orig_val__38728_38737,_STAR_print_newline_STAR__temp_val__38729_38738,_STAR_print_fn_STAR__temp_val__38730_38739,sb__4661__auto__,G__38726,G__38726__$1,loc,class_name,simple_class,cause_type,format,map__38724,map__38724__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__38727_38736,_STAR_print_fn_STAR__orig_val__38728_38737,_STAR_print_newline_STAR__temp_val__38729_38738,_STAR_print_fn_STAR__temp_val__38730_38739,sb__4661__auto__,G__38726,G__38726__$1,loc,class_name,simple_class,cause_type,format,map__38724,map__38724__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38728_38737;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38727_38736;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38731_38740 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38732_38741 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38733_38742 = true;
var _STAR_print_fn_STAR__temp_val__38734_38743 = ((function (_STAR_print_newline_STAR__orig_val__38731_38740,_STAR_print_fn_STAR__orig_val__38732_38741,_STAR_print_newline_STAR__temp_val__38733_38742,sb__4661__auto__,G__38726,G__38726__$1,loc,class_name,simple_class,cause_type,format,map__38724,map__38724__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__38731_38740,_STAR_print_fn_STAR__orig_val__38732_38741,_STAR_print_newline_STAR__temp_val__38733_38742,sb__4661__auto__,G__38726,G__38726__$1,loc,class_name,simple_class,cause_type,format,map__38724,map__38724__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38733_38742;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38734_38743;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__38731_38740,_STAR_print_fn_STAR__orig_val__38732_38741,_STAR_print_newline_STAR__temp_val__38733_38742,_STAR_print_fn_STAR__temp_val__38734_38743,sb__4661__auto__,G__38726,G__38726__$1,loc,class_name,simple_class,cause_type,format,map__38724,map__38724__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__38731_38740,_STAR_print_fn_STAR__orig_val__38732_38741,_STAR_print_newline_STAR__temp_val__38733_38742,_STAR_print_fn_STAR__temp_val__38734_38743,sb__4661__auto__,G__38726,G__38726__$1,loc,class_name,simple_class,cause_type,format,map__38724,map__38724__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__38722_SHARP_){
return cljs.core.dissoc.call(null,p1__38722_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__38731_38740,_STAR_print_fn_STAR__orig_val__38732_38741,_STAR_print_newline_STAR__temp_val__38733_38742,_STAR_print_fn_STAR__temp_val__38734_38743,sb__4661__auto__,G__38726,G__38726__$1,loc,class_name,simple_class,cause_type,format,map__38724,map__38724__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__38731_38740,_STAR_print_fn_STAR__orig_val__38732_38741,_STAR_print_newline_STAR__temp_val__38733_38742,_STAR_print_fn_STAR__temp_val__38734_38743,sb__4661__auto__,G__38726,G__38726__$1,loc,class_name,simple_class,cause_type,format,map__38724,map__38724__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38732_38741;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38731_38740;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38726__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1576361247203
