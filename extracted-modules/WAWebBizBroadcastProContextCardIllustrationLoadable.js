__d("WAWebBizBroadcastProContextCardIllustrationLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        return r("JSResourceForInteraction")("WDSIllustrationWdsIllClipMessages.react").__setRef("WAWebBizBroadcastProContextCardIllustrationLoadable").load();
    }), "WDSIllustrationWdsIllClipMessages");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <></>;
        }
    });
    l.default = c;
}, 98);