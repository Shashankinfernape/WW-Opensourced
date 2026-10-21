__d("WAWebLinkDeviceScreenPrimaryButton.react", [
    "WAWebFlex.react",
    "WAWebUnstyledButton.react",
    "WDSButton.react",
    "WDSPaddings.stylex",
    "WDSThemes",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        paddingBlock10: {
            paddingTop: "x889kno",
            paddingBottom: "x1a8lsjc",
            $$css: true
        },
        paddingInlineStart14: {
            paddingInlineStart: "x1onr9mi",
            $$css: true
        }
    };
    const d = {
        button: {
            color: "xowvryd",
            fontWeight: "xk50ysn",
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
            borderStartStartRadius: "x17m9png",
            borderStartEndRadius: "x91sizk",
            borderEndEndRadius: "x1vva9xg",
            borderEndStartRadius: "x1jfkl46",
            fontSize: "x1jchvi3",
            lineHeight: "x1d3mw78",
            height: "xdd8jsf",
            minWidth: "x1wfn8jh",
            whiteSpace: "x126k92a",
            backgroundColor: "xq4q3us",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x1n2onr6",
            zIndex: "x1vjfegm",
            $$css: true
        },
        buttonDisabled: {
            backgroundColor: "x12hhv0b",
            cursor: "x1h6gzvc",
            color: "x1ur0v9m",
            borderTopStyle: "x1ejq31n",
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            $$css: true
        },
        buttonAnimations: {
            transition: "xeh1a47",
            color: "xowvryd xmp5vt6",
            backgroundColor: "xq4q3us x19qpkoy",
            transitionDelay: "xine9no",
            outline: "xdfradd",
            outlineOffset: "x12ijfkc",
            $$css: true
        },
        sweepBase: {
            position: "x10l6tqk",
            zIndex: "x8knxv4",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            transformOrigin: "x1g0ag68",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            transition: "x1f4dtem",
            $$css: true
        },
        sweepFixedSize: {
            minHeight: "x1u74lcz",
            minWidth: "xajigtk",
            transform: "xyz1g3t x1y3a7h5",
            $$css: true
        },
        sweepFullWidth: {
            width: "xh8yej3",
            aspectRatio: "x1y5e3q9",
            transform: "x1ww78zk xet2qw0",
            $$css: true
        },
        sweepLight: {
            backgroundColor: "x37n5ga",
            $$css: true
        },
        sweepDark: {
            backgroundColor: "xb1i3fl",
            $$css: true
        },
        buttonAnimationsDarkSurface: {
            transition: "xeh1a47",
            color: "xowvryd x1i44hl6",
            backgroundColor: "xq4q3us xl29h7w",
            transitionDelay: "xine9no",
            outline: "xdfradd",
            outlineOffset: "x12ijfkc",
            $$css: true
        },
        iconSpacing: {
            marginTop: "x1kgmq87",
            letterSpacing: "x72az59",
            $$css: true
        },
        horizontalSpace: {
            width: "x1tdqgrh",
            $$css: true
        }
    };
    function m(e, t) {
        return [
            d.sweepBase,
            t ? d.sweepFullWidth : d.sweepFixedSize,
            e ? d.sweepDark : d.sweepLight
        ];
    }
    function PComponent(t) {
        const n = o("react-compiler-runtime").c(33);
        const { animate, disabled, hostSurface, icon, onClick, testId, text, theme, useFullWidthSweep, xstyle } = t;
        const C = animate === undefined ? true : animate;
        const disabled_1 = disabled === undefined ? false : disabled;
        const v = hostSurface === undefined ? "default" : hostSurface;
        const S = theme === undefined ? "default" : theme;
        const R = useFullWidthSweep === undefined ? false : useFullWidthSweep;
        if (S === "wds") {
            const L = disabled_1 && v === "elevated" && o("WDSThemes").WDSLightTheme;
            let E;
            if (n[0] !== L) {
                E = [
                    d.horizontalSpace,
                    L
                ];
                n[0] = L;
                n[1] = E;
            } else {
                E = n[1];
            }
            const k = E;
            let onPress;
            if (n[2] !== onClick) {
                onPress = function() {
                    onClick();
                };
                n[2] = onClick;
                n[3] = onPress;
            } else {
                onPress = n[3];
            }
            let T;
            if (n[4] !== disabled_1 || n[5] !== onPress || n[6] !== testId || n[7] !== text || n[8] !== k) {
                const Component = r("WDSButton.react");
                T = <Component label={text} variant="filled" disabled={disabled_1} testid={testId} onPress={onPress} widthMode="fit" xstyle={k}/>;
                n[4] = disabled_1;
                n[5] = onPress;
                n[6] = testId;
                n[7] = text;
                n[8] = k;
                n[9] = T;
            } else {
                T = n[9];
            }
            return T;
        }
        const D = S === "dark-surface";
        const x = D ? d.buttonAnimationsDarkSurface : d.buttonAnimations;
        let $;
        if (n[10] !== C || n[11] !== x || n[12] !== disabled_1 || n[13] !== icon || n[14] !== D || n[15] !== onClick || n[16] !== testId || n[17] !== text || n[18] !== R || n[19] !== xstyle) {
            const P = m(D, R);
            let N;
            if (n[21] === Symbol.for("react.memo_cache_sentinel")) {
                N = {
                    "x-default-marker": "x-default-marker",
                    $$css: true
                };
                n[21] = N;
            } else {
                N = n[21];
            }
            const M = !disabled_1 && C && x;
            const w = disabled_1 && d.buttonDisabled;
            let A;
            if (n[22] !== M || n[23] !== w || n[24] !== xstyle) {
                A = [
                    N,
                    d.button,
                    M,
                    w,
                    c.paddingBlock10,
                    o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
                    xstyle
                ];
                n[22] = M;
                n[23] = w;
                n[24] = xstyle;
                n[25] = A;
            } else {
                A = n[25];
            }
            let F;
            if (n[26] !== text) {
                const Component = o("WAWebFlex.react").FlexItem;
                F = <Component>{text}</Component>;
                n[26] = text;
                n[27] = F;
            } else {
                F = n[27];
            }
            let O;
            if (n[28] !== icon) {
                const Component = o("WAWebFlex.react").FlexItem;
                O = icon != null && <Component xstyle={[
                    c.paddingInlineStart14,
                    d.iconSpacing
                ]}>{icon}</Component>;
                n[28] = icon;
                n[29] = O;
            } else {
                O = n[29];
            }
            let B;
            if (n[30] !== F || n[31] !== O) {
                const Component = o("WAWebFlex.react").FlexRow;
                B = <Component align="center" justify="center">{F}{O}</Component>;
                n[30] = F;
                n[31] = O;
                n[32] = B;
            } else {
                B = n[32];
            }
            const Component = r("WAWebUnstyledButton.react");
            $ = <Component testid={testId} xstyle={A} onClick={onClick} disabled={disabled_1}>{B}{C && !disabled_1 && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e || (e = r("stylex")), P))}/>}</Component>;
            n[10] = C;
            n[11] = x;
            n[12] = disabled_1;
            n[13] = icon;
            n[14] = D;
            n[15] = onClick;
            n[16] = testId;
            n[17] = text;
            n[18] = R;
            n[19] = xstyle;
            n[20] = $;
        } else {
            $ = n[20];
        }
        return $;
    }
    l.default = PComponent;
}, 98);