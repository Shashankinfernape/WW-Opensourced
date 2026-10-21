__d("WAWebAiThreadCreationUtils", [
    "WAWebBotUtils",
    "WAWebMsgKey",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebThreadId",
    "WAWebThreadUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "38e75a8e-6bc8-cf82-ab85-73799b39acd9";
    function s() {
        return new (r("WAWebThreadId"))({
            key: new (r("WAWebMsgKey"))({
                fromMe: true,
                id: e,
                remote: o("WAWebBotUtils").META_BOT_PN_WID
            }),
            type: o("WAWebThreadUtils").ThreadType.AiThread
        });
    }
    function u(e) {
        const t = r("WAWebPonyfillsCryptoRandomUUID")();
        const n = new (r("WAWebMsgKey"))({
            fromMe: true,
            remote: e,
            id: t
        });
        return new (r("WAWebThreadId"))({
            key: n,
            type: o("WAWebThreadUtils").ThreadType.AiThread
        });
    }
    function c(e, t) {
        const n = new (r("WAWebMsgKey"))({
            fromMe: true,
            remote: e,
            id: t
        });
        return new (r("WAWebThreadId"))({
            key: n,
            type: o("WAWebThreadUtils").ThreadType.AiThread
        });
    }
    l.HISTORICAL_META_AI_THREAD_KEY_ID = e;
    l.getHistoricalMetaAiThreadId = s;
    l.createAiThreadId = u;
    l.createAiThreadFromMutationIndex = c;
}, 98);