__d("WAWebAdvUpdateParticipantApi", [
    "WAJids",
    "WALogger",
    "WAWeb-dexie",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebPostSenderKeyExpiredMetric",
    "WAWebSchemaParticipant",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumExpiryReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
            let a;
            try {
                a = yield o("WAWebSchemaParticipant").getParticipantTable().equals([
                    "participants"
                ], String(t));
            } catch (error) {
                if (String(error).includes("Failed to read large IndexedDB value")) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "updateGroupParticipantsInTransaction: error: ",
                        ""
                    ])), error).sendLogs("indexeddb-participant-read-large-value");
                }
                throw error;
            }
            const i = yield f(a, "updateGroupParticipantsInTransaction", function() {
                return o("WAWebSchemaParticipant").getParticipantTable().equalsPrimaryKeys([
                    "participants"
                ], String(t));
            });
            const l = i.map((e)=>{
                let e_rotateKey = e.rotateKey;
                const i = new Map(e.senderKey);
                r.forEach((e)=>{
                    const r = String(o("WAWebWidFactory").createDeviceWidFromUserAndDevice(t.user, t.server, e));
                    e_rotateKey = e_rotateKey || (i.get(r) ?? false);
                    i.delete(r);
                });
                if (e_rotateKey) {
                    i.forEach((e, t)=>i.set(t, false));
                }
                n.forEach((e)=>{
                    i.set(String(o("WAWebWidFactory").createDeviceWidFromUserAndDevice(t.user, t.server, e)), false);
                });
                v({
                    added: n,
                    oldRecord: e,
                    removed: r,
                    rotateKey: e_rotateKey,
                    wid: t
                });
                return babelHelpers.extends({}, e, {
                    senderKey: i,
                    rotateKey: e_rotateKey
                });
            });
            return o("WAWebSchemaParticipant").getParticipantTable().bulkCreateOrReplace(l);
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                let t;
                try {
                    t = yield o("WAWebSchemaParticipant").getParticipantTable().anyOf([
                        "participants"
                    ], e.map((e)=>String(e.wid)));
                } catch (error) {
                    if (String(error).includes("Failed to read large IndexedDB value")) {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "bulkUpdateGroupParticipantsInTransaction: error: ",
                            ""
                        ])), error).sendLogs("indexeddb-participant-bulk-read-large-value");
                    }
                    throw error;
                }
                const n = yield f(t, "bulkUpdateGroupParticipantsInTransaction", function() {
                    return o("WAWebSchemaParticipant").getParticipantTable().anyOfPrimaryKeys([
                        "participants"
                    ], e.map((e)=>String(e.wid)));
                });
                if (n.length !== 0) {
                    const r = new Map;
                    e.forEach((e)=>{
                        r.set(String(e.wid), e);
                    });
                    const a = n.map((e)=>{
                        let e_rotateKey = e.rotateKey;
                        const n = new Map(e.senderKey);
                        e.participants.forEach((a)=>{
                            const i = r.get(a);
                            if (i) {
                                const { added, removed, wid } = i;
                                removed.forEach((e)=>{
                                    const a = String(o("WAWebWidFactory").createDeviceWidFromUserAndDevice(i.wid.user, i.wid.server, e));
                                    e_rotateKey = e_rotateKey || (n.get(a) ?? false);
                                    n.delete(a);
                                });
                                if (e_rotateKey) {
                                    n.forEach((e, t)=>n.set(t, false));
                                }
                                added.forEach((e)=>{
                                    n.set(String(o("WAWebWidFactory").createDeviceWidFromUserAndDevice(i.wid.user, i.wid.server, e)), false);
                                });
                                v({
                                    added,
                                    oldRecord: e,
                                    removed,
                                    rotateKey: e_rotateKey,
                                    wid
                                });
                            }
                        });
                        return babelHelpers.extends({}, e, {
                            senderKey: n,
                            rotateKey: e_rotateKey
                        });
                    });
                    return o("WAWebSchemaParticipant").getParticipantTable().bulkCreateOrReplace(a);
                }
            }
        });
        return _.apply(this, arguments);
    }
    function f(e, t, n) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = e.filter(Boolean);
            if (a.length === e.length) {
                return a;
            }
            const i = yield h(a, n);
            const { summary, unreadableGroupIds } = i;
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ": participant query dropped ",
                " null records out of ",
                ", ",
                ""
            ])), t, e.length - a.length, e.length, summary).sendLogs("participant-query-null-record");
            if (unreadableGroupIds.length > 0 && o("WAWebABProps").getABPropConfigValue("web_resync_unreadable_participant_rows")) {
                r("WAWeb-dexie").ignoreTransaction(function() {
                    return C(unreadableGroupIds);
                });
            }
            return a;
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = new Set(e.map((e)=>String(e.groupId)));
                const r = yield t();
                const a = r.filter((e)=>!n.has(e));
                const i = yield o("WAWebSchemaParticipant").getParticipantTable().bulkGet(a);
                const unreadableGroupIds = a.filter((e, t)=>i[t] == null);
                return {
                    summary: `primary keys: ${r.length}, missing: ${a.length}, unreadable by primary key: ${unreadableGroupIds.length}`,
                    unreadableGroupIds
                };
            } catch (error) {
                return {
                    summary: `diagnostics failed: ${String(error)}`,
                    unreadableGroupIds: []
                };
            }
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(chatIds) {
            try {
                yield o("WAWebSchemaParticipant").getParticipantTable().bulkRemove(chatIds);
                o("WAWebBackendApi").frontendFireAndForget("resyncGroupParticipantsForChats", {
                    chatIds
                });
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "removeAndResyncGroups: removing ",
                    " unreadable participant records failed"
                ])), chatIds.length).catching(r("getErrorSafe")(error)).sendLogs("participant-unreadable-record-recovery-failed");
            }
        });
        return b.apply(this, arguments);
    }
    function v({ added, oldRecord, removed, rotateKey, wid }) {
        if (rotateKey && !oldRecord.rotateKey) {
            let expiryReason;
            if (removed.includes(o("WAJids").DEFAULT_DEVICE_ID) && added.includes(o("WAJids").DEFAULT_DEVICE_ID)) {
                expiryReason = o("WAWebWamEnumExpiryReason").EXPIRY_REASON.IDENTITY_CHANGE;
            } else if (o("WAWebUserPrefsMeUser").isMeAccount(wid)) {
                expiryReason = o("WAWebWamEnumExpiryReason").EXPIRY_REASON.PEER_COMPANION_UNPAIR;
            } else {
                expiryReason = o("WAWebWamEnumExpiryReason").EXPIRY_REASON.OTHER_DEVICE_UNPAIR;
            }
            o("WAWebPostSenderKeyExpiredMetric").postSenderKeyExpiredMetric({
                chatId: oldRecord.groupId,
                deviceCount: oldRecord.senderKey.size,
                expiryReason
            });
        }
    }
    l.updateGroupParticipantsInTransaction = d;
    l.bulkUpdateGroupParticipantsInTransaction = p;
}, 98);