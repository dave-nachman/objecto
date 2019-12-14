// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('objecto.eval');
goog.require('cljs.core');
goog.require('clojure.edn');
goog.require('instaparse.core');
objecto.eval.assign = (function objecto$eval$assign(ast,env){
var vec__29153 = ast;
var vec__29156 = cljs.core.nth.call(null,vec__29153,(0),null);
var _ = cljs.core.nth.call(null,vec__29156,(0),null);
var vec__29159 = cljs.core.nth.call(null,vec__29156,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29159,(0),null);
var ident = cljs.core.nth.call(null,vec__29159,(1),null);
var value = cljs.core.nth.call(null,vec__29156,(2),null);
return cljs.core.assoc.call(null,env,cljs.core.keyword.call(null,ident),objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),env));
});
objecto.eval.read_literal = (function objecto$eval$read_literal(ast,env){
var vec__29162 = ast;
var vec__29165 = cljs.core.nth.call(null,vec__29162,(0),null);
var _ = cljs.core.nth.call(null,vec__29165,(0),null);
var value = cljs.core.nth.call(null,vec__29165,(1),null);
return clojure.edn.read_string.call(null,value);
});
objecto.eval.get_meta_class = (function objecto$eval$get_meta_class(class$){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29168){
var vec__29169 = p__29168;
var k = cljs.core.nth.call(null,vec__29169,(0),null);
var v = cljs.core.nth.call(null,vec__29169,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,k),"class__","")),v], null);
}),cljs.core.filter.call(null,(function (p__29172){
var vec__29173 = p__29172;
var k = cljs.core.nth.call(null,vec__29173,(0),null);
var _ = cljs.core.nth.call(null,vec__29173,(1),null);
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
var vec__29176 = param;
var _ = cljs.core.nth.call(null,vec__29176,(0),null);
var vec__29179 = cljs.core.nth.call(null,vec__29176,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29179,(0),null);
var id = cljs.core.nth.call(null,vec__29179,(1),null);
var value = cljs.core.nth.call(null,vec__29176,(2),null);
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
var vec__29182 = ast;
var vec__29185 = cljs.core.nth.call(null,vec__29182,(0),null);
var seq__29186 = cljs.core.seq.call(null,vec__29185);
var first__29187 = cljs.core.first.call(null,seq__29186);
var seq__29186__$1 = cljs.core.next.call(null,seq__29186);
var _ = first__29187;
var first__29187__$1 = cljs.core.first.call(null,seq__29186__$1);
var seq__29186__$2 = cljs.core.next.call(null,seq__29186__$1);
var raw_instance = first__29187__$1;
var params = seq__29186__$2;
var identifier = cljs.core.keyword.call(null,clojure.string.join.call(null,":",cljs.core.map.call(null,objecto.eval.extract_identifier,params)));
var instance = objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_instance], null),env);
var class$ = objecto.eval.get_class.call(null,instance,env);
var method = objecto.eval.get_method.call(null,identifier,class$);
return method.call(null,instance,objecto.eval.eval_params.call(null,params,env),env);
});
objecto.eval.binary_message = (function objecto$eval$binary_message(ast,env){
var vec__29188 = ast;
var vec__29191 = cljs.core.nth.call(null,vec__29188,(0),null);
var _ = cljs.core.nth.call(null,vec__29191,(0),null);
var raw_left = cljs.core.nth.call(null,vec__29191,(1),null);
var vec__29194 = cljs.core.nth.call(null,vec__29191,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__29194,(0),null);
var op = cljs.core.nth.call(null,vec__29194,(1),null);
var raw_right = cljs.core.nth.call(null,vec__29191,(3),null);
var left = objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_left], null),env);
var right = objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_right], null),env);
var class$ = objecto.eval.get_class.call(null,left,env);
var method = objecto.eval.get_method.call(null,cljs.core.keyword.call(null,op),class$);
return method.call(null,left,right,env);
});
objecto.eval.identifier = (function objecto$eval$identifier(ast,env){
var vec__29197 = ast;
var vec__29200 = cljs.core.nth.call(null,vec__29197,(0),null);
var _ = cljs.core.nth.call(null,vec__29200,(0),null);
var value = cljs.core.nth.call(null,vec__29200,(1),null);
if(cljs.core.contains_QMARK_.call(null,env,cljs.core.keyword.call(null,value))){
return cljs.core.get.call(null,env,cljs.core.keyword.call(null,value));
} else {
return null;
}
});
objecto.eval.code_block = (function objecto$eval$code_block(ast,env){
var vec__29203 = ast;
var vec__29206 = cljs.core.nth.call(null,vec__29203,(0),null);
var _ = cljs.core.nth.call(null,vec__29206,(0),null);
var vec__29209 = cljs.core.nth.call(null,vec__29206,(1),null);
var seq__29210 = cljs.core.seq.call(null,vec__29209);
var first__29211 = cljs.core.first.call(null,seq__29210);
var seq__29210__$1 = cljs.core.next.call(null,seq__29210);
var ___$1 = first__29211;
var params = seq__29210__$1;
var node = cljs.core.nth.call(null,vec__29206,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code-block","code-block",-2113425141),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.first.call(null,ast),new cljs.core.Keyword(null,"value","value",305978217),((function (vec__29203,vec__29206,_,vec__29209,seq__29210,first__29211,seq__29210__$1,___$1,params,node){
return (function (___$2,args,___$3){
var value_params = cljs.core.filter.call(null,((function (vec__29203,vec__29206,_,vec__29209,seq__29210,first__29211,seq__29210__$1,___$1,params,node){
return (function (p__29212){
var vec__29213 = p__29212;
var k = cljs.core.nth.call(null,vec__29213,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__29213,(1),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"value","value",305978217));
});})(vec__29203,vec__29206,_,vec__29209,seq__29210,first__29211,seq__29210__$1,___$1,params,node))
,new cljs.core.Keyword(null,"__raw","__raw",1705640097).cljs$core$IFn$_invoke$arity$1(args));
var zipped = cljs.core.map.call(null,cljs.core.vector,params,cljs.core.map.call(null,cljs.core.second,value_params));
var new_env = cljs.core.reduce.call(null,((function (value_params,zipped,vec__29203,vec__29206,_,vec__29209,seq__29210,first__29211,seq__29210__$1,___$1,params,node){
return (function (env__$1,p__29216){
var vec__29217 = p__29216;
var k = cljs.core.nth.call(null,vec__29217,(0),null);
var v = cljs.core.nth.call(null,vec__29217,(1),null);
return cljs.core.assoc.call(null,env__$1,cljs.core.keyword.call(null,k),v);
});})(value_params,zipped,vec__29203,vec__29206,_,vec__29209,seq__29210,first__29211,seq__29210__$1,___$1,params,node))
,env,zipped);
return objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),new_env);
});})(vec__29203,vec__29206,_,vec__29209,seq__29210,first__29211,seq__29210__$1,___$1,params,node))
], null);
});
objecto.eval.eval_inner = (function objecto$eval$eval_inner(ast,env){
var vec__29220 = ast;
var vec__29223 = cljs.core.nth.call(null,vec__29220,(0),null);
var head = cljs.core.nth.call(null,vec__29223,(0),null);
var G__29226 = head;
var G__29226__$1 = (((G__29226 instanceof cljs.core.Keyword))?G__29226.fqn:null);
switch (G__29226__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29226__$1)].join('')));

}
});
objecto.eval.method_definition = (function objecto$eval$method_definition(ast,env){
var vec__29228 = ast;
var vec__29231 = cljs.core.nth.call(null,vec__29228,(0),null);
var seq__29232 = cljs.core.seq.call(null,vec__29231);
var first__29233 = cljs.core.first.call(null,seq__29232);
var seq__29232__$1 = cljs.core.next.call(null,seq__29232);
var _ = first__29233;
var first__29233__$1 = cljs.core.first.call(null,seq__29232__$1);
var seq__29232__$2 = cljs.core.next.call(null,seq__29232__$1);
var vec__29234 = first__29233__$1;
var ___$1 = cljs.core.nth.call(null,vec__29234,(0),null);
var receiver = cljs.core.nth.call(null,vec__29234,(1),null);
var first__29233__$2 = cljs.core.first.call(null,seq__29232__$2);
var seq__29232__$3 = cljs.core.next.call(null,seq__29232__$2);
var vec__29237 = first__29233__$2;
var ___$2 = cljs.core.nth.call(null,vec__29237,(0),null);
var method_name = cljs.core.nth.call(null,vec__29237,(1),null);
var first__29233__$3 = cljs.core.first.call(null,seq__29232__$3);
var seq__29232__$4 = cljs.core.next.call(null,seq__29232__$3);
var vec__29240 = first__29233__$3;
var ___$3 = cljs.core.nth.call(null,vec__29240,(0),null);
var locals = cljs.core.nth.call(null,vec__29240,(1),null);
var body = seq__29232__$4;
return cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,receiver),cljs.core.keyword.call(null,method_name)], null),((function (vec__29228,vec__29231,seq__29232,first__29233,seq__29232__$1,_,first__29233__$1,seq__29232__$2,vec__29234,___$1,receiver,first__29233__$2,seq__29232__$3,vec__29237,___$2,method_name,first__29233__$3,seq__29232__$4,vec__29240,___$3,locals,body){
return (function (self,params,raw_env){
var env__$1 = cljs.core.assoc.call(null,raw_env,new cljs.core.Keyword(null,"self","self",-1547428899),self);
return objecto.eval.eval_inner.call(null,body,env__$1);
});})(vec__29228,vec__29231,seq__29232,first__29233,seq__29232__$1,_,first__29233__$1,seq__29232__$2,vec__29234,___$1,receiver,first__29233__$2,seq__29232__$3,vec__29237,___$2,method_name,first__29233__$3,seq__29232__$4,vec__29240,___$3,locals,body))
);
});
objecto.eval.eval_one = (function objecto$eval$eval_one(ast,in$){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(in$);
var G__29243 = cljs.core.first.call(null,ast);
var G__29243__$1 = (((G__29243 instanceof cljs.core.Keyword))?G__29243.fqn:null);
switch (G__29243__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29243__$1)].join('')));

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
