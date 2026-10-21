__d("BaseImage.react", [
    "CometSSRPreloadImageCollection",
    "ExecutionEnvironment",
    "ReactDOM",
    "RecoverableViolationWithComponentStack.react",
    "gkx",
    "mergeRefs",
    "react",
    "react-compiler-runtime",
    "stylex",
    "testID"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref",
        "alt",
        "aria-labelledby",
        "elementtiming",
        "isDecorative",
        "objectFit",
        "onLoad",
        "referrerPolicy",
        "sizes",
        "src",
        "srcSet",
        "testid",
        "variant",
        "xstyle"
    ];
    let s;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useMemo, useRef } = m;
    const g = {
        contain: {
            objectFit: "x19kjcj4",
            $$css: true
        },
        cover: {
            objectFit: "xl1xv1r",
            $$css: true
        },
        fill: {
            objectFit: "xz74otr",
            $$css: true
        }
    };
    function h($RefRef, t) {
        const n = o("react-compiler-runtime").c(3);
        let a;
        if (n[0] !== t || n[1] !== $RefRef) {
            a = r("mergeRefs")($RefRef, t);
            n[0] = t;
            n[1] = $RefRef;
            n[2] = a;
        } else {
            a = n[2];
        }
        return a;
    }
    function y(t) {
        const a = o("react-compiler-runtime").c(40);
        let i;
        let elementtiming;
        let c;
        let m;
        let _;
        let onLoad;
        let C;
        let b;
        let v;
        let S;
        let R;
        let L;
        let E;
        let k;
        let I;
        if (a[0] !== t) {
            c = t.ref;
            S = t.alt;
            i = t["aria-labelledby"];
            elementtiming = t.elementtiming;
            _ = t.isDecorative;
            R = t.objectFit;
            onLoad = t.onLoad;
            L = t.referrerPolicy;
            C = t.sizes;
            b = t.src;
            v = t.srcSet;
            E = t.testid;
            k = t.variant;
            I = t.xstyle;
            m = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = i;
            a[2] = elementtiming;
            a[3] = c;
            a[4] = m;
            a[5] = _;
            a[6] = onLoad;
            a[7] = C;
            a[8] = b;
            a[9] = v;
            a[10] = S;
            a[11] = R;
            a[12] = L;
            a[13] = E;
            a[14] = k;
            a[15] = I;
        } else {
            i = a[1];
            elementtiming = a[2];
            c = a[3];
            m = a[4];
            _ = a[5];
            onLoad = a[6];
            C = a[7];
            b = a[8];
            v = a[9];
            S = a[10];
            R = a[11];
            L = a[12];
            E = a[13];
            k = a[14];
            I = a[15];
        }
        const T = S === undefined ? "" : S;
        const D = R === undefined ? "fill" : R;
        const referrerPolicy = L === undefined ? "origin-when-cross-origin" : L;
        const $RefRef = useRef(null);
        const P = h($RefRef, c);
        if (!(s || (s = r("ExecutionEnvironment"))).canUseDOM && b) {
            if (r("gkx")("9159")) {
                o("ReactDOM").preload(b, {
                    as: "image",
                    imageSizes: C,
                    imageSrcSet: v
                });
            } else {
                o("CometSSRPreloadImageCollection").addImage(b);
            }
        }
        let N;
        let M;
        if (a[16] !== onLoad) {
            N = function() {
                const $Ref_current = $RefRef.current;
                if (onLoad != null && $Ref_current != null && $Ref_current.complete) {
                    onLoad();
                }
            };
            M = [
                onLoad
            ];
            a[16] = onLoad;
            a[17] = N;
            a[18] = M;
        } else {
            N = a[17];
            M = a[18];
        }
        useEffect(N, M);
        if (b === "") {
            let w;
            if (a[19] === Symbol.for("react.memo_cache_sentinel")) {
                w = d.jsx(r("RecoverableViolationWithComponentStack.react"), {
                    errorMessage: "Invalid src provided to image",
                    projectName: "comet_ui"
                });
                a[19] = w;
            } else {
                w = a[19];
            }
            return w;
        }
        const A = T == null || T === "";
        const F = i != null;
        const O = A && !F && _ === true ? true : undefined;
        let B;
        if (a[20] !== E) {
            B = r("testID")(E);
            a[20] = E;
            a[21] = B;
        } else {
            B = a[21];
        }
        let W;
        if (a[22] !== D || a[23] !== k?.xstyleConfig?.image || a[24] !== I) {
            W = (u || (u = r("stylex"))).props(g[D], I, k?.xstyleConfig?.image);
            a[22] = D;
            a[23] = k?.xstyleConfig?.image;
            a[24] = I;
            a[25] = W;
        } else {
            W = a[25];
        }
        let V;
        if (a[26] !== T || a[27] !== i || a[28] !== P || a[29] !== elementtiming || a[30] !== m || a[31] !== O || a[32] !== onLoad || a[33] !== referrerPolicy || a[34] !== C || a[35] !== b || a[36] !== v || a[37] !== B || a[38] !== W) {
            V = <img {...babelHelpers.extends({}, m, B, W, {
                alt: T,
                "aria-hidden": O,
                "aria-labelledby": i,
                elementtiming,
                onLoad,
                ref: P,
                referrerPolicy,
                sizes: C,
                src: b,
                srcSet: v
            })}/>;
            a[26] = T;
            a[27] = i;
            a[28] = P;
            a[29] = elementtiming;
            a[30] = m;
            a[31] = O;
            a[32] = onLoad;
            a[33] = referrerPolicy;
            a[34] = C;
            a[35] = b;
            a[36] = v;
            a[37] = B;
            a[38] = W;
            a[39] = V;
        } else {
            V = a[39];
        }
        return V;
    }
    l.default = y;
}, 98);