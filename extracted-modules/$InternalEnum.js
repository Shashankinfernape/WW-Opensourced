__d("$InternalEnum", [], function(t, n, r, o, a, i) {
    "use strict";
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const l = typeof WeakMap === "function" ? new WeakMap : new Map;
    function s(e) {
        const t = l.get(e);
        if (t !== undefined) {
            return t;
        }
        const n = new Map;
        Object.getOwnPropertyNames(e).forEach((t)=>{
            n.set(e[t], t);
        });
        try {
            l.set(e, n);
        } catch (e) {}
        return n;
    }
    const u = Object.freeze(Object.defineProperties(Object.create(null), {
        isValid: {
            value: function(t) {
                return s(this).has(t);
            }
        },
        cast: {
            value: function(t) {
                if (this.isValid(t)) {
                    return t;
                }
            }
        },
        members: {
            value: function() {
                return s(this).keys();
            }
        },
        getName: {
            value: function(t) {
                return s(this).get(t);
            }
        }
    }));
    function c(t) {
        const n = Object.create(u);
        for(const r in t){
            if (hasOwnProperty.call(t, r)) {
                Object.defineProperty(n, r, {
                    value: t[r]
                });
            }
        }
        return Object.freeze(n);
    }
    const d = Object.freeze(Object.defineProperties(Object.create(null), {
        isValid: {
            value: function(n) {
                if (typeof n === "string") {
                    return hasOwnProperty.call(this, n);
                }
                return false;
            }
        },
        cast: {
            value: u.cast
        },
        members: {
            value: function() {
                return Object.getOwnPropertyNames(this).values();
            }
        },
        getName: {
            value: function(t) {
                return t;
            }
        }
    }));
    c.Mirrored = function(t) {
        const e = Object.create(d);
        for(let n = 0, r = t.length; n < r; ++n){
            Object.defineProperty(e, t[n], {
                value: t[n]
            });
        }
        return Object.freeze(e);
    };
    Object.freeze(c.Mirrored);
    a.exports = Object.freeze(c);
}, null);