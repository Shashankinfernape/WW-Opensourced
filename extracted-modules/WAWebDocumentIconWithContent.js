__d("WAWebDocumentIconWithContent", [
    "WAWebIcDocBaseIcon.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "content",
        "fontSize",
        "iconXStyle"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(26);
        let r;
        let a;
        let i;
        let l;
        if (n[0] !== t) {
            r = t.content;
            a = t.fontSize;
            i = t.iconXStyle;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
            n[3] = i;
            n[4] = l;
        } else {
            r = n[1];
            a = n[2];
            i = n[3];
            l = n[4];
        }
        let s;
        if (n[5] !== r) {
            s = r.slice(0, 3).toUpperCase();
            n[5] = r;
            n[6] = s;
        } else {
            s = n[6];
        }
        const c = s;
        let d;
        if (n[7] !== l.width) {
            d = {
                width: l.width
            };
            n[7] = l.width;
            n[8] = d;
        } else {
            d = n[8];
        }
        let m;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            m = "x1n2onr6";
            n[9] = m;
        } else {
            m = n[9];
        }
        let p;
        if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                width: 22,
                height: 26,
                x: 0,
                y: 0
            };
            n[10] = p;
        } else {
            p = n[10];
        }
        const _ = `document-${c}-icon`;
        let f;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            f = {};
            n[11] = f;
        } else {
            f = n[11];
        }
        let g;
        if (n[12] !== i || n[13] !== l || n[14] !== _) {
            g = u.jsx(o("WAWebIcDocBaseIcon.react").IcDocBaseIcon, babelHelpers.extends({}, l, {
                viewBox: p,
                xstyle: i,
                name: _,
                innerStyles: f
            }));
            n[12] = i;
            n[13] = l;
            n[14] = _;
            n[15] = g;
        } else {
            g = n[15];
        }
        let h;
        if (n[16] !== a) {
            h = {
                fontSize: a
            };
            n[16] = a;
            n[17] = h;
        } else {
            h = n[17];
        }
        let y;
        if (n[18] === Symbol.for("react.memo_cache_sentinel")) {
            y = "x1s688f x1lliihq xfungia x10l6tqk x1icnayv xh8yej3 x2b8uid xo5v014 x87ps6o";
            n[18] = y;
        } else {
            y = n[18];
        }
        let C;
        if (n[19] !== c || n[20] !== h) {
            C = <div style={h} className={y}>{c}</div>;
            n[19] = c;
            n[20] = h;
            n[21] = C;
        } else {
            C = n[21];
        }
        let b;
        if (n[22] !== C || n[23] !== d || n[24] !== g) {
            b = <div style={d} className={m}>{g}{C}</div>;
            n[22] = C;
            n[23] = d;
            n[24] = g;
            n[25] = b;
        } else {
            b = n[25];
        }
        return b;
    }
    l.default = c;
}, 98);