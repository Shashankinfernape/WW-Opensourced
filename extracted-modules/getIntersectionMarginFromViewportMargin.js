__d("getIntersectionMarginFromViewportMargin", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Map;
    function l(t) {
        const n = `bottom:${t.bottom}|top:${t.top}|left:${t.left}|right:${t.right}`;
        let r = e.get(n);
        if (r == null) {
            r = {
                bottom: t.bottom * -1,
                left: t.left * -1,
                right: t.right * -1,
                top: t.top * -1
            };
            e.set(n, r);
        }
        return r;
    }
    i.default = l;
}, 66);