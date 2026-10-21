__d("WAWebMoveResizeComponentUtils", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = n("$InternalEnum").Mirrored([
        "TOP",
        "BOTTOM",
        "LEFT",
        "RIGHT",
        "TOP_RIGHT",
        "TOP_LEFT",
        "BOTTOM_RIGHT",
        "BOTTOM_LEFT"
    ]);
    const l = n("$InternalEnum").Mirrored([
        "IDLE",
        "RESIZE",
        "MOVE"
    ]);
    const s = [
        e.LEFT,
        e.RIGHT
    ];
    const u = [
        e.TOP,
        e.TOP_LEFT,
        e.TOP_RIGHT,
        e.LEFT,
        e.RIGHT
    ];
    const c = [
        e.BOTTOM,
        e.BOTTOM_LEFT,
        e.BOTTOM_RIGHT,
        e.LEFT,
        e.RIGHT
    ];
    const d = 3;
    function m(e, t) {
        return !(e.right <= t.left || e.left >= t.right || e.bottom <= t.top || e.top >= t.bottom);
    }
    function p(e, t) {
        return {
            toLeftDistance: e.right - t.left,
            toBottomDistance: t.bottom - e.top,
            toRightDistance: t.right - e.left,
            toTopDistance: e.bottom - t.top
        };
    }
    function _({ aspectRatio, bottom, deltaBottom, deltaLeft, left, margin, width }) {
        const { innerWidth, innerHeight } = window;
        const c = left + deltaLeft;
        const d = bottom + deltaBottom;
        const m = width / aspectRatio;
        const margin_x = margin.x;
        const _ = innerWidth - width - margin.x;
        const margin_y = margin.y;
        const g = innerHeight - m - margin.y;
        return margin_y > d || d > g || margin_x > c || c > _;
    }
    function f({ aspectRatio, bottom, dists, left, margin, width }) {
        let distance;
        let u;
        if (!_({
            aspectRatio,
            bottom,
            deltaBottom: 0,
            deltaLeft: -dists.toLeftDistance,
            left,
            margin,
            width
        })) {
            if (distance === undefined || dists.toLeftDistance < distance) {
                distance = dists.toLeftDistance;
                u = e.LEFT;
            }
        }
        if (!_({
            aspectRatio,
            bottom,
            deltaBottom: -dists.toBottomDistance,
            deltaLeft: 0,
            left,
            margin,
            width
        })) {
            if (distance === undefined || dists.toBottomDistance < distance) {
                distance = dists.toBottomDistance;
                u = e.BOTTOM;
            }
        }
        if (!_({
            aspectRatio,
            bottom,
            deltaBottom: 0,
            deltaLeft: dists.toRightDistance,
            left,
            margin,
            width
        })) {
            if (distance === undefined || dists.toRightDistance < distance) {
                distance = dists.toRightDistance;
                u = e.RIGHT;
            }
        }
        if (!_({
            aspectRatio,
            bottom,
            deltaBottom: dists.toTopDistance,
            deltaLeft: 0,
            left,
            margin,
            width
        })) {
            if (distance === undefined || dists.toTopDistance < distance) {
                distance = dists.toTopDistance;
                u = e.TOP;
            }
        }
        return {
            direction: u,
            distance
        };
    }
    i.ResizeDirections = e;
    i.UserActions = l;
    i.RISIZE_SIDE_DIRECTIONS = s;
    i.RISIZE_TOP_DIRECTIONS = u;
    i.RISIZE_BOTTOM_DIRECTIONS = c;
    i.BORDER_TOLERANCE = d;
    i.doOverlap = m;
    i.escapeDistance = p;
    i.findEscapeDirection = f;
}, 66);