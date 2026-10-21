__d("useWAWebConversationPanelOpenChat", [
    "WAJids",
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebAddonHydrationUtils",
    "WAWebBlockContactAction",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebDeleteExpiredPinsAction",
    "WAWebDrawerManager",
    "WAWebGroupAbPropsSyncJob",
    "WAWebGroupGatingUtils",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupSafetyCheckUtils",
    "WAWebGroupType",
    "WAWebMaybeSyncBotSupportFields",
    "WAWebMembershipApprovalRequestAction",
    "WAWebMetaAiOpenGroupNux",
    "WAWebMiscGatingUtils",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebNux",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
    "WAWebQuerySubGroupAction",
    "WAWebResolveSupportedMediaTypes",
    "WAWebRestoreSubgroupSuggestionsAction",
    "WAWebSideNavButtonsActivityModel",
    "WAWebSignupGreetingAction",
    "WAWebSupportChatUtils",
    "WAWebSuspendedCommunityUtils",
    "WAWebSuspendedGroupUtils",
    "WAWebSyncNewsletterStatusMetadataAction",
    "WAWebWid",
    "WAWebWidToJid",
    "react",
    "useWAWebGroupParticipantStatus",
    "useWAWebListener",
    "useWAWebNux",
    "useWAWebSetModelValue"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const useEffect = (m || (m = o("react"))).useEffect;
    function _(t) {
        const a = o("useWAWebSetModelValue").useSetModelValue(t, "active");
        o("useWAWebListener").useListener(t.groupMetadata?.participants, "add", function(e) {
            f(t, [
                e
            ]);
        });
        const i = r("useWAWebGroupParticipantStatus")(t.groupMetadata);
        const l = i[0];
        const m = i[1];
        const _ = r("useWAWebNux")(o("WAWebNux").NUX.SUPPORT_AI);
        const g = _[0];
        useEffect(function() {
            o("WAWebCmd").Cmd.closeContextMenu();
            if (r("WAWebWid").isPSA(t.id)) {
                o("WAWebBlockContactAction").updatePSAUserBlockingStatus(t.id).catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "useOpenChat: error updating PSA user blocking status: ",
                        ""
                    ])), t).sendLogs("use-open-chat-update-psa-user-blocking-status-error");
                });
            }
            a(true);
            o("WAWebMaybeSyncBotSupportFields").maybeSyncBotSupportFields(t.id, {
                ttlMs: o("WAWebMaybeSyncBotSupportFields").CHAT_OPEN_REFRESH_TTL_MS
            });
            o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
            o("WAWebSideNavButtonsActivityModel").setLastSideBarActivityBasedOnChat(t);
            const t_groupMetadata = t.groupMetadata;
            if (t_groupMetadata != null) {
                const { membershipApprovalMode, participants } = t_groupMetadata;
                f(t, participants.toArray());
                const p = o("WAWebGroupMetadataGetters").getGroupType(t_groupMetadata);
                if ((p === o("WAWebGroupType").GroupType.DEFAULT || p === o("WAWebGroupType").GroupType.LINKED_SUBGROUP) && (participants.iAmAdmin() || m) && membershipApprovalMode) {
                    o("WAWebMembershipApprovalRequestAction").readMembershipApprovalRequestsFromDB(t).catch((e)=>{
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "useOpenChat: error reading membership approval requests from DB: ",
                            ""
                        ])), e).sendLogs("use-open-chat-read-membership-approval-requests-from-db-error");
                    });
                }
                if (p === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && participants.iAmAdmin()) {
                    const _ = t_groupMetadata.getParentGroupChat();
                    if (_) {
                        o("WAWebRestoreSubgroupSuggestionsAction").restoreSubgroupSuggestionsFromDb(_);
                    }
                }
                if (p === o("WAWebGroupType").GroupType.LINKED_SUBGROUP) {
                    const h = t_groupMetadata.parentGroup;
                    if (h != null) {
                        const y = r("WAWebGroupMetadataCollection").get(h.toString());
                        if (y == null || y.unjoinedSubgroups.length === 0) {
                            o("WAWebQuerySubGroupAction").queryAndUpdateSubgroupsMetadata(h, y?.joinedSubgroups).catch(()=>{
                                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "useOpenChat: error fetching subgroup metadata for community"
                                ]))).sendLogs("use-open-chat-fetch-subgroup-metadata-error");
                            });
                        }
                    }
                }
                o("WAWebGroupAbPropsSyncJob").syncGroupABPropsTask(o("WAWebWidToJid").widToGroupJid(t.id));
                o("WAWebMetaAiOpenGroupNux").maybeShowMetaAiOpenGroupNuxAtFirstEntry(t);
            }
            if (t.id.isCAPISupportAccount() && o("WAWebABPropsSaga").getIsSagaV1NuxEnabled() && g) {
                o("WAWebSupportChatUtils").openSupportAINux();
            }
            const t_newsletterMetadata = t.newsletterMetadata;
            const b = t_newsletterMetadata != null && o("WAWebNewsletterMetadataGetters").getIsPreview(t_newsletterMetadata);
            if (o("WAWebChatGetters").getIsNewsletter(t) && !b) {
                let v;
                let S;
                let R;
                let L;
                o("WAWebQueryAndUpdateNewslettersMetadataAction").queryAndUpdateNewsletterMetadataAction(o("WAJids").toNewsletterJid(t.id.toString()), {
                    fields: {
                        subscribers: true,
                        verification: true
                    },
                    adminFields: {
                        adminCount: (v = t.newsletterMetadata) != null && v.iAmOwner() ? true : undefined,
                        adminProfileData: (S = t.newsletterMetadata) != null && S.iAmAdminOrOwner() ? true : undefined,
                        adminProfilesSettingEnabled: (R = t.newsletterMetadata) != null && R.iAmAdminOrOwner() ? true : undefined,
                        capabilities: (L = t.newsletterMetadata) != null && L.iAmAdminOrOwner() && o("WAWebNewsletterGatingUtils").shouldFetchAndLogCapabilities() ? true : undefined
                    }
                });
            } else {
                if (o("WAWebChatGetters").getIsNewsletter(t) && b && o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
                    o("WAWebSyncNewsletterStatusMetadataAction").syncNewsletterStatusMetadata(o("WAJids").toNewsletterJid(t.id.toString()), t.id);
                }
            }
            o("WAWebDeleteExpiredPinsAction").deleteExpiredPins(t.id).catch((e)=>{
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "useOpenChat: error deleting expired pins from DB: ",
                    ""
                ])), e).sendLogs("use-open-chat-delete-expired-pins-from-db-error");
            }).then(()=>{
                o("WAWebAddonHydrationUtils").hydrateAddons({
                    ids: [
                        t.id
                    ],
                    hydrationType: o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE
                });
            }).catch((e)=>{
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "useOpenChat: error reading pins from DB: ",
                    ""
                ])), e).sendLogs("use-open-chat-read-pins-from-db-error");
            });
            if (t.attachMediaContents) {
                const sendAsSticker = t.attachMediaContents.isStickerMaker;
                o("WAWebCmd").Cmd.attachMediaDrawer({
                    chat: t,
                    animationName: "noop",
                    bot3pMediaInputAuthorized: o("WAWebResolveSupportedMediaTypes").isBot3pMediaInputEnabled(t),
                    sendAsSticker
                });
            }
            if (o("WAWebChatGroupUtils").isIntegrityDeactivatedCommunityAnnouncementGroup(t)) {
                o("WAWebSuspendedCommunityUtils").openTerminatedCommunityModal();
            } else {
                if (!o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(t)) {
                    if (o("WAWebChatGroupUtils").isSuspendedCommunityAnnouncementGroup(t)) {
                        if (o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignEnabled()) {
                            o("WAWebSuspendedCommunityUtils").openSuspendedCommunityModalByAppealStatus(t);
                        } else {
                            o("WAWebSuspendedCommunityUtils").openSuspendedCommunityModal(t);
                        }
                    } else if (o("WAWebChatGroupUtils").isTerminatedGroupOrNotMember(t)) {
                        if (!o("WAWebChatGroupUtils").isSupportGroup(t)) {
                            if (o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) {
                                o("WAWebSuspendedGroupUtils").openSuspendedGroupModalV2(t);
                            } else {
                                o("WAWebSuspendedGroupUtils").openTerminatedGroupOrNotMemberModal();
                            }
                        }
                    } else if (o("WAWebChatGroupUtils").isSuspendedGroup(t)) {
                        if (o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignEnabled()) {
                            o("WAWebSuspendedGroupUtils").openSuspendedGroupModalByAppealStatus(t);
                        } else if (o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) {
                            o("WAWebSuspendedGroupUtils").openSuspendedGroupModalV2(t);
                        } else {
                            o("WAWebSuspendedGroupUtils").openSuspendedGroupModal(t.id.user.toString());
                        }
                    } else if (o("WAWebSuspendedGroupUtils").shouldShowGroupAppealApprovedModal(t)) {
                        o("WAWebSuspendedGroupUtils").openGroupAppealApprovedModal(t);
                    } else if (o("WAWebGroupSafetyCheckUtils").shouldShowGroupSafetyCheckUI(t)) {
                        o("WAWebGroupSafetyCheckUtils").openGroupSafetyCheckModal(t);
                    }
                }
            }
            return function() {
                if (t.urlText) {
                    t.urlText = undefined;
                }
                if (t.urlNumber) {
                    t.urlNumber = undefined;
                }
                o("WAWebSignupGreetingAction").cancelInFlightSignups(t);
                o("WAWebSignupGreetingAction").maybeCleanupSignupAGM(t);
                a(false);
            };
        }, []);
    }
    function f(e, t) {
        const n = t.map((e)=>e.id).filter(o("WAWebBotUtils").isWidStandardGroupAgentFbidWid);
        if (n.length !== 0) {
            o("WAWebMaybeSyncBotSupportFields").maybeSyncGroupBotSupportFields(n, {
                sourceGroupWid: e.id
            });
        }
    }
    l.default = _;
}, 98);