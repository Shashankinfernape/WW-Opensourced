__d("WAWebQueryAndUpdateGroupMetadataJob", [
    "Promise",
    "WALogger",
    "WAPromiseEach",
    "WATimeUtils",
    "WAWebApiChat",
    "WAWebApiChatCommon",
    "WAWebApiParticipantStore",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebBotGroupBackendUtils",
    "WAWebChatConstants",
    "WAWebGroupDatabaseJob",
    "WAWebGroupQueryJob",
    "WAWebGroupSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidMappingUsernameLearnUtils",
    "WAWebPhashUtils",
    "WAWebQueryAndUpdateSubgroupSuggestionsJob",
    "WAWebReleaseToEventLoop",
    "WAWebSchemaChat",
    "WAWebUserPrefsModelStorage",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
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
    const C = 50000;
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ batchQueryArgs: n, isHistorySyncInProgress: r }) {
            try {
                let l;
                if (n?.groupJids != null) {
                    const { groupJids: c, queryContext: d } = n;
                    l = yield o("WAWebGroupQueryJob").queryGroupsById_DO_NOT_USE_DIRECTLY(c, d);
                } else {
                    l = yield o("WAWebGroupQueryJob").queryAllGroups();
                }
                if (l == null || l.length === 0) {
                    return;
                }
                o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.GroupSync);
                const m = [];
                const p = [];
                l.forEach((e)=>{
                    if (e.truncated) {
                        p.push(e);
                    } else {
                        m.push(e);
                    }
                });
                const _ = n?.queryContext ?? "get_participating_groups";
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-info] query context => #",
                    ""
                ])), _);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-info] #",
                    " non-truncated responses found"
                ])), m.length);
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-info] #",
                    " truncated responses found"
                ])), p.length);
                yield L(m, r);
                yield S(p, n?.queryContext ?? "get_participating_groups_paginated", r);
            } finally{
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.GroupSync);
            }
        });
        return v.apply(this, arguments);
    }
    function S(e, t, n) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            if (e.length !== 0) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-info] processing truncated responses"
                ])));
                const a = [
                    []
                ];
                let i = 0;
                e.forEach((e)=>{
                    const t = o("WAWebWidToJid").widToGroupJid(o("WAWebWidFactory").createWid(`${e.id}@g.us`));
                    const n = e.size;
                    if (i + n > C && i > 0) {
                        a.push([]);
                        i = 0;
                    }
                    a[a.length - 1].push(t);
                    i += n;
                });
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-info] #",
                    " batches created"
                ])), a.length);
                let l = 0;
                yield o("WAPromiseEach").promiseEach(a, (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            const n = yield o("WAWebGroupQueryJob").queryGroupsById_DO_NOT_USE_DIRECTLY(e, t);
                            if (n) {
                                yield L(n.filter((e)=>e.truncated == null), r);
                                const a = n.find((e)=>e.truncated != null);
                                if (a != null) {
                                    l++;
                                }
                            }
                        } catch (e) {
                            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                "[group-info] batch query failed for truncated group ",
                                ""
                            ])), e).sendLogs("failed-to-query-batch-group-info");
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-info] processed ",
                    " batches"
                ])), a.length);
                if (l > 0) {
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[batch-get-group-info] ",
                        " unexpected truncated responses found"
                    ])), l).sendLogs("unexpected-truncated-response-found", {
                        sampling: 0.1
                    });
                }
            }
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.length !== 0) {
                const r = yield o("WAWebApiParticipantStore").injectPastParticipantsFromDB(e);
                const a = yield o("WAWebBotGroupBackendUtils").injectBotParticipantState(r);
                const i = yield o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB(a);
                const l = [];
                const s = [];
                yield o("WAPromiseEach").promiseEach(i, (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        o("WAWebBackendApi").frontendFireAndForget("createOrUpdateGroupMetadataFromQuery", {
                            groupInfo: e
                        });
                        if (t) {
                            T(e);
                        }
                        l.push(o("WAWebGroupQueryJob").maybeQueryAndUpdateMembershipApprovalRequests(e));
                        yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
                yield o("WAWebLidMappingUsernameLearnUtils").processParsedGroupInfosForLidMappingAndUsernames(i);
                yield o("WAWebGroupDatabaseJob").updateGroupMetadataTableJob(i);
                yield o("WAWebGroupDatabaseJob").updateGroupParticipantTableWithoutDeviceSyncJob(i);
                if (t) {
                    yield k(i);
                }
                i.forEach((e)=>{
                    s.push(o("WAWebQueryAndUpdateSubgroupSuggestionsJob").maybeQueryAndUpdateSubgroupSuggestions(e));
                });
                yield (y || (y = n("Promise"))).all(l);
            }
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "Start updateGroupEndOfHistorySyncFlag"
            ]))).tags("history-sync", "groups");
            const t = o("WAWebUserPrefsModelStorage").getInitialGroupPhashMap();
            const n = [];
            for (const a of e){
                const i = yield o("WAWebApiChatCommon").getChatRecord(a.id);
                if (!i) {
                    const l = t?.[a.id.toString()];
                    if (l == null) {
                        n.push({
                            unreadCount: 0,
                            muteExpiration: 0,
                            isAutoMuted: false,
                            id: a.id,
                            endOfHistoryTransferType: o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.NOT_INCLUDED_IN_HIST_SYNC
                        });
                    }
                }
            }
            yield o("WAWebBackendApi").frontendSendAndReceive("chatCollectionAdd", {
                things: n,
                options: {
                    merge: true
                }
            });
            yield o("WAWebSchemaChat").getChatTable().bulkCreate(n.map(({ endOfHistoryTransferType: t, id: n })=>{
                const r = {
                    endOfHistoryTransferType: t,
                    id: n.toString(),
                    unreadCount: 0,
                    muteExpiration: 0,
                    isAutoMuted: false
                };
                return r;
            })).catch((e)=>{
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-info] chat create failed for unsynced group"
                ]))).catching(r("getErrorSafe")(e)).tags("history-sync", "groups");
            });
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "Completed updateGroupEndOfHistorySyncFlag"
            ]))).tags("history-sync", "groups");
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebUserPrefsModelStorage").getInitialGroupPhash(e.id.toString());
            if (t != null) {
                const n = yield o("WAWebPhashUtils").phashV1(e.participants.map((e)=>e.id));
                const r = n.substring(2);
                if (t != null && t !== n && t !== r && e.defaultSubgroup !== true) {
                    o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                        chatId: e.id,
                        newMsg: o("WAWebGroupSystemMsg").genInitialPhashMismatchMsg(e.id, o("WATimeUtils").unixTime()),
                        handleSingleMsgOrigin: "pHashMismatchMsg"
                    });
                }
            }
        });
        return D.apply(this, arguments);
    }
    l.queryAndUpdateAllGroupMetadata = b;
}, 98);