__d("intlNumUtils", [
    "FbtHooks",
    "NumberFormatConsts",
    "escapeRegex"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 3;
    const u = [
        "грн.",
        "ден.",
        "лв.",
        "ман.",
        "դր.",
        "ج.م.",
        "د.إ.",
        "د.ا.",
        "د.ب.",
        "د.ت.",
        "د.ج.",
        "د.ع.",
        "د.ك.",
        "د.ل.",
        "د.م.",
        "ر.س.",
        "ر.ع.",
        "ر.ق.",
        "ر.ي.",
        "ل.س.",
        "ل.ل.",
        "ރ.",
        "B/.",
        "Bs.",
        "Fr.",
        "kr.",
        "L.",
        "p.",
        "S/."
    ];
    const c = {};
    function d(e) {
        if (!c[e]) {
            c[e] = new RegExp(e, "i");
        }
        return c[e];
    }
    const m = d(u.reduce((acc, item, index)=>`${acc + (index ? "|" : "")}(${r("escapeRegex")(item)})`, ""));
    function formatNumberRaw(e, t, n = "", o = ".", a = 0, i = {
        primaryGroupSize: s,
        secondaryGroupSize: s
    }, l) {
        const u = i.primaryGroupSize || s;
        const c = i.secondaryGroupSize || u;
        const m = l && l.digits;
        let p;
        if (t == null) {
            p = e.toString();
        } else if (typeof e === "string") {
            p = truncateLongNumber(e, t);
        } else {
            p = C(e, t);
        }
        const f = p.split(".");
        let g = f[0];
        let h = f[1];
        if (Math.abs(parseInt(g, 10)).toString().length >= a) {
            let y = "";
            const b = `\$1${n}\$2\$3`;
            const S = `(\\d)(\\d{${u - 0}})(\$|\\D)`;
            y = g.replace(d(S), b);
            if (y != g) {
                g = y;
                const R = `(\\d)(\\d{${c - 0}})(${r("escapeRegex")(n)})`;
                for(const L = d(R); (y = g.replace(L, b)) != g;){
                    g = y;
                }
            }
        }
        if (m != null) {
            g = _(g, m);
            h = h && _(h, m);
        }
        let E = g;
        if (h) {
            E += o + h;
        }
        return E;
    }
    function _(e, t) {
        let n = "";
        for(let r = 0; r < e.length; ++r){
            const o = t[e.charCodeAt(r) - 48];
            n += o !== undefined ? o : e[r];
        }
        return n;
    }
    function formatNumber(t, n) {
        const o = r("NumberFormatConsts").get((e || (e = r("FbtHooks"))).getViewerContext().locale);
        if (o == null) {
            return String(t);
        }
        return formatNumberRaw(t, n, "", o.decimalSeparator, o.minDigitsForThousandsSeparator, o.standardDecimalPatternInfo, o.numberingSystemData);
    }
    function formatNumberWithThousandDelimiters(t, n) {
        const o = r("NumberFormatConsts").get((e || (e = r("FbtHooks"))).getViewerContext().locale);
        if (o == null) {
            return String(t);
        }
        return formatNumberRaw(t, n, o.numberDelimiter, o.decimalSeparator, o.minDigitsForThousandsSeparator, o.standardDecimalPatternInfo, o.numberingSystemData);
    }
    function h(e) {
        return e && Math.floor(Math.log10(Math.abs(e)));
    }
    function formatNumberWithLimitedSigFig(e, t, n) {
        const r = h(e);
        let o = e;
        if (r < n) {
            o = e * 10 ** (-r + n);
        }
        const a = 10 ** (h(o) - n + 1);
        let i = Math.round(o / a) * a;
        if (r < n && (i /= 10 ** (-r + n), t == null)) {
            return formatNumberWithThousandDelimiters(i, n - r - 1);
        }
        return formatNumberWithThousandDelimiters(i, t);
    }
    function C(e, t) {
        const n = t ?? 0;
        const r = 10 ** n;
        let o = (Math.round(e * r) / r).toString();
        if (!n || o.indexOf("e-") !== -1) {
            return o;
        }
        const a = o.indexOf(".");
        let i = 0;
        if (a === -1) {
            o += ".";
            i = n;
        } else {
            i = n - (o.length - a - 1);
        }
        for(let l = 0, s = i; l < s; l++){
            o += "0";
        }
        return o;
    }
    const b = (t, n)=>{
        let e = t;
        for(let r = 0; r < n; r++){
            e += "0";
        }
        return e;
    };
    function truncateLongNumber(e, t) {
        const n = e.indexOf(".");
        const r = n === -1 ? e : e.slice(0, n);
        const o = n === -1 ? "" : e.slice(n + 1);
        if (t != null) {
            return `${r}.${b(o.slice(0, t), t - o.length)}`;
        }
        return r;
    }
    function parseNumberRaw(e, t, n = "") {
        const o = L();
        let a = e;
        if (o) {
            a = e.split("").map((e)=>o[e] || e).join("").trim();
        }
        a = a.replace(/^[^\d]*\-/, "");
        a = a.replace(m, "");
        const i = r("escapeRegex")(t);
        const l = r("escapeRegex")(n);
        const s = d(`^[^\\d]*\\d.*${i}.*\\d[^\\d]*\$`);
        if (!s.test(a)) {
            const u = d(`(^[^\\d]*)${i}(\\d*[^\\d]*\$)`);
            if (u.test(a)) {
                a = a.replace(u, "$1$2");
                return R(a);
            }
            const c = d(`^[^\\d]*[\\d ${r("escapeRegex")(l)}]*[^\\d]*\$`);
            if (!c.test(a)) {
                a = "";
            }
            return R(a);
        }
        const p = d(`(^[^\\d]*[\\d ${l}]*)${i}(\\d*[^\\d]*\$)`);
        a = p.test(a) ? a.replace(p, "$1$2") : "";
        return R(a);
    }
    function R(e) {
        const t = e.replace(/[^0-9\u0001\u0002]/g, "").replace("", ".").replace("", "-");
        const n = Number(t);
        if (t === "" || isNaN(n)) {
            return null;
        }
        return n;
    }
    function L() {
        const t = r("NumberFormatConsts").get((e || (e = r("FbtHooks"))).getViewerContext().locale);
        if (t == null) {
            return null;
        }
        const n = {};
        const o = t.numberingSystemData && t.numberingSystemData.digits;
        if (o == null) {
            return null;
        }
        for(let a = 0; a < o.length; a++){
            n[o.charAt(a)] = a.toString();
        }
        return n;
    }
    function parseNumber(t) {
        const n = r("NumberFormatConsts").get((e || (e = r("FbtHooks"))).getViewerContext().locale);
        if (n == null) {
            return null;
        }
        return parseNumberRaw(t, n.decimalSeparator || ".", n.numberDelimiter);
    }
    var k = {
        formatNumber,
        formatNumberRaw,
        formatNumberWithThousandDelimiters,
        formatNumberWithLimitedSigFig,
        parseNumber,
        parseNumberRaw,
        truncateLongNumber,
        getFloatString: function(t, n, r) {
            const e = String(t);
            const o = e.split(".");
            const a = k.getIntegerString(o[0], n);
            if (o.length === 1) {
                return a;
            }
            return a + r + o[1];
        },
        getIntegerString: function(t, n) {
            let e = n;
            if (e === "") {
                e = ",";
            }
            for(var r = String(t), o = /(\d+)(\d{3})/; o.test(r);){
                r = r.replace(o, `\$1${e}\$2`);
            }
            return r;
        }
    };
    i.exports = k;
}, 34);