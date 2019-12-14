// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e38938){if((e38938 instanceof Error)){
var e = e38938;
return "Error: Unable to stringify";
} else {
throw e38938;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38941 = arguments.length;
switch (G__38941) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38939_SHARP_){
if(typeof p1__38939_SHARP_ === 'string'){
return p1__38939_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38939_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38944 = arguments.length;
var i__4731__auto___38945 = (0);
while(true){
if((i__4731__auto___38945 < len__4730__auto___38944)){
args__4736__auto__.push((arguments[i__4731__auto___38945]));

var G__38946 = (i__4731__auto___38945 + (1));
i__4731__auto___38945 = G__38946;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38943){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38943));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38948 = arguments.length;
var i__4731__auto___38949 = (0);
while(true){
if((i__4731__auto___38949 < len__4730__auto___38948)){
args__4736__auto__.push((arguments[i__4731__auto___38949]));

var G__38950 = (i__4731__auto___38949 + (1));
i__4731__auto___38949 = G__38950;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38947){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38947));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38951){
var map__38952 = p__38951;
var map__38952__$1 = (((((!((map__38952 == null))))?(((((map__38952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38952):map__38952);
var message = cljs.core.get.call(null,map__38952__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38952__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__35055__auto___39031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___39031,ch){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___39031,ch){
return (function (state_39003){
var state_val_39004 = (state_39003[(1)]);
if((state_val_39004 === (7))){
var inst_38999 = (state_39003[(2)]);
var state_39003__$1 = state_39003;
var statearr_39005_39032 = state_39003__$1;
(statearr_39005_39032[(2)] = inst_38999);

(statearr_39005_39032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (1))){
var state_39003__$1 = state_39003;
var statearr_39006_39033 = state_39003__$1;
(statearr_39006_39033[(2)] = null);

(statearr_39006_39033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (4))){
var inst_38956 = (state_39003[(7)]);
var inst_38956__$1 = (state_39003[(2)]);
var state_39003__$1 = (function (){var statearr_39007 = state_39003;
(statearr_39007[(7)] = inst_38956__$1);

return statearr_39007;
})();
if(cljs.core.truth_(inst_38956__$1)){
var statearr_39008_39034 = state_39003__$1;
(statearr_39008_39034[(1)] = (5));

} else {
var statearr_39009_39035 = state_39003__$1;
(statearr_39009_39035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (15))){
var inst_38963 = (state_39003[(8)]);
var inst_38978 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38963);
var inst_38979 = cljs.core.first.call(null,inst_38978);
var inst_38980 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38979);
var inst_38981 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38980)].join('');
var inst_38982 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38981);
var state_39003__$1 = state_39003;
var statearr_39010_39036 = state_39003__$1;
(statearr_39010_39036[(2)] = inst_38982);

(statearr_39010_39036[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (13))){
var inst_38987 = (state_39003[(2)]);
var state_39003__$1 = state_39003;
var statearr_39011_39037 = state_39003__$1;
(statearr_39011_39037[(2)] = inst_38987);

(statearr_39011_39037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (6))){
var state_39003__$1 = state_39003;
var statearr_39012_39038 = state_39003__$1;
(statearr_39012_39038[(2)] = null);

(statearr_39012_39038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (17))){
var inst_38985 = (state_39003[(2)]);
var state_39003__$1 = state_39003;
var statearr_39013_39039 = state_39003__$1;
(statearr_39013_39039[(2)] = inst_38985);

(statearr_39013_39039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (3))){
var inst_39001 = (state_39003[(2)]);
var state_39003__$1 = state_39003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39003__$1,inst_39001);
} else {
if((state_val_39004 === (12))){
var inst_38962 = (state_39003[(9)]);
var inst_38976 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38962,opts);
var state_39003__$1 = state_39003;
if(inst_38976){
var statearr_39014_39040 = state_39003__$1;
(statearr_39014_39040[(1)] = (15));

} else {
var statearr_39015_39041 = state_39003__$1;
(statearr_39015_39041[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (2))){
var state_39003__$1 = state_39003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39003__$1,(4),ch);
} else {
if((state_val_39004 === (11))){
var inst_38963 = (state_39003[(8)]);
var inst_38968 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38969 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38963);
var inst_38970 = cljs.core.async.timeout.call(null,(1000));
var inst_38971 = [inst_38969,inst_38970];
var inst_38972 = (new cljs.core.PersistentVector(null,2,(5),inst_38968,inst_38971,null));
var state_39003__$1 = state_39003;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39003__$1,(14),inst_38972);
} else {
if((state_val_39004 === (9))){
var inst_38963 = (state_39003[(8)]);
var inst_38989 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38990 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38963);
var inst_38991 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38990);
var inst_38992 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38991)].join('');
var inst_38993 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38992);
var state_39003__$1 = (function (){var statearr_39016 = state_39003;
(statearr_39016[(10)] = inst_38989);

return statearr_39016;
})();
var statearr_39017_39042 = state_39003__$1;
(statearr_39017_39042[(2)] = inst_38993);

(statearr_39017_39042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (5))){
var inst_38956 = (state_39003[(7)]);
var inst_38958 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38959 = (new cljs.core.PersistentArrayMap(null,2,inst_38958,null));
var inst_38960 = (new cljs.core.PersistentHashSet(null,inst_38959,null));
var inst_38961 = figwheel.client.focus_msgs.call(null,inst_38960,inst_38956);
var inst_38962 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38961);
var inst_38963 = cljs.core.first.call(null,inst_38961);
var inst_38964 = figwheel.client.autoload_QMARK_.call(null);
var state_39003__$1 = (function (){var statearr_39018 = state_39003;
(statearr_39018[(8)] = inst_38963);

(statearr_39018[(9)] = inst_38962);

return statearr_39018;
})();
if(cljs.core.truth_(inst_38964)){
var statearr_39019_39043 = state_39003__$1;
(statearr_39019_39043[(1)] = (8));

} else {
var statearr_39020_39044 = state_39003__$1;
(statearr_39020_39044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (14))){
var inst_38974 = (state_39003[(2)]);
var state_39003__$1 = state_39003;
var statearr_39021_39045 = state_39003__$1;
(statearr_39021_39045[(2)] = inst_38974);

(statearr_39021_39045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (16))){
var state_39003__$1 = state_39003;
var statearr_39022_39046 = state_39003__$1;
(statearr_39022_39046[(2)] = null);

(statearr_39022_39046[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (10))){
var inst_38995 = (state_39003[(2)]);
var state_39003__$1 = (function (){var statearr_39023 = state_39003;
(statearr_39023[(11)] = inst_38995);

return statearr_39023;
})();
var statearr_39024_39047 = state_39003__$1;
(statearr_39024_39047[(2)] = null);

(statearr_39024_39047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (8))){
var inst_38962 = (state_39003[(9)]);
var inst_38966 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38962,opts);
var state_39003__$1 = state_39003;
if(cljs.core.truth_(inst_38966)){
var statearr_39025_39048 = state_39003__$1;
(statearr_39025_39048[(1)] = (11));

} else {
var statearr_39026_39049 = state_39003__$1;
(statearr_39026_39049[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto___39031,ch))
;
return ((function (switch__34960__auto__,c__35055__auto___39031,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34961__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34961__auto____0 = (function (){
var statearr_39027 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39027[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34961__auto__);

(statearr_39027[(1)] = (1));

return statearr_39027;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34961__auto____1 = (function (state_39003){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_39003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e39028){if((e39028 instanceof Object)){
var ex__34964__auto__ = e39028;
var statearr_39029_39050 = state_39003;
(statearr_39029_39050[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39051 = state_39003;
state_39003 = G__39051;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34961__auto__ = function(state_39003){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34961__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34961__auto____1.call(this,state_39003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34961__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34961__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___39031,ch))
})();
var state__35057__auto__ = (function (){var statearr_39030 = f__35056__auto__.call(null);
(statearr_39030[(6)] = c__35055__auto___39031);

return statearr_39030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___39031,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39052_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39052_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39058 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39058){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39054 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39055 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39056 = true;
var _STAR_print_fn_STAR__temp_val__39057 = ((function (_STAR_print_newline_STAR__orig_val__39054,_STAR_print_fn_STAR__orig_val__39055,_STAR_print_newline_STAR__temp_val__39056,sb,base_path_39058){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__39054,_STAR_print_fn_STAR__orig_val__39055,_STAR_print_newline_STAR__temp_val__39056,sb,base_path_39058))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39056;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39057;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39055;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39054;
}}catch (e39053){if((e39053 instanceof Error)){
var e = e39053;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39058], null));
} else {
var e = e39053;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_39058))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39059){
var map__39060 = p__39059;
var map__39060__$1 = (((((!((map__39060 == null))))?(((((map__39060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39060):map__39060);
var opts = map__39060__$1;
var build_id = cljs.core.get.call(null,map__39060__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39060,map__39060__$1,opts,build_id){
return (function (p__39062){
var vec__39063 = p__39062;
var seq__39064 = cljs.core.seq.call(null,vec__39063);
var first__39065 = cljs.core.first.call(null,seq__39064);
var seq__39064__$1 = cljs.core.next.call(null,seq__39064);
var map__39066 = first__39065;
var map__39066__$1 = (((((!((map__39066 == null))))?(((((map__39066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39066):map__39066);
var msg = map__39066__$1;
var msg_name = cljs.core.get.call(null,map__39066__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39064__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39063,seq__39064,first__39065,seq__39064__$1,map__39066,map__39066__$1,msg,msg_name,_,map__39060,map__39060__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39063,seq__39064,first__39065,seq__39064__$1,map__39066,map__39066__$1,msg,msg_name,_,map__39060,map__39060__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39060,map__39060__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39068){
var vec__39069 = p__39068;
var seq__39070 = cljs.core.seq.call(null,vec__39069);
var first__39071 = cljs.core.first.call(null,seq__39070);
var seq__39070__$1 = cljs.core.next.call(null,seq__39070);
var map__39072 = first__39071;
var map__39072__$1 = (((((!((map__39072 == null))))?(((((map__39072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39072):map__39072);
var msg = map__39072__$1;
var msg_name = cljs.core.get.call(null,map__39072__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39070__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39074){
var map__39075 = p__39074;
var map__39075__$1 = (((((!((map__39075 == null))))?(((((map__39075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39075):map__39075);
var on_compile_warning = cljs.core.get.call(null,map__39075__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39075__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39075,map__39075__$1,on_compile_warning,on_compile_fail){
return (function (p__39077){
var vec__39078 = p__39077;
var seq__39079 = cljs.core.seq.call(null,vec__39078);
var first__39080 = cljs.core.first.call(null,seq__39079);
var seq__39079__$1 = cljs.core.next.call(null,seq__39079);
var map__39081 = first__39080;
var map__39081__$1 = (((((!((map__39081 == null))))?(((((map__39081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39081):map__39081);
var msg = map__39081__$1;
var msg_name = cljs.core.get.call(null,map__39081__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39079__$1;
var pred__39083 = cljs.core._EQ_;
var expr__39084 = msg_name;
if(cljs.core.truth_(pred__39083.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39084))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39083.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39084))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39075,map__39075__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto__,msg_hist,msg_names,msg){
return (function (state_39173){
var state_val_39174 = (state_39173[(1)]);
if((state_val_39174 === (7))){
var inst_39093 = (state_39173[(2)]);
var state_39173__$1 = state_39173;
if(cljs.core.truth_(inst_39093)){
var statearr_39175_39222 = state_39173__$1;
(statearr_39175_39222[(1)] = (8));

} else {
var statearr_39176_39223 = state_39173__$1;
(statearr_39176_39223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (20))){
var inst_39167 = (state_39173[(2)]);
var state_39173__$1 = state_39173;
var statearr_39177_39224 = state_39173__$1;
(statearr_39177_39224[(2)] = inst_39167);

(statearr_39177_39224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (27))){
var inst_39163 = (state_39173[(2)]);
var state_39173__$1 = state_39173;
var statearr_39178_39225 = state_39173__$1;
(statearr_39178_39225[(2)] = inst_39163);

(statearr_39178_39225[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (1))){
var inst_39086 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39173__$1 = state_39173;
if(cljs.core.truth_(inst_39086)){
var statearr_39179_39226 = state_39173__$1;
(statearr_39179_39226[(1)] = (2));

} else {
var statearr_39180_39227 = state_39173__$1;
(statearr_39180_39227[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (24))){
var inst_39165 = (state_39173[(2)]);
var state_39173__$1 = state_39173;
var statearr_39181_39228 = state_39173__$1;
(statearr_39181_39228[(2)] = inst_39165);

(statearr_39181_39228[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (4))){
var inst_39171 = (state_39173[(2)]);
var state_39173__$1 = state_39173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39173__$1,inst_39171);
} else {
if((state_val_39174 === (15))){
var inst_39169 = (state_39173[(2)]);
var state_39173__$1 = state_39173;
var statearr_39182_39229 = state_39173__$1;
(statearr_39182_39229[(2)] = inst_39169);

(statearr_39182_39229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (21))){
var inst_39122 = (state_39173[(2)]);
var inst_39123 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39124 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39123);
var state_39173__$1 = (function (){var statearr_39183 = state_39173;
(statearr_39183[(7)] = inst_39122);

return statearr_39183;
})();
var statearr_39184_39230 = state_39173__$1;
(statearr_39184_39230[(2)] = inst_39124);

(statearr_39184_39230[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (31))){
var inst_39152 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39173__$1 = state_39173;
if(inst_39152){
var statearr_39185_39231 = state_39173__$1;
(statearr_39185_39231[(1)] = (34));

} else {
var statearr_39186_39232 = state_39173__$1;
(statearr_39186_39232[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (32))){
var inst_39161 = (state_39173[(2)]);
var state_39173__$1 = state_39173;
var statearr_39187_39233 = state_39173__$1;
(statearr_39187_39233[(2)] = inst_39161);

(statearr_39187_39233[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (33))){
var inst_39148 = (state_39173[(2)]);
var inst_39149 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39150 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39149);
var state_39173__$1 = (function (){var statearr_39188 = state_39173;
(statearr_39188[(8)] = inst_39148);

return statearr_39188;
})();
var statearr_39189_39234 = state_39173__$1;
(statearr_39189_39234[(2)] = inst_39150);

(statearr_39189_39234[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (13))){
var inst_39107 = figwheel.client.heads_up.clear.call(null);
var state_39173__$1 = state_39173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39173__$1,(16),inst_39107);
} else {
if((state_val_39174 === (22))){
var inst_39128 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39129 = figwheel.client.heads_up.append_warning_message.call(null,inst_39128);
var state_39173__$1 = state_39173;
var statearr_39190_39235 = state_39173__$1;
(statearr_39190_39235[(2)] = inst_39129);

(statearr_39190_39235[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (36))){
var inst_39159 = (state_39173[(2)]);
var state_39173__$1 = state_39173;
var statearr_39191_39236 = state_39173__$1;
(statearr_39191_39236[(2)] = inst_39159);

(statearr_39191_39236[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (29))){
var inst_39139 = (state_39173[(2)]);
var inst_39140 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39141 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39140);
var state_39173__$1 = (function (){var statearr_39192 = state_39173;
(statearr_39192[(9)] = inst_39139);

return statearr_39192;
})();
var statearr_39193_39237 = state_39173__$1;
(statearr_39193_39237[(2)] = inst_39141);

(statearr_39193_39237[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (6))){
var inst_39088 = (state_39173[(10)]);
var state_39173__$1 = state_39173;
var statearr_39194_39238 = state_39173__$1;
(statearr_39194_39238[(2)] = inst_39088);

(statearr_39194_39238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (28))){
var inst_39135 = (state_39173[(2)]);
var inst_39136 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39137 = figwheel.client.heads_up.display_warning.call(null,inst_39136);
var state_39173__$1 = (function (){var statearr_39195 = state_39173;
(statearr_39195[(11)] = inst_39135);

return statearr_39195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39173__$1,(29),inst_39137);
} else {
if((state_val_39174 === (25))){
var inst_39133 = figwheel.client.heads_up.clear.call(null);
var state_39173__$1 = state_39173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39173__$1,(28),inst_39133);
} else {
if((state_val_39174 === (34))){
var inst_39154 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39173__$1 = state_39173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39173__$1,(37),inst_39154);
} else {
if((state_val_39174 === (17))){
var inst_39113 = (state_39173[(2)]);
var inst_39114 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39115 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39114);
var state_39173__$1 = (function (){var statearr_39196 = state_39173;
(statearr_39196[(12)] = inst_39113);

return statearr_39196;
})();
var statearr_39197_39239 = state_39173__$1;
(statearr_39197_39239[(2)] = inst_39115);

(statearr_39197_39239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (3))){
var inst_39105 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39173__$1 = state_39173;
if(inst_39105){
var statearr_39198_39240 = state_39173__$1;
(statearr_39198_39240[(1)] = (13));

} else {
var statearr_39199_39241 = state_39173__$1;
(statearr_39199_39241[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (12))){
var inst_39101 = (state_39173[(2)]);
var state_39173__$1 = state_39173;
var statearr_39200_39242 = state_39173__$1;
(statearr_39200_39242[(2)] = inst_39101);

(statearr_39200_39242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (2))){
var inst_39088 = (state_39173[(10)]);
var inst_39088__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39173__$1 = (function (){var statearr_39201 = state_39173;
(statearr_39201[(10)] = inst_39088__$1);

return statearr_39201;
})();
if(cljs.core.truth_(inst_39088__$1)){
var statearr_39202_39243 = state_39173__$1;
(statearr_39202_39243[(1)] = (5));

} else {
var statearr_39203_39244 = state_39173__$1;
(statearr_39203_39244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (23))){
var inst_39131 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39173__$1 = state_39173;
if(inst_39131){
var statearr_39204_39245 = state_39173__$1;
(statearr_39204_39245[(1)] = (25));

} else {
var statearr_39205_39246 = state_39173__$1;
(statearr_39205_39246[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (35))){
var state_39173__$1 = state_39173;
var statearr_39206_39247 = state_39173__$1;
(statearr_39206_39247[(2)] = null);

(statearr_39206_39247[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (19))){
var inst_39126 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39173__$1 = state_39173;
if(inst_39126){
var statearr_39207_39248 = state_39173__$1;
(statearr_39207_39248[(1)] = (22));

} else {
var statearr_39208_39249 = state_39173__$1;
(statearr_39208_39249[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (11))){
var inst_39097 = (state_39173[(2)]);
var state_39173__$1 = state_39173;
var statearr_39209_39250 = state_39173__$1;
(statearr_39209_39250[(2)] = inst_39097);

(statearr_39209_39250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (9))){
var inst_39099 = figwheel.client.heads_up.clear.call(null);
var state_39173__$1 = state_39173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39173__$1,(12),inst_39099);
} else {
if((state_val_39174 === (5))){
var inst_39090 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39173__$1 = state_39173;
var statearr_39210_39251 = state_39173__$1;
(statearr_39210_39251[(2)] = inst_39090);

(statearr_39210_39251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (14))){
var inst_39117 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39173__$1 = state_39173;
if(inst_39117){
var statearr_39211_39252 = state_39173__$1;
(statearr_39211_39252[(1)] = (18));

} else {
var statearr_39212_39253 = state_39173__$1;
(statearr_39212_39253[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (26))){
var inst_39143 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39173__$1 = state_39173;
if(inst_39143){
var statearr_39213_39254 = state_39173__$1;
(statearr_39213_39254[(1)] = (30));

} else {
var statearr_39214_39255 = state_39173__$1;
(statearr_39214_39255[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (16))){
var inst_39109 = (state_39173[(2)]);
var inst_39110 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39111 = figwheel.client.heads_up.display_exception.call(null,inst_39110);
var state_39173__$1 = (function (){var statearr_39215 = state_39173;
(statearr_39215[(13)] = inst_39109);

return statearr_39215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39173__$1,(17),inst_39111);
} else {
if((state_val_39174 === (30))){
var inst_39145 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39146 = figwheel.client.heads_up.display_warning.call(null,inst_39145);
var state_39173__$1 = state_39173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39173__$1,(33),inst_39146);
} else {
if((state_val_39174 === (10))){
var inst_39103 = (state_39173[(2)]);
var state_39173__$1 = state_39173;
var statearr_39216_39256 = state_39173__$1;
(statearr_39216_39256[(2)] = inst_39103);

(statearr_39216_39256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (18))){
var inst_39119 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39120 = figwheel.client.heads_up.display_exception.call(null,inst_39119);
var state_39173__$1 = state_39173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39173__$1,(21),inst_39120);
} else {
if((state_val_39174 === (37))){
var inst_39156 = (state_39173[(2)]);
var state_39173__$1 = state_39173;
var statearr_39217_39257 = state_39173__$1;
(statearr_39217_39257[(2)] = inst_39156);

(statearr_39217_39257[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39174 === (8))){
var inst_39095 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39173__$1 = state_39173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39173__$1,(11),inst_39095);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35055__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34960__auto__,c__35055__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34961__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34961__auto____0 = (function (){
var statearr_39218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39218[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34961__auto__);

(statearr_39218[(1)] = (1));

return statearr_39218;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34961__auto____1 = (function (state_39173){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_39173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e39219){if((e39219 instanceof Object)){
var ex__34964__auto__ = e39219;
var statearr_39220_39258 = state_39173;
(statearr_39220_39258[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39259 = state_39173;
state_39173 = G__39259;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34961__auto__ = function(state_39173){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34961__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34961__auto____1.call(this,state_39173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34961__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34961__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto__,msg_hist,msg_names,msg))
})();
var state__35057__auto__ = (function (){var statearr_39221 = f__35056__auto__.call(null);
(statearr_39221[(6)] = c__35055__auto__);

return statearr_39221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto__,msg_hist,msg_names,msg))
);

return c__35055__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35055__auto___39288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___39288,ch){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___39288,ch){
return (function (state_39274){
var state_val_39275 = (state_39274[(1)]);
if((state_val_39275 === (1))){
var state_39274__$1 = state_39274;
var statearr_39276_39289 = state_39274__$1;
(statearr_39276_39289[(2)] = null);

(statearr_39276_39289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (2))){
var state_39274__$1 = state_39274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39274__$1,(4),ch);
} else {
if((state_val_39275 === (3))){
var inst_39272 = (state_39274[(2)]);
var state_39274__$1 = state_39274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39274__$1,inst_39272);
} else {
if((state_val_39275 === (4))){
var inst_39262 = (state_39274[(7)]);
var inst_39262__$1 = (state_39274[(2)]);
var state_39274__$1 = (function (){var statearr_39277 = state_39274;
(statearr_39277[(7)] = inst_39262__$1);

return statearr_39277;
})();
if(cljs.core.truth_(inst_39262__$1)){
var statearr_39278_39290 = state_39274__$1;
(statearr_39278_39290[(1)] = (5));

} else {
var statearr_39279_39291 = state_39274__$1;
(statearr_39279_39291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (5))){
var inst_39262 = (state_39274[(7)]);
var inst_39264 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39262);
var state_39274__$1 = state_39274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39274__$1,(8),inst_39264);
} else {
if((state_val_39275 === (6))){
var state_39274__$1 = state_39274;
var statearr_39280_39292 = state_39274__$1;
(statearr_39280_39292[(2)] = null);

(statearr_39280_39292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (7))){
var inst_39270 = (state_39274[(2)]);
var state_39274__$1 = state_39274;
var statearr_39281_39293 = state_39274__$1;
(statearr_39281_39293[(2)] = inst_39270);

(statearr_39281_39293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (8))){
var inst_39266 = (state_39274[(2)]);
var state_39274__$1 = (function (){var statearr_39282 = state_39274;
(statearr_39282[(8)] = inst_39266);

return statearr_39282;
})();
var statearr_39283_39294 = state_39274__$1;
(statearr_39283_39294[(2)] = null);

(statearr_39283_39294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__35055__auto___39288,ch))
;
return ((function (switch__34960__auto__,c__35055__auto___39288,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34961__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34961__auto____0 = (function (){
var statearr_39284 = [null,null,null,null,null,null,null,null,null];
(statearr_39284[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34961__auto__);

(statearr_39284[(1)] = (1));

return statearr_39284;
});
var figwheel$client$heads_up_plugin_$_state_machine__34961__auto____1 = (function (state_39274){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_39274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e39285){if((e39285 instanceof Object)){
var ex__34964__auto__ = e39285;
var statearr_39286_39295 = state_39274;
(statearr_39286_39295[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39296 = state_39274;
state_39274 = G__39296;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34961__auto__ = function(state_39274){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34961__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34961__auto____1.call(this,state_39274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34961__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34961__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___39288,ch))
})();
var state__35057__auto__ = (function (){var statearr_39287 = f__35056__auto__.call(null);
(statearr_39287[(6)] = c__35055__auto___39288);

return statearr_39287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___39288,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto__){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto__){
return (function (state_39302){
var state_val_39303 = (state_39302[(1)]);
if((state_val_39303 === (1))){
var inst_39297 = cljs.core.async.timeout.call(null,(3000));
var state_39302__$1 = state_39302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39302__$1,(2),inst_39297);
} else {
if((state_val_39303 === (2))){
var inst_39299 = (state_39302[(2)]);
var inst_39300 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39302__$1 = (function (){var statearr_39304 = state_39302;
(statearr_39304[(7)] = inst_39299);

return statearr_39304;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39302__$1,inst_39300);
} else {
return null;
}
}
});})(c__35055__auto__))
;
return ((function (switch__34960__auto__,c__35055__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34961__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34961__auto____0 = (function (){
var statearr_39305 = [null,null,null,null,null,null,null,null];
(statearr_39305[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34961__auto__);

(statearr_39305[(1)] = (1));

return statearr_39305;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34961__auto____1 = (function (state_39302){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_39302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e39306){if((e39306 instanceof Object)){
var ex__34964__auto__ = e39306;
var statearr_39307_39309 = state_39302;
(statearr_39307_39309[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39310 = state_39302;
state_39302 = G__39310;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34961__auto__ = function(state_39302){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34961__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34961__auto____1.call(this,state_39302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34961__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34961__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto__))
})();
var state__35057__auto__ = (function (){var statearr_39308 = f__35056__auto__.call(null);
(statearr_39308[(6)] = c__35055__auto__);

return statearr_39308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto__))
);

return c__35055__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto__,figwheel_version,temp__5720__auto__){
return (function (state_39317){
var state_val_39318 = (state_39317[(1)]);
if((state_val_39318 === (1))){
var inst_39311 = cljs.core.async.timeout.call(null,(2000));
var state_39317__$1 = state_39317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39317__$1,(2),inst_39311);
} else {
if((state_val_39318 === (2))){
var inst_39313 = (state_39317[(2)]);
var inst_39314 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39315 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39314);
var state_39317__$1 = (function (){var statearr_39319 = state_39317;
(statearr_39319[(7)] = inst_39313);

return statearr_39319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39317__$1,inst_39315);
} else {
return null;
}
}
});})(c__35055__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__34960__auto__,c__35055__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34961__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34961__auto____0 = (function (){
var statearr_39320 = [null,null,null,null,null,null,null,null];
(statearr_39320[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34961__auto__);

(statearr_39320[(1)] = (1));

return statearr_39320;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34961__auto____1 = (function (state_39317){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_39317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e39321){if((e39321 instanceof Object)){
var ex__34964__auto__ = e39321;
var statearr_39322_39324 = state_39317;
(statearr_39322_39324[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39325 = state_39317;
state_39317 = G__39325;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34961__auto__ = function(state_39317){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34961__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34961__auto____1.call(this,state_39317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34961__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34961__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto__,figwheel_version,temp__5720__auto__))
})();
var state__35057__auto__ = (function (){var statearr_39323 = f__35056__auto__.call(null);
(statearr_39323[(6)] = c__35055__auto__);

return statearr_39323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto__,figwheel_version,temp__5720__auto__))
);

return c__35055__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39326){
var map__39327 = p__39326;
var map__39327__$1 = (((((!((map__39327 == null))))?(((((map__39327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39327):map__39327);
var file = cljs.core.get.call(null,map__39327__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39327__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39327__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39329 = "";
var G__39329__$1 = (cljs.core.truth_(file)?[G__39329,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39329);
var G__39329__$2 = (cljs.core.truth_(line)?[G__39329__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39329__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__39329__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39329__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39330){
var map__39331 = p__39330;
var map__39331__$1 = (((((!((map__39331 == null))))?(((((map__39331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39331):map__39331);
var ed = map__39331__$1;
var exception_data = cljs.core.get.call(null,map__39331__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39331__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_39334 = (function (){var G__39333 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39333)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__39333;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_39334);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39335){
var map__39336 = p__39335;
var map__39336__$1 = (((((!((map__39336 == null))))?(((((map__39336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39336):map__39336);
var w = map__39336__$1;
var message = cljs.core.get.call(null,map__39336__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39338 = cljs.core.seq.call(null,plugins);
var chunk__39339 = null;
var count__39340 = (0);
var i__39341 = (0);
while(true){
if((i__39341 < count__39340)){
var vec__39348 = cljs.core._nth.call(null,chunk__39339,i__39341);
var k = cljs.core.nth.call(null,vec__39348,(0),null);
var plugin = cljs.core.nth.call(null,vec__39348,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39354 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39338,chunk__39339,count__39340,i__39341,pl_39354,vec__39348,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39354.call(null,msg_hist);
});})(seq__39338,chunk__39339,count__39340,i__39341,pl_39354,vec__39348,k,plugin))
);
} else {
}


var G__39355 = seq__39338;
var G__39356 = chunk__39339;
var G__39357 = count__39340;
var G__39358 = (i__39341 + (1));
seq__39338 = G__39355;
chunk__39339 = G__39356;
count__39340 = G__39357;
i__39341 = G__39358;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39338);
if(temp__5720__auto__){
var seq__39338__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39338__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39338__$1);
var G__39359 = cljs.core.chunk_rest.call(null,seq__39338__$1);
var G__39360 = c__4550__auto__;
var G__39361 = cljs.core.count.call(null,c__4550__auto__);
var G__39362 = (0);
seq__39338 = G__39359;
chunk__39339 = G__39360;
count__39340 = G__39361;
i__39341 = G__39362;
continue;
} else {
var vec__39351 = cljs.core.first.call(null,seq__39338__$1);
var k = cljs.core.nth.call(null,vec__39351,(0),null);
var plugin = cljs.core.nth.call(null,vec__39351,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39363 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39338,chunk__39339,count__39340,i__39341,pl_39363,vec__39351,k,plugin,seq__39338__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39363.call(null,msg_hist);
});})(seq__39338,chunk__39339,count__39340,i__39341,pl_39363,vec__39351,k,plugin,seq__39338__$1,temp__5720__auto__))
);
} else {
}


var G__39364 = cljs.core.next.call(null,seq__39338__$1);
var G__39365 = null;
var G__39366 = (0);
var G__39367 = (0);
seq__39338 = G__39364;
chunk__39339 = G__39365;
count__39340 = G__39366;
i__39341 = G__39367;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39369 = arguments.length;
switch (G__39369) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39370_39375 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39371_39376 = null;
var count__39372_39377 = (0);
var i__39373_39378 = (0);
while(true){
if((i__39373_39378 < count__39372_39377)){
var msg_39379 = cljs.core._nth.call(null,chunk__39371_39376,i__39373_39378);
figwheel.client.socket.handle_incoming_message.call(null,msg_39379);


var G__39380 = seq__39370_39375;
var G__39381 = chunk__39371_39376;
var G__39382 = count__39372_39377;
var G__39383 = (i__39373_39378 + (1));
seq__39370_39375 = G__39380;
chunk__39371_39376 = G__39381;
count__39372_39377 = G__39382;
i__39373_39378 = G__39383;
continue;
} else {
var temp__5720__auto___39384 = cljs.core.seq.call(null,seq__39370_39375);
if(temp__5720__auto___39384){
var seq__39370_39385__$1 = temp__5720__auto___39384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39370_39385__$1)){
var c__4550__auto___39386 = cljs.core.chunk_first.call(null,seq__39370_39385__$1);
var G__39387 = cljs.core.chunk_rest.call(null,seq__39370_39385__$1);
var G__39388 = c__4550__auto___39386;
var G__39389 = cljs.core.count.call(null,c__4550__auto___39386);
var G__39390 = (0);
seq__39370_39375 = G__39387;
chunk__39371_39376 = G__39388;
count__39372_39377 = G__39389;
i__39373_39378 = G__39390;
continue;
} else {
var msg_39391 = cljs.core.first.call(null,seq__39370_39385__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39391);


var G__39392 = cljs.core.next.call(null,seq__39370_39385__$1);
var G__39393 = null;
var G__39394 = (0);
var G__39395 = (0);
seq__39370_39375 = G__39392;
chunk__39371_39376 = G__39393;
count__39372_39377 = G__39394;
i__39373_39378 = G__39395;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39400 = arguments.length;
var i__4731__auto___39401 = (0);
while(true){
if((i__4731__auto___39401 < len__4730__auto___39400)){
args__4736__auto__.push((arguments[i__4731__auto___39401]));

var G__39402 = (i__4731__auto___39401 + (1));
i__4731__auto___39401 = G__39402;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39397){
var map__39398 = p__39397;
var map__39398__$1 = (((((!((map__39398 == null))))?(((((map__39398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39398):map__39398);
var opts = map__39398__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39396){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39396));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39403){if((e39403 instanceof Error)){
var e = e39403;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39403;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39404){
var map__39405 = p__39404;
var map__39405__$1 = (((((!((map__39405 == null))))?(((((map__39405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39405):map__39405);
var msg_name = cljs.core.get.call(null,map__39405__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1576361247812
