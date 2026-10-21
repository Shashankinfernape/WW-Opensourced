__d("WAWebEmojiDownloadSuggestions", [
    "JSResource",
    "Promise",
    "WAWebL10nGetRenderedLocale",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = new Set([
                    "en_GB",
                    o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale()
                ]);
                const r = yield (e || (e = n("Promise"))).all(Array.from(t, c));
                return r.filter(Boolean);
            } catch (e) {
                return [];
            }
        });
        return u.apply(this, arguments);
    }
    function c(t) {
        if (t === "en_GB" || t === "en_IN" || t === "en_OP" || t === "en_PI" || t === "en_UD" || t === "en_US" || t === "en_XA") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionEn").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "pt_BR" || t === "pt_PT") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionPt").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "de_DE") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionDe").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "es_CL" || t === "es_CO" || t === "es_ES" || t === "es_LA" || t === "es_MX" || t === "es_VE") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionEs").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "it_IT") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionIt").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "ru_RU") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionRu").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "ar_AR") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionAr").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "tr_TR") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionTr").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "uk_UA") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionUk").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "bn_IN") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionBn").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "hi_IN" || t === "hi_FB") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionHi").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "hu_HU") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionHu").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "ms_MY") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionMs").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "pl_PL") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionPl").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "ro_RO") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionRo").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "th_TH") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionTh").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "ur_PK") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionUr").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "id_ID") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionId").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "fa_IR") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionFa").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "mr_IN") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionMr").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "gu_IN") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionGu").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "fr_FR" || t === "fr_CA") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionFr").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "zh_TW") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionZhTw").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "zh_CN") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionZhCn").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "zh_HK") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionZhHk").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "nl_NL" || t === "nl_BE") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionNl").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "cs_CZ") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionCs").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        if (t === "sk_SK") {
            return r("JSResource")("WAWebLocalesCldrEmojiSuggestionSk").__setRef("WAWebEmojiDownloadSuggestions").load();
        }
        return (e || (e = n("Promise"))).resolve(null);
    }
    l.downloadEmojiSuggestions = s;
}, 98);