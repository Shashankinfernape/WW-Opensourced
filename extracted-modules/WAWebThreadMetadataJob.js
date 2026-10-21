__d("WAWebThreadMetadataJob", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAiThreadTypeUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaThreadsMetadata",
    "WAWebThreadId",
    "WAWebThreadUtils",
    "WAWebThreadsMetadataIdUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u({ threadId }) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getAiThreadMetadata", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const n = yield o("WAWebSchemaThreadsMetadata").getThreadsMetadataTable().get(threadId);
            if (n == null || n.aiThreadInfo == null) {
                return null;
            }
            return {
                internalId: n.internalId,
                creationTimestamp: n.creationTimestamp,
                lastMessageTimestamp: n.lastMessageTimestamp,
                aiThreadInfo: n.aiThreadInfo,
                pinThreadTimestamp: n.pinThreadTimestamp,
                unreadCount: n.unreadCount ?? 0,
                botModeSelection: n.botModeSelection,
                botModeOverride: n.botModeOverride,
                lastReceivedKey: n.lastReceivedKey,
                unreadEditTimestampMs: n.unreadEditTimestampMs
            };
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getAllAiThreadsFromChatId", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const n = o("WAWebThreadsMetadataIdUtils").craftThreadsMetadataInternalIdPrefixForChatAndThreadType(t, o("WAWebThreadUtils").ThreadType.AiThread);
                const a = yield o("WAWebSchemaThreadsMetadata").getThreadsMetadataTable().startsWithAnyOf([
                    "internalId"
                ], [
                    n
                ]);
                const i = [];
                for (const l of a){
                    const c = l.aiThreadInfo;
                    if (c == null) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[getAllAiThreadsFromChatId] missing aiThreadInfo id=",
                            ""
                        ])), l.id).sendLogs("ai-thread-missing-ai-thread-type");
                        continue;
                    }
                    const d = r("WAWebThreadId").tryFrom(l.id);
                    if (d != null) {
                        i.push({
                            threadId: d,
                            aiThreadInfo: o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(c.title, c.aiThreadType),
                            creationTimestamp: o("WATimeUtils").castToUnixTime(l.creationTimestamp),
                            lastMessageTimestamp: o("WATimeUtils").castToUnixTime(l.lastMessageTimestamp ?? 0),
                            unreadCount: l.unreadCount ?? 0,
                            botModeSelection: l.botModeSelection,
                            botModeOverride: l.botModeOverride,
                            lastReceivedKey: l.lastReceivedKey,
                            unreadEditTimestampMs: l.unreadEditTimestampMs,
                            pinThreadTimestamp: l.pinThreadTimestamp
                        });
                    }
                }
                return i;
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted();
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getAllViewRepliesThreadsFromChatId", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = o("WAWebThreadsMetadataIdUtils").craftThreadsMetadataInternalIdPrefixForChatAndThreadType(e, o("WAWebThreadUtils").ThreadType.ViewAllReplies);
                const n = yield o("WAWebSchemaThreadsMetadata").getThreadsMetadataTable().startsWithAnyOf([
                    "internalId"
                ], [
                    t
                ]);
                const a = [];
                for (const i of n){
                    const s = r("WAWebThreadId").tryFrom(i.id);
                    if (s != null) {
                        a.push({
                            threadId: s,
                            creationTimestamp: o("WATimeUtils").castToUnixTime(i.creationTimestamp),
                            lastMessageTimestamp: o("WATimeUtils").castToUnixTime(i.lastMessageTimestamp ?? i.creationTimestamp)
                        });
                    }
                }
                return a;
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted();
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("deleteAllThreadsForChat", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = o("WAWebThreadsMetadataIdUtils").craftThreadsMetadataInternalIdPrefixForChatAndThreadType(e, o("WAWebThreadUtils").ThreadType.AiThread);
                const r = o("WAWebThreadsMetadataIdUtils").craftThreadsMetadataInternalIdPrefixForChatAndThreadType(e, o("WAWebThreadUtils").ThreadType.ViewAllReplies);
                const a = yield (s || (s = n("Promise"))).all([
                    o("WAWebSchemaThreadsMetadata").getThreadsMetadataTable().startsWithAnyOf([
                        "internalId"
                    ], [
                        t
                    ]),
                    o("WAWebSchemaThreadsMetadata").getThreadsMetadataTable().startsWithAnyOf([
                        "internalId"
                    ], [
                        r
                    ])
                ]);
                const i = a[0];
                const l = a[1];
                const u = i.concat(l);
                const c = u.map((e)=>e.id);
                yield o("WAWebSchemaThreadsMetadata").getThreadsMetadataTable().bulkRemove(c);
                return s.resolve();
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted();
        });
        return f.apply(this, arguments);
    }
    l.getAiThreadMetadata = u;
    l.getAllAiThreadsFromChatId = c;
    l.getAllViewRepliesThreadsFromChatId = m;
    l.deleteAllThreadsForChat = _;
}, 98);