__d("WAWebSpoilerParticlesAnimation", [
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 0.55;
    const s = 1.3;
    const u = 2;
    const c = 6;
    const d = 0.18;
    const m = 1;
    const p = 2;
    const _ = 0.25;
    const f = 0.25;
    const g = 0.5;
    const h = 0.7;
    const y = 0.4;
    const C = 0.03;
    const b = 3;
    const v = 0.5;
    const S = 800;
    const R = 5;
    const L = 20;
    const E = 1.05;
    const k = 1.5;
    const I = Math.PI * 2;
    const T = 1000;
    const D = 0.5 * _;
    const x = 0.5 * f;
    const $ = 0.5 * L;
    const P = 1 / 30;
    const N = "#000";
    const M = 0;
    const w = 1;
    const A = 2;
    const F = 3;
    const O = 4;
    const B = 5;
    const W = 6;
    const q = 7;
    class U {
        constructor(e, t){
            var n = this;
            this.$25 = function(e) {
                const t = n.$12 === 0 ? 0 : Math.min((e - n.$12) / T, 0.05);
                if (n.$11) {
                    n.$14 = window.requestAnimationFrame(n.$25);
                } else {
                    n.$14 = null;
                }
                if (!(n.$12 !== 0 && t < P)) {
                    n.$12 = e;
                    n.$13 += t;
                    n.$24();
                    if (n.isDismissed()) {
                        n.pause();
                    }
                }
            };
            this.$1 = e;
            this.$2 = r("nullthrows")(e.getContext("2d"));
            this.$3 = t;
            this.$4 = new Float32Array(0);
            this.$5 = 0;
            this.$6 = new Float32Array(0);
            this.$7 = 0;
            this.$8 = null;
            this.$9 = new Float32Array(0);
            this.$10 = 0;
            this.$11 = false;
            this.$12 = 0;
            this.$13 = 0;
            this.$14 = null;
            this.$15 = N;
            this.$16 = NaN;
            this.$17 = 0;
            this.$18 = 0;
            this.$19 = 0;
            this.$20 = 0;
            this.$21 = 0;
        }
        init(t) {
            this.$22(t);
            this.$23();
            this.$24();
        }
        play() {
            if (!(this.$11 || this.isDismissed())) {
                this.$11 = true;
                this.$12 = 0;
                this.$14 = window.requestAnimationFrame(this.$25);
            }
        }
        pause() {
            if (this.$11) {
                this.$11 = false;
                if (this.$14 != null) {
                    window.cancelAnimationFrame(this.$14);
                    this.$14 = null;
                }
            }
        }
        setParticleColor(t) {
            this.$15 = t;
        }
        dismiss(t, n) {
            if (Number.isNaN(this.$16)) {
                this.$16 = this.$13;
                this.$17 = t;
                this.$18 = n;
            }
        }
        isDismissed() {
            if (Number.isNaN(this.$16)) {
                return false;
            }
            return this.$13 - this.$16 >= k;
        }
        $22(t) {
            const e = window.devicePixelRatio || 1;
            const { height, width } = t;
            this.$1.width = Math.ceil(width * e);
            this.$1.height = Math.ceil(height * e);
            this.$1.style.width = `${width}px`;
            this.$1.style.height = `${height}px`;
            this.$2.setTransform(e, 0, 0, e, 0, 0);
            const length = this.$3.length;
            this.$4 = new Float32Array(length * 4);
            this.$6 = new Float32Array(length);
            let a = 0;
            let i = 0;
            for(let l = 0; l < length; l++){
                const s = this.$3[l];
                const u = s.x + m;
                const c = s.y + p;
                const d = s.x + s.width - m;
                const _ = s.y + s.height - p;
                if (!(d <= u || _ <= c)) {
                    const f = i * 4;
                    this.$4[f] = u;
                    this.$4[f + 1] = c;
                    this.$4[f + 2] = d;
                    this.$4[f + 3] = _;
                    a += (d - u) * (_ - c);
                    this.$6[i] = a;
                    i++;
                }
            }
            this.$5 = i;
            this.$7 = a;
            const g = new Path2D;
            for(let h = 0; h < length; h++){
                const y = this.$3[h];
                g.rect(y.x, y.y, y.width, y.height);
            }
            this.$8 = g;
        }
        $23() {
            if (this.$5 === 0) {
                this.$9 = new Float32Array(0);
                this.$10 = 0;
                return;
            }
            const e = Math.ceil(this.$7 * d);
            this.$9 = new Float32Array(e * q);
            this.$10 = e;
            for(let t = 0; t < e; t++){
                const n = V() * b;
                this.$26(t * q, -n);
            }
        }
        $26(n, r) {
            const t = this.$9;
            const o = this.$4;
            for(var a = this.$6, i = this.$5, l = V() * this.$7, d = 0; d < i - 1 && !(l <= a[d]); d++);
            const m = d * 4;
            const p = o[m];
            const _ = o[m + 1];
            const f = o[m + 2];
            const y = o[m + 3];
            const C = V() * I;
            const b = u + V() * (c - u);
            const v = e + V() * (s - e);
            const S = H(g + (V() - 0.5) * h, 0, 1);
            t[n + M] = p + V() * (f - p);
            t[n + w] = _ + V() * (y - _);
            t[n + A] = Math.cos(C) * b;
            t[n + F] = Math.sin(C) * b;
            t[n + O] = v;
            t[n + B] = S;
            t[n + W] = r;
        }
        $24() {
            const e = this.$2;
            const t = this.$9;
            const $10 = this.$10;
            const $13 = this.$13;
            const o = !Number.isNaN(this.$16);
            const a = o ? $13 - this.$16 : 0;
            const i = a * S;
            const l = i * i;
            e.clearRect(0, 0, this.$1.width, this.$1.height);
            e.save();
            if (this.$8 != null) {
                e.clip(this.$8);
            }
            e.fillStyle = this.$15;
            for(let s = 0; s < $10; s++){
                const u = s * q;
                const c = t[u + W];
                const d = $13 - c;
                const m = t[u + B];
                const p = m - y * d;
                const _ = 1 - C * d;
                const f = d >= b || p <= 0 || _ <= 0;
                if (f) {
                    if (o) {
                        continue;
                    }
                    this.$26(u, $13);
                    continue;
                }
                const g = t[u + M];
                const h = t[u + w];
                const R = t[u + A];
                const L = t[u + F];
                const E = d * d;
                let k = g + R * d + D * E;
                let T = h + L * d + x * E;
                let $ = p;
                if (o) {
                    if (this.$27(k, T, p, l, i)) {
                        k = this.$19;
                        T = this.$20;
                        $ = this.$21;
                    }
                } else if (!this.$28(k, T) && V() < v) {
                    this.$26(u, $13);
                    continue;
                }
                const P = t[u + O] * _;
                if (!(P <= 0.05 || $ <= 0)) {
                    e.globalAlpha = $;
                    e.beginPath();
                    e.arc(k, T, P, 0, I);
                    e.fill();
                }
            }
            e.globalAlpha = 1;
            e.restore();
        }
        $27(t, n, r, o, a) {
            const e = t - this.$17;
            const i = n - this.$18;
            const l = e * e + i * i;
            if (l > o) {
                return false;
            }
            const s = Math.sqrt(l);
            const u = (a - s) / S;
            let c;
            let d;
            if (s > 0.01) {
                c = e / s;
                d = i / s;
            } else {
                const m = V() * I;
                c = Math.cos(m);
                d = Math.sin(m);
            }
            const p = R * u + $ * u * u;
            const _ = Math.max(0, 1 - u / E);
            this.$19 = t + c * p;
            this.$20 = n + d * p;
            this.$21 = r * _;
            return true;
        }
        $28(t, n) {
            const e = this.$4;
            for(let r = this.$5, o = 0; o < r; o++){
                const a = o * 4;
                if (t >= e[a] && t <= e[a + 2] && n >= e[a + 1] && n <= e[a + 3]) {
                    return true;
                }
            }
            return false;
        }
    }
    function V() {
        return Math.random();
    }
    function H(e, t, n) {
        if (e < t) {
            return t;
        }
        if (e > n) {
            return n;
        }
        return e;
    }
    l.default = U;
}, 98);