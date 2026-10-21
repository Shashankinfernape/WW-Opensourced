__d("WAWebUprPaymentBubbleArtworkLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebUprPaymentBubbleArtwork.react").__setRef("WAWebUprPaymentBubbleArtworkLoadable").load();
        return e;
    }), "WAWebUprPaymentBubbleArtwork");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <></>;
        }
    });
    l.WAWebUprPaymentBubbleArtworkLoadable = c;
}, 98);