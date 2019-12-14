// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32518){
var map__32519 = p__32518;
var map__32519__$1 = (((((!((map__32519 == null))))?(((((map__32519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32519):map__32519);
var m = map__32519__$1;
var n = cljs.core.get.call(null,map__32519__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32519__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__32521_32553 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32522_32554 = null;
var count__32523_32555 = (0);
var i__32524_32556 = (0);
while(true){
if((i__32524_32556 < count__32523_32555)){
var f_32557 = cljs.core._nth.call(null,chunk__32522_32554,i__32524_32556);
cljs.core.println.call(null,"  ",f_32557);


var G__32558 = seq__32521_32553;
var G__32559 = chunk__32522_32554;
var G__32560 = count__32523_32555;
var G__32561 = (i__32524_32556 + (1));
seq__32521_32553 = G__32558;
chunk__32522_32554 = G__32559;
count__32523_32555 = G__32560;
i__32524_32556 = G__32561;
continue;
} else {
var temp__5720__auto___32562 = cljs.core.seq.call(null,seq__32521_32553);
if(temp__5720__auto___32562){
var seq__32521_32563__$1 = temp__5720__auto___32562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32521_32563__$1)){
var c__4550__auto___32564 = cljs.core.chunk_first.call(null,seq__32521_32563__$1);
var G__32565 = cljs.core.chunk_rest.call(null,seq__32521_32563__$1);
var G__32566 = c__4550__auto___32564;
var G__32567 = cljs.core.count.call(null,c__4550__auto___32564);
var G__32568 = (0);
seq__32521_32553 = G__32565;
chunk__32522_32554 = G__32566;
count__32523_32555 = G__32567;
i__32524_32556 = G__32568;
continue;
} else {
var f_32569 = cljs.core.first.call(null,seq__32521_32563__$1);
cljs.core.println.call(null,"  ",f_32569);


var G__32570 = cljs.core.next.call(null,seq__32521_32563__$1);
var G__32571 = null;
var G__32572 = (0);
var G__32573 = (0);
seq__32521_32553 = G__32570;
chunk__32522_32554 = G__32571;
count__32523_32555 = G__32572;
i__32524_32556 = G__32573;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32574 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32574);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32574)))?cljs.core.second.call(null,arglists_32574):arglists_32574));
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
var seq__32525_32575 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32526_32576 = null;
var count__32527_32577 = (0);
var i__32528_32578 = (0);
while(true){
if((i__32528_32578 < count__32527_32577)){
var vec__32539_32579 = cljs.core._nth.call(null,chunk__32526_32576,i__32528_32578);
var name_32580 = cljs.core.nth.call(null,vec__32539_32579,(0),null);
var map__32542_32581 = cljs.core.nth.call(null,vec__32539_32579,(1),null);
var map__32542_32582__$1 = (((((!((map__32542_32581 == null))))?(((((map__32542_32581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32542_32581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32542_32581):map__32542_32581);
var doc_32583 = cljs.core.get.call(null,map__32542_32582__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32584 = cljs.core.get.call(null,map__32542_32582__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32580);

cljs.core.println.call(null," ",arglists_32584);

if(cljs.core.truth_(doc_32583)){
cljs.core.println.call(null," ",doc_32583);
} else {
}


var G__32585 = seq__32525_32575;
var G__32586 = chunk__32526_32576;
var G__32587 = count__32527_32577;
var G__32588 = (i__32528_32578 + (1));
seq__32525_32575 = G__32585;
chunk__32526_32576 = G__32586;
count__32527_32577 = G__32587;
i__32528_32578 = G__32588;
continue;
} else {
var temp__5720__auto___32589 = cljs.core.seq.call(null,seq__32525_32575);
if(temp__5720__auto___32589){
var seq__32525_32590__$1 = temp__5720__auto___32589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32525_32590__$1)){
var c__4550__auto___32591 = cljs.core.chunk_first.call(null,seq__32525_32590__$1);
var G__32592 = cljs.core.chunk_rest.call(null,seq__32525_32590__$1);
var G__32593 = c__4550__auto___32591;
var G__32594 = cljs.core.count.call(null,c__4550__auto___32591);
var G__32595 = (0);
seq__32525_32575 = G__32592;
chunk__32526_32576 = G__32593;
count__32527_32577 = G__32594;
i__32528_32578 = G__32595;
continue;
} else {
var vec__32544_32596 = cljs.core.first.call(null,seq__32525_32590__$1);
var name_32597 = cljs.core.nth.call(null,vec__32544_32596,(0),null);
var map__32547_32598 = cljs.core.nth.call(null,vec__32544_32596,(1),null);
var map__32547_32599__$1 = (((((!((map__32547_32598 == null))))?(((((map__32547_32598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32547_32598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32547_32598):map__32547_32598);
var doc_32600 = cljs.core.get.call(null,map__32547_32599__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32601 = cljs.core.get.call(null,map__32547_32599__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32597);

cljs.core.println.call(null," ",arglists_32601);

if(cljs.core.truth_(doc_32600)){
cljs.core.println.call(null," ",doc_32600);
} else {
}


var G__32602 = cljs.core.next.call(null,seq__32525_32590__$1);
var G__32603 = null;
var G__32604 = (0);
var G__32605 = (0);
seq__32525_32575 = G__32602;
chunk__32526_32576 = G__32603;
count__32527_32577 = G__32604;
i__32528_32578 = G__32605;
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

var seq__32549 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32550 = null;
var count__32551 = (0);
var i__32552 = (0);
while(true){
if((i__32552 < count__32551)){
var role = cljs.core._nth.call(null,chunk__32550,i__32552);
var temp__5720__auto___32606__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___32606__$1)){
var spec_32607 = temp__5720__auto___32606__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32607));
} else {
}


var G__32608 = seq__32549;
var G__32609 = chunk__32550;
var G__32610 = count__32551;
var G__32611 = (i__32552 + (1));
seq__32549 = G__32608;
chunk__32550 = G__32609;
count__32551 = G__32610;
i__32552 = G__32611;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__32549);
if(temp__5720__auto____$1){
var seq__32549__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32549__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32549__$1);
var G__32612 = cljs.core.chunk_rest.call(null,seq__32549__$1);
var G__32613 = c__4550__auto__;
var G__32614 = cljs.core.count.call(null,c__4550__auto__);
var G__32615 = (0);
seq__32549 = G__32612;
chunk__32550 = G__32613;
count__32551 = G__32614;
i__32552 = G__32615;
continue;
} else {
var role = cljs.core.first.call(null,seq__32549__$1);
var temp__5720__auto___32616__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___32616__$2)){
var spec_32617 = temp__5720__auto___32616__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32617));
} else {
}


var G__32618 = cljs.core.next.call(null,seq__32549__$1);
var G__32619 = null;
var G__32620 = (0);
var G__32621 = (0);
seq__32549 = G__32618;
chunk__32550 = G__32619;
count__32551 = G__32620;
i__32552 = G__32621;
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
var G__32622 = cljs.core.conj.call(null,via,t);
var G__32623 = cljs.core.ex_cause.call(null,t);
via = G__32622;
t = G__32623;
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
var map__32626 = datafied_throwable;
var map__32626__$1 = (((((!((map__32626 == null))))?(((((map__32626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32626):map__32626);
var via = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32627 = cljs.core.last.call(null,via);
var map__32627__$1 = (((((!((map__32627 == null))))?(((((map__32627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32627):map__32627);
var type = cljs.core.get.call(null,map__32627__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__32627__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__32627__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32628 = data;
var map__32628__$1 = (((((!((map__32628 == null))))?(((((map__32628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32628):map__32628);
var problems = cljs.core.get.call(null,map__32628__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__32628__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__32628__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32629 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__32629__$1 = (((((!((map__32629 == null))))?(((((map__32629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32629):map__32629);
var top_data = map__32629__$1;
var source = cljs.core.get.call(null,map__32629__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__32634 = phase;
var G__32634__$1 = (((G__32634 instanceof cljs.core.Keyword))?G__32634.fqn:null);
switch (G__32634__$1) {
case "read-source":
var map__32635 = data;
var map__32635__$1 = (((((!((map__32635 == null))))?(((((map__32635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32635):map__32635);
var line = cljs.core.get.call(null,map__32635__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32635__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32637 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__32637__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32637,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32637);
var G__32637__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32637__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32637__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32637__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32637__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32638 = top_data;
var G__32638__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32638,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32638);
var G__32638__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32638__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32638__$1);
var G__32638__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32638__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32638__$2);
var G__32638__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32638__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32638__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32638__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32638__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32639 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32639,(0),null);
var method = cljs.core.nth.call(null,vec__32639,(1),null);
var file = cljs.core.nth.call(null,vec__32639,(2),null);
var line = cljs.core.nth.call(null,vec__32639,(3),null);
var G__32642 = top_data;
var G__32642__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__32642,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32642);
var G__32642__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__32642__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32642__$1);
var G__32642__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__32642__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32642__$2);
var G__32642__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32642__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32642__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32642__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32642__$4;
}

break;
case "execution":
var vec__32643 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32643,(0),null);
var method = cljs.core.nth.call(null,vec__32643,(1),null);
var file = cljs.core.nth.call(null,vec__32643,(2),null);
var line = cljs.core.nth.call(null,vec__32643,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__32643,source__$1,method,file,line,G__32634,G__32634__$1,map__32626,map__32626__$1,via,trace,phase,map__32627,map__32627__$1,type,message,data,map__32628,map__32628__$1,problems,fn,caller,map__32629,map__32629__$1,top_data,source){
return (function (p1__32625_SHARP_){
var or__4131__auto__ = (p1__32625_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__32625_SHARP_);
}
});})(vec__32643,source__$1,method,file,line,G__32634,G__32634__$1,map__32626,map__32626__$1,via,trace,phase,map__32627,map__32627__$1,type,message,data,map__32628,map__32628__$1,problems,fn,caller,map__32629,map__32629__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__32646 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32646__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__32646,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32646);
var G__32646__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32646__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32646__$1);
var G__32646__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__32646__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32646__$2);
var G__32646__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__32646__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32646__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32646__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32646__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32634__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32650){
var map__32651 = p__32650;
var map__32651__$1 = (((((!((map__32651 == null))))?(((((map__32651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32651):map__32651);
var triage_data = map__32651__$1;
var phase = cljs.core.get.call(null,map__32651__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__32651__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__32651__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32651__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__32651__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__32651__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__32651__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__32651__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__32653 = phase;
var G__32653__$1 = (((G__32653 instanceof cljs.core.Keyword))?G__32653.fqn:null);
switch (G__32653__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32654_32663 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32655_32664 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32656_32665 = true;
var _STAR_print_fn_STAR__temp_val__32657_32666 = ((function (_STAR_print_newline_STAR__orig_val__32654_32663,_STAR_print_fn_STAR__orig_val__32655_32664,_STAR_print_newline_STAR__temp_val__32656_32665,sb__4661__auto__,G__32653,G__32653__$1,loc,class_name,simple_class,cause_type,format,map__32651,map__32651__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__32654_32663,_STAR_print_fn_STAR__orig_val__32655_32664,_STAR_print_newline_STAR__temp_val__32656_32665,sb__4661__auto__,G__32653,G__32653__$1,loc,class_name,simple_class,cause_type,format,map__32651,map__32651__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32656_32665;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32657_32666;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__32654_32663,_STAR_print_fn_STAR__orig_val__32655_32664,_STAR_print_newline_STAR__temp_val__32656_32665,_STAR_print_fn_STAR__temp_val__32657_32666,sb__4661__auto__,G__32653,G__32653__$1,loc,class_name,simple_class,cause_type,format,map__32651,map__32651__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__32654_32663,_STAR_print_fn_STAR__orig_val__32655_32664,_STAR_print_newline_STAR__temp_val__32656_32665,_STAR_print_fn_STAR__temp_val__32657_32666,sb__4661__auto__,G__32653,G__32653__$1,loc,class_name,simple_class,cause_type,format,map__32651,map__32651__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__32648_SHARP_){
return cljs.core.dissoc.call(null,p1__32648_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__32654_32663,_STAR_print_fn_STAR__orig_val__32655_32664,_STAR_print_newline_STAR__temp_val__32656_32665,_STAR_print_fn_STAR__temp_val__32657_32666,sb__4661__auto__,G__32653,G__32653__$1,loc,class_name,simple_class,cause_type,format,map__32651,map__32651__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__32654_32663,_STAR_print_fn_STAR__orig_val__32655_32664,_STAR_print_newline_STAR__temp_val__32656_32665,_STAR_print_fn_STAR__temp_val__32657_32666,sb__4661__auto__,G__32653,G__32653__$1,loc,class_name,simple_class,cause_type,format,map__32651,map__32651__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32655_32664;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32654_32663;
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
var _STAR_print_newline_STAR__orig_val__32658_32667 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32659_32668 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32660_32669 = true;
var _STAR_print_fn_STAR__temp_val__32661_32670 = ((function (_STAR_print_newline_STAR__orig_val__32658_32667,_STAR_print_fn_STAR__orig_val__32659_32668,_STAR_print_newline_STAR__temp_val__32660_32669,sb__4661__auto__,G__32653,G__32653__$1,loc,class_name,simple_class,cause_type,format,map__32651,map__32651__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__32658_32667,_STAR_print_fn_STAR__orig_val__32659_32668,_STAR_print_newline_STAR__temp_val__32660_32669,sb__4661__auto__,G__32653,G__32653__$1,loc,class_name,simple_class,cause_type,format,map__32651,map__32651__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32660_32669;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32661_32670;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__32658_32667,_STAR_print_fn_STAR__orig_val__32659_32668,_STAR_print_newline_STAR__temp_val__32660_32669,_STAR_print_fn_STAR__temp_val__32661_32670,sb__4661__auto__,G__32653,G__32653__$1,loc,class_name,simple_class,cause_type,format,map__32651,map__32651__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__32658_32667,_STAR_print_fn_STAR__orig_val__32659_32668,_STAR_print_newline_STAR__temp_val__32660_32669,_STAR_print_fn_STAR__temp_val__32661_32670,sb__4661__auto__,G__32653,G__32653__$1,loc,class_name,simple_class,cause_type,format,map__32651,map__32651__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__32649_SHARP_){
return cljs.core.dissoc.call(null,p1__32649_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__32658_32667,_STAR_print_fn_STAR__orig_val__32659_32668,_STAR_print_newline_STAR__temp_val__32660_32669,_STAR_print_fn_STAR__temp_val__32661_32670,sb__4661__auto__,G__32653,G__32653__$1,loc,class_name,simple_class,cause_type,format,map__32651,map__32651__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__32658_32667,_STAR_print_fn_STAR__orig_val__32659_32668,_STAR_print_newline_STAR__temp_val__32660_32669,_STAR_print_fn_STAR__temp_val__32661_32670,sb__4661__auto__,G__32653,G__32653__$1,loc,class_name,simple_class,cause_type,format,map__32651,map__32651__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32659_32668;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32658_32667;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32653__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1576338726814
