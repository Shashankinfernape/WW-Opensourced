__d("WAWebSpoilerParticlesCanvas.react", [
    "WAWebA11yUtils",
    "WAWebNoop",
    "WAWebResizeObserver",
    "WAWebSpoilerParticlesAnimation",
    "WAWebSpoilerParticlesCanvasUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebOnScreen"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useRef, useState } = u;
    const p = "--WDS-content-default";
    const _ = "#000000";
    function FComponent(e) {
        const t = o("react-compiler-runtime").c(9);
        const { dismissCoords, revealed } = e;
        const i = revealed === undefined ? false : revealed;
        const lRef = useRef(null);
        const isVisible = r("useWAWebOnScreen")(lRef, r("WAWebNoop"));
        const prefersReducedMotion = useK();
        let m;
        if (t[0] !== dismissCoords || t[1] !== isVisible || t[2] !== prefersReducedMotion || t[3] !== i) {
            m = {
                canvasRef: lRef,
                revealed: i,
                isVisible,
                prefersReducedMotion,
                dismissCoords
            };
            t[0] = dismissCoords;
            t[1] = isVisible;
            t[2] = prefersReducedMotion;
            t[3] = i;
            t[4] = m;
        } else {
            m = t[4];
        }
        useG(m);
        const p = i && (dismissCoords == null || prefersReducedMotion);
        let _;
        if (t[5] !== p) {
            _ = ({
                0: {
                    className: "x13vifvy x1o0tod x47corl x10l6tqk x1rvut6x x19991ni x9lcvmn x1hc1fzr"
                },
                1: {
                    className: "x13vifvy x1o0tod x47corl x10l6tqk x1rvut6x x19991ni x9lcvmn xg01cxk"
                }
            })[!!p << 0];
            t[5] = p;
            t[6] = _;
        } else {
            _ = t[6];
        }
        let f;
        if (t[7] !== _) {
            f = <canvas {...babelHelpers.extends({
                ref: lRef,
                "aria-hidden": true,
                "data-testid": "spoiler_particles_canvas"
            }, _)}/>;
            t[7] = _;
            t[8] = f;
        } else {
            f = t[8];
        }
        return f;
    }
    function useG(e) {
        const t = o("react-compiler-runtime").c(24);
        const { canvasRef, dismissCoords, isVisible, prefersReducedMotion, revealed } = e;
        const sRef = useRef(null);
        const uRef = useRef(null);
        const pRef = useRef(dismissCoords);
        const _RefRef = useRef(null);
        if (_RefRef.current == null) {
            const dismissing = dismissCoords != null;
            let g;
            if (t[0] !== isVisible || t[1] !== prefersReducedMotion || t[2] !== revealed || t[3] !== dismissing) {
                g = o("WAWebSpoilerParticlesCanvasUtils").shouldPlayAnimation({
                    dismissing,
                    isVisible,
                    prefersReducedMotion,
                    revealed
                });
                t[0] = isVisible;
                t[1] = prefersReducedMotion;
                t[2] = revealed;
                t[3] = dismissing;
                t[4] = g;
            } else {
                g = t[4];
            }
            _RefRef.current = g;
        }
        const RRef = useRef(revealed);
        const L = useState(null);
        const textSpan = L[0];
        const k = L[1];
        let I;
        let T;
        if (t[5] !== dismissCoords) {
            I = function() {
                pRef.current = dismissCoords;
            };
            T = [
                dismissCoords
            ];
            t[5] = dismissCoords;
            t[6] = I;
            t[7] = T;
        } else {
            I = t[6];
            T = t[7];
        }
        useEffect(I, T);
        let D;
        let x;
        if (t[8] !== canvasRef) {
            D = function() {
                const canvasRef_current = canvasRef.current;
                const t = function() {
                    return h(canvasRef, k);
                };
                t();
                return y(canvasRef_current?.parentElement, t);
            };
            x = [
                canvasRef
            ];
            t[8] = canvasRef;
            t[9] = D;
            t[10] = x;
        } else {
            D = t[9];
            x = t[10];
        }
        useEffect(D, x);
        let $;
        let P;
        if (t[11] !== canvasRef || t[12] !== textSpan) {
            $ = function() {
                const canvasRef_current = canvasRef.current;
                if (!(canvasRef_current == null || !(canvasRef_current instanceof HTMLCanvasElement) || textSpan == null)) {
                    const t = function(layout) {
                        let t;
                        const uRef_current = uRef.current;
                        const previousCanvasTranslation = uRef_current != null && uRef_current.canvas === canvasRef_current ? uRef_current.translation : {
                            x: 0,
                            y: 0
                        };
                        const a = C({
                            canvas: canvasRef_current,
                            dismissCoords: pRef.current,
                            layout,
                            previousCanvasTranslation,
                            revealed: RRef.current,
                            shouldPlay: _RefRef.current === true,
                            textSpan
                        });
                        if (a != null) {
                            if ((t = sRef.current) != null) {
                                t.animation.pause();
                            }
                            sRef.current = a;
                            uRef.current = {
                                canvas: canvasRef_current,
                                translation: a.canvasTranslation
                            };
                        }
                    };
                    const r = o("WAWebSpoilerParticlesCanvasUtils").getTextLayout(textSpan);
                    t(r);
                    const a = v(textSpan, r, t);
                    let i = null;
                    const l = function() {
                        if (i == null) {
                            i = window.requestAnimationFrame(function() {
                                i = null;
                                a();
                            });
                        }
                    };
                    const c = S(textSpan, l);
                    return function() {
                        c();
                        if (i != null) {
                            window.cancelAnimationFrame(i);
                        }
                        sRef.current?.animation.pause();
                        sRef.current = null;
                    };
                }
            };
            P = [
                canvasRef,
                textSpan
            ];
            t[11] = canvasRef;
            t[12] = textSpan;
            t[13] = $;
            t[14] = P;
        } else {
            $ = t[13];
            P = t[14];
        }
        useEffect($, P);
        let N;
        let M;
        if (t[15] !== dismissCoords) {
            N = function() {
                const sRef_current = sRef.current;
                if (!(sRef_current == null || dismissCoords == null)) {
                    b(sRef_current, dismissCoords);
                }
            };
            M = [
                dismissCoords
            ];
            t[15] = dismissCoords;
            t[16] = N;
            t[17] = M;
        } else {
            N = t[16];
            M = t[17];
        }
        useEffect(N, M);
        let w;
        let A;
        if (t[18] !== dismissCoords || t[19] !== isVisible || t[20] !== prefersReducedMotion || t[21] !== revealed) {
            A = function() {
                const e = o("WAWebSpoilerParticlesCanvasUtils").shouldPlayAnimation({
                    dismissing: dismissCoords != null,
                    isVisible,
                    prefersReducedMotion,
                    revealed
                });
                _RefRef.current = e;
                RRef.current = revealed;
                const sRef_current = sRef.current;
                if (sRef_current != null) {
                    if (e) {
                        sRef_current.animation.play();
                    } else {
                        sRef_current.animation.pause();
                    }
                }
            };
            w = [
                revealed,
                isVisible,
                prefersReducedMotion,
                dismissCoords
            ];
            t[18] = dismissCoords;
            t[19] = isVisible;
            t[20] = prefersReducedMotion;
            t[21] = revealed;
            t[22] = w;
            t[23] = A;
        } else {
            w = t[22];
            A = t[23];
        }
        useEffect(A, w);
    }
    function h(canvasRef, t) {
        const r = canvasRef.current?.previousElementSibling;
        const o = r instanceof HTMLElement ? r : null;
        t(function(e) {
            if (e === o) {
                return e;
            }
            return o;
        });
    }
    function y(e, t) {
        if (e instanceof HTMLElement) {
            const n = new MutationObserver(t);
            n.observe(e, {
                childList: true
            });
            return function() {
                return n.disconnect();
            };
        }
    }
    function C({ canvas, dismissCoords, layout, previousCanvasTranslation, revealed, shouldPlay, textSpan }) {
        if (revealed) {
            return null;
        }
        const layout_lineRects = layout.lineRects;
        const d = o("WAWebSpoilerParticlesCanvasUtils").getMeasuredLineRects({
            canvas,
            sourceRects: layout_lineRects,
            textSpan
        });
        const m = o("WAWebSpoilerParticlesCanvasUtils").getUnionRect(d);
        const f = o("WAWebSpoilerParticlesCanvasUtils").getSpoilerParticleFields(m, d);
        const animation = new (r("WAWebSpoilerParticlesAnimation"))(canvas, f);
        const h = window.getComputedStyle(canvas);
        const y = h.getPropertyValue(p).trim() || _;
        animation.setParticleColor(y);
        const C = canvas.getBoundingClientRect();
        const canvasTranslation = o("WAWebSpoilerParticlesCanvasUtils").getSpoilerParticlesCanvasTranslation(m, C, previousCanvasTranslation, h.direction === "rtl");
        animation.init(m);
        R(canvas, canvasTranslation);
        const S = {
            animation,
            canvas,
            canvasTranslation
        };
        if (dismissCoords != null) {
            b(S, dismissCoords);
        }
        if (shouldPlay) {
            animation.play();
        }
        return S;
    }
    function b({ animation, canvas }, dismissCoords) {
        const o = canvas.getBoundingClientRect();
        animation.dismiss(dismissCoords.clientX - o.left, dismissCoords.clientY - o.top);
    }
    function v(textSpan, t, n) {
        let r = t;
        return function() {
            const t = o("WAWebSpoilerParticlesCanvasUtils").getTextLayout(textSpan);
            if (t.signature !== r.signature) {
                r = t;
                n(t);
            }
        };
    }
    function S(textSpan, t) {
        const n = [];
        for (const r of o("WAWebSpoilerParticlesCanvasUtils").getResizeTargets(textSpan)){
            n.push(E(r, t));
        }
        const a = new MutationObserver(t);
        a.observe(textSpan, {
            characterData: true,
            childList: true,
            subtree: true
        });
        return function() {
            n.forEach((e)=>e());
            a.disconnect();
        };
    }
    function R(canvas, canvasTranslation) {
        canvas.style.transform = o("WAWebSpoilerParticlesCanvasUtils").getSpoilerParticlesCanvasTransform(canvasTranslation);
    }
    const L = new WeakMap;
    function E(e, t) {
        const n = L.get(e);
        if (n != null) {
            n.callbacks.add(t);
            return function() {
                n.callbacks.delete(t);
                if (n.callbacks.size === 0) {
                    n.unobserve();
                    L.delete(e);
                }
            };
        }
        const callbacks = new Set([
            t
        ]);
        const unobserve = o("WAWebResizeObserver").observe(e, function() {
            callbacks.forEach((e)=>e());
        });
        L.set(e, {
            callbacks,
            unobserve
        });
        return function() {
            callbacks.delete(t);
            if (callbacks.size === 0) {
                unobserve();
                L.delete(e);
            }
        };
    }
    function useK() {
        const e = o("react-compiler-runtime").c(2);
        const t = useState(o("WAWebA11yUtils").getPrefersReducedMotion);
        const n = t[0];
        const r = t[1];
        let a;
        let i;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function() {
                const e = window.matchMedia("(prefers-reduced-motion: reduce)");
                const t = function() {
                    return r(e.matches);
                };
                if ("addEventListener" in e) {
                    e.addEventListener("change", t);
                    return function() {
                        return e.removeEventListener("change", t);
                    };
                }
            };
            i = [];
            e[0] = a;
            e[1] = i;
        } else {
            a = e[0];
            i = e[1];
        }
        useEffect(a, i);
        return n;
    }
    l.default = FComponent;
}, 98);