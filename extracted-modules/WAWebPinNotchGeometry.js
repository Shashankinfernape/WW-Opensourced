__d("WAWebPinNotchGeometry", [], function(t, n, r, o, a, i) {
    const e = 3;
    const l = 9;
    const s = 4.5;
    const u = 3;
    const c = 2;
    const d = 5;
    const m = 32;
    const p = 32;
    const _ = 0.5;
    function f(e) {
        switch(e){
            case 0:
                return l;
            case 1:
                return s;
            default:
                return u;
        }
    }
    function g(e, t) {
        const n = [];
        for(let r = 0; r < e; r++){
            n.push(e < d ? s : f(Math.abs(r - t)));
        }
        return n;
    }
    function h(e, t) {
        if (e < 2 || t <= 0) {
            return 1;
        }
        const n = t - c * (e - 1);
        const r = S(g(e, Math.floor(e / 2)));
        if (r <= 0 || n <= 0) {
            return 1;
        }
        return Math.max(1, n / r);
    }
    function y(e, t, n) {
        if (e.length === 0 || t < 0 || t >= e.length) {
            return 0;
        }
        const r = h(e.length, n);
        const o = S(e) * r + c * (e.length - 1);
        if (o <= n) {
            return (n - o) / 2;
        }
        let a = 0;
        for(let i = 0; i < t; i++){
            a += e[i] * r + c;
        }
        const l = a + e[t] * r / 2;
        return Math.min(0, Math.max(n - o, n / 2 - l));
    }
    function C(e, t) {
        const n = g(e, t);
        const r = h(e, m);
        let top = y(n, t, m);
        const a = [];
        for (const i of n){
            const l = i * r;
            a.push({
                height: l,
                top
            });
            top += l + c;
        }
        return a;
    }
    function b(top, height) {
        return Math.min(top + height, m) - Math.max(top, 0) >= _;
    }
    function v(e, t) {
        return C(e, t).filter(({ height, top })=>b(top, height)).length;
    }
    function S(e) {
        return e.reduce((acc, item)=>acc + item, 0);
    }
    i.STROKE_PX = e;
    i.SELECTED_PX = l;
    i.GAP_PX = c;
    i.BAND_PX = m;
    i.CONTAINER_PX = p;
    i.heightForDistance = f;
    i.heightsFor = g;
    i.fillScaleFor = h;
    i.stripTopFor = y;
    i.layoutFor = C;
    i.visibleNotchCount = v;
}, 66);