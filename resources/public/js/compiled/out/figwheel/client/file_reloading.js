// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37061_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37061_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37062 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37063 = null;
var count__37064 = (0);
var i__37065 = (0);
while(true){
if((i__37065 < count__37064)){
var n = cljs.core._nth.call(null,chunk__37063,i__37065);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__37066 = seq__37062;
var G__37067 = chunk__37063;
var G__37068 = count__37064;
var G__37069 = (i__37065 + (1));
seq__37062 = G__37066;
chunk__37063 = G__37067;
count__37064 = G__37068;
i__37065 = G__37069;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37062);
if(temp__5720__auto__){
var seq__37062__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37062__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__37062__$1);
var G__37070 = cljs.core.chunk_rest.call(null,seq__37062__$1);
var G__37071 = c__4550__auto__;
var G__37072 = cljs.core.count.call(null,c__4550__auto__);
var G__37073 = (0);
seq__37062 = G__37070;
chunk__37063 = G__37071;
count__37064 = G__37072;
i__37065 = G__37073;
continue;
} else {
var n = cljs.core.first.call(null,seq__37062__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__37074 = cljs.core.next.call(null,seq__37062__$1);
var G__37075 = null;
var G__37076 = (0);
var G__37077 = (0);
seq__37062 = G__37074;
chunk__37063 = G__37075;
count__37064 = G__37076;
i__37065 = G__37077;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__37078){
var vec__37079 = p__37078;
var _ = cljs.core.nth.call(null,vec__37079,(0),null);
var v = cljs.core.nth.call(null,vec__37079,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__37082){
var vec__37083 = p__37082;
var k = cljs.core.nth.call(null,vec__37083,(0),null);
var v = cljs.core.nth.call(null,vec__37083,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37095_37103 = cljs.core.seq.call(null,deps);
var chunk__37096_37104 = null;
var count__37097_37105 = (0);
var i__37098_37106 = (0);
while(true){
if((i__37098_37106 < count__37097_37105)){
var dep_37107 = cljs.core._nth.call(null,chunk__37096_37104,i__37098_37106);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_37107;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37107));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37107,(depth + (1)),state);
} else {
}


var G__37108 = seq__37095_37103;
var G__37109 = chunk__37096_37104;
var G__37110 = count__37097_37105;
var G__37111 = (i__37098_37106 + (1));
seq__37095_37103 = G__37108;
chunk__37096_37104 = G__37109;
count__37097_37105 = G__37110;
i__37098_37106 = G__37111;
continue;
} else {
var temp__5720__auto___37112 = cljs.core.seq.call(null,seq__37095_37103);
if(temp__5720__auto___37112){
var seq__37095_37113__$1 = temp__5720__auto___37112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37095_37113__$1)){
var c__4550__auto___37114 = cljs.core.chunk_first.call(null,seq__37095_37113__$1);
var G__37115 = cljs.core.chunk_rest.call(null,seq__37095_37113__$1);
var G__37116 = c__4550__auto___37114;
var G__37117 = cljs.core.count.call(null,c__4550__auto___37114);
var G__37118 = (0);
seq__37095_37103 = G__37115;
chunk__37096_37104 = G__37116;
count__37097_37105 = G__37117;
i__37098_37106 = G__37118;
continue;
} else {
var dep_37119 = cljs.core.first.call(null,seq__37095_37113__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_37119;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37119));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37119,(depth + (1)),state);
} else {
}


var G__37120 = cljs.core.next.call(null,seq__37095_37113__$1);
var G__37121 = null;
var G__37122 = (0);
var G__37123 = (0);
seq__37095_37103 = G__37120;
chunk__37096_37104 = G__37121;
count__37097_37105 = G__37122;
i__37098_37106 = G__37123;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37099){
var vec__37100 = p__37099;
var seq__37101 = cljs.core.seq.call(null,vec__37100);
var first__37102 = cljs.core.first.call(null,seq__37101);
var seq__37101__$1 = cljs.core.next.call(null,seq__37101);
var x = first__37102;
var xs = seq__37101__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37100,seq__37101,first__37102,seq__37101__$1,x,xs,get_deps__$1){
return (function (p1__37086_SHARP_){
return clojure.set.difference.call(null,p1__37086_SHARP_,x);
});})(vec__37100,seq__37101,first__37102,seq__37101__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37124 = cljs.core.seq.call(null,provides);
var chunk__37125 = null;
var count__37126 = (0);
var i__37127 = (0);
while(true){
if((i__37127 < count__37126)){
var prov = cljs.core._nth.call(null,chunk__37125,i__37127);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37136_37144 = cljs.core.seq.call(null,requires);
var chunk__37137_37145 = null;
var count__37138_37146 = (0);
var i__37139_37147 = (0);
while(true){
if((i__37139_37147 < count__37138_37146)){
var req_37148 = cljs.core._nth.call(null,chunk__37137_37145,i__37139_37147);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37148,prov);


var G__37149 = seq__37136_37144;
var G__37150 = chunk__37137_37145;
var G__37151 = count__37138_37146;
var G__37152 = (i__37139_37147 + (1));
seq__37136_37144 = G__37149;
chunk__37137_37145 = G__37150;
count__37138_37146 = G__37151;
i__37139_37147 = G__37152;
continue;
} else {
var temp__5720__auto___37153 = cljs.core.seq.call(null,seq__37136_37144);
if(temp__5720__auto___37153){
var seq__37136_37154__$1 = temp__5720__auto___37153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37136_37154__$1)){
var c__4550__auto___37155 = cljs.core.chunk_first.call(null,seq__37136_37154__$1);
var G__37156 = cljs.core.chunk_rest.call(null,seq__37136_37154__$1);
var G__37157 = c__4550__auto___37155;
var G__37158 = cljs.core.count.call(null,c__4550__auto___37155);
var G__37159 = (0);
seq__37136_37144 = G__37156;
chunk__37137_37145 = G__37157;
count__37138_37146 = G__37158;
i__37139_37147 = G__37159;
continue;
} else {
var req_37160 = cljs.core.first.call(null,seq__37136_37154__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37160,prov);


var G__37161 = cljs.core.next.call(null,seq__37136_37154__$1);
var G__37162 = null;
var G__37163 = (0);
var G__37164 = (0);
seq__37136_37144 = G__37161;
chunk__37137_37145 = G__37162;
count__37138_37146 = G__37163;
i__37139_37147 = G__37164;
continue;
}
} else {
}
}
break;
}


