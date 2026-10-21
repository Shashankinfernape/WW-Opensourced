__d("WAWebVoipVideoCaptureAndRendering", [
    "WALogger",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebVoipDualStreamScreenShareState",
    "WAWebVoipOperationQueue",
    "WAWebVoipPerfMeasurement",
    "WAWebVoipVideoCameraCapture",
    "WAWebVoipVideoDesktopCapture",
    "WAWebVoipVideoRenderSource",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVirtualVideoCaptureDriver",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = "startVideoCapture";
    const c = 2000;
    const d = "classify_timeout";
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!t.startsWith(u)) {
                return false;
            }
            try {
                const n = yield o("WAPromiseDelays").withTimeout(o("WAWebBackendApi").frontendSendAndReceive("getVoipCameraPermissionState", undefined), c, function() {
                    return d;
                });
                return n === "prompt";
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VideoCapture:Queue] camera permission classify failed: ",
                    ""
                ])), error).sendLogs("voip-camera-perm-classify-failed");
                return false;
            }
        });
        return p.apply(this, arguments);
    }
    const _ = new (o("WAWebVoipOperationQueue")).WAWebVoipOperationQueue("VideoCapture", undefined, m);
    let f = null;
    function g() {
        return o("WAWebABProps").getABPropConfigValue("enable_web_voip_virtual_video_capture_driver") === true;
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebVoipPerfMeasurement").startMeasurement(o("WAWebVoipPerfMeasurement").PerfMeasurement.FIRST_CAMERA_FRAME);
            _.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (g()) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [VirtualVideoCapture] creating driver"
                    ])));
                    if (f != null) {
                        f.stop();
                    }
                    f = new (o("WAWebVoipVirtualVideoCaptureDriver")).WAWebVoipVirtualVideoCaptureDriver;
                    const t = f.start();
                    yield o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.startWithStream(t, 1280, 720, 30);
                    return;
                }
                const { camera_id, height, isAVUpgrade } = e;
                const isAVUpgrade_1 = isAVUpgrade === undefined ? false : isAVUpgrade;
                const { max_fps, width } = e;
                yield o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.startCameraCapture({
                    camera_id_requested: camera_id,
                    height,
                    isAVUpgrade: isAVUpgrade_1,
                    isStackRequest: true,
                    max_fps,
                    width
                });
            }), "startVideoCapture");
        });
        return y.apply(this, arguments);
    }
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            _.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = f;
                if (e != null) {
                    e.stop();
                    f = null;
                }
                yield o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.stopCapture();
            }), "stopVideoCapture");
        });
        return b.apply(this, arguments);
    }
    function v(userJid, isScreenShare) {
        const n = isScreenShare && (userJid !== o("WAWebVoipVideoRenderSource").selfPreviewJid || o("WAWebVoipDualStreamScreenShareState").isSelfDualStreamScreenShareActive());
        return o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.fromWire(userJid, n);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ format, frameBuffer, height, isKeyFrame, isScreenShare = false, orientation, timestamp, userJid, width }) {
            const m = v(userJid, isScreenShare);
            if (m != null) {
                o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.onVideoFrameWasmToJs(m, frameBuffer, width, height, orientation, format, timestamp, isKeyFrame);
            }
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            _.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const { height, maxFps, width } = e;
                yield o("WAWebVoipVideoDesktopCapture").WAWebVoipVideoDesktopCapture.startDesktopCapture({
                    width,
                    height,
                    maxFps
                });
            }), "startDesktopCapture");
        });
        return E.apply(this, arguments);
    }
    function k() {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            _.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebVoipVideoDesktopCapture").WAWebVoipVideoDesktopCapture.stopCapture();
            }), "stopDesktopCapture");
        });
        return I.apply(this, arguments);
    }
    function T() {
        o("WAWebVoipVideoDesktopCapture").WAWebVoipVideoDesktopCapture.releasePreflightDesktopStream();
        o("WAWebVoipVideoDesktopCapture").WAWebVoipVideoDesktopCapture.releaseDesktopStream();
    }
    l.startVideoCaptureJS = h;
    l.stopVideoCaptureJS = C;
    l.onVideoFrameWasmToJs = S;
    l.startDesktopCaptureJS = L;
    l.stopDesktopCaptureJS = k;
    l.releaseDesktopStreamJS = T;
}, 98);