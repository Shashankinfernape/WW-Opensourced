__d("WAWebSetAboutJob", [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebDefinePersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = new (r("WADeprecatedWapParser"))("aboutResponse", function(e) {
        e.assertAttr("type", "result");
        return {
            id: e.attrInt("id")
        };
    });
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let n;
            const r = (n = o("WAWap")).wap("iq", {
                to: n.S_WHATSAPP_NET,
                type: "set",
                xmlns: "status",
                id: n.generateId()
            }, n.wap("status", null, t));
            const a = yield o("WADeprecatedSendIq").deprecatedSendIq(r, e);
            if (a.success) {
                return {
                    status: 200
                };
            }
            return {
                status: a.errorCode
            };
        });
        return u.apply(this, arguments);
    }
    const c = o("WAWebDefinePersistedJob").defineWebPersistedJob().finalStep("sendStanza", function({ content: t }) {
        return s(t);
    }).end();
    l.sendSetAbout = s;
    l.setAbout = c;
}, 98);