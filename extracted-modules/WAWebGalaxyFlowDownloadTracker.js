__d("WAWebGalaxyFlowDownloadTracker", [
    "fbt",
    "Promise",
    "WAWebActionToast.react",
    "WAWebNoop",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = 5000;
    const m = new Map;
    function p() {
        const t = (e || (e = n("Promise"))).reject(new (o("WAWebActionToast.react")).ActionType(s._("Couldn't download responses. Make sure the device linked to this account is connected to the internet and try again.")));
        t.catch(r("WAWebNoop"));
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: null,
            pendingAction: t
        }));
    }
    class _ {
        registerRequest(t) {
            const e = m.get(t);
            if (e != null) {
                window.clearTimeout(e);
            }
            const n = window.setTimeout(function() {
                m.delete(t);
                p();
            }, d);
            m.set(t, n);
        }
        resolveRequest(t) {
            const e = m.get(t);
            if (e != null) {
                window.clearTimeout(e);
                m.delete(t);
            }
        }
        failRequest(t) {
            const e = m.get(t);
            if (e != null) {
                window.clearTimeout(e);
                m.delete(t);
                p();
            }
        }
        failAllRequests() {
            if (m.size !== 0) {
                m.forEach((e)=>{
                    window.clearTimeout(e);
                });
                m.clear();
                p();
            }
        }
    }
    const f = new _;
    l.GalaxyFlowDownloadTracker = f;
}, 226);