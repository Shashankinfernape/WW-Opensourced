__d("WAWebBizAiChatOpenAttribution", [
    "WAWebChatEntryPoint",
    "WAWebChatSearchFilters"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return ((e)=>{
            if (e === o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF) {
                return o("WAWebChatEntryPoint").ChatEntryPoint.ChatlistAiHandoffFilter;
            }
            if (e === o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING) {
                return o("WAWebChatEntryPoint").ChatEntryPoint.ChatlistAiRespondingFilter;
            }
            return o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist;
        })(e?.kind);
    }
    function s(e) {
        if (e === o("WAWebChatEntryPoint").ChatEntryPoint.ChatlistAiHandoffFilter) {
            return "ai_handoff";
        }
        if (e === o("WAWebChatEntryPoint").ChatEntryPoint.ChatlistAiRespondingFilter) {
            return "ai_responding";
        }
        return null;
    }
    l.getBizAiChatEntryPointFromFilter = e;
    l.getBizAiChatFilterNameFromEntryPoint = s;
}, 98);