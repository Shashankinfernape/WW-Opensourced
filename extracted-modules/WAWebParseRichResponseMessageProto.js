__d("WAWebParseRichResponseMessageProto", [
    "WAWebBotBaseGating",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUnifiedResponseMutationUtils",
    "WAWebMsgType",
    "WAWebRichResponseParseUtils",
    "WAWebRichResponseValidationError",
    "WAWebUnifiedResponseUtils",
    "WAWebWamEnumE2eFailureReason"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ baseMessage: n, messageProtobuf: r }) {
        const a = r.richResponseMessage;
        if (a != null) {
            if (!s(n, a)) {
                throw new (o("WAWebRichResponseValidationError")).RichResponseValidationError(o("WAWebRichResponseValidationError").RichResponseValidationErrorCode.INVALID_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const i = u(a.contextInfo);
            if (i && !o("WAWebBotBaseGating").isRichResponseForwardReceivingEnabled()) {
                return c(n);
            }
            const { messageType: l, submessages: m } = a;
            if (l == null) {
                throw new (o("WAWebRichResponseValidationError")).RichResponseValidationError(o("WAWebRichResponseValidationError").RichResponseValidationErrorCode.MISSING_MESSAGE_TYPE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const p = o("WAWebRichResponseParseUtils").generateFutureproofRichResponse(l, m);
            const _ = o("WAWebRichResponseParseUtils").parseRichResponse(p);
            const f = d(a, r.messageContextInfo, n.t) ? o("WAWebRichResponseParseUtils").parseUnifiedResponse(a.unifiedResponse) : null;
            const g = o("WAWebBotUnifiedResponseMutationUtils").parseUnifiedResponseMutationMediaList(r.messageContextInfo);
            const h = g != null && o("WAWebBotUnifiedResponseGating").isUnifiedResponseMutationEnabled() ? g : void 0;
            if (i && o("WAWebUnifiedResponseUtils").unifiedResponseHasMediaContent(f) && (h == null || !o("WAWebBotBaseGating").isRichResponseForwardMediaReceivingEnabled())) {
                return c(n);
            }
            const y = a.unifiedResponse?.data != null ? new Uint8Array(a.unifiedResponse.data) : null;
            return {
                msgData: babelHelpers.extends({}, n, {
                    type: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE,
                    kind: o("WAWebMsgType").MsgKind.RichResponse,
                    richResponse: _,
                    unifiedResponse: f,
                    unifiedResponseRawData: y,
                    unifiedResponseMutationMediaList: h
                }),
                contextInfo: o("WAWebBotBaseGating").isRichResponseForwardReceivingEnabled() ? a.contextInfo : void 0
            };
        }
    }
    function s(e, t) {
        if (e.from.isBot() || e.id.participant?.isBot() === true || e.author?.isBot() === true || e.from.isAiHub()) {
            return true;
        }
        const o = t.contextInfo;
        return u(o);
    }
    function u(e) {
        return e?.isForwarded === true && e?.forwardedAiBotMessageInfo?.botJid != null;
    }
    function c(e) {
        return {
            msgData: babelHelpers.extends({}, e, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                subtype: void 0,
                futureproofType: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE
            }),
            contextInfo: null
        };
    }
    function d(e, t, n) {
        if (e.unifiedResponse == null) {
            return false;
        }
        return t?.botMetadata?.imagineMetadata?.imagineType != null && o("WAWebBotUnifiedResponseGating").isUnifiedResponseImagineReceiverEnabled() || o("WAWebBotUnifiedResponseGating").isUnifiedResponseReceiverEnabled(n);
    }
    l.default = e;
}, 98);