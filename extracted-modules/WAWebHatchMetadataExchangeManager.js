__d("WAWebHatchMetadataExchangeManager", [
    "Promise"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    const l = 300000;
    const s = (()=>{
        function t() {
            this.$1 = new Map;
            this.$2 = new Map;
        }
        const r = t.prototype;
        r.register = function(r, o = l) {
            const t = this;
            return new (e || (e = n("Promise")))(function(e) {
                t.$1.set(r, e);
                t.$2.set(r, window.setTimeout(function() {
                    t.$3(r, {
                        outcome: "timeout"
                    });
                }, o));
            });
        };
        r.resolveRequest = function(t, n) {
            this.$3(t, {
                outcome: "response",
                response: n
            });
        };
        r.failRequest = function(t, n) {
            if (t != null) {
                this.$3(t, n === "send_failed" ? {
                    outcome: "send_failed"
                } : {
                    outcome: "decode_failed"
                });
            }
        };
        r.__resetForTesting = function() {
            for (const e of this.$2.values()){
                window.clearTimeout(e);
            }
            this.$1 = new Map;
            this.$2 = new Map;
        };
        r.$3 = function(t, n) {
            const e = this.$2.get(t);
            if (e != null) {
                window.clearTimeout(e);
                this.$2.delete(t);
            }
            const r = this.$1.get(t);
            if (r != null) {
                this.$1.delete(t);
                r(n);
            }
        };
        return t;
    })();
    const u = new s;
    i.default = u;
}, 66);