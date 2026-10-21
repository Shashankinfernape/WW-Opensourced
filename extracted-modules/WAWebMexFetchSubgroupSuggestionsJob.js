__d("WAWebMexFetchSubgroupSuggestionsJob", [
    "Promise",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchSubgroupSuggestionsJobQuery.graphql",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = e !== void 0 ? e : e = n("WAWebMexFetchSubgroupSuggestionsJobQuery.graphql");
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            const a = {
                group_id: e.toString(),
                query_context: r,
                sub_group_hint_id: t.toString()
            };
            try {
                const l = yield o("WAWebMexClient").fetchQuery(u, a);
                const c = l.xwa2_group_query_by_id?.sub_group_suggestions?.edges;
                if (c == null) {
                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "missing edges in response");
                }
                const d = c.map(({ node: n })=>{
                    if (n != null) {
                        return m(e, n);
                    }
                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "null node in sub_group_suggestions");
                });
                return d;
            } catch (e) {
                if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                    return (s || (s = n("Promise"))).reject(e);
                }
                return (s || (s = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(e.code), e.message));
            }
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        let l;
        let s;
        let u;
        if (t.is_existing_group == null) {
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "missing is_existing_group in response");
        }
        u = t.is_existing_group;
        if (t.id == null) {
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "missing id in response");
        }
        l = new (r("WAWebWid"))(t.id, {
            intentionallyUsePrivateConstructor: true
        });
        if (t.creator.id == null) {
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "missing creator.id in response");
        }
        s = new (r("WAWebWid"))(t.creator.id, {
            intentionallyUsePrivateConstructor: true
        });
        return {
            id: l,
            parentGroupId: e,
            subject: t.subject?.value ?? "",
            desc: t.description?.value,
            owner: s,
            t: parseInt(t.creation_time, 10),
            isExistingGroup: u,
            participantCount: t.total_participants_count,
            hiddenSubgroup: t.hidden_group
        };
    }
    l.mexFetchSubgroupSuggestions = c;
}, 98);