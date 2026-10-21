__d("Queue", [], function(t, n, r, o, a, i) {
    const e = {};
    const l = (()=>{
        function t(e) {
            this.$3 = null;
            this.$5 = e?.interval || 0;
            this.$4 = e?.processor;
            this.$1 = [];
            this.$2 = true;
        }
        const t_prototype = t.prototype;
        t_prototype.$6 = function(t = false) {
            const e = this;
            if (!(this.$2 || this.$1.length === 0)) {
                const n = this.$4;
                if (n == null) {
                    this.$2 = true;
                    const r = new Error("No processor available");
                    r.stack;
                    throw r;
                }
                const o = this.$5;
                if (o != null) {
                    n.call(this, this.$1.shift());
                    this.$3 = window.setTimeout(function() {
                        return e.$6();
                    }, o);
                } else {
                    while(this.$1.length){
                        n.call(this, this.$1.shift());
                    }
                }
            }
        };
        t_prototype.enqueue = function(t) {
            if (this.$4 && !this.$2) {
                this.$4(t);
            } else {
                this.$1.push(t);
            }
            return this;
        };
        t_prototype.start = function(t) {
            if (t) {
                this.$4 = t;
            }
            this.$2 = false;
            this.$6();
            return this;
        };
        t_prototype.isStarted = function() {
            return !this.$2;
        };
        t_prototype.dispatch = function() {
            this.$6(true);
        };
        t_prototype.stop = function(t) {
            this.$2 = true;
            if (t && this.$3 != null) {
                window.clearTimeout(this.$3);
            }
            return this;
        };
        t_prototype.merge = function(t, n) {
            if (n) {
                this.$1.unshift(...t.$1);
            } else {
                this.$1.push(...t.$1);
            }
            t.$1 = [];
            this.$6();
            return this;
        };
        t_prototype.getLength = function() {
            return this.$1.length;
        };
        t.get = function(r, o) {
            let n;
            if (r in e) {
                n = e[r];
            } else {
                n = e[r] = new t(o);
            }
            return n;
        };
        t.exists = function(n) {
            return n in e;
        };
        t.remove = function(n) {
            return delete e[n];
        };
        return t;
    })();
    i.default = l;
}, 66);