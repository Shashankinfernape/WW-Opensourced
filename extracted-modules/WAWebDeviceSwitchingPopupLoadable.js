__d("WAWebDeviceSwitchingPopupLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingConfirmPopup.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebDeviceSwitchingPopup.react").__setRef("WAWebDeviceSwitchingPopupLoadable").load();
        return e;
    }), "DeviceSwitchingPopup");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            if (t.error) {
                return s.jsx(r("WAWebLoadingConfirmPopup.react"), {
                    error: true
                });
            }
            return <></>;
        }
    });
    l.DeviceSwitchingPopupLoadable = c;
}, 98);