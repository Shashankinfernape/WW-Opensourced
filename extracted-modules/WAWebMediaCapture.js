__d("WAWebMediaCapture", [
    "Promise",
    "WAGetDisplayMedia",
    "WAGetUserMedia",
    "WALogger",
    "WARetryPromise",
    "WAWebABProps",
    "WAWebGetUserMediaErrors",
    "WAWebGuidePopup.react",
    "WAWebMediaCaptureStreamType",
    "WAWebMediaPermissionsUtils",
    "WAWebModalManager",
    "asyncToGeneratorRuntime",
    "cr:19603",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = m || (m = o("react"));
    const _ = {
        GetUserMediaError: o("WAWebGetUserMediaErrors").GetUserMediaError,
        NotSupportedError: o("WAWebGetUserMediaErrors").NotSupportedError,
        NotAllowedError: o("WAWebGetUserMediaErrors").NotAllowedError,
        ConstraintNotSatisfiedError: o("WAWebGetUserMediaErrors").ConstraintNotSatisfiedError,
        OverconstrainedError: o("WAWebGetUserMediaErrors").OverconstrainedError,
        NotFoundError: o("WAWebGetUserMediaErrors").NotFoundError,
        NotReadableError: o("WAWebGetUserMediaErrors").NotReadableError,
        SourceUnavailableError: o("WAWebGetUserMediaErrors").SourceUnavailableError
    };
    const f = Object.freeze({
        [o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE]: 1000,
        [o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA]: 3000,
        [o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE]: 3000
    });
    function g({ cameraFacingMode, featureSurface, mediaConstraints, targetWindow, timeoutCallback, timeoutLimit, type }) {
        let C;
        let v = false;
        let R = null;
        let L = null;
        let E = null;
        const k = timeoutLimit ?? f[type];
        function I() {
            if (R != null) {
                self.clearTimeout(R);
                R = null;
            }
        }
        function T() {
            I();
            if (!v && k < Number.POSITIVE_INFINITY) {
                R = self.setTimeout(function() {
                    R = null;
                    if (!v) {
                        if (timeoutCallback) {
                            timeoutCallback();
                        } else {
                            const e = S(type, featureSurface, E);
                            if (e != null) {
                                D();
                                L = e;
                                o("WAWebModalManager").ModalManager.on("open_modal", $);
                                o("WAWebModalManager").ModalManager.on("close_modal", x);
                                o("WAWebModalManager").ModalManager.open(e);
                            }
                        }
                    }
                }, k);
            }
        }
        function D() {
            o("WAWebModalManager").ModalManager.off("open_modal", $);
            o("WAWebModalManager").ModalManager.off("close_modal", x);
        }
        function x() {
            L = null;
            D();
        }
        function $(e) {
            if (e !== L) {
                x();
            }
        }
        function P() {
            I();
            if (L != null) {
                x();
                o("WAWebModalManager").ModalManager.close();
            }
        }
        const N = mediaConstraints ?? y(type, cameraFacingMode);
        const M = targetWindow?.navigator?.mediaDevices;
        const w = type === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA || type === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE || type === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE ? targetWindow != null && M != null ? function(e) {
            return M.getUserMedia(e);
        } : o("WAGetUserMedia").getUserMedia : type === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.DESKTOP ? targetWindow != null && M != null ? function(e) {
            return M.getDisplayMedia(e);
        } : o("WAGetDisplayMedia").getDisplayMedia : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${type}`);
        })();
        const asyncStream = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            E = yield b(type);
            T();
            const t = targetWindow?.navigator ?? navigator;
            let a = false;
            if (type === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE) {
                const i = yield o("WAWebMediaPermissionsUtils").checkMediaPermissionState("microphone", t);
                const l = i.denied;
                a = l;
            } else if (type === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA) {
                const m = yield o("WAWebMediaPermissionsUtils").checkMediaPermissionState("camera", t);
                const p = m.denied;
                a = p;
            } else {
                if (type === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE) {
                    a = yield o("WAWebMediaPermissionsUtils").isAnyMediaPermissionDenied([
                        "microphone",
                        "camera"
                    ], t);
                }
            }
            if (a) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaCapture: permission already denied, fast-failing"
                ])));
                throw new (o("WAWebGetUserMediaErrors")).NotAllowedError("Permissions API reports denied");
            }
            return r("WARetryPromise")(function({ failCount, retry }) {
                return new (d || (d = n("Promise")))(function(e, n) {
                    T();
                    if (v) {
                        e(undefined);
                        return;
                    }
                    if (!w) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "MediaCapture:start() no ability to capture media"
                        ])));
                        n(new (o("WAWebGetUserMediaErrors")).GetUserMediaError);
                    } else {
                        const a = N[failCount];
                        w(a).then((e)=>{
                            if (v) {
                                h(e);
                                return;
                            }
                            C = e;
                            return e;
                        }).then(e).catch((e)=>{
                            if (e.name === "NotReadableError" && N[failCount + 1]) {
                                retry();
                                return;
                            }
                            n(e);
                        });
                    }
                });
            });
        })().catch((e)=>{
            const t = e instanceof Error ? e.name : e;
            const n = _[t] || o("WAWebGetUserMediaErrors").GetUserMediaError;
            throw new n(e instanceof Error ? e.message : undefined);
        }).finally(P);
        return {
            asyncStream,
            disposeStream: function() {
                v = true;
                P();
                if (C) {
                    h(C);
                }
            }
        };
    }
    function h(e) {
        for(let t = e.getTracks(), n = 0; n < t.length; n++){
            try {
                t[n].stop();
            } catch (error) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaCapture: failed to stop ",
                    " track"
                ])), t[n].kind).catching(r("getErrorSafe")(error)).sendLogs("media-capture-track-stop-failed");
            }
        }
    }
    function y(type, cameraFacingMode) {
        const r = [];
        e: {
            if (type === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA) {
                r.push(...C(false, cameraFacingMode));
                break e;
            }
            if (type === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE) {
                r.push(...C(true, cameraFacingMode));
                break e;
            }
            if (type === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE) {
                r.push({
                    audio: true
                });
                break e;
            }
            if (type === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.DESKTOP) {
                const a = C(false);
                r.push(...a.map((e)=>babelHelpers.extends({}, e, {
                        preferCurrentTab: false,
                        selfBrowserSurface: "exclude",
                        systemAudio: "exclude",
                        surfaceSwitching: "include",
                        monitorTypeSurfaces: "include"
                    })));
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${type}`);
        }
        if (n("cr:19603") != null) {
            return n("cr:19603").addSelectedDeviceConstraints(type, r);
        }
        return r;
    }
    function C(audio, ideal) {
        const n = o("WAWebABProps").getABPropConfigValue("web_image_max_edge");
        const r = 1280;
        const a = 720;
        const i = ideal != null ? {
            facingMode: {
                ideal
            }
        } : undefined;
        return [
            {
                video: babelHelpers.extends({}, i, {
                    width: n,
                    height: n
                }),
                audio
            },
            {
                video: babelHelpers.extends({}, i, {
                    width: Math.min(r, n),
                    height: Math.min(a, n)
                }),
                audio
            },
            {
                video: i ?? true,
                audio
            }
        ];
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e !== o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE) {
                return null;
            }
            const t = yield (d || (d = n("Promise"))).all([
                o("WAWebMediaPermissionsUtils").checkMediaPermissionState("microphone"),
                o("WAWebMediaPermissionsUtils").checkMediaPermissionState("camera")
            ]);
            const granted = t[0].granted;
            const granted_1 = t[1].granted;
            return {
                micGranted: granted,
                camGranted: granted_1
            };
        });
        return v.apply(this, arguments);
    }
    function S(e, t, n) {
        const r = n != null ? ((e)=>{
            if (e === "camera") {
                return o("WAWebGuidePopup.react").Messaging.CAMERA;
            }
            if (e === "mic") {
                return o("WAWebGuidePopup.react").Messaging.MIC;
            }
            if (e === "camera_and_mic") {
                return o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })(o("WAWebMediaPermissionsUtils").getDeviceSpecificPermissionMessaging(n.micGranted, n.camGranted)) : o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC;
        const messaging = e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA ? o("WAWebGuidePopup.react").Messaging.CAMERA : e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE ? o("WAWebGuidePopup.react").Messaging.MIC : e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE ? r : e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.DESKTOP ? null : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
        if (messaging == null) {
            return null;
        }
        return p.jsx(o("WAWebGuidePopup.react").GuidePopup, {
            messaging,
            type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_ALLOW,
            featureSurface: t
        });
    }
    S.displayName = `${S.name} [from ${i.id}]`;
    let R;
    function L() {
        if (R === undefined) {
            R = "srcObject" in document.createElement("video");
        }
        return R;
    }
    l.start = g;
    l.stop = h;
    l.isSrcObjectInVideoElement = L;
}, 98);