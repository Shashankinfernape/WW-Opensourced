__d("BaseHeading.react", [
    "BaseHeadingContext",
    "BaseTextContext",
    "FBLogger",
    "XPlatReactUserAgent",
    "gkx",
    "react",
    "react-compiler-runtime",
    "react-strict-dom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useContext, useMemo } = u;
    const m = r("XPlatReactUserAgent").isBrowser("Chrome < 83") || r("XPlatReactUserAgent").isBrowser("Safari < 14.1") || r("XPlatReactUserAgent").isBrowser("Firefox < 69");
    const p = {
        oldBrowsers: {
            boxShadow: "x1gnnqk1 x59fq91",
            $$css: true
        },
        root: {
            color: "x1heor9g",
            fontSize: "x1qlqyl8",
            fontWeight: "x1pd3egz",
            outline: "x1a2a7pz",
            $$css: true
        },
        rootGated: {
            boxShadow: "x1gnnqk1 xpx8ijz xq7l91r",
            $$css: true
        }
    };
    const _ = {
        1: o("react-strict-dom").html.h1,
        2: o("react-strict-dom").html.h2,
        3: o("react-strict-dom").html.h3,
        4: o("react-strict-dom").html.h4,
        5: o("react-strict-dom").html.h5,
        6: o("react-strict-dom").html.h6
    };
    function f(e) {
        const t = o("react-compiler-runtime").c(12);
        const { children, id, isPrimaryHeading, ref, suppressHydrationWarning, testid, xstyle } = e;
        const g = isPrimaryHeading === undefined ? false : isPrimaryHeading;
        const h = useContext(r("BaseHeadingContext"));
        let y;
        e: {
            if (g) {
                y = o("react-strict-dom").html.h1;
                break e;
            }
            const C = Math.max(Math.min(h, 6), 2);
            y = _[`${C}`];
        }
        const B = y;
        if (B == null) {
            throw r("FBLogger")("comet_ui").mustfixThrow("Failed to retrieve a heading tag, this should not be possible");
        }
        const v = o("BaseTextContext").useBaseTextContext();
        const S = v?.nested === true;
        let R;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            R = r("gkx")("8029") ? [
                p.rootGated,
                m && p.oldBrowsers
            ] : [];
            t[0] = R;
        } else {
            R = t[0];
        }
        const L = R;
        const E = S ? undefined : "auto";
        let k;
        if (t[1] !== xstyle) {
            k = [
                p.root
            ].concat(L, [
                [
                    xstyle
                ]
            ]);
            t[1] = xstyle;
            t[2] = k;
        } else {
            k = t[2];
        }
        let I;
        if (t[3] !== B || t[4] !== children || t[5] !== id || t[6] !== ref || t[7] !== suppressHydrationWarning || t[8] !== E || t[9] !== k || t[10] !== testid) {
            I = <B data-testid={undefined} dir={E} id={id} ref={ref} style={k} suppressHydrationWarning={suppressHydrationWarning}>{children}</B>;
            t[3] = B;
            t[4] = children;
            t[5] = id;
            t[6] = ref;
            t[7] = suppressHydrationWarning;
            t[8] = E;
            t[9] = k;
            t[10] = testid;
            t[11] = I;
        } else {
            I = t[11];
        }
        return I;
    }
    l.default = f;
}, 98);