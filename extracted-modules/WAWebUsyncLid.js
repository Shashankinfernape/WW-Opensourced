__d("WAWebUsyncLid", [
    "WAWap",
    "WAWebCommsWapMd"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        e.assertTag("lid");
        const t = e.maybeChild("error");
        if (t) {
            return {
                errorCode: t.attrInt("code"),
                errorText: t.attrString("text")
            };
        }
        return e.maybeAttrLidUserJid("val");
    }
    class s {
        getName() {
            return "lid";
        }
        getQueryElement() {
            return o("WAWap").wap("lid", null);
        }
        getUserElement(t) {
            const e = t.getLid();
            if (e) {
                return o("WAWap").wap("lid", {
                    jid: e ? o("WAWebCommsWapMd").USER_JID(e) : o("WAWap").DROP_ATTR
                });
            }
            return null;
        }
    }
    l.lidParser = e;
    l.USyncLidProtocol = s;
}, 98);