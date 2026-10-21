__d("WAWebSyncdCoreApi", [
    "Promise",
    "WALogger",
    "WATypeUtils",
    "WAWebBackendEventBus",
    "WAWebDebounce",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebLid1X1MigrationGating",
    "WAWebModelStorageUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSchemaSyncActions",
    "WAWebSyncd",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebSyncdDisabled",
    "WAWebSyncdGetActionHandler",
    "WAWebSyncdRequestBuilderTypesConverter",
    "WAWebUserPrefsAppStateSync",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "tryParseJSONMixed"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = [
        "pending-mutations"
    ];
    function f() {
        if (o("WAWebSyncdDisabled").isSyncdDisabled()) {
            return (p || (p = n("Promise"))).resolve();
        }
        g();
        o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd().then(()=>{
            o("WAWebSyncd").processOnAppResume();
        });
        h();
        return o("WAWebSyncd").initializeStateMachine();
    }
    function g() {
        const e = 60000;
        const t = r("WAWebDebounce")(o("WAWebSyncd").reportWam, e, {
            maxWait: e * 3
        });
        o("WAWebBackendEventBus").BackendEventBus.onAppStateSyncCompleted(t);
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] sync-actions sanitation start"
            ])));
            const t = yield o("WAWebUserPrefsAppStateSync").getMdSyncActionsActionSanitized();
            if (t) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] sync-actions sanitation completed: alreadySanitized=true"
                ])));
            } else {
                const n = yield o("WAWebSchemaSyncActions").getSyncActionsTable().all();
                const r = n.filter((e)=>e.action == null);
                const a = [];
                let i = 0;
                const l = r.map((e)=>{
                    const t = o("WAWebSyncdActionUtils").getMutationNameFromIndex(e.collection, e.index);
                    const n = o("WAWebSyncdConst").Actions.cast(t);
                    if (n) {
                        return babelHelpers.extends({}, e, {
                            action: n
                        });
                    }
                    i++;
                    if (a.length < 3) {
                        a.push(t ?? "no-mutation-name");
                    }
                    return babelHelpers.extends({}, e);
                });
                if (i > 0) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: ",
                        " unknown actions => ",
                        ""
                    ])), i, a);
                }
                yield o("WAWebSyncdDb").updateSyncActionRows(l);
                yield o("WAWebUserPrefsAppStateSync").setMdSyncActionsActionSanitized(true);
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] sync-actions sanitation completed: alreadySanitized=false, rows=",
                    ", nullActions=",
                    ", unknownActions=",
                    ""
                ])), n.length, r.length, i);
            }
        });
        return y.apply(this, arguments);
    }
    function C(e, t, r) {
        const a = [].concat(e, _);
        if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
            a.push("chat", "sync-actions");
        }
        const i = o("WAWebModelStorageUtils").getStorage().lock(a, (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const a = yield b(t);
                return (p || (p = n("Promise"))).all([
                    o("WAWebSyncdDb").appendPendingMutationsRows(t.concat(a)),
                    r(e)
                ]);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })()).then(()=>{
            const e = t.map((e)=>e.collection);
            o("WAWebSyncd").markCollectionsForSync(e);
        });
        return (p || (p = n("Promise"))).resolve(i);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() || o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isSyncdSessionMigrated()) {
                return [];
            }
            let t = 0;
            let a = 0;
            const i = (yield (p || (p = n("Promise"))).all(e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (e.action != null) {
                        const n = o("WAWebSyncdGetActionHandler").getActionHandler(e.action);
                        if (!(n == null || !n.isChatSyncdAction())) {
                            const i = n.chatJidIndex;
                            const l = r("tryParseJSONMixed")(e.index);
                            if (!Array.isArray(l)) {
                                t++;
                                return;
                            }
                            const s = l[i];
                            if (!o("WATypeUtils").isString(s)) {
                                a++;
                                return;
                            }
                            if (r("WAWebWid").isStringLid(s)) {
                                const u = (yield o("WAWebSchemaChat").getChatTable().equals([
                                    "accountLid"
                                ], s, {
                                    shouldDecrypt: false
                                }))[0];
                                if (!(u == null || u.accountLid === u.id)) {
                                    const c = o("WAWebWidFactory").createWid(u.id).toJid();
                                    const d = [].concat(l);
                                    d[i] = c;
                                    const m = JSON.stringify(d);
                                    return o("WAWebSchemaSyncActions").getSyncActionsTable().get(m);
                                }
                            }
                        }
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()))).filter(Boolean).map(o("WAWebSchemaSyncActions").convertToSyncActionFromRow);
            if (t > 0) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] getPnMutationsForLidCleanup: ",
                    " non-array indexes"
                ])), t).sendLogs("syncd-lid-cleanup-invalid-index-non-array");
            }
            if (a > 0) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] getPnMutationsForLidCleanup: ",
                    " non-string JIDs"
                ])), a).sendLogs("syncd-lid-cleanup-invalid-index-non-string-jid");
            }
            return o("WAWebSyncdRequestBuilderTypesConverter").syncActionsToPendingMutations(i, o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE);
        });
        return v.apply(this, arguments);
    }
    l.initialize = f;
    l.sanitizeActionInSyncActionsRow = h;
    l.lockForSync = C;
}, 98);