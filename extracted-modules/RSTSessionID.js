__d("RSTSessionID", [
    "Env",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = null;
    function u() {
        if (s != null) {
            return s;
        }
        const t = (e || (e = r("Env"))).brsid != null ? `${(e || (e = r("Env"))).brsid}` : r("uuidv4")();
        const n = `rst-${Date.now()}`;
        s = `${n}-${t}`;
        return s;
    }
    l.getSessionID = u;
}, 98);