var G__37165 = seq__37124;
var G__37166 = chunk__37125;
var G__37167 = count__37126;
var G__37168 = (i__37127 + (1));
seq__37124 = G__37165;
chunk__37125 = G__37166;
count__37126 = G__37167;
i__37127 = G__37168;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37124);
if(temp__5720__auto__){
var seq__37124__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37124__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__37124__$1);
var G__37169 = cljs.core.chunk_rest.call(null,seq__37124__$1);
var G__37170 = c__4550__auto__;
var G__37171 = cljs.core.count.call(null,c__4550__auto__);
var G__37172 = (0);
seq__37124 = G__37169;
chunk__37125 = G__37170;
count__37126 = G__37171;
i__37127 = G__37172;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37124__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37140_37173 = cljs.core.seq.call(null,requires);
var chunk__37141_37174 = null;
var count__37142_37175 = (0);
var i__37143_37176 = (0);
while(true){
if((i__37143_37176 < count__37142_37175)){
var req_37177 = cljs.core._nth.call(null,chunk__37141_37174,i__37143_37176);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37177,prov);


var G__37178 = seq__37140_37173;
var G__37179 = chunk__37141_37174;
var G__37180 = count__37142_37175;
var G__37181 = (i__37143_37176 + (1));
seq__37140_37173 = G__37178;
chunk__37141_37174 = G__37179;
count__37142_37175 = G__37180;
i__37143_37176 = G__37181;
continue;
} else {
var temp__5720__auto___37182__$1 = cljs.core.seq.call(null,seq__37140_37173);
if(temp__5720__auto___37182__$1){
var seq__37140_37183__$1 = temp__5720__auto___37182__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37140_37183__$1)){
var c__4550__auto___37184 = cljs.core.chunk_first.call(null,seq__37140_37183__$1);
var G__37185 = cljs.core.chunk_rest.call(null,seq__37140_37183__$1);
var G__37186 = c__4550__auto___37184;
var G__37187 = cljs.core.count.call(null,c__4550__auto___37184);
var G__37188 = (0);
seq__37140_37173 = G__37185;
chunk__37141_37174 = G__37186;
count__37142_37175 = G__37187;
i__37143_37176 = G__37188;
continue;
} else {
var req_37189 = cljs.core.first.call(null,seq__37140_37183__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37189,prov);


var G__37190 = cljs.core.next.call(null,seq__37140_37183__$1);
var G__37191 = null;
var G__37192 = (0);
var G__37193 = (0);
seq__37140_37173 = G__37190;
chunk__37141_37174 = G__37191;
count__37142_37175 = G__37192;
i__37143_37176 = G__37193;
continue;
}
} else {
}
}
break;
}


