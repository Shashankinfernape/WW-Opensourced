__d("WAWebMexFetchAllSubgroupsJob", [
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchAllSubgroupsJobQuery.graphql",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexFetchAllSubgroupsJobQuery.graphql");
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, query_context) {
            const i = {
                group_id: e.toString(),
                query_context,
                sub_group_hint_id: t?.toString()
            };
            const l = yield o("WAWebMexClient").fetchQuery(s, i);
            const u = l.xwa2_group_query_by_id?.default_sub_group;
            if (u == null) {
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "missing announcement group in response");
            }
            const c = [
                d(e, u, true)
            ];
            const m = l.xwa2_group_query_by_id?.sub_groups?.edges;
            if (m == null) {
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "missing edges in response");
            }
            m.forEach((t)=>{
                const n = t ?? {};
                const n_node = n.node;
                if (n_node == null) {
                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "null node in sub_group_suggestions");
                }
                c.push(d(e, n_node));
            });
            return c;
        });
        return c.apply(this, arguments);
    }
    function d(parentGroupId, { id, membership_approval_requests, properties, subject }, defaultSubgroup = false) {
        const { creation_time, value } = subject;
        return {
            id: o("WAWebWidFactory").createWid(id),
            parentGroupId,
            subject: value,
            subjectTime: o("WATimeUtils").castToUnixTime(Number(creation_time)),
            defaultSubgroup,
            generalSubgroup: properties?.general_chat ?? false,
            hiddenSubgroup: properties?.hidden_group ?? false,
            membershipApprovalMode: properties?.membership_approval_mode_enabled ?? false,
            membershipApprovalRequest: (membership_approval_requests?.total_count ?? 0) > 0
        };
    }
    l.mexFetchAllSubgroups = u;
}, 98);