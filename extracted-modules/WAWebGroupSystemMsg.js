__d("WAWebGroupSystemMsg", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebApiParticipantStore",
    "WAWebBotGroupGatingUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactSystemMsg",
    "WAWebDBCommunity",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupType",
    "WAWebGroupUtils",
    "WAWebGroupsParticipantsApi",
    "WAWebHandleGroupNotificationConst",
    "WAWebLimitSharingModelUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPairList",
    "WAWebProfilePicConstants",
    "WAWebRequestMethodType",
    "WAWebSchemaGroupMetadata",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty"
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
    function b(e, t) {
        const l = e.chatId;
        let s = t.owner ?? e.author ?? o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        const u = o("WAWebGroupUtils").amIGroupAdminGivenParticipants(t.participants);
        const c = l;
        const d = false;
        const m = t.subject;
        let p;
        let _;
        if (t.defaultSubgroup === true) {
            p = "community_create";
            if (t.parentGroup) {
                _ = [
                    t.parentGroup,
                    t.subject
                ];
            }
            s = t.owner ?? e.author;
        } else if (t.generalSubgroup === true && u) {
            p = "general_chat_add";
            _ = [
                "created",
                t.subject
            ];
            s = t.owner ?? e.author;
        } else {
            s = t.owner ?? e.author;
            const y = t.membershipApprovalMode === true ? "true" : "false";
            const C = t.hiddenSubgroup === true ? "true" : "false";
            if (t.parentGroup && t.participants.length === 1) {
                _ = [
                    t.parentGroup,
                    t.parentGroupSubject,
                    t.subject,
                    y,
                    C
                ];
                p = "empty_subgroup_create";
            } else {
                p = "create";
            }
        }
        return {
            id: new (r("WAWebMsgKey"))({
                remote: c,
                fromMe: d,
                participant: s,
                id: H(e, p)
            }),
            author: s,
            body: m,
            from: l,
            recipients: [],
            subtype: p,
            t: t.creation ?? e.ts,
            type: "gp2",
            kind: o("WAWebMsgType").MsgKind.Gp2,
            templateParams: _
        };
    }
    function v(e, t, n, r) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a, i) {
            const l = r.participants.find(({ id: t, isAdmin: n })=>o("WAWebUserPrefsMeUser").isMeAccount(t) && n);
            function s() {
                if (!a && !l && r.defaultSubgroup === true) {
                    return [
                        o("WAWebContactSystemMsg").genNotificationMsg(r.id, {
                            type: "notification_template",
                            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                            subtype: "cag_masked_thread_created",
                            templateParams: []
                        })
                    ];
                }
                return [];
            }
            function u() {
                if (a) {
                    return [];
                }
                return [
                    b(t, r)
                ];
            }
            function c() {
                const e = r.ephemeralDuration;
                if (t.author && t.ts != null && e != null && e > 0) {
                    return [
                        x({
                            author: t.author,
                            ephemeralDuration: e,
                            ts: t.ts,
                            wid: t.chatId
                        })
                    ];
                }
                return [];
            }
            function d() {
                return m.apply(this, arguments);
            }
            function m() {
                m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (i == null) {
                        return [];
                    }
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[CAG] participantAddMsg actionType=",
                        ""
                    ])), i.actionType);
                    return [
                        (yield I({
                            meta: t,
                            action: i,
                            dbIsStale: true
                        }))
                    ].filter(Boolean);
                });
                return m.apply(this, arguments);
            }
            function p() {
                return _.apply(this, arguments);
            }
            function _() {
                _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (r.limitSharingEnabled === true) {
                        const e = yield o("WAWebLimitSharingModelUtils").genLimitSharingSystemMessageOnPersistedChat({
                            chatWID: t.chatId,
                            sharingLimited: r.limitSharingEnabled,
                            acp2Enabled: r.acp2Enabled
                        });
                        if (e) {
                            return [
                                e
                            ];
                        }
                    }
                    return [];
                });
                return _.apply(this, arguments);
            }
            function f() {
                return g.apply(this, arguments);
            }
            function g() {
                g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (r.acp2Enabled === true) {
                        const e = yield o("WAWebLimitSharingModelUtils").genAcp2SystemMessageOnPersistedChat({
                            chatWID: t.chatId,
                            enabled: r.acp2Enabled
                        });
                        if (e) {
                            return [
                                e
                            ];
                        }
                    }
                    return [];
                });
                return g.apply(this, arguments);
            }
            return (yield (C || (C = n("Promise"))).all([
                s(),
                u(),
                c(),
                d(),
                p(),
                f()
            ])).filter(Boolean).flat();
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ parentGroupId: n }, t) {
            if (!n) {
                return false;
            }
            const r = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(n);
            return !r || r != null && (yield o("WAWebDBCommunity").getJoinedSubgroups(o("WAWebWidFactory").createWid(r.id))).length <= t;
        });
        return L.apply(this, arguments);
    }
    function E(e, t, n) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = e.author != null && o("WAWebUserPrefsMeUser").isMeAccount(e.author);
            let i;
            let l;
            if (!a && (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE)) {
                i = t.participants.some((e)=>o("WAWebUserPrefsMeUser").isMeAccount(e.id));
                l = t.participants.length;
            } else {
                return false;
            }
            if (i) {
                return false;
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[CAG system message] actionType: ",
                " totalParticipants: ",
                ""
            ])), t.actionType, l);
            const u = yield o("WAWebGroupsParticipantsApi").getParticipants(n);
            const c = o("WAWebGroupUtils").amIGroupAdmin(u?.admins ?? []);
            return !c;
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action: t, dbIsStale: n, meta: a, ts: i }) {
            const { chatId: l, isAdmin: s } = a;
            const u = s === void 0 ? false : s;
            let c = a.author && o("WAWebWidFactory").asUserWidOrThrow(a.author) || void 0;
            const d = l;
            const m = false;
            let p = null;
            let _ = [];
            let f = c;
            let g = t.actionType;
            let h = null;
            let y;
            const C = t.parentGroupId;
            const b = n ? null : yield o("WAWebHandleGroupNotificationConst").getIsCagById(l);
            const v = b === true ? yield E(a, t, l) : false;
            if (v) {
                return null;
            }
            switch(t.actionType){
                case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT:
                    p = t.subject;
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.MODIFY:
                    _ = t.participants.map(({ id: t })=>t);
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.ADD:
                    if (t.reason === o("WAWebGroupType").ADD_REASON.INVITE) {
                        if (C && t.participants.some(({ id: t })=>o("WAWebUserPrefsMeUser").isMeAccount(t))) {
                            if (t.generalSubgroup === true) {
                                g = "general_chat_add";
                                h = [
                                    "linked_group_join",
                                    t.groupName ?? ""
                                ];
                            } else if (t.defaultSubgroup === true) {
                                g = "community_invite_rich";
                                h = [
                                    C,
                                    t.groupName ?? ""
                                ];
                            } else {
                                g = "sub_group_invite_rich";
                                const I = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(C);
                                h = [
                                    C,
                                    I?.subject ?? ""
                                ];
                            }
                        } else {
                            g = "invite";
                        }
                    } else if (t.reason === o("WAWebGroupType").ADD_REASON.ACCEPT) {
                        g = "v4_add_invite_join";
                    } else if (t.reason === o("WAWebGroupType").ADD_REASON.LINKED_GROUP_JOIN) {
                        if (t.generalSubgroup === true && C != null && t.participants.some(({ id: t })=>o("WAWebUserPrefsMeUser").isMeAccount(t))) {
                            g = "general_chat_add";
                            h = [
                                "linked_group_join",
                                t.groupName ?? ""
                            ];
                        } else {
                            g = "linked_group_join";
                        }
                    } else if (t.reason === o("WAWebGroupType").ADD_REASON.AUTO_ADD) {
                        if (C) {
                            h = [
                                C,
                                t.groupName ?? "",
                                t.contextGroupId ?? ""
                            ];
                            g = "subgroup_admin_triggered_auto_add";
                        } else {
                            g = "auto_add";
                            if (yield R(t, 2)) {
                                h = [
                                    t.parentGroupId,
                                    t.groupName ?? ""
                                ];
                            }
                        }
                    } else if (t.reason === o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_ADMIN_ADD) {
                        if (C) {
                            g = "community_participant_add_rich";
                            h = [
                                C,
                                t.groupName ?? ""
                            ];
                        } else {
                            g = "default_sub_group_admin_add";
                            if (yield R(t, 1)) {
                                h = [
                                    t.parentGroupId,
                                    t.groupName ?? ""
                                ];
                            }
                        }
                    } else if (t.reason === o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_PROMOTE) {
                        g = "default_sub_group_promote";
                    } else if (t.reason === o("WAWebGroupType").ADD_REASON.INVITE_AUTO_ADD) {
                        if (C && t.defaultSubgroup && t.participants.some(({ id: t })=>o("WAWebUserPrefsMeUser").isMeAccount(t))) {
                            h = [
                                C,
                                t.groupName ?? "",
                                t.contextGroupId ?? ""
                            ];
                            g = "subgroup_admin_triggered_invite_auto_add";
                        } else {
                            g = "invite_auto_add";
                            if (t.contextGroupId) {
                                h = [
                                    t.contextGroupId,
                                    ""
                                ];
                                if (yield R(t, 2)) {
                                    h.push("false");
                                } else {
                                    h.push("true");
                                }
                            }
                        }
                    } else if (t.participants.some(({ id: t })=>o("WAWebUserPrefsMeUser").isMeAccount(t)) && t.reason === o("WAWebGroupType").ADD_REASON.GENERAL_CHAT_AUTO_ADD) {
                        g = "general_chat_add";
                        h = [
                            "general_chat_auto_add",
                            t.groupName ?? ""
                        ];
                    } else if (t.reason == null && C && t.participants.some(({ id: t })=>o("WAWebUserPrefsMeUser").isMeAccount(t)) && t.generalSubgroup === true) {
                        g = "general_chat_add";
                        h = [
                            "",
                            t.groupName ?? ""
                        ];
                    } else if (C && t.participants.some(({ id: t })=>o("WAWebUserPrefsMeUser").isMeAccount(t))) {
                        const B = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(C);
                        h = [
                            C,
                            B?.subject ?? ""
                        ];
                        g = t.defaultSubgroup === true ? "community_participant_add_rich" : "sub_group_participant_add_rich";
                    }
                case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE:
                case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE:
                case o("WAWebGroupType").GROUP_ACTIONS.REMOVE:
                case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE:
                case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE:
                    if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE && t.reason === o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE) {
                        g = "default_sub_group_demote";
                        break;
                    }
                    _ = t.participants.map(({ id: t })=>t);
                    if (_.length === 1) {
                        f = _[0];
                    }
                    if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE && _.length === 1 && c === f) {
                        g = "leave";
                    }
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.INVITE_CODE:
                    g = "revoke_invite";
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
                    g = t.isParentGroup === true ? "parent_group_description" : "description";
                    p = t.desc;
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE:
                    g = t.isParentGroup === true ? "parent_group_description" : "description";
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.RESTRICT:
                    h = [
                        t.value ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.Off
                    ];
                    p = h[0];
                    if (t.threshold != null) {
                        h.push(t.threshold);
                    }
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE:
                case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
                    h = [
                        t.value ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.Off
                    ];
                    p = h[0];
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL:
                    if (c) {
                        h = [
                            `${t.duration}`,
                            c
                        ];
                    }
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
                    h = [
                        t.type
                    ];
                    p = h[0];
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
                case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK:
                case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
                case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK:
                case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
                case o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK:
                case o("WAWebGroupType").GROUP_ACTIONS.INTEGRITY_PARENT_GROUP_UNLINK:
                    h = o("WAWebPairList").flattenPairList(t.groupDatas.map((e)=>[
                            e.id,
                            e.subject
                        ]));
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK:
                    h = o("WAWebPairList").flattenPairList(t.groupDatas.map((e)=>[
                            e.id,
                            e.subject
                        ]));
                    g = "community_link_parent_group_rich";
                    y = "parentGroupLink";
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP:
                    h = [
                        t.communityTitle
                    ];
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
                    h = [
                        t.value ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.Off,
                        u ? o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.Admin : o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.Regular
                    ];
                    if (t.triggered === "server") {
                        c = void 0;
                    }
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE:
                    {
                        const W = t.memberAddMode;
                        if (W != null) {
                            h = [
                                W === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.Off
                            ];
                        }
                        break;
                    }
                case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE:
                    {
                        const q = t.value;
                        h = [
                            q === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.Off
                        ];
                        break;
                    }
                case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS:
                    {
                        const U = t.requests;
                        if (t.requestMethod === o("WAWebRequestMethodType").RequestMethod.NonAdminAdd && c != null && U.length > 0) {
                            h = [
                                c.toJid()
                            ].concat(U.map(({ wid: t })=>t.toJid()));
                            g = "created_membership_requests";
                        } else {
                            g = "membership_approval_request";
                        }
                        break;
                    }
                case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS:
                    {
                        h = [
                            t.value ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.Off
                        ];
                        const V = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(a.chatId.toString());
                        h.push(V ? o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.Admin : o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.Regular);
                    }
                    break;
                case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
                    {
                        h = [
                            t.value ? o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On : o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.Off
                        ];
                        break;
                    }
                case o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION:
                    {
                        g = "created_subgroup_suggestion";
                        h = [
                            t.subject
                        ];
                        break;
                    }
                case o("WAWebGroupType").GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED:
                    {
                        g = "general_chat_auto_add_disabled";
                        h = [
                            o("WAWebGroupType").GeneralChatAutoAddDisabledReasonEnum.Full
                        ];
                        break;
                    }
                case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE:
                    {
                        g = "community_owner_update";
                        h = [
                            t.newOwner.toString()
                        ];
                        _ = [
                            t.newOwner
                        ];
                        break;
                    }
                case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP:
                    {
                        g = "hidden_group";
                        break;
                    }
                case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_SHARE_GROUP_HISTORY_MODE:
                    {
                        h = [
                            t.value
                        ];
                        break;
                    }
                case o("WAWebGroupType").GROUP_ACTIONS.JOIN_FLOOD_NOTIFICATION:
                    {
                        g = "join_flood_notification";
                        break;
                    }
            }
            return {
                id: new (r("WAWebMsgKey"))({
                    remote: d,
                    fromMe: m,
                    participant: f,
                    id: H(a, y)
                }),
                body: r("isStringNullOrEmpty")(p) ? void 0 : p,
                author: c,
                from: l,
                to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                recipients: _.map(o("WAWebWidFactory").asUserWidOrThrow) || [],
                subtype: g,
                t: i ?? a.ts,
                type: "gp2",
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                kind: o("WAWebMsgType").MsgKind.Gp2,
                templateParams: h || void 0
            };
        });
        return T.apply(this, arguments);
    }
    function D(e, t, n, a) {
        const i = false;
        return {
            type: "gp2",
            kind: o("WAWebMsgType").MsgKind.Gp2,
            subtype: "picture",
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            t: n,
            author: a,
            body: t === o("WAWebProfilePicConstants").ProfilePicCommand.Set ? "set" : "remove",
            recipients: [],
            from: e,
            to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            id: new (r("WAWebMsgKey"))({
                remote: e,
                fromMe: i,
                id: r("WAWebMsgKey").newId_DEPRECATED()
            })
        };
    }
    function x({ author: t, ephemeralDuration: n, ts: a, wid: i }) {
        return {
            id: new (r("WAWebMsgKey"))({
                remote: i,
                fromMe: false,
                participant: t,
                id: r("WAWebMsgKey").newId_DEPRECATED()
            }),
            author: t,
            from: i,
            to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            recipients: [],
            subtype: "ephemeral",
            t: a,
            type: "gp2",
            kind: o("WAWebMsgType").MsgKind.Gp2,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            templateParams: [
                `${n}`
            ]
        };
    }
    function $(e, t) {
        return {
            id: new (r("WAWebMsgKey"))({
                remote: e,
                fromMe: false,
                id: r("WAWebMsgKey").newId_DEPRECATED()
            }),
            from: e,
            to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            recipients: [],
            subtype: "initial_pHash_mismatch",
            t,
            type: "gp2",
            kind: o("WAWebMsgType").MsgKind.Gp2,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
        };
    }
    function P(e) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const a = [];
            const i = e.chatId;
            const l = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
            if (l == null || l.isParentGroup === false) {
                return [];
            }
            const s = yield o("WAWebDBCommunity").getDefaultSubgroup(i);
            const d = l?.subject ?? "";
            const m = o("WATimeUtils").unixTime();
            if (s != null && (yield o("WAWebGroupsParticipantsApi").checkMyMembership(s))) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateDeleteParentNotificationMessages] DELETE_PARENT_GROUP"
                ])));
                a.push((yield I({
                    meta: {
                        chatId: s,
                        author: e.author,
                        ts: m
                    },
                    action: {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP,
                        communityTitle: d
                    },
                    dbIsStale: false
                })));
            }
            const p = ((yield o("WAWebDBCommunity").getJoinedSubgroups(o("WAWebWidFactory").createWid(l.id))) ?? []).filter((e)=>!(s != null && s.equals(e)));
            yield (C || (C = n("Promise"))).all(p.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    a.push((yield I({
                        meta: {
                            chatId: t,
                            author: e.author,
                            ts: m
                        },
                        action: {
                            actionType: o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP,
                            communityTitle: d
                        },
                        dbIsStale: false
                    })));
                    a.push((yield I({
                        meta: {
                            chatId: t,
                            author: e.author,
                            ts: m
                        },
                        action: {
                            actionType: o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK,
                            groupDatas: [
                                {
                                    id: i,
                                    subject: d
                                }
                            ]
                        },
                        dbIsStale: false
                    })));
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
            if (p.length > 0) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateDeleteParentNotificationMessages] processed ",
                    " groups"
                ])), p.length);
            }
            return a.filter(Boolean);
        });
        return N.apply(this, arguments);
    }
    function M(e, t) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = [];
            const i = e.chatId;
            const l = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
            if (l == null) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[genIntegrityDeleteParentNotificationMsgs] missing metadata"
                ])));
                return [];
            }
            const s = yield o("WAWebDBCommunity").getDefaultSubgroup(i);
            if (s != null && (yield o("WAWebGroupsParticipantsApi").checkMyMembership(s))) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[genIntegrityDeleteParentNotificationMsgs] INTEGRITY_DELETE_PARENT"
                ])));
                a.push((yield I({
                    meta: {
                        chatId: s,
                        author: void 0,
                        ts: o("WATimeUtils").unixTime()
                    },
                    action: {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.DELETE,
                        reason: o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT,
                        groupDatas: [
                            {
                                id: i,
                                subject: l?.subject ?? ""
                            }
                        ]
                    },
                    dbIsStale: false
                })));
            }
            const c = ((yield o("WAWebDBCommunity").getJoinedSubgroups(i)) ?? []).filter((e)=>!(s != null && s.equals(e)));
            yield (C || (C = n("Promise"))).all(c.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    return a.push((yield I({
                        meta: {
                            chatId: e,
                            author: void 0,
                            ts: o("WATimeUtils").unixTime()
                        },
                        action: {
                            actionType: o("WAWebGroupType").GROUP_ACTIONS.INTEGRITY_PARENT_GROUP_UNLINK,
                            groupDatas: [
                                {
                                    id: i,
                                    subject: l?.subject ?? ""
                                }
                            ]
                        },
                        dbIsStale: false
                    })));
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            if (c.length > 0) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[genIntegrityDeleteParentNotificationMsgs] processed ",
                    " grps"
                ])), c.length);
            }
            return a.filter(Boolean);
        });
        return w.apply(this, arguments);
    }
    function A(e, t) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.chatId;
            const r = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(n);
            if (r?.isParentGroup === true) {
                const a = yield o("WAWebDBCommunity").getDefaultSubgroup(n);
                if (a && (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE)) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[genDescriptionNotificationMsg] parentGroup actionType=",
                        ""
                    ])), t.actionType);
                    return I({
                        meta: babelHelpers.extends({}, e, {
                            chatId: a
                        }),
                        action: babelHelpers.extends({}, t, {
                            isParentGroup: true
                        }),
                        dbIsStale: false
                    });
                }
            }
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[genDescriptionNotificationMsg] !parentGroup actionType=",
                ""
            ])), t.actionType);
            return I({
                meta: e,
                action: t,
                dbIsStale: false
            });
        });
        return F.apply(this, arguments);
    }
    function O(e, t) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.chatId;
            const r = yield o("WAWebDBCommunity").getDefaultSubgroup(n);
            if (r) {
                const a = yield o("WAWebGroupsParticipantsApi").getParticipants(r);
                const i = !!(a != null && a.participants.find((e)=>o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWid(e))));
                if (i) {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[genAllowNonAdminSubGroupCreationNotificationMsg] actionType=",
                        ""
                    ])), t.actionType);
                    return I({
                        meta: babelHelpers.extends({}, e, {
                            chatId: r
                        }),
                        action: t,
                        dbIsStale: false
                    });
                }
            }
        });
        return B.apply(this, arguments);
    }
    function W(e, t) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.chatId;
            const r = yield o("WAWebDBCommunity").getDefaultSubgroup(n);
            if (r && t.actionType === o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION) {
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[genCreatedSubgroupSuggestionNotificationMsg] actionType=",
                    ""
                ])), t.actionType);
                return I({
                    meta: babelHelpers.extends({}, e, {
                        chatId: r
                    }),
                    action: t,
                    dbIsStale: false
                });
            }
        });
        return q.apply(this, arguments);
    }
    function U(e, t) {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.chatId;
            const r = yield o("WAWebDBCommunity").getDefaultSubgroup(n);
            if (r) {
                const a = yield o("WAWebGroupsParticipantsApi").getParticipants(r);
                const i = !!(a != null && a.participants.find((e)=>o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWid(e))));
                if (i) {
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[genCommunityOwnerUpdateNotificationMsg] actionType=",
                        ""
                    ])), t.actionType);
                    return I({
                        meta: babelHelpers.extends({}, e, {
                            chatId: r
                        }),
                        action: t,
                        dbIsStale: false
                    });
                }
            }
        });
        return V.apply(this, arguments);
    }
    function H(e, t) {
        let a = e.externalId ?? r("WAWebMsgKey").newId_DEPRECATED();
        if (t != null) {
            a = `${a}${t}`;
        }
        return `${a}${e.ts ?? ""}`;
    }
    function G(e) {
        if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() !== true) {
            return o("WAWebContactSystemMsg").genNotificationMsg(e, {
                type: "notification_template",
                kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                subtype: null,
                templateParams: []
            });
        }
        return o("WAWebContactSystemMsg").genNotificationMsg(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.GroupTransitionToBotGroupSystemMsg,
            templateParams: []
        });
    }
    function z(e) {
        if (o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() !== true) {
            return o("WAWebContactSystemMsg").genNotificationMsg(e, {
                type: "notification_template",
                kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                subtype: null,
                templateParams: []
            });
        }
        return o("WAWebContactSystemMsg").genNotificationMsg(e, {
            type: "e2e_notification",
            kind: o("WAWebMsgType").MsgKind.E2eNotification,
            subtype: "group_transition_to_tee_bot_group",
            templateParams: []
        });
    }
    l.genMsgsForGroupCreation = v;
    l.genGroupNotificationMsg = I;
    l.genGroupPicChangeNotificationMsg = D;
    l.genInitialPhashMismatchMsg = $;
    l.generateDeleteParentNotificationMessages = P;
    l.genIntegrityDeleteParentNotificationMsgs = M;
    l.genDescriptionNotificationMsg = A;
    l.genAllowNonAdminSubGroupCreationNotificationMsg = O;
    l.genCreatedSubgroupSuggestionNotificationMsg = W;
    l.genCommunityOwnerUpdateNotificationMsg = U;
    l.genGroupTransitionToBotGroupNotificationMsg = G;
    l.genGroupTransitionToTeeBotGroupNotificationMsg = z;
}, 98);