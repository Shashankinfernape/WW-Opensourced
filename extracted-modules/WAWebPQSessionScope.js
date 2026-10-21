__d("WAWebPQSessionScope", [
    "WAWebPQGatingUtils",
    "WAWebSessionScope",
    "WAWebSignalSessionApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (n != null && n !== o("WAWebSessionScope").SessionScope.DEFAULT || !t || e.isHosted() || e.isBot() || e.isFbidBot() || !o("WAWebPQGatingUtils").isPq1on1MessageEnabled()) {
                return n;
            }
            const r = yield o("WAWebSignalSessionApi").hasSignalSessions([
                e
            ], o("WAWebSessionScope").SessionScope.PQ);
            const a = r[0];
            if (a) {
                return o("WAWebSessionScope").SessionScope.PQ;
            }
            return n;
        });
        return s.apply(this, arguments);
    }
    l.resolvePqSendScope = e;
}, 98);