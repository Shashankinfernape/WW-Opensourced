__d("WAWebHandleGroupNotificationAction", [
    "Promise",
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBotGroupBackendUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGetMessageCache",
    "WAWebGroupAgentAddSystemMsgs",
    "WAWebGroupAgentDeletedChat",
    "WAWebGroupAgentPrivacyNotice",
    "WAWebGroupAgentRemovalSystemMsgs",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupLinkJoinUtils",
    "WAWebGroupQueryJob",
    "WAWebGroupSystemMsg",
    "WAWebGroupType",
    "WAWebGroupUtils",
    "WAWebGroupsParticipantsApi",
    "WAWebHandleGroupCreation",
    "WAWebHandleGroupNotificationConst",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidMappingUsernameLearnUtils",
    "WAWebMemberLabelGroupRemoveHandler",
    "WAWebSchemaChat",
    "WAWebShouldTriggerQueryGroupInfo",
    "WAWebUpdateDbForGroupActionApi",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "cr:4533",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield (C || (C = n("Promise"))).all([
                o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e),
                o("WAWebSchemaChat").getChatTable().get(e.toString(), false)
            ]);
            const r = t[0];
            const a = t[1];
            return !!r || !!a && !!a.t;
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action: t, actionShouldBeHiddenFromNonAdmins: n, meta: r }) {
            const a = (yield o("WAWebHandleGroupNotificationConst").getIsCagById(r.chatId)) === true;
            if (a && n) {
                const i = yield o("WAWebGroupsParticipantsApi").getParticipants(r.chatId);
                const l = i ? o("WAWebGroupUtils").amIGroupAdmin(i.admins) : false;
                if (l) {
                    return t.participants;
                }
                return [];
            }
            return t.participants;
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebGroupHistoryParticipantJob").enrichGroupActionWithStoredHistoryState(e.chatId, t);
            return o("WAWebBackendApi").frontendSendAndReceive("updateModelForGroupAction", {
                groupMeta: e,
                groupAction: n
            });
        });
        return E.apply(this, arguments);
    }
    function k(e, t, n, r, o, a) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = false, r, a = false, i = false) {
            yield o("WAWebHandleGroupCreation").handleGroupCreation({
                groupInfo: t,
                isJoinViaInviteLink: a,
                isOffline: n,
                meta: e,
                suppressInitialE2EENotice: i
            });
            if (r != null) {
                yield o("WAWebUpdateDbForGroupActionApi").updateDBForGroupAction(e, r, n);
                L(e, r);
            }
        });
        return I.apply(this, arguments);
    }
    function T(e, t, n) {
        const r = n.defaultSubgroup === true || n.isLidAddressingMode === true ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        if ((!o("WAWebUserPrefsMeUser").isMeAccount(e.author) || t.reason === o("WAWebGroupType").ADD_REASON.INVITE_AUTO_ADD) && r != null) {
            const a = o("WAWebGroupUtils").amIGroupAdminGivenParticipants(n.participants);
            return {
                actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                participants: [
                    {
                        id: r,
                        isAdmin: a,
                        isSuperAdmin: false
                    }
                ],
                reason: t.reason,
                parentGroupId: n.parentGroup,
                isParentGroup: n.isParentGroup,
                contextGroupId: t.contextGroupId,
                groupName: n.subject,
                defaultSubgroup: n.defaultSubgroup,
                generalSubgroup: n.generalSubgroup,
                hiddenSubgroup: n.hiddenSubgroup
            };
        }
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isOffline: a = false, meta: i }) {
            const l = yield o("WAWebGroupAgentDeletedChat").isAgentChangeInDeletedGroupChatForActions(i.chatId, i.actions);
            let u = null;
            try {
                u = l ? null : yield o("WAWebBotGroupBackendUtils").genE2EENoticeMsgAfterLastAgentRemoved({
                    meta: i,
                    actions: i.actions
                });
            } catch (t) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleGroupNotification: end-to-end encryption notice generation failed with ",
                    ""
                ])), t).sendLogs("group-notification-e2ee-notice-generation-error");
            }
            const c = [];
            const d = yield (C || (C = n("Promise"))).all(i.actions.map((e)=>N({
                    action: e,
                    agentChangeInDeletedChat: l,
                    isOffline: a,
                    meta: i,
                    pendingOfflineWrites: c
                })));
            const m = d.includes(true) && u != null ? $(u, a) : (C || (C = n("Promise"))).resolve();
            yield C.all([].concat(c.map((e)=>e.catch((e)=>{
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "handleGroupNotification: offline removal row write failed with ",
                        ""
                    ])), e).sendLogs("group-notification-offline-removal-rows-write-error");
                })), [
                m
            ]));
        });
        return x.apply(this, arguments);
    }
    function $(e, t) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                yield B([
                    e
                ], t);
            } catch (e) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "handleGroupNotification: end-to-end encryption notice write failed with ",
                    ""
                ])), e).sendLogs("group-notification-e2ee-notice-write-error");
            }
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action: t, agentChangeInDeletedChat: a, isOffline: l = false, meta: s, pendingOfflineWrites: u }) {
            if (!t) {
                return false;
            }
            const C = a ?? (yield o("WAWebGroupAgentDeletedChat").isAgentChangeInDeletedGroupChatForActions(s.chatId, [
                t
            ]));
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "handle action ",
                ""
            ])), t.actionType).tags("groups");
            const v = [];
            try {
                yield o("WAWebLidMappingUsernameLearnUtils").processParsedGroupNotificationForLidMappingAndUsernames({
                    notification: s,
                    flushImmediately: !l
                });
                if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE) {
                    yield o("WAWebMemberLabelGroupRemoveHandler").handleMemberLabelUpdatesOnGroupParticipantRemoval(s, t);
                }
                if (t.actionType === o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.CREATE) {
                    const I = babelHelpers.extends({}, t.groupInfo, {
                        id: s.chatId,
                        isLidAddressingMode: s.isLidAddressingMode
                    });
                    const D = T(s, t, I);
                    const x = yield b(I.id);
                    const $ = D == null || t.isNewGroup === true && !x;
                    const P = $ ? (yield o("WAWebGroupsParticipantsApi").getParticipants(s.chatId))?.participants ?? [] : [];
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "group id ",
                        " exists in storage = ",
                        ""
                    ])), I.id, x).tags("groups");
                    const N = yield o("WAWebGroupAgentPrivacyNotice").genGroupAgentNoticeMsgsForCreate({
                        meta: s,
                        participants: I.participants
                    });
                    yield k(s, I, l, D, t.reason === "invite", N.length > 0);
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "handleGroupCreation done for group id ",
                        ""
                    ])), I.id).tags("groups");
                    if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() || o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) {
                        const M = o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(I.participants);
                        if (M.includeOpenMetabot || M.includeTeeMetabot) {
                            o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                                id: s.chatId,
                                actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD
                            });
                        }
                    }
                    const A = yield o("WAWebGroupSystemMsg").genMsgsForGroupCreation(s, I, x, D);
                    const O = $ ? yield o("WAWebGroupAgentAddSystemMsgs").genGroupCreateAgentAddMsgs({
                        meta: s,
                        participants: I.participants,
                        prevParticipantIds: P,
                        reason: t.reason
                    }) : [];
                    v.push(...(x ? [].concat(A.filter(Boolean), N) : [].concat(N, A.filter(Boolean))).concat(O));
                } else if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
                    if (!r("gkx")("26258")) {
                        const q = (n("cr:4533") == null ? void 0 : n("cr:4533").getDebugIgnoreParticipantAdd()) ?? 0;
                        if (q > 0) {
                            if (n("cr:4533") != null) {
                                n("cr:4533").setDebugIgnoreParticipantAdd(q - 1);
                            }
                            return false;
                        }
                    }
                    const U = yield o("WAWebHandleGroupNotificationConst").notAlreadyInGroup(s.chatId, t.participants);
                    const V = yield o("WAWebShouldTriggerQueryGroupInfo").shouldTriggerQueryGroupInfo({
                        groupWid: s.chatId,
                        action: t
                    });
                    if (V) {
                        yield o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                            id: s.chatId,
                            actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD
                        });
                    } else {
                        yield o("WAWebUpdateDbForGroupActionApi").updateDBForGroupAction(s, t, l);
                        L(s, t);
                    }
                    if (U.length || t.reason) {
                        const H = yield S({
                            meta: s,
                            action: t,
                            actionShouldBeHiddenFromNonAdmins: true
                        });
                        if (H.length > 0) {
                            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "[system message] eligible participants = ",
                                " - ADD"
                            ])), H.length);
                            v.push(...yield w({
                                action: t,
                                meta: s,
                                newParticipants: U,
                                rowParticipants: H,
                                skipPrivacyNotices: V
                            }));
                            if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() || o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) {
                                const G = o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(H);
                                if (!V && (G.includeOpenMetabot || G.includeTeeMetabot)) {
                                    o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                                        id: s.chatId,
                                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD
                                    });
                                }
                            }
                            if (t.reason === o("WAWebGroupType").ADD_REASON.INVITE) {
                                const z = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(s.chatId.toString());
                                if (z) {
                                    try {
                                        const j = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(s.chatId);
                                        const K = yield o("WAWebGroupLinkJoinUtils").maybeGenerateLinkJoinNotifications(s, j, H);
                                        K.forEach((e)=>{
                                            v.push(e);
                                        });
                                    } catch (e) {
                                        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                            "[system message] link join notifications failed: ",
                                            ""
                                        ])), e);
                                    }
                                }
                            }
                        }
                    }
                } else if (!(t.actionType === o("WAWebGroupType").GROUP_ACTIONS.INTEGRITY_PARENT_GROUP_UNLINK || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.INTEGRITY_SUB_GROUP_UNLINK)) {
                    if (!(t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_SUB_GROUP_UNLINK)) {
                        if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE && t.reason === o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT) {
                            const Q = yield o("WAWebGroupSystemMsg").genIntegrityDeleteParentNotificationMsgs(s, t);
                            Q.forEach((e)=>{
                                v.push(e);
                            });
                            yield o("WAWebUpdateDbForGroupActionApi").updateDBForGroupAction(s, t, l);
                            L(s, t);
                        } else if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE) {
                            v.push((yield o("WAWebGroupSystemMsg").genDescriptionNotificationMsg(s, t)));
                            yield o("WAWebUpdateDbForGroupActionApi").updateDBForGroupAction(s, t, l);
                            L(s, t);
                        } else if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE && t.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT) {
                            const X = yield o("WAWebGroupSystemMsg").generateDeleteParentNotificationMessages(s);
                            if (X.length === 0) {
                                return false;
                            }
                            X.forEach((e)=>{
                                v.push(e);
                            });
                            yield o("WAWebUpdateDbForGroupActionApi").updateDBForGroupAction(s, t, l);
                            L(s, t);
                        } else {
                            let Y = false;
                            if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE) {
                                const J = yield o("WAWebShouldTriggerQueryGroupInfo").shouldTriggerQueryGroupInfo({
                                    groupWid: s.chatId,
                                    action: t,
                                    disableForCAGs: true
                                });
                                if (J) {
                                    Y = true;
                                    o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                                        id: s.chatId,
                                        actionType: o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                                    });
                                }
                            }
                            if (!Y) {
                                const Z = yield o("WAWebHandleGroupNotificationConst").shouldSkipGenMsg(s, t);
                                yield o("WAWebUpdateDbForGroupActionApi").updateDBForGroupAction(s, t, l);
                                L(s, t);
                                if (!Z) {
                                    const ee = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(s.chatId.toString());
                                    if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE) {
                                        const te = yield S({
                                            meta: s,
                                            action: t,
                                            actionShouldBeHiddenFromNonAdmins: true
                                        });
                                        if (te.length > 0 && (o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                            "[system message] eligible participants = ",
                                            " - REMOVE"
                                        ])), te.length), v.push(...yield F({
                                            action: babelHelpers.extends({}, t, {
                                                participants: te
                                            }),
                                            dbIsStale: Y,
                                            isAdmin: ee,
                                            meta: s
                                        })), o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() || o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled())) {
                                            const ne = o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(te);
                                            if (ne.includeOpenMetabot || ne.includeTeeMetabot) {
                                                o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                                                    id: s.chatId,
                                                    actionType: o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                                                });
                                            }
                                        }
                                    } else if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION) {
                                        const re = yield o("WAWebGroupSystemMsg").genCreatedSubgroupSuggestionNotificationMsg(s, t);
                                        if (re) {
                                            v.push(re);
                                        }
                                    } else if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.MODIFY || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE) {
                                        const oe = t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE;
                                        const ae = yield S({
                                            meta: s,
                                            action: t,
                                            actionShouldBeHiddenFromNonAdmins: oe
                                        });
                                        if (ae.length > 0) {
                                            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                                "[system message] eligible participants = ",
                                                " - actionType = ",
                                                ""
                                            ])), ae.length, t.actionType);
                                            v.push((yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                                                meta: babelHelpers.extends({}, s, {
                                                    isAdmin: ee
                                                }),
                                                action: babelHelpers.extends({}, t, {
                                                    participants: ae
                                                }),
                                                dbIsStale: Y
                                            })));
                                        }
                                    } else if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.ALLOW_NON_ADMIN_SUB_GROUP_CREATION) {
                                        const ie = yield o("WAWebGroupSystemMsg").genAllowNonAdminSubGroupCreationNotificationMsg(s, t);
                                        if (ie) {
                                            v.push(ie);
                                        }
                                    } else if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE) {
                                        const le = yield o("WAWebGroupSystemMsg").genCommunityOwnerUpdateNotificationMsg(s, t);
                                        if (le) {
                                            v.push(le);
                                        }
                                    } else {
                                        o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                            "[system message] another action => ",
                                            ""
                                        ])), t.actionType);
                                        v.push((yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                                            meta: babelHelpers.extends({}, s, {
                                                isAdmin: ee
                                            }),
                                            action: t,
                                            dbIsStale: Y
                                        })));
                                    }
                                }
                            }
                        }
                    }
                }
                const se = C ? [] : v.filter(Boolean);
                const ue = B(se, l);
                if (l && u != null) {
                    u.push(ue);
                } else {
                    yield ue;
                }
                return t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE && se.length > 0;
            } catch (e) {
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "handleGroupNotification: failed with ",
                    ""
                ])), e);
                return false;
            }
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action: t, meta: n, newParticipants: r, rowParticipants: a, skipPrivacyNotices: i }) {
            const l = i ? [] : yield o("WAWebGroupAgentPrivacyNotice").genGroupAgentPrivacyNoticeMsgsForAdd({
                chatId: n.chatId,
                addedParticipantIds: a.filter(({ id: t })=>r.some((e)=>e.id.equals(t))).map(({ id: t })=>t),
                meta: n
            });
            const s = yield o("WAWebGroupAgentAddSystemMsgs").genGroupAddNotificationMsgs({
                meta: n,
                action: babelHelpers.extends({}, t, {
                    participants: a
                }),
                dbIsStale: false
            });
            return o("WAWebGroupAgentPrivacyNotice").orderGroupAgentNoticesAndRows([].concat(l, (yield o("WAWebGroupAgentPrivacyNotice").genMetaAiGroupNoticeMsgsForAdd({
                addedParticipants: a,
                meta: n
            }))), s);
        });
        return A.apply(this, arguments);
    }
    function F(e) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action: t, dbIsStale: n, isAdmin: r, meta: a }) {
            const i = yield o("WAWebGroupAgentRemovalSystemMsgs").genGroupAgentRemovalMsgs({
                meta: a,
                action: t,
                dbIsStale: n,
                isAdmin: r
            });
            return i ?? [
                (yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: babelHelpers.extends({}, a, {
                        isAdmin: r
                    }),
                    action: t,
                    dbIsStale: n
                }))
            ];
        });
        return O.apply(this, arguments);
    }
    function B(e, t) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t) {
                if (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                    e.forEach((e)=>{
                        o("WAWebBackendApi").frontendFireAndForget("updateMessageUI", {
                            chatId: e.id.remote,
                            msg: e
                        });
                    });
                }
                yield o("WAWebGetMessageCache").getMessageCache().addMessages(e.map((e)=>({
                        msg: e
                    })), false);
                return;
            }
            yield (C || (C = n("Promise"))).all(e.map((e)=>o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                    chatId: e.from,
                    newMsg: e,
                    handleSingleMsgOrigin: "handleGroupNotification"
                })));
        });
        return W.apply(this, arguments);
    }
    l.handleActions = D;
    l.handleAction = N;
    l.writeSystemNotifications = B;
}, 98);