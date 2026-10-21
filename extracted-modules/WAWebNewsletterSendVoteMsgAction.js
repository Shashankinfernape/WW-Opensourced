__d("WAWebNewsletterSendVoteMsgAction", [
    "WAAckLevel",
    "WALogger",
    "WATimeUtils",
    "WAWebCRUDOperationsNewsletterMyVotes",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebNewsletterSendMessageJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterValidationUtils",
    "WAWebPollOptionHashUtils",
    "WAWebPollsActionsMetricUtils",
    "WAWebPollsCreateOptionLocalIdMap",
    "WAWebSchemaMessage",
    "WAWebSendMsgResultAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumPollActionType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = o("WAWebMsgCollection").MsgCollection.get(e.id)?.safe();
            if (n == null) {
                return o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED;
            }
            const e_myVote = e.myVote;
            if (n.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
                return o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED;
            }
            return d(n, e_myVote, e.msgKey);
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, selectedOptionLocalIds, r) {
            const a = o("WAWebFrontendMsgGetters").getChat(t.unsafe());
            const newsletterJid = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(a.id.toJid());
            const l = yield o("WAWebPollsCreateOptionLocalIdMap").createOptionLocalIdMap(t.pollOptions);
            const votes = Array.from(selectedOptionLocalIds, function(e) {
                return new Uint8Array(l.getHashForLocalId(e));
            });
            const c = t.unsafe();
            const c_serverId = c.serverId;
            if (c_serverId == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-polls] Message missing serverId"
                ])));
                return o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED;
            }
            const m = c.id;
            const _ = o("WATimeUtils").castToMillisTime(o("WATimeUtils").unixTimeMs());
            const g = yield p({
                to: a.id,
                selectedOptionLocalIds,
                parentMsgKey: m,
                timestampMs: _,
                from: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                msgKey: r
            });
            const h = new (o("WAWebMsgModel")).Msg(g);
            const y = yield o("WAWebCRUDOperationsNewsletterMyVotes").getMyVote(a.id.toJid(), c_serverId);
            const C = o("WAWebNewsletterPollVotesModelCollection").updateOrCreatePollVote({
                msgKey: g.id,
                parentMsgKey: m,
                selectedOptionLocalIds,
                timestamp: _
            });
            yield o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.updateChatPreviewFromVote({
                voteMsgObj: {
                    ack: g.ack,
                    senderTimestampMs: g.senderTimestampMs,
                    sender: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                    read: true,
                    msgKey: g.id,
                    parentMsgKey: m,
                    selectedOptionLocalIds: g.selectedOptionLocalIds,
                    t: g.t
                },
                parentMsgKey: m
            });
            try {
                yield o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords([
                    g
                ]);
                if (y?.msgKey != null) {
                    yield o("WAWebSchemaMessage").getMessageTable().remove(y.msgKey);
                }
                yield o("WAWebCRUDOperationsNewsletterMyVotes").createOrUpdateMyVote({
                    chatJid: a.id.toJid(),
                    msgServerId: c_serverId,
                    serverTimestampMs: _,
                    votes: votes.map(o("WAWebPollOptionHashUtils").bufferToHex),
                    msgKey: h.id.toString()
                });
                const b = yield o("WAWebNewsletterSendMessageJob").sendNewsletterMessageJob({
                    type: "pollVote",
                    newsletterJid,
                    msg: h,
                    parentMsgServerId: c_serverId,
                    votes
                });
                o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric({
                    action: f(selectedOptionLocalIds, y),
                    chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
                    creationDateInSeconds: t.t,
                    pollOptionsCount: t.pollOptions.length
                });
                switch(b.success){
                    case true:
                        C.ack = o("WAAckLevel").ACK.SENT;
                        h.updateAck(o("WAAckLevel").ACK.SENT);
                        yield o("WAWebCRUDOperationsNewsletterMyVotes").updateMyVote({
                            chatJid: a.id.toJid(),
                            msgServerId: c_serverId,
                            ack: o("WAAckLevel").ACK.SENT,
                            t: b.ack.t
                        });
                        return o("WAWebSendMsgResultAction").SendMsgResult.OK;
                    case false:
                        C.isSendFailure = true;
                        C.ack = o("WAAckLevel").ACK.FAILED;
                        h.updateAck(o("WAAckLevel").ACK.FAILED);
                        yield o("WAWebCRUDOperationsNewsletterMyVotes").updateMyVote({
                            chatJid: a.id.toJid(),
                            msgServerId: c_serverId,
                            ack: o("WAAckLevel").ACK.FAILED,
                            t: b.ack.t
                        });
                        return o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK;
                }
            } catch (error) {
                h.updateAck(o("WAAckLevel").ACK.FAILED);
                C.isSendFailure = true;
                yield o("WAWebCRUDOperationsNewsletterMyVotes").updateMyVote({
                    chatJid: a.id.toJid(),
                    msgServerId: c_serverId,
                    ack: o("WAAckLevel").ACK.FAILED
                });
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-polls] Failed to send poll vote"
                ]))).tags("newsletter").sendLogs("newsletter-polls-failed-to-send-vote");
                throw error;
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ from, msgKey, parentMsgKey, selectedOptionLocalIds, timestampMs, to }) {
            return {
                from,
                type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
                kind: o("WAWebMsgType").MsgKind.PollVoteDecrypted,
                subtype: "poll_vote",
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                id: msgKey ?? new (r("WAWebMsgKey"))({
                    from,
                    id: yield r("WAWebMsgKey").newId(),
                    to
                }),
                t: Math.floor(timestampMs / 1000),
                pollUpdateParentKey: parentMsgKey,
                selectedOptionLocalIds: Array.from(selectedOptionLocalIds),
                senderTimestampMs: timestampMs,
                ack: o("WAAckLevel").ACK.CLOCK,
                to,
                read: true
            };
        });
        return _.apply(this, arguments);
    }
    function f(selectedOptionLocalIds, t) {
        if (selectedOptionLocalIds.size === 0) {
            return o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.REMOVE_VOTE;
        }
        if (t == null) {
            return o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.VOTE;
        }
        return o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.CHANGE_VOTE;
    }
    l.resendVote = u;
    l.sendVote = d;
}, 98);