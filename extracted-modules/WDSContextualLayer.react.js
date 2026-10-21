__d("WDSContextualLayer.react", [
    "BaseContextualLayerAnchorRoot.react",
    "CometPlaceholder.react",
    "WDSGlobalContext",
    "WDSToastContainerID",
    "WDSToastProvider.react",
    "deferredLoadComponent",
    "react",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback: c, useMemo: d, useState: m } = u;
    const P6 = r("deferredLoadComponent")(r("requireDeferred")("WDSDialogManager.react").__setRef("WDSContextualLayer.react"));
    function _({ children: t }) {
        const n = m(new Map);
        const a = n[0];
        const l = n[1];
        const u = c(function(e, t) {
            l(function(n) {
                const r = new Map(n);
                r.set(e, t);
                return r;
            });
        }, []);
        const _ = c(function(e) {
            l(function(t) {
                const n = new Map(t);
                n.delete(e);
                return n;
            });
        }, []);
        const f = c(function() {
            a.forEach((e)=>{
                e();
            });
            l(new Map);
        }, [
            a
        ]);
        const g = d(function() {
            return {
                currentOpenMenus: a,
                registerMenu: u,
                unregisterMenu: _,
                closeAllMenus: f
            };
        }, [
            a,
            u,
            _,
            f
        ]);
        const Component = r("CometPlaceholder.react");
        const Component_1 = r("WDSToastProvider.react");
        const Component_2 = r("BaseContextualLayerAnchorRoot.react");
        const Component_3 = o("WDSGlobalContext").WDSContext.Provider;
        return <Component_3 value={g}><Component_2><Component fallback={null} name={i.id}><P6/></Component><Component_1 target={`#${r("WDSToastContainerID")}`}>{t}</Component_1></Component_2></Component_3>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.WDSContextualLayer = _;
}, 98);