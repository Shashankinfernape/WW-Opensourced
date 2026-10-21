__d("buildWAWebCometRoot", [
    "CometClientRootRendererUtils",
    "CometFullPageSimpleRouteDispatcher",
    "ExecutionEnvironment",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    function CComponent(t, { elementId }) {
        if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            const Component = r("CometFullPageSimpleRouteDispatcher");
            o("CometClientRootRendererUtils").initReactRender({
                rootComponent: <Component>{u.jsx(t, {})}</Component>,
                rootElementID: elementId
            });
        }
    }
    l.default = CComponent;
}, 98);