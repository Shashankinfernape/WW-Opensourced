__d("WAWebMessageGroupNotification.react", [
    "fbt",
    "WALogger",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatCommunityUtils",
    "WAWebChatEntryPoint",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebCommunitySubgroupInviteLinkRestriction",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebExistingGroupPermissionsDrawerLoadable",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFindChatAction",
    "WAWebFormatCTAText",
    "WAWebFormatEphemeralSetting",
    "WAWebFormatParticipantNames",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupAgentAddedRowProfile",
    "WAWebGroupHistoryParticipantStateHydration",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebGroupHistoryPostJoinSendFlow",
    "WAWebGroupHistoryPostJoinSubtype",
    "WAWebGroupHistorySenderUserJourneyLogger",
    "WAWebGroupInviteUtils.react",
    "WAWebGroupMemberUpdatesGatingUtils",
    "WAWebGroupMembershipApprovalRequestsFlowLoadable",
    "WAWebGroupNotificationContextCard.react",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebKeyboardTabUtils",
    "WAWebKicNux.react",
    "WAWebLinkJoinedMembersUtils",
    "WAWebMessageGroupNotificationBodyText",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebOpenGroupAgentProfile.react",
    "WAWebRemoveLinkJoinedMembersModal.react",
    "WAWebStateUtils",
    "WAWebSystemMessageGatingUtils",
    "WAWebSystemMessageWithSingleCTA.react",
    "WAWebSystemMessagesUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumBundleSendSource",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "WAWebWamEnumGroupBulkRemovalAction",
    "WAWebWamEnumTriggerType",
    "WAWebWamEnumTsSurface",
    "WDSFontTokenStyles",
    "WDSIconIcCampaignMegaphone.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useVisibility",
    "useWAWebChatValues",
    "useWAWebForceUpdate",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebMsgValues",
    "useWAWebMuseAgentAddProfileSubscription",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = [
        "ref"
    ];
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useCallback, useEffect, useImperativeHandle, useRef } = p;
    const y = (t)=>{
        t.stopPropagation();
        t.preventDefault();
    };
    const C = {
        iconDisappearingSvg: {
            width: "x1kky2od",
            height: "xlup9mm",
            $$css: true
        },
        ctaNoWrap: {
            whiteSpace: "xuxw1ft",
            $$css: true
        }
    };
    function B2Component(e) {
        const t = o("react-compiler-runtime").c(3);
        const { clickable, subtype, type } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = m.jsx(r("WDSIconIcCampaignMegaphone.react"), {
                directional: true,
                height: 16,
                testid: "megaphone-refreshed",
                width: 16
            });
            t[0] = l;
        } else {
            l = t[0];
        }
        if (type === "gp2") {
            if (subtype === "announce") {
                let u;
                if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                    u = <div className="x1rg5ohu xhslqc4 x7g7pl8 xg49k01">{l}</div>;
                    t[1] = u;
                } else {
                    u = t[1];
                }
                return u;
            } else if (subtype === "ephemeral" && clickable) {
                let c;
                if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                    c = <div className="x1rg5ohu xhslqc4 x7g7pl8 xg49k01">{m.jsx(r("WDSIconWdsIcDisappearingMessages.react"), {
                        iconXstyle: C.iconDisappearingSvg
                    })}</div>;
                    t[2] = c;
                } else {
                    c = t[2];
                }
                return c;
            }
        }
        return null;
    }
    function VComponent(t) {
        "use no forget";
        const t_ref = t.ref;
        const p = babelHelpers.objectWithoutPropertiesLoose(t, u);
        const { clickable, isLastMsg } = p;
        const isLastMsg_1 = isLastMsg === undefined ? false : isLastMsg;
        const p_msg = p.msg;
        const k = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const I = r("useWAWebUIM")();
        const TRef = useRef(null);
        const D = r("useWAWebIsKeyboardUser")();
        const D_isKeyboardUser = D.isKeyboardUser;
        const $ = o("useWAWebMsgValues").useMsgValues(p.msg.id, [
            o("WAWebMsgGetters").getAuthor,
            o("WAWebMsgGetters").getBody,
            o("WAWebMsgGetters").getRecipients,
            o("WAWebMsgGetters").getSubtype,
            o("WAWebMsgGetters").getTemplateParams,
            o("WAWebMsgGetters").getType
        ]);
        const P = $[0];
        const N = $[1];
        const M = $[2];
        const w = $[3];
        const A = $[4];
        const F = $[5];
        const O = o("WAWebFrontendMsgGetters").getChat(p_msg.unsafe());
        const B = o("useWAWebChatValues").useChatValues(O.id, [
            o("WAWebFrontendChatGetters").getShareableHistoryInfo,
            o("WAWebFrontendChatGetters").getLatestJoinTimeByParticipant
        ]);
        const shareableHistoryInfo = B[0];
        const latestJoinTimeByRecipient = B[1];
        const U = (t)=>latestJoinTimeByRecipient.get(t.toString()) === p_msg.t;
        const V = o("WAWebGroupHistoryPostJoinSubtype").isPostJoinHistoryCTASubtype(w) && o("WAWebGroupHistoryPostJoinEligibility").hasResolvableNonSelfRecipient(M, p_msg.t, latestJoinTimeByRecipient);
        const H = ()=>{
            if (clickable !== true || o("WAWebGroupAgentAddedRowProfile").getAddedGroupAgentProfile(w, M, O) != null) {
                return null;
            }
            const O_groupMetadata = O.groupMetadata;
            if (O_groupMetadata == null || !o("WAWebGroupHistoryPostJoinSubtype").isPostJoinHistoryCTASubtype(w) || !V) {
                return null;
            }
            const t = o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(O_groupMetadata);
            if (!o("WAWebGroupHistoryPostJoinEligibility").isPostJoinHistoryGroupEligible(t)) {
                return null;
            }
            const n = [];
            for (const r of M){
                if (!(r == null || o("WAWebUserPrefsMeUser").isMeAccount(r) || !U(r))) {
                    const a = O_groupMetadata.participants.get(r);
                    if (a != null) {
                        n.push(a);
                    }
                }
            }
            if (n.length === 0) {
                return null;
            }
            const i = n.filter((t)=>!o("WAWebGroupHistoryPostJoinEligibility").hasNoShareableHistoryBeforeJoin(shareableHistoryInfo, t.joinTime ?? p_msg.t, O_groupMetadata.id));
            const l = i.some((e)=>o("WAWebGroupHistoryPostJoinEligibility").isEligibleForPostJoinHistory(e, t, p_msg.t));
            if (l) {
                if (o("WAWebGroupHistoryPostJoinEligibility").isPostJoinHistoryExperimentArmEnabled(O_groupMetadata.id)) {
                    return {
                        recipientCount: i.length,
                        show: true
                    };
                }
                return null;
            }
            return {
                reason: i.length === 0 ? "no_available_messages" : S(i, p_msg.t),
                show: false
            };
        };
        const GRef = useRef(false);
        const z = r("useVisibility")({
            onVisible: function() {
                if (!GRef.current) {
                    const e = H();
                    if (e != null) {
                        GRef.current = true;
                        const t = o("WAWebGroupHistorySenderUserJourneyLogger").getGroupHistorySystemMessageType(w);
                        if (e.show) {
                            o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.sendMessageHistoryCtaSystemMessageDisplayed({
                                groupHistorySystemMessageType: t,
                                recipientCount: e.recipientCount,
                                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT
                            });
                        } else {
                            o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.ctaSystemMessageNotDisplayed({
                                groupHistorySystemMessageType: t,
                                ineligibleReason: o("WAWebGroupHistorySenderUserJourneyLogger").mapEligibilityResultToIneligibleReason(e.reason),
                                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT
                            });
                        }
                    }
                }
            }
        });
        const j = z[0];
        const onclickRef = useCallback(function(e) {
            TRef.current = e;
            j(e);
        }, [
            j
        ]);
        const handleKeyActivation = function() {
            TRef.current?.click();
        };
        const X = ()=>function(e) {
                y(e);
                o("WAWebCmd").Cmd.chatInfoDrawer(O);
            };
        const Y = (t)=>function(e) {
                y(e);
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? babelHelpers.extends({
                    descriptorType: "info_flow",
                    chat: O
                }, t) : m.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, babelHelpers.extends({
                    chat: O,
                    onEnd: o("WAWebDrawerManager").closeDrawerRight
                }, t)), {
                    transition: "slide-left",
                    uim: I,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
        const J = ()=>Y({
                initialStep: o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink
            });
        const Z = ()=>function(e) {
                y(e);
                o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("You can't view this group's invite link because you're not an admin.")
                }));
            };
        const ee = (scrollToParticipantList)=>function(e) {
                y(e);
                const r = O.groupMetadata?.parentGroup;
                if (r && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(O)) {
                    o("WAWebCmd").Cmd.openCommunityTabbedInfo(r, undefined, true, scrollToParticipantList);
                } else {
                    o("WAWebCmd").Cmd.chatInfoDrawer(O, {
                        showFullGroupDescription: true,
                        scrollToParticipantList
                    });
                }
            };
        const te = ()=>Y({
                initialSubStep: o("WAWebInfoFlowStep").InfoFlowStep.MemberUpdates
            });
        const ne = ()=>function(e) {
                y(e);
                o("WAWebCmd").Cmd.ephemeralDrawer(O, false, o("WAWebWamEnumEphemeralSettingEntryPointType").EPHEMERAL_SETTING_ENTRY_POINT_TYPE.SYSTEM_MESSAGE);
            };
        const re = ()=>function(e) {
                y(e);
                o("WAWebCmd").Cmd.chatInfoDrawer(O, {
                    scrollToParticipantList: true
                });
            };
        const oe = ()=>{
            const O_groupMetadata = O.groupMetadata;
            if (O_groupMetadata == null) {
                return null;
            }
            if (M.length > 1) {
                return ae(O_groupMetadata);
            }
            if (M.length !== 1 || M[0] == null || o("WAWebUserPrefsMeUser").isMeAccount(M[0]) || !U(M[0])) {
                return null;
            }
            const n = O_groupMetadata.participants.get(M[0]);
            if (n == null) {
                return null;
            }
            const r = o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(O_groupMetadata);
            if (!o("WAWebGroupHistoryPostJoinEligibility").isPostJoinHistoryGroupEligible(r) || o("WAWebGroupHistoryPostJoinEligibility").hasNoShareableHistoryBeforeJoin(shareableHistoryInfo, n.joinTime ?? p_msg.t, O_groupMetadata.id) || !o("WAWebGroupHistoryPostJoinEligibility").isEligibleForPostJoinHistory(n, r, p_msg.t) || !o("WAWebGroupHistoryPostJoinEligibility").isPostJoinHistoryExperimentArmEnabled(O_groupMetadata.id)) {
                return null;
            }
            return function(e) {
                y(e);
                o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.sendMessageHistorySystemMessageClicked({
                    groupHistorySystemMessageType: o("WAWebGroupHistorySenderUserJourneyLogger").getGroupHistorySystemMessageType(w),
                    recipientCount: 1,
                    uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT
                });
                o("WAWebGroupHistoryPostJoinSendFlow").startPostJoinSendFlow(O.id, [
                    n
                ], p_msg.t, o("WAWebWamEnumBundleSendSource").BUNDLE_SEND_SOURCE.SYSTEM_MESSAGE, o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT, o("WAWebGroupHistorySenderUserJourneyLogger").getGroupHistorySystemMessageType(w));
            };
        };
        var ae = (t)=>{
            if (!V) {
                return null;
            }
            const e = o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(t);
            if (!o("WAWebGroupHistoryPostJoinEligibility").isPostJoinHistoryGroupEligible(e)) {
                return null;
            }
            const n = [];
            for (const r of M){
                if (!(r == null || o("WAWebUserPrefsMeUser").isMeAccount(r) || !U(r))) {
                    const a = t.participants.get(r);
                    if (a != null) {
                        n.push(a);
                    }
                }
            }
            const i = n.filter((e)=>!o("WAWebGroupHistoryPostJoinEligibility").hasNoShareableHistoryBeforeJoin(shareableHistoryInfo, e.joinTime ?? p_msg.t, t.id));
            if (i.length === 0) {
                return null;
            }
            const l = i.some((t)=>o("WAWebGroupHistoryPostJoinEligibility").isEligibleForPostJoinHistory(t, e, p_msg.t));
            if (!l || !o("WAWebGroupHistoryPostJoinEligibility").isPostJoinHistoryExperimentArmEnabled(t.id)) {
                return null;
            }
            return function(e) {
                y(e);
                o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.sendMessageHistorySystemMessageClicked({
                    groupHistorySystemMessageType: o("WAWebGroupHistorySenderUserJourneyLogger").getGroupHistorySystemMessageType(w),
                    recipientCount: i.length,
                    uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT
                });
                o("WAWebGroupHistoryPostJoinSendFlow").startPostJoinSendFlow(O.id, i, p_msg.t, o("WAWebWamEnumBundleSendSource").BUNDLE_SEND_SOURCE.SYSTEM_MESSAGE, o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT, o("WAWebGroupHistorySenderUserJourneyLogger").getGroupHistorySystemMessageType(w));
            };
        };
        const ie = ()=>function(e) {
                let t;
                y(e);
                const r = !!((t = O.groupMetadata) != null && t.participants.iAmAdmin());
                const a = O.groupMetadata?.memberLinkMode;
                const i = o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(O);
                o("WAWebGroupInviteUtils.react").openGrowthLockedModal(r, i, a);
            };
        const le = ()=>function(e) {
                let t;
                y(e);
                const r = !!((t = O.groupMetadata) != null && t.participants.iAmAdmin());
                const a = o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(O);
                const i = O.groupMetadata?.memberLinkMode;
                if (r && !a) {
                    const Component = o("WAWebInfoFlowLoadable").InfoFlowLoadable;
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                        descriptorType: "info_flow",
                        chat: O,
                        initialStep: o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink
                    } : <Component chat={O} onEnd={o("WAWebDrawerManager").closeDrawerRight} initialStep={o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink}/>, {
                        transition: "slide-left",
                        uim: I,
                        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                    });
                } else {
                    o("WAWebGroupInviteUtils.react").openGrowthLockedModal(r, a, i);
                }
            };
        const se = (t)=>function(e) {
                const Component = o("WAWebExistingGroupPermissionsDrawerLoadable").ExistingGroupPermissionsDrawerLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "existing_group_permissions",
                    chat: O,
                    groupMetadata: t
                } : <Component chat={O} groupMetadata={t} onClose={o("WAWebDrawerManager").closeDrawerRight}/>, {
                    transition: "slide-left",
                    uim: I,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
        const ue = ()=>function(e) {
                const Component = o("WAWebGroupMembershipApprovalRequestsFlowLoadable").GroupMembershipApprovalRequestsFlowLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "group_membership_approval_requests",
                    chat: O
                } : <Component chat={O} onBack={o("WAWebDrawerManager").closeDrawerRight}/>, {
                    transition: "slide-left",
                    uim: I,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
        const ce = (t)=>function(e) {
                const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
                    surface: "unknown",
                    viewName: "group-notification"
                }} onOK={o("WAWebModalManager").closeModalManager}>{t}</Component>, {
                    transition: "modal-flow"
                });
            };
        const de = (t)=>function(e) {
                o("WAWebExternalLink.react").openExternalLink(t);
            };
        const me = (t)=>function(e) {
                y(e);
                o("WAWebCmd").Cmd.openCommunitySettingsDrawer(t);
            };
        const pe = (t)=>function(e) {
                y(e);
                o("WAWebCmd").Cmd.openCommunityPendingGroupsDrawer(t);
            };
        const _e = (author)=>function(e) {
                y(e);
                o("WAWebFindChatAction").findOrCreateLatestChat(author, "messageAuthor").then(({ chat })=>{
                    o("WAWebCmd").Cmd.openChatBottom({
                        chat,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SystemMessage
                    });
                });
            };
        const fe = ()=>{
            const e = clickable ? o("WAWebGroupAgentAddedRowProfile").getAddedGroupAgentProfile(w, M, O) : null;
            if (e == null) {
                return null;
            }
            const { agentWid, destination } = e;
            return function(e) {
                y(e);
                o("WAWebOpenGroupAgentProfile.react").openGroupAgentProfile(destination, o("WAWebContactCollection").ContactCollection.gadd(agentWid), O, "formatParticipantNames");
            };
        };
        const ge = (t)=>{
            let e;
            const { _typeLocal, author, subtypeLocal, templateParamsLocal } = t;
            if (clickable) {
                if (o("WAWebGroupHistoryPostJoinSubtype").isPostJoinHistoryCTASubtype(subtypeLocal)) {
                    const l = oe();
                    if (l != null) {
                        return l;
                    }
                }
                switch(subtypeLocal){
                    case "add":
                        if (o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled()) {
                            return re();
                        }
                        return undefined;
                    case "picture":
                    case "subject":
                        if (o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(O)) {
                            let u;
                            if ((u = O.groupMetadata) != null && u.parentGroup) {
                                return o("WAWebFormatParticipantNames").openCommunity(O.groupMetadata.parentGroup);
                            }
                            return undefined;
                        }
                        return X();
                    case "revoke_invite":
                        if (o("WAWebCommunitySubgroupInviteLinkRestriction").isSubgroupInviteLinkRestrictedByParentCommunity(O.groupMetadata)) {
                            return Z();
                        }
                        return J();
                    case "description":
                        return ee();
                    case "parent_group_description":
                        return ee();
                    case "ephemeral":
                        {
                            const d = O.groupMetadata?.canSetEphemeralSetting();
                            if (d === true) {
                                return ne();
                            }
                            break;
                        }
                    case "initial_pHash_mismatch":
                    case "default_sub_group_promote":
                    case "default_sub_group_demote":
                        {
                            const p = O.groupMetadata?.parentGroup != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(O);
                            if (o("WAWebGroupMemberUpdatesGatingUtils").groupMemberUpdatesHideInThreadEnabled() && !p) {
                                return te();
                            }
                            return ee(true);
                        }
                    case "growth_unlocked":
                        if (o("WAWebCommunitySubgroupInviteLinkRestriction").isSubgroupInviteLinkRestrictedByParentCommunity(O.groupMetadata)) {
                            return Z();
                        }
                        return le();
                    case "growth_locked":
                        return ie();
                    case "ephemeral_keep_in_chat":
                        return function() {
                            o("WAWebKicNux.react").openKicNux(O, o("WAWebWamEnumTriggerType").TRIGGER_TYPE.SYSTEM_MESSAGE);
                        };
                    case "membership_approval_mode":
                        {
                            const _ = templateParamsLocal[1] === "admin";
                            if (_) {
                                const f = O.groupMetadata;
                                if (f && f.participants.iAmAdmin()) {
                                    return se(f);
                                }
                                return ce(s._("You are not an admin anymore. Only admins can change this setting."));
                            }
                            break;
                        }
                    case "membership_approval_request":
                    case "created_membership_requests":
                        if ((e = O.groupMetadata) != null && e.participants.iAmAdmin()) {
                            return ue();
                        }
                        return ce(s._("You are not an admin anymore. Only admins can review requests to join."));
                    case "allow_admin_reports":
                        {
                            const g = templateParamsLocal[1] === "admin";
                            const h = templateParamsLocal[1] === "regular";
                            if (g) {
                                const y = O.groupMetadata;
                                if (y && y.participants.iAmAdmin()) {
                                    return se(y);
                                }
                                return ce(s._("You are not an admin anymore. Only admins can change this setting"));
                            } else if (h) {
                                return de(o("WAWebFaqUrl").getReportToAdminFaqUrl());
                            }
                            break;
                        }
                    case "allow_non_admin_sub_group_creation":
                        {
                            let C;
                            const S = !!((C = O.groupMetadata) != null && C.participants.iAmAdmin());
                            const R = O.groupMetadata?.parentGroup;
                            if (!S || !R) {
                                break;
                            }
                            return me(R);
                        }
                    case "sibling_group_link":
                        {
                            const k = O.groupMetadata?.parentGroup;
                            if (!k) {
                                break;
                            }
                            return o("WAWebFormatParticipantNames").openCommunity(k);
                        }
                    case "created_subgroup_suggestion":
                        {
                            let I;
                            const D = !!((I = O.groupMetadata) != null && I.participants.iAmAdmin());
                            const $ = O.groupMetadata?.parentGroup;
                            if (!D || !$) {
                                break;
                            }
                            return pe($);
                        }
                    case "community_owner_update":
                        {
                            let P;
                            const N = o("WAWebChatCommunityUtils").getNewCommunityOwnerFromTemplateParams(templateParamsLocal);
                            if (o("WAWebSystemMessagesUtils").isMe(N)) {
                                return de(o("WAWebFaqUrl").getCommunityBecomingOwnerUrl());
                            }
                            if ((P = O.groupMetadata) != null && P.parentGroup) {
                                return o("WAWebFormatParticipantNames").openCommunityInfo(O.groupMetadata.parentGroup);
                            }
                            return undefined;
                        }
                    case "hidden_group":
                        return de(o("WAWebFaqUrl").getCommunityGroupsVisibilityFaqUrl());
                    case "member_add_mode":
                        {
                            const M = O.groupMetadata;
                            if (M && M.participants.iAmAdmin()) {
                                return se(M);
                            }
                            return undefined;
                        }
                    case "member_link_mode":
                        return;
                    case "join_flood_notification":
                        {
                            const w = O.groupMetadata;
                            if (w && w.participants.iAmAdmin()) {
                                return function(e) {
                                    o("WAWebLinkJoinedMembersUtils").logGroupBulkRemovalWamEvent(o("WAWebWamEnumGroupBulkRemovalAction").GROUP_BULK_REMOVAL_ACTION.TAP_SYSTEM_MESSAGE, O.id);
                                    o("WAWebRemoveLinkJoinedMembersModal.react").openRemoveLinkJoinedMembersModal(O, w, p_msg.t);
                                };
                            }
                            return undefined;
                        }
                    case "announce":
                        if (D_isKeyboardUser) {
                            return _e(author);
                        }
                }
            }
        };
        useImperativeHandle(t_ref, function() {
            return {
                handleKeyActivation
            };
        });
        o("useWAWebListener").useListener(O?.groupMetadata, "change:support", k);
        o("useWAWebMuseAgentAddProfileSubscription").useMuseAgentAddProfileSubscription(w, M, N);
        o("useWAWebListener").useListener(O?.groupMetadata?.participants, "change:groupHistorySentState", k);
        useEffect(function() {
            if (O != null && O.groupMetadata != null && V) {
                o("WAWebGroupHistoryParticipantStateHydration").initializeGroupHistoryStateForChat(O.id);
            }
        }, undefined);
        if (F !== "gp2") {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "wa:groupNotification:unknown message type: ",
                ""
            ])), F).sendLogs("unknown-group-notification");
            return null;
        }
        const he = o("WAWebMessageGroupNotificationBodyText").getMsgTypeAndGroupBodyText({
            clickable,
            msg: p_msg,
            isLastMsg: isLastMsg_1
        });
        const { isBodyTextClickable, l10nBodyTextInstance } = he;
        if (l10nBodyTextInstance == null) {
            return null;
        }
        const ctaText = r("WAWebFormatCTAText")({
            type: F,
            subtype: w,
            id: p_msg.id,
            iAmAdmin: O.groupMetadata?.participants.iAmAdmin(),
            recipients: M,
            chat: O,
            msgT: p_msg.t,
            shareableHistoryInfo,
            latestJoinTimeByRecipient,
            templateParams: A
        });
        const ve = o("WAWebStateUtils").unproxy(p_msg.unsafe());
        const Se = ve.subtype === "ephemeral" ? o("WAWebFormatEphemeralSetting").getDisappearingModeUpdateParts(ve) : null;
        const Re = <B2Component clickable={clickable} type={F} subtype={w}/>;
        const Le = fe() ?? ge({
            _typeLocal: F,
            author: p_msg.author,
            subtypeLocal: w,
            templateParamsLocal: A
        });
        let Ee;
        if ((w === "create" && o("WAWebUserPrefsMeUser").isMeAccount(O.groupMetadata?.owner) || (w === "add" || w === "invite") && o("WAWebUserPrefsMeUser").isMeAccount(M[0])) && !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(O) && !isLastMsg_1) {
            Ee = m.jsx(r("WAWebGroupNotificationContextCard.react"), {
                chat: O,
                msg: p_msg
            });
        } else if (o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled() && ctaText != null && clickable === true) {
            const Component = o("WAWebSystemMessageWithSingleCTA.react").SystemMessageWithSingleCTA;
            Ee = <Component role="link" bodyText={l10nBodyTextInstance} isBodyTextClickable={isBodyTextClickable} ctaText={ctaText} ctaXstyle={C.ctaNoWrap} icon={Re} onClick={Le} onclickRef={onclickRef} className="x6ikm8r x10wlt62 xlyipyv" testid={w ? `subtype-${w}` : ""}/>;
        } else if (Se != null) {
            const ke = clickable === true ? Se.ctaText : null;
            Ee = <div ref={Le ? TRef : undefined} role={Le ? "button" : undefined} className="x6ikm8r x10wlt62 xlyipyv" onClick={Le} data-testid={w ? `subtype-${w}` : undefined}>{Re}{Se.text}{ke != null ? <> <span {...babelHelpers.extends({}, (c || (c = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body3Emphasized), {
                children: ke
            })}/></> : null}</div>;
        } else {
            const Ie = H();
            const Te = clickable === true && !o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled() && Ie?.show === true;
            let De;
            if (Ie != null) {
                De = onclickRef;
            } else if (Le != null) {
                De = TRef;
            }
            const xe = <span {...babelHelpers.extends({}, (c || (c = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body3, C.ctaNoWrap), {
                "data-testid": "post_join_history_legacy_cta",
                children: s._("Click to share group history")
            })}/>;
            Ee = <div ref={De} role={Le ? "button" : undefined} className="x6ikm8r x10wlt62 xlyipyv" onClick={Le} data-testid={w ? `subtype-${w}` : undefined}>{Re}{Te ? s._("{system-message-body}. {system-message-cta}.", [
                s._param("system-message-body", l10nBodyTextInstance),
                s._param("system-message-cta", xe)
            ]) : l10nBodyTextInstance}</div>;
        }
        return Ee;
    }
    VComponent.displayName = `${VComponent.name} [from ${i.id}]`;
    function S(e, t) {
        for (const n of e){
            const r = o("WAWebGroupHistoryPostJoinEligibility").getParticipantPostJoinEligibility(n, t);
            if (!r.eligible) {
                return r.reason;
            }
        }
        return "no_available_messages";
    }
    l.default = VComponent;
}, 226);