__d("WAWebBotProductGating", [
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebHatchGating"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (e === o("WAWebBotProduct").BotProduct.META_AI) {
            return o("WAWebBotBaseGating").isBotEnabled();
        }
        if (e === o("WAWebBotProduct").BotProduct.OPEN_META_AI_FOR_GROUP) {
            return o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled();
        }
        if (e === o("WAWebBotProduct").BotProduct.TEE_META_AI_GROUP) {
            return o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled();
        }
        if (e === o("WAWebBotProduct").BotProduct.HATCH) {
            return o("WAWebHatchGating").isHatchIntegrationEnabledForPrimaryFeature({
                primaryAiHatchIntegrationEnabled: t.aiHatchIntegrationEnabled
            });
        }
        if (e === o("WAWebBotProduct").BotProduct.MUSE) {
            return false;
        }
        if (e === o("WAWebBotProduct").BotProduct.THIRD_PARTY) {
            return o("WAWebABProps").getABPropConfigValue("ai_3p_bot_product_chat_rendering_enabled");
        }
        if (e === o("WAWebBotProduct").BotProduct.SUPPORT) {
            return true;
        }
        if (e === o("WAWebBotProduct").BotProduct.META_AI_THREAD) {
            return o("WAWebBotGating").isMetaAiThreadRenderingEnabled();
        }
        if (e === o("WAWebBotProduct").BotProduct.MANUS || e === o("WAWebBotProduct").BotProduct.SIDE_CHAT) {
            return false;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function s(e) {
        return e === o("WAWebBotProduct").BotProduct.MUSE;
    }
    l.isBotProductGateOn = e;
    l.isMuseProductGateOn = s;
}, 98);