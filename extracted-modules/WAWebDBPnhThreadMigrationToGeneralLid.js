__d("WAWebDBPnhThreadMigrationToGeneralLid", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLid1X1MigrationGating",
    "WAWebLidAwareContactsDB",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebSchemaChat",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUsernameTypes",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
    let E;
    function k(e) {
        return o("WAWebContactSystemMsg").genNotificationMsg(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: "pnh_thread_promotion",
            templateParams: []
        });
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield t.allPrimaryKeys();
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "migratePhoneNumberHidingThreadsToGeneralLid: loaded ",
                " chat ids"
            ])), n.length);
            const a = n.filter((e)=>r("WAWebWid").isStringLid(e));
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "migratePhoneNumberHidingThreadsToGeneralLid: found ",
                " LID chat ids"
            ])), a.length);
            const i = yield t.anyOf([
                "id"
            ], a, {
                shouldDecrypt: false
            });
            return i.filter((e)=>e.lidOriginType === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA);
        });
        return T.apply(this, arguments);
    }
    function D() {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration").getPhoneNumberHidingThreadPromotionMigrationState();
            if (e === "migrated") {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "migratePhoneNumberHidingThreadsToGeneralLid: migration already complete"
                ])));
                return;
            }
            if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "migratePhoneNumberHidingThreadsToGeneralLid: 1-1 threads are not migrated to lid"
                ]))).sendLogs("migratePhoneNumberHidingThreadsToGeneralLid-1-1-not-migrated");
                return;
            }
            if (e !== "migration_started") {
                o("WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration").setPhoneNumberHidingThreadPromotionMigrationState("migration_started");
            }
            let t = false;
            let a = [];
            let i = [];
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "chat",
                "contact"
            ], (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n, l]) {
                    const s = n;
                    try {
                        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "migratePhoneNumberHidingThreadsToGeneralLid: start migration"
                        ])));
                        const u = yield I(s);
                        if (u.length === 0) {
                            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                "migratePhoneNumberHidingThreadsToGeneralLid: no chats found with CTWA lidOriginType"
                            ])));
                            t = true;
                            return;
                        }
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "migratePhoneNumberHidingThreadsToGeneralLid: found ",
                            " chats to migrate from CTWA to GENERAL"
                        ])), u.length);
                        const c = u.map((e)=>({
                                id: e.id,
                                lidOriginType: o("WAWebUsernameTypes").LidOriginType.GENERAL
                            }));
                        yield s.bulkMergeOnly(c);
                        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "migratePhoneNumberHidingThreadsToGeneralLid: successfully updated ",
                            " chats from CTWA to GENERAL"
                        ])), c.length);
                        a = u.map((e)=>e.id);
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "migratePhoneNumberHidingThreadsToGeneralLid: checking shareOwnPn status for ",
                            " affected chats"
                        ])), a.length);
                        const y = yield r("WAWebLidAwareContactsDB").bulkGet(a);
                        i = a.filter((e, t)=>{
                            const n = y[t];
                            return n?.shareOwnPn !== true;
                        });
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "migratePhoneNumberHidingThreadsToGeneralLid: filtered to ",
                            " chats where shareOwnPn is not true"
                        ])), i.length);
                        t = true;
                    } catch (e) {
                        o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "migratePhoneNumberHidingThreadsToGeneralLid: migration error"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("migratePhoneNumberHidingThreadsToGeneralLid-error");
                        throw e;
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            if (t) {
                if (a.length > 0) {
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "migratePhoneNumberHidingThreadsToGeneralLid: propagating lid origin type changes to frontend for ",
                        " chats"
                    ])), a.length);
                    const l = a.map((e)=>({
                            id: o("WAWebWidFactory").createWid(e),
                            lidOriginType: o("WAWebUsernameTypes").LidOriginType.GENERAL
                        }));
                    o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
                        updates: l
                    });
                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "migratePhoneNumberHidingThreadsToGeneralLid: frontend propagation complete"
                    ])));
                }
                if (i.length > 0) {
                    o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "migratePhoneNumberHidingThreadsToGeneralLid: generating system messages for ",
                        " chats where shareOwnPn is not true"
                    ])), i.length);
                    const s = i.map((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            try {
                                const t = o("WAWebWidFactory").createWid(e);
                                const n = k(t);
                                yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                                    chatId: t,
                                    newMsg: n,
                                    handleSingleMsgOrigin: "generatePhnThreadPromotionMessage"
                                });
                            } catch (t) {
                                o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                                    "migratePhoneNumberHidingThreadsToGeneralLid: failed to generate system message for chat ",
                                    ""
                                ])), e).catching(r("getErrorSafe")(t)).sendLogs("migratePhoneNumberHidingThreadsToGeneralLid-system-msg-error");
                            }
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })());
                    yield (E || (E = n("Promise"))).all(s);
                    o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "migratePhoneNumberHidingThreadsToGeneralLid: system message generation complete"
                    ])));
                }
                const T = yield I(o("WAWebSchemaChat").getChatTable());
                if (T.length === 0) {
                    o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "migratePhoneNumberHidingThreadsToGeneralLid: migration complete, success"
                    ])));
                    o("WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration").setPhoneNumberHidingThreadPromotionMigrationState("migrated");
                } else {
                    o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "migratePhoneNumberHidingThreadsToGeneralLid: migration complete, but some chats still need to be updated"
                    ])));
                }
            }
        });
        return x.apply(this, arguments);
    }
    l.migratePhoneNumberHidingThreadsToGeneralLid = D;
}, 98);