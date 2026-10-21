__d("WAWebLocalSchemaVersions", [
    "Promise",
    "WALogger",
    "WAWeb-dexie",
    "WAWebSchemaVersions",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const n = new (r("WAWeb-dexie"))(t);
                const a = (yield n.open()).verno;
                yield n.close();
                return a - 1;
            } catch (t) {
                const i = r("getErrorSafe")(t);
                if (i.name !== "NoSuchDatabaseError") {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] error while getting db local version: ",
                        ""
                    ])), i);
                }
                return null;
            }
        });
        return c.apply(this, arguments);
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield (s || (s = n("Promise"))).all(Array.from(o("WAWebSchemaVersions").DatabaseNames.members(), (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield u(e);
                    if (t != null) {
                        return [
                            e,
                            t
                        ];
                    }
                    return null;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            const t = e.filter(Boolean);
            return new Map(t);
        });
        return m.apply(this, arguments);
    }
    l.getLocalVersion = u;
    l.getLocalSchemaVersions = d;
}, 98);