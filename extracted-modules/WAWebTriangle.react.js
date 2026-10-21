__d("WAWebTriangle.react", [
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = Math.sqrt(2);
    const d = {
        arrow: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            backgroundColor: "xgcd1z6",
            borderTopColor: "xjgx3p0",
            borderInlineEndColor: "x1c7tatl",
            borderBottomColor: "xcigvqi",
            borderInlineStartColor: "xog9bda",
            borderTopWidth: "xiu3vjd",
            borderInlineEndWidth: "xjvssmw",
            borderBottomWidth: "x1y07hx1",
            borderInlineStartWidth: "xtln64n",
            borderTopStyle: "x1u71dlw",
            borderInlineEndStyle: "xmloefz",
            borderBottomStyle: "xr2j6r5",
            borderInlineStartStyle: "x1nqhel6",
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "x17un8ov",
            borderEndEndRadius: "x1e7945m",
            borderEndStartRadius: "x11o6v7j",
            display: "x1lliihq",
            transformOrigin: "x1g0ag68",
            boxSizing: "x9f619",
            $$css: true
        },
        arrowUp: {
            transform: "x1dvvsi6",
            $$css: true
        },
        arrowDown: {
            transform: "x19gryod",
            $$css: true
        },
        arrowLeft: {
            transform: "x1koo3bh",
            $$css: true
        },
        arrowRight: {
            transform: "xz03xr6",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(17);
        const { borderRadius: a, direction: i, width: l, xstyle: s } = t;
        const m = a === void 0 ? "4px" : a;
        const p = i === void 0 ? "down" : i;
        let _;
        if (n[0] !== p || n[1] !== l) {
            _ = p === "up" || p === "down" ? {
                width: `${l}px`,
                height: `${l / 2}px`
            } : {
                height: `${l}px`,
                width: `${l / 2}px`
            };
            n[0] = p;
            n[1] = l;
            n[2] = _;
        } else {
            _ = n[2];
        }
        const f = _;
        let g;
        e: switch(p){
            case "up":
                {
                    g = d.arrowUp;
                    break e;
                }
            case "down":
                {
                    g = d.arrowDown;
                    break e;
                }
            case "left":
                {
                    g = d.arrowLeft;
                    break e;
                }
            case "right":
                g = d.arrowRight;
        }
        let h;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            h = "x1n2onr6 x6ikm8r x10wlt62";
            n[3] = h;
        } else {
            h = n[3];
        }
        const y = `${l / c}px`;
        const C = `${l / c}px`;
        let b;
        if (n[4] !== m || n[5] !== y || n[6] !== C) {
            b = {
                width: y,
                height: C,
                borderBottomLeftRadius: m
            };
            n[4] = m;
            n[5] = y;
            n[6] = C;
            n[7] = b;
        } else {
            b = n[7];
        }
        let v;
        if (n[8] !== g || n[9] !== s) {
            v = (e || (e = r("stylex")))(d.arrow, g, s);
            n[8] = g;
            n[9] = s;
            n[10] = v;
        } else {
            v = n[10];
        }
        let S;
        if (n[11] !== b || n[12] !== v) {
            S = <div style={b} className={v}/>;
            n[11] = b;
            n[12] = v;
            n[13] = S;
        } else {
            S = n[13];
        }
        let R;
        if (n[14] !== f || n[15] !== S) {
            R = <div style={f} className={h}>{S}</div>;
            n[14] = f;
            n[15] = S;
            n[16] = R;
        } else {
            R = n[16];
        }
        return R;
    }
    l.default = m;
}, 98);