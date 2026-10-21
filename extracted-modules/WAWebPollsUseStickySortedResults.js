__d("WAWebPollsUseStickySortedResults", [
    "nullthrows",
    "react",
    "useLazyRef"
], function(t, n, r, o, a, i, l) {
    let e;
    const useMemo = (e || (e = o("react"))).useMemo;
    function u(e) {
        const t = r("useLazyRef")(function() {
            return new Map;
        });
        return useMemo(function() {
            const t_current = t.current;
            const o = Array.from(e);
            const a = o.filter(([t])=>!t_current.has(t.localId)).sort(([, n], t)=>{
                const r = t[1];
                return r.count - n.count;
            }).map(([t])=>t.localId);
            for (const i of a){
                t_current.set(i, t_current.size);
            }
            return o.sort(([o], t)=>{
                const a = t[0];
                return r("nullthrows")(t_current.get(o.localId)) - r("nullthrows")(t_current.get(a.localId));
            });
        }, [
            t,
            e
        ]);
    }
    l.useStickySortedResults = u;
}, 98);