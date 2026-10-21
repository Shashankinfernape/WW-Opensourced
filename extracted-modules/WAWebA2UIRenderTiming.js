__d("WAWebA2UIRenderTiming", [], function(t, n, r, o, a, i) {
    const e = 8490;
    const l = 4;
    const s = 8;
    const u = new Map;
    let c = 0;
    function d() {
        c += 1;
        return c;
    }
    const m = 256;
    const p = new Set;
    function _(e) {
        if (p.has(e)) {
            return false;
        }
        if (p.size >= m) {
            const t = p.values().next().value;
            if (t != null) {
                p.delete(t);
            }
        }
        p.add(e);
        return true;
    }
    function f(e) {
        p.delete(e);
    }
    function g(e, t) {
        u.set(e, t);
    }
    function h(e) {
        u.delete(e);
    }
    function y(t, n) {
        if (t === e && n[l] != null) {
            const r = n[s];
            if (typeof r === "string") {
                const o = u.get(r);
                if (o != null) {
                    u.delete(r);
                    o();
                }
            }
        }
    }
    i.nextA2UIRenderInstanceKey = d;
    i.markA2UIRenderStartedIfAbsent = _;
    i.clearA2UIRenderStarted = f;
    i.registerA2UIRenderCallback = g;
    i.unregisterA2UIRenderCallback = h;
    i.maybeEndA2UIRenderMarkerFromFieldStat = y;
}, 66);