__d("WAWebHelpersFindPhoneNumbers", [
    "WALogger",
    "WAMemoizeCache",
    "WAPhoneFindCC",
    "WAWebPhoneUtils",
    "WAWebUserPrefsMeUser",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = /^[1-9]\d{1,14}$/;
    function m(t) {
        if (!d.test(t)) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "toE164PhoneNumber: input is not 2-15 digits with a non-zero country code"
            ]))).sendLogs("to-e164-phone-number-invalid-input");
        }
        return `+${t.replace(/\D/g, "")}`;
    }
    function p(e) {
        return {
            uniqueId: 0,
            text: e,
            openings: null,
            phoneNumber: "",
            phoneNumberStartsWithPlus: false,
            phoneNumberLastSignificantCodePoint: -1,
            phoneNumberParenthesesDepth: 0,
            phoneNumberLeadingZeroes: 0,
            phoneNumberCurrentlyMatchingLeadingZeroes: true,
            parsedPhoneNumbers: null
        };
    }
    function _(e) {
        e.phoneNumberStartsWithPlus = true;
    }
    function f(e) {
        e.phoneNumberLastSignificantCodePoint = 46;
    }
    function g(e) {
        e.phoneNumberLastSignificantCodePoint = 45;
    }
    function h(e) {
        e.phoneNumberLastSignificantCodePoint = 32;
    }
    function y(e, t) {
        e.phoneNumber += String.fromCodePoint(t);
        e.phoneNumberLastSignificantCodePoint = t;
        if (e.phoneNumberCurrentlyMatchingLeadingZeroes) {
            if (t === 48) {
                e.phoneNumberLeadingZeroes++;
            } else {
                e.phoneNumberCurrentlyMatchingLeadingZeroes = false;
            }
        }
    }
    function C(e, t) {
        if (e.openings != null) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Msg formatting: cannot open a style before closing it"
            ])));
            return;
        }
        e.openings = t;
        e.phoneNumber = "";
        e.phoneNumberStartsWithPlus = false;
        e.phoneNumberLastSignificantCodePoint = -1;
        e.phoneNumberParenthesesDepth = 0;
        e.phoneNumberLeadingZeroes = 0;
        e.phoneNumberCurrentlyMatchingLeadingZeroes = true;
    }
    function b(e, t) {
        const e_openings = e.openings;
        if (e_openings == null) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Msg formatting: cannot close a style before opening it"
            ])));
            return;
        }
        const r = 0;
        e.openings = null;
    }
    function v(e, t) {
        if (e.phoneNumberParenthesesDepth === 1) {
            b(e, t);
            return;
        }
        e.phoneNumberParenthesesDepth++;
        e.phoneNumberLastSignificantCodePoint = -1;
    }
    const S = o("WAMemoizeCache").memoizeWithArgs(function(e) {
        return o("WAPhoneFindCC").findCC(e);
    }, function(e) {
        return e;
    });
    function R(e) {
        return e != null && e.openings != null;
    }
    function L(e, t) {
        const n = E(e, t);
        if (n == null) {
            return false;
        }
        b(e, t);
        if (e.parsedPhoneNumbers) {
            e.parsedPhoneNumbers.push(n);
        } else {
            e.parsedPhoneNumbers = [
                n
            ];
        }
        return true;
    }
    function E(e, t) {
        if (e.openings != null) {
            if (e.phoneNumberParenthesesDepth === 1 || t < e.text.length && e.text[t] === "@") {
                return null;
            }
            const n = e.phoneNumber;
            const r = n.slice(Math.min(2, e.phoneNumberLeadingZeroes));
            if (r.length === 0) {
                return null;
            }
            let a = false;
            let i = r;
            const l = e.phoneNumberStartsWithPlus || e.phoneNumberLeadingZeroes >= 2;
            if (l) {
                const s = o("WAPhoneFindCC").findCC(r);
                const u = r.slice(s.length);
                a = o("WAWebPhoneUtils").isPotentiallyValidInternational(s, u);
            } else {
                const d = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.toString() || "";
                const m = S(d);
                a = o("WAWebPhoneUtils").isPotentiallyValid(m, r);
                if (a) {
                    i = `${m}${r}`;
                } else {
                    const p = o("WAPhoneFindCC").findCC(r);
                    if (p === m) {
                        const _ = r.slice(p.length);
                        a = o("WAWebPhoneUtils").isPotentiallyValid(p, _);
                    }
                }
            }
            if (a) {
                const start = e.openings;
                if (start == null) {
                    return null;
                }
                const end = e.phoneNumberLastSignificantCodePoint === 45 || e.phoneNumberLastSignificantCodePoint === 46 ? t - 1 : t;
                const matchedText = e.text.slice(start, end);
                return {
                    start,
                    end,
                    id: `phone${++e.uniqueId}`,
                    phoneNumber: i,
                    matchedText
                };
            }
            return null;
        }
    }
    function k(e, t) {
        if (!L(e, t)) {
            b(e, t);
        }
    }
    function I(e, t) {
        if (e.phoneNumberParenthesesDepth === 0 || e.phoneNumberLastSignificantCodePoint < 48 || e.phoneNumberLastSignificantCodePoint > 57) {
            b(e, t);
            return;
        }
        e.phoneNumberParenthesesDepth--;
        e.phoneNumberLastSignificantCodePoint = -1;
    }
    function T(e) {
        if (e > 65535) {
            return 2;
        }
        return 1;
    }
    function D(e) {
        let t = null;
        let n = 0;
        try {
            for(const i = e.length; n < i;){
                const s = e.codePointAt(n) ?? NaN;
                const u = T(s);
                if (R(t) && (s < 48 || s > 57)) {
                    if (s === 45) {
                        if (t.phoneNumberParenthesesDepth === 0) {
                            if (t.phoneNumberLastSignificantCodePoint === 45) {
                                k(t, n);
                            } else if (t.phoneNumber.length === 0) {
                                b(t, n);
                            } else {
                                g(t);
                            }
                        } else {
                            b(t, n);
                        }
                    } else if (s === 46) {
                        if (t.phoneNumberParenthesesDepth === 0) {
                            if (t.phoneNumberLastSignificantCodePoint === 46) {
                                k(t, n);
                            } else if (t.phoneNumber.length === 0) {
                                b(t, n);
                            } else {
                                f(t);
                            }
                        } else {
                            b(t, n);
                        }
                    } else if (s !== 40) {
                        if (s === 41) {
                            I(t, n);
                        } else if (s === 32) {
                            if (t.phoneNumberLastSignificantCodePoint === 32) {
                                b(t, n);
                            } else {
                                const d = L(t, n);
                                if (!d) {
                                    h(t);
                                }
                            }
                        } else {
                            k(t, n);
                        }
                    }
                }
                switch(s){
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        {
                            if (n !== 0) {
                                const E = e.codePointAt(n - 1) ?? NaN;
                                if (E >= 65 && E <= 90 || E >= 97 && E <= 122) {
                                    break;
                                }
                            }
                            if (!R(t)) {
                                if (!t) {
                                    t = p(e);
                                }
                                C(t, n);
                            }
                            y(t, s);
                            break;
                        }
                    case 43:
                        if (!t) {
                            t = p(e);
                        }
                        C(t, n);
                        _(t);
                        break;
                    case 40:
                        if (!R(t)) {
                            if (!t) {
                                t = p(e);
                            }
                            C(t, n);
                        }
                        v(t, n);
                        break;
                }
                n += u;
            }
            if (t && t.openings != null) {
                k(t, e.length);
            }
            if (t?.parsedPhoneNumbers && t.parsedPhoneNumbers.length > 0) {
                return t.parsedPhoneNumbers.reduce((acc, parsedPhoneNumber)=>{
                    acc.push({
                        phone: parsedPhoneNumber.matchedText,
                        index: parsedPhoneNumber.start,
                        canonicalPhone: m(parsedPhoneNumber.phoneNumber)
                    });
                    return acc;
                }, []);
            }
            return [];
        } catch (error) {
            const D = error instanceof Error ? error : r("err")(String(error));
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "findPhoneNumbers parse error"
            ]))).catching(D).sendLogs("findPhoneNumbers-error");
            return [];
        }
    }
    l.toE164PhoneNumber = m;
    l.findPhoneNumbers = D;
}, 98);