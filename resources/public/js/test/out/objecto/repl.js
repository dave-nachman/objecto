// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('objecto.repl');
goog.require('cljs.core');
goog.require('objecto.reader');
goog.require('objecto.eval');
goog.require('objecto.env');
objecto.repl.get_class_name = (function objecto$repl$get_class_name(value,env){
var ident = new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(value);
var match = cljs.core.filter.call(null,((function (ident){
return (function (p__30192){
var vec__30193 = p__30192;
var _ = cljs.core.nth.call(null,vec__30193,(0),null);
var v = cljs.core.nth.call(null,vec__30193,(1),null);
return ((cljs.core.map_QMARK_.call(null,v)) && (cljs.core._EQ_.call(null,ident,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(v))));
});})(ident))
,env);
if(cljs.core.truth_(match)){
return cljs.core.name.call(null,cljs.core.first.call(null,cljs.core.first.call(null,match)));
} else {
return "<???>";
}
});
objecto.repl.format_value = (function objecto$repl$format_value(value,env){
if(cljs.core.map_QMARK_.call(null,value)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"code-block","code-block",-2113425141))){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(value);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(value))){
return ["instance:",objecto.repl.get_class_name.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(value),env)].join('');
} else {
return objecto.repl.get_class_name.call(null,value,env);

}
}
} else {
return value;
}
});
objecto.repl.set_env = (function objecto$repl$set_env(result){
var new_env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(result);
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result);
cljs.core.reset_BANG_.call(null,objecto.env.env,new_env);

return objecto.repl.format_value.call(null,value,new_env);
});
objecto.repl.read_eval = (function objecto$repl$read_eval(input){
return objecto.repl.set_env.call(null,objecto.eval.eval.call(null,objecto.reader.read.call(null,input),cljs.core.deref.call(null,objecto.env.env)));
});
objecto.repl.read_eval.call(null,"[x | x ] value:");
