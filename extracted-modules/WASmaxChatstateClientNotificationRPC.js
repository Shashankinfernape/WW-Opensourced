__d("WASmaxChatstateClientNotificationRPC", [
    "WAComms",
    "WASmaxOutChatstateClientNotificationRequest",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WASmaxOutChatstateClientNotificationRequest").makeClientNotificationRequest(e);
            yield o("WAComms").castSmaxStanza(t);
        });
        return s.apply(this, arguments);
    }
    l.sendClientNotificationRPC = e;
}, 98);