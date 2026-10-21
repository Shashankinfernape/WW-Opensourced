__d("useWAWebLexicalTypeAheadContainer", [
    "Lexical",
    "LexicalComposerContext",
    "WAWebPopover.react",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback",
    "useWAWebLexicalFocusState",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useDeferredValue, useEffect, useMemo, useState } = s;
    const p = 10;
    const _ = 12;
    function f(e) {
        const t = document.getSelection();
        if (!t || !t.isCollapsed) {
            return null;
        }
        const { anchorNode, anchorOffset } = t;
        if (anchorNode == null || anchorOffset == null) {
            return null;
        }
        const o = e;
        const a = document.createRange();
        try {
            a.setStart(anchorNode, o);
            a.setEnd(anchorNode, anchorOffset);
        } catch (e) {
            return null;
        }
        return a.getBoundingClientRect();
    }
    function g(e, t) {
        return e.bottom === t.bottom && e.height === t.height && e.left === t.left && e.right === t.right && e.top === t.top && e.width === t.width && e.x === t.x && e.y === t.y;
    }
    function useH(e, t) {
        const n = o("react-compiler-runtime").c(14);
        const a = o("LexicalComposerContext").useLexicalComposerContext();
        const i = a[0];
        const l = useState(null);
        const s = l[0];
        const d = l[1];
        const p = useDeferredValue(s);
        const _ = r("useWAWebDebouncedCallback")(d, 50);
        let h;
        if (n[0] !== i || n[1] !== t || n[2] !== e || n[3] !== p || n[4] !== _) {
            h = function() {
                i.getEditorState().read(function() {
                    const n = o("Lexical").$getSelection();
                    if (!o("Lexical").$isRangeSelection(n) || !n.isCollapsed()) {
                        _(null);
                        return;
                    }
                    const r = f(e);
                    if (r) {
                        if (p != null && (g(r, p) || t)) {
                            return;
                        }
                        _(r);
                        return;
                    }
                    _(null);
                });
            };
            n[0] = i;
            n[1] = t;
            n[2] = e;
            n[3] = p;
            n[4] = _;
            n[5] = h;
        } else {
            h = n[5];
        }
        const y = r("useWAWebStableCallback")(h);
        const C = r("useWAWebDebouncedCallback")(y, 100);
        let b;
        let v;
        if (n[6] !== i || n[7] !== y) {
            b = function() {
                const e = i.registerUpdateListener(y);
                return function() {
                    e();
                };
            };
            v = [
                i,
                y
            ];
            n[6] = i;
            n[7] = y;
            n[8] = b;
            n[9] = v;
        } else {
            b = n[8];
            v = n[9];
        }
        useEffect(b, v);
        let S;
        let R;
        if (n[10] !== y || n[11] !== C) {
            S = function() {
                window.addEventListener("resize", C, true);
                document.addEventListener("scroll", y, {
                    capture: true,
                    passive: true
                });
                return function() {
                    window.removeEventListener("resize", C, true);
                    document.removeEventListener("scroll", y, true);
                };
            };
            R = [
                y,
                C
            ];
            n[10] = y;
            n[11] = C;
            n[12] = S;
            n[13] = R;
        } else {
            S = n[12];
            R = n[13];
        }
        useEffect(S, R);
        return p;
    }
    function useY(e, t, n, a) {
        const i = o("LexicalComposerContext").useLexicalComposerContext();
        const l = i[0];
        const s = t === 0;
        const u = useH(e, s);
        const containerEle = useMemo(function() {
            return document.createElement("div");
        }, []);
        const f = r("useWAWebStableCallback")(function() {
            const i = !u || s;
            containerEle.className = ({
                0: "xc9l9hb x10l6tqk x1lliihq",
                1: "xc9l9hb x10l6tqk x1s85apg"
            })[!!i << 0];
            if (!(!u || i)) {
                const c = l.getRootElement();
                const d = document.scrollingElement;
                if (!(c == null || d == null)) {
                    const f = a?.current ?? null;
                    const g = f != null ? f.getBoundingClientRect() : u;
                    const { left, top } = g;
                    const C = f != null ? _ : 0;
                    containerEle.style.top = `${window.pageYOffset + top - n - p}px`;
                    let b = window.pageXOffset + left + C;
                    b -= Math.max(0, b + t - d.scrollWidth);
                    containerEle.style.left = `${b}px`;
                    containerEle.style.width = `${t}px`;
                    containerEle.style.height = `${n}px`;
                    if (!containerEle.isConnected) {
                        r("nullthrows")(document.getElementById(o("WAWebPopover.react").ANCHOR_PORTAL_ID)).append(containerEle);
                    }
                }
            }
        });
        useEffect(function() {
            f();
        }, [
            l,
            u,
            f,
            n,
            t,
            a
        ]);
        useEffect(function() {
            return function() {
                if (containerEle.isConnected) {
                    containerEle.remove();
                }
            };
        }, [
            containerEle
        ]);
        const hideContainer = r("useWAWebStableCallback")(function() {
            containerEle.className = "xc9l9hb x10l6tqk x1s85apg";
        });
        const y = r("useWAWebStableCallback")(function() {
            containerEle.className = "xc9l9hb x10l6tqk x1lliihq";
        });
        o("useWAWebLexicalFocusState").useLexicalFocusStateListener(l, function(e, t) {
            if (e) {
                y();
            } else if (!(t && t.relatedTarget instanceof HTMLElement && containerEle.contains(t.relatedTarget))) {
                hideContainer();
            }
        });
        return {
            containerEle,
            hideContainer
        };
    }
    l.useLexicalTypeAheadContainer = useY;
}, 98);