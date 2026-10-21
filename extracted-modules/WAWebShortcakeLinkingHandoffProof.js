__d("WAWebShortcakeLinkingHandoffProof", [
    "WACryptoHkdf",
    "WACryptoHmac",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = "shortcake-passkey-handoff-v1";
    const s = 32;
    const u = 300 * 1000;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.byteLength === 0) {
                throw r("err")("Shortcake handoff: priorAttemptSecret must be non-empty");
            }
            return o("WACryptoHkdf").extractAndExpand(t, e, s);
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.byteLength !== s) {
                throw r("err")(`Shortcake handoff: hmacKey must be ${s} bytes`);
            }
            return o("WACryptoHmac").hmacSha256(e, t);
        });
        return p.apply(this, arguments);
    }
    class _ {
        constructor(e = function() {
            return Date.now();
        }, t = u){
            this.$1 = null;
            this.$2 = 0;
            this.$4 = e;
            this.$3 = t;
        }
        stash(t) {
            this.clear();
            this.$1 = new Uint8Array(t.slice(0));
            this.$2 = this.$4();
        }
        peek() {
            if (this.$1 == null) {
                return null;
            }
            if (this.$4() - this.$2 > this.$3) {
                this.clear();
                return null;
            }
            const e = this.$1;
            if (e == null) {
                return null;
            }
            return e.buffer.slice(0);
        }
        clear() {
            if (this.$1 != null) {
                this.$1.fill(0);
                this.$1 = null;
            }
            this.$2 = 0;
        }
        hasValidKey() {
            if (this.$1 == null) {
                return false;
            }
            if (this.$4() - this.$2 > this.$3) {
                this.clear();
                return false;
            }
            return true;
        }
    }
    const f = new _;
    function g() {
        return f;
    }
    l.derivePairingHandoffHmacKey = c;
    l.computePairingHandoffProof = m;
    l.PairingHandoffKeyHolder = _;
    l.getHandoffKeyHolder = g;
}, 98);