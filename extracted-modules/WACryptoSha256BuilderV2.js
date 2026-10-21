__d("WACryptoSha256BuilderV2", [
    "WABinary"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
    ];
    const s = 64;
    const u = 4;
    const c = Math.pow(2, u * 8);
    const d = (()=>{
        function t() {
            this.h0 = 0;
            this.h1 = 0;
            this.h2 = 0;
            this.h3 = 0;
            this.h4 = 0;
            this.h5 = 0;
            this.h6 = 0;
            this.h7 = 0;
            this.tail = new Uint8Array(0);
            this.size = 0;
            this.$1 = new Int32Array(64);
            this.reset();
        }
        const n = t.prototype;
        n.reset = function() {
            this.h0 = 1779033703;
            this.h1 = 3144134277;
            this.h2 = 1013904242;
            this.h3 = 2773480762;
            this.h4 = 1359893119;
            this.h5 = 2600822924;
            this.h6 = 528734635;
            this.h7 = 1541459225;
            this.tail = new Uint8Array(0);
            this.size = 0;
        };
        n.update = function(t) {
            let e = 0;
            if (this.tail.length > 0) {
                const n = s - this.tail.length;
                if (t.length < n) {
                    const r = new Uint8Array(this.tail.length + t.length);
                    r.set(this.tail);
                    r.set(t, this.tail.length);
                    this.tail = r;
                    this.size += t.length * 8;
                    return this;
                }
                const o = new Uint8Array(s);
                o.set(this.tail);
                o.set(t.subarray(0, n), this.tail.length);
                this.$2(o);
                e = n;
            }
            while(e + s <= t.length){
                this.$2(t.subarray(e, e + s));
                e += s;
            }
            this.tail = e < t.length ? t.slice(e) : new Uint8Array(0);
            this.size += t.length * 8;
            return this;
        };
        n.$3 = function() {
            const e = new Uint8Array(64);
            e.set(this.tail);
            e.set(new Uint8Array([
                128
            ]), this.tail.length);
            if (this.tail.length + 9 > s) {
                this.$2(e);
                const t = g(new Uint8Array(0), this.size);
                this.$2(t);
            } else {
                const n = g(e, this.size);
                this.$2(n);
            }
        };
        n.finish = function() {
            this.$3();
            const e = new (o("WABinary")).Binary;
            e.writeUint32(this.h0);
            e.writeUint32(this.h1);
            e.writeUint32(this.h2);
            e.writeUint32(this.h3);
            e.writeUint32(this.h4);
            e.writeUint32(this.h5);
            e.writeUint32(this.h6);
            e.writeUint32(this.h7);
            this.reset();
            return e.readByteArrayView();
        };
        n.$2 = function(n) {
            const t = this.$1;
            for(let r = 0; r < 16; r++){
                const o = r * u;
                t[r] = n[o] << 24 | n[o + 1] << 16 | n[o + 2] << 8 | n[o + 3];
            }
            for(let a = 16; a < 64; a++){
                const i = m(t[a - 15]);
                const l = p(t[a - 2]);
                t[a] = t[a - 16] + (t[a - 7] + i + l) >>> 0;
            }
            let s = this.h0;
            let c = this.h1;
            let d = this.h2;
            let f = this.h3;
            let g = this.h4;
            let h = this.h5;
            let y = this.h6;
            let C = this.h7;
            for(let b = 0; b < 64; b++){
                const v = _(g, 6) ^ _(g, 11) ^ _(g, 25);
                const S = g & h ^ ~g & y;
                const R = _(s, 2) ^ _(s, 13) ^ _(s, 22);
                const L = s & c ^ s & d ^ c & d;
                const E = C + v + S + e[b] + t[b];
                const k = R + L;
                C = y;
                y = h;
                h = g;
                g = f + E >>> 0;
                f = d;
                d = c;
                c = s;
                s = E + k >>> 0;
            }
            this.h0 = this.h0 + s >>> 0;
            this.h1 = this.h1 + c >>> 0;
            this.h2 = this.h2 + d >>> 0;
            this.h3 = this.h3 + f >>> 0;
            this.h4 = this.h4 + g >>> 0;
            this.h5 = this.h5 + h >>> 0;
            this.h6 = this.h6 + y >>> 0;
            this.h7 = this.h7 + C >>> 0;
        };
        return t;
    })();
    function m(e) {
        const t = _(e, 7);
        const n = _(e, 18);
        const r = f(e, 3);
        return t ^ n ^ r;
    }
    function p(e) {
        const t = _(e, 17);
        const n = _(e, 19);
        const r = f(e, 10);
        return t ^ n ^ r;
    }
    function _(e, t) {
        return e >>> t | e << 32 - t;
    }
    function f(e, t) {
        return e >>> t;
    }
    function g(e, t) {
        const n = new Uint8Array(s);
        n.set(e);
        const r = new DataView(n.buffer, n.byteOffset + n.length - 8, 8);
        const o = Math.floor(t / c);
        r.setUint32(0, o, false);
        r.setUint32(4, t - o * c, false);
        return n;
    }
    l.Sha256BuilderV2 = d;
    l.sigma0 = m;
    l.sigma1 = p;
    l.rotateRight = _;
    l.shiftRight = f;
    l.pad = g;
}, 98);