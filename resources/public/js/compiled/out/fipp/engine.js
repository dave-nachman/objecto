// Compiled by ClojureScript 1.10.520 {}
goog.provide('fipp.engine');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fipp.deque');
if((typeof fipp !== 'undefined') && (typeof fipp.engine !== 'undefined') && (typeof fipp.engine.serialize_node !== 'undefined')){
} else {
fipp.engine.serialize_node = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fipp.engine","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
fipp.engine.serialize = (function fipp$engine$serialize(doc){
if((doc == null)){
return null;
} else {
if(cljs.core.seq_QMARK_.call(null,doc)){
return cljs.core.mapcat.call(null,fipp.engine.serialize,doc);
} else {
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),doc], null)], null);
} else {
if((doc instanceof cljs.core.Keyword)){
return fipp.engine.serialize_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null));
} else {
if(cljs.core.vector_QMARK_.call(null,doc)){
return fipp.engine.serialize_node.call(null,doc);
} else {
throw cljs.core.ex_info.call(null,"Unexpected class for doc node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),doc], null));

}
}
}
}
}
});
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__26959){
var vec__26960 = p__26959;
var seq__26961 = cljs.core.seq.call(null,vec__26960);
var first__26962 = cljs.core.first.call(null,seq__26961);
var seq__26961__$1 = cljs.core.next.call(null,seq__26961);
var _ = first__26962;
var text = seq__26961__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__26963){
var vec__26964 = p__26963;
var seq__26965 = cljs.core.seq.call(null,vec__26964);
var first__26966 = cljs.core.first.call(null,seq__26965);
var seq__26965__$1 = cljs.core.next.call(null,seq__26965);
var _ = first__26966;
var text = seq__26965__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__26967){
var vec__26968 = p__26967;
var _ = cljs.core.nth.call(null,vec__26968,(0),null);
var text = cljs.core.nth.call(null,vec__26968,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__26971){
var vec__26972 = p__26971;
var seq__26973 = cljs.core.seq.call(null,vec__26972);
var first__26974 = cljs.core.first.call(null,seq__26973);
var seq__26973__$1 = cljs.core.next.call(null,seq__26973);
var _ = first__26974;
var children = seq__26973__$1;
return fipp.engine.serialize.call(null,children);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"line","line",212345235),(function (p__26975){
var vec__26976 = p__26975;
var _ = cljs.core.nth.call(null,vec__26976,(0),null);
var inline = cljs.core.nth.call(null,vec__26976,(1),null);
var terminate = cljs.core.nth.call(null,vec__26976,(2),null);
var inline__$1 = (function (){var or__4131__auto__ = inline;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return " ";
}
})();
var terminate__$1 = (function (){var or__4131__auto__ = terminate;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})();
if(typeof inline__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? inline)"));
}

if(typeof terminate__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? terminate)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"inline","inline",1399884222),inline__$1,new cljs.core.Keyword(null,"terminate","terminate",1256003496),terminate__$1], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"break","break",126570225),(function() { 
var G__26979__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__26979 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__26980__i = 0, G__26980__a = new Array(arguments.length -  0);
while (G__26980__i < G__26980__a.length) {G__26980__a[G__26980__i] = arguments[G__26980__i + 0]; ++G__26980__i;}
  _ = new cljs.core.IndexedSeq(G__26980__a,0,null);
} 
return G__26979__delegate.call(this,_);};
G__26979.cljs$lang$maxFixedArity = 0;
G__26979.cljs$lang$applyTo = (function (arglist__26981){
var _ = cljs.core.seq(arglist__26981);
return G__26979__delegate(_);
});
G__26979.cljs$core$IFn$_invoke$arity$variadic = G__26979__delegate;
return G__26979;
})()
);
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"group","group",582596132),(function (p__26982){
var vec__26983 = p__26982;
var seq__26984 = cljs.core.seq.call(null,vec__26983);
var first__26985 = cljs.core.first.call(null,seq__26984);
var seq__26984__$1 = cljs.core.next.call(null,seq__26984);
var _ = first__26985;
var children = seq__26984__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__26986){
var vec__26987 = p__26986;
var seq__26988 = cljs.core.seq.call(null,vec__26987);
var first__26989 = cljs.core.first.call(null,seq__26988);
var seq__26988__$1 = cljs.core.next.call(null,seq__26988);
var _ = first__26989;
var args = seq__26988__$1;
var vec__26990 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(2),args));
var seq__26991 = cljs.core.seq.call(null,vec__26990);
var first__26992 = cljs.core.first.call(null,seq__26991);
var seq__26991__$1 = cljs.core.next.call(null,seq__26991);
var offset = first__26992;
var children = seq__26991__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__26993){
var vec__26994 = p__26993;
var seq__26995 = cljs.core.seq.call(null,vec__26994);
var first__26996 = cljs.core.first.call(null,seq__26995);
var seq__26995__$1 = cljs.core.next.call(null,seq__26995);
var _ = first__26996;
var args = seq__26995__$1;
var vec__26997 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(0),args));
var seq__26998 = cljs.core.seq.call(null,vec__26997);
var first__26999 = cljs.core.first.call(null,seq__26998);
var seq__26998__$1 = cljs.core.next.call(null,seq__26998);
var offset = first__26999;
var children = seq__26998__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
/**
 * A transducer which annotates the right-side of nodes assuming a
 *   hypothetical single-line formatting of the document. Groups and indentation
 *   directives are temporarily assumed to be zero-width. These values are used
 *   by subsequent passes to produce the final layout.
 */
