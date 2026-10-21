__d("SimpleHook", [], function(t, n, r, o, a, i) {
    "use strict";
    class e {
        constructor(){
            this.__callbacks = [];
            this.call = this.$2;
        }
        hasCallback(t) {
            const __callbacks = this.__callbacks;
            return __callbacks.length > 0 && (t == null || __callbacks.some((e)=>e === t || e.$1 === t));
        }
        add(t, n) {
            const e = this;
            let r;
            if (n?.once === true) {
                const o = function() {
                    e.remove(r);
                    t(...arguments);
                };
                o.$1 = t;
                r = o;
            } else {
                r = t;
            }
            this.__callbacks.push(r);
            return r;
        }
        removeLast() {
            return this.__callbacks.pop();
        }
        remove(t) {
            return this.removeIf(function(e) {
                return e === t;
            });
        }
        removeIf(t) {
            const __callbacks = this.__callbacks;
            this.__callbacks = __callbacks.filter((e)=>!t(e));
            return __callbacks.length > this.__callbacks.length;
        }
        clear() {
            this.__callbacks = [];
        }
        $2() {
            const __callbacks = this.__callbacks;
            for(let t = 0, n = __callbacks.length; t < n; ++t){
                const __callback = __callbacks[t];
                __callback(...arguments);
            }
        }
    }
    i.SimpleHook = e;
}, 66);