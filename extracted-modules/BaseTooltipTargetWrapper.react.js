__d("BaseTooltipTargetWrapper.react", [
    "FocusWithinHandler.react",
    "XPlatReactEnvironment",
    "react",
    "react-compiler-runtime",
    "react-strict-dom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect: c, useRef: d, useState: m } = u;
    const p = {
        inheritAll: {
            alignContent: "x4k7w5x",
            alignItems: "x1h91t0o",
            alignSelf: "x1h9r5lt",
            display: "x1jfb8zj",
            flexBasis: "xv2umb2",
            flexDirection: "x1beo9mf",
            flexGrow: "xaigb6o",
            flexShrink: "x12ejxvf",
            height: "x3igimt",
            justifyContent: "xarpa2k",
            maxHeight: "xedcshv",
            maxWidth: "x1lytzrv",
            minHeight: "x1t2pt76",
            minWidth: "x7ja8zs",
            width: "x1qrby5j",
            $$css: true
        },
        wrapperInline: {
            display: "x3nfvp2",
            $$css: true
        }
    };
    function _(e) {
        const t = o("react-compiler-runtime").c(18);
        const { children: n, forceInlineDisplay: a, onHide: i, onShow: l, persistAfterClick: u, ref: _, tooltipIdentifier: f, xstyle: g } = e;
        const h = m(false);
        const y = h[0];
        const C = h[1];
        const b = m(false);
        const v = b[0];
        const S = b[1];
        const R = y && v;
        const L = d(R);
        let E;
        let k;
        if (t[0] !== i || t[1] !== l || t[2] !== R) {
            E = function() {
                if (L.current !== R) {
                    if (R) {
                        l();
                    } else {
                        i();
                    }
                }
                L.current = R;
                const e = function() {
                    if (!R) {
                        i();
                    }
                };
                window.addEventListener("keydown", e);
                return function() {
                    return window.removeEventListener("keydown", e);
                };
            };
            k = [
                i,
                l,
                R
            ];
            t[0] = i;
            t[1] = l;
            t[2] = R;
            t[3] = E;
            t[4] = k;
        } else {
            E = t[3];
            k = t[4];
        }
        c(E, k);
        const I = o("XPlatReactEnvironment").isWeb() ? o("react-strict-dom").html.span : o("react-strict-dom").html.div;
        const T = u !== true ? i : void 0;
        const D = a === true && p.wrapperInline;
        let x;
        if (t[5] !== D || t[6] !== g) {
            x = [
                p.inheritAll,
                D,
                g
            ];
            t[5] = D;
            t[6] = g;
            t[7] = x;
        } else {
            x = t[7];
        }
        let $;
        if (t[8] !== n) {
            const Component = r("FocusWithinHandler.react");
            $ = <Component onFocusChange={C} onFocusVisibleChange={S}>{n}</Component>;
            t[8] = n;
            t[9] = $;
        } else {
            $ = t[9];
        }
        let P;
        if (t[10] !== i || t[11] !== l || t[12] !== _ || t[13] !== T || t[14] !== x || t[15] !== $ || t[16] !== f) {
            P = <I aria-describedby={f} data-testid={void 0} onPointerEnter={l} onPointerLeave={i} onPointerUp={T} ref={_} style={x}>{$}</I>;
            t[10] = i;
            t[11] = l;
            t[12] = _;
            t[13] = T;
            t[14] = x;
            t[15] = $;
            t[16] = f;
            t[17] = P;
        } else {
            P = t[17];
        }
        return P;
    }
    l.default = _;
}, 98);