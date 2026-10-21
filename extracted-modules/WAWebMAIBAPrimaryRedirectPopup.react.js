__d("WAWebMAIBAPrimaryRedirectPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const n = s._("It's not available on the web version of WhatsApp Business, but you can manage it directly using the WhatsApp Business app on your phone.");
            const Component = o("WAWebText.react").WAWebTextSmall;
            t = <Component testid="popup-url-text">{n}</Component>;
            e[0] = t;
        } else {
            t = e[0];
        }
        const r = t;
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            a = <Component testid="waweb_cta_popup" tsNavigationData={{
                surface: "unknown",
                viewName: "mai-ba-primary-redirect"
            }} title={s._("Use your phone to manage this")} okText={s._("OK")} onOK={o("WAWebModalManager").closeModalManager}>{r}</Component>;
            e[1] = a;
        } else {
            a = e[1];
        }
        return a;
    }
    l.default = c;
}, 226);