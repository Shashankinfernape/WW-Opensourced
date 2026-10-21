__d("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebBizBroadcastsSmartCSVImportSetupFlow.react").__setRef("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable").load();
        return e;
    }), "BusinessBroadcastSmartCSVImportSetupFlow");
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield e();
            n.openSmartCSVImportSetupFlow(t);
        });
        return u.apply(this, arguments);
    }
    l.openSmartCSVImportSetupFlowLoadable = s;
}, 98);