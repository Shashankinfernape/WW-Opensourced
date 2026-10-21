__d("WAWebChatSendStarMsgsBridge", [
    "WALogger",
    "WAWebDBProcessMessage",
    "WAWebStarMessageSync",
    "WAWebSyncdCoreApi",
    "WAWebSyncdWamAppState",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n) {
        return d(t, n);
    }
    function c(e, t) {
        return d(e, false);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (!n) {
                o("WAWebSyncdWamAppState").addUnsetActionCount(t.length);
            }
            const a = yield r("WAWebStarMessageSync").getStarMessageMutations(t.map((e)=>e.id), n);
            return o("WAWebSyncdCoreApi").lockForSync([
                "message",
                "message-association"
            ], a, function() {
                if (n) {
                    return o("WAWebDBProcessMessage").starMessages(t.map((e)=>e.id.toString())).catch((t)=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "star messages failed"
                        ]))).verbose().sendLogs("star messages failed");
                        throw r("err")("star messages failed");
                    });
                }
                return o("WAWebDBProcessMessage").unstarMessages(t.map((e)=>e.id.toString())).catch((e)=>{
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "unstar messages failed"
                    ]))).verbose().sendLogs("unstar messages failed");
                    throw r("err")("unstar messages failed");
                });
            });
        });
        return m.apply(this, arguments);
    }
    l.sendStarMsgs = u;
    l.sendUnstarAll = c;
}, 98);