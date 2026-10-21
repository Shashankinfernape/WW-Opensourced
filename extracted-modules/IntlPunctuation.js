__d("IntlPunctuation", [
    "FbtHooks",
    "IntlPhonologicalRewrites",
    "IntlRedundantStops"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "[.!?。！？।…ຯ᠁ฯ．]";
    const u = {};
    function c(locale) {
        const t = locale ?? "";
        let n = u[t];
        if (n == null) {
            n = u[t] = d(locale);
        }
        return n;
    }
    function d(locale) {
        const t = [];
        const n = r("IntlPhonologicalRewrites").get(locale);
        for(let o in n.patterns){
            let a = n.patterns[o];
            for(const i in n.meta){
                const l = new RegExp(i.slice(1, -1), "g");
                const s = n.meta[i];
                o = o.replace(l, s);
                a = a.replace(l, s);
            }
            let u = a;
            if (u === "javascript") {
                u = function(t) {
                    return t.slice(1).toLowerCase();
                };
            }
            t.push([
                new RegExp(o.slice(1, -1), "g"),
                u
            ]);
        }
        return t;
    }
    function m(t) {
        for(var n = c((e || (e = r("FbtHooks"))).getViewerContext().locale), o = t, a = 0; a < n.length; a++){
            const i = n[a];
            const l = i[0];
            const s = i[1];
            o = o.replace(l, s);
        }
        return o.replace(/\x01/g, "");
    }
    const p = new Map;
    for(const _ in r("IntlRedundantStops").equivalencies){
        for (const f of [
            _
        ].concat(r("IntlRedundantStops").equivalencies[_])){
            p.set(f, _);
        }
    }
    const g = new Map;
    for(const h in r("IntlRedundantStops").redundancies){
        g.set(h, new Set(r("IntlRedundantStops").redundancies[h]));
    }
    function y(e, t) {
        const r = p.get(e);
        const o = p.get(t);
        return g.get(r)?.has(o) === true;
    }
    function C(e, t) {
        if (y(e[e.length - 1], t)) {
            return "";
        }
        return t;
    }
    l.PUNCT_CHAR_CLASS = s;
    l.applyPhonologicalRules = m;
    l.dedupeStops = C;
}, 98);