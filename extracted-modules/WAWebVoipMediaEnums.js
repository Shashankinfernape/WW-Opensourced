__d("WAWebVoipMediaEnums", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    let e;
    const l = (e = n("$InternalEnum"))({
        Unknown: 0,
        Normal: 1,
        Rotate90: 2,
        Rotate180: 3,
        Rotate270: 4
    });
    const s = e({
        Unknown: "unknown",
        VideoElementWebCodecs: "video-element-webcodecs",
        WorkerRaw: "worker-raw",
        WorkerWebCodecs: "worker-webcodecs"
    });
    const u = e({
        DeviceFallback: "device-fallback",
        VideoFrame: "video-frame"
    });
    const c = 2000;
    const d = 30000;
    const m = e({
        NV12: 0,
        I420: 1,
        RGB24: 2,
        RGBA: 3,
        H264: 100,
        UNKNOWN: -1
    });
    function p(e) {
        if (e === m.NV12) {
            return "NV12";
        }
        if (e === m.I420) {
            return "I420";
        }
        if (e === m.RGBA) {
            return "RGBA";
        }
        return null;
    }
    function _({ trackHeight, trackWidth, videoElHeight, videoElWidth }) {
        const l = globalThis.screen?.orientation;
        const s = l != null ? (l.angle % 360 + 360) % 360 : 0;
        const u = l?.type ?? "";
        if (s === 0 && u.startsWith("landscape")) {
            return 0;
        }
        const c = trackWidth > trackHeight;
        const d = videoElWidth > videoElHeight;
        const m = s === 90 || s === 270;
        const p = m ? !d : d;
        if (c !== p) {
            return 1;
        }
        return 0;
    }
    function f(e, t = false) {
        const r = globalThis.screen?.orientation;
        return g(e, t, r?.angle);
    }
    function g(e, t, n) {
        const o = n != null ? (n % 360 + 360) % 360 : 0;
        const a = Math.floor(o / 90) % 4;
        const i = t ? (e - a + 4) % 4 : (e + a) % 4;
        if (i === 0) {
            return l.Normal;
        }
        return l.cast(i + 1) ?? l.Normal;
    }
    function h(frameRotation, t) {
        const r = frameRotation === 90 ? l.Rotate90 : frameRotation === 180 ? l.Rotate180 : frameRotation === 270 ? l.Rotate270 : null;
        if (r != null) {
            return {
                frameRotation,
                orientation: r,
                source: u.VideoFrame
            };
        }
        return {
            frameRotation: typeof frameRotation === "number" ? frameRotation : null,
            orientation: l.cast(t) ?? l.Normal,
            source: u.DeviceFallback
        };
    }
    function y({ elapsedMsSinceLastLog, hasLoggedSnapshot, orientationStateChanged }) {
        if (!hasLoggedSnapshot) {
            return true;
        }
        const o = orientationStateChanged ? c : d;
        return elapsedMsSinceLastLog >= o;
    }
    function C(e) {
        switch(e){
            case "NV12":
                return m.NV12;
            case "I420":
                return m.I420;
            case "RGBA":
                return m.RGBA;
            default:
                return m.UNKNOWN;
        }
    }
    i.Orientation = l;
    i.VideoCapturePath = s;
    i.VideoFrameOrientationSource = u;
    i.WAWebVoipVideoFormat = m;
    i.videoFrameFormatFromFormatEnum = p;
    i.detectSensorOffset = _;
    i.computeVideoOrientation = f;
    i.computeVideoOrientationForAngle = g;
    i.resolveVideoFrameOrientation = h;
    i.shouldLogOrientationDiagnostics = y;
    i.formatEnumFromVideoFrameFormat = C;
}, 66);