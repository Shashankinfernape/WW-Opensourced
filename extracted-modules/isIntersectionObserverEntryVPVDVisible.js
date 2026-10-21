__d("isIntersectionObserverEntryVPVDVisible", [
    "intersectionObserverEntryIsIntersecting"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 200;
    const s = {
        height: 0
    };
    function u(t, n = e) {
        const o = r("intersectionObserverEntryIsIntersecting")(t);
        if (o === false) {
            return false;
        }
        let t_boundingClientRect = t.boundingClientRect;
        let t_intersectionRect = t.intersectionRect;
        let t_rootBounds = t.rootBounds;
        t_boundingClientRect = t_boundingClientRect || s;
        t_intersectionRect = t_intersectionRect || s;
        t_rootBounds = t_rootBounds || s;
        return t_intersectionRect.height >= n || t_intersectionRect.height >= t_rootBounds.height / 2 || t_intersectionRect.height === t_boundingClientRect.height || t.intersectionRatio > 0.95;
    }
    l.default = u;
}, 98);