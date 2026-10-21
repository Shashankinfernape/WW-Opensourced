__d("WAWebClassnames", [], function(t, n, r, o, a, i) {
    function e(e) {
        const t = [];
        e.forEach((e)=>{
            if (e != null && typeof e === "object") {
                Object.keys(e).forEach((n)=>{
                    if (e[n]) {
                        t.push(n);
                    }
                });
            } else {
                t.push(e);
            }
        });
        return t.join(" ");
    }
    function l(...r) {
        const t = [];
        r.forEach((n)=>{
            if (Array.isArray(n)) {
                t.push(e(n));
            } else if (n != null && typeof n === "object") {
                Object.keys(n).forEach((e)=>{
                    if (n[e]) {
                        t.push(e);
                    }
                });
            } else {
                t.push(n);
            }
        });
        return t.join(" ").trim();
    }
    i.classnamesConvertMeToStylexPlease = l;
}, 66);