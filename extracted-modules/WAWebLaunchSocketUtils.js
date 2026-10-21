__d("WAWebLaunchSocketUtils", [
    "Promise",
    "WAComms",
    "WAGzip",
    "WAWebCommsConfig",
    "WAWebCommsHandleStanza",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        o("WAComms").stopComms();
        u();
    }
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = o("WAWebCommsConfig").getCommsConfig(void 0);
            o("WAComms").startComms(r("WAWebCommsHandleStanza"), t, function(t) {
                return (e || (e = n("Promise"))).resolve(o("WAGzip").inflate(t));
            });
            yield o("WAComms").waitForConnection();
            return o("WAComms").startHandlingRequests();
        });
        return c.apply(this, arguments);
    }
    l.refreshQR = s;
    l.startCommsAndHandleRequests = u;
}, 98);