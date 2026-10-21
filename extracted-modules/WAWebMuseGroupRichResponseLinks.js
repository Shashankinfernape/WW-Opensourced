__d("WAWebMuseGroupRichResponseLinks", [
    "WAWebGroupAgentRichResponseLinkIndex",
    "WAWebLinkify",
    "WAWebMsgGetters",
    "WAWebMuseGroupRichResponseForward",
    "WAWebUnifiedResponseUtils",
    "uniqueBy"
], function(t, n, r, o, a, i, l) {
    const e = new WeakMap;
    function s(t) {
        if (!o("WAWebMuseGroupRichResponseForward").isMuseGroupAgentRichResponse(t)) {
            return [];
        }
        const { richResponse, unifiedResponse } = t;
        const unifiedResponseVisible = o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(t);
        const l = e.get(t);
        if (l != null && l.richResponse === richResponse && l.unifiedResponse === unifiedResponse && l.unifiedResponseVisible === unifiedResponseVisible) {
            return l.links;
        }
        const s = u(t, unifiedResponseVisible);
        const c = s === "" ? [] : r("uniqueBy")(o("WAWebLinkify").findLinks(s, false, o("WAWebMsgGetters").getSender(t)), function(e) {
            return e.href;
        }).filter((e)=>e.isHttp);
        e.set(t, {
            links: c,
            richResponse,
            unifiedResponse,
            unifiedResponseVisible
        });
        return c;
    }
    function u({ richResponse, unifiedResponse }, unifiedResponseVisible) {
        if (unifiedResponse != null && unifiedResponseVisible) {
            const a = o("WAWebGroupAgentRichResponseLinkIndex").getUnifiedResponseLinkSourceText(unifiedResponse);
            if (a !== "") {
                return a;
            }
        }
        if (richResponse != null) {
            return o("WAWebGroupAgentRichResponseLinkIndex").getRichResponseLinkSourceText(richResponse);
        }
        return "";
    }
    l.getMuseGroupRichResponseGalleryLinks = s;
}, 98);