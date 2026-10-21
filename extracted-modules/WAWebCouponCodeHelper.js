__d("WAWebCouponCodeHelper", [
    "fbt",
    "WAWebABProps",
    "WAWebCopyToClipboard",
    "WAWebTemplateButtonSubtype",
    "WAWebToast.react",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = String(e.url || "");
        return e.subtype === o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL && t.startsWith(o("WAWebABProps").getABPropConfigValue("coupon_copy_button_url")) && p(t) != null;
    }
    function d(e) {
        const t = String(e.url || "");
        const n = p(t);
        m(n);
    }
    function m(e) {
        if (e != null) {
            o("WAWebCopyToClipboard").copyTextToClipboard(e);
            o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                msg: s._("Code copied")
            }));
        }
    }
    function p(e) {
        const t = e.substring(o("WAWebABProps").getABPropConfigValue("coupon_copy_button_url").length);
        if (t.length > 0) {
            return t;
        }
        return null;
    }
    l.isCouponCodeButton = c;
    l.copyCouponCode = d;
    l.copyCouponCodeGivenCode = m;
}, 226);