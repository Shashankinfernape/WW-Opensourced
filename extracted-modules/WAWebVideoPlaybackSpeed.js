__d("WAWebVideoPlaybackSpeed", [], function(t, n, r, o, a, i) {
    const e = [
        1,
        1.5,
        2
    ];
    const l = 1;
    function s(t) {
        const n = e.indexOf(t);
        if (n === -1) {
            return l;
        }
        const r = (n + 1) % e.length;
        return e[r];
    }
    i.VIDEO_PLAYBACK_RATES = e;
    i.DEFAULT_VIDEO_PLAYBACK_RATE = l;
    i.getNextVideoPlaybackRate = s;
}, 66);