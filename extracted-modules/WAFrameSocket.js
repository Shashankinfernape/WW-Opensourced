__d("WAFrameSocket", [
    "WABinary",
    "WAErrors",
    "WALogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = ((e)=>{
        function t(t) {
            let n;
            const r = "SocketClosed";
            n = e.call(this, t ?? r) || this;
            n.name = r;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.toString = function() {
            return this.name;
        };
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const m = (()=>{
        function t(t, n) {
            const r = this;
            this.$3 = new (o("WABinary")).Binary;
            this.closed = false;
            this.$4 = false;
            this.onFrame = null;
            this.onClose = null;
            this.$5 = function(e) {
                r.$3.writeByteArray(e);
                r.convertBufferedToFrames();
            };
            this.$6 = function() {
                if (r.$3.peek(p)) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "FrameSocket closed, waiting for pending processing"
                    ])));
                    r.$4 = true;
                    return;
                }
                r.$9();
            };
            this.$7 = function(e) {};
            this.$2 = n;
            this.$1 = t;
            t.onData = this.$5;
            t.onClose = this.$6;
            t.onError = this.$7;
        }
        const n = t.prototype;
        n.sendFrame = function(t) {
            if (!this.$4) {
                this.throwIfClosed();
                const e = this.$2;
                const n = t.byteLength;
                this.$8(n);
                const r = this.$1.dataToSend;
                if (e) {
                    this.$2 = null;
                    r.ensureAdditionalCapacity(e.length + 3 + n);
                    r.writeByteArray(e);
                } else {
                    r.ensureAdditionalCapacity(3 + n);
                }
                r.writeUint8(n >> 16);
                r.writeUint16(n & 65535);
                r.write(t);
                this.$1.requestSend();
            }
        };
        n.$9 = function() {
            if (!this.closed) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "FrameSocket closed"
                ])));
                this.$4 = false;
                this.closed = true;
                const e = this.onClose;
                if (e) {
                    e();
                }
            }
        };
        n.$8 = function(t) {
            if (t >= 1 << 24) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Buffer to send: ",
                    ""
                ])), t);
                throw new (o("WAErrors")).BufferTooLargeError(`Buffer too large: ${t}`);
            }
        };
        n.convertBufferedToFrames = function() {
            for(var e = this.$3, t = this.onFrame; t && e.peek(p);){
                const n = _(e);
                const r = e.readByteArrayView(n);
                t(r);
                t = this.onFrame;
            }
            if (this.$4 && !e.peek(p)) {
                this.$9();
            }
            if (t && e.size()) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "FrameSocket: queueing partial frame of ",
                    " bytes"
                ])), e.size());
            }
        };
        n.throwIfClosed = function() {
            if (this.closed) {
                throw new d;
            }
        };
        n.close = function() {
            this.$1.close();
        };
        return t;
    })();
    function p(e) {
        if (e.size() < 3) {
            return false;
        }
        const t = _(e);
        return t <= e.size();
    }
    function _(e) {
        return e.readUint8() << 16 | e.readUint16();
    }
    l.FrameSocket = m;
}, 98);