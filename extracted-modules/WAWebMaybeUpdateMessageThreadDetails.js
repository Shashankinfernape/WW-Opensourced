__d("WAWebMaybeUpdateMessageThreadDetails", [
    "WALogger",
    "WAWebBotUtils",
    "WAWebBuildAiThreadUpdateHelper",
    "WAWebThreadMsgUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebBuildAiThreadUpdateHelper").buildAiThreadUpdateHelpers(e);
            if (t == null) {
                return e;
            }
            const { defaultThreadAttributes: n, targetMsgThreadMap: r } = t;
            return e.map((e)=>{
                if (!o("WAWebBotUtils").isMetaAiBot(e.id.remote) || o("WAWebThreadMsgUtils").msgHasAiThread(e)) {
                    return e;
                }
                const a = o("WAWebBotUtils").getBotResponseTargetMsgKey(e);
                const i = a != null ? r.get(a.toString()) : null;
                if (i == null) {
                    c(a);
                }
                const l = i ?? n;
                const { aiThreadInfo: s, threadId: u } = l;
                const d = e.threadIds ?? [];
                return babelHelpers.extends({}, e, {
                    threadIds: [].concat(d, [
                        u
                    ]),
                    aiThreadInfo: s
                });
            });
        });
        return u.apply(this, arguments);
    }
    function c(t) {
        const n = t == null ? "no-target-id" : "target-unresolved";
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[maybeUpdateMessageThreadDetails] Meta AI msg routed to default thread (",
            ")"
        ])), n).sendLogs("ai-thread-fallback-to-default");
    }
    l.maybeUpdateMessageThreadDetails = s;
}, 98);