__d("WebWorkerV4Resource", [
    "Promise",
    "WebWorkerV4DedicatedDynamicData",
    "err",
    "forEachObject",
    "getAsyncParamsFromCurrentPageURI",
    "getWorkerInitScriptSPINParams",
    "nullthrows",
    "supportsModuleWorker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, a, i, l, s) {
        const u = i ?? t.name;
        const c = r("supportsModuleWorker")(false) && l !== true;
        const d = c ? "module" : "classic";
        const m = r("getWorkerInitScriptSPINParams")();
        r("forEachObject")(r("getAsyncParamsFromCurrentPageURI")(), function(e, t) {
            m.set(t, e);
        });
        const p = r("nullthrows")(a.initScriptRouteBuilder.buildUri({
            worker_type: c ? "MODULE" : "CLASSIC"
        }).addQueryParams(m)).toString();
        const _ = new Worker(p, {
            name: u,
            type: d
        });
        const f = new (e || (e = n("Promise")))(function(e, n) {
            const i = function({ data: t }) {
                if (typeof t === "object" && (t?.type === "ww-init-error" || t?.type === "ww-init-complete")) {
                    s?.addPoint("worker_hrp_init_end");
                    _.removeEventListener("message", i);
                    if (t?.type === "ww-init-complete") {
                        e();
                        return;
                    }
                    const u = t?.error ?? "unknown";
                    const c = t?.reason ?? "unknown";
                    s?.addPoint("worker_hrp_init_error");
                    n(r("err")(`ww-hrp-init error: ${String(u)}, reason: ${String(c)}`));
                }
            };
            _.addEventListener("message", i);
            s?.addPoint("worker_read_hrp_start");
            o("WebWorkerV4DedicatedDynamicData").readDynamicDataForWorkerV4(t, a.hasteResponseRouteBuilder, s).then(({ data: t })=>{
                s?.addPoint("worker_read_hrp_end");
                s?.addPoint("worker_hrp_init_start");
                _.postMessage({
                    type: "ww-hrp-init",
                    hrp: t.hrp,
                    js_env: t.js_env,
                    is_dev: false,
                    tiered: true
                });
            }).catch(n);
        });
        return {
            worker: _,
            initReady: f
        };
    }
    l.createDedicatedV4WebWorker = s;
}, 98);