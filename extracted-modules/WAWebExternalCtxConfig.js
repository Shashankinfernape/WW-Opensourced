__d("WAWebExternalCtxConfig", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    const e = "partnertoken";
    const s = "token";
    function u() {
        return o("WAWebABProps").getABPropConfigValue("external_ctx_authorise_wa_chat");
    }
    function c() {
        return o("WAWebABProps").getABPropConfigValue("external_ctx_foa_logging") === 1;
    }
    function d() {
        const e = o("WAWebABProps").getABPropConfigValue("external_ctx_authorise_existing_chats");
        switch(e){
            case 1:
                return "NEW_CHATS_OR_EXISTING_CHATS_WITH_PARTNER_LINKS";
            case 2:
                return "ALL_CHATS";
            default:
                return "NEW_CHATS_ONLY";
        }
    }
    function m() {
        const t = o("WAWebABProps").getABPropConfigValue("external_ctx_url_param_names") || "";
        let n = t.split(",").map((e)=>e.trim()).filter((e)=>e !== "");
        n = n.length > 0 ? n : [
            e
        ];
        if (c()) {
            n.push(s);
        }
        return n;
    }
    l.isCtxLoggingEnabled = u;
    l.getFirstMessageLoggingOption = d;
    l.getExternalCtxUrlParamNames = m;
}, 98);