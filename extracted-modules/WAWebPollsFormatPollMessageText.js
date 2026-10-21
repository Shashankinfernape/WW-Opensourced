__d("WAWebPollsFormatPollMessageText", [
    "WAWebFormatMsgTextUtils",
    "WAWebFrontendMsgGetters",
    "WAWebGetSearchMatchFromMsg",
    "WAWebL10N",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e({ msg, options }) {
        const i = r("nullthrows")(o("WAWebFrontendMsgGetters").getAsPoll(msg));
        const l = o("WAWebGetSearchMatchFromMsg").getSearchMatchFromMsg(i, options.searchQuery ?? []);
        if (l == null) {
            return o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(i.pollName, options);
        }
        if (l === i.pollName) {
            return o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(l, options);
        }
        return o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(r("WAWebL10N").isRTL() ? `${l} ○` : `○ ${l}`, options);
    }
    l.default = e;
}, 98);