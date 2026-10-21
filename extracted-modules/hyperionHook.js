__d("hyperionHook", [], function(t, n, r, o, a, i) {
    const e = function() {};
    class l {
        constructor(){
            this.call = e;
        }
        hasCallback(n) {
            if (this.$1) {
                const t = this.$1;
                return t.length > 0 && (!n || t.some((e)=>e === n || e.$2 === n));
            } else {
                if (n) {
                    return this.call === n;
                }
                return this.call !== e;
            }
        }
        createMultiCallbackCall(t) {
            const e = function() {
                const e = t;
                for(let n = 0, r = e.length; n < r; ++n){
                    e[n].apply(this, arguments);
                }
            };
            return e;
        }
        add(n, r) {
            let t = n;
            if (r) {
                const o = this;
                const a = function() {
                    o.remove(a);
                    return n.apply(this, arguments);
                };
                a.$2 = n;
                t = a;
            }
            if (this.call === e) {
                this.call = t;
            } else if (this.$1) {
                this.$1.push(t);
            } else {
                this.$1 = [
                    this.call,
                    t
                ];
                this.call = this.createMultiCallbackCall(this.$1);
            }
            return n;
        }
        remove(t) {
            return this.removeIf(function(e) {
                return e === t;
            });
        }
        removeIf(n) {
            if (this.$1) {
                const t = this.$1.filter((e)=>!n(e));
                const r = this.$1.length > t.length;
                if (r) {
                    this.$1 = t;
                    this.call = this.createMultiCallbackCall(this.$1);
                }
                return r;
            } else {
                if (n(this.call)) {
                    this.call = e;
                    return true;
                }
                return false;
            }
        }
        clear() {
            if (this.call === e || !this.$1) {
                this.call = e;
            } else {
                this.$1.length = 0;
            }
        }
    }
    i.Hook = l;
}, 66);