__d("WAWebFormatParseTree", [
    "WAWebFormatParse"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        const r = {
            children: []
        };
        let a = 0;
        let parent = r;
        let l = 0;
        for (const c of t){
            for(var d = c[0], m = c[1]; parent.parent && d > (l = parent.match[2]);){
                if (a <= l) {
                    parent.children.push({
                        type: "text",
                        value: e.substring(a, l + 1)
                    });
                }
                a = parent.match[3] + 1;
                if (parent.mutator.fragment) {
                    const p = parent.parent.children;
                    p.pop();
                    p.push(...parent.children);
                }
                if (l !== parent.match[3]) {
                    parent.parent.children.push({
                        type: "delimiter",
                        value: e.substring(l + 1, a)
                    });
                }
                parent = parent.parent;
            }
            if (a < d) {
                parent.children.push({
                    type: "text",
                    value: e.substring(a, d)
                });
            }
            const _ = n[c[4]];
            const mutator = _[0];
            const opts = _[1];
            const h = mutator.mutates;
            a = m;
            if (d !== m) {
                parent.children.push({
                    type: "delimiter",
                    value: e.substring(d, m)
                });
            }
            const y = {
                children: [],
                match: c,
                mutator,
                opts,
                parent
            };
            if (h) {
                const C = e.substring(c[1], c[2] + 1);
                const b = mutator.mutate(C, c[5]);
                const v = s(mutator, n, y);
                const S = o("WAWebFormatParse")._parse(b, v);
                y.children = S.children;
                a = c[2] + 1;
            }
            parent.children.push(y);
            parent = y;
        }
        do {
            if (parent.match) {
                const R = parent.match;
                const L = R[2];
                const E = R[3];
                if (a <= L) {
                    parent.children.push({
                        type: "text",
                        value: e.substring(a, L + 1)
                    });
                }
                a = E + 1;
                if (parent.mutator.fragment) {
                    const k = parent.parent.children;
                    k.pop();
                    k.push(...parent.children);
                }
                if (L !== E) {
                    parent.parent.children.push({
                        type: "delimiter",
                        value: e.substring(L + 1, a)
                    });
                }
            }
        }while (parent.parent && (parent = parent.parent) && parent.parent)
        if (a !== e.length) {
            parent.children.push({
                type: "text",
                value: e.substring(a)
            });
        }
        return r;
    }
    function s({ format }, t, n) {
        const o = [];
        const a = u(n);
        for(let i = 0; i < t.length; ++i){
            if (!(!format && !t[i][0].compatibility || a.includes(t[i][0]))) {
                o.push(t[i]);
            }
        }
        return o;
    }
    function u(e) {
        let t = e;
        const n = [];
        do {
            if (t.mutator) {
                n.push(t.mutator);
            }
        }while (t.parent && (t = t.parent))
        return n;
    }
    l.default = e;
}, 98);