__d("WAWebNuxBanners.react", [
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
    "useWAWebButterbarVisibilityReport"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = "xr8eula-B";
    function c(e) {
        const n = o("react-compiler-runtime").c(2);
        const { banners, isPending, onVisibilityChange } = e;
        const u = banners.find(d)?.element;
        r("useWAWebButterbarVisibilityReport")(isPending === true || u != null, onVisibilityChange);
        let c;
        if (n[0] !== u) {
            const Component = r("WAWebVelocityTransitionGroup");
            c = u ? <div className="xof6966 xqnxcvj">{u}</div> : <Component transitionName="butterbar">{u}</Component>;
            n[0] = u;
            n[1] = c;
        } else {
            c = n[1];
        }
        return c;
    }
    function d({ shouldShow }) {
        return shouldShow();
    }
    l.default = c;
}, 98);