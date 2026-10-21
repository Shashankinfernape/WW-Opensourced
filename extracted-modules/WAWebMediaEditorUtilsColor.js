__d("WAWebMediaEditorUtilsColor", [
    "WAWebMediaEditorEnumsColors"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(e, t, n, r = 1, o){
            if (e < 0 || e > 255) {
                var a = new RangeError(`red (${e} given) should be >= 0 and <= 255`);
                a.stack;
                throw a;
            }
            if (t < 0 || t > 255) {
                var i = new RangeError(`green (${t} given) should be >= 0 and <= 255`);
                i.stack;
                throw i;
            }
            if (n < 0 || n > 255) {
                var l = new RangeError(`blue (${n} given) should be >= 0 and <= 255`);
                l.stack;
                throw l;
            }
            if (r < 0 || r > 1) {
                var s = new RangeError(`alpha (${r} given) should be >= 0 and <= 1`);
                s.stack;
                throw s;
            }
            this.$1 = e;
            this.$2 = t;
            this.$3 = n;
            this.$4 = r;
            this.colorType = o;
        }
        static fromHex(n, r) {
            let t = n.trim().toLowerCase();
            if (t.length && t[0] === "#") {
                t = t.substr(1);
            }
            if (t.length !== 3 && t.length !== 6) {
                const o = new RangeError(`hex ${n} does not have 3 or 6 digits`);
                o.stack;
                throw o;
            }
            if (t.length === 3) {
                t = `${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`;
            }
            const a = parseInt(t.substr(0, 2), 16);
            const i = parseInt(t.substr(2, 2), 16);
            const l = parseInt(t.substr(4, 2), 16);
            if (isNaN(a) || isNaN(i) || isNaN(l)) {
                const s = new RangeError(`hex ${n} is invalid`);
                s.stack;
                throw s;
            }
            const u = 1;
            return new e(a, i, l, u, r);
        }
        static $5({ hue, lightness, saturation }) {
            let a;
            let i;
            let l;
            if (saturation === 0 || lightness === 0) {
                l = lightness;
                i = lightness;
                a = lightness;
            } else {
                const m2 = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
                const m1 = 2 * lightness - m2;
                a = s({
                    hue: hue + 0.3333333333333333,
                    m1,
                    m2
                });
                i = s({
                    hue,
                    m1,
                    m2
                });
                l = s({
                    hue: hue - 0.3333333333333333,
                    m1,
                    m2
                });
            }
            return new e(Math.round(a * 255), Math.round(i * 255), Math.round(l * 255));
        }
        toRgb() {
            return {
                red: this.$1,
                green: this.$2,
                blue: this.$3
            };
        }
        toRgba() {
            return {
                red: this.$1,
                green: this.$2,
                blue: this.$3,
                alpha: this.$4
            };
        }
        toRgbString() {
            return `rgb(${this.$1}, ${this.$2}, ${this.$3})`;
        }
        toRgbaString() {
            return `rgba(${this.$1}, ${this.$2}, ${this.$3}, ${this.$4})`;
        }
        toHex() {
            const e = u(this.$1.toString(16), 2);
            const t = u(this.$2.toString(16), 2);
            const n = u(this.$3.toString(16), 2);
            return `#${e}${t}${n}`.toUpperCase();
        }
        toHsl() {
            const e = this.$1 / 255;
            const t = this.$2 / 255;
            const n = this.$3 / 255;
            const r = Math.max(e, t, n);
            const o = Math.min(e, t, n);
            let a = (r + o) / 2;
            let saturation = (r + o) / 2;
            const lightness = (r + o) / 2;
            if (r === o) {
                saturation = 0;
                a = 0;
            } else {
                const s = r - o;
                saturation = lightness > 0.5 ? s / (2 - r - o) : s / (r + o);
                switch(r){
                    case e:
                        a = (t - n) / s + (t < n ? 6 : 0);
                        break;
                    case t:
                        a = (n - e) / s + 2;
                        break;
                    case n:
                        a = (e - t) / s + 4;
                        break;
                }
                a /= 6;
            }
            return {
                hue: a,
                saturation,
                lightness
            };
        }
        getBackgroundAndTintColors() {
            const t = this.toHsl();
            const { hue, lightness, saturation } = t;
            let backgroundColor;
            let tintColor;
            if (lightness < 0.55 && saturation > 0.1) {
                let s = hue;
                if (hue > 0.08 && hue < 0.22) {
                    s = hue < 0.22000000000000003 ? 0.08 : 0.22;
                }
                backgroundColor = e.$5({
                    hue: s,
                    lightness: Math.min(lightness, 0.25),
                    saturation: saturation < 0.01 ? 0 : Math.max(saturation, 0.75)
                });
                tintColor = new e(255, 255, 255, 1, o("WAWebMediaEditorEnumsColors").ColorType.WHITE);
            } else {
                backgroundColor = e.$5({
                    hue,
                    lightness: Math.max(lightness, 0.9),
                    saturation: Math.min(saturation, 0.33)
                });
                tintColor = e.$5({
                    hue,
                    lightness: 0.2,
                    saturation: saturation === 0 ? 0 : 0.4
                });
            }
            return {
                backgroundColor,
                tintColor
            };
        }
        withAlpha(n) {
            return new e(this.$1, this.$2, this.$3, n, this.colorType);
        }
        isLight() {
            return this.$1 * 0.299 + this.$2 * 0.587 + this.$3 * 0.114 > 190;
        }
        isWhite() {
            const e = this.toHsl();
            const e_lightness = e.lightness;
            return e_lightness >= 0.996;
        }
        equals(t) {
            return this.$1 === t.$1 && this.$2 === t.$2 && this.$3 === t.$3 && this.$4 === t.$4;
        }
        clone() {
            return new e(this.$1, this.$2, this.$3, this.$4, this.colorType);
        }
        toString() {
            return `(${this.$1}, ${this.$2}, ${this.$3}, ${this.$4})`;
        }
        getAlpha() {
            return this.$4;
        }
    }
    e.Black = new e(0, 0, 0, 1, o("WAWebMediaEditorEnumsColors").ColorType.BLACK);
    e.White = new e(255, 255, 255, 1, o("WAWebMediaEditorEnumsColors").ColorType.WHITE);
    function s({ hue, m1, m2 }) {
        let o = hue;
        if (o < 0) {
            o += 1;
        }
        if (o > 1) {
            o -= 1;
        }
        if (o < 1 / 6) {
            return m1 + (m2 - m1) * 6 * o;
        }
        if (o < 1 / 2) {
            return m2;
        }
        if (o < 2 / 3) {
            return m1 + (m2 - m1) * (2 / 3 - o) * 6;
        }
        return m1;
    }
    function u(e, t) {
        if (e.length >= t) {
            return e;
        }
        return "0".repeat(t - e.length) + e;
    }
    l.Color = e;
}, 98);