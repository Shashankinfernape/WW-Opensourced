__d("WAWebWamBeaconing", [
    "WATimeUtils",
    "WAWebUserPrefsGeneral"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = o("WAWebUserPrefsGeneral").getWamBeaconingSettings();
        const n = t.find((t)=>t.key === e);
        let r = null;
        if (n == null || s(n.ts)) {
            const a = o("WATimeUtils").unixTime();
            const i = Math.random() <= 0.01;
            const l = {
                key: e,
                ts: a,
                value: i ? 1 : null
            };
            if (n == null) {
                t.push(l);
            } else {
                n.value = l.value;
                n.ts = a;
            }
            r = l.value;
        } else {
            if (n.value == null) {
                return null;
            }
            r = ++n.value;
        }
        o("WAWebUserPrefsGeneral").setWamBeaconingSettings(t);
        return r;
    }
    function s(e) {
        const t = Math.floor(o("WATimeUtils").unixTime() / o("WATimeUtils").DAY_SECONDS);
        const n = Math.floor(e / o("WATimeUtils").DAY_SECONDS);
        return t !== n;
    }
    l.maybeGetEventSequenceNumber = e;
}, 98);