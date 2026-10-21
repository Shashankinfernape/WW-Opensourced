__d("WAWebSendRequestedKeyShareJob", [
    "WAWebDefinePersistedJob",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ keys: t, orphanKeys: n, peerDeviceId: r }) {
            const a = {
                type: "missing_key",
                keys: t,
                orphanKeys: n,
                peerDeviceWid: o("WAWebWidFactory").createDeviceWidOrThrow(r)
            };
            yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("sendAppStateSyncKeyShare", {
                keyShare: a
            });
        });
        return s.apply(this, arguments);
    }
    const u = o("WAWebDefinePersistedJob").defineWebPersistedJob().finalStep("sendRequestedKeyShare", (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            yield e(t);
        });
        return function(e) {
            return t.apply(this, arguments);
        };
    })()).end();
    l.sendKeyShare = e;
    l.sendRequestedKeyShare = u;
}, 98);