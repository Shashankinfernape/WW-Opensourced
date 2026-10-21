__d("JSResourceReferenceImpl", [
    "BootloaderEvents",
    "ErrorMetadata",
    "JSResourceEvents",
    "Promise",
    "PromiseAnnotate",
    "err",
    "ifRequireable",
    "ifRequired"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = function(t) {
        return t;
    };
    let c = [];
    let d = null;
    function m(e) {
        if (d) {
            e(d);
        } else {
            c.push(e);
        }
    }
    const p = "JSResource: unknown caller";
    class _ {
        constructor(e){
            this.$1 = e;
        }
        static setBootloader(t) {
            d = t;
            for (const e of c){
                e(d);
            }
            c = [];
        }
        getModuleId() {
            const e = this.$1;
            return e;
        }
        getModuleIdAsRef() {
            return this.$1;
        }
        load() {
            const t = this;
            const a = this.$2;
            const i = this.getModuleId();
            o("JSResourceEvents").notify(this.$1, a, "LOADED");
            const l = new (s || (s = n("Promise")))(function(e, n) {
                var l = o("BootloaderEvents").onBootloadEndpointError(function(e) {
                    if (e.module === i) {
                        l?.unsubscribe();
                        const o = r("err")("[INTERNAL ONLY] Bootloading module %s failed with error MID opes:%s. This issue may cause infinite spinners in production.", i, e.errorMID);
                        o.forcedKey = `${i}:${e.errorMID}`;
                        o.opes_mids = [
                            e.errorMID
                        ];
                        const a = o.metadata ?? new (r("ErrorMetadata"));
                        a.addEntry("OPES", "MID", e.errorMID);
                        o.metadata = a;
                        n(o);
                    }
                });
                m(function(n) {
                    n.loadModules([
                        t.getModuleIdAsRef()
                    ], function(n) {
                        l?.unsubscribe();
                        o("JSResourceEvents").notify(t.$1, a, "PROMISE_RESOLVED");
                        e(n);
                    }, t.$2 ?? p);
                });
            });
            (e || (e = o("PromiseAnnotate"))).setDisplayName(l, `Bootload(${this.getModuleId()})`);
            return l;
        }
        preload() {
            const t = this;
            const n = this.$2 ?? p;
            m(function(e) {
                return e.loadModules([
                    t.getModuleIdAsRef()
                ], function() {}, `preload: ${n}`);
            });
        }
        equals(t) {
            return this === t || this.$1 == t.$1;
        }
        getModuleIfRequireable() {
            o("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
            return r("ifRequireable").call(null, this.$1, u);
        }
        getModuleIfRequired() {
            o("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
            return r("ifRequired").call(null, this.$1, u);
        }
        static disableForSSR_DO_NOT_USE() {
            this.$3 = false;
        }
        isAvailableInSSR_DO_NOT_USE() {
            return this.constructor.$3;
        }
        __setRef(t) {
            this.$2 = t;
            o("JSResourceEvents").notify(this.$1, this.$2, "CREATED");
            return this;
        }
        static loadAll(t, n) {
            const e = {};
            let r = false;
            for (const a of t){
                const i = a.$2;
                if (i) {
                    r = true;
                    e[i] = true;
                }
                o("JSResourceEvents").notify(a.$1, i, "LOADED");
            }
            m(function(o) {
                return o.loadModules(t.map((e)=>e.getModuleId()), n, r ? Object.keys(e).join(":") : p);
            });
        }
    }
    _.$3 = true;
    l.default = _;
}, 98);