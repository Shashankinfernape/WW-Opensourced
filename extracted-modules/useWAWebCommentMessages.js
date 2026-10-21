__d("useWAWebCommentMessages", [
    "WAWebAddonHydrationUtils",
    "WAWebCommentCollection",
    "WAWebMsgType",
    "react",
    "useWAWebAggregatedMultiple"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useMemo } = s;
    function useD(ids) {
        const t = o("useWAWebAggregatedMultiple").useAggregatedMultiple(o("WAWebCommentCollection").CommentCollection.byParent, useMemo(function() {
            return ids;
        }, []));
        useEffect(function() {
            o("WAWebAddonHydrationUtils").hydrateAddons({
                ids,
                hydrationType: o("WAWebMsgType").MSG_TYPE.COMMENT
            });
        }, [
            ids
        ]);
        return t.toSorted(function(e, t) {
            return e.t - t.t;
        });
    }
    l.useHydrateAndAggregateComments = useD;
}, 98);