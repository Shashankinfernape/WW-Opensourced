__d("useWAWebIsNewsletterMsgPinned", [
    "WATimeUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterPinDisplay",
    "WAWebNewsletterPinGatingUtils",
    "react-compiler-runtime",
    "useWAWebMsgValues",
    "useWAWebNewsletterMetadataValues"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const r = o("react-compiler-runtime").c(6);
        let a;
        if (r[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getServerId,
                o("WAWebMsgGetters").getIsNewsletterMsg
            ];
            r[0] = a;
        } else {
            a = r[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e, a);
        const l = i[0];
        const s = i[1];
        let u;
        if (r[1] !== s || r[2] !== e) {
            u = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(e, s);
            r[1] = s;
            r[2] = e;
            r[3] = u;
        } else {
            u = r[3];
        }
        const d = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(u?.newsletterMetadata?.id, [
            o("WAWebNewsletterMetadataGetters").getPinnedMessages,
            o("WAWebNewsletterMetadataGetters").getMembershipType
        ], {
            isStrong: true
        }) ?? [
            [],
            null
        ];
        const m = d[0];
        const p = d[1];
        if (l == null || !o("WAWebNewsletterPinGatingUtils").canViewNewsletterPins(p)) {
            return false;
        }
        let _;
        if (r[4] !== l) {
            _ = function(t) {
                return t.serverId === l;
            };
            r[4] = l;
            r[5] = _;
        } else {
            _ = r[5];
        }
        return o("WAWebNewsletterPinDisplay").filterActiveNewsletterPins(m, o("WATimeUtils").unixTime()).some(_);
    }
    l.default = e;
}, 98);