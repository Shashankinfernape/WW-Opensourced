__d("WAWebDummyCacheMap", [], function(t, n, r, o, a, i) {
    const e = (()=>{
        function e() {
            this.size = 0;
        }
        const t = e.prototype;
        t.clear = function() {};
        t.delete = function() {
            return false;
        };
        t.get = function() {};
        t.has = function() {
            return false;
        };
        t.set = function() {
            return this;
        };
        return e;
    })();
    i.FakeCacheMap = e;
}, 66);