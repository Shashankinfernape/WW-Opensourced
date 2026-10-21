__d("WAWebAiThreadPinSyncUtils", [
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebAiThreadCreationUtils",
    "WAWebBackendApi",
    "WAWebBulkCreateOrUpdateThreadsMetadata",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaThreadsMetadata",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebThreadId",
    "WAWebThreadUtils",
    "WAWebThreadsMetadataIdUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 3;
    function u(e, t, pinThreadTimestamp) {
        const lastMessageTimestamp = o("WATimeUtils").castToUnixTime(t.lastMessageTimestamp ?? 0);
        const creationTimestamp = o("WATimeUtils").castToUnixTime(t.creationTimestamp ?? 0);
        const s = {
            threadId: e,
            chatId: e.key.remote,
            lastMessageTimestamp,
            creationTimestamp,
            pinThreadTimestamp
        };
        return o("WAWebBulkCreateOrUpdateThreadsMetadata").bulkCreateOrUpdateThreadsMetadata([
            s
        ]).then(()=>{
            o("WAWebBackendApi").frontendFireAndForget("updateChatAiThreads", {
                aiThreads: [
                    s
                ]
            });
        });
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebWidFactory").createWid(e);
            const n = o("WAWebThreadsMetadataIdUtils").craftThreadsMetadataInternalIdPrefixForChatAndThreadType(o("WAWebWidToJid").widToChatJid(t), o("WAWebThreadUtils").ThreadType.AiThread);
            const a = yield o("WAWebSchemaThreadsMetadata").getThreadsMetadataTable().startsWithAnyOf([
                "internalId"
            ], [
                n
            ]);
            const i = [];
            for (const dbRow of a){
                const s = dbRow.pinThreadTimestamp;
                if (s != null && s > 0 && dbRow.aiThreadInfo != null) {
                    const u = r("WAWebThreadId").tryFrom(dbRow.id);
                    if (u != null) {
                        i.push({
                            threadId: u,
                            timestamp: s,
                            dbRow
                        });
                    }
                }
            }
            const c = yield m(e);
            return [].concat(i, c);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield o("WAWebSyncdDb").getSyncActionsRows([
                "action"
            ], [
                o("WAWebSyncdConst").Actions.AiThreadPin
            ]);
            const a = [];
            for (const i of n){
                if (i.actionState === o("WAWebSyncdConst").SyncActionState.Orphan) {
                    try {
                        const l = JSON.parse(i.index);
                        if (l.length < s) {
                            continue;
                        }
                        const u = l[1];
                        if (u !== t) {
                            continue;
                        }
                        const c = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, i.binarySyncData).value;
                        if (c?.threadPinAction == null || c?.threadPinAction.pinned !== true) {
                            continue;
                        }
                        const d = l[2];
                        if (r("WAWebWid").isWid(u)) {
                            const m = o("WAWebWidFactory").createWid(u);
                            if (m.isBot()) {
                                const _ = o("WAWebWidFactory").asBotWidOrThrow(m);
                                const f = o("WAWebAiThreadCreationUtils").createAiThreadFromMutationIndex(_, d);
                                a.push({
                                    threadId: f,
                                    timestamp: o("WALongInt").numberOrThrowIfTooLarge(c.timestamp ?? 0),
                                    isOrphan: true
                                });
                            }
                        }
                    } catch (t) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd][ai-thread-pin] failed to parse orphan sync action row"
                        ])));
                        continue;
                    }
                }
            }
            return a;
        });
        return p.apply(this, arguments);
    }
    l.updatePinState = u;
    l.getLocalThreadPins = c;
}, 98);