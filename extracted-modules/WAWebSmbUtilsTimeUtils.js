__d("WAWebSmbUtilsTimeUtils", [
    "WAWeb-moment",
    "WAWebClock"
], function(t, n, r, o, a, i, l) {
    const e = "h:mm A";
    const s = "h:mmA";
    const u = "H:mm";
    const c = "H.mm";
    const d = "HH:mm";
    const m = "HH.mm";
    const p = [
        e,
        s,
        d,
        m,
        u,
        c
    ];
    function _(e) {
        let t;
        const n = e.trim();
        if (n) {
            for (const o of p){
                const a = r("WAWeb-moment")(n, o, true);
                if (a.isValid()) {
                    t = a;
                    break;
                }
            }
            if (t) {
                const i = t;
                const l = r("WAWeb-moment")().startOf("day");
                const s = i.diff(l);
                return r("WAWeb-moment").duration(s).asMinutes();
            }
        }
    }
    function f(e) {
        return r("WAWeb-moment").utc().startOf("day").add(e, "minutes").format(o("WAWebClock").Clock.timestampStrFormat());
    }
    l.timeStringToMinutes = _;
    l.minutesToTime = f;
}, 98);