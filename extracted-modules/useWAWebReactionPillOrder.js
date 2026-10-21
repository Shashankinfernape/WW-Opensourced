__d("useWAWebReactionPillOrder", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] !== e) {
            n = function() {
                return e.map(c);
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const r = useState(n);
        const a = r[0];
        const i = r[1];
        let l;
        if (t[2] !== a) {
            l = function(t) {
                const e = new Map;
                for (const n of t){
                    e.set(n.emoji, n);
                }
                const r = [];
                const o = [];
                for (const l of a){
                    const s = e.get(l);
                    if (s != null) {
                        r.push(s);
                        e.delete(l);
                    } else {
                        r.push({
                            emoji: l,
                            count: 0,
                            hasMyReaction: false
                        });
                    }
                }
                for (const u of e.values()){
                    r.push(u);
                    o.push(u.emoji);
                }
                if (o.length > 0) {
                    i(function(e) {
                        return [].concat(e, o);
                    });
                }
                return r;
            };
            t[2] = a;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    function c(e) {
        return e.emoji;
    }
    l.default = u;
}, 98);