__d("WAWebParseBotSessionTransparencyNotice", [
    "WAWebBotSessionTransparencyNotice",
    "WAWebProtobufsAICommon.pb"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const r = t?.botMetadata?.sessionTransparencyMetadata?.sessionTransparencyType;
        if (r != null) {
            e: {
                if (r === o("WAWebProtobufsAICommon.pb").SessionTransparencyType.UNKNOWN_TYPE) {
                    return;
                }
                if (r === o("WAWebProtobufsAICommon.pb").SessionTransparencyType.NY_AI_SAFETY_DISCLAIMER) {
                    return o("WAWebBotSessionTransparencyNotice").BotSessionTransparencyType.AiSafetyDisclaimer;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${r}`);
            }
        }
    }
    l.parseBotSessionTransparencyNotice = e;
}, 98);