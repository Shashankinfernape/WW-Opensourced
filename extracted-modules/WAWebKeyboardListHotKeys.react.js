__d("WAWebKeyboardListHotKeys.react", [
    "WALogger",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebUim",
    "WAWebUimUie.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebIsKeyboardUser"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useRef } = d;
    const _ = "focusable-list-item";
    function f(t) {
        const a = o("react-compiler-runtime").c(48);
        const { "aria-label": aria_label, children, className, dataTab, getDefaultFocusItem, getPriorityFocusItem, handlers, onBeforeEnd, removeTabIndexFocusInside, role, tabIndex } = t;
        const L = tabIndex === undefined ? 0 : tabIndex;
        const E = r("useWAWebIsKeyboardUser")();
        const E_isKeyboardUser = E.isKeyboardUser;
        const IRef = useRef(null);
        const TRef = useRef(null);
        const DRef = useRef(null);
        const xRef = useRef(false);
        const $RefRef = useRef(false);
        const PRef = useRef(false);
        let N;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            N = function() {
                if (IRef.current) {
                    return Array.from(IRef.current.getElementsByClassName(_));
                }
                return [];
            };
            a[0] = N;
        } else {
            N = a[0];
        }
        const M = N;
        let w;
        if (a[1] !== getPriorityFocusItem) {
            w = function(t) {
                const e = getPriorityFocusItem?.();
                if (e && e === t) {
                    PRef.current = true;
                }
                r("WAWebFocusTracer").focus(t, {
                    preventScroll: false
                });
            };
            a[1] = getPriorityFocusItem;
            a[2] = w;
        } else {
            w = a[2];
        }
        const A = w;
        let F;
        if (a[3] !== A || a[4] !== getDefaultFocusItem) {
            F = function(n) {
                const t = M();
                if (t.length !== 0) {
                    let r;
                    if (DRef.current) {
                        const a = t.indexOf(DRef.current);
                        if (a !== -1) {
                            if (a + n < 0) {
                                r = t[0];
                            } else {
                                r = t[a + n];
                            }
                        }
                    }
                    if (!r) {
                        const i = DRef.current ? null : getDefaultFocusItem?.(t);
                        r = i ?? t[t.length - 1];
                    }
                    const l = r;
                    if (!h(l)) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[ListHotKeys] item missing tabIndex attr"
                        ])));
                        y(l);
                    }
                    A(l);
                }
            };
            a[3] = A;
            a[4] = getDefaultFocusItem;
            a[5] = F;
        } else {
            F = a[5];
        }
        const O = F;
        let B;
        if (a[6] === Symbol.for("react.memo_cache_sentinel")) {
            B = function() {
                const e = M();
                if (e.length > 0) {
                    return e[e.length - 1];
                }
                return null;
            };
            a[6] = B;
        } else {
            B = a[6];
        }
        const W = B;
        let q;
        if (a[7] !== A || a[8] !== getPriorityFocusItem || a[9] !== onBeforeEnd) {
            q = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (onBeforeEnd) {
                        yield onBeforeEnd();
                    }
                    const e = W();
                    const t = getPriorityFocusItem?.();
                    if (t && !PRef.current) {
                        A(t);
                    } else if (e) {
                        A(e);
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            a[7] = A;
            a[8] = getPriorityFocusItem;
            a[9] = onBeforeEnd;
            a[10] = q;
        } else {
            q = a[10];
        }
        const U = q;
        let V;
        if (a[11] !== O) {
            V = function(t) {
                t.preventDefault();
                O(-1);
            };
            a[11] = O;
            a[12] = V;
        } else {
            V = a[12];
        }
        const up = V;
        let G;
        if (a[13] !== O) {
            G = function(t) {
                t.preventDefault();
                O(1);
            };
            a[13] = O;
            a[14] = G;
        } else {
            G = a[14];
        }
        const down = G;
        let j;
        if (a[15] !== U) {
            j = function(t) {
                t.preventDefault();
                U().catch(g);
            };
            a[15] = U;
            a[16] = j;
        } else {
            j = a[16];
        }
        const end = j;
        let Q;
        if (a[17] !== O) {
            Q = function() {
                O(0);
            };
            a[17] = O;
            a[18] = Q;
        } else {
            Q = a[18];
        }
        const X = Q;
        let Y;
        if (a[19] !== removeTabIndexFocusInside) {
            Y = function(t) {
                t.setAttribute("tabIndex", "0");
                if (removeTabIndexFocusInside === true) {
                    t.addEventListener("focusin", function(e) {
                        if (e.target !== t) {
                            t.setAttribute("tabIndex", "-1");
                        }
                    });
                }
                if (DRef.current && DRef.current !== t) {
                    DRef.current.setAttribute("tabIndex", "-1");
                }
                DRef.current = t;
            };
            a[19] = removeTabIndexFocusInside;
            a[20] = Y;
        } else {
            Y = a[20];
        }
        const J = Y;
        let Z;
        if (a[21] !== X || a[22] !== A || a[23] !== getDefaultFocusItem || a[24] !== getPriorityFocusItem || a[25] !== E_isKeyboardUser || a[26] !== J) {
            Z = function({ target }) {
                if (IRef.current === target) {
                    if (E_isKeyboardUser) {
                        const r = getPriorityFocusItem?.();
                        if (!$RefRef.current && r && !getDefaultFocusItem) {
                            A(r);
                        } else {
                            X();
                        }
                    }
                    TRef.current?.activate();
                } else {
                    if (target instanceof HTMLElement && target.classList.contains(_)) {
                        J(target);
                    }
                }
                xRef.current = true;
                $RefRef.current = true;
            };
            a[21] = X;
            a[22] = A;
            a[23] = getDefaultFocusItem;
            a[24] = getPriorityFocusItem;
            a[25] = E_isKeyboardUser;
            a[26] = J;
            a[27] = Z;
        } else {
            Z = a[27];
        }
        const ee = Z;
        let te;
        if (a[28] === Symbol.for("react.memo_cache_sentinel")) {
            te = function(t) {
                xRef.current = false;
            };
            a[28] = te;
        } else {
            te = a[28];
        }
        const ne = te;
        let re;
        if (a[29] === Symbol.for("react.memo_cache_sentinel")) {
            re = function() {
                if (IRef.current && !IRef.current.contains(document.activeElement)) {
                    r("WAWebFocusTracer").focus(IRef.current);
                }
            };
            a[29] = re;
        } else {
            re = a[29];
        }
        const oe = re;
        let ae;
        if (a[30] === Symbol.for("react.memo_cache_sentinel")) {
            ae = function() {
                PRef.current = false;
                if (xRef.current && DRef.current && IRef.current && !IRef.current.contains(DRef.current)) {
                    r("WAWebFocusTracer").focus(IRef.current);
                }
            };
            a[30] = ae;
        } else {
            ae = a[30];
        }
        useEffect(ae, undefined);
        let ie;
        if (a[31] !== down || a[32] !== end || a[33] !== up || a[34] !== handlers) {
            ie = babelHelpers.extends({}, handlers, {
                up,
                down,
                end,
                "command+down": end
            });
            a[31] = down;
            a[32] = end;
            a[33] = up;
            a[34] = handlers;
            a[35] = ie;
        } else {
            ie = a[35];
        }
        const le = ie;
        const requestFocus = E_isKeyboardUser ? null : oe;
        let ue;
        if (a[36] !== aria_label || a[37] !== children || a[38] !== className || a[39] !== dataTab || a[40] !== ee || a[41] !== le || a[42] !== role || a[43] !== L) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            ue = <Component tabIndex={L} handlers={le} className={className} data-tab={dataTab} onFocus={ee} onBlur={ne} ref={IRef} role={role} aria-label={aria_label}>{children}</Component>;
            a[36] = aria_label;
            a[37] = children;
            a[38] = className;
            a[39] = dataTab;
            a[40] = ee;
            a[41] = le;
            a[42] = role;
            a[43] = L;
            a[44] = ue;
        } else {
            ue = a[44];
        }
        let ce;
        if (a[45] !== requestFocus || a[46] !== ue) {
            const Component = o("WAWebUimUie.react").UIE;
            ce = <Component displayName="ListHotKeys" ref={TRef} uimState={o("WAWebUim").UIMState.PASSIVE} requestFocus={requestFocus}>{ue}</Component>;
            a[45] = requestFocus;
            a[46] = ue;
            a[47] = ce;
        } else {
            ce = a[47];
        }
        return ce;
    }
    function g(e) {
        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[ListHotKeys] END key handler failed"
        ]))).catching(r("getErrorSafe")(e)).sendLogs("list-hotkeys-end-failed");
    }
    function h(e) {
        return e.hasAttribute("tabIndex");
    }
    function y(e) {
        e.setAttribute("tabIndex", "-1");
    }
    l.LIST_FOCUSABLE_ITEM_CLASS_NAME = _;
    l.ListHotKeys = f;
}, 98);