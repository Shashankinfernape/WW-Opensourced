__d("WAWebSendMsgCtwaAttributionNode", [
    "WASmaxOutMessagePublishCtwaAttributionMixin",
    "WAWebExternalCtxConfig",
    "WAWebExternalEntryPointPrefs",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        for(let t = e.getAllCMCs(), n = 0, r = 0; r < t.length; r++){
            for(let a = t[r].getModelsArray(), i = 0; i < a.length; i++){
                const l = a[i];
                if (!o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(l.type) && l.isSendFailure !== true && (++n, n > 1)) {
                    return true;
                }
            }
        }
        return false;
    }
    function s(t, partnerName) {
        const r = o("WAWebExternalCtxConfig").getFirstMessageLoggingOption();
        switch(r){
            case "NEW_CHATS_OR_EXISTING_CHATS_WITH_PARTNER_LINKS":
                return partnerName != null || !e(t);
            case "ALL_CHATS":
                return true;
            case "NEW_CHATS_ONLY":
                return !e(t);
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${r}`);
                })();
        }
    }
    function u(e) {
        if (e == null || !o("WAWebExternalCtxConfig").isCtxLoggingEnabled()) {
            return null;
        }
        const t = o("WAWebExternalEntryPointPrefs").getExternalEntryPoint(e.id);
        if (t == null || !s(e, t.partnerName)) {
            return null;
        }
        const n = {
            lt: `WEB_${t.deepLinkType}`
        };
        if (!t.authSuccess) {
            n.s = 0;
        }
        if (t.partnerName != null) {
            n.p = t.partnerName;
        }
        const ctwaAttributionElementValue = new TextEncoder().encode(JSON.stringify(n));
        return o("WASmaxOutMessagePublishCtwaAttributionMixin").makeCtwaAttributionCtwaAttribution({
            ctwaAttributionElementValue
        });
    }
    l.getCtwaAttributionNode = u;
}, 98);