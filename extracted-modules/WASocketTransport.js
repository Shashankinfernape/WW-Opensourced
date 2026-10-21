__d("WASocketTransport", [
    "Promise",
    "WABinary",
    "WALogger",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c = 1;
    const d = (()=>{
        function t(t) {
            const n = this;
            this.$2 = false;
            this.onData = null;
            this.onClose = null;
            this.onError = null;
            this.dataToSend = new (o("WABinary")).Binary;
            this.$3 = function(t) {
                if (!n.$2) {
                    const r = new Uint8Array(t.data);
                    if (n.onData) {
                        n.onData(r);
                    } else {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "WebSocket #",
                            " dropped ",
                            " bytes"
                        ])), n.id, r.length);
                    }
                }
            };
            this.$4 = function(e) {
                if (!n.$2) {
                    n.$6(e);
                }
            };
            this.$5 = function(e) {
                if (!n.$2) {
                    const t = n.onError;
                    if (t) {
                        t(String(e));
                    }
                }
            };
            const r = c++;
            this.id = r;
            this.$1 = t;
            t.onmessage = this.$3;
            t.onclose = this.$4;
            t.onerror = this.$5;
        }
        const n = t.prototype;
        n.close = function() {
            if (!this.$2) {
                this.$1.close();
                this.$6();
            }
        };
        n.requestSend = function() {
            if (this.$2) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WebSocket #",
                    " not opened"
                ])), this.id);
                return;
            }
            if (this.dataToSend.size()) {
                this.$1.send(this.dataToSend.readBuffer());
            }
        };
        n.$6 = function(t) {
            this.$2 = true;
            if (this.onClose) {
                this.onClose(t);
            }
        };
        return t;
    })();
    function m(e, t, o, a) {
        const i = new WebSocket(e);
        i.binaryType = "arraybuffer";
        return new (u || (u = n("Promise")))(function(e, n) {
            i.onopen = function() {
                a?.();
                e();
            };
            i.onclose = function(e) {
                t?.(e);
                o?.(null, e);
                n(r("err")(`WebSocket closed after microtask delay}: ${e.reason} ${e.code}`));
            };
        }).then(()=>{
            const e = new d(i);
            if (o != null) {
                e.onClose = function(t) {
                    if (t != null) {
                        o(e.id, t);
                    }
                };
            }
            return e;
        });
    }
    l.WebSocketTransport = d;
    l.openWebSocket = m;
}, 98);