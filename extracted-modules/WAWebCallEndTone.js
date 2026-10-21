__d("WAWebCallEndTone", [
    "WALogger",
    "WAWebMuteCollection",
    "bx",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 0.5;
    const u = new window.Audio(r("bx").getURL(r("bx")("13603")));
    u.volume = s;
    function c() {
        let t;
        if (o("WAWebMuteCollection").MuteCollection.getGlobalSounds()) {
            u.currentTime = 0;
            if ((t = u.play()) != null) {
                t.catch((t)=>{
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: end-call tone play failed"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("call-end-tone-play-failed");
                });
            }
        }
    }
    l.playCallEndTone = c;
}, 98);