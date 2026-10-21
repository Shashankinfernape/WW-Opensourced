__d("WAWebReactionEmoji.react", [
    "WALogger",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = {
        listScale: {
            transform: "x1fuyojj",
            $$css: true
        },
        imageRendering: {
            imageRendering: "x1k0y4fr",
            $$css: true
        },
        bubbleScale: {
            transform: "xl79k7v",
            $$css: true
        },
        bubbleScale1PxSmaller: {
            transform: "x1j9g6uv",
            $$css: true
        },
        reactionCellDetailThumbScale: {
            transform: "xvbds7f",
            $$css: true
        },
        tray: {
            transform: "xd7h76d",
            $$css: true
        },
        trayScale2PxSmaller: {
            transform: "xhqu4j4",
            $$css: true
        }
    };
    function m({ reaction, scale, size }) {
        const l = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(reaction);
        if (l == null) {
            const u = Array.from(reaction).map((e)=>e.codePointAt(0)?.toString(16)).join(" ");
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[ReactionEmoji] emoji not in catalog cp=",
                " scale=",
                ""
            ])), u, scale ?? "none");
        }
        const m = o("WAWebEmoji").EmojiUtil.getHeartEmojis().some((e)=>o("WAWebEmoji").EmojiUtil.normalizeEmoji(e) === l);
        if (l != null) {
            return c.jsx(r("WAWebEmoji.react"), {
                DEPRECATED_className: (s || (s = r("stylex")))(scale !== "tray" && d.imageRendering, scale === "list" && d.listScale, scale === "bubble" && d.bubbleScale, scale === "tray" && d.tray, scale === "reactionCellDetailThumb" && d.reactionCellDetailThumbScale, m && scale === "tray" && d.trayScale2PxSmaller, m && scale === "bubble" && d.bubbleScale1PxSmaller),
                emoji: l,
                size
            }, "low-res");
        }
        return <span className="x14ug900">{reaction}</span>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.ReactionEmoji = m;
}, 98);