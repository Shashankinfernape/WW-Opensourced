__d("WAWebUsyncBusiness", [
    "WAWap",
    "WAWebCommonParsersVerifiedName",
    "WAWebJidToWid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        e.assertTag("business");
        const t = e.maybeChild("error");
        if (t) {
            return {
                errorCode: t.attrInt("code"),
                errorText: t.attrString("text")
            };
        }
        const n = e.maybeChild("verified_name");
        const verifiedName = n ? r("WAWebCommonParsersVerifiedName")(n) : null;
        const pn = e.hasAttr("pn_jid") ? o("WAWebJidToWid").deviceJidToUserWid(e.attrDeviceJid("pn_jid")) : null;
        return {
            pn,
            verifiedName
        };
    }
    class s {
        getName() {
            return "business";
        }
        getQueryElement() {
            return o("WAWap").wap("business", null, o("WAWap").wap("verified_name", null));
        }
        getUserElement(t) {
            return null;
        }
    }
    l.businessParser = e;
    l.USyncBusinessProtocol = s;
}, 98);