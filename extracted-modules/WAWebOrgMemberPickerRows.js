__d("WAWebOrgMemberPickerRows", [
    "WAWebMultiSelectChatListTypes",
    "WAWebOrgMemberSearchErrorRowLayout",
    "WAWebOrgMemberSearchLoadingRowLayout",
    "WAWebOrgMemberSearchRows"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return e.flatMap((e)=>{
            const n = s(e, t);
            if (n.length === 0) {
                return [];
            }
            return [
                {
                    itemKey: `org-members-header-${e.orgId}`,
                    status: {
                        kind: "header"
                    },
                    type: o("WAWebMultiSelectChatListTypes").Row.ROW_ORG_MEMBERS_STATUS
                }
            ].concat(n);
        });
    }
    function s(e, t) {
        const { failure, orgId } = e;
        if (e.loading) {
            return [
                {
                    height: o("WAWebOrgMemberSearchLoadingRowLayout").ORG_MEMBER_SEARCH_LOADING_HEIGHT,
                    itemKey: `org-members-loading-${orgId}`,
                    status: {
                        kind: "loading"
                    },
                    type: o("WAWebMultiSelectChatListTypes").Row.ROW_ORG_MEMBERS_STATUS
                }
            ];
        }
        if (failure != null) {
            return [
                {
                    height: o("WAWebOrgMemberSearchErrorRowLayout").getOrgMemberSearchErrorHeight(failure),
                    itemKey: `org-members-error-${orgId}`,
                    status: {
                        failure,
                        kind: "error"
                    },
                    type: o("WAWebMultiSelectChatListTypes").Row.ROW_ORG_MEMBERS_STATUS
                }
            ];
        }
        return e.members.flatMap((e)=>{
            const n = o("WAWebOrgMemberSearchRows").toOrgMemberLid(e);
            if (n != null && t(n)) {
                return [
                    {
                        data: e,
                        itemKey: `org-member-${orgId}-${e.id}`,
                        lid: n,
                        type: o("WAWebMultiSelectChatListTypes").Row.ROW_ORG_MEMBER
                    }
                ];
            }
            return [];
        });
    }
    l.toOrgMemberPickerRows = e;
}, 98);