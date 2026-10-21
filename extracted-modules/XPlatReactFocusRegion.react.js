__d("XPlatReactFocusRegion.react", [
    "FocusRegion.react",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(7);
        const { autoFocusQuery, autoRestoreFocus, children, containFocusQuery, id, recoverFocusQuery } = e;
        const autoFocusQuery_1 = autoFocusQuery ?? o("focusScopeQueries").headerOrTabbableScopeQuery;
        let d;
        if (t[0] !== autoRestoreFocus || t[1] !== children || t[2] !== containFocusQuery || t[3] !== id || t[4] !== recoverFocusQuery || t[5] !== autoFocusQuery_1) {
            const Component = o("FocusRegion.react").FocusRegion;
            d = <Component autoFocusQuery={autoFocusQuery_1} autoRestoreFocus={autoRestoreFocus} containFocusQuery={containFocusQuery} id={id} recoverFocusQuery={recoverFocusQuery}>{children}</Component>;
            t[0] = autoRestoreFocus;
            t[1] = children;
            t[2] = containFocusQuery;
            t[3] = id;
            t[4] = recoverFocusQuery;
            t[5] = autoFocusQuery_1;
            t[6] = d;
        } else {
            d = t[6];
        }
        return d;
    }
    l.default = UComponent;
}, 98);