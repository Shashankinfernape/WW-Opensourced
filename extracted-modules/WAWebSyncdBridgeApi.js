__d("WAWebSyncdBridgeApi", [
    "WAWebCmd",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdKeyCallbacksApi",
    "WAWebSyncdOrphan",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = {
        checkOrphanMutations: function({ chatIds, msgIds, threadIds }) {
            return o("WAWebSyncdOrphan").checkOrphanMutations(msgIds, chatIds, threadIds);
        },
        handleSyncdFatal: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebSyncdDbCallbacksApi").handleSyncdFatal();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        getDeviceFingerprint: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebSyncdKeyCallbacksApi").getDeviceFingerprint();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        triggerAppStateSyncCompletedFromBridge: function() {
            o("WAWebCmd").Cmd.onAppStateSyncCompletedFromBridge();
        }
    };
    l.SyncdBridgeApi = e;
}, 98);