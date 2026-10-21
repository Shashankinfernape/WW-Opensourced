__d("WAWebConvertToTextWithoutSpecialEmojis", [
    "WAWebEmojiCompile",
    "WAWebSpecialEmojisWithSkinTones"
], function(t, n, r, o, a, i, l) {
    let e = null;
    function s(t) {
        if (!e) {
            const n = r("WAWebEmojiCompile")(Object.keys(r("WAWebSpecialEmojisWithSkinTones")));
            e = new RegExp(`(${n})`, "g");
        }
        e.lastIndex = 0;
        return t.replace(e, (e)=>r("WAWebSpecialEmojisWithSkinTones")[e]);
    }
    l.convertToTextWithoutSpecialEmojis = s;
}, 98);