fipp.engine.annotate_rights = (function fipp$engine$annotate_rights(rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
return ((function (pos){
return (function() {
var G__27001 = null;
var G__27001__0 = (function (){
return rf.call(null);
});
var G__27001__1 = (function (res){
return rf.call(null,res);
});
var G__27001__2 = (function (res,node){
var delta = (function (){var G__27000 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node);
var G__27000__$1 = (((G__27000 instanceof cljs.core.Keyword))?G__27000.fqn:null);
switch (G__27000__$1) {
case "text":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node));

break;
case "escaped":
return (1);

break;
default:
return (0);

}
})();
var p = cljs.core._vreset_BANG_.call(null,pos,(cljs.core._deref.call(null,pos) + delta));
return rf.call(null,res,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"right","right",-452581833),p));
});
G__27001 = function(res,node){
switch(arguments.length){
case 0:
return G__27001__0.call(this);
case 1:
return G__27001__1.call(this,res);
case 2:
return G__27001__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27001.cljs$core$IFn$_invoke$arity$0 = G__27001__0;
G__27001.cljs$core$IFn$_invoke$arity$1 = G__27001__1;
G__27001.cljs$core$IFn$_invoke$arity$2 = G__27001__2;
return G__27001;
})()
;})(pos))
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27006 = arguments.length;
var i__4731__auto___27007 = (0);
while(true){
if((i__4731__auto___27007 < len__4730__auto___27006)){
args__4736__auto__.push((arguments[i__4731__auto___27007]));

var G__27008 = (i__4731__auto___27007 + (1));
i__4731__auto___27007 = G__27008;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
return fipp.deque.conjr.call(null,cljs.core.pop.call(null,deque),cljs.core.apply.call(null,f,cljs.core.peek.call(null,deque),args));
});

