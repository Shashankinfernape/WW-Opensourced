__d("WAWebVoipVideoCaptureSourceRect", [
    "WAWebVoipVideoFrameCtor"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 3;
    const s = 5;
    const u = 60;
    function c(e) {
        return e - e % 2;
    }
    function d(e, t, n) {
        if (e <= 0 || t <= 0 || n <= 0) {
            return 0;
        }
        return c(Math.floor(e * n / t));
    }
    function m(e, codedWidth, codedHeight) {
        const r = Math.min(codedWidth, Math.max(0, e.x));
        const o = Math.min(codedHeight, Math.max(0, e.y));
        const a = Math.max(r, Math.min(codedWidth, e.x + e.width));
        const i = Math.max(o, Math.min(codedHeight, e.y + e.height));
        return {
            x: r,
            y: o,
            width: c(Math.max(0, a - r)),
            height: c(Math.max(0, i - o))
        };
    }
    function p({ codedHeight, codedWidth, height, visibleHeight, visibleWidth, width, x, y }) {
        return width > 0 && height > 0 && visibleWidth > 0 && visibleHeight > 0 && codedWidth > 0 && codedHeight > 0 && (visibleWidth !== codedWidth || visibleHeight !== codedHeight || x !== 0 || y !== 0);
    }
    function _(e) {
        const t = r("WAWebVoipVideoFrameCtor")();
        if (t == null) {
            return null;
        }
        let n = null;
        try {
            n = new t(e, {
                timestamp: 0
            });
            const o = n.visibleRect;
            const a = c(n.displayWidth);
            const i = c(n.displayHeight);
            const codedWidth = c(n.codedWidth);
            const codedHeight = c(n.codedHeight);
            const u = {
                x: o != null ? Math.floor(o.x) : 0,
                y: o != null ? Math.floor(o.y) : 0,
                width: o != null ? Math.max(0, Math.floor(o.width)) : Math.max(0, Math.floor(n.displayWidth)),
                height: o != null ? Math.max(0, Math.floor(o.height)) : Math.max(0, Math.floor(n.displayHeight))
            };
            const _ = m(u, codedWidth, codedHeight);
            const f = {
                x: _.x,
                y: _.y,
                width: d(a, u.width, _.width),
                height: d(i, u.height, _.height),
                visibleWidth: _.width,
                visibleHeight: _.height,
                codedWidth,
                codedHeight
            };
            if (p(f)) {
                return f;
            }
            return null;
        } catch (e) {
            return null;
        } finally{
            if (n != null) {
                try {
                    n.close();
                } catch (e) {}
            }
        }
    }
    function f(t) {
        return t <= e || t % s === 0;
    }
    function g(e, t) {
        if (t >= u) {
            return {
                detectionAttempts: t,
                sourceContentRect: null
            };
        }
        const n = t + 1;
        if (f(n)) {
            return {
                detectionAttempts: n,
                sourceContentRect: _(e)
            };
        }
        return {
            detectionAttempts: n,
            sourceContentRect: null
        };
    }
    function h(e, t) {
        const n = Math.floor(e.videoWidth);
        const r = Math.floor(e.videoHeight);
        if (n <= 0 || r <= 0 || t.codedWidth <= 0 || t.codedHeight <= 0) {
            return null;
        }
        const o = n / t.codedWidth;
        const a = r / t.codedHeight;
        const i = Math.max(0, Math.floor(t.x * o));
        const l = Math.max(0, Math.floor(t.y * a));
        const s = Math.max(0, n - i);
        const u = Math.max(0, r - l);
        const c = Math.min(s, Math.ceil(t.visibleWidth * o));
        const d = Math.min(u, Math.ceil(t.visibleHeight * a));
        if (c <= 0 || d <= 0) {
            return null;
        }
        return {
            x: i,
            y: l,
            width: c,
            height: d
        };
    }
    function y(e, resizeWidth, resizeHeight) {
        if (e.width === resizeWidth && e.height === resizeHeight) {
            return null;
        }
        return {
            resizeWidth,
            resizeHeight
        };
    }
    l.MAX_SOURCE_CONTENT_RECT_DETECTION_ATTEMPTS = u;
    l.closestEven = c;
    l.getVideoSourceContentRect = _;
    l.probeVideoSourceContentRect = g;
    l.getVideoElementSourceCropRect = h;
    l.getImageBitmapResizeOptionsForSourceCropRect = y;
}, 98);