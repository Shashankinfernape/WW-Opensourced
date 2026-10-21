__d("WAWebBloksEntryPointLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebSpinner.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebBloksEntryPoint.react").__setRef("WAWebBloksEntryPointLoadable").load();
        return e;
    }), "WAWebBloksEntryPoint");
    const c = r("react-loadable")({
        loader: u,
        loading: function() {
            return s.jsx(o("WAWebSpinner.react").Spinner, {
                size: 24,
                stroke: 4
            });
        }
    });
    l.requireBundle = u;
    l.WAWebBloksEntryPointLoadable = c;
}, 98);