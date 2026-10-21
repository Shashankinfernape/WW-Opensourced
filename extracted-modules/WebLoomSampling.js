__d("WebLoomSampling", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
        const a = t === "QPL" ? e.samplingConfig.adaptive_config.qpl : e.samplingConfig.adaptive_config.interactions;
        const i = r != null ? `${n}.${r}` : `${n}`;
        const l = a.events[i];
        if (l != null) {
            return l;
        }
        const s = a.modules[n >> 16 & 65535] ?? 0;
        return s;
    }
    i.getSampleRate = e;
}, 66);