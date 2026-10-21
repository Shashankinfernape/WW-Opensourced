__d("WAWebPollEndTimeLabel", [
    "fbt",
    "WAWebClock",
    "WAWebPollBubbleSettingLabel",
    "WDSIconIcScheduleFilled.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = 1000;
    const d = 3600;
    const m = 24 * d;
    function p(e) {
        const t = o("react-compiler-runtime").c(11);
        const { isPollEnded, pollEndTime, trailingSeparator } = e;
        const l = pollEndTime - o("WAWebClock").Clock.getServerTimeMs();
        const m = Math.max(0, Math.ceil(l / c));
        const isEmphasized = m < d && !isPollEnded;
        const colorName = isEmphasized ? "secondaryNegative" : "contentDeemphasized";
        let g;
        if (t[0] !== colorName) {
            g = u.jsx(r("WDSIconIcScheduleFilled.react"), {
                width: 12,
                height: 12,
                colorName
            });
            t[0] = colorName;
            t[1] = g;
        } else {
            g = t[1];
        }
        let h;
        if (t[2] !== isPollEnded || t[3] !== m) {
            h = isPollEnded ? s._("Poll ended") : _(m);
            t[2] = isPollEnded;
            t[3] = m;
            t[4] = h;
        } else {
            h = t[4];
        }
        const y = isPollEnded ? "poll-ended-label" : "poll-end-time-label";
        let C;
        if (t[5] !== isEmphasized || t[6] !== g || t[7] !== h || t[8] !== y || t[9] !== trailingSeparator) {
            C = u.jsx(r("WAWebPollBubbleSettingLabel"), {
                icon: g,
                isEmphasized,
                label: h,
                testid: y,
                trailingSeparator
            });
            t[5] = isEmphasized;
            t[6] = g;
            t[7] = h;
            t[8] = y;
            t[9] = trailingSeparator;
            t[10] = C;
        } else {
            C = t[10];
        }
        return C;
    }
    function _(e) {
        if (e < d) {
            return s._("Ends in less than 1h");
        }
        if (e < m) {
            const t = Math.floor(e / d);
            return s._("Ends in {hours}h", [
                s._param("hours", t)
            ]);
        }
        const n = Math.floor(e / m);
        return s._("Ends in {days}d", [
            s._param("days", n)
        ]);
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = p;
}, 226);