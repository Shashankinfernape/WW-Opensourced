__d("WAWebDBMapOrphansToProviders", [
    "WAWebDBAddOnProviders"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = new Map;
        for (const n of e){
            const a = o("WAWebDBAddOnProviders").getProviderForAddOnType(n.type);
            if (a) {
                const i = t.get(a) ?? [];
                i.push(n);
                t.set(a, i);
            }
        }
        return t;
    }
    l.mapOrphansToProviders = e;
}, 98);