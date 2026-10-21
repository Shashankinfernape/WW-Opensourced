__d("EventSubscriptionVendor", [
    "invariant"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(){
            this.$1 = {};
        }
        addSubscription(t, n) {
            if (n.subscriber !== this) {
                l(0, 2828);
            }
            if (!this.$1[t]) {
                this.$1[t] = [];
            }
            const length = this.$1[t].length;
            this.$1[t].push(n);
            n.eventType = t;
            n.key = length;
            return n;
        }
        removeAllSubscriptions(t) {
            if (t === undefined) {
                this.$1 = {};
            } else {
                delete this.$1[t];
            }
        }
        removeSubscription({ eventType, key }) {
            const r = this.$1[eventType];
            if (r) {
                delete r[key];
            }
        }
        getSubscriptionsForType(t) {
            return this.$1[t];
        }
    }
    a.exports = e;
}, null);