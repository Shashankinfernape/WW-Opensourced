__d("WAWebUpdateModelForGroupAction", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAfterReadUtils",
    "WAWebApiContact",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatSeenBridge",
    "WAWebCommunityActivityCollection",
    "WAWebCommunityActivityModel",
    "WAWebCommunitySubgroupSuggestionsUtils",
    "WAWebEphemeralityUtils",
    "WAWebGroupAgentMembershipRequests",
    "WAWebGroupGatingUtils",
    "WAWebGroupGetMembershipApprovalRequestsJob",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebInvalidateEventsAction",
    "WAWebLeaveReasonType",
    "WAWebNux",
    "WAWebNuxAction",
    "WAWebPollsInvalidateChatPollMsgsAction",
    "WAWebRemoveFromFavoritesAction",
    "WAWebUpdateModelsForCommunityAction",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "compactMap",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(t, a) {
        const t_chatId = t.chatId;
        const l = o("WAWebChatCollection").ChatCollection.get(t_chatId);
        if (!l) {
            return (p || (p = n("Promise"))).resolve();
        }
        const _ = r("nullthrows")(l.groupMetadata);
        const { author, ts } = t;
        switch(a.actionType){
            case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT:
                {
                    const h = {
                        name: a.subject
                    };
                    l.contact.set(h);
                    _.set("subject", a.subject);
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE:
                {
                    if (!a.jid) {
                        break;
                    }
                    const y = r("WAWebGroupMetadataCollection").assertGet(a.jid);
                    if (y.participants.iAmAdmin()) {
                        const C = a.participants.map(({ id })=>({
                                id,
                                isAdmin: false
                            }));
                        y.participants.add(C, {
                            merge: true
                        });
                    } else {
                        y.participants.remove(a.participants.map((e)=>e.id));
                    }
                    if (a.participants.find((e)=>o("WAWebUserPrefsMeUser").isMeAccount(e.id))) {
                        const b = y.participants.filter((e)=>!e.isAdmin).map((e)=>e.id);
                        y.participants.remove(b);
                    }
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE:
                {
                    if (!a.jid) {
                        break;
                    }
                    const v = r("WAWebGroupMetadataCollection").assertGet(a.jid);
                    const S = a.participants.map(({ id })=>({
                            id,
                            isAdmin: true
                        }));
                    v.participants.add(S, {
                        merge: true
                    });
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.ADD:
            case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE:
            case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE:
                {
                    if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
                        if (_.groupAdder == null) {
                            _.set("groupAdder", t.author);
                        }
                        const R = a.participants.some((e)=>e.id.isLid());
                        const L = o("WAWebGroupMetadataGetters").getIsCag(_);
                        const E = !!_.isLidAddressingMode;
                        if (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() || o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) {
                            const k = o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(a.participants);
                            if (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && k.includeOpenMetabot) {
                                _.isOpenBotGroup = true;
                            }
                            if (o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() && k.includeTeeMetabot) {
                                _.isTeeBotGroup = true;
                            }
                        }
                        if (R && !L && !E) {
                            break;
                        }
                    }
                    let I = [];
                    const T = new Set;
                    if (_.participants.iAmAdmin() || a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD || a.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE) {
                        I = a.participants.map(({ id })=>id);
                        a.participants.forEach(({ id, isAdmin, lid })=>{
                            if (isAdmin) {
                                T.add(id.toString());
                            }
                            if (!(lid == null || id.isLid())) {
                                _.participants.remove(lid);
                            }
                        });
                    } else if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE) {
                        I = a.participants.map(({ id, lid })=>{
                            if (lid == null || id.isLid()) {
                                return id;
                            }
                            return lid;
                        });
                        a.participants.forEach(({ id, lid })=>{
                            if (!(lid == null || id.isLid())) {
                                _.participants.remove(id);
                            }
                        });
                    }
                    const D = new Map(a.participants.map((e)=>[
                            e.id.toString(),
                            e.groupHistorySentState
                        ]));
                    const x = new Map(a.participants.map((e)=>[
                            e.id.toString(),
                            e.joinTime
                        ]));
                    const $ = I.map((e)=>{
                        const t = D.get(e.toString());
                        const n = x.get(e.toString());
                        const r = {};
                        if (t != null) {
                            r.groupHistorySentState = t;
                        }
                        if (n != null && n > 0) {
                            r.joinTime = n;
                        }
                        return babelHelpers.extends({
                            id: e,
                            isAdmin: a.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE || a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD && T.has(e.toString())
                        }, r);
                    });
                    _.participants.add($, {
                        merge: true
                    });
                    if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
                        I.forEach((e)=>{
                            _.pastParticipants.remove(e);
                            if (o("WAWebUserPrefsMeUser").isMeAccount(e)) {
                                _.pastParticipants.reset();
                            }
                        });
                        if (_.membershipApprovalMode) {
                            I.forEach((e)=>{
                                _.membershipApprovalRequests.remove(e);
                            });
                        }
                        I.forEach((e)=>{
                            r("WAWebGroupMetadataCollection").trigger(`group_participant_change_${e.toString()}`, {
                                gid: l.id,
                                collectionIsStale: true
                            });
                        });
                        if (a.isParentGroup === true) {
                            r("WAWebCommunityActivityCollection").add({
                                id: t_chatId.toString(),
                                communityId: t_chatId,
                                type: o("WAWebCommunityActivityModel").ActivityTypeType.NEW_COMMUNITY,
                                timestamp: ts ?? o("WATimeUtils").unixTime()
                            });
                        }
                    }
                    if (I.find((e)=>o("WAWebUserPrefsMeUser").isMeAccount(e))) {
                        if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE) {
                            if (o("WAWebGroupMetadataGetters").getGroupType(_) === o("WAWebGroupType").GroupType.COMMUNITY) {
                                const P = o("WAWebNux").getCommunityAdminPromotionNuxKey(_.id.toString());
                                o("WAWebNuxAction").resetNux(P).catch((t)=>{
                                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                        "[groups] resetNux failed on community admin promote: ",
                                        ""
                                    ])), t).sendLogs("group-action-promote-reset-nux-failed");
                                });
                            }
                            if (_.membershipApprovalMode) {
                                o("WAWebGroupGetMembershipApprovalRequestsJob").queryAndUpdateGroupMembershipApprovalRequests(l.id).catch((e)=>{
                                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                        "[groups] queryAndUpdateGroupMembershipApprovalRequests failed on group action promote: ",
                                        ""
                                    ])), e).sendLogs("group-action-promote-query-membership-approval-requests-failed");
                                });
                            }
                        } else {
                            if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE) {
                                _.membershipApprovalRequests.reset();
                            }
                        }
                    }
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.REMOVE:
                {
                    let M = false;
                    const w = [];
                    const A = [];
                    a.participants.forEach(({ id, isAdmin, lid })=>{
                        const i = o("WAWebUserPrefsMeUser").isMeAccount(id);
                        if (lid != null && i && isAdmin === true) {
                            w.push(lid);
                        }
                        w.push(id);
                        A.push({
                            id,
                            leaveTs: ts,
                            leaveReason: id.equals(t.author) ? o("WAWebLeaveReasonType").LeaveReason.Left : o("WAWebLeaveReasonType").LeaveReason.Removed
                        });
                        if (i) {
                            M = true;
                        }
                    });
                    _.participants.remove(w);
                    _.pastParticipants.add(A);
                    if (a.reason !== o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE) {
                        try {
                            _.membershipApprovalRequests.remove(o("WAWebGroupAgentMembershipRequests").selectMuseAgentRequestsOfRemovedMembers(_.membershipApprovalRequests.toArray(), a.participants.flatMap(({ id, lid })=>{
                                if (lid == null) {
                                    return [
                                        id
                                    ];
                                }
                                return [
                                    id,
                                    lid
                                ];
                            }), {
                                getAgentProfile: function(t) {
                                    return o("WAWebBotProfileCollection").BotProfileCollection.get(t);
                                },
                                getAlternateUserWid: o("WAWebApiContact").getAlternateUserWid
                            }));
                        } catch (error) {
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[groups] remove Muse agent requests of removed members err ",
                                ""
                            ])), error).sendLogs("group-action-remove-muse-agent-requests-failed");
                        }
                    }
                    if (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() || o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) {
                        try {
                            const F = o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(a.participants);
                            if (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && F.includeOpenMetabot && !_.participants.some((e)=>e?.id != null && o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e.id))) {
                                _.isOpenBotGroup = false;
                            }
                            if (o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() && F.includeTeeMetabot) {
                                const O = _.participants.some((e)=>e?.id?.isBot() === true);
                                if (!O) {
                                    _.isTeeBotGroup = false;
                                }
                            }
                        } catch (error) {
                            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[bot groups] prev participant state check err ",
                                ""
                            ])), error).sendLogs("bot-groups-error-previous-participant-state");
                        }
                    }
                    if (a.reason === o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE) {
                        _.participants.add(a.participants.map(({ id, lid })=>{
                            if (lid == null || id.isLid()) {
                                return {
                                    id
                                };
                            }
                            return {
                                id: lid
                            };
                        }), {
                            merge: true
                        });
                    }
                    a.participants.forEach((e)=>{
                        r("WAWebGroupMetadataCollection").trigger(`group_participant_change_${e.id.toString()}`, {
                            gid: l.id
                        });
                    });
                    if (M) {
                        o("WAWebPollsInvalidateChatPollMsgsAction").invalidateChatPollMsgs(l);
                        o("WAWebInvalidateEventsAction").invalidateEventMsgsForChat(l);
                        o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(l.id, {
                            suppressToast: true
                        });
                    }
                    const B = _.getParentGroupChat()?.groupMetadata;
                    if (o("WAWebGroupMetadataGetters").getIsCag(_)) {
                        if (B != null) {
                            B.participants.remove(w);
                        }
                        if (B != null) {
                            B.pastParticipants.add(A);
                        }
                    }
                    if (!_.isParentGroupParticipant() && _.parentGroup) {
                        if (B != null) {
                            B.trigger("exitParentGroup");
                        }
                        o("WAWebUpdateModelsForCommunityAction").updateModelsForExitedCommunity(_.parentGroup);
                    }
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.MODIFY:
                if (author && a.participants && a.participants.length > 0) {
                    const W = author;
                    const q = a.participants[0].id;
                    const U = _.participants.remove(W);
                    let isAdmin = false;
                    let H = false;
                    if (U.length && U[0]) {
                        isAdmin = U[0].isAdmin;
                        H = U[0].isSuperAdmin;
                    }
                    const G = {
                        id: q,
                        isAdmin,
                        isSuperAdmin: H
                    };
                    _.participants.add(G);
                }
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.INVITE_CODE:
                if (a.code) {
                    _.inviteCode = a.code;
                } else {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "model:chat:handleGroupAction:invalid invite code: ",
                        " for ",
                        ""
                    ])), a.code, l.id.toString());
                }
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
                _.set({
                    desc: a.desc,
                    descId: a.descId,
                    descTime: a.descTime,
                    descOwner: author?.toString()
                });
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE:
                if (_.descId === a.descId) {
                    _.set({
                        desc: undefined,
                        descId: undefined,
                        descTime: undefined,
                        descOwner: undefined
                    });
                    break;
                }
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.RESTRICT:
                _.restrict = !!a.value;
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND:
                {
                    const z = !!a.value;
                    if (z && !_.suspended && o("WAWebGroupMetadataGetters").getGroupType(_) === o("WAWebGroupType").GroupType.DEFAULT && _.participants.iAmAdmin() && o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignEnabled()) {
                        l.unreadCount = -1;
                        o("WAWebChatSeenBridge").markConversationUnseen(t_chatId);
                    }
                    _.suspended = z;
                    if (z) {
                        _.suspendAppealApprovedSeen = false;
                    }
                    o("WAWebUpdateModelsForCommunityAction").maybeUpdateModelsForCommunitySuspendedStatus(t_chatId, z);
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL:
                {
                    _.suspendAppealStatus = a.appealStatus;
                    _.suspendAppealUpdateTime = a.appealUpdateTime;
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE:
                _.announce = !!a.value;
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
                _.noFrequentlyForwarded = !!a.value;
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL:
                {
                    const j = o("WAWebAfterReadUtils").isAfterReadEnabled() && o("WAWebAfterReadUtils").isAfterReadDuration(a.duration);
                    if (j) {
                        _.ephemeralDuration = o("WAWebAfterReadUtils").getAfterReadFallbackDuration();
                        _.afterReadDuration = a.duration;
                    } else {
                        _.ephemeralDuration = a.duration;
                        _.afterReadDuration = null;
                    }
                    _.disappearingModeTrigger = o("WAWebEphemeralityUtils").getDisappearingModeTrigger(a.trigger);
                    _.disappearingModeInitiatedByMe = a.initiatedByMe;
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE:
                {
                    const K = [];
                    a.participants.forEach(({ id })=>{
                        if (_.pendingParticipants.get(id)) {
                            K.push(id);
                        }
                    });
                    _.pendingParticipants.remove(K);
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.DELETE:
                if (a.reason === o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT) {
                    o("WAWebUpdateModelsForCommunityAction").updateModelsForIntegrityDeactivateCommunity(t_chatId);
                } else if (a.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT) {
                    o("WAWebUpdateModelsForCommunityAction").updateModelsForDeactivateCommunity(t_chatId);
                } else {
                    _.terminated = true;
                }
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED:
                _.growthLockExpiration = undefined;
                _.growthLockType = undefined;
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
                if (a.type === "invite") {
                    _.growthLockExpiration = a.expiration;
                    _.growthLockType = a.type;
                }
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK:
                _.parentGroup = a.groupDatas[0].id;
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
                o("WAWebUpdateModelsForCommunityAction").updateModelsForSubgroupLink({
                    parentGroupId: l.id,
                    subgroups: a.groupDatas,
                    timestamp: ts,
                    author: t.author
                });
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK:
                if (_.parentGroup) {
                    o("WAWebUpdateModelsForCommunityAction").updateModelsForSubgroupLink({
                        parentGroupId: _.parentGroup,
                        subgroups: a.groupDatas,
                        timestamp: ts,
                        author: t.author
                    });
                }
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK:
                _.parentGroup = undefined;
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
                o("WAWebUpdateModelsForCommunityAction").updateModelsForSubgroupUnlink(l.id, a.groupDatas);
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
                if (_.parentGroup) {
                    o("WAWebUpdateModelsForCommunityAction").updateModelsForSubgroupUnlink(_.parentGroup, a.groupDatas);
                }
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
                _.membershipApprovalMode = !!a.value;
                if (!a.value) {
                    _.membershipApprovalRequests.reset();
                }
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS:
                {
                    _.set("reportToAdminMode", a.value);
                    if (!a.value) {
                        _.set("lastReportToAdminTimestamp", null);
                    }
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECEIVED:
                {
                    _.set("lastReportToAdminTimestamp", a.value);
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS:
                {
                    const Q = a.requests.map((e)=>({
                            id: e.wid,
                            t: ts,
                            addedBy: r("nullthrows")(author),
                            requestMethod: a.requestMethod,
                            parentGroupId: a.parentGroupId
                        }));
                    _.membershipApprovalRequests.add(Q);
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
                a.requests.forEach((e)=>{
                    _.membershipApprovalRequests.remove(e);
                });
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
                _.allowNonAdminSubGroupCreation = !!a.value;
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION:
                _.subgroupSuggestions.add({
                    id: o("WAWebCommunitySubgroupSuggestionsUtils").getSubgroupSuggestionId(a.id, a.owner),
                    groupId: a.id,
                    parentGroupId: a.parentGroupId,
                    subject: a.subject,
                    desc: a.description,
                    owner: a.owner,
                    t: a.t,
                    isExistingGroup: a.isExistingGroup,
                    participantCount: a.participantCount
                }, {
                    merge: true
                });
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_SUB_GROUP_SUGGESTIONS:
                _.subgroupSuggestions.remove(a.subgroupSuggestions.map(({ id, owner })=>o("WAWebCommunitySubgroupSuggestionsUtils").getSubgroupSuggestionId(id, owner)));
                break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUBGROUP_SUGGESTIONS_CHANGE_NUMBER:
                {
                    const X = r("compactMap")(a.subgroupSuggestions, function(e) {
                        return _.subgroupSuggestions.get(o("WAWebCommunitySubgroupSuggestionsUtils").getSubgroupSuggestionId(e, a.oldOwner));
                    });
                    _.subgroupSuggestions.remove(X);
                    _.subgroupSuggestions.add(X.map((e)=>({
                            id: o("WAWebCommunitySubgroupSuggestionsUtils").getSubgroupSuggestionId(e.groupId, a.newOwner),
                            groupId: e.groupId,
                            parentGroupId: e.parentGroupId,
                            subject: e.subject,
                            desc: e.desc,
                            owner: a.newOwner,
                            t: e.t,
                            isExistingGroup: e.isExistingGroup,
                            participantCount: e.participantCount
                        })), {
                        merge: true
                    });
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE:
                {
                    _.memberAddMode = a.memberAddMode;
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE:
                {
                    _.memberLinkMode = a.value;
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED:
                {
                    _.generalChatAutoAddDisabled = true;
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE:
                {
                    const { newOwner, oldOwner } = a;
                    const Z = new Set([
                        newOwner.toString()
                    ]);
                    const ee = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(newOwner));
                    if (ee != null) {
                        Z.add(ee.toString());
                    }
                    const te = new Set;
                    if (oldOwner) {
                        te.add(oldOwner.toString());
                        const ne = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(oldOwner));
                        if (ne) {
                            te.add(ne.toString());
                        }
                        if (o("WAWebUserPrefsMeUser").isMeAccount(oldOwner)) {
                            const re = o("WAWebNux").getCommunityAdminPromotionNuxKey(_.id.toString());
                            o("WAWebNuxAction").dismissNux(re);
                        }
                    }
                    const oe = [];
                    _.participants.forEach((e)=>{
                        const t = e.id.toString();
                        if (te.has(t)) {
                            oe.push({
                                id: e.id,
                                isAdmin: true,
                                isSuperAdmin: false
                            });
                        } else if (Z.has(t)) {
                            oe.push({
                                id: e.id,
                                isAdmin: true,
                                isSuperAdmin: true
                            });
                        }
                    });
                    _.owner = newOwner;
                    _.participants.add(oe, {
                        merge: true
                    });
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP:
                {
                    _.hiddenSubgroup = !!a.value;
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK:
                {
                    _.groupSafetyCheck = !!a.value;
                    break;
                }
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_SHARE_GROUP_HISTORY_MODE:
                {
                    _.memberShareGroupHistoryMode = a.value;
                    break;
                }
            default:
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "unhandled group notif action in handleGroupAction"
                ]))).tags("groups");
                break;
        }
        return (p || (p = n("Promise"))).resolve();
    }
    l.updateModelForGroupAction = _;
}, 98);