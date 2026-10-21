__d("WAWebLogoutReasonBanner.react", [
    "fbt",
    "WAWebEnvironment",
    "WAWebFaqUrl",
    "WAWebLoggedOutBanner.react",
    "WAWebLogoutReason",
    "WAWebLogoutReasonConstants",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(9);
        const e_reason = e.reason;
        let a;
        if (t[0] !== e_reason) {
            a = o("WAWebLogoutReason").getPrevLogoutReasonCode() ?? e_reason;
            t[0] = e_reason;
            t[1] = a;
        } else {
            a = t[1];
        }
        const l = a;
        if (l == null) {
            return null;
        }
        let s;
        if (t[2] !== l) {
            s = d(l);
            t[2] = l;
            t[3] = s;
        } else {
            s = t[3];
        }
        const c = s;
        if (c == null) {
            return null;
        }
        const { category, header, link, text } = c;
        let g;
        if (t[4] !== category || t[5] !== header || t[6] !== link || t[7] !== text) {
            g = u.jsx(r("WAWebLoggedOutBanner.react"), {
                header,
                text,
                link,
                category
            });
            t[4] = category;
            t[5] = header;
            t[6] = link;
            t[7] = text;
            t[8] = g;
        } else {
            g = t[8];
        }
        return g;
    }
    function d(e) {
        const t = o("WAWebLogoutReason").getPrevCustomLogoutMessage();
        switch(e){
            case o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.CLIENT_FATAL:
                {
                    const n = r("WAWebEnvironment").isWindows === true ? s._("A database error occurred in your application. Please relink your device.") : s._("A database error occurred on your browser. Please relink your device.");
                    return {
                        text: n,
                        link: o("WAWebFaqUrl").getDBErrorFaqUrl(),
                        category: "error"
                    };
                }
            case o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.SYNC_FAIL:
                return {
                    text: s._("Your device could not link due to a sync issue. Please relink your device."),
                    link: o("WAWebFaqUrl").getLinkDeviceFaqUrl(),
                    category: "warning"
                };
            case o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.INITIAL_HISTORY_SYNC_TIMEOUT:
                return {
                    text: s._("Couldn't link device. Keep WhatsApp open on your phone when your device is linking."),
                    link: o("WAWebFaqUrl").getLinkDeviceFaqUrl(),
                    category: "warning"
                };
            case o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.ACCOUNT_LOCKED:
                if (t != null) {
                    const { logoutMessageHeader, logoutMessageSubtext } = t;
                    if (logoutMessageHeader != null && logoutMessageSubtext != null) {
                        return {
                            header: logoutMessageHeader,
                            text: logoutMessageSubtext,
                            category: "warning"
                        };
                    }
                }
                return {
                    text: s._("You have been logged out. To log back in, you will need to verify your phone number."),
                    category: "warning"
                };
        }
        return null;
    }
    l.default = c;
}, 226);