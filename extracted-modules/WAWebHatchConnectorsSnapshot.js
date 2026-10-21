__d("WAWebHatchConnectorsSnapshot", [
    "WAWebHatchLinkedStatusManager"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(){
            this.$1 = null;
            this.$2 = null;
            this.$3 = [];
        }
        getSnapshot() {
            return this.$1;
        }
        getChannelFbid() {
            return this.$2;
        }
        replace(t) {
            this.$1 = t;
            this.$2 = r("WAWebHatchLinkedStatusManager").getLinkedStatus()?.channelFbid ?? null;
            for (const o of [].concat(this.$3)){
                o();
            }
        }
        subscribe(t) {
            const e = this;
            this.$3.push(t);
            return function() {
                e.$3 = e.$3.filter((e)=>e !== t);
            };
        }
        __resetForTesting() {
            this.$1 = null;
            this.$2 = null;
            this.$3 = [];
        }
    }
    const s = new e;
    l.default = s;
}, 98);