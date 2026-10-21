__d("WAWebMessageContainer.react", [
    "WAWebABProps",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThemeModeContext",
    "WAWebClassnames",
    "WAWebStylesEnv",
    "WAWebVibrantOutgoingOverrides.stylex",
    "WAWebWrapperGetTailIcon",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useContext = s.useContext;
    const d = o("WAWebWrapperGetTailIcon").getTailIcon(false);
    const m = o("WAWebWrapperGetTailIcon").getTailIcon(true);
    const p = {
        messageBackground: {
            borderStartStartRadius: "x1liijdw",
            borderStartEndRadius: "xu342n7",
            borderEndEndRadius: "xelbjmh",
            borderEndStartRadius: "x16pgt24",
            position: "x1n2onr6",
            zIndex: "x12xzxwr",
            $$css: true
        },
        messageBackgroundIncoming: {
            backgroundColor: "x1ew7x2d",
            $$css: true
        },
        messageBackgroundOutgoing: {
            backgroundColor: "x1g5lz36",
            $$css: true
        },
        bgTailOverrideLeft: {
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "xu342n7",
            $$css: true
        },
        bgTailOverrideRight: {
            borderStartStartRadius: "x1liijdw",
            borderStartEndRadius: "x17un8ov",
            $$css: true
        },
        message: {
            borderStartStartRadius: "x1liijdw",
            borderStartEndRadius: "xu342n7",
            borderEndEndRadius: "xelbjmh",
            borderEndStartRadius: "x16pgt24",
            color: "x14ug900",
            flex: "x1okw0bk",
            fontSize: "x12lqup9",
            lineHeight: "x17fgdl5",
            position: "x1n2onr6",
            $$css: true
        },
        messageHighlightMention: {
            lineHeight: "x19v9tvf",
            $$css: true
        },
        messageTailOverrideIncoming: {
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "xu342n7",
            $$css: true
        },
        messageTailOverrideOutgoing: {
            borderStartStartRadius: "x1liijdw",
            borderStartEndRadius: "x17un8ov",
            $$css: true
        },
        tail: {
            display: "x1lliihq",
            height: "x18gnavp",
            position: "x10l6tqk",
            top: "x13vifvy",
            width: "x1xc55vz",
            zIndex: "xupqr0c",
            $$css: true
        },
        tailColorIncoming: {
            color: "x1l1cedg",
            $$css: true
        },
        tailColorOutgoing: {
            color: "x1fa4crm",
            $$css: true
        },
        tailLeft: {
            insetInlineStart: "x7hj1vm",
            $$css: true
        },
        tailRight: {
            insetInlineEnd: "xgvahye",
            $$css: true
        },
        tailLeftSafari: {
            insetInlineStart: "xnj87uo",
            $$css: true
        },
        tailRightSafari: {
            insetInlineEnd: "x13niomq",
            $$css: true
        }
    };
    function _(t) {
        const n = o("react-compiler-runtime").c(27);
        const { children, isSentByMe } = t;
        const l = s_useContext(r("WAWebChatThemeModeContext"));
        const { bubbleStyle, isMinimalMode, isVibrant } = l;
        let g;
        let h;
        let y;
        let C;
        if (n[0] !== bubbleStyle || n[1] !== isMinimalMode || n[2] !== isSentByMe || n[3] !== isVibrant) {
            const b = o("WAWebChatThemeGatingUtils").shouldApplyVibrantOverride({
                isVibrant,
                isSentByMe,
                isNotification: false
            });
            g = isSentByMe ? m : d;
            const v = isSentByMe || !isMinimalMode;
            let S;
            if (n[8] !== isSentByMe) {
                S = ({
                    0: "x193iq5w x1cy8zhl",
                    1: "x193iq5w xuk3077"
                })[!!isSentByMe << 0];
                n[8] = isSentByMe;
                n[9] = S;
            } else {
                S = n[9];
            }
            const R = S;
            const L = o("WAWebClassnames").classnamesConvertMeToStylexPlease((e || (e = r("stylex")))(p.message, o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention") && p.messageHighlightMention, isSentByMe ? p.messageTailOverrideOutgoing : p.messageTailOverrideIncoming, b && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingLiteralStyles.root), e(v && bubbleStyle));
            C = R;
            y = L;
            h = e.props(p.messageBackground, isSentByMe ? p.messageBackgroundOutgoing : p.messageBackgroundIncoming, isSentByMe ? p.bgTailOverrideRight : p.bgTailOverrideLeft, b && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingTheme);
            n[0] = bubbleStyle;
            n[1] = isMinimalMode;
            n[2] = isSentByMe;
            n[3] = isVibrant;
            n[4] = g;
            n[5] = h;
            n[6] = y;
            n[7] = C;
        } else {
            g = n[4];
            h = n[5];
            y = n[6];
            C = n[7];
        }
        let E;
        if (n[10] !== isSentByMe) {
            E = (e || (e = r("stylex"))).props(p.tail, isSentByMe ? p.tailColorOutgoing : p.tailColorIncoming, isSentByMe ? p.tailRight : p.tailLeft, o("WAWebStylesEnv").hasSafariFix && (isSentByMe ? p.tailRightSafari : p.tailLeftSafari));
            n[10] = isSentByMe;
            n[11] = E;
        } else {
            E = n[11];
        }
        let k;
        if (n[12] !== g) {
            k = u.jsx(g, {});
            n[12] = g;
            n[13] = k;
        } else {
            k = n[13];
        }
        let I;
        if (n[14] !== E || n[15] !== k) {
            I = <div {...babelHelpers.extends({}, E, {
                "aria-hidden": "true",
                children: k
            })}/>;
            n[14] = E;
            n[15] = k;
            n[16] = I;
        } else {
            I = n[16];
        }
        let T;
        if (n[17] !== children || n[18] !== h || n[19] !== I) {
            T = <div {...babelHelpers.extends({}, h, {
                children: [
                    I,
                    children
                ]
            })}/>;
            n[17] = children;
            n[18] = h;
            n[19] = I;
            n[20] = T;
        } else {
            T = n[20];
        }
        let D;
        if (n[21] !== y || n[22] !== T) {
            D = <div className={y}>{T}</div>;
            n[21] = y;
            n[22] = T;
            n[23] = D;
        } else {
            D = n[23];
        }
        let x;
        if (n[24] !== C || n[25] !== D) {
            x = <div className={C}>{D}</div>;
            n[24] = C;
            n[25] = D;
            n[26] = x;
        } else {
            x = n[26];
        }
        return x;
    }
    l.default = _;
}, 98);