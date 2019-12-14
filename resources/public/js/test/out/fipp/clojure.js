// Compiled by ClojureScript 1.10.520 {:target :nodejs}
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
var len__4730__auto___28676 = arguments.length;
var i__4731__auto___28677 = (0);
while(true){
if((i__4731__auto___28677 < len__4730__auto___28676)){
args__4736__auto__.push((arguments[i__4731__auto___28677]));

var G__28678 = (i__4731__auto___28677 + (1));
i__4731__auto___28677 = G__28678;
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
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq28675){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28675));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__28679){
var vec__28680 = p__28679;
var test = cljs.core.nth.call(null,vec__28680,(0),null);
var result = cljs.core.nth.call(null,vec__28680,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__28684){
var vec__28685 = p__28684;
var seq__28686 = cljs.core.seq.call(null,vec__28685);
var first__28687 = cljs.core.first.call(null,seq__28686);
var seq__28686__$1 = cljs.core.next.call(null,seq__28686);
var head = first__28687;
var first__28687__$1 = cljs.core.first.call(null,seq__28686__$1);
var seq__28686__$2 = cljs.core.next.call(null,seq__28686__$1);
var expr = first__28687__$1;
var more = seq__28686__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__28685,seq__28686,first__28687,seq__28686__$1,head,first__28687__$1,seq__28686__$2,expr,more){
return (function (p1__28683_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__28683_SHARP_);
});})(clauses,default$,vec__28685,seq__28686,first__28687,seq__28686__$1,head,first__28687__$1,seq__28686__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__28689){
var vec__28690 = p__28689;
var seq__28691 = cljs.core.seq.call(null,vec__28690);
var first__28692 = cljs.core.first.call(null,seq__28691);
var seq__28691__$1 = cljs.core.next.call(null,seq__28691);
var head = first__28692;
var more = seq__28691__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__28690,seq__28691,first__28692,seq__28691__$1,head,more){
return (function (p1__28688_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__28688_SHARP_);
});})(clauses,vec__28690,seq__28691,first__28692,seq__28691__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__28694){
var vec__28695 = p__28694;
var seq__28696 = cljs.core.seq.call(null,vec__28695);
var first__28697 = cljs.core.first.call(null,seq__28696);
var seq__28696__$1 = cljs.core.next.call(null,seq__28696);
var head = first__28697;
var first__28697__$1 = cljs.core.first.call(null,seq__28696__$1);
var seq__28696__$2 = cljs.core.next.call(null,seq__28696__$1);
var pred = first__28697__$1;
var first__28697__$2 = cljs.core.first.call(null,seq__28696__$2);
var seq__28696__$3 = cljs.core.next.call(null,seq__28696__$2);
var expr = first__28697__$2;
var more = seq__28696__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__28695,seq__28696,first__28697,seq__28696__$1,head,first__28697__$1,seq__28696__$2,pred,first__28697__$2,seq__28696__$3,expr,more){
return (function (p1__28693_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__28693_SHARP_);
});})(clauses,default$,vec__28695,seq__28696,first__28697,seq__28696__$1,head,first__28697__$1,seq__28696__$2,pred,first__28697__$2,seq__28696__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__28699){
var vec__28700 = p__28699;
var seq__28701 = cljs.core.seq.call(null,vec__28700);
var first__28702 = cljs.core.first.call(null,seq__28701);
var seq__28701__$1 = cljs.core.next.call(null,seq__28701);
var head = first__28702;
var stmts = seq__28701__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__28700,seq__28701,first__28702,seq__28701__$1,head,stmts){
return (function (p1__28698_SHARP_){
return fipp.visit.visit.call(null,p,p1__28698_SHARP_);
});})(vec__28700,seq__28701,first__28702,seq__28701__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__28704){
var vec__28705 = p__28704;
var seq__28706 = cljs.core.seq.call(null,vec__28705);
var first__28707 = cljs.core.first.call(null,seq__28706);
var seq__28706__$1 = cljs.core.next.call(null,seq__28706);
var head = first__28707;
var first__28707__$1 = cljs.core.first.call(null,seq__28706__$1);
var seq__28706__$2 = cljs.core.next.call(null,seq__28706__$1);
var test = first__28707__$1;
var more = seq__28706__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__28705,seq__28706,first__28707,seq__28706__$1,head,first__28707__$1,seq__28706__$2,test,more){
return (function (p1__28703_SHARP_){
return fipp.visit.visit.call(null,p,p1__28703_SHARP_);
});})(vec__28705,seq__28706,first__28707,seq__28706__$1,head,first__28707__$1,seq__28706__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__28709){
var vec__28710 = p__28709;
var seq__28711 = cljs.core.seq.call(null,vec__28710);
var first__28712 = cljs.core.first.call(null,seq__28711);
var seq__28711__$1 = cljs.core.next.call(null,seq__28711);
var params = first__28712;
var body = seq__28711__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__28710,seq__28711,first__28712,seq__28711__$1,params,body){
return (function (p1__28708_SHARP_){
return fipp.visit.visit.call(null,p,p1__28708_SHARP_);
});})(vec__28710,seq__28711,first__28712,seq__28711__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__28715){
var vec__28716 = p__28715;
var seq__28717 = cljs.core.seq.call(null,vec__28716);
var first__28718 = cljs.core.first.call(null,seq__28717);
var seq__28717__$1 = cljs.core.next.call(null,seq__28717);
var head = first__28718;
var first__28718__$1 = cljs.core.first.call(null,seq__28717__$1);
var seq__28717__$2 = cljs.core.next.call(null,seq__28717__$1);
var fn_name = first__28718__$1;
var more = seq__28717__$2;
var vec__28719 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__28719,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__28719,(1),null);
var vec__28722 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__28722,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__28722,(1),null);
var vec__28725 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__28725,(0),null);
var body = cljs.core.nth.call(null,vec__28725,(1),null);
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
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__28719,docstring,more__$1,vec__28722,attr_map,more__$2,vec__28725,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__28716,seq__28717,first__28718,seq__28717__$1,head,first__28718__$1,seq__28717__$2,fn_name,more){
return (function (p1__28713_SHARP_){
return fipp.visit.visit.call(null,p,p1__28713_SHARP_);
});})(vec__28719,docstring,more__$1,vec__28722,attr_map,more__$2,vec__28725,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__28716,seq__28717,first__28718,seq__28717__$1,head,first__28718__$1,seq__28717__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__28719,docstring,more__$1,vec__28722,attr_map,more__$2,vec__28725,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__28716,seq__28717,first__28718,seq__28717__$1,head,first__28718__$1,seq__28717__$2,fn_name,more){
return (function (p1__28714_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__28714_SHARP_);
});})(vec__28719,docstring,more__$1,vec__28722,attr_map,more__$2,vec__28725,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__28716,seq__28717,first__28718,seq__28717__$1,head,first__28718__$1,seq__28717__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__28730){
var vec__28731 = p__28730;
var seq__28732 = cljs.core.seq.call(null,vec__28731);
var first__28733 = cljs.core.first.call(null,seq__28732);
var seq__28732__$1 = cljs.core.next.call(null,seq__28732);
var head = first__28733;
var more = seq__28732__$1;
var vec__28734 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__28734,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__28734,(1),null);
var vec__28737 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__28737,(0),null);
var body = cljs.core.nth.call(null,vec__28737,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__28734,fn_name,more__$1,vec__28737,params,body,vec__28731,seq__28732,first__28733,seq__28732__$1,head,more){
return (function (p1__28728_SHARP_){
return fipp.visit.visit.call(null,p,p1__28728_SHARP_);
});})(vec__28734,fn_name,more__$1,vec__28737,params,body,vec__28731,seq__28732,first__28733,seq__28732__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__28734,fn_name,more__$1,vec__28737,params,body,vec__28731,seq__28732,first__28733,seq__28732__$1,head,more){
return (function (p1__28729_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__28729_SHARP_);
});})(vec__28734,fn_name,more__$1,vec__28737,params,body,vec__28731,seq__28732,first__28733,seq__28732__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__28743){
var vec__28744 = p__28743;
var _ = cljs.core.nth.call(null,vec__28744,(0),null);
var params = cljs.core.nth.call(null,vec__28744,(1),null);
var body = cljs.core.nth.call(null,vec__28744,(2),null);
var form = vec__28744;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__28747 = cljs.core.split_with.call(null,((function (vec__28744,_,params,body,form){
return (function (p1__28740_SHARP_){
return cljs.core.not_EQ_.call(null,p1__28740_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__28744,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__28747,(0),null);
var rests = cljs.core.nth.call(null,vec__28747,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__28747,inits,rests,vec__28744,_,params,body,form){
return (function (p1__28741_SHARP_){
return cljs.core.symbol.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__28741_SHARP_ + (1)))].join(''));
});})(vec__28747,inits,rests,vec__28744,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__28747,inits,rests,params_STAR_,body_STAR_,vec__28744,_,params,body,form){
return (function (p1__28742_SHARP_){
return fipp.visit.visit.call(null,p,p1__28742_SHARP_);
});})(vec__28747,inits,rests,params_STAR_,body_STAR_,vec__28744,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__28751){
var vec__28752 = p__28751;
var seq__28753 = cljs.core.seq.call(null,vec__28752);
var first__28754 = cljs.core.first.call(null,seq__28753);
var seq__28753__$1 = cljs.core.next.call(null,seq__28753);
var head = first__28754;
var clauses = seq__28753__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__28752,seq__28753,first__28754,seq__28753__$1,head,clauses){
return (function (p1__28750_SHARP_){
return fipp.visit.visit.call(null,p,p1__28750_SHARP_);
});})(vec__28752,seq__28753,first__28754,seq__28753__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__28756){
var vec__28757 = p__28756;
var seq__28758 = cljs.core.seq.call(null,vec__28757);
var first__28759 = cljs.core.first.call(null,seq__28758);
var seq__28758__$1 = cljs.core.next.call(null,seq__28758);
var head = first__28759;
var first__28759__$1 = cljs.core.first.call(null,seq__28758__$1);
var seq__28758__$2 = cljs.core.next.call(null,seq__28758__$1);
var ns_sym = first__28759__$1;
var more = seq__28758__$2;
var vec__28760 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__28760,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__28760,(1),null);
var vec__28763 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__28763,(0),null);
var specs = cljs.core.nth.call(null,vec__28763,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__28760,docstring,more__$1,vec__28763,attr_map,specs,vec__28757,seq__28758,first__28759,seq__28758__$1,head,first__28759__$1,seq__28758__$2,ns_sym,more){
return (function (p1__28755_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__28755_SHARP_);
});})(vec__28760,docstring,more__$1,vec__28763,attr_map,specs,vec__28757,seq__28758,first__28759,seq__28758__$1,head,first__28759__$1,seq__28758__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__28766){
var vec__28767 = p__28766;
var macro = cljs.core.nth.call(null,vec__28767,(0),null);
var arg = cljs.core.nth.call(null,vec__28767,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__28770 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__28770__$1 = (((G__28770 instanceof cljs.core.Keyword))?G__28770.fqn:null);
switch (G__28770__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28770__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4523__auto__ = (function fipp$clojure$pretty_bindings_$_iter__28772(s__28773){
return (new cljs.core.LazySeq(null,(function (){
var s__28773__$1 = s__28773;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28773__$1);
if(temp__5720__auto__){
var s__28773__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28773__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__28773__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__28775 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__28774 = (0);
while(true){
if((i__28774 < size__4522__auto__)){
var vec__28776 = cljs.core._nth.call(null,c__4521__auto__,i__28774);
var k = cljs.core.nth.call(null,vec__28776,(0),null);
var v = cljs.core.nth.call(null,vec__28776,(1),null);
cljs.core.chunk_append.call(null,b__28775,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__28782 = (i__28774 + (1));
i__28774 = G__28782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28775),fipp$clojure$pretty_bindings_$_iter__28772.call(null,cljs.core.chunk_rest.call(null,s__28773__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28775),null);
}
} else {
var vec__28779 = cljs.core.first.call(null,s__28773__$2);
var k = cljs.core.nth.call(null,vec__28779,(0),null);
var v = cljs.core.nth.call(null,vec__28779,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__28772.call(null,cljs.core.rest.call(null,s__28773__$2)));
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
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__28784){
var vec__28785 = p__28784;
var seq__28786 = cljs.core.seq.call(null,vec__28785);
var first__28787 = cljs.core.first.call(null,seq__28786);
var seq__28786__$1 = cljs.core.next.call(null,seq__28786);
var head = first__28787;
var first__28787__$1 = cljs.core.first.call(null,seq__28786__$1);
var seq__28786__$2 = cljs.core.next.call(null,seq__28786__$1);
var bvec = first__28787__$1;
var body = seq__28786__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__28785,seq__28786,first__28787,seq__28786__$1,head,first__28787__$1,seq__28786__$2,bvec,body){
return (function (p1__28783_SHARP_){
return fipp.visit.visit.call(null,p,p1__28783_SHARP_);
});})(vec__28785,seq__28786,first__28787,seq__28786__$1,head,first__28787__$1,seq__28786__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__28788_SHARP_){
return fipp.visit.visit.call(null,p,p1__28788_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__28789){
var vec__28790 = p__28789;
var seq__28791 = cljs.core.seq.call(null,vec__28790);
var first__28792 = cljs.core.first.call(null,seq__28791);
var seq__28791__$1 = cljs.core.next.call(null,seq__28791);
var head = first__28792;
var first__28792__$1 = cljs.core.first.call(null,seq__28791__$1);
var seq__28791__$2 = cljs.core.next.call(null,seq__28791__$1);
var fields = first__28792__$1;
var opts_PLUS_specs = seq__28791__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__28793){
var vec__28794 = p__28793;
var seq__28795 = cljs.core.seq.call(null,vec__28794);
var first__28796 = cljs.core.first.call(null,seq__28795);
var seq__28795__$1 = cljs.core.next.call(null,seq__28795);
var head = first__28796;
var opts_PLUS_specs = seq__28795__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function fipp$clojure$build_symbol_map_$_iter__28797(s__28798){
return (new cljs.core.LazySeq(null,(function (){
var s__28798__$1 = s__28798;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28798__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__28805 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__28805,(0),null);
var syms = cljs.core.nth.call(null,vec__28805,(1),null);
var iterys__4519__auto__ = ((function (s__28798__$1,vec__28805,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__28797_$_iter__28799(s__28800){
return (new cljs.core.LazySeq(null,((function (s__28798__$1,vec__28805,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__28800__$1 = s__28800;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__28800__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__28800__$1,s__28798__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__28805,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__28797_$_iter__28799_$_iter__28801(s__28802){
return (new cljs.core.LazySeq(null,((function (s__28800__$1,s__28798__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__28805,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__28802__$1 = s__28802;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__28802__$1);
if(temp__5720__auto____$2){
var s__28802__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28802__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__28802__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__28804 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__28803 = (0);
while(true){
if((i__28803 < size__4522__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4521__auto__,i__28803);
cljs.core.chunk_append.call(null,b__28804,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__28808 = (i__28803 + (1));
i__28803 = G__28808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28804),fipp$clojure$build_symbol_map_$_iter__28797_$_iter__28799_$_iter__28801.call(null,cljs.core.chunk_rest.call(null,s__28802__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28804),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__28802__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__28797_$_iter__28799_$_iter__28801.call(null,cljs.core.rest.call(null,s__28802__$2)));
}
} else {
return null;
}
break;
}
});})(s__28800__$1,s__28798__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__28805,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__28800__$1,s__28798__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__28805,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fipp$clojure$build_symbol_map_$_iter__28797_$_iter__28799.call(null,cljs.core.rest.call(null,s__28800__$1)));
} else {
var G__28809 = cljs.core.rest.call(null,s__28800__$1);
s__28800__$1 = G__28809;
continue;
}
} else {
return null;
}
break;
}
});})(s__28798__$1,vec__28805,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__28798__$1,vec__28805,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,syms));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fipp$clojure$build_symbol_map_$_iter__28797.call(null,cljs.core.rest.call(null,s__28798__$1)));
} else {
var G__28810 = cljs.core.rest.call(null,s__28798__$1);
s__28798__$1 = G__28810;
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
var G__28812 = arguments.length;
switch (G__28812) {
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

