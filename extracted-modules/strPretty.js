__d("strPretty", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = [];
        for(let n = e.valueOf().trim(), r = true, o = 0; o < n.length; o++){
            const a = n.charAt(o);
            const i = o <= n.length - 2 ? n.charAt(o + 1) : null;
            if (/^[a-zA-Z]$/.test(a)) {
                if (r) {
                    t.push(a.toUpperCase());
                    r = false;
                } else {
                    t.push(a.toLowerCase());
                }
                if (i != null && !/^[_\s]$/.test(i)) {
                    const l = a.toUpperCase() === a;
                    const s = i.toUpperCase() === i && /^[a-zA-Z]$/.test(i);
                    if (!l && s) {
                        r = true;
                        t.push(" ");
                    }
                }
            } else if (/^[0-9]$/.test(a)) {
                t.push(a);
            } else if (/^[!.?]$/.test(a)) {
                t.push(a);
                r = true;
            } else {
                if (i != null) {
                    const u = i.toUpperCase() === i;
                    if (u || /^[_]$/.test(a)) {
                        r = true;
                    }
                }
                t.push(" ");
            }
        }
        return t.join("");
    }
    i.default = e;
}, 66);