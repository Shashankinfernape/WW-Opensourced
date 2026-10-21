__d("WAWebApiUnjoinedSubgroupMetadataStore", [
    "WAWebSchemaUnjoinedSubgroupMetadata",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "defaultSubgroup",
        "generalSubgroup",
        "parentGroupId"
    ];
    function s(e) {
        o("WAWebSchemaUnjoinedSubgroupMetadata").getUnjoinedSubgroupMetadataTable().remove(e.toString());
    }
    function u(t) {
        const { defaultSubgroup: a, generalSubgroup: i, parentGroupId: l } = t;
        const s = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const u = a != null ? {
            defaultSubgroup: a
        } : {};
        if (i != null) {
            u.generalSubgroup = i;
        }
        if (l != null) {
            u.parentGroup = l.toString();
        }
        return babelHelpers.extends({}, s, u, {
            id: t.id.toString(),
            hiddenSubgroup: t.hiddenSubgroup ?? false,
            membershipApprovalMode: t.membershipApprovalMode ?? false,
            membershipApprovalRequest: t.membershipApprovalRequest ?? false
        });
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ link: t, parentGroupId: n, unjoinedSubgroups: r }) {
            if (!t) {
                yield o("WAWebSchemaUnjoinedSubgroupMetadata").getUnjoinedSubgroupMetadataTable().bulkRemove(r.map((e)=>e.id.toString()));
                return;
            }
            let a = [];
            const i = yield o("WAWebSchemaUnjoinedSubgroupMetadata").getUnjoinedSubgroupMetadataTable().bulkGet(r.map((e)=>e.id.toString()));
            a = r.map((e, t)=>{
                const r = i[t];
                let o = {
                    subject: e.subject,
                    subjectTime: e.subjectTime || 0
                };
                if (r) {
                    const a = r.subjectTime || 0;
                    if (a > o.subjectTime) {
                        o = {
                            subject: r.subject,
                            subjectTime: a
                        };
                    }
                }
                return u(babelHelpers.extends({}, e, o, {
                    parentGroupId: n
                }));
            });
            yield o("WAWebSchemaUnjoinedSubgroupMetadata").getUnjoinedSubgroupMetadataTable().bulkCreateOrMerge(a);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ parentGroupId: t, unjoinedSubgroupIds: n }) {
            const r = yield o("WAWebSchemaUnjoinedSubgroupMetadata").getUnjoinedSubgroupMetadataTable().equals([
                "parentGroup"
            ], t.toString());
            const a = r.map((e)=>e.id);
            const i = n.map((e)=>e.toString());
            const l = a.filter((e)=>!i.includes(e));
            yield o("WAWebSchemaUnjoinedSubgroupMetadata").getUnjoinedSubgroupMetadataTable().bulkRemoveByIndex([
                "id"
            ], l);
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebSchemaUnjoinedSubgroupMetadata").getUnjoinedSubgroupMetadataTable().get(e.toString());
            if (n != null) {
                const r = babelHelpers.extends({}, n, {
                    membershipApprovalRequest: t
                });
                yield o("WAWebSchemaUnjoinedSubgroupMetadata").getUnjoinedSubgroupMetadataTable().bulkCreateOrMerge([
                    r
                ]);
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaUnjoinedSubgroupMetadata").getUnjoinedSubgroupMetadataTable().bulkGet(e.map((e)=>e.id.toString()));
            const n = [];
            e.forEach((e, r)=>{
                const o = t[r];
                if (o) {
                    n.push(babelHelpers.extends({}, o, {
                        size: e.participantCount
                    }));
                }
            });
            yield o("WAWebSchemaUnjoinedSubgroupMetadata").getUnjoinedSubgroupMetadataTable().bulkCreateOrMerge(n);
        });
        return h.apply(this, arguments);
    }
    l.removeUnjoinedSubgroupMetadataFromStorage = s;
    l.updateUnjoinedSubgroups = c;
    l.cleanUnjoinedSubgroups = m;
    l.updateMembershipApprovalRequestinDB = _;
    l.updateSizeInDB = g;
}, 98);