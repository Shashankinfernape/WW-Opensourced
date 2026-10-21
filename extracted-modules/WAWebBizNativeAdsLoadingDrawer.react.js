__d("WAWebBizNativeAdsLoadingDrawer.react", [
    "WAWebBizNativeAdsDrawer.react",
    "WAWebBizNativeAdsDrawerConfig",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_step = e.step;
        const a = e_step === undefined ? o("WAWebBizNativeAdsDrawerConfig").INITIAL_STEP : e_step;
        let i;
        if (t[0] !== a) {
            i = o("WAWebBizNativeAdsDrawerConfig").getDrawerConfig(a);
            t[0] = a;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let u;
        if (t[2] !== l.loadingFallback || t[3] !== a) {
            const Component = r("WAWebBizNativeAdsDrawer.react");
            u = <Component onBack={o("WAWebBizNativeAdsDrawerConfig").LOADING_BACK_HANDLER} step={a}>{l.loadingFallback}</Component>;
            t[2] = l.loadingFallback;
            t[3] = a;
            t[4] = u;
        } else {
            u = t[4];
        }
        return u;
    }
    l.default = u;
}, 98);