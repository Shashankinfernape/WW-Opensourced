__d("WAWebVoipAVSyncController", [
    "WALogger",
    "WAWebVoipAVSyncMetricsCollector"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = 30;
    const p = 40;
    const _ = -120;
    const f = 150;
    const g = 2;
    const h = 600;
    const y = 1000;
    const C = 2000;
    const b = 2000;
    const v = 10;
    const S = 90000;
    const R = 4294967296;
    class L {
        constructor(){
            this.$1 = 0;
            this.$2 = null;
            this.$3 = null;
            this.$4 = null;
            this.$5 = false;
            this.$6 = false;
            this.$7 = new Map;
            this.$8 = new Set;
            this.$9 = new (o("WAWebVoipAVSyncMetricsCollector")).WAWebVoipAVSyncMetricsCollector(p);
        }
        $10(t) {
            let e = this.$7.get(t);
            if (e == null) {
                e = {
                    frameQueue: null,
                    calibration: null,
                    calibrationCandidate: null,
                    lastObservedFrame: null,
                    awaitingKeyFrame: false,
                    pendingRecalibration: false,
                    consecutiveLateCount: 0,
                    lastRecalibTimeMs: 0,
                    recalibrationCount: 0,
                    framesHeld: 0,
                    framesLate: 0,
                    framesEvicted: 0,
                    framesReordered: 0,
                    framesReorderPrevented: 0,
                    deltaSumMs: 0,
                    deltaSampleCount: 0
                };
                this.$7.set(t, e);
            }
            return e;
        }
        enable(n, r, a, i, l) {
            this.$6 = l?.strictFifoDrain === true;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AVSync] Enabling, sampleRate=",
                " strictFifoDrain=",
                ""
            ])), n, this.$6);
            this.$1 = n;
            this.$2 = r;
            this.$3 = a;
            this.$4 = i ?? null;
            this.$5 = true;
        }
        disable() {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AVSync] Disabling"
            ])));
            this.$5 = false;
            this.$7.clear();
            this.$8.clear();
            this.$2 = null;
            this.$3 = null;
            this.$4 = null;
        }
        reset() {
            for (const e of this.$7.values()){
                e.calibration = null;
                e.calibrationCandidate = null;
                e.lastObservedFrame = null;
                e.awaitingKeyFrame = false;
                e.pendingRecalibration = false;
                e.consecutiveLateCount = 0;
                e.lastRecalibTimeMs = 0;
            }
            this.$9.recordDeviceChangeReset();
        }
        isEnabled() {
            return this.$5;
        }
        removeParticipant(t) {
            this.$7.delete(t);
            this.$8.delete(t);
        }
        consumeMetrics() {
            if (!this.$5 && !this.$9.hasCalibrated()) {
                return null;
            }
            return this.$9.consume();
        }
        peekPerParticipantMetrics(t) {
            const e = this.$7.get(t);
            if (e == null) {
                return null;
            }
            const avgDeltaMs = e.deltaSampleCount > 0 ? e.deltaSumMs / e.deltaSampleCount : null;
            return {
                avgDeltaMs,
                recalibrationCount: e.recalibrationCount,
                framesHeld: e.framesHeld,
                framesLate: e.framesLate,
                framesReordered: e.framesReordered,
                framesReorderPrevented: e.framesReorderPrevented,
                framesEvicted: e.framesEvicted,
                isCalibrated: e.calibration != null,
                consecutiveLateCount: e.consecutiveLateCount
            };
        }
        enqueueVideoFrame(t) {
            if (this.$5) {
                const e = this.$2;
                const n = this.$3;
                const arrivalAudioTimestamp = n != null ? n() : 0;
                const o = t.source;
                const a = babelHelpers.extends({}, t, {
                    arrivalAudioTimestamp,
                    continuityDriftMs: this.$11(o, arrivalAudioTimestamp, t.timestamp),
                    skippedOver: false
                });
                const i = this.$10(o);
                let l = i.frameQueue;
                for(l == null && (l = [], i.frameQueue = l, this.$8.add(o)); l.length >= m;){
                    const s = l.shift();
                    this.$9.recordFrameEvicted();
                    i.framesEvicted++;
                    if (s != null && e != null) {
                        e(s.source, s.frameBuffer, s.width, s.height, s.orientation, s.format, s.timestamp, s.isKeyFrame);
                    }
                }
                l.push(a);
                this.$9.observeQueueDepth(l.length);
                this.$12();
            }
        }
        $12() {
            const e = this.$3;
            const t = this.$2;
            if (!(e == null || t == null)) {
                const n = e();
                if (n === 0) {
                    this.$13(t);
                    return;
                }
                for (const r of this.$8){
                    const o = this.$7.get(r);
                    if (o != null) {
                        this.$14(r, o, n, t);
                    }
                }
            }
        }
        $14(t, n, r, a) {
            const n_frameQueue = n.frameQueue;
            if (n_frameQueue != null) {
                for(let i = 0; i < n_frameQueue.length;){
                    const l = n_frameQueue[i];
                    const s = this.$15({
                        audioTimestamp: r,
                        state: n,
                        videoRtpTimestamp: l.timestamp
                    });
                    if (s == null) {
                        const c = l.arrivalAudioTimestamp !== 0 ? l.arrivalAudioTimestamp : r;
                        this.$16(t, n, l, c);
                        i = this.$17(n_frameQueue, i, a);
                        continue;
                    }
                    this.$9.recordDelta(s);
                    n.deltaSumMs += s;
                    n.deltaSampleCount++;
                    if (this.$18(l, s)) {
                        i = this.$19(n_frameQueue, i, a);
                        this.$20(t, n, l, r, s);
                        i = this.$17(n_frameQueue, i, a);
                        continue;
                    }
                    if (Math.abs(s) > h) {
                        this.$21(t, n, r, l.timestamp, s);
                        i = this.$17(n_frameQueue, i, a);
                        continue;
                    }
                    if (s > p) {
                        n.consecutiveLateCount = 0;
                        this.$9.recordFrameHeld();
                        n.framesHeld++;
                        i++;
                        continue;
                    }
                    if (s < _) {
                        const d = n.consecutiveLateCount + 1;
                        n.consecutiveLateCount = d;
                        this.$9.recordFrameRenderedLate();
                        n.framesLate++;
                        if (d >= v) {
                            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AVSync] force recalib jid=",
                                " late=",
                                " delta=",
                                ""
                            ])), t.key, d, Math.round(s));
                            n.consecutiveLateCount = 0;
                            n.lastRecalibTimeMs = Date.now();
                            this.$22({
                                audioTimestamp: r,
                                source: t,
                                state: n,
                                videoRtpTimestamp: l.timestamp
                            });
                            this.$9.recordForceRecalibration();
                            n.recalibrationCount++;
                            i = this.$17(n_frameQueue, i, a);
                            continue;
                        }
                        i = this.$17(n_frameQueue, i, a);
                        continue;
                    }
                    n.consecutiveLateCount = 0;
                    this.$9.recordFrameRenderedInSync();
                    i = this.$17(n_frameQueue, i, a);
                }
                if (n_frameQueue.length === 0) {
                    n.frameQueue = null;
                    this.$8.delete(t);
                }
            }
        }
        $15({ audioTimestamp, state, videoRtpTimestamp }) {
            const state_calibration = state.calibration;
            if (state_calibration == null) {
                return null;
            }
            const a = this.$1;
            if (a === 0) {
                return null;
            }
            const i = (audioTimestamp - state_calibration.firstAudioTimestamp) / a;
            const l = this.$23(videoRtpTimestamp, state_calibration.firstVideoRtpTimestamp);
            const s = l / S;
            return (s - i) * 1000;
        }
        $22({ audioTimestamp, source, state, videoRtpTimestamp }) {
            const a = state.calibration == null;
            const state_pendingRecalibration = state.pendingRecalibration;
            state.calibration = {
                firstAudioTimestamp: audioTimestamp,
                firstVideoRtpTimestamp: videoRtpTimestamp
            };
            state.calibrationCandidate = null;
            state.awaitingKeyFrame = false;
            state.consecutiveLateCount = 0;
            if (state_pendingRecalibration) {
                state.pendingRecalibration = false;
                state.lastRecalibTimeMs = Date.now();
                this.$9.recordRecalibration();
            } else if (a) {
                this.$9.recordCalibration();
            }
        }
        $21(t, n, r, videoRtpTimestamp, i) {
            const e = Date.now();
            if (e - n.lastRecalibTimeMs < b) {
                return false;
            }
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AVSync] Recalibrating jid=",
                ", deltaMs=",
                ""
            ])), t.key, i);
            n.lastRecalibTimeMs = e;
            n.pendingRecalibration = false;
            this.$22({
                audioTimestamp: r,
                source: t,
                state: n,
                videoRtpTimestamp
            });
            this.$9.recordRecalibration();
            n.recalibrationCount++;
            return true;
        }
        $11(t, n, videoRtpTimestamp) {
            const e = this.$10(t);
            if (n === 0) {
                e.lastObservedFrame = null;
                return null;
            }
            const e_lastObservedFrame = e.lastObservedFrame;
            const a = this.$24(n, e_lastObservedFrame != null ? e_lastObservedFrame.audioTimestamp : null);
            e.lastObservedFrame = {
                audioTimestamp: a,
                videoRtpTimestamp
            };
            if (e_lastObservedFrame == null) {
                return null;
            }
            const i = this.$25(a, e_lastObservedFrame.audioTimestamp);
            if (i == null) {
                return null;
            }
            const l = this.$26(videoRtpTimestamp, e_lastObservedFrame.videoRtpTimestamp);
            return l - i;
        }
        $27(t) {
            if (t.isKeyFrame) {
                return y;
            }
            return C;
        }
        $28(t, n, r, o) {
            if (n.awaitingKeyFrame) {
                if (r.isKeyFrame) {
                    this.$22({
                        audioTimestamp: o,
                        source: t,
                        state: n,
                        videoRtpTimestamp: r.timestamp
                    });
                    return true;
                }
                return false;
            }
            return null;
        }
        $29(t, n, r, o) {
            const e = this.$27(r);
            if (r.continuityDriftMs == null || Math.abs(r.continuityDriftMs) <= e) {
                return false;
            }
            this.$20(t, n, r, o, null);
            return true;
        }
        $16(t, n, r, lastAudioTimestamp) {
            if (lastAudioTimestamp === 0 || this.$1 === 0) {
                return false;
            }
            const e = this.$28(t, n, r, lastAudioTimestamp);
            if (e != null) {
                return e;
            }
            if (this.$29(t, n, r, lastAudioTimestamp)) {
                return false;
            }
            const n_calibrationCandidate = n.calibrationCandidate;
            if (n_calibrationCandidate == null) {
                n.calibrationCandidate = {
                    lastAudioTimestamp,
                    lastVideoRtpTimestamp: r.timestamp,
                    stableFramePairs: 0
                };
                return false;
            }
            const i = this.$24(lastAudioTimestamp, n_calibrationCandidate.lastAudioTimestamp);
            const l = this.$25(i, n_calibrationCandidate.lastAudioTimestamp);
            if (l == null) {
                return false;
            }
            const s = this.$26(r.timestamp, n_calibrationCandidate.lastVideoRtpTimestamp);
            const u = s - l;
            const c = this.$27(r);
            if (Math.abs(u) > c) {
                this.$20(t, n, r, lastAudioTimestamp, null);
                return false;
            }
            if (Math.abs(u) > f) {
                n.calibrationCandidate = {
                    lastAudioTimestamp: i,
                    lastVideoRtpTimestamp: r.timestamp,
                    stableFramePairs: 0
                };
                return false;
            }
            const stableFramePairs = n_calibrationCandidate.stableFramePairs + 1;
            if (stableFramePairs < g) {
                n.calibrationCandidate = {
                    lastAudioTimestamp: i,
                    lastVideoRtpTimestamp: r.timestamp,
                    stableFramePairs
                };
                return false;
            }
            this.$22({
                audioTimestamp: i,
                source: t,
                state: n,
                videoRtpTimestamp: r.timestamp
            });
            return true;
        }
        $18(t, n) {
            const e = this.$27(t);
            return Math.abs(n) > e || t.continuityDriftMs != null && Math.abs(t.continuityDriftMs) > e;
        }
        $20(t, n, r, a, i) {
            const e = n.calibration != null;
            const l = r.arrivalAudioTimestamp !== 0 ? r.arrivalAudioTimestamp : a;
            const s = i != null ? Math.round(i) : "n/a";
            const u = r.continuityDriftMs != null ? Math.round(r.continuityDriftMs) : "n/a";
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AVSync] Video reset jid=",
                " delta=",
                " contDrift=",
                " kf=",
                ""
            ])), t.key, s, u, r.isKeyFrame);
            n.calibration = null;
            n.calibrationCandidate = null;
            n.consecutiveLateCount = 0;
            n.lastRecalibTimeMs = 0;
            if (e) {
                n.pendingRecalibration = true;
            }
            if (r.isKeyFrame) {
                this.$22({
                    audioTimestamp: l,
                    source: t,
                    state: n,
                    videoRtpTimestamp: r.timestamp
                });
                return;
            }
            n.awaitingKeyFrame = true;
            const c = this.$4;
            if (c != null) {
                c(t);
            }
        }
        $25(t, n) {
            const e = this.$1;
            if (e === 0) {
                return null;
            }
            return Math.max(0, t - n) / e * 1000;
        }
        $24(t, n) {
            if (n != null) {
                return Math.max(t, n);
            }
            return t;
        }
        $26(t, n) {
            return this.$23(t, n) / S * 1000;
        }
        $23(t, n) {
            let e = t - n;
            if (e > R / 2) {
                e -= R;
            } else if (e < -(R / 2)) {
                e += R;
            }
            return e;
        }
        $17(t, n, r) {
            let e = n;
            if (e > 0) {
                if (this.$6) {
                    e = this.$19(t, e, r);
                } else {
                    this.$30(t, e, t[e].source);
                }
            }
            const o = t[e];
            t.splice(e, 1);
            this.$31(o, r);
            return e;
        }
        $19(t, n, r) {
            if (!this.$6 || n === 0) {
                return n;
            }
            const e = this.$7.get(t[n].source);
            const o = t.splice(0, n);
            this.$9.recordReordersPrevented(o.length);
            for (const a of o){
                this.$9.recordFrameRenderedLate();
                if (e != null) {
                    e.framesLate++;
                    e.framesReorderPrevented++;
                }
                this.$31(a, r);
            }
            return 0;
        }
        $31(t, n) {
            n(t.source, t.frameBuffer, t.width, t.height, t.orientation, t.format, t.timestamp, t.isKeyFrame);
        }
        $30(t, n, r) {
            let e = 0;
            for(let o = 0; o < n; o++){
                const a = t[o];
                if (!a.skippedOver) {
                    a.skippedOver = true;
                    e++;
                }
            }
            if (e !== 0) {
                this.$9.recordFramesReordered(e);
                const i = this.$7.get(r);
                if (i != null) {
                    i.framesReordered += e;
                }
            }
        }
        $13(t) {
            for (const e of this.$8){
                const n = this.$7.get(e);
                if (!(n == null || n.frameQueue == null)) {
                    for (const r of n.frameQueue){
                        t(r.source, r.frameBuffer, r.width, r.height, r.orientation, r.format, r.timestamp, r.isKeyFrame);
                    }
                    n.frameQueue = null;
                }
            }
            this.$8.clear();
        }
    }
    l.MAX_QUEUE_SIZE = m;
    l.SYNC_THRESHOLD_AHEAD_MS = p;
    l.RECALIBRATION_THRESHOLD_MS = h;
    l.WAWebVoipAVSyncController = L;
}, 98);