__d("WAWebWaapiAnimateKeyframes", [], function(t, n, r, o, a, i) {
    const e = new Set([
        "translateX",
        "translateY",
        "translateZ",
        "scaleX",
        "scaleY",
        "scale",
        "rotateZ"
    ]);
    const l = {
        translateX: "0px",
        translateY: "0px",
        translateZ: "0px",
        scaleX: "1",
        scaleY: "1",
        scale: "1",
        rotateZ: "0deg"
    };
    const s = new Set([
        "translateX",
        "translateY",
        "translateZ"
    ]);
    const u = new Set([
        "opacity",
        "zIndex",
        "zoom",
        "fontWeight",
        "lineHeight",
        "order",
        "flexGrow",
        "flexShrink"
    ]);
    const c = new Set([
        "tween"
    ]);
    const d = new Set([
        "transformOrigin"
    ]);
    const m = new Set([
        "display",
        "overflowY"
    ]);
    function p(t) {
        const n = {};
        const r = {};
        const o = {};
        const a = [];
        const i = [];
        let s = false;
        let p = false;
        for (const h of Object.keys(t)){
            if (!c.has(h)) {
                const y = _(t[h]);
                const { after: C, before: b } = y;
                if (m.has(h)) {
                    if (C != null) {
                        o[h] = String(C);
                    }
                    continue;
                }
                if (e.has(h)) {
                    const v = C ?? l[h];
                    i.push(f(h, v));
                    const S = b ?? l[h];
                    a.push(f(h, S));
                    if (Array.isArray(t[h])) {
                        p = true;
                    }
                    continue;
                }
                if (d.has(h) && C != null) {
                    const R = String(C);
                    n[h] = R;
                    r[h] = R;
                    continue;
                }
                const L = !u.has(h);
                if (C != null) {
                    r[h] = L ? g(C) : String(C);
                }
                if (b != null) {
                    n[h] = L ? g(b) : String(b);
                    s = true;
                }
            }
        }
        if (i.length > 0) {
            r.transform = i.join(" ");
            if (p) {
                n.transform = a.join(" ");
                s = true;
            }
        }
        const E = s ? [
            n,
            r
        ] : [
            r
        ];
        return {
            keyframes: E,
            staticStyles: o
        };
    }
    function _(e) {
        if (Array.isArray(e)) {
            if (e.length >= 3) {
                return {
                    after: e[0],
                    before: e[2]
                };
            }
            if (e.length === 2) {
                return {
                    after: e[0],
                    before: e[1]
                };
            }
            return {
                after: e[0],
                before: void 0
            };
        }
        return {
            after: e,
            before: void 0
        };
    }
    function f(e, t) {
        const n = s.has(e) ? g(t) : String(t);
        return `${e}(${n})`;
    }
    function g(e) {
        if (typeof e === "number") {
            return `${e}px`;
        }
        return String(e);
    }
    i.buildAnimationKeyframes = p;
}, 66);