fipp.engine.update_right.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fipp.engine.update_right.cljs$lang$applyTo = (function (seq27003){
var G__27004 = cljs.core.first.call(null,seq27003);
var seq27003__$1 = cljs.core.next.call(null,seq27003);
var G__27005 = cljs.core.first.call(null,seq27003__$1);
var seq27003__$2 = cljs.core.next.call(null,seq27003__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27004,G__27005,seq27003__$2);
});

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__27009){
var map__27010 = p__27009;
var map__27010__$1 = (((((!((map__27010 == null))))?(((((map__27010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27010):map__27010);
var options = map__27010__$1;
var width = cljs.core.get.call(null,map__27010__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__27010,map__27010__$1,options,width){
return (function (rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
var bufs = cljs.core.volatile_BANG_.call(null,fipp.deque.empty);
return ((function (pos,bufs,map__27010,map__27010__$1,options,width){
return (function() {
var G__27015 = null;
var G__27015__0 = (function (){
return rf.call(null);
});
var G__27015__1 = (function (res){
return rf.call(null,res);
});
var G__27015__2 = (function (res,p__27012){
var map__27013 = p__27012;
var map__27013__$1 = (((((!((map__27013 == null))))?(((((map__27013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27013):map__27013);
var node = map__27013__$1;
var op = cljs.core.get.call(null,map__27013__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__27013__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var buffers = cljs.core.deref.call(null,bufs);
if(cljs.core.empty_QMARK_.call(null,buffers)){
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319))){
var position_STAR_ = (right + width);
var buffer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null);
cljs.core.vreset_BANG_.call(null,pos,position_STAR_);

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.create.call(null,buffer));

return res;
} else {
return rf.call(null,res,node);
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"end","end",-268185958))){
var buffer = cljs.core.peek.call(null,buffers);
var buffers_STAR_ = cljs.core.pop.call(null,buffers);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),right], null);
var nodes = fipp.deque.conjlr.call(null,begin,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer),node);
if(cljs.core.empty_QMARK_.call(null,buffers_STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return cljs.core.reduce.call(null,rf,res,nodes);
} else {
if(cljs.core.vector_QMARK_.call(null,buffers_STAR_)){
} else {
throw (new Error("Assert failed: (vector? buffers*)"));
}

if(cljs.core.vector_QMARK_.call(null,nodes)){
} else {
throw (new Error("Assert failed: (vector? nodes)"));
}

cljs.core.vreset_BANG_.call(null,bufs,fipp.engine.update_right.call(null,buffers_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.concat,nodes));

return res;
}
} else {
var buffers_STAR_ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319)))?fipp.deque.conjr.call(null,buffers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(right + width),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null)):fipp.engine.update_right.call(null,buffers,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.conjr,node));
var res__$1 = res;
while(true){
if((((right <= cljs.core.deref.call(null,pos))) && ((cljs.core.count.call(null,buffers_STAR_) <= width)))){
cljs.core.vreset_BANG_.call(null,bufs,buffers_STAR_);

return res__$1;
} else {
var buffer = cljs.core.first.call(null,buffers_STAR_);
var buffers_STAR__STAR_ = fipp.deque.popl.call(null,buffers_STAR_);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"too-far","too-far",85800617)], null);
var res_STAR_ = rf.call(null,res__$1,begin);
var res_STAR___$1 = cljs.core.reduce.call(null,rf,res_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer));
if(cljs.core.empty_QMARK_.call(null,buffers_STAR__STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return res_STAR___$1;
} else {
cljs.core.vreset_BANG_.call(null,pos,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,buffers_STAR__STAR_)));

var G__27016 = buffers_STAR__STAR_;
var G__27017 = res_STAR___$1;
buffers_STAR_ = G__27016;
res__$1 = G__27017;
continue;
}
}
break;
}
}
}
});
G__27015 = function(res,p__27012){
switch(arguments.length){
case 0:
return G__27015__0.call(this);
case 1:
return G__27015__1.call(this,res);
case 2:
return G__27015__2.call(this,res,p__27012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27015.cljs$core$IFn$_invoke$arity$0 = G__27015__0;
G__27015.cljs$core$IFn$_invoke$arity$1 = G__27015__1;
G__27015.cljs$core$IFn$_invoke$arity$2 = G__27015__2;
return G__27015;
})()
;})(pos,bufs,map__27010,map__27010__$1,options,width))
});
;})(map__27010,map__27010__$1,options,width))
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__27018){
var map__27019 = p__27018;
var map__27019__$1 = (((((!((map__27019 == null))))?(((((map__27019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27019):map__27019);
var options = map__27019__$1;
var width = cljs.core.get.call(null,map__27019__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__27019,map__27019__$1,options,width){
return (function (rf){
var fits = cljs.core.volatile_BANG_.call(null,(0));
var length = cljs.core.volatile_BANG_.call(null,width);
var tab_stops = cljs.core.volatile_BANG_.call(null,cljs.core.list((0)));
var column = cljs.core.volatile_BANG_.call(null,(0));
return ((function (fits,length,tab_stops,column,map__27019,map__27019__$1,options,width){
return (function() {
var G__27025 = null;
var G__27025__0 = (function (){
return rf.call(null);
});
var G__27025__1 = (function (res){
return rf.call(null,res);
});
var G__27025__2 = (function (res,p__27021){
var map__27022 = p__27021;
var map__27022__$1 = (((((!((map__27022 == null))))?(((((map__27022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27022):map__27022);
var node = map__27022__$1;
var op = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var indent = cljs.core.peek.call(null,cljs.core.deref.call(null,tab_stops));
var G__27024 = op;
var G__27024__$1 = (((G__27024 instanceof cljs.core.Keyword))?G__27024.fqn:null);
switch (G__27024__$1) {
case "text":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,text)));

return rf.call(null,res_STAR_,text);

break;
case "escaped":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + (1)));

return rf.call(null,res_STAR_,text);

break;
case "pass":
return rf.call(null,res,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
if((cljs.core.deref.call(null,fits) === (0))){
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminate","terminate",1256003496).cljs$core$IFn$_invoke$arity$1(node)),"\n"].join(''));
} else {
var inline = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,inline)));

return rf.call(null,res,inline);
}

break;
case "break":
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,"\n");

break;
case "nest":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(indent + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "align":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(cljs.core.deref.call(null,column) + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "outdent":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.pop.call(null,cljs.core._deref.call(null,tab_stops)));

return res;

break;
case "begin":
cljs.core.vreset_BANG_.call(null,fits,(((cljs.core.deref.call(null,fits) > (0)))?(cljs.core.deref.call(null,fits) + (1)):((cljs.core._EQ_.call(null,right,new cljs.core.Keyword(null,"too-far","too-far",85800617)))?(0):(((right <= cljs.core.deref.call(null,length)))?(1):(0)
))));

return res;

break;
case "end":
cljs.core.vreset_BANG_.call(null,fits,(function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (cljs.core.deref.call(null,fits) - (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());

return res;

break;
default:
throw cljs.core.ex_info.call(null,"Unexpected node op",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));

}
});
G__27025 = function(res,p__27021){
switch(arguments.length){
case 0:
return G__27025__0.call(this);
case 1:
return G__27025__1.call(this,res);
case 2:
return G__27025__2.call(this,res,p__27021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27025.cljs$core$IFn$_invoke$arity$0 = G__27025__0;
G__27025.cljs$core$IFn$_invoke$arity$1 = G__27025__1;
G__27025.cljs$core$IFn$_invoke$arity$2 = G__27025__2;
return G__27025;
})()
;})(fits,length,tab_stops,column,map__27019,map__27019__$1,options,width))
});
;})(map__27019,map__27019__$1,options,width))
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(document,options){
var options_27027__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),options);
cljs.core.run_BANG_.call(null,cljs.core.print,cljs.core.eduction.call(null,fipp.engine.annotate_rights,fipp.engine.annotate_begins.call(null,options_27027__$1),fipp.engine.format_nodes.call(null,options_27027__$1),fipp.engine.serialize.call(null,document)));

return cljs.core.println.call(null);
});

//# sourceMappingURL=engine.js.map?rel=1576339900305
