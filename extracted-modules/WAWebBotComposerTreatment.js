__d("WAWebBotComposerTreatment", [
    "WAWebBotComposerSupport",
    "WAWebBotGroupGatingUtils",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebBotProductGating",
    "WAWebBotStaticProfiles",
    "WAWebMuseBotIdentity",
    "WAWebResolveBotProfile"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (!o("WAWebBotStaticProfiles").isBotSupportClassifiable(e)) {
            return o("WAWebBotComposerSupport").BotComposerTreatment.COMPOSE;
        }
        const t = o("WAWebResolveBotProfile").resolveBotSupportInput(e);
        if (o("WAWebMuseBotIdentity").isMuseBotProfileProduct(e, t?.product) && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return o("WAWebBotComposerSupport").BotComposerTreatment.DEPRECATED;
        }
        return o("WAWebBotComposerSupport").getBotComposerTreatment({
            input: t,
            isProductGateOn: function(t) {
                return o("WAWebBotProductGating").isBotProductGateOn(t, o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures());
            }
        });
    }
    function s(t) {
        return e(t) !== o("WAWebBotComposerSupport").BotComposerTreatment.COMPOSE;
    }
    l.getBotChatComposerTreatment = e;
    l.isBotSupportComposerBlocked = s;
}, 98);