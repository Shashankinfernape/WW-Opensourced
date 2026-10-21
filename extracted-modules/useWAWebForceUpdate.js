__d("useWAWebForceUpdate", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useReducer = (e || (e = o("react"))).useReducer;
    function useU() {
        const e = useReducer(c, 0);
        const t = e[1];
        return t;
    }
    function c(e) {
        return e + 1;
    }
    l.useForceUpdateDONOTUSE = useU;
}, 98);