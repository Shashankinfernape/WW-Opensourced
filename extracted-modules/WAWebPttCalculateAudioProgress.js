__d("WAWebPttCalculateAudioProgress", [
    "WAWebPttGetDurationFromMediaOrProtobuf",
    "WAWebPttGetSafeDuration",
    "clamp"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const e_currentTime = e.currentTime;
        const a = t ? o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromMediaOrProtobuf(e, t) : o("WAWebPttGetSafeDuration").getSafeDuration(e);
        if (a == null || a === 0) {
            return 0;
        }
        return r("clamp")(e_currentTime / a, 0, 1);
    }
    l.calculateAudioProgress = e;
}, 98);