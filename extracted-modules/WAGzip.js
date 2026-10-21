__d("WAGzip", [
    "Promise",
    "err",
    "fflate"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t) || this;
            n.$GzipWrapper$p_2 = [];
            n.ondata = function(e, t) {
                n.$GzipWrapper$p_2.push(e);
                if (t) {
                    let r = 0;
                    n.$GzipWrapper$p_2.forEach((e)=>{
                        r += e.length;
                    });
                    const o = new Uint8Array(r);
                    let a = 0;
                    n.$GzipWrapper$p_2.forEach((e)=>{
                        o.set(e, a);
                        a += e.length;
                    });
                    n.$GzipWrapper$p_1 = o;
                }
            };
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.push = function(n, a) {
            if (this.$GzipWrapper$p_1 != null) {
                throw r("err")("Tried to push chunk to compressor after final block");
            }
            if (n instanceof Uint8Array) {
                e.prototype.push.call(this, n, a);
            } else if (n instanceof ArrayBuffer) {
                e.prototype.push.call(this, new Uint8Array(n), a);
            } else {
                e.prototype.push.call(this, o("fflate").strToU8(n), a);
            }
        };
        n.result = function() {
            if (this.$GzipWrapper$p_1 == null) {
                throw r("err")("Tried to access result before adding final block");
            }
            return this.$GzipWrapper$p_1;
        };
        return t;
    })(o("fflate").Gzip);
    function u(e = {}) {
        return new s(e);
    }
    function c(e) {
        return o("fflate").decompressSync(e);
    }
    function d(t) {
        return (e || (e = n("Promise"))).resolve(c(t));
    }
    l.GzipWrapper = s;
    l.createDeflate = u;
    l.inflate = c;
    l.gzipInflate = d;
}, 98);