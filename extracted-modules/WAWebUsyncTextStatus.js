__d("WAWebUsyncTextStatus", [
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        e.assertTag("text_status");
        const t = e.maybeChild("error");
        if (t) {
            return {
                errorCode: t.attrInt("code"),
                errorText: t.attrString("text")
            };
        }
        const n = e.hasAttr("text") ? e.attrString("text") : undefined;
        const r = e.hasChild("emoji") ? e.child("emoji") : undefined;
        const o = r != null && r.hasAttr("content") ? r?.attrString("content") : undefined;
        const a = e.hasAttr("ephemeral_duration_sec") ? e.attrInt("ephemeral_duration_sec") : undefined;
        const lastUpdateTime = e.hasAttr("last_update_time") ? e.attrString("last_update_time") : undefined;
        return {
            text: n,
            emoji: o,
            ephemeralDurationSeconds: a,
            lastUpdateTime
        };
    }
    class s {
        getName() {
            return "text_status";
        }
        getQueryElement() {
            return o("WAWap").wap("text_status", null);
        }
        getUserElement(t) {
            return null;
        }
    }
    l.textStatusParser = e;
    l.USyncTextStatusProtocol = s;
}, 98);