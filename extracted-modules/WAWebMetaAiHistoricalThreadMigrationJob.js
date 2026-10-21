__d("WAWebMetaAiHistoricalThreadMigrationJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadTypeUtils",
    "WAWebBotBaseGating",
    "WAWebBotDeviceCapabilities",
    "WAWebBotUtils",
    "WAWebBulkCreateOrUpdateThreadsMetadata",
    "WAWebDBMessageUtils",
    "WAWebDbEncryptionKey",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
    "WAWebUserPrefsBot",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
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
    const v = 100;
    function S() {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("migrateMetaAiMessagesToHistoricalThread", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[migrateMetaAiMessagesToHistoricalThread]: Starting migration"
            ])));
            try {
                yield R(v);
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[migrateMetaAiMessagesToHistoricalThread]: Error migrating messages: ",
                    ""
                ])), e).tags("ai-threads").sendLogs("migrateMetaAiMessagesToHistoricalThread: Error migrating messages");
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[migrateMetaAiMessagesToHistoricalThread]: Migration completed"
            ])));
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT
        }).fireAndForget();
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey();
            if (o("WAWebUserPrefsBot").isMetaAIThreadMigrationComplete()) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[migrateMetaAiMessagesToHistoricalThread]: Migration already complete, skipping"
                ])));
                return;
            }
            if (yield D()) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[migrateMetaAiMessagesToHistoricalThread]: All messages migrated and ai threads infra enabled, marking migration complete"
                ])));
                yield o("WAWebUserPrefsBot").markMetaAIThreadMigrationStateAsComplete();
                return;
            }
            const t = yield k(e);
            if (t.length === 0) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[migrateMetaAiMessagesToHistoricalThread]: No messages to migrate for ",
                    ""
                ])), o("WAWebBotUtils").META_BOT_PN_WID.toString());
                return;
            }
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[migrateMetaAiMessagesToHistoricalThread]: Found ",
                " messages to process"
            ])), t.length);
            const r = t.filter((e)=>e.internalThreadIDs == null || e.internalThreadIDs.length === 0);
            if (r.length === 0) {
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[migrateMetaAiMessagesToHistoricalThread]: All messages already have thread IDs"
                ])));
                yield I(t);
                return;
            }
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "[migrateMetaAiMessagesToHistoricalThread]: ",
                " messages need migration"
            ])), r.length);
            const a = E(r);
            const { messageUpdates: i, threadUpdates: l } = a;
            try {
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    "message",
                    "thread-metadata"
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t, n]) {
                        yield t.bulkCreateOrMerge(i);
                        yield o("WAWebBulkCreateOrUpdateThreadsMetadata").bulkCreateOrUpdateThreadsMetadata(l);
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            } catch (e) {
                if (e != null && typeof e === "object" && e.name === "AbortError") {
                    o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[migrateMetaAiMessagesToHistoricalThread]: Transaction aborted, will retry on next scheduled run"
                    ])));
                    return;
                }
                throw e;
            }
            yield I(t);
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "[migrateMetaAiMessagesToHistoricalThread]: Successfully migrated ",
                " messages"
            ])), r.length);
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        const t = o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId();
        const n = {
            aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default
        };
        const r = e.map((e)=>{
            const r = e.internalThreadIDs ?? [];
            const a = e.internalId != null ? o("WAWebDBMessageUtils").getInChatMsgId(e.internalId) : 0;
            const i = o("WAWebDBMessageUtils").craftInternalThreadId(a, t);
            return {
                id: e.id,
                internalThreadIDs: [].concat(r, [
                    i
                ])
            };
        });
        const a = e[0];
        const i = e[e.length - 1];
        if (a?.t != null && i?.t != null) {
            const l = [
                {
                    threadId: t,
                    chatId: o("WAWebBotUtils").META_BOT_PN_WID,
                    creationTimestamp: o("WATimeUtils").castToUnixTime(a.t),
                    lastMessageTimestamp: o("WATimeUtils").castToUnixTime(i.t),
                    aiThreadInfo: n
                }
            ];
            return {
                messageUpdates: r,
                threadUpdates: l
            };
        }
        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "[migrateMetaAiMessagesToHistoricalThread]: Messages missing timestamp (t) values"
        ])));
        return {
            messageUpdates: r,
            threadUpdates: []
        };
    }
    function k(e) {
        const n = o("WAWebUserPrefsBot").getMetaAIThreadMigrationState();
        const r = n?.lastConvertedMessageInternalId ?? o("WAWebDBMessageUtils").beginningOfChat(o("WAWebBotUtils").META_BOT_PN_WID);
        const a = o("WAWebDBMessageUtils").endOfChat(o("WAWebBotUtils").META_BOT_PN_WID);
        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "[migrateMetaAiMessagesToHistoricalThread]: Fetching messages for ",
            " from ",
            ""
        ])), o("WAWebBotUtils").META_BOT_PN_WID.toString(), r);
        return o("WAWebSchemaMessage").getMessageTable().between([
            "internalId"
        ], r, a, {
            lowerInclusive: false,
            upperInclusive: false,
            limit: e
        });
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e[e.length - 1];
            if (t?.internalId != null) {
                yield o("WAWebUserPrefsBot").setMetaAIThreadMigrationState({
                    lastConvertedMessageInternalId: t.internalId,
                    migrationProgress: o("WAWebUserPrefsBot").MetaAIThreadMigrationProgress.IN_PROGRESS
                });
            } else {
                o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[migrateMetaAiMessagesToHistoricalThread]: Last message has no internalId"
                ])));
            }
        });
        return T.apply(this, arguments);
    }
    function D() {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebUserPrefsBot").getMetaAIThreadMigrationState();
            if (e == null || e.migrationProgress !== o("WAWebUserPrefsBot").MetaAIThreadMigrationProgress.IN_PROGRESS) {
                return false;
            }
            const t = e.lastConvertedMessageInternalId;
            const n = yield $(t);
            if (!n) {
                return false;
            }
            const r = yield o("WAWebBotDeviceCapabilities").primaryHasAiThreadSupport();
            return !(!r || !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled());
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebDBMessageUtils").endOfChat(o("WAWebBotUtils").META_BOT_PN_WID);
            const n = yield o("WAWebSchemaMessage").getMessageTable().betweenCount([
                "internalId"
            ], e, t, {
                lowerInclusive: false,
                upperInclusive: false,
                limit: 1
            });
            return n === 0;
        });
        return P.apply(this, arguments);
    }
    l.migrateMetaAiMessagesToHistoricalThread = S;
    l.migrateMessagesForMetaAiBot = R;
    l.shouldMarkMigrationComplete = D;
}, 98);