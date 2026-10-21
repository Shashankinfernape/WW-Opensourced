__d("WAWebVoipDeviceClassUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        LOW: "low",
        MOD_LOW: "mod_low",
        MID: "mid",
        MOD_HIGH: "mod_high",
        HIGH: "high"
    };
    function l(t, n) {
        if (t == null || n == null) {
            return null;
        }
        if (t <= 1 || t === 2 && n < 4) {
            return e.LOW;
        }
        if (t < 3 && n >= 4 || t === 3 && n <= 7) {
            return e.MOD_LOW;
        }
        if (t === 3 && n > 7 || t < 6 && n <= 7) {
            return e.MID;
        }
        if (t <= 8 && n <= 7 || t < 6 && n === 8) {
            return e.MOD_HIGH;
        }
        return e.HIGH;
    }
    i.DEVICE_CLASS = e;
    i.computeDeviceClass = l;
}, 66);