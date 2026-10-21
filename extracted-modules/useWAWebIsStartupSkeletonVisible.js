__d("useWAWebIsStartupSkeletonVisible", [
    "WAWebNoop",
    "cr:11133",
    "cr:11135",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useSyncExternalStore } = s;
    const d = new WeakSet;
    function m(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] !== e) {
            n = function(n) {
                return _(e, n);
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const r = n;
        let a;
        if (t[2] !== e) {
            a = function() {
                return p(e);
            };
            t[2] = e;
            t[3] = a;
        } else {
            a = t[3];
        }
        return useSyncExternalStore(r, a);
    }
    function p(e) {
        if ((n("cr:11133") == null ? undefined : n("cr:11133")()) !== true) {
            return false;
        }
        const t = f(e);
        const r = g(e);
        if (t == null || r == null || d.has(t.getPromise())) {
            return false;
        }
        return r() === false;
    }
    function _(e, t) {
        const n = f(e);
        if (n == null) {
            return r("WAWebNoop");
        }
        let o = true;
        const a = n.getPromise();
        a.then(()=>{
            d.add(a);
            if (o) {
                t();
            }
        });
        return function() {
            o = false;
        };
    }
    function f(e) {
        if (e === "chatlist") {
            if (n("cr:11135") == null) {
                return undefined;
            }
            return n("cr:11135").chatlistReadySignal;
        }
        if (n("cr:11135") == null) {
            return undefined;
        }
        return n("cr:11135").chatlistRowsReadySignal;
    }
    function g(e) {
        if (e === "chatlist") {
            if (n("cr:11135") == null) {
                return undefined;
            }
            return n("cr:11135").isChatlistReady;
        }
        if (n("cr:11135") == null) {
            return undefined;
        }
        return n("cr:11135").isChatlistRowsReady;
    }
    l.default = m;
}, 98);