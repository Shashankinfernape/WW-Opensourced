__d("WAWebChevronCustomIcons", [
    "WDSIconIcChevronRight.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        reversed: {
            display: "x1rg5ohu",
            rotate: "x1qul50q",
            $$css: true
        },
        rotatedUp: {
            display: "x1rg5ohu",
            rotate: "x7lonkb",
            $$css: true
        },
        rotatedDown: {
            display: "x1rg5ohu",
            rotate: "xq77vm1",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e.xstyle) {
            n = [
                e.xstyle,
                u.reversed
            ];
            t[0] = e.xstyle;
            t[1] = n;
        } else {
            n = t[1];
        }
        let a;
        if (t[2] !== e || t[3] !== n) {
            a = s.jsx(r("WDSIconIcChevronRight.react"), babelHelpers.extends({
                height: 30,
                width: 30
            }, e, {
                xstyle: n
            }));
            t[2] = e;
            t[3] = n;
            t[4] = a;
        } else {
            a = t[4];
        }
        return a;
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e.xstyle) {
            n = [
                e.xstyle,
                u.rotatedUp
            ];
            t[0] = e.xstyle;
            t[1] = n;
        } else {
            n = t[1];
        }
        let a;
        if (t[2] !== e || t[3] !== n) {
            a = s.jsx(r("WDSIconIcChevronRight.react"), babelHelpers.extends({
                height: 30,
                width: 30
            }, e, {
                xstyle: n
            }));
            t[2] = e;
            t[3] = n;
            t[4] = a;
        } else {
            a = t[4];
        }
        return a;
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e.xstyle) {
            n = [
                e.xstyle,
                u.rotatedDown
            ];
            t[0] = e.xstyle;
            t[1] = n;
        } else {
            n = t[1];
        }
        let a;
        if (t[2] !== e || t[3] !== n) {
            a = s.jsx(r("WDSIconIcChevronRight.react"), babelHelpers.extends({
                height: 30,
                width: 30
            }, e, {
                xstyle: n
            }));
            t[2] = e;
            t[3] = n;
            t[4] = a;
        } else {
            a = t[4];
        }
        return a;
    }
    l.ChevronLeftCustomIcon = c;
    l.ChevronUpCustomIcon = d;
    l.ChevronDownCustomIcon = m;
}, 98);