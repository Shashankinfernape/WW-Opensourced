__d("WAWebHandleBusinessProfile", [
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ from }) {
            const n = o("WAWebWidFactory").createWidFromWidLike(from.toString());
            yield d(n);
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ hash }) {
            const n = yield o("WAWebApiContact").getContactRecordByHash(hash);
            if (n == null) {
                return false;
            }
            const r = o("WAWebWidFactory").createWid(n.id);
            yield d(r);
            return true;
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return o("WAWebBackendApi").frontendSendAndReceive("updateBusinessProfile", {
            wid: o("WAWebWidToJid").widToUserJid(e)
        });
    }
    l.handleBusinessProfile = e;
    l.handleBusinessProfileHash = u;
}, 98);