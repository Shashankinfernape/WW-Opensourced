__d("WAWebIdleTaskRunner", [
    "$InternalEnum",
    "WAShiftTimer",
    "WAWebPonyfillsIdleCallback"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "IDLE_CALLBACK",
        "UI_BUSY"
    ]);
    const s = 1000;
    const u = (()=>{
        function t(t) {
            const n = this;
            this.busyMap = new Map;
            this.busyId = 0;
            this.$1 = function() {
                n.busyMap.clear();
            };
            this.$2 = new Map;
            this.taskId = 0;
            this.runIdleLoop = function() {
                if (n.idleType === e.IDLE_CALLBACK) {
                    n.idleCallbackId = o("WAWebPonyfillsIdleCallback").requestIdleCallback(n.$3);
                } else if (n.isIdle()) {
                    n.$4();
                }
            };
            this.$3 = function(e) {
                for(let t, r = n.$2.entries(); (t = r.next()) && !t.done;){
                    const o = t.value;
                    const a = o[0];
                    const i = o[1];
                    i();
                    n.$2.delete(a);
                    if (e.timeRemaining() <= 0) {
                        break;
                    }
                }
                if (n.$2.size > 0) {
                    n.runIdleLoop();
                }
            };
            this.idleType = t;
        }
        const n = t.prototype;
        n.setBusy = function(t) {
            let e = t;
            const n = e != null ? this.busyMap.get(e) : null;
            if (e != null && n != null) {
                this.busyMap.set(e, n + 1);
            } else {
                e = ++this.busyId;
                this.busyMap.set(e, 1);
            }
            if (!this.busyTimer) {
                this.busyTimer = new (o("WAShiftTimer")).ShiftTimer(this.$1);
            }
            this.busyTimer.debounce(s);
            return e;
        };
        n.decBusy = function(t) {
            if (t != null) {
                const e = this.busyMap.get(t);
                if (!(e == null || e === 0)) {
                    if (e === 1) {
                        this.clearBusy(t);
                    } else {
                        this.busyMap.set(t, e - 1);
                    }
                }
            }
        };
        n.clearBusy = function(t) {
            const e = this.busyMap.get(t);
            if (e != null) {
                this.busyMap.delete(t);
            }
            if (this.isIdle()) {
                this.busyTimer.cancel();
                if (this.$2.size > 0) {
                    self.setTimeout(this.runIdleLoop, 0);
                }
            }
        };
        n.isIdle = function() {
            return this.busyMap.size === 0;
        };
        n.isBusy = function() {
            return this.busyMap.size > 0;
        };
        n.cancelIdleLoop = function() {
            if (this.idleType === e.IDLE_CALLBACK && this.idleCallbackId != null) {
                o("WAWebPonyfillsIdleCallback").cancelIdleCallback(this.idleCallbackId);
            }
        };
        n.$4 = function() {
            for(let e, t = this.$2.entries(); (e = t.next()) && !e.done;){
                const n = e.value;
                const r = n[0];
                const o = n[1];
                o();
                this.$2.delete(r);
                if (this.isBusy()) {
                    break;
                }
            }
        };
        n.enqueue = function(t) {
            this.$2.set(++this.taskId, t);
            if (this.$2.size === 1) {
                this.runIdleLoop();
            }
            return this.taskId;
        };
        n.dequeue = function(t) {
            const e = this.$2.delete(t);
            if (e && this.$2.size === 0) {
                this.cancelIdleLoop();
            }
            return e;
        };
        n.isInQueue = function(t) {
            return this.$2.has(t);
        };
        return t;
    })();
    const c = new u(e.UI_BUSY);
    const d = new u(e.IDLE_CALLBACK);
    l.UIBusyTasks = c;
    l.IdleCallbackTasks = d;
}, 98);