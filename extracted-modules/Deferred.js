__d("Deferred", [
    "Promise"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    (e || (e = n("Promise"))).resolve();
    class l {
        constructor(t){
            var r = this;
            var o = t || e || (e = n("Promise"));
            this.$1 = false;
            this.$2 = new o(function(e, t) {
                r.$3 = e;
                r.$4 = t;
            });
        }
        getPromise() {
            return this.$2;
        }
        resolve(t) {
            this.$1 = true;
            this.$3(t);
        }
        reject(t) {
            this.$1 = true;
            this.$4(t);
        }
        isSettled() {
            return this.$1;
        }
    }
    i.default = l;
}, 66);