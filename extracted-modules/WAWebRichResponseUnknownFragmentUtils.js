__d("WAWebRichResponseUnknownFragmentUtils", [
    "fbt",
    "WALogger",
    "WAWebProtobufsAICommonDeprecated.pb",
    "WAWebRichResponse.flow"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    function u({ fragment }, n) {
        const fragment_messageType = fragment.messageType;
        if (fragment_messageType == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Empty rich response submessage type"
            ]))).tags("wa-web-ai-logging").sendLogs("Encountered empty rich response submessage type");
            return "";
        }
        return c(fragment_messageType, n);
    }
    function c(fragment_messageType, t) {
        switch(fragment_messageType){
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_CODE:
                if (t === o("WAWebRichResponse.flow").RichResponseParseState.Partial) {
                    return s._("Some text styles aren't supported on this device yet. View the full response on your phone.");
                }
                return s._("Some text styles aren't supported on this device yet. View the response on your phone.");
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_GRID_IMAGE:
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_INLINE_IMAGE:
                if (t === o("WAWebRichResponse.flow").RichResponseParseState.Partial) {
                    return s._("Image responses aren't supported on this device yet. View the full response on your phone.");
                }
                return s._("Image responses aren't supported on this device yet. View the response on your phone.");
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_TABLE:
                if (t === o("WAWebRichResponse.flow").RichResponseParseState.Partial) {
                    return s._("Tables aren't supported on this device yet. View the full response on your phone.");
                }
                return s._("Tables aren't supported on this device yet. View the response on your phone.");
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_TEXT:
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_DYNAMIC:
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_UNKNOWN:
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_LATEX:
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_MAP:
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_CONTENT_ITEMS:
                if (t === o("WAWebRichResponse.flow").RichResponseParseState.Partial) {
                    return s._("Part of this response isn't supported on this device yet. View the full response on your phone.");
                }
                return s._("Part of this response isn't supported on this device yet. View the response on your phone.");
        }
    }
    l.getUnknownFragmentText = u;
}, 226);