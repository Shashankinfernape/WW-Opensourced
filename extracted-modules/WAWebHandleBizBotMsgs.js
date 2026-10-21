__d("WAWebHandleBizBotMsgs", [
    "Promise",
    "WALogger",
    "WAWebBotSystemMsg",
    "WAWebBotTypes",
    "WAWebModelStorageUtils",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaChat",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = new Map;
            const i = t.toJid();
            r.forEach((e)=>{
                if (i != null && !a.has(i) && e.bizBotType) {
                    a.set(i, e.bizBotType);
                }
            });
            const l = Array.from(a.keys());
            const u = yield d(l);
            const c = [];
            const m = [];
            for (const [f, g] of a.entries()){
                const h = u.get(f)?.bizBotSystemMsgType;
                if (g === o("WAWebBotTypes").BizBotType.BIZ_1P && h !== o("WAWebBotTypes").BizBotType.BIZ_1P) {
                    c.push(o("WAWebBotSystemMsg").genBizBot1pDisclosureMessage(o("WAWebWidFactory").createWid(f)));
                    m.push({
                        id: f,
                        bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_1P
                    });
                } else if (g === o("WAWebBotTypes").BizBotType.BIZ_3P && h !== o("WAWebBotTypes").BizBotType.BIZ_3P) {
                    c.push(o("WAWebBotSystemMsg").genBizBot3pDisclosureMessage(o("WAWebWidFactory").createWid(f)));
                    m.push({
                        id: f,
                        bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_3P
                    });
                }
            }
            if (c.length) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleBizBotMsgs: bulkCreateOrMerge"
                ]))).tags("missing-lid");
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    "chat"
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t]) {
                        yield (s || (s = n("Promise"))).all([
                            t.bulkMergeOnly(m)
                        ]);
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
                return c;
            }
            return [];
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                return o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("getBizBotData", {
                    chatIds: e.map(o("WAWebWidFactory").createWid)
                });
            }
            const t = new Map;
            const n = yield o("WAWebSchemaChat").getChatTable().bulkGet(e);
            n.map((e)=>{
                if (e) {
                    t.set(e.id, {
                        bizBotSystemMsgType: e.bizBotSystemMsgType
                    });
                }
            });
            return t;
        });
        return m.apply(this, arguments);
    }
    l.handleBizBotMsgs = u;
}, 98);