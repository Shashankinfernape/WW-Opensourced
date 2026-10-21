__d("BaseTextV2Utils", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const e_fontMetrics = e.fontMetrics;
        const n = e_fontMetrics.capHeight / e_fontMetrics.unitsPerEm;
        const e_fontSize = e.fontSize;
        const o = e_fontSize * n;
        const lineHeight = o + e.lineGap;
        return {
            fontMetrics: e_fontMetrics,
            fontSize: e_fontSize,
            lineHeight
        };
    }
    const l = (t)=>parseFloat(t.toFixed(4));
    function s(t) {
        const n = e(t);
        const { fontMetrics, fontSize, lineHeight } = n;
        const i = Math.abs(fontMetrics.descent);
        const s = fontMetrics.capHeight / fontMetrics.unitsPerEm;
        const u = i / fontMetrics.unitsPerEm;
        const c = fontMetrics.ascent / fontMetrics.unitsPerEm;
        const d = fontMetrics.lineGap / fontMetrics.unitsPerEm;
        const m = fontMetrics.ascent + fontMetrics.lineGap + i;
        const p = m / fontMetrics.unitsPerEm;
        const _ = p * fontSize;
        const f = (t)=>{
            if (lineHeight) {
                const e = (_ - lineHeight) / 2;
                return t - e / fontSize;
            }
            return t;
        };
        const g = f(c - s + d / 2) * -1;
        const h = f(u + d / 2) * -1;
        return {
            baselineTrim: `${l(h)}em`,
            capHeightTrim: `${l(g)}em`,
            fontSize: `${l(fontSize)}px`,
            lineHeight: lineHeight ? `${l(lineHeight)}px` : "normal"
        };
    }
    i.precomputeValues = s;
}, 66);