__d("QPLHasteSupportDataStorage", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        add: function(n, r) {
            Object.keys(n).forEach((t)=>{
                if (r) {
                    r.entry++;
                }
                if (e[t] == null) {
                    const o = n[t];
                    e[t] = o;
                } else {
                    if (r) {
                        r.dup_entry++;
                    }
                }
            });
        },
        get: function(n) {
            return e[n];
        }
    };
    i.default = l;
}, 66);