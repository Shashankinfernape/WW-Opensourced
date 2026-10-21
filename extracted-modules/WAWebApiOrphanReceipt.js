__d("WAWebApiOrphanReceipt", [
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaOrphanReceipt",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebSchemaOrphanReceipt").getOrphanReceiptTable().remove(e);
    }
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = [
                e
            ];
            if (e.remote.isUser()) {
                const n = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
                if (n != null) {
                    t.push(n);
                }
            }
            const r = yield o("WAWebSchemaOrphanReceipt").getOrphanReceiptTable().bulkGet(t.map(String));
            return r.find((e)=>e != null);
        });
        return u.apply(this, arguments);
    }
    function c(e, t, n) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "orphan-receipt"
        ], function([o]) {
            return o.bulkGet(n).then((r)=>{
                const a = n.reduce((acc, item, index)=>{
                    let i = r[index];
                    if (i == null) {
                        i = {
                            msgKey: item
                        };
                    }
                    const l = i[e];
                    if (l == null || l > t) {
                        i[e] = t;
                        acc.push(i);
                    }
                    return acc;
                }, []);
                return o.bulkCreateOrReplace(a);
            });
        });
    }
    l.removeOrphanReceipt = e;
    l.getOrphanReceipt = s;
    l.createOrUpdateOrphanReceipt = c;
}, 98);