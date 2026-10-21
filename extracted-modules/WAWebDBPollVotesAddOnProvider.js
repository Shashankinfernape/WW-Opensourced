__d("WAWebDBPollVotesAddOnProvider", [
    "WAWebDBMarkAsReadForTable",
    "WAWebDBProcessPollUpdateMsgs",
    "WAWebDBUpdateAddOnAcksForTable",
    "WAWebMessageAddOnType",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = {
        type: o("WAWebMessageAddOnType").MessageAddOnType.PollVote,
        matches: function(t) {
            return t.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE && t.subtype === "poll_vote";
        },
        matchesFutureproof: function(t) {
            return t.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && t.futureproofType === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE;
        },
        canRenderInUi: function() {
            return true;
        },
        processOrphansForNewMsg: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = new Map;
                for (const a of t){
                    n.set(a.msgKey, a);
                }
                const i = yield o("WAWebDBProcessPollUpdateMsgs").processPollUpdateMsgs(t.map(({ parsedMsgPayload })=>{
                    if (parsedMsgPayload.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE && parsedMsgPayload.addonEncrypted) {
                        return parsedMsgPayload;
                    }
                    throw r("err")("Invalid poll vote orphan type");
                }));
                return i.map((e)=>{
                    const read = e.read || (n.get(e.msgKey.toString())?.read ?? false);
                    if (e.read === read) {
                        return e;
                    }
                    return babelHelpers.extends({}, e, {
                        read
                    });
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateAcks: function(t, n) {
            return o("WAWebDBUpdateAddOnAcksForTable").updateAddOnAcksForTable("poll-votes", t, n);
        },
        markAsRead: function(t) {
            return o("WAWebDBMarkAsReadForTable").markAsReadForTable("poll-votes", t.map(String));
        }
    };
    l.pollVotesAddOnProvider = e;
}, 98);