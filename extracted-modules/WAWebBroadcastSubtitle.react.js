__d("WAWebBroadcastSubtitle.react", [
    "WAWebBizBroadcastProListUtils",
    "WAWebBizBroadcastProSubtitleLoadable",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBroadcastMetadataGetters",
    "WAWebChatGetters",
    "WAWebChatSubtitleText.react",
    "WAWebFrontendChatGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebBroadcastMetadataValues",
    "useWAWebChatValues",
    "useWAWebSourceSnapshot"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = "add remove reset";
    const c = new EventTarget;
    function d(e) {
        const n = o("react-compiler-runtime").c(8);
        const e_chat = e.chat;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebFrontendChatGetters").getBroadcastMetadata,
                o("WAWebChatGetters").getBBProEntrypointEnabled
            ];
            n[0] = i;
        } else {
            i = n[0];
        }
        const l = o("useWAWebChatValues").useChatValues(e_chat.id, i);
        const d = l[0];
        const p = l[1];
        const _ = o("useWAWebBroadcastMetadataValues").useOptionalBroadcastMetadataValues(d?.id, [
            o("WAWebBroadcastMetadataGetters").getCustomAudienceFbid
        ]) ?? [
            null
        ];
        const audienceId = _[0];
        const g = d?.recipients;
        let h;
        if (n[1] !== g?.length) {
            h = function() {
                return g?.length ?? 0;
            };
            n[1] = g?.length;
            n[2] = h;
        } else {
            h = n[2];
        }
        const y = r("useWAWebSourceSnapshot")(g ?? c, u, h);
        if (o("WAWebBizBroadcastProListUtils").isBizBroadcastProList(audienceId) && p) {
            let C;
            if (n[3] !== audienceId || n[4] !== y) {
                C = s.jsx(o("WAWebBizBroadcastProSubtitleLoadable").WAWebBizBroadcastProSubtitleLoadable, {
                    audienceId,
                    fallbackRecipientCount: y
                });
                n[3] = audienceId;
                n[4] = y;
                n[5] = C;
            } else {
                C = n[5];
            }
            return C;
        }
        let b;
        if (n[6] !== y) {
            b = <M2 recipientCount={y}/>;
            n[6] = y;
            n[7] = b;
        } else {
            b = n[7];
        }
        return b;
    }
    function M2(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_recipientCount = e.recipientCount;
        if (e_recipientCount === 0) {
            return null;
        }
        let a;
        if (t[0] !== e_recipientCount) {
            a = o("WAWebBizBroadcastsCreationStrings").getAudienceRecipientCountLabel(e_recipientCount);
            t[0] = e_recipientCount;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] !== a) {
            i = s.jsx(r("WAWebChatSubtitleText.react"), {
                location: "title",
                text: a
            });
            t[2] = a;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    l.default = d;
}, 98);