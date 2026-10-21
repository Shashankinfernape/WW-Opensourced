__d("WAWebLidPnCache", [
    "WALogger",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (()=>{
        function t() {
            this.$1 = new Map;
            this.$2 = new Map;
        }
        const n = t.prototype;
        n.getPhoneNumber = function(t) {
            return this.getLidEntry(t)?.phoneNumber;
        };
        n.getLidEntry = function(t) {
            if (!t.isUser()) {
                throw r("err")("WaWebLidPnCache - Invalid get call (not user)");
            }
            if (!t.isLid()) {
                throw r("err")("WaWebLidPnCache - Invalid get call (not lid)");
            }
            const e = t.toString();
            return this.$1.get(e);
        };
        n.getCurrentLid = function(n) {
            if (n.isLid()) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WaWebLidPnCache.getCurrentLid called with a lid"
                ]))).sendLogs("get-current-lid-called-with-lid");
                return n;
            }
            const r = n.toString();
            return this.$2.get(r)?.lid;
        };
        n.add = function(t, n) {
            if (!t.isLid()) {
                throw r("err")("WaWebLidPnCache - Invalid add call");
            }
            const e = t.toString();
            this.$1.set(e, n);
            const o = n.phoneNumber;
            if (o != null) {
                this.$3(o, n);
            }
        };
        n.$3 = function(t, n) {
            if (t.isLid()) {
                throw r("err")("WaWebLidPnCache - Invalid _updatePnMap call");
            }
            const e = t.toString();
            const o = this.$2.get(e);
            if (o != null) {
                if (o?.phoneNumberCreatedAt <= n.phoneNumberCreatedAt) {
                    this.$2.set(e, n);
                }
            } else {
                this.$2.set(e, n);
            }
        };
        n.clear = function() {
            this.$1.clear();
            this.$2.clear();
        };
        n.remove = function(t) {
            if (!t.isLid()) {
                throw r("err")("WaWebLidPnCache - Invalid remove call");
            }
            const e = t.toString();
            let n = null;
            if (this.$1.has(e)) {
                n = this.$1.get(e)?.phoneNumber;
            }
            if (n != null) {
                this.$2.delete(n.toString());
            }
            this.$1.delete(e);
        };
        return t;
    })();
    l.LidPnCache = s;
}, 98);