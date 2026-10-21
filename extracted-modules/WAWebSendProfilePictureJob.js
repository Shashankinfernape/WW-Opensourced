__d("WAWebSendProfilePictureJob", [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new (r("WADeprecatedWapParser"))("photoResponseParser", function(e) {
        e.assertAttr("type", "result");
        if (e.hasChild("picture")) {
            const t = e.child("picture");
            return {
                id: t.attrInt("id")
            };
        }
        return {
            id: null
        };
    });
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = yield o("WADeprecatedSendIq").deprecatedSendIq(o("WAWap").wap("iq", {
                to: o("WAWap").S_WHATSAPP_NET,
                target: r("WAWebWid").isGroup(t) ? o("WAWebCommsWapMd").CHAT_JID(t) : o("WAWap").DROP_ATTR,
                type: "set",
                xmlns: "w:profile:picture",
                id: o("WAWap").generateId()
            }, a ? o("WAWap").wap("picture", {
                type: "image"
            }, a) : null), s);
            if (i.success) {
                return {
                    id: i.result.id
                };
            }
            return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(i.errorCode, i.errorText));
        });
        return c.apply(this, arguments);
    }
    l.default = u;
}, 98);