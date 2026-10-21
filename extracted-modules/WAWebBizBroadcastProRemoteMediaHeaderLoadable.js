__d("WAWebBizBroadcastProRemoteMediaHeaderLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        return r("JSResourceForInteraction")("WAWebBizBroadcastProRemoteMediaHeader.react").__setRef("WAWebBizBroadcastProRemoteMediaHeaderLoadable").load();
    }), "BizBroadcastProRemoteMediaHeader");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <></>;
        }
    });
    l.WAWebBizBroadcastProRemoteMediaHeaderLoadable = c;
}, 98);