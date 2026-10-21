__d("WASmaxPresenceSubscribeRPC", [
    "WAComms",
    "WASmaxOutPresenceSubscribeRequest",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WASmaxOutPresenceSubscribeRequest").makeSubscribeRequest(e);
            yield o("WAComms").castSmaxStanza(t);
        });
        return s.apply(this, arguments);
    }
    l.sendSubscribeRPC = e;
}, 98);