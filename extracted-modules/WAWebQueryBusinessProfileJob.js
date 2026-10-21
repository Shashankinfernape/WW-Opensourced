__d("WAWebQueryBusinessProfileJob", [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommonParsersParseBusinessProfile",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "asyncToGeneratorRuntime",
    "cr:17537"
], function(t, n, r, o, a, i, l) {
    const e = new (r("WADeprecatedWapParser"))("businessProfileResponse", function(e) {
        e.assertTag("iq");
        e.assertFromServer();
        const t = e.child("business_profile");
        const n = [];
        t.forEachChildWithTag("profile", function(e) {
            const a = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("jid"));
            const i = e.attrString("tag");
            const l = e.maybeChild("aea_account_type")?.maybeAttrString("value");
            const s = r("WAWebCommonParsersParseBusinessProfile")(e);
            if (Object.keys(s).length) {
                n.push({
                    wid: a,
                    tag: i,
                    profile: s,
                    aeaAccountType: l
                });
            } else {
                n.push({
                    wid: a,
                    tag: i,
                    aeaAccountType: l
                });
            }
        });
        return n;
    });
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            let a;
            const i = (a = o("WAWap")).wap("iq", {
                to: a.S_WHATSAPP_NET,
                xmlns: "w:biz",
                id: a.generateId(),
                type: "get"
            }, a.wap("business_profile", {
                v: a.INT(r)
            }, t.map((e)=>o("WAWap").wap("profile", {
                    jid: o("WAWebCommsWapMd").USER_JID(e.wid),
                    tag: e.tag != null ? o("WAWap").INT(e.tag) : o("WAWap").DROP_ATTR
                }))));
            const l = yield o("WADeprecatedSendIq").deprecatedSendIq(i, e);
            if (l.success) {
                if (n("cr:17537") != null) {
                    n("cr:17537").observeAeaBusinessAccountTypes(l.result);
                }
                return l.result;
            }
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(l.errorCode);
        });
        return u.apply(this, arguments);
    }
    l.default = s;
}, 98);