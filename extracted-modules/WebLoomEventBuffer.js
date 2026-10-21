__d("WebLoomEventBuffer", [
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        constructor(){
            this.$1 = [];
        }
        addEvent(n, o) {
            this.$1.push({
                event: n,
                timestamp: o ?? (e || (e = r("performanceNow")))()
            });
        }
        flushEvents() {
            return this.$1;
        }
    }
    l.WebLoomEventBuffer = s;
}, 98);