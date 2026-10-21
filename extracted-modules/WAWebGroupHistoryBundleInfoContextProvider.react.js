__d("WAWebGroupHistoryBundleInfoContextProvider.react", [
    "WAWebGroupHistoryBundleInfoContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useMemo, useState } = u;
    function m(e) {
        const t = o("react-compiler-runtime").c(9);
        const e_children = e.children;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = new Set;
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = useState(r);
        const visibleGroupHistoryBundleSenders = a[0];
        const setVisibleGroupHistoryBundleSenders = a[1];
        let earliestVisibleBundleSender;
        if (t[1] !== visibleGroupHistoryBundleSenders) {
            earliestVisibleBundleSender = Array.from(visibleGroupHistoryBundleSenders).at(-1);
            t[1] = visibleGroupHistoryBundleSenders;
            t[2] = earliestVisibleBundleSender;
        } else {
            earliestVisibleBundleSender = t[2];
        }
        let c;
        if (t[3] !== earliestVisibleBundleSender || t[4] !== visibleGroupHistoryBundleSenders) {
            c = {
                visibleGroupHistoryBundleSenders,
                setVisibleGroupHistoryBundleSenders,
                earliestVisibleBundleSender
            };
            t[3] = earliestVisibleBundleSender;
            t[4] = visibleGroupHistoryBundleSenders;
            t[5] = c;
        } else {
            c = t[5];
        }
        const m = c;
        let p;
        if (t[6] !== e_children || t[7] !== m) {
            const Component = o("WAWebGroupHistoryBundleInfoContext").WAWebGroupHistoryBundleInfoContext;
            p = <Component value={m}>{e_children}</Component>;
            t[6] = e_children;
            t[7] = m;
            t[8] = p;
        } else {
            p = t[8];
        }
        return p;
    }
    l.default = m;
}, 98);