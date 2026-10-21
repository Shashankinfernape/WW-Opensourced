__d("WAWebMainThreadStallReporter", [
    "WALogger",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebCrashContextUtils",
    "WAWebEnvironment",
    "WAWebLowEndDeviceApi",
    "WAWebODS",
    "WAWebPdfViewerAnrTracker",
    "WAWebVoipAnrTracker",
    "WAWebVoipInitEventEmitter",
    "WAWebWindowsHybridBridgeInitiator",
    "cr:17219"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    const c = n("cr:17219") ?? {};
    const c_getWindowsBridge = c.getWindowsBridge;
    const m = 5 * 1000;
    const p = 10 * 1000;
    const _ = 15 * 1000;
    const f = 30 * 1000;
    const g = 60 * 1000;
    const h = 60 * g;
    const y = [
        [
            g,
            "lt_1m"
        ],
        [
            5 * g,
            "1m_5m"
        ],
        [
            30 * g,
            "5m_30m"
        ],
        [
            3 * h,
            "30m_3h"
        ],
        [
            12 * h,
            "3h_12h"
        ]
    ];
    const C = [
        [
            5 * 1000,
            "lt_5s"
        ],
        [
            30 * 1000,
            "5s_30s"
        ],
        [
            2 * g,
            "30s_2m"
        ],
        [
            10 * g,
            "2m_10m"
        ]
    ];
    function b(durationMs) {
        if (durationMs > _) {
            return "15s+";
        }
        if (durationMs > p) {
            return "10s-15s";
        }
        if (durationMs > m) {
            return "5s-10s";
        }
        return "0s-5s";
    }
    function v(durationMs, visibility) {
        if (durationMs < m) {
            r("WAWebODS").incr("web.perf.anr.skipped.too_short");
            return true;
        }
        if (durationMs > f) {
            r("WAWebODS").incr("web.perf.anr.skipped.too_long");
            return true;
        }
        if (!visibility.isDocumentVisible() || !visibility.isWindowInFocus()) {
            S(visibility.isDocumentVisible());
            return true;
        }
        return false;
    }
    function S(e) {
        r("WAWebODS").incr("web.perf.anr.skipped.not_visible");
        if (e) {
            r("WAWebODS").incr("web.perf.anr.not_visible.unfocused");
            return;
        }
        r("WAWebODS").incr("web.perf.anr.not_visible.hidden");
        const t = o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getVoipInitTrigger();
        if (t != null && o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInitAttemptInFlight()) {
            R(t);
        }
    }
    function R(e) {
        e: {
            if (e === "boot") {
                r("WAWebODS").incr("web.perf.anr.hidden_during_calling_init.boot");
                break e;
            }
            if (e === "call") {
                r("WAWebODS").incr("web.perf.anr.hidden_during_calling_init.call");
                break e;
            }
            if (e === "deadline") {
                r("WAWebODS").incr("web.perf.anr.hidden_during_calling_init.deadline");
                break e;
            }
            if (e === "hidden_prewarm") {
                r("WAWebODS").incr("web.perf.anr.hidden_during_calling_init.hidden_prewarm");
                break e;
            }
            if (e === "incoming") {
                r("WAWebODS").incr("web.perf.anr.hidden_during_calling_init.incoming");
                break e;
            }
            if (e === "scheduler_error") {
                r("WAWebODS").incr("web.perf.anr.hidden_during_calling_init.scheduler_error");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function L(durationMs) {
        if (durationMs > _) {
            r("WAWebODS").incr("web.perf.anr.bucket.15s_plus");
        } else if (durationMs > p) {
            r("WAWebODS").incr("web.perf.anr.bucket.10s_15s");
        } else {
            r("WAWebODS").incr("web.perf.anr.bucket.5s_10s");
        }
    }
    function E(e) {
        const t = e.includes(String(o("WAWebAppTracker").AppTrackerType.VoipAudio));
        const n = e.includes(String(o("WAWebAppTracker").AppTrackerType.VoipVideo));
        const isVoipAnr = t || n;
        if (!r("WAWebEnvironment").isWeb || !isVoipAnr) {
            return {
                callLog: "",
                isVoipAnr
            };
        }
        r("WAWebODS").incr("web.perf.anr.during.voip");
        if (o("WAWebVoipAnrTracker").isAnrTrackingActive()) {
            o("WAWebVoipAnrTracker").incrementAnrCount();
        }
        const i = n ? "video" : "audio";
        const l = o("WAWebABProps").getABPropConfigValue("enable_web_voip_proxy_and_sctp_workers");
        return {
            callLog: ` callType:${i} proxyWorker:${String(l)}`,
            isVoipAnr: true
        };
    }
    function k(e, visibility) {
        return [
            `calling_state-${I()}`,
            `calling_trigger-${o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getVoipInitTrigger() ?? "none"}`,
            `load_age-${D(e, y, "12h_plus")}`,
            `since_visible-${T(e, visibility)}`
        ];
    }
    function I() {
        if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInitAttemptInFlight()) {
            return "loading";
        }
        if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) {
            return "ready";
        }
        if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError()) {
            return "failed";
        }
        return "none";
    }
    function T(e, visibility) {
        const n = visibility.getReturnedFromHiddenTime();
        if (n == null) {
            return "never_hidden";
        }
        if (n > e) {
            return "during_stall";
        }
        return D(e - n, C, "10m_plus");
    }
    function D(e, t, n) {
        return t.find(([n])=>e < n)?.[1] ?? n;
    }
    function x() {
        let e;
        if (r("WAWebEnvironment").isWindows) {
            const t = c_getWindowsBridge == null || (e = c_getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebMainThreadStallReporter)) == null ? undefined : e.voip;
            if (!(t == null || t.reportWebAnr == null)) {
                t.reportWebAnr();
            }
        }
    }
    function $({ durationMs, endTime, source, visibility }) {
        if (!v(durationMs, visibility)) {
            const c = o("WAWebAppTracker").AppTracker.getAppContextWithLookback(durationMs, endTime);
            if (c.includes(String(o("WAWebAppTracker").AppTrackerType.ClosingBrowserTab))) {
                r("WAWebODS").incr("web.perf.anr.skipped.unloading");
                return;
            }
            r("WAWebODS").incr("web.perf.anr.count");
            if (source === "heartbeat") {
                r("WAWebODS").incr("web.perf.anr.source.heartbeat");
            } else {
                r("WAWebODS").incr("web.perf.anr.source.longtask");
            }
            L(durationMs);
            if (o("WAWebLowEndDeviceApi").isLowEndDevice()) {
                r("WAWebODS").incr("web.perf.anr.low_end_device");
            }
            o("WAWebCrashContextUtils").recordHangEvent(endTime, durationMs);
            x();
            const d = E(c);
            const { callLog, isVoipAnr } = d;
            if (o("WAWebPdfViewerAnrTracker").isPdfViewerAnrTrackingActive()) {
                o("WAWebPdfViewerAnrTracker").incrementPdfViewerAnrCount();
            }
            const _ = endTime - durationMs;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[longtask] entryStartTime: ",
                "s ago"
            ])), ((_ - self.performance.now()) / 1000).toFixed(0));
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[longtask][",
                "] entryDuration:",
                "ms lowEndDevice:",
                " appContext:",
                "",
                ""
            ])), b(durationMs), durationMs, o("WAWebLowEndDeviceApi").isLowEndDevice(), c || "none", callLog).tags(...k(_, visibility)).sendLogs("[performance observer] longtask", {
                sampling: isVoipAnr ? 1 : 0.01,
                sendLogsType: o("WALogger").SendLogsType.PERFORMANCE_OBSERVER_LONGTASK_SAD
            });
        }
    }
    l.reportMainThreadStall = $;
}, 98);