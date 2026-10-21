__d("WAWebButton.react", [
    "fbt",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFlexStyles",
    "WAWebSpinner.react",
    "WDSButton.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebFocusState"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref",
        "themeStyles",
        "ariaLabel",
        "ariaRoleDescription",
        "borderStyles",
        "buttonType",
        "children",
        "disabled",
        "icon",
        "iconXstyle",
        "nowrap",
        "onClick",
        "paddingStyles",
        "shadowOnHover",
        "spinner",
        "stretch",
        "tabOrder",
        "testid",
        "width"
    ];
    const u = [
        "ref"
    ];
    const c = [
        "ref"
    ];
    const d = [
        "ref"
    ];
    const m = [
        "ref"
    ];
    const p = [
        "ref"
    ];
    const _ = [
        "ref"
    ];
    const f = [
        "direction",
        "xstyle"
    ];
    let g;
    let h;
    const y = h || (h = o("react"));
    const C = {
        paddingBlock10: {
            paddingTop: "x889kno",
            paddingBottom: "x1a8lsjc",
            $$css: true
        }
    };
    function b(e) {
        switch(e){
            case "primary":
            case "strong-primary":
                return k;
            case "secondary":
                return T;
            case "plain-white":
                return x;
            case "solid-warning":
                return A;
            case "warning":
            case "warning-secondary":
                return O;
            case "simplified":
            case "strong":
                return M;
            case "negative-destructive":
                return W;
        }
    }
    const v = {
        button: {
            position: "x1n2onr6",
            display: "x1rg5ohu",
            fontWeight: "xk50ysn",
            fontSize: "x1f6kntn",
            lineHeight: "xyesn5m",
            whiteSpace: "x126k92a",
            borderStartStartRadius: "x1g83kfv",
            borderStartEndRadius: "x3qq2k7",
            borderEndEndRadius: "x2x8art",
            borderEndStartRadius: "x1qor8vf",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1v8p93f",
            borderInlineEndColor: "x1o3jo1z",
            borderBottomColor: "x16stqrj",
            borderInlineStartColor: "xv5lvn5",
            outlineOffset: "x1hl8ikr",
            transitionProperty: "xfagghw",
            transitionDuration: "x9dyr19",
            transitionTimingFunction: "x9lcvmn",
            $$css: true
        },
        hover: {
            ":hover_boxShadow": "xv52azi",
            $$css: true
        },
        disabled: {
            cursor: "x1h6gzvc",
            boxShadow: "x1gnnqk1",
            ":hover_cursor": "xercxcz",
            ":hover_boxShadow": "x1wtrbu5",
            $$css: true
        },
        focused: {
            outline: "x12zc9zx",
            $$css: true
        },
        nowrap: {
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        stretch: {
            display: "x1lliihq",
            width: "xh8yej3",
            $$css: true
        }
    };
    function S(t) {
        const n = o("react-compiler-runtime").c(28);
        const { ref: a, themeStyles: i, ariaLabel: l, ariaRoleDescription: s, borderStyles: u, buttonType: c, children: d, disabled: m, icon: P1, iconXstyle: _, nowrap: f, onClick: h, paddingStyles: b, shadowOnHover: S, spinner: R, stretch: L, tabOrder: E, testid: k, width: I } = t;
        const T = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const D = f === void 0 ? true : f;
        const x = S === void 0 ? true : S;
        const $ = r("useWAWebFocusState")();
        const P = $[0];
        const N = $[1];
        const M = r("useMergeRefs")(a, P);
        const w = o("WAWebFlexStyles").getFlexStyles(T);
        const A = (g || (g = r("stylex")))([
            C.paddingBlock10,
            o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
            [
                v.button,
                i.button,
                i.buttonRefreshed
            ],
            w.xstyle,
            N === true && [
                v.focused,
                i.focused
            ],
            m === true && v.disabled,
            D === true && v.nowrap,
            L === true && v.stretch,
            x === true && v.hover,
            u,
            b
        ]);
        let F;
        if (n[0] !== w.inline || n[1] !== I) {
            F = babelHelpers.extends({}, w.inline, {
                width: I
            });
            n[0] = w.inline;
            n[1] = I;
            n[2] = F;
        } else {
            F = n[2];
        }
        let O;
        if (n[3] !== P1 || n[4] !== _) {
            O = P1 != null && <P1 height={16} iconXstyle={_}/>;
            n[3] = P1;
            n[4] = _;
            n[5] = O;
        } else {
            O = n[5];
        }
        let B;
        if (n[6] !== d || n[7] !== O) {
            const Component = o("WAWebFlex.react").FlexRow;
            B = <Component testid="content" justify="center" align="center" gap={8} grow={1}>{O}{d}</Component>;
            n[6] = d;
            n[7] = O;
            n[8] = B;
        } else {
            B = n[8];
        }
        let W;
        if (n[9] !== m || n[10] !== R || n[11] !== i.spinner) {
            const Component = r("WAWebFlexItem.react");
            W = R === true && <Component testid="spinner" xstyle={o("WDSPaddings.stylex").wdsPaddings.paddingStart8}>{y.jsx(o("WAWebSpinner.react").Spinner, {
                color: m === true ? "default" : i.spinner,
                size: 16
            })}</Component>;
            n[9] = m;
            n[10] = R;
            n[11] = i.spinner;
            n[12] = W;
        } else {
            W = n[12];
        }
        let q;
        if (n[13] !== B || n[14] !== W) {
            const Component = o("WAWebFlex.react").FlexRow;
            q = <Component align="center" justify="center">{B}{W}</Component>;
            n[13] = B;
            n[14] = W;
            n[15] = q;
        } else {
            q = n[15];
        }
        let U;
        if (n[16] !== l || n[17] !== s || n[18] !== c || n[19] !== m || n[20] !== M || n[21] !== h || n[22] !== A || n[23] !== F || n[24] !== q || n[25] !== E || n[26] !== k) {
            U = <button disabled={m} aria-disabled={m} data-tab={E} data-testid={k} onClick={h} className={A} ref={M} style={F} type={c} aria-label={l} aria-roledescription={s}>{q}</button>;
            n[16] = l;
            n[17] = s;
            n[18] = c;
            n[19] = m;
            n[20] = M;
            n[21] = h;
            n[22] = A;
            n[23] = F;
            n[24] = q;
            n[25] = E;
            n[26] = k;
            n[27] = U;
        } else {
            U = n[27];
        }
        return U;
    }
    function R(e, t, { ariaLabel: r, ariaRoleDescription: o, borderStyles: a, buttonType: i, children: l, disabled: u, flex: c, icon: d, iconXstyle: m, nowrap: p, onClick: _, shadowOnHover: f, spinner: g, stretch: h, tabOrder: y, testid: C, width: b }) {
        const v = l;
        if (v != null && !(typeof v === "string" || s.isFbtInstance(v))) {
            return null;
        }
        const S = _ ? function(e) {
            _(e);
        } : null;
        const R = h === true ? "flexible" : "fit";
        const L = {
            size: e,
            type: t,
            loading: g,
            disabled: u,
            widthMode: R,
            tabOrder: y ?? void 0,
            testid: C ?? void 0,
            onPress: S ?? void 0
        };
        if (d != null && v != null) {
            return babelHelpers.extends({}, L, {
                Icon: d,
                label: v
            });
        }
        if (v != null) {
            return babelHelpers.extends({}, L, {
                label: v
            });
        }
        if (d != null) {
            return babelHelpers.extends({}, L, {
                Icon: d
            });
        }
    }
    function L(e) {
        function t(t) {
            const n = o("react-compiler-runtime").c(6);
            let r;
            let a;
            if (n[0] !== t) {
                a = t.ref;
                r = babelHelpers.objectWithoutPropertiesLoose(t, u);
                n[0] = t;
                n[1] = r;
                n[2] = a;
            } else {
                r = n[1];
                a = n[2];
            }
            let i;
            if (n[3] !== r || n[4] !== a) {
                i = <S {...babelHelpers.extends({}, r, {
                    ref: a,
                    themeStyles: e
                })}/>;
                n[3] = r;
                n[4] = a;
                n[5] = i;
            } else {
                i = n[5];
            }
            return i;
        }
        return t;
    }
    const E = {
        button: {
            color: "x1pse0pq x1f47i5p",
            backgroundColor: "xfn3atn x1npidv x1kuymfk",
            $$css: true
        },
        buttonRefreshed: {
            color: "x1pse0pq x1f47i5p",
            backgroundColor: "xfn3atn x1npidv x9qntcr",
            $$css: true
        },
        spinner: {
            stroke: "x12q0m0e",
            $$css: true
        }
    };
    function k(e) {
        const t = o("react-compiler-runtime").c(10);
        let n;
        let a;
        let i;
        if (t[0] !== e) {
            a = e.ref;
            n = babelHelpers.objectWithoutPropertiesLoose(e, c);
            i = R("medium", "default", n);
            t[0] = e;
            t[1] = n;
            t[2] = a;
            t[3] = i;
        } else {
            n = t[1];
            a = t[2];
            i = t[3];
        }
        const l = i;
        if (l) {
            let s;
            if (t[4] !== l || t[5] !== a) {
                s = y.jsx(r("WDSButton.react"), babelHelpers.extends({
                    variant: "filled",
                    ref: a
                }, l));
                t[4] = l;
                t[5] = a;
                t[6] = s;
            } else {
                s = t[6];
            }
            return s;
        }
        let u;
        if (t[7] !== n || t[8] !== a) {
            u = <S {...babelHelpers.extends({}, n, {
                ref: a,
                themeStyles: E
            })}/>;
            t[7] = n;
            t[8] = a;
            t[9] = u;
        } else {
            u = t[9];
        }
        return u;
    }
    const I = {
        button: {
            color: "xo1mcw5",
            borderTopColor: "xnj1f2r",
            borderInlineEndColor: "x2uibgs",
            borderBottomColor: "xkveyfu",
            borderInlineStartColor: "x12llq9",
            backgroundColor: "xjbqb8w",
            ":hover_color": "xfrlarv",
            ":disabled_color": "x1f47i5p",
            ":disabled_borderTopColor": "xnk0c1z",
            ":disabled_borderInlineEndColor": "x1s31tdy",
            ":disabled_borderBottomColor": "x1ao7u56",
            ":disabled_borderInlineStartColor": "xz3waxf",
            ":disabled_backgroundColor": "x1npidv",
            $$css: true
        },
        spinner: {
            stroke: "x94ds6z",
            $$css: true
        }
    };
    function T(e) {
        const t = o("react-compiler-runtime").c(10);
        let n;
        let a;
        let i;
        if (t[0] !== e) {
            a = e.ref;
            n = babelHelpers.objectWithoutPropertiesLoose(e, d);
            i = R("medium", "default", n);
            t[0] = e;
            t[1] = n;
            t[2] = a;
            t[3] = i;
        } else {
            n = t[1];
            a = t[2];
            i = t[3];
        }
        const l = i;
        if (l) {
            let s;
            if (t[4] !== l || t[5] !== a) {
                s = y.jsx(r("WDSButton.react"), babelHelpers.extends({
                    variant: "outline",
                    ref: a
                }, l));
                t[4] = l;
                t[5] = a;
                t[6] = s;
            } else {
                s = t[6];
            }
            return s;
        }
        let u;
        if (t[7] !== n || t[8] !== a) {
            u = <S {...babelHelpers.extends({}, n, {
                ref: a,
                themeStyles: I
            })}/>;
            t[7] = n;
            t[8] = a;
            t[9] = u;
        } else {
            u = t[9];
        }
        return u;
    }
    const D = {
        button: {
            color: "xhslqc4",
            backgroundColor: "x1h3rtpe",
            ":hover_color": "xxxijta",
            ":hover_backgroundColor": "x1n5bzlp",
            ":disabled_color": "x1f47i5p",
            ":disabled_backgroundColor": "x1oqui1x",
            $$css: true
        },
        spinner: {
            stroke: "x94ds6z",
            $$css: true
        }
    };
    var x = L(D);
    const $ = {
        button: {
            paddingInlineStart: "xmzvs34",
            paddingInlineEnd: "xf159sx",
            width: "x1exxlbk",
            fontSize: "x6prxxf",
            lineHeight: "x1o2sk6j",
            backgroundColor: "xep993w",
            color: "xhslqc4",
            fontWeight: "xo1l8bm",
            ":hover_backgroundColor": "x1ubxc9n",
            ":hover_boxShadow": "x1wtrbu5",
            ":disabled_color": "x1f47i5p",
            $$css: true
        },
        spinner: {
            stroke: "x94ds6z",
            $$css: true
        }
    };
    const P = L($);
    const N = {
        button: {
            paddingInlineStart: "xmzvs34",
            paddingInlineEnd: "xf159sx",
            color: "xo1mcw5",
            ":hover_color": "xfrlarv",
            ":hover_boxShadow": "x1wtrbu5",
            ":disabled_color": "x1f47i5p",
            $$css: true
        },
        spinner: {
            stroke: "x94ds6z",
            $$css: true
        }
    };
    function M(e) {
        const t = o("react-compiler-runtime").c(10);
        let n;
        let a;
        let i;
        if (t[0] !== e) {
            a = e.ref;
            n = babelHelpers.objectWithoutPropertiesLoose(e, m);
            i = R("medium", "default", n);
            t[0] = e;
            t[1] = n;
            t[2] = a;
            t[3] = i;
        } else {
            n = t[1];
            a = t[2];
            i = t[3];
        }
        const l = i;
        if (l) {
            let s;
            if (t[4] !== l || t[5] !== a) {
                s = y.jsx(r("WDSButton.react"), babelHelpers.extends({
                    variant: "borderless",
                    ref: a
                }, l));
                t[4] = l;
                t[5] = a;
                t[6] = s;
            } else {
                s = t[6];
            }
            return s;
        }
        let u;
        if (t[7] !== n || t[8] !== a) {
            u = <S {...babelHelpers.extends({}, n, {
                ref: a,
                themeStyles: N
            })}/>;
            t[7] = n;
            t[8] = a;
            t[9] = u;
        } else {
            u = t[9];
        }
        return u;
    }
    const w = {
        button: {
            color: "xowaa7l",
            backgroundColor: "xk0ssx3",
            ":hover_backgroundColor": "xkrun6l",
            ":disabled_color": "x1f47i5p",
            ":disabled_backgroundColor": "x1npidv",
            $$css: true
        },
        focused: {
            outlineColor: "x10322wi",
            $$css: true
        },
        spinner: {
            stroke: "x1ukulop",
            $$css: true
        }
    };
    function A(e) {
        const t = o("react-compiler-runtime").c(10);
        let n;
        let a;
        let i;
        if (t[0] !== e) {
            a = e.ref;
            n = babelHelpers.objectWithoutPropertiesLoose(e, p);
            i = R("medium", "destructive", n);
            t[0] = e;
            t[1] = n;
            t[2] = a;
            t[3] = i;
        } else {
            n = t[1];
            a = t[2];
            i = t[3];
        }
        const l = i;
        if (l) {
            let s;
            if (t[4] !== l || t[5] !== a) {
                s = y.jsx(r("WDSButton.react"), babelHelpers.extends({
                    variant: "filled",
                    ref: a
                }, l));
                t[4] = l;
                t[5] = a;
                t[6] = s;
            } else {
                s = t[6];
            }
            return s;
        }
        let u;
        if (t[7] !== n || t[8] !== a) {
            u = <S {...babelHelpers.extends({}, n, {
                ref: a,
                themeStyles: w
            })}/>;
            t[7] = n;
            t[8] = a;
            t[9] = u;
        } else {
            u = t[9];
        }
        return u;
    }
    const F = {
        button: {
            color: "x30a034",
            borderTopColor: "xnj1f2r",
            borderInlineEndColor: "x2uibgs",
            borderBottomColor: "xkveyfu",
            borderInlineStartColor: "x12llq9",
            backgroundColor: "xjbqb8w",
            ":hover_color": "x1pfmjgd",
            ":disabled_color": "x1f47i5p",
            ":disabled_borderTopColor": "xnk0c1z",
            ":disabled_borderInlineEndColor": "x1s31tdy",
            ":disabled_borderBottomColor": "x1ao7u56",
            ":disabled_borderInlineStartColor": "xz3waxf",
            ":disabled_backgroundColor": "x1npidv",
            $$css: true
        },
        focused: {
            outlineColor: "x10322wi",
            $$css: true
        },
        spinner: {
            stroke: "x17alv2p",
            $$css: true
        }
    };
    function O(e) {
        const t = o("react-compiler-runtime").c(10);
        let n;
        let a;
        let i;
        if (t[0] !== e) {
            a = e.ref;
            n = babelHelpers.objectWithoutPropertiesLoose(e, _);
            i = R("medium", "destructive", n);
            t[0] = e;
            t[1] = n;
            t[2] = a;
            t[3] = i;
        } else {
            n = t[1];
            a = t[2];
            i = t[3];
        }
        const l = i;
        if (l) {
            let s;
            if (t[4] !== l || t[5] !== a) {
                s = y.jsx(r("WDSButton.react"), babelHelpers.extends({
                    variant: "outline",
                    ref: a
                }, l));
                t[4] = l;
                t[5] = a;
                t[6] = s;
            } else {
                s = t[6];
            }
            return s;
        }
        let u;
        if (t[7] !== n || t[8] !== a) {
            u = <S {...babelHelpers.extends({}, n, {
                ref: a,
                themeStyles: F
            })}/>;
            t[7] = n;
            t[8] = a;
            t[9] = u;
        } else {
            u = t[9];
        }
        return u;
    }
    const B = {
        button: {
            color: "xowaa7l",
            backgroundColor: "x1b0f5k1",
            ":disabled_color": "x1f47i5p",
            ":disabled_backgroundColor": "x1npidv",
            $$css: true
        }
    };
    var W = L(B);
    const q = {
        horizontal: {
            columnGap: "xs2akgl",
            $$css: true
        },
        vertical: {
            rowGap: "x1f0uite",
            $$css: true
        }
    };
    function U(e) {
        const t = o("react-compiler-runtime").c(11);
        let n;
        let r;
        let a;
        if (t[0] !== e) {
            n = e.direction;
            a = e.xstyle;
            r = babelHelpers.objectWithoutPropertiesLoose(e, f);
            t[0] = e;
            t[1] = n;
            t[2] = r;
            t[3] = a;
        } else {
            n = t[1];
            r = t[2];
            a = t[3];
        }
        let i;
        e: switch(n){
            case "horizontal":
            case "horizontalReverse":
                {
                    i = q.horizontal;
                    break e;
                }
            case "vertical":
            case "verticalReverse":
                i = q.vertical;
        }
        let l;
        if (t[4] !== i || t[5] !== a) {
            l = [
                i,
                a
            ];
            t[4] = i;
            t[5] = a;
            t[6] = l;
        } else {
            l = t[6];
        }
        let s;
        if (t[7] !== n || t[8] !== r || t[9] !== l) {
            s = y.jsx(o("WAWebFlex.react").FlexContainer, babelHelpers.extends({
                xstyle: l,
                direction: n
            }, r));
            t[7] = n;
            t[8] = r;
            t[9] = l;
            t[10] = s;
        } else {
            s = t[10];
        }
        return s;
    }
    function V(e) {
        const t = o("react-compiler-runtime").c(13);
        const { buttonType: n, children: r, disabled: a, nowrap: i, onClick: l, ref: s, spinner: u, stretch: c, testid: d, type: m } = e;
        const p = m === void 0 ? "primary" : m;
        let _;
        if (t[0] !== p) {
            _ = b(p);
            t[0] = p;
            t[1] = _;
        } else {
            _ = t[1];
        }
        const F = _;
        let g;
        if (t[2] !== F || t[3] !== n || t[4] !== r || t[5] !== a || t[6] !== i || t[7] !== l || t[8] !== s || t[9] !== u || t[10] !== c || t[11] !== d) {
            g = <F ref={s} testid={d} disabled={a} onClick={l} nowrap={i} spinner={u} stretch={c} buttonType={n}>{r}</F>;
            t[2] = F;
            t[3] = n;
            t[4] = r;
            t[5] = a;
            t[6] = i;
            t[7] = l;
            t[8] = s;
            t[9] = u;
            t[10] = c;
            t[11] = d;
            t[12] = g;
        } else {
            g = t[12];
        }
        return g;
    }
    l.WAWebButtonPrimary = k;
    l.WAWebButtonSecondary = T;
    l.WAWebButtonPlainWhite = x;
    l.WAWebButtonOnAccent = P;
    l.WAWebButtonSimplified = M;
    l.WAWebButtonPrimaryDestructive = A;
    l.WAWebButtonSecondaryDestructive = O;
    l.ButtonGroup = U;
    l.Button = V;
}, 98);