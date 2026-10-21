__d("WAWebNuxBannerText.react", [
    "WAWebActionLinkButterbar.react",
    "WAWebTabOrder",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(5);
        const { actionText, subtitle } = e;
        let i;
        if (t[0] !== actionText) {
            const Component = r("WAWebActionLinkButterbar.react");
            i = actionText != null ? <Component dataTab={o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR} inline>{actionText}</Component> : null;
            t[0] = actionText;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let u;
        if (t[2] !== l || t[3] !== subtitle) {
            u = <>{subtitle} {l}</>;
            t[2] = l;
            t[3] = subtitle;
            t[4] = u;
        } else {
            u = t[4];
        }
        return u;
    }
    l.default = u;
}, 98);