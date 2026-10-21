__d("MarkedMobileFlavorPlugin", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        end: /_(?!_)/g,
        middle: /^_(?=\S)([\S\s]*?\S)_(?!_)/,
        start: /^_/
    };
    const l = {
        end: /\*(?!\*)/g,
        middle: /^\*(?=\S)([\S\s]*?\S)\*(?!\*)/,
        start: /^\*/
    };
    function s(e, t, n, r) {
        return c(e, t, n, r, "em");
    }
    function u(e, t, n, r) {
        return c(e, t, n, r, "strong");
    }
    function c(t, n, r, o, a) {
        const i = a === "em" ? e : l;
        let s = i.start.exec(n);
        let u = r;
        if (s && (!s[1] || s[1] && (o === "" || t.rules.inline.punctuation.exec(o)))) {
            u = u.slice(-1 * n.length);
            const c = i.end;
            c.lastIndex = 0;
            let d;
            while((s = c.exec(u)) != null && s != null){
                d = i.middle.exec(u.slice(0, s.index + 2));
                if (d) {
                    const raw = n.slice(0, d[0].length);
                    const p = n.slice(1, d[0].length - 1);
                    if (a === "em") {
                        return {
                            raw,
                            text: p,
                            tokens: [],
                            type: "em"
                        };
                    }
                    return {
                        raw,
                        text: p,
                        tokens: [],
                        type: "strong"
                    };
                }
            }
        }
    }
    i.em = s;
    i.strong = u;
}, 66);