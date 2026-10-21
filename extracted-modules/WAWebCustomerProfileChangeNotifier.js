__d("WAWebCustomerProfileChangeNotifier", [], function(t, n, r, o, a, i) {
    const e = new Map;
    const l = new Set;
    function s(t, n) {
        const r = e.get(t);
        const o = r ?? new Set;
        if (r == null) {
            e.set(t, o);
        }
        o.add(n);
        return function() {
            o.delete(n);
            if (o.size === 0 && e.get(t) === o) {
                e.delete(t);
            }
        };
    }
    function u(e) {
        l.add(e);
        return function() {
            l.delete(e);
        };
    }
    function c(t) {
        const n = e.get(t);
        if (n != null) {
            for (const r of Array.from(n)){
                r();
            }
        }
        for (const o of Array.from(l)){
            o(t);
        }
    }
    i.subscribeToCustomerProfileChanges = s;
    i.subscribeToAnyCustomerProfileChange = u;
    i.notifyCustomerProfileChanged = c;
}, 66);