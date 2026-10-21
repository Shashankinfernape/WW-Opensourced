__d("WAWebAddonPluginProcessor", [
    "WAWebAddonCrossWindowUtils",
    "cr:37443",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const s = n("cr:37443") ?? [];
    function u() {
        const e = new Map;
        for (const t of s){
            const { processor, type } = t;
            if (processor != null) {
                e.set(type, processor);
            }
        }
        return e;
    }
    const c = u();
    function d() {
        return c;
    }
    function m(e) {
        let t;
        if (typeof e === "string") {
            t = e;
        } else {
            t = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e);
        }
        return r("nullthrows")(c.get(t));
    }
    function p(e) {
        return !!c.get(e);
    }
    l.getAddonProcessorsMap = d;
    l.getAddonProcessor = m;
    l.hasAddonProcessor = p;
}, 98);