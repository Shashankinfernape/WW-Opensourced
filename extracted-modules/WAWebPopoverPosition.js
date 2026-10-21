__d("WAWebPopoverPosition", [
    "$InternalEnum",
    "WAWebL10N"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "Top",
        "End",
        "Bottom",
        "Start"
    ]);
    const s = n("$InternalEnum").Mirrored([
        "Center",
        "Start",
        "End"
    ]);
    function u(e, t, n = 0) {
        return e.top - t.height - n;
    }
    function c(e, t = 0) {
        return e.right + t;
    }
    function d(e, t = 0) {
        return e.bottom + t;
    }
    function m(e, t, n = 0) {
        return e.left - t.width - n;
    }
    function p(e, t) {
        return e.left + e.width / 2 - t.width / 2;
    }
    function _(e, t) {
        return e.top + e.height / 2 - t.height / 2;
    }
    function f(t, n, o, a, i = 0, l, f = window.innerWidth, h = window.innerHeight, C = false) {
        const R = l?.height ?? 0;
        const L = l?.width ?? 0;
        const E = l?.offset ?? 0;
        let k;
        let I;
        const T = 1;
        const D = i + R;
        let x = o;
        if (r("WAWebL10N").isRTL()) {
            if (o === e.Start) {
                x = e.End;
            } else if (o === e.End) {
                x = e.Start;
            }
        }
        const $ = {
            coords: {
                top: 0,
                left: 0
            },
            alignment: a,
            position: x,
            arrowCoords: null
        };
        let P = 0;
        if (l != null && (a === s.Start || a === s.End)) {
            if ((x === e.Top || x === e.Bottom) && t.width < E * 2 + L) {
                P = E + L / 2 - t.width / 2;
            } else if ((x === e.Start || x === e.End) && t.height < E * 2 + L) {
                P = E + L / 2 - t.height / 2;
            }
            if (a === s.Start) {
                P = -P;
            }
        }
        if (x === e.Top) {
            $.coords.top = u(t, n, D);
            I = "100%";
        } else if (x === e.End) {
            $.coords.left = c(t, D);
            k = -R + T;
        } else if (x === e.Bottom) {
            $.coords.top = d(t, D);
            I = -R + T;
        } else if (x === e.Start) {
            $.coords.left = m(t, n, D);
            k = "100%";
        }
        if (a === s.Center) {
            if (x === e.Top || x === e.Bottom) {
                k = `calc(50% - ${L / 2}px)`;
                $.coords.left = p(t, n);
            } else {
                I = `calc(50% - ${L / 2}px)`;
                $.coords.top = _(t, n);
            }
        } else if (a === s.Start) {
            if (x === e.Top || x === e.Bottom) {
                k = E;
                $.coords.left = t.left + P;
            } else {
                I = E;
                $.coords.top = t.top + P;
            }
        } else if (a === s.End) {
            if (x === e.Top || x === e.Bottom) {
                k = `calc(100% - ${E + L}px)`;
                $.coords.left = t.right - n.width + P;
            } else {
                I = `calc(100% - ${E + L}px)`;
                $.coords.top = t.bottom - n.height + P;
            }
        }
        if ($.coords.left < 0) {
            if (x === e.Top || x === e.Bottom) {
                $.alignment = s.Start;
                $.coords.left = t.left + P;
                k = E;
            } else {
                $.position = e.End;
                $.coords.left = c(t, D);
                k = "0px";
            }
        } else if ($.coords.left + n.width > f) {
            if (x === e.Top || x === e.Bottom) {
                $.alignment = s.End;
                $.coords.left = t.right - n.width + P;
                k = `calc(100% - ${L}px)`;
            } else {
                $.position = e.Start;
                $.coords.left = m(t, n, D);
                k = "100%";
            }
        }
        if ($.coords.top < 0) {
            if (x === e.Start || x === e.End) {
                $.alignment = s.Start;
                $.coords.top = t.top + P;
                I = E;
            } else {
                $.position = e.Bottom;
                $.coords.top = d(t, D);
                I = "0px";
            }
        } else if ($.coords.top + n.height > h) {
            if (x === e.Start || x === e.End) {
                $.alignment = s.End;
                $.coords.top = t.bottom - n.height + P;
                I = `calc(100% - ${E}px)`;
            } else {
                $.position = e.Top;
                $.coords.top = u(t, n, D);
                I = "100%";
            }
        }
        if (l != null && I != null && k != null) {
            $.arrowCoords = {
                top: I,
                left: k
            };
        }
        if (C === true && l == null) {
            if (x === e.Top || x === e.Bottom) {
                g($, t, n, f, h);
            } else {
                y($, t, n, h);
            }
        }
        return $;
    }
    function g(e, t, n, r, o) {
        const a = e.coords;
        const { left: i, top: l } = a;
        const s = C(i, r - n.width);
        const u = C(l, o - n.height);
        e.coords.left = s;
        e.coords.top = u;
        if (!(s === i && u === l)) {
            const c = C(t.left + t.width / 2 - s, n.width);
            const d = u === l ? h(e.position) : `${C(t.top + t.height / 2 - u, n.height)}px`;
            e.transformOrigin = `${c}px ${d}`;
        }
    }
    function h(t) {
        if (t === e.Top) {
            return "bottom";
        }
        return "top";
    }
    function y(t, n, r, o) {
        const a = t.coords.top;
        const i = C(a, o - r.height);
        t.coords.top = i;
        if (i !== a) {
            const l = t.position === e.Start ? "right" : "left";
            const s = C(n.top + n.height / 2 - i, r.height);
            t.transformOrigin = `${l} ${s}px`;
        }
    }
    function C(e, t) {
        return Math.min(Math.max(e, 0), Math.max(t, 0));
    }
    function b({ alignment: r, arrow: o, buffer: i = 0, clampToViewport: s = false, element: u, position: c, target: d }) {
        let m;
        if ("getBoundingClientRect" in d) {
            m = d.getBoundingClientRect();
        } else {
            m = {
                top: d.y,
                right: d.x,
                bottom: d.y,
                left: d.x,
                width: 0,
                height: 0,
                x: d.x,
                y: d.y
            };
        }
        const p = u.ownerDocument?.defaultView ?? window;
        return f(m, u.getBoundingClientRect(), c, r, i, o, p.innerWidth, p.innerHeight, s);
    }
    function v({ alignment: n, position: r }) {
        let o = "left";
        let a = "top";
        if (r === e.Top || r === e.Bottom) {
            if (r === e.Top) {
                a = "bottom";
            } else {
                a = "top";
            }
            if (n === s.Start) {
                o = "left";
            } else if (n === s.End) {
                o = "right";
            } else if (n === s.Center) {
                o = "center";
            }
        }
        if (r === e.Start || r === e.End) {
            if (r === e.Start) {
                o = "right";
            } else {
                o = "left";
            }
            if (n === s.Start) {
                a = "top";
            } else if (n === s.End) {
                a = "bottom";
            } else if (n === s.Center) {
                a = "center";
            }
        }
        return `${o} ${a}`;
    }
    l.PopoverPosition = e;
    l.PopoverAlignment = s;
    l.getFixedElementPosition = b;
    l.getDefaultTransformOrigin = v;
}, 98);