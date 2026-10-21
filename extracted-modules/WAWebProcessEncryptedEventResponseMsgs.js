__d("WAWebProcessEncryptedEventResponseMsgs", [
    "Promise",
    "WALogger",
    "WALongInt",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebEventResponseMsgDataConversion",
    "WAWebEventsValidationError",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "decodeProtobuf",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = [];
            const l = new Map;
            t.forEach((e)=>{
                if (e.addonEncrypted) {
                    const t = a.getForAddon(e);
                    l.set(e, t);
                } else {
                    i.push(e);
                }
            });
            if (l.size === 0) {
                return i;
            }
            const c = yield (u || (u = n("Promise"))).allSettled(Array.from(l.entries(), function([t, n]) {
                return m(t, n);
            }));
            return i.concat(r("compactMap")(c, function(t) {
                switch(t.status){
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        {
                            const n = t.reason;
                            if (n instanceof o("WAWebEventsValidationError").EventCreationValidationError || n instanceof o("WAWebEventsValidationError").EncryptedEventResponseValidationError) {
                                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "Processing encrypted event response failed: ",
                                    ""
                                ])), n.code).sendLogs(n.code);
                                return;
                            }
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "Processing encrypted event response failed: ",
                                "\n",
                                ""
                            ], [
                                "Processing encrypted event response failed: ",
                                "\\n",
                                ""
                            ])), n.message, n.stack).sendLogs("unknown-error");
                        }
                }
            }));
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const { encIv: a, encPayload: i } = e;
            const l = o("WAWebAddonEncryptionError").getValidatedMessageSecret(o("WAWebMsgType").MsgKind.EventResponseEncrypted, t);
            const s = o("WAWebMsgGetters").getOriginalSender(t);
            const u = o("WAWebMsgGetters").getSender(e);
            if (u == null) {
                throw new (o("WAWebEventsValidationError")).EncryptedEventResponseValidationError(o("WAWebEventsValidationError").EncryptedEventResponseValidationErrorCode.EVENT_RESPONSE_MISSING_MESSAGE_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (s == null) {
                throw new (o("WAWebEventsValidationError")).EventCreationValidationError(o("WAWebEventsValidationError").EventCreationValidationErrorCode.EVENT_CREATION_MISSING_MESSAGE_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (a == null) {
                throw new (o("WAWebEventsValidationError")).EncryptedEventResponseValidationError(o("WAWebEventsValidationError").EncryptedEventResponseValidationErrorCode.EVENT_RESPONSE_MISSING_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (i == null) {
                throw new (o("WAWebEventsValidationError")).EncryptedEventResponseValidationError(o("WAWebEventsValidationError").EncryptedEventResponseValidationErrorCode.EVENT_RESPONSE_MISSING_ENC_PAYLOAD, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const c = {
                type: o("WAWebMsgType").MsgKind.EventResponseEncrypted,
                encryptedAddOn: i
            };
            const d = o("WAWebWidFactory").asUserWidOrThrow(u);
            const m = yield o("WAWebAddonEncryption").decryptAddOn(c, {
                messageSecret: l,
                iv: a,
                stanzaId: t.id.id,
                originalMessageSender: s,
                addOnSender: d
            });
            const p = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").Message$EventResponseMessageSpec, m);
            return o("WAWebEventResponseMsgDataConversion").protobufToEventResponseMsgData({
                responseProtobuf: p,
                parentMsgKey: e.targetMessageKey,
                id: e.id,
                senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(r("nullthrows")(p.timestampMs)),
                t: o("WAWebMsgGetters").getT(e),
                ack: e.ack ?? null,
                read: o("WAWebUserPrefsMeUser").isMeAccount(d)
            });
        });
        return p.apply(this, arguments);
    }
    l.processEncryptedEventResponseMsgs = c;
    l.decryptEncryptedEventResponseMsg = m;
}, 98);