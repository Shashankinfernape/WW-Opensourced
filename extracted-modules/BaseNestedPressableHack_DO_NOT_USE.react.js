__d("BaseNestedPressableHack_DO_NOT_USE.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useState } = u;
    function MComponent(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_children = e.children;
        const r = useState(false);
        const a = r[0];
        const i = r[1];
        let l;
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                return i(true);
            };
            u = [];
            t[0] = l;
            t[1] = u;
        } else {
            l = t[0];
            u = t[1];
        }
        useEffect(l, u);
        let m;
        if (t[2] !== a) {
            m = a ? null : {
                height: 0,
                width: 0
            };
            t[2] = a;
            t[3] = m;
        } else {
            m = t[3];
        }
        const p = m;
        let _;
        if (t[4] !== e_children || t[5] !== p) {
            _ = <object {...babelHelpers.extends({}, p, {
                type: "nested/pressable",
                children: e_children
            })}/>;
            t[4] = e_children;
            t[5] = p;
            t[6] = _;
        } else {
            _ = t[6];
        }
        return _;
    }
    l.default = MComponent;
}, 98);