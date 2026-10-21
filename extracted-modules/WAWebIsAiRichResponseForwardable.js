__d("WAWebIsAiRichResponseForwardable", [
    "WAWebBotTypes",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUtils",
    "WAWebFrontendMsgGetters",
    "WAWebRichResponse.flow",
    "WAWebUnifiedResponseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebFrontendMsgGetters").getAsRichResponse(e);
        if (t == null || e.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST || e.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER || !o("WAWebBotUnifiedResponseGating").isAiRichResponseForwardingSenderEnabled(e.t) || o("WAWebUnifiedResponseUtils").unifiedResponseHasMediaContent(t.unifiedResponse) || o("WAWebUnifiedResponseUtils").isQuotaUpsellResponse(t.unifiedResponse) || o("WAWebUnifiedResponseUtils").unifiedResponseHasConnectorActionCard(t.unifiedResponse) || s(e, t.unifiedResponse) || o("WAWebUnifiedResponseUtils").unifiedResponseHasSpaceCard(t.unifiedResponse)) {
            return false;
        }
        if (o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)) {
            return true;
        }
        const fragments = t.richResponse.fragments;
        if (fragments.length === 0) {
            return false;
        }
        return fragments.every((e)=>e.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Text || e.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Table);
    }
    function s(e, unifiedResponse) {
        return o("WAWebUnifiedResponseUtils").unifiedResponseHasSecureCredentialRequest(unifiedResponse) || unifiedResponse != null && o("WAWebBotUtils").isHatchBot(e.id.remote) && o("WAWebUnifiedResponseUtils").hasNestedOrEmbeddedContent(unifiedResponse);
    }
    l.isAiRichResponseForwardable = e;
}, 98);