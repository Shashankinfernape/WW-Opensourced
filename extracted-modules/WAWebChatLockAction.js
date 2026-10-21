__d("WAWebChatLockAction", [
    "WAWebChatCollection",
    "WAWebDBUpdateChatTable",
    "WAWebLockChatSync",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = t ? {
                isLocked: t,
                archive: false,
                pin: undefined
            } : {
                isLocked: t
            };
            yield o("WAWebDBUpdateChatTable").updateChatTable(e, r);
            o("WAWebChatCollection").ChatCollection.get(e)?.set(r);
        });
        return s.apply(this, arguments);
    }
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, o) {
            const { syncWithPrimaries = true } = o ?? {};
            if (syncWithPrimaries) {
                r("WAWebLockChatSync").sendLockMutation(t, {
                    isLocked: n
                });
            }
            return e(t, n);
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return u(e, true, t);
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return u(e, false, t);
        });
        return _.apply(this, arguments);
    }
    l.setChatAsLocked = d;
    l.setChatAsUnlocked = p;
}, 98);