__d("BaseRadio.react", [
    "BaseFocusRing.react",
    "BaseInput.react",
    "BaseView.react",
    "XPlatReactNestedPressableContext",
    "react",
    "react-compiler-runtime",
    "useMergeRefs"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref",
        "children",
        "indeterminate",
        "onClick",
        "onValueChange",
        "suppressFocusRing",
        "tabIndex",
        "testid",
        "xstyle"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useContext, useEffect, useRef } = c;
    const _ = {
        radio: {
            cursor: "x1ypdohk",
            height: "x5yr21d",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            opacity: "x1w3u9th",
            outline: "x1a2a7pz",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            position: "x10l6tqk",
            top: "x13vifvy",
            width: "xh8yej3",
            $$css: true
        },
        wrapper: {
            position: "x1n2onr6",
            $$css: true
        }
    };
    function f(t) {
        const n = o("react-compiler-runtime").c(29);
        let a;
        let i;
        let l;
        let s;
        let c;
        let suppressFocusRing;
        let g;
        let h;
        let y;
        let C;
        if (n[0] !== t) {
            i = t.ref;
            a = t.children;
            g = t.indeterminate;
            l = t.onClick;
            s = t.onValueChange;
            suppressFocusRing = t.suppressFocusRing;
            h = t.tabIndex;
            y = t.testid;
            C = t.xstyle;
            c = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = s;
            n[5] = c;
            n[6] = suppressFocusRing;
            n[7] = g;
            n[8] = h;
            n[9] = y;
            n[10] = C;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            s = n[4];
            c = n[5];
            suppressFocusRing = n[6];
            g = n[7];
            h = n[8];
            y = n[9];
            C = n[10];
        }
        const b = g === undefined ? false : g;
        const v = useContext(r("XPlatReactNestedPressableContext"));
        const SRef = useRef(null);
        let R;
        let L;
        if (n[11] !== b) {
            R = function() {
                if (SRef.current != null) {
                    SRef.current.indeterminate = b;
                }
            };
            L = [
                b
            ];
            n[11] = b;
            n[12] = R;
            n[13] = L;
        } else {
            R = n[12];
            L = n[13];
        }
        useEffect(R, L);
        const E = r("useMergeRefs")(i, SRef);
        let k;
        if (n[14] !== a || n[15] !== b || n[16] !== v || n[17] !== E || n[18] !== l || n[19] !== s || n[20] !== c || n[21] !== suppressFocusRing || n[22] !== h || n[23] !== y || n[24] !== C) {
            k = function(t) {
                const Component = r("BaseView.react");
                return <Component testid={undefined} xstyle={[
                    _.wrapper,
                    t,
                    C
                ]}>{a}{u.jsx(r("BaseInput.react"), babelHelpers.extends({}, c, {
                    "aria-checked": b ? "mixed" : c.checked ?? false,
                    onClick: v ? undefined : l,
                    onValueChange: v ? undefined : s,
                    ref: E,
                    tabIndex: h ?? (suppressFocusRing === true ? -1 : undefined),
                    type: "radio",
                    xstyle: _.radio
                }))}</Component>;
            };
            n[14] = a;
            n[15] = b;
            n[16] = v;
            n[17] = E;
            n[18] = l;
            n[19] = s;
            n[20] = c;
            n[21] = suppressFocusRing;
            n[22] = h;
            n[23] = y;
            n[24] = C;
            n[25] = k;
        } else {
            k = n[25];
        }
        let I;
        if (n[26] !== suppressFocusRing || n[27] !== k) {
            const Component = r("BaseFocusRing.react");
            I = <Component suppressFocusRing={suppressFocusRing}>{k}</Component>;
            n[26] = suppressFocusRing;
            n[27] = k;
            n[28] = I;
        } else {
            I = n[28];
        }
        return I;
    }
    const g = u.memo(f);
    l.default = g;
}, 98);