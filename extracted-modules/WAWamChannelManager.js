__d("WAWamChannelManager", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        function e() {
            this.$1 = new Map;
            this.$2 = new Map;
        }
        const t = e.prototype;
        t.getChannelInitialized = function(t) {
            return this.$2.get(t) || false;
        };
        t.setChannelInitialized = function(t) {
            this.$2.set(t, true);
        };
        t.isSinkBusy = function(t) {
            return this.$1.get(t) || false;
        };
        t.setSinkBusy = function(t, n) {
            this.$1.set(t, n);
        };
        t.close = function() {
            const e = this;
            this.$1.forEach((t, n)=>{
                e.$1.set(n, false);
            });
            this.$2.forEach((t, n)=>{
                e.$2.set(n, false);
            });
        };
        return e;
    })();
    let l;
    function s() {
        if (l == null) {
            l = new e;
        }
        return l;
    }
    function u() {
        if (l != null) {
            l.close();
        }
    }
    i.getChannelManager = s;
    i.closeChannelManager = u;
}, 66);