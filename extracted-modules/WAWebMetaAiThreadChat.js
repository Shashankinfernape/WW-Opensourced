__d("WAWebMetaAiThreadChat", [
    "WAWebBotGating",
    "WAWebBotProduct",
    "WAWebResolveBotProfile"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s(o("WAWebResolveBotProfile").resolveBotSupportInput(e));
    }
    function s(e) {
        if (e == null || e.isDeprecated === true || e.isDeleted === true || o("WAWebBotProduct").botProductFromServerValue(e.product) !== o("WAWebBotProduct").BotProduct.META_AI_THREAD) {
            return false;
        }
        return o("WAWebBotGating").isMetaAiThreadRenderingEnabled();
    }
    l.isMetaAiThreadChat = e;
    l.isMetaAiThreadSupportInput = s;
}, 98);