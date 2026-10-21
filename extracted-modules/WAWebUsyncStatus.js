__d("WAWebUsyncStatus", [
    "WAWap"
], function(t, n, r, o, a, i, l) {
    const e = null;
    function s(t) {
        t.assertTag("status");
        const n = t.maybeChild("error");
        if (n) {
            return {
                errorCode: n.attrInt("code"),
                errorText: n.attrString("text")
            };
        }
        if (t.hasContent()) {
            if (t.contentString().length !== 0) {
                return t.contentString();
            }
            return e;
        }
        if (t.hasAttr("code") && t.attrInt("code") === 401) {
            return "";
        }
        return e;
    }
    class u {
        getName() {
            return "status";
        }
        getQueryElement() {
            return o("WAWap").wap("status", null);
        }
        getUserElement(t) {
            const e = t.getTcToken();
            if (e) {
                return o("WAWap").wap("tctoken", null, e);
            }
            return null;
        }
    }
    l.statusParser = s;
    l.USyncStatusProtocol = u;
}, 98);