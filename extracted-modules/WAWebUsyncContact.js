__d("WAWebUsyncContact", [
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebUsync"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        t.assertTag("contact");
        const n = t.maybeChild("error");
        if (n) {
            return {
                errorCode: n.attrInt("code"),
                errorText: n.attrString("text")
            };
        }
        if (!t.hasAttr("type")) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[usync] contact node has missing type attribute"
            ]))).sendLogs("usync-contact-missing-type");
        }
        const r = {
            type: t.attrString("type")
        };
        if (t.hasAttr("username")) {
            r.username = t.attrString("username");
        }
        if (t.hasContent()) {
            r.content = t.contentString();
        }
        return r;
    }
    class u {
        constructor(e){
            this.addressingMode = e;
        }
        getName() {
            return "contact";
        }
        getQueryElement() {
            return o("WAWap").wap("contact", {
                addressing_mode: this.addressingMode === o("WAWebUsync").USYNC_ADDRESSING_MODE.LID ? o("WAWap").CUSTOM_STRING(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID) : o("WAWap").DROP_ATTR
            });
        }
        getUserElement(t) {
            const e = t.getPhone();
            const n = t.getUsername();
            const r = t.getType();
            const a = t.getPin();
            const i = t.getLid();
            if (e != null) {
                return o("WAWap").wap("contact", null, e);
            }
            if (n != null) {
                return o("WAWap").wap("contact", {
                    username: o("WAWap").CUSTOM_STRING(n),
                    pin: a != null ? o("WAWap").CUSTOM_STRING(a) : o("WAWap").DROP_ATTR,
                    lid: i != null ? o("WAWebCommsWapMd").USER_JID(i) : o("WAWap").DROP_ATTR
                });
            }
            if (r != null) {
                return o("WAWap").wap("contact", {
                    type: o("WAWap").CUSTOM_STRING(r)
                });
            }
            return null;
        }
    }
    l.contactParser = s;
    l.USyncContactProtocol = u;
}, 98);