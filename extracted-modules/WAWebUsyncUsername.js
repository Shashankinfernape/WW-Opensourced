__d("WAWebUsyncUsername", [
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        e.assertTag("username");
        const t = e.maybeChild("error");
        if (t) {
            return {
                errorCode: t.attrInt("code"),
                errorText: t.attrString("text")
            };
        }
        if (e.hasContent()) {
            return e.contentString();
        }
        return null;
    }
    class s {
        getName() {
            return "username";
        }
        getQueryElement() {
            return o("WAWap").wap("username", null);
        }
        getUserElement(t) {
            const e = t.getUsername();
            if (e != null) {
                return o("WAWap").wap("username", {
                    username: o("WAWap").CUSTOM_STRING(e)
                });
            }
            return null;
        }
    }
    l.usernameParser = e;
    l.USyncUsernameProtocol = s;
}, 98);