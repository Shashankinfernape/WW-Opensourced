__d("WAWebMoveResizeLogic", [
    "WAWebMoveResizeComponentUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n, r, a, i) {
        let l = 0;
        let s = 0;
        let u = 0;
        let c = 0;
        switch(e){
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP:
                s = t.y - r;
                if (i) {
                    l = 0;
                } else {
                    l = s * a;
                }
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM:
                s = r - t.y;
                if (i) {
                    l = 0;
                } else {
                    l = s * a;
                }
                c = -s;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT:
                l = n - t.x;
                if (i) {
                    s = 0;
                } else {
                    s = l / a;
                }
                c = 0;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT:
                l = t.x - n;
                if (i) {
                    s = 0;
                } else {
                    s = l / a;
                }
                c = 0;
                u = -l;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_RIGHT:
                l = Math.max(n - t.x, a * (t.y - r));
                s = l / a;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_LEFT:
                l = Math.max(t.x - n, a * (t.y - r));
                s = l / a;
                u = -l;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_RIGHT:
                l = Math.max(n - t.x, a * (r - t.y));
                s = l / a;
                c = -s;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_LEFT:
                l = Math.max(t.x - n, a * (r - t.y));
                s = l / a;
                c = -s;
                u = -l;
                break;
        }
        return {
            deltaWidth: l,
            deltaHeight: s,
            deltaLeft: u,
            deltaBottom: c
        };
    }
    function s(e, t, n, r, o) {
        const a = window.innerHeight - t - n - r;
        const adjustedBottom = e > a ? Math.max(n + o, a) : e;
        return {
            adjustedBottom,
            needsAdjustment: adjustedBottom !== e
        };
    }
    function u(e, t, n) {
        const r = window.innerWidth - t - n;
        let adjustedLeft;
        if (e > r) {
            adjustedLeft = Math.max(n, r);
        } else if (e < n) {
            adjustedLeft = n;
        } else {
            adjustedLeft = e;
        }
        return {
            adjustedLeft,
            needsAdjustment: adjustedLeft !== e
        };
    }
    function c({ deltaBottom, deltaHeight, deltaLeft, deltaWidth, extraBottomContentHeight, extraTopContentHeight, margin, minHeight, minWidth, resizeStartHeight, resizeStartPiPStyle }) {
        const m = Math.max(minWidth, Math.min(window.innerWidth - margin.x * 2, resizeStartPiPStyle.width + deltaWidth));
        const p = Math.max(minHeight, Math.min(window.innerHeight - margin.y * 2 - extraTopContentHeight - extraBottomContentHeight, resizeStartHeight + deltaHeight));
        let _;
        if (deltaLeft !== 0) {
            const f = m - resizeStartPiPStyle.width;
            _ = Math.max(margin.x, Math.min(window.innerWidth - m - margin.x, resizeStartPiPStyle.left - f));
        } else {
            _ = Math.max(margin.x, Math.min(window.innerWidth - m - margin.x, resizeStartPiPStyle.left));
        }
        let g;
        if (deltaBottom !== 0) {
            const h = p - resizeStartHeight;
            g = Math.max(margin.y + extraBottomContentHeight, Math.min(window.innerHeight - p - margin.y - extraTopContentHeight, resizeStartPiPStyle.bottom - h));
        } else {
            g = Math.max(margin.y + extraBottomContentHeight, Math.min(window.innerHeight - p - margin.y - extraTopContentHeight, resizeStartPiPStyle.bottom));
        }
        return {
            resizedWidth: m,
            resizedHeight: p,
            resizedLeft: _,
            resizedBottom: g
        };
    }
    function d({ aspectRatio, minWidth, resizeDirection, resizeStartPiPStyleWidth }) {
        const i = minWidth - resizeStartPiPStyleWidth;
        let l = 0;
        let s = 0;
        let u = 0;
        switch(resizeDirection){
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP:
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_RIGHT:
                u = 0;
                s = 0;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_LEFT:
                s = -i;
                u = 0;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT:
                l = i / aspectRatio;
                u = 0;
                s = 0;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT:
                l = i / aspectRatio;
                u = 0;
                s = -i;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM:
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_RIGHT:
                l = i / aspectRatio;
                u = -l;
                s = 0;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_LEFT:
                l = i / aspectRatio;
                u = -l;
                s = -i;
                break;
        }
        return {
            deltaWidth: i,
            deltaHeight: l,
            deltaLeft: s,
            deltaBottom: u
        };
    }
    function m({ aspectRatio, extraBottomContentHeight, extraTopContentHeight, margin, resizeDirection, resizeStartPiPStyle }) {
        const s = resizeStartPiPStyle.width / aspectRatio;
        let u = 0;
        let c = 0;
        let d = 0;
        let m = 0;
        switch(resizeDirection){
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP:
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_RIGHT:
                u = Math.min(window.innerWidth - margin.x - extraTopContentHeight - resizeStartPiPStyle.width - resizeStartPiPStyle.left, aspectRatio * (window.innerHeight - margin.y - extraTopContentHeight - s - resizeStartPiPStyle.bottom)) - 0.1;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_LEFT:
                u = Math.min(resizeStartPiPStyle.left - margin.x, aspectRatio * (window.innerHeight - margin.y - extraTopContentHeight - s - resizeStartPiPStyle.bottom)) - 0.1;
                c = u / aspectRatio;
                d = -u;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT:
                u = Math.min(window.innerWidth - margin.x - resizeStartPiPStyle.width - resizeStartPiPStyle.left, aspectRatio * (window.innerHeight - margin.y - extraTopContentHeight - s - resizeStartPiPStyle.bottom)) - 0.1;
                c = u / aspectRatio;
                m = 0;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT:
                u = Math.min(resizeStartPiPStyle.left - margin.x, aspectRatio * (window.innerHeight - margin.y - extraTopContentHeight - s - resizeStartPiPStyle.bottom)) - 0.1;
                c = u / aspectRatio;
                m = 0;
                d = -u;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM:
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_RIGHT:
                u = Math.min(window.innerWidth - margin.x - resizeStartPiPStyle.width - resizeStartPiPStyle.left, aspectRatio * (resizeStartPiPStyle.bottom - margin.y - extraBottomContentHeight)) - 0.1;
                c = u / aspectRatio;
                m = -c;
                break;
            case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_LEFT:
                u = Math.min(resizeStartPiPStyle.left - margin.x, aspectRatio * (resizeStartPiPStyle.bottom - margin.y - extraBottomContentHeight)) - 0.1;
                c = u / aspectRatio;
                m = -c;
                d = -u;
                break;
        }
        return {
            deltaWidth: u,
            deltaHeight: c,
            deltaLeft: d,
            deltaBottom: m
        };
    }
    l.calculateResizeDeltas = e;
    l.clampBottomToBounds = s;
    l.clampLeftToBounds = u;
    l.calculateIndependentResize = c;
    l.adjustDeltasForMinWidth = d;
    l.adjustDeltasForMaxBounds = m;
}, 98);