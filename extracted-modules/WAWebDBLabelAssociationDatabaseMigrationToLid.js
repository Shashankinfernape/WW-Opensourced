__d("WAWebDBLabelAssociationDatabaseMigrationToLid", [
    "WALogger",
    "WAWebApiContact",
    "WAWebLid1X1MigrationGating",
    "WAWebModelStorageUtils",
    "WAWebSchemaLabelAssociation",
    "WAWebUserPrefsLabelAssociationsLidMigration",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    function b() {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebUserPrefsLabelAssociationsLidMigration").isLabelAssociationsMigrationComplete()) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[labelAssocMigration] already complete"
                ])));
                return;
            }
            if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[labelAssocMigration] 1-1 threads not migrated to lid"
                ]))).sendLogs("migrateLabelAssociationsDatabaseToLid-1-1-not-migrated");
                return;
            }
            let t = false;
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "label-association",
                "chat"
            ], (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n, a]) {
                    const i = n;
                    try {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[labelAssocMigration] start"
                        ])));
                        const s = yield i.all();
                        const C = [];
                        const b = new Set;
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[labelAssocMigration] loaded ",
                            " assocs"
                        ])), s.length);
                        s.forEach((e)=>{
                            const { associationId: t, type: n } = e;
                            if (n === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid) {
                                const r = o("WAWebWidFactory").createWid(t);
                                if (r.isRegularUser()) {
                                    if (r.isLid()) {
                                        b.add(t);
                                        return;
                                    }
                                    C.push(e);
                                }
                            }
                        });
                        if (C.length === 0) {
                            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[labelAssocMigration] no assocs to migrate"
                            ])));
                            t = true;
                            return;
                        }
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[labelAssocMigration] found ",
                            " assocs to migrate"
                        ])), C.length);
                        const v = C.map((e)=>e.associationId);
                        const S = yield a.bulkGet(v);
                        let R = 0;
                        let L = 0;
                        let E = 0;
                        const k = [];
                        const I = [];
                        C.forEach((e, t)=>{
                            let n = null;
                            const r = S[t];
                            if (r != null) {
                                n = r.accountLid;
                            } else {
                                R++;
                            }
                            if (n == null) {
                                n = o("WAWebApiContact").getCurrentLid(o("WAWebWidFactory").createUserWidOrThrow(v[t]))?.toString();
                                if (n == null) {
                                    if (r != null) {
                                        L++;
                                    }
                                    return;
                                }
                            }
                            if (b.has(n)) {
                                E++;
                                k.push(o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey(e));
                                return;
                            }
                            k.push(o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey(e));
                            I.push(babelHelpers.extends({}, e, {
                                associationId: n
                            }));
                        });
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[labelAssocMigration] chatRows not found: ",
                            ""
                        ])), R);
                        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[labelAssocMigration] deduped: ",
                            ""
                        ])), E);
                        if (L > 0) {
                            o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                "[labelAssocMigration] accountLids not found: ",
                                ""
                            ])), L).sendLogs("migrateLabelAssociationsDatabaseToLid-not-found-account-lids");
                        }
                        yield i.bulkRemove(k);
                        yield i.bulkCreate(I);
                        const T = yield i.count();
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[labelAssocMigration] assocs after: ",
                            ""
                        ])), T);
                        if (T !== s.length - E) {
                            o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                "[labelAssocMigration] count mismatch: ",
                                " != ",
                                " - ",
                                ""
                            ])), T, s.length, E).sendLogs("migrateLabelAssociationsDatabaseToLid-all-associations-after-migration-mismatch");
                            throw r("err")("migrateLabelAssociationsDatabaseToLid: mismatch after migration");
                        }
                        t = L === 0;
                    } catch (e) {
                        o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "[labelAssocMigration] error: ",
                            ""
                        ])), r("getErrorSafe")(e).message).sendLogs("migrateLabelAssociationsDatabaseToLid-error");
                        throw r("getErrorSafe")(e);
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            if (t) {
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[labelAssocMigration] complete +"
                ])));
                o("WAWebUserPrefsLabelAssociationsLidMigration").setLabelAssociationsMigrationAsComplete();
            }
        });
        return v.apply(this, arguments);
    }
    l.migrateLabelAssociationsDatabaseToLid = b;
}, 98);