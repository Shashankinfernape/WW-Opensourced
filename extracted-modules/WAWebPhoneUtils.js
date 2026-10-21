__d("WAWebPhoneUtils", [
    "WACountriesV2",
    "WAJids",
    "WAPhoneFindCC",
    "WAWebInflatePhoneRegex",
    "WAWebODS"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    const s = (()=>{
        function e(e) {
            let t;
            if (Array.isArray(e)) {
                t = e[0];
                let n = e[1];
                if (n != null && n !== -1) {
                    if (!Array.isArray(n)) {
                        n = [
                            n
                        ];
                    }
                    this.$3 = n.map((e)=>new RegExp(`^(${e})`));
                }
                this.$2 = e[2];
            } else {
                t = e;
            }
            this.$1 = new RegExp(`^${o("WAWebInflatePhoneRegex").inflatePhoneRegex(t)}\$`);
        }
        const t = e.prototype;
        t.testAndFormat = function(t) {
            if (!(!this.$1.test(t) || !this.$4(t))) {
                if (typeof this.$2 === "string") {
                    return t.replace(this.$1, this.$2);
                }
                const e = this.$1.exec(t);
                if (e != null) {
                    return e.slice(1).join(this.$2 != null ? "-" : " ");
                }
            }
        };
        t.$4 = function(t) {
            return !this.$3 || this.$3.some((e)=>e.test(t));
        };
        return e;
    })();
    const u = {};
    function c(e) {
        const t = u;
        const n = r("WACountriesV2");
        if (t[e] != null) {
            return t[e];
        }
        const o = n[e] != null ? JSON.parse(`[${n[e]}]`) : null;
        if (o == null) {
            return null;
        }
        const a = o.pop();
        let i = null;
        if (typeof a === "string") {
            const l = a;
            const c = o.pop();
            try {
                i = new RegExp(`^(?:${l})\$`);
            } catch (e) {}
            return t[e] = {
                formats: o.map((e)=>new s(e)),
                lengths: c,
                validMobileRegex: i
            };
        }
        return t[e] = {
            formats: o.map((e)=>new s(e)),
            lengths: a,
            validMobileRegex: null
        };
    }
    function d(e) {
        const t = e.length > 0 && e[0] === "+";
        const n = t ? e.substring(1) : e;
        const r = o("WAPhoneFindCC").findCC(n);
        if (!r) {
            return n;
        }
        const a = n.substring(r.length);
        const i = c(r);
        if (!i) {
            return `+${r} ${a}`;
        }
        for(let l = i.formats, s = 0; s < l.length; s++){
            const u = l[s].testAndFormat(a);
            if (u != null && u !== "") {
                return `+${r} ${u}`;
            }
        }
        return `+${r} ${a}`;
    }
    function m(t) {
        let n = e.get(t);
        if (n == null) {
            n = d(t);
            e.set(t, n);
        }
        return n;
    }
    const p = /^\+*[\d ()]+$/;
    function _(e) {
        return p.test(e);
    }
    function f(e, t) {
        if (!/^\d+$/.test(t)) {
            return false;
        }
        const n = c(e);
        if (n) {
            if (typeof n.lengths === "number") {
                return n.lengths === t.length;
            }
            return n.lengths.includes(t.length);
        }
        return false;
    }
    function g(e, t) {
        if (!/^\d+$/.test(t)) {
            return false;
        }
        if (f(e, t)) {
            return true;
        }
        const r = c(e);
        return r?.validMobileRegex?.test(t) === true;
    }
    function h(e, t, n) {
        if (!/^\d+$/.test(t)) {
            return false;
        }
        const o = c(e);
        if (!o) {
            return false;
        }
        const a = typeof o.lengths === "number" ? o.lengths === t.length : o.lengths.includes(t.length);
        if (!a) {
            return false;
        }
        let i = false;
        if (o.validMobileRegex != null) {
            i = o.validMobileRegex.test(t);
        }
        if (n != null) {
            e: {
                if (n === "pn_linking") {
                    if (i) {
                        r("WAWebODS").incr("web.pn_linking.v2.success");
                    } else {
                        r("WAWebODS").incr("web.pn_linking.v2.failure");
                    }
                    break e;
                }
                break e;
            }
        }
        return i;
    }
    function y(e) {
        return m(o("WAJids").phoneNumberFromJid(e));
    }
    l.compileCountryRegexes = c;
    l.formatPhone = m;
    l.isPotentiallyPhoneNumber = _;
    l.isPotentiallyValid = f;
    l.isPotentiallyValidInternational = g;
    l.isValidMobileForRegistration = h;
    l.formattedPhoneNumber = y;
}, 98);