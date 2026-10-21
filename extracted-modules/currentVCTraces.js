__d("currentVCTraces", [], function(t, n, r, o, a, i) {
    const e = "default";
    const l = new Map;
    const s = new Map;
    const u = new Map;
    function c() {
        return new Map(u);
    }
    function d(e, t) {
        u.set(e, t);
    }
    function m(e) {
        u.delete(e);
    }
    function p(t) {
        return l.get(t ?? e) ?? null;
    }
    function _(t, n) {
        l.set(n ?? e, t);
    }
    function f(e) {
        l.forEach(e);
    }
    function g(t) {
        return s.get(t ?? e) ?? null;
    }
    function h(t, n) {
        s.set(n ?? e, t);
    }
    i.getCurrentVCTraces = c;
    i.addVCTrace = d;
    i.removeVCTrace = m;
    i.getCurrentNavigationVCTrace = p;
    i.setCurrentNavigationVCTrace = _;
    i.forEachNavigationVCTrace = f;
    i.getLastNavigationVCReport = g;
    i.setLastNavigationVCReport = h;
}, 66);