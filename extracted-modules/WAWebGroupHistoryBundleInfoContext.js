__d("WAWebGroupHistoryBundleInfoContext", [
    "WAWebNoop",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const createContext = (e || (e = o("react"))).createContext;
    const UContext = createContext({
        visibleGroupHistoryBundleSenders: new Set,
        setVisibleGroupHistoryBundleSenders: r("WAWebNoop"),
        earliestVisibleBundleSender: null
    });
    l.WAWebGroupHistoryBundleInfoContext = UContext;
}, 98);