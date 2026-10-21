__d("GHLTypenameRestore", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const n = window.Env != null ? window.Env.q9k7m2x : null;
        if (!(n == null || !Array.isArray(n))) {
            for (const o of n){
                if (Array.isArray(o) && o.length === 2) {
                    if (t != null && t.indexOf(o[0]) === -1) {
                        continue;
                    }
                    l(e, o[0], o[1]);
                }
            }
        }
    }
    function l(e, t, n) {
        if (!(e == null || typeof e !== "object")) {
            for(const r = [
                e
            ]; r.length > 0;){
                const o = r.pop();
                if (!(o == null || typeof o !== "object")) {
                    if (Array.isArray(o)) {
                        for (const i of o){
                            if (i != null && typeof i === "object") {
                                r.push(i);
                            }
                        }
                        continue;
                    }
                    if (o.__typename === t) {
                        o.__typename = n;
                    }
                    for(let l = Object.keys(o), s = 0; s < l.length; s++){
                        const u = o[l[s]];
                        if (u != null && typeof u === "object") {
                            r.push(u);
                        }
                    }
                }
            }
        }
    }
    i.restoreAllTypenames = e;
    i.restoreTypenameValues = l;
}, 66);