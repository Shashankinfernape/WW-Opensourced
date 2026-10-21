__d("WAWebDashDebugBubbleBadgeSlot.react", [
    "cr:11405",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_msgKey = e.msgKey;
        if (n("cr:11405") == null) {
            return null;
        }
        let a;
        if (t[0] !== e_msgKey) {
            a = s.jsx(n("cr:11405"), {
                msgKey: e_msgKey
            });
            t[0] = e_msgKey;
            t[1] = a;
        } else {
            a = t[1];
        }
        return a;
    }
    l.default = u;
}, 98);