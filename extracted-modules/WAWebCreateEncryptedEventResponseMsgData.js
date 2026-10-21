__d("WAWebCreateEncryptedEventResponseMsgData", [
    "WAWebAck",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebEventsValidationError",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = self.crypto.getRandomValues(new Uint8Array(12));
            const i = {
                type: o("WAWebMsgType").MsgKind.EventResponseDecrypted,
                encode: {
                    response: e.eventResponse,
                    timestampMs: e.senderTimestampMs
                }
            };
            const l = o("WAWebMsgGetters").getOriginalSender(t);
            const s = o("WAWebAddonEncryptionError").getValidatedMessageSecret(o("WAWebMsgType").MsgKind.EventResponseDecrypted, t);
            if (l == null) {
                throw new (o("WAWebEventsValidationError")).EventCreationValidationError(o("WAWebEventsValidationError").EventCreationValidationErrorCode.EVENT_CREATION_MISSING_MESSAGE_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const u = yield o("WAWebAddonEncryption").encryptAddOn(i, {
                messageSecret: s,
                iv: a,
                stanzaId: t.id.id,
                originalMessageSender: l,
                addOnSender: o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(o("WAWebMsgGetters").getSender(e)))
            });
            const c = u.encPayload;
            return babelHelpers.extends({
                id: e.id
            }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(e.id, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), {
                type: o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
                kind: o("WAWebMsgType").MsgKind.EventResponseEncrypted,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                addonEncrypted: true,
                t: Math.floor(e.senderTimestampMs / 1000),
                ack: e.ack ?? o("WAWebAck").ACK.CLOCK,
                targetMessageKey: t.id,
                encPayload: c,
                encIv: a.buffer
            });
        });
        return s.apply(this, arguments);
    }
    l.createEncryptedEventResponseMsgData = e;
}, 98);