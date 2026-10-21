__d("WAWebMaxPerGroup", [], function(t, n, r, o, a, i) {
    function e(e, t, n) {
        const r = new Map;
        for (const o of e){
            const a = n(o);
            const i = r.get(a);
            if (i == null || t(o) >= t(i)) {
                r.set(a, o);
            }
        }
        return Array.from(r.values());
    }
    i.maxPerGroup = e;
}, 66);