__d("WAWebTPBridge", [
    "SecureMessageListener",
    "SecurePostMessage",
    "WACustomError",
    "WAWebEventEmitter",
    "WAWebNoop",
    "WAWebTPMessage"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(e, t, n){
            var o = this;
            this.$1 = false;
            this.$5 = new Set;
            this.$6 = new Set;
            this.$7 = new (r("WAWebEventEmitter"));
            this.$9 = new Set;
            this.$2 = e;
            this.$3 = t.endsWith("/") ? t.slice(0, -1) : t;
            this.$8 = n;
            this.$4 = new (r("SecureMessageListener"))(window, "webtpbridge").setSupportedOrigins([
                n
            ]).setEventHandler(function(e) {
                return o.$10(e);
            });
            this.initialize();
        }
        initialize() {
            if (!this.$1) {
                this.$4.beginListening();
                this.$1 = true;
            }
        }
        addSupportedOrigin(t) {
            this.$9.add(t);
            this.$11();
        }
        setEventHandler(t) {
            const e = this;
            this.$4.setEventHandler(function(n) {
                t?.(n);
                e.$10(n);
            });
        }
        removeSupportedOrigin(t) {
            this.$9.delete(t);
            this.$11();
        }
        $11() {
            this.$4.setSupportedOrigins([
                this.$8
            ].concat(Array.from(this.$9)));
        }
        publish(t, n, r) {
            if (this.$1) {
                const e = o("WAWebTPMessage").encodeWAWebTPMessage(t, n);
                o("SecurePostMessage").sendMessageToSpecificOrigin(this.$2, e, this.$3, r);
                for (const a of this.$5){
                    a.onPublish(e);
                }
            }
        }
        registerListener(t) {
            const e = this;
            this.$5.add(t);
            return function() {
                e.$5.delete(t);
            };
        }
        listen(t, n) {
            const e = this;
            if (!this.$1) {
                return r("WAWebNoop");
            }
            const o = function(t) {
                n(t);
            };
            this.$7.on(t, o);
            const a = function() {
                e.$7.off(t, o);
            };
            return a;
        }
        listenOnce(t, n, a) {
            const e = this;
            if (!this.$1) {
                return r("WAWebNoop");
            }
            const { onTimeout, timeoutMs } = a;
            let s = null;
            const u = function(r) {
                if (s != null) {
                    const t = s;
                    e.$6.delete(t);
                    window.clearTimeout(t);
                    s = null;
                }
                n(r);
            };
            this.$7.once(t, u);
            const c = function() {
                e.$7.off(t, u);
                if (s != null) {
                    const n = s;
                    e.$6.delete(n);
                    window.clearTimeout(n);
                    s = null;
                }
            };
            if (timeoutMs > 0) {
                s = window.setTimeout(function() {
                    c();
                    onTimeout(new (o("WACustomError")).TimeoutError(`${t}, timeoutMs: ${timeoutMs}`));
                }, timeoutMs);
                this.$6.add(s);
            }
            return c;
        }
        destroy() {
            if (this.$1) {
                this.$1 = false;
                this.$4.stopListening();
                for (const e of this.$6){
                    window.clearTimeout(e);
                }
                this.$6.clear();
                this.$5.clear();
            }
        }
        $10(t) {
            const e = this;
            if (!(!this.$1 || t.origin !== this.$3 || t.source !== this.$2)) {
                const n = t.data;
                const r = this.$7;
                r.trigger(n.type, o("WAWebTPMessage").decodeWAWebTPMessage(n));
                for (const a of this.$5){
                    a.onMessage(n, function(t, n) {
                        return e.publish(t, n);
                    });
                }
            }
        }
    }
    l.WAWebTPBridge = e;
}, 98);