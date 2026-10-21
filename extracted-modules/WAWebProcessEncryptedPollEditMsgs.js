__d("WAWebProcessEncryptedPollEditMsgs", [
    "WALogger",
    "WAWebAddonEncryptionError",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebHandleMsgValidate",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollAddonProcessingUtils",
    "WAWebPollEditDecryptedMsgDataConversion",
    "WAWebPollsValidationError",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const r = o("WAWebPollAddonProcessingUtils").buildAddonParentMap(t, n, o("WAWebMsgType").MsgKind.PollEditEncrypted);
            if (r.size === 0) {
                return [];
            }
            return o("WAWebPollAddonProcessingUtils").settleAddonResults(Array.from(r.entries(), function([t, n]) {
                return d(t, n);
            }), function(t) {
                if (t instanceof o("WAWebPollsValidationError").PollCreationValidationError || t instanceof o("WAWebPollsValidationError").PollEditValidationError || t instanceof o("WAWebAddonEncryptionError").DualEncryptionValidationError) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Processing encrypted poll edit failed: ",
                        ""
                    ])), t.code).sendLogs(t.code);
                    return;
                }
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Processing encrypted poll edit failed: ",
                    "\n",
                    ""
                ], [
                    "Processing encrypted poll edit failed: ",
                    "\\n",
                    ""
                ])), t.message, t.stack).sendLogs("poll_edit_unknown_error");
            });
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const { encIv: l, encPayload: s } = e;
            if (t.messageSecret == null) {
                throw new (o("WAWebPollsValidationError")).PollEditValidationError(o("WAWebPollsValidationError").PollEditValidationErrorCode.MISSING_MESSAGE_SECRET, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const u = o("WAWebAddonEncryptionError").getValidatedMessageSecret(o("WAWebMsgType").MsgKind.PollEditEncrypted, t);
            const c = o("WAWebMsgGetters").getOriginalSender(t);
            const d = o("WAWebMsgGetters").getSender(e);
            if (d == null) {
                throw new (o("WAWebPollsValidationError")).PollEditValidationError(o("WAWebPollsValidationError").PollEditValidationErrorCode.MISSING_MESSAGE_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (c == null) {
                throw new (o("WAWebPollsValidationError")).PollEditValidationError(o("WAWebPollsValidationError").PollEditValidationErrorCode.MISSING_MESSAGE_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (l == null) {
                throw new (o("WAWebPollsValidationError")).PollEditValidationError(o("WAWebPollsValidationError").PollEditValidationErrorCode.MISSING_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (s == null) {
                throw new (o("WAWebPollsValidationError")).PollEditValidationError(o("WAWebPollsValidationError").PollEditValidationErrorCode.MISSING_ENC_PAYLOAD, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (!r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(d, c))) {
                throw new (o("WAWebPollsValidationError")).PollEditValidationError(o("WAWebPollsValidationError").PollEditValidationErrorCode.PARENT_SENDER_MISMATCH, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
                o("WAWebPollAddonProcessingUtils").assertPollNotPastEndTime(t.pollEndTime, e.t, function() {
                    return new (o("WAWebPollsValidationError")).PollEditValidationError(o("WAWebPollsValidationError").PollEditValidationErrorCode.PAST_END_TIME, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                });
            }
            const m = yield o("WAWebPollAddonProcessingUtils").decryptPollAddonPayload(o("WAWebMsgType").MsgKind.PollEditEncrypted, s, {
                addOnSender: o("WAWebWidFactory").asUserWidOrThrow(d),
                iv: l,
                messageSecret: u,
                originalMessageSender: c,
                stanzaId: t.id.id
            });
            const { arrayBuffer: p, protobuf: _ } = m;
            const f = o("WAWebPollEditDecryptedMsgDataConversion").protobufToPollEditDecryptedMsgData(o("WAWebVerifyProtobufMsgObjectKeys").getUnwrappedProtobufMessage(_) ?? _, e, t);
            const g = _.messageContextInfo?.messageSecret ?? e.messageSecret;
            const h = babelHelpers.extends({}, f, {
                plainProtobufBytes: new Uint8Array(p)
            });
            if (g != null) {
                h.messageSecret = new Uint8Array(g);
            }
            yield o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({
                renderableMsgs: [
                    h
                ],
                forceDualEncryptedValidation: true
            });
            return o("WAWebDBProcessEditProtocolMsgs").generateMessageEdit(t, f);
        });
        return m.apply(this, arguments);
    }
    l.processEncryptedPollEditMsgs = u;
}, 98);