__d("WAWebGroupAgentRichResponseLinkIndex", [
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebLinkify",
    "WAWebMsgType",
    "WAWebRichResponse.flow",
    "WAWebUnifiedResponseUtils",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = /\{\{([^\s}]+)\}\}[\s\S]*?\{\{\/\1\}\}/g;
    function s(e, t) {
        const { author, richResponse, unifiedResponse } = e;
        if (e.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE || !r("WAWebWid").isGroup(t) || author == null || !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(author) || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return false;
        }
        return unifiedResponse != null && m(u(unifiedResponse)) || richResponse != null && m(c(richResponse));
    }
    function u(e) {
        const t = [];
        for (const n of d(e)){
            for (const r of o("WAWebUnifiedResponseUtils").getPrimitives(n.view_model)){
                const a = ((e)=>{
                    if ((typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAIMarkdownTextUXPrimitive" && "text" in e && "inline_entities" in e) {
                        const { text, inline_entities } = e;
                        return p(text, inline_entities ?? []);
                    }
                    return null;
                })(r);
                if (a != null) {
                    t.push(a);
                }
            }
        }
        return t.join("\n");
    }
    function c(e) {
        const t = [];
        for (const n of e.fragments){
            if (n.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Text) {
                t.push(n.text);
            } else if (n.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Table) {
                for (const r of n.table){
                    t.push(`| ${r.items.join(" | ")} |`);
                }
            }
        }
        return t.join("\n");
    }
    function d({ footer_sections, sections }) {
        return [].concat(Array.isArray(sections) ? sections : [], Array.isArray(footer_sections) ? footer_sections : []);
    }
    function m(e) {
        return e !== "" && o("WAWebLinkify").findLink({
            httpOnly: true,
            text: e
        }) != null;
    }
    function p(text, n) {
        return text.replace(e, (e, t)=>((e)=>{
                if ((typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAIInlineLinkItem" && "url" in e) {
                    const t = e.url;
                    return ` ${t} `;
                }
                return " ";
            })(n.find((e)=>e.key === t)?.metadata));
    }
    l.shouldIndexGroupAgentRichResponseLink = s;
    l.getUnifiedResponseLinkSourceText = u;
    l.getRichResponseLinkSourceText = c;
}, 98);