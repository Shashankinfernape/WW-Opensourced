__d("WAWebDeprecatedSendIqWorkerProxy", [
    "Promise",
    "WAWap",
    "WAWebBackendWorkerClient",
    "WAWebCommsWorkerReady",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            yield o("WAWebCommsWorkerReady").waitForCommsWorker();
            const a = o("WAWap").encodeStanza(t);
            const i = yield o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>e.sendAndReceive("comms", "deprecatedSendStanzaAndReturnAck", {
                    stanza: a,
                    expectedAck: r
                }, void 0, void 0, void 0, [
                    a.buffer
                ]));
            return o("WAWap").decodeStanza(i, function(t) {
                return (e || (e = n("Promise"))).resolve(t);
            });
        });
        return u.apply(this, arguments);
    }
    l.deprecatedSendStanzaAndReturnAck = s;
}, 98);