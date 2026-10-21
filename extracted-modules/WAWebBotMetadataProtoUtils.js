__d("WAWebBotMetadataProtoUtils", [
    "WALogger",
    "WAWebAddBotTransparencyNotice",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebParseAiMediaCollectionMetadata",
    "WAWebParseBotSessionTransparencyNotice",
    "WAWebWid",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n = false) {
        const b = t?.botMetadata?.botGroupMetadata;
        const v = b?.participantsMetadata ?? [];
        const S = e.id?.remote?.isGroup() === true && u(v, o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled);
        if (b != null && S) {
            const L = e.id?.participant;
            const E = [];
            if (L != null && L.isFbidBot()) {
                E.push(L);
            } else {
                E.push(...e.mentionedJidList?.filter(function(e) {
                    return e instanceof r("WAWebWid") && e.isFbidBot();
                }) ?? []);
            }
            const T = c(e, v);
            const D = d(T, E);
            if (D != null) {
                e.botGroupParticipant = D;
            }
        }
        const x = t?.botMetadata?.botResponseId;
        if (x != null) {
            e.botResponseId = x;
        }
        if (!n) {
            if (t?.botMetadata?.pluginMetadata?.pluginType != null) {
                e.botPluginType = t.botMetadata.pluginMetadata.pluginType;
            } else if (t?.botMetadata?.pluginMetadata != null) {
                e.botPluginMaybeParent = true;
            }
            if (t?.botMetadata?.pluginMetadata?.referenceIndex != null) {
                e.botPluginReferenceIndex = t.botMetadata.pluginMetadata.referenceIndex;
            }
            if (t?.botMetadata?.pluginMetadata?.provider != null) {
                e.botPluginSearchProvider = t.botMetadata.pluginMetadata.provider;
            }
            if (t?.botMetadata?.pluginMetadata?.searchProviderUrl != null) {
                e.botPluginSearchUrl = t.botMetadata.pluginMetadata.searchProviderUrl;
            }
            if (t?.botMetadata?.pluginMetadata?.thumbnailCdnUrl != null) {
                e.botReelPluginThumbnailCdnUrl = t.botMetadata.pluginMetadata.thumbnailCdnUrl;
            }
            if (t?.botMetadata?.pluginMetadata?.searchQuery != null) {
                e.botPluginSearchQuery = t.botMetadata.pluginMetadata.searchQuery;
            }
            const $ = o("WAWebParseAiMediaCollectionMetadata").parseAiMediaCollectionMetadata(t);
            if ($ != null) {
                e.aiMediaCollectionInfo = $;
            }
            p(e, t);
        }
    }
    function u(e, t) {
        return e.some(({ botFbid })=>{
            if (botFbid == null || botFbid === "") {
                return false;
            }
            try {
                return t(o("WAWebWidFactory").createWid(`${botFbid}@bot`));
            } catch (e) {
                return false;
            }
        });
    }
    function c(e, t) {
        const n = [];
        for (const r of t){
            const o = r.botFbid;
            if (!(o == null || o === "")) {
                const a = m(o);
                if (a != null) {
                    n.push(a);
                }
            }
        }
        if (n.length > 0) {
            e.botGroupParticipants = n;
        }
        return n;
    }
    function d(e, t) {
        let n = null;
        const r = (v)=>{
            const e = o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(v);
            const a = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(v);
            if (!o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled(v)) {
                return 0;
            }
            if (n == null && (e || a)) {
                n = v;
            }
            if (t.some((e)=>e.equals(v))) {
                return {
                    v
                };
            }
        };
        let a;
        for (const i of e){
            a = r(i);
            if (a !== 0 && a) {
                return a.v;
            }
        }
        return n;
    }
    function m(t) {
        try {
            return o("WAWebWidFactory").createWid(`${t}@bot`);
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[bot group] botGroupMetadata failed with error: ",
                ""
            ])), error).sendLogs("failed-to-process-bot-group-meta");
            return null;
        }
    }
    function p(e, t) {
        const remote = e.id.remote;
        const a = o("WAWebParseBotSessionTransparencyNotice").parseBotSessionTransparencyNotice(remote, t);
        if (a != null) {
            o("WAWebAddBotTransparencyNotice").addBotSessionTransparencyNotice(remote, a);
            return;
        }
        if (t?.botMetadata?.messageDisclaimerText != null) {
            e.botMessageDisclaimerText = t?.botMetadata?.messageDisclaimerText;
        }
    }
    l.parseBotMetadataProto = s;
    l.hasGroupBotMetadata = u;
}, 98);