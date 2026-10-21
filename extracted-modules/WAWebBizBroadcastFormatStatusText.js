__d("WAWebBizBroadcastFormatStatusText", [
    "fbt"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        const t = e?.[0] != null ? Number(e[0].toString()) : 0;
        const n = e?.[1] != null ? Number(e[1].toString()) : 0;
        if (t > 0 && n > 0) {
            return s._("_j{\"*\":{\"*\":\"{processingCount} processing, {failedCount} failed broadcasts\",\"_1\":\"{processingCount} processing, 1 failed broadcast\"},\"_1\":{\"*\":\"1 processing, {failedCount} failed broadcasts\",\"_1\":\"1 processing, 1 failed broadcast\"}}", [
                s._plural(t, "processingCount"),
                s._plural(n, "failedCount")
            ]);
        }
        if (t > 0) {
            return s._("_j{\"*\":\"{number} processing broadcasts\",\"_1\":\"1 processing broadcast\"}", [
                s._plural(t, "number")
            ]);
        }
        if (n > 0) {
            return s._("_j{\"*\":\"{number} failed broadcasts\",\"_1\":\"1 failed broadcast\"}", [
                s._plural(n, "number")
            ]);
        }
        return s._("Your broadcast message is being processed.");
    }
    l.default = e;
}, 226);