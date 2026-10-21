__d("WAWebPollAddOptionAddonMessageProcessor", [
    "WAWebAddonCreateMsgProcessor",
    "WAWebPollAddOptionFromHistorySyncMsg",
    "WAWebPollsGatingUtils",
    "WAWebProcessEncryptedPollAddOptionMsgs",
    "WAWebStorePollAddOptionDecryptedMsgs",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: o("WAWebPollsGatingUtils").isPollAddOptionReceivingEnabled,
        convert: {
            fromHistorySyncMsg: r("WAWebPollAddOptionFromHistorySyncMsg")
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
                const r = yield o("WAWebProcessEncryptedPollAddOptionMsgs").processEncryptedPollAddOptionMsgs(e, n);
                yield o("WAWebStorePollAddOptionDecryptedMsgs").storePollAddOptionDecryptedMsgs(r);
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