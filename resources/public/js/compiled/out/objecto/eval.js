// Compiled by ClojureScript 1.10.520 {}
goog.provide('objecto.eval');
goog.require('cljs.core');
goog.require('clojure.edn');
goog.require('instaparse.core');
objecto.eval.assign = (function objecto$eval$assign(ast,env){
var vec__31651 = ast;
var vec__31654 = cljs.core.nth.call(null,vec__31651,(0),null);
var _ = cljs.core.nth.call(null,vec__31654,(0),null);
var vec__31657 = cljs.core.nth.call(null,vec__31654,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__31657,(0),null);
var ident = cljs.core.nth.call(null,vec__31657,(1),null);
var value = cljs.core.nth.call(null,vec__31654,(2),null);
return cljs.core.assoc.call(null,env,cljs.core.keyword.call(null,ident),objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),env));
});
objecto.eval.read_literal = (function objecto$eval$read_literal(ast,_env){
var vec__31660 = ast;
var vec__31663 = cljs.core.nth.call(null,vec__31660,(0),null);
var _ = cljs.core.nth.call(null,vec__31663,(0),null);
var value = cljs.core.nth.call(null,vec__31663,(1),null);
return clojure.edn.read_string.call(null,value);
});
objecto.eval.get_meta_class = (function objecto$eval$get_meta_class(class$){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__31666){
var vec__31667 = p__31666;
var k = cljs.core.nth.call(null,vec__31667,(0),null);
var v = cljs.core.nth.call(null,vec__31667,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,k),"class__","")),v], null);
}),cljs.core.filter.call(null,(function (p__31670){
var vec__31671 = p__31670;
var k = cljs.core.nth.call(null,vec__31671,(0),null);
var _ = cljs.core.nth.call(null,vec__31671,(1),null);
return clojure.string.starts_with_QMARK_.call(null,cljs.core.name.call(null,k),"class__");
}),class$)));
});
objecto.eval.o_class_QMARK_ = (function objecto$eval$o_class_QMARK_(obj){
return ((cljs.core.map_QMARK_.call(null,obj)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"class","class",-2030961996))));
});
objecto.eval.get_class = (function objecto$eval$get_class(instance,env){
if(typeof instance === 'number'){
return env.call(null,new cljs.core.Keyword(null,"Number","Number",2146289584));
} else {
if(typeof instance === 'string'){
return env.call(null,new cljs.core.Keyword(null,"String","String",584378334));
} else {
if(cljs.core.boolean_QMARK_.call(null,instance)){
return env.call(null,new cljs.core.Keyword(null,"Boolean","Boolean",20610060));
} else {
if((instance == null)){
return env.call(null,new cljs.core.Keyword(null,"Nil","Nil",-1671759041));
} else {
if(objecto.eval.o_class_QMARK_.call(null,instance)){
return objecto.eval.get_meta_class.call(null,instance);
} else {
return instance;

}
}
}
}
}
});
objecto.eval.extract_identifier = (function objecto$eval$extract_identifier(param){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,param),new cljs.core.Keyword(null,"identifier","identifier",-805503498))){
return cljs.core.last.call(null,param);
} else {
return cljs.core.last.call(null,cljs.core.second.call(null,param));
}
});
objecto.eval.eval_param = (function objecto$eval$eval_param(param,env){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,param),new cljs.core.Keyword(null,"identifier","identifier",-805503498))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.last.call(null,param)),null], null);
} else {
var vec__31674 = param;
var _ = cljs.core.nth.call(null,vec__31674,(0),null);
var vec__31677 = cljs.core.nth.call(null,vec__31674,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__31677,(0),null);
var id = cljs.core.nth.call(null,vec__31677,(1),null);
var value = cljs.core.nth.call(null,vec__31674,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,id),objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),env)], null);
}
});
objecto.eval.eval_params = (function objecto$eval$eval_params(params,env){
var converted = cljs.core.map.call(null,(function (p){
return objecto.eval.eval_param.call(null,p,env);
}),params);
return cljs.core.assoc.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,converted),new cljs.core.Keyword(null,"__raw","__raw",1705640097),converted);
});
objecto.eval.get_method = (function objecto$eval$get_method(identifier,class$){
var method = identifier.call(null,class$);
if(cljs.core.truth_(method)){
return method;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"super","super",840752938).cljs$core$IFn$_invoke$arity$1(class$))){
return objecto.eval.get_method.call(null,identifier,new cljs.core.Keyword(null,"super","super",840752938).cljs$core$IFn$_invoke$arity$1(class$));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(class$))){
return objecto.eval.get_method.call(null,identifier,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(class$));
} else {
throw (new Error(["message not understood: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(identifier)].join('')));
}
}
}
});
objecto.eval.message = (function objecto$eval$message(ast,env){
var vec__31680 = ast;
var vec__31683 = cljs.core.nth.call(null,vec__31680,(0),null);
var seq__31684 = cljs.core.seq.call(null,vec__31683);
var first__31685 = cljs.core.first.call(null,seq__31684);
var seq__31684__$1 = cljs.core.next.call(null,seq__31684);
var _ = first__31685;
var first__31685__$1 = cljs.core.first.call(null,seq__31684__$1);
var seq__31684__$2 = cljs.core.next.call(null,seq__31684__$1);
var raw_instance = first__31685__$1;
var params = seq__31684__$2;
var identifier = cljs.core.keyword.call(null,clojure.string.join.call(null,":",cljs.core.map.call(null,objecto.eval.extract_identifier,params)));
var instance = objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_instance], null),env);
var class$ = objecto.eval.get_class.call(null,instance,env);
var method = objecto.eval.get_method.call(null,identifier,class$);
return method.call(null,instance,objecto.eval.eval_params.call(null,params,env),env);
});
objecto.eval.binary_message = (function objecto$eval$binary_message(ast,env){
var vec__31686 = ast;
var vec__31689 = cljs.core.nth.call(null,vec__31686,(0),null);
var _ = cljs.core.nth.call(null,vec__31689,(0),null);
var raw_left = cljs.core.nth.call(null,vec__31689,(1),null);
var vec__31692 = cljs.core.nth.call(null,vec__31689,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__31692,(0),null);
var op = cljs.core.nth.call(null,vec__31692,(1),null);
var raw_right = cljs.core.nth.call(null,vec__31689,(3),null);
var left = objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_left], null),env);
var right = objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_right], null),env);
var class$ = objecto.eval.get_class.call(null,left,env);
var method = objecto.eval.get_method.call(null,cljs.core.keyword.call(null,op),class$);
return method.call(null,left,right,env);
});
objecto.eval.identifier = (function objecto$eval$identifier(ast,env){
var vec__31695 = ast;
var vec__31698 = cljs.core.nth.call(null,vec__31695,(0),null);
var _ = cljs.core.nth.call(null,vec__31698,(0),null);
var value = cljs.core.nth.call(null,vec__31698,(1),null);
if(cljs.core.contains_QMARK_.call(null,env,cljs.core.keyword.call(null,value))){
return cljs.core.get.call(null,env,cljs.core.keyword.call(null,value));
} else {
return null;
}
});
objecto.eval.code_block = (function objecto$eval$code_block(ast,env){
var vec__31701 = ast;
var vec__31704 = cljs.core.nth.call(null,vec__31701,(0),null);
var _ = cljs.core.nth.call(null,vec__31704,(0),null);
var vec__31707 = cljs.core.nth.call(null,vec__31704,(1),null);
var seq__31708 = cljs.core.seq.call(null,vec__31707);
var first__31709 = cljs.core.first.call(null,seq__31708);
var seq__31708__$1 = cljs.core.next.call(null,seq__31708);
var ___$1 = first__31709;
var params = seq__31708__$1;
var node = cljs.core.nth.call(null,vec__31704,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code-block","code-block",-2113425141),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.first.call(null,ast),new cljs.core.Keyword(null,"value","value",305978217),((function (vec__31701,vec__31704,_,vec__31707,seq__31708,first__31709,seq__31708__$1,___$1,params,node){
return (function (___$2,args,___$3){
var value_params = cljs.core.filter.call(null,((function (vec__31701,vec__31704,_,vec__31707,seq__31708,first__31709,seq__31708__$1,___$1,params,node){
return (function (p__31710){
var vec__31711 = p__31710;
var k = cljs.core.nth.call(null,vec__31711,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__31711,(1),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"value","value",305978217));
});})(vec__31701,vec__31704,_,vec__31707,seq__31708,first__31709,seq__31708__$1,___$1,params,node))
,new cljs.core.Keyword(null,"__raw","__raw",1705640097).cljs$core$IFn$_invoke$arity$1(args));
var zipped = cljs.core.map.call(null,cljs.core.vector,params,cljs.core.map.call(null,cljs.core.second,value_params));
var new_env = cljs.core.reduce.call(null,((function (value_params,zipped,vec__31701,vec__31704,_,vec__31707,seq__31708,first__31709,seq__31708__$1,___$1,params,node){
return (function (env__$1,p__31714){
var vec__31715 = p__31714;
var k = cljs.core.nth.call(null,vec__31715,(0),null);
var v = cljs.core.nth.call(null,vec__31715,(1),null);
return cljs.core.assoc.call(null,env__$1,cljs.core.keyword.call(null,k),v);
});})(value_params,zipped,vec__31701,vec__31704,_,vec__31707,seq__31708,first__31709,seq__31708__$1,___$1,params,node))
,env,zipped);
return objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),new_env);
});})(vec__31701,vec__31704,_,vec__31707,seq__31708,first__31709,seq__31708__$1,___$1,params,node))
], null);
});
objecto.eval.eval_inner = (function objecto$eval$eval_inner(ast,env){
var vec__31718 = ast;
var vec__31721 = cljs.core.nth.call(null,vec__31718,(0),null);
var head = cljs.core.nth.call(null,vec__31721,(0),null);
var G__31724 = head;
var G__31724__$1 = (((G__31724 instanceof cljs.core.Keyword))?G__31724.fqn:null);
switch (G__31724__$1) {
case "assignment":
return objecto.eval.assign.call(null,ast,env);

break;
case "unary-message":
return objecto.eval.message.call(null,ast,env);

break;
case "keyword-message":
return objecto.eval.message.call(null,ast,env);

break;
case "return-expr":
return objecto.eval.message.call(null,cljs.core.second.call(null,cljs.core.first.call(null,ast)),env);

break;
case "binary-message":
return objecto.eval.binary_message.call(null,ast,env);

break;
case "identifier":
return objecto.eval.identifier.call(null,ast,env);

break;
case "code-block":
return objecto.eval.code_block.call(null,ast,env);

break;
case "string":
return objecto.eval.read_literal.call(null,ast,env);

break;
case "number":
return objecto.eval.read_literal.call(null,ast,env);

break;
case "boolean":
return objecto.eval.read_literal.call(null,ast,env);

break;
case "nil":
return objecto.eval.read_literal.call(null,ast,env);

break;
case "symbol":
return cljs.core.keyword.call(null,objecto.eval.read_literal.call(null,ast,env));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31724__$1)].join('')));

}
});
objecto.eval.method_definition = (function objecto$eval$method_definition(ast,env){
var vec__31726 = ast;
var vec__31729 = cljs.core.nth.call(null,vec__31726,(0),null);
var seq__31730 = cljs.core.seq.call(null,vec__31729);
var first__31731 = cljs.core.first.call(null,seq__31730);
var seq__31730__$1 = cljs.core.next.call(null,seq__31730);
var _ = first__31731;
var first__31731__$1 = cljs.core.first.call(null,seq__31730__$1);
var seq__31730__$2 = cljs.core.next.call(null,seq__31730__$1);
var vec__31732 = first__31731__$1;
var ___$1 = cljs.core.nth.call(null,vec__31732,(0),null);
var receiver = cljs.core.nth.call(null,vec__31732,(1),null);
var first__31731__$2 = cljs.core.first.call(null,seq__31730__$2);
var seq__31730__$3 = cljs.core.next.call(null,seq__31730__$2);
var vec__31735 = first__31731__$2;
var ___$2 = cljs.core.nth.call(null,vec__31735,(0),null);
var method_name = cljs.core.nth.call(null,vec__31735,(1),null);
var first__31731__$3 = cljs.core.first.call(null,seq__31730__$3);
var seq__31730__$4 = cljs.core.next.call(null,seq__31730__$3);
var vec__31738 = first__31731__$3;
var ___$3 = cljs.core.nth.call(null,vec__31738,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__31738,(1),null);
var body = seq__31730__$4;
return cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,receiver),cljs.core.keyword.call(null,method_name)], null),((function (vec__31726,vec__31729,seq__31730,first__31731,seq__31730__$1,_,first__31731__$1,seq__31730__$2,vec__31732,___$1,receiver,first__31731__$2,seq__31730__$3,vec__31735,___$2,method_name,first__31731__$3,seq__31730__$4,vec__31738,___$3,___$4,body){
return (function (self,_params,raw_env){
var env__$1 = cljs.core.assoc.call(null,raw_env,new cljs.core.Keyword(null,"self","self",-1547428899),self);
return objecto.eval.eval_inner.call(null,body,env__$1);
});})(vec__31726,vec__31729,seq__31730,first__31731,seq__31730__$1,_,first__31731__$1,seq__31730__$2,vec__31732,___$1,receiver,first__31731__$2,seq__31730__$3,vec__31735,___$2,method_name,first__31731__$3,seq__31730__$4,vec__31738,___$3,___$4,body))
);
});
objecto.eval.eval_one = (function objecto$eval$eval_one(ast,in$){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(in$);
var G__31741 = cljs.core.first.call(null,ast);
var G__31741__$1 = (((G__31741 instanceof cljs.core.Keyword))?G__31741.fqn:null);
switch (G__31741__$1) {
case "assignment":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),objecto.eval.assign.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast], null),env),new cljs.core.Keyword(null,"value","value",305978217),null], null);

