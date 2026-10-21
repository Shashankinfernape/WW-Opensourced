__d("useResizeObserver", [
    "DOMRectReadOnly",
    "FBLogger",
    "getErrorSafe",
    "gkx",
    "react",
    "react-compiler-runtime",
    "resize-observer-polyfill-deprecated",
    "uniqueID"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useLayoutEffect, useRef } = s;
    function m(e) {
        const t = o("react-compiler-runtime").c(4);
        const nRef = useRef(null);
        const rRef = useRef(e);
        let a;
        let i;
        if (t[0] !== e) {
            a = function() {
                rRef.current = e;
            };
            i = [
                e
            ];
            t[0] = e;
            t[1] = a;
            t[2] = i;
        } else {
            a = t[1];
            i = t[2];
        }
        useLayoutEffect(a, i);
        let l;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = function(t) {
                const e = function(t, n, o) {
                    if (rRef.current) {
                        rRef.current(t, n, o);
                    }
                };
                const o = t == null ? null : h(t, e);
                if (nRef.current) {
                    nRef.current();
                }
                nRef.current = o;
            };
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    let p = null;
    const _ = new Map;
    function f() {
        if (p == null) {
            p = new (r("resize-observer-polyfill-deprecated"))(g);
        }
        return p;
    }
    function g(e) {
        const t = new Map;
        const n = new Map;
        const o = new Map;
        for (const a of e){
            let i = a.contentRect;
            if (r("gkx")("20942")) {
                const l = t.get(a.target);
                if (l == null) {
                    const s = E(a.target);
                    t.set(a.target, s);
                    i = s;
                } else {
                    i = l;
                }
            }
            n.set(a.target, i);
            const u = {
                target: a.target,
                contentRect: a.contentRect,
                borderBoxSize: a.borderBoxSize,
                contentBoxSize: a.contentBoxSize,
                devicePixelContentBoxSize: a.devicePixelContentBoxSize
            };
            o.set(a.target, u);
        }
        const c = new Set(_.keys());
        for (const [m, p] of n){
            const f = _.get(m);
            if (f != null) {
                for (const g of f){
                    const h = g[1];
                    try {
                        h(p, m, o);
                    } catch (error) {
                        r("FBLogger")("useResizeObserver").catching(r("getErrorSafe")(error)).warn("Resize observer callback failed");
                    }
                }
            } else {
                if (!c.has(m)) {
                    r("FBLogger")("useResizeObserver").mustfix("ResizeObserver observed resizing of an element that it should not be observing");
                }
            }
        }
    }
    function h(e, t) {
        const o = r("uniqueID")();
        const a = _.get(e) ?? new Map;
        a.set(o, t);
        _.set(e, a);
        f().observe(e);
        return y(e, o);
    }
    function y(e, t) {
        return function() {
            const n = _.get(e);
            if (n != null) {
                n.delete(t);
                if (n.size === 0) {
                    f().unobserve(e);
                    _.delete(e);
                }
            }
        };
    }
    function C(e) {
        return parseFloat(e) || 0;
    }
    function b(target) {
        return target?.ownerDocument?.defaultView ?? window;
    }
    const v = r("DOMRectReadOnly").fromRect();
    function S(e) {
        return {
            top: C(e.paddingTop),
            right: C(e.paddingRight),
            bottom: C(e.paddingBottom),
            left: C(e.paddingLeft)
        };
    }
    function R(e) {
        return {
            top: C(e.borderTopWidth),
            right: C(e.borderRightWidth),
            bottom: C(e.borderBottomWidth),
            left: C(e.borderLeftWidth)
        };
    }
    function L(e, ...r) {
        const t = R(e);
        return r.reduce((acc, item)=>acc + C(t[item]), 0);
    }
    function E(target) {
        const { clientWidth, clientHeight } = target;
        if (!clientWidth && !clientHeight) {
            return v;
        }
        const o = b(target).getComputedStyle(target);
        const a = S(o);
        const i = a.left + a.right;
        const l = a.top + a.bottom;
        let s = C(o.width);
        let u = C(o.height);
        if (o.boxSizing === "border-box") {
            if (Math.round(s + i) !== clientWidth) {
                s -= L(o, "left", "right") + i;
            }
            if (Math.round(u + l) !== clientHeight) {
                u -= L(o, "top", "bottom") + l;
            }
        }
        return r("DOMRectReadOnly").fromRect({
            x: a.left,
            y: a.top,
            width: s,
            height: u
        });
    }
    l.default = m;
}, 98);