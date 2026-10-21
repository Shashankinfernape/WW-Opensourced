__d("WAWebGetPushServerSettingsJob", [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = new (r("WADeprecatedWapParser"))("getPushServerSettings", function(t) {
        if (!t.hasChild("error")) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getPushServerSettings: success"
            ]))).tags("push-notification");
            const n = t.child("settings");
            const r = n.attrString("webserverkey");
            return r;
        }
        const a = t.child("error");
        const i = a.attrInt("code");
        const l = a.attrString("text");
        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "getPushServerSettingsRequest: server response with ",
            ", ",
            ""
        ])), i, l).tags("push-notification");
        return {
            errorCode: i,
            errorText: l
        };
    });
    const d = (u = o("WAWap")).wap("iq", {
        to: u.S_WHATSAPP_NET,
        type: "get",
        xmlns: "urn:xmpp:whatsapp:push",
        id: u.generateId()
    }, u.wap("settings", null));
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WADeprecatedSendIq").deprecatedSendIq(d, c);
            if (!e.success) {
                const { errorCode: t, errorText: n } = e;
                return {
                    errorCode: t,
                    errorText: n
                };
            }
            return e.result;
        });
        return p.apply(this, arguments);
    }
    l.getPushServerSettings = m;
}, 98);