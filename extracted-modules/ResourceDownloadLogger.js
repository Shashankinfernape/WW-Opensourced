__d("ResourceDownloadLogger", [
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {
        JS: "js",
        CSS: "css",
        IMG: "img",
        TRANSLATIONS: "translations"
    };
    function u(name) {
        const t = name.indexOf("?");
        if (t === -1) {
            return name;
        }
        return name.substring(0, t);
    }
    function c(initiatorType, t) {
        const n = t.substring(t.lastIndexOf(".") + 1);
        switch(n){
            case "js":
                if (t.includes("rsrc-translations.php")) {
                    return s.TRANSLATIONS;
                }
                return s.JS;
            case "css":
                return s.CSS;
            default:
                return initiatorType;
        }
    }
    function d() {
        return Object.keys(s).reduce((acc, key)=>{
            const n = s[key];
            acc[n] = {
                cacheCount: 0,
                cacheRate: 0,
                encodedBodySize: 0,
                decodedBodySize: 0,
                totalCount: 0,
                transferSize: 0
            };
            return acc;
        }, {});
    }
    function m(t, n) {
        if (typeof (e || (e = r("performance"))).getEntriesByType !== "function") {
            return new Map;
        }
        const o = d();
        const a = (e || (e = r("performance"))).getEntriesByType("resource").filter((e)=>e.startTime >= t && e.startTime <= n).map((e)=>({
                encodedBodySize: e.encodedBodySize,
                decodedBodySize: e.decodedBodySize,
                transferSize: e.transferSize,
                type: c(e.initiatorType, u(e.name))
            })).filter((e)=>o[e.type]);
        a.forEach((e)=>{
            const t = o[e.type];
            t.encodedBodySize += e.encodedBodySize;
            t.decodedBodySize += e.decodedBodySize;
            t.transferSize += e.transferSize;
            t.totalCount++;
            if (e.transferSize === 0) {
                t.cacheCount++;
            }
        });
        const i = new Map;
        for(const l in o){
            const s = o[l];
            if (s.totalCount > 0) {
                s.cacheRate = Math.round(s.cacheCount / s.totalCount * 100);
            }
            for(const m in s){
                i.set(`${l}_${m}`, s[m]);
            }
        }
        return i;
    }
    l.default = m;
}, 98);