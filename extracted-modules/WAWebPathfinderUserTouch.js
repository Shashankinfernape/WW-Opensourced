__d("WAWebPathfinderUserTouch", [
    "WAWebPathfinderLogger",
    "WAWebPathfinderPIIFilter",
    "WAWebPathfinderScreenName"
], function(t, n, r, o, a, i, l) {
    const e = 10;
    const s = 50;
    const u = 300;
    const c = 2000;
    const d = 2000;
    let m = null;
    let p = null;
    let _ = null;
    let f = null;
    let g = null;
    let h = null;
    let y = 0;
    function C() {
        const e = _;
        _ = null;
        return e;
    }
    function b() {
        return y;
    }
    function v(e, t) {
        const n = p;
        if (n != null && n.eventType === e && n.trackingId === t) {
            return n.debounceCount + 1;
        }
        return 0;
    }
    function S({ eventType: t, targetType: n, timestampMs: r, trackingId: a }) {
        const i = v(t, a);
        p = {
            eventType: t,
            trackingId: a,
            debounceCount: i
        };
        if (t === "TAP" || t === "DOUBLE_TAP") {
            _ = a;
        }
        o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: t,
            debounceCount: i > 0 ? i : void 0,
            screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
            targetTrackingId: a,
            targetType: n,
            timestampMs: r
        });
    }
    const R = {
        UP: 1,
        DOWN: 2,
        LEFT: 3,
        RIGHT: 4
    };
    function L(e) {
        const t = Math.abs(e.deltaX);
        const n = Math.abs(e.deltaY);
        if (t === 0 && n === 0) {
            return null;
        }
        if (n >= t) {
            if (e.deltaY > 0) {
                return R.DOWN;
            }
            return R.UP;
        }
        if (e.deltaX > 0) {
            return R.RIGHT;
        }
        return R.LEFT;
    }
    function E(e, t, n) {
        o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: "SCROLL",
            screenName: e,
            timestampMs: t,
            gestureDirection: n
        });
    }
    function k(e, t, n) {
        o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: "LONG_PRESS",
            screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
            targetTrackingId: e,
            targetType: t,
            timestampMs: n
        });
    }
    function I(e) {
        return e.getAttribute("data-testid") ?? e.getAttribute("testid");
    }
    function T(e) {
        return e.tagName.toLowerCase();
    }
    function D(t) {
        for(var n = t, r = 0, a = []; n instanceof HTMLElement && r < e;){
            const i = I(n);
            if (i != null) {
                if (o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(i)) {
                    return null;
                }
                if (i !== "") {
                    a.push(i);
                }
            }
            n = n.parentElement;
            r++;
        }
        a.reverse();
        if (a.length > 0) {
            return a.join("/");
        }
        return null;
    }
    function x({ target: t }) {
        if (h != null && h === t) {
            h = null;
            return;
        }
        h = null;
        if (t instanceof HTMLElement) {
            const n = Date.now();
            const r = D(t);
            if (r != null) {
                const o = T(t);
                const a = m;
                if (a != null) {
                    window.clearTimeout(a.timer);
                    if (a.target !== t && n - a.timestampMs >= s) {
                        S({
                            eventType: "TAP",
                            targetType: a.targetType,
                            timestampMs: a.timestampMs,
                            trackingId: a.trackingId
                        });
                    } else if (a.target !== t) {
                        y++;
                    }
                }
                var i = window.setTimeout(function() {
                    const e = m;
                    if (e != null && e.timer === i) {
                        S({
                            eventType: "TAP",
                            targetType: e.targetType,
                            timestampMs: e.timestampMs,
                            trackingId: e.trackingId
                        });
                        m = null;
                    }
                }, u);
                m = {
                    timer: i,
                    target: t,
                    trackingId: r,
                    targetType: o,
                    timestampMs: n
                };
            }
        }
    }
    function $({ target: t }) {
        if (t instanceof HTMLElement) {
            const n = m;
            if (n != null) {
                window.clearTimeout(n.timer);
                m = null;
                S({
                    eventType: "DOUBLE_TAP",
                    targetType: n.targetType,
                    timestampMs: n.timestampMs,
                    trackingId: n.trackingId
                });
                return;
            }
            const r = D(t);
            if (r != null) {
                S({
                    eventType: "DOUBLE_TAP",
                    targetType: T(t),
                    timestampMs: Date.now(),
                    trackingId: r
                });
            }
        }
    }
    function P(e) {
        if (f == null && e instanceof WheelEvent) {
            const t = Date.now();
            const n = o("WAWebPathfinderScreenName").getCurrentScreenName();
            const r = L(e);
            f = window.setTimeout(function() {
                f = null;
            }, c);
            E(n, t, r);
        }
    }
    function N() {
        if (f == null) {
            const e = Date.now();
            const t = o("WAWebPathfinderScreenName").getCurrentScreenName();
            f = window.setTimeout(function() {
                f = null;
            }, c);
            E(t, e);
        }
    }
    function M(e) {
        if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
            const t = e.target;
            if (t instanceof HTMLElement) {
                if (g != null) {
                    window.clearTimeout(g);
                    g = null;
                }
                h = null;
                const n = D(t);
                if (n != null) {
                    const r = T(t);
                    const o = Date.now();
                    g = window.setTimeout(function() {
                        g = null;
                        h = t;
                        k(n, r, o);
                    }, d);
                }
            }
        }
    }
    function w(e) {
        if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
            if (g != null) {
                window.clearTimeout(g);
                g = null;
            }
        }
    }
    function A() {
        if (g != null) {
            window.clearTimeout(g);
            g = null;
        }
    }
    l.consumeLastTapTrackingId = C;
    l.getRapidFireSuppressedCount = b;
    l.getAncestorTrackingPath = D;
    l.handleClick = x;
    l.handleDoubleClick = $;
    l.handleWheel = P;
    l.handleScroll = N;
    l.handlePointerDown = M;
    l.handlePointerUp = w;
    l.handlePointerCancel = A;
}, 98);