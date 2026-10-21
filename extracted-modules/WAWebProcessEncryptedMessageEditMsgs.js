__d("WAWebProcessEncryptedMessageEditMsgs", [
    "Promise",
    "WALogger",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebAddonInfraError",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebHandleMsgValidate",
    "WAWebLidMigrationUtils",
    "WAWebMessageEditDecryptedMsgDataConversion",
    "WAWebMessageEditValidationError",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = new Map;
            t.forEach((e)=>{
                if (e.kind !== o("WAWebMsgType").MsgKind.MessageEditEncrypted) {
                    throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedMsgType);
                }
                const t = a.getForAddon(e);
                i.set(e, t);
            });
            if (i.size === 0) {
                return [];
            }
            const l = yield (u || (u = n("Promise"))).allSettled(Array.from(i.entries()).map(([t, n])=>m(t, n)));
            return r("compactMap")(l, function(t) {
                switch(t.status){
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        {
                            const n = t.reason;
                            if (n instanceof o("WAWebMessageEditValidationError").MessageEditValidationError || n instanceof o("WAWebAddonEncryptionError").DualEncryptionValidationError) {
                                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "Processing encrypted message edit failed: ",
                                    ""
                                ])), n.code).sendLogs(n.code);
                                return;
                            }
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "Processing encrypted message edit failed: ",
                                "\n",
                                ""
                            ], [
                                "Processing encrypted message edit failed: ",
                                "\\n",
                                ""
                            ])), n.message, n.stack).sendLogs("message_edit_unknown_error");
                        }
                }
            });
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const { encIv: l, encPayload: s } = e;
            const u = o("WAWebAddonEncryptionError").getValidatedMessageSecret(o("WAWebMsgType").MsgKind.MessageEditEncrypted, t);
            const c = o("WAWebMsgGetters").getOriginalSender(t);
            const d = o("WAWebMsgGetters").getSender(e);
            const m = o("WAWebMsgGetters").getSender(t);
            if (d == null) {
                throw new (o("WAWebMessageEditValidationError")).MessageEditValidationError(o("WAWebMessageEditValidationError").MessageEditValidationErrorCode.MISSING_MESSAGE_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (c == null || m == null) {
                throw new (o("WAWebMessageEditValidationError")).MessageEditValidationError(o("WAWebMessageEditValidationError").MessageEditValidationErrorCode.MISSING_PARENT_MESSAGE_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const p = o("WAWebLidMigrationUtils").toCommonAddressingMode(d, m).filter(Boolean);
            if (p.length === 2 && !r("WAWebWid").equals.apply(r("WAWebWid"), p)) {
                throw new (o("WAWebMessageEditValidationError")).MessageEditValidationError(o("WAWebMessageEditValidationError").MessageEditValidationErrorCode.PARENT_SENDER_MISMATCH, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (l == null) {
                throw new (o("WAWebMessageEditValidationError")).MessageEditValidationError(o("WAWebMessageEditValidationError").MessageEditValidationErrorCode.MISSING_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (s == null) {
                throw new (o("WAWebMessageEditValidationError")).MessageEditValidationError(o("WAWebMessageEditValidationError").MessageEditValidationErrorCode.MISSING_ENC_PAYLOAD, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const _ = {
                type: o("WAWebMsgType").MsgKind.MessageEditEncrypted,
                encryptedAddOn: s
            };
            const f = o("WAWebWidFactory").asUserWidOrThrow(d);
            const g = yield o("WAWebAddonEncryption").decryptAddOn(_, {
                messageSecret: u,
                iv: l,
                stanzaId: t.id.id,
                originalMessageSender: c,
                addOnSender: f
            });
            const h = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, g);
            const y = o("WAWebMessageEditDecryptedMsgDataConversion").protobufToMessageEditDecryptedMsgData(o("WAWebVerifyProtobufMsgObjectKeys").getUnwrappedProtobufMessage(h) ?? h, e, u);
            const C = h.messageContextInfo?.messageSecret ?? e.messageSecret;
            const b = babelHelpers.extends({}, y, {
                plainProtobufBytes: new Uint8Array(g)
            });
            if (C != null) {
                b.messageSecret = new Uint8Array(C);
            }
            yield o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({
                renderableMsgs: [
                    b
                ],
                forceDualEncryptedValidation: true
            });
            return o("WAWebDBProcessEditProtocolMsgs").generateMessageEdit(t, y);
        });
        return p.apply(this, arguments);
    }
    l.processEncryptedMessageEditMsgs = c;
}, 98);