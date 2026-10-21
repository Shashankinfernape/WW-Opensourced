__d("useWAWebFilteredContacts", [
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
    "react",
    "react-compiler-runtime",
    "shallowArrayEqual",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u(e) {
        o("WAWebContactCollection").ContactCollection.ensureSorted();
        return o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, e ?? {});
    }
    function c(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e) {
            n = function() {
                return u(e);
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const a = useState(n);
        const i = a[0];
        const l = a[1];
        const c = useState(e);
        const d = c[0];
        const m = c[1];
        if (e !== d) {
            const p = u(e);
            if (!r("shallowArrayEqual")(i, p)) {
                m(e);
                l(p);
            }
        }
        let _;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                "add",
                "remove",
                "reset",
                "change"
            ];
            t[2] = _;
        } else {
            _ = t[2];
        }
        let f;
        if (t[3] !== e) {
            f = function() {
                l(u(e));
            };
            t[3] = e;
            t[4] = f;
        } else {
            f = t[4];
        }
        o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, _, f);
        return i;
    }
    l.default = c;
}, 98);