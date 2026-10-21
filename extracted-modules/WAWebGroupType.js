__d("WAWebGroupType", [
    "$InternalEnum",
    "WAWebWamEnumGroupTypeClient",
    "WAWebWamEnumTypeOfGroupEnum"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (e = n("$InternalEnum"))({
        On: "on",
        Off: "off"
    });
    const u = e({
        Admin: "admin",
        Regular: "regular"
    });
    const c = e({
        Server: "server",
        Full: "full"
    });
    const d = Object.freeze({
        SUBJECT: "subject",
        ADD: "add",
        PROMOTE: "promote",
        DEMOTE: "demote",
        DELETE: "delete",
        REMOVE: "remove",
        MODIFY: "modify",
        INVITE_CODE: "invite",
        DESC_ADD: "desc_add",
        DESC_REMOVE: "desc_remove",
        RESTRICT: "restrict",
        ANNOUNCE: "announce",
        NO_FORWARD: "no_frequently_forwarded",
        EPHEMERAL: "ephemeral",
        REVOKE_INVITE: "revoke_invite",
        SUSPEND: "suspend",
        SUSPEND_APPEAL: "suspend_appeal",
        GROWTH_LOCKED: "growth_locked",
        GROWTH_UNLOCKED: "growth_unlocked",
        SUB_GROUP_LINK: "sub_group_link",
        PARENT_GROUP_LINK: "parent_group_link",
        SIBLING_GROUP_LINK: "sibling_group_link",
        SUB_GROUP_UNLINK: "sub_group_unlink",
        PARENT_GROUP_UNLINK: "parent_group_unlink",
        SIBLING_GROUP_UNLINK: "sibling_group_unlink",
        DELETE_PARENT_GROUP: "delete_parent_group",
        DELETE_PARENT_GROUP_UNLINK: "delete_parent_group_unlink",
        DELETE_PARENT_SUB_GROUP_UNLINK: "delete_parent_sub_group_unlink",
        INTEGRITY_PARENT_GROUP_UNLINK: "integrity_parent_group_unlink",
        INTEGRITY_SUB_GROUP_UNLINK: "integrity_sub_group_unlink",
        LINKED_GROUP_PROMOTE: "linked_group_promote",
        LINKED_GROUP_DEMOTE: "linked_group_demote",
        MEMBERSHIP_APPROVAL_MODE: "membership_approval_mode",
        MEMBERSHIP_APPROVAL_REQUEST: "membership_approval_request",
        CREATED_MEMBERSHIP_REQUESTS: "created_membership_requests",
        REVOKED_MEMBERSHIP_REQUESTS: "revoked_membership_requests",
        ALLOW_NON_ADMIN_SUB_GROUP_CREATION: "allow_non_admin_sub_group_creation",
        ALLOW_ADMIN_REPORTS: "allow_admin_reports",
        ADMIN_REPORT_RECEIVED: "admin_report_received",
        CREATED_SUBGROUP_SUGGESTION: "created_subgroup_suggestion",
        REVOKED_SUB_GROUP_SUGGESTIONS: "revoked_sub_group_suggestions",
        SUBGROUP_SUGGESTIONS_CHANGE_NUMBER: "subgroup_suggestions_change_number",
        MEMBER_ADD_MODE: "member_add_mode",
        MEMBER_LINK_MODE: "member_link_mode",
        MEMBER_SHARE_GROUP_HISTORY_MODE: "member_share_group_history_mode",
        GENERAL_CHAT_AUTO_ADD_DISABLED: "general_chat_auto_add_disabled",
        COMMUNITY_OWNER_UPDATE: "community_owner_update",
        HIDDEN_GROUP: "hidden_group",
        GROUP_SAFETY_CHECK: "group_safety_check",
        JOIN_FLOOD_NOTIFICATION: "join_flood_notification"
    });
    const m = Object.freeze({
        INTEGRITY_DELETE_PARENT: "integrity_delete_parent",
        DELETE_PARENT: "delete_parent"
    });
    const p = Object.freeze({
        INVITE: "invite",
        ACCEPT: "accept",
        LINKED_GROUP_JOIN: "linked_group_join",
        AUTO_ADD: "auto_add",
        DEFAULT_SUBGROUP_ADMIN_ADD: "default_subgroup_admin_add",
        DEFAULT_SUBGROUP_PROMOTE: "default_sub_group_promote",
        INVITE_AUTO_ADD: "invite_auto_add",
        GENERAL_CHAT_AUTO_ADD: "general_chat_auto_add"
    });
    const _ = Object.freeze({
        DEFAULT_SUBGROUP_DEMOTE: "default_sub_group_demote"
    });
    const f = e({
        APPROVED: "approved",
        REJECTED: "rejected",
        CANCELLED: "cancelled"
    });
    const g = e.Mirrored([
        "DEFAULT",
        "COMMUNITY",
        "LINKED_SUBGROUP",
        "LINKED_ANNOUNCEMENT_GROUP",
        "LINKED_GENERAL_GROUP"
    ]);
    function h(e) {
        if (e === g.LINKED_ANNOUNCEMENT_GROUP) {
            return o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM.DEFAULT_SUBGROUP;
        }
        if (e === g.LINKED_SUBGROUP) {
            return o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM.SUBGROUP;
        }
        if (e === g.DEFAULT || e === g.COMMUNITY || e === g.LINKED_GENERAL_GROUP) {
            return o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM.GROUP;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function y(e) {
        if (e != null) {
            if (e === g.DEFAULT) {
                return o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT.REGULAR_GROUP;
            }
            if (e === g.LINKED_SUBGROUP || e === g.LINKED_GENERAL_GROUP) {
                return o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT.SUB_GROUP;
            }
            if (e === g.LINKED_ANNOUNCEMENT_GROUP) {
                return o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT.DEFAULT_SUB_GROUP;
            }
            if (e === g.COMMUNITY) {
                return o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT.PARENT_GROUP;
            }
            return (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })();
        }
    }
    l.GroupSettingChangeSystemMessageToggleEnabled = s;
    l.GroupSettingChangeSystemMessageIsAdmin = u;
    l.GeneralChatAutoAddDisabledReasonEnum = c;
    l.GROUP_ACTIONS = d;
    l.DELETE_REASON = m;
    l.ADD_REASON = p;
    l.REMOVE_REASON = _;
    l.RevokedSubGroupSuggestionReason = f;
    l.GroupType = g;
    l.groupTypeToWamEnum = h;
    l.groupTypeToGroupTypeClient = y;
}, 98);