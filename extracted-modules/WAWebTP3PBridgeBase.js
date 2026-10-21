__d("WAWebTP3PBridgeBase", [
    "SecureMessageListener",
    "SecurePostMessage",
    "WACustomError",
    "WAWebEventEmitter",
    "WAWebNoop"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(data) {
        if (typeof data === "object" && data != null && "type" in data) {
            const t = data.type;
            if (t === "GET_PDF" || t === "PDF_DATA" || t === "GET_PDF_SUCCESS" || t === "SHARE_PDF_START") {
                return babelHelpers.extends({}, data, {
                    type: t
                });
            }
        }
        return null;
    }
    class s {
        constructor(e, t, n){
            var o = this;
            this.$1 = false;
            this.$5 = new Set;
            this.$6 = new Set;
            this.$7 = new (r("WAWebEventEmitter"));
            this.$2 = e;
            var a = t.endsWith("/") ? t.slice(0, -1) : t;
            this.$3 = a;
            var i = new (r("SecureMessageListener"))(window, "webtp3pbridge");
            if (t.startsWith("chrome-extension://")) {
                i.setSupportedOrigins([
                    a
                ]);
            } else {
                i.setSupportedOrigins([
                    n
                ]);
            }
            this.$4 = i.setEventHandler(function(e) {
                return o.$8(e);
            });
            this.initialize();
        }
        initialize() {
            if (!this.$1) {
                this.$4.beginListening();
                this.$1 = true;
            }
        }
        runEvent(t) {
            this.$4.run(t);
        }
        publish(t, n) {
            if (this.$1) {
                o("SecurePostMessage").sendMessageToSpecificOrigin(this.$2, babelHelpers.extends({
                    type: t
                }, n), this.$3);
                for (const e of this.$5){
                    e.onPublish(t, n);
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
        listenOnce(t, n, a) {
            const e = this;
            if (!this.$1) {
                return r("WAWebNoop");
            }
            const { onTimeout, timeoutMs } = a;
            let s = null;
            const u = function(r) {
                const t = s;
                if (t != null) {
                    e.$6.delete(t);
                    window.clearTimeout(t);
                    s = null;
                }
                n(r);
            };
            this.$7.once(t, u);
            const c = function() {
                e.$7.off(t, u);
                const n = s;
                if (n != null) {
                    e.$6.delete(n);
                    window.clearTimeout(n);
                    s = null;
                }
            };
            if (timeoutMs > 0) {
                s = window.setTimeout(function() {
                    c();
                    onTimeout(new (o("WACustomError")).TimeoutError);
                }, timeoutMs);
                this.$6.add(s);
            }
            return c;
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
            return function() {
                e.$7.off(t, o);
            };
        }
        isTargetWindowClosed() {
            try {
                return this.$2?.closed === true;
            } catch (e) {
                return true;
            }
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
        $8(n) {
            const t = this;
            if (!(!this.$1 || n.origin !== this.$3 || n.source !== this.$2 && n.source !== this.$2.parent)) {
                const r = e(n.data);
                if (r != null) {
                    this.$7.trigger(r.type, r);
                    for (const o of this.$5){
                        o.onMessage(r.type, r, function(e, n) {
                            return t.publish(e, n);
                        });
                    }
                }
            }
        }
    }
    l.WAWebTP3PBridgeBase = s;
}, 98);