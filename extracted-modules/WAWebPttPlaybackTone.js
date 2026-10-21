__d("WAWebPttPlaybackTone", [
    "WAWebMuteCollection",
    "bx",
    "promiseDone"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (e = r("bx")).getURL(e("9563"));
    const u = e.getURL(e("9564"));
    const c = new window.Audio(u);
    const d = new window.Audio(s);
    function m() {
        _(c);
    }
    function p() {
        _(d);
    }
    function _(e) {
        if (o("WAWebMuteCollection").MuteCollection.getGlobalSounds()) {
            r("promiseDone")(e.play());
        }
    }
    l.playMidPttTone = m;
    l.playEndPttTone = p;
}, 98);