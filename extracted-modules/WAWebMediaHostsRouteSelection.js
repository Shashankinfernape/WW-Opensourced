__d("WAWebMediaHostsRouteSelection", [
    "WABase64Modulo",
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    const e = {
        DOWNLOAD: "DOWNLOAD",
        UPLOAD: "UPLOAD"
    };
    function s({ encFilehash: n, hosts: a, maxBuckets: i, operation: l, type }) {
        if (!a.length) {
            return {
                selectedHost: null,
                fallbackHost: null
            };
        }
        let c;
        if (l === e.DOWNLOAD) {
            const m = o("WAWebABProps").getABPropConfigValue("mms_vcache_aggregation_enabled");
            let p;
            if (n == null) {
                p = 0;
            } else if (m && i != null) {
                p = r("WABase64Modulo")(n, i) + 100;
            }
            const _ = u(a);
            const f = p == null ? null : _.get(p);
            const g = _.get(0);
            if (f != null && f.supportsDownloadMediaType(type)) {
                c = f;
            } else if (g != null && g.supportsDownloadMediaType(type)) {
                c = g;
            }
            c?.setSelectedBucket(p);
        }
        const h = a.find((e)=>e.isFallback());
        c = c ?? a.find((t)=>{
            if (l === e.UPLOAD) {
                return t.supportsUploadMediaType(type);
            }
            return t.supportsDownloadMediaType(type);
        });
        return {
            selectedHost: c ?? null,
            fallbackHost: h ?? null
        };
    }
    function u(e) {
        const t = new Map;
        e.forEach((e)=>{
            e.downloadBuckets?.forEach(function(n) {
                t.set(n, e);
            });
        });
        return t;
    }
    l.OPERATIONS = e;
    l.routeSelection = s;
}, 98);