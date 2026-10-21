__d("WAWebTrackBrowserTabHidden", [
    "WAWebAppTracker"
], function(t, n, r, o, a, i, l) {
    function e() {
        if (document.hidden) {
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.BrowserTabHidden);
        }
        const e = function() {
            if (document.hidden) {
                o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.BrowserTabHidden);
            } else {
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.BrowserTabHidden);
            }
        };
        const t = function() {
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.BrowserTabHidden);
        };
        document.addEventListener("visibilitychange", e);
        document.addEventListener("freeze", t);
        return function() {
            document.removeEventListener("visibilitychange", e);
            document.removeEventListener("freeze", t);
        };
    }
    l.trackBrowserTabHidden = e;
}, 98);