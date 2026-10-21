__d("WAWebPluginCreateRegistryLookup", [], function(t, n, r, o, a, i) {
    function e(e) {
        const t = new Map;
        for (const n of e){
            const o = n.type;
            const a = n.subtype ?? null;
            let i = t.get(o);
            if (i == null) {
                i = new Map;
                t.set(o, i);
            }
            i.set(a, n);
        }
        return function(e, n) {
            return t.get(e)?.get(n ?? null);
        };
    }
    i.createMsgTypeRegistryLookup = e;
}, 66);