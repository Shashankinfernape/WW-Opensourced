__d("WAWebApiMembershipApprovalRequestStore", [
    "WALogger",
    "WAWebSchemaMembershipApprovalRequest",
    "WAWebWidFactory",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return o("WAWebSchemaMembershipApprovalRequest").getMembershipApprovalRequestTable().equals([
            "groupId"
        ], e.toString()).then((e)=>e.map(c));
    }
    function u() {
        return o("WAWebSchemaMembershipApprovalRequest").getMembershipApprovalRequestTable().all().then((t)=>t.flatMap((t)=>{
                try {
                    return [
                        {
                            groupId: t.groupId,
                            request: c(t)
                        }
                    ];
                } catch (t) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "getAllMembershipApprovalRequests: skipped a malformed stored request"
                    ]))).catching(r("getErrorSafe")(t));
                    return [];
                }
            }));
    }
    function c({ addedBy: t, id: n, parentGroupId: r, requestMethod: a, t: i }) {
        return {
            id: o("WAWebWidFactory").createWid(n),
            t: i,
            addedBy: o("WAWebWidFactory").createWid(t),
            requestMethod: a,
            parentGroupId: r != null ? o("WAWebWidFactory").createWid(r) : void 0
        };
    }
    function d(e, t) {
        const n = t.map(({ addedBy: n, id: r, parentGroupId: o, requestMethod: a, t: i })=>({
                groupId: e.toString(),
                id: r.toString(),
                t: i,
                addedBy: n.toString(),
                requestMethod: a,
                parentGroupId: o?.toString()
            }));
        return o("WAWebSchemaMembershipApprovalRequest").getMembershipApprovalRequestTable().bulkCreateOrReplace(n);
    }
    function m(e, t) {
        const n = e.toString();
        return o("WAWebSchemaMembershipApprovalRequest").getMembershipApprovalRequestTable().bulkRemove(t.map((e)=>[
                n,
                e.toString()
            ]));
    }
    function p(e) {
        return o("WAWebSchemaMembershipApprovalRequest").getMembershipApprovalRequestTable().bulkRemoveByIndex([
            "groupId"
        ], [
            e.toString()
        ]);
    }
    l.getMembershipApprovalRequests = s;
    l.getAllMembershipApprovalRequests = u;
    l.addMembershipApprovalRequests = d;
    l.removeMembershipApprovalRequests = m;
    l.removeAllMembershipApprovalRequests = p;
}, 98);