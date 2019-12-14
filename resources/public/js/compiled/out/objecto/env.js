// Compiled by ClojureScript 1.10.520 {}
goog.provide('objecto.env');
goog.require('cljs.core');
objecto.env.subclass = (function objecto$env$subclass(inst,_params,_env){
return cljs.core.assoc.call(null,inst,new cljs.core.Keyword(null,"super","super",840752938),inst,new cljs.core.Keyword(null,"ident","ident",-742346),cljs.core.rand_int.call(null,(100000000)));
});
objecto.env.new_instance = (function objecto$env$new_instance(inst,_params,_env){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),inst], null);
});
objecto.env.env = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Object","Object",-1579320773),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"subclass","subclass",1661186879),objecto.env.subclass,new cljs.core.Keyword(null,"ident","ident",-742346),(0),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"gclass","gclass",-1771562299),(function (_,___$1,___$2){
return "class";
}),new cljs.core.Keyword(null,"class__new","class__new",-539799682),objecto.env.new_instance], null),new cljs.core.Keyword(null,"Boolean","Boolean",20610060),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"ident","ident",-742346),(2),new cljs.core.Keyword(null,"ifTrue:ifFalse","ifTrue:ifFalse",-1291562279),(function (self,params,env){
if(cljs.core.truth_(self)){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ifTrue","ifTrue",-753695849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (_,___$1,___$2){
return null;
})], null))).call(null,self,cljs.core.PersistentVector.EMPTY,env);
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ifFalse","ifFalse",-1810612446),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (_,___$1,___$2){
return null;
})], null))).call(null,self,cljs.core.PersistentVector.EMPTY,env);
}
})], null),new cljs.core.Keyword(null,"Number","Number",2146289584),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"double","double",884886883),(function (x,_,___$1){
return (x * (2));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(1),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"add","add",235287739),(function (x,params,_){
return (x + new cljs.core.Keyword(null,"add","add",235287739).cljs$core$IFn$_invoke$arity$1(params));
}),new cljs.core.Keyword(null,">",">",-555517146),(function (x,y,_){
return (x > y);
}),new cljs.core.Keyword(null,"+","+",1913524883),(function (x,y,_){
return (x + y);
})], null)], null));

//# sourceMappingURL=env.js.map?rel=1576357924324
