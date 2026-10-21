__d("WAWebBotLearnMoreUrl", [
    "WAWebBotGroupGatingUtils",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebBotProduct",
    "WAWebBotSupportGating",
    "WAWebFaqUrl"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (o("WAWebBotSupportGating").isSupportedThirdPartyBot(e, o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures())) {
            return o("WAWebFaqUrl").getThirdPartyAgentLearnMoreUrl();
        }
        return o("WAWebFaqUrl").getStandardBotProfileLearnMoreUrl();
    }
    function s(e) {
        const t = o("WAWebBotProduct").botProductFromServerValue(e?.product);
        if (t === o("WAWebBotProduct").BotProduct.HATCH) {
            return o("WAWebFaqUrl").getHatchLearnMoreUrl();
        }
        if (t === o("WAWebBotProduct").BotProduct.MANUS) {
            return o("WAWebFaqUrl").getManusLearnMoreUrl();
        }
        if (t === o("WAWebBotProduct").BotProduct.MUSE) {
            return u(e);
        }
        return null;
    }
    function u(e) {
        const t = e?.hcaEntrypointId;
        if (t == null || t === "" || e?.isDeleted === true || !o("WAWebBotGroupGatingUtils").isMuseProductSupported()) {
            return o("WAWebFaqUrl").getStandardBotProfileLearnMoreUrl();
        }
        return o("WAWebFaqUrl").getCxtFaqUrl(t);
    }
    l.getBotSupportLearnMoreUrl = e;
    l.getBotChannelLearnMoreUrl = s;
}, 98);