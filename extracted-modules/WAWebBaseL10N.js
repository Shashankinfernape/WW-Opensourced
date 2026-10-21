__d("WAWebBaseL10N", [
    "Locale",
    "WAWeb-moment",
    "WAWebEventEmitter",
    "WAWebL10NNumbersPluginRegistry",
    "WAWebLocaleToTranslation",
    "WAWebSupportedLocales",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = new Set([
        "fa"
    ]);
    const s = "٠١٢٣٤٥٦٧٨٩".split("");
    const u = 1024 * 1024 * 1024;
    const c = 1024;
    const d = [
        "B",
        "KiB",
        "MiB",
        "GiB",
        "TiB",
        "PiB",
        "EiB",
        "ZiB",
        "YiB"
    ];
    const m = d.length - 1;
    const p = Math.pow(10, 6);
    const _ = Math.pow(10, 3);
    const f = Math.pow(10, 4);
    function g(e) {
        return s[parseInt(e, 10)];
    }
    const h = r("err")("Unimplemented method");
    const y = ((t)=>{
        function n(e) {
            let n;
            n = t.call(this) || this;
            if (!e) {
                throw h;
            }
            n.$WAWebBaseL10n$p_1 = e;
            n.customizeMoment();
            return n;
        }
        babelHelpers.inheritsLoose(n, t);
        const a = n.prototype;
        a.getLocale = function() {
            throw h;
        };
        a.getNormalizedLocale = function() {
            throw h;
        };
        a.getFullLocale = function() {
            throw h;
        };
        a.setLocale = function(t, n, r) {
            throw h;
        };
        a.normalizeLocaleToWajsLocale = function(t) {
            const e = t.replace(/-/g, "_").toLowerCase();
            const n = this.$WAWebBaseL10n$p_2(e);
            if (n) {
                return n;
            }
            for(let r = e; r;){
                r = r.split("_").slice(0, -1).join("_");
                const o = r && this.$WAWebBaseL10n$p_2(r);
                if (o != null && o !== "") {
                    return o;
                }
            }
        };
        a.isLocaleSupported = function(t) {
            return t != null && t !== "" && !!this.normalizeLocaleToWajsLocale(t);
        };
        a.$WAWebBaseL10n$p_2 = function(t) {
            const e = r("WAWebLocaleToTranslation")[t] || t;
            return r("WAWebSupportedLocales")[e];
        };
        a.isRTL = function() {
            return o("Locale").isRTL();
        };
        a.LR = function(t, n) {
            if (this.isRTL()) {
                return n;
            }
            return t;
        };
        a.embedDir = function(t, n = this.isRTL()) {
            if (n) {
                return this.embedRTL(t);
            }
            return this.embedLTR(t);
        };
        a.embedLTR = function(t) {
            return `‪${t}‬`;
        };
        a.embedRTL = function(t) {
            return `‫${t}‬`;
        };
        a.isolateLTR = function(t) {
            return `⁦${t}⁩`;
        };
        a.isolateRTL = function(t) {
            return `⁧${t}⁩`;
        };
        a.forceLTR = function(t) {
            return `‎${t}`;
        };
        a.forceRTL = function(t) {
            return `‏${t}`;
        };
        a.useArabicScriptDigits = function(n) {
            return e.has(n ?? this.getNormalizedLocale());
        };
        a.d = function(t, n, r) {
            const e = o("WAWebL10NNumbersPluginRegistry").l10nNumberFormattersRegister.get(this.getFullLocale());
            if (e != null && typeof t === "number") {
                return e.format(t, this.getFullLocale());
            }
            const a = typeof t === "number" && (t >= p || t >= _ && t < f) ? 1 : 0;
            return this.n(t, n, babelHelpers.extends({}, r, {
                notation: "compact",
                roundingMode: "trunc",
                trailingZeroDisplay: "stripIfInteger",
                minimumFractionDigits: a,
                maximumFractionDigits: a
            }));
        };
        a.n = function(t, n, r) {
            if (typeof t === "number") {
                return Intl.NumberFormat(this.getFullLocale(), r).format(t);
            }
            if (this.useArabicScriptDigits(n)) {
                return t.toString().replace(/[0-9]/g, g);
            }
            return t;
        };
        a.filesizeWithParams = function(t, n) {
            if (Number.isNaN(t)) {
                throw r("err")("Invalid filesize value: NaN");
            }
            const o = Math.abs(t);
            let a = Math.min(m, Math.max(0, Math.floor(Math.log(o) / Math.log(c))));
            const i = t > u ? 10 : 1;
            let l = Math.round(o / Math.pow(c, a) * i) / i;
            if (l === c && a < m) {
                l = 1;
                a++;
            }
            const s = d[a];
            const p = n[s] ?? s;
            const _ = Intl.NumberFormat(this.getFullLocale()).format(t < 0 ? -l : l);
            return this.n(`${_} ${p}`);
        };
        a.customizeMoment = function() {
            let e;
            (e = r("WAWeb-moment")).relativeTimeRounding(Math.floor);
            e.relativeTimeThreshold("s", 60);
            e.relativeTimeThreshold("m", 60);
            e.relativeTimeThreshold("h", 24);
        };
        return n;
    })(r("WAWebEventEmitter"));
    l.WAWebBaseL10n = y;
}, 98);