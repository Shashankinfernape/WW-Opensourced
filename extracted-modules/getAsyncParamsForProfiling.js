__d("getAsyncParamsForProfiling", [
    "SiteData"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "__profiler_opts";
    const t_1 = 30;
    const u = 300;
    function c() {
        if (typeof URLSearchParams !== "function") {
            return null;
        }
        const n = new URLSearchParams(window.location.search);
        const o = n.get(e);
        if (o == null) {
            return null;
        }
        const a = {
            recursive: "0",
            t: t_1,
            traceid: r("SiteData").polytrace_id
        };
        o.split(";").forEach((e)=>{
            const t = e.split(/:|=/, 2);
            const n = t[0];
            const r = t[1];
            const o = n.toLowerCase();
            switch(o){
                case "t":
                    a.t = Math.min(parseInt(r, 10) || t_1, 300);
                    break;
                case "recursive":
                    a.recursive = r === "1" ? "1" : "0";
                    break;
                case "uid":
                case "filter":
                case "traceid":
                    if (r) {
                        a[o] = r;
                    }
                    break;
            }
        });
        if (a.recursive !== "1" || window.performance.now() > (a.t || 0) * 1000 || a.traceid == null) {
            return null;
        }
        const i = Object.entries(a).map((e)=>e.join(":")).sort().join(";");
        const l = {
            [e]: i
        };
        n.forEach((e, t)=>{
            if (t.endsWith("_sample")) {
                l[t] = e;
            }
        });
        return l;
    }
    l.defaultTimeSpan = t_1;
    l.maxTimeSpan = u;
    l.getAsyncParamsForProfiling = c;
}, 98);