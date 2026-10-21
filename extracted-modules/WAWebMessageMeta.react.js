__d("WAWebMessageMeta.react", [
    "fbt",
    "WAWebABPropsSaga",
    "WAWebAddOnBubbleRenderUtils",
    "WAWebBizBroadcastProChatUtils",
    "WAWebBizBroadcastProMessageStatusLoadable",
    "WAWebBizBroadcastProMessageUtils",
    "WAWebBizCtwaAGMUtils",
    "WAWebBotBaseGating",
    "WAWebBotPluginMsgBubbleMeta.react",
    "WAWebBotTypes",
    "WAWebBroadcastDeliveringLabel.react",
    "WAWebBroadcastDeliveringLabelView.react",
    "WAWebChatGetters",
    "WAWebClock",
    "WAWebCmd",
    "WAWebContactGetters",
    "WAWebDisplayType",
    "WAWebEmbeddedChatContext",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationDebugUI",
    "WAWebMessageAIContentLabel.react",
    "WAWebMessageStatus",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMsgViewCount",
    "WAWebNewsletterGatingUtils",
    "WAWebQuotedMsgUtils",
    "WAWebSagaMessageMarker.react",
    "WAWebTextSizeUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadsGating",
    "WAWebUA",
    "WDSIconIcBookmarkFilled.react",
    "WDSIconIcCampaignMegaphone.react",
    "WDSIconIcGradeFilled.react",
    "WDSIconIcPromptSuggestion.react",
    "WDSIconIcPushPin.react",
    "WDSIconIcVisibilityOn.react",
    "WDSIconWdsIcAiFilled.react",
    "WDSIconWdsIcPremiumChannelIconFilled.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSText.react",
    "WDSTextContainer.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebCanOpenInfoDrawer",
    "useWAWebContactValues",
    "useWAWebListener",
    "useWAWebMsgValues",
    "useWAWebShouldShowMsgPinnedIcon"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = {
        paddingBlock3: {
            paddingTop: "xyqdw3p",
            paddingBottom: "xg8j3zb",
            $$css: true
        },
        paddingInlineStart6: {
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        paddingInlineEnd7: {
            paddingInlineEnd: "x1bjonze",
            $$css: true
        },
        paddingBlock5: {
            paddingTop: "x123j3cw",
            paddingBottom: "xs9asl8",
            $$css: true
        }
    };
    const p = {
        chromeFix: {
            lineHeight: "xuy8w9f",
            $$css: true
        },
        bullet: {
            display: "x78zum5",
            $$css: true
        },
        editedLabel: {
            marginInlineEnd: "x2fvf9",
            marginInlineStart: "xwklpps",
            $$css: true
        },
        aiLabelIcon: {
            marginInlineEnd: "x16q7b9a",
            verticalAlign: "xxymvpz",
            $$css: true
        }
    };
    function _(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_light = e.light;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                p.bullet,
                o("WDSMargins.stylex").wdsMargins.marginHor4
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = e_light === true ? "persistentAlwaysWhite" : "contentDeemphasized";
        let l;
        if (t[1] !== i) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            l = <Component_1 xstyle={a} justify="center"><Component type="Body3" colorName={i}>•</Component></Component_1>;
            t[1] = i;
            t[2] = l;
        } else {
            l = t[2];
        }
        return l;
    }
    function f(e) {
        const n = o("react-compiler-runtime").c(96);
        const { agmTag, associatedMessages, displayType, isAlbum, isDelivering, msgKey, theme, xstyle } = e;
        let C;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let S;
            C = [
                (S = o("WAWebMsgGetters")).getBroadcast,
                S.getCaption,
                S.getIsLive,
                o("WAWebFrontendMsgGetters").getAsRevoked,
                S.getIsSentByMe,
                S.getIsViewOnce,
                S.getLoc,
                S.getStar,
                S.getT,
                S.getType,
                S.getSubtype,
                S.getIsSendFailure,
                S.getIsKept,
                S.getShouldShowEditedIndicator,
                S.getIsBizBot1pResponse,
                S.getBotPluginSearchQuery,
                S.getIsWamoSub,
                S.getCtwaContext,
                S.getIsBotSearchResponse,
                S.getBotPluginSearchUrl,
                S.getBotPluginSearchProvider,
                S.getIsCAPISupport,
                S.getThreadIds,
                S.getIsNewsletterMsg,
                S.getPmCampaignId
            ];
            n[0] = C;
        } else {
            C = n[0];
        }
        const R = o("useWAWebMsgValues").useMsgValues(msgKey, C);
        const L = R[0];
        const E = R[1];
        const k = R[2];
        const I = R[3];
        const isSentByMe = R[4];
        const D = R[5];
        const x = R[6];
        const $ = R[7];
        const t_1 = R[8];
        const msgType = R[9];
        const msgSubtype = R[10];
        const w = R[11];
        const A = R[12];
        const F = R[13];
        const O = R[14];
        const botPluginSearchQuery = R[15];
        const W = R[16];
        const q = R[17];
        const U = R[18];
        const botPluginSearchUrl = R[19];
        const botPluginSearchProvider = R[20];
        const G = R[21];
        const z = R[22];
        const j = R[23];
        const K = R[24];
        const Q = o("WAWebMsgViewCount").useWAWebLocalizedViewCount(msgKey);
        const X = r("useWAWebShouldShowMsgPinnedIcon")(msgKey);
        const Y = o("WAWebMessageAIContentLabel.react").useShouldShowAiContentLabel(msgKey, associatedMessages) && !I;
        const J = u_useState(false);
        const Z = J[0];
        const ee = J[1];
        let te;
        if (n[1] !== Z) {
            te = function() {
                ee(!Z);
            };
            n[1] = Z;
            n[2] = te;
        } else {
            te = n[2];
        }
        o("useWAWebListener").useListener(o("WAWebClock").Clock, o("WAWebClock").HOUR24_FORMAT_CHANGE_EVENT, te);
        let ne;
        if (n[3] !== msgKey) {
            ne = function() {
                const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                if (e != null) {
                    o("WAWebCmd").Cmd.msgInfoDrawer(e);
                }
            };
            n[3] = msgKey;
            n[4] = ne;
        } else {
            ne = n[4];
        }
        const re = ne;
        let icons;
        let light;
        if (n[5] !== I || n[6] !== L || n[7] !== E || n[8] !== A || n[9] !== k || n[10] !== D || n[11] !== x || n[12] !== msgType || n[13] !== X || n[14] !== $ || n[15] !== z) {
            icons = [];
            let ie;
            if (n[18] !== E || n[19] !== k || n[20] !== D || n[21] !== x || n[22] !== msgType) {
                ie = (msgType === o("WAWebMsgType").MSG_TYPE.IMAGE || msgType === o("WAWebMsgType").MSG_TYPE.VIDEO) && r("isStringNullOrEmpty")(E) && !D || msgType === o("WAWebMsgType").MSG_TYPE.LOCATION && !k && !x;
                n[18] = E;
                n[19] = k;
                n[20] = D;
                n[21] = x;
                n[22] = msgType;
                n[23] = ie;
            } else {
                ie = n[23];
            }
            light = ie;
            if ($ && !I) {
                let le;
                if (n[24] === Symbol.for("react.memo_cache_sentinel")) {
                    le = s._("Starred messages").toString();
                    n[24] = le;
                } else {
                    le = n[24];
                }
                const se = ` ${le} `;
                let ue;
                if (n[25] !== se) {
                    ue = c.jsx(r("WDSIconIcGradeFilled.react"), {
                        testid: "star",
                        height: 16,
                        width: 16,
                        "aria-label": se
                    });
                    n[25] = se;
                    n[26] = ue;
                } else {
                    ue = n[26];
                }
                icons.push(ue);
            }
            if (A && !I) {
                let ce;
                if (n[27] === Symbol.for("react.memo_cache_sentinel")) {
                    ce = s._("Kept message").toString();
                    n[27] = ce;
                } else {
                    ce = n[27];
                }
                const de = ` ${ce} `;
                let me;
                if (n[28] !== de) {
                    me = c.jsx(r("WDSIconIcBookmarkFilled.react"), {
                        width: 15.64,
                        height: 14.67,
                        "aria-label": de,
                        testid: "keep-in-chat"
                    });
                    n[28] = de;
                    n[29] = me;
                } else {
                    me = n[29];
                }
                icons.push(me);
            }
            if (L && msgType !== o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE) {
                let pe;
                if (n[30] === Symbol.for("react.memo_cache_sentinel")) {
                    pe = c.jsx(r("WDSIconIcCampaignMegaphone.react"), {
                        height: 15,
                        width: 16
                    });
                    n[30] = pe;
                } else {
                    pe = n[30];
                }
                icons.push(pe);
            }
            if (X && !I) {
                let _e;
                if (n[31] === Symbol.for("react.memo_cache_sentinel")) {
                    _e = s._("Pinned message").toString();
                    n[31] = _e;
                } else {
                    _e = n[31];
                }
                const fe = ` ${_e} `;
                let ge;
                if (n[32] !== fe) {
                    ge = c.jsx(r("WDSIconIcPushPin.react"), {
                        width: 15,
                        testid: "pinned-small",
                        "aria-label": fe
                    });
                    n[32] = fe;
                    n[33] = ge;
                } else {
                    ge = n[33];
                }
                icons.push(ge);
            }
            const he = o("WAWebThreadMsgUtils").getViewAllRepliesThreadId(z);
            if (he != null && o("WAWebQuotedMsgUtils").getMessagesCountByThreadId(he) >= 2 && o("WAWebThreadsGating").isFollowUpReplyEnabled()) {
                let ye;
                if (n[34] === Symbol.for("react.memo_cache_sentinel")) {
                    ye = c.jsx(r("WDSIconIcPromptSuggestion.react"), {
                        height: 15,
                        width: 15
                    });
                    n[34] = ye;
                } else {
                    ye = n[34];
                }
                icons.push(ye);
            }
            n[5] = I;
            n[6] = L;
            n[7] = E;
            n[8] = A;
            n[9] = k;
            n[10] = D;
            n[11] = x;
            n[12] = msgType;
            n[13] = X;
            n[14] = $;
            n[15] = z;
            n[16] = icons;
            n[17] = light;
        } else {
            icons = n[16];
            light = n[17];
        }
        const Ce = isSentByMe && !I;
        const be = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(msgKey, j);
        const ve = o("WAWebBizBroadcastProMessageUtils").isBizBroadcastProOutgoingMessage({
            isBizBroadcastProChat: be != null && o("WAWebChatGetters").getIsBroadcast(be) && o("WAWebBizBroadcastProChatUtils").getIsBizBroadcastProChat(be),
            isSentByMe,
            pmCampaignId: K
        });
        let status = null;
        if (Ce && displayType !== o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS && !ve) {
            let Re;
            if (n[35] !== associatedMessages || n[36] !== msgKey) {
                Re = c.jsx(r("WAWebMessageStatus"), {
                    msgKey,
                    associatedMessages
                });
                n[35] = associatedMessages;
                n[36] = msgKey;
                n[37] = Re;
            } else {
                Re = n[37];
            }
            status = Re;
        }
        if (msgType === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT && msgSubtype === "fanout" || w === true) {
            status = null;
        }
        const Component = r("WDSText.react");
        const Component_1 = o("WAWebFlex.react").FlexRow;
        const viewCount = o("WAWebNewsletterGatingUtils").isNewsletterViewCountEnabled(be?.newsletterMetadata?.membershipType) && isAlbum !== true && Q != null && displayType !== o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS && msgType !== o("WAWebMsgType").MSG_TYPE.REVOKED ? <Component_1 align="center">{o("WAWebNewsletterGatingUtils").isNewsletterViewsVPVDefinitionEnabled() && <div {...babelHelpers.extends({}, {
            0: {
                className: "xhslqc4 x78zum5 x6s0dn4 x14ju556 x7g7pl8"
            },
            1: {
                className: "x78zum5 x6s0dn4 x14ju556 x7g7pl8 x17t9dm2"
            }
        }[(light === true) << 0], {
            children: c.jsx(r("WDSIconIcVisibilityOn.react"), {
                width: 12,
                height: 12
            })
        })}/>}<Component type="Body3" colorName={light ? "persistentAlwaysWhite" : "contentDeemphasized"}><span data-testid="view-count">{Q}</span></Component></Component_1> : null;
        let Ee;
        if (F && !I) {
            let ke;
            if (n[38] === Symbol.for("react.memo_cache_sentinel")) {
                ke = y();
                n[38] = ke;
            } else {
                ke = n[38];
            }
            const Ie = ke;
            const Te = light ? "persistentAlwaysWhite" : "contentDeemphasized";
            let De;
            if (n[39] !== Te) {
                const Component = r("WDSText.react");
                De = <Component type="Body3" xstyle={p.editedLabel} colorName={Te}>{Ie}</Component>;
                n[39] = Te;
                n[40] = De;
            } else {
                De = n[40];
            }
            Ee = De;
        }
        let xe;
        if (n[41] !== associatedMessages || n[42] !== msgKey || n[43] !== Y || n[44] !== light) {
            xe = Y ? c.jsx(o("WAWebMessageAIContentLabel.react").WAWebMessageAIContentLabel, {
                msgKey,
                associatedMessages,
                color: light ? "light" : "secondary"
            }) : null;
            n[41] = associatedMessages;
            n[42] = msgKey;
            n[43] = Y;
            n[44] = light;
            n[45] = xe;
        } else {
            xe = n[45];
        }
        const aiContentLabel = xe;
        const Pe = b(msgKey);
        const Ne = v(msgKey);
        let Me = null;
        if (G && Ne != null && o("WAWebABPropsSaga").getIsSagaProtobufAIStardustEnabled()) {
            Me = Ne;
        } else if (Pe != null) {
            Me = Pe;
        }
        let we;
        if (n[46] !== Me) {
            we = Me != null ? <><span className="x2fvf9 xwklpps" data-testid="ai-label">{Me}</span>{c.jsx(r("WDSIconWdsIcAiFilled.react"), {
                testid: "ai-label-stardust",
                xstyle: p.aiLabelIcon,
                displayInline: true,
                width: 14,
                height: 14
            })}</> : null;
            n[46] = Me;
            n[47] = we;
        } else {
            we = n[47];
        }
        const Ae = we;
        let Fe;
        if (msgType !== o("WAWebMsgType").MSG_TYPE.REVOKED && U) {
            let Oe;
            if (n[48] !== botPluginSearchProvider || n[49] !== botPluginSearchQuery || n[50] !== botPluginSearchUrl || n[51] !== t_1) {
                Oe = c.jsx(r("WAWebBotPluginMsgBubbleMeta.react"), {
                    t: t_1,
                    botPluginSearchQuery,
                    botPluginSearchUrl,
                    botPluginSearchProvider
                });
                n[48] = botPluginSearchProvider;
                n[49] = botPluginSearchQuery;
                n[50] = botPluginSearchUrl;
                n[51] = t_1;
                n[52] = Oe;
            } else {
                Oe = n[52];
            }
            Fe = Oe;
        }
        let Be;
        if (Pe == null && G && O && o("WAWebABPropsSaga").getIsSagaV1Enabled()) {
            let We;
            if (n[53] === Symbol.for("react.memo_cache_sentinel")) {
                We = c.jsx(r("WAWebSagaMessageMarker.react"), {
                    width: 11,
                    height: 11,
                    marginRight: true
                });
                n[53] = We;
            } else {
                We = n[53];
            }
            Be = We;
        }
        let qe;
        if (n[54] !== W) {
            qe = W === true && o("WAWebNewsletterGatingUtils").isWamoSubMessagesSupported() ? c.jsx(r("WDSIconWdsIcPremiumChannelIconFilled.react"), {
                testid: "premium-channel-filled",
                width: 11,
                height: 11
            }) : null;
            n[54] = W;
            n[55] = qe;
        } else {
            qe = n[55];
        }
        const premiumMessageMarker = qe;
        const Ve = r("useWAWebCanOpenInfoDrawer")(msgKey);
        const He = o("WAWebEmbeddedChatContext").useIsEmbeddedChat();
        const Ge = Ve && !He && displayType !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING && displayType !== o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO && displayType !== o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS;
        let ze;
        if (n[56] !== msgKey || n[57] !== t_1 || n[58] !== theme) {
            if (t_1) {
                if (theme !== "date") {
                    ze = o("WAWebClock").Clock.timestampStr(t_1);
                } else {
                    ze = o("WAWebClock").Clock.relativeStr(t_1);
                }
            }
            if (ze != null && o("WAWebLidMigrationDebugUI").getShouldShowLidDebugUIForMsgKey(msgKey)) {
                ze = `${ze.toString()} [LID]`;
            }
            n[56] = msgKey;
            n[57] = t_1;
            n[58] = theme;
            n[59] = ze;
        } else {
            ze = n[59];
        }
        let je;
        if (n[60] !== displayType || n[61] !== ze || n[62] !== light) {
            const Component = r("WDSText.react");
            je = displayType === o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS ? null : <Component type="Body3" colorName={light ? "persistentAlwaysWhite" : "contentDeemphasized"}>{ze}</Component>;
            n[60] = displayType;
            n[61] = ze;
            n[62] = light;
            n[63] = je;
        } else {
            je = n[63];
        }
        const Ke = je;
        let Qe;
        if (agmTag != null && o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
            isAGMShown: q?.automatedGreetingMessageShown,
            msgSource: q?.sourceApp,
            msgSubtype,
            msgType
        })) {
            const Xe = light ? "persistentAlwaysWhite" : "contentDeemphasized";
            let Ye;
            if (n[64] !== agmTag || n[65] !== Xe) {
                const Component = r("WDSText.react");
                Ye = <Component type="Body3" colorName={Xe}>{agmTag}</Component>;
                n[64] = agmTag;
                n[65] = Xe;
                n[66] = Ye;
            } else {
                Ye = n[66];
            }
            Qe = Ye;
            status = null;
        } else {
            if (msgType === o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
                status = null;
            }
        }
        let Je;
        if (Ce && be != null && o("WAWebChatGetters").getIsBroadcast(be) && !ve) {
            let Ze;
            if (n[67] !== isDelivering || n[68] !== msgKey || n[69] !== light) {
                Ze = isDelivering != null ? c.jsx(r("WAWebBroadcastDeliveringLabelView.react"), {
                    isDelivering,
                    light
                }) : c.jsx(r("WAWebBroadcastDeliveringLabel.react"), {
                    light,
                    msgKey
                });
                n[67] = isDelivering;
                n[68] = msgKey;
                n[69] = light;
                n[70] = Ze;
            } else {
                Ze = n[70];
            }
            Je = Ze;
        }
        let et;
        if (n[71] !== ve || n[72] !== Ce || n[73] !== K || n[74] !== light) {
            et = Ce && ve && K != null ? c.jsx(o("WAWebBizBroadcastProMessageStatusLoadable").WAWebBizBroadcastProMessageStatusLoadable, {
                campaignId: K,
                light
            }) : null;
            n[71] = ve;
            n[72] = Ce;
            n[73] = K;
            n[74] = light;
            n[75] = et;
        } else {
            et = n[75];
        }
        const tt = et;
        const nt = Fe == null && Qe == null && Ke;
        let rt;
        if (n[76] !== Qe || n[77] !== Ae || n[78] !== Fe || n[79] !== Je || n[80] !== Ee || n[81] !== tt || n[82] !== Be || n[83] !== nt) {
            const Component = r("WDSTextContainer.react");
            rt = <Component>{Be}{Ae}{Ee}{Fe}{Je}{tt}{nt}{Qe}</Component>;
            n[76] = Qe;
            n[77] = Ae;
            n[78] = Fe;
            n[79] = Je;
            n[80] = Ee;
            n[81] = tt;
            n[82] = Be;
            n[83] = nt;
            n[84] = rt;
        } else {
            rt = n[84];
        }
        const ot = rt;
        const includeBotSearchPluginDetailToggleEl = Fe != null;
        const it = Ge ? re : null;
        let lt;
        if (n[85] !== aiContentLabel || n[86] !== ot || n[87] !== icons || n[88] !== premiumMessageMarker || n[89] !== status || n[90] !== includeBotSearchPluginDetailToggleEl || n[91] !== it || n[92] !== light || n[93] !== viewCount || n[94] !== xstyle) {
            lt = <H1Component icons={icons} aiContentLabel={aiContentLabel} premiumMessageMarker={premiumMessageMarker} light={light} viewCount={viewCount} includeBotSearchPluginDetailToggleEl={includeBotSearchPluginDetailToggleEl} onClick={it} status={status} xstyle={xstyle}>{ot}</H1Component>;
            n[85] = aiContentLabel;
            n[86] = ot;
            n[87] = icons;
            n[88] = premiumMessageMarker;
            n[89] = status;
            n[90] = includeBotSearchPluginDetailToggleEl;
            n[91] = it;
            n[92] = light;
            n[93] = viewCount;
            n[94] = xstyle;
            n[95] = lt;
        } else {
            lt = n[95];
        }
        return lt;
    }
    const g = {
        meta: {
            color: "x1bvqhpb",
            fontSize: "x1ncwhqj",
            height: "xx3o462",
            lineHeight: "x152skdk",
            whiteSpace: "xuxw1ft",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            $$css: true
        },
        metaLight: {
            color: "x17t9dm2",
            $$css: true
        },
        botPlugin: {
            height: "x5yr21d",
            $$css: true
        }
    };
    function H1Component(t) {
        const n = o("react-compiler-runtime").c(33);
        const { aiContentLabel, children, icons, includeBotSearchPluginDetailToggleEl, light, onClick, premiumMessageMarker, status, viewCount, xstyle } = t;
        let C;
        if (n[0] !== icons || n[1] !== light) {
            C = icons && icons.length > 0 ? icons.map((e, t)=><div {...babelHelpers.extends({}, {
                    0: {
                        className: "xhslqc4 x1rg5ohu x16q7b9a"
                    },
                    1: {
                        className: "x1rg5ohu x16q7b9a x17t9dm2"
                    }
                }[(light === true) << 0], {
                    key: `icon-${t}`
                })}>{e}</div>) : null;
            n[0] = icons;
            n[1] = light;
            n[2] = C;
        } else {
            C = n[2];
        }
        const b = C;
        let v;
        if (n[3] !== light || n[4] !== premiumMessageMarker) {
            v = premiumMessageMarker ? <div {...babelHelpers.extends({}, {
                0: {
                    className: "xhslqc4 x1rg5ohu x7phf20"
                },
                1: {
                    className: "x1rg5ohu x7phf20 x17t9dm2"
                }
            }[(light === true) << 0], {
                "data-testid": "premium-message",
                children: premiumMessageMarker
            })}/> : null;
            n[3] = light;
            n[4] = premiumMessageMarker;
            n[5] = v;
        } else {
            v = n[5];
        }
        const S = v;
        let R;
        if (n[6] !== status) {
            R = status ? <div className="xhslqc4 x1rg5ohu x7phf20">{status}</div> : null;
            n[6] = status;
            n[7] = R;
        } else {
            R = n[7];
        }
        const L = R;
        let E;
        if (n[8] !== aiContentLabel || n[9] !== light) {
            const Component = o("WAWebFlex.react").FlexRow;
            E = aiContentLabel != null ? <Component align="center">{aiContentLabel}<_ light={light}/></Component> : null;
            n[8] = aiContentLabel;
            n[9] = light;
            n[10] = E;
        } else {
            E = n[10];
        }
        const k = E;
        let I;
        if (n[11] !== light || n[12] !== viewCount) {
            const Component = o("WAWebFlex.react").FlexRow;
            I = viewCount != null ? <Component align="center">{viewCount}<_ light={light}/></Component> : null;
            n[11] = light;
            n[12] = viewCount;
            n[13] = I;
        } else {
            I = n[13];
        }
        const T = I;
        let D;
        if (n[14] !== includeBotSearchPluginDetailToggleEl || n[15] !== light || n[16] !== xstyle) {
            const x = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().metaTextStyles;
            D = (e || (e = r("stylex")))(g.meta, light === true && g.metaLight, o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC && o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.CHROME && o("WAWebUA").UA.osVersion.includes("10.15") && p.chromeFix, includeBotSearchPluginDetailToggleEl && g.botPlugin, x, xstyle);
            n[14] = includeBotSearchPluginDetailToggleEl;
            n[15] = light;
            n[16] = xstyle;
            n[17] = D;
        } else {
            D = n[17];
        }
        const $ = D;
        const role = onClick ? "button" : null;
        let N;
        if (n[18] !== includeBotSearchPluginDetailToggleEl) {
            N = ({
                0: {
                    className: "x1rg5ohu x16dsc37"
                },
                1: {
                    className: "x1rg5ohu x1qughib xh8yej3"
                }
            })[(includeBotSearchPluginDetailToggleEl === true) << 0];
            n[18] = includeBotSearchPluginDetailToggleEl;
            n[19] = N;
        } else {
            N = n[19];
        }
        let M;
        if (n[20] !== children || n[21] !== N) {
            M = <span {...babelHelpers.extends({}, N, {
                dir: "auto",
                children
            })}/>;
            n[20] = children;
            n[21] = N;
            n[22] = M;
        } else {
            M = n[22];
        }
        let w;
        if (n[23] !== k || n[24] !== $ || n[25] !== b || n[26] !== onClick || n[27] !== S || n[28] !== L || n[29] !== role || n[30] !== M || n[31] !== T) {
            w = <div className={$} data-testid="msg-meta" onClick={onClick} role={role}>{b}{k}{T}{M}{S}{L}</div>;
            n[23] = k;
            n[24] = $;
            n[25] = b;
            n[26] = onClick;
            n[27] = S;
            n[28] = L;
            n[29] = role;
            n[30] = M;
            n[31] = T;
            n[32] = w;
        } else {
            w = n[32];
        }
        return w;
    }
    function y() {
        return s._("Edited");
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    function C() {
        return s._("Automated greeting");
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b(e) {
        const n = o("react-compiler-runtime").c(2);
        let r;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebFrontendMsgGetters").getAsRevoked,
                o("WAWebMsgGetters").getBizBotType,
                o("WAWebMsgGetters").getTo
            ];
            n[0] = r;
        } else {
            r = n[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e, r);
        const i = a[0];
        const l = a[1];
        const u = a[2];
        const c = o("useWAWebContactValues").useOptionalContactValues(u, [
            o("WAWebContactGetters").getBusinessProfile
        ]) ?? [];
        const d = c[0];
        if (!o("WAWebBotBaseGating").isBizBot1pEnabled() || i) {
            return null;
        }
        const m = !e.fromMe && l === o("WAWebBotTypes").BizBotType.BIZ_1P;
        const p = e.fromMe && l === o("WAWebBotTypes").BizBotType.BIZ_1P && !(d != null && d.automatedType);
        if (!m && !p) {
            return null;
        }
        let _;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("AI");
            n[1] = _;
        } else {
            _ = n[1];
        }
        return _;
    }
    function v(msgKey) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebMsgGetters").getIsSupportAIMessage,
                o("WAWebMsgGetters").getBizBotType
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const r = o("useWAWebMsgValues").useMsgValues(msgKey, n);
        const a = r[0];
        const i = r[1];
        let l = false;
        if (i === o("WAWebBotTypes").BizBotType.BIZ_1P) {
            l = true;
        }
        if (a != null) {
            l = a;
        }
        if (l === true) {
            let u;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                u = s._("AI");
                t[1] = u;
            } else {
                u = t[1];
            }
            return u;
        }
        return null;
    }
    const S = {
        authorIsMe: {
            backgroundColor: "x1g5lz36",
            $$css: true
        },
        authorIsNotMe: {
            backgroundColor: "x1ew7x2d",
            $$css: true
        },
        transparentStyles: {
            width: "xeq5yr9",
            borderStartStartRadius: "x1liijdw",
            borderStartEndRadius: "xu342n7",
            borderEndEndRadius: "xelbjmh",
            borderEndStartRadius: "x16pgt24",
            boxShadow: "x1lpesih",
            $$css: true
        },
        fiftyBorderRadius: {
            borderStartStartRadius: "xal68kn",
            borderStartEndRadius: "x51dqfy",
            borderEndEndRadius: "x1w4cqa3",
            borderEndStartRadius: "x1byqp33",
            $$css: true
        }
    };
    function RComponent(t) {
        const n = o("react-compiler-runtime").c(11);
        const { children, displayType, isSentByMe, isTransparent, ref, xstyle } = t;
        let p;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                m.paddingBlock3,
                m.paddingInlineStart6,
                m.paddingInlineEnd7,
                S.transparentStyles
            ];
            n[0] = p;
        } else {
            p = n[0];
        }
        const _ = p;
        let f;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                m.paddingBlock5,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
                S.fiftyBorderRadius
            ];
            n[1] = f;
        } else {
            f = n[1];
        }
        const g = f;
        let h;
        if (n[2] !== displayType || n[3] !== isSentByMe || n[4] !== isTransparent || n[5] !== xstyle) {
            h = (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStartAuto, isTransparent && (isSentByMe ? S.authorIsMe : S.authorIsNotMe), isTransparent && _, isTransparent && o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(displayType) && g, xstyle);
            n[2] = displayType;
            n[3] = isSentByMe;
            n[4] = isTransparent;
            n[5] = xstyle;
            n[6] = h;
        } else {
            h = n[6];
        }
        let y;
        if (n[7] !== children || n[8] !== ref || n[9] !== h) {
            y = <div {...babelHelpers.extends({
                ref
            }, h, {
                children
            })}/>;
            n[7] = children;
            n[8] = ref;
            n[9] = h;
            n[10] = y;
        } else {
            y = n[10];
        }
        return y;
    }
    const L = RComponent;
    l.MetaBullet = _;
    l.Meta = f;
    l.getEditedLabel = y;
    l.getAGMTag = C;
    l.useBizBot1pLabel = b;
    l.MetaWrapper = L;
}, 226);