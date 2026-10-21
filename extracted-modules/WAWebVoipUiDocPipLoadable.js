__d("WAWebVoipUiDocPipLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebVoipUiDocPip.react").__setRef("WAWebVoipUiDocPipLoadable").load();
        return e.WAWebVoipUiDocPip;
    }), "WAWebVoipUiDocPip");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return <></>;
        }
    });
    l.requireBundle = u;
    l.WAWebVoipUiDocPipLoadable = c;
}, 98);