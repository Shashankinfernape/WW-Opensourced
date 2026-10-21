__d("intlSummarizeNumber", [
    "FbtNumberType",
    "IntlCompactDecimalNumberFormatConfig",
    "IntlVariations",
    "intlNumUtils"
], function(t, n, r, o, a, i, l) {
    const e = 3;
    const s = 14;
    const u = {
        ROUND: "ROUND",
        TRUNCATE: "TRUNCATE",
        NONE: "NONE"
    };
    const c = {
        SHORT: "SHORT",
        LONG: "LONG",
        NONE: "NONE"
    };
    const d = {
        ALWAYS_SHOW: "ALWAYS_SHOW",
        HIDE_IF_ZERO: "HIDE_IF_ZERO"
    };
    function m(e, t) {
        let n = t;
        let r = e;
        for(let o = n ?? 0; o > 0; o--){
            if (r % 1 === 0 && n != null) {
                n--;
            }
            r *= 10;
        }
        return n;
    }
    function p(t, n, o = c.SHORT, a = u.ROUND, i = d.ALWAYS_SHOW) {
        const p = r("IntlCompactDecimalNumberFormatConfig")[o === c.SHORT ? "short_patterns" : "long_patterns"];
        let f = t === 0 ? 0 : Math.floor(Math.log10(Math.abs(t)));
        if (f > s) {
            f = s;
        }
        const g = a === u.NONE ? [
            t,
            n,
            false
        ] : _(t, f, n, a, p);
        let h = g[0];
        let y = g[1];
        let C = g[2];
        if (C && a === u.ROUND) {
            f += 1;
            const b = _(t, f, n, a, p);
            h = b[0];
            y = b[1];
            C = b[2];
        }
        const v = r("FbtNumberType").getVariation(h) || r("IntlVariations").NUMBER_OTHER;
        const S = f.toString();
        const R = p?.[S]?.[v.toString()];
        if (f < e && i === d.HIDE_IF_ZERO) {
            return r("intlNumUtils").formatNumberWithThousandDelimiters(h, m(h, y));
        }
        if (!R || f < e || R.positive_prefix_pattern === "" && R.positive_suffix_pattern === "") {
            const L = n === undefined ? 0 : n;
            return r("intlNumUtils").formatNumberWithThousandDelimiters(t, L);
        }
        if (i === d.HIDE_IF_ZERO) {
            y = m(h, y);
        }
        if (o === c.NONE) {
            return r("intlNumUtils").formatNumberWithThousandDelimiters(h, y);
        }
        if (R && R.min_integer_digits === 0 && h === 1) {
            return R.positive_prefix_pattern + R.positive_suffix_pattern;
        }
        return (R && R.positive_prefix_pattern || "") + r("intlNumUtils").formatNumberWithThousandDelimiters(h, y) + (R && R.positive_suffix_pattern || "");
    }
    function _(e, t, n, o, a) {
        const l = t.toString();
        const c = a?.[l]?.[r("IntlVariations").NUMBER_OTHER.toString()];
        const d = c && c.min_integer_digits || t + 1;
        const m = t - d + 1;
        const p = Math.abs(e) / 10 ** m;
        const _ = n != null;
        let f = _ ? n : c && c.min_fraction_digits;
        if (f == null) {
            f = t > 2 ? 1 : 0;
        }
        const g = o === u.TRUNCATE ? r("intlNumUtils").truncateLongNumber(p.toString(), f) : p.toFixed(f);
        const h = parseFloat(g) * (e < 0 ? -1 : 1);
        return [
            h,
            h % 1 === 0 && !_ ? 0 : f,
            g.length > d + (f > 0 ? f + 1 : 0) + (p >= 0 ? 0 : 1) && t < s
        ];
    }
    l.default = p;
}, 98);