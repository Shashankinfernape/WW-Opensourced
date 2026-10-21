__d("WAWebDefaultAddProfilePicture.react", [
    "WAWebDefaultProfilePicture.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "backgroundStyles",
        "foregroundStyles"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = {
        backgroundColor: {
            backgroundColor: "xfn3atn",
            $$css: true
        },
        foregroundColor: {
            color: "x1pse0pq",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(12);
        let a;
        let i;
        let l;
        if (n[0] !== t) {
            a = t.backgroundStyles;
            i = t.foregroundStyles;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
        }
        let s;
        if (n[4] !== a) {
            s = [
                a,
                c.backgroundColor
            ];
            n[4] = a;
            n[5] = s;
        } else {
            s = n[5];
        }
        let foregroundStyles;
        if (n[6] !== i) {
            foregroundStyles = [
                i,
                c.foregroundColor
            ];
            n[6] = i;
            n[7] = foregroundStyles;
        } else {
            foregroundStyles = n[7];
        }
        let m;
        if (n[8] !== l || n[9] !== s || n[10] !== foregroundStyles) {
            m = u.jsx(r("WAWebDefaultProfilePicture.react"), babelHelpers.extends({
                backgroundStyles: s,
                foregroundStyles
            }, l));
            n[8] = l;
            n[9] = s;
            n[10] = foregroundStyles;
            n[11] = m;
        } else {
            m = n[11];
        }
        return m;
    }
    l.default = d;
}, 98);