__d("WAWebDBLabelsReorder", [
    "Promise",
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebSchemaLabel",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "label"
            ], function() {
                return d(e);
            });
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = t.reduce((acc, item, index)=>{
                acc.set(item, index);
                return acc;
            }, new Map([]));
            try {
                const a = t.map((e)=>String(e));
                const i = yield o("WAWebSchemaLabel").getLabelTable().bulkGet(a);
                const l = [];
                i.forEach((e)=>{
                    if (e != null) {
                        const orderIndex = r.get(Number(e.id));
                        if (orderIndex != null) {
                            l.push(o("WAWebSchemaLabel").getLabelTable().merge(e.id, {
                                orderIndex
                            }));
                        }
                    }
                });
                yield (s || (s = n("Promise"))).all(l);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[Label] writeLabelsSortOrder: updating storage failed"
                ]))).tags("labels").sendLogs("labels-db-update-failed");
                throw error;
            }
        });
        return m.apply(this, arguments);
    }
    l.updateLabelsSortOrder = u;
    l.writeLabelsSortOrder = d;
}, 98);