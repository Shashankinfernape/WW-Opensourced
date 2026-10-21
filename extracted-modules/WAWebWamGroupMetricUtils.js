__d("WAWebWamGroupMetricUtils", [
    "WAWebWamNumberToSizeBucket"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return Math.max(e, 32);
    }
    function s(t) {
        const n = {};
        const length = t.participants.length;
        if (length != null) {
            n.participantCount = e(length);
        }
        const t_cachedDeviceCount = t.cachedDeviceCount;
        if (t_cachedDeviceCount != null) {
            n.deviceCount = e(t_cachedDeviceCount);
        }
        return n;
    }
    function u(t) {
        return {
            participantCount: e(t.participants.length),
            deviceCount: e(t.senderKey.size),
            deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(t.senderKey.size)
        };
    }
    l.capCount = e;
    l.getGroupCountMetricsFromGroupMetadata = s;
    l.getGroupMetricsFromDbRecord = u;
}, 98);