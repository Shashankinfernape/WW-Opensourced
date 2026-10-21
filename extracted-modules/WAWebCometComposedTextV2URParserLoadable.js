__d("WAWebCometComposedTextV2URParserLoadable", [
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
        const e = yield r("JSResourceForInteraction")("CometComposedTextV2URParser.react").__setRef("WAWebCometComposedTextV2URParserLoadable").load();
        return e;
    }), "CometComposedTextV2URParser");
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
    l.CometComposedTextV2URParserLoadable = c;
}, 98);