__d("WAWebBuildAiThreadUpdateHelper", [
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadTypeUtils",
    "WAWebBotBaseGating",
    "WAWebBotDeviceCapabilities",
    "WAWebBotUtils",
    "WAWebDBMessageSerialization",
    "WAWebSchemaMessage",
    "WAWebThreadMsgUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.filter((e)=>o("WAWebBotUtils").isMetaAiBot(e.id.remote));
            if (t.length === 0) {
                return null;
            }
            const n = yield o("WAWebBotDeviceCapabilities").primaryHasAiThreadSupport();
            if (!n || !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled()) {
                return null;
            }
            const r = t.filter((e)=>!o("WAWebThreadMsgUtils").msgHasAiThread(e));
            if (r.length === 0) {
                return null;
            }
            const a = {
                threadId: o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId(),
                aiThreadInfo: {
                    aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default
                }
            };
            const i = u(r);
            if (i.length === 0) {
                return {
                    targetMsgThreadMap: new Map,
                    defaultThreadAttributes: a
                };
            }
            const l = yield c(i, e);
            return {
                targetMsgThreadMap: l,
                defaultThreadAttributes: a
            };
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return r("compactMap")(e, o("WAWebBotUtils").getBotResponseTargetMsgKey);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new Map;
            const r = f(t);
            const o = e.reduce((e, t)=>{
                const o = t.toString();
                const a = r.get(o);
                if (a == null) {
                    e.push(t);
                } else {
                    _(a, n);
                }
                return e;
            }, []);
            if (o.length !== 0) {
                yield m(o, n);
            }
            return n;
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.map((e)=>e.toString());
            const r = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(n, false);
            const a = r.filter(Boolean).map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e));
            a.forEach((e)=>_(e, t));
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        if (o("WAWebThreadMsgUtils").msgHasAiThread(e)) {
            const n = r("nullthrows")(o("WAWebThreadMsgUtils").getMsgAiThread(e));
            const a = o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(void 0, o("WAWebAiThreadTypeUtils").AiThreadType.Default);
            t.set(e.id.toString(), {
                threadId: n,
                aiThreadInfo: a
            });
        }
    }
    function f(e) {
        const t = new Map;
        for (const n of e){
            t.set(n.id.toString(), n);
        }
        return t;
    }
    l.buildAiThreadUpdateHelpers = e;
}, 98);