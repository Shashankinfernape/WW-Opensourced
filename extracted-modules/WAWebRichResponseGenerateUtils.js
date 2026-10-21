__d("WAWebRichResponseGenerateUtils", [
    "WALogger",
    "WAWebProtobufsAICommonDeprecated.pb",
    "WAWebRichResponse.flow"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        const t_richResponse = t.richResponse;
        if (t_richResponse != null && t_richResponse.fragments.length > 0) {
            const r = [];
            for (const a of t_richResponse.fragments){
                const i = u(a);
                if (i != null) {
                    r.push(i);
                }
            }
            if (r.length > 0) {
                return r;
            }
        }
        const t_body = t.body;
        if (typeof t_body === "string" && t_body !== "") {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[rich-response-forward] no fragments -> text fallback"
            ]))).sendLogs("rich-response-forward-text-fallback");
            return [
                {
                    messageType: o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_TEXT,
                    messageText: t_body
                }
            ];
        }
        return [];
    }
    function u(e) {
        return ((e)=>{
            if ((typeof e === "object" && e !== null || typeof e === "function") && "type" in e && e.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Text && "text" in e) {
                const t = e.text;
                return c(t);
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && "type" in e && e.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Table && "table" in e) {
                const n = e.table;
                return d(n);
            }
            return null;
        })(e);
    }
    function c(messageText) {
        return {
            messageType: o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_TEXT,
            messageText
        };
    }
    function d(e) {
        return {
            messageType: o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_TABLE,
            tableMetadata: {
                rows: e.map((e)=>({
                        items: e.items,
                        isHeading: e.isHeading
                    }))
            }
        };
    }
    function m(e) {
        const e_botSignatureVerificationMetadata = e.botSignatureVerificationMetadata;
        const n = p(e);
        if (e_botSignatureVerificationMetadata == null && n == null) {
            return null;
        }
        const r = {};
        if (e_botSignatureVerificationMetadata != null) {
            r.verificationMetadata = e_botSignatureVerificationMetadata;
        }
        if (n != null) {
            r.pluginMetadata = n;
        }
        return {
            botMetadata: r
        };
    }
    function p({ botPluginType, botPluginSearchProvider, botPluginSearchUrl, botPluginSearchQuery, botPluginMaybeParent }) {
        if (botPluginType == null && botPluginSearchProvider == null && botPluginSearchUrl == null && botPluginSearchQuery == null && botPluginMaybeParent !== true) {
            return null;
        }
        const i = {};
        if (botPluginType != null) {
            i.pluginType = botPluginType;
        }
        if (botPluginSearchProvider != null) {
            i.provider = botPluginSearchProvider;
        }
        if (botPluginSearchUrl != null) {
            i.searchProviderUrl = botPluginSearchUrl;
        }
        if (botPluginSearchQuery != null) {
            i.searchQuery = botPluginSearchQuery;
        }
        return i;
    }
    l.buildRichResponseSubmessages = s;
    l.buildForwardedRichResponseMessageContextInfo = m;
}, 98);