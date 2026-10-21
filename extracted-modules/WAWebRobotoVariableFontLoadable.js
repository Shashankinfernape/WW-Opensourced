__d("WAWebRobotoVariableFontLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WDSLoadRobotoVariableFont").__setRef("WAWebRobotoVariableFontLoadable").load();
        return e;
    }), "WDSLoadRobotoVariableFont");
    function c() {
        u();
    }
    function useD() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [];
            e[0] = t;
        } else {
            t = e[0];
        }
        useEffect(m, t);
    }
    function m() {
        c();
    }
    l.requireRobotoVariableFont = u;
    l.applyRobotoFont = c;
    l.useApplyRobotoFont = useD;
}, 98);