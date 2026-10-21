__d("WAWebQueryPrivacyDisallowedListPnJob", [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebJidToWid",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = new (r("WADeprecatedWapParser"))("getPrivacyDisallowedListParser", function(e) {
        const t = e.child("privacy");
        const n = t.maybeChild("list");
        if (n == null) {
            return {
                status: "match"
            };
        }
        const r = n.mapChildren(function(e) {
            return o("WAWebJidToWid").deviceJidToUserWid(e.attrDeviceJid("jid"));
        });
        return {
            status: "mismatch",
            users: r,
            dhash: n.attrString("dhash")
        };
    });
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let n;
            const a = (n = o("WAWap")).wap("iq", {
                to: n.S_WHATSAPP_NET,
                type: "get",
                id: n.generateId(),
                xmlns: "privacy"
            }, n.wap("privacy", null, n.wap("list", {
                name: n.CUSTOM_STRING(t),
                value: n.CUSTOM_STRING("contact_blacklist")
            })));
            const i = yield o("WADeprecatedSendIq").deprecatedSendIq(a, e);
            if (i.success) {
                return i.result;
            }
            throw r("err")("invalid response");
        });
        return u.apply(this, arguments);
    }
    l.queryPrivacyDisallowedListPn = s;
}, 98);