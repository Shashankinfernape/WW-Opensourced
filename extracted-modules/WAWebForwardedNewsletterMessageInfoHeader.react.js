__d("WAWebForwardedNewsletterMessageInfoHeader.react", [
    "fbt",
    "WAWebBoolFunc",
    "WAWebFlex.react",
    "WAWebForwardedInfoHeaderLink.react",
    "WAWebMessageMeta.react",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebForwardedNewsletterMessageClickHandler",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(9);
        const e_msgKey = e.msgKey;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getForwardedNewsletterMessageInfo
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e_msgKey, a);
        const l = i[0];
        const c = o("useWAWebForwardedNewsletterMessageClickHandler").useForwardedNewsletterMessageClickHandler(e_msgKey, o("WAWebBoolFunc").returnTrue);
        if (c == null) {
            return null;
        }
        const d = l?.newsletterName;
        const m = l?.profileName;
        let p;
        if (t[1] !== d) {
            p = d ?? s._("View channel");
            t[1] = d;
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        let f;
        if (t[3] !== m || t[4] !== _) {
            const Component = o("WAWebFlex.react").FlexRow;
            f = m != null ? <Component>{m}{u.jsx(o("WAWebMessageMeta.react").MetaBullet, {})}{_}</Component> : _;
            t[3] = m;
            t[4] = _;
            t[5] = f;
        } else {
            f = t[5];
        }
        let g;
        if (t[6] !== c || t[7] !== f) {
            const Component = r("WAWebForwardedInfoHeaderLink.react");
            g = <Component onClick={c} testId="forwarded-newsletter-info">{f}</Component>;
            t[6] = c;
            t[7] = f;
            t[8] = g;
        } else {
            g = t[8];
        }
        return g;
    }
    l.default = c;
}, 226);