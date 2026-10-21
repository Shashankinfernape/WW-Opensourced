__d("WAWebLockScreenLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebLockScreen.react").__setRef("WAWebLockScreenLoadable").load();
        return e;
    }), "LockScreen");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <div/>;
        }
    });
    l.LockScreenLoadable = c;
}, 98);