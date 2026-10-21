__d("WAWebFavoritesSync", [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBFavoriteDatabaseApi",
    "WAWebLid1X1MigrationGating",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularHigh;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 1;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.Favorites;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                let i;
                let l = 0;
                let d = 0;
                const m = t.map((e)=>{
                    if (e.operation !== "set") {
                        l++;
                        return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                    }
                    if (e.value.favoritesAction?.favorites == null) {
                        d++;
                        return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                    }
                    if (i == null || e.timestamp > i.timestamp) {
                        i = e;
                    }
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                });
                if (l > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "favorites sync: ",
                        " operations not supported"
                    ])), l);
                }
                if (d > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "favorites sync: ",
                        " malformed mutations"
                    ])), d);
                }
                const p = i?.value.favoritesAction?.favorites;
                if (p != null) {
                    let _ = 0;
                    const f = p.reduce((acc, { id })=>{
                        if (id != null) {
                            acc.push({
                                id,
                                orderIndex: _++
                            });
                        }
                        return acc;
                    }, []);
                    let g = 0;
                    const h = yield (c || (c = n("Promise"))).all(f.map((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            const t = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(e.id));
                            if (t.success === true) {
                                g++;
                                return {
                                    orderIndex: e.orderIndex,
                                    id: t.chat.id
                                };
                            }
                            t.success;
                            const n = o("WAWebWidFactory").createWid(e.id);
                            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && n.isLid()) {
                                const r = o("WAWebApiContact").getPhoneNumber(n);
                                if (r != null) {
                                    return {
                                        orderIndex: e.orderIndex,
                                        id: r.toString()
                                    };
                                }
                            }
                            return {
                                orderIndex: e.orderIndex,
                                id: e.id
                            };
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })()));
                    yield o("WAWebDBFavoriteDatabaseApi").setFavorites(h);
                    o("WAWebBackendApi").frontendFireAndForget("setFavoriteCollection", {
                        favorites: h.map((e)=>({
                                id: e.id,
                                orderIndex: e.orderIndex
                            }))
                    });
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[favorites] set ok, resolved ",
                        " of ",
                        ""
                    ])), g, h.length);
                }
                return m;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.getFavoritesMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const r = e.map((e)=>({
                        orderIndex: e.orderIndex,
                        wid: o("WAWebWidFactory").createWid(e.id)
                    }));
                const a = yield (c || (c = n("Promise"))).all(r.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        return babelHelpers.extends({}, e, {
                            mutationIndex: yield o("WAWebSyncdGetChat").getWidMutationIndexForWid(e.wid)
                        });
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [],
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    version: this.getVersion(),
                    timestamp: t,
                    action: this.getAction(),
                    value: {
                        favoritesAction: {
                            favorites: a.sort((e, t)=>e.orderIndex - t.orderIndex).map(({ mutationIndex })=>({
                                    id: mutationIndex
                                }))
                        }
                    }
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const m = new d;
    l.default = m;
}, 98);