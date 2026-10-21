__d("WAWebDBLabelSublistDatabaseApi", [
    "WAWebLidMigrationDbUtils",
    "WAWebSchemaLabelSublist",
    "WAWebUserPrefsLabelAssociationsLidMigration",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = h(e);
            const n = yield C([
                t
            ]);
            const r = n[0];
            const a = o("WAWebSchemaLabelSublist").getChatJidFromPrimaryKey(r);
            yield o("WAWebSchemaLabelSublist").getLabelSublistTable().createOrReplace(babelHelpers.extends({}, e, {
                chatJid: a
            }));
            if (a !== o("WAWebSchemaLabelSublist").getChatJidFromPrimaryKey(t)) {
                yield o("WAWebSchemaLabelSublist").getLabelSublistTable().bulkRemove([
                    t
                ]);
            }
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = [].concat((yield C([
                e
            ])), [
                e
            ]);
            yield o("WAWebSchemaLabelSublist").getLabelSublistTable().bulkRemove(t);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = (yield o("WAWebSchemaLabelSublist").getLabelSublistTable().all()).filter((t)=>t.predefinedId === e);
            if (t.length > 0) {
                yield o("WAWebSchemaLabelSublist").getLabelSublistTable().bulkRemove(t.map(h));
            }
            return t.length;
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
                predefinedId: e,
                chatJid: t
            });
            const a = yield C([
                r
            ]);
            const i = a[0];
            const l = (yield o("WAWebSchemaLabelSublist").getLabelSublistTable().get(i)) ?? (yield o("WAWebSchemaLabelSublist").getLabelSublistTable().get(r));
            if (l == null) {
                return null;
            }
            const s = yield v([
                l
            ]);
            const u = s[0];
            return u;
        });
        return _.apply(this, arguments);
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaLabelSublist").getLabelSublistTable().all();
            return v(e);
        });
        return g.apply(this, arguments);
    }
    function h({ chatJid, predefinedId }) {
        return o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
            chatJid,
            predefinedId
        });
    }
    function y(e) {
        return e.filter((e)=>r("WAWebWid").isWid(e));
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebUserPrefsLabelAssociationsLidMigration").isLabelAssociationsMigrationComplete()) {
                return e;
            }
            const t = yield o("WAWebLidMigrationDbUtils").findAccountLidsForPnChatIds(y(Array.from(new Set(e.map(o("WAWebSchemaLabelSublist").getChatJidFromPrimaryKey)))));
            return e.map((e)=>{
                const n = t.get(o("WAWebSchemaLabelSublist").getChatJidFromPrimaryKey(e));
                if (n == null) {
                    return e;
                }
                return o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
                    chatJid: n,
                    predefinedId: o("WAWebSchemaLabelSublist").getPredefinedIdFromPrimaryKey(e)
                });
            });
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebUserPrefsLabelAssociationsLidMigration").isLabelAssociationsMigrationComplete()) {
                return e;
            }
            const t = yield o("WAWebLidMigrationDbUtils").findChatIdsForAccountLids(y(Array.from(new Set(e.map((e)=>e.chatJid)))));
            return e.map((e)=>babelHelpers.extends({}, e, {
                    chatJid: t.get(e.chatJid) ?? e.chatJid
                }));
        });
        return S.apply(this, arguments);
    }
    l.addOrEditLabelSublist = e;
    l.removeLabelSublist = u;
    l.removeLabelSublistsByPredefinedId = d;
    l.getLabelSublistByChat = p;
    l.getAllLabelSublist = f;
}, 98);