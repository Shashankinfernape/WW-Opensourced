__d("WAWebPopoverContext.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "popover",
        "targetRef"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { createContext: d, useContext: m, useMemo: p, useRef: _ } = c;
    const f = d(null);
    function g() {
        return m(f);
    }
    function h() {
        return _();
    }
    function y(t) {
        const a = o("react-compiler-runtime").c(11);
        let i;
        let l;
        let s;
        if (a[0] !== t) {
            l = t.popover;
            s = t.targetRef;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = i;
            a[2] = l;
            a[3] = s;
        } else {
            i = a[1];
            l = a[2];
            s = a[3];
        }
        const c = _();
        const d = i?.controllerRef ?? c;
        let m;
        if (a[4] !== d || a[5] !== i || a[6] !== s) {
            m = babelHelpers.extends({
                targetRef: s
            }, i, {
                controllerRef: d
            });
            a[4] = d;
            a[5] = i;
            a[6] = s;
            a[7] = m;
        } else {
            m = a[7];
        }
        const p = m;
        let g;
        if (a[8] !== p || a[9] !== l) {
            g = l != null ? <f.Provider value={p}>{l}</f.Provider> : null;
            a[8] = p;
            a[9] = l;
            a[10] = g;
        } else {
            g = a[10];
        }
        return g;
    }
    l.useWAWebPopoverControllerContext = g;
    l.useWAWebPopoverControllerRef = h;
    l.WAWebPopoverController = y;
}, 98);