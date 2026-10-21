__d("useWAWebConversationPanelCanCompose", [
    "fbt",
    "WAWebAcp2ComposerNotice.react",
    "WAWebAgentTransitionUtils",
    "WAWebAnnouncementsOnlyMsgBar.react",
    "WAWebBizAgentSmbOffboardingMsgBar.react",
    "WAWebBizAgentTerminationMsgBar.react",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiBlockMsgBar.react",
    "WAWebBizAiSmartComposerGating",
    "WAWebBizAiWebSmartComposerAiListsGateModel",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastTos",
    "WAWebBizBroadcastTosReviewBannerLoadable",
    "WAWebBizCoexGatingUtils",
    "WAWebBlocklistUtils",
    "WAWebBotBaseGating",
    "WAWebBotComposerSupport",
    "WAWebBotComposerTreatment",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebBotProfileGetters",
    "WAWebBotSupportMsgBar.react",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCommunityAnnouncementsMsgBar.react",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebConversationDeprecatedLidChatUtils",
    "WAWebDeactivatedContactUtils",
    "WAWebDeactivatedUserMsgBarLoadable",
    "WAWebDeleteUnblockMsgBar.react",
    "WAWebFbtCommon",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGatedChatOpenedWamEvent",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebHatchApprovalManager",
    "WAWebHatchApprovalMsgBar.react",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebIndividualNewChatCappedComposeBarLoadable",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebMiscGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebMsgBarDeactivateCommunityMessageBar",
    "WAWebMsgGetters",
    "WAWebNewsletterSuspendedMessageBar.react",
    "WAWebNonMemberGroupMsgBar.react",
    "WAWebOutContactCollection",
    "WAWebOutContactInviteGating",
    "WAWebPrimaryFeaturesModel",
    "WAWebReachoutTimelockRestrictedComposeBarLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebSuspendedCommunityMsgBar.react",
    "WAWebSuspendedGroupMsgBar.react",
    "WAWebSuspendedOrTerminatedGroupMsgBarV2.react",
    "WAWebTerminatedCommunityMsgBar",
    "WAWebTerminatedGroupMsgBar.react",
    "WAWebTos",
    "WAWebTosCountryGating",
    "WAWebTosGatedModal.react",
    "WAWebTosGating",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumChatGatedReason",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebListener",
    "useWAWebOptionalBotProfileValues",
    "useWAWebStableCallback",
    "useWAWebSyncedNonWAContact"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useRef, useState } = c;
    function useComponent(e) {
        const t = o("react-compiler-runtime").c(42);
        let n;
        if (t[0] !== e) {
            n = function() {
                return I(e);
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const a = useState(n);
        const i = a[0];
        const l = a[1];
        let s;
        if (t[2] !== e) {
            s = function() {
                return v(e);
            };
            t[2] = e;
            t[3] = s;
        } else {
            s = t[3];
        }
        const u = useState(s);
        const c = u[0];
        const _ = u[1];
        let g;
        if (t[4] !== e) {
            g = function() {
                const t = I(e);
                l(t);
                _(t ? b : v(e));
            };
            t[4] = e;
            t[5] = g;
        } else {
            g = t[5];
        }
        const h = r("useWAWebStableCallback")(g);
        let y;
        if (t[6] !== e) {
            y = o("WAWebMobilePlatforms").isSMB() && (e.id.isAiHub() || o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() && o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(e));
            t[6] = e;
            t[7] = y;
        } else {
            y = t[7];
        }
        o("WAWebBizAiAgentStatusUtils").useObserveAiAgentOnboarding(y, h);
        o("useWAWebListener").useListener(o("WAWebBizAiWebSmartComposerAiListsGateModel").BizAiWebSmartComposerAiListsGateEventBus, "updated", h);
        let C;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            C = [
                "change:canSend",
                "change:capiThreadControl",
                "change:acp2Setting"
            ];
            t[8] = C;
        } else {
            C = t[8];
        }
        o("useWAWebListener").useListener(e, C, h);
        let S;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            S = [
                "change:isContactBlocked"
            ];
            t[9] = S;
        } else {
            S = t[9];
        }
        o("useWAWebListener").useListener(e.contact, S, h);
        let R;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            R = [
                o("WAWebBotProfileGetters").getProduct,
                o("WAWebBotProfileGetters").getIsDeprecated,
                o("WAWebBotProfileGetters").getIsDeleted
            ];
            t[10] = R;
        } else {
            R = t[10];
        }
        const L = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(e.id, R);
        const E = L[0];
        const isDeprecated = L[1];
        const isDeleted = L[2];
        let D;
        if (t[11] !== isDeleted || t[12] !== isDeprecated || t[13] !== E) {
            D = {
                product: E,
                isDeprecated,
                isDeleted
            };
            t[11] = isDeleted;
            t[12] = isDeprecated;
            t[13] = E;
            t[14] = D;
        } else {
            D = t[14];
        }
        const xRef = useRef(D);
        let $;
        let P;
        if (t[15] !== isDeleted || t[16] !== isDeprecated || t[17] !== E || t[18] !== h) {
            $ = function() {
                const xRef_current = xRef.current;
                if (xRef_current.product !== E || xRef_current.isDeprecated !== isDeprecated || xRef_current.isDeleted !== isDeleted) {
                    xRef.current = {
                        product: E,
                        isDeprecated,
                        isDeleted
                    };
                    h();
                }
            };
            P = [
                E,
                isDeprecated,
                isDeleted,
                h
            ];
            t[15] = isDeleted;
            t[16] = isDeprecated;
            t[17] = E;
            t[18] = h;
            t[19] = $;
            t[20] = P;
        } else {
            $ = t[19];
            P = t[20];
        }
        useEffect($, P);
        o("useWAWebListener").useListener(o("WAWebPrimaryFeaturesModel").PrimaryFeatures, o("WAWebBotPrimaryFeaturesFrontend").BOT_PRIMARY_FEATURE_CHANGE_EVENTS, h);
        let N;
        if (t[21] !== e || t[22] !== h) {
            N = function(n) {
                const t = o("WAWebDeactivatedContactUtils").getSyncedNonWAContactId(o("WAWebDeactivatedContactUtils").getDeactivatedChatContact(e));
                if (t != null && (n == null || n.id === t)) {
                    h();
                }
            };
            t[21] = e;
            t[22] = h;
            t[23] = N;
        } else {
            N = t[23];
        }
        const M = r("useWAWebStableCallback")(N);
        let w;
        if (t[24] !== e.accountLid || t[25] !== h) {
            w = function(n) {
                if (n.id === e.accountLid) {
                    h();
                }
            };
            t[24] = e.accountLid;
            t[25] = h;
            t[26] = w;
        } else {
            w = t[26];
        }
        const A = r("useWAWebStableCallback")(w);
        let F;
        if (t[27] === Symbol.for("react.memo_cache_sentinel")) {
            F = [
                "add",
                "remove",
                "change"
            ];
            t[27] = F;
        } else {
            F = t[27];
        }
        o("useWAWebListener").useListener(o("WAWebOutContactCollection").OutContactCollection, F, M);
        o("useWAWebListener").useListener(o("WAWebOutContactCollection").OutContactCollection, "reset", h);
        let O;
        if (t[28] === Symbol.for("react.memo_cache_sentinel")) {
            O = [
                "add",
                "remove",
                "change:phoneNumber"
            ];
            t[28] = O;
        } else {
            O = t[28];
        }
        o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, O, A);
        let B;
        if (t[29] === Symbol.for("react.memo_cache_sentinel")) {
            B = [
                "reset",
                "lid-pn-mapping-updated"
            ];
            t[29] = B;
        } else {
            B = t[29];
        }
        o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, B, h);
        let W;
        if (t[30] === Symbol.for("react.memo_cache_sentinel")) {
            W = [
                "change:suspended",
                "change:terminated",
                "change:participants"
            ];
            t[30] = W;
        } else {
            W = t[30];
        }
        o("useWAWebListener").useListener(e.groupMetadata, W, h);
        let q;
        if (t[31] === Symbol.for("react.memo_cache_sentinel")) {
            q = [
                "change:suspended",
                "change:terminated"
            ];
            t[31] = q;
        } else {
            q = t[31];
        }
        o("useWAWebListener").useListener(e.newsletterMetadata, q, h);
        o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", h);
        o("useWAWebListener").useListener(o("WAWebBizBroadcastTos").bizBroadcastTosEmitter, "change", h);
        let U;
        if (t[32] !== e.id || t[33] !== h) {
            U = function() {
                if (!(!o("WAWebBotUtils").isHatchBot(e.id) || !o("WAWebHatchFrontendGating").isHatchIntegrationEnabled())) {
                    const t = r("WAWebHatchApprovalManager").subscribe(h);
                    const n = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(h);
                    return function() {
                        t();
                        n();
                    };
                }
            };
            t[32] = e.id;
            t[33] = h;
            t[34] = U;
        } else {
            U = t[34];
        }
        let V;
        if (t[35] !== e || t[36] !== h) {
            V = [
                e,
                h
            ];
            t[35] = e;
            t[36] = h;
            t[37] = V;
        } else {
            V = t[37];
        }
        useEffect(U, V);
        useF(e, i);
        let H;
        if (t[38] !== c.node || t[39] !== c.smartComposerOwnsFooter || t[40] !== i) {
            H = [
                i,
                c.node,
                c.smartComposerOwnsFooter
            ];
            t[38] = c.node;
            t[39] = c.smartComposerOwnsFooter;
            t[40] = i;
            t[41] = H;
        } else {
            H = t[41];
        }
        return H;
    }
    function useF(e, t) {
        const n = o("react-compiler-runtime").c(5);
        let a;
        if (n[0] !== e) {
            a = function() {
                if (o("WAWebTosCountryGating").shouldBlockByCountry(e.contact)) {
                    const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                    o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
                        surface: "unknown",
                        viewName: "cannot-compose"
                    }} onOK={g} okText={r("WAWebFbtCommon")("OK")}>{s._("This business can't chat with phone numbers with your country code.")}</Component>, {
                        transition: "modal-flow"
                    });
                    const t = o("WAWebFrontendChatGetters").getPreviewMessage(e);
                    const selfInitiated = t != null ? o("WAWebMsgGetters").getIsSentByMe(t) : false;
                    const a = new (o("WAWebGatedChatOpenedWamEvent")).GatedChatOpenedWamEvent({
                        chatGatedReason: o("WAWebWamEnumChatGatedReason").CHAT_GATED_REASON.COUNTRY,
                        selfInitiated
                    });
                    a.commit();
                } else if (o("WAWebTosGating").shouldBlockByTos(e.contact)) {
                    o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebTosGatedModal.react"), {
                        contact: e.contact
                    }), {
                        transition: "modal-flow"
                    });
                    const i = new (o("WAWebGatedChatOpenedWamEvent")).GatedChatOpenedWamEvent({
                        chatGatedReason: o("WAWebWamEnumChatGatedReason").CHAT_GATED_REASON.TOS3,
                        selfInitiated: true
                    });
                    i.commit();
                }
            };
            n[0] = e;
            n[1] = a;
        } else {
            a = n[1];
        }
        const i = r("useWAWebStableCallback")(a);
        let l;
        if (n[2] !== t || n[3] !== i) {
            l = [
                i,
                t
            ];
            n[2] = t;
            n[3] = i;
            n[4] = l;
        } else {
            l = n[4];
        }
        useEffect(i, l);
    }
    function g() {
        return o("WAWebModalManager").ModalManager.close();
    }
    function h(e) {
        if (!o("WAWebBotUtils").isHatchBot(e.id) || !o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) {
            return null;
        }
        return r("WAWebHatchApprovalManager").getPendingApprovals()[0] ?? null;
    }
    function y(e) {
        if (!o("WAWebBotUtils").isHatchBot(e.id) || !o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) {
            return false;
        }
        return r("WAWebHatchLinkedStatusManager").isUnlinked();
    }
    const C = "smart_composer_footer";
    var b = {
        node: null,
        smartComposerOwnsFooter: false
    };
    function v(e) {
        const node = S(e);
        if (node === C) {
            return {
                node: null,
                smartComposerOwnsFooter: true
            };
        }
        return {
            node,
            smartComposerOwnsFooter: false
        };
    }
    function S(e) {
        if (o("WAWebChatGetters").getIsBroadcast(e)) {
            if (o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(false) && !o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted()) {
                return u.jsx(o("WAWebBizBroadcastTosReviewBannerLoadable").WAWebBizBroadcastTosReviewBannerLoadable, {
                    broadcastJid: e.id.toString()
                });
            }
            return null;
        }
        const { contact, groupMetadata, isAnnounceGrpRestrict, isReadOnly, mute } = e;
        if (!o("WAWebBotBaseGating").isBotEnabled() && e.id.isBot() && !e.id.isSupportAgentBot()) {
            return "";
        }
        const treatment = o("WAWebBotComposerTreatment").getBotChatComposerTreatment(e.id);
        if (treatment !== o("WAWebBotComposerSupport").BotComposerTreatment.COMPOSE) {
            return u.jsx(r("WAWebBotSupportMsgBar.react"), {
                treatment
            });
        }
        if (o("WAWebChatGetters").getIsNewsletter(e)) {
            let m;
            if (e.newsletterMetadata?.suspended && (m = e.newsletterMetadata?.iAmOwner()) != null && m) {
                return u.jsx(r("WAWebNewsletterSuspendedMessageBar.react"), {
                    chat: e
                });
            }
            return null;
        }
        if (o("WAWebMobilePlatforms").isSMB() && o("WAWebChatGetters").getIsUser(e) && !o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage() && o("WAWebAgentTransitionUtils").getMeSmbOffboardingState() && o("WAWebBizCoexGatingUtils").agentSmbOffboardingEnabled()) {
            return u.jsx(r("WAWebBizAgentSmbOffboardingMsgBar.react"), {
                parentCompanyName: o("WAWebAgentTransitionUtils").getMeSmbParentCompanyName()
            });
        }
        if (e.id.isAiHub() && o("WAWebMobilePlatforms").isSMB() && !o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent()) {
            return s._("Set up your AI Agent on your phone to chat here");
        }
        if (o("WAWebTosCountryGating").shouldBlockByCountry(contact)) {
            return s._("This business can't chat with phone numbers with your country code.");
        }
        if (o("WAWebTosGating").shouldBlockByTos(contact)) {
            return s._("To chat with {contact}, review and accept WhatsApp's updated terms and privacy policy on your phone.", [
                s._param("contact", o("WAWebFrontendContactGetters").getFormattedName(contact))
            ]);
        }
        if (o("WAWebTosGating").shouldBlockByBotTos(contact)) {
            return s._("To chat with {contact}, review and accept WhatsApp's terms and privacy policy on your phone.", [
                s._param("contact", o("WAWebFrontendContactGetters").getFormattedName(contact))
            ]);
        }
        if (y(e)) {
            return s._("You can't send or receive messages. To reconnect to {bot_name} in WhatsApp, use your primary phone.", [
                s._param("bot_name", o("WAWebFrontendContactGetters").getFormattedName(contact))
            ]);
        }
        if (h(e) != null) {
            return u.jsx(r("WAWebHatchApprovalMsgBar.react"), {});
        }
        if (o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(e)) {
            return u.jsx(r("WAWebAcp2ComposerNotice.react"), {});
        }
        if (o("WAWebChatGroupUtils").isIntegrityDeactivatedCommunityAnnouncementGroup(e)) {
            return u.jsx(r("WAWebTerminatedCommunityMsgBar"), {});
        }
        if (o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(e) && groupMetadata) {
            return u.jsx(r("WAWebMsgBarDeactivateCommunityMessageBar"), {
                groupMetadata
            });
        }
        if (o("WAWebChatGroupUtils").isSuspendedCommunityAnnouncementGroup(e) && groupMetadata != null && groupMetadata.participants.iAmMember()) {
            return u.jsx(r("WAWebSuspendedCommunityMsgBar.react"), {
                chat: e
            });
        }
        if (o("WAWebChatGroupUtils").isTerminatedGroup(e)) {
            if (o("WAWebChatGroupUtils").isSupportGroup(e)) {
                return s._("This chat has been closed.");
            }
            if (o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) {
                return u.jsx(r("WAWebSuspendedOrTerminatedGroupMsgBarV2.react"), {
                    chat: e
                });
            }
            return u.jsx(r("WAWebTerminatedGroupMsgBar.react"), {});
        }
        if (o("WAWebChatGetters").getIsGroup(e) && !(groupMetadata != null && groupMetadata.participants.iAmMember())) {
            if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                return s._("You're no longer a member.");
            }
            if (o("WAWebBlocklistUtils").isRBIForGroupsEnabled()) {
                return u.jsx(r("WAWebNonMemberGroupMsgBar.react"), {
                    chat: e
                });
            }
            return s._("You can't send messages to this group because you're no longer a member.");
        }
        if (o("WAWebChatGroupUtils").isSuspendedGroup(e)) {
            if (o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) {
                return u.jsx(r("WAWebSuspendedOrTerminatedGroupMsgBarV2.react"), {
                    chat: e
                });
            }
            return u.jsx(r("WAWebSuspendedGroupMsgBar.react"), {
                entityId: e.id.user.toString()
            });
        }
        if (o("WAWebChatGetters").getIsGroup(e) && groupMetadata && o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !(groupMetadata != null && groupMetadata.participants.iAmAdmin())) {
            return u.jsx(r("WAWebCommunityAnnouncementsMsgBar.react"), {
                groupMetadata
            });
        }
        if (o("WAWebChatGetters").getIsGroup(e) && !isReadOnly && isAnnounceGrpRestrict === true && groupMetadata) {
            return u.jsx(r("WAWebAnnouncementsOnlyMsgBar.react"), {
                chat: e,
                groupMetadata,
                mute
            });
        }
        if (o("WAWebChatGetters").getIsGroup(e) && groupMetadata != null && groupMetadata.support) {
            return s._("You can't send messages to this group because you're no longer a member.");
        }
        if (e.parentCompanyName != null && e.obaPhoneNumber != null && e.contact.type === "out" && o("WAWebBizCoexGatingUtils").agentOffboardingEnabled()) {
            return u.jsx(r("WAWebBizAgentTerminationMsgBar.react"), {
                businessJid: e.id.user,
                obaPhoneNumber: e.obaPhoneNumber ?? "",
                offboardingType: "employee_termination",
                parentCompanyName: e.parentCompanyName ?? ""
            });
        }
        if (o("WAWebChatGetters").getIsPSA(e)) {
            return <L contact={contact}/>;
        }
        if (o("WAWebChatGetters").getIsMetaForBusiness(e)) {
            return <E contact={contact}/>;
        }
        if (o("WAWebChatGetters").getIsIAS(e)) {
            return <K1 contact={contact}/>;
        }
        if (!contact.isContactBlocked && o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(e) && o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled()) {
            if (o("WAWebBizAiSmartComposerGating").isSmartComposerShellEnabled()) {
                return C;
            }
            return u.jsx(r("WAWebBizAiBlockMsgBar.react"), {
                chat: e
            });
        }
        if (o("WAWebConversationDeprecatedLidChatUtils").isDeprecatedLidChatSendBlocked(e)) {
            const Component = r("WDSText.react");
            return <Component type="Body2" colorName="contentDefault">{s._("You can't send messages to this account because it's no longer active.")}</Component>;
        }
        return <R chat={e}/>;
    }
    S.displayName = `${S.name} [from ${i.id}]`;
    function R(e) {
        const t = o("react-compiler-runtime").c(9);
        const e_chat = e.chat;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebFrontendContactGetters").getIsContactBlocked
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebContactValues").useContactValues(e_chat.contact.id, a);
        const l = i[0];
        let s;
        if (t[1] !== e_chat) {
            s = o("WAWebDeactivatedContactUtils").getDeactivatedChatContact(e_chat);
            t[1] = e_chat;
            t[2] = s;
        } else {
            s = t[2];
        }
        const c = r("useWAWebSyncedNonWAContact")(s, e_chat.accountLid);
        if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() && !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
            chat: e_chat,
            contact: e_chat.contact
        }) && !l) {
            let d;
            if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                d = u.jsx(o("WAWebReachoutTimelockRestrictedComposeBarLoadable").ReachoutTimelockComposeBarLoadable, {});
                t[3] = d;
            } else {
                d = t[3];
            }
            return d;
        } else if (!o("WAWebIndividualNewChatMessageCappingLimitUtils").canSendMsgWhileCapped({
            chat: e_chat,
            contact: e_chat.contact
        }) && !l && o("WAWebIndividualNewChatMessageCappingLimitUtils").isUserCapped()) {
            let m;
            if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                m = u.jsx(o("WAWebIndividualNewChatCappedComposeBarLoadable").IndividualNewChatMessageCappedComposeBarLoadable, {});
                t[4] = m;
            } else {
                m = t[4];
            }
            return m;
        }
        if (c && !l && o("WAWebOutContactInviteGating").isInviteDeactivatedUserWebEnabled()) {
            let p;
            if (t[5] !== e_chat) {
                p = u.jsx(o("WAWebDeactivatedUserMsgBarLoadable").WAWebDeactivatedUserMsgBarLoadable, {
                    chat: e_chat
                });
                t[5] = e_chat;
                t[6] = p;
            } else {
                p = t[6];
            }
            return p;
        }
        let _;
        if (t[7] !== e_chat) {
            _ = u.jsx(r("WAWebDeleteUnblockMsgBar.react"), {
                chat: e_chat
            });
            t[7] = e_chat;
            t[8] = _;
        } else {
            _ = t[8];
        }
        return _;
    }
    function L(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_contact = e.contact;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebFrontendContactGetters").getIsContactBlocked
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = o("useWAWebContactValues").useContactValues(e_contact.id, r);
        const i = a[0];
        if (i) {
            let l;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                l = s._("You have blocked WhatsApp");
                t[1] = l;
            } else {
                l = t[1];
            }
            return l;
        }
        let u;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            u = s._("Only WhatsApp can send messages");
            t[2] = u;
        } else {
            u = t[2];
        }
        return u;
    }
    function E(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_contact = e.contact;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebFrontendContactGetters").getIsContactBlocked
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = o("useWAWebContactValues").useContactValues(e_contact.id, r);
        const i = a[0];
        if (i) {
            let l;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                l = s._("You have blocked Meta for Business");
                t[1] = l;
            } else {
                l = t[1];
            }
            return l;
        }
        let u;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            u = s._("Only Meta for Business can send messages");
            t[2] = u;
        } else {
            u = t[2];
        }
        return u;
    }
    function K1(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_contact = e.contact;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebFrontendContactGetters").getIsContactBlocked
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = o("useWAWebContactValues").useContactValues(e_contact.id, r);
        const i = a[0];
        if (i) {
            let l;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                l = s._("You have blocked WhatsApp Surveys");
                t[1] = l;
            } else {
                l = t[1];
            }
            return l;
        }
        let u;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            u = s._("You can block this chat to opt out of receiving messages from WhatsApp Surveys");
            t[2] = u;
        } else {
            u = t[2];
        }
        return u;
    }
    function I(e) {
        if (e.id.isAiHub() && o("WAWebMobilePlatforms").isSMB() && !o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent() || e.id.isMetaForBusiness() || o("WAWebChatGetters").getIsBroadcast(e) || o("WAWebBotComposerTreatment").isBotSupportComposerBlocked(e.id) || y(e) || h(e) != null || o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(e) || o("WAWebDeactivatedContactUtils").isDeactivatedContactInviteEnabled(o("WAWebDeactivatedContactUtils").getDeactivatedChatContact(e))) {
            return false;
        }
        return e.canSend && !e.isSuspendedOrTerminated();
    }
    l.default = useComponent;
}, 226);