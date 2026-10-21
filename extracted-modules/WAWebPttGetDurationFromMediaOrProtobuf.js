__d("WAWebPttGetDurationFromMediaOrProtobuf", [
    "WAWebPttGetSafeDuration"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return o("WAWebPttGetSafeDuration").getSafeDuration(e) ?? s(t);
    }
    function s(e) {
        const t = parseFloat(e.duration);
        if (Number.isFinite(t)) {
            return t;
        }
        return 0;
    }
    l.getDurationFromMediaOrProtobuf = e;
    l.getDurationFromProto = s;
}, 98);