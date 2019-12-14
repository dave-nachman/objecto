// Compiled by ClojureScript 1.10.520 {}
goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.call(null,index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.call(null,"\n",cljs.core.get.call(null,text,counter))){
var G__26821 = (line + (1));
var G__26822 = (1);
var G__26823 = (counter + (1));
line = G__26821;
col = G__26822;
counter = G__26823;
continue;
} else {
var G__26824 = line;
var G__26825 = (col + (1));
var G__26826 = (counter + (1));
line = G__26824;
col = G__26825;
counter = G__26826;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq.call(null,clojure.string.replace.call(null,text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_.call(null,chars)){
return "";
} else {
if(cljs.core._EQ_.call(null,n__$1,(1))){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_while.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.call(null,"\n",cljs.core.first.call(null,chars))){
var G__26827 = cljs.core.next.call(null,chars);
var G__26828 = (n__$1 - (1));
chars = G__26827;
n__$1 = G__26828;
continue;
} else {
var G__26829 = cljs.core.next.call(null,chars);
var G__26830 = n__$1;
chars = G__26829;
n__$1 = G__26830;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.repeat.call(null,(n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.call(null,failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line.call(null,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.call(null,"NOT ");

return cljs.core.print.call(null,new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.call(null,instaparse.print.char_range__GT_str.call(null,r));
} else {
if((r instanceof RegExp)){
return cljs.core.print.call(null,instaparse.print.regexp__GT_str.call(null,r));
} else {
return cljs.core.pr.call(null,r);

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__26831){
var map__26832 = p__26831;
var map__26832__$1 = (((((!((map__26832 == null))))?(((((map__26832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26832):map__26832);
var line = cljs.core.get.call(null,map__26832__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__26832__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__26832__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__26832__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.call(null,["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join(''));

cljs.core.println.call(null,text);

cljs.core.println.call(null,instaparse.failure.marker.call(null,column));

var full_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count.call(null,full_reasons) + cljs.core.count.call(null,partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.call(null,(1),total)){
cljs.core.println.call(null,"Expected:");
} else {
cljs.core.println.call(null,"Expected one of:");

}
}

var seq__26834_26842 = cljs.core.seq.call(null,full_reasons);
var chunk__26835_26843 = null;
var count__26836_26844 = (0);
var i__26837_26845 = (0);
while(true){
if((i__26837_26845 < count__26836_26844)){
var r_26846 = cljs.core._nth.call(null,chunk__26835_26843,i__26837_26845);
instaparse.failure.print_reason.call(null,r_26846);

cljs.core.println.call(null," (followed by end-of-string)");


var G__26847 = seq__26834_26842;
var G__26848 = chunk__26835_26843;
var G__26849 = count__26836_26844;
var G__26850 = (i__26837_26845 + (1));
seq__26834_26842 = G__26847;
chunk__26835_26843 = G__26848;
count__26836_26844 = G__26849;
i__26837_26845 = G__26850;
continue;
} else {
var temp__5720__auto___26851 = cljs.core.seq.call(null,seq__26834_26842);
if(temp__5720__auto___26851){
var seq__26834_26852__$1 = temp__5720__auto___26851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26834_26852__$1)){
var c__4550__auto___26853 = cljs.core.chunk_first.call(null,seq__26834_26852__$1);
var G__26854 = cljs.core.chunk_rest.call(null,seq__26834_26852__$1);
var G__26855 = c__4550__auto___26853;
var G__26856 = cljs.core.count.call(null,c__4550__auto___26853);
var G__26857 = (0);
seq__26834_26842 = G__26854;
chunk__26835_26843 = G__26855;
count__26836_26844 = G__26856;
i__26837_26845 = G__26857;
continue;
} else {
var r_26858 = cljs.core.first.call(null,seq__26834_26852__$1);
instaparse.failure.print_reason.call(null,r_26858);

cljs.core.println.call(null," (followed by end-of-string)");


var G__26859 = cljs.core.next.call(null,seq__26834_26852__$1);
var G__26860 = null;
var G__26861 = (0);
var G__26862 = (0);
seq__26834_26842 = G__26859;
chunk__26835_26843 = G__26860;
count__26836_26844 = G__26861;
i__26837_26845 = G__26862;
continue;
}
} else {
}
}
break;
}

var seq__26838 = cljs.core.seq.call(null,partial_reasons);
var chunk__26839 = null;
var count__26840 = (0);
var i__26841 = (0);
while(true){
if((i__26841 < count__26840)){
var r = cljs.core._nth.call(null,chunk__26839,i__26841);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);


var G__26863 = seq__26838;
var G__26864 = chunk__26839;
var G__26865 = count__26840;
var G__26866 = (i__26841 + (1));
seq__26838 = G__26863;
chunk__26839 = G__26864;
count__26840 = G__26865;
i__26841 = G__26866;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26838);
if(temp__5720__auto__){
var seq__26838__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26838__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26838__$1);
var G__26867 = cljs.core.chunk_rest.call(null,seq__26838__$1);
var G__26868 = c__4550__auto__;
var G__26869 = cljs.core.count.call(null,c__4550__auto__);
var G__26870 = (0);
seq__26838 = G__26867;
chunk__26839 = G__26868;
count__26840 = G__26869;
i__26841 = G__26870;
continue;
} else {
var r = cljs.core.first.call(null,seq__26838__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);


var G__26871 = cljs.core.next.call(null,seq__26838__$1);
var G__26872 = null;
var G__26873 = (0);
var G__26874 = (0);
seq__26838 = G__26871;
chunk__26839 = G__26872;
count__26840 = G__26873;
i__26841 = G__26874;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map?rel=1576361228944
