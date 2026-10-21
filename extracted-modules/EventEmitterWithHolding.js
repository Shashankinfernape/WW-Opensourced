__d("EventEmitterWithHolding", [], function(t, n, r, o, a, i) {
    "use strict";
    class e {
        constructor(e, t){
            this.$2 = e;
            this.$3 = t;
            this.$1 = null;
            this.$5 = [];
            this.$4 = 0;
        }
        addListener(t, n, r) {
            return this.$2.addListener(t, n, r);
        }
        once(t, n, r) {
            return this.$2.once(t, n, r);
        }
        addRetroactiveListener(t, n, r) {
            const e = this.$2.addListener(t, n, r);
            const o = this.$5;
            o.push(false);
            this.$4++;
            this.$3.emitToListener(t, n, r);
            this.$4--;
            if (o[o.length - 1]) {
                e.remove();
            }
            o.pop();
            return e;
        }
        removeAllListeners(t) {
            this.$2.removeAllListeners(t);
        }
        removeCurrentListener() {
            if (this.$4) {
                const e = this.$5;
                e[e.length - 1] = true;
            } else {
                this.$2.removeCurrentListener();
            }
        }
        listeners(t) {
            return this.$2.listeners(t);
        }
        emit(t, ...r) {
            this.$2.emit(t, ...r);
        }
        emitAndHold(t, ...o) {
            this.$1 = this.$3.holdEvent(t, ...o);
            this.$2.emit(t, ...o);
            this.$1 = null;
        }
        releaseCurrentEvent() {
            if (this.$1 != null) {
                this.$3.releaseEvent(this.$1);
            } else if (this.$4 > 0) {
                this.$3.releaseCurrentEvent();
            }
        }
        releaseHeldEventType(t) {
            this.$3.releaseEventType(t);
        }
    }
    i.default = e;
}, 66);