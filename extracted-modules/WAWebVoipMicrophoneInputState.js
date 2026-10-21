__d("WAWebVoipMicrophoneInputState", [
    "WALogger",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = -75;
    const u = 3;
    const c = 100;
    const d = 1000;
    const m = 500;
    const p = -65;
    const _ = -20;
    const f = 0.72;
    const g = 20;
    function h(e, t) {
        return Math.max(K(e), t * f);
    }
    const y = new Set;
    function C() {
        return {
            status: "inactive",
            failureReason: null,
            level: 0,
            isLevelStale: true,
            levelFreshSinceAt: null,
            hasCredibleSignal: false,
            lastCredibleSignalAt: null,
            streamGeneration: 0,
            streamChangeReason: null,
            streamStartedAt: null,
            nativeSilenceCount: 0
        };
    }
    function b() {
        return {
            snapshot: C(),
            consecutiveCredibleWindows: 0,
            lastLevelAt: null,
            smoothedLevel: 0
        };
    }
    let v = b();
    let S = null;
    let R = null;
    function L() {
        return v.snapshot;
    }
    function E() {
        return v.snapshot.status;
    }
    function k(e) {
        return w(v, e);
    }
    function I() {
        return self.performance.now();
    }
    function T() {
        return v.snapshot.level;
    }
    function D() {
        return v.snapshot.hasCredibleSignal;
    }
    function x(e) {
        y.add(e);
        return function() {
            y.delete(e);
        };
    }
    function $(e) {
        const t = I();
        const n = A(v, e, t);
        if (n !== v) {
            const r = n.snapshot !== v.snapshot;
            v = n;
            N(t);
            if (r) {
                for (const o of Array.from(y)){
                    try {
                        o();
                    } catch (error) {
                        P(error);
                    }
                }
            }
        }
    }
    function P(error) {
        const streamGeneration = v.snapshot.streamGeneration;
        if (R !== streamGeneration) {
            R = streamGeneration;
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [MicInputState] subscriber threw"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-mic-input-subscriber-threw");
        }
    }
    function N(e) {
        if (S != null) {
            self.clearTimeout(S);
            S = null;
        }
        if (!(v.snapshot.isLevelStale || v.lastLevelAt == null)) {
            const t = Math.max(0, v.lastLevelAt + d - e);
            S = self.setTimeout(function() {
                S = null;
                $({
                    type: "level-stale"
                });
            }, t);
        }
    }
    function M() {
        if (S != null) {
            self.clearTimeout(S);
            S = null;
        }
        v = b();
        y.clear();
        R = null;
    }
    function w(e, t) {
        return e.lastLevelAt == null || t - e.lastLevelAt >= d;
    }
    function A(e, t, streamStartedAt) {
        return ((t)=>{
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "capture-started" && "reason" in t) {
                const streamChangeReason = t.reason;
                return {
                    snapshot: babelHelpers.extends({}, e.snapshot, {
                        status: "active",
                        failureReason: null,
                        level: 0,
                        isLevelStale: true,
                        levelFreshSinceAt: null,
                        hasCredibleSignal: false,
                        lastCredibleSignalAt: null,
                        streamGeneration: e.snapshot.streamGeneration + 1,
                        streamChangeReason,
                        streamStartedAt
                    }),
                    consecutiveCredibleWindows: 0,
                    lastLevelAt: null,
                    smoothedLevel: 0
                };
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "capture-switching") {
                return q(e);
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "capture-stopped") {
                return F(e);
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "level" && "rmsDbfs" in t) {
                const o = t.rmsDbfs;
                return V(e, o, streamStartedAt);
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "level-stale") {
                return B(e);
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "input-unavailable" && "reason" in t) {
                const a = t.reason;
                return O(e, a);
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "input-recovered") {
                return U(e);
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "native-silence") {
                return W(e);
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        })(t);
    }
    function F(e) {
        if (e.snapshot.status === "inactive") {
            return e;
        }
        return {
            snapshot: babelHelpers.extends({}, C(), {
                streamGeneration: e.snapshot.streamGeneration,
                nativeSilenceCount: e.snapshot.nativeSilenceCount
            }),
            consecutiveCredibleWindows: 0,
            lastLevelAt: null,
            smoothedLevel: 0
        };
    }
    function O(e, failureReason) {
        if (e.snapshot.status === "inactive" || e.snapshot.status === "unavailable" && e.snapshot.failureReason === failureReason) {
            return e;
        }
        return {
            snapshot: babelHelpers.extends({}, e.snapshot, {
                status: "unavailable",
                failureReason,
                level: 0,
                hasCredibleSignal: false
            }),
            consecutiveCredibleWindows: 0,
            lastLevelAt: e.lastLevelAt,
            smoothedLevel: 0
        };
    }
    function B(e) {
        if (e.snapshot.isLevelStale) {
            return e;
        }
        return babelHelpers.extends({}, e, {
            consecutiveCredibleWindows: 0,
            snapshot: babelHelpers.extends({}, e.snapshot, {
                isLevelStale: true,
                levelFreshSinceAt: null,
                level: 0,
                hasCredibleSignal: false
            }),
            smoothedLevel: 0
        });
    }
    function W(e) {
        if (e.snapshot.status === "inactive") {
            return e;
        }
        return babelHelpers.extends({}, e, {
            snapshot: babelHelpers.extends({}, e.snapshot, {
                nativeSilenceCount: e.snapshot.nativeSilenceCount + 1
            })
        });
    }
    function q(e) {
        if (e.snapshot.status === "inactive" || e.snapshot.status === "switching") {
            return e;
        }
        return {
            snapshot: babelHelpers.extends({}, e.snapshot, {
                status: "switching",
                failureReason: null,
                level: 0,
                hasCredibleSignal: false
            }),
            consecutiveCredibleWindows: 0,
            lastLevelAt: e.lastLevelAt,
            smoothedLevel: 0
        };
    }
    function U(e) {
        if (e.snapshot.status !== "unavailable") {
            return e;
        }
        return babelHelpers.extends({}, e, {
            snapshot: babelHelpers.extends({}, e.snapshot, {
                status: "active",
                failureReason: null
            })
        });
    }
    function V(e, t, streamStartedAt) {
        const e_snapshot = e.snapshot;
        if (e_snapshot.status === "inactive" || e_snapshot.status === "switching") {
            return e;
        }
        const consecutiveCredibleWindows = t >= s ? e.consecutiveCredibleWindows + 1 : 0;
        const hasCredibleSignal = consecutiveCredibleWindows >= u;
        const smoothedLevel = h(t, e.smoothedLevel);
        const l = H({
            hasCredibleSignal,
            now: streamStartedAt,
            smoothedLevel,
            snapshot: e_snapshot
        });
        return {
            consecutiveCredibleWindows,
            lastLevelAt: streamStartedAt,
            smoothedLevel,
            snapshot: j(e_snapshot, l) ? e_snapshot : l
        };
    }
    function H({ hasCredibleSignal, now, smoothedLevel, snapshot }) {
        const a = hasCredibleSignal && snapshot.status === "unavailable";
        const i = snapshot.status === "unavailable" && !a;
        return babelHelpers.extends({}, snapshot, {
            status: a ? "active" : snapshot.status,
            failureReason: a ? null : snapshot.failureReason,
            level: i ? 0 : G(smoothedLevel),
            isLevelStale: false,
            levelFreshSinceAt: snapshot.isLevelStale ? now : snapshot.levelFreshSinceAt,
            hasCredibleSignal,
            lastCredibleSignalAt: z(snapshot.lastCredibleSignalAt, hasCredibleSignal, now)
        });
    }
    function G(e) {
        return Math.round(e * g) / g;
    }
    function z(lastCredibleSignalAt, hasCredibleSignal, now) {
        if (hasCredibleSignal && (lastCredibleSignalAt == null || now - lastCredibleSignalAt >= m)) {
            return now;
        }
        return lastCredibleSignalAt;
    }
    function j(e, t) {
        return e.status === t.status && e.failureReason === t.failureReason && e.level === t.level && e.isLevelStale === t.isLevelStale && e.levelFreshSinceAt === t.levelFreshSinceAt && e.hasCredibleSignal === t.hasCredibleSignal && e.lastCredibleSignalAt === t.lastCredibleSignalAt;
    }
    function K(e) {
        if (Number.isFinite(e)) {
            return Math.max(0, Math.min(1, (e - p) / (_ - p)));
        }
        return 0;
    }
    l.CREDIBLE_SIGNAL_THRESHOLD_DBFS = s;
    l.CREDIBLE_SIGNAL_WINDOWS = u;
    l.LEVEL_REPORT_INTERVAL_MS = c;
    l.LEVEL_STALE_AFTER_MS = d;
    l.computeSmoothedVisualLevel = h;
    l.createInitialMicrophoneInputReducerState = b;
    l.getMicrophoneInputSnapshot = L;
    l.getMicrophoneInputStatus = E;
    l.isMicrophoneLevelStale = k;
    l.getMicrophoneInputNow = I;
    l.getMicrophoneInputLevel = T;
    l.getMicrophoneInputHasCredibleSignal = D;
    l.subscribeToMicrophoneInput = x;
    l.dispatchMicrophoneInputEvent = $;
    l.resetMicrophoneInputStateForTesting = M;
    l.isReducerLevelStale = w;
    l.reduceMicrophoneInputState = A;
    l.quantizeLevel = G;
}, 98);