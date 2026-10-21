__d("ReactEventHelpers", [], function(t, n, r, o, a, i) {
    const e = typeof window !== "undefined" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : false;
    const l = typeof window !== "undefined" && window.PointerEvent != null;
    function s(e, t) {
        if (t == null) {
            return false;
        }
        if (typeof e.containsNode === "function") {
            return e.containsNode(t);
        }
        return e.contains(t);
    }
    i.isMac = e;
    i.hasPointerEvents = l;
    i.isRelatedTargetWithin = s;
}, 66);