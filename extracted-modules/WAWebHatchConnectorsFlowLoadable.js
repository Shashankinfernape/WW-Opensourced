__d("WAWebHatchConnectorsFlowLoadable", [
    "JSResourceForInteraction",
    "WAWebDrawerManager",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebHatchConnectorsFlow.react").__setRef("WAWebHatchConnectorsFlowLoadable").load();
        return e;
    }), "WAWebHatchConnectorsFlow");
    const C1 = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingDrawer.react"), {
                error: !!t.error
            });
        }
    });
    function DComponent(initialConnectorId, initialConnectorName) {
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(<C1 initialConnectorId={initialConnectorId} initialConnectorName={initialConnectorName} onClose={o("WAWebDrawerManager").closeDrawerRight}/>);
    }
    l.WAWebHatchConnectorsFlowLoadable = C1;
    l.openHatchConnectorDrawer = DComponent;
}, 98);