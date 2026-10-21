__d("WAWebReconcileUnreadCountsForBotJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaChat",
    "WAWebSchemaThreadsMetadata",
    "WAWebThreadUtils",
    "WAWebThreadsMetadataIdUtils",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "sumBy"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("reconcileForBot", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const a = o("WAWebWidToJid").widToChatJid(t);
            const i = o("WAWebThreadsMetadataIdUtils").craftThreadsMetadataInternalIdPrefixForChatAndThreadType(a, o("WAWebThreadUtils").ThreadType.AiThread);
            const l = yield o("WAWebSchemaThreadsMetadata").getThreadsMetadataTable().startsWithAnyOf([
                "internalId"
            ], [
                i
            ]);
            const u = r("sumBy")(l, function(e) {
                return e.unreadCount ?? 0;
            });
            const c = t.toString();
            const d = yield o("WAWebSchemaChat").getChatTable().bulkGet([
                c
            ]);
            const m = d[0];
            if (m == null) {
                return null;
            }
            const p = m.unreadCount ?? 0;
            if (p !== u) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[reconcile-unread] chat.unreadCount=",
                    " threadSum=",
                    ", fixing"
                ])), p, u);
                yield o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge([
                    {
                        id: c,
                        unreadCount: u
                    }
                ]);
                return {
                    unreadCount: u
                };
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[reconcile-unread] unread=",
                " matches sum=",
                ""
            ])), p, u);
            return null;
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.reconcileForBot = u;
}, 98);