__d("LexicalExtensionSignals.prod", [], function $module_LexicalExtensionSignals_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    const SYMBOL_PREACT_SIGNALS = Symbol.for("preact-signals");
    function i() {
        if (h > 1) {
            return void h--;
        }
        let t;
        let i = false;
        for((()=>{
            let t = o_1;
            for(o_1 = undefined; t !== undefined;){
                const _i = t.S;
                if (_i.v === t.v) {
                    for(let _o = _i.t; _o !== undefined; _o = _o.x){
                        if (_o.i === t.i) {
                            _o.i = _i.i;
                        }
                    }
                }
                t = t.o;
            }
        })(); s !== undefined;){
            let _o2 = s;
            s = undefined;
            f++;
            while(_o2 !== undefined){
                const _n = _o2.u;
                _o2.u = undefined;
                _o2.f &= -3;
                if (!(8 & _o2.f) && l(_o2)) {
                    try {
                        _o2.c();
                    } catch (error) {
                        if (!i) {
                            t = error;
                            i = true;
                        }
                    }
                }
                _o2 = _n;
            }
        }
        f = 0;
        h--;
        if (i) {
            throw t;
        }
    }
    let o;
    let n;
    var s;
    function r(t) {
        const i = o;
        const s = n;
        o = undefined;
        n = undefined;
        try {
            return t();
        } finally{
            o = i;
            n = s;
        }
    }
    var o_1;
    var h = 0;
    var f = 0;
    let c = 0;
    let u = 0;
    let v = 0;
    function d(t) {
        if (o === undefined) {
            return;
        }
        let i = t.n;
        if (i === undefined || i.t !== o) {
            i = {
                i: 0,
                S: t,
                p: o.s,
                n: undefined,
                t: o,
                e: undefined,
                x: undefined,
                r: i
            };
            if (o.s !== undefined) {
                o.s.n = i;
            }
            o.s = i;
            t.n = i;
            if (32 & o.f) {
                t.S(i);
            }
            return i;
        }
        if (i.i === -1) {
            i.i = 0;
            if (i.n !== undefined) {
                i.n.p = i.p;
                if (i.p !== undefined) {
                    i.p.n = i.n;
                }
                i.p = o.s;
                i.n = undefined;
                o.s.n = i;
                o.s = i;
            }
            return i;
        }
    }
    function p(t, i) {
        this.v = t;
        this.i = 0;
        this.n = undefined;
        this.t = undefined;
        this.l = 0;
        this.W = i?.watched;
        this.Z = i?.unwatched;
        this.name = i?.name;
    }
    function l(t) {
        for(let _i2 = t.s; _i2 !== undefined; _i2 = _i2.n){
            if (_i2.S.i !== _i2.i || !_i2.S.h() || _i2.S.i !== _i2.i) {
                return true;
            }
        }
        return false;
    }
    function y(t) {
        for(let _i3 = t.s; _i3 !== undefined; _i3 = _i3.n){
            const _o3 = _i3.S.n;
            if (_o3 !== undefined) {
                _i3.r = _o3;
            }
            _i3.S.n = _i3;
            _i3.i = -1;
            if (_i3.n === undefined) {
                t.s = _i3;
                break;
            }
        }
    }
    function a(t) {
        let i;
        let o = t.s;
        while(o !== undefined){
            const _t = o.p;
            if (o.i === -1) {
                o.S.U(o);
                if (_t !== undefined) {
                    _t.n = o.n;
                }
                if (o.n !== undefined) {
                    o.n.p = _t;
                }
            } else {
                i = o;
            }
            o.S.n = o.r;
            if (o.r !== undefined) {
                o.r = undefined;
            }
            o = _t;
        }
        t.s = i;
    }
    function S(t, i) {
        p.call(this, undefined, i);
        this.x = t;
        this.s = undefined;
        this.g = v - 1;
        this.f = 4;
    }
    function x(t) {
        const n = t.m;
        t.m = undefined;
        if (typeof n === "function") {
            h++;
            const _s = o;
            o = undefined;
            try {
                n();
            } catch (error) {
                t.f &= -2;
                t.f |= 8;
                w(t);
                throw error;
            } finally{
                o = _s;
                i();
            }
        }
    }
    function w(t) {
        for(let _i4 = t.s; _i4 !== undefined; _i4 = _i4.n){
            _i4.S.U(_i4);
        }
        t.x = undefined;
        t.s = undefined;
        x(t);
    }
    function b(t) {
        if (o !== this) {
            throw new Error("Out-of-order effect");
        }
        a(this);
        o = t;
        this.f &= -2;
        if (8 & this.f) {
            w(this);
        }
        i();
    }
    class m {
        constructor(t, i){
            this.x = t;
            this.m = undefined;
            this.s = undefined;
            this.u = undefined;
            this.f = 32;
            this.name = i?.name;
            if (n) {
                n.push(this);
            }
        }
        c() {
            const t = this.S();
            try {
                if (8 & this.f) {
                    return;
                }
                if (this.x === undefined) {
                    return;
                }
                const _t7 = this.x();
                if (typeof _t7 === "function") {
                    this.m = _t7;
                }
            } finally{
                t();
            }
        }
        S() {
            if (1 & this.f) {
                throw new Error("Cycle detected");
            }
            this.f |= 1;
            this.f &= -9;
            x(this);
            y(this);
            h++;
            const t = o;
            o = this;
            return b.bind(this, t);
        }
        N() {
            if (!(2 & this.f)) {
                this.f |= 2;
                this.u = s;
                s = this;
            }
        }
        d() {
            this.f |= 8;
            if (!(1 & this.f)) {
                w(this);
            }
        }
        dispose() {
            this.d();
        }
    }
    function g(t, i) {
        const o = new m(t, i);
        try {
            o.c();
        } catch (error) {
            o.d();
            throw error;
        }
        const n = o.d.bind(o);
        n[typeof Symbol === "function" ? Symbol.dispose : "@@dispose"] = n;
        return n;
    }
    p.prototype.brand = SYMBOL_PREACT_SIGNALS;
    p.prototype.h = function() {
        return true;
    };
    p.prototype.S = function(t) {
        const _this = this;
        const i = this.t;
        if (i !== t && t.e === undefined) {
            t.x = i;
            this.t = t;
            if (i !== undefined) {
                i.e = t;
            } else {
                r(()=>{
                    _this.W?.();
                });
            }
        }
    };
    p.prototype.U = function(t) {
        const _this2 = this;
        if (this.t !== undefined) {
            const { e, x } = t;
            if (e !== undefined) {
                e.x = x;
                t.e = undefined;
            }
            if (x !== undefined) {
                x.e = e;
                t.x = undefined;
            }
            if (t === this.t) {
                this.t = x;
                if (x === undefined) {
                    r(()=>{
                        _this2.Z?.();
                    });
                }
            }
        }
    };
    p.prototype.subscribe = function(t) {
        const _this3 = this;
        return g(function() {
            const _this3_value = _this3.value;
            r(()=>t(_this3_value));
        }, {
            name: "sub"
        });
    };
    p.prototype.valueOf = function() {
        return this.value;
    };
    p.prototype.toString = function() {
        return `${this.value}`;
    };
    p.prototype.toJSON = function() {
        return this.value;
    };
    p.prototype.peek = function() {
        const _this4 = this;
        return r(()=>_this4.value);
    };
    Object.defineProperty(p.prototype, "value", {
        get: function get() {
            const t = d(this);
            if (t !== undefined) {
                t.i = this.i;
            }
            return this.v;
        },
        set: function set(t) {
            if (t !== this.v) {
                if (f > 100) {
                    throw new Error("Cycle detected");
                }
                ((t)=>{
                    if (h !== 0 && f === 0 && t.l !== u) {
                        t.l = u;
                        o_1 = {
                            S: t,
                            v: t.v,
                            i: t.i,
                            o: o_1
                        };
                    }
                })(this);
                this.v = t;
                this.i++;
                v++;
                h++;
                try {
                    for(let _t2 = this.t; _t2 !== undefined; _t2 = _t2.x){
                        _t2.t.N();
                    }
                } finally{
                    i();
                }
            }
        }
    });
    S.prototype = new p();
    S.prototype.h = function() {
        this.f &= -3;
        if (1 & this.f) {
            return false;
        }
        if ((36 & this.f) == 32) {
            return true;
        }
        this.f &= -5;
        if (this.g === v) {
            return true;
        }
        this.g = v;
        this.f |= 1;
        if (this.i > 0 && !l(this)) {
            this.f &= -2;
            return true;
        }
        const t = o;
        try {
            y(this);
            o = this;
            const _t3 = this.x();
            if (16 & this.f || this.v !== _t3 || this.i === 0) {
                this.v = _t3;
                this.f &= -17;
                this.i++;
            }
        } catch (error) {
            this.v = error;
            this.f |= 16;
            this.i++;
        }
        o = t;
        a(this);
        this.f &= -2;
        return true;
    };
    S.prototype.S = function(t) {
        if (this.t === undefined) {
            this.f |= 36;
            for(let _t4 = this.s; _t4 !== undefined; _t4 = _t4.n){
                _t4.S.S(_t4);
            }
        }
        p.prototype.S.call(this, t);
    };
    S.prototype.U = function(t) {
        if (this.t !== undefined && (p.prototype.U.call(this, t), this.t === undefined)) {
            this.f &= -33;
            for(let _t5 = this.s; _t5 !== undefined; _t5 = _t5.n){
                _t5.S.U(_t5);
            }
        }
    };
    S.prototype.N = function() {
        if (!(2 & this.f)) {
            this.f |= 6;
            for(let _t6 = this.t; _t6 !== undefined; _t6 = _t6.x){
                _t6.t.N();
            }
        }
    };
    Object.defineProperty(S.prototype, "value", {
        get: function get() {
            if (1 & this.f) {
                throw new Error("Cycle detected");
            }
            const t = d(this);
            this.h();
            if (t !== undefined) {
                t.i = this.i;
            }
            if (16 & this.f) {
                throw this.v;
            }
            return this.v;
        }
    });
    exports.batch = function(t) {
        if (h > 0) {
            return t();
        }
        u = ++c;
        h++;
        try {
            return t();
        } finally{
            i();
        }
    };
    exports.computed = function(t, i) {
        return new S(t, i);
    };
    exports.effect = g;
    exports.signal = function(t, i) {
        return new p(t, i);
    };
    exports.untracked = r;
}, null);