__d("WAWebMessageHoverBarContext", [
    "WAWebBoolFunc",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_createContext = e.createContext;
    const c = {
        isAvailable: false,
        onHoverStart: function() {},
        onHoverEnd: function() {},
        onFocusStart: function() {},
        onFocusEnd: function() {},
        cancelDismiss: function() {},
        isBridgeActiveForMsg: o("WAWebBoolFunc").returnFalse,
        isBarPointerRaised: o("WAWebBoolFunc").returnFalse,
        onMessageMenuOpen: function() {},
        onMessageMenuClose: function() {},
        menuOwnerMsgId: null
    };
    const d = e_createContext(c);
    l.default = d;
}, 98);