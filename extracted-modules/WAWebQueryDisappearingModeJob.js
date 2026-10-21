__d("WAWebQueryDisappearingModeJob", [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = new (r("WADeprecatedWapParser"))("dmParser", function(e) {
        const t = e.child("disappearing_mode");
        return {
            duration: t.attrInt("duration"),
            t: t.attrInt("t")
        };
    });
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = o("WAWap").wap("iq", {
                xmlns: "disappearing_mode",
                to: o("WAWap").S_WHATSAPP_NET,
                type: "get",
                id: o("WAWap").generateId()
            });
            const n = yield o("WADeprecatedSendIq").deprecatedSendIq(t, e);
            if (!n.success) {
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(n.errorCode);
            }
            return n.result;
        });
        return u.apply(this, arguments);
    }
    l.queryDisappearingMode = s;
}, 98);