__d("WAWebHatchJarvisReplyGate", [
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebHatchFrontendGating"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ chatId, isForwarded, isFromMe, unifiedResponse }) {
        if (unifiedResponse?.passthrough_payload == null) {
            return false;
        }
        if (isForwarded) {
            return o("WAWebBotBaseGating").isRichResponseJarvisForwardReceivingEnabled();
        }
        return !isFromMe && o("WAWebBotUtils").isHatchBot(chatId) && o("WAWebHatchFrontendGating").isHatchJarvisRendererEnabled();
    }
    l.shouldDrawHatchJarvisReply = e;
}, 98);