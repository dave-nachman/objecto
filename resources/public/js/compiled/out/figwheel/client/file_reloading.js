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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33900_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33900_SHARP_));
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
var seq__33901 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33902 = null;
var count__33903 = (0);
var i__33904 = (0);
while(true){
if((i__33904 < count__33903)){
var n = cljs.core._nth.call(null,chunk__33902,i__33904);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__33905 = seq__33901;
var G__33906 = chunk__33902;
var G__33907 = count__33903;
var G__33908 = (i__33904 + (1));
seq__33901 = G__33905;
chunk__33902 = G__33906;
count__33903 = G__33907;
i__33904 = G__33908;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__33901);
if(temp__5720__auto__){
var seq__33901__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33901__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33901__$1);
var G__33909 = cljs.core.chunk_rest.call(null,seq__33901__$1);
var G__33910 = c__4550__auto__;
var G__33911 = cljs.core.count.call(null,c__4550__auto__);
var G__33912 = (0);
seq__33901 = G__33909;
chunk__33902 = G__33910;
count__33903 = G__33911;
i__33904 = G__33912;
continue;
} else {
var n = cljs.core.first.call(null,seq__33901__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__33913 = cljs.core.next.call(null,seq__33901__$1);
var G__33914 = null;
var G__33915 = (0);
var G__33916 = (0);
seq__33901 = G__33913;
chunk__33902 = G__33914;
count__33903 = G__33915;
i__33904 = G__33916;
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
return cljs.core.some.call(null,(function (p__33917){
var vec__33918 = p__33917;
var _ = cljs.core.nth.call(null,vec__33918,(0),null);
var v = cljs.core.nth.call(null,vec__33918,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__33921){
var vec__33922 = p__33921;
var k = cljs.core.nth.call(null,vec__33922,(0),null);
var v = cljs.core.nth.call(null,vec__33922,(1),null);
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

var seq__33934_33942 = cljs.core.seq.call(null,deps);
var chunk__33935_33943 = null;
var count__33936_33944 = (0);
var i__33937_33945 = (0);
while(true){
if((i__33937_33945 < count__33936_33944)){
var dep_33946 = cljs.core._nth.call(null,chunk__33935_33943,i__33937_33945);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_33946;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_33946));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_33946,(depth + (1)),state);
} else {
}


var G__33947 = seq__33934_33942;
var G__33948 = chunk__33935_33943;
var G__33949 = count__33936_33944;
var G__33950 = (i__33937_33945 + (1));
seq__33934_33942 = G__33947;
chunk__33935_33943 = G__33948;
count__33936_33944 = G__33949;
i__33937_33945 = G__33950;
continue;
} else {
var temp__5720__auto___33951 = cljs.core.seq.call(null,seq__33934_33942);
if(temp__5720__auto___33951){
var seq__33934_33952__$1 = temp__5720__auto___33951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33934_33952__$1)){
var c__4550__auto___33953 = cljs.core.chunk_first.call(null,seq__33934_33952__$1);
var G__33954 = cljs.core.chunk_rest.call(null,seq__33934_33952__$1);
var G__33955 = c__4550__auto___33953;
var G__33956 = cljs.core.count.call(null,c__4550__auto___33953);
var G__33957 = (0);
seq__33934_33942 = G__33954;
chunk__33935_33943 = G__33955;
count__33936_33944 = G__33956;
i__33937_33945 = G__33957;
continue;
} else {
var dep_33958 = cljs.core.first.call(null,seq__33934_33952__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_33958;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_33958));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_33958,(depth + (1)),state);
} else {
}


var G__33959 = cljs.core.next.call(null,seq__33934_33952__$1);
var G__33960 = null;
var G__33961 = (0);
var G__33962 = (0);
seq__33934_33942 = G__33959;
chunk__33935_33943 = G__33960;
count__33936_33944 = G__33961;
i__33937_33945 = G__33962;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33938){
var vec__33939 = p__33938;
var seq__33940 = cljs.core.seq.call(null,vec__33939);
var first__33941 = cljs.core.first.call(null,seq__33940);
var seq__33940__$1 = cljs.core.next.call(null,seq__33940);
var x = first__33941;
var xs = seq__33940__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33939,seq__33940,first__33941,seq__33940__$1,x,xs,get_deps__$1){
return (function (p1__33925_SHARP_){
return clojure.set.difference.call(null,p1__33925_SHARP_,x);
});})(vec__33939,seq__33940,first__33941,seq__33940__$1,x,xs,get_deps__$1))
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
var seq__33963 = cljs.core.seq.call(null,provides);
var chunk__33964 = null;
var count__33965 = (0);
var i__33966 = (0);
while(true){
if((i__33966 < count__33965)){
var prov = cljs.core._nth.call(null,chunk__33964,i__33966);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33975_33983 = cljs.core.seq.call(null,requires);
var chunk__33976_33984 = null;
var count__33977_33985 = (0);
var i__33978_33986 = (0);
while(true){
if((i__33978_33986 < count__33977_33985)){
var req_33987 = cljs.core._nth.call(null,chunk__33976_33984,i__33978_33986);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33987,prov);


var G__33988 = seq__33975_33983;
var G__33989 = chunk__33976_33984;
var G__33990 = count__33977_33985;
var G__33991 = (i__33978_33986 + (1));
seq__33975_33983 = G__33988;
chunk__33976_33984 = G__33989;
count__33977_33985 = G__33990;
i__33978_33986 = G__33991;
continue;
} else {
var temp__5720__auto___33992 = cljs.core.seq.call(null,seq__33975_33983);
if(temp__5720__auto___33992){
var seq__33975_33993__$1 = temp__5720__auto___33992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33975_33993__$1)){
var c__4550__auto___33994 = cljs.core.chunk_first.call(null,seq__33975_33993__$1);
var G__33995 = cljs.core.chunk_rest.call(null,seq__33975_33993__$1);
var G__33996 = c__4550__auto___33994;
var G__33997 = cljs.core.count.call(null,c__4550__auto___33994);
var G__33998 = (0);
seq__33975_33983 = G__33995;
chunk__33976_33984 = G__33996;
count__33977_33985 = G__33997;
i__33978_33986 = G__33998;
continue;
} else {
var req_33999 = cljs.core.first.call(null,seq__33975_33993__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33999,prov);


var G__34000 = cljs.core.next.call(null,seq__33975_33993__$1);
var G__34001 = null;
var G__34002 = (0);
var G__34003 = (0);
seq__33975_33983 = G__34000;
chunk__33976_33984 = G__34001;
count__33977_33985 = G__34002;
i__33978_33986 = G__34003;
continue;
}
} else {
}
}
break;
}


