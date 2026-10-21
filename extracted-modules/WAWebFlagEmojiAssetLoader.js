__d("WAWebFlagEmojiAssetLoader", [
    "WAMemoizeCache",
    "WAWebEmojiAssetLoader",
    "WAWebEmojiConst"
], function(t, n, r, o, a, i, l) {
    function e(orderedEmojis, categorizedEmojis) {
        const r = categorizedEmojis[o("WAWebEmojiConst").CATEGORIES.FLAGS] ?? [];
        const a = new Set;
        const i = new Map;
        orderedEmojis.forEach((e, t)=>{
            if (typeof e === "string") {
                i.set(e, t);
            } else {
                e.forEach((e)=>{
                    i.set(e, t);
                });
            }
        });
        r.forEach((e)=>{
            const t = i.get(e);
            if (t != null) {
                const n = Math.floor(t / o("WAWebEmojiConst").BUCKET_SIZE);
                a.add(n);
            }
        });
        return a;
    }
    const s = o("WAMemoizeCache").memoizeWithArgs(function(t, n) {
        const r = new Map;
        const a = o("WAWebEmojiAssetLoader").getEmojiTypeFromPlatform(t);
        const { categorizedEmojis, orderedEmojis, selector } = n;
        const u = e(orderedEmojis, categorizedEmojis);
        for (const c of u){
            const d = `emoji-${selector}-b${c}`;
            r.set(d, {
                id: d,
                selectors: [
                    `.emoji.${selector}.b${c}`,
                    `.emojik.${selector}.b${c}`
                ],
                low: o("WAWebEmojiAssetLoader").getEmojiSpriteFiles(a, c, 40),
                high: o("WAWebEmojiAssetLoader").getEmojiSpriteFiles(a, c, 64)
            });
        }
        return r;
    }, function(e, t) {
        return e;
    });
    function u(e) {
        return function(t) {
            return s(t, e);
        };
    }
    l.flagEmojiAssetMapCreator = u;
}, 98);