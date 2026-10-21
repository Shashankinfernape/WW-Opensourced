__d("WAWebVoipAcquireMediaStream", [
    "$InternalEnum",
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WAGetMediaDevicesSupportedConstraints",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebCallCollection",
    "WAWebCoreActionsODS",
    "WAWebEnvironment",
    "WAWebGetUserMediaErrors",
    "WAWebGuidePopup.react",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMediaPermissionsUtils",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVoipActivityTracker",
    "WAWebVoipBrowserAudioStatus",
    "WAWebVoipCameraPrewarm",
    "WAWebVoipCameraTrackConstraints",
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipGatingUtils",
    "WAWebVoipPermissionCheckCaptureOwner",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipScreenSharePickerState",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "type"
    ];
    const s = [
        "type"
    ];
    const u = [
        "type"
    ];
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    let M;
    let w;
    let A;
    let F;
    let O;
    let B;
    let W;
    let q;
    let U;
    let V;
    let H;
    let G;
    let z;
    let j;
    let K;
    let Q;
    let X;
    let Y;
    let J;
    let Z;
    let ee;
    let te;
    let ne;
    let re;
    let oe;
    let ae;
    let ie;
    let le;
    let se;
    let ue;
    let ce;
    let de;
    let me;
    let pe;
    let _e;
    const fe = _e || (_e = o("react"));
    function ge() {
        return o("WAWebABProps").getABPropConfigValue("enable_web_voip_virtual_video_capture_driver") === true;
    }
    const he = 200;
    const ye = new WeakMap;
    function Ce(e) {
        const t = ye.get(e);
        if (t != null) {
            return t;
        }
        var r = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = Date.now();
            const n = yield tn(e);
            const r = Date.now() - t;
            n.getTracks().forEach((e)=>{
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableVideoDevices] permission track ",
                    ": readyState=",
                    ", stopping (took ",
                    "ms)"
                ])), e.kind, e.readyState, r);
                e.stop();
            });
        })().finally(()=>{
            window.setTimeout(function() {
                if (ye.get(e) === r) {
                    ye.delete(e);
                }
            }, he);
        });
        ye.set(e, r);
        return r;
    }
    const be = n("$InternalEnum").Mirrored([
        "None",
        "Ideal",
        "Exact"
    ]);
    const ve = new Set([
        "ConstraintNotSatisfiedError",
        "OverconstrainedError",
        "NotFoundError"
    ]);
    let Se = null;
    function Re() {
        return Se;
    }
    const Le = {
        microphone: null,
        camera: null
    };
    function Ee() {
        Le.microphone = null;
        Le.camera = null;
    }
    const ke = 1000;
    const Ie = 10000;
    const Te = 30000;
    const De = 10000;
    const xe = 1000;
    const $e = 30000;
    let Pe = null;
    function Ne(e) {
        return Pe !== e;
    }
    function Me(e) {
        if (Pe === e) {
            Pe = null;
        }
    }
    function we(e) {
        const e_scheduledCallId = e.scheduledCallId;
        const activeCall = r("WAWebCallCollection").activeCall;
        const o = activeCall?.id;
        if (e_scheduledCallId == null || e_scheduledCallId !== o) {
            return `call changed (scheduled=${e_scheduledCallId ?? "none"}, current=${o ?? "none"})`;
        }
        if (e.isCallLinkPreviewRetry && activeCall?.isInCallLinkPreview() !== true) {
            return `call link preview no longer active (callId=${e_scheduledCallId})`;
        }
        return null;
    }
    function Ae(e, t) {
        const n = we(e);
        if (n == null) {
            return false;
        }
        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV:acquireCameraStream] camera permission retry stopped at ",
            ": ",
            ""
        ])), t, n);
        Me(e);
        return true;
    }
    function Fe(e) {
        return ((e)=>(typeof e === "object" && e !== null || typeof e === "function") && e.checkVideo === true && e.microphone === true && e.camera === true || (typeof e === "object" && e !== null || typeof e === "function") && e.checkVideo === false && e.microphone === true)(babelHelpers.extends({
            checkVideo: e
        }, Le));
    }
    function Oe() {
        const activeCall = r("WAWebCallCollection").activeCall;
        return {
            isCallLinkPreview: activeCall?.isInCallLinkPreview() === true,
            scheduledCallId: activeCall?.id ?? null
        };
    }
    function Be(e, t) {
        if (e !== "prompt" || o("WAWebUA").UA.isSafari) {
            return Ie;
        }
        if (t.isCallLinkPreview) {
            return Te;
        }
        return null;
    }
    function We(e) {
        if (e !== "prompt" || o("WAWebUA").UA.isSafari) {
            return De;
        }
        return null;
    }
    function qe(e) {
        return Ue.apply(this, arguments);
    }
    function Ue() {
        Ue = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!Ae(e, "unmute start")) {
                const t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                if (!Ae(e, "after stack load") && t?.type === "web") {
                    const n = yield t.setCallVideoMute(false);
                    o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] camera permission retry setCallVideoMute(false) status: ",
                        ""
                    ])), n);
                }
            }
        });
        return Ue.apply(this, arguments);
    }
    function Ve(e) {
        return He.apply(this, arguments);
    }
    function He() {
        He = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!Ne(e) && !Ae(e, "before permission query")) {
                const t = yield Xe(true);
                const n = t.cameraPermission;
                if (!Ne(e) && !Ae(e, "after permission query")) {
                    if (n === "granted") {
                        o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:acquireCameraStream] camera permission granted after timeout; retrying video capture"
                        ])));
                        try {
                            yield qe(e);
                        } finally{
                            Me(e);
                        }
                        return;
                    }
                    const r = Date.now() - e.retryStartedAt;
                    if (n === "denied" || !e.isCallLinkPreviewRetry && r >= $e) {
                        Me(e);
                        o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:acquireCameraStream] camera permission retry stopped: permission=",
                            ", elapsed=",
                            "ms"
                        ])), n, r);
                        return;
                    }
                    Ge(e);
                }
            }
        });
        return He.apply(this, arguments);
    }
    function Ge(e) {
        self.setTimeout(function() {
            if (!Ne(e)) {
                Ve(e).catch((e)=>{
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] camera permission retry poll failed: ",
                        ""
                    ])), e).sendLogs("voip-camera-retry-poll-fail");
                });
            }
        }, xe);
    }
    function ze(e) {
        if (!(!o("WAWebUA").UA.isSafari && !e.isCallLinkPreview)) {
            const n = {
                isCallLinkPreviewRetry: e.isCallLinkPreview,
                retryStartedAt: Date.now(),
                scheduledCallId: e.scheduledCallId
            };
            const r = we(n);
            if (r != null) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] camera permission retry not scheduled: ",
                    ""
                ])), r);
                return;
            }
            Pe = n;
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] camera permission prompt timed out; waiting for grant to retry (callId=",
                ", callLinkPreview=",
                ", safari=",
                ")"
            ])), n.scheduledCallId ?? "none", n.isCallLinkPreviewRetry, String(o("WAWebUA").UA.isSafari));
            Ge(n);
        }
    }
    function je(asyncStream, disposeStream, a, i, l) {
        let s = null;
        let u = false;
        asyncStream.catch(r("WAWebNoop"));
        return (pe || (pe = n("Promise"))).race([
            asyncStream,
            new pe(function(e) {
                s = self.setTimeout(function() {
                    u = true;
                    s = null;
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:",
                        "] getUserMedia timed out after ",
                        "ms"
                    ])), i, a);
                    l?.();
                    disposeStream();
                    e(null);
                }, a);
            })
        ]).finally(()=>{
            if (!u && s != null) {
                self.clearTimeout(s);
            }
        });
    }
    function Ke() {
        return Qe.apply(this, arguments);
    }
    function Qe() {
        Qe = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (navigator === undefined || !navigator.permissions) {
                return null;
            }
            try {
                const e = yield navigator.permissions.query({
                    name: "camera"
                });
                return e.state;
            } catch (e) {
                return null;
            }
        });
        return Qe.apply(this, arguments);
    }
    function Xe(e) {
        return Ye.apply(this, arguments);
    }
    function Ye() {
        Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = {
                micPermission: "prompt",
                cameraPermission: "prompt"
            };
            if (navigator === undefined || !navigator.permissions) {
                return t;
            }
            try {
                const n = yield navigator.permissions.query({
                    name: "microphone"
                });
                t.micPermission = n.state;
                if (e) {
                    const r = yield navigator.permissions.query({
                        name: "camera"
                    });
                    t.cameraPermission = r.state;
                }
            } catch (e) {}
            return t;
        });
        return Ye.apply(this, arguments);
    }
    function Je(e) {
        return Ze.apply(this, arguments);
    }
    function Ze() {
        Ze = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e === "denied") {
                return "camera_denied";
            }
            const t = yield Ke();
            if (t === "denied" || e === "timed_out" && t === "prompt") {
                return "camera_denied";
            }
            return "camera_unavailable";
        });
        return Ze.apply(this, arguments);
    }
    function et(e) {
        return tt.apply(this, arguments);
    }
    function tt() {
        tt = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ abortSignal, checkVideo, options, originatingCall }) {
            const canJoin = yield st(false, originatingCall, abortSignal, {
                suppressPromptGuide: options?.suppressPromptGuide
            });
            if (!canJoin || !checkVideo || ge()) {
                return {
                    canJoin,
                    reason: null,
                    videoMuted: false
                };
            }
            const s = yield Ke();
            if (nt(originatingCall, abortSignal)) {
                return {
                    canJoin: false,
                    reason: null,
                    videoMuted: false
                };
            }
            if (s === "denied") {
                return {
                    canJoin: true,
                    reason: "camera_denied",
                    videoMuted: true
                };
            }
            const timeoutLimitOverride = options?.cameraTimeoutMs ?? (s === "prompt" && !o("WAWebUA").UA.isSafari ? Te : Ie);
            const c = yield ct({
                captureTypeOverride: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA,
                checkVideo: true,
                showFailureModal: false,
                timeoutLimitOverride,
                originatingCall,
                abortSignal
            });
            if (nt(originatingCall, abortSignal)) {
                return {
                    canJoin: false,
                    reason: null,
                    videoMuted: false
                };
            }
            if (c === "granted") {
                return {
                    canJoin: true,
                    reason: null,
                    videoMuted: false
                };
            }
            return {
                canJoin: true,
                reason: yield Je(c),
                videoMuted: true
            };
        });
        return tt.apply(this, arguments);
    }
    function nt(originatingCall, abortSignal) {
        if (abortSignal?.aborted === true) {
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipCallJoinPermissions] join cancelled during the camera probe"
            ])));
            return true;
        }
        if (o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(originatingCall)) {
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipCallJoinPermissions] originating call ended during the camera probe"
            ])));
            return true;
        }
        return false;
    }
    function rt(e, t) {
        if (e) {
            return ((e)=>{
                if (e === "camera") {
                    return o("WAWebGuidePopup.react").Messaging.CAMERA_FAIL;
                }
                if (e === "mic") {
                    return o("WAWebGuidePopup.react").Messaging.MIC_FAIL;
                }
                if (e === "camera_and_mic") {
                    return o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_FAIL;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })(o("WAWebMediaPermissionsUtils").getDeviceSpecificPermissionMessaging(t.micPermission === "granted", t.cameraPermission === "granted"));
        }
        return o("WAWebGuidePopup.react").Messaging.MIC_FAIL;
    }
    const ot = {
        not_acquired: "unavailable",
        timed_out: "timed_out"
    };
    function at(error) {
        if (error instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
            return "denied";
        }
        return "unavailable";
    }
    function it(isCameraOnly, shouldCheckVideo) {
        if (!isCameraOnly) {
            Le.microphone = true;
        }
        if (shouldCheckVideo) {
            Le.camera = true;
        }
    }
    function lt(isCameraOnly, t, n) {
        if (isCameraOnly) {
            o("WAWebVoipActivityTracker").trackUiActivity(n ? o("WAWebVoipActivityTracker").VoipUiActivity.PERMISSION_REQUEST_CAMERA_START : o("WAWebVoipActivityTracker").VoipUiActivity.PERMISSION_REQUEST_CAMERA_END);
            return;
        }
        if (t) {
            o("WAWebVoipActivityTracker").trackUiActivity(n ? o("WAWebVoipActivityTracker").VoipUiActivity.PERMISSION_REQUEST_CAMERA_AND_MIC_START : o("WAWebVoipActivityTracker").VoipUiActivity.PERMISSION_REQUEST_CAMERA_AND_MIC_END);
            return;
        }
        o("WAWebVoipActivityTracker").trackUiActivity(n ? o("WAWebVoipActivityTracker").VoipUiActivity.PERMISSION_REQUEST_MIC_START : o("WAWebVoipActivityTracker").VoipUiActivity.PERMISSION_REQUEST_MIC_END);
    }
    function st(e, t, n, r) {
        return ut.apply(this, arguments);
    }
    function ut() {
        ut = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, originatingCall, abortSignal, r) {
            const o = yield ct({
                checkVideo: e,
                onFailureGuideConfirm: r?.onFailureGuideConfirm,
                showFailureModal: true,
                shouldOpenFailureGuide: r?.shouldOpenFailureGuide,
                suppressPromptGuide: r?.suppressPromptGuide,
                originatingCall,
                abortSignal
            });
            return o === "granted";
        });
        return ut.apply(this, arguments);
    }
    function ct(e) {
        return dt.apply(this, arguments);
    }
    function dt() {
        dt = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ abortSignal, captureTypeOverride, checkVideo, onFailureGuideConfirm, originatingCall, shouldOpenFailureGuide, showFailureModal, suppressPromptGuide, timeoutLimitOverride }) {
            if (r("WAWebEnvironment").isWindows && !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) {
                Le.microphone = true;
                Le.camera = true;
                return "granted";
            }
            const shouldCheckVideo = checkVideo && !ge();
            const p = o("WAWebVoipPermissionCheckCaptureOwner").getPermissionCheckOwner(originatingCall);
            const _ = yield Xe(checkVideo);
            if (ft(originatingCall, abortSignal)) {
                return "unavailable";
            }
            const f = captureTypeOverride ?? (shouldCheckVideo ? o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE : o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE);
            const isCameraOnly = f === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA;
            const h = f === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE;
            try {
                lt(isCameraOnly, h, true);
                const y = yield Tt(f, shouldCheckVideo, p, abortSignal, showFailureModal, timeoutLimitOverride, suppressPromptGuide);
                bt(y, f, _);
                return _t(y, {
                    abortSignal,
                    isCameraOnly,
                    originatingCall,
                    shouldCheckVideo
                });
            } catch (error) {
                if (gt(originatingCall, error, abortSignal)) {
                    return "unavailable";
                }
                Ct(error, f, _);
                const C = at(error);
                St(error, f, shouldCheckVideo, _, showFailureModal && (yield mt(shouldOpenFailureGuide, C)), onFailureGuideConfirm);
                return C;
            } finally{
                lt(isCameraOnly, h, false);
            }
        });
        return dt.apply(this, arguments);
    }
    function mt(e, t) {
        return pt.apply(this, arguments);
    }
    function pt() {
        pt = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e == null) {
                return true;
            }
            try {
                return yield e(t);
            } catch (error) {
                o("WALogger").WARN(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:checkVoipDevicePermissions] could not decide on the failure guide"
                ]))).catching(r("getErrorSafe")(error));
                return true;
            }
        });
        return pt.apply(this, arguments);
    }
    function _t(e, { abortSignal, isCameraOnly, originatingCall, shouldCheckVideo }) {
        const l = ot[e];
        return l ?? (it(isCameraOnly, shouldCheckVideo), e === "released_after_acquire" ? "unavailable" : abortSignal?.aborted === true ? (o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV:checkVoipDevicePermissions] permission capture was cancelled after acquisition"
        ]))), "unavailable") : o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(originatingCall) ? (o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV:checkVoipDevicePermissions] aborting permission check because the originating call ended during capture"
        ]))), "unavailable") : "granted");
    }
    function ft(originatingCall, abortSignal) {
        if (abortSignal?.aborted === true) {
            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] permission check was cancelled before capture"
            ])));
            return true;
        }
        if (o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(originatingCall)) {
            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] aborting permission check because the originating call ended"
            ])));
            return true;
        }
        return false;
    }
    function gt(originatingCall, error, abortSignal) {
        if (abortSignal?.aborted === true) {
            o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] suppressing permission capture error because the permission check was cancelled: ",
                ""
            ])), String(error));
            return true;
        }
        if (o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(originatingCall)) {
            o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] suppressing permission capture error because the originating call ended: ",
                ""
            ])), String(error));
            return true;
        }
        return false;
    }
    const sampling = 0.01;
    function yt(e, t) {
        const n = t.micPermission === "granted";
        const r = t.cameraPermission === "granted";
        if (e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE) {
            return n;
        }
        return (e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA || n) && r;
    }
    function Ct(error, t, n) {
        const a = r("getErrorSafe")(error);
        if (o("WAWebGetUserMediaErrors").isDeniedBySystem(error)) {
            o("WAWebCoreActionsODS").logCallPermissionDeniedBySystem();
        }
        if (yt(t, n)) {
            if (error instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
                o("WAWebCoreActionsODS").logCallPermissionFailedWhileGranted("denied");
            } else if (error instanceof o("WAWebGetUserMediaErrors").NotReadableError || error instanceof o("WAWebGetUserMediaErrors").SourceUnavailableError) {
                o("WAWebCoreActionsODS").logCallPermissionFailedWhileGranted("device_error");
            }
        }
        o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV:checkVoipDevicePermissions] ",
            " capture failed: ",
            ": ",
            " (pre-prompt ",
            ")"
        ])), t, a.name, a.message, vt(t, n)).catching(a).sendLogs("voip-permission-check-failed", {
            sampling,
            employeeSampling: 1
        });
    }
    function bt(e, t, n) {
        if (e === "timed_out") {
            o("WAWebCoreActionsODS").logCallPermissionTimedOut();
            if (yt(t, n)) {
                o("WAWebCoreActionsODS").logCallPermissionFailedWhileGranted("timed_out");
            }
            o("WALogger").WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] ",
                " capture timed out (pre-prompt ",
                ")"
            ])), t, vt(t, n)).sendLogs("voip-permission-check-failed", {
                sampling,
                employeeSampling: 1
            });
        }
    }
    function vt(e, t) {
        if (e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE) {
            return `mic=${t.micPermission}`;
        }
        return `mic=${t.micPermission}, camera=${t.cameraPermission}`;
    }
    function St(error, t, shouldCheckVideo, r, a = true, onFailureGuideConfirm) {
        if (error instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
            o("WAWebCoreActionsODS").logCallPermissionDenied();
            if (a) {
                RtComponent(Et(error, t, shouldCheckVideo, r), o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK, onFailureGuideConfirm);
            }
            return;
        }
        if (error instanceof o("WAWebGetUserMediaErrors").NotReadableError || error instanceof o("WAWebGetUserMediaErrors").SourceUnavailableError) {
            o("WAWebCoreActionsODS").logCallPermissionDeviceError();
            if (a) {
                RtComponent(Lt(t), o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE, onFailureGuideConfirm);
            }
            return;
        }
        if (error instanceof o("WAWebGetUserMediaErrors").GetUserMediaError && a) {
            RtComponent(shouldCheckVideo ? o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_MISSING : o("WAWebGuidePopup.react").Messaging.MIC_MISSING, o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE, onFailureGuideConfirm);
        }
    }
    function RtComponent(messaging, t, onFailureGuideConfirm) {
        const Component = o("WAWebGuidePopup.react").GuidePopup;
        o("WAWebModalManager").ModalManager.open(<Component messaging={messaging} type={t} onConfirm={onFailureGuideConfirm == null ? undefined : function() {
            onFailureGuideConfirm();
            o("WAWebModalManager").closeModalManager();
        }} featureSurface={o("WAWebGuidePopup.react").FeatureSurface.VOIP} hideReloadHint={t === o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK && o("WAWebVoipDeviceAccessRecoveryGating").canAllowBlockedDeviceDuringCall()}/>);
    }
    function Lt(e) {
        if (e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE) {
            return o("WAWebGuidePopup.react").Messaging.MIC_UNAVAILABLE;
        }
        if (e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA) {
            return o("WAWebGuidePopup.react").Messaging.CAMERA_UNAVAILABLE;
        }
        return o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_UNAVAILABLE;
    }
    function Et(e, t, shouldCheckVideo, r) {
        if (kt(e)) {
            return It(t);
        }
        return rt(shouldCheckVideo, r);
    }
    function kt(e) {
        return !r("WAWebEnvironment").isWindows && o("WAWebGetUserMediaErrors").isDeniedBySystem(e);
    }
    function It(e) {
        if (e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE) {
            return o("WAWebGuidePopup.react").Messaging.MIC_BLOCKED_BY_SYSTEM;
        }
        if (e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA) {
            return o("WAWebGuidePopup.react").Messaging.CAMERA_BLOCKED_BY_SYSTEM;
        }
        return o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_BLOCKED_BY_SYSTEM;
    }
    function Tt(e, t, n, r, o, a, i) {
        return Dt.apply(this, arguments);
    }
    function Dt() {
        Dt = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a, i, l, s) {
            const u = o("WAWebVoipPermissionCheckCaptureOwner").registerPermissionCheckCaptureForKeys(n.registryKeys, r("WAWebNoop"));
            const c = i ?? true;
            const d = s === true || !c;
            const m = l ?? (Fe(t) ? Number.POSITIVE_INFINITY : undefined);
            const p = l == null ? null : Date.now() + l;
            const _ = Pt(t, e !== o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA);
            try {
                try {
                    return yield xt(e, m, n.registryKeys, _, a, d, l);
                } catch (error) {
                    if (_ == null || !Nt(error)) {
                        throw error;
                    }
                    if (a?.aborted === true) {
                        o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the permission check was cancelled"
                        ])));
                        return "not_acquired";
                    }
                    if (u.wasReleased()) {
                        o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the permission capture owner was released"
                        ])));
                        return "not_acquired";
                    }
                    if (o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(n.call)) {
                        o("WALogger").LOG(U || (U = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the originating call ended"
                        ])));
                        return "not_acquired";
                    }
                    o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:checkVoipDevicePermissions] selected camera unavailable, retrying permission check with default camera: ",
                        ""
                    ])), String(error));
                    const f = p == null ? undefined : Math.max(0, p - Date.now());
                    if (f === 0) {
                        return "timed_out";
                    }
                    return yield xt(e, f ?? m, n.registryKeys, undefined, a, d, f);
                }
            } finally{
                u.release();
            }
        });
        return Dt.apply(this, arguments);
    }
    function xt(e, t, n, r, o, a, i) {
        return $t.apply(this, arguments);
    }
    function $t() {
        $t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a, i, l = false, s) {
            const u = {
                type: e,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP
            };
            const c = s ?? t;
            if (c != null) {
                u.timeoutLimit = c;
            }
            if (l) {
                u.timeoutCallback = r("WAWebNoop");
            }
            if (a != null) {
                u.mediaConstraints = a;
            }
            const d = o("WAWebMediaCapture").start(u);
            const { asyncStream, disposeStream } = d;
            const _ = o("WAWebVoipPermissionCheckCaptureOwner").registerPermissionCheckCaptureForKeys(n, disposeStream);
            try {
                asyncStream.catch(r("WAWebNoop"));
                let f = false;
                let g = asyncStream;
                if (s != null) {
                    g = je(asyncStream, disposeStream, s, "checkVoipDevicePermissions", function() {
                        f = true;
                    });
                }
                let h;
                try {
                    h = i == null ? yield g : yield r("WAPromiseRaceAbort")(g, i).catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull));
                } catch (error) {
                    if (i?.aborted === true || _.wasReleased()) {
                        o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] suppressing permission capture error after cancellation or owner release: ",
                            ""
                        ])), String(error));
                        return "not_acquired";
                    }
                    throw error;
                }
                if (h == null) {
                    if (i?.aborted === true) {
                        o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] permission capture was cancelled"
                        ])));
                        return "not_acquired";
                    }
                    if (!f || _.wasReleased()) {
                        o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] permission capture was disposed before completing"
                        ])));
                        return "not_acquired";
                    }
                    o("WALogger").LOG(j || (j = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:checkVoipDevicePermissions] permission capture timed out"
                    ])));
                    return "timed_out";
                }
                if (_.wasReleased()) {
                    o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:checkVoipDevicePermissions] permission capture was released before completion"
                    ])));
                    return "released_after_acquire";
                }
                return "acquired";
            } finally{
                _.release();
            }
        });
        return $t.apply(this, arguments);
    }
    function Pt(e, t = true) {
        if (!e) {
            return null;
        }
        const n = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
        if (r("isStringNullOrEmpty")(n)) {
            return null;
        }
        return [
            babelHelpers.extends({
                video: {
                    deviceId: {
                        exact: n
                    }
                }
            }, t ? {
                audio: true
            } : {})
        ];
    }
    function Nt(error) {
        return error instanceof Error && ve.has(error.name);
    }
    function Mt(e) {
        return wt.apply(this, arguments);
    }
    function wt() {
        wt = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                o("WALogger").ERROR(Q || (Q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] getUserMedia not supported"
                ])));
                return null;
            }
            return ((t)=>{
                if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "microphone") {
                    const n = t.type;
                    const r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                    return Wt(r);
                }
                if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "camera") {
                    const o = t.type;
                    const a = babelHelpers.objectWithoutPropertiesLoose(t, s);
                    return Kt({
                        selectedDeviceId: a.selectedDeviceId,
                        params: a.params,
                        targetWindow: a.targetWindow,
                        isAVUpgrade: a.isAVUpgrade,
                        facingMode: a.facingMode
                    });
                }
                if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "desktop") {
                    const i = t.type;
                    const l = babelHelpers.objectWithoutPropertiesLoose(t, u);
                    return mn({
                        params: l.params,
                        targetWindow: l.targetWindow
                    });
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            })(t);
        });
        return wt.apply(this, arguments);
    }
    let At = null;
    function Ft() {
        if (At == null) {
            const t = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
            o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [EarlyMicAcquire] Acquiring microphone in gesture (device=",
                ")"
            ])), t?.slice(0, 8) ?? "default");
            var n = At = Mt({
                type: "microphone",
                selectedDeviceId: t ?? undefined,
                suppressErrorPopup: true
            }).then((e)=>{
                if (e != null) {
                    o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [EarlyMicAcquire] Microphone acquired successfully"
                    ])));
                }
                return e;
            }).catch((e)=>{
                o("WALogger").WARN(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Microphone acquire failed: ",
                    ""
                ])), e);
                if (At === n) {
                    At = null;
                }
                return null;
            });
        }
    }
    function Ot() {
        if (At != null) {
            const e = At;
            At = null;
            e.then((e)=>{
                if (e != null) {
                    o("WAWebMediaCapture").stop(e);
                    o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [EarlyMicAcquire] Cleaned up unused early-acquired microphone stream"
                    ])));
                }
            }).catch((e)=>{
                o("WALogger").WARN(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Cleanup failed: ",
                    ""
                ])), e);
            });
        }
    }
    const Bt = [
        "exact",
        "ideal",
        "none"
    ];
    function Wt(e) {
        return qt.apply(this, arguments);
    }
    function qt() {
        qt = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ exactDeviceOnly = false, keepExistingModal = false, onError = o("WAWebCoreActionsODS").logCallMediaMicError, params, selectedDeviceId, suppressErrorPopup, targetWindow }) {
            o("WALogger").LOG(X || (X = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireMicrophoneStream] deviceId=",
                ", hasParams=",
                ""
            ])), selectedDeviceId?.slice(0, 8) ?? "null", String(params != null));
            const _ = targetWindow != null ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager : o("WAWebModalManager").ModalManager;
            const f = Ut(_, keepExistingModal);
            const g = Fe(false);
            const h = yield o("WAWebMediaCapture").start({
                type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
                timeoutLimit: g ? Infinity : undefined,
                timeoutCallback: exactDeviceOnly ? r("WAWebNoop") : undefined,
                targetWindow,
                mediaConstraints: params ? Bt.slice(0, exactDeviceOnly ? 1 : 3).map((e)=>Gt(e === "none" ? null : selectedDeviceId, e, params)) : undefined
            });
            const { asyncStream, disposeStream } = h;
            let b = null;
            if (!g && !exactDeviceOnly) {
                try {
                    const R = yield navigator.permissions?.query({
                        name: "microphone"
                    });
                    b = R?.state ?? null;
                } catch (e) {}
            }
            const L = We(b);
            const E = L != null ? je(asyncStream, disposeStream, L, "acquireMicrophoneStream") : asyncStream;
            return E.then((e)=>{
                if (e != null && !exactDeviceOnly) {
                    try {
                        Ht(e, params?.autoGainControl !== false);
                    } catch (error) {
                        o("WALogger").LOG(Y || (Y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:detectBrowserAudioProcessing] failed: ",
                            ""
                        ])), String(error));
                    }
                }
                return e;
            }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").NotAllowedError, function(e) {
                onError(e);
                if (suppressErrorPopup !== true) {
                    const Component = o("WAWebGuidePopup.react").GuidePopup;
                    f(<Component messaging={kt(e) ? o("WAWebGuidePopup.react").Messaging.MIC_BLOCKED_BY_SYSTEM : o("WAWebGuidePopup.react").Messaging.MIC_FAIL} type={o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK} featureSurface={o("WAWebGuidePopup.react").FeatureSurface.VOIP} hideReloadHint={o("WAWebVoipDeviceAccessRecoveryGating").canAllowBlockedDeviceDuringCall()} onConfirm={function() {
                        return _.close();
                    }}/>);
                }
            })).catch(o("WAFilteredCatch").filteredCatch([
                o("WAWebGetUserMediaErrors").NotReadableError,
                o("WAWebGetUserMediaErrors").SourceUnavailableError
            ], function(e) {
                onError(e);
                if (suppressErrorPopup !== true) {
                    let t;
                    const Component = (t = o("WAWebGuidePopup.react")).GuidePopup;
                    f(<Component messaging={t.Messaging.MIC_UNAVAILABLE} type={t.GuidePopupType.GUIDE_NONE} featureSurface={t.FeatureSurface.VOIP} onConfirm={function() {
                        return _.close();
                    }}/>);
                }
            })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").GetUserMediaError, function(e) {
                onError(e);
                if (suppressErrorPopup !== true) {
                    let t;
                    const Component = (t = o("WAWebGuidePopup.react")).GuidePopup;
                    f(<Component messaging={t.Messaging.MIC_MISSING} type={t.GuidePopupType.GUIDE_NONE} featureSurface={t.FeatureSurface.VOIP} onConfirm={function() {
                        return _.close();
                    }}/>);
                }
            }));
        });
        return qt.apply(this, arguments);
    }
    function Ut(e, keepExistingModal) {
        if (keepExistingModal) {
            return function(t) {
                if (!Vt(e) && !Vt(o("WAWebVoipPopoutModalManager").VoipPopoutModalManager)) {
                    e.open(t);
                }
            };
        }
        return function(t) {
            return e.open(t);
        };
    }
    function Vt(e) {
        let t = false;
        e.exists(function(e) {
            t = t || e;
        });
        return t;
    }
    function Ht(e, t) {
        const n = o("WAGetMediaDevicesSupportedConstraints").getMediaDevicesSupportedConstraints();
        const supported = {
            echoCancellation: n?.echoCancellation === true,
            noiseSuppression: n?.noiseSuppression === true,
            autoGainControl: n?.autoGainControl === true
        };
        const a = e.getAudioTracks()[0];
        if (a != null) {
            const i = a.getSettings();
            const l = new Map(Object.entries(i));
            const applied = {
                echoCancellation: i.echoCancellation === true,
                noiseSuppression: l.get("noiseSuppression") === true,
                autoGainControl: l.get("autoGainControl") === true
            };
            Se = {
                supported,
                applied
            };
            o("WAWebVoipBrowserAudioStatus").setBrowserAudioProcessingApplied(applied, t);
            o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:detectBrowserAudioProcessing] supported: EC=",
                ", NS=",
                ", AGC=",
                " | applied: EC=",
                ", NS=",
                ", AGC=",
                ""
            ])), String(supported.echoCancellation), String(supported.noiseSuppression), String(supported.autoGainControl), String(applied.echoCancellation), String(applied.noiseSuppression), String(applied.autoGainControl));
        } else {
            Se = {
                supported,
                applied: {
                    echoCancellation: false,
                    noiseSuppression: false,
                    autoGainControl: false
                }
            };
            o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:detectBrowserAudioProcessing] no audio track found in stream"
            ])));
        }
    }
    function Gt(e, t = "exact", params) {
        const a = {
            video: false,
            audio: {
                sampleRate: params.sampleRate,
                channelCount: params.channels,
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: params.autoGainControl !== false,
                sampleSize: params.bitsPerSample
            }
        };
        if (e != null && t === "exact") {
            a.audio = babelHelpers.extends({}, a.audio, {
                deviceId: {
                    exact: e
                }
            });
        } else if (e != null && t === "ideal") {
            a.audio = babelHelpers.extends({}, a.audio, {
                deviceId: {
                    ideal: e
                }
            });
        }
        o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [MicDeviceSelector] getVoipMicrophoneMediaConstraints: deviceId=",
            ", constraintType=",
            ", sampleRate=",
            ", channels=",
            ", autoGainControl=",
            ""
        ])), e?.slice(0, 8) ?? "null", t, params.sampleRate, params.channels, String(params.autoGainControl !== false));
        return a;
    }
    function zt(e) {
        return jt.apply(this, arguments);
    }
    function jt() {
        jt = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ facingMode, params, selectedDeviceId, targetWindow }) {
            if (targetWindow != null && (o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari)) {
                o("WAWebVoipCameraPrewarm").cleanupPrewarmedCamera();
                return null;
            }
            const l = yield o("WAWebVoipCameraPrewarm").consumePrewarmedStream();
            if (l == null) {
                return null;
            }
            const s = l.getVideoTracks()[0];
            const u = s?.getSettings();
            const c = u?.deviceId;
            if (facingMode != null && !r("isStringNullOrEmpty")(u?.facingMode) && u?.facingMode !== facingMode) {
                o("WALogger").LOG(J || (J = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraPrewarm] pre-warmed stream facing mismatch: requested=",
                    ", actual=",
                    ". Discarding pre-warmed stream."
                ])), facingMode, u?.facingMode ?? "unknown");
                l.getTracks().forEach((e)=>e.stop());
                return null;
            }
            const m = !r("isStringNullOrEmpty")(selectedDeviceId) && c != null && c !== "" && c !== selectedDeviceId;
            if (m) {
                o("WALogger").LOG(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraPrewarm] pre-warmed stream device mismatch: requested=",
                    ", actual=",
                    ". Discarding pre-warmed stream."
                ])), selectedDeviceId, c ?? "unknown");
                l.getTracks().forEach((e)=>e.stop());
                return null;
            }
            if (params != null) {
                o("WAWebVoipCameraPrewarm").scheduleResolutionSwitch(l, params);
            }
            return l;
        });
        return jt.apply(this, arguments);
    }
    function Kt(e) {
        return Qt.apply(this, arguments);
    }
    function Qt() {
        Qt = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ facingMode, isAVUpgrade, params, selectedDeviceId, targetWindow }) {
            if (ge()) {
                return null;
            }
            const s = yield Ke();
            if (s === "denied") {
                o("WALogger").LOG(ee || (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] camera permission denied, skipping camera acquisition"
                ])));
                const u = yield o("WAWebVoipCameraPrewarm").consumePrewarmedStream();
                if (u != null) {
                    u.getTracks().forEach((e)=>e.stop());
                }
                return null;
            }
            const c = yield zt({
                selectedDeviceId,
                params,
                targetWindow,
                facingMode
            });
            if (c != null) {
                return c;
            }
            const d = isAVUpgrade === true ? o("WAWebGuidePopup.react").FeatureSurface.VOIP_VIDEO_UPGRADE : o("WAWebGuidePopup.react").FeatureSurface.VOIP;
            const m = targetWindow != null ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager : o("WAWebModalManager").ModalManager;
            const p = Oe();
            const _ = Date.now();
            o("WALogger").LOG(te || (te = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] requesting camera: deviceId=",
                ", targetWindow=",
                ", isAVUpgrade=",
                ""
            ])), selectedDeviceId?.slice(0, 8) ?? "none", String(targetWindow != null), String(isAVUpgrade ?? false));
            const f = yield o("WAWebMediaCapture").start({
                type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA,
                featureSurface: d,
                timeoutLimit: Fe(true) ? Number.POSITIVE_INFINITY : undefined,
                targetWindow,
                mediaConstraints: Xt({
                    facingMode,
                    params,
                    selectedDeviceId
                })
            });
            const { asyncStream, disposeStream } = f;
            const y = Be(s, p);
            const C = y != null ? je(asyncStream, disposeStream, y, "acquireCameraStream", function() {
                if (s === "prompt") {
                    ze(p);
                }
            }) : asyncStream;
            return C.then((e)=>{
                const t = Date.now() - _;
                if (e != null) {
                    const l = e.getVideoTracks()[0];
                    o("WALogger").LOG(ne || (ne = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] acquired in ",
                        "ms: readyState=",
                        ", muted=",
                        ", deviceId=",
                        ""
                    ])), t, l?.readyState ?? "no-track", String(l?.muted ?? false), l?.getSettings()?.deviceId ?? "unknown");
                } else {
                    o("WALogger").LOG(re || (re = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] returned null stream after ",
                        "ms"
                    ])), t);
                }
                return e;
            }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").NotAllowedError, function(e) {
                o("WAWebCoreActionsODS").logCallMediaCameraError();
                const t = Date.now() - _;
                o("WALogger").LOG(oe || (oe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] NotAllowedError after ",
                    "ms: ",
                    ""
                ])), t, e.message);
                const Component = o("WAWebGuidePopup.react").GuidePopup;
                m.open(<Component messaging={kt(e) ? o("WAWebGuidePopup.react").Messaging.CAMERA_BLOCKED_BY_SYSTEM : o("WAWebGuidePopup.react").Messaging.CAMERA_FAIL} type={o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK} featureSurface={d} hideReloadHint={o("WAWebVoipDeviceAccessRecoveryGating").canAllowBlockedDeviceDuringCall()} onConfirm={function() {
                    return m.close();
                }}/>);
            })).catch(o("WAFilteredCatch").filteredCatch([
                o("WAWebGetUserMediaErrors").NotReadableError,
                o("WAWebGetUserMediaErrors").SourceUnavailableError
            ], function(e) {
                o("WAWebCoreActionsODS").logCallMediaCameraError();
                const t = Date.now() - _;
                o("WALogger").LOG(ae || (ae = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] NotReadableError after ",
                    "ms: ",
                    ""
                ])), t, e);
                const Component = o("WAWebGuidePopup.react").GuidePopup;
                m.open(<Component messaging={o("WAWebGuidePopup.react").Messaging.CAMERA_UNAVAILABLE} type={o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE} featureSurface={d} onConfirm={function() {
                    return m.close();
                }}/>);
            })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").GetUserMediaError, function(e) {
                o("WAWebCoreActionsODS").logCallMediaCameraError();
                const t = Date.now() - _;
                o("WALogger").LOG(ie || (ie = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] GetUserMediaError after ",
                    "ms: ",
                    ""
                ])), t, e);
                const Component = o("WAWebGuidePopup.react").GuidePopup;
                m.open(<Component messaging={o("WAWebGuidePopup.react").Messaging.CAMERA_MISSING} type={o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE} featureSurface={d} onConfirm={function() {
                    return m.close();
                }}/>);
            }));
        });
        return Qt.apply(this, arguments);
    }
    function Xt({ facingMode, params, selectedDeviceId }) {
        if (params != null) {
            if (facingMode != null) {
                return [
                    Yt({
                        facing: {
                            mode: facingMode,
                            constraintType: be.Ideal
                        },
                        params
                    }),
                    Yt({
                        params
                    })
                ];
            }
            return [
                Yt({
                    device: {
                        deviceId: selectedDeviceId,
                        constraintType: be.Exact
                    },
                    params
                }),
                Yt({
                    device: {
                        deviceId: selectedDeviceId,
                        constraintType: be.Ideal
                    },
                    params
                }),
                Yt({
                    params
                })
            ];
        }
    }
    function Yt({ device, facing, params }) {
        const video = r("WAWebVoipCameraTrackConstraints")(params);
        o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [CameraDeviceSelector] getVoipCameraMediaConstraints:\n    deviceId=",
            ", facing=",
            ", constraintType=",
            ", params=",
            ""
        ])), device?.deviceId, facing?.mode, device?.constraintType ?? facing?.constraintType, params);
        if (device != null && !r("isStringNullOrEmpty")(device.deviceId)) {
            const s = device.deviceId;
            e: {
                if (device.constraintType === be.None) {
                    break e;
                }
                if (device.constraintType === be.Exact) {
                    video.deviceId = {
                        exact: s
                    };
                    break e;
                }
                if (device.constraintType === be.Ideal) {
                    video.deviceId = {
                        ideal: s
                    };
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${device.constraintType}`);
            }
        } else if (facing != null) {
            e: {
                if (facing.constraintType === be.None) {
                    break e;
                }
                if (facing.constraintType === be.Exact) {
                    video.facingMode = {
                        exact: facing.mode
                    };
                    break e;
                }
                if (facing.constraintType === be.Ideal) {
                    video.facingMode = {
                        ideal: facing.mode
                    };
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${facing.constraintType}`);
            }
        }
        return {
            video,
            audio: false
        };
    }
    function Jt(params) {
        return {
            video: {
                width: {
                    ideal: params.width
                },
                height: {
                    ideal: params.height
                },
                frameRate: {
                    ideal: params.maxFps
                }
            },
            audio: false
        };
    }
    function Zt(e) {
        return en.apply(this, arguments);
    }
    function en() {
        en = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e = {}) {
            const t = e;
            const { isInActiveCall, skipPermissionRequest, targetWindow } = t;
            try {
                const s = o("WAWebVoipGatingUtils").isPopoutReuseCaptureEnabled();
                const u = isInActiveCall === true && !o("WAWebUA").UA.isFirefox && !o("WAWebUA").UA.isSafari;
                const c = u || isInActiveCall === true && s;
                const d = c ? navigator.mediaDevices : targetWindow?.navigator?.mediaDevices ?? navigator.mediaDevices;
                if (!(d != null && d.enumerateDevices)) {
                    o("WALogger").ERROR(le || (le = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:getAvailableVideoDevices] mediaDevices API not supported"
                    ])));
                    return [];
                }
                const m = skipPermissionRequest === true || o("WAWebUA").UA.isSafari && isInActiveCall === true;
                const p = o("WAWebUA").UA.isFirefox && targetWindow != null;
                if (!(c || m)) {
                    if (!ge()) {
                        const _ = p ? {
                            granted: false
                        } : yield o("WAWebMediaPermissionsUtils").checkMediaPermissionState("camera", targetWindow?.navigator);
                        const f = _.granted;
                        if (!f) {
                            try {
                                yield Ce(d);
                            } catch (error) {
                                if (isInActiveCall !== true) {
                                    throw error;
                                }
                            }
                        }
                    }
                }
                const g = yield o("WAWebAudioDeviceManager").coalescedEnumerateDevices(d);
                const h = g.filter((e)=>e.kind === "videoinput").map((e)=>({
                        deviceId: e.deviceId,
                        label: e.label || `Camera ${e.deviceId.slice(0, 8)}`
                    }));
                o("WALogger").LOG(se || (se = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableVideoDevices] loaded ",
                    "\n      video devices"
                ])), h.length);
                return h;
            } catch (error) {
                if (!(error instanceof Error) || !error.name.includes("NotAllowed")) {
                    o("WALogger").ERROR(ue || (ue = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:getAvailableVideoDevices] error loading devices: ",
                        ""
                    ])), error);
                }
                return [];
            }
        });
        return en.apply(this, arguments);
    }
    function tn(e) {
        return nn.apply(this, arguments);
    }
    function nn() {
        nn = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
            if (r("isStringNullOrEmpty")(t)) {
                return e.getUserMedia({
                    video: true
                });
            }
            try {
                return yield e.getUserMedia({
                    video: {
                        deviceId: {
                            exact: t
                        }
                    }
                });
            } catch (error) {
                if (!Nt(error)) {
                    throw error;
                }
                o("WALogger").LOG(ce || (ce = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableVideoDevices] selected camera unavailable, falling back to default camera: ",
                    ""
                ])), error);
                return e.getUserMedia({
                    video: true
                });
            }
        });
        return nn.apply(this, arguments);
    }
    function rn(e) {
        return on.apply(this, arguments);
    }
    function on() {
        on = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ deviceId, isInActiveCall, skipPermissionRequest, targetWindow }) {
            const i = yield Zt({
                isInActiveCall,
                skipPermissionRequest,
                targetWindow
            });
            if (i.some((e)=>e.deviceId === deviceId)) {
                return true;
            }
            o("WALogger").ERROR(de || (de = babelHelpers.taggedTemplateLiteralLoose([
                "voip: getIsValidVideoDevice: device not found in available devices: ",
                ""
            ])), deviceId);
            return false;
        });
        return on.apply(this, arguments);
    }
    const an = 25000;
    const ln = 250;
    const sn = 500;
    function un(e) {
        return e.closed === true;
    }
    function cn(targetWindow, t) {
        let n = null;
        let r = null;
        let o = null;
        try {
            n = function() {
                return t("popout pagehide");
            };
            targetWindow.addEventListener("pagehide", n);
        } catch (e) {
            n = null;
        }
        r = self.setTimeout(function() {
            r = null;
            o = self.setInterval(function() {
                try {
                    if (un(targetWindow)) {
                        t("popout closed");
                    }
                } catch (e) {
                    t("popout inaccessible");
                }
            }, ln);
        }, sn);
        return function() {
            if (r != null) {
                self.clearTimeout(r);
            }
            if (o != null) {
                self.clearInterval(o);
            }
            if (n != null) {
                try {
                    targetWindow.removeEventListener("pagehide", n);
                } catch (e) {}
            }
        };
    }
    function dn(asyncStream, disposeStream, targetWindow) {
        const a = new AbortController;
        let i = false;
        const l = function(n) {
            if (!i) {
                i = true;
                o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireDesktopStream] aborted: ",
                    ""
                ])), n);
                disposeStream();
                a.abort();
            }
        };
        const s = self.setTimeout(function() {
            return l(`getDisplayMedia timed out after ${an}ms`);
        }, an);
        const u = targetWindow != null ? cn(targetWindow, l) : null;
        asyncStream.catch(r("WAWebNoop"));
        return r("WAPromiseRaceAbort")(asyncStream, a.signal).catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull)).finally(()=>{
            self.clearTimeout(s);
            if (u != null) {
                u();
            }
        });
    }
    function mn(e) {
        return pn.apply(this, arguments);
    }
    function pn() {
        pn = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ params, targetWindow }) {
            const a = params ? Jt(params) : {
                video: true
            };
            const audio = (o("WAWebABProps").getABPropConfigValue("calling_audio_share_version") ?? 1) > 0;
            const l = {
                video: a.video,
                audio,
                preferCurrentTab: false,
                selfBrowserSurface: "exclude",
                systemAudio: audio ? "include" : "exclude",
                surfaceSwitching: "include",
                monitorTypeSurfaces: "include"
            };
            const s = Date.now();
            const u = o("WAWebVoipScreenSharePickerState").beginScreenSharePicker();
            try {
                const c = yield o("WAWebMediaCapture").start({
                    type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.DESKTOP,
                    featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
                    mediaConstraints: [
                        l
                    ],
                    targetWindow
                });
                const { asyncStream, disposeStream } = c;
                const p = yield dn(asyncStream, disposeStream, targetWindow).catch((e)=>{
                    if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
                        o("WAWebCoreActionsODS").logCallScreenShareDenied();
                        const t = Date.now() - s;
                        if (t < ke) {
                            o("WALogger").LOG(me || (me = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV] acquireDesktopStream: auto-denied in ",
                                "ms, showing guide popup"
                            ])), t);
                            const n = targetWindow != null ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager : o("WAWebModalManager").ModalManager;
                            const Component = o("WAWebGuidePopup.react").GuidePopup;
                            n.open(<Component messaging={o("WAWebGuidePopup.react").Messaging.SCREEN_SHARE_FAIL} type={o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK} featureSurface={o("WAWebGuidePopup.react").FeatureSurface.VOIP} onConfirm={function() {
                                return n.close();
                            }}/>);
                        }
                        return null;
                    }
                    return null;
                });
                return p;
            } catch (error) {
                if (error instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
                    o("WAWebCoreActionsODS").logCallScreenShareDenied();
                    const _ = Date.now() - s;
                    if (_ < ke) {
                        const f = targetWindow != null ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager : o("WAWebModalManager").ModalManager;
                        const Component = o("WAWebGuidePopup.react").GuidePopup;
                        f.open(<Component messaging={o("WAWebGuidePopup.react").Messaging.SCREEN_SHARE_FAIL} type={o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK} featureSurface={o("WAWebGuidePopup.react").FeatureSurface.VOIP} onConfirm={function() {
                            return f.close();
                        }}/>);
                    }
                    return null;
                }
                return null;
            } finally{
                u();
            }
        });
        return pn.apply(this, arguments);
    }
    l.getBrowserAudioProcessingStatus = Re;
    l.resetPermissionsCheckedForTest = Ee;
    l.queryCameraPermissionStrict = Ke;
    l.queryPermissionStatus = Xe;
    l.checkVoipCallJoinPermissions = et;
    l.checkVoipDevicePermissions = st;
    l.acquireVoipMediaStream = Mt;
    l.earlyAcquireMic = Ft;
    l.cleanupEarlyAcquiredMic = Ot;
    l.getAvailableVideoDevices = Zt;
    l.getIsValidVideoDevice = rn;
}, 98);