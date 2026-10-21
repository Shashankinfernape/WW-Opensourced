__d("WAWebMessageMenu.react", [
    "WAWebAdAttributionUtils",
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeValue",
    "WAWebCtwaAGMUtils",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebKeyboardIsKeyActivation",
    "WAWebL10N",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgModelPropUtils",
    "WAWebMsgSelectors",
    "WAWebMsgType",
    "WAWebPipIsParsableOnlineVideoUrl",
    "WAWebProtobufsE2E.pb",
    "WAWebStateUtils",
    "WAWebStopEvent",
    "WAWebThemeContext",
    "WAWebUnifiedResponseUtils",
    "WAWebViewOnceState",
    "WAWebWallpaper",
    "WDSFocusStateStyles",
    "WDSIconIcExpandMore.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useContext, useImperativeHandle, useRef } = d;
    const f = [
        o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.IMAGE,
        o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.VIDEO
    ];
    const g = [
        r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION,
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO,
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER,
        r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP
    ];
    const h = {
        context: {
            position: "x10l6tqk",
            top: "x1jzctok",
            insetInlineEnd: "xceh6e4",
            zIndex: "xjhb59c",
            width: "x10h3iyq",
            height: "x9fpu7x",
            $$css: true
        },
        contextIn: {
            background: "x1n92vqa",
            $$css: true
        },
        contextOut: {
            background: "x1595w2n",
            $$css: true
        },
        contextInverse: {
            insetInlineEnd: "xnro73h",
            insetInlineStart: "x1fb7gu6",
            $$css: true
        },
        contextInverseIcon: {
            insetInlineEnd: "xnro73h",
            insetInlineStart: "x1o0tod",
            $$css: true
        },
        contextInverseIn: {
            background: "xjw9qsh",
            $$css: true
        },
        contextInverseOut: {
            background: "x64ygrw",
            $$css: true
        },
        contextSpecialIn: {
            background: "xsluj4e",
            $$css: true
        },
        contextSpecialOut: {
            background: "xsluj4e",
            $$css: true
        },
        contextPttFix: {
            insetInlineEnd: "x1og1502",
            insetInlineStart: "x1tvzbhf",
            left: null,
            right: null,
            background: "x11g6tue",
            $$css: true
        },
        contextMultiVcardIn: {
            width: "xge0ay3",
            height: "xnnlda6",
            background: "x1d8sa2z",
            $$css: true
        },
        contextMultiVcardOut: {
            width: "xge0ay3",
            height: "xnnlda6",
            background: "x1oomfc",
            $$css: true
        },
        contextTransparent: {
            background: "x11g6tue",
            $$css: true
        },
        noBg: {
            background: "x11g6tue",
            $$css: true
        },
        contextEventOut: {
            background: "x1ie7x4c",
            $$css: true
        },
        contextEventIn: {
            background: "x1ie7x4c",
            $$css: true
        },
        contextMediaLTR: {
            background: "xrumn1r",
            $$css: true
        },
        contextMediaRTL: {
            background: "xvfnxmo",
            $$css: true
        },
        groupHistoryMessageDark: {
            background: "x104how",
            $$css: true
        },
        groupHistoryMessageLight: {
            background: "xx0f3s1",
            $$css: true
        },
        contextIcon: {
            color: "x1bvqhpb",
            cursor: "x1ypdohk",
            height: "xmix8c7",
            paddingInlineStart: "x1djpfga",
            paddingInlineEnd: "x1im30kd",
            position: "x10l6tqk",
            insetInlineEnd: "xtijo5x",
            top: "xs7f9wi",
            width: "x1xp8n7a",
            $$css: true
        },
        contextIconFocusable: {
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            $$css: true
        },
        contextIconMedia: {
            color: "x17t9dm2",
            height: "xmix8c7",
            pointerEvents: "x67bb7w",
            position: "x10l6tqk",
            insetInlineEnd: "xceh6e4",
            top: "x1jzctok",
            width: "x1xp8n7a",
            $$css: true
        },
        contextSpecial: {
            top: "xyc4j8s",
            insetInlineEnd: "x1inkcgm",
            $$css: true
        },
        contextMedia: {
            position: "x10l6tqk",
            top: "xxk6nc9",
            insetInlineEnd: "x1ro0b6g",
            zIndex: "xjhb59c",
            width: "xylgo91",
            maxWidth: "xq8v1hd",
            height: "x1vqgdyp",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            pointerEvents: "x47corl",
            cursor: "x1ypdohk",
            borderStartEndRadius: "xx9ypkp",
            $$css: true
        },
        contextMediaDocument: {
            top: "xndqk7f",
            insetInlineEnd: "xxx7yvo",
            $$css: true
        },
        contextDoc: {
            background: "x11g6tue",
            insetInlineEnd: "xxx7yvo",
            top: "xndqk7f",
            $$css: true
        },
        contextTransparentAuthor: {
            top: "xxk6nc9",
            $$css: true
        },
        contextTransparentContainer: {
            height: "x1fgtraw",
            top: "x1jzctok",
            width: "xgd8bvy",
            $$css: true
        },
        contextTransparentInverseContainer: {
            color: "x17t9dm2",
            $$css: true
        },
        contextIconInTransparent: {
            color: "x1qlax0c",
            opacity: "x1hc1fzr",
            paddingTop: "x123j3cw",
            paddingInlineEnd: "x1gabggj",
            paddingBottom: "xs9asl8",
            paddingInlineStart: "xaso8d8",
            top: "x13vifvy",
            zIndex: "xhtitgo",
            $$css: true
        },
        contextIconInTransparentInverse: {
            color: "x17t9dm2",
            $$css: true
        }
    };
    function YComponent(t) {
        const n = o("react-compiler-runtime").c(116);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { ariaLabel, contextOwnerIsKeyboardFocused, hasAuthor, isGroupedSticker, isMenuOpen, msg, onToggle, role, tabIndex } = l;
        const k = contextOwnerIsKeyboardFocused === undefined ? false : contextOwnerIsKeyboardFocused;
        const IRef = useRef(null);
        const TRef = useRef(null);
        const D = useContext(o("WAWebThemeContext").ThemeContext);
        const x = o("WAWebThemeContext").useIsDarkTheme();
        let $;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            var P;
            $ = [
                (P = o("WAWebMsgGetters")).getAck,
                P.getLinkPreview,
                P.getMatchedText,
                P.getCtwaContext,
                o("WAWebFrontendMsgGetters").getDir,
                o("WAWebFrontendMsgGetters").getRtl,
                P.getIsMedia,
                P.getIsSentByMe,
                P.getIsGroupMsg,
                P.getIsNewsletterMsg,
                P.getIsViewOnce,
                P.getInteractiveHeader,
                P.getType,
                P.getQuotedMsg,
                P.getBody,
                P.getQuotedRemoteJid,
                P.getRichPreviewType,
                P.getDoNotPlayInline,
                P.getNewsletterAdminInviteInfo
            ];
            n[3] = $;
        } else {
            $ = n[3];
        }
        const N = o("useWAWebMsgValues").useMsgValues(a.msg.id, $);
        const M = N[1];
        const w = N[2];
        const A = N[3];
        const F = N[4];
        const O = N[5];
        const B = N[6];
        const W = N[7];
        const isGroupMsg = N[8];
        const U = N[9];
        const V = N[10];
        const H = N[11];
        const G = N[12];
        const z = N[13];
        const j = N[14];
        const K = N[15];
        const Q = N[16];
        const X = N[17];
        const Y = N[18];
        let J;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            var P;
            J = [
                (P = o("WAWebMsgGetters")).getList,
                P.getNativeFlowName,
                P.getThumbnailDirectPath,
                P.getThumbnailHeight,
                P.getThumbnailWidth,
                o("WAWebFrontendMsgGetters").getText,
                o("WAWebFrontendMsgGetters").getIsTransparentMsg,
                o("WAWebFrontendMsgGetters").getIsTransparentMsgEmoji,
                P.getIsGroupHistoryMessageInOwnChat,
                P.getUnifiedResponse
            ];
            n[4] = J;
        } else {
            J = n[4];
        }
        const Z = o("useWAWebMsgValues").useMsgValues(a.msg.id, J);
        const ee = Z[0];
        const te = Z[1];
        const isTransparentMsg = Z[6];
        const re = Z[7];
        const oe = Z[8];
        const ae = Z[9];
        let ie;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            ie = function() {
                return {
                    getContext: function() {
                        return TRef.current;
                    },
                    getElement: function() {
                        return IRef.current;
                    }
                };
            };
            n[5] = ie;
        } else {
            ie = n[5];
        }
        useImperativeHandle(i, ie);
        let le;
        if (n[6] !== onToggle) {
            le = function(t) {
                t.stopPropagation();
                onToggle(t.target);
            };
            n[6] = onToggle;
            n[7] = le;
        } else {
            le = n[7];
        }
        const se = le;
        const ue = !!z;
        const ce = ue && !!K;
        let de;
        if (n[8] !== msg) {
            de = o("WAWebMsgSelectors").showForwarded(msg);
            n[8] = msg;
            n[9] = de;
        } else {
            de = n[9];
        }
        const me = de;
        let pe;
        let _e;
        let fe;
        if (n[10] !== j || n[11] !== D || n[12] !== k || n[13] !== A || n[14] !== F || n[15] !== X || n[16] !== hasAuthor || n[17] !== ue || n[18] !== ce || n[19] !== H || n[20] !== x || n[21] !== oe || n[22] !== isGroupMsg || n[23] !== isGroupedSticker || n[24] !== U || n[25] !== W || n[26] !== isTransparentMsg || n[27] !== re || n[28] !== V || n[29] !== M || n[30] !== ee?.listType || n[31] !== w || n[32] !== msg || n[33] !== B || n[34] !== te || n[35] !== Y || n[36] !== a.displayType || n[37] !== z || n[38] !== Q || n[39] !== O || n[40] !== me || n[41] !== G || n[42] !== ae) {
            const isWide = o("WAWebDisplayType").isWideDisplay(a.displayType);
            const ye = G === o("WAWebMsgType").MSG_TYPE.DOCUMENT || H?.mediaType === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.DOCUMENT;
            const Ce = ye && !j;
            let be;
            if (n[46] !== j || n[47] !== ye) {
                be = ye && !r("isStringNullOrEmpty")(j);
                n[46] = j;
                n[47] = ye;
                n[48] = be;
            } else {
                be = n[48];
            }
            const ve = be;
            const Se = G === o("WAWebMsgType").MSG_TYPE.LOCATION;
            let Re;
            if (n[49] !== X || n[50] !== M || n[51] !== w || n[52] !== Q) {
                Re = M && o("WAWebPipIsParsableOnlineVideoUrl").isParsableOnlineVideoURL(Q, w, X);
                n[49] = X;
                n[50] = M;
                n[51] = w;
                n[52] = Q;
                n[53] = Re;
            } else {
                Re = n[53];
            }
            const Le = Re;
            const Ee = G === o("WAWebMsgType").MSG_TYPE.LIST && ee?.listType === o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST;
            const ke = Y != null;
            let Ie;
            if (n[54] !== ae) {
                Ie = o("WAWebUnifiedResponseUtils").isImagineResponse(ae);
                n[54] = ae;
                n[55] = Ie;
            } else {
                Ie = n[55];
            }
            const Te = Ie;
            let De;
            if (n[56] !== H || n[57] !== Te || n[58] !== B) {
                De = B || H?.mediaType != null && f.includes(H.mediaType) || Te;
                n[56] = H;
                n[57] = Te;
                n[58] = B;
                n[59] = De;
            } else {
                De = n[59];
            }
            const xe = De;
            const $e = A != null && A.thumbnail != null && A.thumbnailUrl != null && A.sourceUrl != null;
            const Pe = o("WAWebCtwaAGMUtils").isWamoAGMIntegrationEnabled(A?.sourceApp);
            const Ne = Pe ? $e && (msg.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE || msg.ctwaContext?.automatedGreetingMessageShown !== true) : msg.type !== o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && $e;
            let Me;
            if (n[60] !== ue || n[61] !== Ne || n[62] !== ve || n[63] !== Se || n[64] !== xe || n[65] !== Ee || n[66] !== W || n[67] !== V || n[68] !== msg || n[69] !== te || n[70] !== Le || n[71] !== G) {
                Me = ve || Se || ue || Ee || G === o("WAWebMsgType").MSG_TYPE.PAYMENT || Le || G === o("WAWebMsgType").MSG_TYPE.PRODUCT || G === o("WAWebMsgType").MSG_TYPE.ALBUM || te != null && g.includes(te) || Ne || xe && !V && G !== o("WAWebMsgType").MSG_TYPE.AUDIO || V && !W && !o("WAWebViewOnceState").isViewed(msg.safe());
                n[60] = ue;
                n[61] = Ne;
                n[62] = ve;
                n[63] = Se;
                n[64] = xe;
                n[65] = Ee;
                n[66] = W;
                n[67] = V;
                n[68] = msg;
                n[69] = te;
                n[70] = Le;
                n[71] = G;
                n[72] = Me;
            } else {
                Me = n[72];
            }
            const we = Me;
            let Ae;
            if (n[73] !== msg) {
                Ae = o("WAWebMsgLinks").getSuspiciousLinks(msg);
                n[73] = msg;
                n[74] = Ae;
            } else {
                Ae = n[74];
            }
            const Fe = Ae.length > 0;
            let Oe;
            if (n[75] !== hasAuthor || n[76] !== Fe || n[77] !== M || n[78] !== msg || n[79] !== Le || n[80] !== me || n[81] !== G) {
                Oe = G === o("WAWebMsgType").MSG_TYPE.CHAT && M && !Le && !hasAuthor && !me && !Fe && o("WAWebMsgModelPropUtils").isTrusted(msg);
                n[75] = hasAuthor;
                n[76] = Fe;
                n[77] = M;
                n[78] = msg;
                n[79] = Le;
                n[80] = me;
                n[81] = G;
                n[82] = Oe;
            } else {
                Oe = n[82];
            }
            const Be = Oe;
            let We;
            if (n[83] !== msg) {
                We = o("WAWebMediaLinkPreviewUtils").displayHighQualityLinkPreview(o("WAWebStateUtils").unproxy(msg.unsafe()));
                n[83] = msg;
                n[84] = We;
            } else {
                We = n[84];
            }
            const qe = We;
            const Ue = Be && !qe && !W && !ue;
            let Ve;
            if (n[85] !== qe || n[86] !== hasAuthor || n[87] !== Fe || n[88] !== we || n[89] !== Be || n[90] !== msg || n[91] !== me) {
                Ve = we && !hasAuthor && !Fe && !me && !o("WAWebAdAttributionUtils").shouldShowAdAttribution(msg) || Be && qe;
                n[85] = qe;
                n[86] = hasAuthor;
                n[87] = Fe;
                n[88] = we;
                n[89] = Be;
                n[90] = msg;
                n[91] = me;
                n[92] = Ve;
            } else {
                Ve = n[92];
            }
            const He = Ve;
            const Ge = G === o("WAWebMsgType").MSG_TYPE.PTT && !V || G === o("WAWebMsgType").MSG_TYPE.AUDIO;
            const ze = G === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD && !ue && !hasAuthor && !me;
            const je = G === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE;
            const Ke = je && !hasAuthor && !me && !ue;
            const Qe = (Be && !qe && W || Ce || ke) && !hasAuthor && !me && !ue;
            const Xe = v({
                msg,
                isGroupedSticker,
                isGroupMsg,
                isNewsletterMsg: U,
                isWide,
                isSentByMe: W,
                isTransparentMsg
            });
            let Ye;
            if (n[93] !== F || n[94] !== hasAuthor || n[95] !== ue || n[96] !== Le || n[97] !== O || n[98] !== me || n[99] !== G) {
                Ye = G === o("WAWebMsgType").MSG_TYPE.CHAT && !ue && !hasAuthor && !me && !Le && !o("WAWebMediaLinkPreviewUtils").displayHighQualityLinkPreview && !!F && O !== r("WAWebL10N").isRTL();
                n[93] = F;
                n[94] = hasAuthor;
                n[95] = ue;
                n[96] = Le;
                n[97] = O;
                n[98] = me;
                n[99] = G;
                n[100] = Ye;
            } else {
                Ye = n[100];
            }
            const Je = Ye;
            const Ze = Ge && r("WAWebL10N").isRTL() && !hasAuthor;
            const et = G === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION || G === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE;
            const tt = He || Ue || Ke;
            const nt = Je || Ze;
            const rt = Ce && !hasAuthor && !me && !ue;
            let ot = Xe;
            if (re && z) {
                ot = false;
            }
            let at;
            if (!k && !ce) {
                if (Qe) {
                    if (Be && W) {
                        at = h.noBg;
                    } else {
                        at = W ? h.contextSpecialOut : h.contextSpecialIn;
                    }
                } else if (G === o("WAWebMsgType").MSG_TYPE.CALL_LOG || et && W) {
                    at = h.noBg;
                } else if (Ge && !ue && !hasAuthor) {
                    if (r("WAWebL10N").isRTL() && W || !r("WAWebL10N").isRTL() && !W) {
                        at = h.contextPttFix;
                    }
                } else if (nt) {
                    at = W ? h.contextInverseOut : h.contextInverseIn;
                } else if (Ge) {
                    at = h.noBg;
                } else if (ze) {
                    at = W ? h.contextMultiVcardOut : h.contextMultiVcardIn;
                } else if (Xe) {
                    if (!re || !z) {
                        at = h.contextTransparent;
                    }
                } else if (re) {
                    at = W ? h.noBg : h.contextIn;
                } else if (et) {
                    if (hasAuthor) {
                        at = h.noBg;
                    } else {
                        at = W ? h.contextEventOut : h.contextEventIn;
                    }
                } else if ((msg.isForwarded || oe) && B) {
                    at = h.noBg;
                } else {
                    at = W ? h.contextOut : h.contextIn;
                }
            }
            let it;
            if (Xe) {
                const lt = r("WAWebChatPreferenceCollection").get("defaultPreference");
                const st = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(lt?.wallpaperValue, x ? "dark" : "light");
                const backgroundColor = st.wallpaper;
                const ct = {
                    backgroundColor,
                    opacity: 0.9
                };
                pe = <div className={{
                    0: "x22v28t",
                    1: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1fgtraw x1o0tod x10l6tqk x13vifvy xgd8bvy x1vjfegm x22v28t"
                }[!!ot << 0]} style={ct}/>;
                it = o("WAWebWallpaper").invertTransparentWallpaperColors(D.theme, backgroundColor);
            }
            let dt = null;
            if (tt) {
                dt = r("WAWebL10N").isRTL() ? h.contextMediaRTL : h.contextMediaLTR;
            }
            _e = (s || (s = r("stylex")))((nt ? He : tt) ? h.contextIconMedia : h.contextIcon, nt && h.contextInverseIcon, ot && h.contextIconInTransparent, Xe && it === true && h.contextIconInTransparentInverse, h.contextIconFocusable, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus);
            fe = s((!(He || Be) || Qe) && h.context, tt && h.contextMedia, Qe && h.contextSpecial, ve && h.contextMediaDocument, isTransparentMsg && !Xe && h.contextTransparentAuthor, ot && h.contextTransparentContainer, nt && h.contextInverse, at, dt, oe && !tt && (x ? h.groupHistoryMessageDark : h.groupHistoryMessageLight), rt && h.contextDoc, Xe && it === true && h.contextTransparentInverseContainer);
            n[10] = j;
            n[11] = D;
            n[12] = k;
            n[13] = A;
            n[14] = F;
            n[15] = X;
            n[16] = hasAuthor;
            n[17] = ue;
            n[18] = ce;
            n[19] = H;
            n[20] = x;
            n[21] = oe;
            n[22] = isGroupMsg;
            n[23] = isGroupedSticker;
            n[24] = U;
            n[25] = W;
            n[26] = isTransparentMsg;
            n[27] = re;
            n[28] = V;
            n[29] = M;
            n[30] = ee?.listType;
            n[31] = w;
            n[32] = msg;
            n[33] = B;
            n[34] = te;
            n[35] = Y;
            n[36] = a.displayType;
            n[37] = z;
            n[38] = Q;
            n[39] = O;
            n[40] = me;
            n[41] = G;
            n[42] = ae;
            n[43] = pe;
            n[44] = _e;
            n[45] = fe;
        } else {
            pe = n[43];
            _e = n[44];
            fe = n[45];
        }
        const mt = fe;
        let pt;
        if (n[101] !== se) {
            pt = function(t) {
                if (r("WAWebKeyboardIsKeyActivation")(t)) {
                    se(t);
                }
            };
            n[101] = se;
            n[102] = pt;
        } else {
            pt = n[102];
        }
        const _t = pt;
        let ft;
        if (n[103] === Symbol.for("react.memo_cache_sentinel")) {
            ft = c.jsx(r("WDSIconIcExpandMore.react"), {});
            n[103] = ft;
        } else {
            ft = n[103];
        }
        const gt = ft;
        let ht;
        if (n[104] !== ariaLabel || n[105] !== se || n[106] !== _t || n[107] !== _e || n[108] !== isMenuOpen || n[109] !== role || n[110] !== tabIndex) {
            ht = <div data-testid="icon-down-context" data-js-context-icon className={_e} ref={TRef} onMouseDown={o("WAWebStopEvent").stopPropagation} tabIndex={tabIndex} onKeyDown={_t} aria-label={ariaLabel} aria-expanded={isMenuOpen} role={role} onClick={se}>{gt}</div>;
            n[104] = ariaLabel;
            n[105] = se;
            n[106] = _t;
            n[107] = _e;
            n[108] = isMenuOpen;
            n[109] = role;
            n[110] = tabIndex;
            n[111] = ht;
        } else {
            ht = n[111];
        }
        let yt;
        if (n[112] !== mt || n[113] !== pe || n[114] !== ht) {
            yt = <div ref={IRef} className={mt}>{ht}{pe}</div>;
            n[112] = mt;
            n[113] = pe;
            n[114] = ht;
            n[115] = yt;
        } else {
            yt = n[115];
        }
        return yt;
    }
    const b = YComponent;
    function v({ isGroupedSticker, isGroupMsg, isNewsletterMsg, isSentByMe, isTransparentMsg, isWide, msg }) {
        switch(msg.type){
            case o("WAWebMsgType").MSG_TYPE.STICKER:
                return isTransparentMsg && (isGroupedSticker === true || !isGroupMsg || isSentByMe && !isWide);
            case o("WAWebMsgType").MSG_TYPE.CHAT:
            case o("WAWebMsgType").MSG_TYPE.MUSIC:
                return isTransparentMsg && (!isGroupMsg || isSentByMe && !isWide);
            case o("WAWebMsgType").MSG_TYPE.PTV:
                return isTransparentMsg && (isNewsletterMsg || !isWide);
        }
        return false;
    }
    l.default = b;
}, 98);