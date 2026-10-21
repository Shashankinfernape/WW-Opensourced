__d("WAWebApiOrphanTcToken", [
    "Promise",
    "WAWebLidMigrationUtils",
    "WAWebSchemaOrphanTcToken",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.isUser()) {
                const r = o("WAWebSchemaOrphanTcToken").getOrphanTcTokenTable();
                const a = o("WAWebLidMigrationUtils").toPn(t);
                const i = o("WAWebLidMigrationUtils").toLid(t);
                const l = [];
                if (a != null) {
                    l.push(r.remove(a.toString()));
                }
                if (i != null) {
                    l.push(r.remove(i.toString()));
                }
                yield (e || (e = n("Promise"))).all(l);
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!t.isUser()) {
                return null;
            }
            const i = o("WAWebSchemaOrphanTcToken").getOrphanTcTokenTable();
            const l = o("WAWebLidMigrationUtils").toPn(t);
            const s = o("WAWebLidMigrationUtils").toLid(t);
            const u = [];
            if (l != null) {
                u.push(i.get(l.toString()));
            }
            if (s != null) {
                u.push(i.get(s.toString()));
            }
            const c = yield (e || (e = n("Promise"))).all(u);
            const d = c[0];
            const m = c[1];
            const p = d?.tcTokenTimestamp ?? 0;
            const _ = m?.tcTokenTimestamp ?? 0;
            if (p > _ || m == null) {
                return d;
            }
            return m;
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.isUser()) {
                const r = o("WAWebLidMigrationUtils").toLid(e) ?? e;
                const a = r.toString();
                return o("WAWebSchemaOrphanTcToken").getOrphanTcTokenTable().createOrMerge(a, babelHelpers.extends({
                    chatId: a
                }, t));
            }
        });
        return p.apply(this, arguments);
    }
    l.removeOrphanTcToken = s;
    l.getOrphanTcToken = c;
    l.createOrUpdateOrphanTcToken = m;
}, 98);