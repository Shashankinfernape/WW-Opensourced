__d("WAWebVoipOngoingCallJoinDevices", [
    "Promise",
    "WALogger",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipBlockedMicrophoneJoinState",
    "WAWebVoipBrowserPermissionButtonGating",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipDevicePermissionDialogLoader.react",
    "WAWebVoipJoinWithoutCamera",
    "WAWebVoipMicrophoneRefusalState",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = {
        afterJoin: r("WAWebNoop")
    };
    const f = {
        afterJoin
    };
    function g(e, t, n) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, checkVideo, r) {
            o("WAWebVoipJoinWithoutCamera").clearJoinWithoutCamera(e);
            o("WAWebVoipBlockedMicrophoneJoinState").forgetBlockedMicrophoneMuteAndJoin(e);
            const a = yield (p || (p = n("Promise"))).all([
                o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("microphone"),
                checkVideo ? o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("camera") : "unknown"
            ]);
            const i = a[0];
            const l = a[1];
            R(i, r);
            L(i, r);
            const wasMicrophoneBlocked = i === "denied";
            if (!wasMicrophoneBlocked && l !== "denied" || !o("WAWebVoipDeviceAccessRecoveryGating").isDeviceAccessRecoveryEnabled()) {
                return y({
                    callId: e,
                    checkVideo,
                    isCameraOff: checkVideo && l !== "granted",
                    joinAndAccept: r,
                    wasMicrophoneBlocked
                });
            }
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: blocked devices won't stop the ongoing call join, microphone=",
                ", camera=",
                ""
            ])), i, l);
            if (wasMicrophoneBlocked) {
                return o("WAWebVoipBlockedMicrophoneJoinState").recordBlockedMicrophoneMute(e), k({
                    callId: e,
                    isCameraNeverAsked: l === "prompt",
                    joinAndAccept: r
                });
            }
            return y({
                callId: e,
                checkVideo: false,
                isCameraOff: false,
                joinAndAccept: r,
                wasMicrophoneBlocked: false
            });
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t = null;
            const r = yield o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(e.checkVideo, null, undefined, {
                shouldOpenFailureGuide: (()=>{
                    const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                        t = b(e, n);
                        const r = yield t;
                        return r == null || r.type === "join" && r.keepsGuide;
                    });
                    function o(e) {
                        return r.apply(this, arguments);
                    }
                    return o;
                })()
            });
            if (r) {
                o("WAWebVoipCallAudioUnlock").releaseCallAudioUnlock();
                if (!e.checkVideo && e.isCameraOff) {
                    return E(e.callId);
                }
                return _;
            }
            const a = yield t;
            if (a?.type === "check_microphone_alone") {
                return y(babelHelpers.extends({}, e, {
                    checkVideo: false,
                    isCameraOff: true
                }));
            }
            if (a?.type !== "join") {
                o("WAWebVoipCallAudioUnlock").releaseCallAudioUnlock();
                return null;
            }
            return a.join;
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = yield o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("microphone");
            if (e.checkVideo && (r === "granted" || t === "unavailable" && r === "prompt") && o("WAWebVoipDeviceAccessRecoveryGating").isDeviceAccessRecoveryEnabled()) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: video check ",
                    " before joining an ongoing call, checking the microphone alone, microphone=",
                    ""
                ])), t, r);
                return {
                    type: "check_microphone_alone"
                };
            }
            const join = I(e, t, r) ?? S(e, t, r);
            if (join == null) {
                return null;
            }
            return {
                type: "join",
                join,
                keepsGuide: t === "unavailable"
            };
        });
        return v.apply(this, arguments);
    }
    function S({ callId, wasMicrophoneBlocked }, n, r) {
        if (wasMicrophoneBlocked || n !== "denied" || r !== "denied" || !o("WAWebVoipBrowserPermissionButtonGating").isBrowserPermissionButtonEnabled("microphone") || !o("WAWebVoipDeviceAccessRecoveryGating").isDeviceAccessRecoveryEnabled()) {
            return null;
        }
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: microphone blocked at the prompt before joining an ongoing call, joining muted"
        ])));
        o("WAWebVoipBlockedMicrophoneJoinState").recordBlockedMicrophoneMute(callId);
        return f;
    }
    function R(e, t) {
        if (!t && (e === "prompt" || e === "denied") && o("WAWebVoipBrowserPermissionButtonGating").hasBrowserPermissionButton("microphone")) {
            o("WAWebVoipDevicePermissionDialogLoader.react").preloadDevicePermissionDialog();
        }
    }
    function L(e, t) {
        if (o("WAWebUA").UA.isWebkit && t && (e === "prompt" || e === "denied") && o("WAWebVoipDeviceAccessRecoveryGating").isDeviceAccessRecoveryEnabled()) {
            o("WAWebVoipCallAudioUnlock").unlockCallAudio();
        }
    }
    function E(callId) {
        return {
            afterJoin: function() {
                return o("WAWebVoipJoinWithoutCamera").markJoinWithoutCamera(callId);
            }
        };
    }
    function k({ callId, isCameraNeverAsked, joinAndAccept }) {
        if (!isCameraNeverAsked || joinAndAccept || !o("WAWebVoipBrowserPermissionButtonGating").isBrowserPermissionButtonEnabled("microphone")) {
            return f;
        }
        return {
            afterJoin: function() {
                o("WAWebVoipJoinWithoutCamera").markJoinWithoutCamera(callId);
                afterJoin();
            }
        };
    }
    function I({ callId, isCameraOff, joinAndAccept }, t, n) {
        if (T(n, joinAndAccept)) {
            o("WAWebVoipCallAudioUnlock").holdUnlockedCallAudio();
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: microphone ",
                " before joining an ongoing call (",
                "), joining, camera off=",
                ""
            ])), t, n, String(isCameraOff));
            return {
                afterJoin: function() {
                    if (isCameraOff) {
                        o("WAWebVoipJoinWithoutCamera").markJoinWithoutCamera(callId);
                    }
                    if (joinAndAccept) {
                        afterJoin();
                        if (t === "denied") {
                            o("WAWebVoipMicrophoneRefusalState").reportMicrophoneRefused(callId);
                        }
                    }
                }
            };
        }
        return null;
    }
    function T(e, joinAndAccept) {
        return o("WAWebUA").UA.isWebkit && (e === "denied" || e === "prompt") && (!joinAndAccept || o("WAWebVoipCallAudioUnlock").canStartCallAudio()) && o("WAWebVoipDeviceAccessRecoveryGating").isDeviceAccessRecoveryEnabled();
    }
    function afterJoin() {
        x().catch((e)=>{
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: muting an ongoing call joined without a microphone failed"
            ]))).catching(r("getErrorSafe")(e));
        });
    }
    function x() {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (e?.type === "web") {
                const t = yield e.setCallMute(true);
                if (t !== 0) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: muting an ongoing call joined without a microphone failed with status: ",
                        ""
                    ])), t);
                }
            }
        });
        return $.apply(this, arguments);
    }
    l.checkOngoingCallJoinDevices = g;
}, 98);