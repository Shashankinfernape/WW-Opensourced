__d("useWAWebNavigatableList", [
    "WAWebNavigatableList",
    "WAWebSingleSelection",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function useU(e) {
        const t = o("react-compiler-runtime").c(6);
        const n = useState(null);
        const activeItem = n[0];
        const i = n[1];
        let l;
        if (t[0] !== e) {
            l = function() {
                return new (r("WAWebSingleSelection"))(e);
            };
            t[0] = e;
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = useState(l);
        const listSelection = u[0];
        const d = u[1];
        const m = useState(e);
        const p = m[0];
        const _ = m[1];
        if (p !== e) {
            _(e);
            const f = new (r("WAWebSingleSelection"))(e);
            d(f);
            i(f.getVal());
        }
        let g;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            g = function({ current }) {
                i(current);
            };
            t[2] = g;
        } else {
            g = t[2];
        }
        o("useWAWebListener").useListener(listSelection, "change", g);
        let h;
        if (t[3] !== activeItem || t[4] !== listSelection) {
            h = {
                activeItem,
                listSelection,
                NavigatableList: r("WAWebNavigatableList")
            };
            t[3] = activeItem;
            t[4] = listSelection;
            t[5] = h;
        } else {
            h = t[5];
        }
        return h;
    }
    l.useNavigatableList = useU;
}, 98);