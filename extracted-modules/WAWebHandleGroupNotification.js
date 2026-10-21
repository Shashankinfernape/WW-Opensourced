__d("WAWebHandleGroupNotification", [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebAsISOCountryCode",
    "WAWebCurrentUser",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebGroupApiConst",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupType",
    "WAWebGroupsQueryApi",
    "WAWebHandleGroupNotificationConst",
    "WAWebHandleGroupsDirtyNotification",
    "WAWebHandleParsedGroupNotification",
    "WAWebJidToWid",
    "WAWebLimitSharingGatingUtils",
    "WAWebRequestMethodType",
    "WAWebSchemaGroupMetadata",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebUsernameGatingUtils",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "nullthrows"
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
    function y(e) {
        if (e.hasChild("description")) {
            const t = e.child("description");
            if (t.hasChild("body")) {
                const n = t.child("body");
                if (n.hasContent()) {
                    return {
                        content: n.contentString(),
                        id: t.attrString("id")
                    };
                }
            }
        }
        return null;
    }
    function C(e, t) {
        const n = e.hasAttr("creator") ? o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("creator")) : null;
        if (e.hasChild("ephemeral")) {
            const r = e.child("ephemeral");
            if (r.hasAttr("expiration")) {
                const i = t ? void 0 : o("WAWebEphemeralityTypes").DisappearingModeTrigger.UnknownGroups;
                return {
                    ephemeralDuration: r.attrInt("expiration"),
                    disappearingModeTrigger: o("WAWebEphemeralityUtils").getDisappearingModeTriggerString(r.maybeAttrString("trigger")) ?? i,
                    disappearingModeInitiatedByMe: o("WAWebUserPrefsMeUser").isMeAccount(n)
                };
            }
            return {
                ephemeralDuration: r.attrInt("expiration")
            };
        }
        return null;
    }
    function b(e, t, n) {
        const r = o("WAWebGroupHistoryGating").isGroupHistoryAfterJoinPrerequisitesEnabled();
        return t.mapChildrenWithTag("participant", function(t) {
            const i = t.maybeAttrEnum("type", o("WAWebGroupApiConst").GROUP_PARTICIPANT_TYPES) ?? "participant";
            const l = t.maybeAttrLidUserJid("lid");
            const s = t.maybeAttrPhoneUserJid("phone_number");
            const u = {
                displayName: t.maybeAttrString("display_name"),
                id: o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("jid")),
                isSuperAdmin: i === o("WAWebGroupApiConst").GROUP_PARTICIPANT_TYPES.superadmin,
                isAdmin: i === o("WAWebGroupApiConst").GROUP_PARTICIPANT_TYPES.admin || i === o("WAWebGroupApiConst").GROUP_PARTICIPANT_TYPES.superadmin,
                lid: l != null ? o("WAWebJidToWid").userJidToUserWid(l) : null,
                phoneNumber: s != null ? o("WAWebJidToWid").userJidToUserWid(s) : null,
                username: t.maybeAttrString("username"),
                joinTime: r ? t.maybeAttrTime("join_time") : void 0,
                groupHistorySentState: r ? o("WAWebGroupHistoryPostJoinTypes").parseGroupHistorySentState(t.maybeAttrString("group_history_sent_state")) : void 0
            };
            const c = n === o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REMOVE;
            if (!c) {
                v(e, u, n);
            }
            return u;
        });
    }
    function v(t, n, r) {
        try {
            const a = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && n.username != null;
            if (!a && n.displayName == null && n.phoneNumber == null && n.id.isLid() && !o("WAWebUserPrefsMeUser").isMeAccount(n.id)) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid group] no phone mapping for lid tag=",
                    " sw=",
                    ""
                ])), r, o("WAWebUserPrefsNotifications").getGlobalOfflineNotifications().toString());
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[lid group] group id=",
                        ", lid=",
                        ""
                    ])), t.toString(), n.id.toString());
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[lid group] missing group mapping in parser for employee"
                    ]))).sendLogs("[lid group] missing group mapping in parser for employee");
                } else {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[lid group] missing group mapping in action parser"
                    ]))).sendLogs("[lid group] missing group mapping in action parser");
                }
            }
        } catch (e) {
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[lid group] check mapping failed ",
                ""
            ])), e);
        }
    }
    function S(e) {
        const t = e.child("sub_group_suggestion");
        const n = o("WAWebJidToWid").groupJidToWid(t.attrGroupJid("jid"));
        const r = o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("creator"));
        const a = t.attrTime("creation");
        const i = t.child("subject");
        const l = i.contentString();
        let s;
        let u;
        let c;
        if (t.hasChild("description")) {
            const d = t.child("description");
            if (d.hasChild("body")) {
                const m = d.child("body");
                if (m.hasContent()) {
                    s = m.contentString();
                }
            }
        }
        if (t.hasChild("is_existing_group")) {
            const p = t.child("is_existing_group");
            if (p.hasContent()) {
                u = p.contentString() === "true";
            }
        }
        if (t.hasChild("participant_count")) {
            const _ = t.child("participant_count");
            if (_.hasContent()) {
                c = _.contentInt();
            }
        }
        return {
            id: n,
            owner: r,
            subject: l,
            description: s,
            t: a,
            isExistingGroup: u ?? false,
            participantCount: c
        };
    }
    const R = {
        invite: (h = o("WAWebGroupType")).ADD_REASON.INVITE,
        linked_group_join: h.ADD_REASON.LINKED_GROUP_JOIN,
        auto_add: h.ADD_REASON.AUTO_ADD,
        default_sub_group_admin_add: h.ADD_REASON.DEFAULT_SUBGROUP_ADMIN_ADD,
        default_sub_group_promote: h.ADD_REASON.DEFAULT_SUBGROUP_PROMOTE,
        invite_auto_add: h.ADD_REASON.INVITE_AUTO_ADD,
        general_chat_auto_add: h.ADD_REASON.GENERAL_CHAT_AUTO_ADD
    };
    function L(e) {
        switch(e){
            case "invite":
                return o("WAWebGroupType").ADD_REASON.INVITE;
            case "accept":
                return o("WAWebGroupType").ADD_REASON.ACCEPT;
            case "linked_group_join":
                return o("WAWebGroupType").ADD_REASON.LINKED_GROUP_JOIN;
            case "auto_add":
                return o("WAWebGroupType").ADD_REASON.AUTO_ADD;
            case "default_sub_group_admin_add":
                return o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_ADMIN_ADD;
            case "default_sub_group_promote":
                return o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_PROMOTE;
            case "invite_auto_add":
                return o("WAWebGroupType").ADD_REASON.INVITE_AUTO_ADD;
            case "general_chat_auto_add":
                return o("WAWebGroupType").ADD_REASON.GENERAL_CHAT_AUTO_ADD;
            default:
                return null;
        }
    }
    function E(e) {
        if (e === "default_sub_group_demote") {
            return o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE;
        }
        return null;
    }
    function k(e) {
        switch(e){
            case "integrity_delete_parent":
                return o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT;
            case "delete_parent":
                return o("WAWebGroupType").DELETE_REASON.DELETE_PARENT;
            default:
                return null;
        }
    }
    const I = {
        invite_link: o("WAWebRequestMethodType").RequestMethod.InviteLink,
        linked_group_join: o("WAWebRequestMethodType").RequestMethod.LinkedGroupJoin,
        non_admin_add: o("WAWebRequestMethodType").RequestMethod.NonAdminAdd
    };
    const T = {
        approved: h.RevokedSubGroupSuggestionReason.APPROVED,
        rejected: h.RevokedSubGroupSuggestionReason.REJECTED,
        cancelled: h.RevokedSubGroupSuggestionReason.CANCELLED
    };
    function D(e) {
        const t = e.attrString("unlink_type");
        const n = e.hasAttr("unlink_reason") ? e.attrString("unlink_reason") : null;
        const r = e.mapChildrenWithTag("group", function(e) {
            return {
                id: o("WAWebJidToWid").groupJidToWid(e.attrGroupJid("jid")),
                subject: e.attrString("subject"),
                subjectTime: e.attrInt("s_t")
            };
        });
        if (t === "parent_group") {
            if (n === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT) {
                return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK,
                    groupDatas: r
                };
            }
            if (n === o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT) {
                return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.INTEGRITY_PARENT_GROUP_UNLINK,
                    groupDatas: r
                };
            }
        } else if (t === "sub_group") {
            if (n === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT) {
                return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK,
                    groupDatas: r
                };
            }
            if (n === o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT) {
                return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.INTEGRITY_SUB_GROUP_UNLINK,
                    groupDatas: r
                };
            }
        }
        const a = {
            sub_group: o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK,
            parent_group: o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK,
            sibling_group: o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK
        };
        const i = a[t];
        if (i == null) {
            o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "Unrecognized unlink_type: ",
                ""
            ])), t).sendLogs("group-unrecognized-unlink-type");
            return null;
        }
        return {
            actionType: i,
            groupDatas: r
        };
    }
    function x(e, t, n) {
        const m = t.child("group");
        const p = t.hasAttr("type") && t.attrString("type") === "new";
        const _ = b(e, m, o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.CREATE);
        const f = y(m);
        const g = C(m, p);
        const h = o("WAWebGroupsQueryApi").extractLinkedParent(m);
        const v = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
        const S = {
            subject: m.attrString("subject"),
            restrict: m.hasChild("locked"),
            announce: m.hasChild("announcement"),
            noFrequentlyForwarded: m.hasChild("no_frequently_forwarded"),
            ephemeralDuration: g ? g.ephemeralDuration : void 0,
            disappearingModeTrigger: g && g.disappearingModeTrigger != null ? g.disappearingModeTrigger : void 0,
            disappearingModeInitiatedByMe: g ? g.disappearingModeInitiatedByMe : void 0,
            owner: m.hasAttr("creator") ? o("WAWebJidToWid").userJidToUserWid(m.attrUserJid("creator")) : void 0,
            creatorPn: m.hasAttr("creator_pn") ? o("WAWebJidToWid").userJidToUserWid(m.attrUserJid("creator_pn")) : null,
            creatorCountryCode: v && m.hasAttr("creator_country_code") ? o("WAWebAsISOCountryCode").asISOCountryCode(m.attrString("creator_country_code")) : null,
            creatorUsername: v && m.hasAttr("creator_username") ? m.attrString("creator_username") : null,
            creation: m.attrTime("creation"),
            participants: _,
            desc: f ? f.content : void 0,
            descId: f ? f.id : void 0,
            subjectOwner: m.hasAttr("s_o") ? o("WAWebJidToWid").userJidToUserWid(m.attrUserJid("s_o")) : void 0,
            subjectOwnerPn: m.hasAttr("s_o_pn") ? o("WAWebJidToWid").userJidToUserWid(m.attrUserJid("s_o_pn")) : void 0,
            subjectOwnerUsername: v ? m.maybeAttrString("s_o_username") : void 0,
            subjectTime: m.maybeAttrTime("s_t") ?? void 0,
            support: m.hasChild("support"),
            isParentGroup: m.hasChild("parent"),
            isParentGroupClosed: m.maybeChild("parent")?.maybeAttrString("default_membership_approval_mode") === "request_required",
            parentGroup: h ? h.parentGroup : void 0,
            defaultSubgroup: m.hasChild("default_sub_group"),
            generalSubgroup: m.hasChild("general_chat"),
            size: m.maybeAttrInt("size") ?? void 0,
            membershipApprovalMode: m?.maybeChild("membership_approval_mode")?.maybeChild("group_join")?.maybeAttrString("state") === "on",
            allowNonAdminSubGroupCreation: m?.hasChild("allow_non_admin_sub_group_creation"),
            generalChatAutoAddDisabled: t.hasChild("auto_add_disabled") ?? void 0,
            hiddenSubgroup: m?.hasChild("hidden_group"),
            groupSafetyCheck: m?.hasChild("group_safety_check"),
            groupAdder: n || void 0,
            hasCapi: m?.hasChild("capi"),
            limitSharingEnabled: o("WAWebLimitSharingGatingUtils").isOpusEnabled() ? false : m.hasChild("limit_sharing_enabled"),
            memberLinkMode: ((e)=>{
                if (e === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK) {
                    return o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK;
                }
                if (e === o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK) {
                    return o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK;
                }
            })(m.maybeChild("member_link_mode")?.contentString()),
            memberAddMode: o("WAWebSchemaGroupMetadata").MemberAddMode.cast(m.maybeChild("member_add_mode")?.contentString()),
            memberShareGroupHistoryMode: o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.cast(m.maybeChild("member_share_group_history_mode")?.contentString())
        };
        return {
            actionType: o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.CREATE,
            reason: t.hasAttr("reason") ? t.attrEnumOrNullIfUnknown("reason", R) : null,
            contextGroupId: t.hasAttr("context_group_jid") ? o("WAWebJidToWid").groupJidToWid(t.attrGroupJid("context_group_jid")) : null,
            groupInfo: S,
            isNewGroup: p
        };
    }
    const $ = new (r("WADeprecatedWapParser"))("groupNotificationParser", function(e) {
        e.assertTag("notification");
        if (e.hasAttr("to")) {
            const n = e.attrString("to");
            const a = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().toJid();
            const i = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()?.toJid();
            const l = n === a;
            const s = !r("isStringNullOrEmpty")(i) && n === i;
            if (!l && !s) {
                e.throw(`to have "to" matching meLid ("${a}") or mePn ("${i ?? ""}"), but instead has "${n}"`);
            }
        }
        const u = o("WAWebJidToWid").groupJidToWid(e.attrGroupJid("from"));
        const c = e.hasAttr("participant") ? o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("participant")) : null;
        let d = null;
        try {
            const m = e.maybeAttrPhoneUserJid("participant_pn");
            d = m != null ? o("WAWebJidToWid").userJidToUserWid(m) : null;
        } catch (e) {
            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "Known error T150827746: ",
                ""
            ])), r("getErrorSafe")(e).toString());
        }
        const f = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
        const g = e.attrTime("t");
        const h = e.hasAttr("addressing_mode") ? e.attrString("addressing_mode") === "lid" : false;
        const y = e.hasAttr("participant_username") && f ? e.attrString("participant_username") : null;
        const C = e.hasAttr("participant_country_code") && f ? o("WAWebAsISOCountryCode").asISOCountryCode(e.attrString("participant_country_code")) : null;
        function v(e) {
            return {
                jid: e.hasAttr("jid") ? o("WAWebJidToWid").groupJidToWid(e.attrGroupJid("jid")) : void 0
            };
        }
        let R;
        const $ = e.mapChildren(function(t) {
            const a = t.tag();
            switch(a){
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.CREATE:
                    return x(u, t, c);
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.ADD:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                        participants: b(u, t, a),
                        reason: t.hasAttr("reason") ? L(t.attrString("reason")) : null,
                        isLidAddressingMode: h
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.DELETE:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.DELETE,
                        reason: t.hasAttr("reason") ? k(t.attrString("reason")) : null,
                        groupDatas: [
                            {
                                id: u,
                                subject: ""
                            }
                        ]
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REMOVE:
                    return {
                        actionType: o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REMOVE,
                        participants: b(u, t, a),
                        reason: t.hasAttr("reason") ? E(t.attrString("reason")) : null,
                        isLidAddressingMode: h
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.PROMOTE:
                    return {
                        actionType: o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.PROMOTE,
                        participants: b(u, t, a)
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.DEMOTE:
                    return {
                        actionType: o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.DEMOTE,
                        participants: b(u, t, a)
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.LINKED_GROUP_PROMOTE:
                    return babelHelpers.extends({
                        actionType: o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.LINKED_GROUP_PROMOTE,
                        participants: b(u, t, a)
                    }, v(t));
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.LINKED_GROUP_DEMOTE:
                    return babelHelpers.extends({
                        actionType: o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.LINKED_GROUP_DEMOTE,
                        participants: b(u, t, a)
                    }, v(t));
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.MODIFY:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.MODIFY,
                        participants: b(u, t, a)
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.SUBJECT:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.SUBJECT,
                        subject: t.attrString("subject"),
                        s_o: t.hasAttr("s_o") ? o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("s_o")) : null,
                        subjectOwnerPn: t.hasAttr("s_o_pn") ? o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("s_o_pn")) : null,
                        subjectOwnerUsername: t.maybeAttrString("s_o_username"),
                        s_t: t.maybeAttrTime("s_t")
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.DESC:
                    if (t.hasChild("delete")) {
                        return {
                            actionType: o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE,
                            descId: t.attrString("id")
                        };
                    }
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD,
                        descId: t.attrString("id"),
                        desc: t.hasChild("body") ? t.child("body").contentString() : null,
                        descTime: g
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.SUSPENDED:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.SUSPEND,
                        value: true
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.UNSUSPENDED:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.SUSPEND,
                        value: false
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.LOCKED:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.RESTRICT,
                        value: true,
                        threshold: t.maybeAttrString("threshold") ?? void 0
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.UNLOCKED:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.RESTRICT,
                        value: false
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.ANNOUNCE:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE,
                        value: true
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.NOT_ANNOUNCE:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE,
                        value: false
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.NO_FREQUENTLY_FORWARDED:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD,
                        value: true
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.FREQUENTLY_FORWARDED_OK:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD,
                        value: false
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.INVITE:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.INVITE_CODE,
                        code: t.attrString("code")
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.EPHEMERAL:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL,
                        duration: t.attrInt("expiration"),
                        trigger: t.hasAttr("trigger") ? t.attrInt("trigger") : void 0,
                        initiatedByMe: o("WAWebUserPrefsMeUser").isMeAccount(c)
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.NOT_EPHEMERAL:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL,
                        duration: 0
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REVOKE_INVITE:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE,
                        participants: t.mapChildrenWithTag("participant", function(e) {
                            return {
                                id: o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("jid")),
                                expiration: e.attrInt("expiration")
                            };
                        })
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.GROWTH_UNLOCKED:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.GROWTH_LOCKED:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED,
                        expiration: t.attrInt("expiration"),
                        type: t.attrString("type")
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.LINK:
                    {
                        const i = t.attrString("link_type");
                        const l = {
                            sub_group: o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK,
                            parent_group: o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK,
                            sibling_group: o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK
                        };
                        const s = l[i];
                        if (s == null) {
                            o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "Unrecognized link_type: ",
                                ""
                            ])), i).sendLogs("group-unrecognized-link-type");
                            return null;
                        }
                        return {
                            actionType: s,
                            groupDatas: t.mapChildrenWithTag("group", function(e) {
                                return {
                                    id: o("WAWebJidToWid").groupJidToWid(e.attrGroupJid("jid")),
                                    subject: e.attrString("subject"),
                                    subjectTime: e.attrInt("s_t"),
                                    hiddenSubgroup: i !== "parent_group" ? e.hasChild("hidden_group") : void 0
                                };
                            })
                        };
                    }
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.UNLINK:
                    return D(t);
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.MEMBERSHIP_APPROVAL_MODE:
                    {
                        return {
                            actionType: o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE,
                            value: t.child("group_join")?.attrString("state") === "on",
                            triggered: t.hasAttr("triggered") ? t.attrString("triggered") : void 0
                        };
                    }
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.MEMBERSHIP_APPROVAL_REQUEST:
                    {
                        return {
                            actionType: o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST,
                            requestMethod: I[t.attrString("request_method")] ?? o("WAWebRequestMethodType").RequestMethod.InviteLink,
                            parentGroupId: t.hasAttr("parent_group_jid") ? o("WAWebJidToWid").groupJidToWid(t.attrGroupJid("parent_group_jid")) : void 0
                        };
                    }
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.ALLOW_ADMIN_REPORTS:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS,
                        shouldSkipGenMsg: false,
                        value: true,
                        author: c,
                        triggered: t.hasAttr("triggered") ? t.attrString("triggered") : void 0
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.NOT_ALLOW_ADMIN_REPORTS:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS,
                        shouldSkipGenMsg: false,
                        value: false,
                        author: c,
                        triggered: t.hasAttr("triggered") ? t.attrString("triggered") : void 0
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REPORTS:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECEIVED,
                        shouldSkipGenMsg: true,
                        value: g
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.CREATED_MEMBERSHIP_REQUESTS:
                    {
                        return {
                            actionType: o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS,
                            requestMethod: I[t.attrString("request_method")] ?? o("WAWebRequestMethodType").RequestMethod.InviteLink,
                            parentGroupId: t.hasAttr("parent_group_jid") ? o("WAWebJidToWid").groupJidToWid(t.attrGroupJid("parent_group_jid")) : void 0,
                            requests: t.hasChildren() ? t.mapChildrenWithTag("requested_user", function(e) {
                                return {
                                    wid: o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("jid")),
                                    username: f && e.hasAttr("username") ? e.attrString("username") : void 0,
                                    phoneNumber: e.hasAttr("phone_number") ? o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("phone_number")) : void 0
                                };
                            }) : [
                                {
                                    wid: r("nullthrows")(c)
                                }
                            ],
                            skipGenMsg: t.maybeAttrString("suppress_sys_msg") === "true"
                        };
                    }
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REVOKED_MEMBERSHIP_REQUESTS:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS,
                        requests: t.mapChildrenWithTag("participant", function(e) {
                            return o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("jid"));
                        })
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
                        value: true
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.NOT_ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
                        value: false
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.CREATED_SUBGROUP_SUGGESTION:
                    return babelHelpers.extends({
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION,
                        parentGroupId: u
                    }, S(t));
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REVOKED_SUB_GROUP_SUGGESTIONS:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.REVOKED_SUB_GROUP_SUGGESTIONS,
                        parentGroupId: u,
                        subgroupSuggestions: t.mapChildrenWithTag("sub_group_suggestion", function(e) {
                            return {
                                id: o("WAWebJidToWid").groupJidToWid(e.attrGroupJid("jid")),
                                owner: o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("creator")),
                                reason: e.hasAttr("reason") ? T[e.attrString("reason")] : void 0
                            };
                        })
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.CHANGE_NUMBER:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.SUBGROUP_SUGGESTIONS_CHANGE_NUMBER,
                        subgroupSuggestions: t.mapChildrenWithTag("sub_group_suggestion", function(e) {
                            return o("WAWebJidToWid").groupJidToWid(e.attrGroupJid("jid"));
                        }),
                        parentGroupId: u,
                        oldOwner: o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("participant")),
                        newOwner: o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("jid"))
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.MEMBER_ADD_MODE:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE,
                        memberAddMode: o("WAWebSchemaGroupMetadata").MemberAddMode.cast(t.contentString())
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.AUTO_ADD_DISABLED:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.GROUP_SAFETY_CHECK:
                    return {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK,
                        value: true
                    };
                case o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.MISSING_PARTICIPANT_IDENTIFICATION:
                    {
                        R = true;
                        return;
                    }
                default:
                    throw e.createParseError(`Unrecognized group action ${a}`);
            }
        }).filter(Boolean);
        return {
            externalId: e.attrString("id"),
            chatId: u,
            isLidAddressingMode: h,
            author: c,
            authorPhoneNumber: d,
            authorUsername: y,
            authorUsernameCountryCode: C,
            ts: e.attrTime("t"),
            pushname: e.maybeAttrString("notify"),
            offline: e.maybeAttrString("offline"),
            actions: $,
            hasIncompleteParticipantInformation: f && R === true
        };
    });
    function P(e) {
        const t = e.content;
        if (t != null && Array.isArray(t) && t.length > 0) {
            const r = t[0];
            const a = r.tag;
            if (a === "groups_dirty") {
                return (g || (g = n("Promise"))).resolve(o("WAWebHandleGroupsDirtyNotification").handleGroupsDirtyNotificationJob(e));
            }
        }
        const i = $.parse(e);
        if (i.error) {
            o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                ""
            ])), i.error.toString());
            return (g || (g = n("Promise"))).reject(i.error);
        }
        return o("WAWebHandleParsedGroupNotification").handleParsedGroupNotification(i.success);
    }
    l.handleGroupNotification = P;
}, 98);