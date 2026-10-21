__d("WAWebPopover.react", [
    "ReactDOM",
    "WALogger",
    "WAWebKeyboardTabUtils",
    "WAWebMutationObserver",
    "WAWebNoop",
    "WAWebPopoverArrow.react",
    "WAWebPopoverContext.react",
    "WAWebPopoverPosition",
    "WAWebUimUie.react",
    "WAWebVelocityTransition",
    "err",
    "react",
    "react-compiler-runtime",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback: m, useEffect: p, useImperativeHandle: _, useRef: f, useState: g } = d;
    const h = 24;
    const y = 24;
    const C = "wa-popovers-bucket";
    function b(e) {
        const t = o("react-compiler-runtime").c(2);
        const n = e.id;
        const r = n ?? C;
        let a;
        if (t[0] !== r) {
            a = <div id={r}/>;
            t[0] = r;
            t[1] = a;
        } else {
            a = t[1];
        }
        return a;
    }
    function v(e, t) {
        e.addEventListener("click", t);
        return function() {
            e.removeEventListener("click", t);
        };
    }
    function S({ popoverIsAnimating: t, show: n, target: r }) {
        const o = function(r) {
            r.preventDefault();
            if (!t) {
                n(r);
            }
        };
        r.addEventListener("contextmenu", o);
        return function() {
            r.removeEventListener("contextmenu", o);
        };
    }
    function R(e, t, n) {
        e.addEventListener("mouseenter", t);
        e.addEventListener("mouseleave", n);
        return function() {
            e.removeEventListener("mouseenter", t);
            e.removeEventListener("mouseleave", n);
        };
    }
    function L({ hide: t, show: n, target: r }) {
        r.addEventListener("focus", n);
        r.addEventListener("blur", t);
        return function() {
            r.removeEventListener("focus", n);
            r.removeEventListener("blur", t);
        };
    }
    function E(e, t, n, r) {
        const o = function(r) {
            return t != null && r instanceof Node && (r === t || t.contains(r) || r === e || e.contains(r));
        };
        const a = function(t) {
            if (!o(t.relatedTarget)) {
                r();
            }
        };
        e.addEventListener("mouseenter", n);
        e.addEventListener("mouseleave", a);
        t?.addEventListener("mouseleave", a);
        return function() {
            e.removeEventListener("mouseenter", n);
            e.removeEventListener("mouseleave", a);
            t?.removeEventListener("mouseleave", a);
        };
    }
    function k(e) {
        return e.current;
    }
    function I(t) {
        const a = o("react-compiler-runtime").c(113);
        let i;
        if (a[0] !== t.popoverPortal) {
            i = t.popoverPortal ?? document.getElementById(C);
            a[0] = t.popoverPortal;
            a[1] = i;
        } else {
            i = a[1];
        }
        const u = i;
        const { alignment: d, anchorToMouseCoords: m, arrowContainerXStyle: b, arrowXStyle: I, buffer: D, clampToViewport: x, controllerRef: $, enableEnterTransition: P, enableExitTransition: N, includeArrow: M, initHandling: w, openingDelay: A, position: F, target: O, testid: B } = t;
        const W = m === void 0 ? false : m;
        const q = D === void 0 ? 8 : D;
        const U = x === void 0 ? false : x;
        const V = P === void 0 ? true : P;
        const H = N === void 0 ? true : N;
        const G = o("WAWebPopoverContext.react").useWAWebPopoverControllerContext();
        let z;
        if (a[2] !== G || a[3] !== O) {
            if (O === "context") {
                if (G == null) {
                    throw r("err")('[Popover] A popover with a "context" target must be inside of a PopoverRefContext component');
                }
                z = G.targetRef;
            } else {
                z = O;
            }
            a[2] = G;
            a[3] = O;
            a[4] = z;
        } else {
            z = a[4];
        }
        const j = f(null);
        const K = g(null);
        const Q = K[0];
        const X = K[1];
        const Y = g(false);
        const J = Y[0];
        const Z = Y[1];
        const ee = g(false);
        const te = ee[0];
        const ne = ee[1];
        const re = f(null);
        let oe;
        if (a[5] !== d || a[6] !== W || a[7] !== q || a[8] !== U || a[9] !== M || a[10] !== J || a[11] !== F || a[12] !== z) {
            oe = function() {
                const t = k(z);
                const n = j.current;
                const r = re.current;
                if (!(n == null || t == null || !J)) {
                    if (W === true && r == null) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[popover] trying to anchor to mouse, but no coords are set"
                        ])));
                        return;
                    }
                    const a = o("WAWebPopoverPosition").getFixedElementPosition({
                        alignment: d,
                        arrow: M === true ? {
                            width: h,
                            height: h / 2,
                            offset: y
                        } : null,
                        buffer: q,
                        clampToViewport: U,
                        element: n,
                        position: F,
                        target: W === true && r != null ? r : t
                    });
                    const { alignment: i, arrowCoords: l, coords: s, position: u, transformOrigin: c } = a;
                    const m = c ?? o("WAWebPopoverPosition").getDefaultTransformOrigin({
                        position: u,
                        alignment: i
                    });
                    X(babelHelpers.extends({}, s, {
                        transformOrigin: m,
                        position: u,
                        alignment: i,
                        arrowCoords: l
                    }));
                }
            };
            a[5] = d;
            a[6] = W;
            a[7] = q;
            a[8] = U;
            a[9] = M;
            a[10] = J;
            a[11] = F;
            a[12] = z;
            a[13] = oe;
        } else {
            oe = a[13];
        }
        const ae = oe;
        const ie = t.onOpen;
        let le;
        if (a[14] !== ie) {
            le = function() {
                Z(true);
                ie?.();
            };
            a[14] = ie;
            a[15] = le;
        } else {
            le = a[15];
        }
        const se = le;
        const ue = o("useWAWebTimeout").useTimeout(se, A);
        const ce = ue[0];
        const de = ue[1];
        const me = t.onClose;
        let pe;
        if (a[16] !== de || a[17] !== me) {
            pe = function() {
                re.current = null;
                me?.();
                de();
                Z(false);
            };
            a[16] = de;
            a[17] = me;
            a[18] = pe;
        } else {
            pe = a[18];
        }
        const _e = pe;
        let fe;
        if (a[19] !== _e || a[20] !== w || a[21] !== te || a[22] !== J || a[23] !== ae || a[24] !== z.current) {
            fe = function() {
                const e = z.current;
                if (!(e == null || te || !J)) {
                    let t = e.getBoundingClientRect();
                    return o("WAWebMutationObserver").observeMutations(e, {
                        subtree: true,
                        attributes: true,
                        childList: true
                    }, function() {
                        if (w != null && w.includes("hover")) {
                            _e();
                        }
                        const n = e.getBoundingClientRect();
                        const r = n.top !== t.top || n.left !== t.left || n.width !== t.width || n.height !== t.height;
                        t = n;
                        if (r) {
                            ae();
                        }
                    });
                }
            };
            a[19] = _e;
            a[20] = w;
            a[21] = te;
            a[22] = J;
            a[23] = ae;
            a[24] = z.current;
            a[25] = fe;
        } else {
            fe = a[25];
        }
        let ge;
        if (a[26] !== _e || a[27] !== w || a[28] !== te || a[29] !== J || a[30] !== ae || a[31] !== z) {
            ge = [
                z,
                ae,
                te,
                J,
                _e,
                w
            ];
            a[26] = _e;
            a[27] = w;
            a[28] = te;
            a[29] = J;
            a[30] = ae;
            a[31] = z;
            a[32] = ge;
        } else {
            ge = a[32];
        }
        p(fe, ge);
        let he;
        let ye;
        if (a[33] !== te || a[34] !== J || a[35] !== ae) {
            he = function() {
                const e = j.current;
                if (!(e == null || te || !J)) {
                    let t = e.offsetWidth;
                    let n = e.offsetHeight;
                    return o("WAWebMutationObserver").observeMutations(e, {
                        subtree: true,
                        attributes: true,
                        childList: true
                    }, function() {
                        const { offsetWidth: r, offsetHeight: o } = e;
                        const a = r !== t || o !== n;
                        t = r;
                        n = o;
                        if (a) {
                            ae();
                        }
                    });
                }
            };
            ye = [
                ae,
                te,
                J
            ];
            a[33] = te;
            a[34] = J;
            a[35] = ae;
            a[36] = he;
            a[37] = ye;
        } else {
            he = a[36];
            ye = a[37];
        }
        p(he, ye);
        const Ce = A != null ? ce : se;
        let be;
        if (a[38] !== W || a[39] !== Ce) {
            be = function(t) {
                t.stopPropagation();
                if (W === true) {
                    re.current = {
                        x: t.clientX,
                        y: t.clientY
                    };
                } else {
                    re.current = null;
                }
                Ce();
            };
            a[38] = W;
            a[39] = Ce;
            a[40] = be;
        } else {
            be = a[40];
        }
        const ve = be;
        let Se;
        if (a[41] !== _e || a[42] !== w || a[43] !== Ce || a[44] !== t.hoverTarget?.current || a[45] !== te || a[46] !== ve || a[47] !== z.current) {
            Se = function() {
                const o = t.hoverTarget?.current ?? z.current;
                if (!(o == null || w == null)) {
                    let a = w;
                    if (!(a instanceof Array)) {
                        a = [
                            a
                        ];
                    }
                    const i = a.map((e)=>{
                        switch(e){
                            case "click":
                                return v(o, ve);
                            case "contextmenu":
                                return S({
                                    popoverIsAnimating: te,
                                    show: ve,
                                    target: o
                                });
                            case "hover":
                                return R(o, ve, _e);
                            case "hover-popover":
                                return E(o, j.current, ve, _e);
                            case "focus":
                                return L({
                                    hide: _e,
                                    show: Ce,
                                    target: o
                                });
                            case "controllable":
                                return r("WAWebNoop");
                        }
                    });
                    return function() {
                        return i.forEach(T);
                    };
                }
            };
            a[41] = _e;
            a[42] = w;
            a[43] = Ce;
            a[44] = t.hoverTarget?.current;
            a[45] = te;
            a[46] = ve;
            a[47] = z.current;
            a[48] = Se;
        } else {
            Se = a[48];
        }
        let Le;
        if (a[49] !== _e || a[50] !== w || a[51] !== Ce || a[52] !== t.hoverTarget || a[53] !== te || a[54] !== ve || a[55] !== z) {
            Le = [
                w,
                z,
                Ce,
                _e,
                te,
                ve,
                t.hoverTarget
            ];
            a[49] = _e;
            a[50] = w;
            a[51] = Ce;
            a[52] = t.hoverTarget;
            a[53] = te;
            a[54] = ve;
            a[55] = z;
            a[56] = Le;
        } else {
            Le = a[56];
        }
        p(Se, Le);
        let Ee;
        if (a[57] === Symbol.for("react.memo_cache_sentinel")) {
            Ee = function() {
                if (j.current != null) {
                    const e = o("WAWebKeyboardTabUtils").getNextTabbableElement(j.current);
                    if (e != null) {
                        e.focus();
                    }
                }
            };
            a[57] = Ee;
        } else {
            Ee = a[57];
        }
        const ke = Ee;
        let Ie;
        if (a[58] !== _e || a[59] !== te || a[60] !== J || a[61] !== se) {
            Ie = {
                showPopover: se,
                hidePopover: _e,
                popoverIsVisible: J,
                popoverIsAnimating: te
            };
            a[58] = _e;
            a[59] = te;
            a[60] = J;
            a[61] = se;
            a[62] = Ie;
        } else {
            Ie = a[62];
        }
        const Te = Ie;
        let De;
        if (a[63] !== Te) {
            De = function() {
                return Te;
            };
            a[63] = Te;
            a[64] = De;
        } else {
            De = a[64];
        }
        _($, De);
        let xe;
        if (a[65] !== Te) {
            xe = function() {
                return Te;
            };
            a[65] = Te;
            a[66] = xe;
        } else {
            xe = a[66];
        }
        _(G?.controllerRef, xe);
        let $e = null;
        if (u != null) {
            let Ne;
            if (a[67] === Symbol.for("react.memo_cache_sentinel")) {
                Ne = {
                    className: "x1n2onr6"
                };
                a[67] = Ne;
            } else {
                Ne = a[67];
            }
            let Me;
            if (a[68] !== b || a[69] !== I || a[70] !== Q || a[71] !== M) {
                Me = M === true && Q?.arrowCoords != null && c.jsx(o("WAWebPopoverArrow.react").PopoverArrow, {
                    containerXStyle: b,
                    coords: Q.arrowCoords,
                    popoverPosition: Q.position,
                    xstyle: I,
                    width: h
                });
                a[68] = b;
                a[69] = I;
                a[70] = Q;
                a[71] = M;
                a[72] = Me;
            } else {
                Me = a[72];
            }
            let we;
            if (a[73] !== t.element || a[74] !== Me) {
                we = <div {...babelHelpers.extends({}, Ne, {
                    children: [
                        Me,
                        t.element
                    ]
                })}/>;
                a[73] = t.element;
                a[74] = Me;
                a[75] = we;
            } else {
                we = a[75];
            }
            const Ae = we;
            let Fe;
            if (t.dismissable === true) {
                const Be = t.name ?? "Popover";
                let We;
                if (a[76] !== _e || a[77] !== t.dismissOnWindowResize || a[78] !== Ae || a[79] !== Be) {
                    const Component = o("WAWebUimUie.react").UIE;
                    We = <Component escapable popable dismissOnWindowResize={t.dismissOnWindowResize} displayName={Be} requestFocus={ke} requestDismiss={_e}>{Ae}</Component>;
                    a[76] = _e;
                    a[77] = t.dismissOnWindowResize;
                    a[78] = Ae;
                    a[79] = Be;
                    a[80] = We;
                } else {
                    We = a[80];
                }
                Fe = We;
            } else {
                Fe = Ae;
            }
            let qe;
            if (a[81] !== W || a[82] !== q) {
                qe = W !== true && <div className="x10l6tqk x8knxv4" style={{
                    top: -q,
                    right: -q,
                    bottom: -q,
                    left: -q
                }}/>;
                a[81] = W;
                a[82] = q;
                a[83] = qe;
            } else {
                qe = a[83];
            }
            const Ue = qe;
            const Ve = t.transitionName ?? "scaleAndFade";
            let He;
            if (a[84] === Symbol.for("react.memo_cache_sentinel")) {
                He = function() {
                    return ne(true);
                };
                a[84] = He;
            } else {
                He = a[84];
            }
            let Ge;
            if (a[85] !== V || a[86] !== ae) {
                Ge = function() {
                    if (V === false) {
                        ae();
                    }
                    ne(false);
                };
                a[85] = V;
                a[86] = ae;
                a[87] = Ge;
            } else {
                Ge = a[87];
            }
            let ze;
            let je;
            if (a[88] === Symbol.for("react.memo_cache_sentinel")) {
                ze = function() {
                    return ne(true);
                };
                je = function() {
                    return ne(false);
                };
                a[88] = ze;
                a[89] = je;
            } else {
                ze = a[88];
                je = a[89];
            }
            const Ke = B ?? "popover";
            let Qe;
            if (a[90] === Symbol.for("react.memo_cache_sentinel")) {
                Qe = "xixxii4 x9dfjz6 x1al4vs7";
                a[90] = Qe;
            } else {
                Qe = a[90];
            }
            let Xe;
            if (a[91] !== Fe || a[92] !== Q || a[93] !== Ue || a[94] !== Ke) {
                Xe = <div ref={j} data-testid={Ke} data-animate-dropdown-item style={Q} className={Qe}>{Ue}{Fe}</div>;
                a[91] = Fe;
                a[92] = Q;
                a[93] = Ue;
                a[94] = Ke;
                a[95] = Xe;
            } else {
                Xe = a[95];
            }
            let Ye;
            if (a[96] !== V || a[97] !== H || a[98] !== J || a[99] !== ae || a[100] !== Ve || a[101] !== Ge || a[102] !== Xe) {
                const Component = r("WAWebVelocityTransition");
                Ye = <Component transitionName={Ve} in={J} nodeRef={j} mountOnEnter unmountOnExit appear enter={V} exit={H} timeout={300} onEnter={ae} onEntering={He} onEntered={Ge} onExiting={ze} onExited={je}>{Xe}</Component>;
                a[96] = V;
                a[97] = H;
                a[98] = J;
                a[99] = ae;
                a[100] = Ve;
                a[101] = Ge;
                a[102] = Xe;
                a[103] = Ye;
            } else {
                Ye = a[103];
            }
            let Je;
            if (a[104] !== u || a[105] !== Ye) {
                Je = o("ReactDOM").createPortal(Ye, u);
                a[104] = u;
                a[105] = Ye;
                a[106] = Je;
            } else {
                Je = a[106];
            }
            $e = Je;
        } else {
            if (J && u == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[popover] portal ref is missing!"
                ])));
            }
        }
        let Ze;
        if (a[107] !== _e || a[108] !== $e || a[109] !== te || a[110] !== J || a[111] !== se) {
            Ze = {
                popover: $e,
                showPopover: se,
                hidePopover: _e,
                popoverIsVisible: J,
                popoverIsAnimating: te
            };
            a[107] = _e;
            a[108] = $e;
            a[109] = te;
            a[110] = J;
            a[111] = se;
            a[112] = Ze;
        } else {
            Ze = a[112];
        }
        return Ze;
    }
    function T(e) {
        return e();
    }
    l.PopoverAlignment = o("WAWebPopoverPosition").PopoverAlignment;
    l.PopoverPosition = o("WAWebPopoverPosition").PopoverPosition;
    l.ANCHOR_PORTAL_ID = C;
    l.PopoverPortalBucket = b;
    l.usePopoverElement = I;
}, 98);