__d("WAWebVoipResolutionCap", [
    "WAWebABProps",
    "WAWebBrowserApi",
    "WAWebVoipCaptureCap",
    "WAWebVoipDeviceClassUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 6;
    function s() {
        const i = o("WAWebBrowserApi").getNumCpu();
        const l = o("WAWebBrowserApi").getMemClass();
        const s = l != null ? Math.round(l / 1000) : null;
        const u = o("WAWebVoipDeviceClassUtils").computeDeviceClass(i, s);
        const c = o("WAWebABProps").getABPropConfigValue("web_voip_video_low_cap_width") ?? 480;
        const d = o("WAWebABProps").getABPropConfigValue("web_voip_video_low_cap_height") ?? 270;
        const m = o("WAWebABProps").getABPropConfigValue("web_voip_video_mid_cap_width") ?? 640;
        const p = o("WAWebABProps").getABPropConfigValue("web_voip_video_mid_cap_height") ?? 360;
        if (u === o("WAWebVoipDeviceClassUtils").DEVICE_CLASS.LOW) {
            return {
                width: c,
                height: d
            };
        }
        const _ = u != null ? u === o("WAWebVoipDeviceClassUtils").DEVICE_CLASS.MOD_LOW || u === o("WAWebVoipDeviceClassUtils").DEVICE_CLASS.MID : i != null && i > 0 && i < e;
        if (_) {
            return {
                width: m,
                height: p
            };
        }
        return null;
    }
    function u(e) {
        return o("WAWebVoipCaptureCap").applyCaptureCap(e, s());
    }
    l.getLowEndCaptureCap = s;
    l.applyLowEndResolutionCap = u;
}, 98);