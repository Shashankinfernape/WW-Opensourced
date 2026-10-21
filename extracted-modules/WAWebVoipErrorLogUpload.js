__d("WAWebVoipErrorLogUpload", [
    "WALogger",
    "WAWebCrashlog",
    "WAWebEnvironment",
    "WAWebUA",
    "WAWebVoipInvestigationLogUploadGating",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipTransportFallbackTracker",
    "WAWebVoipWebTransportCallSummary",
    "WAWebVoipWebTransportConnectionManager",
    "WAWebWamEnumCallResultType",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    const C = 6;
    const b = 10;
    const v = 0.1;
    const S = 0.01;
    const R = 0.1;
    const L = 0.001;
    const E = 8;
    const k = 5000;
    const I = "voip-group-call-cer";
    const T = 0.1;
    const D = 3;
    const x = 30000;
    let $ = null;
    const P = new Set;
    let N = false;
    let M = false;
    let w = null;
    function A(e) {
        if ($ == null) {
            try {
                const r = JSON.parse(e);
                $ = r?.call_info?.call_result ?? null;
            } catch (e) {
                $ = null;
            }
        }
    }
    function F() {
        N = false;
        M = false;
    }
    function O() {
        N = true;
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: Web client entered reconnecting"
        ])));
        if (!M) {
            M = true;
            const t = o("WAWebVoipWebTransportCallSummary").getWtCallSummaryIfCurrent();
            const n = t.attempts.slice(-E).map((e)=>{
                const n = e.outcome ?? "pending";
                return `${e.connectionId}:${n}:${e.likelyCause ?? "none"}`;
            }).join("|");
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: reconnecting transport path previousWebTransportOpened=",
                " fallbackToSctp=",
                ""
            ])), String(t.numOpened > 0), String(o("WAWebVoipTransportFallbackTracker").hasFallbackTriggered()));
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: reconnecting SCTP relays ",
                ""
            ])), o("WAWebVoipSctpConnectionManager").getSctpRelayDebugSummary());
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: reconnecting WebTransport relays ",
                ""
            ])), o("WAWebVoipWebTransportConnectionManager").getWebTransportRelayDebugSummary());
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: reconnecting WebTransport history attempts=",
                " opened=",
                " details=",
                ""
            ])), String(t.numRelayAttempts), String(t.numOpened), n || "none");
        }
    }
    function B() {
        const e = N;
        N = false;
        if (!(!e || !r("WAWebEnvironment").isWeb || !o("WAWebVoipInvestigationLogUploadGating").isInvestigationLogUploadEnabled())) {
            W();
            w = window.setTimeout(function() {
                w = null;
                if (r("gkx")("26258")) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: uploading reconnecting logs"
                    ]))).sendLogs("voip-call-reconnecting", {
                        sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                        sampling: L
                    });
                } else {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: uploading reconnecting testing logs"
                    ]))).sendLogs("voip-call-reconnecting-testing", {
                        sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                        sampling: L
                    });
                }
            }, k);
        }
    }
    function W() {
        if (w != null) {
            window.clearTimeout(w);
            w = null;
        }
    }
    function q(e) {
        if (!o("WAWebVoipInvestigationLogUploadGating").isInvestigationLogUploadEnabled()) {
            return null;
        }
        const t = e === C || e === b;
        if (!t) {
            return null;
        }
        const n = o("WAWebUA").UA.browser.toLowerCase() || "unknown";
        const r = o("WAWebVoipWebTransportCallSummary").hasWtActivityThisCall();
        const a = r ? "webtransport-" : "";
        const i = e === C ? "setup-error" : "accepted-but-not-connected";
        const l = o("WAWebUA").UA.isChrome ? S : v;
        const s = r && e === b ? R : l;
        return {
            reason: `voip-call-error-${n}-${a}${i}`,
            sampling: s
        };
    }
    function U() {
        const t = $;
        $ = null;
        if (!!r("WAWebEnvironment").isWeb && t != null) {
            const n = q(t);
            if (n != null) {
                W();
                let a = n.reason;
                const i = n.sampling;
                if (!r("gkx")("26258")) {
                    a = `${a}-testing`;
                }
                const l = document.visibilityState ?? "unknown";
                const s = document.hasFocus();
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] upload result=",
                    " reason=",
                    " rate=",
                    " vis=",
                    " focus=",
                    ""
                ])), t, a, i, l, String(s));
                window.setTimeout(function() {
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: uploading error logs: ",
                        ""
                    ])), a).sendLogs(a, {
                        sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                        sampling: i
                    });
                }, k);
            }
        }
    }
    function V(e) {
        const a = e.groupCallTotalCallTSinceCallStart != null && e.groupCallTotalCallTSinceCallStart > 0 || e.callT != null && e.callT > 0;
        if (!(!r("WAWebEnvironment").isWeb || e.callEndReconnecting !== true || e.callResult !== o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.CONNECTED || !a || e.groupCallIsLastSegment !== true || e.maxConnectedParticipants < D || !o("WAWebVoipInvestigationLogUploadGating").isInvestigationLogUploadEnabled())) {
            const i = `${e.callId ?? "unknown-call"}:${String(e.groupCallSegmentIdx ?? "unknown-segment")}`;
            if (!P.has(i)) {
                P.add(i);
                const clientSamplingRate = T;
                const s = r("gkx")("26258") ? I : `${I}-testing`;
                const fromTimestamp = H(e);
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] scheduling group CER log upload reason=",
                    " rate=",
                    ""
                ])), s, clientSamplingRate);
                self.setTimeout(function() {
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: uploading group CER logs: ",
                        ""
                    ])), s);
                    o("WAWebCrashlog").upload({
                        reason: s,
                        clientSamplingRate,
                        fromTimestamp,
                        hasTaggedMessage: false,
                        sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
                    }).catch((e)=>{
                        o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: group CER log upload failed"
                        ]))).catching(r("getErrorSafe")(e));
                    }).finally(()=>{
                        P.delete(i);
                    });
                }, k);
            }
        }
    }
    function H(e) {
        const e_groupCallTotalCallTSinceCallStart = e.groupCallTotalCallTSinceCallStart;
        const n = e_groupCallTotalCallTSinceCallStart != null && e_groupCallTotalCallTSinceCallStart >= 0 ? e_groupCallTotalCallTSinceCallStart : e.callT;
        if (!(n == null || n < 0)) {
            return Math.max(0, Date.now() - n - x);
        }
    }
    l.captureWamCallResult = A;
    l.resetReconnectingStateForNewCall = F;
    l.recordCallReconnectingStateForLogs = O;
    l.maybeUploadReconnectingLogs = B;
    l.maybeUploadErrorLogs = U;
    l.maybeUploadGroupCallCerLogs = V;
}, 98);