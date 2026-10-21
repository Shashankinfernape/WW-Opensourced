__d("getWrapperComponentPropArrayFromDOMElement_THIS_CAN_BREAK", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = Object.keys(e).find((e)=>e.startsWith("__reactFiber$"));
        if (t == null) {
            return null;
        }
        return e[t];
    }
    function l(e, t) {
        if (e.pendingProps != null && typeof e.pendingProps[t] === "string") {
            return e.pendingProps[t];
        }
        if (e.memoizedProps != null && typeof e.memoizedProps[t] === "string") {
            return e.memoizedProps[t];
        }
        return null;
    }
    function s(e) {
        const n = e.displayName ?? e.name;
        if (n == null) {
            return null;
        }
        const r = n.match(/.*\[from (.*)\.react\]/);
        return r && r[1] || n;
    }
    function u(t, n, r) {
        try {
            for(var o = e(t), a = []; o;){
                const i = o.type;
                if (i == null || typeof i === "string") {
                    o = o.return;
                    continue;
                }
                let u = s(i);
                if (u == null && i.render != null) {
                    u = s(i.render);
                }
                if (u === n) {
                    const c = l(o, r);
                    if (c != null) {
                        a.push(c);
                    }
                }
                o = o.return;
            }
            return a;
        } catch (e) {
            return [];
        }
    }
    i.default = u;
}, 66);