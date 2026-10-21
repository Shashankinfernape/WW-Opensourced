__d("WAWebSendReactionMsgAction", [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddonSendMsgData",
    "WAWebChatGetters",
    "WAWebDBGetReactions",
    "WAWebFrontendMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterSendReactionAction",
    "WAWebReactionDataUtils",
    "WAWebReactionsMsgActionUtils",
    "WAWebReactionsUtils",
    "WAWebReferentialMsgKey",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(t))) {
                if (o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionEnabled()) {
                    return o("WAWebNewsletterSendReactionAction").sendNewsletterReaction(t, n).then((messageSendResult)=>({
                            messageSendResult
                        }));
                }
                return undefined;
            }
            const to = o("WAWebFrontendMsgGetters").getChat(t).id;
            const l = o("WAWebReactionsMsgActionUtils").getFromForReactionMessage(t);
            const s = o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(t)) ? o("WAWebWidFactory").asUserWidOrThrow(l) : undefined;
            const u = new (r("WAWebMsgKey"))({
                from: l,
                to,
                id: yield r("WAWebMsgKey").newId(),
                participant: s,
                selfDir: "out"
            });
            const c = o("WATimeUtils").unixTime();
            let m = c * 1000;
            const p = {
                msgKey: u.toString(),
                parentMsgKey: t.id.toString(),
                senderUserJid: l.toString(),
                reactionText: n,
                timestamp: m,
                orphan: 0,
                read: true,
                ack: o("WAWebAck").ACK.CLOCK
            };
            const _ = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(u, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon);
            const f = yield o("WAWebDBGetReactions").existsReactionAddressingModeInsensitive({
                parentMsgKey: p.parentMsgKey,
                senderUserJid: p.senderUserJid
            });
            if (f) {
                m = Math.max(f.timestamp + 1, m);
            }
            p.timestamp = m;
            const g = babelHelpers.extends({
                id: u
            }, _, {
                reactionParentKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(t),
                type: o("WAWebMsgType").MSG_TYPE.REACTION,
                kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
                t: c,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                ack: o("WAWebAck").ACK.CLOCK,
                reactionText: n,
                reactionTimestamp: m,
                read: true,
                botTargetSenderJid: o("WAWebReactionDataUtils").getBotInvokerJidForReaction(t)
            });
            if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(g)) {
                return d(g);
            }
            const h = yield o("WAWebReactionsMsgActionUtils").getReactionMsgData({
                from: l,
                globalClockUnixTimeSeconds: c,
                msg: t,
                msgKey: u,
                reaction: n,
                reactionTimestamp: m,
                to
            });
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "sending reaction: ",
                ", parent: ",
                ", isParentLid: ",
                ""
            ])), h.id.id, t.id.id, t.id.participant?.isLid());
            const y = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(h);
            o("WAWebReactionsUtils").updateRecentReaction(n, m);
            if (y.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                throw r("err")("Reaction send error");
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { id, reactionParentKey, reactionText, reactionTimestamp } = e;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "sending reaction: ",
                ", parent: ",
                ", isParentLid: ",
                ""
            ])), id.id, reactionParentKey?.id, id.participant?.isLid());
            const u = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(e);
            o("WAWebReactionsUtils").updateRecentReaction(reactionText, reactionTimestamp);
            if (u.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                throw r("err")("Reaction send error");
            }
        });
        return m.apply(this, arguments);
    }
    l.sendReactionToMsg = u;
}, 98);