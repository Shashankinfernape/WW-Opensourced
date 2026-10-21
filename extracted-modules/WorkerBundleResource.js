__d("WorkerBundleResource", [
    "XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder",
    "getWorkerInitScriptSPINParams",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(resource, t, ...initArgs) {
        const logImportScriptsErrors = t?.logImportScriptsErrors ?? false;
        const l = t?.name ?? resource.name;
        const href = new window.URL(resource.url, window.location.href).href;
        if (href == null) {
            const c = new Error("Can't start up worker without a resource url.");
            c.stack;
            throw c;
        }
        const d = r("nullthrows")(r("XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder").buildUri({}).addQueryParams(r("getWorkerInitScriptSPINParams")())?.addQueryParams(s())?.toString());
        const m = new Worker(d, {
            name: l
        });
        m.postMessage({
            bundleUrl: href,
            initArgs,
            isDev: false,
            resource,
            logImportScriptsErrors,
            type: "sr-init"
        });
        return m;
    }
    function s() {
        const e = new URLSearchParams(window.location.search);
        const t = new Map;
        e.forEach((e, n)=>{
            if ([
                "gk_enable",
                "gk_enable[]",
                "gk_disable",
                "gk_disable[]"
            ].includes(n)) {
                t.set(n, e);
            }
        });
        return t;
    }
    l.createDedicatedWebWorker = e;
}, 98);