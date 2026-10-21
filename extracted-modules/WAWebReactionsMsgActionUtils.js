__d("WAWebReactionsMsgActionUtils", [
    "WALogger",
    "WAWebAck",
    "WAWebAddonEncryption",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataGetters",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebReactionDataUtils",
    "WAWebReferentialMsgKey",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        const groupMetadata = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata;
        const n = groupMetadata != null && o("WAWebGroupMetadataGetters").getIsCag(groupMetadata);
        const r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        if (n) {
            return r;
        }
        return o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ from, globalClockUnixTimeSeconds, msg, msgKey, reaction, reactionTimestamp, to }) {
            const m = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(msgKey, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon);
            if (!from.equals(m.from)) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "create reaction: ",
                    " and ",
                    " do not match"
                ])), from.toLogString(), m.from.toLogString()).tags("messaging").sendLogs("reactionMsgData: from is not matching", {
                    sampling: 0.01
                });
            }
            if (!to.equals(m.to)) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "create reaction: ",
                    " and ",
                    " do not match"
                ])), to.toLogString(), m.to.toLogString()).tags("messaging").sendLogs("reactionMsgData: to is not matching", {
                    sampling: 0.01
                });
            }
            const botTargetSenderJid = o("WAWebReactionDataUtils").getBotInvokerJidForReaction(msg);
            const groupMetadata = o("WAWebFrontendMsgGetters").getChat(msg).groupMetadata;
            if (groupMetadata != null && o("WAWebGroupMetadataGetters").getIsCag(groupMetadata)) {
                const f = self.crypto.getRandomValues(new Uint8Array(12));
                const g = {
                    type: o("WAWebMsgType").MsgKind.ReactionDecrypted,
                    encode: {
                        text: reaction,
                        senderTimestampMs: reactionTimestamp
                    }
                };
                const h = yield o("WAWebAddonEncryption").encryptAddOn(g, {
                    messageSecret: r("nullthrows")(msg.messageSecret, "Parent message missing message secret"),
                    iv: f,
                    stanzaId: msg.id.id,
                    originalMessageSender: r("nullthrows")(o("WAWebMsgGetters").getOriginalSender(msg.unsafe()), "Parent message missing original sender"),
                    addOnSender: o("WAWebWidFactory").asUserWidOrThrow(from)
                });
                const y = h.encPayload;
                return {
                    id: msgKey,
                    type: o("WAWebMsgType").MSG_TYPE.REACTION_ENC,
                    kind: o("WAWebMsgType").MsgKind.ReactionEncrypted,
                    viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                    t: globalClockUnixTimeSeconds,
                    from,
                    to,
                    author: m.author,
                    ack: o("WAWebAck").ACK.CLOCK,
                    targetMessageKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(msg),
                    encPayload: y,
                    encIv: f.buffer,
                    botTargetSenderJid
                };
            }
            return {
                id: msgKey,
                reactionParentKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(msg),
                type: o("WAWebMsgType").MSG_TYPE.REACTION,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
                t: globalClockUnixTimeSeconds,
                from,
                to,
                author: m.author,
                ack: o("WAWebAck").ACK.CLOCK,
                reactionText: reaction,
                reactionTimestamp,
                read: true,
                botTargetSenderJid
            };
        });
        return d.apply(this, arguments);
    }
    l.getFromForReactionMessage = u;
    l.getReactionMsgData = c;
}, 98);