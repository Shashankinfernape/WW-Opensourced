__d("WAWebVelocityAnimate", [
    "WAWebABProps",
    "WAWebThirdPartyMigrationGatingUtils",
    "WAWebWaapiAnimate",
    "asyncToGeneratorRuntime",
    "velocity-animate"
], function(t, n, r, o, a, i, l) {
    const e = {
        FINISH: "finish",
        STOP: "stop"
    };
    const s = new Map;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a, ...l) {
            if (o("WAWebThirdPartyMigrationGatingUtils").isVelocityAnimateMigrationEnabled()) {
                return r("WAWebWaapiAnimate").apply(void 0, [
                    t,
                    n,
                    a,
                    ...l
                ]);
            }
            if (t) {
                if (typeof n === "string" && (n === e.FINISH || n === e.STOP)) {
                    return r("velocity-animate").apply(void 0, [
                        t,
                        n,
                        a,
                        ...l
                    ]);
                }
                d(t, function(e) {
                    const t = s.get(e) || 0;
                    s.set(e, t + 1);
                });
                const c = n;
                let p = a;
                if (typeof a === "object" && typeof c === "object") {
                    let _;
                    if (typeof a.begin === "function") {
                        _ = a.begin;
                    }
                    const f = function(t) {
                        for(const e in c){
                            const n = c[e];
                            if (Array.isArray(n)) {
                                o("velocity-animate").hook(t, e, n[1]);
                            }
                        }
                        if (_ != null) {
                            _(t);
                        }
                    };
                    if (o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_3")) {
                        p = babelHelpers.extends({}, a, {
                            begin: f
                        });
                    } else {
                        a.begin = f;
                    }
                }
                const g = yield r("velocity-animate").apply(void 0, [
                    t,
                    n,
                    p,
                    ...l
                ]);
                d(g, function(e) {
                    const t = (s.get(e) || 1) - 1;
                    if (t === 0) {
                        s.delete(e);
                        m(e);
                    } else {
                        s.set(e, t);
                    }
                });
                return g;
            }
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        if (Array.isArray(e)) {
            e.forEach((e)=>{
                t(e);
            });
        } else {
            t(e);
        }
    }
    function m(e) {
        const o = r("velocity-animate").Utilities.data(e);
        const a = r("velocity-animate").State.delayedElements;
        Object.keys(a).forEach((t)=>{
            const n = a[t];
            if (t !== "count" && (n === e || !n)) {
                delete a[t];
            }
        });
        const i = r("velocity-animate").State?.calls;
        if (i && Array.isArray(i)) {
            for(let l = 0; l < i.length; l++){
                const s = i[l];
                if (s) {
                    const u = s[0];
                    if (Array.isArray(u)) {
                        for (const d of u){
                            if (d && d.element === e) {
                                i[l] = false;
                                break;
                            }
                        }
                    }
                }
            }
        }
        if (o?.velocity?.tweensContainer) {
            o.velocity.tweensContainer.element = null;
        }
        r("velocity-animate").Utilities.removeData(e, [
            "fxqueue",
            "velocity"
        ]);
    }
    l.default = u;
}, 98);