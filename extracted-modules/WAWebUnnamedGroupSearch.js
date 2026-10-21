__d("WAWebUnnamedGroupSearch", [
    "WAWebChatGetters",
    "WAWebExactSearchMatchResult",
    "WAWebGroupMetadataGetters",
    "WAWebL10NAccentFold",
    "WAWebParticipantListUtils",
    "WAWebSearchMatchStrategies"
], function(t, n, r, o, a, i, l) {
    const e = ", ";
    function s(t, n) {
        const r = u(t);
        if (r == null || !n) {
            return null;
        }
        const match = r.join(e);
        const i = o("WAWebSearchMatchStrategies").substringMatch(match, n);
        if (i == null) {
            return null;
        }
        return {
            match,
            results: i.map((e)=>new (o("WAWebExactSearchMatchResult")).WAWebExactSearchMatchResult(e.startIndex, e.length))
        };
    }
    function u(e) {
        const e_groupMetadata = e.groupMetadata;
        if (e_groupMetadata == null || !o("WAWebChatGetters").getIsGroup(e) || !o("WAWebGroupMetadataGetters").getIsUnnamed(e_groupMetadata)) {
            return null;
        }
        const n = o("WAWebParticipantListUtils").getUnnamedGroupParticipantNames(e_groupMetadata, true).map((e)=>o("WAWebL10NAccentFold").accentFold(e).replace(/\s+/g, " ").trim()).filter(Boolean);
        if (n.length === 0) {
            return null;
        }
        return n;
    }
    l.searchMatchUnnamedGroupExact = s;
}, 98);