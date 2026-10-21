__d("WAHttpUtils", [
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
        if (!/^https:\/\/[-\w.]+\.\w+$/.test(e)) {
            throw r("err")(`buildUrl given invalid host "${e}"`);
        }
        if (!t.startsWith("/")) {
            throw r("err")(`buildUrl given invalid path "${t}"`);
        }
        const o = n;
        const a = `${e}${t}`;
        if (!o) {
            return a;
        }
        const i = Object.keys(o).map((e)=>{
            let t = o[e];
            if (t instanceof ArrayBuffer) {
                t = new Uint8Array(t);
            }
            const n = t instanceof Uint8Array ? Array.from(t).map((e)=>`%${e.toString(16)}`).join("") : encodeURIComponent(t.toString());
            return `${encodeURIComponent(e)}=${n}`;
        });
        if (i.length > 0) {
            const l = i.join("&");
            if (a.includes("?")) {
                return `${a}&${l}`;
            }
            return `${a}?${l}`;
        } else {
            return a;
        }
    }
    l.buildUrl = e;
}, 98);