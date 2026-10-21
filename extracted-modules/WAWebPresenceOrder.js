__d("WAWebPresenceOrder", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        const n = new Set(t.map((e)=>e.toString()));
        const r = e.filter((e)=>n.has(e.toString()));
        const o = new Set(r.map((e)=>e.toString()));
        const a = t.filter((e)=>!o.has(e.toString()));
        return [].concat(r, a);
    }
    i.preserveUserOrder = e;
}, 66);