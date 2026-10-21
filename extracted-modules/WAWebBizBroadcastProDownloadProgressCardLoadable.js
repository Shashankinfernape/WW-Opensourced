__d("WAWebBizBroadcastProDownloadProgressCardLoadable", [
    "JSResourceForInteraction",
    "WAWebBizBroadcastProDownloadPreparingToast.react",
    "WAWebBizBroadcastProSubscriberDownloadRegistry",
    "WAWebModalLoadable",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { createContext: c, useContext: d } = u;
    const m = c(null);
    const P1 = r("WAWebModalLoadable")(r("JSResourceForInteraction")("WAWebBizBroadcastProDownloadProgressCard.react").__setRef("WAWebBizBroadcastProDownloadProgressCardLoadable"), "BizBroadcastProDownloadProgressCard", f);
    function _(e) {
        const t = o("react-compiler-runtime").c(5);
        const n = e.entry;
        let r;
        if (t[0] !== n) {
            r = <P1 entry={n}/>;
            t[0] = n;
            t[1] = r;
        } else {
            r = t[1];
        }
        let a;
        if (t[2] !== n || t[3] !== r) {
            a = <m.Provider value={n}>{r}</m.Provider>;
            t[2] = n;
            t[3] = r;
            t[4] = a;
        } else {
            a = t[4];
        }
        return a;
    }
    function f(e) {
        return <G1 hasError={!!e.error}/>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function G1(e) {
        const t = o("react-compiler-runtime").c(4);
        const n = e.hasError;
        const a = d(m);
        if (n || a == null || a.status !== "preparing") {
            return null;
        }
        let i;
        if (t[0] !== a.completionPercentage) {
            i = o("WAWebBizBroadcastProSubscriberDownloadRegistry").getPreparingPercentage(a.completionPercentage);
            t[0] = a.completionPercentage;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== i) {
            l = s.jsx(r("WAWebBizBroadcastProDownloadPreparingToast.react"), {
                completionPercentage: i
            });
            t[2] = i;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    l.WAWebBizBroadcastProDownloadProgressCardLoadable = _;
}, 98);