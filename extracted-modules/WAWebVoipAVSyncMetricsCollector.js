__d("WAWebVoipAVSyncMetricsCollector", [], function(t, n, r, o, a, i) {
    const e = 1000;
    const l = 3;
    class s {
        constructor(e){
            this.$2 = 0;
            this.$3 = 0;
            this.$4 = 0;
            this.$5 = 0;
            this.$6 = 0;
            this.$7 = 0;
            this.$8 = 0;
            this.$9 = 0;
            this.$10 = 0;
            this.$11 = 0;
            this.$12 = 0;
            this.$13 = 0;
            this.$14 = 0;
            this.$15 = 0;
            this.$16 = [];
            this.$17 = 0;
            this.$18 = 0;
            this.$1 = e;
        }
        recordCalibration() {
            this.$2++;
        }
        recordRecalibration() {
            this.$3++;
        }
        recordForceRecalibration() {
            this.$4++;
        }
        recordDeviceChangeReset() {
            this.$5++;
        }
        recordFrameHeld() {
            this.$6++;
        }
        recordFrameEvicted() {
            this.$7++;
        }
        recordFrameRenderedInSync() {
            this.$9++;
        }
        recordFrameRenderedLate() {
            this.$10++;
        }
        recordFramesReordered(t) {
            this.$11 += t;
        }
        recordReordersPrevented(t) {
            this.$12 += t;
        }
        observeQueueDepth(t) {
            if (t > this.$8) {
                this.$8 = t;
            }
        }
        recordDelta(n) {
            this.$13++;
            this.$14 += n;
            const t = Math.abs(n);
            if (t > this.$15) {
                this.$15 = t;
            }
            if (this.$16.length < e) {
                this.$16.push(n);
            } else {
                const r = this.$13 % (e * l);
                if (r < e) {
                    this.$16[r] = n;
                }
            }
            const o = Date.now();
            if (this.$18 > 0 && t > this.$1) {
                this.$17 += o - this.$18;
            }
            this.$18 = o;
        }
        hasCalibrated() {
            return this.$2 > 0;
        }
        consume() {
            const e = this.$13 > 0 ? this.$14 / this.$13 : null;
            let t = null;
            let n = null;
            if (this.$16.length > 0) {
                const r = this.$16.slice().sort((e, t)=>e - t);
                t = r[Math.floor(r.length * 0.5)];
                n = r[Math.floor(r.length * 0.95)];
            }
            const o = {
                webAvSyncEnabled: true,
                webAvSyncCalibrationCount: this.$2,
                webAvSyncRecalibrationCount: this.$3,
                webAvSyncForceRecalibrationCount: this.$4,
                webAvSyncDeviceChangeResetCount: this.$5,
                webAvSyncFramesHeldTotal: this.$6,
                webAvSyncFramesEvictedTotal: this.$7,
                webAvSyncMaxQueueDepth: this.$8,
                webAvSyncFramesRenderedInSync: this.$9,
                webAvSyncFramesRenderedLate: this.$10,
                webAvSyncReorderCount: this.$11,
                webAvSyncReorderPreventedCount: this.$12,
                webAvSyncAvgDeltaMs: e != null ? Math.round(e) : null,
                webAvSyncP50DeltaMs: t != null ? Math.round(t) : null,
                webAvSyncP95DeltaMs: n != null ? Math.round(n) : null,
                webAvSyncMaxAbsDeltaMs: Math.round(this.$15),
                webAvSyncTimeOutOfSyncMs: Math.round(this.$17)
            };
            this.$19();
            return o;
        }
        $19() {
            this.$2 = 0;
            this.$3 = 0;
            this.$4 = 0;
            this.$5 = 0;
            this.$6 = 0;
            this.$7 = 0;
            this.$8 = 0;
            this.$9 = 0;
            this.$10 = 0;
            this.$11 = 0;
            this.$12 = 0;
            this.$13 = 0;
            this.$14 = 0;
            this.$15 = 0;
            this.$16 = [];
            this.$17 = 0;
            this.$18 = 0;
        }
    }
    i.WAWebVoipAVSyncMetricsCollector = s;
}, 66);