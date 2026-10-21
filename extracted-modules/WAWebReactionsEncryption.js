__d("WAWebReactionsEncryption", [
    "WALongInt",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebE2EProtoUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebReactionEncMessageValidationError",
    "WAWebReactionsBEUtils",
    "WAWebReactionsValidationError",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = {
                type: o("WAWebMsgType").MsgKind.ReactionEncrypted,
                encryptedAddOn: e.encryptedReaction
            };
            const n = yield o("WAWebAddonEncryption").decryptAddOn(t, {
                messageSecret: e.messageSecret,
                iv: e.iv,
                stanzaId: e.stanzaId,
                originalMessageSender: e.originalMessageSender,
                addOnSender: e.reactionSender
            });
            return o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").Message$ReactionMessageSpec, n);
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const { encIv: i, encPayload: l, targetMessageKey: s } = t;
            const u = o("WAWebAddonEncryptionError").getValidatedMessageSecret(o("WAWebMsgType").MsgKind.ReactionEncrypted, n);
            const c = o("WAWebMsgGetters").getOriginalSender(n);
            if (c == null) {
                throw new (o("WAWebReactionEncMessageValidationError")).ReactionEncMessageValidationError(o("WAWebReactionEncMessageValidationError").ReactionEncValidationErrorCode.MISSING_PARENT_MESSAGE_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const d = {
                encryptedReaction: l,
                messageSecret: u,
                iv: i,
                stanzaId: n.id.id,
                originalMessageSender: c,
                reactionSender: o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(o("WAWebMsgGetters").getSender(t)))
            };
            let m;
            try {
                m = yield e(d);
            } catch (e) {
                throw new (o("WAWebReactionEncMessageValidationError")).ReactionEncMessageValidationError(o("WAWebReactionEncMessageValidationError").ReactionEncValidationErrorCode.DECRYPTION_FAILED, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const p = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(m.text) ?? o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
            const _ = m.senderTimestampMs;
            if (_ == null) {
                throw new (o("WAWebReactionsValidationError")).ReactionValidationError(o("WAWebReactionsValidationError").ReactionValidationErrorCode.MISSING_TIMESTAMP, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            return babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.REACTION,
                kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
                reactionParentKey: s,
                reactionText: p,
                reactionTimestamp: o("WALongInt").numberOrThrowIfTooLarge(_),
                encPayload: void 0,
                encIv: void 0,
                read: false
            });
        });
        return c.apply(this, arguments);
    }
    l.parseEncReaction = e;
    l.decryptReactionMsgData = u;
}, 98);