__d("WAWebInflatePhoneRegex", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        let t;
        if (typeof e === "number") {
            t = String(e).split("").map((e)=>".".repeat(Number(e))).join(")(");
        } else {
            t = e.replace(/;|[a-zA-Z]+/g, (e)=>{
                if (e === ";") {
                    return ")(";
                }
                return e.split("").map((e)=>{
                    const t = e.charCodeAt(0);
                    if (t >= 97) {
                        return `${".".repeat(t - 96)}?`;
                    }
                    return ".".repeat(t - 64);
                }).join(")(");
            });
        }
        return `(${t})`;
    }
    i.inflatePhoneRegex = e;
}, 66);