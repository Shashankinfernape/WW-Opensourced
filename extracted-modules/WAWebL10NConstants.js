__d("WAWebL10NConstants", [], function(t, n, r, o, a, i) {
    const e = {
        DEBUG: 99,
        SAVED: 6,
        PHONE: 5,
        PREVIOUS: 4,
        URL: 3,
        BROWSER: 2,
        DEFAULT: 1
    };
    const l = "en";
    const s = "en-US";
    const u = new Set([
        "ur"
    ]);
    const c = new Set([
        "af",
        "az",
        "ca",
        "cs",
        "da",
        "de",
        "el",
        "et",
        "fi",
        "fr",
        "he",
        "hr",
        "hu",
        "id",
        "it",
        "kk",
        "lt",
        "mk",
        "nb",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sk",
        "sl",
        "sr",
        "sv",
        "th",
        "tr",
        "uk"
    ]);
    const d = {
        "zh-tw": {
            longDateFormat: {
                LT: "Ah:mm",
                LTS: "Ah:m:s",
                L: "YYYY年MMMD日",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日LT",
                LLLL: "YYYY年MMMD日ddddLT",
                l: "YYYY年MMMD日",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日LT",
                llll: "YYYY年MMMD日ddddLT"
            }
        },
        "zh-hk": {
            longDateFormat: {
                LT: "Ah:mm",
                LTS: "Ah:m:s",
                L: "YYYY年MMMD日",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日LT",
                LLLL: "YYYY年MMMD日ddddLT",
                l: "YYYY年MMMD日",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日LT",
                llll: "YYYY年MMMD日ddddLT"
            }
        },
        "zh-cn": {
            longDateFormat: {
                LT: "Ah:mm",
                LTS: "Ah:m:s",
                L: "YYYY-MM-DD",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日LT",
                LLLL: "YYYY年MMMD日ddddLT",
                l: "YYYY年MMMD日",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日LT",
                llll: "YYYY年MMMD日ddddLT"
            }
        },
        ar: {
            longDateFormat: {
                LT: "h:mm A",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            }
        },
        ta: {
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY, h:mm A"
            },
            preparse: null,
            postformat: null,
            meridiem: null,
            meridiemHour: null
        },
        nl: {
            longDateFormat: {
                l: "DD-MM-YYYY",
                L: "DD-MM-YYYY"
            }
        },
        "en-ie": {
            longDateFormat: {
                l: "DD/MM/YYYY",
                L: "DD/MM/YYYY"
            }
        },
        hi: {
            preparse: function(t) {
                return t;
            },
            postformat: function(t) {
                return t;
            },
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                LLL: "D MMMM YYYY A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            meridiem: function(t, n, r) {
                if (t === 0 && n === 0) {
                    return "मध्यरात्रि";
                }
                if (t >= 20 || t < 4) {
                    return "रात";
                }
                if (t >= 4 && t < 12) {
                    return "सुबह";
                }
                if (t >= 12 && t < 16) {
                    return "दोपहर";
                }
                return "शाम";
            }
        }
    };
    const m = {
        "pt-pt": {
            weekdays: [
                "Domingo",
                "Segunda-feira",
                "Terça-feira",
                "Quarta-feira",
                "Quinta-feira",
                "Sexta-feira",
                "Sábado"
            ]
        }
    };
    const p = babelHelpers.extends({}, d, m);
    i.L10N_PRIORITY = e;
    i.DEFAULT_LOCALE = l;
    i.DEFAULT_MOMENT_LOCALE = s;
    i.SHOULD_USE_MOMENT_LOCALE_FORMAT = u;
    i.LOCALES_THAT_PREFER_24HOUR_TIME = c;
    i.LOCALE_DATE_TIME_CUSTOMIZATIONS = d;
    i.LOCALE_CUSTOMIZATIONS = p;
}, 66);