var G__37194 = cljs.core.next.call(null,seq__37124__$1);
var G__37195 = null;
var G__37196 = (0);
var G__37197 = (0);
seq__37124 = G__37194;
chunk__37125 = G__37195;
count__37126 = G__37196;
i__37127 = G__37197;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37198_37202 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37199_37203 = null;
var count__37200_37204 = (0);
var i__37201_37205 = (0);
while(true){
if((i__37201_37205 < count__37200_37204)){
var ns_37206 = cljs.core._nth.call(null,chunk__37199_37203,i__37201_37205);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37206);


var G__37207 = seq__37198_37202;
var G__37208 = chunk__37199_37203;
var G__37209 = count__37200_37204;
var G__37210 = (i__37201_37205 + (1));
seq__37198_37202 = G__37207;
chunk__37199_37203 = G__37208;
count__37200_37204 = G__37209;
i__37201_37205 = G__37210;
continue;
} else {
var temp__5720__auto___37211 = cljs.core.seq.call(null,seq__37198_37202);
if(temp__5720__auto___37211){
var seq__37198_37212__$1 = temp__5720__auto___37211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37198_37212__$1)){
var c__4550__auto___37213 = cljs.core.chunk_first.call(null,seq__37198_37212__$1);
var G__37214 = cljs.core.chunk_rest.call(null,seq__37198_37212__$1);
var G__37215 = c__4550__auto___37213;
var G__37216 = cljs.core.count.call(null,c__4550__auto___37213);
var G__37217 = (0);
seq__37198_37202 = G__37214;
chunk__37199_37203 = G__37215;
count__37200_37204 = G__37216;
i__37201_37205 = G__37217;
continue;
} else {
var ns_37218 = cljs.core.first.call(null,seq__37198_37212__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37218);


var G__37219 = cljs.core.next.call(null,seq__37198_37212__$1);
var G__37220 = null;
var G__37221 = (0);
var G__37222 = (0);
seq__37198_37202 = G__37219;
chunk__37199_37203 = G__37220;
count__37200_37204 = G__37221;
i__37201_37205 = G__37222;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37223__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37224__i = 0, G__37224__a = new Array(arguments.length -  0);
while (G__37224__i < G__37224__a.length) {G__37224__a[G__37224__i] = arguments[G__37224__i + 0]; ++G__37224__i;}
  args = new cljs.core.IndexedSeq(G__37224__a,0,null);
} 
return G__37223__delegate.call(this,args);};
G__37223.cljs$lang$maxFixedArity = 0;
G__37223.cljs$lang$applyTo = (function (arglist__37225){
var args = cljs.core.seq(arglist__37225);
return G__37223__delegate(args);
});
G__37223.cljs$core$IFn$_invoke$arity$variadic = G__37223__delegate;
return G__37223;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__37226_SHARP_,p2__37227_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37226_SHARP_)),p2__37227_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__37228_SHARP_,p2__37229_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37228_SHARP_),p2__37229_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37230 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37230.addCallback(((function (G__37230){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37230))
);

G__37230.addErrback(((function (G__37230){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37230))
);

return G__37230;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37231){if((e37231 instanceof Error)){
var e = e37231;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37231;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37232){if((e37232 instanceof Error)){
var e = e37232;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37232;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37233 = cljs.core._EQ_;
var expr__37234 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37233.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37234))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37233.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37234))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37233.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37234))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37233,expr__37234){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37233,expr__37234))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37236,callback){
var map__37237 = p__37236;
var map__37237__$1 = (((((!((map__37237 == null))))?(((((map__37237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37237):map__37237);
var file_msg = map__37237__$1;
var request_url = cljs.core.get.call(null,map__37237__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37237,map__37237__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37237,map__37237__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__35055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto__){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto__){
return (function (state_37275){
var state_val_37276 = (state_37275[(1)]);
if((state_val_37276 === (7))){
var inst_37271 = (state_37275[(2)]);
var state_37275__$1 = state_37275;
var statearr_37277_37303 = state_37275__$1;
(statearr_37277_37303[(2)] = inst_37271);

(statearr_37277_37303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37276 === (1))){
var state_37275__$1 = state_37275;
var statearr_37278_37304 = state_37275__$1;
(statearr_37278_37304[(2)] = null);

(statearr_37278_37304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37276 === (4))){
var inst_37241 = (state_37275[(7)]);
var inst_37241__$1 = (state_37275[(2)]);
var state_37275__$1 = (function (){var statearr_37279 = state_37275;
(statearr_37279[(7)] = inst_37241__$1);

return statearr_37279;
})();
if(cljs.core.truth_(inst_37241__$1)){
var statearr_37280_37305 = state_37275__$1;
(statearr_37280_37305[(1)] = (5));

} else {
var statearr_37281_37306 = state_37275__$1;
(statearr_37281_37306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37276 === (15))){
var inst_37254 = (state_37275[(8)]);
var inst_37256 = (state_37275[(9)]);
var inst_37258 = inst_37256.call(null,inst_37254);
var state_37275__$1 = state_37275;
var statearr_37282_37307 = state_37275__$1;
(statearr_37282_37307[(2)] = inst_37258);

(statearr_37282_37307[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37276 === (13))){
var inst_37265 = (state_37275[(2)]);
var state_37275__$1 = state_37275;
var statearr_37283_37308 = state_37275__$1;
(statearr_37283_37308[(2)] = inst_37265);

(statearr_37283_37308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37276 === (6))){
var state_37275__$1 = state_37275;
var statearr_37284_37309 = state_37275__$1;
(statearr_37284_37309[(2)] = null);

(statearr_37284_37309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37276 === (17))){
var inst_37262 = (state_37275[(2)]);
var state_37275__$1 = state_37275;
var statearr_37285_37310 = state_37275__$1;
(statearr_37285_37310[(2)] = inst_37262);

(statearr_37285_37310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37276 === (3))){
var inst_37273 = (state_37275[(2)]);
var state_37275__$1 = state_37275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37275__$1,inst_37273);
} else {
if((state_val_37276 === (12))){
var state_37275__$1 = state_37275;
var statearr_37286_37311 = state_37275__$1;
(statearr_37286_37311[(2)] = null);

(statearr_37286_37311[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37276 === (2))){
var state_37275__$1 = state_37275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37275__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37276 === (11))){
var inst_37246 = (state_37275[(10)]);
var inst_37252 = figwheel.client.file_reloading.blocking_load.call(null,inst_37246);
var state_37275__$1 = state_37275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37275__$1,(14),inst_37252);
} else {
if((state_val_37276 === (9))){
var inst_37246 = (state_37275[(10)]);
var state_37275__$1 = state_37275;
if(cljs.core.truth_(inst_37246)){
var statearr_37287_37312 = state_37275__$1;
(statearr_37287_37312[(1)] = (11));

} else {
var statearr_37288_37313 = state_37275__$1;
(statearr_37288_37313[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37276 === (5))){
var inst_37247 = (state_37275[(11)]);
var inst_37241 = (state_37275[(7)]);
var inst_37246 = cljs.core.nth.call(null,inst_37241,(0),null);
var inst_37247__$1 = cljs.core.nth.call(null,inst_37241,(1),null);
var state_37275__$1 = (function (){var statearr_37289 = state_37275;
(statearr_37289[(11)] = inst_37247__$1);

(statearr_37289[(10)] = inst_37246);

return statearr_37289;
})();
if(cljs.core.truth_(inst_37247__$1)){
var statearr_37290_37314 = state_37275__$1;
(statearr_37290_37314[(1)] = (8));

} else {
var statearr_37291_37315 = state_37275__$1;
(statearr_37291_37315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37276 === (14))){
var inst_37246 = (state_37275[(10)]);
var inst_37256 = (state_37275[(9)]);
var inst_37254 = (state_37275[(2)]);
var inst_37255 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37256__$1 = cljs.core.get.call(null,inst_37255,inst_37246);
var state_37275__$1 = (function (){var statearr_37292 = state_37275;
(statearr_37292[(8)] = inst_37254);

(statearr_37292[(9)] = inst_37256__$1);

return statearr_37292;
})();
if(cljs.core.truth_(inst_37256__$1)){
var statearr_37293_37316 = state_37275__$1;
(statearr_37293_37316[(1)] = (15));

} else {
var statearr_37294_37317 = state_37275__$1;
(statearr_37294_37317[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37276 === (16))){
var inst_37254 = (state_37275[(8)]);
var inst_37260 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37254);
var state_37275__$1 = state_37275;
var statearr_37295_37318 = state_37275__$1;
(statearr_37295_37318[(2)] = inst_37260);

(statearr_37295_37318[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37276 === (10))){
var inst_37267 = (state_37275[(2)]);
var state_37275__$1 = (function (){var statearr_37296 = state_37275;
(statearr_37296[(12)] = inst_37267);

return statearr_37296;
})();
var statearr_37297_37319 = state_37275__$1;
(statearr_37297_37319[(2)] = null);

(statearr_37297_37319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37276 === (8))){
var inst_37247 = (state_37275[(11)]);
var inst_37249 = eval(inst_37247);
var state_37275__$1 = state_37275;
var statearr_37298_37320 = state_37275__$1;
(statearr_37298_37320[(2)] = inst_37249);

(statearr_37298_37320[(1)] = (10));


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
});})(c__35055__auto__))
;
return ((function (switch__34960__auto__,c__35055__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34961__auto__ = null;
var figwheel$client$file_reloading$state_machine__34961__auto____0 = (function (){
var statearr_37299 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37299[(0)] = figwheel$client$file_reloading$state_machine__34961__auto__);

(statearr_37299[(1)] = (1));

return statearr_37299;
});
var figwheel$client$file_reloading$state_machine__34961__auto____1 = (function (state_37275){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_37275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e37300){if((e37300 instanceof Object)){
var ex__34964__auto__ = e37300;
var statearr_37301_37321 = state_37275;
(statearr_37301_37321[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37322 = state_37275;
state_37275 = G__37322;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34961__auto__ = function(state_37275){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34961__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34961__auto____1.call(this,state_37275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34961__auto____0;
figwheel$client$file_reloading$state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34961__auto____1;
return figwheel$client$file_reloading$state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto__))
})();
var state__35057__auto__ = (function (){var statearr_37302 = f__35056__auto__.call(null);
(statearr_37302[(6)] = c__35055__auto__);

return statearr_37302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto__))
);

return c__35055__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37324 = arguments.length;
switch (G__37324) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37326,callback){
var map__37327 = p__37326;
var map__37327__$1 = (((((!((map__37327 == null))))?(((((map__37327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37327):map__37327);
var file_msg = map__37327__$1;
var namespace = cljs.core.get.call(null,map__37327__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37327,map__37327__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37327,map__37327__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37329){
var map__37330 = p__37329;
var map__37330__$1 = (((((!((map__37330 == null))))?(((((map__37330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37330):map__37330);
var file_msg = map__37330__$1;
var namespace = cljs.core.get.call(null,map__37330__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37332){
var map__37333 = p__37332;
var map__37333__$1 = (((((!((map__37333 == null))))?(((((map__37333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37333):map__37333);
var file_msg = map__37333__$1;
var namespace = cljs.core.get.call(null,map__37333__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37335,callback){
var map__37336 = p__37335;
var map__37336__$1 = (((((!((map__37336 == null))))?(((((map__37336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37336):map__37336);
var file_msg = map__37336__$1;
var request_url = cljs.core.get.call(null,map__37336__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37336__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__35055__auto___37386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto___37386,out){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto___37386,out){
return (function (state_37371){
var state_val_37372 = (state_37371[(1)]);
if((state_val_37372 === (1))){
var inst_37345 = cljs.core.seq.call(null,files);
var inst_37346 = cljs.core.first.call(null,inst_37345);
var inst_37347 = cljs.core.next.call(null,inst_37345);
var inst_37348 = files;
var state_37371__$1 = (function (){var statearr_37373 = state_37371;
(statearr_37373[(7)] = inst_37346);

(statearr_37373[(8)] = inst_37348);

(statearr_37373[(9)] = inst_37347);

return statearr_37373;
})();
var statearr_37374_37387 = state_37371__$1;
(statearr_37374_37387[(2)] = null);

(statearr_37374_37387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (2))){
var inst_37354 = (state_37371[(10)]);
var inst_37348 = (state_37371[(8)]);
var inst_37353 = cljs.core.seq.call(null,inst_37348);
var inst_37354__$1 = cljs.core.first.call(null,inst_37353);
var inst_37355 = cljs.core.next.call(null,inst_37353);
var inst_37356 = (inst_37354__$1 == null);
var inst_37357 = cljs.core.not.call(null,inst_37356);
var state_37371__$1 = (function (){var statearr_37375 = state_37371;
(statearr_37375[(11)] = inst_37355);

(statearr_37375[(10)] = inst_37354__$1);

return statearr_37375;
})();
if(inst_37357){
var statearr_37376_37388 = state_37371__$1;
(statearr_37376_37388[(1)] = (4));

} else {
var statearr_37377_37389 = state_37371__$1;
(statearr_37377_37389[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (3))){
var inst_37369 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37371__$1,inst_37369);
} else {
if((state_val_37372 === (4))){
var inst_37354 = (state_37371[(10)]);
var inst_37359 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37354);
var state_37371__$1 = state_37371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37371__$1,(7),inst_37359);
} else {
if((state_val_37372 === (5))){
var inst_37365 = cljs.core.async.close_BANG_.call(null,out);
var state_37371__$1 = state_37371;
var statearr_37378_37390 = state_37371__$1;
(statearr_37378_37390[(2)] = inst_37365);

(statearr_37378_37390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (6))){
var inst_37367 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
var statearr_37379_37391 = state_37371__$1;
(statearr_37379_37391[(2)] = inst_37367);

(statearr_37379_37391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (7))){
var inst_37355 = (state_37371[(11)]);
var inst_37361 = (state_37371[(2)]);
var inst_37362 = cljs.core.async.put_BANG_.call(null,out,inst_37361);
var inst_37348 = inst_37355;
var state_37371__$1 = (function (){var statearr_37380 = state_37371;
(statearr_37380[(12)] = inst_37362);

(statearr_37380[(8)] = inst_37348);

return statearr_37380;
})();
var statearr_37381_37392 = state_37371__$1;
(statearr_37381_37392[(2)] = null);

(statearr_37381_37392[(1)] = (2));


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
});})(c__35055__auto___37386,out))
;
return ((function (switch__34960__auto__,c__35055__auto___37386,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34961__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34961__auto____0 = (function (){
var statearr_37382 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37382[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34961__auto__);

(statearr_37382[(1)] = (1));

return statearr_37382;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34961__auto____1 = (function (state_37371){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_37371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e37383){if((e37383 instanceof Object)){
var ex__34964__auto__ = e37383;
var statearr_37384_37393 = state_37371;
(statearr_37384_37393[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37394 = state_37371;
state_37371 = G__37394;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34961__auto__ = function(state_37371){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34961__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34961__auto____1.call(this,state_37371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34961__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34961__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto___37386,out))
})();
var state__35057__auto__ = (function (){var statearr_37385 = f__35056__auto__.call(null);
(statearr_37385[(6)] = c__35055__auto___37386);

return statearr_37385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto___37386,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37395,opts){
var map__37396 = p__37395;
var map__37396__$1 = (((((!((map__37396 == null))))?(((((map__37396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37396):map__37396);
var eval_body = cljs.core.get.call(null,map__37396__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37396__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37398){var e = e37398;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37399_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37399_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37400){
var vec__37401 = p__37400;
var k = cljs.core.nth.call(null,vec__37401,(0),null);
var v = cljs.core.nth.call(null,vec__37401,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37404){
var vec__37405 = p__37404;
var k = cljs.core.nth.call(null,vec__37405,(0),null);
var v = cljs.core.nth.call(null,vec__37405,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37411,p__37412){
var map__37413 = p__37411;
var map__37413__$1 = (((((!((map__37413 == null))))?(((((map__37413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37413):map__37413);
var opts = map__37413__$1;
var before_jsload = cljs.core.get.call(null,map__37413__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37413__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37413__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37414 = p__37412;
var map__37414__$1 = (((((!((map__37414 == null))))?(((((map__37414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37414):map__37414);
var msg = map__37414__$1;
var files = cljs.core.get.call(null,map__37414__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37414__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37414__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35056__auto__ = (function (){var switch__34960__auto__ = ((function (c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37568){
var state_val_37569 = (state_37568[(1)]);
if((state_val_37569 === (7))){
var inst_37431 = (state_37568[(7)]);
var inst_37428 = (state_37568[(8)]);
var inst_37430 = (state_37568[(9)]);
var inst_37429 = (state_37568[(10)]);
var inst_37436 = cljs.core._nth.call(null,inst_37429,inst_37431);
var inst_37437 = figwheel.client.file_reloading.eval_body.call(null,inst_37436,opts);
var inst_37438 = (inst_37431 + (1));
var tmp37570 = inst_37428;
var tmp37571 = inst_37430;
var tmp37572 = inst_37429;
var inst_37428__$1 = tmp37570;
var inst_37429__$1 = tmp37572;
var inst_37430__$1 = tmp37571;
var inst_37431__$1 = inst_37438;
var state_37568__$1 = (function (){var statearr_37573 = state_37568;
(statearr_37573[(7)] = inst_37431__$1);

(statearr_37573[(8)] = inst_37428__$1);

(statearr_37573[(11)] = inst_37437);

(statearr_37573[(9)] = inst_37430__$1);

(statearr_37573[(10)] = inst_37429__$1);

return statearr_37573;
})();
var statearr_37574_37657 = state_37568__$1;
(statearr_37574_37657[(2)] = null);

(statearr_37574_37657[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (20))){
var inst_37471 = (state_37568[(12)]);
var inst_37479 = figwheel.client.file_reloading.sort_files.call(null,inst_37471);
var state_37568__$1 = state_37568;
var statearr_37575_37658 = state_37568__$1;
(statearr_37575_37658[(2)] = inst_37479);

(statearr_37575_37658[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (27))){
var state_37568__$1 = state_37568;
var statearr_37576_37659 = state_37568__$1;
(statearr_37576_37659[(2)] = null);

(statearr_37576_37659[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (1))){
var inst_37420 = (state_37568[(13)]);
var inst_37417 = before_jsload.call(null,files);
var inst_37418 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37419 = (function (){return ((function (inst_37420,inst_37417,inst_37418,state_val_37569,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37408_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37408_SHARP_);
});
;})(inst_37420,inst_37417,inst_37418,state_val_37569,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37420__$1 = cljs.core.filter.call(null,inst_37419,files);
var inst_37421 = cljs.core.not_empty.call(null,inst_37420__$1);
var state_37568__$1 = (function (){var statearr_37577 = state_37568;
(statearr_37577[(14)] = inst_37418);

(statearr_37577[(13)] = inst_37420__$1);

(statearr_37577[(15)] = inst_37417);

return statearr_37577;
})();
if(cljs.core.truth_(inst_37421)){
var statearr_37578_37660 = state_37568__$1;
(statearr_37578_37660[(1)] = (2));

} else {
var statearr_37579_37661 = state_37568__$1;
(statearr_37579_37661[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (24))){
var state_37568__$1 = state_37568;
var statearr_37580_37662 = state_37568__$1;
(statearr_37580_37662[(2)] = null);

(statearr_37580_37662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (39))){
var inst_37521 = (state_37568[(16)]);
var state_37568__$1 = state_37568;
var statearr_37581_37663 = state_37568__$1;
(statearr_37581_37663[(2)] = inst_37521);

(statearr_37581_37663[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (46))){
var inst_37563 = (state_37568[(2)]);
var state_37568__$1 = state_37568;
var statearr_37582_37664 = state_37568__$1;
(statearr_37582_37664[(2)] = inst_37563);

(statearr_37582_37664[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (4))){
var inst_37465 = (state_37568[(2)]);
var inst_37466 = cljs.core.List.EMPTY;
var inst_37467 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37466);
var inst_37468 = (function (){return ((function (inst_37465,inst_37466,inst_37467,state_val_37569,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37409_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37409_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37409_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37409_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_37465,inst_37466,inst_37467,state_val_37569,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37469 = cljs.core.filter.call(null,inst_37468,files);
var inst_37470 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37471 = cljs.core.concat.call(null,inst_37469,inst_37470);
var state_37568__$1 = (function (){var statearr_37583 = state_37568;
(statearr_37583[(17)] = inst_37465);

(statearr_37583[(18)] = inst_37467);

(statearr_37583[(12)] = inst_37471);

return statearr_37583;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37584_37665 = state_37568__$1;
(statearr_37584_37665[(1)] = (16));

} else {
var statearr_37585_37666 = state_37568__$1;
(statearr_37585_37666[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (15))){
var inst_37455 = (state_37568[(2)]);
var state_37568__$1 = state_37568;
var statearr_37586_37667 = state_37568__$1;
(statearr_37586_37667[(2)] = inst_37455);

(statearr_37586_37667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (21))){
var inst_37481 = (state_37568[(19)]);
var inst_37481__$1 = (state_37568[(2)]);
var inst_37482 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37481__$1);
var state_37568__$1 = (function (){var statearr_37587 = state_37568;
(statearr_37587[(19)] = inst_37481__$1);

return statearr_37587;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37568__$1,(22),inst_37482);
} else {
if((state_val_37569 === (31))){
var inst_37566 = (state_37568[(2)]);
var state_37568__$1 = state_37568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37568__$1,inst_37566);
} else {
if((state_val_37569 === (32))){
var inst_37521 = (state_37568[(16)]);
var inst_37526 = inst_37521.cljs$lang$protocol_mask$partition0$;
var inst_37527 = (inst_37526 & (64));
var inst_37528 = inst_37521.cljs$core$ISeq$;
var inst_37529 = (cljs.core.PROTOCOL_SENTINEL === inst_37528);
var inst_37530 = ((inst_37527) || (inst_37529));
var state_37568__$1 = state_37568;
if(cljs.core.truth_(inst_37530)){
var statearr_37588_37668 = state_37568__$1;
(statearr_37588_37668[(1)] = (35));

} else {
var statearr_37589_37669 = state_37568__$1;
(statearr_37589_37669[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (40))){
var inst_37543 = (state_37568[(20)]);
var inst_37542 = (state_37568[(2)]);
var inst_37543__$1 = cljs.core.get.call(null,inst_37542,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37544 = cljs.core.get.call(null,inst_37542,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37545 = cljs.core.not_empty.call(null,inst_37543__$1);
var state_37568__$1 = (function (){var statearr_37590 = state_37568;
(statearr_37590[(21)] = inst_37544);

(statearr_37590[(20)] = inst_37543__$1);

return statearr_37590;
})();
if(cljs.core.truth_(inst_37545)){
var statearr_37591_37670 = state_37568__$1;
(statearr_37591_37670[(1)] = (41));

} else {
var statearr_37592_37671 = state_37568__$1;
(statearr_37592_37671[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (33))){
var state_37568__$1 = state_37568;
var statearr_37593_37672 = state_37568__$1;
(statearr_37593_37672[(2)] = false);

(statearr_37593_37672[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (13))){
var inst_37441 = (state_37568[(22)]);
var inst_37445 = cljs.core.chunk_first.call(null,inst_37441);
var inst_37446 = cljs.core.chunk_rest.call(null,inst_37441);
var inst_37447 = cljs.core.count.call(null,inst_37445);
var inst_37428 = inst_37446;
var inst_37429 = inst_37445;
var inst_37430 = inst_37447;
var inst_37431 = (0);
var state_37568__$1 = (function (){var statearr_37594 = state_37568;
(statearr_37594[(7)] = inst_37431);

(statearr_37594[(8)] = inst_37428);

(statearr_37594[(9)] = inst_37430);

(statearr_37594[(10)] = inst_37429);

return statearr_37594;
})();
var statearr_37595_37673 = state_37568__$1;
(statearr_37595_37673[(2)] = null);

(statearr_37595_37673[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (22))){
var inst_37485 = (state_37568[(23)]);
var inst_37489 = (state_37568[(24)]);
var inst_37481 = (state_37568[(19)]);
var inst_37484 = (state_37568[(25)]);
var inst_37484__$1 = (state_37568[(2)]);
var inst_37485__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37484__$1);
var inst_37486 = (function (){var all_files = inst_37481;
var res_SINGLEQUOTE_ = inst_37484__$1;
var res = inst_37485__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37485,inst_37489,inst_37481,inst_37484,inst_37484__$1,inst_37485__$1,state_val_37569,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37410_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37410_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37485,inst_37489,inst_37481,inst_37484,inst_37484__$1,inst_37485__$1,state_val_37569,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37487 = cljs.core.filter.call(null,inst_37486,inst_37484__$1);
var inst_37488 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37489__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37488);
var inst_37490 = cljs.core.not_empty.call(null,inst_37489__$1);
var state_37568__$1 = (function (){var statearr_37596 = state_37568;
(statearr_37596[(23)] = inst_37485__$1);

(statearr_37596[(24)] = inst_37489__$1);

(statearr_37596[(26)] = inst_37487);

(statearr_37596[(25)] = inst_37484__$1);

return statearr_37596;
})();
if(cljs.core.truth_(inst_37490)){
var statearr_37597_37674 = state_37568__$1;
(statearr_37597_37674[(1)] = (23));

} else {
var statearr_37598_37675 = state_37568__$1;
(statearr_37598_37675[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (36))){
var state_37568__$1 = state_37568;
var statearr_37599_37676 = state_37568__$1;
(statearr_37599_37676[(2)] = false);

(statearr_37599_37676[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (41))){
var inst_37543 = (state_37568[(20)]);
var inst_37547 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37548 = cljs.core.map.call(null,inst_37547,inst_37543);
var inst_37549 = cljs.core.pr_str.call(null,inst_37548);
var inst_37550 = ["figwheel-no-load meta-data: ",inst_37549].join('');
var inst_37551 = figwheel.client.utils.log.call(null,inst_37550);
var state_37568__$1 = state_37568;
var statearr_37600_37677 = state_37568__$1;
(statearr_37600_37677[(2)] = inst_37551);

(statearr_37600_37677[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (43))){
var inst_37544 = (state_37568[(21)]);
var inst_37554 = (state_37568[(2)]);
var inst_37555 = cljs.core.not_empty.call(null,inst_37544);
var state_37568__$1 = (function (){var statearr_37601 = state_37568;
(statearr_37601[(27)] = inst_37554);

return statearr_37601;
})();
if(cljs.core.truth_(inst_37555)){
var statearr_37602_37678 = state_37568__$1;
(statearr_37602_37678[(1)] = (44));

} else {
var statearr_37603_37679 = state_37568__$1;
(statearr_37603_37679[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (29))){
var inst_37485 = (state_37568[(23)]);
var inst_37489 = (state_37568[(24)]);
var inst_37487 = (state_37568[(26)]);
var inst_37481 = (state_37568[(19)]);
var inst_37484 = (state_37568[(25)]);
var inst_37521 = (state_37568[(16)]);
var inst_37517 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37520 = (function (){var all_files = inst_37481;
var res_SINGLEQUOTE_ = inst_37484;
var res = inst_37485;
var files_not_loaded = inst_37487;
var dependencies_that_loaded = inst_37489;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37485,inst_37489,inst_37487,inst_37481,inst_37484,inst_37521,inst_37517,state_val_37569,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37519){
var map__37604 = p__37519;
var map__37604__$1 = (((((!((map__37604 == null))))?(((((map__37604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37604):map__37604);
var namespace = cljs.core.get.call(null,map__37604__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37485,inst_37489,inst_37487,inst_37481,inst_37484,inst_37521,inst_37517,state_val_37569,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37521__$1 = cljs.core.group_by.call(null,inst_37520,inst_37487);
var inst_37523 = (inst_37521__$1 == null);
var inst_37524 = cljs.core.not.call(null,inst_37523);
var state_37568__$1 = (function (){var statearr_37606 = state_37568;
(statearr_37606[(16)] = inst_37521__$1);

(statearr_37606[(28)] = inst_37517);

return statearr_37606;
})();
if(inst_37524){
var statearr_37607_37680 = state_37568__$1;
(statearr_37607_37680[(1)] = (32));

} else {
var statearr_37608_37681 = state_37568__$1;
(statearr_37608_37681[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (44))){
var inst_37544 = (state_37568[(21)]);
var inst_37557 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37544);
var inst_37558 = cljs.core.pr_str.call(null,inst_37557);
var inst_37559 = ["not required: ",inst_37558].join('');
var inst_37560 = figwheel.client.utils.log.call(null,inst_37559);
var state_37568__$1 = state_37568;
var statearr_37609_37682 = state_37568__$1;
(statearr_37609_37682[(2)] = inst_37560);

(statearr_37609_37682[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (6))){
var inst_37462 = (state_37568[(2)]);
var state_37568__$1 = state_37568;
var statearr_37610_37683 = state_37568__$1;
(statearr_37610_37683[(2)] = inst_37462);

(statearr_37610_37683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (28))){
var inst_37487 = (state_37568[(26)]);
var inst_37514 = (state_37568[(2)]);
var inst_37515 = cljs.core.not_empty.call(null,inst_37487);
var state_37568__$1 = (function (){var statearr_37611 = state_37568;
(statearr_37611[(29)] = inst_37514);

return statearr_37611;
})();
if(cljs.core.truth_(inst_37515)){
var statearr_37612_37684 = state_37568__$1;
(statearr_37612_37684[(1)] = (29));

} else {
var statearr_37613_37685 = state_37568__$1;
(statearr_37613_37685[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (25))){
var inst_37485 = (state_37568[(23)]);
var inst_37501 = (state_37568[(2)]);
var inst_37502 = cljs.core.not_empty.call(null,inst_37485);
var state_37568__$1 = (function (){var statearr_37614 = state_37568;
(statearr_37614[(30)] = inst_37501);

return statearr_37614;
})();
if(cljs.core.truth_(inst_37502)){
var statearr_37615_37686 = state_37568__$1;
(statearr_37615_37686[(1)] = (26));

} else {
var statearr_37616_37687 = state_37568__$1;
(statearr_37616_37687[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (34))){
var inst_37537 = (state_37568[(2)]);
var state_37568__$1 = state_37568;
if(cljs.core.truth_(inst_37537)){
var statearr_37617_37688 = state_37568__$1;
(statearr_37617_37688[(1)] = (38));

} else {
var statearr_37618_37689 = state_37568__$1;
(statearr_37618_37689[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (17))){
var state_37568__$1 = state_37568;
var statearr_37619_37690 = state_37568__$1;
(statearr_37619_37690[(2)] = recompile_dependents);

(statearr_37619_37690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (3))){
var state_37568__$1 = state_37568;
var statearr_37620_37691 = state_37568__$1;
(statearr_37620_37691[(2)] = null);

(statearr_37620_37691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (12))){
var inst_37458 = (state_37568[(2)]);
var state_37568__$1 = state_37568;
var statearr_37621_37692 = state_37568__$1;
(statearr_37621_37692[(2)] = inst_37458);

(statearr_37621_37692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (2))){
var inst_37420 = (state_37568[(13)]);
var inst_37427 = cljs.core.seq.call(null,inst_37420);
var inst_37428 = inst_37427;
var inst_37429 = null;
var inst_37430 = (0);
var inst_37431 = (0);
var state_37568__$1 = (function (){var statearr_37622 = state_37568;
(statearr_37622[(7)] = inst_37431);

(statearr_37622[(8)] = inst_37428);

(statearr_37622[(9)] = inst_37430);

(statearr_37622[(10)] = inst_37429);

return statearr_37622;
})();
var statearr_37623_37693 = state_37568__$1;
(statearr_37623_37693[(2)] = null);

(statearr_37623_37693[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (23))){
var inst_37485 = (state_37568[(23)]);
var inst_37489 = (state_37568[(24)]);
var inst_37487 = (state_37568[(26)]);
var inst_37481 = (state_37568[(19)]);
var inst_37484 = (state_37568[(25)]);
var inst_37492 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37494 = (function (){var all_files = inst_37481;
var res_SINGLEQUOTE_ = inst_37484;
var res = inst_37485;
var files_not_loaded = inst_37487;
var dependencies_that_loaded = inst_37489;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37485,inst_37489,inst_37487,inst_37481,inst_37484,inst_37492,state_val_37569,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37493){
var map__37624 = p__37493;
var map__37624__$1 = (((((!((map__37624 == null))))?(((((map__37624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37624):map__37624);
var request_url = cljs.core.get.call(null,map__37624__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37485,inst_37489,inst_37487,inst_37481,inst_37484,inst_37492,state_val_37569,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37495 = cljs.core.reverse.call(null,inst_37489);
var inst_37496 = cljs.core.map.call(null,inst_37494,inst_37495);
var inst_37497 = cljs.core.pr_str.call(null,inst_37496);
var inst_37498 = figwheel.client.utils.log.call(null,inst_37497);
var state_37568__$1 = (function (){var statearr_37626 = state_37568;
(statearr_37626[(31)] = inst_37492);

return statearr_37626;
})();
var statearr_37627_37694 = state_37568__$1;
(statearr_37627_37694[(2)] = inst_37498);

(statearr_37627_37694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (35))){
var state_37568__$1 = state_37568;
var statearr_37628_37695 = state_37568__$1;
(statearr_37628_37695[(2)] = true);

(statearr_37628_37695[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (19))){
var inst_37471 = (state_37568[(12)]);
var inst_37477 = figwheel.client.file_reloading.expand_files.call(null,inst_37471);
var state_37568__$1 = state_37568;
var statearr_37629_37696 = state_37568__$1;
(statearr_37629_37696[(2)] = inst_37477);

(statearr_37629_37696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (11))){
var state_37568__$1 = state_37568;
var statearr_37630_37697 = state_37568__$1;
(statearr_37630_37697[(2)] = null);

(statearr_37630_37697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (9))){
var inst_37460 = (state_37568[(2)]);
var state_37568__$1 = state_37568;
var statearr_37631_37698 = state_37568__$1;
(statearr_37631_37698[(2)] = inst_37460);

(statearr_37631_37698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (5))){
var inst_37431 = (state_37568[(7)]);
var inst_37430 = (state_37568[(9)]);
var inst_37433 = (inst_37431 < inst_37430);
var inst_37434 = inst_37433;
var state_37568__$1 = state_37568;
if(cljs.core.truth_(inst_37434)){
var statearr_37632_37699 = state_37568__$1;
(statearr_37632_37699[(1)] = (7));

} else {
var statearr_37633_37700 = state_37568__$1;
(statearr_37633_37700[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (14))){
var inst_37441 = (state_37568[(22)]);
var inst_37450 = cljs.core.first.call(null,inst_37441);
var inst_37451 = figwheel.client.file_reloading.eval_body.call(null,inst_37450,opts);
var inst_37452 = cljs.core.next.call(null,inst_37441);
var inst_37428 = inst_37452;
var inst_37429 = null;
var inst_37430 = (0);
var inst_37431 = (0);
var state_37568__$1 = (function (){var statearr_37634 = state_37568;
(statearr_37634[(7)] = inst_37431);

(statearr_37634[(8)] = inst_37428);

(statearr_37634[(9)] = inst_37430);

(statearr_37634[(32)] = inst_37451);

(statearr_37634[(10)] = inst_37429);

return statearr_37634;
})();
var statearr_37635_37701 = state_37568__$1;
(statearr_37635_37701[(2)] = null);

(statearr_37635_37701[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (45))){
var state_37568__$1 = state_37568;
var statearr_37636_37702 = state_37568__$1;
(statearr_37636_37702[(2)] = null);

(statearr_37636_37702[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (26))){
var inst_37485 = (state_37568[(23)]);
var inst_37489 = (state_37568[(24)]);
var inst_37487 = (state_37568[(26)]);
var inst_37481 = (state_37568[(19)]);
var inst_37484 = (state_37568[(25)]);
var inst_37504 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37506 = (function (){var all_files = inst_37481;
var res_SINGLEQUOTE_ = inst_37484;
var res = inst_37485;
var files_not_loaded = inst_37487;
var dependencies_that_loaded = inst_37489;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37485,inst_37489,inst_37487,inst_37481,inst_37484,inst_37504,state_val_37569,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37505){
var map__37637 = p__37505;
var map__37637__$1 = (((((!((map__37637 == null))))?(((((map__37637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37637):map__37637);
var namespace = cljs.core.get.call(null,map__37637__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37637__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37485,inst_37489,inst_37487,inst_37481,inst_37484,inst_37504,state_val_37569,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37507 = cljs.core.map.call(null,inst_37506,inst_37485);
var inst_37508 = cljs.core.pr_str.call(null,inst_37507);
var inst_37509 = figwheel.client.utils.log.call(null,inst_37508);
var inst_37510 = (function (){var all_files = inst_37481;
var res_SINGLEQUOTE_ = inst_37484;
var res = inst_37485;
var files_not_loaded = inst_37487;
var dependencies_that_loaded = inst_37489;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37485,inst_37489,inst_37487,inst_37481,inst_37484,inst_37504,inst_37506,inst_37507,inst_37508,inst_37509,state_val_37569,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37485,inst_37489,inst_37487,inst_37481,inst_37484,inst_37504,inst_37506,inst_37507,inst_37508,inst_37509,state_val_37569,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37511 = setTimeout(inst_37510,(10));
var state_37568__$1 = (function (){var statearr_37639 = state_37568;
(statearr_37639[(33)] = inst_37504);

(statearr_37639[(34)] = inst_37509);

return statearr_37639;
})();
var statearr_37640_37703 = state_37568__$1;
(statearr_37640_37703[(2)] = inst_37511);

(statearr_37640_37703[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (16))){
var state_37568__$1 = state_37568;
var statearr_37641_37704 = state_37568__$1;
(statearr_37641_37704[(2)] = reload_dependents);

(statearr_37641_37704[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (38))){
var inst_37521 = (state_37568[(16)]);
var inst_37539 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37521);
var state_37568__$1 = state_37568;
var statearr_37642_37705 = state_37568__$1;
(statearr_37642_37705[(2)] = inst_37539);

(statearr_37642_37705[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (30))){
var state_37568__$1 = state_37568;
var statearr_37643_37706 = state_37568__$1;
(statearr_37643_37706[(2)] = null);

(statearr_37643_37706[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (10))){
var inst_37441 = (state_37568[(22)]);
var inst_37443 = cljs.core.chunked_seq_QMARK_.call(null,inst_37441);
var state_37568__$1 = state_37568;
if(inst_37443){
var statearr_37644_37707 = state_37568__$1;
(statearr_37644_37707[(1)] = (13));

} else {
var statearr_37645_37708 = state_37568__$1;
(statearr_37645_37708[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (18))){
var inst_37475 = (state_37568[(2)]);
var state_37568__$1 = state_37568;
if(cljs.core.truth_(inst_37475)){
var statearr_37646_37709 = state_37568__$1;
(statearr_37646_37709[(1)] = (19));

} else {
var statearr_37647_37710 = state_37568__$1;
(statearr_37647_37710[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (42))){
var state_37568__$1 = state_37568;
var statearr_37648_37711 = state_37568__$1;
(statearr_37648_37711[(2)] = null);

(statearr_37648_37711[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (37))){
var inst_37534 = (state_37568[(2)]);
var state_37568__$1 = state_37568;
var statearr_37649_37712 = state_37568__$1;
(statearr_37649_37712[(2)] = inst_37534);

(statearr_37649_37712[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37569 === (8))){
var inst_37441 = (state_37568[(22)]);
var inst_37428 = (state_37568[(8)]);
var inst_37441__$1 = cljs.core.seq.call(null,inst_37428);
var state_37568__$1 = (function (){var statearr_37650 = state_37568;
(statearr_37650[(22)] = inst_37441__$1);

return statearr_37650;
})();
if(inst_37441__$1){
var statearr_37651_37713 = state_37568__$1;
(statearr_37651_37713[(1)] = (10));

} else {
var statearr_37652_37714 = state_37568__$1;
(statearr_37652_37714[(1)] = (11));

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
});})(c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34960__auto__,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34961__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34961__auto____0 = (function (){
var statearr_37653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37653[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34961__auto__);

(statearr_37653[(1)] = (1));

return statearr_37653;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34961__auto____1 = (function (state_37568){
while(true){
var ret_value__34962__auto__ = (function (){try{while(true){
var result__34963__auto__ = switch__34960__auto__.call(null,state_37568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34963__auto__;
}
break;
}
}catch (e37654){if((e37654 instanceof Object)){
var ex__34964__auto__ = e37654;
var statearr_37655_37715 = state_37568;
(statearr_37655_37715[(5)] = ex__34964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37716 = state_37568;
state_37568 = G__37716;
continue;
} else {
return ret_value__34962__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34961__auto__ = function(state_37568){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34961__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34961__auto____1.call(this,state_37568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34961__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34961__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34961__auto__;
})()
;})(switch__34960__auto__,c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35057__auto__ = (function (){var statearr_37656 = f__35056__auto__.call(null);
(statearr_37656[(6)] = c__35055__auto__);

return statearr_37656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35057__auto__);
});})(c__35055__auto__,map__37413,map__37413__$1,opts,before_jsload,on_jsload,reload_dependents,map__37414,map__37414__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35055__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37719,link){
var map__37720 = p__37719;
var map__37720__$1 = (((((!((map__37720 == null))))?(((((map__37720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37720):map__37720);
var file = cljs.core.get.call(null,map__37720__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__37720,map__37720__$1,file){
return (function (p1__37717_SHARP_,p2__37718_SHARP_){
if(cljs.core._EQ_.call(null,p1__37717_SHARP_,p2__37718_SHARP_)){
return p1__37717_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__37720,map__37720__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37723){
var map__37724 = p__37723;
var map__37724__$1 = (((((!((map__37724 == null))))?(((((map__37724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37724):map__37724);
var match_length = cljs.core.get.call(null,map__37724__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37724__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37722_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37722_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37726_SHARP_,p2__37727_SHARP_){
return cljs.core.assoc.call(null,p1__37726_SHARP_,cljs.core.get.call(null,p2__37727_SHARP_,key),p2__37727_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37728 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37728);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37728);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37729,p__37730){
var map__37731 = p__37729;
var map__37731__$1 = (((((!((map__37731 == null))))?(((((map__37731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37731):map__37731);
var on_cssload = cljs.core.get.call(null,map__37731__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37732 = p__37730;
var map__37732__$1 = (((((!((map__37732 == null))))?(((((map__37732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37732):map__37732);
var files_msg = map__37732__$1;
var files = cljs.core.get.call(null,map__37732__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1576361245500
