__d("WAWebMediaVideo.react", [
    "WAUnicodeUtils",
    "WAWebBizCtwaContext.react",
    "WAWebBizTemplateMessageFooter.react",
    "WAWebDashDebugBubbleBadgeSlot.react",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMediaAlbumUtils",
    "WAWebMediaConstants",
    "WAWebMediaDataGetters",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageCropping",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMsgGetters",
    "WAWebStopEvent",
    "WAWebTypesMedia",
    "WAWebVideoPreview.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useImperativeHandle, useRef } = d;
    const _ = {
        bubble: {
            boxSizing: "x9f619",
            maxWidth: "x13nahy2",
            position: "x1n2onr6",
            zIndex: "x1vjfegm",
            $$css: true
        },
        bubbleAnnouncement: {
            maxWidth: "xmewjk2",
            $$css: true
        },
        bubbleChannelAlerts: {
            maxWidth: "xmewjk2",
            $$css: true
        },
        portrait: {
            maxWidth: "xpdoh32",
            $$css: true
        },
        ctwaContainerWidth: {
            maxWidth: "x1mvkqlo",
            $$css: true
        },
        forwardedIndicator: {
            paddingTop: "xyqdw3p",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "xg8j3zb",
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        hasAuthorForwardedIndicator: {
            paddingTop: "xexx8yu",
            $$css: true
        },
        nonAlbumBubble: {
            paddingTop: "xyqdw3p",
            paddingInlineEnd: "x1im30kd",
            paddingBottom: "xg8j3zb",
            paddingInlineStart: "x1djpfga",
            $$css: true
        }
    };
    function f(t) {
        const i = o("react-compiler-runtime").c(93);
        let l;
        let u;
        if (i[0] !== t) {
            u = t.ref;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            i[0] = t;
            i[1] = l;
            i[2] = u;
        } else {
            l = i[1];
            u = i[2];
        }
        const d = l;
        const { currentAlbumMessageIndex, displayAuthor, displayType, msgKey, overlayContent, theme } = d;
        const v = currentAlbumMessageIndex === undefined ? 0 : currentAlbumMessageIndex;
        const SRef = useRef(null);
        let R;
        if (i[3] === Symbol.for("react.memo_cache_sentinel")) {
            R = function(t) {
                t.preventDefault();
                SRef.current?.play(t);
            };
            i[3] = R;
        } else {
            R = i[3];
        }
        const L = R;
        let E;
        if (i[4] === Symbol.for("react.memo_cache_sentinel")) {
            E = function() {
                return {
                    handleKeyActivation: L
                };
            };
            i[4] = E;
        } else {
            E = i[4];
        }
        useImperativeHandle(u, E);
        let k;
        if (i[5] === Symbol.for("react.memo_cache_sentinel")) {
            let I;
            let T;
            k = [
                (I = o("WAWebMsgGetters")).getCaption,
                (T = o("WAWebFrontendMsgGetters")).getDir,
                I.getFooter,
                I.getIsCarouselCard,
                I.getIsPSA,
                T.getRtl,
                T.getSenderObj,
                I.getType,
                I.getCtwaContext,
                I.getSupportsMessageFooter,
                T.getText,
                T.getMediaData,
                T.getShouldShowForwarded
            ];
            i[5] = k;
        } else {
            k = i[5];
        }
        const D = o("useWAWebMsgValues").useMsgValues(msgKey, k);
        const x = D[0];
        const $ = D[1];
        const P = D[2];
        const N = D[3];
        const M = D[4];
        const w = D[5];
        const A = D[6];
        const F = D[7];
        const O = D[8];
        const B = D[9];
        const W = D[10];
        const q = D[11];
        const U = D[12];
        let V;
        if (i[6] === Symbol.for("react.memo_cache_sentinel")) {
            V = [
                o("WAWebMediaDataGetters").getAspectRatio
            ];
            i[6] = V;
        } else {
            V = i[6];
        }
        const H = o("useWAWebMediaDataValues").useMediaDataValues(q, V);
        const G = H[0];
        const z = o("WAUnicodeUtils").numCodepoints(W ?? "") > o("WAWebMediaConstants").MAX_PORTRAIT_MEDIA_CAPTION_LENGTH;
        const j = l.albumMsgs?.length ?? 0;
        let K;
        if (i[7] !== G || i[8] !== v || i[9] !== displayType || i[10] !== N || i[11] !== z || i[12] !== l.albumMsgs || i[13] !== j || i[14] !== theme || i[15] !== F) {
            K = o("WAWebMessageCropping").getBubbleDimension(F, false, N, G, v, j, theme, displayType, z, undefined, o("WAWebMediaAlbumUtils").isAlbumPortraitOriented(l.albumMsgs));
            i[7] = G;
            i[8] = v;
            i[9] = displayType;
            i[10] = N;
            i[11] = z;
            i[12] = l.albumMsgs;
            i[13] = j;
            i[14] = theme;
            i[15] = F;
            i[16] = K;
        } else {
            K = i[16];
        }
        const Q = K;
        const { bubbleHeight, bubbleWidth } = Q;
        let J;
        let Z;
        if (i[17] !== bubbleHeight || i[18] !== bubbleWidth || i[19] !== O || i[20] !== v || i[21] !== $ || i[22] !== displayAuthor || i[23] !== displayType || i[24] !== P || i[25] !== M || i[26] !== q || i[27] !== x || i[28] !== msgKey || i[29] !== overlayContent || i[30] !== l.albumMsgs || i[31] !== l.displayType || i[32] !== l.hover || i[33] !== l.quotedMsg || i[34] !== l.theme || i[35] !== l.trusted || i[36] !== l.zoomMsg || i[37] !== w || i[38] !== A || i[39] !== U || i[40] !== B || i[41] !== theme || i[42] !== F) {
            Z = Symbol.for("react.early_return_sentinel");
            e: {
                const ee = bubbleWidth < bubbleHeight && o("WAWebMessageCropping").canUseCustomCropping({
                    displayType,
                    msgType: F,
                    theme
                });
                const te = o("WAWebDisplayType").isWideDisplay(displayType);
                const ne = U && l.theme !== o("WAWebTypesMedia").DisplayTheme.Album && l.theme !== o("WAWebTypesMedia").DisplayTheme.AlbumV2;
                let re;
                if (i[45] !== displayAuthor || i[46] !== msgKey || i[47] !== ne) {
                    re = ne ? c.jsx(r("WAWebMessageForwardedIndicator.react"), {
                        msgKey,
                        xstyle: [
                            _.forwardedIndicator,
                            displayAuthor && _.hasAuthorForwardedIndicator
                        ]
                    }) : null;
                    i[45] = displayAuthor;
                    i[46] = msgKey;
                    i[47] = ne;
                    i[48] = re;
                } else {
                    re = i[48];
                }
                const oe = re;
                let ae;
                if (i[49] !== msgKey) {
                    ae = c.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
                        msgKey
                    });
                    i[49] = msgKey;
                    i[50] = ae;
                } else {
                    ae = i[50];
                }
                const ie = ae;
                let le;
                if (i[51] !== displayAuthor || i[52] !== displayType || i[53] !== msgKey || i[54] !== A || i[55] !== ne) {
                    le = displayAuthor ? <div {...babelHelpers.extends({}, {
                        0: {
                            className: "x9f619 xyqdw3p x14vy60q xs9asl8 x25sj25"
                        },
                        1: {
                            className: "x9f619 xyqdw3p x14vy60q x25sj25 x18d9i69"
                        }
                    }[!!ne << 0], {
                        children: c.jsx(r("WAWebMessageAuthor.react"), {
                            msgKey,
                            contact: A,
                            displayType
                        })
                    })}/> : null;
                    i[51] = displayAuthor;
                    i[52] = displayType;
                    i[53] = msgKey;
                    i[54] = A;
                    i[55] = ne;
                    i[56] = le;
                } else {
                    le = i[56];
                }
                const se = le;
                const ue = x != null && x !== "" && theme !== o("WAWebTypesMedia").DisplayTheme.AlbumV2 ? <div {...babelHelpers.extends({}, {
                    0: {
                        className: "x9f619 x1xtabgy xm7lytj x11lfxj5 xs9asl8 x25sj25"
                    },
                    2: {
                        className: "x9f619 x1xtabgy xm7lytj x11lfxj5 x25sj25 x1em1mmk"
                    },
                    1: {
                        className: "x9f619 xm7lytj x11lfxj5 xs9asl8 x25sj25 xno0opx"
                    },
                    3: {
                        className: "x9f619 xm7lytj x11lfxj5 x25sj25 x1em1mmk xno0opx"
                    }
                }[!!M << 1 | !!te << 0], {
                    children: c.jsx(r("WAWebMessageCaption.react"), {
                        msgKey,
                        trusted: l.trusted,
                        spacer: !(B && P),
                        testId: "video-caption"
                    })
                })}/> : null;
                const ce = (s || (s = r("stylex")))(_.bubble, (!theme || theme !== o("WAWebTypesMedia").DisplayTheme.Album && theme !== o("WAWebTypesMedia").DisplayTheme.AlbumV2) && _.nonAlbumBubble, ee && _.portrait, O != null && _.ctwaContainerWidth, te && _.bubbleAnnouncement, l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS && _.bubbleChannelAlerts);
                const de = l.quotedMsg ? <div {...babelHelpers.extends({}, {
                    0: {
                        className: "xahult9 x1xtabgy"
                    },
                    2: {
                        className: "xahult9 xsi3fy0"
                    },
                    1: {
                        className: "xahult9 xno0opx"
                    },
                    3: {
                        className: "xahult9 xno0opx"
                    }
                }[!!ee << 1 | !!te << 0], {
                    children: l.quotedMsg
                })}/> : null;
                let me;
                if (overlayContent == null && theme !== o("WAWebTypesMedia").DisplayTheme.AlbumV2) {
                    let pe;
                    if (i[57] !== ue) {
                        pe = ({
                            0: {
                                className: "xrb244j x10l6tqk x11dcrhx x11uqc5h"
                            },
                            1: {
                                className: "x10l6tqk x11uqc5h xy1j3rs x1inkcgm"
                            }
                        })[!!ue << 0];
                        i[57] = ue;
                        i[58] = pe;
                    } else {
                        pe = i[58];
                    }
                    const _e = theme === o("WAWebTypesMedia").DisplayTheme.Album;
                    let fe;
                    if (i[59] !== displayType || i[60] !== msgKey || i[61] !== _e) {
                        fe = c.jsx(o("WAWebMessageMeta.react").Meta, {
                            msgKey,
                            displayType,
                            isAlbum: _e
                        });
                        i[59] = displayType;
                        i[60] = msgKey;
                        i[61] = _e;
                        i[62] = fe;
                    } else {
                        fe = i[62];
                    }
                    let ge;
                    if (i[63] !== pe || i[64] !== fe) {
                        ge = <div {...babelHelpers.extends({}, pe, {
                            children: fe
                        })}/>;
                        i[63] = pe;
                        i[64] = fe;
                        i[65] = ge;
                    } else {
                        ge = i[65];
                    }
                    me = ge;
                }
                let he;
                if (i[66] === Symbol.for("react.memo_cache_sentinel")) {
                    he = "xdj266r x14z9mp xahult9 x1lziwak";
                    i[66] = he;
                } else {
                    he = i[66];
                }
                let ye;
                if (i[67] !== msgKey) {
                    ye = c.jsx(r("WAWebBizCtwaContext.react"), {
                        msgKey,
                        wrapperClass: he
                    });
                    i[67] = msgKey;
                    i[68] = ye;
                } else {
                    ye = i[68];
                }
                const albumMsgs = l.albumMsgs;
                const hasOverlay = !!overlayContent;
                let ve;
                if (i[69] !== v || i[70] !== displayType || i[71] !== q || i[72] !== msgKey || i[73] !== l.albumMsgs || i[74] !== l.hover || i[75] !== l.zoomMsg || i[76] !== hasOverlay || i[77] !== theme) {
                    const Component = r("WAWebVideoPreview.react");
                    ve = <Component ref={SRef} albumMsgs={albumMsgs} currentAlbumMessageIndex={v} displayType={displayType} hasOverlay={hasOverlay} hover={l.hover} msgKey={msgKey} mediaData={q} theme={theme} zoomMsg={l.zoomMsg}/>;
                    i[69] = v;
                    i[70] = displayType;
                    i[71] = q;
                    i[72] = msgKey;
                    i[73] = l.albumMsgs;
                    i[74] = l.hover;
                    i[75] = l.zoomMsg;
                    i[76] = hasOverlay;
                    i[77] = theme;
                    i[78] = ve;
                } else {
                    ve = i[78];
                }
                let Se;
                if (i[79] !== msgKey) {
                    Se = c.jsx(r("WAWebDashDebugBubbleBadgeSlot.react"), {
                        msgKey
                    });
                    i[79] = msgKey;
                    i[80] = Se;
                } else {
                    Se = i[80];
                }
                let Re;
                if (i[81] !== $ || i[82] !== P || i[83] !== msgKey || i[84] !== l.trusted || i[85] !== w || i[86] !== B || i[87] !== F) {
                    Re = c.jsx(r("WAWebBizTemplateMessageFooter.react"), {
                        dir: $,
                        footer: P,
                        isShown: B,
                        msgKey,
                        rtl: w,
                        type: F,
                        trusted: l.trusted
                    });
                    i[81] = $;
                    i[82] = P;
                    i[83] = msgKey;
                    i[84] = l.trusted;
                    i[85] = w;
                    i[86] = B;
                    i[87] = F;
                    i[88] = Re;
                } else {
                    Re = i[88];
                }
                let Le = <div className={ce}>{se}{oe}{ie}{de}{ye}{ve}{Se}{ue}{Re}{me}</div>;
                if (ue) {
                    let Ee;
                    if (i[89] !== Le || i[90] !== msgKey || i[91] !== A) {
                        const Component = r("WAWebMessageBubbleHiddenText.react");
                        Ee = <Component contact={A} msgKey={msgKey} onClick={o("WAWebStopEvent").stopPropagation}>{Le}</Component>;
                        i[89] = Le;
                        i[90] = msgKey;
                        i[91] = A;
                        i[92] = Ee;
                    } else {
                        Ee = i[92];
                    }
                    Z = Ee;
                    break e;
                }
                if (overlayContent != null) {
                    Le = <div {...babelHelpers.extends({}, {
                        0: {
                            className: "x6s0dn4 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1ypdohk x78zum5 x1iyjqo2 xl56j7k xlfzvqq x6ikm8r x10wlt62 x1n2onr6"
                        },
                        1: {
                            className: "x6s0dn4 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1ypdohk x78zum5 x1iyjqo2 xl56j7k x6ikm8r x10wlt62 x1n2onr6 x1idnn2"
                        }
                    }[!!te << 0], {
                        children: [
                            Le,
                            overlayContent
                        ]
                    })}/>;
                }
                J = <div onClick={o("WAWebStopEvent").stopPropagation}>{Le}</div>;
            }
            i[17] = bubbleHeight;
            i[18] = bubbleWidth;
            i[19] = O;
            i[20] = v;
            i[21] = $;
            i[22] = displayAuthor;
            i[23] = displayType;
            i[24] = P;
            i[25] = M;
            i[26] = q;
            i[27] = x;
            i[28] = msgKey;
            i[29] = overlayContent;
            i[30] = l.albumMsgs;
            i[31] = l.displayType;
            i[32] = l.hover;
            i[33] = l.quotedMsg;
            i[34] = l.theme;
            i[35] = l.trusted;
            i[36] = l.zoomMsg;
            i[37] = w;
            i[38] = A;
            i[39] = U;
            i[40] = B;
            i[41] = theme;
            i[42] = F;
            i[43] = J;
            i[44] = Z;
        } else {
            J = i[43];
            Z = i[44];
        }
        if (Z !== Symbol.for("react.early_return_sentinel")) {
            return Z;
        }
        return J;
    }
    l.default = f;
}, 98);