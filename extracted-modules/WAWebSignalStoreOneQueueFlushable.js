__d("WAWebSignalStoreOneQueueFlushable", [
    "WALogger",
    "WAWebOfflineResumeCounters",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        flush: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = o("WAWebSignalProtocolStore").getSignalProtocolStore();
                if (t.hasPendingPersistWrites()) {
                    try {
                        yield t.flushBufferToDiskIfNotMemOnlyMode();
                    } catch (error) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "signalStoreOneQueueFlushable: flush failed"
                        ]))).catching(r("getErrorSafe")(error)).tags("messaging");
                        o("WAWebOfflineResumeCounters").logOneQueueFlushFailed();
                    }
                }
            });
            function a() {
                return t.apply(this, arguments);
            }
            return a;
        })()
    };
    l.signalStoreOneQueueFlushable = s;
}, 98);