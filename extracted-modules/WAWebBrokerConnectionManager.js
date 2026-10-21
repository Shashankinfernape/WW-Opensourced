__d("WAWebBrokerConnectionManager", [
    "invariant",
    "WAPromiseTimeout",
    "WAResolvable",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    const e = 5000;
    const u = (()=>{
        function t() {}
        const n = t.prototype;
        n.init = function() {
            this.$1 = null;
            this.$2 = new (o("WAResolvable")).Resolvable;
            return o("WAPromiseTimeout").promiseTimeout(this.$2.promise, e);
        };
        n.isConnected = function() {
            return this.$1 != null;
        };
        n.getPort = function() {
            return this.$1;
        };
        n.waitForConnection = function() {
            return r("nullthrows")(this.$2?.promise, "ConnectionManager Initialization Promise");
        };
        n.connectVia = function(t) {
            if (!this.isConnected()) {
                if (!this.$2) {
                    s(0, 56329);
                }
                this.$1 = t;
                this.$2.resolve();
            } else {
                throw r("err")("Connection already established");
            }
        };
        return t;
    })();
    const c = new u;
    l.default = c;
}, 98);