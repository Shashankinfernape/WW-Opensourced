__d("WAWebPollsSendVoteMsgAction", [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebAddonSendMsgData",
    "WAWebFrontendMsgGetters",
    "WAWebFrontendPollVoteGetters",
    "WAWebLidMeUserForChat",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterPollVotesModel",
    "WAWebNewsletterSendVoteMsgAction",
    "WAWebPollsActionsMetricUtils",
    "WAWebPollsCreatePollUpdateVoteMsg",
    "WAWebPollsDailyStatsUtils",
    "WAWebPollsPollVoteCollection",
    "WAWebReferentialMsgKey",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebViewMode.flow",
    "WAWebWamEnumPollActionType",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (r("WAWebWid").isNewsletter(t.id.remote)) {
                if (!o("WAWebNewsletterGatingUtils").isNewsletterPollsReceivingEnabled()) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Newsletter polls are not supported yet"
                    ])));
                    return;
                }
                yield o("WAWebNewsletterSendVoteMsgAction").sendVote(t, n);
                return;
            }
            yield _(t, n);
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e instanceof o("WAWebNewsletterPollVotesModel").NewsletterPollVotes) {
                yield o("WAWebNewsletterSendVoteMsgAction").resendVote(e);
                return;
            }
            yield _(o("WAWebFrontendPollVoteGetters").getParentMsg(e), new Set(e.selectedOptionLocalIds), e.msgKey);
        });
        return d.apply(this, arguments);
    }
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = babelHelpers.extends({}, t, {
                senderTimestampMs: o("WAWebAddOnParseWebMsgInfo").getIncreasingLatestSenderTimestampMs(n?.senderTimestampMs)
            });
            return o("WAWebPollsCreatePollUpdateVoteMsg").createPollUpdateVoteMsg(r, e);
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = o("WAWebFrontendMsgGetters").getChat(e.unsafe());
            const i = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(a, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon);
            const remote = e.id.remote;
            const s = n ?? new (r("WAWebMsgKey"))({
                fromMe: true,
                remote,
                id: yield r("WAWebMsgKey").newId(),
                participant: o("WAWebMsgGetters").getIsGroupMsg(e.unsafe()) ? i : undefined
            });
            const u = o("WAWebReferentialMsgKey").getReferentialMsgKey(e);
            const senderTimestampMs = o("WATimeUtils").unixTimeMs();
            const d = {
                msgKey: s,
                parentMsgKey: u,
                selectedOptionLocalIds: Array.from(t),
                senderTimestampMs,
                t: Math.floor(senderTimestampMs / 1000),
                sender: i,
                ack: o("WAWebAck").ACK.CLOCK,
                read: true
            };
            const p = o("WAWebPollsPollVoteCollection").PollVoteCollection.getForParentAddressingModeInsensitive([
                u
            ])[0].getVoteFromSenderAddressingModeInsensitive(i);
            let _;
            const f = babelHelpers.extends({
                id: s
            }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(s, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), {
                kind: o("WAWebMsgType").MsgKind.PollVoteDecrypted,
                type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
                pollUpdateParentKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(e),
                selectedOptionLocalIds: Array.from(t),
                senderTimestampMs: o("WAWebAddOnParseWebMsgInfo").getIncreasingLatestSenderTimestampMs(p?.senderTimestampMs),
                t: Math.floor(senderTimestampMs / 1000),
                ack: o("WAWebAck").ACK.CLOCK,
                read: true,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
            });
            if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(f)) {
                _ = f;
            } else {
                _ = yield m(e, d, p);
            }
            const h = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(_);
            if (h.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                const y = o("WAWebPollsPollVoteCollection").PollVoteCollection.getByMsgKey(s);
                if (y != null) {
                    y.ack = o("WAWebAck").ACK.FAILED;
                    y.isSendFailure = true;
                }
                throw r("err")("Vote send error");
            }
            let C;
            if (t.size > 0) {
                C = p ? o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.CHANGE_VOTE : o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.VOTE;
            } else {
                C = o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.REMOVE_VOTE;
            }
            o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric(babelHelpers.extends({
                action: C,
                chat: o("WAWebFrontendMsgGetters").getChat(e.unsafe())
            }, o("WAWebPollsActionsMetricUtils").getPollMetricFieldsFromCreationMsg(e)));
            o("WAWebPollsDailyStatsUtils").incrementPollsDailyStat(e, g(t, p != null), i);
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return ((e)=>{
            if (Array.isArray(e) && e.length === 2 && e[0] === true && e[1] === 0) {
                return "vote_delete";
            }
            if (Array.isArray(e) && e.length === 2 && e[0] === false) {
                const t = e[1];
                if (t > 0) {
                    return "vote";
                }
            }
            return "vote_change";
        })([
            t,
            e.size
        ]);
    }
    l.sendVote = s;
    l.resendVote = c;
}, 98);