__d("WAWebUIListener", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return e instanceof r("WAWebEventEmitter") || typeof e.on === "function" && typeof e.off === "function";
    }
    const s = (()=>{
        function t(e, t, n, r, o) {
            this.$2 = false;
            this.$3 = false;
            this.source = e;
            this.cb = n;
            this.opts = r;
            this.$1 = o;
            this.event = t;
        }
        const n = t.prototype;
        n.engage = function() {
            if (!(this.$2 || this.$3)) {
                this.$2 = true;
                const t = this.source;
                const n = this.event;
                if (e(t)) {
                    t.on(n, this.cb);
                    if (typeof t.incObservers === "function") {
                        t.incObservers();
                    }
                } else if (this.opts) {
                    t.addEventListener(n, this.cb, this.opts);
                } else {
                    t.addEventListener(n, this.cb);
                }
            }
        };
        n.disengage = function() {
            if (!this.$3 && (this.$3 = true, !!this.$2)) {
                const t = this.source;
                const n = this.event;
                if (e(t)) {
                    t.off(this.event, this.cb);
                    if (typeof t.decObservers === "function") {
                        t.decObservers();
                    }
                } else if (this.opts) {
                    t.removeEventListener(n, this.cb, this.opts);
                } else {
                    t.removeEventListener(n, this.cb);
                }
            }
        };
        n.represents = function(t, n, r, o) {
            if (this.source !== t || this.event !== n || this.$1 !== r) {
                return false;
            }
            const a = o ?? {};
            const i = a.capture;
            const l = i === void 0 ? false : i;
            const s = a.once;
            const u = s === void 0 ? false : s;
            const c = a.passive;
            const d = c === void 0 ? false : c;
            const m = this.opts ?? {};
            const p = m.capture;
            const _ = p === void 0 ? false : p;
            const f = m.once;
            const g = f === void 0 ? false : f;
            const h = m.passive;
            const y = h === void 0 ? false : h;
            return l === _ && u === g && d === y;
        };
        return t;
    })();
    l.isEventsType = e;
    l.Listener = s;
}, 98);