__d("WASmaxInGroupsEnums", [
    "WAJids"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        304: "304",
        419: "419"
    };
    const u = {
        403: "403",
        404: "404",
        406: "406",
        419: "419"
    };
    const c = {
        404: "404",
        406: "406"
    };
    const d = {
        404: "404",
        419: "419"
    };
    const m = {
        406: "406",
        500: "500"
    };
    const p = {
        accept: "accept",
        auto_add: "auto_add",
        default_sub_group_admin_add: "default_sub_group_admin_add",
        general_chat_auto_add: "general_chat_auto_add",
        invite: "invite",
        invite_auto_add: "invite_auto_add",
        linked_group_join: "linked_group_join",
        sub_group_suggestion_approved: "sub_group_suggestion_approved"
    };
    const _ = {
        accept: "accept",
        auto_add: "auto_add",
        default_sub_group_promote: "default_sub_group_promote",
        invite: "invite",
        invite_auto_add: "invite_auto_add",
        linked_group_join: "linked_group_join"
    };
    const f = {
        admin: "admin",
        creator: "creator"
    };
    const g = {
        admin: "admin",
        superadmin: "superadmin"
    };
    const h = {
        approved: "approved",
        cancelled: "cancelled",
        rejected: "rejected"
    };
    const y = {
        approved: "approved",
        in_review: "in_review",
        none: "none",
        rejected: "rejected"
    };
    const C = {
        deactivate_general_chat: "deactivate_general_chat",
        delete_capi: "delete_capi",
        delete_parent: "delete_parent",
        integrity_delete_parent: "integrity_delete_parent"
    };
    const b = {
        deactivate_group: "deactivate_group",
        delete_parent: "delete_parent",
        integrity_delete_parent: "integrity_delete_parent",
        unlink_group: "unlink_group"
    };
    const v = {
        e2ee_migration: "e2ee_migration",
        regular: "regular",
        rtc: "rtc"
    };
    const S = {
        false: "false",
        true: "true"
    };
    const R = {
        group: "group",
        user: "user"
    };
    const L = {
        image: "image",
        preview: "preview"
    };
    const E = {
        invite_link: "invite_link",
        linked_group_join: "linked_group_join",
        non_admin_add: "non_admin_add"
    };
    const k = {
        lid: "lid",
        pn: "pn"
    };
    const I = {
        parent_group: "parent_group",
        sibling_group: "sibling_group",
        sub_group: "sub_group"
    };
    const T = {
        validators: [
            (e = o("WAJids")).validateDomainJid,
            e.validateGroupJid
        ],
        typeName: "DomainJid|GroupJid"
    };
    const D = {
        validators: [
            e.validateUserJid,
            e.validateUserJid
        ],
        typeName: "UserJid|UserJid"
    };
    l.ENUM_304_419 = s;
    l.ENUM_403_404_406_419 = u;
    l.ENUM_404_406 = c;
    l.ENUM_404_419 = d;
    l.ENUM_406_500 = m;
    l.ENUM_ACCEPT_AUTOADD_DEFAULTSUBGROUPADMINADD_GENERALCHATAUTOADD_INVITE_INVITEAUTOADD_LINKEDGROUPJOIN_SUBGROUPSUGGESTIONAPPROVED = p;
    l.ENUM_ACCEPT_AUTOADD_DEFAULTSUBGROUPPROMOTE_INVITE_INVITEAUTOADD_LINKEDGROUPJOIN = _;
    l.ENUM_ADMIN_CREATOR = f;
    l.ENUM_ADMIN_SUPERADMIN = g;
    l.ENUM_APPROVED_CANCELLED_REJECTED = h;
    l.ENUM_APPROVED_INREVIEW_NONE_REJECTED = y;
    l.ENUM_DEACTIVATEGENERALCHAT_DELETECAPI_DELETEPARENT_INTEGRITYDELETEPARENT = C;
    l.ENUM_DEACTIVATEGROUP_DELETEPARENT_INTEGRITYDELETEPARENT_UNLINKGROUP = b;
    l.ENUM_E2EEMIGRATION_REGULAR_RTC = v;
    l.ENUM_FALSE_TRUE = S;
    l.ENUM_GROUP_USER = R;
    l.ENUM_IMAGE_PREVIEW = L;
    l.ENUM_INVITELINK_LINKEDGROUPJOIN_NONADMINADD = E;
    l.ENUM_LID_PN = k;
    l.ENUM_PARENTGROUP_SIBLINGGROUP_SUBGROUP = I;
    l.DOMAINJID_GROUPJID = T;
    l.USERJID_USERJID = D;
}, 98);