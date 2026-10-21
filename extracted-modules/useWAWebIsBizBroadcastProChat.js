__d("useWAWebIsBizBroadcastProChat", [
    "WAWebBizBroadcastProListUtils",
    "WAWebBroadcastMetadataGetters",
    "WAWebFrontendChatGetters",
    "react-compiler-runtime",
    "useWAWebBroadcastMetadataValues",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const n = o("react-compiler-runtime").c(3);
        let r;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebFrontendChatGetters").getBroadcastMetadata
            ];
            n[0] = r;
        } else {
            r = n[0];
        }
        const a = o("useWAWebChatValues").useChatValues(e.id, r);
        const i = a[0];
        const l = o("useWAWebBroadcastMetadataValues").useOptionalBroadcastMetadataValues(i?.id, [
            o("WAWebBroadcastMetadataGetters").getCustomAudienceFbid
        ]) ?? [
            null
        ];
        const s = l[0];
        let u;
        if (n[1] !== s) {
            u = o("WAWebBizBroadcastProListUtils").isBizBroadcastProList(s);
            n[1] = s;
            n[2] = u;
        } else {
            u = n[2];
        }
        return u;
    }
    l.default = e;
}, 98);