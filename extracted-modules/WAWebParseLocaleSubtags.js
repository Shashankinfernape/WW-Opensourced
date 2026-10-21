__d("WAWebParseLocaleSubtags", [], function(t, n, r, o, a, i) {
    const e = /^[a-z0-9-]+$/i;
    const l = /^[a-z]{2,3}$/i;
    const s = /^[a-z]{4}$/i;
    const u = /^(?:[a-z]{2}|[0-9]{3})$/i;
    function c(t) {
        if (!e.test(t)) {
            return d();
        }
        const n = t.split("-");
        if (!l.test(n[0])) {
            return d();
        }
        const r = {
            language: n[0],
            script: null,
            region: null
        };
        let o = 1;
        if (o < n.length && s.test(n[o])) {
            r.script = n[o];
            o++;
        }
        if (o < n.length && u.test(n[o])) {
            r.region = n[o];
        }
        return r;
    }
    function d() {
        return {
            language: null,
            script: null,
            region: null
        };
    }
    i.default = c;
}, 66);