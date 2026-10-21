__d("WAWebVoipVideoDecodeOrderTracker", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 4294967296;
    const l = 500;
    class s {
        constructor(){
            this.$1 = new Map;
            this.$2 = 0;
            this.$3 = 0;
            this.$4 = 0;
            this.$5 = 0;
            this.$6 = 0;
            this.$7 = 0;
        }
        setOrderingMode(t) {
            this.$7 = t;
        }
        observe({ isKeyFrame, nowMs, rtpTimestamp, source }) {
            const a = this.$8(source);
            if (isKeyFrame) {
                this.$9(a, nowMs);
                a.lastRtpTimestamp = rtpTimestamp;
                return {
                    outOfOrder: false,
                    episodeStarted: false
                };
            }
            const a_lastRtpTimestamp = a.lastRtpTimestamp;
            if (a_lastRtpTimestamp == null || u(rtpTimestamp, a_lastRtpTimestamp) >= 0) {
                a.lastRtpTimestamp = rtpTimestamp;
                return {
                    outOfOrder: false,
                    episodeStarted: false
                };
            }
            this.$2++;
            let episodeStarted = false;
            if (a.brokenSinceMs == null) {
                a.brokenSinceMs = nowMs;
                this.$3++;
                episodeStarted = true;
            }
            return {
                outOfOrder: true,
                episodeStarted
            };
        }
        markRendered(t, n) {
            const e = this.$8(t);
            const e_lastRenderMs = e.lastRenderMs;
            if (e_lastRenderMs != null) {
                const o = n - e_lastRenderMs;
                if (o > l) {
                    this.$5 += o;
                    this.$6++;
                }
            }
            e.lastRenderMs = n;
        }
        resetSource(t, n) {
            const e = this.$1.get(t);
            if (e != null) {
                this.$9(e, n);
                this.$1.delete(t);
            }
        }
        consume(t) {
            for (const e of this.$1.values()){
                this.$9(e, t);
            }
            const n = {
                webVideoDecOutOfOrderFrames: this.$2,
                webVideoDecRefChainBreakCount: this.$3,
                webVideoDecRefChainBrokenT: Math.round(this.$4),
                webVideoDecOrderingMode: this.$7,
                webVideoRenderFreezeT: Math.round(this.$5),
                webVideoRenderNumFreezes: this.$6
            };
            this.$1.clear();
            this.$2 = 0;
            this.$3 = 0;
            this.$4 = 0;
            this.$5 = 0;
            this.$6 = 0;
            this.$7 = 0;
            return n;
        }
        $8(t) {
            let e = this.$1.get(t);
            if (e == null) {
                e = {
                    lastRtpTimestamp: null,
                    brokenSinceMs: null,
                    lastRenderMs: null
                };
                this.$1.set(t, e);
            }
            return e;
        }
        $9(t, n) {
            const t_brokenSinceMs = t.brokenSinceMs;
            if (t_brokenSinceMs != null) {
                this.$4 += Math.max(0, n - t_brokenSinceMs);
                t.brokenSinceMs = null;
            }
        }
    }
    function u(rtpTimestamp, n) {
        let r = rtpTimestamp - n;
        if (r > e / 2) {
            r -= e;
        } else if (r < -(e / 2)) {
            r += e;
        }
        return r;
    }
    i.RENDER_FREEZE_THRESHOLD_MS = l;
    i.WAWebVoipVideoDecodeOrderTracker = s;
}, 66);