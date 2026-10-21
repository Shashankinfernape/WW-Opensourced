__d("WAWebPnhCagDailyUtils", [
    "$InternalEnum",
    "WAWebDailyAggregatedStatsCollection"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "PNH_INDICATOR_CLICKS_CHAT",
        "PNH_INDICATOR_CLICKS_INFO_SCREEN",
        "REACTION_DELETE_COUNT",
        "REACTION_OPEN_TRAY_COUNT"
    ]);
    function s(t, n) {
        const r = o("WAWebDailyAggregatedStatsCollection").DailyAggregatedStatsCollection.gaddForToday();
        let a = r.pnhCagActions[t.toString()];
        if (a == null) {
            a = {
                pnhIndicatorClicksChat: 0,
                pnhIndicatorClicksInfoScreen: 0,
                reactionDeleteCount: 0,
                reactionOpenTrayCount: 0
            };
            r.pnhCagActions[t.toString()] = a;
        }
        switch(n){
            case e.PNH_INDICATOR_CLICKS_CHAT:
                a.pnhIndicatorClicksChat++;
                break;
            case e.PNH_INDICATOR_CLICKS_INFO_SCREEN:
                a.pnhIndicatorClicksInfoScreen++;
                break;
            case e.REACTION_DELETE_COUNT:
                a.reactionDeleteCount++;
                break;
            case e.REACTION_OPEN_TRAY_COUNT:
                a.reactionOpenTrayCount++;
                break;
        }
    }
    l.PnhCagDailyMetricsType = e;
    l.incrementPnhDailyCount = s;
}, 98);