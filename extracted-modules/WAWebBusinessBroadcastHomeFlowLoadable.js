__d("WAWebBusinessBroadcastHomeFlowLoadable", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = r("JSResourceForInteraction")("WAWebPrepareBusinessBroadcastHomeFlow").__setRef("WAWebBusinessBroadcastHomeFlowLoadable");
    const d = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebBusinessBroadcastHomeFlow.react").__setRef("WAWebBusinessBroadcastHomeFlowLoadable").load();
        return e;
    }), "BusinessBroadcastHomeFlow");
    const m = r("WAWebLoadable")({
        loader: d,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingDrawer.react"), {
                error: !!t.error,
                retry: t.retry
            });
        }
    });
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield c.load();
            return yield e.loadBusinessBroadcastHomeFlow();
        });
        return _.apply(this, arguments);
    }
    const f = r("WAWebLazyLoadedRetriable")(p, "RoutedBusinessBroadcastHomeFlow", {
        onFinalFailure: function(n) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to load BB Home"
            ]))).catching(r("getErrorSafe")(n)).sendLogs("bb-home-load-failed");
        }
    });
    const g = r("WAWebLoadable")({
        loader: f,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingDrawer.react"), {
                error: !!t.error,
                retry: t.retry
            });
        }
    });
    l.WAWebBusinessBroadcastCoreHomeFlowLoadable = m;
    l.loadRoutedBusinessBroadcastHomeFlow = p;
    l.WAWebBusinessBroadcastHomeFlowLoadable = g;
}, 98);