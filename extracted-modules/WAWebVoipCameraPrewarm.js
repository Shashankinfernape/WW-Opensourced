__d("WAWebVoipCameraPrewarm", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebLocalStorage",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUserPrefsVoip",
    "WAWebVoipCameraTrackConstraints",
    "WAWebVoipConverterPrewarm",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipResolutionCap",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m = null;
    let p = false;
    let _ = false;
    let f = null;
    const g = 640;
    const h = 480;
    const y = 30;
    const C = "voip_prewarm_resolution";
    let b = null;
    function v() {
        try {
            if (r("WAWebLocalStorage") == null) {
                return null;
            }
            const e = r("WAWebLocalStorage").getItem(C);
            if (e == null) {
                return null;
            }
            const t = JSON.parse(e);
            if (typeof t.width === "number" && typeof t.height === "number" && typeof t.maxFps === "number" && t.width > 0 && t.width <= 1920 && t.height > 0 && t.height <= 1080 && t.maxFps > 0 && t.maxFps <= 60) {
                return {
                    width: t.width,
                    height: t.height,
                    maxFps: t.maxFps
                };
            }
            return null;
        } catch (e) {
            return null;
        }
    }
    function S(t) {
        try {
            if (r("WAWebLocalStorage") == null) {
                return;
            }
            r("WAWebLocalStorage").setItem(C, JSON.stringify({
                width: t.width,
                height: t.height,
                maxFps: t.maxFps
            }));
        } catch (error) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [CameraPrewarm] Failed to save preferred resolution: ",
                ""
            ])), error);
        }
    }
    function R() {
        return o("WAWebABProps").getABPropConfigValue("enable_web_voip_virtual_video_capture_driver") === true;
    }
    function L() {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.CAMERA_PREWARM) && !R() && !(m != null || p)) {
                p = true;
                _ = false;
                let e = r("WAWebNoop");
                f = new (d || (d = n("Promise")))(function(t) {
                    e = t;
                });
                try {
                    if (o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.PERMISSIONS_API_OPTIMIZATION)) {
                        const l = yield o("WAWebMediaPermissionsUtils").checkMediaPermissionState("camera");
                        const s = l.denied;
                        if (s) {
                            return;
                        }
                    }
                    if (_) {
                        return;
                    }
                    const u = navigator.mediaDevices;
                    if (u == null || u.getUserMedia == null) {
                        return;
                    }
                    const C = v();
                    const S = o("WAWebVoipResolutionCap").applyLowEndResolutionCap({
                        width: C?.width ?? g,
                        height: C?.height ?? h,
                        maxFps: C?.maxFps ?? y
                    });
                    const { height, maxFps, width } = S;
                    b = {
                        width,
                        height,
                        maxFps
                    };
                    o("WAWebVoipConverterPrewarm").prewarmConverter(width, height);
                    const exact = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
                    const video = r("WAWebVoipCameraTrackConstraints")({
                        width,
                        height,
                        maxFps
                    });
                    if (!r("isStringNullOrEmpty")(exact)) {
                        video.deviceId = {
                            exact
                        };
                    }
                    o("WAWebAppTracker").AppTracker.mark(o("WAWebAppTracker").AppTrackerType.VoipCameraPrewarm);
                    const streamPromise = u.getUserMedia({
                        video,
                        audio: false
                    }).then((e)=>{
                        if (_) {
                            e.getTracks().forEach((e)=>e.stop());
                            m = null;
                            b = null;
                            return null;
                        }
                        return e;
                    }).catch((e)=>{
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraPrewarm] Camera pre-warm failed: ",
                            ""
                        ])), e);
                        m = null;
                        b = null;
                        return null;
                    });
                    m = {
                        streamPromise
                    };
                } finally{
                    p = false;
                    e();
                }
            }
        });
        return E.apply(this, arguments);
    }
    function k() {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (f != null) {
                yield f;
                f = null;
            }
            if (m == null) {
                return null;
            }
            const e = m;
            const e_streamPromise = e.streamPromise;
            m = null;
            return e_streamPromise;
        });
        return I.apply(this, arguments);
    }
    function T(e, t) {
        const i = e.getVideoTracks()[0];
        if (i == null) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [CameraPrewarm] No video track found, aborting resolution switch"
            ])));
            b = null;
            return;
        }
        const l = b;
        b = null;
        if (!(l != null && t.width === l.width && t.height === l.height && t.maxFps === l.maxFps)) {
            const c = l?.width ?? g;
            const d = l?.height ?? h;
            i.applyConstraints(r("WAWebVoipCameraTrackConstraints")(t)).then(()=>{
                S(t);
            }).catch((e)=>{
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraPrewarm] resolution switch failed: ",
                    ""
                ])), e);
            });
        }
    }
    function D() {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (p) {
                _ = true;
            }
            if (m == null) {
                b = null;
                f = null;
                return;
            }
            const e = m;
            const e_streamPromise = e.streamPromise;
            m = null;
            b = null;
            try {
                const n = yield e_streamPromise;
                if (n != null) {
                    n.getTracks().forEach((e)=>e.stop());
                }
            } catch (e) {}
            yield o("WAWebVoipConverterPrewarm").cleanupPrewarmedConverter();
        });
        return x.apply(this, arguments);
    }
    l.prewarmCamera = L;
    l.consumePrewarmedStream = k;
    l.scheduleResolutionSwitch = T;
    l.cleanupPrewarmedCamera = D;
}, 98);