break;
case "method-definition":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),objecto.eval.method_definition.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast], null),env),new cljs.core.Keyword(null,"value","value",305978217),null], null);

break;
case "return-expr":
return objecto.eval.eval_one.call(null,cljs.core.second.call(null,ast),in$);

break;
case "unary-message":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"value","value",305978217),objecto.eval.message.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast], null),env)], null);

break;
case "keyword-message":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"value","value",305978217),objecto.eval.message.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast], null),env)], null);

break;
case "binary-message":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"value","value",305978217),objecto.eval.binary_message.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast], null),env)], null);

break;
case "identifier":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"value","value",305978217),objecto.eval.identifier.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast], null),env)], null);

break;
case "code-block":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"value","value",305978217),objecto.eval.code_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast], null),env)], null);

break;
case "string":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"value","value",305978217),objecto.eval.read_literal.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast], null),env)], null);

break;
case "number":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"value","value",305978217),objecto.eval.read_literal.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast], null),env)], null);

break;
case "boolean":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"value","value",305978217),objecto.eval.read_literal.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast], null),env)], null);

break;
case "nil":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"value","value",305978217),objecto.eval.read_literal.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast], null),env)], null);

break;
case "symbol":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keyword.call(null,objecto.eval.read_literal.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast], null),env))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31741__$1)].join('')));

}
});
objecto.eval.eval = (function objecto$eval$eval(ast,env){
if(instaparse.core.failure_QMARK_.call(null,ast)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"value","value",305978217),"Parsing error"], null);
} else {
return cljs.core.reduce.call(null,(function (in$,node){
return objecto.eval.eval_one.call(null,node,in$);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",-1815813235),env], null),ast);
}
});

//# sourceMappingURL=eval.js.map?rel=1576361239270
