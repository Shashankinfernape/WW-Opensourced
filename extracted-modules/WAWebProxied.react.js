__d("WAWebProxied.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebL10N",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(3);
        let t;
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Can't load WhatsApp");
            n = s._("Learn more");
            e[0] = t;
            e[1] = n;
        } else {
            t = e[0];
            n = e[1];
        }
        let r;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            r = <Component cover title={t} okText={n} onOK={d}>{s._("Your computer is connected to a network that prevents WhatsApp from working correctly")}</Component>;
            e[2] = r;
        } else {
            r = e[2];
        }
        return r;
    }
    function d() {
        o("WAWebExternalLink.react").openExternalLink(m());
    }
    function m() {
        return `https://faq.whatsapp.com/852892549070029?lang=${r("WAWebL10N").getNormalizedLocale()}`;
    }
    l.default = c;
}, 226);