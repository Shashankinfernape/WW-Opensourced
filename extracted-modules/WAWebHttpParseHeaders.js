__d("WAWebHttpParseHeaders", [], function(t, n, r, o, a, i) {
    function e(e) {
        return (e || "").trim().toLowerCase().split("\n").reduce((e, t)=>{
            if (!t.trim()) {
                return e;
            }
            const n = t.indexOf(":");
            const r = t.substr(0, n).trim();
            const o = t.substr(n + 1).trim().replace(/;$/, "");
            if (e[r]) {
                if (Array.isArray(e[r])) {
                    e[r].push(o);
                } else {
                    e[r] += `, ${o}`;
                }
            } else {
                e[r] = o;
            }
            return e;
        }, {});
    }
    i.default = e;
}, 66);