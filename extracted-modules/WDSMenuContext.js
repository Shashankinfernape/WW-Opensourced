__d("WDSMenuContext", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_createContext = e.createContext;
    const c = e_createContext({
        isClosing: false,
        position: "below",
        align: "start"
    });
    const d = e_createContext({
        exitSubmenu: function() {}
    });
    const m = e_createContext({
        repositionSubmenu: function() {}
    });
    l.WDSMenuAnimationContext = c;
    l.WDSMenuSubmenuNavigationContext = d;
    l.WDSMenuSubmenuRepositionContext = m;
}, 98);