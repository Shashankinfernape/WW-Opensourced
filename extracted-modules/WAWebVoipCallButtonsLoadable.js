__d("WAWebVoipCallButtonsLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebCallButtons.react").__setRef("WAWebVoipCallButtonsLoadable").load();
        return e.WAWebCallButtons;
    }), "WAWebCallButtonsLoadable");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return <></>;
        }
    });
    l.requireBundle = u;
    l.WAWebCallButtonsLoadable = c;
}, 98);