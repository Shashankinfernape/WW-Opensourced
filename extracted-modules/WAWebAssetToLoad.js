__d("WAWebAssetToLoad", [], function(t, n, r, o, a, i) {
    const e = (()=>{
        function e(e, t, n) {
            this.retryCount = 0;
            this.asset = e;
            this.resolution = t;
            this.priority = n;
        }
        const t = e.prototype;
        t.getLoadUrlPromise = function() {
            return this.$3;
        };
        t.setLoadUrlPromise = function(t, n) {
            this.$3 = t;
            this.$5 = n;
        };
        t.abortLoadUrlPromise = function() {
            this.$5?.abort();
        };
        t.getConsumerPromise = function() {
            return this.$1;
        };
        t.setConsumerPromise = function(t) {
            this.$1 = t;
        };
        t.getConsumerPromiseResolve = function() {
            return this.$2;
        };
        t.setConsumerPromiseResolve = function(t, n) {
            this.$2 = t;
            this.$4 = n;
        };
        t.abortConsumerPromise = function() {
            this.$4?.abort();
        };
        return e;
    })();
    i.default = e;
}, 66);