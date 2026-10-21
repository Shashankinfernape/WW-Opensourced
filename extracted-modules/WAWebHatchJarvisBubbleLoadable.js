__d("WAWebHatchJarvisBubbleLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { createContext, useContext } = u;
    const MContext = createContext(null);
    const p = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        return r("JSResourceForInteraction")("WAWebHatchJarvisBubble.react").__setRef("WAWebHatchJarvisBubbleLoadable").load();
    }), "HatchJarvisBubble");
    const _ = r("WAWebLoadable")({
        loader: p,
        loading: function() {
            return <G9Component/>;
        },
        renderLoadingImmediately: true
    });
    function f(e) {
        const t = o("react-compiler-runtime").c(9);
        const { displayAuthor, displayType, errorFallback, fallback, msgKey } = e;
        let u;
        if (t[0] !== displayAuthor || t[1] !== displayType || t[2] !== errorFallback || t[3] !== fallback || t[4] !== msgKey) {
            u = <_ displayAuthor={displayAuthor} displayType={displayType} errorFallback={errorFallback} fallback={fallback} msgKey={msgKey}/>;
            t[0] = displayAuthor;
            t[1] = displayType;
            t[2] = errorFallback;
            t[3] = fallback;
            t[4] = msgKey;
            t[5] = u;
        } else {
            u = t[5];
        }
        let c;
        if (t[6] !== fallback || t[7] !== u) {
            c = <MContext.Provider value={fallback}>{u}</MContext.Provider>;
            t[6] = fallback;
            t[7] = u;
            t[8] = c;
        } else {
            c = t[8];
        }
        return c;
    }
    function G9Component() {
        return useContext(MContext);
    }
    l.default = f;
}, 98);