__d("getAsyncParamsFromCurrentPageURI", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        locale: true,
        cxobfus: true,
        js_debug: true,
        cquick: true,
        cquick_token: true,
        wdplevel: true,
        prod_graphql: true,
        sri: true
    };
    const l = {
        ctarget: true,
        hl: true,
        gk_enable: true,
        gk_disable: true,
        __pwa: true
    };
    function s() {
        const t = {};
        window.location.search.slice(1).split("&").forEach((n)=>{
            const r = n.split("=");
            const o = r[0];
            const a = r[1];
            if (o.substr(0, 4) === "tfc_" || o.substr(0, 4) === "tfi_" || o.substr(0, 3) === "mh_" || e[o] > -1 || l[o] > -1) {
                if (l[o] > -1) {
                    t[o] = decodeURIComponent(a);
                } else {
                    t[o] = a;
                }
            }
        });
        return t;
    }
    i.default = s;
}, 66);