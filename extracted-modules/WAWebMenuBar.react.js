__d("WAWebMenuBar.react", [
    "WAWebMenuBarStyles",
    "WAWebPopoverContext.react",
    "WAWebTooltip.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebVelocityTransitionGroup",
    "WDSFocusStateStyles",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { createContext: m, useContext: p, useMemo: _, useRef: f, useState: g } = d;
    const h = {
        marginTop10: {
            marginTop: "x1anpbxc",
            $$css: true
        }
    };
    function Y3(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e.xstyle) {
            n = [
                r("WAWebMenuBarStyles").itemChild,
                e.xstyle
            ];
            t[0] = e.xstyle;
            t[1] = n;
        } else {
            n = t[1];
        }
        let a;
        if (t[2] !== e || t[3] !== n) {
            a = c.jsx(r("WAWebVelocityTransitionGroup"), babelHelpers.extends({}, e, {
                xstyle: n
            }));
            t[2] = e;
            t[3] = n;
            t[4] = a;
        } else {
            a = t[4];
        }
        return a;
    }
    const C = m({});
    function b(e) {
        const t = o("react-compiler-runtime").c(11);
        const { children: n, gap: a, theme: i } = e;
        let l;
        if (t[0] !== a || t[1] !== i) {
            l = (s || (s = r("stylex")))(r("WAWebMenuBarStyles").menu, i == null && r("WAWebMenuBarStyles").menuDefault, i === "strong" && r("WAWebMenuBarStyles").menuStrong, i === "inverse" && r("WAWebMenuBarStyles").menuInverse, i === "nav-bar" && r("WAWebMenuBarStyles").menuNavBar, a === "single" && r("WAWebMenuBarStyles").menuGapSingle);
            t[0] = a;
            t[1] = i;
            t[2] = l;
        } else {
            l = t[2];
        }
        const u = l;
        let d;
        if (t[3] !== i) {
            d = i ? {
                theme: i
            } : {};
            t[3] = i;
            t[4] = d;
        } else {
            d = t[4];
        }
        const m = d;
        let p;
        if (t[5] !== n || t[6] !== u) {
            p = <div className={u}>{n}</div>;
            t[5] = n;
            t[6] = u;
            t[7] = p;
        } else {
            p = t[7];
        }
        let _;
        if (t[8] !== m || t[9] !== p) {
            _ = <C.Provider value={m}>{p}</C.Provider>;
            t[8] = m;
            t[9] = p;
            t[10] = _;
        } else {
            _ = t[10];
        }
        return _;
    }
    const v = -10;
    function S(t) {
        const n = o("react-compiler-runtime").c(26);
        const a = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { buttonStyle: l, disabled: u, dropdownMenu: d, icon: m, onTransitionEnd: _, onTransitionStart: b, selected: S, showHoverTooltip: R, testid: L, text: E, theme: k, title: I, transitionName: T, vertical: D, xstyle: x } = i;
        const $ = u === void 0 ? false : u;
        const P = R === void 0 ? false : R;
        const N = T === void 0 ? "dropdown" : T;
        const M = p(C);
        const w = M.theme;
        const A = g(false);
        const F = A[0];
        const O = A[1];
        const B = f(null);
        const W = g(null);
        const q = W[0];
        const U = W[1];
        const V = function() {
            b?.();
            if (d != null) {
                let t = d.offsetX;
                if (t == null) {
                    t = v;
                }
                O(true);
                U(babelHelpers.extends({}, d, {
                    anchor: d.anchor ?? B.current,
                    offsetX: t
                }));
                i.onOpen?.();
            }
        };
        const H = function(t) {
            _?.();
            O(false);
            U(null);
            i.onClose?.(t);
        };
        const G = function(t) {
            if (i.onClick) {
                i.onClick(t);
            }
            if (!(t == null || t.isDefaultPrevented())) {
                t.preventDefault();
                if (!F) {
                    V();
                }
            }
        };
        const z = r("useWAWebStaticButtonA11y")(G, {
            disabled: $
        });
        const j = z[0];
        const K = z[1];
        const Q = (s || (s = r("stylex")))(r("WAWebMenuBarStyles").item, x, S === true && r("WAWebMenuBarStyles").itemSelected, F === true && r("WAWebMenuBarStyles").itemActive, $ !== true && r("WAWebMenuBarStyles").itemActiveStateNotDisabled, $ !== true && r("WAWebMenuBarStyles").itemShowHoverBg, D === true && h.marginTop10, $ === true && r("WAWebMenuBarStyles").itemDisabled, $ === true && K.role === "button" && r("WAWebMenuBarStyles").itemDisabledRoleBtn, w === "nav-bar" && r("WAWebMenuBarStyles").itemThemeNavBar, w === "media-editor" && r("WAWebMenuBarStyles").itemThemeMediaEditor);
        const X = r("useMergeRefs")(j, B);
        const Y = s.props(r("WAWebMenuBarStyles").itemButton, o("WDSPaddings.stylex").wdsPaddings.padding8, l, k === "force-size" && r("WAWebMenuBarStyles").btnThemeForceSize, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus);
        const J = $ ? void 0 : i.tabOrder;
        const Z = P ? "" : I;
        let ee;
        if (n[0] !== E) {
            ee = E != null && E !== "" && <span className="x7r5mf7 x1p8j9ns xahult9 x7phf20">{E}</span>;
            n[0] = E;
            n[1] = ee;
        } else {
            ee = n[1];
        }
        let te;
        if (n[2] !== F || n[3] !== K || n[4] !== m || n[5] !== X || n[6] !== Y || n[7] !== J || n[8] !== Z || n[9] !== ee || n[10] !== I) {
            te = <button {...babelHelpers.extends({
                "aria-expanded": F
            }, K, Y, {
                "data-tab": J,
                title: Z,
                "aria-label": I,
                ref: X,
                children: [
                    m,
                    ee
                ]
            })}/>;
            n[2] = F;
            n[3] = K;
            n[4] = m;
            n[5] = X;
            n[6] = Y;
            n[7] = J;
            n[8] = Z;
            n[9] = ee;
            n[10] = I;
            n[11] = te;
        } else {
            te = n[11];
        }
        let ne;
        if (n[12] !== H || n[13] !== q || n[14] !== N) {
            const Component = o("WAWebUimUie.react").UIE;
            ne = q != null && <Y3 transitionName={N}><Component displayName="MenuBarMenuItem" escapable popable dismissOnWindowResize requestDismiss={H}>{c.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: q
            })}</Component></Y3>;
            n[12] = H;
            n[13] = q;
            n[14] = N;
            n[15] = ne;
        } else {
            ne = n[15];
        }
        let re;
        if (n[16] !== P || n[17] !== I) {
            const Component = o("WAWebTooltip.react").WAWebHoverTooltip;
            re = P && c.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
                targetRef: B,
                popover: <Component targetRef="context" alignment={o("WAWebTooltip.react").PopoverAlignment.Center} position={o("WAWebTooltip.react").PopoverPosition.End} openingDelay={350}>{I}</Component>
            });
            n[16] = P;
            n[17] = I;
            n[18] = re;
        } else {
            re = n[18];
        }
        let oe;
        if (n[19] !== Q || n[20] !== a || n[21] !== re || n[22] !== te || n[23] !== ne || n[24] !== L) {
            oe = <div ref={a} className={Q} data-testid={L}>{te}{ne}{re}</div>;
            n[19] = Q;
            n[20] = a;
            n[21] = re;
            n[22] = te;
            n[23] = ne;
            n[24] = L;
            n[25] = oe;
        } else {
            oe = n[25];
        }
        return oe;
    }
    l.MenuBarVelocityTransitionGroup = Y3;
    l.MenuBar = b;
    l.MenuBarItem = S;
}, 98);