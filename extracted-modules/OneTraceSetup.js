__d("OneTraceSetup", [
    "CPUPressure",
    "INPLogger",
    "ImagePerfLoggerV2",
    "LongAnimationFrameObserver",
    "LongtaskObserver",
    "ResponsivenessTracker",
    "ScrollPerfTracker",
    "TypingPerfTracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    function s() {
        return e;
    }
    function u(t) {
        if (e == null) {
            e = Object.freeze(t);
            if (e.Longtask.enableTracking || e.Scroll.enableTracking || e.Responsiveness.enableTracking) {
                o("LongtaskObserver").init();
            }
            if (e.INP.enableTracking) {
                o("INPLogger").init(e);
            }
            if (e.LoAF.enableTracking) {
                o("LongAnimationFrameObserver").init();
            }
            if (e.Scroll.enableTracking) {
                o("ScrollPerfTracker").init(e);
            }
            if (e.Responsiveness.enableTracking) {
                o("ResponsivenessTracker").init(e);
            }
            if (e.Typing.enableTracking) {
                o("TypingPerfTracker").init();
            }
            if (e.Image.enableTracking) {
                o("ImagePerfLoggerV2").init();
            }
            if (e.enableCPUPressureTracking === true) {
                o("CPUPressure").init();
            }
        }
    }
    l.getConfig = s;
    l.setup = u;
}, 98);