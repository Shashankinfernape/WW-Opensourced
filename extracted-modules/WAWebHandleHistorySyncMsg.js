__d("WAWebHandleHistorySyncMsg", [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebAddonProcessMsgs",
    "WAWebBackendErrors",
    "WAWebCallsOnlyGating",
    "WAWebCheckUpdateOrphanReactions",
    "WAWebDBDrainBotOrphansForHistoryMsgs",
    "WAWebDBProcessRecentAndFullHistorySyncMessage",
    "WAWebNoop",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ associatedMsgs: a, chatsWithRecentOrFullSyncMsgs: i, chunkOrder: l, lastMsgs: d, missingParentsCache: m, recentOrFullSyncMsgs: p, syncType: _, threadMsgs: f, unifiedAddons: g }) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] handling recent/full/on-demand sync msgs"
            ])));
            if (!o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()) {
                yield (c || (c = n("Promise"))).resolve();
                return o("WAWebDBProcessRecentAndFullHistorySyncMessage").storeRecentAndFullHistSyncMessages(p, i, _, l, a, m, f).then(()=>{
                    const e = i.map((e)=>e);
                    const t = p.map((e)=>e.id.toString());
                    o("WAWebCheckUpdateOrphanReactions").checkUpdateForOrphanReactions(t).catch((e)=>{
                        const t = r("getErrorSafe")(e);
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] error occurred"
                        ]))).catching(t).sendLogs("handleProgressiveHistorySyncMsgs: error checking orphan reactions");
                    });
                    const n = f.flatMap((e)=>(e.threadIds ?? []).map((e)=>e.toString()));
                    return o("WAWebSyncdOrphanWorkerCompatible").checkOrphanMutations(t, e, n);
                }).then(()=>o("WAWebDBDrainBotOrphansForHistoryMsgs").drainBotOrphansForHistoryMsgs(p)).then(()=>(c || (c = n("Promise"))).all(g).then((e)=>o("WAWebAddonProcessMsgs").processHistoryMsgs([].concat(...e)))).then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    for (const e of d){
                        if (!e || !e.id || !e.id.remote) {
                            return;
                        }
                        const t = e.id.remote;
                        if (t.isNewsletter()) {
                            return;
                        }
                        yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("processLastMsgs", {
                            chatId: t,
                            msgObjs: [
                                e
                            ],
                            meta: {
                                add: "last",
                                isHistory: true
                            },
                            processMessagesOrigin: "historyMsgHandlerAction",
                            chatMsgsCollection: null
                        });
                    }
                })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").LogoutDrop, r("WAWebNoop"))).catch((e)=>{
                    const t = r("getErrorSafe")(e);
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] error occurred"
                    ]))).catching(t).sendLogs("handleProgressiveHistorySyncMsgs: error storing/processing multiple messages");
                });
            }
        });
        return m.apply(this, arguments);
    }
    l.handleProgressiveHistorySyncMsgs = d;
}, 98);