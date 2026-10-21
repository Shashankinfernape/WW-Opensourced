__d("WAWebRestoreGroupParticipantsAction", [
    "Promise",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebDBParticipantTypes",
    "WAWebGroupMetadataCollection",
    "WAWebGroupParticipantModel",
    "WAWebGroupQueryBridge",
    "WAWebSchemaParticipant",
    "WAWebWamGroupMetricCache",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        e.forEach((e)=>{
            const t = r("WAWebGroupMetadataCollection").get(e);
            if (t != null && t.participantQueryPromise == null) {
                t.stale = true;
            }
        });
        return m(e);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = new Map;
            let i = 0;
            t.forEach((e)=>{
                const t = r("WAWebGroupMetadataCollection").get(e);
                if (!t || t.participantQueryPromise || !t.stale) {
                    i++;
                    return;
                }
                t.participantQueryPromise = new (c || (c = n("Promise")))(function(t) {
                    a.set(e, t);
                });
            });
            if (i > 0) {
                const l = t.filter((e)=>{
                    const t = r("WAWebGroupMetadataCollection").get(e);
                    return !t || t.participantQueryPromise || !t.stale;
                }).slice(0, 3);
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[init-from-storage]: restoreGroupParticipantsForChats: skipped ",
                    " chats => ",
                    ""
                ])), i, l);
            }
            const d = Array.from(a.keys());
            try {
                const m = yield o("WAWebSchemaParticipant").getParticipantTable().bulkGet(d);
                const p = [];
                let _ = 0;
                const f = [];
                let g = 0;
                m.forEach((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                        let n;
                        const i = r("WAWebGroupMetadataCollection").get(d[t]);
                        const l = !!((n = o("WAWebChatCollection").ChatCollection.get(d[t])) != null && n.isReadOnly);
                        if (i) {
                            try {
                                let c = [];
                                let m = [];
                                if (e == null || e.deviceSyncComplete != null && !e.deviceSyncComplete || e.staleType === o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT) {
                                    if (l) {
                                        g++;
                                        if (f.length < 3) {
                                            f.push(d[t]);
                                        }
                                    } else {
                                        _++;
                                        if (p.length < 3) {
                                            p.push(d[t]);
                                        }
                                        const y = yield o("WAWebGroupQueryBridge").sendQueryGroup(o("WAWebWidFactory").createWid(d[t]));
                                        c = (y?.participants ?? []).map(({ id, isAdmin, isSuperAdmin })=>new (r("WAWebGroupParticipantModel"))({
                                                id,
                                                isAdmin,
                                                isSuperAdmin
                                            }));
                                    }
                                } else {
                                    const v = new Set(e.admins);
                                    const S = e.superAdmins != null ? new Set(e.superAdmins) : undefined;
                                    c = e.participants?.map(function(e) {
                                        let t;
                                        if (S === undefined) {
                                            t = i.owner?.toString() === e;
                                        } else {
                                            t = S.has(e);
                                        }
                                        const a = o("WAWebWidFactory").createUserWidOrThrow(e);
                                        if (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(a)) {
                                            i.isOpenBotGroup = true;
                                        }
                                        if (o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(a)) {
                                            i.isTeeBotGroup = true;
                                        }
                                        return new (r("WAWebGroupParticipantModel"))({
                                            id: a,
                                            isAdmin: v.has(e),
                                            isSuperAdmin: t
                                        });
                                    }) ?? [];
                                }
                                m = e?.pastParticipants?.map(function({ jid, leaveReason, leaveTs }) {
                                    return new (r("WAWebGroupParticipantModel"))({
                                        id: o("WAWebWidFactory").createWid(jid),
                                        leaveTs,
                                        leaveReason
                                    });
                                }) ?? [];
                                i.participants.add(c, {
                                    merge: true
                                });
                                i.pastParticipants.add(m, {
                                    merge: true
                                });
                                i.stale = false;
                                i.deviceStale = e?.staleType === o("WAWebDBParticipantTypes").STALE_TYPES.DEVICE;
                                if (e != null) {
                                    o("WAWebWamGroupMetricCache").cacheGroupMetrics(e);
                                }
                            } finally{
                                const R = a.get(d[t]);
                                R?.();
                                i.participantQueryPromise = null;
                            }
                        }
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                })());
                if (_ > 0) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[init-from-storage]: restoreGroupParticipantsForChats: synced stale participants for ",
                        " chats => ",
                        ""
                    ])), _, p);
                }
                if (g > 0) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[init-from-storage]: restoreGroupParticipantsForChats: skipped sync stale participant for ",
                        " read only chats => ",
                        ""
                    ])), g, f);
                }
            } catch (e) {
                d.forEach((e)=>{
                    const t = a.get(e);
                    t?.();
                    const n = r("WAWebGroupMetadataCollection").get(e);
                    if (n) {
                        n.participantQueryPromise = null;
                    }
                });
                return;
            }
        });
        return p.apply(this, arguments);
    }
    l.resyncGroupParticipantsForChats = d;
    l.restoreGroupParticipantsForChats = m;
}, 98);