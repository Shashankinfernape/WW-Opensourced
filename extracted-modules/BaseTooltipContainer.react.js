__d("BaseTooltipContainer.react", [
    "BaseAnchorPositioningUtils",
    "BaseContextualLayerContextSizeContext",
    "BaseTooltipCarat.react",
    "FocusRegion.react",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref",
        "align",
        "alignOffsetXstyle",
        "anchorRef",
        "anchorTargetRef",
        "anchorTargetXstyle",
        "children",
        "closeButton",
        "id",
        "position",
        "role",
        "shouldFadeIn",
        "shouldShowCarat",
        "withCloseButton",
        "xstyle"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useContext, useLayoutEffect, useState } = d;
    const f = 10.5;
    const g = {
        anchorPositionContainer: {
            width: "xezivpi",
            $$css: true
        },
        container: {
            backgroundColor: "xj5tmjb",
            borderStartStartRadius: "xyjepno",
            borderStartEndRadius: "x15s83fx",
            borderEndEndRadius: "xdgutz0",
            borderEndStartRadius: "x1wjlvx0",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            boxShadow: "xms15q0",
            display: "x78zum5",
            filter: "xo8ld3r",
            maxWidth: "x86nfjv",
            paddingTop: "xz9dl7a",
            paddingBottom: "xsag5q8",
            paddingInlineStart: "x1g0dm76",
            paddingInlineEnd: "xpdmqnj",
            $$css: true
        },
        fillXStyle: {
            fill: "x1fj6ok0",
            fillOpacity: "xlyfr8p",
            $$css: true
        },
        transitionIn: {
            opacity: "x1hc1fzr",
            transitionDuration: "xhb22t3",
            transitionTimingFunction: "xls3em1",
            $$css: true
        },
        transitionOut: {
            opacity: "xg01cxk",
            transitionDuration: "x1ebt8du",
            transitionProperty: "x19991ni",
            transitionTimingFunction: "x1dhq9h",
            $$css: true
        }
    };
    const h = {
        above: {
            flexDirection: "xdt5ytf",
            $$css: true
        },
        base: {
            display: "x78zum5",
            marginBottom: "xjpr12u",
            marginTop: "xr9ek0c",
            $$css: true
        },
        below: {
            flexDirection: "x3ieub6",
            $$css: true
        },
        end: {
            flexDirection: "x15zctf7",
            $$css: true
        },
        start: {
            flexDirection: "x1q0g3np",
            $$css: true
        }
    };
    const y = {
        marginInlineEnd: "x1c9tiao",
        $$css: true
    };
    const C = {
        marginInlineStart: "x4lel18",
        $$css: true
    };
    const b = {
        alignEnd: function(t) {
            return [
                y,
                {
                    "--x-marginInlineEnd": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`calc(${t ?? 0}px / 2 - ${f}px)`)
                }
            ];
        },
        alignStart: function(t) {
            return [
                C,
                {
                    "--x-marginInlineStart": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`calc(${t ?? 0}px / 2 - ${f}px)`)
                }
            ];
        },
        end: {
            alignItems: "xuk3077",
            $$css: true
        },
        middle: {
            alignItems: "x6s0dn4",
            $$css: true
        },
        start: {
            alignItems: "x1cy8zhl",
            $$css: true
        },
        stretch: {
            alignItems: "x6s0dn4",
            $$css: true
        }
    };
    function VComponent(t) {
        const i = o("react-compiler-runtime").c(70);
        let l;
        let u;
        let d;
        let f;
        let y;
        let C;
        let v;
        let S;
        let R;
        let L;
        let E;
        let k;
        let I;
        let T;
        let D;
        let x;
        if (i[0] !== t) {
            R = t.ref;
            L = t.align;
            l = t.alignOffsetXstyle;
            u = t.anchorRef;
            d = t.anchorTargetRef;
            f = t.anchorTargetXstyle;
            C = t.children;
            v = t.closeButton;
            S = t.id;
            E = t.position;
            k = t.role;
            I = t.shouldFadeIn;
            T = t.shouldShowCarat;
            D = t.withCloseButton;
            x = t.xstyle;
            y = babelHelpers.objectWithoutPropertiesLoose(t, e);
            i[0] = t;
            i[1] = l;
            i[2] = u;
            i[3] = d;
            i[4] = f;
            i[5] = y;
            i[6] = C;
            i[7] = v;
            i[8] = S;
            i[9] = R;
            i[10] = L;
            i[11] = E;
            i[12] = k;
            i[13] = I;
            i[14] = T;
            i[15] = D;
            i[16] = x;
        } else {
            l = i[1];
            u = i[2];
            d = i[3];
            f = i[4];
            y = i[5];
            C = i[6];
            v = i[7];
            S = i[8];
            R = i[9];
            L = i[10];
            E = i[11];
            k = i[12];
            I = i[13];
            T = i[14];
            D = i[15];
            x = i[16];
        }
        const $ = L === undefined ? "middle" : L;
        const P = E === undefined ? "below" : E;
        const N = k === undefined ? "tooltip" : k;
        const shouldFadeIn = I === undefined ? false : I;
        const w = T === undefined ? false : T;
        const A = D === undefined ? true : D;
        const F = useState(null);
        const O = F[0];
        const B = F[1];
        const W = useContext(r("BaseContextualLayerContextSizeContext"));
        let q;
        let U;
        if (i[17] !== u) {
            q = function() {
                if (!(u != null && u.current == null)) {
                    const t = u?.current?.getBoundingClientRect();
                    if (t != null) {
                        const n = {
                            height: t.height,
                            width: t.width
                        };
                        B(n);
                    }
                }
            };
            U = [
                u
            ];
            i[17] = u;
            i[18] = q;
            i[19] = U;
        } else {
            q = i[18];
            U = i[19];
        }
        useLayoutEffect(q, U);
        let V;
        let H;
        if (i[20] !== O || i[21] !== W || i[22] !== shouldFadeIn || i[23] !== x) {
            const G = o("BaseAnchorPositioningUtils").passesAnchorPositionExperiment();
            H = G ? O : W;
            V = (s || (s = r("stylex"))).props(g.container, G && g.anchorPositionContainer, g.transitionOut, x, shouldFadeIn && g.transitionIn);
            i[20] = O;
            i[21] = W;
            i[22] = shouldFadeIn;
            i[23] = x;
            i[24] = V;
            i[25] = H;
        } else {
            V = i[24];
            H = i[25];
        }
        let z;
        if (i[26] !== V) {
            z = babelHelpers.extends({}, V);
            i[26] = V;
            i[27] = z;
        } else {
            z = i[27];
        }
        const j = z;
        const role = N;
        let Q;
        if (i[28] !== C || i[29] !== v || i[30] !== N || i[31] !== A) {
            const Component = o("FocusRegion.react").FocusRegion;
            Q = N === "dialog" ? <Component autoFocusQuery={o("focusScopeQueries").focusableScopeQuery}><>{C}{A === true && <div>{v}</div>}</></Component> : <>{C}</>;
            i[28] = C;
            i[29] = v;
            i[30] = N;
            i[31] = A;
            i[32] = Q;
        } else {
            Q = i[32];
        }
        let X;
        if (i[33] !== y || i[34] !== j || i[35] !== S || i[36] !== R || i[37] !== role || i[38] !== Q) {
            X = <div {...babelHelpers.extends({}, y, j, {
                "data-testid": undefined,
                id: S,
                ref: R,
                role,
                children: Q
            })}/>;
            i[33] = y;
            i[34] = j;
            i[35] = S;
            i[36] = R;
            i[37] = role;
            i[38] = Q;
            i[39] = X;
        } else {
            X = i[39];
        }
        const Y = X;
        const J = P === "auto" ? "below" : P;
        const Z = h[J];
        const ee = b[$];
        let te;
        if (i[40] !== Z || i[41] !== ee) {
            te = [
                h.base,
                Z,
                ee
            ];
            i[40] = Z;
            i[41] = ee;
            i[42] = te;
        } else {
            te = i[42];
        }
        let ne;
        if (i[43] !== $ || i[44] !== l || i[45] !== H?.width) {
            ne = l === undefined && $ === "end" && b.alignEnd(H?.width);
            i[43] = $;
            i[44] = l;
            i[45] = H?.width;
            i[46] = ne;
        } else {
            ne = i[46];
        }
        let ae;
        if (i[47] !== $ || i[48] !== l || i[49] !== H?.width) {
            ae = l === undefined && $ === "start" && b.alignStart(H?.width);
            i[47] = $;
            i[48] = l;
            i[49] = H?.width;
            i[50] = ae;
        } else {
            ae = i[50];
        }
        let se;
        if (i[51] !== l || i[52] !== ne || i[53] !== ae) {
            se = [
                ne,
                ae,
                l
            ];
            i[51] = l;
            i[52] = ne;
            i[53] = ae;
            i[54] = se;
        } else {
            se = i[54];
        }
        let ue;
        if (i[55] !== P || i[56] !== shouldFadeIn || i[57] !== w) {
            ue = w && c.jsx(r("BaseTooltipCarat.react"), {
                fillXStyle: g.fillXStyle,
                position: P,
                shouldFadeIn,
                transitionInXStyle: g.transitionIn,
                transitionOutXStyle: g.transitionOut
            });
            i[55] = P;
            i[56] = shouldFadeIn;
            i[57] = w;
            i[58] = ue;
        } else {
            ue = i[58];
        }
        let ce;
        if (i[59] !== se || i[60] !== ue) {
            const Component = o("react-strict-dom").html.div;
            ce = <Component style={se}>{ue}</Component>;
            i[59] = se;
            i[60] = ue;
            i[61] = ce;
        } else {
            ce = i[61];
        }
        let de;
        if (i[62] !== Y || i[63] !== te || i[64] !== ce) {
            const Component = o("react-strict-dom").html.div;
            de = <Component style={te}>{Y}{ce}</Component>;
            i[62] = Y;
            i[63] = te;
            i[64] = ce;
            i[65] = de;
        } else {
            de = i[65];
        }
        let me;
        if (i[66] !== d || i[67] !== f || i[68] !== de) {
            const Component = o("react-strict-dom").html.div;
            me = <Component ref={d} style={f}>{de}</Component>;
            i[66] = d;
            i[67] = f;
            i[68] = de;
            i[69] = me;
        } else {
            me = i[69];
        }
        return me;
    }
    l.default = VComponent;
}, 98);