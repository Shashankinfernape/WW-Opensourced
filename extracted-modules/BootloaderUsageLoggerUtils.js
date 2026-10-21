__d("BootloaderUsageLoggerUtils", [
    "SiteData",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("requireDeferred")("ODS").__setRef("BootloaderUsageLoggerUtils");
    const s = new Set;
    const u = new Set;
    function c(e, ...n_1) {
        return n_1.map((t, n)=>{
            const r = e[n];
            p(r, "loaded");
            return ((e)=>{
                switch(e){
                    case "function":
                        return new Proxy(t, d(r));
                    case "object":
                        return new Proxy(t, m(r));
                    default:
                        return t;
                }
            })(typeof t);
        });
    }
    function d(e) {
        return {
            apply: function(n, r, o) {
                p(e, "used");
                return Reflect.apply(n, r, o);
            }
        };
    }
    function m(e) {
        return {
            get: function(n, r) {
                p(e, "used");
                return Reflect.get(n, r);
            }
        };
    }
    function p(e, t) {
        const n = t === "loaded" ? u : s;
        if (!n.has(e)) {
            _(e, t);
            n.add(e);
        }
    }
    function _(t, n) {
        e.onReady(function(e) {
            e.bumpEntityKey(454, `bootloader_load_modules.${o("SiteData").pkg_cohort}`, `${t}.module_${n}`);
        });
    }
    l.getProxyArgs = c;
    l.bumpODSKey = _;
}, 98);