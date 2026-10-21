__d("WAWebAnimatedPillWidth.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useLayoutEffect, useRef } = u;
    const m = 200;
    const easing = "cubic-bezier(0.2, 0, 0, 1)";
    const _ = "--wa-pill-clip-edge-border-opacity";
    function f(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_children = e.children;
        const rRef = useRef(null);
        const aRef = useRef(null);
        const iRef = useRef(null);
        const lRef = useRef(null);
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = function() {
                const rRef_current = rRef.current;
                const aRef_current = aRef.current;
                if (!(rRef_current == null || aRef_current == null)) {
                    const o = aRef_current.offsetWidth;
                    const s = iRef.current;
                    iRef.current = o;
                    if (!(s == null || s === o)) {
                        const u = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
                        if (!(u || typeof rRef_current.animate !== "function")) {
                            lRef.current?.cancel();
                            rRef_current.style.overflow = "clip";
                            if (o > s) {
                                rRef_current.style.setProperty(_, "1");
                            } else {
                                rRef_current.style.removeProperty(_);
                            }
                            const c = rRef_current.animate([
                                {
                                    width: `${s}px`
                                },
                                {
                                    width: `${o}px`
                                }
                            ], {
                                duration: m,
                                easing
                            });
                            lRef.current = c;
                            const d = function() {
                                if (lRef.current === c) {
                                    rRef_current.style.overflow = "";
                                    rRef_current.style.removeProperty(_);
                                    lRef.current = null;
                                }
                            };
                            c.finished.then(d, d);
                        }
                    }
                }
            };
            t[0] = u;
        } else {
            u = t[0];
        }
        useLayoutEffect(u, undefined);
        let f;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            f = {
                className: "x3nfvp2 x1n2onr6 xt8t1vi x1xc408v x129tdwq x15urzxu x1s928wv x1j6awrg x1m1drc7 x1unh1gc x1xrz1ek x1iygr5g xfijbtm xfenqrj xgy0gl7 x19igvu xoiy6we x16ouz9t x1qj619r xsrjr5h xynf4tj xdjs2zz x1r9ni5o xvsnedh xjdmvgh xadrz72 x14a3rly xb53z11 xkq19qu x2q1x1w"
            };
            t[1] = f;
        } else {
            f = t[1];
        }
        let g;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            g = {
                className: "xrvj5dj x1iyjqo2 x2lah0s x1y6fwsi"
            };
            t[2] = g;
        } else {
            g = t[2];
        }
        let h;
        if (t[3] !== e_children) {
            h = <div {...babelHelpers.extends({
                ref: rRef,
                "data-testid": "chat_list_filter_pill_width_animator"
            }, f, {
                children: <div {...babelHelpers.extends({
                    ref: aRef
                }, g, {
                    children: e_children
                })}/>
            })}/>;
            t[3] = e_children;
            t[4] = h;
        } else {
            h = t[4];
        }
        return h;
    }
    l.default = f;
}, 98);