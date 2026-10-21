__d("WAWebPerformanceObserver", [
    "WAWebLongAnimationFrameObserver",
    "WAWebLongTaskObserver",
    "WAWebNoop"
], function(t, n, r, o, a, i, l) {
    function e({ longAnimationFrame, longtask }) {
        const entryTypes = [];
        let i = null;
        let l = null;
        if (longtask.enabled) {
            i = new (o("WAWebLongTaskObserver")).WAWebLongTaskObserver;
            if (i.isSupported()) {
                entryTypes.push("longtask");
            }
        }
        if (longAnimationFrame.enabled) {
            l = new (o("WAWebLongAnimationFrameObserver")).WAWebLongAnimationFrameObserver;
            if (l.isSupported()) {
                entryTypes.push("long-animation-frame");
            }
        }
        if (entryTypes.length === 0) {
            return r("WAWebNoop");
        }
        const s = new window.PerformanceObserver(function(e) {
            if (i && entryTypes.includes("longtask")) {
                i.handle(e.getEntriesByType("longtask"));
            }
            if (l && entryTypes.includes("long-animation-frame")) {
                const t = e.getEntriesByType("long-animation-frame");
                l.handle(t);
            }
        });
        s.observe({
            entryTypes
        });
        if (i) {
            i.documentVisibilityObserver.observe();
        }
        return function() {
            s.disconnect();
        };
    }
    l.initPerformanceObserver = e;
}, 98);