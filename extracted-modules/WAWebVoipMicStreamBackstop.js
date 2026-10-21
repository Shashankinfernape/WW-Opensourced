__d("WAWebVoipMicStreamBackstop", [
    "WALogger",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = new Set;
    const m = 2000;
    let p = null;
    function _(e) {
        d.add(e);
    }
    function f(e) {
        d.delete(e);
    }
    function g() {
        if (p != null) {
            window.clearTimeout(p);
            p = null;
        }
        const t = Array.from(d);
        if (t.length !== 0) {
            p = window.setTimeout(function() {
                p = null;
                let n = 0;
                let r = 0;
                let a = 0;
                for (const i of t){
                    const l = h(i);
                    n += l.recoveredTrackCount;
                    r += l.failedTrackCount;
                    a += l.recoveredStreamCount;
                }
                if (n > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:micReconciliation] callEndBackstop: stopped ",
                        " leaked mic track(s) in ",
                        " stream(s)"
                    ])), n, a).sendLogs("voip-mic-callend-backstop");
                }
                if (r > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:micReconciliation] callEndBackstop: ",
                        " track(s) still live after stop"
                    ])), r).sendLogs("voip-mic-callend-backstop-stuck");
                }
            }, m);
        }
    }
    function h(e) {
        let recoveredTrackCount = 0;
        let failedTrackCount = 0;
        let recoveredStreamCount = 0;
        try {
            const i = e.getTracks().filter((e)=>e.readyState === "live");
            for (const l of i){
                try {
                    l.stop();
                } catch (error) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:micReconciliation] track.stop failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-mic-callend-backstop-error");
                }
                if (l.readyState !== "live") {
                    recoveredTrackCount++;
                } else {
                    failedTrackCount++;
                }
            }
            recoveredStreamCount = recoveredTrackCount > 0 ? 1 : 0;
        } catch (error) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:micReconciliation] failed to read tracked microphone stream"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-mic-callend-backstop-error");
        } finally{
            d.delete(e);
        }
        return {
            recoveredTrackCount,
            failedTrackCount,
            recoveredStreamCount
        };
    }
    l.trackMicStream = _;
    l.untrackMicStream = f;
    l.scheduleCallEndMicRelease = g;
}, 98);