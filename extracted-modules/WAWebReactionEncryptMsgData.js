__d("WAWebReactionEncryptMsgData", [
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebBackendApi",
    "WAWebGroupMetadataGetters",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProcessBaseMsgInfo",
    "WAWebReactionDataUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebReactionDataUtils").getBotInvokerJidForReaction(t);
            const a = yield o("WAWebBackendApi").frontendSendAndReceive("getGroupMetadata", {
                groupWid: e.id.remote
            });
            if (a != null && o("WAWebGroupMetadataGetters").getIsCag(a)) {
                let i;
                const l = self.crypto.getRandomValues(new Uint8Array(12));
                const s = {
                    type: (i = o("WAWebMsgType")).MsgKind.ReactionDecrypted,
                    encode: {
                        text: e.reactionText,
                        senderTimestampMs: e.reactionTimestamp
                    }
                };
                const u = o("WAWebAddonEncryptionError").getValidatedMessageSecret(i.MsgKind.ReactionDecrypted, t);
                const c = yield o("WAWebAddonEncryption").encryptAddOn(s, {
                    messageSecret: u,
                    iv: l,
                    stanzaId: t.id.id,
                    originalMessageSender: r("nullthrows")(o("WAWebMsgGetters").getOriginalSender(t)),
                    addOnSender: o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(o("WAWebMsgGetters").getSender(e)))
                });
                const d = c.encPayload;
                return babelHelpers.extends({}, o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(e), {
                    type: i.MSG_TYPE.REACTION_ENC,
                    kind: i.MsgKind.ReactionEncrypted,
                    targetMessageKey: t.id,
                    encPayload: d,
                    encIv: l.buffer,
                    botTargetSenderJid: n
                });
            }
            if (n == null) {
                return e;
            }
            return babelHelpers.extends({}, e, {
                botTargetSenderJid: n
            });
        });
        return s.apply(this, arguments);
    }
    l.encryptReactionMsgData = e;
}, 98);