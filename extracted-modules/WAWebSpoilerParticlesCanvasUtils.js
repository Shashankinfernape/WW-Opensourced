__d("WAWebSpoilerParticlesCanvasUtils", [], function(t, n, r, o, a, i) {
    function e({ dismissing, isVisible, prefersReducedMotion, revealed }) {
        return isVisible && !prefersReducedMotion && (!revealed || dismissing);
    }
    function l({ canvas, sourceRects, textSpan }) {
        const a = canvas.getContext("2d");
        if (a == null) {
            return sourceRects;
        }
        const i = textSpan.textContent ?? "";
        const l = window.getComputedStyle(textSpan);
        a.font = `${l.fontStyle} ${l.fontWeight} ${l.fontSize} ${l.fontFamily}`;
        const s = a.measureText(i);
        const u = s.fontBoundingBoxAscent + s.fontBoundingBoxDescent;
        if (!Number.isFinite(u) || u <= 0) {
            return sourceRects;
        }
        return sourceRects.map((e)=>({
                left: e.left,
                top: e.top + (e.height - u) / 2,
                width: e.width,
                height: u
            }));
    }
    function s(e) {
        const n = u(e);
        const { lineRects, unionRect } = n;
        const a = e.textContent ?? "";
        return {
            lineRects,
            signature: `${unionRect.width}:${unionRect.height}:${lineRects.map((e)=>`${e.left},${e.top},${e.width},${e.height}`).join("|")}:${a}`
        };
    }
    function u(e) {
        let unionRect = e.getBoundingClientRect();
        let n = Array.from(e.getClientRects());
        const r = document.createRange();
        try {
            r.selectNodeContents(e);
            const o = Array.from(r.getClientRects());
            const a = r.getBoundingClientRect();
            if (o.length > 0) {
                n = o;
            }
            if (a.width > 0 || a.height > 0) {
                unionRect = a;
            }
        } catch (e) {}
        return {
            lineRects: n.length > 0 ? n : [
                unionRect
            ],
            unionRect
        };
    }
    function c(e) {
        for(let t = e.parentElement; t != null;){
            if (t instanceof HTMLElement && window.getComputedStyle(t).display !== "inline") {
                return [
                    t
                ];
            }
            t = t.parentElement;
        }
        return [];
    }
    function d(e) {
        const t = e[0];
        if (t == null) {
            return {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
        }
        let t_left = t.left;
        let t_top = t.top;
        let o = t.left + t.width;
        let a = t.top + t.height;
        for(let i = 1; i < e.length; i++){
            const l = e[i];
            if (l != null) {
                t_left = Math.min(t_left, l.left);
                t_top = Math.min(t_top, l.top);
                o = Math.max(o, l.left + l.width);
                a = Math.max(a, l.top + l.height);
            }
        }
        return {
            left: t_left,
            top: t_top,
            width: o - t_left,
            height: a - t_top
        };
    }
    function m(e, t) {
        if (t.length === 0) {
            return [
                {
                    x: 0,
                    y: 0,
                    width: e.width,
                    height: e.height
                }
            ];
        }
        const n = [];
        for (const o of t){
            if (o != null) {
                n.push({
                    x: o.left - e.left,
                    y: o.top - e.top,
                    width: o.width,
                    height: o.height
                });
            }
        }
        return n;
    }
    function p(e, t, n, r) {
        const o = t.left - n.x;
        const a = o + (r ? t.width - e.width : 0);
        const i = t.top - n.y;
        return {
            x: e.left - a,
            y: e.top - i
        };
    }
    function _({ x, y }) {
        if (x !== 0 || y !== 0) {
            return `translate(${x}px, ${y}px)`;
        }
        return "";
    }
    i.shouldPlayAnimation = e;
    i.getMeasuredLineRects = l;
    i.getTextLayout = s;
    i.getResizeTargets = c;
    i.getUnionRect = d;
    i.getSpoilerParticleFields = m;
    i.getSpoilerParticlesCanvasTranslation = p;
    i.getSpoilerParticlesCanvasTransform = _;
}, 66);