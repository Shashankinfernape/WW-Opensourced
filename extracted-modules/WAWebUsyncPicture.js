__d("WAWebUsyncPicture", [
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        e.assertTag("picture");
        const t = e.maybeChild("error");
        if (t) {
            return {
                errorCode: t.attrInt("code"),
                errorText: t.attrString("text")
            };
        }
        return {
            id: e.attrInt("id")
        };
    }
    class s {
        getName() {
            return "picture";
        }
        getQueryElement() {
            return o("WAWap").wap("picture", null);
        }
        getUserElement(t) {
            return null;
        }
    }
    l.pictureParser = e;
    l.USyncPictureProtocol = s;
}, 98);