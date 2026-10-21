__d("WAWebPollEditEncryptMsgData", [
    "WALongInt",
    "WAWebAck",
    "WAWebAddonEncryption",
    "WAWebE2EProtoUtils",
    "WAWebMessageEditBotGroupMetadata",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollsValidationError",
    "WAWebProtobufsE2E.pb",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        if (e == null) {
            throw new (o("WAWebPollsValidationError")).PollEditValidationError(o("WAWebPollsValidationError").PollEditValidationErrorCode.MISSING_MESSAGE_SECRET, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.MISSING_MESSAGE_SECRET);
        }
        if (t == null) {
            throw new (o("WAWebPollsValidationError")).PollEditValidationError(o("WAWebPollsValidationError").PollEditValidationErrorCode.MISSING_MESSAGE_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (n == null) {
            throw new (o("WAWebPollsValidationError")).PollEditValidationError(o("WAWebPollsValidationError").PollEditValidationErrorCode.MISSING_SENDER_TIMESTAMP, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
    }
    function s(e) {
        return e.pollEndTime != null || e.pollHideVoterNames === true || e.pollAllowAddOption === true;
    }
    function u(e) {
        return (e.pollOptions ?? []).map((e)=>({
                optionName: e.name
            }));
    }
    function c(e, t, n) {
        let o;
        return {
            name: t.pollName,
            options: u(e),
            selectableOptionsCount: e.pollSelectableOptionsCount ?? 0,
            endTime: n && (o = e.pollEndTime) != null ? o : undefined,
            hideParticipantName: n && e.pollHideVoterNames === true ? true : undefined,
            allowAddOption: n && e.pollAllowAddOption === true ? true : undefined
        };
    }
    function d(e, t) {
        if (t) {
            return {
                pollCreationMessageV6: e
            };
        }
        return {
            pollCreationMessageV3: e
        };
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            let i;
            const iv = self.crypto.getRandomValues(new Uint8Array(12));
            const u = o("WAWebMsgGetters").getOriginalSender(n);
            const n_messageSecret = n.messageSecret;
            const p = o("WALongInt").maybeNumberOrThrowIfTooLarge(t.latestEditSenderTimestampMs);
            e(n_messageSecret, u, p);
            const _ = (i = r("nullthrows"))(n_messageSecret);
            const originalMessageSender = i(u);
            const timestampMs = i(p);
            const h = s(n);
            const y = c(n, t, h);
            const C = {
                type: o("WAWebMsgType").MsgKind.PollEditDecrypted,
                encode: {
                    protocolMessage: {
                        key: o("WAWebE2EProtoUtils").encodeKey(n.id),
                        type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT,
                        timestampMs,
                        editedMessage: d(y, h)
                    }
                }
            };
            const b = yield o("WAWebAddonEncryption").encryptAddOn(C, {
                messageSecret: _,
                iv,
                stanzaId: n.id.id,
                originalMessageSender,
                addOnSender: o("WAWebWidFactory").asUserWidOrThrow(i(o("WAWebMsgGetters").getSender(t)))
            });
            const { encPayload, reportingTokenContentInfo } = b;
            return babelHelpers.extends({
                id: t.id
            }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(t.id, o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage), {
                type: o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED,
                kind: o("WAWebMsgType").MsgKind.PollEditEncrypted,
                t: Math.floor(timestampMs / 1000),
                ack: t.ack ?? o("WAWebAck").ACK.CLOCK,
                targetMessageKey: n.id,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                encPayload,
                encIv: iv.buffer,
                messageSecret: _,
                reportingTokenContentInfo
            }, t.id.remote.isGroup() ? yield o("WAWebMessageEditBotGroupMetadata").getOwnEditBotGroupMetadata(t) : null);
        });
        return p.apply(this, arguments);
    }
    l.createEncryptedPollEditMsgData = m;
}, 98);