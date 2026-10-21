__d("WAWebListSubmenuContentLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebListSubmenuContent.react").__setRef("WAWebListSubmenuContentLoadable").load();
        return e;
    }), "ListSubmenuContent");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <></>;
        }
    });
    l.requireBundle = u;
    l.ListSubmenuContentLoadable = c;
}, 98);