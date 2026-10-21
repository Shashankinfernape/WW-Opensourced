__d("WAWebHandleNewsletterMsgAddOns", [
    "Promise",
    "WAAckLevel",
    "WAWebBackendApi",
    "WAWebCRUDOperationsNewsletterMyVotes",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebNewsletterDBUtils",
    "WAWebPollOptionHashUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, r) {
        switch(t.type){
            case "reaction":
                return u(t);
            case "poll_update":
                return d(t, r);
            default:
                return (e || (e = n("Promise"))).resolve();
        }
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ from: t, id: n, reactionText: r, serverId: a, t: i }) {
            if (!(a == null || i == null || t == null || r == null)) {
                const l = {
                    msgKey: n.toString(),
                    parentMsgKey: o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(a, t).toString(),
                    senderUserJid: o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid(),
                    reactionText: r,
                    timestamp: i * 1000,
                    orphan: 0,
                    read: true,
                    ack: o("WAAckLevel").ACK.SENT
                };
                yield o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions([
                    l
                ]);
                const s = yield o("WAWebNewsletterDBUtils").getMessageByServerId(a, t.toJid());
                if (s != null) {
                    yield o("WAWebBackendApi").frontendFireAndForget("updateChatPreviewFromReaction", {
                        reactionMsgObj: l,
                        parentMsgKey: s.id
                    });
                }
            }
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const { from: n, id: r, selectedOptionLocalIds: a, serverId: i, t: l } = e;
            const s = t.pollVotes;
            if (!(i == null || l == null || n == null || s == null)) {
                const u = {
                    chatJid: r.remote.toJid(),
                    msgServerId: i,
                    msgKey: e.id.toString(),
                    serverTimestampMs: l * 1000,
                    t: l,
                    votes: s.map(o("WAWebPollOptionHashUtils").bufferToHex)
                };
                yield o("WAWebCRUDOperationsNewsletterMyVotes").createOrUpdateMyVote(u);
                const c = yield o("WAWebNewsletterDBUtils").getMessageByServerId(i, n.toJid());
                if (c != null) {
                    yield o("WAWebBackendApi").frontendFireAndForget("updateChatPreviewFromVote", {
                        voteMsgObj: {
                            ack: o("WAAckLevel").ACK.SENT,
                            read: true,
                            msgKey: e.id,
                            parentMsgKey: c.id,
                            selectedOptionLocalIds: a ?? [],
                            sender: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                            senderTimestampMs: l * 1000,
                            t: l
                        },
                        parentMsgKey: c.id
                    });
                }
            }
        });
        return m.apply(this, arguments);
    }
    l.maybeHandleNewsletterMsgAddOns = s;
}, 98);