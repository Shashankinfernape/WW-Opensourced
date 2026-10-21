__d("WAWebDBLabelAssociationDatabaseApi", [
    "WAWebApiContact",
    "WAWebLidMigrationDbUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaLabelAssociation",
    "WAWebUserPrefsLabelAssociationsLidMigration",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebUserPrefsLabelAssociationsLidMigration").isLabelAssociationsMigrationComplete() ? [].concat((yield R(e)), e) : e;
            yield o("WAWebSchemaLabelAssociation").getLabelAssociationTable().bulkRemove([].concat(t, S(e)));
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSchemaLabelAssociation").getLabelAssociationTable().bulkCreateOrReplace((yield b(e)));
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield b(e);
            if (t.length !== 0) {
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    "label-association"
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                        const r = n;
                        const a = yield r.bulkGet(t.map(o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey));
                        const i = new Map;
                        a.forEach((e)=>{
                            if (e != null) {
                                i.set(C(e), e);
                            }
                        });
                        yield r.bulkCreateOrReplace(t.map((e)=>babelHelpers.extends({}, i.get(C(e)) ?? {}, e)));
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            }
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, associationId) {
            const n = o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey({
                associationId,
                labelId: e,
                type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
            });
            const r = o("WAWebUserPrefsLabelAssociationsLidMigration").isLabelAssociationsMigrationComplete() ? yield R([
                n
            ]) : [
                n
            ];
            const a = r[0];
            yield o("WAWebSchemaLabelAssociation").getLabelAssociationTable().merge(a, {
                pendingImportLeadStage: null
            });
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaLabelAssociation").getLabelAssociationTable().anyOf([
                "labelId"
            ], e);
            if (o("WAWebUserPrefsLabelAssociationsLidMigration").isLabelAssociationsMigrationComplete()) {
                return D(t);
            }
            return t;
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebUserPrefsLabelAssociationsLidMigration").isLabelAssociationsMigrationComplete() ? yield I(e) : e;
            const n = yield o("WAWebSchemaLabelAssociation").getLabelAssociationTable().anyOf([
                "associationId",
                "type"
            ], t.map(({ associationId, type })=>[
                    associationId,
                    type
                ]));
            if (o("WAWebUserPrefsLabelAssociationsLidMigration").isLabelAssociationsMigrationComplete()) {
                return D(n);
            }
            return n;
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return [
            e.labelId,
            e.associationId,
            e.type
        ].join("\0");
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebUserPrefsLabelAssociationsLidMigration").isLabelAssociationsMigrationComplete()) {
                return E(e);
            }
            return e;
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        const t = [];
        for (const n of e){
            if (o("WAWebSchemaLabelAssociation").getAssociationTypeFromPrimaryKey(n) === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid) {
                const r = o("WAWebWidFactory").createWid(o("WAWebSchemaLabelAssociation").getAssociationIdFromPrimaryKey(n));
                if (!(!r.isRegularUser() || !r.isLid())) {
                    const a = o("WAWebApiContact").getPnIfLidIsLatestMapping(o("WAWebWidFactory").asUserLidOrThrow(r));
                    if (a != null) {
                        t.push(o("WAWebSchemaLabelAssociation").replaceAssociationIdInPrimaryKey(n, a.toString()));
                    }
                }
            }
        }
        return t;
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Set(e.filter((e)=>o("WAWebSchemaLabelAssociation").getAssociationTypeFromPrimaryKey(e) === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid).map(o("WAWebSchemaLabelAssociation").getAssociationIdFromPrimaryKey));
            const n = yield o("WAWebLidMigrationDbUtils").findAccountLidsForPnChatIds(Array.from(t));
            return e.map((e)=>{
                const t = n.get(o("WAWebSchemaLabelAssociation").getAssociationIdFromPrimaryKey(e));
                if (t == null) {
                    return e;
                }
                return o("WAWebSchemaLabelAssociation").replaceAssociationIdInPrimaryKey(e, t);
            });
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map(o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey);
            const n = yield R(t);
            return n.map((t, n)=>babelHelpers.extends({}, e[n], {
                    associationId: o("WAWebSchemaLabelAssociation").getAssociationIdFromPrimaryKey(t)
                }));
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map((e)=>o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey({
                    associationId: e.associationId,
                    type: e.type,
                    labelId: "1"
                }));
            const n = yield R(t);
            return n.map((e)=>({
                    associationId: o("WAWebSchemaLabelAssociation").getAssociationIdFromPrimaryKey(e),
                    type: o("WAWebSchemaLabelAssociation").getAssociationTypeFromPrimaryKey(e)
                }));
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Set(e.filter((e)=>e.type === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid).map((e)=>e.associationId));
            const n = yield o("WAWebLidMigrationDbUtils").findChatIdsForAccountLids(Array.from(t));
            return e.map((e)=>babelHelpers.extends({}, e, {
                    associationId: n.get(e.associationId) ?? e.associationId
                }));
        });
        return x.apply(this, arguments);
    }
    l.removeLabelAssociations = e;
    l.addOrEditLabelAssociations = u;
    l.mergeReceivedLabelAssociations = d;
    l.clearPendingImportLeadStage = p;
    l.queryLabelAssociationsForLabelIds = f;
    l.queryLocalLabelAssociations = h;
}, 98);