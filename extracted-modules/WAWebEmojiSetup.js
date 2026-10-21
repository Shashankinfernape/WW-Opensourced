__d("WAWebEmojiSetup", [
    "WAWebEmoji",
    "WAWebEmojiConst",
    "WAWebEmojiJsonEmojiCategory",
    "WAWebEmojiJsonEmojiLegacy",
    "WAWebEmojiJsonEmojiUnicode",
    "WAWebEmojiJsonWaEmojiCategory",
    "WAWebEmojiJsonWaEmojiLegacy",
    "WAWebEmojiJsonWaEmojiUnicode"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(emojiType) {
        if (emojiType !== e) {
            e = emojiType;
            const n = emojiType === o("WAWebEmojiConst").EMOJI_TYPE.APPLE ? [
                r("WAWebEmojiJsonEmojiUnicode"),
                r("WAWebEmojiJsonEmojiLegacy"),
                r("WAWebEmojiJsonEmojiCategory")
            ] : [
                r("WAWebEmojiJsonWaEmojiUnicode"),
                r("WAWebEmojiJsonWaEmojiLegacy"),
                r("WAWebEmojiJsonWaEmojiCategory")
            ];
            const orderedEmojis = n[0];
            const legacyToEmoji = n[1];
            const categorizedEmojis = n[2];
            o("WAWebEmoji").EmojiUtil.configure({
                emojiType,
                orderedEmojis,
                legacyToEmoji,
                categorizedEmojis
            });
        }
    }
    l.default = s;
}, 98);