__d("useWAWebAdjustableChatListWidth", [
    "WAWebAdaptiveLayoutConfig",
    "WAWebChatlistResizeHandle.react",
    "WAWebEnvironment",
    "WAWebLocalStorage",
    "react",
    "react-compiler-runtime",
    "useWAWebAdaptiveLayoutMode",
    "useWAWebWindowSize"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    const c = "chatlist_custom_width";
    const d = {
        flex: `0 0 calc(100% - ${o("WAWebAdaptiveLayoutConfig").NAVBAR_WIDTH}px)`,
        width: "100%",
        maxWidth: "100%"
    };
    const m = {
        flex: "0 0 0",
        width: "0%",
        maxWidth: "0%",
        display: "none"
    };
    function p(e, t) {
        const n = t && e >= o("WAWebAdaptiveLayoutConfig").WIDE_BREAKPOINT_PX;
        const r = o("WAWebAdaptiveLayoutConfig").MIN_CONVERSATION_WIDTH + (n ? o("WAWebAdaptiveLayoutConfig").MIN_RIGHT_DRAWER_WIDTH : 0);
        const a = e - r;
        const i = e / 2;
        return Math.max(o("WAWebAdaptiveLayoutConfig").MIN_CHATLIST_WIDTH, Math.min(i, a));
    }
    function _(e, t, n) {
        if (e == null) {
            return null;
        }
        if (!e.endsWith("%")) {
            return e;
        }
        const r = parseFloat(e);
        if (!Number.isFinite(r) || t <= 0) {
            return e;
        }
        const a = r / 100 * t;
        const i = Math.min(n, Math.max(o("WAWebAdaptiveLayoutConfig").MIN_CHATLIST_WIDTH, a));
        if (Math.abs(i - a) < 0.5) {
            return e;
        }
        return `${Math.round(i)}px`;
    }
    function F8Component(e) {
        const t = o("react-compiler-runtime").c(4);
        const { isEnabled, maxWidth, onResizeEnd, onResizeReset } = e;
        if (!isEnabled) {
            return null;
        }
        let u;
        if (t[0] !== maxWidth || t[1] !== onResizeEnd || t[2] !== onResizeReset) {
            const Component = r("WAWebChatlistResizeHandle.react");
            u = <Component onResizeReset={onResizeReset} onResizeEnd={onResizeEnd} minWidth={o("WAWebAdaptiveLayoutConfig").MIN_CHATLIST_WIDTH} maxWidth={maxWidth}/>;
            t[0] = maxWidth;
            t[1] = onResizeEnd;
            t[2] = onResizeReset;
            t[3] = u;
        } else {
            u = t[3];
        }
        return u;
    }
    function g(e, t) {
        const n = o("react-compiler-runtime").c(22);
        const isWindows = r("WAWebEnvironment").isWindows;
        const i = isWindows;
        const mode = r("useWAWebAdaptiveLayoutMode")();
        const g = r("useWAWebWindowSize")();
        const g_width = g.width;
        let y;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            y = function() {
                const e = r("WAWebLocalStorage") == null ? undefined : r("WAWebLocalStorage").getItem(c);
                if (e == null || !i) {
                    return null;
                }
                return e;
            };
            n[0] = y;
        } else {
            y = n[0];
        }
        const C = e_useState(y);
        const b = C[0];
        const v = C[1];
        let S;
        let R;
        if (n[1] !== b || n[2] !== e || n[3] !== g_width) {
            S = p(g_width, e);
            R = _(b, g_width, S);
            n[1] = b;
            n[2] = e;
            n[3] = g_width;
            n[4] = S;
            n[5] = R;
        } else {
            S = n[4];
            R = n[5];
        }
        const L = R;
        let E;
        if (n[6] !== L) {
            E = L == null ? {} : {
                flex: `0 0 ${L}`,
                width: `${L}`,
                maxWidth: `${L}`
            };
            n[6] = L;
            n[7] = E;
        } else {
            E = n[7];
        }
        const k = E;
        let I;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            I = {};
            n[8] = I;
        } else {
            I = n[8];
        }
        const T = I;
        const D = L != null ? `calc(100% - max(${o("WAWebAdaptiveLayoutConfig").MIN_CHATLIST_WIDTH + o("WAWebAdaptiveLayoutConfig").NAVBAR_WIDTH}px, ${L} + ${o("WAWebAdaptiveLayoutConfig").NAVBAR_WIDTH}px))` : `calc(100% - clamp(${o("WAWebAdaptiveLayoutConfig").MIN_CHATLIST_WIDTH}px, 1200%/35, ${o("WAWebAdaptiveLayoutConfig").HYBRID_CHATLIST_MAX_WIDTH_PX}px) - ${o("WAWebAdaptiveLayoutConfig").NAVBAR_WIDTH}px)`;
        const flex = `0 0 ${D}`;
        const $ = `${D}`;
        const P = `${D}`;
        let N;
        if (n[9] !== flex || n[10] !== $ || n[11] !== P) {
            N = {
                flex,
                width: $,
                maxWidth: P,
                position: "absolute",
                insetInlineEnd: 0,
                height: "100%"
            };
            n[9] = flex;
            n[10] = $;
            n[11] = P;
            n[12] = N;
        } else {
            N = n[12];
        }
        const M = N;
        const w = t != null ? m : d;
        const leftDrawerStyle = i && mode === "narrow" ? w : k;
        const rightDrawerStyle = i && mode === "mid" && e ? M : T;
        let O;
        if (n[13] === Symbol.for("react.memo_cache_sentinel")) {
            O = function(t) {
                const window_innerWidth = window.innerWidth;
                const n = t / window_innerWidth * 100;
                const o = `${n.toFixed(2)}%`;
                v(o);
                if (r("WAWebLocalStorage") != null) {
                    r("WAWebLocalStorage").setItem(c, o);
                }
            };
            n[13] = O;
        } else {
            O = n[13];
        }
        const B = O;
        let W;
        if (n[14] === Symbol.for("react.memo_cache_sentinel")) {
            W = function() {
                v(null);
                if (r("WAWebLocalStorage") != null) {
                    r("WAWebLocalStorage").removeItem(c);
                }
            };
            n[14] = W;
        } else {
            W = n[14];
        }
        const onResizeReset = W;
        let resizeHandle;
        if (n[15] !== S) {
            resizeHandle = <F8Component onResizeReset={onResizeReset} isEnabled={i} maxWidth={S} onResizeEnd={B}/>;
            n[15] = S;
            n[16] = resizeHandle;
        } else {
            resizeHandle = n[16];
        }
        let V;
        if (n[17] !== leftDrawerStyle || n[18] !== mode || n[19] !== rightDrawerStyle || n[20] !== resizeHandle) {
            V = {
                leftDrawerStyle,
                rightDrawerStyle,
                mode,
                resizeHandle
            };
            n[17] = leftDrawerStyle;
            n[18] = mode;
            n[19] = rightDrawerStyle;
            n[20] = resizeHandle;
            n[21] = V;
        } else {
            V = n[21];
        }
        return V;
    }
    l.CHATLIST_CUSTOM_WIDTH_LS_KEY = c;
    l.useAdjustableChatListWidth = g;
}, 98);