__d("ix", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    const e = {};
    const u = new Set;
    function c(t) {
        const n = e[t];
        if (!n) {
            s(0, 11798, t);
        }
        return n;
    }
    c.add = function(t, n) {
        const r = false;
        for(const o in t){
            if (n) {
                n.entry++;
            }
            if (o in e) {
                if (n) {
                    n.dup_entry++;
                }
            } else {
                t[o].loggingID = o;
                e[o] = t[o];
            }
        }
    };
    c.getUsedPaths_ONLY_FOR_REACT_FLIGHT = function() {
        if (t.__flight_execution_mode_DO_NOT_USE !== "flight") {
            s(0, 34547);
        }
        return Array.from(u);
    };
    c.getAllPaths = function() {
        const t = new Set;
        Object.values(e).map((e)=>{
            if (e?.sprited === 0) {
                return e.uri;
            }
            if (e?.sprited === 1) {
                return e._spi;
            }
            if (e?.sprited === 2) {
                return e.spi;
            }
        }).forEach((e)=>e != null && t.add(e));
        return t;
    };
    l.default = c;
}, 98);