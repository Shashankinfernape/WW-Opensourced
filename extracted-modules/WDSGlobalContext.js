__d("WDSGlobalContext", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_createContext = e.createContext;
    const c = 150;
    const d = e_createContext({
        currentOpenMenus: new Map,
        registerMenu: function() {},
        unregisterMenu: function() {},
        closeAllMenus: function() {}
    });
    l.MENU_EXIT_ANIMATION_DURATION = c;
    l.WDSContext = d;
}, 98);