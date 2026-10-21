__d("BootloaderPreloader", [
    "invariant",
    "BootloaderDocumentInserter",
    "ErrorGuard",
    "ExecutionEnvironment",
    "FBLogger",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = new Set;
    const d = new Set;
    function m(e) {
        const e_allResources = e.allResources;
        const a = e?.hsrp?.hblp?.rsrcMap;
        if (a == null) {
            r("FBLogger")("BootloaderPreloader").warn("Missing resource map in worker hrp");
            return;
        }
        if (e_allResources == null) {
            r("FBLogger")("BootloaderPreloader").warn("Missing allResources list in worker hrp");
            return;
        }
        o("BootloaderDocumentInserter").batchDOMInsert(function(e) {
            e_allResources.forEach((t)=>{
                const n = a[t];
                if (!(!n || n.type !== "js")) {
                    p(n, e, "prefetch");
                }
            });
        });
    }
    function p(t, n, o = "preload", a, i) {
        if (!(e || (e = r("ExecutionEnvironment"))).isInWorker) {
            const l = r("nullthrows")(n);
            let m;
            switch(t.type){
                case "async":
                    return;
                case "css":
                    m = "style";
                    break;
                case "js":
                    m = "script";
                    break;
                default:
                    m = t.type;
                    s(0, 3721);
            }
            if (!(c.has(t.src) || o === "prefetch" && d.has(t.src)) && (o === "preload" ? c.add(t.src) : o === "prefetch" ? d.add(t.src) : s(0, 77517), t.d !== 1)) {
                const p = document.createElement("link");
                if (i != null) {
                    p.onerror = (u || (u = r("ErrorGuard"))).guard(function() {
                        i();
                    });
                }
                p.href = t.src;
                p.rel = o;
                if (o === "preload") {
                    p.as = m;
                }
                if (a != null) {
                    p.setAttribute("fetchpriority", a);
                }
                if (!t.nc) {
                    p.crossOrigin = "anonymous";
                }
                l.appendChild(p);
            }
        }
    }
    l.preloadWorkerJSFromHRP = m;
    l.preloadResource = p;
}, 98);