__d("BaseInput.react", [
    "CometContainerPressableContext",
    "Locale",
    "react",
    "react-compiler-runtime",
    "stylex",
    "testID"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref",
        "xstyle",
        "onChange",
        "onClick",
        "onValueChange",
        "testid",
        "type"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useContext, useMemo } = d;
    const _ = {
        root: {
            WebkitTapHighlightColor: "x1i10hfl",
            boxSizing: "x9f619",
            touchAction: "xggy1nq",
            ":-webkit-autofill_-webkit-background-clip": "xtpw4lu",
            ":-webkit-autofill_-webkit-text-fill-color": "x1tutvks",
            ":-webkit-autofill_transition": "x1s3xk63",
            ":disabled_cursor": "x1s07b3s",
            $$css: true
        },
        zIndex: {
            zIndex: "x1vjfegm",
            $$css: true
        }
    };
    const f = o("Locale").isRTL();
    function GComponent(t) {
        const n = o("react-compiler-runtime").c(31);
        let a;
        let i;
        let l;
        let u;
        let d;
        let p;
        let g;
        let h;
        if (n[0] !== t) {
            d = t.ref;
            h = t.xstyle;
            a = t.onChange;
            i = t.onClick;
            l = t.onValueChange;
            g = t.testid;
            p = t.type;
            u = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = u;
            n[5] = d;
            n[6] = p;
            n[7] = g;
            n[8] = h;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            u = n[4];
            d = n[5];
            p = n[6];
            g = n[7];
            h = n[8];
        }
        const y = p === undefined ? "text" : p;
        let C;
        e: switch(y){
            case "switch":
                {
                    C = "checkbox";
                    break e;
                }
            default:
                C = y;
        }
        const b = C;
        const v = b === "checkbox" || b === "radio";
        const S = b === "textarea";
        const R = useContext(r("CometContainerPressableContext")) != null;
        const L = S ? "textarea" : "input";
        let E;
        if (n[9] !== R || n[10] !== h) {
            E = (s || (s = r("stylex"))).props(_.root, h, R && _.zIndex);
            n[9] = R;
            n[10] = h;
            n[11] = E;
        } else {
            E = n[11];
        }
        let k;
        if (n[12] !== g) {
            k = r("testID")(g);
            n[12] = g;
            n[13] = k;
        } else {
            k = n[13];
        }
        let I;
        if (n[14] !== v || n[15] !== a || n[16] !== l) {
            I = function(t) {
                if (!(v || l == null)) {
                    l(t.currentTarget.value, t);
                }
                a?.(t);
            };
            n[14] = v;
            n[15] = a;
            n[16] = l;
            n[17] = I;
        } else {
            I = n[17];
        }
        let T;
        if (n[18] !== v || n[19] !== i || n[20] !== l) {
            T = function(t) {
                if (v) {
                    const e = t.currentTarget;
                    if (e instanceof HTMLInputElement) {
                        if (l != null) {
                            l(e.checked, t);
                        }
                    }
                }
                i?.(t);
            };
            n[18] = v;
            n[19] = i;
            n[20] = l;
            n[21] = T;
        } else {
            T = n[21];
        }
        const D = S ? undefined : b;
        let x;
        if (n[22] !== L || n[23] !== u || n[24] !== d || n[25] !== E || n[26] !== k || n[27] !== I || n[28] !== T || n[29] !== D) {
            x = <L {...babelHelpers.extends({}, E, {
                dir: f ? "rtl" : "ltr"
            }, u, k, {
                onChange: I,
                onClick: T,
                ref: d,
                type: D
            })}/>;
            n[22] = L;
            n[23] = u;
            n[24] = d;
            n[25] = E;
            n[26] = k;
            n[27] = I;
            n[28] = T;
            n[29] = D;
            n[30] = x;
        } else {
            x = n[30];
        }
        return x;
    }
    const h = c.memo(GComponent);
    l.default = h;
}, 98);