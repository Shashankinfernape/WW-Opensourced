__d("ArbiterToken", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    class e {
        constructor(e, t){
            this.unsubscribe = function() {
                for(let e = 0; e < this.$2.length; e++){
                    this.$2[e].remove();
                }
                this.$2.length = 0;
            };
            this.$1 = e;
            this.$2 = t;
        }
        isForArbiterInstance(t) {
            if (!this.$1) {
                s(0, 2506);
            }
            return this.$1 === t;
        }
    }
    l.default = e;
}, 98);