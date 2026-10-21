__d("WAProtoCompile", [
    "WAProtoConst"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = function(t, n, r, o, a, i, l, s, u) {
        this.names = t;
        this.fields = n;
        this.types = r;
        this.defaults = o;
        this.meta = a;
        this.oneofToFields = i;
        this.fieldToOneof = l;
        this.reservedTags = s ? s.reduce((e, t)=>{
            e[t] = true;
            return e;
        }, {}) : {};
        this.reservedFields = u ? u.reduce((e, t)=>{
            e[t] = true;
            return e;
        }, {}) : {};
    };
    function s(t) {
        if (t.internalCompiledSpec) {
            return t.internalCompiledSpec;
        }
        const n = t.internalSpec;
        if (!n) {
            const r = new Error(`Message Class ${String(t)} does not have internalSpec`);
            r.stack;
            throw r;
        }
        const a = t.internalDefaults || {};
        const i = Object.keys(n).filter((e)=>e !== o("WAProtoConst").KEYS.ONEOF);
        const l = new Array(i.length);
        const s = [];
        const c = [];
        const d = new Array(i.length);
        const m = n[o("WAProtoConst").KEYS.ONEOF] || {};
        i.sort((e, t)=>{
            const r = u(n, e);
            const o = u(n, t);
            return r[0] - o[0];
        });
        for(let p = 0; p < i.length; p++){
            const _ = i[p];
            const f = u(n, _);
            d[p] = a[_];
            const g = f[1];
            const h = f[0];
            s.push(h);
            c.push(g);
            if ((g & o("WAProtoConst").TYPE_MASK) === o("WAProtoConst").TYPES.MESSAGE) {
                l[p] = f[2];
            } else if ((g & o("WAProtoConst").TYPE_MASK) === o("WAProtoConst").TYPES.ENUM) {
                const y = f[2];
                if (typeof y.cast === "function") {
                    l[p] = y;
                } else {
                    let C = true;
                    let b = 0;
                    for(const v in y){
                        if (C && v !== b++) {
                            C = false;
                        }
                    }
                    let S = void 0;
                    if (C) {
                        S = [];
                        for(let R = 0; R < b; R++){
                            S.push(true);
                        }
                    } else {
                        S = {};
                        for(const L in y){
                            S[y[L]] = true;
                        }
                    }
                    l[p] = S;
                }
            } else if ((g & o("WAProtoConst").TYPE_MASK) === o("WAProtoConst").TYPES.MAP) {
                if (f.length !== 3) {
                    const E = new Error(`Map field ${_} should have exactly three elements in its internalSpec`);
                    E.stack;
                    throw E;
                }
                l[p] = f[2];
            } else {
                l[p] = null;
            }
        }
        const k = {};
        const I = function(t) {
            m[t].forEach((e)=>{
                if (!k[e]) {
                    k[e] = [];
                }
                k[e].push(t);
            });
        };
        for(const T in m){
            I(T);
        }
        const D = n[o("WAProtoConst").KEYS.RESERVED] && n[o("WAProtoConst").KEYS.RESERVED][o("WAProtoConst").KEYS.RESERVED_TAGS];
        const x = n[o("WAProtoConst").KEYS.RESERVED] && n[o("WAProtoConst").KEYS.RESERVED][o("WAProtoConst").KEYS.RESERVED_FIELDS];
        const $ = new e(i, s, c, d, l, m, k, D, x);
        t.internalCompiledSpec = $;
        return $;
    }
    function u(e, t) {
        const n = e[t];
        if (n == null) {
            const r = new Error(`fieldData of ${t} is missing`);
            r.stack;
            throw r;
        }
        return n;
    }
    l.Spec = e;
    l.compileSpec = s;
}, 98);