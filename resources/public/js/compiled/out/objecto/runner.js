// Compiled by ClojureScript 1.10.520 {}
goog.provide('objecto.runner');
goog.require('cljs.core');
goog.require('doo.runner');
goog.require('objecto.tests');
doo.runner.set_entry_point_BANG_.call(null,((doo.runner.karma_QMARK_.call(null))?(function (tc__31238__auto__){
jx.reporter.karma.start.call(null,tc__31238__auto__,13);

return cljs.test.run_block.call(null,(function (){var env31246 = cljs.test.empty_env.call(null,new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826));
var summary31247 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env31246,summary31247){
return (function (){
cljs.test.set_env_BANG_.call(null,env31246);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__31063__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__31063__auto__,env31246,summary31247){
return (function (){
if((env__31063__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__31063__auto__,env31246,summary31247))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return objecto.tests.read_number;},new cljs.core.Symbol("objecto.tests","read-number","objecto.tests/read-number",-1896924136,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-number","read-number",2089797727,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",21,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_number)?objecto.tests.read_number.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_decimal;},new cljs.core.Symbol("objecto.tests","read-decimal","objecto.tests/read-decimal",-1443595363,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-decimal","read-decimal",-1147705378,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",22,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_decimal)?objecto.tests.read_decimal.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_negative;},new cljs.core.Symbol("objecto.tests","read-negative","objecto.tests/read-negative",-955476440,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-negative","read-negative",-185834513,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",23,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_negative)?objecto.tests.read_negative.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_identifier;},new cljs.core.Symbol("objecto.tests","read-identifier","objecto.tests/read-identifier",-2041067293,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-identifier","read-identifier",-1267280706,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",25,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_identifier)?objecto.tests.read_identifier.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_multiple_identifiers;},new cljs.core.Symbol("objecto.tests","read-multiple-identifiers","objecto.tests/read-multiple-identifiers",-2041807927,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-multiple-identifiers","read-multiple-identifiers",-1330677868,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",35,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_multiple_identifiers)?objecto.tests.read_multiple_identifiers.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_string;},new cljs.core.Symbol("objecto.tests","read-string","objecto.tests/read-string",-917063962,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",21,1,22,22,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_string)?objecto.tests.read_string.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_character;},new cljs.core.Symbol("objecto.tests","read-character","objecto.tests/read-character",-1276361176,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-character","read-character",-1584579989,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",24,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_character)?objecto.tests.read_character.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_comment;},new cljs.core.Symbol("objecto.tests","read-comment","objecto.tests/read-comment",-1388835155,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-comment","read-comment",-1290199710,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",22,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_comment)?objecto.tests.read_comment.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_code_block;},new cljs.core.Symbol("objecto.tests","read-code-block","objecto.tests/read-code-block",-1503485768,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-code-block","read-code-block",-1266434817,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",25,1,31,31,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_code_block)?objecto.tests.read_code_block.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_unary_message;},new cljs.core.Symbol("objecto.tests","read-unary-message","objecto.tests/read-unary-message",636454395,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-unary-message","read-unary-message",936285750,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",28,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_unary_message)?objecto.tests.read_unary_message.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_nested_unary_message;},new cljs.core.Symbol("objecto.tests","read-nested-unary-message","objecto.tests/read-nested-unary-message",609231669,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-nested-unary-message","read-nested-unary-message",842061808,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",35,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_nested_unary_message)?objecto.tests.read_nested_unary_message.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.test_number;},new cljs.core.Symbol("objecto.tests","test-number","objecto.tests/test-number",1949298024,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"test-number","test-number",1645142325,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",21,1,48,48,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.test_number)?objecto.tests.test_number.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.block_eval;},new cljs.core.Symbol("objecto.tests","block-eval","objecto.tests/block-eval",506949547,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"block-eval","block-eval",810573926,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",20,1,51,51,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.block_eval)?objecto.tests.block_eval.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__31063__auto__,env31246,summary31247){
return (function (){
if((env__31063__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__31063__auto__,env31246,summary31247))
], null));
})());
});})(env31246,summary31247))
,((function (env31246,summary31247){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env31246,summary31247))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env31246,summary31247){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary31247,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary31247),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env31246,summary31247))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env31246,summary31247){
return (function (){
cljs.test.set_env_BANG_.call(null,env31246);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary31247));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary31247),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env31246,summary31247))
], null));
})());
}):(function (){
return cljs.test.run_block.call(null,(function (){var env31248 = cljs.test.empty_env.call(null);
var summary31249 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env31248,summary31249){
return (function (){
cljs.test.set_env_BANG_.call(null,env31248);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__31063__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__31063__auto__,env31248,summary31249){
return (function (){
if((env__31063__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__31063__auto__,env31248,summary31249))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return objecto.tests.read_number;},new cljs.core.Symbol("objecto.tests","read-number","objecto.tests/read-number",-1896924136,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-number","read-number",2089797727,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",21,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_number)?objecto.tests.read_number.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_decimal;},new cljs.core.Symbol("objecto.tests","read-decimal","objecto.tests/read-decimal",-1443595363,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-decimal","read-decimal",-1147705378,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",22,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_decimal)?objecto.tests.read_decimal.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_negative;},new cljs.core.Symbol("objecto.tests","read-negative","objecto.tests/read-negative",-955476440,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-negative","read-negative",-185834513,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",23,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_negative)?objecto.tests.read_negative.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_identifier;},new cljs.core.Symbol("objecto.tests","read-identifier","objecto.tests/read-identifier",-2041067293,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-identifier","read-identifier",-1267280706,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",25,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_identifier)?objecto.tests.read_identifier.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_multiple_identifiers;},new cljs.core.Symbol("objecto.tests","read-multiple-identifiers","objecto.tests/read-multiple-identifiers",-2041807927,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-multiple-identifiers","read-multiple-identifiers",-1330677868,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",35,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_multiple_identifiers)?objecto.tests.read_multiple_identifiers.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_string;},new cljs.core.Symbol("objecto.tests","read-string","objecto.tests/read-string",-917063962,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",21,1,22,22,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_string)?objecto.tests.read_string.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_character;},new cljs.core.Symbol("objecto.tests","read-character","objecto.tests/read-character",-1276361176,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-character","read-character",-1584579989,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",24,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_character)?objecto.tests.read_character.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_comment;},new cljs.core.Symbol("objecto.tests","read-comment","objecto.tests/read-comment",-1388835155,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-comment","read-comment",-1290199710,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",22,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_comment)?objecto.tests.read_comment.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_code_block;},new cljs.core.Symbol("objecto.tests","read-code-block","objecto.tests/read-code-block",-1503485768,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-code-block","read-code-block",-1266434817,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",25,1,31,31,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_code_block)?objecto.tests.read_code_block.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_unary_message;},new cljs.core.Symbol("objecto.tests","read-unary-message","objecto.tests/read-unary-message",636454395,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-unary-message","read-unary-message",936285750,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",28,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_unary_message)?objecto.tests.read_unary_message.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.read_nested_unary_message;},new cljs.core.Symbol("objecto.tests","read-nested-unary-message","objecto.tests/read-nested-unary-message",609231669,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"read-nested-unary-message","read-nested-unary-message",842061808,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",35,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.read_nested_unary_message)?objecto.tests.read_nested_unary_message.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.test_number;},new cljs.core.Symbol("objecto.tests","test-number","objecto.tests/test-number",1949298024,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"test-number","test-number",1645142325,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",21,1,48,48,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.test_number)?objecto.tests.test_number.cljs$lang$test:null)])),new cljs.core.Var(function(){return objecto.tests.block_eval;},new cljs.core.Symbol("objecto.tests","block-eval","objecto.tests/block-eval",506949547,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Symbol(null,"block-eval","block-eval",810573926,null),"/Users/giraffe/code/objecto/src/objecto/tests.cljs",20,1,51,51,cljs.core.List.EMPTY,null,(cljs.core.truth_(objecto.tests.block_eval)?objecto.tests.block_eval.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__31063__auto__,env31248,summary31249){
return (function (){
if((env__31063__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__31063__auto__,env31248,summary31249))
], null));
})());
});})(env31248,summary31249))
,((function (env31248,summary31249){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"objecto.tests","objecto.tests",-1564336706,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env31248,summary31249))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env31248,summary31249){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary31249,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary31249),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env31248,summary31249))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env31248,summary31249){
return (function (){
cljs.test.set_env_BANG_.call(null,env31248);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary31249));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary31249),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env31248,summary31249))
], null));
})());
})));

//# sourceMappingURL=runner.js.map?rel=1576362625944
