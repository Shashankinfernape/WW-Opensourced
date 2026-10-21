__d("WAWebBizBroadcastProMessageStatusLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const loader = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        return r("JSResourceForInteraction")("WAWebBizBroadcastProMessageStatus.react").__setRef("WAWebBizBroadcastProMessageStatusLoadable").load();
    }), "BizBroadcastProMessageStatus");
    const c = r("WAWebLoadable")({
        loader,
        loading: function() {
            return <></>;
        }
    });
    l.WAWebBizBroadcastProMessageStatusLoadable = c;
}, 98);