__d("WAWebVoipHandleNativeCallEventMediaHandlers", [
    "WALogger",
    "WAThrottle",
    "WAWebBackendApi",
    "WAWebCallUserJourneyLogger",
    "WAWebUserPrefsMeUser",
    "WAWebVoipCameraFingerprintLogging",
    "WAWebVoipDualStreamScreenShareState",
    "WAWebVoipEncodeTargetFpsState",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoCaptureAndRendering",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWebCodecsEncoderState",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = 50;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const videoStateData = t.parsers.parseVideoStateChangedData(e);
                o("WAWebBackendApi").frontendFireAndForget("handleVideoStateChange", {
                    videoStateData
                });
                if (videoStateData.isSelf === true) {
                    m().catch((e)=>{
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: handleUpdateVoipSettings: dispatch failed"
                        ]))).catching(r("getErrorSafe")(e));
                    });
                }
            }
        });
        return d.apply(this, arguments);
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (e.type === "web") {
                const t = yield e.getCallInfo();
                if (t !== "") {
                    const n = e.parsers.parseCallInfo(t);
                    o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.setVideoCall(n.videoEnabled === true);
                    o("WAWebVoipCameraFingerprintLogging").maybeLogCameraFingerprint(n.videoEnabled === true, true);
                    o("WAWebBackendApi").frontendFireAndForget("handleVoipSettingsUpdate", {
                        callId: n.callId,
                        isDualStreamSsEnabled: n.isDualStreamSsEnabled
                    });
                }
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const peerVideoPermissionData = t.parsers.parsePeerVideoPermissionChangedData(e);
                o("WAWebBackendApi").frontendFireAndForget("handlePeerVideoPermissionChange", {
                    peerVideoPermissionData
                });
            }
        });
        return f.apply(this, arguments);
    }
    const g = o("WAThrottle").throttle(function() {
        C().catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleMuteStateChanged: dispatch failed"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("voip-mute-state-dispatch-failed");
        });
    }, u, {
        leading: true,
        trailing: true
    });
    var h = 0;
    function y() {
        g();
    }
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = ++h;
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
                    activity: "get_call_info",
                    details: "mute_state"
                });
                const n = yield t.getCallInfo();
                if (n !== "" && e === h) {
                    const a = t.parsers.parseCallInfo(n);
                    o("WAWebBackendApi").frontendFireAndForget("handleMuteStateChange", {
                        callInfo: a
                    });
                }
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const n = t.parsers.parseAudioDriverRestartData(e);
                if (n.isDueToSilenceDetected) {
                    o("WAWebBackendApi").frontendFireAndForget("showMicrophoneSilenceToast", {});
                }
            }
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const n = t.parsers.parseSpeakerStatusChangedData(e);
                for (const a of n.Participants){
                    if (a.AudioLevel > 0) {
                        o("WAWebBackendApi").frontendFireAndForget("handleAudioLevelChange", {
                            participantJid: a.Jid
                        });
                    }
                }
            }
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const reactionData = t.parsers.parseReactionStateChangedData(e);
                o("WAWebBackendApi").frontendFireAndForget("handleReactionStateChange", {
                    reactionData
                });
            }
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const n = t.parsers.parseScreenShareStateChangedData(e);
                if (o("WAWebUserPrefsMeUser").isMeAccount(n.sharer_jid)) {
                    o("WAWebVoipDualStreamScreenShareState").setSelfDualStreamScreenShareActive(n.state === o("WAWebVoipWaCallEnums").ScreenShareState.Started && Number(n.sharer_version) >= Number(o("WAWebVoipWaCallEnums").ScreenShareVersion.Version3));
                }
                if ((n.state === o("WAWebVoipWaCallEnums").ScreenShareState.Stopped || n.state === o("WAWebVoipWaCallEnums").ScreenShareState.Failed) && o("WAWebUserPrefsMeUser").isMeAccount(n.sharer_jid)) {
                    o("WAWebVoipVideoCaptureAndRendering").stopDesktopCaptureJS();
                    o("WAWebVoipVideoCaptureAndRendering").releaseDesktopStreamJS();
                }
                o("WAWebBackendApi").frontendFireAndForget("handleScreenShareStateChange", n);
            }
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const cameraAutoOffData = t.parsers.parseSelfCameraAutoOffData(e);
                o("WAWebBackendApi").frontendFireAndForget("handleSelfCameraAutoOff", {
                    cameraAutoOffData
                });
            }
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const raiseHandData = t.parsers.parseRaiseHandStateChangedData(e);
                o("WAWebBackendApi").frontendFireAndForget("handleRaiseHandStateChange", {
                    raiseHandData
                });
            }
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const n = t.parsers.parseEncodeTargetFpsChangedData(e);
                o("WAWebVoipEncodeTargetFpsState").updateEncodeTargetFps(n.targetFps);
            }
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
            if (t.type === "web") {
                const n = t.parsers.parseEncodeParamsChangedData(e);
                o("WAWebVoipWebCodecsEncoderState").updateWebCodecsEncodeParams(n);
            }
        });
        return A.apply(this, arguments);
    }
    l.handleVideoStateChanged = c;
    l.handleUpdateVoipSettings = m;
    l.handlePeerVideoPermissionChanged = _;
    l.handleMuteStateChanged = y;
    l.handleAudioDriverRestart = v;
    l.handleSpeakerStatusChanged = R;
    l.handleReactionStateChanged = E;
    l.handleScreenShareStateChanged = I;
    l.handleSelfCameraAutoOff = D;
    l.handleRaiseHandStateChanged = $;
    l.handleEncodeTargetFpsChanged = N;
    l.handleEncodeParamsChanged = w;
    l.resetWebCodecsEncoderState = o("WAWebVoipWebCodecsEncoderState").resetWebCodecsEncoderState;
}, 98);