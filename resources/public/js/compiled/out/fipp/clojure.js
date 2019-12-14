// Compiled by ClojureScript 1.10.520 {}
goog.provide('fipp.clojure');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('fipp.visit');
goog.require('fipp.edn');
fipp.clojure.block = (function fipp$clojure$block(nodes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),nodes)], null);
});
fipp.clojure.list_group = (function fipp$clojure$list_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27077 = arguments.length;
var i__4731__auto___27078 = (0);
while(true){
if((i__4731__auto___27078 < len__4730__auto___27077)){
args__4736__auto__.push((arguments[i__4731__auto___27078]));

var G__27079 = (i__4731__auto___27078 + (1));
i__4731__auto___27078 = G__27079;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",nodes,")"], null);
});

fipp.clojure.list_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq27076){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27076));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__27080){
var vec__27081 = p__27080;
var test = cljs.core.nth.call(null,vec__27081,(0),null);
var result = cljs.core.nth.call(null,vec__27081,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__27085){
var vec__27086 = p__27085;
var seq__27087 = cljs.core.seq.call(null,vec__27086);
var first__27088 = cljs.core.first.call(null,seq__27087);
var seq__27087__$1 = cljs.core.next.call(null,seq__27087);
var head = first__27088;
var first__27088__$1 = cljs.core.first.call(null,seq__27087__$1);
var seq__27087__$2 = cljs.core.next.call(null,seq__27087__$1);
var expr = first__27088__$1;
var more = seq__27087__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__27086,seq__27087,first__27088,seq__27087__$1,head,first__27088__$1,seq__27087__$2,expr,more){
return (function (p1__27084_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__27084_SHARP_);
});})(clauses,default$,vec__27086,seq__27087,first__27088,seq__27087__$1,head,first__27088__$1,seq__27087__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__27090){
var vec__27091 = p__27090;
var seq__27092 = cljs.core.seq.call(null,vec__27091);
var first__27093 = cljs.core.first.call(null,seq__27092);
var seq__27092__$1 = cljs.core.next.call(null,seq__27092);
var head = first__27093;
var more = seq__27092__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__27091,seq__27092,first__27093,seq__27092__$1,head,more){
return (function (p1__27089_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__27089_SHARP_);
});})(clauses,vec__27091,seq__27092,first__27093,seq__27092__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__27095){
var vec__27096 = p__27095;
var seq__27097 = cljs.core.seq.call(null,vec__27096);
var first__27098 = cljs.core.first.call(null,seq__27097);
var seq__27097__$1 = cljs.core.next.call(null,seq__27097);
var head = first__27098;
var first__27098__$1 = cljs.core.first.call(null,seq__27097__$1);
var seq__27097__$2 = cljs.core.next.call(null,seq__27097__$1);
var pred = first__27098__$1;
var first__27098__$2 = cljs.core.first.call(null,seq__27097__$2);
var seq__27097__$3 = cljs.core.next.call(null,seq__27097__$2);
var expr = first__27098__$2;
var more = seq__27097__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__27096,seq__27097,first__27098,seq__27097__$1,head,first__27098__$1,seq__27097__$2,pred,first__27098__$2,seq__27097__$3,expr,more){
return (function (p1__27094_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__27094_SHARP_);
});})(clauses,default$,vec__27096,seq__27097,first__27098,seq__27097__$1,head,first__27098__$1,seq__27097__$2,pred,first__27098__$2,seq__27097__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__27100){
var vec__27101 = p__27100;
var seq__27102 = cljs.core.seq.call(null,vec__27101);
var first__27103 = cljs.core.first.call(null,seq__27102);
var seq__27102__$1 = cljs.core.next.call(null,seq__27102);
var head = first__27103;
var stmts = seq__27102__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__27101,seq__27102,first__27103,seq__27102__$1,head,stmts){
return (function (p1__27099_SHARP_){
return fipp.visit.visit.call(null,p,p1__27099_SHARP_);
});})(vec__27101,seq__27102,first__27103,seq__27102__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__27105){
var vec__27106 = p__27105;
var seq__27107 = cljs.core.seq.call(null,vec__27106);
var first__27108 = cljs.core.first.call(null,seq__27107);
var seq__27107__$1 = cljs.core.next.call(null,seq__27107);
var head = first__27108;
var first__27108__$1 = cljs.core.first.call(null,seq__27107__$1);
var seq__27107__$2 = cljs.core.next.call(null,seq__27107__$1);
var test = first__27108__$1;
var more = seq__27107__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__27106,seq__27107,first__27108,seq__27107__$1,head,first__27108__$1,seq__27107__$2,test,more){
return (function (p1__27104_SHARP_){
return fipp.visit.visit.call(null,p,p1__27104_SHARP_);
});})(vec__27106,seq__27107,first__27108,seq__27107__$1,head,first__27108__$1,seq__27107__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__27110){
var vec__27111 = p__27110;
var seq__27112 = cljs.core.seq.call(null,vec__27111);
var first__27113 = cljs.core.first.call(null,seq__27112);
var seq__27112__$1 = cljs.core.next.call(null,seq__27112);
var params = first__27113;
var body = seq__27112__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__27111,seq__27112,first__27113,seq__27112__$1,params,body){
return (function (p1__27109_SHARP_){
return fipp.visit.visit.call(null,p,p1__27109_SHARP_);
});})(vec__27111,seq__27112,first__27113,seq__27112__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__27116){
var vec__27117 = p__27116;
var seq__27118 = cljs.core.seq.call(null,vec__27117);
var first__27119 = cljs.core.first.call(null,seq__27118);
var seq__27118__$1 = cljs.core.next.call(null,seq__27118);
var head = first__27119;
var first__27119__$1 = cljs.core.first.call(null,seq__27118__$1);
var seq__27118__$2 = cljs.core.next.call(null,seq__27118__$1);
var fn_name = first__27119__$1;
var more = seq__27118__$2;
var vec__27120 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__27120,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__27120,(1),null);
var vec__27123 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__27123,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__27123,(1),null);
var vec__27126 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__27126,(0),null);
var body = cljs.core.nth.call(null,vec__27126,(1),null);
var params_on_first_line_QMARK_ = (function (){var and__4120__auto__ = params;
if(cljs.core.truth_(and__4120__auto__)){
return (((docstring == null)) && ((attr_map == null)));
} else {
return and__4120__auto__;
}
})();
var params_after_attr_map_QMARK_ = (function (){var and__4120__auto__ = params;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,params_on_first_line_QMARK_);
} else {
return and__4120__auto__;
}
})();
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__27120,docstring,more__$1,vec__27123,attr_map,more__$2,vec__27126,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__27117,seq__27118,first__27119,seq__27118__$1,head,first__27119__$1,seq__27118__$2,fn_name,more){
return (function (p1__27114_SHARP_){
return fipp.visit.visit.call(null,p,p1__27114_SHARP_);
});})(vec__27120,docstring,more__$1,vec__27123,attr_map,more__$2,vec__27126,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__27117,seq__27118,first__27119,seq__27118__$1,head,first__27119__$1,seq__27118__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__27120,docstring,more__$1,vec__27123,attr_map,more__$2,vec__27126,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__27117,seq__27118,first__27119,seq__27118__$1,head,first__27119__$1,seq__27118__$2,fn_name,more){
return (function (p1__27115_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__27115_SHARP_);
});})(vec__27120,docstring,more__$1,vec__27123,attr_map,more__$2,vec__27126,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__27117,seq__27118,first__27119,seq__27118__$1,head,first__27119__$1,seq__27118__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__27131){
var vec__27132 = p__27131;
var seq__27133 = cljs.core.seq.call(null,vec__27132);
var first__27134 = cljs.core.first.call(null,seq__27133);
var seq__27133__$1 = cljs.core.next.call(null,seq__27133);
var head = first__27134;
var more = seq__27133__$1;
var vec__27135 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__27135,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__27135,(1),null);
var vec__27138 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__27138,(0),null);
var body = cljs.core.nth.call(null,vec__27138,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__27135,fn_name,more__$1,vec__27138,params,body,vec__27132,seq__27133,first__27134,seq__27133__$1,head,more){
return (function (p1__27129_SHARP_){
return fipp.visit.visit.call(null,p,p1__27129_SHARP_);
});})(vec__27135,fn_name,more__$1,vec__27138,params,body,vec__27132,seq__27133,first__27134,seq__27133__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__27135,fn_name,more__$1,vec__27138,params,body,vec__27132,seq__27133,first__27134,seq__27133__$1,head,more){
return (function (p1__27130_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__27130_SHARP_);
});})(vec__27135,fn_name,more__$1,vec__27138,params,body,vec__27132,seq__27133,first__27134,seq__27133__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__27144){
var vec__27145 = p__27144;
var _ = cljs.core.nth.call(null,vec__27145,(0),null);
var params = cljs.core.nth.call(null,vec__27145,(1),null);
var body = cljs.core.nth.call(null,vec__27145,(2),null);
var form = vec__27145;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__27148 = cljs.core.split_with.call(null,((function (vec__27145,_,params,body,form){
return (function (p1__27141_SHARP_){
return cljs.core.not_EQ_.call(null,p1__27141_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__27145,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__27148,(0),null);
var rests = cljs.core.nth.call(null,vec__27148,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__27148,inits,rests,vec__27145,_,params,body,form){
return (function (p1__27142_SHARP_){
return cljs.core.symbol.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__27142_SHARP_ + (1)))].join(''));
});})(vec__27148,inits,rests,vec__27145,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__27148,inits,rests,params_STAR_,body_STAR_,vec__27145,_,params,body,form){
return (function (p1__27143_SHARP_){
return fipp.visit.visit.call(null,p,p1__27143_SHARP_);
});})(vec__27148,inits,rests,params_STAR_,body_STAR_,vec__27145,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__27152){
var vec__27153 = p__27152;
var seq__27154 = cljs.core.seq.call(null,vec__27153);
var first__27155 = cljs.core.first.call(null,seq__27154);
var seq__27154__$1 = cljs.core.next.call(null,seq__27154);
var head = first__27155;
var clauses = seq__27154__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__27153,seq__27154,first__27155,seq__27154__$1,head,clauses){
return (function (p1__27151_SHARP_){
return fipp.visit.visit.call(null,p,p1__27151_SHARP_);
});})(vec__27153,seq__27154,first__27155,seq__27154__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__27157){
var vec__27158 = p__27157;
var seq__27159 = cljs.core.seq.call(null,vec__27158);
var first__27160 = cljs.core.first.call(null,seq__27159);
var seq__27159__$1 = cljs.core.next.call(null,seq__27159);
var head = first__27160;
var first__27160__$1 = cljs.core.first.call(null,seq__27159__$1);
var seq__27159__$2 = cljs.core.next.call(null,seq__27159__$1);
var ns_sym = first__27160__$1;
var more = seq__27159__$2;
var vec__27161 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__27161,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__27161,(1),null);
var vec__27164 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__27164,(0),null);
var specs = cljs.core.nth.call(null,vec__27164,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__27161,docstring,more__$1,vec__27164,attr_map,specs,vec__27158,seq__27159,first__27160,seq__27159__$1,head,first__27160__$1,seq__27159__$2,ns_sym,more){
return (function (p1__27156_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__27156_SHARP_);
});})(vec__27161,docstring,more__$1,vec__27164,attr_map,specs,vec__27158,seq__27159,first__27160,seq__27159__$1,head,first__27160__$1,seq__27159__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__27167){
var vec__27168 = p__27167;
var macro = cljs.core.nth.call(null,vec__27168,(0),null);
var arg = cljs.core.nth.call(null,vec__27168,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__27171 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__27171__$1 = (((G__27171 instanceof cljs.core.Keyword))?G__27171.fqn:null);
switch (G__27171__$1) {
case "deref":
return "@";

break;
case "quote":
return "'";

break;
case "unquote":
return "~";

break;
case "var":
return "#'";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27171__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4523__auto__ = (function fipp$clojure$pretty_bindings_$_iter__27173(s__27174){
return (new cljs.core.LazySeq(null,(function (){
var s__27174__$1 = s__27174;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27174__$1);
if(temp__5720__auto__){
var s__27174__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27174__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__27174__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__27176 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__27175 = (0);
while(true){
if((i__27175 < size__4522__auto__)){
var vec__27177 = cljs.core._nth.call(null,c__4521__auto__,i__27175);
var k = cljs.core.nth.call(null,vec__27177,(0),null);
var v = cljs.core.nth.call(null,vec__27177,(1),null);
cljs.core.chunk_append.call(null,b__27176,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__27183 = (i__27175 + (1));
i__27175 = G__27183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27176),fipp$clojure$pretty_bindings_$_iter__27173.call(null,cljs.core.chunk_rest.call(null,s__27174__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27176),null);
}
} else {
var vec__27180 = cljs.core.first.call(null,s__27174__$2);
var k = cljs.core.nth.call(null,vec__27180,(0),null);
var v = cljs.core.nth.call(null,vec__27180,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__27173.call(null,cljs.core.rest.call(null,s__27174__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.partition.call(null,(2),bvec));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),", "], null),kvps)], null),"]"], null);
});
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__27185){
var vec__27186 = p__27185;
var seq__27187 = cljs.core.seq.call(null,vec__27186);
var first__27188 = cljs.core.first.call(null,seq__27187);
var seq__27187__$1 = cljs.core.next.call(null,seq__27187);
var head = first__27188;
var first__27188__$1 = cljs.core.first.call(null,seq__27187__$1);
var seq__27187__$2 = cljs.core.next.call(null,seq__27187__$1);
var bvec = first__27188__$1;
var body = seq__27187__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__27186,seq__27187,first__27188,seq__27187__$1,head,first__27188__$1,seq__27187__$2,bvec,body){
return (function (p1__27184_SHARP_){
return fipp.visit.visit.call(null,p,p1__27184_SHARP_);
});})(vec__27186,seq__27187,first__27188,seq__27187__$1,head,first__27188__$1,seq__27187__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__27189_SHARP_){
return fipp.visit.visit.call(null,p,p1__27189_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__27190){
var vec__27191 = p__27190;
var seq__27192 = cljs.core.seq.call(null,vec__27191);
var first__27193 = cljs.core.first.call(null,seq__27192);
var seq__27192__$1 = cljs.core.next.call(null,seq__27192);
var head = first__27193;
var first__27193__$1 = cljs.core.first.call(null,seq__27192__$1);
var seq__27192__$2 = cljs.core.next.call(null,seq__27192__$1);
var fields = first__27193__$1;
var opts_PLUS_specs = seq__27192__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__27194){
var vec__27195 = p__27194;
var seq__27196 = cljs.core.seq.call(null,vec__27195);
var first__27197 = cljs.core.first.call(null,seq__27196);
var seq__27196__$1 = cljs.core.next.call(null,seq__27196);
var head = first__27197;
var opts_PLUS_specs = seq__27196__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function fipp$clojure$build_symbol_map_$_iter__27198(s__27199){
return (new cljs.core.LazySeq(null,(function (){
var s__27199__$1 = s__27199;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27199__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__27206 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__27206,(0),null);
var syms = cljs.core.nth.call(null,vec__27206,(1),null);
var iterys__4519__auto__ = ((function (s__27199__$1,vec__27206,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__27198_$_iter__27200(s__27201){
return (new cljs.core.LazySeq(null,((function (s__27199__$1,vec__27206,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__27201__$1 = s__27201;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__27201__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__27201__$1,s__27199__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__27206,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__27198_$_iter__27200_$_iter__27202(s__27203){
return (new cljs.core.LazySeq(null,((function (s__27201__$1,s__27199__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__27206,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__27203__$1 = s__27203;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__27203__$1);
if(temp__5720__auto____$2){
var s__27203__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27203__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__27203__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__27205 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__27204 = (0);
while(true){
if((i__27204 < size__4522__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4521__auto__,i__27204);
cljs.core.chunk_append.call(null,b__27205,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__27209 = (i__27204 + (1));
i__27204 = G__27209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27205),fipp$clojure$build_symbol_map_$_iter__27198_$_iter__27200_$_iter__27202.call(null,cljs.core.chunk_rest.call(null,s__27203__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27205),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__27203__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__27198_$_iter__27200_$_iter__27202.call(null,cljs.core.rest.call(null,s__27203__$2)));
}
} else {
return null;
}
break;
}
});})(s__27201__$1,s__27199__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__27206,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__27201__$1,s__27199__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__27206,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fipp$clojure$build_symbol_map_$_iter__27198_$_iter__27200.call(null,cljs.core.rest.call(null,s__27201__$1)));
} else {
var G__27210 = cljs.core.rest.call(null,s__27201__$1);
s__27201__$1 = G__27210;
continue;
}
} else {
return null;
}
break;
}
});})(s__27199__$1,vec__27206,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__27199__$1,vec__27206,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,syms));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fipp$clojure$build_symbol_map_$_iter__27198.call(null,cljs.core.rest.call(null,s__27199__$1)));
} else {
var G__27211 = cljs.core.rest.call(null,s__27199__$1);
s__27199__$1 = G__27211;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,dispatch);
})());
});
fipp.clojure.default_symbols = fipp.clojure.build_symbol_map.call(null,cljs.core.PersistentHashMap.fromArrays([fipp.clojure.pretty_fn_STAR_,fipp.clojure.pretty_condp,fipp.clojure.pretty_quote,fipp.clojure.pretty_cond,fipp.clojure.pretty_fn,fipp.clojure.pretty_arrow,fipp.clojure.pretty_reify,fipp.clojure.pretty_let,fipp.clojure.pretty_type,fipp.clojure.pretty_if,fipp.clojure.pretty_defn,fipp.clojure.pretty_ns,fipp.clojure.pretty_case],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condp","condp",1054325175,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"var","var",870848730,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond","cond",1606708055,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reify","reify",1885539699,null)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"loop*","loop*",615029416,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null)], null)]));
fipp.clojure.pprint = (function fipp$clojure$pprint(var_args){
var G__27213 = arguments.length;
switch (G__27213) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=clojure.js.map?rel=1576339901127
