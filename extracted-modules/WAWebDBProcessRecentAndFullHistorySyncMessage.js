__d("WAWebDBProcessRecentAndFullHistorySyncMessage", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebApiChatUnreadMention",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebApiGroupInviteV4Store",
    "WAWebBackendApi",
    "WAWebBulkCreateOrUpdateThreadsMetadata",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBStoreEncryptedMsgs",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProcessMessageAssociationMessages",
    "WAWebProtobufsHistorySync.pb",
    "WAWebQuarantineDataStore",
    "WAWebThreadCommonModelUtils",
    "WAWebThreadUtils",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsTypes",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(e, t) {
        const n = new Map;
        e.forEach((e, r)=>{
            e.forEach((e)=>{
                const a = t.get(r) ?? 0;
                if (a > 0) {
                    t.set(r, a - 1);
                    const i = {
                        id: e.id.toString(),
                        timestamp: e.t
                    };
                    if (n.has(r)) {
                        n.get(r)?.push(i);
                    } else {
                        n.set(r, [
                            i
                        ]);
                    }
                }
            });
        });
        return n;
    }
    const f = 10080 * 60;
    function g(t, n) {
        const a = o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.cast(n);
        if (!(a !== o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT && a !== o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.FULL) && r("justknobx")._("5144")) {
            try {
                const i = o("WATimeUtils").unixTime();
                const l = new Map;
                const s = new Map;
                for (const u of t){
                    const { ack: c, id: d, t: m } = u;
                    if (!(d.fromMe !== true || !r("WAWebWid").isUser(d.remote) || c == null || m == null || i - m <= f)) {
                        const p = d.remote.toString();
                        if (c >= o("WAWebAck").ACK.READ) {
                            const _ = s.get(p);
                            if (_ == null || m > _.t) {
                                s.set(p, {
                                    ack: c,
                                    fullKey: d.toString(),
                                    t: m,
                                    wireId: d.id
                                });
                            }
                        } else if (c >= o("WAWebAck").ACK.SENT) {
                            const g = l.get(p);
                            if (g == null || m < g.t) {
                                l.set(p, {
                                    ack: c,
                                    fullKey: d.toString(),
                                    t: m,
                                    wireId: d.id
                                });
                            }
                        }
                    }
                }
                const h = [];
                s.forEach((e, t)=>{
                    const n = l.get(t);
                    if (n != null && n.t < e.t) {
                        h.push({
                            chatId: t,
                            read: e,
                            unread: n
                        });
                    }
                });
                if (h.length === 0) {
                    return;
                }
                const y = h[0];
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] recent/full-sync 1:1 own read-after-unread inversion in ",
                    " chat(s); sample: readAck=",
                    " readAgeDays=",
                    " unreadAck=",
                    " unreadAgeDays=",
                    " readWireId=",
                    " unreadWireId=",
                    ""
                ])), h.length, y.read.ack, Math.floor((i - y.read.t) / 86400), y.unread.ack, Math.floor((i - y.unread.t) / 86400), y.read.wireId, y.unread.wireId).sendLogs("history-sync-1x1-own-read-after-unread", {
                    sampling: 0.01
                });
            } catch (e) {}
        }
    }
    function h(e, t, n, r, o, a, i) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a, i, l, u) {
            g(e, r);
            let c = e;
            let d;
            let m;
            if (i.length) {
                let f;
                m = o("WAWebProcessMessageAssociationMessages").classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(i, l);
                if ((f = m) != null && f.validAssociatedMsgs) {
                    d = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(m?.validAssociatedMsgs);
                }
            }
            try {
                const y = yield o("WAWebApiFilterAndReplaceMessages").filterAndReplaceMessages(e, d);
                const b = y.newMsgs;
                c = b;
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "filterAndReplaceMessages failed with error ",
                    ""
                ])), e).tags("history-sync");
            }
            const S = new Map;
            const R = [];
            c.forEach((e)=>{
                if (e.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) {
                    R.push(o("WAWebApiGroupInviteV4Store").persistGroupInviteV4Msg(e.id.toString(), {
                        id: e.id.toString(),
                        from: e.from.toString(),
                        to: e.to.toString(),
                        groupId: e.inviteGrp,
                        expiration: parseInt(e.inviteCodeExp, 10),
                        expired: o("WATimeUtils").unixTime() >= parseInt(e.inviteCodeExp, 10)
                    }));
                }
                const t = e.id.remote.toString();
                if (o("WAWebMsgGetters").getIsImportantMessage(e)) {
                    if (S.has(t)) {
                        S.get(t)?.push(e);
                    } else {
                        S.set(t, [
                            e
                        ]);
                    }
                }
            });
            if (R.length > 0) {
                yield (p || (p = n("Promise"))).all(R);
            }
            const L = Array.from(S.keys());
            const E = yield o("WAWebBackendApi").frontendSendAndReceive("getPendingUnreadMentionCounts", {
                chatIds: L
            });
            const k = _(S, E);
            const I = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(c);
            const T = yield o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(c, true);
            o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(r, o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.ENCRYPTED, a);
            yield C({
                chatsWithRecentOrFullSyncMsgs: t,
                encryptedMessages: T,
                pendingUnreadMentionsMap: E,
                quarantineTableEntries: I,
                unreadMentionsToAdd: k
            });
            yield v(u);
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatsWithRecentOrFullSyncMsgs: t, encryptedMessages: n, pendingUnreadMentionsMap: r, quarantineTableEntries: a, unreadMentionsToAdd: i }) {
            try {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "storeEncryptedRecentAndFullSyncMsgs: storing ",
                    " msgs: start"
                ])), n.length);
                yield o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(n, t, true);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "storeEncryptedRecentAndFullSyncMsgs: storing ",
                    " messages: done"
                ])), n.length);
                yield o("WAWebQuarantineDataStore").bulkCreateOrReplaceQuarantineData(a);
                if (i.size > 0) {
                    const l = yield o("WAWebBackendApi").frontendSendAndReceive("getChatIdsNeedToBeDeletedFromUnreadMentionInfo", {
                        unreadMentionsToAdd: i,
                        pendingUnreadMentionsMap: r
                    });
                    l.forEach((e)=>{
                        i.delete(e);
                    });
                    if (i.size > 0) {
                        o("WAWebApiChatUnreadMention").addUnreadMentionChat(i, r);
                    }
                }
            } catch (e) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] error storing ",
                    " recent or full sync messages: ",
                    ""
                ])), n.length, e);
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                try {
                    const t = o("WAWebThreadCommonModelUtils").getAggregatedThreadDetailUpdatesFromMessages(e);
                    yield o("WAWebBulkCreateOrUpdateThreadsMetadata").bulkCreateOrUpdateThreadsMetadata(t);
                    const n = t.filter((e)=>e.threadId.type === o("WAWebThreadUtils").ThreadType.AiThread);
                    if (n.length > 0) {
                        yield o("WAWebBackendApi").frontendSendAndReceive("updateChatAiThreads", {
                            aiThreads: n
                        });
                    }
                } catch (e) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "storeThreadMetadataFromHistorySyncMessages: store failed: ",
                        ""
                    ])), e).sendLogs("failed-to-store-thread-metadata-from-history-sync-messages");
                }
            }
        });
        return S.apply(this, arguments);
    }
    l.storeRecentAndFullHistSyncMessages = h;
}, 98);