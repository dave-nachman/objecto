// Compiled by ClojureScript 1.10.520 {:target :nodejs}
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
var G__24846 = (line + (1));
var G__24847 = (1);
var G__24848 = (counter + (1));
line = G__24846;
col = G__24847;
counter = G__24848;
continue;
} else {
var G__24849 = line;
var G__24850 = (col + (1));
var G__24851 = (counter + (1));
line = G__24849;
col = G__24850;
counter = G__24851;
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
var G__24852 = cljs.core.next.call(null,chars);
var G__24853 = (n__$1 - (1));
chars = G__24852;
n__$1 = G__24853;
continue;
} else {
var G__24854 = cljs.core.next.call(null,chars);
var G__24855 = n__$1;
chars = G__24854;
n__$1 = G__24855;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__24856){
var map__24857 = p__24856;
var map__24857__$1 = (((((!((map__24857 == null))))?(((((map__24857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24857):map__24857);
var line = cljs.core.get.call(null,map__24857__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24857__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__24857__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__24857__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__24859_24867 = cljs.core.seq.call(null,full_reasons);
var chunk__24860_24868 = null;
var count__24861_24869 = (0);
var i__24862_24870 = (0);
while(true){
if((i__24862_24870 < count__24861_24869)){
var r_24871 = cljs.core._nth.call(null,chunk__24860_24868,i__24862_24870);
instaparse.failure.print_reason.call(null,r_24871);

cljs.core.println.call(null," (followed by end-of-string)");


var G__24872 = seq__24859_24867;
var G__24873 = chunk__24860_24868;
var G__24874 = count__24861_24869;
var G__24875 = (i__24862_24870 + (1));
seq__24859_24867 = G__24872;
chunk__24860_24868 = G__24873;
count__24861_24869 = G__24874;
i__24862_24870 = G__24875;
continue;
} else {
var temp__5720__auto___24876 = cljs.core.seq.call(null,seq__24859_24867);
if(temp__5720__auto___24876){
var seq__24859_24877__$1 = temp__5720__auto___24876;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24859_24877__$1)){
var c__4550__auto___24878 = cljs.core.chunk_first.call(null,seq__24859_24877__$1);
var G__24879 = cljs.core.chunk_rest.call(null,seq__24859_24877__$1);
var G__24880 = c__4550__auto___24878;
var G__24881 = cljs.core.count.call(null,c__4550__auto___24878);
var G__24882 = (0);
seq__24859_24867 = G__24879;
chunk__24860_24868 = G__24880;
count__24861_24869 = G__24881;
i__24862_24870 = G__24882;
continue;
} else {
var r_24883 = cljs.core.first.call(null,seq__24859_24877__$1);
instaparse.failure.print_reason.call(null,r_24883);

cljs.core.println.call(null," (followed by end-of-string)");


var G__24884 = cljs.core.next.call(null,seq__24859_24877__$1);
var G__24885 = null;
var G__24886 = (0);
var G__24887 = (0);
seq__24859_24867 = G__24884;
chunk__24860_24868 = G__24885;
count__24861_24869 = G__24886;
i__24862_24870 = G__24887;
continue;
}
} else {
}
}
break;
}

var seq__24863 = cljs.core.seq.call(null,partial_reasons);
var chunk__24864 = null;
var count__24865 = (0);
var i__24866 = (0);
while(true){
if((i__24866 < count__24865)){
var r = cljs.core._nth.call(null,chunk__24864,i__24866);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);


var G__24888 = seq__24863;
var G__24889 = chunk__24864;
var G__24890 = count__24865;
var G__24891 = (i__24866 + (1));
seq__24863 = G__24888;
chunk__24864 = G__24889;
count__24865 = G__24890;
i__24866 = G__24891;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24863);
if(temp__5720__auto__){
var seq__24863__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24863__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24863__$1);
var G__24892 = cljs.core.chunk_rest.call(null,seq__24863__$1);
var G__24893 = c__4550__auto__;
var G__24894 = cljs.core.count.call(null,c__4550__auto__);
var G__24895 = (0);
seq__24863 = G__24892;
chunk__24864 = G__24893;
count__24865 = G__24894;
i__24866 = G__24895;
continue;
} else {
var r = cljs.core.first.call(null,seq__24863__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);


var G__24896 = cljs.core.next.call(null,seq__24863__$1);
var G__24897 = null;
var G__24898 = (0);
var G__24899 = (0);
seq__24863 = G__24896;
chunk__24864 = G__24897;
count__24865 = G__24898;
i__24866 = G__24899;
continue;
}
} else {
return null;
}
}
break;
}
});
