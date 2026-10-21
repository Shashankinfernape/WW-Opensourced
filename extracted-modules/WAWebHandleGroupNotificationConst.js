__d("WAWebHandleGroupNotificationConst", [
    "WATimeUtils",
    "WAWebApiParticipantStore",
    "WAWebBackendApi",
    "WAWebCommunityGatingUtils",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebGroupsParticipantsApi",
    "WAWebLidMigrationUtils",
    "WAWebNoop",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = Object.freeze({
        REMOVE: "remove",
        ADD: "add",
        DEMOTE: "demote",
        DELETE: "delete",
        PROMOTE: "promote",
        MODIFY: "modify",
        CREATE: "create",
        SUBJECT: "subject",
        DESC: "description",
        LOCKED: "locked",
        UNLOCKED: "unlocked",
        ANNOUNCE: "announcement",
        NOT_ANNOUNCE: "not_announcement",
        NO_FREQUENTLY_FORWARDED: "no_frequently_forwarded",
        FREQUENTLY_FORWARDED_OK: "frequently_forwarded_ok",
        INVITE: "invite",
        EPHEMERAL: "ephemeral",
        NOT_EPHEMERAL: "not_ephemeral",
        REVOKE_INVITE: "revoke",
        SUSPENDED: "suspended",
        UNSUSPENDED: "unsuspended",
        GROWTH_LOCKED: "growth_locked",
        GROWTH_UNLOCKED: "growth_unlocked",
        LINK: "link",
        UNLINK: "unlink",
        LINKED_GROUP_PROMOTE: "linked_group_promote",
        LINKED_GROUP_DEMOTE: "linked_group_demote",
        MEMBERSHIP_APPROVAL_MODE: "membership_approval_mode",
        MEMBERSHIP_APPROVAL_REQUEST: "membership_approval_request",
        CREATED_MEMBERSHIP_REQUESTS: "created_membership_requests",
        REVOKED_MEMBERSHIP_REQUESTS: "revoked_membership_requests",
        ALLOW_NON_ADMIN_SUB_GROUP_CREATION: "allow_non_admin_sub_group_creation",
        NOT_ALLOW_NON_ADMIN_SUB_GROUP_CREATION: "not_allow_non_admin_sub_group_creation",
        ALLOW_ADMIN_REPORTS: "allow_admin_reports",
        NOT_ALLOW_ADMIN_REPORTS: "not_allow_admin_reports",
        REPORTS: "reports",
        CREATED_SUBGROUP_SUGGESTION: "created_sub_group_suggestion",
        REVOKED_SUB_GROUP_SUGGESTIONS: "revoked_sub_group_suggestions",
        CHANGE_NUMBER: "change_number",
        MEMBER_ADD_MODE: "member_add_mode",
        AUTO_ADD_DISABLED: "auto_add_disabled",
        IS_CAPI_HOSTED_GROUP: "is_capi_hosted_group",
        GROUP_SAFETY_CHECK: "group_safety_check",
        LIMIT_SHARING_ENABLED: "limit_sharing_enabled",
        MISSING_PARTICIPANT_IDENTIFICATION: "missing_participant_identification"
    });
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
            return !!r && r.growthLockType === t && (r.growthLockExpiration ?? 0) > o("WATimeUtils").unixTime();
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.SUSPEND || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REVOKED_SUB_GROUP_SUGGESTIONS || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.SUBGROUP_SUGGESTIONS_CHANGE_NUMBER || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK) {
                return true;
            }
            if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED) {
                if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED) {
                    if (t.type !== "invite") {
                        return true;
                    }
                    const n = yield s(e.chatId, t.type);
                    if (n) {
                        return true;
                    }
                }
                const a = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(e.chatId.toString());
                return !a;
            }
            if ((t.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE) && (yield _(e.chatId)) === true) {
                return true;
            }
            if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE) {
                const i = t.participants.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t.participants[0].id);
                if (!i) {
                    return true;
                }
            }
            if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE && t.participants.length === 1 && !o("WAWebUserPrefsMeUser").isMeAccount(t.participants[0].id)) {
                const l = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(e.chatId.toString());
                if (!l) {
                    return true;
                }
            }
            if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE && t.participants.length === 1 && r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(e.author, t.participants[0].id))) {
                const u = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(e.chatId.toString());
                const c = o("WAWebUserPrefsMeUser").isMeAccount(e.author);
                if (!u || c) {
                    return true;
                }
            }
            if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION) {
                const d = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(e.chatId.toString());
                if (!d || t.isExistingGroup === true && !o("WAWebCommunityGatingUtils").memberSuggestedGroupsM3ReceiverEnabled()) {
                    return true;
                }
            }
            if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE) {
                const m = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e.chatId);
                const p = m != null ? o("WAWebGroupMetadataGetters").getGroupType(m) : null;
                if (t.reason === o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT && p === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                    return false;
                }
                t.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT && p === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
                return true;
            }
            if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST) {
                return true;
            }
            if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS) {
                const f = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(e.chatId.toString());
                if (!f) {
                    return true;
                }
            }
            if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS && t.skipGenMsg || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS && t.shouldSkipGenMsg === true || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECEIVED && t.shouldSkipGenMsg === true || (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.MODIFY) && (yield _(e.chatId)) === true) {
                return true;
            }
            if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE || t.actionType === o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE) {
                const g = t.participants.every(({ id: t })=>t.isLid());
                const h = e.isLidAddressingMode === true;
                if (!h && g) {
                    return true;
                }
            }
            return false;
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                return o("WAWebBackendApi").frontendSendAndReceive("notAlreadyInGroup", {
                    groupId: e,
                    participants: t
                });
            }
            const a = new Set((yield o("WAWebGroupsParticipantsApi").getParticipants(e))?.participants ?? []);
            return t.filter(({ id: t })=>!a.has(String(t)));
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
            return !!(t != null && t.defaultSubgroup);
        });
        return f.apply(this, arguments);
    }
    function g({ author: t, authorPhoneNumber: n }) {
        if (t != null) {
            return {
                id: t,
                phoneNumber: n
            };
        }
        return null;
    }
    function h(t) {
        const a = t.participants ?? t.groupInfo?.participants;
        const i = a != null ? [].concat(a) : [];
        e: {
            const l = t;
            if ((typeof l === "object" && l !== null || typeof l === "function") && "actionType" in l && l.actionType === e.CREATE && (typeof l.groupInfo === "object" && l.groupInfo !== null || typeof l.groupInfo === "function") && "owner" in l.groupInfo && "creatorPn" in l.groupInfo && "subjectOwner" in l.groupInfo && "subjectOwnerPn" in l.groupInfo) {
                const s = l.groupInfo.owner;
                const u = l.groupInfo.creatorPn;
                const c = l.groupInfo.subjectOwner;
                const d = l.groupInfo.subjectOwnerPn;
                if (s != null) {
                    i.push({
                        id: s,
                        phoneNumber: u
                    });
                }
                if (c != null) {
                    i.push({
                        id: c,
                        phoneNumber: d
                    });
                }
                break e;
            }
            if ((typeof l === "object" && l !== null || typeof l === "function") && "actionType" in l && l.actionType === e.SUBJECT && "s_o" in l && "subjectOwnerPn" in l) {
                const { s_o: m, subjectOwnerPn: p } = l;
                if (m != null && p != null) {
                    i.push({
                        id: m,
                        phoneNumber: p
                    });
                }
                break e;
            }
            if ((typeof l === "object" && l !== null || typeof l === "function") && "actionType" in l && l.actionType === e.CREATED_MEMBERSHIP_REQUESTS && "requests" in l) {
                const _ = l.requests;
                _.forEach(({ phoneNumber: t, wid: n })=>{
                    if (t != null) {
                        i.push({
                            id: n,
                            phoneNumber: t
                        });
                    }
                });
                break e;
            }
            {
                r("WAWebNoop")();
                break e;
            }
        }
        return i;
    }
    l.GROUP_NOTIFICATION_TAG = e;
    l.shouldSkipGenMsg = c;
    l.notAlreadyInGroup = m;
    l.getIsCagById = _;
    l.getAuthorLidPnFieldsFromMeta = g;
    l.getMappingsFromAction = h;
}, 98);