__d("WAWebChatlistPillOverflow", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        hiddenCount: 0,
        showBadge: false
    };
    const l = 0.5;
    function s(e, t, n) {
        let r = 0;
        for(let o = 0; o < e.length; o++){
            const a = o > 0 ? n : 0;
            const i = e[o].getBoundingClientRect().width;
            if (r + a + i > t + l) {
                return o;
            }
            r += a + i;
        }
        return e.length;
    }
    function u(t, n, r) {
        const t_children = t.children;
        if (t_children.length === 0) {
            return e;
        }
        const width = t.getBoundingClientRect().width;
        if (width === 0) {
            return e;
        }
        const i = s(t_children, width, n);
        if (i >= t_children.length) {
            return e;
        }
        const l = width - r - n;
        const u = Math.max(1, s(t_children, l, n));
        const hiddenCount = t_children.length - u;
        if (hiddenCount > 0) {
            return {
                hiddenCount,
                showBadge: true
            };
        }
        return e;
    }
    function c(e, t, n) {
        const r = e.slice(e.length - n).map((e)=>e.name);
        const o = t.map((e)=>e.name);
        return [].concat(r, o).filter((e)=>e != null && e !== "").join(", ");
    }
    i.EMPTY_RESULT = e;
    i.measureOverflow = u;
    i.computeOverflowTooltip = c;
}, 66);