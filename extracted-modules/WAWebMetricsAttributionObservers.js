__d("WAWebMetricsAttributionObservers", [
    "WAWebAppTracker",
    "WAWebCallCollection",
    "WAWebNetworkStatus",
    "WAWebVoipPhaseTracker",
    "cr:13156",
    "cr:13920"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const s = n("cr:13156") ?? {};
    const u = s.WAWebScalingControlManager;
    function c() {
        let e = o("WAWebAppTracker").AppTrackerType.VoipAudio;
        const t = function() {
            const t = r("WAWebCallCollection").activeCall;
            if (t != null) {
                e = t.isVideo === true ? o("WAWebAppTracker").AppTrackerType.VoipVideo : o("WAWebAppTracker").AppTrackerType.VoipAudio;
                o("WAWebAppTracker").AppTracker.start(e);
            } else {
                o("WAWebAppTracker").AppTracker.stop(e);
            }
        };
        r("WAWebCallCollection").on("change:activeCall", t);
    }
    function d() {
        r("WAWebNetworkStatus").on("change:online", function() {
            if (r("WAWebNetworkStatus").online === false) {
                o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.Disconnected);
            } else {
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.Disconnected);
            }
        });
    }
    function m() {
        if (!(u == null || n("cr:13920") == null)) {
            const e = function(t) {
                if (t === 1) {
                    o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.LayoutZoom);
                } else {
                    o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.LayoutZoom);
                }
            };
            u.getZoomLevel().then((t)=>e(t ?? 1));
            n("cr:13920").on("zoomUpdate", function(t) {
                e(t ?? 1);
            });
        }
    }
    function p() {
        c();
        o("WAWebVoipPhaseTracker").startVoipPhaseObserver();
        d();
        m();
    }
    l.initializeMetricsAttributionObservers = p;
}, 98);