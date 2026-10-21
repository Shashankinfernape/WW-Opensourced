__d("WAWebThreadMetadataBulkJob", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebFetchMessagesInThread",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebRequestDeleteAddOns",
    "WAWebSchemaMessage",
    "WAWebSchemaThreadsMetadata",
    "WAWebThreadUtils",
    "WAWebThreadsMetadataIdUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.length !== 0) {
                return e.bulkMergeOnly(t.map((e)=>({
                        id: o("WAWebThreadsMetadataIdUtils").craftThreadMetadataDBId(e.threadId),
                        unreadCount: e.unreadCount
                    })));
            }
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.length !== 0) {
                return e.bulkMergeOnly(t.map((e)=>({
                        id: o("WAWebThreadsMetadataIdUtils").craftThreadMetadataDBId(e.threadId),
                        unreadEditTimestampMs: e.unreadEditTimestampMs
                    })));
            }
        });
        return m.apply(this, arguments);
    }
    function p(t) {
        if (t.length === 0) {
            return (s || (s = n("Promise"))).resolve([]);
        }
        return o("WAWebModelStorageUtils").getStorage().lock([
            "thread-metadata"
        ], (()=>{
            const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*([a]) {
                const i = [];
                const l = t.map((e)=>o("WAWebThreadsMetadataIdUtils").craftThreadMetadataDBId(e.threadId));
                const s = yield a.bulkGet(l);
                let u = 0;
                const c = r("compactMap")(t, function(e, t) {
                    const o = s[t];
                    if (o == null) {
                        u++;
                        return null;
                    }
                    const a = Math.max(0, (o.unreadCount ?? 0) + e.delta);
                    const lastReceivedKey = e.lastReceivedKey ?? o.lastReceivedKey;
                    i.push({
                        threadId: e.threadId,
                        unreadCount: a,
                        lastReceivedKey
                    });
                    return babelHelpers.extends({}, o, {
                        unreadCount: a,
                        lastReceivedKey
                    });
                });
                if (u > 0) {
                    const d = t.filter((e, t)=>s[t] == null).slice(0, 3).map((e)=>e.threadId);
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[bulkIncrementThreadUnreadCount] ",
                        " missing rows => ",
                        ""
                    ])), u, d);
                }
                yield a.bulkMergeOnly(c);
                return i;
            });
            return function(e) {
                return a.apply(this, arguments);
            };
        })());
    }
    function _({ threadIds }) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("bulkDeleteThreadsMetadata", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (threadIds.length !== 0) {
                const e = o("WAWebSchemaThreadsMetadata").getThreadsMetadataTable();
                yield e.bulkRemove(threadIds);
            }
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function f(e, t) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("bulkDeleteThreads", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const a = [];
            if (t.length === 0) {
                return a;
            }
            const i = t.map((e)=>{
                if (e.type === o("WAWebThreadUtils").ThreadType.AiThread) {
                    return o("WAWebThreadsMetadataIdUtils").craftAiThreadDBId(e);
                }
                if (e.type === o("WAWebThreadUtils").ThreadType.ViewAllReplies) {
                    return o("WAWebThreadsMetadataIdUtils").craftViewRepliesThreadDBId(e);
                }
                throw r("err")(`bulkDeleteThreads error: Unknown thread type: ${e.type}`);
            });
            yield _({
                threadIds: i
            });
            const l = yield (s || (s = n("Promise"))).all(t.map((e)=>g(e)));
            for (const u of l){
                a.push(...u);
            }
            yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(e.toString(), a);
            o("WAWebBackendApi").frontendFireAndForget("deleteModelsForLastAddOnPreview", {
                messagesIds: a
            });
            return a;
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebFetchMessagesInThread").beginningOfThread(e);
            const r = o("WAWebFetchMessagesInThread").endOfThread(e);
            const a = yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalThreadIDs"
            ], t, r, {
                lowerInclusive: false,
                upperInclusive: false,
                returnKeyType: "primary_key"
            });
            yield (s || (s = n("Promise"))).all([
                o("WAWebSchemaMessage").getMessageTable().bulkRemove(a),
                o("WAWebDBDeleteAssociatedMsgsByMsgKey").bulkDeleteMessagesByMsgKeys(a)
            ]);
            return a;
        });
        return h.apply(this, arguments);
    }
    l.bulkUpdateThreadUnreadCountWithTable = u;
    l.bulkUpdateThreadUnreadEditTimestampWithTable = d;
    l.bulkIncrementThreadUnreadCount = p;
    l.bulkDeleteThreadsMetadata = _;
    l.bulkDeleteThreads = f;
    l.queryAndRemoveThreadMessages = g;
}, 98);