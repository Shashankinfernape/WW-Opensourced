__d("WAWebProcessEncryptedEventEditMsgs", [
    "Promise",
    "WALogger",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebAddonInfraError",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebEventEditDecryptedMsgDataConversion",
    "WAWebEventsValidationError",
    "WAWebHandleMsgValidate",
    "WAWebLidMigrationUtils",
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
                if (e.kind !== o("WAWebMsgType").MsgKind.EventEditEncrypted) {
                    throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedMsgType);
                }
                const t = a.getForAddon(e);
                i.set(e, t);
            });
            if (i.size === 0) {
                return [];
            }
            const l = yield (u || (u = n("Promise"))).allSettled(Array.from(i.entries(), function([t, n]) {
                return m(t, n);
            }));
            return r("compactMap")(l, function(t) {
                switch(t.status){
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        {
                            const n = t.reason;
                            if (n instanceof o("WAWebEventsValidationError").EventCreationValidationError || n instanceof o("WAWebEventsValidationError").EncryptedEventEditValidationError || n instanceof o("WAWebAddonEncryptionError").DualEncryptionValidationError) {
                                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "Processing encrypted event edit failed: ",
                                    ""
                                ])), n.code).sendLogs(n.code);
                                return;
                            }
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "Processing encrypted event edit failed: ",
                                "\n",
                                ""
                            ], [
                                "Processing encrypted event edit failed: ",
                                "\\n",
                                ""
                            ])), n.message, n.stack).sendLogs("event_edit_unknown_error");
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
            const u = o("WAWebAddonEncryptionError").getValidatedMessageSecret(o("WAWebMsgType").MsgKind.EventEditEncrypted, t);
            const c = o("WAWebMsgGetters").getOriginalSender(t);
            const d = o("WAWebMsgGetters").getSender(e);
            if (d == null) {
                throw new (o("WAWebEventsValidationError")).EncryptedEventEditValidationError(o("WAWebEventsValidationError").EncryptedEventEditValidationErrorCode.EVENT_EDIT_MISSING_MESSAGE_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (c == null) {
                throw new (o("WAWebEventsValidationError")).EventCreationValidationError(o("WAWebEventsValidationError").EventCreationValidationErrorCode.EVENT_CREATION_MISSING_MESSAGE_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (l == null) {
                throw new (o("WAWebEventsValidationError")).EncryptedEventEditValidationError(o("WAWebEventsValidationError").EncryptedEventEditValidationErrorCode.EVENT_EDIT_MISSING_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (s == null) {
                throw new (o("WAWebEventsValidationError")).EncryptedEventEditValidationError(o("WAWebEventsValidationError").EncryptedEventEditValidationErrorCode.EVENT_EDIT_MISSING_ENC_PAYLOAD, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (!r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(d, c))) {
                throw new (o("WAWebEventsValidationError")).EncryptedEventEditValidationError(o("WAWebEventsValidationError").EncryptedEventEditValidationErrorCode.EVENT_EDIT_PARENT_SENDER_MISMATCH, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const m = {
                type: o("WAWebMsgType").MsgKind.EventEditEncrypted,
                encryptedAddOn: s
            };
            const p = o("WAWebWidFactory").asUserWidOrThrow(d);
            const _ = yield o("WAWebAddonEncryption").decryptAddOn(m, {
                messageSecret: u,
                iv: l,
                stanzaId: t.id.id,
                originalMessageSender: c,
                addOnSender: p
            });
            const f = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, _);
            const g = o("WAWebEventEditDecryptedMsgDataConversion").protobufToEventEditDecryptedMsgData(o("WAWebVerifyProtobufMsgObjectKeys").getUnwrappedProtobufMessage(f) ?? f, e, u);
            const h = f.messageContextInfo?.messageSecret ?? e.messageSecret;
            const y = babelHelpers.extends({}, g, {
                plainProtobufBytes: new Uint8Array(_)
            });
            if (h != null) {
                y.messageSecret = new Uint8Array(h);
            }
            yield o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({
                renderableMsgs: [
                    y
                ],
                forceDualEncryptedValidation: true
            });
            return o("WAWebDBProcessEditProtocolMsgs").generateMessageEdit(t, g);
        });
        return p.apply(this, arguments);
    }
    l.processEncryptedEventEditMsgs = c;
}, 98);