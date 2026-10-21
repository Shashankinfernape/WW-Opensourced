__d("WAWebLinkDevicePhoneNumberEntryInputFormatUtils", [
    "WACcToIso",
    "WAIsoToCc",
    "WALogger",
    "WAPhoneFindCC",
    "WAWebPhoneUtils",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ countryCodeIso: t, phoneNumberWithoutCountryCode: n }) {
        if (t == null) {
            return u(n);
        }
        const a = r("WAIsoToCc")[t];
        const i = o("WAWebPhoneUtils").compileCountryRegexes(String(a));
        if (i == null) {
            return null;
        }
        const l = E(`${r("WAIsoToCc")[t]}${n}`);
        const s = l.phoneNumberWithoutCountryCode;
        const d = c(i);
        const m = Math.max(...d);
        if (s.length > m) {
            return u(s);
        }
        const p = d.filter((e)=>e >= s.length).map((e)=>S(s, e));
        for (const _ of i.formats){
            const f = _.testAndFormat(s);
            if (f != null) {
                return {
                    formattedInputValue: f,
                    placeholder: ""
                };
            }
            for (const g of p){
                const h = _.testAndFormat(g);
                if (h != null) {
                    return R({
                        phoneNumberWithoutCountryCode: s,
                        formattedPaddedNumber: h
                    });
                }
            }
        }
        return u(s);
    }
    function u(e) {
        return {
            formattedInputValue: e,
            placeholder: ""
        };
    }
    function c({ lengths: t }) {
        if (typeof t === "number") {
            return [
                t
            ];
        }
        return t.sort((e, t)=>e - t);
    }
    function d(e) {
        if (e == null) {
            return null;
        }
        const t = r("WAIsoToCc")[e];
        const n = o("WAWebPhoneUtils").compileCountryRegexes(String(t));
        if (n == null) {
            return null;
        }
        return Math.max(...c(n));
    }
    const m = 15;
    const p = 1;
    function _(e, t, n) {
        return n.length <= t.length || n.length <= f(e);
    }
    function f(e) {
        const t = d(e);
        if (t != null && t > 0) {
            return t + p;
        }
        return m;
    }
    const g = new Map;
    function h(e) {
        if (e == null) {
            return null;
        }
        const t = g.get(e);
        if (t !== void 0) {
            return t;
        }
        const n = y(e);
        g.set(e, n);
        return n;
    }
    function y(e) {
        const t = r("WAIsoToCc")[e];
        if (t == null) {
            return null;
        }
        const n = o("WAWebPhoneUtils").compileCountryRegexes(String(t));
        if (n == null) {
            return null;
        }
        const a = Array.from(new Set(c(n)));
        const i = a.sort((e, t)=>t - e);
        if (i.length === 0) {
            return null;
        }
        const l = n.validMobileRegex;
        if (l == null) {
            return i[0];
        }
        for (const s of i){
            if (v(l, s)) {
                return s;
            }
        }
        return i[0];
    }
    const C = 4;
    const b = [
        "0",
        "1",
        "5",
        "9"
    ];
    function v(e, t) {
        if (t <= 0) {
            return false;
        }
        const n = Math.min(t, C);
        for(let r = Math.pow(10, n), o = 0; o < r; o++){
            const a = String(o).padStart(n, "0");
            if (a.length === t) {
                if (e.test(a)) {
                    return true;
                }
                continue;
            }
            for (const i of b){
                const l = a + i.repeat(t - a.length);
                if (e.test(l)) {
                    return true;
                }
            }
        }
        return false;
    }
    function S(e, t) {
        return e + "_".repeat(t - e.length);
    }
    function R({ formattedPaddedNumber: t, phoneNumberWithoutCountryCode: n }) {
        if (n === "") {
            return {
                formattedInputValue: "",
                placeholder: t
            };
        }
        const r = Array.from(t.matchAll(/\d/g));
        const o = r.pop().index;
        const a = o + 1;
        return {
            formattedInputValue: t.substr(0, a),
            placeholder: t.substr(a)
        };
    }
    function L(e, t, n) {
        const r = o("WAWebPhoneUtils").compileCountryRegexes(String(e));
        if (r == null) {
            return false;
        }
        return r.formats.some((e)=>e.testAndFormat(t) != null) || o("WAWebPhoneUtils").isValidMobileForRegistration(String(e), t, n);
    }
    function E(e) {
        const t = e.replaceAll(/[^\d]/g, "");
        const n = k(t);
        let o = t;
        if (n != null) {
            const a = r("WAIsoToCc")[n];
            o = o.replace(new RegExp(`^${a}`), "");
        }
        return {
            countryCodeIso: n,
            phoneNumberWithoutCountryCode: o,
            fullRawPhoneNumber: t
        };
    }
    function k(e) {
        const t = o("WAPhoneFindCC").findCC(e);
        return r("WACcToIso")[parseInt(t, 10)];
    }
    function I() {
        const t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
        if (t != null) {
            return k(t);
        }
        return "";
    }
    function T(t, n, r) {
        const a = k(t);
        if (a !== n) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[compareCountryCodeOutput] Country code mismatch in ",
                ""
            ])), r).sendLogs("country-code-mismatch", {
                sampling: 0.01
            });
        }
    }
    function D(e, t, n) {
        if (t == null) {
            const r = e ? "+" : "";
            return `${r}${n}`;
        }
        return `+${t} ${n}`;
    }
    l.formatPhoneNumberInput = s;
    l.getMaxPhoneNumberLength = d;
    l.isPhoneNumberInputLengthAllowed = _;
    l.getMaxPhoneNumberInputLength = f;
    l.getMaxValidMobileNumberLength = h;
    l.isPhoneNumberValid = L;
    l.cleanPhoneNumberInputValue = E;
    l.getCountryCodeIso = k;
    l.getMaybeMyCountryCodeIso = I;
    l.compareCountryCodeOutput = T;
    l.getFullFormattedInputValue = D;
}, 98);