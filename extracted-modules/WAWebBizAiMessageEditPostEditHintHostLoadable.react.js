__d("WAWebBizAiMessageEditPostEditHintHostLoadable.react", [
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
        return r("JSResourceForInteraction")("WAWebBizAiMessageEditPostEditHintHost.react").__setRef("WAWebBizAiMessageEditPostEditHintHostLoadable.react").load();
    }), "BizAiMessageEditPostEditHintHost");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <></>;
        }
    });
    l.default = c;
}, 98);