__d("WAWebSetPrivacyTokensJob", [
    "$InternalEnum",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = new (r("WADeprecatedWapParser"))("setPrivacyTokensParser", function(e) {
        const t = {
            stanzaId: e.attrString("id")
        };
        return t;
    });
    const s = n("$InternalEnum")({
        TrustedContact: "trusted_contact"
    });
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
            let a;
            const i = n.map((e)=>o("WAWap").wap("token", {
                    jid: o("WAWebCommsWapMd").USER_JID(t),
                    t: o("WAWap").CUSTOM_STRING(String(r)),
                    type: o("WAWap").CUSTOM_STRING(e)
                }));
            const l = yield o("WADeprecatedSendIq").deprecatedSendIq((a = o("WAWap")).wap("iq", {
                to: a.S_WHATSAPP_NET,
                type: "set",
                xmlns: "privacy",
                id: a.generateId()
            }, a.wap("tokens", null, i)), e);
            if (!l.success) {
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(l.errorCode, l.errorText);
            }
        });
        return c.apply(this, arguments);
    }
    l.TokenType = s;
    l.issuePrivacyToken = u;
}, 98);