__d("getReactComponentStackFromDOMElement_THIS_CAN_BREAK", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = Object.keys(e).find((e)=>e.startsWith("__reactFiber$"));
        if (t == null) {
            return null;
        }
        return e[t];
    }
    function l(e) {
        const n = e.displayName ?? e.name;
        if (n == null) {
            return null;
        }
        const r = n.match(/.*\[from (.*)\.react\]/);
        return r && r[1] || n;
    }
    function s(t) {
        try {
            const n = [];
            for(let r = e(t); r;){
                const o = r.type;
                if (o == null || typeof o === "string") {
                    r = r.return;
                    continue;
                }
                let a = l(o);
                if (a == null && o.render != null) {
                    a = l(o.render);
                }
                if (a != null && a !== "") {
                    n.push(a);
                }
                r = r.return;
            }
            return n;
        } catch (e) {
            return null;
        }
    }
    i.default = s;
}, 66);