__d("WAWebMessageTextBubble.react", [
    "WAWebBizCtwaAGMUtils",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebBroadcastMeta.react",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCommonMsgUtils",
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleTypingIndicator.react",
    "WAWebMessageCropping",
    "WAWebMessageDisclaimerText.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebTeeLockNameRow.react",
    "WAWebUnifiedResponseUtils",
    "WDSMargins.stylex",
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
        paddingInline3: {
            paddingInlineStart: "x1djpfga",
            paddingInlineEnd: "x1im30kd",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        paddingTop3: {
            paddingTop: "xyqdw3p",
            $$css: true
        }
    };
    const d = {
        bubble: {
            boxSizing: "x9f619",
            userSelect: "x1hx0egp",
            $$css: true
        },
        portrait: {
            maxWidth: "x15bsu91",
            $$css: true
        },
        landscape: {
            maxWidth: "xkknydg",
            $$css: true
        },
        announcement: {
            width: "x1yuel0x",
            $$css: true
        },
        fixedWidth: {
            width: "x3orp4s",
            maxWidth: "x193iq5w",
            $$css: true
        },
        meta: {
            position: "x1n2onr6",
            zIndex: "x1n327nk",
            float: "x18mqm2i",
            marginTop: "xhsvlbd",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xz62fqu",
            marginInlineStart: "x1wbi8v6",
            $$css: true
        },
        metaForImagineUR: {
            bottom: "xrb244j",
            insetInlineEnd: "xxx7yvo",
            left: null,
            right: null,
            $$css: true
        },
        metaForRTLMsg: {
            float: "xtrg13t",
            $$css: true
        },
        isPSA: {
            paddingBottom: "x1em1mmk",
            $$css: true
        },
        elevatedPushNames: {
            paddingTop: "x1yrsyyn",
            paddingInlineEnd: "xf159sx",
            paddingBottom: "xwib8y2",
            paddingInlineStart: "x7coems",
            $$css: true
        },
        pollCreation: {
            paddingTop: "x1yrsyyn",
            paddingInlineEnd: "xm2lglf",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1pjyq1w",
            $$css: true
        },
        regular: {
            paddingTop: "x1yrsyyn",
            paddingInlineEnd: "xodvfiu",
            paddingInlineStart: "xct3hqd",
            paddingBottom: "xwib8y2",
            $$css: true
        },
        imagineUR: {
            paddingTop: "xyqdw3p",
            paddingInlineEnd: "x1im30kd",
            paddingBottom: "xg8j3zb",
            paddingInlineStart: "x1djpfga",
            $$css: true
        },
        metaAi: {
            float: "xyen2ro",
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            $$css: true
        },
        forwardedIndicator: {
            paddingTop: "x1yrsyyn",
            paddingInlineEnd: "x1bjonze",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x7coems",
            $$css: true
        },
        forwardedIndicatorForImagineUR: {
            paddingInlineStart: "x25sj25",
            $$css: true
        }
    };
    function m(t) {
        const i = o("react-compiler-runtime").c(48);
        const t_msgKey = t.msgKey;
        let s;
        if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
            let m;
            s = [
                (m = o("WAWebMsgGetters")).getIsGroupMsg,
                m.getIsPSA,
                m.getIsSentByMe,
                o("WAWebFrontendMsgGetters").getSenderObj,
                m.getSender,
                m.getType,
                m.getActiveBotMsgStreamingInProgress,
                m.getUnifiedResponse,
                m.getIsNewsletterMsg,
                o("WAWebFrontendMsgGetters").getBotGroupParticipant,
                m.getAuthor,
                o("WAWebFrontendMsgGetters").getShouldShowForwarded,
                m.getCtwaContext,
                m.getRichResponse,
                m.getIsBotSearchResponse
            ];
            i[0] = s;
        } else {
            s = i[0];
        }
        const _ = o("useWAWebMsgValues").useMsgValues(t_msgKey, s);
        const f = _[1];
        const g = _[2];
        const h = _[3];
        const y = _[4];
        const msgType = _[5];
        const b = _[6];
        const v = _[7];
        const S = _[8];
        const R = _[9];
        const L = _[10];
        const E = _[11];
        const k = _[12];
        const I = _[13];
        const T = _[14];
        let D;
        let x;
        let $;
        let P;
        let N;
        let M;
        let w;
        if (i[1] !== b || i[2] !== R || i[3] !== k?.automatedGreetingMessageShown || i[4] !== k?.sourceApp || i[5] !== T || i[6] !== S || i[7] !== f || i[8] !== g || i[9] !== L || i[10] !== t_msgKey || i[11] !== t.authorRole || i[12] !== t.displayAuthor || i[13] !== t.displayType || i[14] !== t.hideMeta || i[15] !== t.theme || i[16] !== t.useFixedWidth || i[17] !== t.xstyle || i[18] !== I || i[19] !== y || i[20] !== h || i[21] !== E || i[22] !== msgType || i[23] !== v) {
            const isRTL = r("WAWebL10N").isRTL();
            const F = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(t_msgKey, S);
            const O = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(F);
            const B = o("WAWebDisplayType").isWideDisplay(t.displayType);
            const W = o("WAWebUnifiedResponseUtils").isImagineResponse(v);
            let q;
            if (W) {
                q = d.imagineUR;
            } else if (msgType === o("WAWebMsgType").MSG_TYPE.POLL_CREATION || msgType === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT) {
                q = d.pollCreation;
            } else if (msgType === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION || msgType === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE) {
                q = [
                    c.paddingInline3,
                    c.paddingTop3,
                    o("WDSPaddings.stylex").wdsPaddings.paddingBottom8
                ];
            } else if (msgType === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
                q = o("WDSPaddings.stylex").wdsPaddings.padding0;
            } else if (O) {
                q = d.elevatedPushNames;
            } else {
                q = d.regular;
            }
            const U = y != null && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(y) && (o("WAWebChatGroupUtils").isAIGroupTee(F) || R != null && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(R));
            $ = (e || (e = r("stylex")))(d.bubble, f && d.isPSA, t.theme === "portrait" && !B && d.portrait, t.theme === "landscape" && !B && d.landscape, B && d.announcement, t.useFixedWidth === true && !W && d.fixedWidth, q, t.xstyle);
            P = W ? {
                width: o("WAWebMessageCropping").IMAGINE_UR_WIDTH,
                maxWidth: "100%"
            } : undefined;
            const V = t.displayAuthor ? u.jsx(r("WAWebMessageAuthor.react"), {
                role: t.authorRole,
                msgKey: t_msgKey,
                contact: h,
                displayType: t.displayType,
                disableClick: L?.isLid() && o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(F?.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            }) : null;
            const Component = r("WAWebTeeLockNameRow.react");
            D = V != null && U ? <Component>{V}</Component> : V;
            N = E ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
                msgKey: t_msgKey,
                xstyle: [
                    msgType === o("WAWebMsgType").MSG_TYPE.STICKER_PACK && d.forwardedIndicator,
                    W && d.forwardedIndicatorForImagineUR
                ]
            }) : null;
            let H;
            if (i[31] !== t_msgKey) {
                H = u.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
                    msgKey: t_msgKey
                });
                i[31] = t_msgKey;
                i[32] = H;
            } else {
                H = i[32];
            }
            w = H;
            let G;
            if (i[33] !== t_msgKey) {
                G = u.jsx(r("WAWebMessageDisclaimerText.react"), {
                    msgKey: t_msgKey
                });
                i[33] = t_msgKey;
                i[34] = G;
            } else {
                G = i[34];
            }
            x = G;
            M = null;
            if (o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
                isAGMShown: k?.automatedGreetingMessageShown,
                msgSource: k?.sourceApp,
                msgType
            })) {
                M = null;
            } else if (b === true && (msgType === o("WAWebMsgType").MSG_TYPE.CHAT || o("WAWebCommonMsgUtils").isSomewhatParsedRichResponse(msgType, I))) {
                let z;
                if (i[35] === Symbol.for("react.memo_cache_sentinel")) {
                    z = u.jsx(r("WAWebMessageBubbleTypingIndicator.react"), {
                        isBotMsgStreaming: true
                    });
                    i[35] = z;
                } else {
                    z = i[35];
                }
                M = z;
            } else {
                if (t.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY && t.hideMeta !== true) {
                    M = g && F != null && o("WAWebChatGetters").getIsBroadcast(F) ? u.jsx(r("WAWebBroadcastMeta.react"), {
                        displayType: t.displayType,
                        isRTL,
                        msgKey: t_msgKey
                    }) : <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.meta, f && o("WDSMargins.stylex").wdsMargins.marginTop4, isRTL && d.metaForRTLMsg, o("WAWebBotGating").showBotSearchPluginFor(msgType, T) && d.metaAi, W && d.metaForImagineUR), {
                        children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                            msgKey: t_msgKey,
                            displayType: t.displayType
                        })
                    })}/>;
                }
            }
            i[1] = b;
            i[2] = R;
            i[3] = k?.automatedGreetingMessageShown;
            i[4] = k?.sourceApp;
            i[5] = T;
            i[6] = S;
            i[7] = f;
            i[8] = g;
            i[9] = L;
            i[10] = t_msgKey;
            i[11] = t.authorRole;
            i[12] = t.displayAuthor;
            i[13] = t.displayType;
            i[14] = t.hideMeta;
            i[15] = t.theme;
            i[16] = t.useFixedWidth;
            i[17] = t.xstyle;
            i[18] = I;
            i[19] = y;
            i[20] = h;
            i[21] = E;
            i[22] = msgType;
            i[23] = v;
            i[24] = D;
            i[25] = x;
            i[26] = $;
            i[27] = P;
            i[28] = N;
            i[29] = M;
            i[30] = w;
        } else {
            D = i[24];
            x = i[25];
            $ = i[26];
            P = i[27];
            N = i[28];
            M = i[29];
            w = i[30];
        }
        let j;
        if (i[36] === Symbol.for("react.memo_cache_sentinel")) {
            j = r("WAWebEnvironment").isWindows && {
                onDragStart
            };
            i[36] = j;
        } else {
            j = i[36];
        }
        const K = t.ariaLabel ?? undefined;
        const Q = t.testid ?? undefined;
        let X;
        if (i[37] !== D || i[38] !== x || i[39] !== $ || i[40] !== P || i[41] !== N || i[42] !== M || i[43] !== w || i[44] !== t.children || i[45] !== K || i[46] !== Q) {
            X = <div {...babelHelpers.extends({}, j, {
                "aria-label": K,
                className: $,
                style: P,
                "data-testid": Q,
                children: [
                    D,
                    N,
                    x,
                    w,
                    t.children,
                    M
                ]
            })}/>;
            i[37] = D;
            i[38] = x;
            i[39] = $;
            i[40] = P;
            i[41] = N;
            i[42] = M;
            i[43] = w;
            i[44] = t.children;
            i[45] = K;
            i[46] = Q;
            i[47] = X;
        } else {
            X = i[47];
        }
        return X;
    }
    function onDragStart(e) {
        e.preventDefault();
        return false;
    }
    l.default = m;
}, 98);