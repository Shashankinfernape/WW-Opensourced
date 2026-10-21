__d("WAWebWrapperTailIcon.react", [
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
    const s = [
        "height",
        "iconXstyle",
        "innerStyles",
        "name",
        "viewBox",
        "width"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = "tail-in";
    const p = "tail-out";
    function _(t) {
        const n = o("react-compiler-runtime").c(28);
        let a;
        let i;
        let l;
        let s;
        let c;
        let p;
        if (n[0] !== t) {
            const { height, iconXstyle, innerStyles, name, viewBox, width } = t;
            const b = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a = height;
            l = iconXstyle;
            i = name;
            c = viewBox;
            p = width;
            s = b;
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = s;
            n[5] = c;
            n[6] = p;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            s = n[4];
            c = n[5];
            p = n[6];
        }
        let v;
        if (c) {
            const S = c;
            const { height, width, x: x_1, y } = S;
            const I = height === undefined ? 0 : height;
            const T = width === undefined ? 0 : width;
            const D = x_1 === undefined ? 0 : x_1;
            const x = y === undefined ? 0 : y;
            let $;
            if (n[7] !== I || n[8] !== T || n[9] !== D || n[10] !== x) {
                $ = [
                    D,
                    x,
                    T,
                    I
                ];
                n[7] = I;
                n[8] = T;
                n[9] = D;
                n[10] = x;
                n[11] = $;
            } else {
                $ = n[11];
            }
            v = $.join(" ");
        }
        let P = 13;
        let N = 8;
        if (a != null || p != null) {
            P = a;
            N = p;
        }
        const M = i ?? m;
        const w = v ?? "0 0 8 13";
        const A = P;
        const F = N;
        let O;
        if (n[12] !== l) {
            O = (u || (u = r("stylex"))).props(l);
            n[12] = l;
            n[13] = O;
        } else {
            O = n[13];
        }
        const B = i ?? m;
        let W;
        if (n[14] !== B) {
            W = <title>{B}</title>;
            n[14] = B;
            n[15] = W;
        } else {
            W = n[15];
        }
        let q;
        let U;
        if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
            q = <path className="x5eawxs" fill="#0000000" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"/>;
            U = <path fill="currentColor" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"/>;
            n[16] = q;
            n[17] = U;
        } else {
            q = n[16];
            U = n[17];
        }
        let V;
        if (n[18] !== P || n[19] !== N || n[20] !== w || n[21] !== O || n[22] !== W) {
            V = <svg {...babelHelpers.extends({
                viewBox: w,
                height: A,
                width: F,
                preserveAspectRatio: "xMidYMid meet"
            }, O, {
                version: "1.1",
                x: "0px",
                y: "0px",
                enableBackground: "new 0 0 8 13",
                children: [
                    W,
                    q,
                    U
                ]
            })}/>;
            n[18] = P;
            n[19] = N;
            n[20] = w;
            n[21] = O;
            n[22] = W;
            n[23] = V;
        } else {
            V = n[23];
        }
        let H;
        if (n[24] !== s || n[25] !== M || n[26] !== V) {
            H = d.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({
                name: M
            }, s, {
                children: V
            }));
            n[24] = s;
            n[25] = M;
            n[26] = V;
            n[27] = H;
        } else {
            H = n[27];
        }
        return H;
    }
    function f(e) {
        const t = o("react-compiler-runtime").c(28);
        let n;
        let a;
        let i;
        let l;
        let c;
        let m;
        if (t[0] !== e) {
            const { height, iconXstyle, innerStyles, name, viewBox, width } = e;
            const b = babelHelpers.objectWithoutPropertiesLoose(e, s);
            n = height;
            i = iconXstyle;
            a = name;
            c = viewBox;
            m = width;
            l = b;
            t[0] = e;
            t[1] = n;
            t[2] = a;
            t[3] = i;
            t[4] = l;
            t[5] = c;
            t[6] = m;
        } else {
            n = t[1];
            a = t[2];
            i = t[3];
            l = t[4];
            c = t[5];
            m = t[6];
        }
        let v;
        if (c) {
            const S = c;
            const { height, width, x: x_1, y } = S;
            const I = height === undefined ? 0 : height;
            const T = width === undefined ? 0 : width;
            const D = x_1 === undefined ? 0 : x_1;
            const x = y === undefined ? 0 : y;
            let $;
            if (t[7] !== I || t[8] !== T || t[9] !== D || t[10] !== x) {
                $ = [
                    D,
                    x,
                    T,
                    I
                ];
                t[7] = I;
                t[8] = T;
                t[9] = D;
                t[10] = x;
                t[11] = $;
            } else {
                $ = t[11];
            }
            v = $.join(" ");
        }
        let P = 13;
        let N = 8;
        if (n != null || m != null) {
            P = n;
            N = m;
        }
        const M = a ?? p;
        const w = v ?? "0 0 8 13";
        const A = P;
        const F = N;
        let O;
        if (t[12] !== i) {
            O = (u || (u = r("stylex"))).props(i);
            t[12] = i;
            t[13] = O;
        } else {
            O = t[13];
        }
        const B = a ?? p;
        let W;
        if (t[14] !== B) {
            W = <title>{B}</title>;
            t[14] = B;
            t[15] = W;
        } else {
            W = t[15];
        }
        let q;
        let U;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            q = <path className="x5eawxs" d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"/>;
            U = <path fill="currentColor" d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"/>;
            t[16] = q;
            t[17] = U;
        } else {
            q = t[16];
            U = t[17];
        }
        let V;
        if (t[18] !== P || t[19] !== N || t[20] !== w || t[21] !== O || t[22] !== W) {
            V = <svg {...babelHelpers.extends({
                viewBox: w,
                height: A,
                width: F,
                preserveAspectRatio: "xMidYMid meet"
            }, O, {
                version: "1.1",
                x: "0px",
                y: "0px",
                enableBackground: "new 0 0 8 13",
                children: [
                    W,
                    q,
                    U
                ]
            })}/>;
            t[18] = P;
            t[19] = N;
            t[20] = w;
            t[21] = O;
            t[22] = W;
            t[23] = V;
        } else {
            V = t[23];
        }
        let H;
        if (t[24] !== l || t[25] !== M || t[26] !== V) {
            H = d.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({
                name: M
            }, l, {
                children: V
            }));
            t[24] = l;
            t[25] = M;
            t[26] = V;
            t[27] = H;
        } else {
            H = t[27];
        }
        return H;
    }
    l.MessageTailInIcon = _;
    l.MessageTailOutIcon = f;
}, 98);