__d("WAWebVoipCallsTabEmptyStateLoadable.react", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        try {
            const t = yield r("JSResourceForInteraction")("WAWebVoipCallsTabEmptyState.react").__setRef("WAWebVoipCallsTabEmptyStateLoadable.react").load();
            return t;
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to load WAWebVoipCallsTabEmptyState bundle: ",
                ""
            ])), error);
            throw error;
        }
    }), "WAWebVoipCallsTabEmptyStateLoadable");
    const D3 = r("WAWebLoadable")({
        loader: c,
        loading: function(t) {
            return <></>;
        }
    });
    function m() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <D3/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    l.VoipCallsTabEmptyStateLoadable = m;
}, 98);