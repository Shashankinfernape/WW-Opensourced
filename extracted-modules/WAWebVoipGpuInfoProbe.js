__d("WAWebVoipGpuInfoProbe", [], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (typeof e === "string") {
            return e.trim();
        }
        return "";
    }
    function s() {
        const globalThis_OffscreenCanvas = globalThis.OffscreenCanvas;
        if (globalThis_OffscreenCanvas == null) {
            return null;
        }
        let n = null;
        try {
            const r = new globalThis_OffscreenCanvas(1, 1);
            n = r.getContext("webgl");
            if (n == null) {
                return null;
            }
            const o = n.getExtension("WEBGL_debug_renderer_info");
            if (o == null) {
                return null;
            }
            const gpuName = e(n.getParameter(o.UNMASKED_RENDERER_WEBGL));
            const gpuVendorRaw = e(n.getParameter(o.UNMASKED_VENDOR_WEBGL));
            if (gpuName === "" && gpuVendorRaw === "") {
                return null;
            }
            return {
                gpuName,
                gpuVendorRaw
            };
        } catch (e) {
            return null;
        } finally{
            const s = n?.getExtension("WEBGL_lose_context");
            s?.loseContext();
        }
    }
    l.detectGpuInfo = s;
}, 98);