__d("WAWebChatEphemeralExemptionCache", [], function(t, n, r, o, a, i) {
    const e = (()=>{
        function e() {
            this.chatEphemeralExemptionMap = new Map;
        }
        const t = e.prototype;
        t.has = function(t) {
            return this.chatEphemeralExemptionMap.has(t);
        };
        t.get = function(t) {
            return this.chatEphemeralExemptionMap.get(t) ?? null;
        };
        t.add = function(t, n) {
            this.chatEphemeralExemptionMap.set(t, n);
        };
        t.clear = function() {
            this.chatEphemeralExemptionMap.clear();
        };
        return e;
    })();
    const l = new e;
    i.default = l;
}, 66);