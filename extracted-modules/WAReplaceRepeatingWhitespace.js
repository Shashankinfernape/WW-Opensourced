__d("WAReplaceRepeatingWhitespace", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = "\xA0";
    function l(t, n) {
        const r = function(r) {
            let t = "";
            for(let o = 0; o < r.length; o++){
                const a = n === true && r[o] === "\n";
                t += a ? "\n" : e;
            }
            return t;
        };
        if (/\s\s+/.test(t)) {
            return t.replace(/\s\s+/g, r);
        }
        return t;
    }
    i.default = l;
}, 66);