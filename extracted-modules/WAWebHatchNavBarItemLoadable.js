__d("WAWebHatchNavBarItemLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebHatchNavBarItem.react").__setRef("WAWebHatchNavBarItemLoadable").load();
    }, "WAWebHatchNavBarItemLoadable");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return <></>;
        }
    });
    l.default = c;
}, 98);