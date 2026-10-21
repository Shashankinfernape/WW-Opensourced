__d("EventHolder", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    class e {
        constructor(){
            this.$1 = {};
            this.$2 = [];
        }
        holdEvent(t, ...o) {
            this.$1[t] = this.$1[t] || [];
            const e = this.$1[t];
            const n = {
                eventType: t,
                index: e.length
            };
            e.push(o);
            return n;
        }
        emitToListener(t, n, r) {
            const e = this;
            const o = this.$1[t];
            if (o) {
                o.forEach((o, index)=>{
                    if (o) {
                        e.$2.push({
                            eventType: t,
                            index
                        });
                        n.apply(r, o);
                        e.$2.pop();
                    }
                });
            }
        }
        releaseCurrentEvent() {
            if (!this.$2.length) {
                s(0, 1764);
            }
            this.releaseEvent(this.$2[this.$2.length - 1]);
        }
        releaseEvent(t) {
            delete this.$1[t.eventType][t.index];
        }
        releaseEventType(t) {
            this.$1[t] = [];
        }
    }
    l.default = e;
}, 98);