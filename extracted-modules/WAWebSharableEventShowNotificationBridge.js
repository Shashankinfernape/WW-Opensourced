__d("WAWebSharableEventShowNotificationBridge", [
    "WAWebBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(payload, typeRaw) {
            yield o("WAWebBackendApi").frontendSendAndReceive("showSharableEventNotification", {
                payload,
                typeRaw
            });
        });
        return s.apply(this, arguments);
    }
    l.showSharableEventNotificationFromBackend = e;
}, 98);