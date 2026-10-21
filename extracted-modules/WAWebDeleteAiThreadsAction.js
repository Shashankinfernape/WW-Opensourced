__d("WAWebDeleteAiThreadsAction", [
    "Promise",
    "WALogger",
    "WAWebAiThreadDeleteSync",
    "WAWebAiThreadPinSync",
    "WAWebChatCollection",
    "WAWebThreadBridgeApi",
    "WAWebThreadJourneyLogger",
    "WAWebThreadMetadataBulkJob",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, threadIds) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteAiThreadsAction]: Start"
            ])));
            if (!t.isBot()) {
                throw r("err")("deleteAiThreadsAction: chatId must be a bot");
            }
            const i = o("WAWebChatCollection").ChatCollection.get(t);
            const l = threadIds.map((e)=>i?.aiThreads?.get(e)?.creationTimestamp);
            const f = threadIds.filter((e)=>{
                const n = i?.aiThreads?.get(e);
                const r = n?.pinThreadTimestamp;
                return r != null && r > 0;
            });
            o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreadDelete(threadIds, l);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteAiThreadsAction]: Delete from threads_metadata table"
            ])));
            const msgIds = yield o("WAWebThreadMetadataBulkJob").bulkDeleteThreads(t, threadIds);
            if (f.length > 0) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[deleteAiThreadsAction]: Send companion unpin mutations"
                ])));
                try {
                    yield (_ || (_ = n("Promise"))).all(f.map((e)=>r("WAWebAiThreadPinSync").sendMutation(e, false)));
                } catch (e) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[deleteAiThreadsAction] companion unpin mutations failed"
                    ])));
                }
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteAiThreadsAction]: Send delete mutations"
            ])));
            yield r("WAWebAiThreadDeleteSync").sendMutation(threadIds);
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteAiThreadsAction]: Delete model msgs by msgIds"
            ])));
            o("WAWebThreadBridgeApi").ThreadBridgeApi.deleteChatAiThreads({
                chatId: t,
                threadIds,
                msgIds
            });
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteAiThreadsAction]: End"
            ])));
        });
        return g.apply(this, arguments);
    }
    l.deleteAiThreadsAction = f;
}, 98);