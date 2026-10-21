__d("WASmaxUnifiedSessionShareRPC", [
    "WAComms",
    "WASmaxJsx",
    "WAWap",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = u(e);
            yield o("WAComms").castSmaxStanza(t);
        });
        return s.apply(this, arguments);
    }
    function u({ unifiedSessionId: t }) {
        const n = o("WASmaxJsx").smax("ib", null, o("WASmaxJsx").smax("unified_session", {
            id: o("WAWap").CUSTOM_STRING(t)
        }));
        return n;
    }
    l.sendShareRPC = e;
    l.makeShareRequest = u;
}, 98);