__d("WAWebSpinner.react", [
    "VisualCompletionAttributes",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = "xnrop4s-B";
    const m = {
        accent: {
            stroke: "x94ds6z",
            $$css: true
        },
        container: {
            animationName: "x1e112to",
            animationDuration: "x1c74tu6",
            animationTimingFunction: "x1esw782",
            animationIterationCount: "xa4qsjk",
            zIndex: "xhtitgo",
            $$css: true
        },
        default: {
            stroke: "xsg6dc1",
            $$css: true
        },
        wdsSecondaryLighter: {
            stroke: "xsg6dc1",
            $$css: true
        },
        highlight: {
            stroke: "x94ds6z",
            $$css: true
        },
        progress: {
            stroke: "x94ds6z",
            $$css: true
        },
        in: {
            stroke: "x1yzj2yw",
            $$css: true
        },
        noop: {
            visibility: "xnpuxes",
            $$css: true
        },
        out: {
            stroke: "x14t83b7",
            $$css: true
        },
        rounded: {
            strokeLinecap: "x1owpc8m",
            $$css: true
        },
        square: {
            strokeLinecap: "x37uqsb",
            $$css: true
        },
        pathStatic: {
            strokeDasharray: "x9p2g63",
            strokeDashoffset: "x1b0o3cz",
            $$css: true
        },
        solidwhite: {
            stroke: "x4jbe4d",
            $$css: true
        },
        white: {
            stroke: "x11gauq7",
            $$css: true
        },
        rotate: {
            transform: "x9tu13d",
            transformOrigin: "x1bndym7",
            $$css: true
        },
        spanDisplay: {
            display: "x1rg5ohu",
            $$css: true
        },
        transparent: {
            stroke: "xmy28x3",
            $$css: true
        },
        incoming: {
            stroke: "x1xg270d",
            $$css: true
        },
        outgoing: {
            stroke: "xxcrxs2",
            $$css: true
        }
    };
    const p = 20;
    function _(e) {
        if (e == null) {
            return null;
        }
        const t = Math.ceil(2 * p * Math.PI);
        return {
            strokeDasharray: `${t} ${t}`,
            strokeDashoffset: t - e / 100 * t
        };
    }
    function f(e, t) {
        if (e == null) {
            return null;
        }
        const n = Math.max(Math.min(e, t), 0);
        return n * 100 / t;
    }
    function G2(e) {
        const t = o("react-compiler-runtime").c(13);
        const { color: n, outgoingMsg: a, progress: i, stroke: l, strokeLinecap: u, viewBoxSide: d } = e;
        const f = u === void 0 ? "round" : u;
        let g;
        if (t[0] !== i) {
            g = _(i);
            t[0] = i;
            t[1] = g;
        } else {
            g = t[1];
        }
        let h;
        if (t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== f) {
            h = (s || (s = r("stylex")))(f === "round" && m.rounded, f === "square" && m.square, i == null && m.pathStatic, typeof n !== "string" ? n : m[n], a === false && m.in, a === true && m.out);
            t[2] = n;
            t[3] = a;
            t[4] = i;
            t[5] = f;
            t[6] = h;
        } else {
            h = t[6];
        }
        const y = d / 2;
        const C = d / 2;
        let b;
        if (t[7] !== l || t[8] !== g || t[9] !== h || t[10] !== y || t[11] !== C) {
            b = <circle style={g} className={h} cx={y} cy={C} r={p} fill="none" strokeWidth={l}/>;
            t[7] = l;
            t[8] = g;
            t[9] = h;
            t[10] = y;
            t[11] = C;
            t[12] = b;
        } else {
            b = t[12];
        }
        return b;
    }
    function h(t) {
        const n = o("react-compiler-runtime").c(33);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { color: u, max: d, outgoingMsg: _, progressContainerColor: h, size: y, stroke: C, strokeLinecap: b, testid: v, value: S, xstyle: R } = l;
        const L = u === void 0 ? "default" : u;
        const E = d === void 0 ? 100 : d;
        const k = h === void 0 ? "default" : h;
        const I = y === void 0 ? 65 : y;
        const T = C === void 0 ? 4 : C;
        const D = b === void 0 ? "round" : b;
        const x = v === void 0 ? "loading-spinner" : v;
        let $;
        if (n[3] !== E || n[4] !== S) {
            $ = f(S, E);
            n[3] = E;
            n[4] = S;
            n[5] = $;
        } else {
            $ = n[5];
        }
        const P = $;
        const N = 2 * p + T;
        const M = `0 0 ${N} ${N}`;
        let w;
        if (n[6] !== P || n[7] !== R) {
            w = (s || (s = r("stylex"))).props(P == null && m.container || m.rotate, m.spanDisplay, R);
            n[6] = P;
            n[7] = R;
            n[8] = w;
        } else {
            w = n[8];
        }
        const A = w;
        let F;
        if (n[9] !== _ || n[10] !== P || n[11] !== k || n[12] !== T || n[13] !== D || n[14] !== N) {
            F = P != null ? <G2 viewBoxSide={N} stroke={T} strokeLinecap={D} outgoingMsg={_} color={k} progress={100}/> : null;
            n[9] = _;
            n[10] = P;
            n[11] = k;
            n[12] = T;
            n[13] = D;
            n[14] = N;
            n[15] = F;
        } else {
            F = n[15];
        }
        let O;
        if (n[16] !== L || n[17] !== _ || n[18] !== P || n[19] !== T || n[20] !== D || n[21] !== N) {
            O = <G2 progress={P} viewBoxSide={N} stroke={T} strokeLinecap={D} outgoingMsg={_} color={L}/>;
            n[16] = L;
            n[17] = _;
            n[18] = P;
            n[19] = T;
            n[20] = D;
            n[21] = N;
            n[22] = O;
        } else {
            O = n[22];
        }
        let B;
        if (n[23] !== I || n[24] !== F || n[25] !== O || n[26] !== M) {
            B = <svg width={I} height={I} viewBox={M} role="status">{F}{O}</svg>;
            n[23] = I;
            n[24] = F;
            n[25] = O;
            n[26] = M;
            n[27] = B;
        } else {
            B = n[27];
        }
        let W;
        if (n[28] !== A || n[29] !== i || n[30] !== B || n[31] !== x) {
            W = <span {...babelHelpers.extends({
                ref: i,
                "data-testid": x
            }, A, r("VisualCompletionAttributes").LOADING_STATE, {
                children: B
            })}/>;
            n[28] = A;
            n[29] = i;
            n[30] = B;
            n[31] = x;
            n[32] = W;
        } else {
            W = n[32];
        }
        return W;
    }
    l.RADIUS = p;
    l.Spinner = h;
}, 98);