__d("WAWebPttStatusIconStyleable.react", [
    "WAWebSvgComponentBase",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "height",
        "iconXstyle",
        "innerStyles",
        "name",
        "viewBox",
        "width"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = "ptt-status";
    function m(t) {
        const i = o("react-compiler-runtime").c(37);
        let l;
        let u;
        let m;
        let p;
        let _;
        let f;
        let g;
        if (i[0] !== t) {
            l = t.height;
            m = t.iconXstyle;
            p = t.innerStyles;
            u = t.name;
            f = t.viewBox;
            g = t.width;
            _ = babelHelpers.objectWithoutPropertiesLoose(t, e);
            i[0] = t;
            i[1] = l;
            i[2] = u;
            i[3] = m;
            i[4] = p;
            i[5] = _;
            i[6] = f;
            i[7] = g;
        } else {
            l = i[1];
            u = i[2];
            m = i[3];
            p = i[4];
            _ = i[5];
            f = i[6];
            g = i[7];
        }
        let h;
        if (f) {
            const y = f;
            const { height, width, x, y: y_1 } = y;
            const R = height === undefined ? 0 : height;
            const L = width === undefined ? 0 : width;
            const E = x === undefined ? 0 : x;
            const k = y_1 === undefined ? 0 : y_1;
            let I;
            if (i[8] !== R || i[9] !== L || i[10] !== E || i[11] !== k) {
                I = [
                    E,
                    k,
                    L,
                    R
                ];
                i[8] = R;
                i[9] = L;
                i[10] = E;
                i[11] = k;
                i[12] = I;
            } else {
                I = i[12];
            }
            h = I.join(" ");
        }
        let T = 26;
        let D = 19;
        if (l != null || g != null) {
            T = l;
            D = g;
        }
        const x = u ?? d;
        const $ = h ?? "0 0 19 26";
        const P = T;
        const N = D;
        let M;
        if (i[13] !== m) {
            M = (s || (s = r("stylex"))).props(m);
            i[13] = m;
            i[14] = M;
        } else {
            M = i[14];
        }
        const w = u ?? d;
        let A;
        if (i[15] !== w) {
            A = <title>{w}</title>;
            i[15] = w;
            i[16] = A;
        } else {
            A = i[16];
        }
        let F;
        if (i[17] !== p?.background) {
            F = (s || (s = r("stylex"))).props(p?.background);
            i[17] = p?.background;
            i[18] = F;
        } else {
            F = i[18];
        }
        let W;
        if (i[19] !== F) {
            W = <path {...babelHelpers.extends({
                fill: "#FFFFFF"
            }, F, {
                d: "M9.217,24.401c-1.158,0-2.1-0.941-2.1-2.1v-2.366c-2.646-0.848-4.652-3.146-5.061-5.958L2.004,13.62 l-0.003-0.081c-0.021-0.559,0.182-1.088,0.571-1.492c0.39-0.404,0.939-0.637,1.507-0.637h0.3c0.254,0,0.498,0.044,0.724,0.125v-6.27 C5.103,2.913,7.016,1,9.367,1c2.352,0,4.265,1.913,4.265,4.265v6.271c0.226-0.081,0.469-0.125,0.723-0.125h0.3 c0.564,0,1.112,0.233,1.501,0.64s0.597,0.963,0.571,1.526c0,0.005,0.001,0.124-0.08,0.6c-0.47,2.703-2.459,4.917-5.029,5.748v2.378 c0,1.158-0.942,2.1-2.1,2.1H9.217V24.401z"
            })}/>;
            i[19] = F;
            i[20] = W;
        } else {
            W = i[20];
        }
        let q;
        if (i[21] !== p?.primary) {
            q = (s || (s = r("stylex"))).props(p?.primary);
            i[21] = p?.primary;
            i[22] = q;
        } else {
            q = i[22];
        }
        let H;
        if (i[23] !== q) {
            H = <path {...babelHelpers.extends({
                fill: "currentColor"
            }, q, {
                d: "M9.367,15.668c1.527,0,2.765-1.238,2.765-2.765V5.265c0-1.527-1.238-2.765-2.765-2.765 S6.603,3.738,6.603,5.265v7.638C6.603,14.43,7.84,15.668,9.367,15.668z M14.655,12.91h-0.3c-0.33,0-0.614,0.269-0.631,0.598 c0,0,0,0-0.059,0.285c-0.41,1.997-2.182,3.505-4.298,3.505c-2.126,0-3.904-1.521-4.304-3.531C5.008,13.49,5.008,13.49,5.008,13.49 c-0.016-0.319-0.299-0.579-0.629-0.579h-0.3c-0.33,0-0.591,0.258-0.579,0.573c0,0,0,0,0.04,0.278 c0.378,2.599,2.464,4.643,5.076,4.978v3.562c0,0.33,0.27,0.6,0.6,0.6h0.3c0.33,0,0.6-0.27,0.6-0.6V18.73 c2.557-0.33,4.613-2.286,5.051-4.809c0.057-0.328,0.061-0.411,0.061-0.411C15.243,13.18,14.985,12.91,14.655,12.91z"
            })}/>;
            i[23] = q;
            i[24] = H;
        } else {
            H = i[24];
        }
        let G;
        if (i[25] !== T || i[26] !== D || i[27] !== $ || i[28] !== H || i[29] !== M || i[30] !== A || i[31] !== W) {
            G = <svg {...babelHelpers.extends({
                viewBox: $,
                height: P,
                width: N,
                preserveAspectRatio: "xMidYMid meet"
            }, M, {
                version: "1.1",
                x: "0px",
                y: "0px",
                enableBackground: "new 0 0 19 26",
                children: [
                    A,
                    W,
                    H
                ]
            })}/>;
            i[25] = T;
            i[26] = D;
            i[27] = $;
            i[28] = H;
            i[29] = M;
            i[30] = A;
            i[31] = W;
            i[32] = G;
        } else {
            G = i[32];
        }
        let z;
        if (i[33] !== _ || i[34] !== x || i[35] !== G) {
            z = c.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({
                name: x
            }, _, {
                children: G
            }));
            i[33] = _;
            i[34] = x;
            i[35] = G;
            i[36] = z;
        } else {
            z = i[36];
        }
        return z;
    }
    l.PttStatusIconStyleable = m;
}, 98);