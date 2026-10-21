__d("WAWebUserSubtitle.react", [
    "fbt",
    "WAWebAuthAgentConsumerJourneyLogger",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBotBaseGating",
    "WAWebBotExposedName",
    "WAWebBotFrontendUtils",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebBotProfileGetters",
    "WAWebBotSupportGating",
    "WAWebBotUtils",
    "WAWebBusinessProfileGetters",
    "WAWebCTWAGatingUtils",
    "WAWebChatAssignmentLogEvents",
    "WAWebChatSubtitleText",
    "WAWebChatSubtitleText.react",
    "WAWebChatstateGetters",
    "WAWebContactGetters",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendPresenceGetters",
    "WAWebHasAcceptedBizBotTos",
    "WAWebMetaAiThreadChat",
    "WAWebMiscGatingUtils",
    "WAWebPresenceEnum",
    "WAWebResolveBotProfile",
    "WAWebSupportChatStrings",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebTypingIndicatorGatingUtils",
    "WAWebUseBusinessProfile.react",
    "WAWebVerifiedBlueStyles.stylex",
    "WAWebWid",
    "WDSIconWdsIcAiFilled.react",
    "WDSIconWdsIcVerifiedFilled.react",
    "WDSMargins.stylex",
    "react",
    "stylex",
    "useWAWebAiThreadTitle",
    "useWAWebBusinessProfileValues",
    "useWAWebChatstateValues",
    "useWAWebContactValues",
    "useWAWebOptionalBotProfileValues",
    "useWAWebPresenceValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useEffect = u.useEffect;
    const m = {
        icon: {
            display: "x1rg5ohu",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            color: "xhslqc4",
            $$css: true
        }
    };
    function p({ userSubtitle }) {
        const { assignmentSubtitle, chatId, chatstate, contact, location, orgMemberTag, presence, showBusinessCheckmark } = userSubtitle;
        const S = showBusinessCheckmark === undefined ? false : showBusinessCheckmark;
        const userSubtitle_showVerifiedName = userSubtitle.showVerifiedName;
        const L = userSubtitle_showVerifiedName === undefined ? false : userSubtitle_showVerifiedName;
        const userSubtitle_threadId = userSubtitle.threadId;
        const k = s._("click here for contact info");
        const I = s._("Business Account");
        const T = s._("Official WhatsApp account");
        const D = s._("Official Meta account");
        const x = s._("Message yourself");
        const $ = s._("AI");
        const P = s._("by Meta AI");
        const N = s._("Uses AI from Meta");
        const M = o("useWAWebContactValues").useContactValues(contact.id, [
            o("WAWebContactGetters").getName,
            o("WAWebContactGetters").getVerifiedName,
            o("WAWebContactGetters").getId,
            o("WAWebFrontendContactGetters").getTextStatusString,
            o("WAWebFrontendContactGetters").getTextStatusEmoji,
            o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime,
            o("WAWebFrontendContactGetters").getTextStatusExpiryTs,
            o("WAWebFrontendContactGetters").getTextStatusEphemeralDuration
        ]);
        const w = M[0];
        const A = M[1];
        const F = M[2];
        const O = M[3];
        const B = M[4];
        const W = M[5];
        const q = M[6];
        const U = M[7];
        const V = o("WAWebTextStatusUtils").shouldDisplayTextStatus({
            textStatusEmoji: B,
            textStatusEphemeralDuration: U,
            textStatusExpiryTs: q,
            textStatusLastUpdateTime: W,
            textStatusString: O
        });
        const H = o("useWAWebPresenceValues").usePresenceValues(presence.id, [
            o("WAWebFrontendPresenceGetters").getChatstate,
            o("WAWebFrontendPresenceGetters").getWithholdDisplayStage,
            o("WAWebFrontendPresenceGetters").getForceDisplay,
            o("WAWebFrontendPresenceGetters").getHasData,
            o("WAWebFrontendPresenceGetters").getIsOnline
        ]);
        const G = H[0];
        const z = H[1];
        const j = H[2];
        const K = H[3];
        const Q = H[4];
        const X = o("useWAWebChatstateValues").useChatstateValues(chatstate, [
            o("WAWebChatstateGetters").getType,
            o("WAWebChatstateGetters").getDeny,
            o("WAWebChatstateGetters").getT
        ]);
        const Y = X[0];
        const J = X[1];
        const Z = X[2];
        const ee = o("WAWebTypingIndicatorGatingUtils").isTypingIndicatorMessageBubbleEnabled(chatId);
        const te = _(Y, Q, ee);
        o("WAWebUseBusinessProfile.react").useBusinessProfile(chatId);
        const ne = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(chatId, [
            o("WAWebBusinessProfileGetters").getIsAuthorizedAgent
        ]) ?? [];
        const re = ne[0];
        const oe = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(chatId, [
            o("WAWebBusinessProfileGetters").getParentCompanyName,
            o("WAWebBusinessProfileGetters").getObaPhoneNumber
        ]) ?? [];
        const ae = oe[0];
        const ie = oe[1];
        const le = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(chatId, [
            o("WAWebBusinessProfileGetters").getIsBizBot1p
        ])?.[0] === true;
        const se = o("WAWebBotBaseGating").isBizBot1pEnabled() && le;
        const ue = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(chatId, [
            o("WAWebBusinessProfileGetters").getIsBizBot3p
        ])?.[0] === true;
        const ce = o("WAWebBotBaseGating").isBizBot3pEnabled() && ue;
        const de = o("WAWebHasAcceptedBizBotTos").useHasAcceptedBizBotTos();
        const me = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(chatId, [
            o("WAWebBotProfileGetters").getIsDefault,
            o("WAWebBotProfileGetters").getProduct,
            o("WAWebBotProfileGetters").getIsDeprecated,
            o("WAWebBotProfileGetters").getIsDeleted
        ]);
        const pe = me[0];
        const _e = r("useWAWebAiThreadTitle")(chatId, userSubtitle_threadId);
        u_useEffect(function() {
            if (assignmentSubtitle != null && z === o("WAWebPresenceEnum").WithholdDisplayStage.ChatAssignment) {
                o("WAWebChatAssignmentLogEvents").logChatStatusTickerShown(chatId);
            }
        }, [
            chatId,
            z,
            assignmentSubtitle
        ]);
        u_useEffect(function() {
            if (re === true && !r("WAWebWid").isPSA(F) && !r("WAWebWid").isMetaForBusiness(F) && !r("WAWebWid").isCAPISupportAccount(F) && !r("WAWebWid").isAiHub(F) && !F.isBot() && !ce && !se) {
                o("WAWebAuthAgentConsumerJourneyLogger").logChatHeaderSubtitleImpression(chatId.user, ae ?? "", ie ?? null);
            }
        }, [
            chatId,
            F,
            re,
            ae,
            ie,
            ce,
            se
        ]);
        let fe;
        let ge;
        let he;
        let showLockIcon;
        let Ce = false;
        const be = de && o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiIndiaEnabled();
        const ve = orgMemberTag == null ? null : s._("{member tag}", [
            s._param("member tag", orgMemberTag)
        ]);
        const Se = presence.getUserSubtitleText(ee);
        if (r("WAWebWid").isAiHub(F)) {
            fe = o("WAWebBizAiAgentStatusUtils").getAiHubSubtitle();
        } else if (r("WAWebWid").isPSA(F)) {
            fe = T;
        } else if (r("WAWebWid").isMetaForBusiness(F)) {
            fe = D;
        } else if (r("WAWebWid").isCAPISupportAccount(F) || F.isSupportAgentBot()) {
            fe = o("WAWebSupportChatStrings").SupportChatSubtitle();
        } else if (F.isBot() || ce) {
            const Re = o("WAWebResolveBotProfile").resolveBotSupportInput(chatId);
            const Le = o("WAWebBotExposedName").isBotProfileViewOnly(Re);
            if (o("WAWebMetaAiThreadChat").isMetaAiThreadSupportInput(Re)) {
                fe = o("WAWebBotExposedName").META_AI_THREAD_SUBTITLE;
            } else {
                if (!Le) {
                    if (o("WAWebBotUtils").isBusinessAssistantBot(chatId)) {
                        fe = P;
                    } else if (pe) {
                        fe = _e ?? o("WAWebBotFrontendUtils").META_AI_LLAMA_VERSION_TITLE;
                    } else if (o("WAWebBotUtils").isHatchBot(chatId)) {
                        fe = "";
                    } else if (o("WAWebBotSupportGating").isSupportedThirdPartyBot(Re, o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures())) {
                        fe = o("WAWebBotExposedName").getAgentSubtitle();
                    } else {
                        fe = $;
                    }
                }
            }
        } else {
            if (se) {
                fe = be ? N : I;
            } else if (re === true) {
                Ce = true;
                if (ae != null && ae !== "") {
                    fe = ae;
                } else {
                    fe = I;
                }
            } else if (z === o("WAWebPresenceEnum").WithholdDisplayStage.E2EE) {
                if (location === "title" && ve != null && te && Se != null && Se !== "") {
                    fe = Se;
                } else if (location === "title" && ve != null) {
                    fe = ve;
                } else {
                    showLockIcon = true;
                    fe = o("WAWebChatSubtitleText").e2eChatSubtitleText();
                }
            } else if (z === o("WAWebPresenceEnum").WithholdDisplayStage.Self) {
                fe = x;
            } else if (location === "list" || location === "info") {
                fe = presence.getUserSubtitleText();
            } else if (z === o("WAWebPresenceEnum").WithholdDisplayStage.Info) {
                fe = k;
            } else if (z === o("WAWebPresenceEnum").WithholdDisplayStage.Business) {
                fe = I;
            } else if (assignmentSubtitle != null && z === o("WAWebPresenceEnum").WithholdDisplayStage.ChatAssignment) {
                fe = assignmentSubtitle;
            } else if (z === o("WAWebPresenceEnum").WithholdDisplayStage.LastSeen) {
                fe = presence.getUserSubtitleText();
            } else if (location === "title" && z === o("WAWebPresenceEnum").WithholdDisplayStage.OrgMemberTag && ve != null && !te) {
                fe = ve;
            } else if (Y === "unavailable" && V && o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled() && !(location === "title" && o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled())) {
                fe = O;
                he = B;
            } else if (Se != null && Se !== "") {
                fe = Se;
            } else if (j) {
                fe = "";
            } else {
                fe = k;
            }
        }
        if (fe != null && fe !== "" || he != null) {
            ge = c.jsx(r("WAWebChatSubtitleText.react"), {
                text: fe,
                textStatusEmoji: he,
                location,
                showLockIcon
            });
        }
        if (F.isBot() || se) {
            return <div className="x78zum5 x1q0g3np xeuugli x6ikm8r x10wlt62">{ge}{be && !F.isPaymentSupportAgentBot() && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.icon, o("WDSMargins.stylex").wdsMargins.marginTop4, o("WDSMargins.stylex").wdsMargins.marginStart2), {
                children: c.jsx(r("WDSIconWdsIcAiFilled.react"), {
                    width: 12,
                    height: 12
                })
            })}/>}</div>;
        }
        if (location === "title" && Ce && fe !== k) {
            return <div className="x78zum5 x1q0g3np xeuugli x6ikm8r x10wlt62">{ge}<div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.icon, o("WDSMargins.stylex").wdsMargins.marginTop2, o("WDSMargins.stylex").wdsMargins.marginStart2), {
                children: o("WAWebMiscGatingUtils").isBlueEnabled() ? c.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                    height: 14,
                    testid: "psa-verified-blue",
                    width: 14,
                    xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedBlueStyles.color
                }) : c.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                    height: 16,
                    testid: "psa-verified",
                    width: 16,
                    xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedGreenStyles.color
                })
            })}/></div>;
        }
        if (location === "title" && fe !== k && (S || L) && !F.isCAPISupportAccount()) {
            const Component = o("WAWebEmojiText.react").EmojiText;
            return <div className="x78zum5 x1q0g3np xeuugli x6ikm8r x10wlt62"><Component text={A} className="x1c4vz4f xisnujt x1nxh6w3 x1fc57z9 xhslqc4" direction="auto" titlify/>{S && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.icon, o("WDSMargins.stylex").wdsMargins.marginTop2, o("WDSMargins.stylex").wdsMargins.marginStart2), {
                children: o("WAWebMiscGatingUtils").isBlueEnabled() ? c.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                    height: 14,
                    testid: "psa-verified-blue",
                    width: 14,
                    xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedBlueStyles.color
                }) : c.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                    height: 16,
                    testid: "psa-verified",
                    width: 16,
                    xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedGreenStyles.color
                })
            })}/>}{ge && <span className="x117nqv4 x1fc57z9 x7phf20 x1p8j9ns">·</span>}{ge}</div>;
        }
        return ge || null;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(e, t, n) {
        if (e === "available") {
            return true;
        }
        if (e === "typing" || e === "recording_audio") {
            return t || !n;
        }
        return false;
    }
    l.default = p;
}, 226);