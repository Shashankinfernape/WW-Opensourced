__d("WAWebAboutDailyUtils", [
    "WAWebDailyAggregatedStatsCollection"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebDailyAggregatedStatsCollection").DailyAggregatedStatsCollection.gaddForToday();
        e.aboutSuccessCount++;
    }
    function s() {
        const e = o("WAWebDailyAggregatedStatsCollection").DailyAggregatedStatsCollection.gaddForToday();
        e.aboutFailureCount++;
    }
    function u() {
        const e = o("WAWebDailyAggregatedStatsCollection").DailyAggregatedStatsCollection.gaddForToday();
        e.aboutCreationVisitCount++;
    }
    function c() {
        const e = o("WAWebDailyAggregatedStatsCollection").DailyAggregatedStatsCollection.gaddForToday();
        e.aboutCreationStartedCount++;
    }
    function d() {
        const e = o("WAWebDailyAggregatedStatsCollection").DailyAggregatedStatsCollection.gaddForToday();
        e.aboutChatConsumptionCount++;
    }
    function m() {
        const e = o("WAWebDailyAggregatedStatsCollection").DailyAggregatedStatsCollection.gaddForToday();
        e.aboutChatBubbleTapCount++;
    }
    function p() {
        const e = o("WAWebDailyAggregatedStatsCollection").DailyAggregatedStatsCollection.gaddForToday();
        e.aboutMessageSendCount++;
    }
    l.incrementAboutSuccess = e;
    l.incrementAboutFailure = s;
    l.incrementAboutCreationVisit = u;
    l.incrementAboutCreationStarted = c;
    l.incrementAboutChatConsumption = d;
    l.incrementAboutChatBubbleTap = m;
    l.incrementAboutMessageSend = p;
}, 98);