__d("WAWebPollEditAddonMessageProcessor", [
    "WAWebAddonCreateMsgProcessor",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebPollEditFromHistorySyncMsg",
    "WAWebPollsGatingUtils",
    "WAWebProcessEncryptedPollEditMsgs",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: o("WAWebPollsGatingUtils").isPollCreatorEditReceivingEnabled,
        convert: {
            fromHistorySyncMsg: r("WAWebPollEditFromHistorySyncMsg")
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
                const r = yield o("WAWebProcessEncryptedPollEditMsgs").processEncryptedPollEditMsgs(e, n);
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
    l.default = e;
}, 98);