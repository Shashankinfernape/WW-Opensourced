__d("WAWebAcp2SendFailIcon.react", [
    "WAWebAcp2SendFailView.react",
    "WAWebFaqUrl",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_displayType = e.displayType;
        let faqUrl;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            faqUrl = o("WAWebFaqUrl").getAcpPlaceholderFaqUrl();
            t[0] = faqUrl;
        } else {
            faqUrl = t[0];
        }
        let i;
        if (t[1] !== e_displayType) {
            i = s.jsx(r("WAWebAcp2SendFailView.react"), {
                displayType: e_displayType,
                faqUrl
            });
            t[1] = e_displayType;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    l.default = u;
}, 98);