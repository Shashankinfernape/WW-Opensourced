__d("WAWebBroadcastInsightStatus", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = 172800000;
    const l = 7200 * 60 * 1000;
    const s = 50;
    const u = n("$InternalEnum").Mirrored([
        "DELIVERING",
        "READY",
        "SENT"
    ]);
    function c({ deliveredCount, nowMs, readCount, recipientCount, sentTimestampMs }) {
        const c = recipientCount > 0 && deliveredCount >= recipientCount;
        const d = sentTimestampMs <= nowMs - l;
        if (c || d) {
            return u.SENT;
        }
        const m = sentTimestampMs <= nowMs - e;
        const p = deliveredCount > 0 ? readCount / deliveredCount * 100 : 0;
        if (m || p > s) {
            return u.READY;
        }
        return u.DELIVERING;
    }
    i.InsightStatus = u;
    i.getInsightStatus = c;
}, 66);