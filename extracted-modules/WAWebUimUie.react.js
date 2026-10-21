__d("WAWebUimUie.react", [
    "WAWebABProps",
    "WAWebUim",
    "WAWebUimContext",
    "WAWebUimUtils",
    "react",
    "react-compiler-runtime",
    "useStable",
    "useWAWebStableCallback",
    "useWAWebUIM",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { cloneElement: d, experimental_useEffectEvent: m, useCallback: p, useEffect: _, useImperativeHandle: f, useRef: g } = c;
    let h = null;
    function y(t) {
        const n = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const i = a.uimState;
        const l = i === void 0 ? o("WAWebUim").UIMState.ACTIVE : i;
        const s = a.requestRecentFocusOnUnmount;
        const c = s === void 0 ? true : s;
        const h = a.popable;
        const y = h === void 0 ? false : h;
        const b = a.escapable;
        const v = b === void 0 ? false : b;
        const { displayName: S, children: R, dismissOnWindowResize: L } = a;
        const E = L === void 0 ? false : L;
        const k = r("useWAWebUIM")();
        const I = C(a.requestFocus);
        const T = r("useWAWebStableCallback")(a.requestDismiss);
        const D = g(null);
        const x = p(function() {
            const e = D.current;
            if (e != null) {
                if (o("WAWebUimUtils").isCrossWindowHTMLElement(e) || e instanceof HTMLElement) {
                    return e;
                }
                return e.getElement?.();
            }
        }, []);
        const $ = r("useStable")(function() {
            const e = {
                displayName: S,
                popable: y,
                escapable: v,
                uimState: l,
                requestFocus: I,
                requestDismiss: T,
                getNode: x,
                dismissOnWindowResize: E
            };
            if (k != null) {
                return new (o("WAWebUim")).UIM(e, k);
            }
            return new (o("WAWebUim")).UIM(e);
        });
        const P = m(function() {
            $.pop(o("WAWebUim").DismissReason.LIFECYCLE, c);
            if (o("WAWebABProps").getABPropConfigValue("web_detached_dom_unmount_cleanup")) {
                D.current = null;
            }
        });
        _(function() {
            $.register();
            return P;
        }, [
            $
        ]);
        _(function() {
            $.setState(l);
        }, [
            l,
            $
        ]);
        f(n, function() {
            return {
                activate: function() {
                    $.activate();
                },
                getElement: x
            };
        });
        if (!R) {
            return null;
        }
        const N = function(t) {
            const n = (t == null || t.getComponent == null ? void 0 : t.getComponent()) ?? t;
            D.current = n;
            const r = R.ref;
            if (r) {
                if (typeof r === "function") {
                    r(n);
                } else {
                    r.current = n;
                }
            }
        };
        const M = d(R, {
            ref: N
        });
        const Component = r("WAWebUimContext").Provider;
        return <Component value={$}>{M}</Component>;
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    function C(e) {
        const t = o("react-compiler-runtime").c(9);
        const n = r("useWAWebUnmountSignal")();
        const a = g(false);
        const i = g(null);
        let l;
        if (t[0] !== e) {
            l = function() {
                if (e) {
                    if (h != null && h !== 0) {
                        self.clearTimeout(h);
                    }
                    i.current = h = self.setTimeout(function() {
                        e();
                        i.current = h = null;
                    }, 0);
                }
            };
            t[0] = e;
            t[1] = l;
        } else {
            l = t[1];
        }
        const s = l;
        let u;
        if (t[2] !== s || t[3] !== e || t[4] !== n) {
            u = function() {
                if (e && !n.aborted) {
                    s();
                } else {
                    a.current = true;
                }
            };
            t[2] = s;
            t[3] = e;
            t[4] = n;
            t[5] = u;
        } else {
            u = t[5];
        }
        const c = r("useWAWebStableCallback")(u);
        const d = m(s);
        let p;
        if (t[6] !== d) {
            p = function() {
                if (a.current) {
                    d();
                }
                return function() {
                    if (h != null && h !== 0 && i.current === h) {
                        self.clearTimeout(h);
                        h = null;
                    }
                };
            };
            t[6] = d;
            t[7] = p;
        } else {
            p = t[7];
        }
        let f;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            f = [];
            t[8] = f;
        } else {
            f = t[8];
        }
        _(p, f);
        return c;
    }
    l.UIE = y;
}, 98);