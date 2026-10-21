__d("object-assign-4.1.1", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        exports: e
    };
    function s() {
        const e = Object.getOwnPropertySymbols;
        const t = Object.prototype.hasOwnProperty;
        const n = Object.prototype.propertyIsEnumerable;
        function r(e) {
            if (e == null) {
                throw new TypeError("Object.assign cannot be called with null or undefined");
            }
            return Object(e);
        }
        function o() {
            try {
                if (!Object.assign) {
                    return false;
                }
                const e = new String("abc");
                e[5] = "de";
                if (Object.getOwnPropertyNames(e)[0] === "5") {
                    return false;
                }
                const t = {};
                for(let n = 0; n < 10; n++){
                    t[`_${String.fromCharCode(n)}`] = n;
                }
                const r = Object.getOwnPropertyNames(t).map((e)=>t[e]);
                if (r.join("") !== "0123456789") {
                    return false;
                }
                const o = {};
                "abcdefghijklmnopqrst".split("").forEach((e)=>{
                    o[e] = e;
                });
                return Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst";
            } catch (e) {
                return false;
            }
        }
        l.exports = o() ? Object.assign : function(o, a) {
            let i;
            const l = r(o);
            let s;
            for(let u = 1; u < arguments.length; u++){
                i = Object(arguments[u]);
                for(const c in i){
                    if (t.call(i, c)) {
                        l[c] = i[c];
                    }
                }
                if (e) {
                    s = e(i);
                    for(let d = 0; d < s.length; d++){
                        if (n.call(i, s[d])) {
                            l[s[d]] = i[s[d]];
                        }
                    }
                }
            }
            return l;
        };
    }
    let u = false;
    function c() {
        if (!u) {
            u = true;
            s();
        }
        return l.exports;
    }
    function d(e) {
        switch(e){
            case void 0:
                return c();
        }
    }
    a.exports = d;
}, null);