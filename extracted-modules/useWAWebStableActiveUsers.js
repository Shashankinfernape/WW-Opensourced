__d("useWAWebStableActiveUsers", [
    "WAWebPresenceOrder",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u(e, t) {
        const n = new Set(e.map((e)=>e.toString()));
        const r = t.filter((e)=>{
            const t = e.toString();
            if (n.has(t)) {
                return false;
            }
            n.add(t);
            return true;
        });
        return [].concat(e, r);
    }
    function c(e, t) {
        const n = o("react-compiler-runtime").c(3);
        let r;
        if (n[0] !== t || n[1] !== e) {
            r = function() {
                return u(e, t);
            };
            n[0] = t;
            n[1] = e;
            n[2] = r;
        } else {
            r = n[2];
        }
        const a = useState(r);
        const i = a[0];
        const l = a[1];
        const c = useState(e);
        const d = c[0];
        const m = c[1];
        const p = useState(t);
        const _ = p[0];
        const f = p[1];
        if (e !== d || t !== _) {
            m(e);
            f(t);
            const g = u(e, t);
            l(o("WAWebPresenceOrder").preserveUserOrder(i, g));
        }
        return i;
    }
    l.useWAWebStableActiveUsers = c;
}, 98);