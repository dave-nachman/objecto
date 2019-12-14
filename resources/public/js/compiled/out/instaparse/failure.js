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
var G__26823 = (line + (1));
var G__26824 = (1);
var G__26825 = (counter + (1));
line = G__26823;
col = G__26824;
counter = G__26825;
continue;
} else {
var G__26826 = line;
var G__26827 = (col + (1));
var G__26828 = (counter + (1));
line = G__26826;
col = G__26827;
counter = G__26828;
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
var G__26829 = cljs.core.next.call(null,chars);
var G__26830 = (n__$1 - (1));
chars = G__26829;
n__$1 = G__26830;
continue;
} else {
var G__26831 = cljs.core.next.call(null,chars);
var G__26832 = n__$1;
chars = G__26831;
n__$1 = G__26832;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__26833){
var map__26834 = p__26833;
var map__26834__$1 = (((((!((map__26834 == null))))?(((((map__26834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26834):map__26834);
var line = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__26836_26844 = cljs.core.seq.call(null,full_reasons);
var chunk__26837_26845 = null;
var count__26838_26846 = (0);
var i__26839_26847 = (0);
while(true){
if((i__26839_26847 < count__26838_26846)){
var r_26848 = cljs.core._nth.call(null,chunk__26837_26845,i__26839_26847);
instaparse.failure.print_reason.call(null,r_26848);

cljs.core.println.call(null," (followed by end-of-string)");


var G__26849 = seq__26836_26844;
var G__26850 = chunk__26837_26845;
var G__26851 = count__26838_26846;
var G__26852 = (i__26839_26847 + (1));
seq__26836_26844 = G__26849;
chunk__26837_26845 = G__26850;
count__26838_26846 = G__26851;
i__26839_26847 = G__26852;
continue;
} else {
var temp__5720__auto___26853 = cljs.core.seq.call(null,seq__26836_26844);
if(temp__5720__auto___26853){
var seq__26836_26854__$1 = temp__5720__auto___26853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26836_26854__$1)){
var c__4550__auto___26855 = cljs.core.chunk_first.call(null,seq__26836_26854__$1);
var G__26856 = cljs.core.chunk_rest.call(null,seq__26836_26854__$1);
var G__26857 = c__4550__auto___26855;
var G__26858 = cljs.core.count.call(null,c__4550__auto___26855);
var G__26859 = (0);
seq__26836_26844 = G__26856;
chunk__26837_26845 = G__26857;
count__26838_26846 = G__26858;
i__26839_26847 = G__26859;
continue;
} else {
var r_26860 = cljs.core.first.call(null,seq__26836_26854__$1);
instaparse.failure.print_reason.call(null,r_26860);

cljs.core.println.call(null," (followed by end-of-string)");


var G__26861 = cljs.core.next.call(null,seq__26836_26854__$1);
var G__26862 = null;
var G__26863 = (0);
var G__26864 = (0);
seq__26836_26844 = G__26861;
chunk__26837_26845 = G__26862;
count__26838_26846 = G__26863;
i__26839_26847 = G__26864;
continue;
}
} else {
}
}
break;
}

var seq__26840 = cljs.core.seq.call(null,partial_reasons);
var chunk__26841 = null;
var count__26842 = (0);
var i__26843 = (0);
while(true){
if((i__26843 < count__26842)){
var r = cljs.core._nth.call(null,chunk__26841,i__26843);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);


var G__26865 = seq__26840;
var G__26866 = chunk__26841;
var G__26867 = count__26842;
var G__26868 = (i__26843 + (1));
seq__26840 = G__26865;
chunk__26841 = G__26866;
count__26842 = G__26867;
i__26843 = G__26868;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26840);
if(temp__5720__auto__){
var seq__26840__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26840__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26840__$1);
var G__26869 = cljs.core.chunk_rest.call(null,seq__26840__$1);
var G__26870 = c__4550__auto__;
var G__26871 = cljs.core.count.call(null,c__4550__auto__);
var G__26872 = (0);
seq__26840 = G__26869;
chunk__26841 = G__26870;
count__26842 = G__26871;
i__26843 = G__26872;
continue;
} else {
var r = cljs.core.first.call(null,seq__26840__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);


var G__26873 = cljs.core.next.call(null,seq__26840__$1);
var G__26874 = null;
var G__26875 = (0);
var G__26876 = (0);
seq__26840 = G__26873;
chunk__26841 = G__26874;
count__26842 = G__26875;
i__26843 = G__26876;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map?rel=1576338711048
