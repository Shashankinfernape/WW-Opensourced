__d("WAWebDefenseModeUtilsWAWebDefenseModeLearnMoreClickableLink", [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = o("WAWebFaqUrl").getDefenseModeFaqUrl();
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebClickableLink.react");
            a = <Component href={n} onClick={function(t) {
                t.preventDefault();
                o("WAWebExternalLink.react").openExternalLink(n);
            }}>{s._("Learn more")}</Component>;
            e[1] = a;
        } else {
            a = e[1];
        }
        return a;
    }
    l.WAWebDefenseModeLearnMoreClickableLink = c;
}, 226);