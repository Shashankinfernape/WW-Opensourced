__d("WAWebForwardUtils", [
    "fbt",
    "WAWebActionToast.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        if (e) {
            return s._("Forwarded many times");
        }
        return s._("Forwarded");
    }
    function d(e) {
        const t = s._("_j{\"*\":\"Forwarded {number_of_messages} items\",\"_1\":\"Forwarded 1 item\"}", [
            s._plural(e, "number_of_messages")
        ]);
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            id: o("WAWebActionToast.react").genId(),
            msg: t,
            duration: 4000
        }));
    }
    l.getForwardedIndicatorText = c;
    l.showForwardedToast = d;
}, 226);