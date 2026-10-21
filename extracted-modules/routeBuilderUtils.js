__d("routeBuilderUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = e.split("/");
        return t.filter((e)=>e !== "").map((part)=>{
            const t = part.split(/{|}/);
            if (t.length < 3) {
                return {
                    isToken: false,
                    part
                };
            }
            const prefix = t[0];
            const r = t[1];
            const suffix = t[2];
            const optional = r[0] === "?";
            const catchAll = r[optional ? 1 : 0] === "*";
            const token = r.substring((optional ? 1 : 0) + (catchAll ? 1 : 0));
            return {
                isToken: true,
                optional,
                catchAll,
                prefix,
                suffix,
                token
            };
        });
    }
    i.getPathParts = e;
}, 66);