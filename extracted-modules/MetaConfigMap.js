__d("MetaConfigMap", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {};
    const s = {
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
        },
        get: function(n) {
            return l[n] ?? e[n];
        },
        getAll_DO_NOT_USE: function() {
            return babelHelpers.extends({}, e, l);
        },
        applyOverride_DO_NOT_USE: function(t, n) {
            l[t] = n;
        },
        clearOverride_DO_NOT_USE: function(t) {
            delete l[t];
        },
        clearAllOverrides_DO_NOT_USE: function() {
            for(const e in l){
                delete l[e];
            }
        },
        hasOverride_DO_NOT_USE: function(t) {
            return t in l;
        },
        getBase_DO_NOT_USE: function(n) {
            return e[n];
        }
    };
    i.default = s;
}, 66);