__d("WAWebSyncdDb", [
    "WAWebSchemaMissingKeys",
    "WAWebSchemaPendingMutations",
    "WAWebSchemaSyncActions",
    "WAWebSchemaSyncKeys",
    "WAWebSyncdKeyTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebSchemaPendingMutations").getPendingMutationsTable().all();
    }
    function s(e, t) {
        return o("WAWebSchemaPendingMutations").getPendingMutationsTable().equals(e, t);
    }
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaPendingMutations").getPendingMutationsTable().all({
                index: [
                    "collection"
                ],
                returnKeyType: "keys"
            });
            return new Set(e);
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return o("WAWebSchemaPendingMutations").getPendingMutationsTable().equals(e, t);
    }
    function m(e) {
        return o("WAWebSchemaPendingMutations").getPendingMutationsTable().bulkCreate(e);
    }
    function p(e) {
        return o("WAWebSchemaPendingMutations").getPendingMutationsTable().bulkRemove(e);
    }
    function _(e) {
        return o("WAWebSchemaSyncActions").getSyncActionsTable().get(e);
    }
    function f(e, t) {
        return o("WAWebSchemaSyncActions").getSyncActionsTable().anyOf(e, t);
    }
    function g(e) {
        return o("WAWebSchemaSyncActions").getSyncActionsTable().bulkCreateOrReplace(e);
    }
    function h(e) {
        return o("WAWebSchemaSyncActions").getSyncActionsTable().bulkCreateOrMerge(e.map((e)=>babelHelpers.extends({}, e)));
    }
    function y(e) {
        return o("WAWebSchemaSyncActions").getSyncActionsTable().bulkRemove(e);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaSyncKeys").getSyncKeysTable().get(new Uint8Array(o("WAWebSyncdKeyTypes").fromSyncKeyId(e)));
            if (t == null) {
                return t;
            }
            return o("WAWebSchemaSyncKeys").convertToSyncKeyFromRow(t);
        });
        return b.apply(this, arguments);
    }
    function v() {
        return o("WAWebSchemaSyncKeys").getSyncKeysTable().all().then((e)=>e.map(o("WAWebSchemaSyncKeys").convertToSyncKeyFromRow));
    }
    function S(e) {
        return o("WAWebSchemaSyncKeys").getSyncKeysTable().createOrReplace(o("WAWebSchemaSyncKeys").convertFromSyncKeyToRow(e)).then((e)=>o("WAWebSyncdKeyTypes").toSyncKeyId(e.buffer));
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaSyncKeys").getSyncKeysTable().equals([
                "keyEpoch"
            ], e);
            t.forEach((e)=>o("WAWebSchemaSyncKeys").getSyncKeysTable().merge({
                    keyId: e.keyId
                }, {
                    timestamp: 0
                }));
        });
        return L.apply(this, arguments);
    }
    function E() {
        return o("WAWebSchemaMissingKeys").getMissingKeysTable().count();
    }
    function k(e) {
        return o("WAWebSchemaMissingKeys").getMissingKeysTable().bulkGet(e).then((e)=>e.map((e)=>{
                if (e == null) {
                    return null;
                }
                return o("WAWebSchemaMissingKeys").convertToMissingKeyFromRow(e);
            }));
    }
    function I() {
        return o("WAWebSchemaMissingKeys").getMissingKeysTable().all().then((e)=>e.map(o("WAWebSchemaMissingKeys").convertToMissingKeyFromRow));
    }
    function T(e) {
        return o("WAWebSchemaMissingKeys").getMissingKeysTable().bulkRemove(e);
    }
    function D(e) {
        return o("WAWebSchemaMissingKeys").getMissingKeysTable().bulkCreateOrMerge(e.map(o("WAWebSchemaMissingKeys").convertFromMissingKeyToRow));
    }
    l.getAllPendingMutationsRows = e;
    l.getPendingMutationsRows = s;
    l.getCollectionsWithPendingMutations = u;
    l.getPendingMutationsRowsByIndex = d;
    l.appendPendingMutationsRows = m;
    l.bulkRemovePendingMutations = p;
    l.getSyncAction = _;
    l.getSyncActionsRows = f;
    l.setSyncActionRows = g;
    l.updateSyncActionRows = h;
    l.deleteSyncActionRows = y;
    l.getSyncKey = C;
    l.getAllSyncKeys = v;
    l.createSyncKey = S;
    l.expireSyncKey = R;
    l.getMissingKeyCount = E;
    l.bulkGetMissingKeys = k;
    l.getAllMissingKeys = I;
    l.bulkRemoveMissingKeys = T;
    l.createOrUpdateMissingKeys = D;
}, 98);