__d("WAWebMuseGroupRichResponseForward", [
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotStaticProfiles",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebGetPlainTextFromBotMsg",
    "WAWebGroupAgentProfileRouting",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUnifiedResponseUtils"
], function(t, n, r, o, a, i, l) {
    const e = 1023;
    const s = "…";
    const u = "image/jpeg";
    const c = "video/mp4";
    const d = "READY";
    function m(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE || !e.id.remote.isGroup() || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return false;
        }
        const t = o("WAWebMsgGetters").getSender(e);
        if (t == null || !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(t) || o("WAWebBotStaticProfiles").isStaticProfile(t)) {
            return false;
        }
        const n = o("WAWebBotProfileCollection").BotProfileCollection.get(t);
        if (n?.lastFetchedTimeMs == null) {
            return true;
        }
        return o("WAWebGroupAgentProfileRouting").isMuseGroupAgentProfileProduct(t, o("WAWebBotProduct").botProductFromServerValue(n.product));
    }
    function p(e) {
        if (e.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST || e.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER || o("WAWebUnifiedResponseUtils").isQuotaUpsellResponse(e.unifiedResponse)) {
            return false;
        }
        return _(e) != null || f(e) !== "";
    }
    function _(e) {
        const e_unifiedResponse = e.unifiedResponse;
        if (e_unifiedResponse == null || !o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)) {
            return null;
        }
        const n = C(e_unifiedResponse);
        if (n == null) {
            return null;
        }
        const n_media = n.media;
        const { height, mime_type, url, width } = n_media;
        if (url == null || url === "") {
            return null;
        }
        if (n.kind === "image") {
            return {
                kind: "image",
                mimetype: R(mime_type, "image", u),
                url
            };
        }
        if (width == null || width === 0 || height == null || height === 0) {
            return null;
        }
        return {
            kind: "video",
            mimetype: R(mime_type, "video", c),
            url
        };
    }
    function f(e) {
        return o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e, {
            includeBodyFallback: false
        }) ?? "";
    }
    function g(t) {
        const n = Array.from(f(t));
        if (n.length <= e) {
            return n.join("");
        }
        return n.slice(0, e).join("") + s;
    }
    function h(e) {
        return m(e) && _(e) != null;
    }
    function y(e) {
        if (!m(e)) {
            return null;
        }
        const t = _(e);
        if (t == null) {
            return null;
        }
        const n = g(e);
        if (n === "") {
            return null;
        }
        return {
            caption: n,
            kind: t.kind
        };
    }
    function C(e) {
        for (const t of e.sections){
            for (const n of o("WAWebUnifiedResponseUtils").getPrimitives(t.view_model)){
                const r = b(n);
                if (r != null) {
                    return r;
                }
            }
        }
        return null;
    }
    function b(e) {
        return ((e)=>{
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAIImagePrimitive") {
                return v(e.full_image);
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAIImaginePrimitive") {
                const n = e;
                if (L(n)) {
                    return {
                        kind: o("WAWebUnifiedResponseUtils").isAnimateImagineType(n.imagine_type) ? "video" : "image",
                        media: n.media
                    };
                }
                return null;
            }
            return null;
        })(e);
    }
    function v(media) {
        if (media != null && S(media)) {
            return {
                kind: "image",
                media
            };
        }
        return null;
    }
    function S(media) {
        return media?.url != null && media.url !== "";
    }
    function R(mime_type, t, n) {
        if (mime_type != null && mime_type.startsWith(`${t}/`)) {
            return mime_type;
        }
        return n;
    }
    function L(e) {
        const n = e.status?.status;
        return (n == null || String(n) === d) && S(e.media);
    }
    l.isMuseGroupAgentRichResponse = m;
    l.canForwardMuseGroupRichResponse = p;
    l.getMuseGroupForwardMedia = _;
    l.getMuseGroupForwardText = f;
    l.getMuseGroupForwardCaption = g;
    l.hasMuseGroupForwardMedia = h;
    l.getMuseGroupForwardCaptionPreview = y;
}, 98);