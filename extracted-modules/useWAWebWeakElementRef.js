__d("useWAWebWeakElementRef", [
    "gkx",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u() {
        const e = useState(c);
        const t = e[0];
        return t;
    }
    function c() {
        return d();
    }
    function d() {
        const e = {
            current: null
        };
        if (!r("gkx")("21924")) {
            return e;
        }
        let t = null;
        Object.defineProperty(e, "current", {
            get: function() {
                const n = t?.deref();
                if (n?.isConnected === true) {
                    return n;
                }
                return null;
            },
            set: function(n) {
                t = n == null ? null : new WeakRef(n);
            }
        });
        return e;
    }
    l.default = u;
}, 98);