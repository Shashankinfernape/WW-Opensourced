__d("WAWebDBAfterReadSendingRollbackMigration", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebDBBulkCanSetGroupEphemeralSetting",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebSchemaChat",
    "WAWebUserPrefsAfterReadSendingRollbackMigration",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "countWhere",
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
    const y = "after-read-rollback-migration";
    const C = null;
    function b() {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebABProps").getABPropConfigValue("after_read_sending_enabled") === true) {
                if (o("WAWebUserPrefsAfterReadSendingRollbackMigration").getAfterReadSendingRollbackMigrationState() !== "migrated") {
                    o("WAWebUserPrefsAfterReadSendingRollbackMigration").setAfterReadSendingRollbackMigrationState("migrated");
                }
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "migrateAfterReadSendingRollback: feature enabled; skip"
                ])));
                return;
            }
            const t = o("WAWebUserPrefsAfterReadSendingRollbackMigration").getAfterReadSendingRollbackMigrationState();
            if (t === "migrated") {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "migrateAfterReadSendingRollback: migration already complete"
                ])));
                return;
            }
            if (t !== "migration_started") {
                o("WAWebUserPrefsAfterReadSendingRollbackMigration").setAfterReadSendingRollbackMigrationState("migration_started");
            }
            let a = [];
            try {
                a = yield o("WAWebModelStorageUtils").getStorage().lock([
                    "chat",
                    "group-metadata",
                    "participant"
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t, n, a]) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "migrateAfterReadSendingRollback: start migration"
                        ])));
                        const i = yield S(t);
                        const l = i.filter((e)=>!r("WAWebWid").isGroup(e.id));
                        const s = i.filter((e)=>r("WAWebWid").isGroup(e.id));
                        let p = [];
                        if (s.length > 0) {
                            const _ = yield o("WAWebDBBulkCanSetGroupEphemeralSetting").bulkCanSetGroupEphemeralSetting(n, a, s.map((e)=>e.id));
                            p = s.filter((e)=>_.has(e.id));
                            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[migrateAfterReadSendingRollback] ",
                                "/",
                                " groups user-editable"
                            ])), p.length, s.length);
                        }
                        const f = [].concat(l, p);
                        if (f.length === 0) {
                            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateAfterReadSendingRollback: no chats need rollback"
                            ])));
                            return [];
                        }
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "migrateAfterReadSendingRollback: clearing ",
                            " chats"
                        ])), f.length);
                        yield t.bulkMergeOnly(f.map((e)=>({
                                id: e.id,
                                afterReadDuration: C
                            })));
                        return f.map((e)=>e.id);
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            } catch (e) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "migrateAfterReadSendingRollback: migration error"
                ]))).catching(r("getErrorSafe")(e)).sendLogs(`${y}-clear-chats`);
                throw e;
            }
            if (a.length > 0) {
                o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
                    updates: a.map((e)=>({
                            id: o("WAWebWidFactory").createWid(e),
                            afterReadDuration: C
                        }))
                });
                yield (h || (h = n("Promise"))).all(a.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            const t = o("WAWebWidFactory").createWid(e);
                            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                                chatId: t,
                                newMsg: o("WAWebContactSystemMsg").genNotificationMsg(t, {
                                    type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                                    kind: o("WAWebMsgType").MsgKind.Protocol,
                                    subtype: "ephemeral_setting",
                                    ephemeralDuration: 0,
                                    ephemeralSettingUser: null
                                }),
                                handleSingleMsgOrigin: "afterReadSendingRollbackMigration"
                            });
                        } catch (t) {
                            o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateAfterReadSendingRollback: failed to emit rollback system message for ",
                                ""
                            ])), e).catching(r("getErrorSafe")(t)).sendLogs(`${y}-emit-system-msg`);
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
            }
            const i = r("countWhere")((yield S(o("WAWebSchemaChat").getChatTable())), function(e) {
                return !r("WAWebWid").isGroup(e.id);
            });
            if (i === 0) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "migrateAfterReadSendingRollback: migration complete, success"
                ])));
                o("WAWebUserPrefsAfterReadSendingRollbackMigration").setAfterReadSendingRollbackMigrationState("migrated");
            } else {
                o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "migrateAfterReadSendingRollback: ",
                    " chats pending; will retry"
                ])), i);
            }
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield e.all({
                shouldDecrypt: false
            });
            return t.filter((e)=>e.afterReadDuration != null);
        });
        return R.apply(this, arguments);
    }
    l.migrateAfterReadSendingRollback = b;
}, 98);