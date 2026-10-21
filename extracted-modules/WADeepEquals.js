__d("WADeepEquals", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        return l(e, t, null);
    }
    function l(e, t, n) {
        if (e === t) {
            return true;
        }
        if (!e || !t || typeof e !== "object" && typeof t !== "object") {
            return false;
        }
        const r = n ?? new Map;
        const o = r.get(e);
        if (o != null) {
            if (o.has(t)) {
                return true;
            }
            o.add(t);
        } else {
            r.set(e, new Set([
                t
            ]));
        }
        const a = Array.isArray(e);
        const i = Array.isArray(t);
        if (a !== i) {
            return false;
        }
        let s = true;
        if (a) {
            const u = e.length;
            if (u !== t.length) {
                return false;
            }
            for(let c = 0; s && c < u; c++){
                s = l(e[c], t[c], r);
            }
            return s;
        }
        for(var d = Object.keys(e), m = 0; s && m < d.length; m++){
            const p = d[m];
            s = t.propertyIsEnumerable(p) && l(e[p], t[p], r);
        }
        if (!s || Object.keys(t).length !== d.length) {
            return false;
        }
        if (d.length === 0) {
            const _ = Object.prototype.toString.call(e);
            const f = Object.prototype.toString.call(t);
            if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t) && !(e instanceof DataView) && !(t instanceof DataView) && e.constructor === t.constructor) {
                return true;
            }
            return _ === "[object Object]" && f === "[object Object]";
        }
        return true;
    }
    i.deepEqual = e;
}, 66);