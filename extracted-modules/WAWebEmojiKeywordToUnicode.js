__d("WAWebEmojiKeywordToUnicode", [
    "WAArraysShallowEqual",
    "WALogger",
    "WAWebEmojiDownloadSuggestions",
    "WAWebEmojiSearch",
    "WAWebEventsWaitForBbEvent",
    "WAWebL10N",
    "WAWebNoop",
    "WAWebStreamModel",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u = null;
    function c(t) {
        if (u != null) {
            return o("WAWebEmojiSearch").emojiSearch(t, u);
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Emoji Trie is not loaded."
        ]))).sendLogs("Emoji Trie is not loaded");
        return [];
    }
    let d = null;
    let m = [];
    function p() {
        f();
        const e = [
            "en"
        ];
        const t = r("WAWebL10N").getNormalizedLocale();
        if (t !== "en") {
            e.push(t);
        }
        if (!r("WAArraysShallowEqual")(m, e)) {
            m = e;
            var a = o("WAWebEmojiDownloadSuggestions").downloadEmojiSuggestions().then((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (d === a) {
                        u = yield o("WAWebEmojiSearch").emojiLocaleDictsToTrie(e);
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()).catch(r("WAWebNoop")).finally(()=>{
                if (d === a) {
                    d = null;
                }
            });
            d = a;
        }
    }
    let _ = false;
    function f() {
        if (!_) {
            try {
                r("WAWebL10N").on("locale_change", function() {
                    p();
                });
            } catch (t) {
                const e = r("getErrorSafe")(t);
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[emoji-trie] subscription to locale_change failed"
                ]))).catching(e).sendLogs(`[emoji-trie] subscription to locale_change failed: ${e.message}`);
            }
            r("WAWebEventsWaitForBbEvent")(o("WAWebStreamModel").Stream, "change:mode", function() {
                return o("WAWebStreamModel").Stream.mode === o("WAWebStreamModel").StreamMode.MAIN;
            }).then(()=>{
                p();
            });
            _ = true;
        }
    }
    l.emojiKeywordToUnicodeSearch = c;
    l.updateEmojiTrie = p;
}, 98);