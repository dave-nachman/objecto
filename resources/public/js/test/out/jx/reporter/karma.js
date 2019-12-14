// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('jx.reporter.karma');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('clojure.data');
goog.require('fipp.clojure');
jx.reporter.karma.karma = cljs.core.volatile_BANG_.call(null,null);
jx.reporter.karma.karma_QMARK_ = (function jx$reporter$karma$karma_QMARK_(){
return (!((cljs.core.deref.call(null,jx.reporter.karma.karma) == null)));
});
jx.reporter.karma.karma_info_BANG_ = (function jx$reporter$karma$karma_info_BANG_(m){
if(jx.reporter.karma.karma_QMARK_.call(null)){
return cljs.core.deref.call(null,jx.reporter.karma.karma).info(cljs.core.clj__GT_js.call(null,m));
} else {
return null;
}
});
jx.reporter.karma.karma_result_BANG_ = (function jx$reporter$karma$karma_result_BANG_(m){
if(jx.reporter.karma.karma_QMARK_.call(null)){
return cljs.core.deref.call(null,jx.reporter.karma.karma).result(cljs.core.clj__GT_js.call(null,m));
} else {
return null;
}
});
jx.reporter.karma.coverage_result = (function jx$reporter$karma$coverage_result(){
return ({"coverage": (window["__coverage__"])});
});
jx.reporter.karma.karma_complete_BANG_ = (function jx$reporter$karma$karma_complete_BANG_(){
if(jx.reporter.karma.karma_QMARK_.call(null)){
return cljs.core.deref.call(null,jx.reporter.karma.karma).complete(jx.reporter.karma.coverage_result.call(null));
} else {
return null;
}
});
jx.reporter.karma.now = (function jx$reporter$karma$now(){
return (new Date()).getTime();
});
jx.reporter.karma.indent = (function jx$reporter$karma$indent(n,s){
var indentation = cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.repeat.call(null,n," "));
return clojure.string.replace.call(null,s,/\n/,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indentation)].join(''));
});
jx.reporter.karma.remove_last_new_line = (function jx$reporter$karma$remove_last_new_line(s){
return cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
});
jx.reporter.karma.format_fn = (function jx$reporter$karma$format_fn(indentation,p__28931){
var vec__28932 = p__28931;
var seq__28933 = cljs.core.seq.call(null,vec__28932);
var first__28934 = cljs.core.first.call(null,seq__28933);
var seq__28933__$1 = cljs.core.next.call(null,seq__28933);
var c = first__28934;
var q = seq__28933__$1;
var e = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28932,seq__28933,first__28934,seq__28933__$1,c,q){
return (function (p1__28930_SHARP_){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28939_28943 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28940_28944 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28941_28945 = true;
var _STAR_print_fn_STAR__temp_val__28942_28946 = ((function (_STAR_print_newline_STAR__orig_val__28939_28943,_STAR_print_fn_STAR__orig_val__28940_28944,_STAR_print_newline_STAR__temp_val__28941_28945,sb__4661__auto__,vec__28932,seq__28933,first__28934,seq__28933__$1,c,q){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28939_28943,_STAR_print_fn_STAR__orig_val__28940_28944,_STAR_print_newline_STAR__temp_val__28941_28945,sb__4661__auto__,vec__28932,seq__28933,first__28934,seq__28933__$1,c,q))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28941_28945;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28942_28946;

try{fipp.clojure.pprint.call(null,p1__28930_SHARP_);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28940_28944;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28939_28943;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});})(vec__28932,seq__28933,first__28934,seq__28933__$1,c,q))
,q)))].join('');
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(jx.reporter.karma.indent.call(null,(indentation + (2)),jx.reporter.karma.remove_last_new_line.call(null,e))),")"].join('');
});
jx.reporter.karma.format_diff = (function jx$reporter$karma$format_diff(indentation,assert,p__28947){
var vec__28948 = p__28947;
var seq__28949 = cljs.core.seq.call(null,vec__28948);
var first__28950 = cljs.core.first.call(null,seq__28949);
var seq__28949__$1 = cljs.core.next.call(null,seq__28949);
var c = first__28950;
var first__28950__$1 = cljs.core.first.call(null,seq__28949__$1);
var seq__28949__$2 = cljs.core.next.call(null,seq__28949__$1);
var a = first__28950__$1;
var first__28950__$2 = cljs.core.first.call(null,seq__28949__$2);
var seq__28949__$3 = cljs.core.next.call(null,seq__28949__$2);
var b = first__28950__$2;
var q = seq__28949__$3;
if(((cljs.core._EQ_.call(null,c,new cljs.core.Symbol(null,"=","=",-1501502141,null))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,assert),(3))) && ((q == null)))){
var format = ((function (vec__28948,seq__28949,first__28950,seq__28949__$1,c,first__28950__$1,seq__28949__$2,a,first__28950__$2,seq__28949__$3,b,q){
return (function (sign,value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sign)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(value)?jx.reporter.karma.indent.call(null,(indentation + (2)),jx.reporter.karma.remove_last_new_line.call(null,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28958_28962 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28959_28963 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28960_28964 = true;
var _STAR_print_fn_STAR__temp_val__28961_28965 = ((function (_STAR_print_newline_STAR__orig_val__28958_28962,_STAR_print_fn_STAR__orig_val__28959_28963,_STAR_print_newline_STAR__temp_val__28960_28964,sb__4661__auto__,vec__28948,seq__28949,first__28950,seq__28949__$1,c,first__28950__$1,seq__28949__$2,a,first__28950__$2,seq__28949__$3,b,q){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28958_28962,_STAR_print_fn_STAR__orig_val__28959_28963,_STAR_print_newline_STAR__temp_val__28960_28964,sb__4661__auto__,vec__28948,seq__28949,first__28950,seq__28949__$1,c,first__28950__$1,seq__28949__$2,a,first__28950__$2,seq__28949__$3,b,q))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28960_28964;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28961_28965;

try{fipp.clojure.pprint.call(null,value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28959_28963;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28958_28962;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})())):"\n"))].join('');
});})(vec__28948,seq__28949,first__28950,seq__28949__$1,c,first__28950__$1,seq__28949__$2,a,first__28950__$2,seq__28949__$3,b,q))
;
var vec__28951 = clojure.data.diff.call(null,a,b);
var removed = cljs.core.nth.call(null,vec__28951,(0),null);
var added = cljs.core.nth.call(null,vec__28951,(1),null);
return [format.call(null,"-",removed),format.call(null,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indentation," "))),"+"].join(''),added)].join('');
} else {
return null;
}
});
jx.reporter.karma.format_log = (function jx$reporter$karma$format_log(p__28966){
var map__28967 = p__28966;
var map__28967__$1 = (((((!((map__28967 == null))))?(((((map__28967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28967):map__28967);
var result = map__28967__$1;
var expected = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var message = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var indentation = cljs.core.count.call(null,"expected: ");
return ["FAIL in   ",cljs.test.testing_vars_str.call(null,result),"\n",((((cljs.core.seq_QMARK_.call(null,expected)) && (cljs.core.seq_QMARK_.call(null,actual))))?["expected: ",jx.reporter.karma.format_fn.call(null,indentation,expected),"\n","  actual: ",jx.reporter.karma.format_fn.call(null,indentation,cljs.core.second.call(null,actual)),"\n",(function (){var temp__5720__auto__ = jx.reporter.karma.format_diff.call(null,indentation,expected,cljs.core.second.call(null,actual));
if(cljs.core.truth_(temp__5720__auto__)){
var diff = temp__5720__auto__;
return ["    diff: ",diff,"\n"].join('');
} else {
return null;
}
})()].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)," failed with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual),"\n"].join('')),(cljs.core.truth_(message)?[" message: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(jx.reporter.karma.indent.call(null,indentation,message)),"\n"].join(''):null)].join('');
});
jx.reporter.karma.test_var_result = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
jx.reporter.karma.test_var_time_start = cljs.core.volatile_BANG_.call(null,jx.reporter.karma.now.call(null));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.Keyword(null,"karma","karma",1375588493),(function (_){
return null;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100)], null),(function (_){
cljs.core.vreset_BANG_.call(null,jx.reporter.karma.test_var_time_start,jx.reporter.karma.now.call(null));

return cljs.core.vreset_BANG_.call(null,jx.reporter.karma.test_var_result,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545)], null),(function (m){
var var_meta = cljs.core.meta.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(m));
var result = new cljs.core.PersistentArrayMap(null, 6, ["suite",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var_meta)], null),"description",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var_meta),"success",(cljs.core.count.call(null,cljs.core.deref.call(null,jx.reporter.karma.test_var_result)) === (0)),"skipped",null,"time",(jx.reporter.karma.now.call(null) - cljs.core.deref.call(null,jx.reporter.karma.test_var_time_start)),"log",cljs.core.map.call(null,jx.reporter.karma.format_log,cljs.core.deref.call(null,jx.reporter.karma.test_var_result))], null);
return jx.reporter.karma.karma_result_BANG_.call(null,result);
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

return cljs.core._vreset_BANG_.call(null,jx.reporter.karma.test_var_result,cljs.core.conj.call(null,cljs.core._deref.call(null,jx.reporter.karma.test_var_result),m));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

return cljs.core._vreset_BANG_.call(null,jx.reporter.karma.test_var_result,cljs.core.conj.call(null,cljs.core._deref.call(null,jx.reporter.karma.test_var_result),m));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (_){
return jx.reporter.karma.karma_complete_BANG_.call(null);
}));
jx.reporter.karma.start = (function jx$reporter$karma$start(tc,total_count){
cljs.core.vreset_BANG_.call(null,jx.reporter.karma.karma,tc);

return jx.reporter.karma.karma_info_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),total_count], null));
});
