__d("WAWebNewsletterReactionCollection", [
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebDBGetReactions",
    "WAWebGetUserMediaErrors",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterReactionModel",
    "WAWebReactionsBEUtils",
    "WAWebUserPrefsMeUser",
    "WAWebdbCRUDOperationsNewsletterReaction",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...i_1) {
            let t;
            t = e.call(this, ...i_1) || this;
            t.findImpl = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield o("WAWebdbCRUDOperationsNewsletterReaction").getNewsletterReaction(e);
                    const n = yield o("WAWebMsgCollection").MsgCollection.hydrateOrGetMessages([
                        e
                    ]);
                    const a = n[0];
                    if (a == null) {
                        throw new (o("WAWebGetUserMediaErrors")).NotFoundError("No reactions found");
                    }
                    const i = a.id.remote.toJid();
                    const a_serverId = a.serverId;
                    const s = a_serverId != null ? yield o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(a_serverId, i) : null;
                    const u = s != null ? yield o("WAWebDBGetReactions").existsReactionAddressingModeInsensitive({
                        parentMsgKey: s.toString(),
                        senderUserJid: o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid()
                    }) : null;
                    if (t == null && u == null) {
                        throw new (o("WAWebGetUserMediaErrors")).NotFoundError("No reactions to display");
                    }
                    const c = {
                        id: r("WAWebMsgKey").fromString(e)
                    };
                    if (a_serverId != null) {
                        c.parentMsgServerId = a_serverId;
                    }
                    if (t != null) {
                        c.reactionCountMap = t.emojiCountMap;
                        c.reactionCountMapTs = o("WATimeUtils").castToUnixTime(t.serverTimestamp);
                    }
                    if (u != null && u.reactionText !== o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
                        c.myReactionMsgKey = r("WAWebMsgKey").from(u.msgKey);
                        c.myReaction = u.reactionText;
                        c.myReactionTs = o("WATimeUtils").castToUnixTime(u.timestamp);
                    }
                    return c;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebNewsletterReactionModel").NewsletterMessageReactions;
    const s = new e;
    function u({ parentMsg, reactionCode, reactionMsg }) {
        const o = s.gadd({
            id: parentMsg.id,
            myReactionMsgKey: reactionMsg.id
        });
        o.updateMyReaction(reactionCode);
        return o;
    }
    l.NewsletterMessageReactionsCollection = s;
    l.updateOrCreateMessageReaction = u;
}, 98);