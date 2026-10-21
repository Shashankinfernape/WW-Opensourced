__d("WAWebOTPHelper", [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebCopyToClipboard",
    "WAWebMsgDataFromModel",
    "WAWebOTPLoggingHelper",
    "WAWebTemplateButtonSubtype",
    "WAWebToast.react",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(e) {
        if (!navigator.clipboard) {
            return false;
        }
        const e_url = e.url;
        if (e.subtype !== o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL || e_url == null) {
            return false;
        }
        try {
            const n = new URL(e_url);
            return m(n) != null;
        } catch (e) {
            return false;
        }
    }
    function m(e) {
        return f(e) ?? g(e);
    }
    function p(e) {
        const e_url = e.url;
        if (e.subtype !== o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL || e_url == null) {
            return null;
        }
        try {
            const n = new URL(e_url);
            return m(n);
        } catch (e) {
            return null;
        }
    }
    function _(t, n) {
        const t_url = t.url;
        if (!(t.subtype !== o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL || t_url == null)) {
            const a = new URL(t_url);
            const i = m(a);
            if (i != null) {
                o("WAWebCopyToClipboard").copyTextToClipboard(i).then((e)=>{
                    if (e) {
                        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                            msg: s._("Code copied")
                        }));
                    }
                }).catch(()=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[otp] failed to copy code"
                    ]))).sendLogs("otp-copy-code-failed");
                });
                o("WAWebOTPLoggingHelper").logOTPButtonClick(o("WAWebMsgDataFromModel").msgDataFromMsgModel(n));
            }
        }
    }
    function f(e) {
        const t = o("WAWebABProps").getABPropConfigValue("unified_otp_copy_code_url");
        if (e.toString().startsWith(t)) {
            return e.toString().slice(t.length);
        }
        return null;
    }
    function g(e) {
        const t = o("WAWebABProps").getABPropConfigValue("unified_otp_retriever_url");
        if (!e.toString().startsWith(t)) {
            return null;
        }
        const e_searchParams = e.searchParams;
        const r = e_searchParams.get("code");
        if (r == null) {
            return null;
        }
        const a = "otp";
        if (r.startsWith(a)) {
            return r.slice(a.length);
        }
        return r;
    }
    l.isOTPCopyCodeButton = d;
    l.getOTPCode = m;
    l.getOTPCodeFromButton = p;
    l.copyOTPCode = _;
}, 226);