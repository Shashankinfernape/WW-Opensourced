__d("useWAWebNewsletterMessageVisibilityLogger", [
    "WAWebMerlinImpressionManager",
    "react",
    "react-compiler-runtime",
    "useVPVDImpression"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useCallback = (e || (e = o("react"))).useCallback;
    function u(e) {
        const t = o("react-compiler-runtime").c(11);
        const { aiProvenanceLabelEnabled, aiProvenanceLabelShown, channelUserType, cid, isOriginalAuthor, isStarredPost, mediaData, postId } = e;
        let m;
        if (t[0] !== aiProvenanceLabelEnabled || t[1] !== aiProvenanceLabelShown || t[2] !== channelUserType || t[3] !== cid || t[4] !== isOriginalAuthor || t[5] !== isStarredPost || t[6] !== mediaData || t[7] !== postId) {
            m = function({ hiddenTime, visibleTime }) {
                o("WAWebMerlinImpressionManager").logNewsletterMessageVisibility({
                    enter_ts: visibleTime,
                    exit_ts: hiddenTime,
                    itemId: postId,
                    visibilityData: {
                        cid,
                        isOriginalAuthor,
                        isStarredPost,
                        postId,
                        mediaData,
                        channelUserType,
                        aiProvenanceLabelShown,
                        aiProvenanceLabelEnabled
                    }
                });
            };
            t[0] = aiProvenanceLabelEnabled;
            t[1] = aiProvenanceLabelShown;
            t[2] = channelUserType;
            t[3] = cid;
            t[4] = isOriginalAuthor;
            t[5] = isStarredPost;
            t[6] = mediaData;
            t[7] = postId;
            t[8] = m;
        } else {
            m = t[8];
        }
        const p = m;
        let _;
        if (t[9] !== p) {
            _ = {
                onVPVDEnd: p
            };
            t[9] = p;
            t[10] = _;
        } else {
            _ = t[10];
        }
        return r("useVPVDImpression")(_);
    }
    l.default = u;
}, 98);