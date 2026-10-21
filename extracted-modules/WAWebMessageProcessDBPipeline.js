__d("WAWebMessageProcessDBPipeline", [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebHandleOrphansForNewMsg",
    "WAWebMessageProcessorCache",
    "WAWebWamWorkerOfflineProcessReporter",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = 10000;
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield f(e.msgData, e.flushImmediatly);
            if (e.flushImmediatly && t) {
                g(e.msgData, e.uiNotified);
            }
        });
        return _.apply(this, arguments);
    }
    function f(t, n) {
        return o("WAWebMessageProcessorCache").messageProcessorCache.addMessages(t.map((e)=>({
                msg: e
            })), n).then(()=>{
            o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.updateProcessedMessageCount();
            return true;
        }).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[processRenderableMessages] cache->DB write failed: ",
                ""
            ])), t).tags("messaging").sendLogs("processRenderableMessages write to DB from cache, failed");
            return false;
        });
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                if (!t.isSettled) {
                    yield y(t.promise);
                }
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "process msgs orphans ",
                    ""
                ])), e.length);
                yield (d || (d = n("Promise"))).all(e.map((e)=>o("WAWebHandleOrphansForNewMsg").handleOrphansForNewMsg(e)));
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "processMsgDataDBPipeline: draining orphans failed"
                ]))).catching(r("getErrorSafe")(e)).tags("messaging").sendLogs("orphan-drain-failed", {
                    sampling: 0.01
                });
            }
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield o("WAPromiseTimeout").promiseTimeout(e, m, "orphan drain waiting on UI notification");
            } catch (e) {
                const t = e instanceof o("WACustomError").TimeoutError ? "timed out" : "rejected";
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processMsgDataDBPipeline: UI notification ",
                    ", draining anyway"
                ])), t).catching(r("getErrorSafe")(e)).tags("messaging").sendLogs("orphan-drain-ui-notification-unsettled", {
                    sampling: 0.1
                });
            }
        });
        return C.apply(this, arguments);
    }
    l.processMsgDataDBPipeline = p;
}, 98);