__d("WAWebRichResponseMsgUtils", [
    "WAWebBotTypes",
    "WAWebRichResponse.flow",
    "sumBy"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (e.parseState === o("WAWebRichResponse.flow").RichResponseParseState.Unparsed) {
            return 0;
        }
        return r("sumBy")(e.fragments, function(e) {
            return s(e);
        });
    }
    function s(e) {
        switch(e.type){
            case o("WAWebRichResponse.flow").RichResponseFragmentType.Text:
                return e.text.length;
            case o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown:
                return 0;
        }
        return 0;
    }
    function u(e) {
        return e.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST && e.richResponse.parseState === o("WAWebRichResponse.flow").RichResponseParseState.Unparsed;
    }
    function c(e) {
        const t = e.reduce(({ filteredFragments, lastFragmentType }, item)=>{
            const t_type = item.type;
            if (t_type === o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown && t_type === lastFragmentType) {
                return {
                    filteredFragments,
                    lastFragmentType
                };
            }
            filteredFragments.push(item);
            return {
                filteredFragments,
                lastFragmentType: t_type
            };
        }, {
            filteredFragments: [],
            lastFragmentType: null
        });
        const t_filteredFragments = t.filteredFragments;
        return t_filteredFragments;
    }
    l.getRichResponseBodyLength = e;
    l.isRichResponseMsgUnparsedAfterCompletion = u;
    l.getBundledRichResponseFragments = c;
}, 98);