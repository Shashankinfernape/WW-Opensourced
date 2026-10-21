__d("WebWorkerV4DedicatedDynamicData", [
    "FBLogger",
    "Promise",
    "cometAsyncFetchShared",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 10000;
    const u = new Map;
    function c(e, t, n, r = false) {
        const o = e.name;
        const a = `${t.getPath()}:${o}`;
        let i = u.get(a);
        if (i == null || r) {
            const l = Math.floor(+Date.now() / 1000);
            const s = d(e, t, r, n).then((e)=>({
                    time: l,
                    data: e
                }));
            s.catch(()=>{
                if (u.get(a) === s) {
                    u.delete(a);
                }
            });
            u.set(a, s);
            i = s;
        }
        return i;
    }
    function d({ name, v4HasteResponsePreloader: u }, o, a, i) {
        if (u == null || a) {
            i?.addPoint("worker_fetch_hrp_start");
            return m(name, o, a).then((e)=>{
                i?.addPoint("worker_fetch_hrp_end");
                return e;
            });
        }
        let c = null;
        const d = function() {
            if (c == null) {
                if (i != null) {
                    i.addPoint("worker_fallback_fetch_hrp_start");
                }
                c = m(name, o, a).then((e)=>{
                    i?.addPoint("worker_fallback_fetch_hrp_end");
                    return e;
                });
            }
            return c;
        };
        let p = false;
        i?.addPoint("worker_preloader_hrp_start");
        const _ = new (e || (e = n("Promise")))(function(e) {
            u.onLoaded(function({ data: n }) {
                i?.addPoint("worker_preloader_hrp_end");
                p = true;
                if (n == null || n.hrp == null) {
                    r("FBLogger")("worker").mustfix("Preloaded data for V4 dedicated worker %s is missing haste response, preload data keys: %s", name, n == null ? "null" : Object.keys(n).join(", "));
                    e(d());
                    return;
                }
                e(n);
            }).onError(function() {
                p = true;
                r("FBLogger")("worker").mustfix("Preloader for V4 dedicated worker %s errored, falling back to HTTP", name);
                e(d());
            });
        });
        const f = new e(function(e) {
            window.setTimeout(function() {
                if (!p) {
                    e(d());
                }
            }, s);
        });
        return e.race([
            _,
            f
        ]);
    }
    function m(e, t, n) {
        let o = null;
        if (n) {
            o = new FormData;
            o.set("__rev", "null");
            o.set("__spin_r", "null");
        }
        return r("cometAsyncFetchShared")(t.buildUri({
            worker_module: e
        }).toString(), {
            formData: o ?? void 0,
            data: {},
            getFullPayload: true,
            method: "POST",
            skipSRState: true,
            retryCount: n ? 2 : void 0
        }).then((t)=>{
            if (t != null && typeof t === "object" && Object.prototype.hasOwnProperty.call(t, "hrp") && typeof t.hrp === "object") {
                return t;
            }
            throw r("err")("Unexpected data from WebWorkerV4DedicatedHasteResponseController for worker %s", e);
        });
    }
    l.readDynamicDataForWorkerV4 = c;
}, 98);