__d("WAWebProcessEncryptedPollAddOptionMsgs", [
    "WALogger",
    "WAWebAddonEncryptionError",
    "WAWebHandleMsgValidate",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollAddOptionDecryptedMsgDataConversion",
    "WAWebPollAddonProcessingUtils",
    "WAWebPollsGatingUtils",
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
            const r = o("WAWebPollAddonProcessingUtils").buildAddonParentMap(t, n, o("WAWebMsgType").MsgKind.PollAddOptionEncrypted);
            if (r.size === 0) {
                return [];
            }
            return o("WAWebPollAddonProcessingUtils").settleAddonResults(Array.from(r.entries(), function([t, n]) {
                return d(t, n);
            }), function(t) {
                if (t instanceof o("WAWebPollsValidationError").PollAddOptionValidationError || t instanceof o("WAWebAddonEncryptionError").DualEncryptionValidationError) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Processing encrypted poll add option failed: ",
                        ""
                    ])), t.code).sendLogs(t.code, {
                        sampling: 0.1
                    });
                    return;
                }
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Processing encrypted poll add option failed: ",
                    "\n",
                    ""
                ], [
                    "Processing encrypted poll add option failed: ",
                    "\\n",
                    ""
                ])), t.message, t.stack).sendLogs("poll_add_option_unknown_error");
            });
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const { encIv: a, encPayload: i } = e;
            if (t.messageSecret == null) {
                throw new (o("WAWebPollsValidationError")).PollAddOptionValidationError(o("WAWebPollsValidationError").PollAddOptionValidationErrorCode.MISSING_MESSAGE_SECRET, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const l = o("WAWebAddonEncryptionError").getValidatedMessageSecret(o("WAWebMsgType").MsgKind.PollAddOptionEncrypted, t);
            const s = o("WAWebMsgGetters").getOriginalSender(t);
            const u = o("WAWebMsgGetters").getSender(e);
            if (u == null) {
                throw new (o("WAWebPollsValidationError")).PollAddOptionValidationError(o("WAWebPollsValidationError").PollAddOptionValidationErrorCode.MISSING_MESSAGE_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (s == null) {
                throw new (o("WAWebPollsValidationError")).PollAddOptionValidationError(o("WAWebPollsValidationError").PollAddOptionValidationErrorCode.MISSING_MESSAGE_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (a == null) {
                throw new (o("WAWebPollsValidationError")).PollAddOptionValidationError(o("WAWebPollsValidationError").PollAddOptionValidationErrorCode.MISSING_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (i == null) {
                throw new (o("WAWebPollsValidationError")).PollAddOptionValidationError(o("WAWebPollsValidationError").PollAddOptionValidationErrorCode.MISSING_ENC_PAYLOAD, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
                const m = r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(s, u));
                if (!m && t.pollAllowAddOption !== true) {
                    throw new (o("WAWebPollsValidationError")).PollAddOptionValidationError(o("WAWebPollsValidationError").PollAddOptionValidationErrorCode.ADD_OPTION_NOT_ALLOWED, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
                const p = t.pollOptions?.length ?? 0;
                if (p >= o("WAWebPollsGatingUtils").getMaxPollOptionCount()) {
                    throw new (o("WAWebPollsValidationError")).PollAddOptionValidationError(o("WAWebPollsValidationError").PollAddOptionValidationErrorCode.MAX_OPTIONS_REACHED, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
                o("WAWebPollAddonProcessingUtils").assertPollNotPastEndTime(t.pollEndTime, e.t, function() {
                    return new (o("WAWebPollsValidationError")).PollAddOptionValidationError(o("WAWebPollsValidationError").PollAddOptionValidationErrorCode.PAST_END_TIME, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                });
            }
            const _ = yield o("WAWebPollAddonProcessingUtils").decryptPollAddonPayload(o("WAWebMsgType").MsgKind.PollAddOptionEncrypted, i, {
                addOnSender: o("WAWebWidFactory").asUserWidOrThrow(u),
                iv: a,
                messageSecret: l,
                originalMessageSender: s,
                stanzaId: t.id.id
            });
            const { arrayBuffer: f, protobuf: g } = _;
            const h = o("WAWebPollAddOptionDecryptedMsgDataConversion").protobufToPollAddOptionDecryptedMsgData(o("WAWebVerifyProtobufMsgObjectKeys").getUnwrappedProtobufMessage(g) ?? g, e, t);
            if (t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION && t.pollOptions) {
                const y = new Set(t.pollOptions.map((e)=>e.name));
                if (y.has(h.pollAddedOption.name)) {
                    throw new (o("WAWebPollsValidationError")).PollAddOptionValidationError(o("WAWebPollsValidationError").PollAddOptionValidationErrorCode.DUPLICATE_OPTIONS, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
            }
            yield o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({
                renderableMsgs: [
                    babelHelpers.extends({}, h, {
                        plainProtobufBytes: new Uint8Array(f)
                    })
                ],
                forceDualEncryptedValidation: true
            });
            return {
                parentMsg: t,
                decryptedAddOption: h
            };
        });
        return m.apply(this, arguments);
    }
    l.processEncryptedPollAddOptionMsgs = u;
}, 98);