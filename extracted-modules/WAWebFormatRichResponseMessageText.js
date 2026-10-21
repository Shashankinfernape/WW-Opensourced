__d("WAWebFormatRichResponseMessageText", [
    "fbt",
    "WAWebBotUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFormatMsgTextUtils",
    "WAWebFormatUnknownMsg",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebRichResponse.flow",
    "WAWebRichResponseMsgUtils",
    "WAWebRichResponseTableFragmentText.react",
    "WAWebRichResponseUnknownFragmentUtils",
    "WAWebUnifiedResponseUtils",
    "getPlainTextFromUnifiedResponse"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg, options }) {
        const a = o("WAWebFrontendMsgGetters").getAsRichResponse(msg);
        if (a != null && o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(msg)) {
            return u(msg, r("getPlainTextFromUnifiedResponse")(a.unifiedResponse), options.formatAsLastMsg === true, options);
        }
        if (a == null || o("WAWebRichResponseMsgUtils").isRichResponseMsgUnparsedAfterCompletion(a)) {
            return o("WAWebFormatUnknownMsg").formatUnknownMsgText(msg);
        }
        const a_richResponse = a.richResponse;
        const { fragments, parseState } = a_richResponse;
        const c = o("WAWebRichResponseMsgUtils").getBundledRichResponseFragments(fragments).map((e)=>d(e, parseState)).join("\n");
        if (c.trim() === "") {
            return o("WAWebFormatUnknownMsg").formatUnknownMsgText(msg);
        }
        return o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(msg, c, options);
    }
    function u(msg, t, n, options) {
        const a = t.trim() === "" && n ? c(msg) : null;
        if (a == null) {
            return o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(msg, t, options);
        }
        return s._("A message from {agent name}", [
            s._param("agent name", a)
        ]);
    }
    function c(msg) {
        if (o("WAWebMsgGetters").getIsSentByMe(msg) || !o("WAWebBotUtils").isHatchBot(msg.id.remote)) {
            return null;
        }
        const t = o("WAWebContactCollection").ContactCollection.get(msg.id.remote);
        const n = t == null ? "" : o("WAWebContactGetters").getName(t);
        if (n === "") {
            return null;
        }
        return n;
    }
    function d(e, parseState) {
        switch(e.type){
            case o("WAWebRichResponse.flow").RichResponseFragmentType.Text:
                return e.text;
            case o("WAWebRichResponse.flow").RichResponseFragmentType.Table:
                return o("WAWebRichResponseTableFragmentText.react").getTableFragmentText(e);
            case o("WAWebRichResponse.flow").RichResponseFragmentType.ContentItems:
                return "";
            case o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown:
                return o("WAWebRichResponseUnknownFragmentUtils").getUnknownFragmentText(e, parseState);
        }
    }
    l.default = e;
}, 226);