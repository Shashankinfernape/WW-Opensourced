__d("WAWebApiHydrateWidsUtil", [
    "WAWebWidFactory",
    "WAWebWidJsonReviver"
], function(t, n, r, o, a, i, l) {
    function e(t) {
        if (Array.isArray(t)) {
            for(let n = 0; n < t.length; n++){
                t[n] = e(o("WAWebWidJsonReviver").widReviver(String(n), t[n], o("WAWebWidFactory").isWidlike, o("WAWebWidFactory").createWidFromWidLike));
            }
            return t;
        } else if (t && typeof t === "object") {
            for(let r = Object.keys(t), a = 0; a < r.length; a++){
                const i = r[a];
                t[i] = e(o("WAWebWidJsonReviver").widReviver(i, t[i], o("WAWebWidFactory").isWidlike, o("WAWebWidFactory").createWidFromWidLike));
            }
            return t;
        }
        return t;
    }
    l.hydrateWids = e;
}, 98);