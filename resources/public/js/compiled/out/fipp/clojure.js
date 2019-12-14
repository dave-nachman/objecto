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
var len__4730__auto___30790 = arguments.length;
var i__4731__auto___30791 = (0);
while(true){
if((i__4731__auto___30791 < len__4730__auto___30790)){
args__4736__auto__.push((arguments[i__4731__auto___30791]));

var G__30792 = (i__4731__auto___30791 + (1));
i__4731__auto___30791 = G__30792;
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
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq30789){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30789));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__30793){
var vec__30794 = p__30793;
var test = cljs.core.nth.call(null,vec__30794,(0),null);
var result = cljs.core.nth.call(null,vec__30794,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__30798){
var vec__30799 = p__30798;
var seq__30800 = cljs.core.seq.call(null,vec__30799);
var first__30801 = cljs.core.first.call(null,seq__30800);
var seq__30800__$1 = cljs.core.next.call(null,seq__30800);
var head = first__30801;
var first__30801__$1 = cljs.core.first.call(null,seq__30800__$1);
var seq__30800__$2 = cljs.core.next.call(null,seq__30800__$1);
var expr = first__30801__$1;
var more = seq__30800__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__30799,seq__30800,first__30801,seq__30800__$1,head,first__30801__$1,seq__30800__$2,expr,more){
return (function (p1__30797_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__30797_SHARP_);
});})(clauses,default$,vec__30799,seq__30800,first__30801,seq__30800__$1,head,first__30801__$1,seq__30800__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__30803){
var vec__30804 = p__30803;
var seq__30805 = cljs.core.seq.call(null,vec__30804);
var first__30806 = cljs.core.first.call(null,seq__30805);
var seq__30805__$1 = cljs.core.next.call(null,seq__30805);
var head = first__30806;
var more = seq__30805__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__30804,seq__30805,first__30806,seq__30805__$1,head,more){
return (function (p1__30802_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__30802_SHARP_);
});})(clauses,vec__30804,seq__30805,first__30806,seq__30805__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__30808){
var vec__30809 = p__30808;
var seq__30810 = cljs.core.seq.call(null,vec__30809);
var first__30811 = cljs.core.first.call(null,seq__30810);
var seq__30810__$1 = cljs.core.next.call(null,seq__30810);
var head = first__30811;
var first__30811__$1 = cljs.core.first.call(null,seq__30810__$1);
var seq__30810__$2 = cljs.core.next.call(null,seq__30810__$1);
var pred = first__30811__$1;
var first__30811__$2 = cljs.core.first.call(null,seq__30810__$2);
var seq__30810__$3 = cljs.core.next.call(null,seq__30810__$2);
var expr = first__30811__$2;
var more = seq__30810__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__30809,seq__30810,first__30811,seq__30810__$1,head,first__30811__$1,seq__30810__$2,pred,first__30811__$2,seq__30810__$3,expr,more){
return (function (p1__30807_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__30807_SHARP_);
});})(clauses,default$,vec__30809,seq__30810,first__30811,seq__30810__$1,head,first__30811__$1,seq__30810__$2,pred,first__30811__$2,seq__30810__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__30813){
var vec__30814 = p__30813;
var seq__30815 = cljs.core.seq.call(null,vec__30814);
var first__30816 = cljs.core.first.call(null,seq__30815);
var seq__30815__$1 = cljs.core.next.call(null,seq__30815);
var head = first__30816;
var stmts = seq__30815__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__30814,seq__30815,first__30816,seq__30815__$1,head,stmts){
return (function (p1__30812_SHARP_){
return fipp.visit.visit.call(null,p,p1__30812_SHARP_);
});})(vec__30814,seq__30815,first__30816,seq__30815__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__30818){
var vec__30819 = p__30818;
var seq__30820 = cljs.core.seq.call(null,vec__30819);
var first__30821 = cljs.core.first.call(null,seq__30820);
var seq__30820__$1 = cljs.core.next.call(null,seq__30820);
var head = first__30821;
var first__30821__$1 = cljs.core.first.call(null,seq__30820__$1);
var seq__30820__$2 = cljs.core.next.call(null,seq__30820__$1);
var test = first__30821__$1;
var more = seq__30820__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__30819,seq__30820,first__30821,seq__30820__$1,head,first__30821__$1,seq__30820__$2,test,more){
return (function (p1__30817_SHARP_){
return fipp.visit.visit.call(null,p,p1__30817_SHARP_);
});})(vec__30819,seq__30820,first__30821,seq__30820__$1,head,first__30821__$1,seq__30820__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__30823){
var vec__30824 = p__30823;
var seq__30825 = cljs.core.seq.call(null,vec__30824);
var first__30826 = cljs.core.first.call(null,seq__30825);
var seq__30825__$1 = cljs.core.next.call(null,seq__30825);
var params = first__30826;
var body = seq__30825__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__30824,seq__30825,first__30826,seq__30825__$1,params,body){
return (function (p1__30822_SHARP_){
return fipp.visit.visit.call(null,p,p1__30822_SHARP_);
});})(vec__30824,seq__30825,first__30826,seq__30825__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__30829){
var vec__30830 = p__30829;
var seq__30831 = cljs.core.seq.call(null,vec__30830);
var first__30832 = cljs.core.first.call(null,seq__30831);
var seq__30831__$1 = cljs.core.next.call(null,seq__30831);
var head = first__30832;
var first__30832__$1 = cljs.core.first.call(null,seq__30831__$1);
var seq__30831__$2 = cljs.core.next.call(null,seq__30831__$1);
var fn_name = first__30832__$1;
var more = seq__30831__$2;
var vec__30833 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__30833,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__30833,(1),null);
var vec__30836 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__30836,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__30836,(1),null);
var vec__30839 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__30839,(0),null);
var body = cljs.core.nth.call(null,vec__30839,(1),null);
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
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__30833,docstring,more__$1,vec__30836,attr_map,more__$2,vec__30839,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__30830,seq__30831,first__30832,seq__30831__$1,head,first__30832__$1,seq__30831__$2,fn_name,more){
return (function (p1__30827_SHARP_){
return fipp.visit.visit.call(null,p,p1__30827_SHARP_);
});})(vec__30833,docstring,more__$1,vec__30836,attr_map,more__$2,vec__30839,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__30830,seq__30831,first__30832,seq__30831__$1,head,first__30832__$1,seq__30831__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__30833,docstring,more__$1,vec__30836,attr_map,more__$2,vec__30839,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__30830,seq__30831,first__30832,seq__30831__$1,head,first__30832__$1,seq__30831__$2,fn_name,more){
return (function (p1__30828_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__30828_SHARP_);
});})(vec__30833,docstring,more__$1,vec__30836,attr_map,more__$2,vec__30839,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__30830,seq__30831,first__30832,seq__30831__$1,head,first__30832__$1,seq__30831__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__30844){
var vec__30845 = p__30844;
var seq__30846 = cljs.core.seq.call(null,vec__30845);
var first__30847 = cljs.core.first.call(null,seq__30846);
var seq__30846__$1 = cljs.core.next.call(null,seq__30846);
var head = first__30847;
var more = seq__30846__$1;
var vec__30848 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__30848,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__30848,(1),null);
var vec__30851 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__30851,(0),null);
var body = cljs.core.nth.call(null,vec__30851,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__30848,fn_name,more__$1,vec__30851,params,body,vec__30845,seq__30846,first__30847,seq__30846__$1,head,more){
return (function (p1__30842_SHARP_){
return fipp.visit.visit.call(null,p,p1__30842_SHARP_);
});})(vec__30848,fn_name,more__$1,vec__30851,params,body,vec__30845,seq__30846,first__30847,seq__30846__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__30848,fn_name,more__$1,vec__30851,params,body,vec__30845,seq__30846,first__30847,seq__30846__$1,head,more){
return (function (p1__30843_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__30843_SHARP_);
});})(vec__30848,fn_name,more__$1,vec__30851,params,body,vec__30845,seq__30846,first__30847,seq__30846__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__30857){
var vec__30858 = p__30857;
var _ = cljs.core.nth.call(null,vec__30858,(0),null);
var params = cljs.core.nth.call(null,vec__30858,(1),null);
var body = cljs.core.nth.call(null,vec__30858,(2),null);
var form = vec__30858;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__30861 = cljs.core.split_with.call(null,((function (vec__30858,_,params,body,form){
return (function (p1__30854_SHARP_){
return cljs.core.not_EQ_.call(null,p1__30854_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__30858,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__30861,(0),null);
var rests = cljs.core.nth.call(null,vec__30861,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__30861,inits,rests,vec__30858,_,params,body,form){
return (function (p1__30855_SHARP_){
return cljs.core.symbol.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__30855_SHARP_ + (1)))].join(''));
});})(vec__30861,inits,rests,vec__30858,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__30861,inits,rests,params_STAR_,body_STAR_,vec__30858,_,params,body,form){
return (function (p1__30856_SHARP_){
return fipp.visit.visit.call(null,p,p1__30856_SHARP_);
});})(vec__30861,inits,rests,params_STAR_,body_STAR_,vec__30858,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__30865){
var vec__30866 = p__30865;
var seq__30867 = cljs.core.seq.call(null,vec__30866);
var first__30868 = cljs.core.first.call(null,seq__30867);
var seq__30867__$1 = cljs.core.next.call(null,seq__30867);
var head = first__30868;
var clauses = seq__30867__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__30866,seq__30867,first__30868,seq__30867__$1,head,clauses){
return (function (p1__30864_SHARP_){
return fipp.visit.visit.call(null,p,p1__30864_SHARP_);
});})(vec__30866,seq__30867,first__30868,seq__30867__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__30870){
var vec__30871 = p__30870;
var seq__30872 = cljs.core.seq.call(null,vec__30871);
var first__30873 = cljs.core.first.call(null,seq__30872);
var seq__30872__$1 = cljs.core.next.call(null,seq__30872);
var head = first__30873;
var first__30873__$1 = cljs.core.first.call(null,seq__30872__$1);
var seq__30872__$2 = cljs.core.next.call(null,seq__30872__$1);
var ns_sym = first__30873__$1;
var more = seq__30872__$2;
var vec__30874 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__30874,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__30874,(1),null);
var vec__30877 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__30877,(0),null);
var specs = cljs.core.nth.call(null,vec__30877,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__30874,docstring,more__$1,vec__30877,attr_map,specs,vec__30871,seq__30872,first__30873,seq__30872__$1,head,first__30873__$1,seq__30872__$2,ns_sym,more){
return (function (p1__30869_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__30869_SHARP_);
});})(vec__30874,docstring,more__$1,vec__30877,attr_map,specs,vec__30871,seq__30872,first__30873,seq__30872__$1,head,first__30873__$1,seq__30872__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__30880){
var vec__30881 = p__30880;
var macro = cljs.core.nth.call(null,vec__30881,(0),null);
var arg = cljs.core.nth.call(null,vec__30881,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__30884 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__30884__$1 = (((G__30884 instanceof cljs.core.Keyword))?G__30884.fqn:null);
switch (G__30884__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30884__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4523__auto__ = (function fipp$clojure$pretty_bindings_$_iter__30886(s__30887){
return (new cljs.core.LazySeq(null,(function (){
var s__30887__$1 = s__30887;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30887__$1);
if(temp__5720__auto__){
var s__30887__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30887__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30887__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30889 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30888 = (0);
while(true){
if((i__30888 < size__4522__auto__)){
var vec__30890 = cljs.core._nth.call(null,c__4521__auto__,i__30888);
var k = cljs.core.nth.call(null,vec__30890,(0),null);
var v = cljs.core.nth.call(null,vec__30890,(1),null);
cljs.core.chunk_append.call(null,b__30889,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__30896 = (i__30888 + (1));
i__30888 = G__30896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30889),fipp$clojure$pretty_bindings_$_iter__30886.call(null,cljs.core.chunk_rest.call(null,s__30887__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30889),null);
}
} else {
var vec__30893 = cljs.core.first.call(null,s__30887__$2);
var k = cljs.core.nth.call(null,vec__30893,(0),null);
var v = cljs.core.nth.call(null,vec__30893,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__30886.call(null,cljs.core.rest.call(null,s__30887__$2)));
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
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__30898){
var vec__30899 = p__30898;
var seq__30900 = cljs.core.seq.call(null,vec__30899);
var first__30901 = cljs.core.first.call(null,seq__30900);
var seq__30900__$1 = cljs.core.next.call(null,seq__30900);
var head = first__30901;
var first__30901__$1 = cljs.core.first.call(null,seq__30900__$1);
var seq__30900__$2 = cljs.core.next.call(null,seq__30900__$1);
var bvec = first__30901__$1;
var body = seq__30900__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__30899,seq__30900,first__30901,seq__30900__$1,head,first__30901__$1,seq__30900__$2,bvec,body){
return (function (p1__30897_SHARP_){
return fipp.visit.visit.call(null,p,p1__30897_SHARP_);
});})(vec__30899,seq__30900,first__30901,seq__30900__$1,head,first__30901__$1,seq__30900__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__30902_SHARP_){
return fipp.visit.visit.call(null,p,p1__30902_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__30903){
var vec__30904 = p__30903;
var seq__30905 = cljs.core.seq.call(null,vec__30904);
var first__30906 = cljs.core.first.call(null,seq__30905);
var seq__30905__$1 = cljs.core.next.call(null,seq__30905);
var head = first__30906;
var first__30906__$1 = cljs.core.first.call(null,seq__30905__$1);
var seq__30905__$2 = cljs.core.next.call(null,seq__30905__$1);
var fields = first__30906__$1;
var opts_PLUS_specs = seq__30905__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__30907){
var vec__30908 = p__30907;
var seq__30909 = cljs.core.seq.call(null,vec__30908);
var first__30910 = cljs.core.first.call(null,seq__30909);
var seq__30909__$1 = cljs.core.next.call(null,seq__30909);
var head = first__30910;
var opts_PLUS_specs = seq__30909__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function fipp$clojure$build_symbol_map_$_iter__30911(s__30912){
return (new cljs.core.LazySeq(null,(function (){
var s__30912__$1 = s__30912;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30912__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__30919 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__30919,(0),null);
var syms = cljs.core.nth.call(null,vec__30919,(1),null);
var iterys__4519__auto__ = ((function (s__30912__$1,vec__30919,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__30911_$_iter__30913(s__30914){
return (new cljs.core.LazySeq(null,((function (s__30912__$1,vec__30919,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__30914__$1 = s__30914;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__30914__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__30914__$1,s__30912__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__30919,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__30911_$_iter__30913_$_iter__30915(s__30916){
return (new cljs.core.LazySeq(null,((function (s__30914__$1,s__30912__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__30919,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__30916__$1 = s__30916;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__30916__$1);
if(temp__5720__auto____$2){
var s__30916__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30916__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30916__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30918 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30917 = (0);
while(true){
if((i__30917 < size__4522__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4521__auto__,i__30917);
cljs.core.chunk_append.call(null,b__30918,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__30922 = (i__30917 + (1));
i__30917 = G__30922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30918),fipp$clojure$build_symbol_map_$_iter__30911_$_iter__30913_$_iter__30915.call(null,cljs.core.chunk_rest.call(null,s__30916__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30918),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__30916__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__30911_$_iter__30913_$_iter__30915.call(null,cljs.core.rest.call(null,s__30916__$2)));
}
} else {
return null;
}
break;
}
});})(s__30914__$1,s__30912__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__30919,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__30914__$1,s__30912__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__30919,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fipp$clojure$build_symbol_map_$_iter__30911_$_iter__30913.call(null,cljs.core.rest.call(null,s__30914__$1)));
} else {
var G__30923 = cljs.core.rest.call(null,s__30914__$1);
s__30914__$1 = G__30923;
continue;
}
} else {
return null;
}
break;
}
});})(s__30912__$1,vec__30919,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__30912__$1,vec__30919,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,syms));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fipp$clojure$build_symbol_map_$_iter__30911.call(null,cljs.core.rest.call(null,s__30912__$1)));
} else {
var G__30924 = cljs.core.rest.call(null,s__30912__$1);
s__30912__$1 = G__30924;
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
var G__30926 = arguments.length;
switch (G__30926) {
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


//# sourceMappingURL=clojure.js.map?rel=1576361237421
