__d("tweetnacl-1.0.3-fast", [], function(t, n, r, o, a, i) {
    "use strict";
    const exports = {};
    const l = {
        exports
    };
    function s() {
        (function(e) {
            const gf = function(e) {
                let t;
                const n = new Float64Array(16);
                if (e) {
                    for(t = 0; t < e.length; t++){
                        n[t] = e[t];
                    }
                }
                return n;
            };
            let n = function() {
                throw new Error("no PRNG");
            };
            const r = new Uint8Array(16);
            const o = new Uint8Array(32);
            o[0] = 9;
            const a = gf();
            const i = gf([
                1
            ]);
            const l = gf([
                56129,
                1
            ]);
            const D_1 = gf([
                30883,
                4953,
                19914,
                30187,
                55467,
                16705,
                2637,
                112,
                59544,
                30585,
                16505,
                36039,
                65139,
                11119,
                27886,
                20995
            ]);
            const u = gf([
                61785,
                9906,
                39828,
                60374,
                45398,
                33411,
                5274,
                224,
                53552,
                61171,
                33010,
                6542,
                64743,
                22239,
                55772,
                9222
            ]);
            const c = gf([
                54554,
                36645,
                11616,
                51542,
                42930,
                38181,
                51040,
                26924,
                56412,
                64982,
                57905,
                49316,
                21502,
                52590,
                14035,
                8553
            ]);
            const d = gf([
                26200,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214
            ]);
            const m = gf([
                41136,
                18958,
                6951,
                50414,
                58488,
                44335,
                6150,
                12099,
                55207,
                15867,
                153,
                11085,
                57099,
                20417,
                9344,
                11139
            ]);
            function p(e, t, n, r) {
                e[t] = n >> 24 & 255;
                e[t + 1] = n >> 16 & 255;
                e[t + 2] = n >> 8 & 255;
                e[t + 3] = n & 255;
                e[t + 4] = r >> 24 & 255;
                e[t + 5] = r >> 16 & 255;
                e[t + 6] = r >> 8 & 255;
                e[t + 7] = r & 255;
            }
            function _(e, t, n, r, o) {
                let a;
                let i = 0;
                for(a = 0; a < o; a++){
                    i |= e[t + a] ^ n[r + a];
                }
                return (1 & i - 1 >>> 8) - 1;
            }
            function crypto_verify_16(e, t, n, r) {
                return _(e, t, n, r, 16);
            }
            function crypto_verify_32(e, t, n, r) {
                return _(e, t, n, r, 32);
            }
            function h(e, t, n, r) {
                const o = r[0] & 255 | (r[1] & 255) << 8 | (r[2] & 255) << 16 | (r[3] & 255) << 24;
                const a = n[0] & 255 | (n[1] & 255) << 8 | (n[2] & 255) << 16 | (n[3] & 255) << 24;
                const i = n[4] & 255 | (n[5] & 255) << 8 | (n[6] & 255) << 16 | (n[7] & 255) << 24;
                const l = n[8] & 255 | (n[9] & 255) << 8 | (n[10] & 255) << 16 | (n[11] & 255) << 24;
                const s = n[12] & 255 | (n[13] & 255) << 8 | (n[14] & 255) << 16 | (n[15] & 255) << 24;
                const u = r[4] & 255 | (r[5] & 255) << 8 | (r[6] & 255) << 16 | (r[7] & 255) << 24;
                const c = t[0] & 255 | (t[1] & 255) << 8 | (t[2] & 255) << 16 | (t[3] & 255) << 24;
                const d = t[4] & 255 | (t[5] & 255) << 8 | (t[6] & 255) << 16 | (t[7] & 255) << 24;
                const m = t[8] & 255 | (t[9] & 255) << 8 | (t[10] & 255) << 16 | (t[11] & 255) << 24;
                const p = t[12] & 255 | (t[13] & 255) << 8 | (t[14] & 255) << 16 | (t[15] & 255) << 24;
                const _ = r[8] & 255 | (r[9] & 255) << 8 | (r[10] & 255) << 16 | (r[11] & 255) << 24;
                const f = n[16] & 255 | (n[17] & 255) << 8 | (n[18] & 255) << 16 | (n[19] & 255) << 24;
                const g = n[20] & 255 | (n[21] & 255) << 8 | (n[22] & 255) << 16 | (n[23] & 255) << 24;
                const h = n[24] & 255 | (n[25] & 255) << 8 | (n[26] & 255) << 16 | (n[27] & 255) << 24;
                const y = n[28] & 255 | (n[29] & 255) << 8 | (n[30] & 255) << 16 | (n[31] & 255) << 24;
                const C = r[12] & 255 | (r[13] & 255) << 8 | (r[14] & 255) << 16 | (r[15] & 255) << 24;
                let b = o;
                let v = a;
                let S = i;
                let R = l;
                let L = s;
                let E = u;
                let k = c;
                let I = d;
                let T = m;
                let D = p;
                let x = _;
                let $ = f;
                let P = g;
                let N = h;
                let M = y;
                let w = C;
                let A;
                for(let F = 0; F < 20; F += 2){
                    A = b + P | 0;
                    L ^= A << 7 | A >>> 25;
                    A = L + b | 0;
                    T ^= A << 9 | A >>> 23;
                    A = T + L | 0;
                    P ^= A << 13 | A >>> 19;
                    A = P + T | 0;
                    b ^= A << 18 | A >>> 14;
                    A = E + v | 0;
                    D ^= A << 7 | A >>> 25;
                    A = D + E | 0;
                    N ^= A << 9 | A >>> 23;
                    A = N + D | 0;
                    v ^= A << 13 | A >>> 19;
                    A = v + N | 0;
                    E ^= A << 18 | A >>> 14;
                    A = x + k | 0;
                    M ^= A << 7 | A >>> 25;
                    A = M + x | 0;
                    S ^= A << 9 | A >>> 23;
                    A = S + M | 0;
                    k ^= A << 13 | A >>> 19;
                    A = k + S | 0;
                    x ^= A << 18 | A >>> 14;
                    A = w + $ | 0;
                    R ^= A << 7 | A >>> 25;
                    A = R + w | 0;
                    I ^= A << 9 | A >>> 23;
                    A = I + R | 0;
                    $ ^= A << 13 | A >>> 19;
                    A = $ + I | 0;
                    w ^= A << 18 | A >>> 14;
                    A = b + R | 0;
                    v ^= A << 7 | A >>> 25;
                    A = v + b | 0;
                    S ^= A << 9 | A >>> 23;
                    A = S + v | 0;
                    R ^= A << 13 | A >>> 19;
                    A = R + S | 0;
                    b ^= A << 18 | A >>> 14;
                    A = E + L | 0;
                    k ^= A << 7 | A >>> 25;
                    A = k + E | 0;
                    I ^= A << 9 | A >>> 23;
                    A = I + k | 0;
                    L ^= A << 13 | A >>> 19;
                    A = L + I | 0;
                    E ^= A << 18 | A >>> 14;
                    A = x + D | 0;
                    $ ^= A << 7 | A >>> 25;
                    A = $ + x | 0;
                    T ^= A << 9 | A >>> 23;
                    A = T + $ | 0;
                    D ^= A << 13 | A >>> 19;
                    A = D + T | 0;
                    x ^= A << 18 | A >>> 14;
                    A = w + M | 0;
                    P ^= A << 7 | A >>> 25;
                    A = P + w | 0;
                    N ^= A << 9 | A >>> 23;
                    A = N + P | 0;
                    M ^= A << 13 | A >>> 19;
                    A = M + N | 0;
                    w ^= A << 18 | A >>> 14;
                }
                b = b + o | 0;
                v = v + a | 0;
                S = S + i | 0;
                R = R + l | 0;
                L = L + s | 0;
                E = E + u | 0;
                k = k + c | 0;
                I = I + d | 0;
                T = T + m | 0;
                D = D + p | 0;
                x = x + _ | 0;
                $ = $ + f | 0;
                P = P + g | 0;
                N = N + h | 0;
                M = M + y | 0;
                w = w + C | 0;
                e[0] = b >>> 0 & 255;
                e[1] = b >>> 8 & 255;
                e[2] = b >>> 16 & 255;
                e[3] = b >>> 24 & 255;
                e[4] = v >>> 0 & 255;
                e[5] = v >>> 8 & 255;
                e[6] = v >>> 16 & 255;
                e[7] = v >>> 24 & 255;
                e[8] = S >>> 0 & 255;
                e[9] = S >>> 8 & 255;
                e[10] = S >>> 16 & 255;
                e[11] = S >>> 24 & 255;
                e[12] = R >>> 0 & 255;
                e[13] = R >>> 8 & 255;
                e[14] = R >>> 16 & 255;
                e[15] = R >>> 24 & 255;
                e[16] = L >>> 0 & 255;
                e[17] = L >>> 8 & 255;
                e[18] = L >>> 16 & 255;
                e[19] = L >>> 24 & 255;
                e[20] = E >>> 0 & 255;
                e[21] = E >>> 8 & 255;
                e[22] = E >>> 16 & 255;
                e[23] = E >>> 24 & 255;
                e[24] = k >>> 0 & 255;
                e[25] = k >>> 8 & 255;
                e[26] = k >>> 16 & 255;
                e[27] = k >>> 24 & 255;
                e[28] = I >>> 0 & 255;
                e[29] = I >>> 8 & 255;
                e[30] = I >>> 16 & 255;
                e[31] = I >>> 24 & 255;
                e[32] = T >>> 0 & 255;
                e[33] = T >>> 8 & 255;
                e[34] = T >>> 16 & 255;
                e[35] = T >>> 24 & 255;
                e[36] = D >>> 0 & 255;
                e[37] = D >>> 8 & 255;
                e[38] = D >>> 16 & 255;
                e[39] = D >>> 24 & 255;
                e[40] = x >>> 0 & 255;
                e[41] = x >>> 8 & 255;
                e[42] = x >>> 16 & 255;
                e[43] = x >>> 24 & 255;
                e[44] = $ >>> 0 & 255;
                e[45] = $ >>> 8 & 255;
                e[46] = $ >>> 16 & 255;
                e[47] = $ >>> 24 & 255;
                e[48] = P >>> 0 & 255;
                e[49] = P >>> 8 & 255;
                e[50] = P >>> 16 & 255;
                e[51] = P >>> 24 & 255;
                e[52] = N >>> 0 & 255;
                e[53] = N >>> 8 & 255;
                e[54] = N >>> 16 & 255;
                e[55] = N >>> 24 & 255;
                e[56] = M >>> 0 & 255;
                e[57] = M >>> 8 & 255;
                e[58] = M >>> 16 & 255;
                e[59] = M >>> 24 & 255;
                e[60] = w >>> 0 & 255;
                e[61] = w >>> 8 & 255;
                e[62] = w >>> 16 & 255;
                e[63] = w >>> 24 & 255;
            }
            function y(e, t, n, r) {
                const o = r[0] & 255 | (r[1] & 255) << 8 | (r[2] & 255) << 16 | (r[3] & 255) << 24;
                const a = n[0] & 255 | (n[1] & 255) << 8 | (n[2] & 255) << 16 | (n[3] & 255) << 24;
                const i = n[4] & 255 | (n[5] & 255) << 8 | (n[6] & 255) << 16 | (n[7] & 255) << 24;
                const l = n[8] & 255 | (n[9] & 255) << 8 | (n[10] & 255) << 16 | (n[11] & 255) << 24;
                const s = n[12] & 255 | (n[13] & 255) << 8 | (n[14] & 255) << 16 | (n[15] & 255) << 24;
                const u = r[4] & 255 | (r[5] & 255) << 8 | (r[6] & 255) << 16 | (r[7] & 255) << 24;
                const c = t[0] & 255 | (t[1] & 255) << 8 | (t[2] & 255) << 16 | (t[3] & 255) << 24;
                const d = t[4] & 255 | (t[5] & 255) << 8 | (t[6] & 255) << 16 | (t[7] & 255) << 24;
                const m = t[8] & 255 | (t[9] & 255) << 8 | (t[10] & 255) << 16 | (t[11] & 255) << 24;
                const p = t[12] & 255 | (t[13] & 255) << 8 | (t[14] & 255) << 16 | (t[15] & 255) << 24;
                const _ = r[8] & 255 | (r[9] & 255) << 8 | (r[10] & 255) << 16 | (r[11] & 255) << 24;
                const f = n[16] & 255 | (n[17] & 255) << 8 | (n[18] & 255) << 16 | (n[19] & 255) << 24;
                const g = n[20] & 255 | (n[21] & 255) << 8 | (n[22] & 255) << 16 | (n[23] & 255) << 24;
                const h = n[24] & 255 | (n[25] & 255) << 8 | (n[26] & 255) << 16 | (n[27] & 255) << 24;
                const y = n[28] & 255 | (n[29] & 255) << 8 | (n[30] & 255) << 16 | (n[31] & 255) << 24;
                const C = r[12] & 255 | (r[13] & 255) << 8 | (r[14] & 255) << 16 | (r[15] & 255) << 24;
                let b = o;
                let v = a;
                let S = i;
                let R = l;
                let L = s;
                let E = u;
                let k = c;
                let I = d;
                let T = m;
                let D = p;
                let x = _;
                let $ = f;
                let P = g;
                let N = h;
                let M = y;
                let w = C;
                let A;
                for(let F = 0; F < 20; F += 2){
                    A = b + P | 0;
                    L ^= A << 7 | A >>> 25;
                    A = L + b | 0;
                    T ^= A << 9 | A >>> 23;
                    A = T + L | 0;
                    P ^= A << 13 | A >>> 19;
                    A = P + T | 0;
                    b ^= A << 18 | A >>> 14;
                    A = E + v | 0;
                    D ^= A << 7 | A >>> 25;
                    A = D + E | 0;
                    N ^= A << 9 | A >>> 23;
                    A = N + D | 0;
                    v ^= A << 13 | A >>> 19;
                    A = v + N | 0;
                    E ^= A << 18 | A >>> 14;
                    A = x + k | 0;
                    M ^= A << 7 | A >>> 25;
                    A = M + x | 0;
                    S ^= A << 9 | A >>> 23;
                    A = S + M | 0;
                    k ^= A << 13 | A >>> 19;
                    A = k + S | 0;
                    x ^= A << 18 | A >>> 14;
                    A = w + $ | 0;
                    R ^= A << 7 | A >>> 25;
                    A = R + w | 0;
                    I ^= A << 9 | A >>> 23;
                    A = I + R | 0;
                    $ ^= A << 13 | A >>> 19;
                    A = $ + I | 0;
                    w ^= A << 18 | A >>> 14;
                    A = b + R | 0;
                    v ^= A << 7 | A >>> 25;
                    A = v + b | 0;
                    S ^= A << 9 | A >>> 23;
                    A = S + v | 0;
                    R ^= A << 13 | A >>> 19;
                    A = R + S | 0;
                    b ^= A << 18 | A >>> 14;
                    A = E + L | 0;
                    k ^= A << 7 | A >>> 25;
                    A = k + E | 0;
                    I ^= A << 9 | A >>> 23;
                    A = I + k | 0;
                    L ^= A << 13 | A >>> 19;
                    A = L + I | 0;
                    E ^= A << 18 | A >>> 14;
                    A = x + D | 0;
                    $ ^= A << 7 | A >>> 25;
                    A = $ + x | 0;
                    T ^= A << 9 | A >>> 23;
                    A = T + $ | 0;
                    D ^= A << 13 | A >>> 19;
                    A = D + T | 0;
                    x ^= A << 18 | A >>> 14;
                    A = w + M | 0;
                    P ^= A << 7 | A >>> 25;
                    A = P + w | 0;
                    N ^= A << 9 | A >>> 23;
                    A = N + P | 0;
                    M ^= A << 13 | A >>> 19;
                    A = M + N | 0;
                    w ^= A << 18 | A >>> 14;
                }
                e[0] = b >>> 0 & 255;
                e[1] = b >>> 8 & 255;
                e[2] = b >>> 16 & 255;
                e[3] = b >>> 24 & 255;
                e[4] = E >>> 0 & 255;
                e[5] = E >>> 8 & 255;
                e[6] = E >>> 16 & 255;
                e[7] = E >>> 24 & 255;
                e[8] = x >>> 0 & 255;
                e[9] = x >>> 8 & 255;
                e[10] = x >>> 16 & 255;
                e[11] = x >>> 24 & 255;
                e[12] = w >>> 0 & 255;
                e[13] = w >>> 8 & 255;
                e[14] = w >>> 16 & 255;
                e[15] = w >>> 24 & 255;
                e[16] = k >>> 0 & 255;
                e[17] = k >>> 8 & 255;
                e[18] = k >>> 16 & 255;
                e[19] = k >>> 24 & 255;
                e[20] = I >>> 0 & 255;
                e[21] = I >>> 8 & 255;
                e[22] = I >>> 16 & 255;
                e[23] = I >>> 24 & 255;
                e[24] = T >>> 0 & 255;
                e[25] = T >>> 8 & 255;
                e[26] = T >>> 16 & 255;
                e[27] = T >>> 24 & 255;
                e[28] = D >>> 0 & 255;
                e[29] = D >>> 8 & 255;
                e[30] = D >>> 16 & 255;
                e[31] = D >>> 24 & 255;
            }
            function C(e, t, n, r) {
                h(e, t, n, r);
            }
            function crypto_core_hsalsa20(e, t, n, r) {
                y(e, t, n, r);
            }
            const v = new Uint8Array([
                101,
                120,
                112,
                97,
                110,
                100,
                32,
                51,
                50,
                45,
                98,
                121,
                116,
                101,
                32,
                107
            ]);
            function crypto_stream_salsa20_xor(e, t, n, r, o, a, i) {
                const l = new Uint8Array(16);
                const s = new Uint8Array(64);
                let u;
                let c;
                for(c = 0; c < 16; c++){
                    l[c] = 0;
                }
                for(c = 0; c < 8; c++){
                    l[c] = a[c];
                }
                while(o >= 64){
                    C(s, l, i, v);
                    for(c = 0; c < 64; c++){
                        e[t + c] = n[r + c] ^ s[c];
                    }
                    u = 1;
                    for(c = 8; c < 16; c++){
                        u = u + (l[c] & 255) | 0;
                        l[c] = u & 255;
                        u >>>= 8;
                    }
                    o -= 64;
                    t += 64;
                    r += 64;
                }
                if (o > 0) {
                    C(s, l, i, v);
                    for(c = 0; c < o; c++){
                        e[t + c] = n[r + c] ^ s[c];
                    }
                }
                return 0;
            }
            function crypto_stream_salsa20(e, t, n, r, o) {
                const a = new Uint8Array(16);
                const i = new Uint8Array(64);
                let l;
                let s;
                for(s = 0; s < 16; s++){
                    a[s] = 0;
                }
                for(s = 0; s < 8; s++){
                    a[s] = r[s];
                }
                while(n >= 64){
                    C(i, a, o, v);
                    for(s = 0; s < 64; s++){
                        e[t + s] = i[s];
                    }
                    l = 1;
                    for(s = 8; s < 16; s++){
                        l = l + (a[s] & 255) | 0;
                        a[s] = l & 255;
                        l >>>= 8;
                    }
                    n -= 64;
                    t += 64;
                }
                if (n > 0) {
                    C(i, a, o, v);
                    for(s = 0; s < n; s++){
                        e[t + s] = i[s];
                    }
                }
                return 0;
            }
            function crypto_stream(e, t, n, r, o) {
                const a = new Uint8Array(32);
                crypto_core_hsalsa20(a, r, o, v);
                const i = new Uint8Array(8);
                for(let l = 0; l < 8; l++){
                    i[l] = r[l + 16];
                }
                return crypto_stream_salsa20(e, t, n, i, a);
            }
            function crypto_stream_xor(e, t, n, r, o, a, i) {
                const l = new Uint8Array(32);
                crypto_core_hsalsa20(l, a, i, v);
                const s = new Uint8Array(8);
                for(let u = 0; u < 8; u++){
                    s[u] = a[u + 16];
                }
                return crypto_stream_salsa20_xor(e, t, n, r, o, s, l);
            }
            class k {
                constructor(e){
                    this.buffer = new Uint8Array(16);
                    this.r = new Uint16Array(10);
                    this.h = new Uint16Array(10);
                    this.pad = new Uint16Array(8);
                    this.leftover = 0;
                    this.fin = 0;
                    let t;
                    let n;
                    let r;
                    let o;
                    let a;
                    let i;
                    let l;
                    let s;
                    t = e[0] & 255 | (e[1] & 255) << 8;
                    this.r[0] = t & 8191;
                    n = e[2] & 255 | (e[3] & 255) << 8;
                    this.r[1] = (t >>> 13 | n << 3) & 8191;
                    r = e[4] & 255 | (e[5] & 255) << 8;
                    this.r[2] = (n >>> 10 | r << 6) & 7939;
                    o = e[6] & 255 | (e[7] & 255) << 8;
                    this.r[3] = (r >>> 7 | o << 9) & 8191;
                    a = e[8] & 255 | (e[9] & 255) << 8;
                    this.r[4] = (o >>> 4 | a << 12) & 255;
                    this.r[5] = a >>> 1 & 8190;
                    i = e[10] & 255 | (e[11] & 255) << 8;
                    this.r[6] = (a >>> 14 | i << 2) & 8191;
                    l = e[12] & 255 | (e[13] & 255) << 8;
                    this.r[7] = (i >>> 11 | l << 5) & 8065;
                    s = e[14] & 255 | (e[15] & 255) << 8;
                    this.r[8] = (l >>> 8 | s << 8) & 8191;
                    this.r[9] = s >>> 5 & 127;
                    this.pad[0] = e[16] & 255 | (e[17] & 255) << 8;
                    this.pad[1] = e[18] & 255 | (e[19] & 255) << 8;
                    this.pad[2] = e[20] & 255 | (e[21] & 255) << 8;
                    this.pad[3] = e[22] & 255 | (e[23] & 255) << 8;
                    this.pad[4] = e[24] & 255 | (e[25] & 255) << 8;
                    this.pad[5] = e[26] & 255 | (e[27] & 255) << 8;
                    this.pad[6] = e[28] & 255 | (e[29] & 255) << 8;
                    this.pad[7] = e[30] & 255 | (e[31] & 255) << 8;
                }
                blocks(e, t, n) {
                    const r = this.fin ? 0 : 2048;
                    let o;
                    let a;
                    let i;
                    let l;
                    let s;
                    let u;
                    let c;
                    let d;
                    let m;
                    let p;
                    let _;
                    let f;
                    let g;
                    let h;
                    let y;
                    let C;
                    let b;
                    let v;
                    let S;
                    let R = this.h[0];
                    let L = this.h[1];
                    let E = this.h[2];
                    let k = this.h[3];
                    let I = this.h[4];
                    let T = this.h[5];
                    let D = this.h[6];
                    let x = this.h[7];
                    let $ = this.h[8];
                    let P = this.h[9];
                    const N = this.r[0];
                    const M = this.r[1];
                    const w = this.r[2];
                    const A = this.r[3];
                    const F = this.r[4];
                    const O = this.r[5];
                    const B = this.r[6];
                    const W = this.r[7];
                    const q = this.r[8];
                    const U = this.r[9];
                    while(n >= 16){
                        o = e[t + 0] & 255 | (e[t + 1] & 255) << 8;
                        R += o & 8191;
                        a = e[t + 2] & 255 | (e[t + 3] & 255) << 8;
                        L += (o >>> 13 | a << 3) & 8191;
                        i = e[t + 4] & 255 | (e[t + 5] & 255) << 8;
                        E += (a >>> 10 | i << 6) & 8191;
                        l = e[t + 6] & 255 | (e[t + 7] & 255) << 8;
                        k += (i >>> 7 | l << 9) & 8191;
                        s = e[t + 8] & 255 | (e[t + 9] & 255) << 8;
                        I += (l >>> 4 | s << 12) & 8191;
                        T += s >>> 1 & 8191;
                        u = e[t + 10] & 255 | (e[t + 11] & 255) << 8;
                        D += (s >>> 14 | u << 2) & 8191;
                        c = e[t + 12] & 255 | (e[t + 13] & 255) << 8;
                        x += (u >>> 11 | c << 5) & 8191;
                        d = e[t + 14] & 255 | (e[t + 15] & 255) << 8;
                        $ += (c >>> 8 | d << 8) & 8191;
                        P += d >>> 5 | r;
                        m = 0;
                        p = m;
                        p += R * N;
                        p += L * (5 * U);
                        p += E * (5 * q);
                        p += k * (5 * W);
                        p += I * (5 * B);
                        m = p >>> 13;
                        p &= 8191;
                        p += T * (5 * O);
                        p += D * (5 * F);
                        p += x * (5 * A);
                        p += $ * (5 * w);
                        p += P * (5 * M);
                        m += p >>> 13;
                        p &= 8191;
                        _ = m;
                        _ += R * M;
                        _ += L * N;
                        _ += E * (5 * U);
                        _ += k * (5 * q);
                        _ += I * (5 * W);
                        m = _ >>> 13;
                        _ &= 8191;
                        _ += T * (5 * B);
                        _ += D * (5 * O);
                        _ += x * (5 * F);
                        _ += $ * (5 * A);
                        _ += P * (5 * w);
                        m += _ >>> 13;
                        _ &= 8191;
                        f = m;
                        f += R * w;
                        f += L * M;
                        f += E * N;
                        f += k * (5 * U);
                        f += I * (5 * q);
                        m = f >>> 13;
                        f &= 8191;
                        f += T * (5 * W);
                        f += D * (5 * B);
                        f += x * (5 * O);
                        f += $ * (5 * F);
                        f += P * (5 * A);
                        m += f >>> 13;
                        f &= 8191;
                        g = m;
                        g += R * A;
                        g += L * w;
                        g += E * M;
                        g += k * N;
                        g += I * (5 * U);
                        m = g >>> 13;
                        g &= 8191;
                        g += T * (5 * q);
                        g += D * (5 * W);
                        g += x * (5 * B);
                        g += $ * (5 * O);
                        g += P * (5 * F);
                        m += g >>> 13;
                        g &= 8191;
                        h = m;
                        h += R * F;
                        h += L * A;
                        h += E * w;
                        h += k * M;
                        h += I * N;
                        m = h >>> 13;
                        h &= 8191;
                        h += T * (5 * U);
                        h += D * (5 * q);
                        h += x * (5 * W);
                        h += $ * (5 * B);
                        h += P * (5 * O);
                        m += h >>> 13;
                        h &= 8191;
                        y = m;
                        y += R * O;
                        y += L * F;
                        y += E * A;
                        y += k * w;
                        y += I * M;
                        m = y >>> 13;
                        y &= 8191;
                        y += T * N;
                        y += D * (5 * U);
                        y += x * (5 * q);
                        y += $ * (5 * W);
                        y += P * (5 * B);
                        m += y >>> 13;
                        y &= 8191;
                        C = m;
                        C += R * B;
                        C += L * O;
                        C += E * F;
                        C += k * A;
                        C += I * w;
                        m = C >>> 13;
                        C &= 8191;
                        C += T * M;
                        C += D * N;
                        C += x * (5 * U);
                        C += $ * (5 * q);
                        C += P * (5 * W);
                        m += C >>> 13;
                        C &= 8191;
                        b = m;
                        b += R * W;
                        b += L * B;
                        b += E * O;
                        b += k * F;
                        b += I * A;
                        m = b >>> 13;
                        b &= 8191;
                        b += T * w;
                        b += D * M;
                        b += x * N;
                        b += $ * (5 * U);
                        b += P * (5 * q);
                        m += b >>> 13;
                        b &= 8191;
                        v = m;
                        v += R * q;
                        v += L * W;
                        v += E * B;
                        v += k * O;
                        v += I * F;
                        m = v >>> 13;
                        v &= 8191;
                        v += T * A;
                        v += D * w;
                        v += x * M;
                        v += $ * N;
                        v += P * (5 * U);
                        m += v >>> 13;
                        v &= 8191;
                        S = m;
                        S += R * U;
                        S += L * q;
                        S += E * W;
                        S += k * B;
                        S += I * O;
                        m = S >>> 13;
                        S &= 8191;
                        S += T * F;
                        S += D * A;
                        S += x * w;
                        S += $ * M;
                        S += P * N;
                        m += S >>> 13;
                        S &= 8191;
                        m = (m << 2) + m | 0;
                        m = m + p | 0;
                        p = m & 8191;
                        m = m >>> 13;
                        _ += m;
                        R = p;
                        L = _;
                        E = f;
                        k = g;
                        I = h;
                        T = y;
                        D = C;
                        x = b;
                        $ = v;
                        P = S;
                        t += 16;
                        n -= 16;
                    }
                    this.h[0] = R;
                    this.h[1] = L;
                    this.h[2] = E;
                    this.h[3] = k;
                    this.h[4] = I;
                    this.h[5] = T;
                    this.h[6] = D;
                    this.h[7] = x;
                    this.h[8] = $;
                    this.h[9] = P;
                }
                finish(e, t) {
                    const n = new Uint16Array(10);
                    let r;
                    let o;
                    let a;
                    let i;
                    if (this.leftover) {
                        i = this.leftover;
                        for(this.buffer[i++] = 1; i < 16; i++){
                            this.buffer[i] = 0;
                        }
                        this.fin = 1;
                        this.blocks(this.buffer, 0, 16);
                    }
                    r = this.h[1] >>> 13;
                    this.h[1] &= 8191;
                    for(i = 2; i < 10; i++){
                        this.h[i] += r;
                        r = this.h[i] >>> 13;
                        this.h[i] &= 8191;
                    }
                    this.h[0] += r * 5;
                    r = this.h[0] >>> 13;
                    this.h[0] &= 8191;
                    this.h[1] += r;
                    r = this.h[1] >>> 13;
                    this.h[1] &= 8191;
                    this.h[2] += r;
                    n[0] = this.h[0] + 5;
                    r = n[0] >>> 13;
                    n[0] &= 8191;
                    for(i = 1; i < 10; i++){
                        n[i] = this.h[i] + r;
                        r = n[i] >>> 13;
                        n[i] &= 8191;
                    }
                    n[9] -= 8192;
                    o = (r ^ 1) - 1;
                    for(i = 0; i < 10; i++){
                        n[i] &= o;
                    }
                    o = ~o;
                    for(i = 0; i < 10; i++){
                        this.h[i] = this.h[i] & o | n[i];
                    }
                    this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
                    this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
                    this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
                    this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
                    this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
                    this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
                    this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
                    this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
                    a = this.h[0] + this.pad[0];
                    this.h[0] = a & 65535;
                    for(i = 1; i < 8; i++){
                        a = (this.h[i] + this.pad[i] | 0) + (a >>> 16) | 0;
                        this.h[i] = a & 65535;
                    }
                    e[t + 0] = this.h[0] >>> 0 & 255;
                    e[t + 1] = this.h[0] >>> 8 & 255;
                    e[t + 2] = this.h[1] >>> 0 & 255;
                    e[t + 3] = this.h[1] >>> 8 & 255;
                    e[t + 4] = this.h[2] >>> 0 & 255;
                    e[t + 5] = this.h[2] >>> 8 & 255;
                    e[t + 6] = this.h[3] >>> 0 & 255;
                    e[t + 7] = this.h[3] >>> 8 & 255;
                    e[t + 8] = this.h[4] >>> 0 & 255;
                    e[t + 9] = this.h[4] >>> 8 & 255;
                    e[t + 10] = this.h[5] >>> 0 & 255;
                    e[t + 11] = this.h[5] >>> 8 & 255;
                    e[t + 12] = this.h[6] >>> 0 & 255;
                    e[t + 13] = this.h[6] >>> 8 & 255;
                    e[t + 14] = this.h[7] >>> 0 & 255;
                    e[t + 15] = this.h[7] >>> 8 & 255;
                }
                update(e, t, n) {
                    let r;
                    let o;
                    if (this.leftover) {
                        o = 16 - this.leftover;
                        if (o > n) {
                            o = n;
                        }
                        for(r = 0; r < o; r++){
                            this.buffer[this.leftover + r] = e[t + r];
                        }
                        n -= o;
                        t += o;
                        this.leftover += o;
                        if (this.leftover < 16) {
                            return;
                        }
                        this.blocks(this.buffer, 0, 16);
                        this.leftover = 0;
                    }
                    if (n >= 16) {
                        o = n - n % 16;
                        this.blocks(e, t, o);
                        t += o;
                        n -= o;
                    }
                    if (n) {
                        for(r = 0; r < n; r++){
                            this.buffer[this.leftover + r] = e[t + r];
                        }
                        this.leftover += n;
                    }
                }
            }
            function crypto_onetimeauth(e, t, n, r, o, a) {
                const i = new k(a);
                i.update(n, r, o);
                i.finish(e, t);
                return 0;
            }
            function crypto_onetimeauth_verify(e, t, n, r, o, a) {
                const i = new Uint8Array(16);
                crypto_onetimeauth(i, 0, n, r, o, a);
                return crypto_verify_16(e, t, i, 0);
            }
            function crypto_secretbox(e, t, n, r, o) {
                let a;
                if (n < 32) {
                    return -1;
                }
                crypto_stream_xor(e, 0, t, 0, n, r, o);
                crypto_onetimeauth(e, 16, e, 32, n - 32, e);
                for(a = 0; a < 16; a++){
                    e[a] = 0;
                }
                return 0;
            }
            function crypto_secretbox_open(e, t, n, r, o) {
                let a;
                const i = new Uint8Array(32);
                if (n < 32 || (crypto_stream(i, 0, 32, r, o), crypto_onetimeauth_verify(t, 16, t, 32, n - 32, i) !== 0)) {
                    return -1;
                }
                crypto_stream_xor(e, 0, t, 0, n, r, o);
                for(a = 0; a < 32; a++){
                    e[a] = 0;
                }
                return 0;
            }
            function set25519(e, t) {
                let n;
                for(n = 0; n < 16; n++){
                    e[n] = t[n] | 0;
                }
            }
            function P(e) {
                let t;
                let n;
                let r = 1;
                for(t = 0; t < 16; t++){
                    n = e[t] + r + 65535;
                    r = Math.floor(n / 65536);
                    e[t] = n - r * 65536;
                }
                e[0] += r - 1 + 37 * (r - 1);
            }
            function N(e, t, n) {
                let r;
                const o = ~(n - 1);
                for(let a = 0; a < 16; a++){
                    r = o & (e[a] ^ t[a]);
                    e[a] ^= r;
                    t[a] ^= r;
                }
            }
            function pack25519(e, n) {
                let r;
                let o;
                let a;
                const i = gf();
                const l = gf();
                for(r = 0; r < 16; r++){
                    l[r] = n[r];
                }
                P(l);
                P(l);
                P(l);
                for(o = 0; o < 2; o++){
                    i[0] = l[0] - 65517;
                    for(r = 1; r < 15; r++){
                        i[r] = l[r] - 65535 - (i[r - 1] >> 16 & 1);
                        i[r - 1] &= 65535;
                    }
                    i[15] = l[15] - 32767 - (i[14] >> 16 & 1);
                    a = i[15] >> 16 & 1;
                    i[14] &= 65535;
                    N(l, i, 1 - a);
                }
                for(r = 0; r < 16; r++){
                    e[2 * r] = l[r] & 255;
                    e[2 * r + 1] = l[r] >> 8;
                }
            }
            function w(e, t) {
                const n = new Uint8Array(32);
                const r = new Uint8Array(32);
                pack25519(n, e);
                pack25519(r, t);
                return crypto_verify_32(n, 0, r, 0);
            }
            function A(e) {
                const t = new Uint8Array(32);
                pack25519(t, e);
                return t[0] & 1;
            }
            function unpack25519(e, t) {
                let n;
                for(n = 0; n < 16; n++){
                    e[n] = t[2 * n] + (t[2 * n + 1] << 8);
                }
                e[15] &= 32767;
            }
            function A_1(e, t, n) {
                for(let r = 0; r < 16; r++){
                    e[r] = t[r] + n[r];
                }
            }
            function Z_1(e, t, n) {
                for(let r = 0; r < 16; r++){
                    e[r] = t[r] - n[r];
                }
            }
            function M_1(e, t, n) {
                let r;
                let o;
                let a = 0;
                let i = 0;
                let l = 0;
                let s = 0;
                let u = 0;
                let c = 0;
                let d = 0;
                let m = 0;
                let p = 0;
                let _ = 0;
                let f = 0;
                let g = 0;
                let h = 0;
                let y = 0;
                let C = 0;
                let b = 0;
                let v = 0;
                let S = 0;
                let R = 0;
                let L = 0;
                let E = 0;
                let k = 0;
                let I = 0;
                let T = 0;
                let D = 0;
                let x = 0;
                let $ = 0;
                let P = 0;
                let N = 0;
                let M = 0;
                let w = 0;
                const A = n[0];
                const F = n[1];
                const O = n[2];
                const B = n[3];
                const W = n[4];
                const q = n[5];
                const U = n[6];
                const V = n[7];
                const H = n[8];
                const G = n[9];
                const z = n[10];
                const j = n[11];
                const K = n[12];
                const Q = n[13];
                const X = n[14];
                const Y = n[15];
                r = t[0];
                a += r * A;
                i += r * F;
                l += r * O;
                s += r * B;
                u += r * W;
                c += r * q;
                d += r * U;
                m += r * V;
                p += r * H;
                _ += r * G;
                f += r * z;
                g += r * j;
                h += r * K;
                y += r * Q;
                C += r * X;
                b += r * Y;
                r = t[1];
                i += r * A;
                l += r * F;
                s += r * O;
                u += r * B;
                c += r * W;
                d += r * q;
                m += r * U;
                p += r * V;
                _ += r * H;
                f += r * G;
                g += r * z;
                h += r * j;
                y += r * K;
                C += r * Q;
                b += r * X;
                v += r * Y;
                r = t[2];
                l += r * A;
                s += r * F;
                u += r * O;
                c += r * B;
                d += r * W;
                m += r * q;
                p += r * U;
                _ += r * V;
                f += r * H;
                g += r * G;
                h += r * z;
                y += r * j;
                C += r * K;
                b += r * Q;
                v += r * X;
                S += r * Y;
                r = t[3];
                s += r * A;
                u += r * F;
                c += r * O;
                d += r * B;
                m += r * W;
                p += r * q;
                _ += r * U;
                f += r * V;
                g += r * H;
                h += r * G;
                y += r * z;
                C += r * j;
                b += r * K;
                v += r * Q;
                S += r * X;
                R += r * Y;
                r = t[4];
                u += r * A;
                c += r * F;
                d += r * O;
                m += r * B;
                p += r * W;
                _ += r * q;
                f += r * U;
                g += r * V;
                h += r * H;
                y += r * G;
                C += r * z;
                b += r * j;
                v += r * K;
                S += r * Q;
                R += r * X;
                L += r * Y;
                r = t[5];
                c += r * A;
                d += r * F;
                m += r * O;
                p += r * B;
                _ += r * W;
                f += r * q;
                g += r * U;
                h += r * V;
                y += r * H;
                C += r * G;
                b += r * z;
                v += r * j;
                S += r * K;
                R += r * Q;
                L += r * X;
                E += r * Y;
                r = t[6];
                d += r * A;
                m += r * F;
                p += r * O;
                _ += r * B;
                f += r * W;
                g += r * q;
                h += r * U;
                y += r * V;
                C += r * H;
                b += r * G;
                v += r * z;
                S += r * j;
                R += r * K;
                L += r * Q;
                E += r * X;
                k += r * Y;
                r = t[7];
                m += r * A;
                p += r * F;
                _ += r * O;
                f += r * B;
                g += r * W;
                h += r * q;
                y += r * U;
                C += r * V;
                b += r * H;
                v += r * G;
                S += r * z;
                R += r * j;
                L += r * K;
                E += r * Q;
                k += r * X;
                I += r * Y;
                r = t[8];
                p += r * A;
                _ += r * F;
                f += r * O;
                g += r * B;
                h += r * W;
                y += r * q;
                C += r * U;
                b += r * V;
                v += r * H;
                S += r * G;
                R += r * z;
                L += r * j;
                E += r * K;
                k += r * Q;
                I += r * X;
                T += r * Y;
                r = t[9];
                _ += r * A;
                f += r * F;
                g += r * O;
                h += r * B;
                y += r * W;
                C += r * q;
                b += r * U;
                v += r * V;
                S += r * H;
                R += r * G;
                L += r * z;
                E += r * j;
                k += r * K;
                I += r * Q;
                T += r * X;
                D += r * Y;
                r = t[10];
                f += r * A;
                g += r * F;
                h += r * O;
                y += r * B;
                C += r * W;
                b += r * q;
                v += r * U;
                S += r * V;
                R += r * H;
                L += r * G;
                E += r * z;
                k += r * j;
                I += r * K;
                T += r * Q;
                D += r * X;
                x += r * Y;
                r = t[11];
                g += r * A;
                h += r * F;
                y += r * O;
                C += r * B;
                b += r * W;
                v += r * q;
                S += r * U;
                R += r * V;
                L += r * H;
                E += r * G;
                k += r * z;
                I += r * j;
                T += r * K;
                D += r * Q;
                x += r * X;
                $ += r * Y;
                r = t[12];
                h += r * A;
                y += r * F;
                C += r * O;
                b += r * B;
                v += r * W;
                S += r * q;
                R += r * U;
                L += r * V;
                E += r * H;
                k += r * G;
                I += r * z;
                T += r * j;
                D += r * K;
                x += r * Q;
                $ += r * X;
                P += r * Y;
                r = t[13];
                y += r * A;
                C += r * F;
                b += r * O;
                v += r * B;
                S += r * W;
                R += r * q;
                L += r * U;
                E += r * V;
                k += r * H;
                I += r * G;
                T += r * z;
                D += r * j;
                x += r * K;
                $ += r * Q;
                P += r * X;
                N += r * Y;
                r = t[14];
                C += r * A;
                b += r * F;
                v += r * O;
                S += r * B;
                R += r * W;
                L += r * q;
                E += r * U;
                k += r * V;
                I += r * H;
                T += r * G;
                D += r * z;
                x += r * j;
                $ += r * K;
                P += r * Q;
                N += r * X;
                M += r * Y;
                r = t[15];
                b += r * A;
                v += r * F;
                S += r * O;
                R += r * B;
                L += r * W;
                E += r * q;
                k += r * U;
                I += r * V;
                T += r * H;
                D += r * G;
                x += r * z;
                $ += r * j;
                P += r * K;
                N += r * Q;
                M += r * X;
                w += r * Y;
                a += 38 * v;
                i += 38 * S;
                l += 38 * R;
                s += 38 * L;
                u += 38 * E;
                c += 38 * k;
                d += 38 * I;
                m += 38 * T;
                p += 38 * D;
                _ += 38 * x;
                f += 38 * $;
                g += 38 * P;
                h += 38 * N;
                y += 38 * M;
                C += 38 * w;
                o = 1;
                r = a + o + 65535;
                o = Math.floor(r / 65536);
                a = r - o * 65536;
                r = i + o + 65535;
                o = Math.floor(r / 65536);
                i = r - o * 65536;
                r = l + o + 65535;
                o = Math.floor(r / 65536);
                l = r - o * 65536;
                r = s + o + 65535;
                o = Math.floor(r / 65536);
                s = r - o * 65536;
                r = u + o + 65535;
                o = Math.floor(r / 65536);
                u = r - o * 65536;
                r = c + o + 65535;
                o = Math.floor(r / 65536);
                c = r - o * 65536;
                r = d + o + 65535;
                o = Math.floor(r / 65536);
                d = r - o * 65536;
                r = m + o + 65535;
                o = Math.floor(r / 65536);
                m = r - o * 65536;
                r = p + o + 65535;
                o = Math.floor(r / 65536);
                p = r - o * 65536;
                r = _ + o + 65535;
                o = Math.floor(r / 65536);
                _ = r - o * 65536;
                r = f + o + 65535;
                o = Math.floor(r / 65536);
                f = r - o * 65536;
                r = g + o + 65535;
                o = Math.floor(r / 65536);
                g = r - o * 65536;
                r = h + o + 65535;
                o = Math.floor(r / 65536);
                h = r - o * 65536;
                r = y + o + 65535;
                o = Math.floor(r / 65536);
                y = r - o * 65536;
                r = C + o + 65535;
                o = Math.floor(r / 65536);
                C = r - o * 65536;
                r = b + o + 65535;
                o = Math.floor(r / 65536);
                b = r - o * 65536;
                a += o - 1 + 37 * (o - 1);
                o = 1;
                r = a + o + 65535;
                o = Math.floor(r / 65536);
                a = r - o * 65536;
                r = i + o + 65535;
                o = Math.floor(r / 65536);
                i = r - o * 65536;
                r = l + o + 65535;
                o = Math.floor(r / 65536);
                l = r - o * 65536;
                r = s + o + 65535;
                o = Math.floor(r / 65536);
                s = r - o * 65536;
                r = u + o + 65535;
                o = Math.floor(r / 65536);
                u = r - o * 65536;
                r = c + o + 65535;
                o = Math.floor(r / 65536);
                c = r - o * 65536;
                r = d + o + 65535;
                o = Math.floor(r / 65536);
                d = r - o * 65536;
                r = m + o + 65535;
                o = Math.floor(r / 65536);
                m = r - o * 65536;
                r = p + o + 65535;
                o = Math.floor(r / 65536);
                p = r - o * 65536;
                r = _ + o + 65535;
                o = Math.floor(r / 65536);
                _ = r - o * 65536;
                r = f + o + 65535;
                o = Math.floor(r / 65536);
                f = r - o * 65536;
                r = g + o + 65535;
                o = Math.floor(r / 65536);
                g = r - o * 65536;
                r = h + o + 65535;
                o = Math.floor(r / 65536);
                h = r - o * 65536;
                r = y + o + 65535;
                o = Math.floor(r / 65536);
                y = r - o * 65536;
                r = C + o + 65535;
                o = Math.floor(r / 65536);
                C = r - o * 65536;
                r = b + o + 65535;
                o = Math.floor(r / 65536);
                b = r - o * 65536;
                a += o - 1 + 37 * (o - 1);
                e[0] = a;
                e[1] = i;
                e[2] = l;
                e[3] = s;
                e[4] = u;
                e[5] = c;
                e[6] = d;
                e[7] = m;
                e[8] = p;
                e[9] = _;
                e[10] = f;
                e[11] = g;
                e[12] = h;
                e[13] = y;
                e[14] = C;
                e[15] = b;
            }
            function S_1(e, t) {
                M_1(e, t, t);
            }
            function U(e, n) {
                const r = gf();
                let o;
                for(o = 0; o < 16; o++){
                    r[o] = n[o];
                }
                for(o = 253; o >= 0; o--){
                    S_1(r, r);
                    if (o !== 2 && o !== 4) {
                        M_1(r, r, n);
                    }
                }
                for(o = 0; o < 16; o++){
                    e[o] = r[o];
                }
            }
            function pow2523(e, n) {
                const r = gf();
                let o;
                for(o = 0; o < 16; o++){
                    r[o] = n[o];
                }
                for(o = 250; o >= 0; o--){
                    S_1(r, r);
                    if (o !== 1) {
                        M_1(r, r, n);
                    }
                }
                for(o = 0; o < 16; o++){
                    e[o] = r[o];
                }
            }
            function crypto_scalarmult(e, n, r) {
                const o = new Uint8Array(32);
                const a = new Float64Array(80);
                let i;
                let s;
                const u = gf();
                const c = gf();
                const d = gf();
                const m = gf();
                const p = gf();
                const _ = gf();
                for(s = 0; s < 31; s++){
                    o[s] = n[s];
                }
                o[31] = n[31] & 127 | 64;
                o[0] &= 248;
                unpack25519(a, r);
                for(s = 0; s < 16; s++){
                    c[s] = a[s];
                    m[s] = u[s] = d[s] = 0;
                }
                u[0] = m[0] = 1;
                for(s = 254; s >= 0; --s){
                    i = o[s >>> 3] >>> (s & 7) & 1;
                    N(u, c, i);
                    N(d, m, i);
                    A_1(p, u, d);
                    Z_1(u, u, d);
                    A_1(d, c, m);
                    Z_1(c, c, m);
                    S_1(m, p);
                    S_1(_, u);
                    M_1(u, d, u);
                    M_1(d, c, p);
                    A_1(p, u, d);
                    Z_1(u, u, d);
                    S_1(c, u);
                    Z_1(d, m, _);
                    M_1(u, d, l);
                    A_1(u, u, m);
                    M_1(d, d, u);
                    M_1(u, m, _);
                    M_1(m, c, a);
                    S_1(c, p);
                    N(u, c, i);
                    N(d, m, i);
                }
                for(s = 0; s < 16; s++){
                    a[s + 16] = u[s];
                    a[s + 32] = d[s];
                    a[s + 48] = c[s];
                    a[s + 64] = m[s];
                }
                const f = a.subarray(32);
                const g = a.subarray(16);
                U(f, f);
                M_1(g, g, f);
                pack25519(e, g);
                return 0;
            }
            function crypto_scalarmult_base(e, t) {
                return crypto_scalarmult(e, t, o);
            }
            function crypto_box_keypair(e, t) {
                n(t, 32);
                return crypto_scalarmult_base(e, t);
            }
            function crypto_box_beforenm(e, t, n) {
                const o = new Uint8Array(32);
                crypto_scalarmult(o, n, t);
                return crypto_core_hsalsa20(e, r, o, v);
            }
            const crypto_box_afternm = crypto_secretbox;
            const Q = crypto_secretbox_open;
            function crypto_box(e, t, n, r, o, a) {
                const i = new Uint8Array(32);
                crypto_box_beforenm(i, o, a);
                return crypto_box_afternm(e, t, n, r, i);
            }
            function crypto_box_open(e, t, n, r, o, a) {
                const i = new Uint8Array(32);
                crypto_box_beforenm(i, o, a);
                return Q(e, t, n, r, i);
            }
            const J = [
                1116352408,
                3609767458,
                1899447441,
                602891725,
                3049323471,
                3964484399,
                3921009573,
                2173295548,
                961987163,
                4081628472,
                1508970993,
                3053834265,
                2453635748,
                2937671579,
                2870763221,
                3664609560,
                3624381080,
                2734883394,
                310598401,
                1164996542,
                607225278,
                1323610764,
                1426881987,
                3590304994,
                1925078388,
                4068182383,
                2162078206,
                991336113,
                2614888103,
                633803317,
                3248222580,
                3479774868,
                3835390401,
                2666613458,
                4022224774,
                944711139,
                264347078,
                2341262773,
                604807628,
                2007800933,
                770255983,
                1495990901,
                1249150122,
                1856431235,
                1555081692,
                3175218132,
                1996064986,
                2198950837,
                2554220882,
                3999719339,
                2821834349,
                766784016,
                2952996808,
                2566594879,
                3210313671,
                3203337956,
                3336571891,
                1034457026,
                3584528711,
                2466948901,
                113926993,
                3758326383,
                338241895,
                168717936,
                666307205,
                1188179964,
                773529912,
                1546045734,
                1294757372,
                1522805485,
                1396182291,
                2643833823,
                1695183700,
                2343527390,
                1986661051,
                1014477480,
                2177026350,
                1206759142,
                2456956037,
                344077627,
                2730485921,
                1290863460,
                2820302411,
                3158454273,
                3259730800,
                3505952657,
                3345764771,
                106217008,
                3516065817,
                3606008344,
                3600352804,
                1432725776,
                4094571909,
                1467031594,
                275423344,
                851169720,
                430227734,
                3100823752,
                506948616,
                1363258195,
                659060556,
                3750685593,
                883997877,
                3785050280,
                958139571,
                3318307427,
                1322822218,
                3812723403,
                1537002063,
                2003034995,
                1747873779,
                3602036899,
                1955562222,
                1575990012,
                2024104815,
                1125592928,
                2227730452,
                2716904306,
                2361852424,
                442776044,
                2428436474,
                593698344,
                2756734187,
                3733110249,
                3204031479,
                2999351573,
                3329325298,
                3815920427,
                3391569614,
                3928383900,
                3515267271,
                566280711,
                3940187606,
                3454069534,
                4118630271,
                4000239992,
                116418474,
                1914138554,
                174292421,
                2731055270,
                289380356,
                3203993006,
                460393269,
                320620315,
                685471733,
                587496836,
                852142971,
                1086792851,
                1017036298,
                365543100,
                1126000580,
                2618297676,
                1288033470,
                3409855158,
                1501505948,
                4234509866,
                1607167915,
                987167468,
                1816402316,
                1246189591
            ];
            function Z(e, t, n, r) {
                const o = new Int32Array(16);
                const a = new Int32Array(16);
                let i;
                let l;
                let s;
                let u;
                let c;
                let d;
                let m;
                let p;
                let _;
                let f;
                let g;
                let h;
                let y;
                let C;
                let b;
                let v;
                let S;
                let R;
                let L;
                let E;
                let k;
                let I;
                let T;
                let D;
                let x;
                let $;
                let P = e[0];
                let N = e[1];
                let M = e[2];
                let w = e[3];
                let A = e[4];
                let F = e[5];
                let O = e[6];
                let B = e[7];
                let W = t[0];
                let q = t[1];
                let U = t[2];
                let V = t[3];
                let H = t[4];
                let G = t[5];
                let z = t[6];
                let j = t[7];
                let K = 0;
                while(r >= 128){
                    for(L = 0; L < 16; L++){
                        E = 8 * L + K;
                        o[L] = n[E + 0] << 24 | n[E + 1] << 16 | n[E + 2] << 8 | n[E + 3];
                        a[L] = n[E + 4] << 24 | n[E + 5] << 16 | n[E + 6] << 8 | n[E + 7];
                    }
                    for(L = 0; L < 80; L++){
                        i = P;
                        l = N;
                        s = M;
                        u = w;
                        c = A;
                        d = F;
                        m = O;
                        p = B;
                        _ = W;
                        f = q;
                        g = U;
                        h = V;
                        y = H;
                        C = G;
                        b = z;
                        v = j;
                        k = B;
                        I = j;
                        T = I & 65535;
                        D = I >>> 16;
                        x = k & 65535;
                        $ = k >>> 16;
                        k = (A >>> 14 | H << 18) ^ (A >>> 18 | H << 14) ^ (H >>> 9 | A << 23);
                        I = (H >>> 14 | A << 18) ^ (H >>> 18 | A << 14) ^ (A >>> 9 | H << 23);
                        T += I & 65535;
                        D += I >>> 16;
                        x += k & 65535;
                        $ += k >>> 16;
                        k = A & F ^ ~A & O;
                        I = H & G ^ ~H & z;
                        T += I & 65535;
                        D += I >>> 16;
                        x += k & 65535;
                        $ += k >>> 16;
                        k = J[L * 2];
                        I = J[L * 2 + 1];
                        T += I & 65535;
                        D += I >>> 16;
                        x += k & 65535;
                        $ += k >>> 16;
                        k = o[L % 16];
                        I = a[L % 16];
                        T += I & 65535;
                        D += I >>> 16;
                        x += k & 65535;
                        $ += k >>> 16;
                        D += T >>> 16;
                        x += D >>> 16;
                        $ += x >>> 16;
                        S = x & 65535 | $ << 16;
                        R = T & 65535 | D << 16;
                        k = S;
                        I = R;
                        T = I & 65535;
                        D = I >>> 16;
                        x = k & 65535;
                        $ = k >>> 16;
                        k = (P >>> 28 | W << 4) ^ (W >>> 2 | P << 30) ^ (W >>> 7 | P << 25);
                        I = (W >>> 28 | P << 4) ^ (P >>> 2 | W << 30) ^ (P >>> 7 | W << 25);
                        T += I & 65535;
                        D += I >>> 16;
                        x += k & 65535;
                        $ += k >>> 16;
                        k = P & N ^ P & M ^ N & M;
                        I = W & q ^ W & U ^ q & U;
                        T += I & 65535;
                        D += I >>> 16;
                        x += k & 65535;
                        $ += k >>> 16;
                        D += T >>> 16;
                        x += D >>> 16;
                        $ += x >>> 16;
                        p = x & 65535 | $ << 16;
                        v = T & 65535 | D << 16;
                        k = u;
                        I = h;
                        T = I & 65535;
                        D = I >>> 16;
                        x = k & 65535;
                        $ = k >>> 16;
                        k = S;
                        I = R;
                        T += I & 65535;
                        D += I >>> 16;
                        x += k & 65535;
                        $ += k >>> 16;
                        D += T >>> 16;
                        x += D >>> 16;
                        $ += x >>> 16;
                        u = x & 65535 | $ << 16;
                        h = T & 65535 | D << 16;
                        N = i;
                        M = l;
                        w = s;
                        A = u;
                        F = c;
                        O = d;
                        B = m;
                        P = p;
                        q = _;
                        U = f;
                        V = g;
                        H = h;
                        G = y;
                        z = C;
                        j = b;
                        W = v;
                        if (L % 16 === 15) {
                            for(E = 0; E < 16; E++){
                                k = o[E];
                                I = a[E];
                                T = I & 65535;
                                D = I >>> 16;
                                x = k & 65535;
                                $ = k >>> 16;
                                k = o[(E + 9) % 16];
                                I = a[(E + 9) % 16];
                                T += I & 65535;
                                D += I >>> 16;
                                x += k & 65535;
                                $ += k >>> 16;
                                S = o[(E + 1) % 16];
                                R = a[(E + 1) % 16];
                                k = (S >>> 1 | R << 31) ^ (S >>> 8 | R << 24) ^ S >>> 7;
                                I = (R >>> 1 | S << 31) ^ (R >>> 8 | S << 24) ^ (R >>> 7 | S << 25);
                                T += I & 65535;
                                D += I >>> 16;
                                x += k & 65535;
                                $ += k >>> 16;
                                S = o[(E + 14) % 16];
                                R = a[(E + 14) % 16];
                                k = (S >>> 19 | R << 13) ^ (R >>> 29 | S << 3) ^ S >>> 6;
                                I = (R >>> 19 | S << 13) ^ (S >>> 29 | R << 3) ^ (R >>> 6 | S << 26);
                                T += I & 65535;
                                D += I >>> 16;
                                x += k & 65535;
                                $ += k >>> 16;
                                D += T >>> 16;
                                x += D >>> 16;
                                $ += x >>> 16;
                                o[E] = x & 65535 | $ << 16;
                                a[E] = T & 65535 | D << 16;
                            }
                        }
                    }
                    k = P;
                    I = W;
                    T = I & 65535;
                    D = I >>> 16;
                    x = k & 65535;
                    $ = k >>> 16;
                    k = e[0];
                    I = t[0];
                    T += I & 65535;
                    D += I >>> 16;
                    x += k & 65535;
                    $ += k >>> 16;
                    D += T >>> 16;
                    x += D >>> 16;
                    $ += x >>> 16;
                    e[0] = P = x & 65535 | $ << 16;
                    t[0] = W = T & 65535 | D << 16;
                    k = N;
                    I = q;
                    T = I & 65535;
                    D = I >>> 16;
                    x = k & 65535;
                    $ = k >>> 16;
                    k = e[1];
                    I = t[1];
                    T += I & 65535;
                    D += I >>> 16;
                    x += k & 65535;
                    $ += k >>> 16;
                    D += T >>> 16;
                    x += D >>> 16;
                    $ += x >>> 16;
                    e[1] = N = x & 65535 | $ << 16;
                    t[1] = q = T & 65535 | D << 16;
                    k = M;
                    I = U;
                    T = I & 65535;
                    D = I >>> 16;
                    x = k & 65535;
                    $ = k >>> 16;
                    k = e[2];
                    I = t[2];
                    T += I & 65535;
                    D += I >>> 16;
                    x += k & 65535;
                    $ += k >>> 16;
                    D += T >>> 16;
                    x += D >>> 16;
                    $ += x >>> 16;
                    e[2] = M = x & 65535 | $ << 16;
                    t[2] = U = T & 65535 | D << 16;
                    k = w;
                    I = V;
                    T = I & 65535;
                    D = I >>> 16;
                    x = k & 65535;
                    $ = k >>> 16;
                    k = e[3];
                    I = t[3];
                    T += I & 65535;
                    D += I >>> 16;
                    x += k & 65535;
                    $ += k >>> 16;
                    D += T >>> 16;
                    x += D >>> 16;
                    $ += x >>> 16;
                    e[3] = w = x & 65535 | $ << 16;
                    t[3] = V = T & 65535 | D << 16;
                    k = A;
                    I = H;
                    T = I & 65535;
                    D = I >>> 16;
                    x = k & 65535;
                    $ = k >>> 16;
                    k = e[4];
                    I = t[4];
                    T += I & 65535;
                    D += I >>> 16;
                    x += k & 65535;
                    $ += k >>> 16;
                    D += T >>> 16;
                    x += D >>> 16;
                    $ += x >>> 16;
                    e[4] = A = x & 65535 | $ << 16;
                    t[4] = H = T & 65535 | D << 16;
                    k = F;
                    I = G;
                    T = I & 65535;
                    D = I >>> 16;
                    x = k & 65535;
                    $ = k >>> 16;
                    k = e[5];
                    I = t[5];
                    T += I & 65535;
                    D += I >>> 16;
                    x += k & 65535;
                    $ += k >>> 16;
                    D += T >>> 16;
                    x += D >>> 16;
                    $ += x >>> 16;
                    e[5] = F = x & 65535 | $ << 16;
                    t[5] = G = T & 65535 | D << 16;
                    k = O;
                    I = z;
                    T = I & 65535;
                    D = I >>> 16;
                    x = k & 65535;
                    $ = k >>> 16;
                    k = e[6];
                    I = t[6];
                    T += I & 65535;
                    D += I >>> 16;
                    x += k & 65535;
                    $ += k >>> 16;
                    D += T >>> 16;
                    x += D >>> 16;
                    $ += x >>> 16;
                    e[6] = O = x & 65535 | $ << 16;
                    t[6] = z = T & 65535 | D << 16;
                    k = B;
                    I = j;
                    T = I & 65535;
                    D = I >>> 16;
                    x = k & 65535;
                    $ = k >>> 16;
                    k = e[7];
                    I = t[7];
                    T += I & 65535;
                    D += I >>> 16;
                    x += k & 65535;
                    $ += k >>> 16;
                    D += T >>> 16;
                    x += D >>> 16;
                    $ += x >>> 16;
                    e[7] = B = x & 65535 | $ << 16;
                    t[7] = j = T & 65535 | D << 16;
                    K += 128;
                    r -= 128;
                }
                return r;
            }
            function crypto_hash(e, t, n) {
                const r = new Int32Array(8);
                const o = new Int32Array(8);
                const a = new Uint8Array(256);
                let i;
                const l = n;
                r[0] = 1779033703;
                r[1] = 3144134277;
                r[2] = 1013904242;
                r[3] = 2773480762;
                r[4] = 1359893119;
                r[5] = 2600822924;
                r[6] = 528734635;
                r[7] = 1541459225;
                o[0] = 4089235720;
                o[1] = 2227873595;
                o[2] = 4271175723;
                o[3] = 1595750129;
                o[4] = 2917565137;
                o[5] = 725511199;
                o[6] = 4215389547;
                o[7] = 327033209;
                Z(r, o, t, n);
                n %= 128;
                for(i = 0; i < n; i++){
                    a[i] = t[l - n + i];
                }
                a[n] = 128;
                n = 256 - 128 * (n < 112 ? 1 : 0);
                a[n - 9] = 0;
                p(a, n - 8, l / 536870912 | 0, l << 3);
                Z(r, o, a, n);
                for(i = 0; i < 8; i++){
                    p(e, 8 * i, r[i], o[i]);
                }
                return 0;
            }
            const te = gf();
            const ne = gf();
            const re = gf();
            const oe = gf();
            const ae = gf();
            const ie = gf();
            const le = gf();
            const se = gf();
            const ue = gf();
            function add(e, t) {
                const n = te;
                const r = ne;
                const o = re;
                const a = oe;
                const i = ae;
                const l = ie;
                const s = le;
                const c = se;
                const d = ue;
                Z_1(n, e[1], e[0]);
                Z_1(d, t[1], t[0]);
                M_1(n, n, d);
                A_1(r, e[0], e[1]);
                A_1(d, t[0], t[1]);
                M_1(r, r, d);
                M_1(o, e[3], t[3]);
                M_1(o, o, u);
                M_1(a, e[2], t[2]);
                A_1(a, a, a);
                Z_1(i, r, n);
                Z_1(l, a, o);
                A_1(s, a, o);
                A_1(c, r, n);
                M_1(e[0], i, l);
                M_1(e[1], c, s);
                M_1(e[2], s, l);
                M_1(e[3], i, c);
                te.fill(0);
                ne.fill(0);
                re.fill(0);
                oe.fill(0);
                ae.fill(0);
                ie.fill(0);
                le.fill(0);
                se.fill(0);
                ue.fill(0);
            }
            function de(e, t, n) {
                let r;
                for(r = 0; r < 4; r++){
                    N(e[r], t[r], n);
                }
            }
            function me(e, n) {
                const r = gf();
                const o = gf();
                const a = gf();
                U(a, n[2]);
                M_1(r, n[0], a);
                M_1(o, n[1], a);
                pack25519(e, o);
                e[31] ^= A(r) << 7;
            }
            function scalarmult(e, t, n) {
                let r;
                let o;
                set25519(e[0], a);
                set25519(e[1], i);
                set25519(e[2], i);
                set25519(e[3], a);
                for(o = 255; o >= 0; --o){
                    r = n[o / 8 | 0] >> (o & 7) & 1;
                    de(e, t, r);
                    add(t, e);
                    add(e, e);
                    de(e, t, r);
                }
            }
            function scalarbase(e, n) {
                const r = [
                    gf(),
                    gf(),
                    gf(),
                    gf()
                ];
                set25519(r[0], c);
                set25519(r[1], d);
                set25519(r[2], i);
                M_1(r[3], c, d);
                scalarmult(e, r, n);
            }
            function crypto_sign_keypair(e, r, o) {
                const a = new Uint8Array(64);
                const i = [
                    gf(),
                    gf(),
                    gf(),
                    gf()
                ];
                let l;
                if (!o) {
                    n(r, 32);
                }
                crypto_hash(a, r, 32);
                a[0] &= 248;
                a[31] &= 127;
                a[31] |= 64;
                scalarbase(i, a);
                me(e, i);
                for(l = 0; l < 32; l++){
                    r[l + 32] = e[l];
                }
                return 0;
            }
            const L_1 = new Float64Array([
                237,
                211,
                245,
                92,
                26,
                99,
                18,
                88,
                214,
                156,
                247,
                162,
                222,
                249,
                222,
                20,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                16
            ]);
            function modL(e, t) {
                let n;
                let r;
                let o;
                let a;
                for(r = 63; r >= 32; --r){
                    n = 0;
                    o = r - 32;
                    for(a = r - 12; o < a; ++o){
                        t[o] += n - 16 * t[r] * L_1[o - (r - 32)];
                        n = Math.floor((t[o] + 128) / 256);
                        t[o] -= n * 256;
                    }
                    t[o] += n;
                    t[r] = 0;
                }
                n = 0;
                for(o = 0; o < 32; o++){
                    t[o] += n - (t[31] >> 4) * L_1[o];
                    n = t[o] >> 8;
                    t[o] &= 255;
                }
                for(o = 0; o < 32; o++){
                    t[o] -= n * L_1[o];
                }
                for(r = 0; r < 32; r++){
                    t[r + 1] += t[r] >> 8;
                    e[r] = t[r] & 255;
                }
            }
            function ye(e) {
                const t = new Float64Array(64);
                let n;
                for(n = 0; n < 64; n++){
                    t[n] = e[n];
                }
                for(n = 0; n < 64; n++){
                    e[n] = 0;
                }
                modL(e, t);
            }
            function crypto_sign(e, n, r, o) {
                const a = new Uint8Array(64);
                const i = new Uint8Array(64);
                const l = new Uint8Array(64);
                let s;
                let u;
                const c = new Float64Array(64);
                const d = [
                    gf(),
                    gf(),
                    gf(),
                    gf()
                ];
                crypto_hash(a, o, 32);
                a[0] &= 248;
                a[31] &= 127;
                a[31] |= 64;
                const m = r + 64;
                for(s = 0; s < r; s++){
                    e[64 + s] = n[s];
                }
                for(s = 0; s < 32; s++){
                    e[32 + s] = a[32 + s];
                }
                crypto_hash(l, e.subarray(32), r + 32);
                ye(l);
                scalarbase(d, l);
                me(e, d);
                for(s = 32; s < 64; s++){
                    e[s] = o[s];
                }
                crypto_hash(i, e, r + 64);
                ye(i);
                for(s = 0; s < 64; s++){
                    c[s] = 0;
                }
                for(s = 0; s < 32; s++){
                    c[s] = l[s];
                }
                for(s = 0; s < 32; s++){
                    for(u = 0; u < 32; u++){
                        c[s + u] += i[s] * a[u];
                    }
                }
                modL(e.subarray(32), c);
                return m;
            }
            function be(e, n) {
                const r = gf();
                const o = gf();
                const l = gf();
                const u = gf();
                const c = gf();
                const d = gf();
                const p = gf();
                set25519(e[2], i);
                unpack25519(e[1], n);
                S_1(l, e[1]);
                M_1(u, l, D_1);
                Z_1(l, l, e[2]);
                A_1(u, e[2], u);
                S_1(c, u);
                S_1(d, c);
                M_1(p, d, c);
                M_1(r, p, l);
                M_1(r, r, u);
                pow2523(r, r);
                M_1(r, r, l);
                M_1(r, r, u);
                M_1(r, r, u);
                M_1(e[0], r, u);
                S_1(o, e[0]);
                M_1(o, o, u);
                if (w(o, l)) {
                    M_1(e[0], e[0], m);
                }
                S_1(o, e[0]);
                M_1(o, o, u);
                if (w(o, l)) {
                    return -1;
                }
                if (A(e[0]) === n[31] >> 7) {
                    Z_1(e[0], a, e[0]);
                }
                M_1(e[3], e[0], e[1]);
                return 0;
            }
            function crypto_sign_open(e, n, r, o) {
                let a;
                const i = new Uint8Array(32);
                const l = new Uint8Array(64);
                const s = [
                    gf(),
                    gf(),
                    gf(),
                    gf()
                ];
                const u = [
                    gf(),
                    gf(),
                    gf(),
                    gf()
                ];
                if (r < 64 || be(u, o)) {
                    return -1;
                }
                for(a = 0; a < r; a++){
                    e[a] = n[a];
                }
                for(a = 0; a < 32; a++){
                    e[a + 32] = o[a];
                }
                crypto_hash(l, e, r);
                ye(l);
                scalarmult(s, u, l);
                scalarbase(u, n.subarray(32));
                add(s, u);
                me(i, s);
                r -= 64;
                if (crypto_verify_32(n, 0, i, 0)) {
                    for(a = 0; a < r; a++){
                        e[a] = 0;
                    }
                    return -1;
                }
                for(a = 0; a < r; a++){
                    e[a] = n[a + 64];
                }
                return r;
            }
            const crypto_secretbox_KEYBYTES = 32;
            const crypto_secretbox_NONCEBYTES = 24;
            const crypto_secretbox_ZEROBYTES = 32;
            const crypto_secretbox_BOXZEROBYTES = 16;
            const crypto_scalarmult_BYTES = 32;
            const crypto_scalarmult_SCALARBYTES = 32;
            const crypto_box_PUBLICKEYBYTES = 32;
            const crypto_box_SECRETKEYBYTES = 32;
            const crypto_box_BEFORENMBYTES = 32;
            const crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES;
            const crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES;
            const crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES;
            const crypto_sign_BYTES = 64;
            const crypto_sign_PUBLICKEYBYTES = 32;
            const crypto_sign_SECRETKEYBYTES = 64;
            const crypto_sign_SEEDBYTES = 32;
            const crypto_hash_BYTES = 64;
            e.lowlevel = {
                crypto_core_hsalsa20,
                crypto_stream_xor,
                crypto_stream,
                crypto_stream_salsa20_xor,
                crypto_stream_salsa20,
                crypto_onetimeauth,
                crypto_onetimeauth_verify,
                crypto_verify_16,
                crypto_verify_32,
                crypto_secretbox,
                crypto_secretbox_open,
                crypto_scalarmult,
                crypto_scalarmult_base,
                crypto_box_beforenm,
                crypto_box_afternm,
                crypto_box,
                crypto_box_open,
                crypto_box_keypair,
                crypto_hash,
                crypto_sign,
                crypto_sign_keypair,
                crypto_sign_open,
                crypto_secretbox_KEYBYTES,
                crypto_secretbox_NONCEBYTES,
                crypto_secretbox_ZEROBYTES,
                crypto_secretbox_BOXZEROBYTES,
                crypto_scalarmult_BYTES,
                crypto_scalarmult_SCALARBYTES,
                crypto_box_PUBLICKEYBYTES,
                crypto_box_SECRETKEYBYTES,
                crypto_box_BEFORENMBYTES,
                crypto_box_NONCEBYTES,
                crypto_box_ZEROBYTES,
                crypto_box_BOXZEROBYTES,
                crypto_sign_BYTES,
                crypto_sign_PUBLICKEYBYTES,
                crypto_sign_SECRETKEYBYTES,
                crypto_sign_SEEDBYTES,
                crypto_hash_BYTES,
                gf,
                D: D_1,
                L: L_1,
                pack25519,
                unpack25519,
                M: M_1,
                A: A_1,
                S: S_1,
                Z: Z_1,
                pow2523,
                add,
                set25519,
                modL,
                scalarmult,
                scalarbase
            };
            function Be(e, t) {
                if (e.length !== crypto_secretbox_KEYBYTES) {
                    throw new Error("bad key size");
                }
                if (t.length !== crypto_secretbox_NONCEBYTES) {
                    throw new Error("bad nonce size");
                }
            }
            function We(e, t) {
                if (e.length !== crypto_box_PUBLICKEYBYTES) {
                    throw new Error("bad public key size");
                }
                if (t.length !== crypto_box_SECRETKEYBYTES) {
                    throw new Error("bad secret key size");
                }
            }
            function qe(...args) {
                for(let e = 0; e < args.length; e++){
                    if (!(args[e] instanceof Uint8Array)) {
                        throw new TypeError("unexpected type, use Uint8Array");
                    }
                }
            }
            function Ue(e) {
                for(let t = 0; t < e.length; t++){
                    e[t] = 0;
                }
            }
            e.randomBytes = function(e) {
                const t = new Uint8Array(e);
                n(t, e);
                return t;
            };
            e.secretbox = function(e, t, n) {
                qe(e, t, n);
                Be(n, t);
                const r = new Uint8Array(crypto_secretbox_ZEROBYTES + e.length);
                const o = new Uint8Array(r.length);
                for(let a = 0; a < e.length; a++){
                    r[a + crypto_secretbox_ZEROBYTES] = e[a];
                }
                crypto_secretbox(o, r, r.length, t, n);
                return o.subarray(crypto_secretbox_BOXZEROBYTES);
            };
            e.secretbox.open = function(e, t, n) {
                qe(e, t, n);
                Be(n, t);
                const r = new Uint8Array(crypto_secretbox_BOXZEROBYTES + e.length);
                const o = new Uint8Array(r.length);
                for(let a = 0; a < e.length; a++){
                    r[a + crypto_secretbox_BOXZEROBYTES] = e[a];
                }
                if (r.length < 32 || crypto_secretbox_open(o, r, r.length, t, n) !== 0) {
                    return null;
                }
                return o.subarray(crypto_secretbox_ZEROBYTES);
            };
            e.secretbox.keyLength = crypto_secretbox_KEYBYTES;
            e.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
            e.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
            e.scalarMult = function(e, t) {
                qe(e, t);
                if (e.length !== crypto_scalarmult_SCALARBYTES) {
                    throw new Error("bad n size");
                }
                if (t.length !== crypto_scalarmult_BYTES) {
                    throw new Error("bad p size");
                }
                const n = new Uint8Array(crypto_scalarmult_BYTES);
                crypto_scalarmult(n, e, t);
                return n;
            };
            e.scalarMult.base = function(e) {
                qe(e);
                if (e.length !== crypto_scalarmult_SCALARBYTES) {
                    throw new Error("bad n size");
                }
                const t = new Uint8Array(crypto_scalarmult_BYTES);
                crypto_scalarmult_base(t, e);
                return t;
            };
            e.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
            e.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
            e.box = function(t, n, r, o) {
                const a = e.box.before(r, o);
                return e.secretbox(t, n, a);
            };
            e.box.before = function(e, t) {
                qe(e, t);
                We(e, t);
                const n = new Uint8Array(crypto_box_BEFORENMBYTES);
                crypto_box_beforenm(n, e, t);
                return n;
            };
            e.box.after = e.secretbox;
            e.box.open = function(t, n, r, o) {
                const a = e.box.before(r, o);
                return e.secretbox.open(t, n, a);
            };
            e.box.open.after = e.secretbox.open;
            e.box.keyPair = function() {
                const e = new Uint8Array(crypto_box_PUBLICKEYBYTES);
                const t = new Uint8Array(crypto_box_SECRETKEYBYTES);
                crypto_box_keypair(e, t);
                return {
                    publicKey: e,
                    secretKey: t
                };
            };
            e.box.keyPair.fromSecretKey = function(e) {
                qe(e);
                if (e.length !== crypto_box_SECRETKEYBYTES) {
                    throw new Error("bad secret key size");
                }
                const t = new Uint8Array(crypto_box_PUBLICKEYBYTES);
                crypto_scalarmult_base(t, e);
                return {
                    publicKey: t,
                    secretKey: new Uint8Array(e)
                };
            };
            e.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
            e.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
            e.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
            e.box.nonceLength = crypto_box_NONCEBYTES;
            e.box.overheadLength = e.secretbox.overheadLength;
            e.sign = function(e, t) {
                qe(e, t);
                if (t.length !== crypto_sign_SECRETKEYBYTES) {
                    throw new Error("bad secret key size");
                }
                const n = new Uint8Array(crypto_sign_BYTES + e.length);
                crypto_sign(n, e, e.length, t);
                return n;
            };
            e.sign.open = function(e, t) {
                qe(e, t);
                if (t.length !== crypto_sign_PUBLICKEYBYTES) {
                    throw new Error("bad public key size");
                }
                const n = new Uint8Array(e.length);
                const r = crypto_sign_open(n, e, e.length, t);
                if (r < 0) {
                    return null;
                }
                for(var o = new Uint8Array(r), a = 0; a < o.length; a++){
                    o[a] = n[a];
                }
                return o;
            };
            e.sign.detached = function(t, n) {
                const r = e.sign(t, n);
                for(var o = new Uint8Array(crypto_sign_BYTES), a = 0; a < o.length; a++){
                    o[a] = r[a];
                }
                return o;
            };
            e.sign.detached.verify = function(e, t, n) {
                qe(e, t, n);
                if (t.length !== crypto_sign_BYTES) {
                    throw new Error("bad signature size");
                }
                if (n.length !== crypto_sign_PUBLICKEYBYTES) {
                    throw new Error("bad public key size");
                }
                const r = new Uint8Array(crypto_sign_BYTES + e.length);
                const o = new Uint8Array(crypto_sign_BYTES + e.length);
                let a;
                for(a = 0; a < crypto_sign_BYTES; a++){
                    r[a] = t[a];
                }
                for(a = 0; a < e.length; a++){
                    r[a + crypto_sign_BYTES] = e[a];
                }
                return crypto_sign_open(o, r, r.length, n) >= 0;
            };
            e.sign.keyPair = function() {
                const e = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
                const t = new Uint8Array(crypto_sign_SECRETKEYBYTES);
                crypto_sign_keypair(e, t);
                return {
                    publicKey: e,
                    secretKey: t
                };
            };
            e.sign.keyPair.fromSecretKey = function(e) {
                qe(e);
                if (e.length !== crypto_sign_SECRETKEYBYTES) {
                    throw new Error("bad secret key size");
                }
                for(var t = new Uint8Array(crypto_sign_PUBLICKEYBYTES), n = 0; n < t.length; n++){
                    t[n] = e[32 + n];
                }
                return {
                    publicKey: t,
                    secretKey: new Uint8Array(e)
                };
            };
            e.sign.keyPair.fromSeed = function(e) {
                qe(e);
                if (e.length !== crypto_sign_SEEDBYTES) {
                    throw new Error("bad seed size");
                }
                const t = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
                const n = new Uint8Array(crypto_sign_SECRETKEYBYTES);
                for(let r = 0; r < 32; r++){
                    n[r] = e[r];
                }
                crypto_sign_keypair(t, n, true);
                return {
                    publicKey: t,
                    secretKey: n
                };
            };
            e.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
            e.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
            e.sign.seedLength = crypto_sign_SEEDBYTES;
            e.sign.signatureLength = crypto_sign_BYTES;
            e.hash = function(e) {
                qe(e);
                const t = new Uint8Array(crypto_hash_BYTES);
                crypto_hash(t, e, e.length);
                return t;
            };
            e.hash.hashLength = crypto_hash_BYTES;
            e.verify = function(e, t) {
                qe(e, t);
                if (e.length === 0 || t.length === 0 || e.length !== t.length) {
                    return false;
                }
                return _(e, 0, t, 0, e.length) === 0;
            };
            e.setPRNG = function(e) {
                n = e;
            };
            (()=>{
                const t = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
                if (t && t.getRandomValues) {
                    const n = 65536;
                    e.setPRNG(function(e, r) {
                        let o;
                        const a = new Uint8Array(r);
                        for(o = 0; o < r; o += n){
                            t.getRandomValues(a.subarray(o, o + Math.min(r - o, n)));
                        }
                        for(o = 0; o < r; o++){
                            e[o] = a[o];
                        }
                        Ue(a);
                    });
                } else {
                    if (t && t.randomBytes) {
                        e.setPRNG(function(e, n) {
                            let r;
                            const o = t.randomBytes(n);
                            for(r = 0; r < n; r++){
                                e[r] = o[r];
                            }
                            Ue(o);
                        });
                    }
                }
            })();
        })(typeof l !== "undefined" && l.exports ? l.exports : self.nacl = self.nacl || {});
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
            case undefined:
                return c();
        }
    }
    a.exports = d;
}, null);