__d("WAWebApiSubgroupSuggestionStore", [
    "Promise",
    "WABatcher",
    "WAWebSchemaSubgroupSuggestionV2",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 3000;
    function u(e) {
        return o("WAWebSchemaSubgroupSuggestionV2").getSubgroupSuggestionTable().equals([
            "parentGroupId"
        ], e.toString()).then((e)=>e.map(({ desc: t, hiddenSubgroup: n, id: r, isExistingGroup: a, owner: i, parentGroupId: l, participantCount: s, subject: u, t: c })=>({
                    id: o("WAWebWidFactory").createWid(r),
                    parentGroupId: o("WAWebWidFactory").createWid(l),
                    subject: u,
                    desc: t,
                    owner: o("WAWebWidFactory").createWid(i),
                    t: c,
                    isExistingGroup: a,
                    participantCount: s,
                    hiddenSubgroup: n
                })));
    }
    function c(e, t) {
        const n = t.map(({ desc: n, hiddenSubgroup: r, id: o, isExistingGroup: a, owner: i, participantCount: l, subject: s, t: u })=>({
                id: o.toString(),
                parentGroupId: e.toString(),
                subject: s,
                desc: n,
                owner: i.toString(),
                t: u,
                isExistingGroup: a,
                participantCount: l,
                hiddenSubgroup: r
            }));
        return o("WAWebSchemaSubgroupSuggestionV2").getSubgroupSuggestionTable().bulkCreateOrReplace(n);
    }
    function d({ newOwner: r, oldOwner: a, parentGroupId: i, subgroupSuggestions: l }) {
        const s = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = yield (e || (e = n("Promise"))).all(l.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const t = yield o("WAWebSchemaSubgroupSuggestionV2").getSubgroupSuggestionTable().get([
                            i.toString(),
                            e.toString(),
                            a.toString()
                        ]);
                        return t;
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                const s = t.filter(Boolean);
                const u = s.map((e)=>babelHelpers.extends({}, e, {
                        owner: r,
                        parentGroupId: o("WAWebWidFactory").createWid(e.parentGroupId),
                        id: o("WAWebWidFactory").createWid(e.id)
                    }));
                yield m(s.map(({ id: t })=>({
                        parentGroupId: i,
                        id: o("WAWebWidFactory").createWid(t),
                        owner: a
                    })));
                yield c(i, u);
            });
            return function() {
                return t.apply(this, arguments);
            };
        })();
        return s();
    }
    function m(e) {
        return o("WAWebSchemaSubgroupSuggestionV2").getSubgroupSuggestionTable().bulkRemove(e.map(({ id: t, owner: n, parentGroupId: r })=>[
                r.toString(),
                t.toString(),
                n.toString()
            ]));
    }
    const p = o("WABatcher").batch({
        delayMs: s
    }, (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.reduce((e, t)=>{
                e.push(...t.suggestionsRowKeys);
                return e;
            }, []);
            yield m(t);
            return [];
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    })());
    function _({ isOffline: t, subgroupSuggestions: n }) {
        if (t === true) {
            return p({
                suggestionsRowKeys: n
            });
        }
        return m(n);
    }
    l.getSubgroupSuggestions = u;
    l.addSubgroupSuggestions = c;
    l.updateOwnerInSubgroupSuggestions = d;
    l.removeSubgroupSuggestions = m;
    l.removeSubgroupSuggestionsWithOfflineOption = _;
}, 98);