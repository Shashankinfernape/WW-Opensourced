__d("WAWebDBFavoriteDatabaseMigrationToLid", [
    "WALogger",
    "WAWebApiContact",
    "WAWebLid1X1MigrationGating",
    "WAWebModelStorageUtils",
    "WAWebUserPrefsFavoritesLidMigration",
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
    let b;
    let v;
    let S;
    let R;
    let L;
    function E() {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebUserPrefsFavoritesLidMigration").isFavoritesMigrationComplete()) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "migrateFavoritesDatabaseToLid: migration already complete"
                ])));
                return;
            }
            if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "migrateFavoritesDatabaseToLid: 1-1 not migrated to lid"
                ]))).sendLogs("migrateFavoritesDatabaseToLid-1-1-not-migrated");
                return;
            }
            let t = false;
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "favorite",
                "chat"
            ], (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n, a]) {
                    const i = n;
                    try {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "migrateFavoritesDatabaseToLid: start migration"
                        ])));
                        const s = yield i.all();
                        const L = [];
                        const E = new Set;
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "migrateFavoritesDatabaseToLid: loaded ",
                            " favorites"
                        ])), s.length);
                        s.forEach((e)=>{
                            const t = e.id;
                            const n = o("WAWebWidFactory").createWid(t);
                            if (n.isRegularUser()) {
                                if (n.isLid()) {
                                    E.add(t);
                                    return;
                                }
                                L.push(e);
                            }
                        });
                        if (L.length === 0) {
                            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateFavoritesDatabaseToLid: no favorites to migrate"
                            ])));
                            t = true;
                            return;
                        }
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "migrateFavoritesDatabaseToLid: found ",
                            " favorites to migrate"
                        ])), L.length);
                        const k = L.map((e)=>e.id);
                        const I = yield a.bulkGet(k);
                        let T = 0;
                        let D = 0;
                        let x = 0;
                        const $ = [];
                        let P = [];
                        L.forEach((e, t)=>{
                            let n = null;
                            const r = I[t];
                            if (r != null) {
                                n = r.accountLid;
                            } else {
                                T++;
                            }
                            if (n == null) {
                                n = o("WAWebApiContact").getCurrentLid(o("WAWebWidFactory").createUserWidOrThrow(k[t]))?.toString();
                                if (n == null) {
                                    if (r != null) {
                                        D++;
                                    }
                                    return;
                                }
                            }
                            if (E.has(n)) {
                                x++;
                                $.push(e.id);
                                return;
                            }
                            $.push(e.id);
                            P.push(babelHelpers.extends({}, e, {
                                id: n
                            }));
                        });
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "migrateFavoritesDatabaseToLid: not found chat rows: ",
                            ""
                        ])), T);
                        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "migrateFavoritesDatabaseToLid: deduped favourites: ",
                            ""
                        ])), x);
                        if (D > 0) {
                            o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateFavoritesDatabaseToLid: not found account lids: ",
                                ""
                            ])), D).sendLogs("migrateFavoritesDatabaseToLid-not-found-account-lids");
                        }
                        yield i.bulkRemove($);
                        const N = (yield i.bulkGet(P.map((e)=>e.id))).filter(Boolean);
                        if (N.length > 0) {
                            const M = N.filter((e)=>E.has(e.id));
                            o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateFavoritesDatabaseToLid: unexpected existing favs=",
                                " inLidSet=",
                                ""
                            ])), N.length, M.length).sendLogs("migrateFavoritesDatabaseToLid-existing-favorites");
                            const w = new Set(N.map((e)=>e.id));
                            P = P.filter((e)=>!w.has(e.id));
                        } else {
                            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateFavoritesDatabaseToLid: no unexpected existing favs"
                            ])));
                        }
                        const A = new Map(P.map((e)=>[
                                e.id,
                                e
                            ]));
                        if (A.size !== P.length) {
                            o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateFavoritesDatabaseToLid: duplicate favs=",
                                ""
                            ])), P.length - A.size).sendLogs("migrateFavoritesDatabaseToLid-duplicate-favorites");
                            P = Array.from(A.values());
                        } else {
                            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateFavoritesDatabaseToLid: no duplicate favs"
                            ])));
                        }
                        o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                            "migrateFavoritesDatabaseToLid: adding ",
                            " favorites"
                        ])), P.length);
                        yield i.bulkCreate(P);
                        const F = yield i.count();
                        o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                            "migrateFavoritesDatabaseToLid: all favorites after migration: ",
                            ""
                        ])), F);
                        if (F !== s.length - x) {
                            o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateFavoritesDatabaseToLid: count mismatch after=",
                                " all=",
                                " deduped=",
                                ""
                            ])), F, s.length, x).sendLogs("migrateFavoritesDatabaseToLid-all-favorites-after-migration-mismatch");
                            throw r("err")("migrateFavoritesDatabaseToLid: mismatch after migration");
                        }
                        t = D === 0;
                    } catch (e) {
                        const O = r("getErrorSafe")(e);
                        o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                            "migrateFavoritesDatabaseToLid: migration error"
                        ]))).catching(O).sendLogs("migrateFavoritesDatabaseToLid-error");
                        throw O;
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            if (t) {
                o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "migrateFavoritesDatabaseToLid: migration complete, success"
                ])));
                o("WAWebUserPrefsFavoritesLidMigration").setFavoritesMigrationAsComplete();
            }
        });
        return k.apply(this, arguments);
    }
    l.migrateFavoritesDatabaseToLid = E;
}, 98);