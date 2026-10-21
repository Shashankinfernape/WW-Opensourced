__d("WAWebUploadRefreshedIcon", [
    "WDSIconIcDownload.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        rotatedUp: {
            display: "x1rg5ohu",
            transform: "x19jd1h0",
            $$css: true
        }
    };
    function c(e) {
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
            a = s.jsx(r("WDSIconIcDownload.react"), babelHelpers.extends({}, e, {
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
    l.default = c;
}, 98);