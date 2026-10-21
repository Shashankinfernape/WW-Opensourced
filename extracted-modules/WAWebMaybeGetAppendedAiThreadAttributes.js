__d("WAWebMaybeGetAppendedAiThreadAttributes", [
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadTypeUtils",
    "WAWebBotBaseGating",
    "WAWebBotDeviceCapabilities",
    "WAWebBotUtils",
    "WAWebCreateAiThreadTitleForMessage",
    "WAWebThreadMsgUtils",
    "WAWebThreadUtils",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = e.to;
            if (!o("WAWebBotUtils").isMetaAiBot(n)) {
                return d(e);
            }
            const a = yield o("WAWebBotDeviceCapabilities").primaryHasAiThreadSupport();
            if (!a || !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled()) {
                return d(e);
            }
            if (u(e)) {
                return c(e);
            }
            const e_quotedMsg = e.quotedMsg;
            if (u(e_quotedMsg)) {
                return c(r("nullthrows")(e_quotedMsg, "quotedMsg"));
            }
            const l = o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId();
            const s = {
                aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default
            };
            const m = e?.threadIds ?? [];
            return [
                [].concat(m, [
                    l
                ]),
                s
            ];
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        if (e?.threadIds == null) {
            return false;
        }
        return e.threadIds.some((e)=>e.type === o("WAWebThreadUtils").ThreadType.AiThread);
    }
    function c(e) {
        const r = e?.threadIds ?? [];
        const a = o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId();
        if (o("WAWebThreadMsgUtils").isMsgInThread(e, a)) {
            return [
                r,
                e?.aiThreadInfo ?? undefined
            ];
        }
        const l = e?.aiThreadInfo ?? {};
        const { aiThreadType, title } = l;
        const c = o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(title ?? o("WAWebCreateAiThreadTitleForMessage").createAiThreadTitleForMessage(e), aiThreadType ?? o("WAWebAiThreadTypeUtils").AiThreadType.Default);
        return [
            r,
            c
        ];
    }
    function d(e) {
        return [
            e.threadIds?.filter(function(e) {
                return e.type !== o("WAWebThreadUtils").ThreadType.AiThread;
            }),
            undefined
        ];
    }
    l.maybeGetAppendedAiThreadAttributes = e;
}, 98);