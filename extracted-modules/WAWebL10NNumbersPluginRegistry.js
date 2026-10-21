__d("WAWebL10NNumbersPluginRegistry", [], function(t, n, r, o, a, i) {
    const e = Math.pow(10, 3);
    const l = Math.pow(10, 6);
    function s({ factor: t, locale: n, n: r, precision: a = 1 }) {
        const i = ".";
        const l = r / Math.pow(10, t);
        const s = l.toString(10).split(".");
        const u = s[0];
        const c = s[1];
        if (c == null || c.startsWith("0".repeat(a)) || Number.parseInt(u, 10) >= 100) {
            return parseInt(u, 10).toLocaleString(n);
        }
        return parseFloat(`${u}${i}${c.slice(0, a)}`).toLocaleString(n);
    }
    function u(e, t) {
        return Intl.NumberFormat(t, {
            notation: "compact"
        }).format(e);
    }
    const c = {
        locales: [
            "fr",
            "fr-BE",
            "fr-CA",
            "fr-CH",
            "fr-FR"
        ],
        format: function(t, n) {
            const e = u(t, n);
            return e.toLocaleUpperCase(n);
        }
    };
    const d = {
        locales: [
            "he",
            "he-IL"
        ],
        format: function(n, r) {
            if (n < e) {
                return n.toLocaleString(r);
            }
            if (n < l) {
                return `${s({
                    factor: 3,
                    locale: r,
                    n
                })} אלף`;
            }
            return `${s({
                factor: 6,
                locale: r,
                n
            })} מיליון`;
        }
    };
    const m = {
        locales: [
            "ro",
            "ro-RO"
        ],
        format: function(n, r) {
            if (n < e) {
                return n.toLocaleString(r);
            }
            if (n === e) {
                return "1 mie";
            }
            if (n < l) {
                return `${s({
                    factor: 3,
                    locale: r,
                    n
                })} mii`;
            }
            return `${s({
                factor: 6,
                locale: r,
                n
            })} mil.`;
        }
    };
    const p = {
        locales: [
            "zh-SG",
            "zh-CN"
        ],
        format: function(n, r) {
            if (n < e) {
                return n.toLocaleString(r);
            }
            if (n < Math.pow(10, 4)) {
                return `${s({
                    factor: 3,
                    locale: r,
                    n
                })}千`;
            }
            return u(n, r);
        }
    };
    const _ = {
        locales: [
            "ja"
        ],
        format: function(n, r) {
            if (n < e) {
                return n.toLocaleString(r);
            }
            if (n < Math.pow(10, 4)) {
                return `${s({
                    factor: 3,
                    locale: r,
                    n
                })}千`;
            }
            return u(n, r);
        }
    };
    const f = {
        locales: [
            "de",
            "de-AT",
            "de-CH",
            "de-DE",
            "de-LI",
            "de-LU"
        ],
        format: function(n, r) {
            if (n > e && n < l) {
                return `${s({
                    factor: 3,
                    locale: r,
                    n
                })} Tsd.`;
            }
            return u(n, r);
        }
    };
    const g = {
        locales: [
            "it",
            "it-CH",
            "it-IT"
        ],
        format: function(n, r) {
            if (n < e) {
                return n.toLocaleString(r);
            }
            if (n < l) {
                return `${s({
                    factor: 3,
                    locale: r,
                    n
                })} mila`;
            }
            return `${s({
                factor: 6,
                locale: r,
                n
            })} mln`;
        }
    };
    const h = {
        locales: [
            "pt",
            "pt-BR",
            "pt-PT"
        ],
        format: function(n, r) {
            if (n < e) {
                return n.toLocaleString(r);
            }
            if (n < l) {
                return u(n, r);
            }
            return `${s({
                factor: 6,
                locale: r,
                n
            })} M`;
        }
    };
    const y = {
        locales: [
            "zh-TW",
            "zh-MO",
            "zh-HK"
        ],
        format: function(n, r) {
            if (n < e) {
                return n.toLocaleString(r);
            }
            if (n < Math.pow(10, 4)) {
                return `${s({
                    factor: 3,
                    locale: r,
                    n
                })}千`;
            }
            return u(n, "zh-TW");
        }
    };
    const C = [
        f,
        c,
        g,
        d,
        _,
        h,
        m,
        y,
        p
    ];
    const b = v();
    function v() {
        const e = new Map;
        const t = function(n) {
            n.locales.forEach((t)=>e.set(t, n));
        };
        for (const n of C){
            t(n);
        }
        return e;
    }
    i.M = l;
    i.l10nNumberFormattersRegister = b;
}, 66);