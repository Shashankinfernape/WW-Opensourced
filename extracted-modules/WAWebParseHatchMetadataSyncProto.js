__d("WAWebParseHatchMetadataSyncProto", [
    "WALogger",
    "WAWebBotUtils",
    "WAWebHandleHatchMetadataSync",
    "WAWebHatchDecodeError",
    "WAWebHatchMetadataExchangeManager",
    "WAWebHatchMetadataOperationDecoder",
    "WAWebHatchMetadataSyncValidationError",
    "WAWebMsgType",
    "WAWebWamEnumE2eFailureReason",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c({ baseMessage: i }, t) {
        const l = i.id?.remote;
        if (l == null || !o("WAWebBotUtils").isHatchBot(l)) {
            throw new (o("WAWebHatchMetadataSyncValidationError")).HatchMetadataSyncValidationError(o("WAWebHatchMetadataSyncValidationError").HatchMetadataSyncValidationCode.UNEXPECTED_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        const s = d(t, i.id?.toString());
        m(s, i.id?.id);
        return {
            msgData: babelHelpers.extends({}, i, {
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                kind: o("WAWebMsgType").MsgKind.Protocol,
                subtype: "hatch_metadata_sync",
                hatchMetadataSync: s
            }),
            contextInfo: null
        };
    }
    function d(t, n) {
        const a = t?.hatchMetadataSync;
        const i = a?.data;
        if (i == null || i.byteLength === 0) {
            throw new (o("WAWebHatchMetadataSyncValidationError")).HatchMetadataSyncValidationError(o("WAWebHatchMetadataSyncValidationError").HatchMetadataSyncValidationCode.EMPTY_PAYLOAD, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        let l;
        try {
            l = o("WAWebHatchMetadataOperationDecoder").decodeHatchMetadataOperation(i, a?.timestampMs, a?.requestId, n);
        } catch (t) {
            throw t instanceof o("WAWebHatchDecodeError").HatchDecodeError ? (o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-metadata: decode failed (",
                ")"
            ])), String(t.reason)).sendLogs("hatch-metadata-decode-error"), r("WAWebHatchMetadataExchangeManager").failRequest(a?.requestId, "decode_failed"), new (o("WAWebHatchMetadataSyncValidationError")).HatchMetadataSyncValidationError(o("WAWebHatchMetadataSyncValidationError").HatchMetadataSyncValidationCode.DECODE_FAILURE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE)) : (o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-metadata: unexpected decode failure"
            ]))).catching(t instanceof Error ? t : r("err")(String(t))).sendLogs("hatch-metadata-decode-unexpected-error"), new (o("WAWebHatchMetadataSyncValidationError")).HatchMetadataSyncValidationError(o("WAWebHatchMetadataSyncValidationError").HatchMetadataSyncValidationCode.UNEXPECTED_DECODE_FAILURE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE));
        }
        if (l == null) {
            throw new (o("WAWebHatchMetadataSyncValidationError")).HatchMetadataSyncValidationError(o("WAWebHatchMetadataSyncValidationError").HatchMetadataSyncValidationCode.UNHANDLED_CONTROL, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.UNSUPPORTED_MESSAGE_TYPE);
        }
        return l;
    }
    function m(e, t) {
        try {
            o("WAWebHandleHatchMetadataSync").handleHatchMetadataSync(e, t);
        } catch (e) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-metadata: apply failed"
            ]))).catching(e instanceof Error ? e : r("err")(String(e))).sendLogs("hatch-metadata-apply-error");
        }
    }
    l.default = c;
}, 98);