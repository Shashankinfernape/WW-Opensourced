__d("WAWebWamEnumFormatter", [
    "WAWebWamCodegenWamEvent"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (!(t instanceof o("WAWebWamCodegenWamEvent").WamEvent) || t.$rawProps == null) {
            return e;
        }
        const n = {};
        for(const r in e){
            const a = e[r];
            n[r] = a;
            if (typeof a === "number") {
                const i = t.resolveEnumValue(r, a);
                if (typeof i === "string") {
                    n[r] = `${String(a)} (${i.toUpperCase()})`;
                }
            }
        }
        return n;
    }
    l.formatWamEventForLogging = e;
}, 98);