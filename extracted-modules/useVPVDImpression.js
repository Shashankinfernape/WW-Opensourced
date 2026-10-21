__d("useVPVDImpression", [
    "CometVPVDUserActivityMonitor",
    "cr:921407",
    "isIntersectionObserverEntryVPVDVisible",
    "isIntersectionObserverEntryVPVDVisiblePct",
    "react",
    "react-compiler-runtime",
    "useVisibilityObserver",
    "vpvdConstants"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useCallback = (e || (e = o("react"))).useCallback;
    function u(e) {
        const t = o("react-compiler-runtime").c(21);
        const { activityMonitorOverride, isLite, minVisiblePct, minVisiblePx, minVisibleTimeMs, onIntersection, onVPVDEnd, onVPVDStart } = e;
        const p = minVisiblePx === undefined ? o("vpvdConstants").DEFAULT_MIN_VISIBLE_PX : minVisiblePx;
        const _ = minVisibleTimeMs === undefined ? o("vpvdConstants").DEFAULT_MIN_VISIBLE_TIME_MS : minVisibleTimeMs;
        const f = n("cr:921407")();
        const g = f[0];
        const onVisibilityDurationUpdated = f[1];
        let y;
        if (t[0] !== _ || t[1] !== onVPVDEnd) {
            y = function(t) {
                if (!(t.visibleDuration < _)) {
                    onVPVDEnd(t);
                }
            };
            t[0] = _;
            t[1] = onVPVDEnd;
            t[2] = y;
        } else {
            y = t[2];
        }
        const onHidden = y;
        const b = isLite === true ? 1 : p;
        let v;
        if (t[3] !== b || t[4] !== minVisiblePct) {
            v = function(t) {
                if (minVisiblePct != null) {
                    return r("isIntersectionObserverEntryVPVDVisiblePct")(t, minVisiblePct);
                }
                return r("isIntersectionObserverEntryVPVDVisible")(t, b);
            };
            t[3] = b;
            t[4] = minVisiblePct;
            t[5] = v;
        } else {
            v = t[5];
        }
        const isEntryInViewport = v;
        let R;
        if (t[6] !== isLite) {
            R = isLite === true ? null : {
                thresholdOverride: "EXPENSIVE"
            };
            t[6] = isLite;
            t[7] = R;
        } else {
            R = t[7];
        }
        const L = R;
        const activityMonitorOverride_1 = activityMonitorOverride ?? r("CometVPVDUserActivityMonitor");
        let k;
        if (t[8] !== isEntryInViewport || t[9] !== activityMonitorOverride_1 || t[10] !== L) {
            k = babelHelpers.extends({
                activityMonitorOverride: activityMonitorOverride_1,
                isEntryInViewport
            }, L);
            t[8] = isEntryInViewport;
            t[9] = activityMonitorOverride_1;
            t[10] = L;
            t[11] = k;
        } else {
            k = t[11];
        }
        const I = k;
        let T;
        if (t[12] !== onHidden || t[13] !== onIntersection || t[14] !== onVPVDStart || t[15] !== I || t[16] !== onVisibilityDurationUpdated) {
            T = {
                onHidden,
                onIntersection,
                onVisibilityDurationUpdated,
                onVisible: onVPVDStart,
                options: I
            };
            t[12] = onHidden;
            t[13] = onIntersection;
            t[14] = onVPVDStart;
            t[15] = I;
            t[16] = onVisibilityDurationUpdated;
            t[17] = T;
        } else {
            T = t[17];
        }
        const D = r("useVisibilityObserver")(T);
        let x;
        if (t[18] !== D || t[19] !== g) {
            x = [
                D,
                g
            ];
            t[18] = D;
            t[19] = g;
            t[20] = x;
        } else {
            x = t[20];
        }
        return x;
    }
    l.default = u;
}, 98);