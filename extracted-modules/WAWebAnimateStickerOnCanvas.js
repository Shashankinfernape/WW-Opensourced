__d("WAWebAnimateStickerOnCanvas", [
    "Promise",
    "WAAbortError",
    "WAWebNoop"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ animationFrames, onFrameChange, shouldStop, signal }) {
        if (signal.aborted) {
            return (e || (e = n("Promise"))).reject(new (o("WAAbortError")).AbortError);
        }
        if (animationFrames.length === 0) {
            return (e || (e = n("Promise"))).resolve();
        }
        const u = Date.now();
        let c;
        let d = 0;
        let m = u;
        let p = r("WAWebNoop");
        return new (e || (e = n("Promise")))(function(e, t) {
            const n = function() {
                if (c != null) {
                    window.cancelAnimationFrame(c);
                }
                t(new (o("WAAbortError")).AbortError);
            };
            signal.addEventListener("abort", n);
            p = function() {
                signal.removeEventListener("abort", n);
            };
            const r = function(n) {
                const t = Date.now();
                if (t < m) {
                    c = window.requestAnimationFrame(r);
                    return;
                }
                const o = animationFrames[d];
                const { duration, rgbaBuffer } = o;
                onFrameChange(rgbaBuffer);
                d = (d + 1) % animationFrames.length;
                m = t + duration;
                if (d === 1 && shouldStop()) {
                    e();
                    return;
                }
                c = window.requestAnimationFrame(r);
            };
            c = window.requestAnimationFrame(r);
        }).finally(()=>{
            p();
        });
    }
    l.default = s;
}, 98);