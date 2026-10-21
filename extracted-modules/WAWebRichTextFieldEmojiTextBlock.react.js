__d("WAWebRichTextFieldEmojiTextBlock.react", [
    "WAUnicodeUtils",
    "WAWebEmojiText.react",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        emojiText: {
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            flexBasis: "x1t1x2f9",
            paddingTop: "x1y1aw1k",
            paddingInlineEnd: "x1gabggj",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            lineHeight: "x1fc57z9",
            wordWrap: "x1vvkbs",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(24);
        const { emojiTextXstyle, isRefresh, settings, testid, textContent } = t;
        const m = isRefresh === undefined ? false : isRefresh;
        if (!(!settings || textContent == null || textContent === "")) {
            const { textLimit, readMoreText, onReadMore, formatters, ellipsify, multiline, inferLinesDirection, direction, preserveWhitespace, breakWord, emojiXstyle } = settings;
            const textLimit_1 = textLimit === undefined ? Infinity : textLimit;
            let E;
            if (n[0] !== emojiTextXstyle || n[1] !== m) {
                E = m === true ? "x98rzlu x6ikm8r x10wlt62 x1vvkbs" : (e || (e = r("stylex")))(c.emojiText, emojiTextXstyle);
                n[0] = emojiTextXstyle;
                n[1] = m;
                n[2] = E;
            } else {
                E = n[2];
            }
            const k = `${testid}-read-only`;
            let I;
            if (n[3] !== breakWord || n[4] !== direction || n[5] !== ellipsify || n[6] !== multiline || n[7] !== emojiXstyle || n[8] !== formatters || n[9] !== inferLinesDirection || n[10] !== preserveWhitespace || n[11] !== k || n[12] !== textContent || n[13] !== textLimit_1) {
                I = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    testid: k,
                    text: textContent,
                    ellipsify,
                    multiline,
                    selectable: true,
                    emojiSize: o("WAWebEmojiText.react").EMOJI_SIZE.SMALL,
                    textLimit: textLimit_1,
                    formatters,
                    inferLinesDirection,
                    direction,
                    preserveWhitespace,
                    breakWord,
                    emojiXstyle
                });
                n[3] = breakWord;
                n[4] = direction;
                n[5] = ellipsify;
                n[6] = multiline;
                n[7] = emojiXstyle;
                n[8] = formatters;
                n[9] = inferLinesDirection;
                n[10] = preserveWhitespace;
                n[11] = k;
                n[12] = textContent;
                n[13] = textLimit_1;
                n[14] = I;
            } else {
                I = n[14];
            }
            let T;
            if (n[15] !== onReadMore || n[16] !== readMoreText || n[17] !== textContent || n[18] !== textLimit_1) {
                const Component = r("WDSTextualLink.react");
                T = onReadMore && readMoreText != null && o("WAUnicodeUtils").numCodepoints(textContent?.toString()) > textLimit_1 && <Component onClick={onReadMore} tabIndex={0}>{readMoreText}</Component>;
                n[15] = onReadMore;
                n[16] = readMoreText;
                n[17] = textContent;
                n[18] = textLimit_1;
                n[19] = T;
            } else {
                T = n[19];
            }
            let D;
            if (n[20] !== E || n[21] !== I || n[22] !== T) {
                D = <div className={E}>{I}{T}</div>;
                n[20] = E;
                n[21] = I;
                n[22] = T;
                n[23] = D;
            } else {
                D = n[23];
            }
            return D;
        }
    }
    l.default = d;
}, 98);