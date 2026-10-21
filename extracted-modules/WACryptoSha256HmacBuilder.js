__d("WACryptoSha256HmacBuilder", [
    "WACryptoSha256BuilderV2"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (()=>{
        function e(e) {
            this.$1 = new (o("WACryptoSha256BuilderV2")).Sha256BuilderV2;
            this.$2 = new Uint8Array(0);
            this.reset(e);
        }
        const t = e.prototype;
        t.reset = function(t) {
            this.$2 = new Uint8Array(64);
            if (t.length > 64) {
                this.$2.set(new (o("WACryptoSha256BuilderV2")).Sha256BuilderV2().update(t).finish(), 0);
            } else {
                this.$2.set(t, 0);
            }
            const e = this.$2.map((e)=>e ^ 54);
            this.$1 = new (o("WACryptoSha256BuilderV2")).Sha256BuilderV2().update(e);
        };
        t.update = function(t) {
            this.$1.update(t);
            return this;
        };
        t.finish = function() {
            const e = this.$2.map((e)=>e ^ 92);
            const t = this.$1.finish();
            return new (o("WACryptoSha256BuilderV2")).Sha256BuilderV2().update(e).update(t).finish();
        };
        return e;
    })();
    l.Sha256HMacBuilder = e;
}, 98);