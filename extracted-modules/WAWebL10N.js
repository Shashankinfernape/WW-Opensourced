__d("WAWebL10N", [
    "WALogger",
    "WAWeb-moment",
    "WAWebBaseL10N",
    "WAWebDebounce",
    "WAWebEventsWaitForMainStreamReadyMd",
    "WAWebL10NCoerceToFBLocale",
    "WAWebL10NConstants",
    "WAWebL10NCookieUtils",
    "WAWebL10NHelpers",
    "WAWebL10nGetRenderedLocale",
    "WAWebMomentLocaleResolver",
    "WAWebMomentLocales",
    "WAWebParseLocaleSubtags",
    "WAWebUserPrefsLocales",
    "asyncToGeneratorRuntime",
    "gkx",
    "justknobx",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    const R = 5000;
    const L = o("WAWebL10NCoerceToFBLocale").DEFAULT_WA_WEB_LOCALE.replaceAll("_", "-");
    const E = ((t)=>{
        function a() {
            let a;
            a = t.call(this, {
                l: "en",
                loc: "en"
            }) || this;
            a.$L10n$p_4 = null;
            a.setLocale = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[l10n] setLocale called with locale ",
                        ", priority ",
                        ", reload ",
                        ""
                    ])), t, n, r);
                    if (t != null) {
                        let i;
                        let l;
                        i = r ?? false;
                        l = n ?? o("WAWebL10NConstants").L10N_PRIORITY.PHONE;
                        const _ = o("WAWebL10NHelpers").isLocalLanguageOverrideEnabled();
                        const f = _ && l >= o("WAWebL10NConstants").L10N_PRIORITY.SAVED;
                        const g = a.normalizeLocaleToBcp47Compliant(t);
                        if (!(g == null || g === a.$L10n$p_2) && (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[l10n] setLocale: before use user lang"
                        ]))), f ? o("WAWebUserPrefsLocales").setUserLangPref(t) : o("WAWebUserPrefsLocales").setPhoneLangPref(t), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[l10n] setLocale: after use user lang"
                        ]))), !(_ && l === o("WAWebL10NConstants").L10N_PRIORITY.PHONE && o("WAWebUserPrefsLocales").getUserLangPref() != null))) {
                            const h = a.$L10n$p_1;
                            a.$L10n$p_2 = g;
                            const y = o("WAWebL10NCoerceToFBLocale").coerceWAWebL10nLocaleToFBLocale(g);
                            o("WAWebL10NCookieUtils").setWAWebLocalePrefCookieValue(y);
                            a.$L10n$p_3 = g;
                            a.$L10n$p_4 = y;
                            if (i === true && l === o("WAWebL10NConstants").L10N_PRIORITY.SAVED) {
                                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                    "[l10n] setLocale: user lang change ",
                                    " -> ",
                                    ""
                                ])), h, y);
                            }
                            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[l10n] setLocale: fullLocale:",
                                ", renderedLocale:",
                                ", newLocale:",
                                ""
                            ])), g, a.$L10n$p_1, y);
                            if (i !== true) {
                                a.trigger("locale_changed_on_phone", {
                                    newLocale: y,
                                    currentLocale: h
                                });
                            } else if (h === y) {
                                a.$L10n$p_9.cancel();
                                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "[l10n] setLocale: no lang change (",
                                    "), skip reload"
                                ])), h);
                                yield a.applyMomentLocale(g);
                                a.trigger("locale_change", {
                                    l: y,
                                    loc: g
                                });
                            } else if (i === true) {
                                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                    "[l10n] setLocale: lang change ",
                                    " -> ",
                                    ", reloading"
                                ])), h, y);
                                a.$L10n$p_1 = y;
                                if (l >= o("WAWebL10NConstants").L10N_PRIORITY.SAVED) {
                                    a.$L10n$p_10();
                                    return;
                                }
                                a.$L10n$p_9();
                            }
                        }
                    }
                });
                return function(e, n, r) {
                    return t.apply(this, arguments);
                };
            })();
            a.$L10n$p_9 = r("WAWebDebounce")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield r("WAWebEventsWaitForMainStreamReadyMd")();
                return a.$L10n$p_10();
            }), R);
            a.$L10n$p_1 = o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale();
            a.$L10n$p_2 = a.$L10n$p_5(o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale());
            const i = a.$L10n$p_6();
            const l = a.$L10n$p_7();
            const f = i ?? l;
            const g = i == null;
            if (f == null) {
                o("WAWebUserPrefsLocales").setPhoneLangPref(a.$L10n$p_1);
                return babelHelpers.assertThisInitialized(a);
            }
            const h = a.$L10n$p_5(f);
            a.$L10n$p_3 = h;
            if (h == null) {
                if (g) {
                    o("WAWebUserPrefsLocales").setPhoneLangPref(a.$L10n$p_1);
                } else {
                    o("WAWebUserPrefsLocales").setUserLangPref(a.$L10n$p_1);
                }
                return babelHelpers.assertThisInitialized(a);
            }
            const y = o("WAWebL10NCoerceToFBLocale").coerceWAWebL10nLocaleToFBLocale(h);
            a.$L10n$p_4 = y;
            if (y === a.$L10n$p_1) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[l10n] using pref as full locale: ",
                    ", rendered: ",
                    ""
                ])), f, a.$L10n$p_1);
                a.$L10n$p_2 = h;
            }
            a.applyMomentLocale(a.$L10n$p_2);
            return a;
        }
        babelHelpers.inheritsLoose(a, t);
        const i = a.prototype;
        i.init = function(t) {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[l10n] init: with locale ",
                ""
            ])), t);
            return this.setLocale(t, o("WAWebL10NConstants").L10N_PRIORITY.SAVED, false);
        };
        i.getLocale = function() {
            return this.$L10n$p_1;
        };
        i.getFullLocale = function() {
            if (r("gkx")("26258")) {
                return this.$L10n$p_2;
            }
            if (o("WAWebL10NCoerceToFBLocale").isWAWebl10nDebugLocale(this.$L10n$p_2)) {
                return L;
            }
            return this.$L10n$p_2;
        };
        i.getNormalizedLocale = function() {
            return this.normalizeLocaleToWajsLocale(String(this.getLocale())) ?? this.getLocale();
        };
        i.getLanguage = function() {
            return this.$L10n$p_8(this.getFullLocale());
        };
        i.$L10n$p_8 = function(t) {
            return r("WAWebParseLocaleSubtags")(t).language ?? "";
        };
        i.getRegion = function() {
            const e = r("WAWebParseLocaleSubtags")(this.getFullLocale()).region;
            if (e != null) {
                return e;
            }
            const t = this.$L10n$p_1.replace(/_/g, "-");
            return r("nullthrows")(r("WAWebParseLocaleSubtags")(t).region);
        };
        i.$L10n$p_6 = function() {
            return this.normalizeLocaleToBcp47Compliant(o("WAWebUserPrefsLocales").getUserLangPref());
        };
        i.$L10n$p_7 = function() {
            return this.normalizeLocaleToBcp47Compliant(o("WAWebUserPrefsLocales").getPhoneLangPref());
        };
        i.normalizeLocaleToBcp47Compliant = function(t) {
            if (t == null) {
                return null;
            }
            let e = this.$L10n$p_5(t);
            if (e !== t) {
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    '[l10n] _cleanRawLocaleString: loc: "',
                    '", cleaned: "',
                    '"'
                ])), t, e);
                try {
                    const n = new Intl.NumberFormat(e);
                } catch (t) {
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[l10n] _cleanRawLocaleString: ",
                        " incompatible, fallback: ",
                        ""
                    ])), e, o("WAWebL10NCoerceToFBLocale").DEFAULT_WA_WEB_LOCALE);
                    e = o("WAWebL10NCoerceToFBLocale").DEFAULT_WA_WEB_LOCALE.replaceAll("_", "-");
                }
            }
            return e;
        };
        i.$L10n$p_5 = function(t) {
            return t.replace(/@.*/, "").replace(/_/g, "-");
        };
        i.$L10n$p_10 = function() {
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "[reload] reloadPageDueToLocaleChange"
            ])));
            self.setTimeout(function() {
                window.location.reload();
            }, 100);
        };
        i.applyMomentLocale = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = e.toLocaleLowerCase("en");
                let n;
                if (t === o("WAWebL10NConstants").DEFAULT_MOMENT_LOCALE.toLocaleLowerCase("en")) {
                    n = t;
                } else {
                    for(let a = o("WAWebMomentLocaleResolver").getMomentLocalesToTry(t, L), i = 0; i < a.length; ++i){
                        const l = yield o("WAWebMomentLocales").downloadAndDefineLocale(a[i]);
                        if (l) {
                            n = a[i];
                            break;
                        }
                    }
                }
                if (n == null) {
                    o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "Could not fetch moment locales, using default en-US"
                    ])));
                    n = o("WAWebL10NConstants").DEFAULT_MOMENT_LOCALE;
                }
                r("WAWeb-moment").locale(n);
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[l10n] moment locale updated to: ",
                    ""
                ])), n);
                this.customizeMomentLocale(r("WAWeb-moment").locale());
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        i.customizeMomentLocale = function(t) {
            const e = o("WAWebL10NConstants").LOCALE_CUSTOMIZATIONS[t];
            if (e) {
                r("WAWeb-moment").updateLocale(t, e);
            }
        };
        i.checkForLocaleMismatchBetweenCookieAndUserPref = function() {
            if (o("WAWebL10NCoerceToFBLocale").coerceWAWebL10nLocaleToFBLocale(this.$L10n$p_1) === this.$L10n$p_4) {
                o("WAWebUserPrefsLocales").setLangPrefCookieDidMismatchWithUserPref(false);
                return;
            }
            if (o("WAWebUserPrefsLocales").getLangPrefCookieDidMismatchWithUserPref()) {
                o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[l10n] locale mismatch: rendered=",
                    " pref=",
                    ", skip cookie"
                ])), this.$L10n$p_1, this.$L10n$p_3);
            } else if (this.$L10n$p_4) {
                o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[l10n] locale mismatch, using pref: ",
                    ", cookie: ",
                    ""
                ])), this.$L10n$p_3, this.$L10n$p_4);
                o("WAWebL10NCookieUtils").setWAWebLocalePrefCookieValue(this.$L10n$p_4);
                o("WAWebUserPrefsLocales").setLangPrefCookieDidMismatchWithUserPref(true);
                if (!r("justknobx")._("2237")) {
                    this.$L10n$p_9();
                }
            }
        };
        return a;
    })(o("WAWebBaseL10N").WAWebBaseL10n);
    const k = new E;
    l.default = k;
}, 98);