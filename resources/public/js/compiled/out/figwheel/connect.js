// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39436__delegate = function (x__39420__auto__){
if(cljs.core.truth_(objecto.core.on_js_reload)){
return cljs.core.apply.call(null,objecto.core.on_js_reload,x__39420__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","objecto.core/on-js-reload","' is missing"].join(''));
}
};
var G__39436 = function (var_args){
var x__39420__auto__ = null;
if (arguments.length > 0) {
var G__39437__i = 0, G__39437__a = new Array(arguments.length -  0);
while (G__39437__i < G__39437__a.length) {G__39437__a[G__39437__i] = arguments[G__39437__i + 0]; ++G__39437__i;}
  x__39420__auto__ = new cljs.core.IndexedSeq(G__39437__a,0,null);
} 
return G__39436__delegate.call(this,x__39420__auto__);};
G__39436.cljs$lang$maxFixedArity = 0;
G__39436.cljs$lang$applyTo = (function (arglist__39438){
var x__39420__auto__ = cljs.core.seq(arglist__39438);
return G__39436__delegate(x__39420__auto__);
});
G__39436.cljs$core$IFn$_invoke$arity$variadic = G__39436__delegate;
return G__39436;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1576361247923
