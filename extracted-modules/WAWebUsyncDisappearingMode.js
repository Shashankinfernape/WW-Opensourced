__d("WAWebUsyncDisappearingMode", [
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        e.assertTag("disappearing_mode");
        const t = e.maybeChild("error");
        if (t) {
            return {
                errorCode: t.attrInt("code"),
                errorText: t.attrString("text")
            };
        }
        const duration = e.attrInt("duration", 0);
        const r = e.attrInt("t");
        const o = {
            duration,
            t: r
        };
        return o;
    }
    class s {
        getName() {
            return "disappearing_mode";
        }
        getQueryElement() {
            return o("WAWap").wap("disappearing_mode", null);
        }
        getUserElement(t) {
            return null;
        }
    }
    l.disappearingModeParser = e;
    l.USyncDisappearingModeProtocol = s;
}, 98);