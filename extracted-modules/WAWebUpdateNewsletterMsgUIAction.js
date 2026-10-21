__d("WAWebUpdateNewsletterMsgUIAction", [
    "Promise",
    "WAAckLevel",
    "WAJids",
    "WATimeUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterMessageDeliveryUpdateAction",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebNewsletterReactionCollection",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
    "WAWebReactionsMsgAction",
    "WAWebRevokeMsgAction",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAJids").toNewsletterJid(t.toJid());
            let a = r("WAWebNewsletterCollection").get(t);
            if (a == null) {
                a = yield o("WAWebQueryAndUpdateNewslettersMetadataAction").queryAndUpdateNewsletterMetadataAction(n);
                if (a != null) {
                    r("WAWebNewsletterCollection").add(a);
                }
            }
            if (a == null) {
                yield o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(t);
                return;
            }
            if (e.type === "reaction") {
                return c(e);
            }
            if (e.type === "poll_update") {
                if (e.subtype === "poll_vote") {
                    return m(e);
                }
                return undefined;
            }
            if (e.subtype === "admin_revoke") {
                return p(e, t);
            }
            if (e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL) {
                yield o("WAWebMsgCollection").MsgCollection.processMultipleMessages(a.id, [
                    babelHelpers.extends({}, o("WAWebMsgDataFromModel").msgDataFromMsgModel(e), {
                        recvFresh: true,
                        isNewMsg: true
                    })
                ], {}, "updateNewsletterMessageUI", a.msgs, true);
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebMsgCollection").MsgCollection.get(e.reactionParentKey);
            const e_reactionText = e.reactionText;
            if (t != null) {
                const r = t.serverId;
                if (r != null) {
                    o("WAWebNewsletterReactionCollection").updateOrCreateMessageReaction({
                        parentMsg: t,
                        reactionMsg: e,
                        reactionCode: e_reactionText
                    });
                    const a = {
                        msgKey: e.id.toString(),
                        parentMsgKey: o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(r, e.from).toString(),
                        senderUserJid: o("WAWebUserPrefsMeUser").getMeUserOrThrow().toString(),
                        reactionText: e_reactionText,
                        timestamp: e.t * 1000,
                        orphan: 0,
                        read: true,
                        ack: o("WAAckLevel").ACK.SENT
                    };
                    yield o("WAWebReactionsMsgAction").addOrUpdateReactionsModelCollection(a, {
                        allowNotify: false
                    });
                }
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        if (e.pollUpdateParentKey != null) {
            const t = o("WAWebMsgCollection").MsgCollection.get(e.pollUpdateParentKey);
            if (!(t == null || e.type !== o("WAWebMsgType").MSG_TYPE.POLL_UPDATE)) {
                const n = e.senderTimestampMs;
                o("WAWebNewsletterPollVotesModelCollection").updateOrCreatePollVote({
                    msgKey: e.id,
                    parentMsgKey: t.id,
                    selectedOptionLocalIds: new Set(e.selectedOptionLocalIds),
                    timestamp: n != null ? o("WATimeUtils").castToMillisTime(n) : o("WATimeUtils").castUnixTimeToMillisTime(o("WATimeUtils").castToUnixTime(e.t))
                });
            }
        }
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const l = r("WAWebNewsletterCollection").get(a)?.msgs.get(t.protocolMessageKey);
            if (l == null) {
                return (e || (e = n("Promise"))).resolve();
            }
            o("WAWebUpdateLastAddOnPreviewChatAction").deleteModelsForLastAddOnPreview([
                l.id.toString()
            ]);
            yield o("WAWebNewsletterMessageDeliveryUpdateAction").removeMessageDeliveryUpdates(o("WAWebFrontendMsgGetters").getChat(l), [
                l
            ]);
            return (e || (e = n("Promise"))).resolve(o("WAWebRevokeMsgAction").revoke(l, {
                subtype: t.subtype,
                msgKey: t.id,
                sender: o("WAWebMsgGetters").getIsSentByMe(t) ? o("WAWebUserPrefsMeUser").getMeUserOrThrow() : t.from,
                revokeTimestamp: t.t,
                viewMode: t.viewMode
            }));
        });
        return _.apply(this, arguments);
    }
    l.updateNewsletterMessageUI = s;
}, 98);