__d("WAWebMessageStaticSingleEmoji.react", [
    "WAWebCopyPasteSelectable.react",
    "WAWebEmoji",
    "WAWebMessageLargeEmoji.react",
    "WAWebMessageStickerLikeBubbleContainer.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(15);
        const { displayAuthor, displayType, emoji, msgKey, onDetailsPaneClosed, position, quotedMsg, stickerLikeBubbleContainerRef } = e;
        let p;
        if (t[0] !== emoji) {
            p = o("WAWebEmoji").EmojiUtil.getHeartEmojis().some((e)=>o("WAWebEmoji").EmojiUtil.normalizeEmoji(e) === o("WAWebEmoji").EmojiUtil.normalizeEmoji(emoji));
            t[0] = emoji;
            t[1] = p;
        } else {
            p = t[1];
        }
        const animation = p;
        let f;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            f = "x1n2onr6 xc9l9hb x78zum5 xl56j7k x1yrsyyn xdj266r x1emmycd x1u7kmwd xx6jrq6 x1ed109x";
            t[2] = f;
        } else {
            f = t[2];
        }
        let g;
        if (t[3] !== emoji || t[4] !== animation) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableDiv;
            g = <Component selectable className={f}>{s.jsx(o("WAWebMessageLargeEmoji.react").LargeEmoji, {
                animation,
                size: o("WAWebMessageLargeEmoji.react").SIZE.XLARGE_60,
                emoji,
                selectable: true
            })}</Component>;
            t[3] = emoji;
            t[4] = animation;
            t[5] = g;
        } else {
            g = t[5];
        }
        const h = g;
        let y;
        if (t[6] !== displayAuthor || t[7] !== displayType || t[8] !== h || t[9] !== msgKey || t[10] !== onDetailsPaneClosed || t[11] !== position || t[12] !== quotedMsg || t[13] !== stickerLikeBubbleContainerRef) {
            const Component = r("WAWebMessageStickerLikeBubbleContainer.react");
            y = <Component displayAuthor={displayAuthor} msgKey={msgKey} quotedMsg={quotedMsg} position={position} displayType={displayType} onDetailsPaneClosed={onDetailsPaneClosed} msgContent={h} ref={stickerLikeBubbleContainerRef}/>;
            t[6] = displayAuthor;
            t[7] = displayType;
            t[8] = h;
            t[9] = msgKey;
            t[10] = onDetailsPaneClosed;
            t[11] = position;
            t[12] = quotedMsg;
            t[13] = stickerLikeBubbleContainerRef;
            t[14] = y;
        } else {
            y = t[14];
        }
        return y;
    }
    l.default = u;
}, 98);