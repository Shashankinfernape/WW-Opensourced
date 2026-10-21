__d("justknobx", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = {};
    const u = {
        getBool: function(t, n = null) {
            s(0, 47459);
        },
        getInt: function(t, n = null) {
            s(0, 47459);
        },
        _: function(n) {
            const t = e[n];
            if (t == null) {
                s(0, 47458, n);
            }
            return t.r;
        },
        add: function(n, r) {
            for(const t in n){
                if (r) {
                    r.entry++;
                }
                if (t in e) {
                    if (r) {
                        r.dup_entry++;
                    }
                } else {
                    e[t] = n[t];
                }
            }
        }
    };
    l.default = u;
}, 98);