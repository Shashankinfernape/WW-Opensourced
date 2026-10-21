__d("useWAWebSetModelValue", [
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useCallback = (e || (e = o("react"))).useCallback;
    const u = ((e)=>{
        function t(t, n) {
            let r;
            const o = `The model "${t}" has no property/sessions "${n}" defined`;
            r = e.call(this, o) || this;
            r.name = "SetStateHookMissingModelPropertyError";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const c = {};
    function d(e, t) {
        const n = o("react-compiler-runtime").c(7);
        let r;
        let a;
        if (n[0] !== t || n[1] !== e) {
            r = o("WAWebStateUtils").unproxy(e);
            a = m(r).has(t);
            n[0] = t;
            n[1] = e;
            n[2] = r;
            n[3] = a;
        } else {
            r = n[2];
            a = n[3];
        }
        if (!a) {
            throw new u(e.proxyName, t);
        }
        let i;
        if (n[4] !== t || n[5] !== r) {
            i = function(n) {
                if (typeof n === "function") {
                    const e = r.get(t);
                    r.set(t, n(e));
                } else {
                    r.set(t, n);
                }
            };
            n[4] = t;
            n[5] = r;
            n[6] = i;
        } else {
            i = n[6];
        }
        return i;
    }
    function m(e) {
        const e_proxyName = e.proxyName;
        if (c[e_proxyName] == null) {
            c[e_proxyName] = new Set([].concat(e.__props, e.__session));
        }
        return c[e_proxyName];
    }
    l.SetStateHookMissingModelPropertyError = u;
    l.useSetModelValue = d;
}, 98);