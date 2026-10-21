__d("WAWebEventEditAddonMessageProcessor", [
    "Promise",
    "WAArrayGroupBy",
    "WAWebAddonCreateMsgProcessor",
    "WAWebBoolFunc",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebGenerateEventEditSystemMessages",
    "WAWebProcessEncryptedEventEditMsgs",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: o("WAWebBoolFunc").returnTrue,
        convert: {
            fromHistorySyncMsg: function() {
                return (e || (e = n("Promise"))).resolve([]);
            }
        },
        updateCollection: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {});
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        beforeUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { parents: n }) {
                const r = yield o("WAWebProcessEncryptedEventEditMsgs").processEncryptedEventEditMsgs(e, n);
                const a = r.filter((e)=>e.isLatest);
                yield o("WAWebDBProcessEditProtocolMsgs").updateMessageEditsLocally(r, a);
                const i = o("WAArrayGroupBy").groupBy(a, function(e) {
                    return e.protocolMsg.id.remote.toString();
                });
                yield o("WAWebGenerateEventEditSystemMessages").generateEventEditSystemMessages(i);
                return [];
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        afterUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {});
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        manageNotifications: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {});
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })()
    });
    l.default = s;
}, 98);