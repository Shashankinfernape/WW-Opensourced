__d("WAWebBizBroadcastsManageAudiencePanelLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebBizBroadcastsManageAudiencePanel.react").__setRef("WAWebBizBroadcastsManageAudiencePanelLoadable").load();
        return e;
    }), "BusinessBroadcastHomeScreen");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingDrawer.react"), {
                error: !!t.error
            });
        }
    });
    l.WAWebBizBroadcastsManageAudiencePanelLoadable = c;
}, 98);