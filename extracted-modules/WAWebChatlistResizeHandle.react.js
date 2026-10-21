__d("WAWebChatlistResizeHandle.react", [
    "fbt",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useHoverState"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useRef, useState } = d;
    const _ = 24;
    const f = 8;
    const g = {
        zIndex: "x1oy9qf3",
        pointerEvents: "x47corl",
        position: "x10l6tqk",
        width: "x1xc55vz",
        top: "x13vifvy",
        bottom: "x1ey2m1c",
        insetInlineEnd: "xqxgn94",
        left: "",
        right: "",
        background: "xudi1rl",
        $$css: true
    };
    const h = {
        resizeIndicator: function(t) {
            return [
                g,
                {
                    "--x-insetInlineEnd": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`calc(${t}px - ${f}px)`)
                }
            ];
        }
    };
    function YComponent(e) {
        const t = o("react-compiler-runtime").c(28);
        const { maxWidth, minWidth, onResize, onResizeEnd, onResizeReset } = e;
        const dRef = useRef(0);
        const _RefRef = useRef(0);
        const fRef = useRef(null);
        const gRef = useRef(false);
        const h = useState(false);
        const y = h[0];
        const b = h[1];
        const v = useState(0);
        const offset = v[0];
        const R = v[1];
        const L = r("useHoverState")();
        const { isHovered, onMouseEnter, onMouseLeave } = L;
        let T;
        if (t[0] !== maxWidth || t[1] !== minWidth) {
            T = function(t) {
                const e = t - dRef.current;
                return Math.max(minWidth, Math.min(maxWidth, _RefRef.current + e));
            };
            t[0] = maxWidth;
            t[1] = minWidth;
            t[2] = T;
        } else {
            T = t[2];
        }
        const D = T;
        let x;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            x = function(t) {
                if (t.button === 0) {
                    t.preventDefault();
                    gRef.current = true;
                    b(true);
                    const e = t.currentTarget;
                    e.setPointerCapture(t.pointerId);
                    dRef.current = t.clientX;
                    const n = e.parentElement;
                    if (n) {
                        _RefRef.current = n.getBoundingClientRect().width;
                    }
                }
            };
            t[3] = x;
        } else {
            x = t[3];
        }
        const onPointerDown = x;
        let P;
        if (t[4] !== D || t[5] !== onResize) {
            P = function(t) {
                if (gRef.current) {
                    const e = D(t.clientX);
                    R(_RefRef.current - e);
                    onResize?.(e);
                }
            };
            t[4] = D;
            t[5] = onResize;
            t[6] = P;
        } else {
            P = t[6];
        }
        const onPointerMove = P;
        let M;
        if (t[7] !== D || t[8] !== onResizeEnd) {
            M = function(t) {
                const t_currentTarget = t.currentTarget;
                if (t_currentTarget.hasPointerCapture(t.pointerId)) {
                    t_currentTarget.releasePointerCapture(t.pointerId);
                }
                const n = D(t.clientX);
                onResizeEnd?.(n);
                gRef.current = false;
                b(false);
                R(0);
            };
            t[7] = D;
            t[8] = onResizeEnd;
            t[9] = M;
        } else {
            M = t[9];
        }
        const onPointerUp = M;
        let A;
        if (t[10] !== onPointerUp) {
            A = function(t) {
                if (gRef.current) {
                    onPointerUp(t);
                }
            };
            t[10] = onPointerUp;
            t[11] = A;
        } else {
            A = t[11];
        }
        const onPointerLeave = A;
        let O;
        if (t[12] !== offset || t[13] !== isHovered || t[14] !== y) {
            O = (y || isHovered) && <C offset={offset}/>;
            t[12] = offset;
            t[13] = isHovered;
            t[14] = y;
            t[15] = O;
        } else {
            O = t[15];
        }
        let B;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            B = {
                className: "x10l6tqk xvy4d1p x13vifvy x1ey2m1c x15z6fc2 x7eptgl x1oy9qf3"
            };
            t[16] = B;
        } else {
            B = t[16];
        }
        let W;
        if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
            W = s._("Resize the chat list panel");
            t[17] = W;
        } else {
            W = t[17];
        }
        let q;
        if (t[18] !== onPointerLeave || t[19] !== onPointerMove || t[20] !== onPointerUp || t[21] !== onMouseEnter || t[22] !== onMouseLeave || t[23] !== onResizeReset) {
            q = <button {...babelHelpers.extends({
                ref: fRef,
                onMouseEnter,
                onMouseLeave,
                onDoubleClick: onResizeReset
            }, B, {
                onPointerDown,
                onPointerMove,
                onPointerUp,
                onPointerLeave,
                "aria-label": W,
                "data-testid": "chatlist-resize-handle"
            })}/>;
            t[18] = onPointerLeave;
            t[19] = onPointerMove;
            t[20] = onPointerUp;
            t[21] = onMouseEnter;
            t[22] = onMouseLeave;
            t[23] = onResizeReset;
            t[24] = q;
        } else {
            q = t[24];
        }
        let U;
        if (t[25] !== O || t[26] !== q) {
            U = <>{O}{q}</>;
            t[25] = O;
            t[26] = q;
            t[27] = U;
        } else {
            U = t[27];
        }
        return U;
    }
    function C(t) {
        const n = o("react-compiler-runtime").c(4);
        const t_offset = t.offset;
        let i;
        if (n[0] !== t_offset) {
            i = (e || (e = r("stylex"))).props(h.resizeIndicator(t_offset));
            n[0] = t_offset;
            n[1] = i;
        } else {
            i = n[1];
        }
        let l;
        if (n[2] !== i) {
            l = <div {...babelHelpers.extends({}, i, {
                "data-testid": "chatlist-resize-indicator"
            })}/>;
            n[2] = i;
            n[3] = l;
        } else {
            l = n[3];
        }
        return l;
    }
    l.default = YComponent;
}, 226);