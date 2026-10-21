__d("WAWebCartDbLidMigration", [
    "WALogger",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebUserPrefsCartLidMigration",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!(!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() || o("WAWebUserPrefsCartLidMigration").isCartLidMigrationComplete())) {
                try {
                    yield o("WAWebModelStorageUtils").getStorage().lock([
                        "cart"
                    ], (()=>{
                        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "cartDbLidMigration: start migration"
                            ])));
                            const a = yield n.all();
                            const i = [];
                            const l = r("compactMap")(a, function(e) {
                                const t = e.id;
                                const n = o("WAWebWidFactory").createUserWidOrThrow(t);
                                if (n.isLid()) {
                                    return null;
                                }
                                const r = o("WAWebLidMigrationUtils").toPn(n);
                                const a = o("WAWebLidMigrationUtils").toLid(n);
                                if (a == null || r?.user == null) {
                                    return null;
                                }
                                e.id = a.toString();
                                i.push(t.toString());
                                return {
                                    id: a.toString(),
                                    message: e.message,
                                    total: e.total,
                                    currency: e.currency,
                                    itemCount: e.itemCount,
                                    products: e.products
                                };
                            });
                            if (l.length === 0) {
                                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "cartDbLidMigration: end migration with no records"
                                ])));
                                o("WAWebUserPrefsCartLidMigration").setCartLidMigrationValue(true);
                                return;
                            }
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "cartDbLidMigration: updated records: ",
                                ""
                            ])), l.length);
                            yield n.bulkCreateOrReplace(l);
                            yield n.bulkRemove(i);
                            o("WAWebUserPrefsCartLidMigration").setCartLidMigrationValue(true);
                            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "cartDbLidMigration: migration success"
                            ])));
                        });
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    })());
                } catch (e) {
                    o("WAWebUserPrefsCartLidMigration").setCartLidMigrationValue(false);
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[LID] Failed to migrate cart db : ",
                        ""
                    ])), e).sendLogs("lid-cart-migration");
                }
            }
        });
        return p.apply(this, arguments);
    }
    l.migrateCartDbLid = m;
}, 98);