__d("WAWebLinkDeviceCodeView.react", [
    "fbt",
    "WAWebAutoLogoutGating",
    "WAWebEnvironment",
    "WAWebFlex.react",
    "WAWebHybridRegGating",
    "WAWebL10N",
    "WAWebLinkDeviceApiCmdTooltip.react",
    "WAWebLinkDeviceAutoLogoutToggle.react",
    "WAWebLinkDeviceCodeViewCodeType",
    "WAWebLinkDeviceCommonComponents.react",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLinkDeviceInstructions.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        banner: {
            width: "xh8yej3",
            $$css: true
        },
        wrapperM1: {
            alignSelf: "xkh2ocl",
            alignItems: "x6s0dn4",
            justifyContent: "x1qughib xr3inr3",
            rowGap: "xi32cqo",
            columnGap: "x1qgv0r9",
            flexWrap: "xozqiw3 x18t01z2",
            $$css: true
        },
        phoneCodeWrapper: {
            width: "xh8yej3",
            backgroundColor: "xf39lq1",
            borderStartStartRadius: "x16qb05n",
            borderStartEndRadius: "xi7iut8",
            borderEndEndRadius: "x1dm3dyd",
            borderEndStartRadius: "x1pv694p",
            height: "x10wjd1d",
            $$css: true
        },
        codeWrapper: {
            position: "x1n2onr6",
            alignSelf: "x1y8v6su x1eq81zi",
            $$css: true
        },
        footerWrapper: {
            display: "x78zum5",
            justifyContent: "x1qughib",
            alignSelf: "xkh2ocl",
            alignItems: "x1cy8zhl",
            flexDirection: "x1q0g3np xnlzww4",
            flexWrap: "xozqiw3 x198rtga",
            rowGap: "xxs79tx x1ewqh72",
            $$css: true
        },
        centerAlignOnSmallScreen: {
            width: "xh8yej3",
            alignItems: "x1cy8zhl xob9gl2",
            textAlign: "x1yc453h x1nj6vil",
            justifyItems: "x1eyeirb x8gkquz",
            $$css: true
        },
        marginBottom24: {
            marginBottom: "x14mdic9",
            $$css: true
        },
        marginTop20: {
            marginTop: "x1nmyh1g",
            $$css: true
        },
        paddingVert24: {
            paddingTop: "xl7twdi",
            paddingBottom: "xvg22vi",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(72);
        const { alternativeLinkDeviceMethodHint: n, codeType: a, screenReaderSubtitleConfig: i } = e;
        let l;
        if (t[0] !== e) {
            l = function() {
                if (e.onAutoLogoutToggle) {
                    e.onAutoLogoutToggle();
                }
            };
            t[0] = e;
            t[1] = l;
        } else {
            l = t[1];
        }
        const d = l;
        let p = null;
        if (o("WAWebAutoLogoutGating").isAutoLogoutEnabled() && e.onAutoLogoutToggle != null) {
            const f = e.autoLogoutEnabled ?? false;
            let g;
            if (t[2] !== d || t[3] !== f) {
                const Component = r("WAWebLinkDeviceAutoLogoutToggle.react");
                g = <Component autoLogoutEnabled={f} onAutoLogoutToggle={d}/>;
                t[2] = d;
                t[3] = f;
                t[4] = g;
            } else {
                g = t[4];
            }
            p = g;
        }
        if (a === o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.QR) {
            let h;
            if (t[5] !== e.banners) {
                const Component = o("WAWebFlex.react").FlexItem;
                h = <Component xstyle={c.banner}>{e.banners}</Component>;
                t[5] = e.banners;
                t[6] = h;
            } else {
                h = t[6];
            }
            let y;
            if (t[7] !== e.title) {
                y = u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
                    value: e.title,
                    theme: o("WAWebHybridRegGating").isHybridRegEnabled() ? "wds" : void 0
                });
                t[7] = e.title;
                t[8] = y;
            } else {
                y = t[8];
            }
            let C;
            if (t[9] !== i) {
                C = u.jsx(o("WAWebLinkDeviceCommonComponents.react").ScreenReaderSubtitle, {
                    config: i
                });
                t[9] = i;
                t[10] = C;
            } else {
                C = t[10];
            }
            let b;
            if (t[11] !== y || t[12] !== C) {
                const Component = o("WAWebFlex.react").FlexItem;
                b = <Component xstyle={c.centerAlignOnSmallScreen}>{y}{C}</Component>;
                t[11] = y;
                t[12] = C;
                t[13] = b;
            } else {
                b = t[13];
            }
            let v;
            if (t[14] !== e.subtitle) {
                const Component = o("WAWebFlex.react").FlexItem;
                v = e.subtitle != null && <Component>{u.jsx(o("WAWebLinkDeviceCommonComponents.react").Subtitle, {
                    value: e.subtitle
                })}</Component>;
                t[14] = e.subtitle;
                t[15] = v;
            } else {
                v = t[15];
            }
            let S;
            if (t[16] !== a) {
                S = u.jsx(r("WAWebLinkDeviceInstructions.react"), {
                    codeType: a
                });
                t[16] = a;
                t[17] = S;
            } else {
                S = t[17];
            }
            let R;
            if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
                R = o("WAWebHybridRegGating").isHybridRegEnabled();
                t[18] = R;
            } else {
                R = t[18];
            }
            let L;
            if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
                const Component = o("WAWebFlex.react").FlexItem;
                L = <Component marginTop={20}>{u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
                    isBold: R,
                    showUnderline: o("WAWebHybridRegGating").isHybridRegEnabled() ? false : void 0,
                    showArrow: o("WAWebHybridRegGating").isHybridRegEnabled() ? false : void 0,
                    testId: "link_device_qr_help_link",
                    text: s._("Need help?"),
                    url: m()
                })}</Component>;
                t[19] = L;
            } else {
                L = t[19];
            }
            let E;
            if (t[20] !== S) {
                const Component = o("WAWebFlex.react").FlexItem;
                E = <Component>{S}{L}</Component>;
                t[20] = S;
                t[21] = E;
            } else {
                E = t[21];
            }
            let k;
            if (t[22] !== b || t[23] !== v || t[24] !== E) {
                const Component = o("WAWebFlex.react").FlexColumn;
                k = <Component grow={r("WAWebEnvironment").isWindows ? void 0 : 1} rowGap={40} shrink={2} align="start" alignSelf="center">{b}{v}{E}</Component>;
                t[22] = b;
                t[23] = v;
                t[24] = E;
                t[25] = k;
            } else {
                k = t[25];
            }
            let I;
            if (t[26] !== e.apiCmd) {
                I = u.jsx(r("WAWebLinkDeviceApiCmdTooltip.react"), {
                    apiCmd: e.apiCmd
                });
                t[26] = e.apiCmd;
                t[27] = I;
            } else {
                I = t[27];
            }
            let T;
            if (t[28] !== e.children || t[29] !== I) {
                const Component = o("WAWebFlex.react").FlexColumn;
                T = <Component align="center" justify="center" grow={0} shrink={0} xstyle={c.codeWrapper}>{I}{e.children}</Component>;
                t[28] = e.children;
                t[29] = I;
                t[30] = T;
            } else {
                T = t[30];
            }
            let D;
            if (t[31] !== k || t[32] !== T) {
                const Component = o("WAWebFlex.react").FlexRow;
                D = <Component wrap="nowrap" xstyle={c.wrapperM1}>{k}{T}</Component>;
                t[31] = k;
                t[32] = T;
                t[33] = D;
            } else {
                D = t[33];
            }
            let x;
            if (t[34] !== p) {
                const Component = o("WAWebFlex.react").FlexItem;
                x = <Component>{p}</Component>;
                t[34] = p;
                t[35] = x;
            } else {
                x = t[35];
            }
            let $;
            if (t[36] !== n) {
                const Component = o("WAWebFlex.react").FlexItem;
                $ = <Component>{n}</Component>;
                t[36] = n;
                t[37] = $;
            } else {
                $ = t[37];
            }
            let P;
            if (t[38] !== x || t[39] !== $) {
                const Component = o("WAWebFlex.react").FlexItem;
                P = <Component xstyle={c.footerWrapper}>{x}{$}</Component>;
                t[38] = x;
                t[39] = $;
                t[40] = P;
            } else {
                P = t[40];
            }
            let N;
            if (t[41] !== D || t[42] !== P) {
                const Component = o("WAWebFlex.react").FlexColumn;
                N = <Component rowGap={o("WAWebHybridRegGating").isHybridRegEnabled() ? 8 : 40}>{D}{P}</Component>;
                t[41] = D;
                t[42] = P;
                t[43] = N;
            } else {
                N = t[43];
            }
            let M;
            if (t[44] !== h || t[45] !== N) {
                M = <>{h}{N}</>;
                t[44] = h;
                t[45] = N;
                t[46] = M;
            } else {
                M = t[46];
            }
            return M;
        }
        let w;
        if (t[47] !== e.banners) {
            const Component = o("WAWebFlex.react").FlexItem;
            w = <Component xstyle={c.banner}>{e.banners}</Component>;
            t[47] = e.banners;
            t[48] = w;
        } else {
            w = t[48];
        }
        let A;
        if (t[49] !== e.title) {
            A = u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
                value: e.title
            });
            t[49] = e.title;
            t[50] = A;
        } else {
            A = t[50];
        }
        let F;
        if (t[51] !== i) {
            F = u.jsx(o("WAWebLinkDeviceCommonComponents.react").ScreenReaderSubtitle, {
                config: i
            });
            t[51] = i;
            t[52] = F;
        } else {
            F = t[52];
        }
        let O;
        if (t[53] !== A || t[54] !== F) {
            const Component = o("WAWebFlex.react").FlexItem;
            O = <Component>{A}{F}</Component>;
            t[53] = A;
            t[54] = F;
            t[55] = O;
        } else {
            O = t[55];
        }
        let B;
        if (t[56] !== e.subtitle) {
            const Component = o("WAWebFlex.react").FlexItem;
            B = <Component>{u.jsx(o("WAWebLinkDeviceCommonComponents.react").Subtitle, {
                value: e.subtitle
            })}</Component>;
            t[56] = e.subtitle;
            t[57] = B;
        } else {
            B = t[57];
        }
        let W;
        if (t[58] === Symbol.for("react.memo_cache_sentinel")) {
            W = [
                c.phoneCodeWrapper,
                c.marginBottom24,
                c.paddingVert24
            ];
            t[58] = W;
        } else {
            W = t[58];
        }
        let q;
        if (t[59] !== e.children) {
            const Component = o("WAWebFlex.react").FlexItem;
            q = <Component align="center" justify="center" grow={0} xstyle={W}>{e.children}</Component>;
            t[59] = e.children;
            t[60] = q;
        } else {
            q = t[60];
        }
        let U;
        if (t[61] !== a) {
            const Component = o("WAWebFlex.react").FlexItem;
            U = <Component>{u.jsx(r("WAWebLinkDeviceInstructions.react"), {
                codeType: a
            })}</Component>;
            t[61] = a;
            t[62] = U;
        } else {
            U = t[62];
        }
        let V;
        if (t[63] !== n) {
            const Component = o("WAWebFlex.react").FlexItem;
            V = <Component xstyle={c.marginTop20}>{n}</Component>;
            t[63] = n;
            t[64] = V;
        } else {
            V = t[64];
        }
        let H;
        if (t[65] !== w || t[66] !== O || t[67] !== B || t[68] !== q || t[69] !== U || t[70] !== V) {
            const Component = o("WAWebFlex.react").FlexColumn;
            H = <Component>{w}{O}{B}{q}{U}{V}</Component>;
            t[65] = w;
            t[66] = O;
            t[67] = B;
            t[68] = q;
            t[69] = U;
            t[70] = V;
            t[71] = H;
        } else {
            H = t[71];
        }
        return H;
    }
    function m() {
        return `https://faq.whatsapp.com/1317564962315842?lang=${r("WAWebL10N").getNormalizedLocale()}`;
    }
    l.LinkDeviceCodeView = d;
}, 226);