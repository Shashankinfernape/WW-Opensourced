__d("SecureMessageListener", [
    "SecurePostMessage",
    "URI",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (()=>{
        function t(e, t) {
            const n = this;
            this.$3 = null;
            this.$4 = false;
            this.$1 = e;
            this.$6 = t;
            this.$5 = function(e) {
                n.run(e);
            };
        }
        const n = t.prototype;
        n.setEventHandler = function(t) {
            this.$2 = t;
            return this;
        };
        n.setSupportedOrigins = function(t) {
            this.$3 = t;
            return this;
        };
        n.skipOriginCheck_UNSAFE = function() {
            this.$4 = true;
            return this;
        };
        n.beginListening = function() {
            this.$1.addEventListener("message", this.$5);
            return this;
        };
        n.stopListening = function() {
            try {
                this.$1.removeEventListener("message", this.$5);
            } catch (t) {
                const e = r("getErrorSafe")(t);
                if (!(e instanceof TypeError)) {
                    throw e;
                }
            }
            return this;
        };
        n.run = function(t) {
            if (this.$3 == null || this.$3.length === 0) {
                if (!this.$4 && t.origin !== this.$1.location.origin) {
                    return;
                }
            } else if (!this.isSupportedOrigin(this.$3, t.origin)) {
                return;
            }
            if (this.$2) {
                const e = function(n) {
                    o("SecurePostMessage").sendMessageToSpecificOrigin(t.source, n, t.origin);
                };
                this.$2(t, e);
            }
        };
        n.isSupportedOrigin = function(n, o) {
            if (o.startsWith("chrome-extension://")) {
                return n.includes(o);
            }
            if (!new RegExp("^https://").test(o)) {
                return false;
            }
            const t = new (e || (e = r("URI")))(o);
            return n.some((e)=>t.isSubdomainOfDomain(e));
        };
        return t;
    })();
    l.default = s;
}, 98);