__d("WAWebBotFileCardLayout.react", [
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        card: {
            backgroundColor: "x4wrhlh",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        }
    };
    function DComponent(t) {
        const n = o("react-compiler-runtime").c(30);
        const { action, ariaLabel, details, icon, preview, testid, title, xstyle } = t;
        let f;
        if (n[0] !== xstyle) {
            f = (e || (e = r("stylex"))).props(c.card, xstyle);
            n[0] = xstyle;
            n[1] = f;
        } else {
            f = n[1];
        }
        const g = ariaLabel ?? undefined;
        const h = ariaLabel != null ? "group" : undefined;
        let y;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                className: "x6s0dn4 x1s70e7g x78zum5 x1q0g3np x1xrf6ya xde1mab xscbp6u x1iw51ew"
            };
            n[2] = y;
        } else {
            y = n[2];
        }
        const C = `${testid}_info`;
        let b;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "x78zum5 x2lah0s"
            };
            n[3] = b;
        } else {
            b = n[3];
        }
        const v = `${testid}_icon`;
        let S;
        if (n[4] !== icon || n[5] !== v) {
            S = <div {...babelHelpers.extends({}, b, {
                "data-testid": v,
                children: icon
            })}/>;
            n[4] = icon;
            n[5] = v;
            n[6] = S;
        } else {
            S = n[6];
        }
        let R;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            R = {
                className: "x78zum5 xdt5ytf x1iyjqo2 xeuugli x1b73lln"
            };
            n[7] = R;
        } else {
            R = n[7];
        }
        const L = `${testid}_text`;
        const E = `${testid}_title`;
        let k;
        if (n[8] !== E || n[9] !== title) {
            const Component = r("WDSText.react");
            k = <Component colorName="contentDefault" dir="auto" maxLines={1} testid={E} type="Body1">{title}</Component>;
            n[8] = E;
            n[9] = title;
            n[10] = k;
        } else {
            k = n[10];
        }
        let I;
        if (n[11] !== details || n[12] !== testid) {
            const Component = r("WDSText.react");
            I = details != null && <Component colorName="contentDeemphasized" maxLines={1} testid={`${testid}_details`} type="Body3">{details}</Component>;
            n[11] = details;
            n[12] = testid;
            n[13] = I;
        } else {
            I = n[13];
        }
        let T;
        if (n[14] !== L || n[15] !== k || n[16] !== I) {
            T = <div {...babelHelpers.extends({}, R, {
                "data-testid": L,
                children: [
                    k,
                    I
                ]
            })}/>;
            n[14] = L;
            n[15] = k;
            n[16] = I;
            n[17] = T;
        } else {
            T = n[17];
        }
        let D;
        if (n[18] !== action || n[19] !== T || n[20] !== C || n[21] !== S) {
            D = <div {...babelHelpers.extends({}, y, {
                "data-testid": C,
                children: [
                    S,
                    T,
                    action
                ]
            })}/>;
            n[18] = action;
            n[19] = T;
            n[20] = C;
            n[21] = S;
            n[22] = D;
        } else {
            D = n[22];
        }
        let x;
        if (n[23] !== preview || n[24] !== f || n[25] !== D || n[26] !== g || n[27] !== h || n[28] !== testid) {
            x = <div {...babelHelpers.extends({}, f, {
                "aria-label": g,
                "data-testid": testid,
                role: h,
                children: [
                    preview,
                    D
                ]
            })}/>;
            n[23] = preview;
            n[24] = f;
            n[25] = D;
            n[26] = g;
            n[27] = h;
            n[28] = testid;
            n[29] = x;
        } else {
            x = n[29];
        }
        return x;
    }
    l.default = DComponent;
}, 98);