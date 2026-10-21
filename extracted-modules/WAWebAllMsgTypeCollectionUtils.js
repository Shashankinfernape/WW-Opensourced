__d("WAWebAllMsgTypeCollectionUtils", [
    "WAWebChatFlowTypes",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Set([
        o("WAWebChatFlowTypes").ChatKindType.Chat,
        o("WAWebChatFlowTypes").ChatKindType.Group
    ]);
    const s = 5000;
    const u = 100;
    function c(t) {
        return t.filter((t)=>{
            if (o("WAWebMsgGetters").getIsStatus(t)) {
                return false;
            }
            const n = o("WAWebFrontendMsgGetters").getMaybeChat(t);
            if (n == null) {
                return false;
            }
            const r = o("WAWebFrontendChatGetters").getKind(n);
            return !(r == null || !e.has(r) || n.isLocked);
        });
    }
    function d(e, t) {
        return t.t - e.t;
    }
    function m(e, t) {
        return e.t - t.t;
    }
    function p(e, t) {
        const o = e.mediaData?.size || 0;
        const a = t.mediaData?.size || 0;
        return a - o;
    }
    function _(e) {
        return function(t, n) {
            switch(e){
                case "desc":
                    return d(t, n);
                case "fileSizeDesc":
                    return p(t, n);
                default:
                    return m(t, n);
            }
        };
    }
    l.HARD_LIMIT_MAX_COUNT = s;
    l.CHUNKS_SIZE = u;
    l.filterOnlyMsgsFromChatAndGroup = c;
    l.sortMsgsByInputComparator = _;
}, 98);