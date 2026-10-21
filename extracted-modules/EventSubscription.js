__d("EventSubscription", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = function(t) {
        const e = this;
        this.remove = function() {
            if (e.subscriber) {
                e.subscriber.removeSubscription(e);
                e.subscriber = null;
            }
        };
        this.subscriber = t;
    };
    i.default = e;
}, 66);