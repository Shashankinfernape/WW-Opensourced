__d("useWAWebChatThreadCallJourneySession", [
    "WAWebChatGetters",
    "WAWebPreCallUserJourneyLogger",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(e) {
        const e_groupMetadata = e.groupMetadata;
        if (!o("WAWebChatGetters").getIsGroup(e) || e_groupMetadata == null) {
            return {
                isCommunityGroup: false
            };
        }
        const n = e_groupMetadata.size > 0 ? e_groupMetadata.size : e_groupMetadata.participants.length;
        return {
            groupSize: n > 0 ? n : undefined,
            isCommunityGroup: e_groupMetadata.parentGroup != null && o("WAWebChatGetters").getIsReadOnly(e) === false
        };
    }
    function c(e) {
        const t = o("react-compiler-runtime").c(3);
        let n;
        let r;
        if (t[0] !== e) {
            n = function() {
                o("WAWebPreCallUserJourneyLogger").PreCallUserJourneyLogger.startChatThreadSession(u(e));
                return d;
            };
            r = [
                e
            ];
            t[0] = e;
            t[1] = n;
            t[2] = r;
        } else {
            n = t[1];
            r = t[2];
        }
        useEffect(n, r);
    }
    function d() {
        o("WAWebPreCallUserJourneyLogger").PreCallUserJourneyLogger.endChatThreadSession();
    }
    l.default = c;
}, 98);