var G__34004 = seq__33963;
var G__34005 = chunk__33964;
var G__34006 = count__33965;
var G__34007 = (i__33966 + (1));
seq__33963 = G__34004;
chunk__33964 = G__34005;
count__33965 = G__34006;
i__33966 = G__34007;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__33963);
if(temp__5720__auto__){
var seq__33963__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33963__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33963__$1);
var G__34008 = cljs.core.chunk_rest.call(null,seq__33963__$1);
var G__34009 = c__4550__auto__;
var G__34010 = cljs.core.count.call(null,c__4550__auto__);
var G__34011 = (0);
seq__33963 = G__34008;
chunk__33964 = G__34009;
count__33965 = G__34010;
i__33966 = G__34011;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33963__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33979_34012 = cljs.core.seq.call(null,requires);
var chunk__33980_34013 = null;
var count__33981_34014 = (0);
var i__33982_34015 = (0);
while(true){
if((i__33982_34015 < count__33981_34014)){
var req_34016 = cljs.core._nth.call(null,chunk__33980_34013,i__33982_34015);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34016,prov);


var G__34017 = seq__33979_34012;
var G__34018 = chunk__33980_34013;
var G__34019 = count__33981_34014;
var G__34020 = (i__33982_34015 + (1));
seq__33979_34012 = G__34017;
chunk__33980_34013 = G__34018;
count__33981_34014 = G__34019;
i__33982_34015 = G__34020;
continue;
} else {
var temp__5720__auto___34021__$1 = cljs.core.seq.call(null,seq__33979_34012);
if(temp__5720__auto___34021__$1){
var seq__33979_34022__$1 = temp__5720__auto___34021__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33979_34022__$1)){
var c__4550__auto___34023 = cljs.core.chunk_first.call(null,seq__33979_34022__$1);
var G__34024 = cljs.core.chunk_rest.call(null,seq__33979_34022__$1);
var G__34025 = c__4550__auto___34023;
var G__34026 = cljs.core.count.call(null,c__4550__auto___34023);
var G__34027 = (0);
seq__33979_34012 = G__34024;
chunk__33980_34013 = G__34025;
count__33981_34014 = G__34026;
i__33982_34015 = G__34027;
continue;
} else {
var req_34028 = cljs.core.first.call(null,seq__33979_34022__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34028,prov);


var G__34029 = cljs.core.next.call(null,seq__33979_34022__$1);
var G__34030 = null;
var G__34031 = (0);
var G__34032 = (0);
seq__33979_34012 = G__34029;
chunk__33980_34013 = G__34030;
count__33981_34014 = G__34031;
i__33982_34015 = G__34032;
continue;
}
} else {
}
}
break;
}


