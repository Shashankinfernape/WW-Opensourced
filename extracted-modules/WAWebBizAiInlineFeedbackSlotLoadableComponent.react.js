__d("WAWebBizAiInlineFeedbackSlotLoadableComponent.react", [
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
        return r("JSResourceForInteraction")("WAWebBizAiInlineFeedbackSlot.react").__setRef("WAWebBizAiInlineFeedbackSlotLoadableComponent.react").load();
    }), "BizAiInlineFeedbackSlot");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <></>;
        }
    });
    l.default = c;
}, 98);