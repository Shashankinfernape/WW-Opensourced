__d("ScreenReaderText.react", [
    "WebView.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "text"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = {
        visuallyHidden: {
            clip: "xzpqnlu",
            clipPath: "x1hyvwdk",
            fontSize: "x14bfe9o",
            height: "xjm9jq1",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x10l6tqk",
            width: "x1i1rx1s",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(6);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.text;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        if (n[3] !== a || n[4] !== i) {
            l = u.jsx(r("WebView.react"), babelHelpers.extends({}, a, {
                xstyle: c.visuallyHidden,
                children: i
            }));
            n[3] = a;
            n[4] = i;
            n[5] = l;
        } else {
            l = n[5];
        }
        return l;
    }
    l.default = d;
}, 98);