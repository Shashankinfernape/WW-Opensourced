__d("WAWebMessageEditAddonMessageProcessor", [
    "Promise",
    "WAWebAddonCreateMsgProcessor",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebMessageEditGatingUtils",
    "WAWebProcessEncryptedMessageEditMsgs",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: function() {
            return o("WAWebMessageEditGatingUtils").isMessageEditToMessageSecretReceiverEnabled();
        },
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
                const r = yield o("WAWebProcessEncryptedMessageEditMsgs").processEncryptedMessageEditMsgs(e, n);
                const a = r.filter((e)=>e.isLatest);
                yield o("WAWebDBProcessEditProtocolMsgs").updateMessageEditsLocally(r, a);
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