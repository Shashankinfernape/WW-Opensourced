__d("WAWebMessageContentBox.react", [
    "WAWebBizTemplateMessageFooter.react",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAuthor.react",
    "WAWebMessageCaption.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMsgGetters",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        paddingInline6: {
            paddingInlineStart: "x25sj25",
            paddingInlineEnd: "x1icxu4v",
            $$css: true
        },
        paddingBottom5: {
            paddingBottom: "xs9asl8",
            $$css: true
        },
        paddingBottom3: {
            paddingBottom: "xg8j3zb",
            $$css: true
        },
        paddingInlineStart6: {
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        paddingTop7: {
            paddingTop: "xm7lytj",
            $$css: true
        }
    };
    const d = {
        author: {
            paddingTop: "xvwn6h4",
            $$css: true
        },
        caption: {
            boxSizing: "x9f619",
            maxWidth: "x1xtabgy",
            $$css: true
        },
        forwardedIndicator: {
            paddingTop: "xvwn6h4",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(39);
        const { children, displayType, hideCaption, hideMeta, msgKey, quotedMsg, showAuthor, trusted } = t;
        const g = hideCaption === undefined ? false : hideCaption;
        const h = hideMeta === undefined ? false : hideMeta;
        const y = showAuthor === undefined ? false : showAuthor;
        let C;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let b;
            let v;
            C = [
                (b = o("WAWebMsgGetters")).getCaption,
                (v = o("WAWebFrontendMsgGetters")).getDir,
                b.getFooter,
                b.getIsFromTemplate,
                v.getRtl,
                v.getSenderObj,
                b.getSupportsMessageFooter,
                b.getType,
                v.getShouldShowForwarded
            ];
            n[0] = C;
        } else {
            C = n[0];
        }
        const S = o("useWAWebMsgValues").useMsgValues(msgKey, C);
        const R = S[0];
        const L = S[1];
        const E = S[2];
        const k = S[4];
        const I = S[5];
        const T = S[6];
        const D = S[7];
        const x = S[8];
        const $ = y;
        const P = !g && !!R;
        let N;
        if (n[1] !== displayType || n[2] !== $ || n[3] !== x || n[4] !== msgKey || n[5] !== I) {
            N = $ ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.author, c.paddingInline6, c.paddingBottom5, x && o("WDSPaddings.stylex").wdsPaddings.paddingBottom0), {
                children: u.jsx(r("WAWebMessageAuthor.react"), {
                    msgKey,
                    contact: I,
                    displayType
                })
            })}/> : null;
            n[1] = displayType;
            n[2] = $;
            n[3] = x;
            n[4] = msgKey;
            n[5] = I;
            n[6] = N;
        } else {
            N = n[6];
        }
        let M;
        if (n[7] !== $ || n[8] !== x || n[9] !== msgKey) {
            const Component = r("WAWebMessageForwardedIndicator.react");
            M = x ? <Component msgKey={msgKey} className={(e || (e = r("stylex")))(d.forwardedIndicator, o("WDSPaddings.stylex").wdsPaddings.paddingEnd0, c.paddingBottom3, c.paddingInlineStart6, $ && o("WDSPaddings.stylex").wdsPaddings.paddingTop0)}/> : null;
            n[7] = $;
            n[8] = x;
            n[9] = msgKey;
            n[10] = M;
        } else {
            M = n[10];
        }
        let w;
        if (n[11] !== quotedMsg) {
            w = quotedMsg != null ? <div className="xsjrbtr">{quotedMsg}</div> : null;
            n[11] = quotedMsg;
            n[12] = w;
        } else {
            w = n[12];
        }
        let A;
        if (n[13] !== E || n[14] !== P || n[15] !== msgKey || n[16] !== trusted) {
            A = P ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.caption, c.paddingTop7, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, c.paddingBottom5, c.paddingInlineStart6), {
                children: u.jsx(r("WAWebMessageCaption.react"), {
                    msgKey,
                    trusted,
                    spacer: !E
                })
            })}/> : null;
            n[13] = E;
            n[14] = P;
            n[15] = msgKey;
            n[16] = trusted;
            n[17] = A;
        } else {
            A = n[17];
        }
        let F;
        if (n[18] !== L || n[19] !== E || n[20] !== msgKey || n[21] !== k || n[22] !== T || n[23] !== trusted || n[24] !== D) {
            F = T ? u.jsx(r("WAWebBizTemplateMessageFooter.react"), {
                dir: L,
                footer: E,
                isShown: T,
                msgKey,
                rtl: k,
                type: D,
                trusted
            }) : null;
            n[18] = L;
            n[19] = E;
            n[20] = msgKey;
            n[21] = k;
            n[22] = T;
            n[23] = trusted;
            n[24] = D;
            n[25] = F;
        } else {
            F = n[25];
        }
        let O;
        if (n[26] !== displayType || n[27] !== P || n[28] !== h || n[29] !== msgKey) {
            O = !h && <div {...babelHelpers.extends({}, {
                0: {
                    className: "x10l6tqk x1d37e2g x12zx8bi"
                },
                1: {
                    className: "x10l6tqk x1d37e2g xy1j3rs"
                }
            }[!!P << 0], {
                children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                    msgKey,
                    displayType,
                    theme: displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ? "date" : undefined
                })
            })}/>;
            n[26] = displayType;
            n[27] = P;
            n[28] = h;
            n[29] = msgKey;
            n[30] = O;
        } else {
            O = n[30];
        }
        let B;
        if (n[31] !== children || n[32] !== O || n[33] !== N || n[34] !== M || n[35] !== w || n[36] !== A || n[37] !== F) {
            B = <>{N}{M}{w}{children}{A}{F}{O}</>;
            n[31] = children;
            n[32] = O;
            n[33] = N;
            n[34] = M;
            n[35] = w;
            n[36] = A;
            n[37] = F;
            n[38] = B;
        } else {
            B = n[38];
        }
        return B;
    }
    l.default = m;
}, 98);