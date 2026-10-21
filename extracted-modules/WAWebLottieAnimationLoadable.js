__d("WAWebLottieAnimationLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSSpinner.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function U1() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s.jsx(r("WDSSpinner.react"), {
                size: 50,
                stroke: 4
            });
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebLottieAnimation.react").__setRef("WAWebLottieAnimationLoadable").load();
        return e;
    }), "LottieAnimation");
    const d = r("WAWebLoadable")({
        loader: c,
        loading: function() {
            return <U1/>;
        }
    });
    l.requireBundle = c;
    l.LottieAnimation = d;
}, 98);