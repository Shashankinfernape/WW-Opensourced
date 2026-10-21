__d("MLCInstrumentationPluginDeferred__INTERNAL.react", [
    "react",
    "requireDeferred",
    "useDeferredModuleOnReady"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = r("requireDeferred")("MLCInstrumentationPlugin__INTERNAL.react").__setRef("MLCInstrumentationPluginDeferred__INTERNAL.react");
    function CComponent(e) {
        const T = r("useDeferredModuleOnReady")(u);
        if (T == null) {
            return null;
        }
        return <T {...babelHelpers.extends({}, e)}/>;
    }
    CComponent.displayName = `${CComponent.name} [from ${i.id}]`;
    l.default = CComponent;
}, 98);