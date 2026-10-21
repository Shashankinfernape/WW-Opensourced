__d("JustKnobsData", [], function(t, n, r, o, a, i) {
    const e = new Map;
    function l() {
        return e;
    }
    function s(t) {
        try {
            if (e.has(t)) {
                e.set(t, e.get(t) ?? 1);
                return;
            }
            e.set(t, 1);
        } catch (e) {}
    }
    function u(t) {
        try {
            if (e.has(t)) {
                let r = 0;
                e.set(t, r = (e.get(t) ?? 0) - 1);
                if (r <= 0) {
                    e.delete(t);
                }
            }
        } catch (e) {}
    }
    i.getKnobsBeingFetched = l;
    i.setKnobBeingFetched = s;
    i.setKnobFetchComplete = u;
}, 66);