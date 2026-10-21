__d("qex", [
    "invariant",
    "BanzaiLazyQueue"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = {};
    const u = {};
    const c = {
        _: function(n) {
            const t = e[n];
            if (t == null) {
                s(0, 11799, n);
            }
            const { l, r: r_1 } = t;
            if (l != null && !u[n]) {
                u[n] = true;
                o("BanzaiLazyQueue").queuePost("qex", {
                    l
                });
            }
            return r_1;
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
    l.default = c;
}, 98);