var G__34033 = cljs.core.next.call(null,seq__33963__$1);
var G__34034 = null;
var G__34035 = (0);
var G__34036 = (0);
seq__33963 = G__34033;
chunk__33964 = G__34034;
count__33965 = G__34035;
i__33966 = G__34036;
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
var seq__34037_34041 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34038_34042 = null;
var count__34039_34043 = (0);
var i__34040_34044 = (0);
while(true){
if((i__34040_34044 < count__34039_34043)){
var ns_34045 = cljs.core._nth.call(null,chunk__34038_34042,i__34040_34044);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34045);


var G__34046 = seq__34037_34041;
var G__34047 = chunk__34038_34042;
var G__34048 = count__34039_34043;
var G__34049 = (i__34040_34044 + (1));
seq__34037_34041 = G__34046;
chunk__34038_34042 = G__34047;
count__34039_34043 = G__34048;
i__34040_34044 = G__34049;
continue;
} else {
var temp__5720__auto___34050 = cljs.core.seq.call(null,seq__34037_34041);
if(temp__5720__auto___34050){
var seq__34037_34051__$1 = temp__5720__auto___34050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34037_34051__$1)){
var c__4550__auto___34052 = cljs.core.chunk_first.call(null,seq__34037_34051__$1);
var G__34053 = cljs.core.chunk_rest.call(null,seq__34037_34051__$1);
var G__34054 = c__4550__auto___34052;
var G__34055 = cljs.core.count.call(null,c__4550__auto___34052);
var G__34056 = (0);
seq__34037_34041 = G__34053;
chunk__34038_34042 = G__34054;
count__34039_34043 = G__34055;
i__34040_34044 = G__34056;
continue;
} else {
var ns_34057 = cljs.core.first.call(null,seq__34037_34051__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34057);


var G__34058 = cljs.core.next.call(null,seq__34037_34051__$1);
var G__34059 = null;
var G__34060 = (0);
var G__34061 = (0);
seq__34037_34041 = G__34058;
chunk__34038_34042 = G__34059;
count__34039_34043 = G__34060;
i__34040_34044 = G__34061;
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
var G__34062__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34063__i = 0, G__34063__a = new Array(arguments.length -  0);
while (G__34063__i < G__34063__a.length) {G__34063__a[G__34063__i] = arguments[G__34063__i + 0]; ++G__34063__i;}
  args = new cljs.core.IndexedSeq(G__34063__a,0,null);
} 
return G__34062__delegate.call(this,args);};
G__34062.cljs$lang$maxFixedArity = 0;
G__34062.cljs$lang$applyTo = (function (arglist__34064){
var args = cljs.core.seq(arglist__34064);
return G__34062__delegate(args);
});
G__34062.cljs$core$IFn$_invoke$arity$variadic = G__34062__delegate;
return G__34062;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__34065_SHARP_,p2__34066_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34065_SHARP_)),p2__34066_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__34067_SHARP_,p2__34068_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34067_SHARP_),p2__34068_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34069 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34069.addCallback(((function (G__34069){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34069))
);

G__34069.addErrback(((function (G__34069){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34069))
);

return G__34069;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34070){if((e34070 instanceof Error)){
var e = e34070;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34070;

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
}catch (e34071){if((e34071 instanceof Error)){
var e = e34071;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34071;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34072 = cljs.core._EQ_;
var expr__34073 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34072.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34073))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34072.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34073))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34072.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34073))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__34072,expr__34073){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34072,expr__34073))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34075,callback){
var map__34076 = p__34075;
var map__34076__$1 = (((((!((map__34076 == null))))?(((((map__34076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34076):map__34076);
var file_msg = map__34076__$1;
var request_url = cljs.core.get.call(null,map__34076__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34076,map__34076__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34076,map__34076__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__31894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto__){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto__){
return (function (state_34114){
var state_val_34115 = (state_34114[(1)]);
if((state_val_34115 === (7))){
var inst_34110 = (state_34114[(2)]);
var state_34114__$1 = state_34114;
var statearr_34116_34142 = state_34114__$1;
(statearr_34116_34142[(2)] = inst_34110);

(statearr_34116_34142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (1))){
var state_34114__$1 = state_34114;
var statearr_34117_34143 = state_34114__$1;
(statearr_34117_34143[(2)] = null);

(statearr_34117_34143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (4))){
var inst_34080 = (state_34114[(7)]);
var inst_34080__$1 = (state_34114[(2)]);
var state_34114__$1 = (function (){var statearr_34118 = state_34114;
(statearr_34118[(7)] = inst_34080__$1);

return statearr_34118;
})();
if(cljs.core.truth_(inst_34080__$1)){
var statearr_34119_34144 = state_34114__$1;
(statearr_34119_34144[(1)] = (5));

} else {
var statearr_34120_34145 = state_34114__$1;
(statearr_34120_34145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (15))){
var inst_34095 = (state_34114[(8)]);
var inst_34093 = (state_34114[(9)]);
var inst_34097 = inst_34095.call(null,inst_34093);
var state_34114__$1 = state_34114;
var statearr_34121_34146 = state_34114__$1;
(statearr_34121_34146[(2)] = inst_34097);

(statearr_34121_34146[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (13))){
var inst_34104 = (state_34114[(2)]);
var state_34114__$1 = state_34114;
var statearr_34122_34147 = state_34114__$1;
(statearr_34122_34147[(2)] = inst_34104);

(statearr_34122_34147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (6))){
var state_34114__$1 = state_34114;
var statearr_34123_34148 = state_34114__$1;
(statearr_34123_34148[(2)] = null);

(statearr_34123_34148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (17))){
var inst_34101 = (state_34114[(2)]);
var state_34114__$1 = state_34114;
var statearr_34124_34149 = state_34114__$1;
(statearr_34124_34149[(2)] = inst_34101);

(statearr_34124_34149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (3))){
var inst_34112 = (state_34114[(2)]);
var state_34114__$1 = state_34114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34114__$1,inst_34112);
} else {
if((state_val_34115 === (12))){
var state_34114__$1 = state_34114;
var statearr_34125_34150 = state_34114__$1;
(statearr_34125_34150[(2)] = null);

(statearr_34125_34150[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (2))){
var state_34114__$1 = state_34114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34114__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34115 === (11))){
var inst_34085 = (state_34114[(10)]);
var inst_34091 = figwheel.client.file_reloading.blocking_load.call(null,inst_34085);
var state_34114__$1 = state_34114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34114__$1,(14),inst_34091);
} else {
if((state_val_34115 === (9))){
var inst_34085 = (state_34114[(10)]);
var state_34114__$1 = state_34114;
if(cljs.core.truth_(inst_34085)){
var statearr_34126_34151 = state_34114__$1;
(statearr_34126_34151[(1)] = (11));

} else {
var statearr_34127_34152 = state_34114__$1;
(statearr_34127_34152[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (5))){
var inst_34080 = (state_34114[(7)]);
var inst_34086 = (state_34114[(11)]);
var inst_34085 = cljs.core.nth.call(null,inst_34080,(0),null);
var inst_34086__$1 = cljs.core.nth.call(null,inst_34080,(1),null);
var state_34114__$1 = (function (){var statearr_34128 = state_34114;
(statearr_34128[(11)] = inst_34086__$1);

(statearr_34128[(10)] = inst_34085);

return statearr_34128;
})();
if(cljs.core.truth_(inst_34086__$1)){
var statearr_34129_34153 = state_34114__$1;
(statearr_34129_34153[(1)] = (8));

} else {
var statearr_34130_34154 = state_34114__$1;
(statearr_34130_34154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (14))){
var inst_34095 = (state_34114[(8)]);
var inst_34085 = (state_34114[(10)]);
var inst_34093 = (state_34114[(2)]);
var inst_34094 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34095__$1 = cljs.core.get.call(null,inst_34094,inst_34085);
var state_34114__$1 = (function (){var statearr_34131 = state_34114;
(statearr_34131[(8)] = inst_34095__$1);

(statearr_34131[(9)] = inst_34093);

return statearr_34131;
})();
if(cljs.core.truth_(inst_34095__$1)){
var statearr_34132_34155 = state_34114__$1;
(statearr_34132_34155[(1)] = (15));

} else {
var statearr_34133_34156 = state_34114__$1;
(statearr_34133_34156[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (16))){
var inst_34093 = (state_34114[(9)]);
var inst_34099 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34093);
var state_34114__$1 = state_34114;
var statearr_34134_34157 = state_34114__$1;
(statearr_34134_34157[(2)] = inst_34099);

(statearr_34134_34157[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (10))){
var inst_34106 = (state_34114[(2)]);
var state_34114__$1 = (function (){var statearr_34135 = state_34114;
(statearr_34135[(12)] = inst_34106);

return statearr_34135;
})();
var statearr_34136_34158 = state_34114__$1;
(statearr_34136_34158[(2)] = null);

(statearr_34136_34158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (8))){
var inst_34086 = (state_34114[(11)]);
var inst_34088 = eval(inst_34086);
var state_34114__$1 = state_34114;
var statearr_34137_34159 = state_34114__$1;
(statearr_34137_34159[(2)] = inst_34088);

(statearr_34137_34159[(1)] = (10));


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
});})(c__31894__auto__))
;
return ((function (switch__31799__auto__,c__31894__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31800__auto__ = null;
var figwheel$client$file_reloading$state_machine__31800__auto____0 = (function (){
var statearr_34138 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34138[(0)] = figwheel$client$file_reloading$state_machine__31800__auto__);

(statearr_34138[(1)] = (1));

return statearr_34138;
});
var figwheel$client$file_reloading$state_machine__31800__auto____1 = (function (state_34114){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_34114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e34139){if((e34139 instanceof Object)){
var ex__31803__auto__ = e34139;
var statearr_34140_34160 = state_34114;
(statearr_34140_34160[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34161 = state_34114;
state_34114 = G__34161;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31800__auto__ = function(state_34114){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31800__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31800__auto____1.call(this,state_34114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31800__auto____0;
figwheel$client$file_reloading$state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31800__auto____1;
return figwheel$client$file_reloading$state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto__))
})();
var state__31896__auto__ = (function (){var statearr_34141 = f__31895__auto__.call(null);
(statearr_34141[(6)] = c__31894__auto__);

return statearr_34141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto__))
);

return c__31894__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__34163 = arguments.length;
switch (G__34163) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34165,callback){
var map__34166 = p__34165;
var map__34166__$1 = (((((!((map__34166 == null))))?(((((map__34166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34166):map__34166);
var file_msg = map__34166__$1;
var namespace = cljs.core.get.call(null,map__34166__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34166,map__34166__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34166,map__34166__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34168){
var map__34169 = p__34168;
var map__34169__$1 = (((((!((map__34169 == null))))?(((((map__34169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34169):map__34169);
var file_msg = map__34169__$1;
var namespace = cljs.core.get.call(null,map__34169__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34171){
var map__34172 = p__34171;
var map__34172__$1 = (((((!((map__34172 == null))))?(((((map__34172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34172):map__34172);
var file_msg = map__34172__$1;
var namespace = cljs.core.get.call(null,map__34172__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34174,callback){
var map__34175 = p__34174;
var map__34175__$1 = (((((!((map__34175 == null))))?(((((map__34175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34175):map__34175);
var file_msg = map__34175__$1;
var request_url = cljs.core.get.call(null,map__34175__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34175__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__31894__auto___34225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto___34225,out){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto___34225,out){
return (function (state_34210){
var state_val_34211 = (state_34210[(1)]);
if((state_val_34211 === (1))){
var inst_34184 = cljs.core.seq.call(null,files);
var inst_34185 = cljs.core.first.call(null,inst_34184);
var inst_34186 = cljs.core.next.call(null,inst_34184);
var inst_34187 = files;
var state_34210__$1 = (function (){var statearr_34212 = state_34210;
(statearr_34212[(7)] = inst_34186);

(statearr_34212[(8)] = inst_34185);

(statearr_34212[(9)] = inst_34187);

return statearr_34212;
})();
var statearr_34213_34226 = state_34210__$1;
(statearr_34213_34226[(2)] = null);

(statearr_34213_34226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (2))){
var inst_34193 = (state_34210[(10)]);
var inst_34187 = (state_34210[(9)]);
var inst_34192 = cljs.core.seq.call(null,inst_34187);
var inst_34193__$1 = cljs.core.first.call(null,inst_34192);
var inst_34194 = cljs.core.next.call(null,inst_34192);
var inst_34195 = (inst_34193__$1 == null);
var inst_34196 = cljs.core.not.call(null,inst_34195);
var state_34210__$1 = (function (){var statearr_34214 = state_34210;
(statearr_34214[(11)] = inst_34194);

(statearr_34214[(10)] = inst_34193__$1);

return statearr_34214;
})();
if(inst_34196){
var statearr_34215_34227 = state_34210__$1;
(statearr_34215_34227[(1)] = (4));

} else {
var statearr_34216_34228 = state_34210__$1;
(statearr_34216_34228[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (3))){
var inst_34208 = (state_34210[(2)]);
var state_34210__$1 = state_34210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34210__$1,inst_34208);
} else {
if((state_val_34211 === (4))){
var inst_34193 = (state_34210[(10)]);
var inst_34198 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34193);
var state_34210__$1 = state_34210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34210__$1,(7),inst_34198);
} else {
if((state_val_34211 === (5))){
var inst_34204 = cljs.core.async.close_BANG_.call(null,out);
var state_34210__$1 = state_34210;
var statearr_34217_34229 = state_34210__$1;
(statearr_34217_34229[(2)] = inst_34204);

(statearr_34217_34229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (6))){
var inst_34206 = (state_34210[(2)]);
var state_34210__$1 = state_34210;
var statearr_34218_34230 = state_34210__$1;
(statearr_34218_34230[(2)] = inst_34206);

(statearr_34218_34230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (7))){
var inst_34194 = (state_34210[(11)]);
var inst_34200 = (state_34210[(2)]);
var inst_34201 = cljs.core.async.put_BANG_.call(null,out,inst_34200);
var inst_34187 = inst_34194;
var state_34210__$1 = (function (){var statearr_34219 = state_34210;
(statearr_34219[(12)] = inst_34201);

(statearr_34219[(9)] = inst_34187);

return statearr_34219;
})();
var statearr_34220_34231 = state_34210__$1;
(statearr_34220_34231[(2)] = null);

(statearr_34220_34231[(1)] = (2));


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
});})(c__31894__auto___34225,out))
;
return ((function (switch__31799__auto__,c__31894__auto___34225,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31800__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31800__auto____0 = (function (){
var statearr_34221 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34221[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31800__auto__);

(statearr_34221[(1)] = (1));

return statearr_34221;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31800__auto____1 = (function (state_34210){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_34210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e34222){if((e34222 instanceof Object)){
var ex__31803__auto__ = e34222;
var statearr_34223_34232 = state_34210;
(statearr_34223_34232[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34233 = state_34210;
state_34210 = G__34233;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31800__auto__ = function(state_34210){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31800__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31800__auto____1.call(this,state_34210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31800__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31800__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto___34225,out))
})();
var state__31896__auto__ = (function (){var statearr_34224 = f__31895__auto__.call(null);
(statearr_34224[(6)] = c__31894__auto___34225);

return statearr_34224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto___34225,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34234,opts){
var map__34235 = p__34234;
var map__34235__$1 = (((((!((map__34235 == null))))?(((((map__34235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34235):map__34235);
var eval_body = cljs.core.get.call(null,map__34235__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34235__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34237){var e = e34237;
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
return (function (p1__34238_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34238_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34239){
var vec__34240 = p__34239;
var k = cljs.core.nth.call(null,vec__34240,(0),null);
var v = cljs.core.nth.call(null,vec__34240,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34243){
var vec__34244 = p__34243;
var k = cljs.core.nth.call(null,vec__34244,(0),null);
var v = cljs.core.nth.call(null,vec__34244,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34250,p__34251){
var map__34252 = p__34250;
var map__34252__$1 = (((((!((map__34252 == null))))?(((((map__34252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34252):map__34252);
var opts = map__34252__$1;
var before_jsload = cljs.core.get.call(null,map__34252__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34252__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34252__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34253 = p__34251;
var map__34253__$1 = (((((!((map__34253 == null))))?(((((map__34253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34253):map__34253);
var msg = map__34253__$1;
var files = cljs.core.get.call(null,map__34253__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34253__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34253__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31895__auto__ = (function (){var switch__31799__auto__ = ((function (c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34407){
var state_val_34408 = (state_34407[(1)]);
if((state_val_34408 === (7))){
var inst_34269 = (state_34407[(7)]);
var inst_34268 = (state_34407[(8)]);
var inst_34270 = (state_34407[(9)]);
var inst_34267 = (state_34407[(10)]);
var inst_34275 = cljs.core._nth.call(null,inst_34268,inst_34270);
var inst_34276 = figwheel.client.file_reloading.eval_body.call(null,inst_34275,opts);
var inst_34277 = (inst_34270 + (1));
var tmp34409 = inst_34269;
var tmp34410 = inst_34268;
var tmp34411 = inst_34267;
var inst_34267__$1 = tmp34411;
var inst_34268__$1 = tmp34410;
var inst_34269__$1 = tmp34409;
var inst_34270__$1 = inst_34277;
var state_34407__$1 = (function (){var statearr_34412 = state_34407;
(statearr_34412[(7)] = inst_34269__$1);

(statearr_34412[(8)] = inst_34268__$1);

(statearr_34412[(9)] = inst_34270__$1);

(statearr_34412[(10)] = inst_34267__$1);

(statearr_34412[(11)] = inst_34276);

return statearr_34412;
})();
var statearr_34413_34496 = state_34407__$1;
(statearr_34413_34496[(2)] = null);

(statearr_34413_34496[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (20))){
var inst_34310 = (state_34407[(12)]);
var inst_34318 = figwheel.client.file_reloading.sort_files.call(null,inst_34310);
var state_34407__$1 = state_34407;
var statearr_34414_34497 = state_34407__$1;
(statearr_34414_34497[(2)] = inst_34318);

(statearr_34414_34497[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (27))){
var state_34407__$1 = state_34407;
var statearr_34415_34498 = state_34407__$1;
(statearr_34415_34498[(2)] = null);

(statearr_34415_34498[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (1))){
var inst_34259 = (state_34407[(13)]);
var inst_34256 = before_jsload.call(null,files);
var inst_34257 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34258 = (function (){return ((function (inst_34259,inst_34256,inst_34257,state_val_34408,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34247_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34247_SHARP_);
});
;})(inst_34259,inst_34256,inst_34257,state_val_34408,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34259__$1 = cljs.core.filter.call(null,inst_34258,files);
var inst_34260 = cljs.core.not_empty.call(null,inst_34259__$1);
var state_34407__$1 = (function (){var statearr_34416 = state_34407;
(statearr_34416[(13)] = inst_34259__$1);

(statearr_34416[(14)] = inst_34257);

(statearr_34416[(15)] = inst_34256);

return statearr_34416;
})();
if(cljs.core.truth_(inst_34260)){
var statearr_34417_34499 = state_34407__$1;
(statearr_34417_34499[(1)] = (2));

} else {
var statearr_34418_34500 = state_34407__$1;
(statearr_34418_34500[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (24))){
var state_34407__$1 = state_34407;
var statearr_34419_34501 = state_34407__$1;
(statearr_34419_34501[(2)] = null);

(statearr_34419_34501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (39))){
var inst_34360 = (state_34407[(16)]);
var state_34407__$1 = state_34407;
var statearr_34420_34502 = state_34407__$1;
(statearr_34420_34502[(2)] = inst_34360);

(statearr_34420_34502[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (46))){
var inst_34402 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34421_34503 = state_34407__$1;
(statearr_34421_34503[(2)] = inst_34402);

(statearr_34421_34503[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (4))){
var inst_34304 = (state_34407[(2)]);
var inst_34305 = cljs.core.List.EMPTY;
var inst_34306 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34305);
var inst_34307 = (function (){return ((function (inst_34304,inst_34305,inst_34306,state_val_34408,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34248_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34248_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34248_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34248_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_34304,inst_34305,inst_34306,state_val_34408,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34308 = cljs.core.filter.call(null,inst_34307,files);
var inst_34309 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34310 = cljs.core.concat.call(null,inst_34308,inst_34309);
var state_34407__$1 = (function (){var statearr_34422 = state_34407;
(statearr_34422[(12)] = inst_34310);

(statearr_34422[(17)] = inst_34306);

(statearr_34422[(18)] = inst_34304);

return statearr_34422;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34423_34504 = state_34407__$1;
(statearr_34423_34504[(1)] = (16));

} else {
var statearr_34424_34505 = state_34407__$1;
(statearr_34424_34505[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (15))){
var inst_34294 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34425_34506 = state_34407__$1;
(statearr_34425_34506[(2)] = inst_34294);

(statearr_34425_34506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (21))){
var inst_34320 = (state_34407[(19)]);
var inst_34320__$1 = (state_34407[(2)]);
var inst_34321 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34320__$1);
var state_34407__$1 = (function (){var statearr_34426 = state_34407;
(statearr_34426[(19)] = inst_34320__$1);

return statearr_34426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34407__$1,(22),inst_34321);
} else {
if((state_val_34408 === (31))){
var inst_34405 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34407__$1,inst_34405);
} else {
if((state_val_34408 === (32))){
var inst_34360 = (state_34407[(16)]);
var inst_34365 = inst_34360.cljs$lang$protocol_mask$partition0$;
var inst_34366 = (inst_34365 & (64));
var inst_34367 = inst_34360.cljs$core$ISeq$;
var inst_34368 = (cljs.core.PROTOCOL_SENTINEL === inst_34367);
var inst_34369 = ((inst_34366) || (inst_34368));
var state_34407__$1 = state_34407;
if(cljs.core.truth_(inst_34369)){
var statearr_34427_34507 = state_34407__$1;
(statearr_34427_34507[(1)] = (35));

} else {
var statearr_34428_34508 = state_34407__$1;
(statearr_34428_34508[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (40))){
var inst_34382 = (state_34407[(20)]);
var inst_34381 = (state_34407[(2)]);
var inst_34382__$1 = cljs.core.get.call(null,inst_34381,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34383 = cljs.core.get.call(null,inst_34381,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34384 = cljs.core.not_empty.call(null,inst_34382__$1);
var state_34407__$1 = (function (){var statearr_34429 = state_34407;
(statearr_34429[(21)] = inst_34383);

(statearr_34429[(20)] = inst_34382__$1);

return statearr_34429;
})();
if(cljs.core.truth_(inst_34384)){
var statearr_34430_34509 = state_34407__$1;
(statearr_34430_34509[(1)] = (41));

} else {
var statearr_34431_34510 = state_34407__$1;
(statearr_34431_34510[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (33))){
var state_34407__$1 = state_34407;
var statearr_34432_34511 = state_34407__$1;
(statearr_34432_34511[(2)] = false);

(statearr_34432_34511[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (13))){
var inst_34280 = (state_34407[(22)]);
var inst_34284 = cljs.core.chunk_first.call(null,inst_34280);
var inst_34285 = cljs.core.chunk_rest.call(null,inst_34280);
var inst_34286 = cljs.core.count.call(null,inst_34284);
var inst_34267 = inst_34285;
var inst_34268 = inst_34284;
var inst_34269 = inst_34286;
var inst_34270 = (0);
var state_34407__$1 = (function (){var statearr_34433 = state_34407;
(statearr_34433[(7)] = inst_34269);

(statearr_34433[(8)] = inst_34268);

(statearr_34433[(9)] = inst_34270);

(statearr_34433[(10)] = inst_34267);

return statearr_34433;
})();
var statearr_34434_34512 = state_34407__$1;
(statearr_34434_34512[(2)] = null);

(statearr_34434_34512[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (22))){
var inst_34324 = (state_34407[(23)]);
var inst_34320 = (state_34407[(19)]);
var inst_34328 = (state_34407[(24)]);
var inst_34323 = (state_34407[(25)]);
var inst_34323__$1 = (state_34407[(2)]);
var inst_34324__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34323__$1);
var inst_34325 = (function (){var all_files = inst_34320;
var res_SINGLEQUOTE_ = inst_34323__$1;
var res = inst_34324__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34324,inst_34320,inst_34328,inst_34323,inst_34323__$1,inst_34324__$1,state_val_34408,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34249_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34249_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34324,inst_34320,inst_34328,inst_34323,inst_34323__$1,inst_34324__$1,state_val_34408,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34326 = cljs.core.filter.call(null,inst_34325,inst_34323__$1);
var inst_34327 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34328__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34327);
var inst_34329 = cljs.core.not_empty.call(null,inst_34328__$1);
var state_34407__$1 = (function (){var statearr_34435 = state_34407;
(statearr_34435[(23)] = inst_34324__$1);

(statearr_34435[(24)] = inst_34328__$1);

(statearr_34435[(26)] = inst_34326);

(statearr_34435[(25)] = inst_34323__$1);

return statearr_34435;
})();
if(cljs.core.truth_(inst_34329)){
var statearr_34436_34513 = state_34407__$1;
(statearr_34436_34513[(1)] = (23));

} else {
var statearr_34437_34514 = state_34407__$1;
(statearr_34437_34514[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (36))){
var state_34407__$1 = state_34407;
var statearr_34438_34515 = state_34407__$1;
(statearr_34438_34515[(2)] = false);

(statearr_34438_34515[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (41))){
var inst_34382 = (state_34407[(20)]);
var inst_34386 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34387 = cljs.core.map.call(null,inst_34386,inst_34382);
var inst_34388 = cljs.core.pr_str.call(null,inst_34387);
var inst_34389 = ["figwheel-no-load meta-data: ",inst_34388].join('');
var inst_34390 = figwheel.client.utils.log.call(null,inst_34389);
var state_34407__$1 = state_34407;
var statearr_34439_34516 = state_34407__$1;
(statearr_34439_34516[(2)] = inst_34390);

(statearr_34439_34516[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (43))){
var inst_34383 = (state_34407[(21)]);
var inst_34393 = (state_34407[(2)]);
var inst_34394 = cljs.core.not_empty.call(null,inst_34383);
var state_34407__$1 = (function (){var statearr_34440 = state_34407;
(statearr_34440[(27)] = inst_34393);

return statearr_34440;
})();
if(cljs.core.truth_(inst_34394)){
var statearr_34441_34517 = state_34407__$1;
(statearr_34441_34517[(1)] = (44));

} else {
var statearr_34442_34518 = state_34407__$1;
(statearr_34442_34518[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (29))){
var inst_34360 = (state_34407[(16)]);
var inst_34324 = (state_34407[(23)]);
var inst_34320 = (state_34407[(19)]);
var inst_34328 = (state_34407[(24)]);
var inst_34326 = (state_34407[(26)]);
var inst_34323 = (state_34407[(25)]);
var inst_34356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34359 = (function (){var all_files = inst_34320;
var res_SINGLEQUOTE_ = inst_34323;
var res = inst_34324;
var files_not_loaded = inst_34326;
var dependencies_that_loaded = inst_34328;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34360,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34356,state_val_34408,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34358){
var map__34443 = p__34358;
var map__34443__$1 = (((((!((map__34443 == null))))?(((((map__34443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34443):map__34443);
var namespace = cljs.core.get.call(null,map__34443__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34360,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34356,state_val_34408,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34360__$1 = cljs.core.group_by.call(null,inst_34359,inst_34326);
var inst_34362 = (inst_34360__$1 == null);
var inst_34363 = cljs.core.not.call(null,inst_34362);
var state_34407__$1 = (function (){var statearr_34445 = state_34407;
(statearr_34445[(28)] = inst_34356);

(statearr_34445[(16)] = inst_34360__$1);

return statearr_34445;
})();
if(inst_34363){
var statearr_34446_34519 = state_34407__$1;
(statearr_34446_34519[(1)] = (32));

} else {
var statearr_34447_34520 = state_34407__$1;
(statearr_34447_34520[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (44))){
var inst_34383 = (state_34407[(21)]);
var inst_34396 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34383);
var inst_34397 = cljs.core.pr_str.call(null,inst_34396);
var inst_34398 = ["not required: ",inst_34397].join('');
var inst_34399 = figwheel.client.utils.log.call(null,inst_34398);
var state_34407__$1 = state_34407;
var statearr_34448_34521 = state_34407__$1;
(statearr_34448_34521[(2)] = inst_34399);

(statearr_34448_34521[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (6))){
var inst_34301 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34449_34522 = state_34407__$1;
(statearr_34449_34522[(2)] = inst_34301);

(statearr_34449_34522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (28))){
var inst_34326 = (state_34407[(26)]);
var inst_34353 = (state_34407[(2)]);
var inst_34354 = cljs.core.not_empty.call(null,inst_34326);
var state_34407__$1 = (function (){var statearr_34450 = state_34407;
(statearr_34450[(29)] = inst_34353);

return statearr_34450;
})();
if(cljs.core.truth_(inst_34354)){
var statearr_34451_34523 = state_34407__$1;
(statearr_34451_34523[(1)] = (29));

} else {
var statearr_34452_34524 = state_34407__$1;
(statearr_34452_34524[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (25))){
var inst_34324 = (state_34407[(23)]);
var inst_34340 = (state_34407[(2)]);
var inst_34341 = cljs.core.not_empty.call(null,inst_34324);
var state_34407__$1 = (function (){var statearr_34453 = state_34407;
(statearr_34453[(30)] = inst_34340);

return statearr_34453;
})();
if(cljs.core.truth_(inst_34341)){
var statearr_34454_34525 = state_34407__$1;
(statearr_34454_34525[(1)] = (26));

} else {
var statearr_34455_34526 = state_34407__$1;
(statearr_34455_34526[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (34))){
var inst_34376 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
if(cljs.core.truth_(inst_34376)){
var statearr_34456_34527 = state_34407__$1;
(statearr_34456_34527[(1)] = (38));

} else {
var statearr_34457_34528 = state_34407__$1;
(statearr_34457_34528[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (17))){
var state_34407__$1 = state_34407;
var statearr_34458_34529 = state_34407__$1;
(statearr_34458_34529[(2)] = recompile_dependents);

(statearr_34458_34529[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (3))){
var state_34407__$1 = state_34407;
var statearr_34459_34530 = state_34407__$1;
(statearr_34459_34530[(2)] = null);

(statearr_34459_34530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (12))){
var inst_34297 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34460_34531 = state_34407__$1;
(statearr_34460_34531[(2)] = inst_34297);

(statearr_34460_34531[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (2))){
var inst_34259 = (state_34407[(13)]);
var inst_34266 = cljs.core.seq.call(null,inst_34259);
var inst_34267 = inst_34266;
var inst_34268 = null;
var inst_34269 = (0);
var inst_34270 = (0);
var state_34407__$1 = (function (){var statearr_34461 = state_34407;
(statearr_34461[(7)] = inst_34269);

(statearr_34461[(8)] = inst_34268);

(statearr_34461[(9)] = inst_34270);

(statearr_34461[(10)] = inst_34267);

return statearr_34461;
})();
var statearr_34462_34532 = state_34407__$1;
(statearr_34462_34532[(2)] = null);

(statearr_34462_34532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (23))){
var inst_34324 = (state_34407[(23)]);
var inst_34320 = (state_34407[(19)]);
var inst_34328 = (state_34407[(24)]);
var inst_34326 = (state_34407[(26)]);
var inst_34323 = (state_34407[(25)]);
var inst_34331 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34333 = (function (){var all_files = inst_34320;
var res_SINGLEQUOTE_ = inst_34323;
var res = inst_34324;
var files_not_loaded = inst_34326;
var dependencies_that_loaded = inst_34328;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34331,state_val_34408,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34332){
var map__34463 = p__34332;
var map__34463__$1 = (((((!((map__34463 == null))))?(((((map__34463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34463):map__34463);
var request_url = cljs.core.get.call(null,map__34463__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34331,state_val_34408,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34334 = cljs.core.reverse.call(null,inst_34328);
var inst_34335 = cljs.core.map.call(null,inst_34333,inst_34334);
var inst_34336 = cljs.core.pr_str.call(null,inst_34335);
var inst_34337 = figwheel.client.utils.log.call(null,inst_34336);
var state_34407__$1 = (function (){var statearr_34465 = state_34407;
(statearr_34465[(31)] = inst_34331);

return statearr_34465;
})();
var statearr_34466_34533 = state_34407__$1;
(statearr_34466_34533[(2)] = inst_34337);

(statearr_34466_34533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (35))){
var state_34407__$1 = state_34407;
var statearr_34467_34534 = state_34407__$1;
(statearr_34467_34534[(2)] = true);

(statearr_34467_34534[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (19))){
var inst_34310 = (state_34407[(12)]);
var inst_34316 = figwheel.client.file_reloading.expand_files.call(null,inst_34310);
var state_34407__$1 = state_34407;
var statearr_34468_34535 = state_34407__$1;
(statearr_34468_34535[(2)] = inst_34316);

(statearr_34468_34535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (11))){
var state_34407__$1 = state_34407;
var statearr_34469_34536 = state_34407__$1;
(statearr_34469_34536[(2)] = null);

(statearr_34469_34536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (9))){
var inst_34299 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34470_34537 = state_34407__$1;
(statearr_34470_34537[(2)] = inst_34299);

(statearr_34470_34537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (5))){
var inst_34269 = (state_34407[(7)]);
var inst_34270 = (state_34407[(9)]);
var inst_34272 = (inst_34270 < inst_34269);
var inst_34273 = inst_34272;
var state_34407__$1 = state_34407;
if(cljs.core.truth_(inst_34273)){
var statearr_34471_34538 = state_34407__$1;
(statearr_34471_34538[(1)] = (7));

} else {
var statearr_34472_34539 = state_34407__$1;
(statearr_34472_34539[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (14))){
var inst_34280 = (state_34407[(22)]);
var inst_34289 = cljs.core.first.call(null,inst_34280);
var inst_34290 = figwheel.client.file_reloading.eval_body.call(null,inst_34289,opts);
var inst_34291 = cljs.core.next.call(null,inst_34280);
var inst_34267 = inst_34291;
var inst_34268 = null;
var inst_34269 = (0);
var inst_34270 = (0);
var state_34407__$1 = (function (){var statearr_34473 = state_34407;
(statearr_34473[(7)] = inst_34269);

(statearr_34473[(8)] = inst_34268);

(statearr_34473[(9)] = inst_34270);

(statearr_34473[(10)] = inst_34267);

(statearr_34473[(32)] = inst_34290);

return statearr_34473;
})();
var statearr_34474_34540 = state_34407__$1;
(statearr_34474_34540[(2)] = null);

(statearr_34474_34540[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (45))){
var state_34407__$1 = state_34407;
var statearr_34475_34541 = state_34407__$1;
(statearr_34475_34541[(2)] = null);

(statearr_34475_34541[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (26))){
var inst_34324 = (state_34407[(23)]);
var inst_34320 = (state_34407[(19)]);
var inst_34328 = (state_34407[(24)]);
var inst_34326 = (state_34407[(26)]);
var inst_34323 = (state_34407[(25)]);
var inst_34343 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34345 = (function (){var all_files = inst_34320;
var res_SINGLEQUOTE_ = inst_34323;
var res = inst_34324;
var files_not_loaded = inst_34326;
var dependencies_that_loaded = inst_34328;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34343,state_val_34408,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34344){
var map__34476 = p__34344;
var map__34476__$1 = (((((!((map__34476 == null))))?(((((map__34476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34476):map__34476);
var namespace = cljs.core.get.call(null,map__34476__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34476__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34343,state_val_34408,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34346 = cljs.core.map.call(null,inst_34345,inst_34324);
var inst_34347 = cljs.core.pr_str.call(null,inst_34346);
var inst_34348 = figwheel.client.utils.log.call(null,inst_34347);
var inst_34349 = (function (){var all_files = inst_34320;
var res_SINGLEQUOTE_ = inst_34323;
var res = inst_34324;
var files_not_loaded = inst_34326;
var dependencies_that_loaded = inst_34328;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34343,inst_34345,inst_34346,inst_34347,inst_34348,state_val_34408,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34343,inst_34345,inst_34346,inst_34347,inst_34348,state_val_34408,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34350 = setTimeout(inst_34349,(10));
var state_34407__$1 = (function (){var statearr_34478 = state_34407;
(statearr_34478[(33)] = inst_34348);

(statearr_34478[(34)] = inst_34343);

return statearr_34478;
})();
var statearr_34479_34542 = state_34407__$1;
(statearr_34479_34542[(2)] = inst_34350);

(statearr_34479_34542[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (16))){
var state_34407__$1 = state_34407;
var statearr_34480_34543 = state_34407__$1;
(statearr_34480_34543[(2)] = reload_dependents);

(statearr_34480_34543[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (38))){
var inst_34360 = (state_34407[(16)]);
var inst_34378 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34360);
var state_34407__$1 = state_34407;
var statearr_34481_34544 = state_34407__$1;
(statearr_34481_34544[(2)] = inst_34378);

(statearr_34481_34544[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (30))){
var state_34407__$1 = state_34407;
var statearr_34482_34545 = state_34407__$1;
(statearr_34482_34545[(2)] = null);

(statearr_34482_34545[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (10))){
var inst_34280 = (state_34407[(22)]);
var inst_34282 = cljs.core.chunked_seq_QMARK_.call(null,inst_34280);
var state_34407__$1 = state_34407;
if(inst_34282){
var statearr_34483_34546 = state_34407__$1;
(statearr_34483_34546[(1)] = (13));

} else {
var statearr_34484_34547 = state_34407__$1;
(statearr_34484_34547[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (18))){
var inst_34314 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
if(cljs.core.truth_(inst_34314)){
var statearr_34485_34548 = state_34407__$1;
(statearr_34485_34548[(1)] = (19));

} else {
var statearr_34486_34549 = state_34407__$1;
(statearr_34486_34549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (42))){
var state_34407__$1 = state_34407;
var statearr_34487_34550 = state_34407__$1;
(statearr_34487_34550[(2)] = null);

(statearr_34487_34550[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (37))){
var inst_34373 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34488_34551 = state_34407__$1;
(statearr_34488_34551[(2)] = inst_34373);

(statearr_34488_34551[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (8))){
var inst_34280 = (state_34407[(22)]);
var inst_34267 = (state_34407[(10)]);
var inst_34280__$1 = cljs.core.seq.call(null,inst_34267);
var state_34407__$1 = (function (){var statearr_34489 = state_34407;
(statearr_34489[(22)] = inst_34280__$1);

return statearr_34489;
})();
if(inst_34280__$1){
var statearr_34490_34552 = state_34407__$1;
(statearr_34490_34552[(1)] = (10));

} else {
var statearr_34491_34553 = state_34407__$1;
(statearr_34491_34553[(1)] = (11));

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
});})(c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31799__auto__,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31800__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31800__auto____0 = (function (){
var statearr_34492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34492[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31800__auto__);

(statearr_34492[(1)] = (1));

return statearr_34492;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31800__auto____1 = (function (state_34407){
while(true){
var ret_value__31801__auto__ = (function (){try{while(true){
var result__31802__auto__ = switch__31799__auto__.call(null,state_34407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31802__auto__;
}
break;
}
}catch (e34493){if((e34493 instanceof Object)){
var ex__31803__auto__ = e34493;
var statearr_34494_34554 = state_34407;
(statearr_34494_34554[(5)] = ex__31803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34555 = state_34407;
state_34407 = G__34555;
continue;
} else {
return ret_value__31801__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31800__auto__ = function(state_34407){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31800__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31800__auto____1.call(this,state_34407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31800__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31800__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31800__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31800__auto__;
})()
;})(switch__31799__auto__,c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31896__auto__ = (function (){var statearr_34495 = f__31895__auto__.call(null);
(statearr_34495[(6)] = c__31894__auto__);

return statearr_34495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31896__auto__);
});})(c__31894__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31894__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34558,link){
var map__34559 = p__34558;
var map__34559__$1 = (((((!((map__34559 == null))))?(((((map__34559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34559):map__34559);
var file = cljs.core.get.call(null,map__34559__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__34559,map__34559__$1,file){
return (function (p1__34556_SHARP_,p2__34557_SHARP_){
if(cljs.core._EQ_.call(null,p1__34556_SHARP_,p2__34557_SHARP_)){
return p1__34556_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__34559,map__34559__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34562){
var map__34563 = p__34562;
var map__34563__$1 = (((((!((map__34563 == null))))?(((((map__34563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34563):map__34563);
var match_length = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34561_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34561_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34565_SHARP_,p2__34566_SHARP_){
return cljs.core.assoc.call(null,p1__34565_SHARP_,cljs.core.get.call(null,p2__34566_SHARP_,key),p2__34566_SHARP_);
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
var loaded_f_datas_34567 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34567);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34567);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34568,p__34569){
var map__34570 = p__34568;
var map__34570__$1 = (((((!((map__34570 == null))))?(((((map__34570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34570):map__34570);
var on_cssload = cljs.core.get.call(null,map__34570__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34571 = p__34569;
var map__34571__$1 = (((((!((map__34571 == null))))?(((((map__34571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34571):map__34571);
var files_msg = map__34571__$1;
var files = cljs.core.get.call(null,map__34571__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1576339913505
