__d("WAWebCallBusyTone", [
    "WALogger",
    "WAWebMuteCollection",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = [
        480,
        620
    ];
    const c = 0.5;
    const d = 0.5;
    const m = 4;
    const p = 0.15;
    let _ = null;
    let f = [];
    let g = null;
    function h() {
        for (const e of f){
            try {
                e.stop();
            } catch (e) {}
        }
        f = [];
        if (g != null) {
            g.disconnect();
            g = null;
        }
    }
    function y() {
        h();
        if (o("WAWebMuteCollection").MuteCollection.getGlobalSounds()) {
            if (_ == null) {
                if (globalThis.AudioContext == null) {
                    return;
                }
                try {
                    _ = new AudioContext;
                } catch (error) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: busy tone AudioContext creation failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("call-busy-tone-context-failed");
                    return;
                }
            }
            const t = _;
            t.resume().catch((e)=>{
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: busy tone AudioContext resume failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("call-busy-tone-resume-failed");
            });
            const n = t.createGain();
            n.gain.value = 0;
            n.connect(t.destination);
            g = n;
            const a = t.currentTime;
            const i = c + d;
            for(let l = 0; l < m; l++){
                const y = a + l * i;
                n.gain.setValueAtTime(p, y);
                n.gain.setValueAtTime(0, y + c);
            }
            const C = a + m * i;
            f = u.map((e)=>{
                const r = t.createOscillator();
                r.frequency.value = e;
                r.connect(n);
                r.start(a);
                r.stop(C);
                return r;
            });
        }
    }
    l.stopBusyTone = h;
    l.playBusyTone = y;
}, 98);