// Compiled by ClojureScript 1.10.520 {}
goog.provide('objecto.eval');
goog.require('cljs.core');
goog.require('clojure.edn');
goog.require('instaparse.core');
objecto.eval.assign = (function objecto$eval$assign(ast,env){
var vec__39349 = ast;
var vec__39352 = cljs.core.nth.call(null,vec__39349,(0),null);
var _ = cljs.core.nth.call(null,vec__39352,(0),null);
var vec__39355 = cljs.core.nth.call(null,vec__39352,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__39355,(0),null);
var ident = cljs.core.nth.call(null,vec__39355,(1),null);
var value = cljs.core.nth.call(null,vec__39352,(2),null);
return cljs.core.assoc.call(null,env,cljs.core.keyword.call(null,ident),objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),env));
});
objecto.eval.read_literal = (function objecto$eval$read_literal(ast,_env){
var vec__39358 = ast;
var vec__39361 = cljs.core.nth.call(null,vec__39358,(0),null);
var _ = cljs.core.nth.call(null,vec__39361,(0),null);
var value = cljs.core.nth.call(null,vec__39361,(1),null);
return clojure.edn.read_string.call(null,value);
});
objecto.eval.get_meta_class = (function objecto$eval$get_meta_class(class$){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__39364){
var vec__39365 = p__39364;
var k = cljs.core.nth.call(null,vec__39365,(0),null);
var v = cljs.core.nth.call(null,vec__39365,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,k),"class__","")),v], null);
}),cljs.core.filter.call(null,(function (p__39368){
var vec__39369 = p__39368;
var k = cljs.core.nth.call(null,vec__39369,(0),null);
var _ = cljs.core.nth.call(null,vec__39369,(1),null);
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
var vec__39372 = param;
var _ = cljs.core.nth.call(null,vec__39372,(0),null);
var vec__39375 = cljs.core.nth.call(null,vec__39372,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__39375,(0),null);
var id = cljs.core.nth.call(null,vec__39375,(1),null);
var value = cljs.core.nth.call(null,vec__39372,(2),null);
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
var vec__39378 = ast;
var vec__39381 = cljs.core.nth.call(null,vec__39378,(0),null);
var seq__39382 = cljs.core.seq.call(null,vec__39381);
var first__39383 = cljs.core.first.call(null,seq__39382);
var seq__39382__$1 = cljs.core.next.call(null,seq__39382);
var _ = first__39383;
var first__39383__$1 = cljs.core.first.call(null,seq__39382__$1);
var seq__39382__$2 = cljs.core.next.call(null,seq__39382__$1);
var raw_instance = first__39383__$1;
var params = seq__39382__$2;
var identifier = cljs.core.keyword.call(null,clojure.string.join.call(null,":",cljs.core.map.call(null,objecto.eval.extract_identifier,params)));
var instance = objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_instance], null),env);
var class$ = objecto.eval.get_class.call(null,instance,env);
var method = objecto.eval.get_method.call(null,identifier,class$);
return method.call(null,instance,objecto.eval.eval_params.call(null,params,env),env);
});
objecto.eval.binary_message = (function objecto$eval$binary_message(ast,env){
var vec__39384 = ast;
var vec__39387 = cljs.core.nth.call(null,vec__39384,(0),null);
var _ = cljs.core.nth.call(null,vec__39387,(0),null);
var raw_left = cljs.core.nth.call(null,vec__39387,(1),null);
var vec__39390 = cljs.core.nth.call(null,vec__39387,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__39390,(0),null);
var op = cljs.core.nth.call(null,vec__39390,(1),null);
var raw_right = cljs.core.nth.call(null,vec__39387,(3),null);
var left = objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_left], null),env);
var right = objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_right], null),env);
var class$ = objecto.eval.get_class.call(null,left,env);
var method = objecto.eval.get_method.call(null,cljs.core.keyword.call(null,op),class$);
return method.call(null,left,right,env);
});
objecto.eval.identifier = (function objecto$eval$identifier(ast,env){
var vec__39393 = ast;
var vec__39396 = cljs.core.nth.call(null,vec__39393,(0),null);
var _ = cljs.core.nth.call(null,vec__39396,(0),null);
var value = cljs.core.nth.call(null,vec__39396,(1),null);
if(cljs.core.contains_QMARK_.call(null,env,cljs.core.keyword.call(null,value))){
return cljs.core.get.call(null,env,cljs.core.keyword.call(null,value));
} else {
return null;
}
});
objecto.eval.code_block = (function objecto$eval$code_block(ast,env){
var vec__39399 = ast;
var vec__39402 = cljs.core.nth.call(null,vec__39399,(0),null);
var _ = cljs.core.nth.call(null,vec__39402,(0),null);
var vec__39405 = cljs.core.nth.call(null,vec__39402,(1),null);
var seq__39406 = cljs.core.seq.call(null,vec__39405);
var first__39407 = cljs.core.first.call(null,seq__39406);
var seq__39406__$1 = cljs.core.next.call(null,seq__39406);
var ___$1 = first__39407;
var params = seq__39406__$1;
var node = cljs.core.nth.call(null,vec__39402,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code-block","code-block",-2113425141),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.first.call(null,ast),new cljs.core.Keyword(null,"value","value",305978217),((function (vec__39399,vec__39402,_,vec__39405,seq__39406,first__39407,seq__39406__$1,___$1,params,node){
return (function (___$2,args,___$3){
var value_params = cljs.core.filter.call(null,((function (vec__39399,vec__39402,_,vec__39405,seq__39406,first__39407,seq__39406__$1,___$1,params,node){
return (function (p__39408){
var vec__39409 = p__39408;
var k = cljs.core.nth.call(null,vec__39409,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__39409,(1),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"value","value",305978217));
});})(vec__39399,vec__39402,_,vec__39405,seq__39406,first__39407,seq__39406__$1,___$1,params,node))
,new cljs.core.Keyword(null,"__raw","__raw",1705640097).cljs$core$IFn$_invoke$arity$1(args));
var zipped = cljs.core.map.call(null,cljs.core.vector,params,cljs.core.map.call(null,cljs.core.second,value_params));
var new_env = cljs.core.reduce.call(null,((function (value_params,zipped,vec__39399,vec__39402,_,vec__39405,seq__39406,first__39407,seq__39406__$1,___$1,params,node){
return (function (env__$1,p__39412){
var vec__39413 = p__39412;
var k = cljs.core.nth.call(null,vec__39413,(0),null);
var v = cljs.core.nth.call(null,vec__39413,(1),null);
return cljs.core.assoc.call(null,env__$1,cljs.core.keyword.call(null,k),v);
});})(value_params,zipped,vec__39399,vec__39402,_,vec__39405,seq__39406,first__39407,seq__39406__$1,___$1,params,node))
,env,zipped);
return objecto.eval.eval_inner.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),new_env);
});})(vec__39399,vec__39402,_,vec__39405,seq__39406,first__39407,seq__39406__$1,___$1,params,node))
], null);
});
objecto.eval.eval_inner = (function objecto$eval$eval_inner(ast,env){
var vec__39416 = ast;
var vec__39419 = cljs.core.nth.call(null,vec__39416,(0),null);
var head = cljs.core.nth.call(null,vec__39419,(0),null);
var G__39422 = head;
var G__39422__$1 = (((G__39422 instanceof cljs.core.Keyword))?G__39422.fqn:null);
switch (G__39422__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39422__$1)].join('')));

}
});
objecto.eval.method_definition = (function objecto$eval$method_definition(ast,env){
var vec__39424 = ast;
var vec__39427 = cljs.core.nth.call(null,vec__39424,(0),null);
var seq__39428 = cljs.core.seq.call(null,vec__39427);
var first__39429 = cljs.core.first.call(null,seq__39428);
var seq__39428__$1 = cljs.core.next.call(null,seq__39428);
var _ = first__39429;
var first__39429__$1 = cljs.core.first.call(null,seq__39428__$1);
var seq__39428__$2 = cljs.core.next.call(null,seq__39428__$1);
var vec__39430 = first__39429__$1;
var ___$1 = cljs.core.nth.call(null,vec__39430,(0),null);
var receiver = cljs.core.nth.call(null,vec__39430,(1),null);
var first__39429__$2 = cljs.core.first.call(null,seq__39428__$2);
var seq__39428__$3 = cljs.core.next.call(null,seq__39428__$2);
var vec__39433 = first__39429__$2;
var ___$2 = cljs.core.nth.call(null,vec__39433,(0),null);
var method_name = cljs.core.nth.call(null,vec__39433,(1),null);
var first__39429__$3 = cljs.core.first.call(null,seq__39428__$3);
var seq__39428__$4 = cljs.core.next.call(null,seq__39428__$3);
var vec__39436 = first__39429__$3;
var ___$3 = cljs.core.nth.call(null,vec__39436,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__39436,(1),null);
var body = seq__39428__$4;
return cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,receiver),cljs.core.keyword.call(null,method_name)], null),((function (vec__39424,vec__39427,seq__39428,first__39429,seq__39428__$1,_,first__39429__$1,seq__39428__$2,vec__39430,___$1,receiver,first__39429__$2,seq__39428__$3,vec__39433,___$2,method_name,first__39429__$3,seq__39428__$4,vec__39436,___$3,___$4,body){
return (function (self,_params,raw_env){
var env__$1 = cljs.core.assoc.call(null,raw_env,new cljs.core.Keyword(null,"self","self",-1547428899),self);
return objecto.eval.eval_inner.call(null,body,env__$1);
});})(vec__39424,vec__39427,seq__39428,first__39429,seq__39428__$1,_,first__39429__$1,seq__39428__$2,vec__39430,___$1,receiver,first__39429__$2,seq__39428__$3,vec__39433,___$2,method_name,first__39429__$3,seq__39428__$4,vec__39436,___$3,___$4,body))
);
});
objecto.eval.eval_one = (function objecto$eval$eval_one(ast,in$){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(in$);
var G__39439 = cljs.core.first.call(null,ast);
var G__39439__$1 = (((G__39439 instanceof cljs.core.Keyword))?G__39439.fqn:null);
switch (G__39439__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39439__$1)].join('')));

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

//# sourceMappingURL=eval.js.map?rel=1576358205175
