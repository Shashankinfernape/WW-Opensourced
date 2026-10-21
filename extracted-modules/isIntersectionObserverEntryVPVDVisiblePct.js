__d("isIntersectionObserverEntryVPVDVisiblePct", [
    "intersectionObserverEntryIsIntersecting"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 0.5;
    const s = {
        height: 0
    };
    function u(t, n = e) {
        const o = r("intersectionObserverEntryIsIntersecting")(t);
        if (o === false) {
            return false;
        }
        let t_intersectionRect = t.intersectionRect;
        let t_rootBounds = t.rootBounds;
        const t_boundingClientRect = t.boundingClientRect;
        if (t_boundingClientRect == null || t_boundingClientRect.height === 0) {
            return false;
        }
        t_intersectionRect = t_intersectionRect || s;
        t_rootBounds = t_rootBounds || s;
        return t_intersectionRect.height / t_boundingClientRect.height >= n || t_intersectionRect.height >= t_rootBounds.height / 2 || t.intersectionRatio > 0.95;
    }
    l.default = u;
}, 98);