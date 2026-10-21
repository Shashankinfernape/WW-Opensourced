__d("useCometRouterLinkShimEventHandlers", [
    "CometGHLRenderingContext",
    "ReactDOM",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useContext, useState } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(14);
        const { onContextMenu, onHoverStart, onPress, shimmed } = e;
        const s = useContext(r("CometGHLRenderingContext"));
        const d = useState(s);
        const useOrigHref = d[0];
        const p = d[1];
        let _;
        if (t[0] !== onContextMenu || t[1] !== useOrigHref) {
            _ = function(t) {
                onContextMenu?.(t);
                if (useOrigHref) {
                    o("ReactDOM").flushSync(function() {
                        p(false);
                    });
                }
            };
            t[0] = onContextMenu;
            t[1] = useOrigHref;
            t[2] = _;
        } else {
            _ = t[2];
        }
        const f = _;
        let g;
        if (t[3] !== onPress || t[4] !== useOrigHref) {
            g = function(t) {
                onPress?.(t);
                if (useOrigHref) {
                    o("ReactDOM").flushSync(function() {
                        p(false);
                    });
                }
            };
            t[3] = onPress;
            t[4] = useOrigHref;
            t[5] = g;
        } else {
            g = t[5];
        }
        const h = g;
        let y;
        if (t[6] !== onHoverStart || t[7] !== shimmed) {
            y = function(t) {
                onHoverStart?.(t);
                if (shimmed === true) {
                    p(true);
                }
            };
            t[6] = onHoverStart;
            t[7] = shimmed;
            t[8] = y;
        } else {
            y = t[8];
        }
        const C = y;
        let b;
        if (t[9] !== f || t[10] !== C || t[11] !== h || t[12] !== useOrigHref) {
            b = {
                onContextMenu: f,
                onHoverStart: C,
                onPress: h,
                useOrigHref
            };
            t[9] = f;
            t[10] = C;
            t[11] = h;
            t[12] = useOrigHref;
            t[13] = b;
        } else {
            b = t[13];
        }
        return b;
    }
    l.default = d;
}, 98);