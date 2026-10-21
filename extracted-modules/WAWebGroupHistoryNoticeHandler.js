__d("WAWebGroupHistoryNoticeHandler", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebPersistAndSyncGroupHistoryToggle",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE && o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderPrerequisitesEnabled()) {
                const n = t.groupHistoryBundleMetadata;
                if (n != null) {
                    const r = n.historyReceivers;
                    if (r.length !== 0) {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history][M2] notice rcvd, ",
                            " receivers"
                        ])), r.length);
                        yield c(t.id.remote, r);
                        if (t.id.fromMe === true && o("WAWebGroupHistoryGating").isGroupHistorySendOnceDefaultOnEnabled()) {
                            yield o("WAWebPersistAndSyncGroupHistoryToggle").persistAndSyncGroupHistoryToggle(t.id.remote, true);
                            o("WAWebBackendApi").frontendFireAndForget("updateGroupMetadataModelForShareHistoryDefault", {
                                group: t.id.remote,
                                shouldDefaultGroupHistoryShareOn: true
                            });
                        }
                    }
                }
            }
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield m(e, t, o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.NOTICE_SENT);
        });
        return d.apply(this, arguments);
    }
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            if (t.length !== 0) {
                let a;
                try {
                    a = o("WAWebWidToJid").widToGroupJid(e);
                } catch (e) {
                    return;
                }
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    "group-history-participant"
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([i]) {
                        const l = yield i.get(a);
                        const s = l?.participantMetadataMap ?? new Map;
                        for (const u of t){
                            const d = o("WAWebLidMigrationUtils").toUserLid(u);
                            if (d != null) {
                                const m = o("WAWebWidToJid").userLidtoLidUserJid(d);
                                const p = s.get(m);
                                s.set(m, {
                                    joinTime: p?.joinTime ?? null,
                                    groupHistorySentState: r
                                });
                            }
                        }
                        yield i.createOrMerge(a, {
                            chatId: a,
                            participantMetadataMap: s
                        });
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
                o("WAWebBackendApi").frontendFireAndForget("updateParticipantsGroupHistorySentState", {
                    group: e,
                    receiverIds: t,
                    state: r
                });
            }
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.length === 0) {
                return true;
            }
            let r;
            try {
                r = o("WAWebWidToJid").widToGroupJid(e);
            } catch (e) {
                return false;
            }
            return o("WAWebModelStorageUtils").getStorage().lock([
                "group-history-participant"
            ], (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                    const a = yield n.get(r);
                    const i = a?.participantMetadataMap;
                    if (i == null) {
                        return false;
                    }
                    for (const l of t){
                        const u = o("WAWebLidMigrationUtils").toUserLid(l);
                        if (u == null) {
                            return false;
                        }
                        const c = o("WAWebWidToJid").userLidtoLidUserJid(u);
                        const d = i.get(c)?.groupHistorySentState;
                        if (d !== o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.NOTICE_SENT && d !== o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.HISTORY_SENT) {
                            return false;
                        }
                    }
                    return true;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        });
        return f.apply(this, arguments);
    }
    l.maybeHandleGroupHistoryNotice = s;
    l.markGroupHistoryNoticeSent = c;
    l.setGroupHistorySentStateForReceivers = m;
    l.areAllReceiversNoticeSent = _;
}, 98);