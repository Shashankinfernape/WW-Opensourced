__d("WAWebPollsUpsertVotesModelCollectionMsgAction", [
    "WAAbortError",
    "WAAckLevel",
    "WALogger",
    "WAWebAddonGatingUtils",
    "WAWebAddonHydrationUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMaxPerGroup",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNotificationBackend",
    "WAWebNotificationHelpers",
    "WAWebPollsGetVoteKey",
    "WAWebPollsPollVoteCollection",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "compactMap",
    "uniqueBy"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = [
        "unresolvedOptionHashes"
    ];
    function m(t, a, i = true) {
        const l = o("WAWebMaxPerGroup").maxPerGroup(t, function(e) {
            return e.senderTimestampMs;
        }, o("WAWebPollsGetVoteKey").getVoteKey);
        const m = r("compactMap")(a || [], function(e) {
            return o("WAWebPollsPollVoteCollection").PollVoteCollection.getByMsgKey(e);
        });
        const p = [];
        for (const _ of l){
            const f = o("WAWebPollsPollVoteCollection").PollVoteCollection.getForParentAddressingModeInsensitive([
                _.parentMsgKey
            ]);
            const g = f[0];
            const h = g.getVoteFromSenderAddressingModeInsensitive(_.sender);
            if (h != null && (h.senderTimestampMs > _.senderTimestampMs || h.msgKey.equals(_.msgKey))) {
                if (o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(o("WAWebMsgType").MSG_TYPE.POLL_UPDATE) && h.ack !== _.ack) {
                    h.ack = _.ack;
                    h.isSendFailure = _.ack === o("WAAckLevel").ACK.FAILED;
                }
                if (_.ack != null && _.ack >= o("WAAckLevel").ACK.SENT) {
                    h.lastSuccessfulSelectedOptionLocalIds = _.selectedOptionLocalIds;
                }
                continue;
            }
            if (h != null) {
                m.push(h);
            }
            let lastSuccessfulSelectedOptionLocalIds = _.lastSuccessfulSelectedOptionLocalIds;
            if (h != null) {
                if (h.ack != null && h.ack >= o("WAAckLevel").ACK.SENT) {
                    lastSuccessfulSelectedOptionLocalIds = h.selectedOptionLocalIds;
                } else if (h.lastSuccessfulSelectedOptionLocalIds != null) {
                    lastSuccessfulSelectedOptionLocalIds = h.lastSuccessfulSelectedOptionLocalIds;
                }
            }
            const C = _.unresolvedOptionHashes;
            const b = babelHelpers.objectWithoutPropertiesLoose(_, d);
            p.push(o("WAWebPollsPollVoteCollection").createPollVoteModel(babelHelpers.extends({}, b, {
                lastSuccessfulSelectedOptionLocalIds,
                isSendFailure: i && _.ack === o("WAAckLevel").ACK.CLOCK && o("WAWebUserPrefsMeUser").isMeAccount(_.sender)
            })));
        }
        if (p.length > 0) {
            o("WAWebPollsPollVoteCollection").PollVoteCollection.add(p);
        }
        if (m.length > 0) {
            o("WAWebPollsPollVoteCollection").PollVoteCollection.remove(m);
        }
        n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!(i || o("WAWebNotificationHelpers").isOfflineResumeInProgress())) {
                const ids = r("uniqueBy")(t.filter((e)=>!o("WAWebUserPrefsMeUser").isMeAccount(e.sender)).map((e)=>e.parentMsgKey), String);
                const a = [];
                const l = yield o("WAWebMsgCollection").MsgCollection.hydrateOrGetMessages(Array.from(ids, String));
                let c = 0;
                let d = 0;
                const m = [];
                const p = function*(n) {
                    if (!o("WAWebMsgGetters").getIsSentByMe(n)) {
                        return 1;
                    }
                    let e = o("WAWebFrontendMsgGetters").getAsPollCreation(n);
                    if (e == null && n.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
                        c++;
                        const r = yield o("WAWebMsgCollection").MsgCollection.getMessagesById([
                            n.id.toString()
                        ]);
                        const i = r.messages;
                        e = o("WAWebFrontendMsgGetters").getAsPollCreation(i[0]);
                    }
                    if (e == null) {
                        const msgVoteKeys = t.filter((e)=>e.parentMsgKey.equals(n.id)).map((e)=>e.msgKey.toString()).join(", ");
                        d++;
                        m.push({
                            msgId: n.id.toString(),
                            msgType: n.type,
                            msgVoteKeys
                        });
                    } else {
                        a.push(e);
                    }
                };
                for (const _ of l){
                    yield* p(_);
                }
                if (c > 0) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "rehydrated ",
                        " poll create msgs from the db"
                    ])), c);
                }
                if (d > 0) {
                    const f = m.slice(0, 3);
                    const g = f.map((e)=>`Msg ${e.msgId} (type: ${e.msgType}), votes ${e.msgVoteKeys}`).join("; ");
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[upsertVotes][notif] ",
                        " msgs not pollCreation, samples: ",
                        ""
                    ])), d, g).sendLogs("msgs-not-poll-creation-msg");
                }
                yield o("WAWebAddonHydrationUtils").hydrateAddons({
                    ids,
                    hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE
                });
                for (const h of a){
                    const y = o("WAWebPollsPollVoteCollection").PollVoteCollection.getForParentAddressingModeInsensitive([
                        h.id
                    ]);
                    const C = y[0];
                    if (C.getUnreadCount() > 0) {
                        o("WAWebNotificationBackend").showPollVoteNotification(h).catch(o("WAAbortError").catchAbort(function(e) {
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[Polls] Aborted notification ",
                                ""
                            ])), e);
                        }));
                    }
                }
            }
        })().catch((e)=>o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[upsertVotes][notif] failed to show poll vote notifications: ",
                ""
            ])), e));
    }
    l.upsertVotesModelCollection = m;
}, 98);