__d("WAWebVoipUiPopoutWindowLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebVoipUiPopoutWindow.react").__setRef("WAWebVoipUiPopoutWindowLoadable").load();
        return e.WAWebVoipUiPopoutWindow;
    }), "WAWebVoipUiPopoutWindow");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return <></>;
        }
    });
    l.requireBundle = u;
    l.WAWebVoipUiPopoutWindowLoadable = c;
}, 98);