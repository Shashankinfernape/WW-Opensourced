__d("WAWebAppDownloadScreen.react", [
    "fbt",
    "WAWebFlex.react",
    "WAWebUnstyledButton.react",
    "WAWebWaLogoIcon.react",
    "WAWebWaWordmarkIcon.react",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSIllustrationWdsIllPhoneTextDownload.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        closeButton: {
            position: "x10l6tqk",
            top: "xymx5cc",
            insetInlineEnd: "x2fp4s7",
            left: null,
            right: null,
            zIndex: "x1vjfegm",
            $$css: true
        },
        headerText: {
            marginInlineStart: "xdwrcjd",
            marginTop: "xr9ek0c",
            $$css: true
        },
        brandColor: {
            color: "x1y4xi8",
            $$css: true
        },
        buttonsContainer: {
            width: "x1ye0lqc",
            rowGap: "x8a3fw1",
            columnGap: "x1aj3ljl",
            $$css: true
        },
        buttonStyles: {
            color: "xowvryd",
            fontWeight: "xk50ysn",
            fontSize: "x1jchvi3",
            lineHeight: "x1d3mw78",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1ipd3cv",
            borderInlineEndColor: "xdx94on",
            borderBottomColor: "xqutoja",
            borderInlineStartColor: "xsiszko",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            height: "xdd8jsf",
            width: "xh8yej3",
            $$css: true
        },
        primaryButton: {
            backgroundColor: "xq4q3us",
            $$css: true
        },
        secondaryButton: {
            backgroundColor: "x12peec7",
            $$css: true
        }
    };
    function d(e) {
        const a = o("react-compiler-runtime").c(43);
        const { brandSizing: i, closeAction: l, continueAction: d, description: m, downloadButtonLabel: p, downloadButtonTestId: _, onDownloadApp: f, ref: g, screenTestId: h, title: y } = e;
        const C = i?.logoHeight ?? 22;
        const b = i == null ? 23 : i.logoWidth;
        const v = i?.wordmarkHeight ?? 14;
        let S;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            S = {
                className: "xixxii4 x13vifvy x1o0tod xtijo5x x1ey2m1c x78zum5 xdt5ytf xfo81ep xe4h88v"
            };
            a[0] = S;
        } else {
            S = a[0];
        }
        let R;
        if (a[1] !== l) {
            const Component = r("WDSButton.react");
            R = l != null && <Component aria-label={s._("Close")} Icon={r("WDSIconIcClose.react")} onPress={l.onPress} size="medium" testid={l.testId} variant="borderless" xstyle={c.closeButton}/>;
            a[1] = l;
            a[2] = R;
        } else {
            R = a[2];
        }
        let L;
        if (a[3] === Symbol.for("react.memo_cache_sentinel")) {
            L = {
                className: "x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i x78zum5 xl56j7k"
            };
            a[3] = L;
        } else {
            L = a[3];
        }
        let E;
        if (a[4] !== C || a[5] !== b) {
            const Component = o("WAWebFlex.react").FlexItem;
            E = <Component grow={0}>{u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
                height: C,
                width: b,
                iconXstyle: c.brandColor
            })}</Component>;
            a[4] = C;
            a[5] = b;
            a[6] = E;
        } else {
            E = a[6];
        }
        let k;
        if (a[7] !== v) {
            const Component = o("WAWebFlex.react").FlexItem;
            k = <Component grow={1} xstyle={c.headerText}>{u.jsx(o("WAWebWaWordmarkIcon.react").WaWordmarkIcon, {
                height: v,
                iconXstyle: c.brandColor
            })}</Component>;
            a[7] = v;
            a[8] = k;
        } else {
            k = a[8];
        }
        let I;
        if (a[9] !== E || a[10] !== k) {
            const Component = o("WAWebFlex.react").FlexRow;
            I = <div {...babelHelpers.extends({}, L, {
                children: <Component align="center">{E}{k}</Component>
            })}/>;
            a[9] = E;
            a[10] = k;
            a[11] = I;
        } else {
            I = a[11];
        }
        let T;
        let D;
        let x;
        let $;
        if (a[12] === Symbol.for("react.memo_cache_sentinel")) {
            D = {
                className: "x78zum5 x1cy8zhl xl56j7k xb0esv5 xyo0t3i xl7twdi xvg22vi x1odjw0f x5lxg6s x98rzlu x2lwn1j"
            };
            x = {
                className: "x2b8uid x78zum5 xdt5ytf x6s0dn4 xr1yuqi x4ii5y1"
            };
            $ = <div className="xg6s713">{u.jsx(r("WDSIllustrationWdsIllPhoneTextDownload.react"), {
                testid: "wds-ill-phone-native-download"
            })}</div>;
            T = {
                className: "x1ua1l7f xowvryd x579bpy xo1l8bm x1u7k74"
            };
            a[12] = T;
            a[13] = D;
            a[14] = x;
            a[15] = $;
        } else {
            T = a[12];
            D = a[13];
            x = a[14];
            $ = a[15];
        }
        let P;
        if (a[16] !== y) {
            P = <div {...babelHelpers.extends({}, T, {
                children: y
            })}/>;
            a[16] = y;
            a[17] = P;
        } else {
            P = a[17];
        }
        let N;
        if (a[18] === Symbol.for("react.memo_cache_sentinel")) {
            N = {
                className: "xg6s713 xowvryd x1jchvi3 xo1l8bm x19v9tvf"
            };
            a[18] = N;
        } else {
            N = a[18];
        }
        let M;
        if (a[19] !== m) {
            M = <div {...babelHelpers.extends({}, N, {
                children: m
            })}/>;
            a[19] = m;
            a[20] = M;
        } else {
            M = a[20];
        }
        let w;
        if (a[21] === Symbol.for("react.memo_cache_sentinel")) {
            w = [
                c.buttonStyles,
                c.primaryButton
            ];
            a[21] = w;
        } else {
            w = a[21];
        }
        let A;
        if (a[22] !== p) {
            const Component = o("WAWebFlex.react").FlexItem;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            A = <Component_1 align="center" justify="center"><Component>{p}</Component></Component_1>;
            a[22] = p;
            a[23] = A;
        } else {
            A = a[23];
        }
        let F;
        if (a[24] !== _ || a[25] !== f || a[26] !== A) {
            const Component = r("WAWebUnstyledButton.react");
            F = <Component xstyle={w} onClick={f} testid={_}>{A}</Component>;
            a[24] = _;
            a[25] = f;
            a[26] = A;
            a[27] = F;
        } else {
            F = a[27];
        }
        let O;
        if (a[28] !== d) {
            const Component = o("WAWebFlex.react").FlexItem;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = r("WAWebUnstyledButton.react");
            O = d != null && <Component_2 xstyle={[
                c.buttonStyles,
                c.secondaryButton
            ]} onClick={d.onPress} testid={d.testId}><Component_1 align="center" justify="center" grow={0}><Component>{d.label}</Component></Component_1></Component_2>;
            a[28] = d;
            a[29] = O;
        } else {
            O = a[29];
        }
        let B;
        if (a[30] !== F || a[31] !== O) {
            const Component = o("WAWebFlex.react").FlexColumn;
            B = <Component align="stretch" xstyle={c.buttonsContainer}>{F}{O}</Component>;
            a[30] = F;
            a[31] = O;
            a[32] = B;
        } else {
            B = a[32];
        }
        let W;
        if (a[33] !== P || a[34] !== M || a[35] !== B) {
            W = <div {...babelHelpers.extends({}, D, {
                children: <div {...babelHelpers.extends({}, x, {
                    children: [
                        $,
                        P,
                        M,
                        B
                    ]
                })}/>
            })}/>;
            a[33] = P;
            a[34] = M;
            a[35] = B;
            a[36] = W;
        } else {
            W = a[36];
        }
        let q;
        if (a[37] !== g || a[38] !== h || a[39] !== W || a[40] !== R || a[41] !== I) {
            q = <div {...babelHelpers.extends({
                "data-testid": h,
                ref: g
            }, S, {
                children: [
                    R,
                    I,
                    W
                ]
            })}/>;
            a[37] = g;
            a[38] = h;
            a[39] = W;
            a[40] = R;
            a[41] = I;
            a[42] = q;
        } else {
            q = a[42];
        }
        return q;
    }
    l.default = d;
}, 226);