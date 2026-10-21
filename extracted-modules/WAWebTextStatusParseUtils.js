__d("WAWebTextStatusParseUtils", [], function(t, n, r, o, a, i) {
    const e = 0;
    function l(t) {
        let n = t.textStatusString;
        if (t.textStatusString === "") {
            n = null;
        }
        let r = t.textStatusEphemeralDuration;
        if (r == null) {
            r = e;
        }
        if (n == null && t.textStatusEmoji == null && r !== e) {
            r = e;
        }
        let o;
        if (t.textStatusEmoji != null) {
            o = {
                content: t.textStatusEmoji
            };
        }
        return {
            text: n,
            emoji: o,
            ephemeral_duration_sec: r
        };
    }
    i.createTextStatusObjectForUpdateRequest = l;
}, 66);