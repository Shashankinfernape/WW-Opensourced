__d("WAWebGenerateRichResponseMessageProto", [
    "WAWebProtobufsAICommon.pb",
    "WAWebProtobufsAICommonDeprecated.pb",
    "WAWebProtobufsE2E.pb",
    "WAWebRichResponseGenerateUtils",
    "WAWebUnifiedResponseUtils"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json }) {
        const r = json;
        const richResponseMessage = {
            messageType: o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseMessageType.AI_RICH_RESPONSE_TYPE_STANDARD,
            submessages: o("WAWebRichResponseGenerateUtils").buildRichResponseSubmessages(r),
            unifiedResponse: o("WAWebUnifiedResponseUtils").buildUnifiedResponseFromRawData(r.unifiedResponseRawData),
            contextInfo: babelHelpers.extends({}, contextInfo, {
                isForwarded: true,
                forwardingScore: r.forwardingScore,
                forwardOrigin: o("WAWebProtobufsE2E.pb").ContextInfo$ForwardOrigin.META_AI,
                botMessageSharingInfo: {
                    botEntryPointOrigin: o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.META_AI_FORWARD,
                    forwardScore: r.forwardingScore
                }
            })
        };
        const i = {
            richResponseMessage
        };
        const l = o("WAWebRichResponseGenerateUtils").buildForwardedRichResponseMessageContextInfo(r);
        if (l != null) {
            i.messageContextInfo = l;
        }
        return i;
    }
    l.default = e;
}, 98);