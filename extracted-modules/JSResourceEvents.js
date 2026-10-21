__d("JSResourceEvents", [
    "performanceAbsoluteNow"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 50;
    const u = new Map;
    function c(t, n, o) {
        const a = t;
        const i = n ?? "";
        let l = u.get(a);
        if (!l) {
            u.set(a, l = new Map);
        }
        let c = l.get(i);
        if (!c) {
            l.set(i, c = new Map);
        }
        let d = c.get(o);
        if (!d) {
            const m = [
                0,
                []
            ];
            c.set(o, d = m);
        }
        d[1][d[0]++ % s] = (e || (e = r("performanceAbsoluteNow")))();
    }
    function d(e, t, n) {
        const r = u.get(e);
        if (!r) {
            return [];
        }
        const o = [];
        for (const [i, l] of r){
            for (const [type, d] of l){
                for (const time of d[1]){
                    if (time >= t && time <= n) {
                        o.push({
                            module: e,
                            ref: i || null,
                            type,
                            time
                        });
                    }
                }
            }
        }
        return o.sort((e, t)=>e.time - t.time);
    }
    function m(e, t) {
        const n = new Map;
        for (const r of u.keys()){
            const o = d(r, e, t);
            if (o.length) {
                n.set(r, o);
            }
        }
        return n;
    }
    l.notify = c;
    l.getEvents = d;
    l.getAllModuleEvents = m;
}, 98);