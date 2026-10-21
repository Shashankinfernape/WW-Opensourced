__d("WAWebEmojiSearch", [
    "WATrie",
    "WAWebEmoji",
    "WAWebRecentEmojiCollection",
    "asyncToGeneratorRuntime",
    "compactMap",
    "justknobx",
    "once",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    const e = r("requireDeferred")("WAFtsMultiLangTokenizer").__setRef("WAWebEmojiSearch");
    const s = [
        "😂",
        "🤣",
        "❤",
        "🥺",
        "🥰",
        "😘",
        "😭",
        "😍",
        "😁",
        "🙏",
        "😅",
        "😆",
        "😊",
        "🙂",
        "😔",
        "🥳",
        "😒",
        "☺",
        "🎂",
        "👍",
        "💖",
        "😢",
        "🙄",
        "😏",
        "😎",
        "💋",
        "😞",
        "😉",
        "👏",
        "🙃",
        "😡",
        "😀",
        "😄",
        "😇",
        "🤩",
        "😌",
        "🤔",
        "🌹",
        "😋",
        "💗",
        "🤗",
        "💕",
        "💔",
        "😚",
        "☹",
        "😃",
        "🎉",
        "🔥",
        "🥴",
        "😳"
    ];
    const u = [
        "SMILEYS_PEOPLE",
        "ANIMALS_NATURE",
        "FOOD_DRINK",
        "ACTIVITY",
        "TRAVEL_PLACES",
        "OBJECTS",
        "SYMBOLS",
        "FLAGS",
        "VARIATION"
    ];
    const c = 36;
    const d = 50;
    const m = 1841;
    const p = 100000000;
    const _ = 1000000;
    const f = 10000;
    function g(e, t) {
        let n = [];
        if (e) {
            const r = S(e.toLowerCase(), t);
            n = Array.from(new Set(r));
        }
        return n;
    }
    function h(e, t) {
        if (!t) {
            return [];
        }
        if (e.length <= 5) {
            return t.getMatches(e);
        }
        const n = e.substring(0, 5).trim();
        let r = t.getMatches(n);
        r = r.filter((t)=>t.keyword.startsWith(e));
        return r;
    }
    function y(e) {
        return r("compactMap")(e, o("WAWebEmoji").EmojiUtil.normalizeEmoji);
    }
    function C({ emoji: o, emojiToPickerPosition: a, recentEmojiToRank: i, top50EmojiToRank: l, wordMatchCount: s }) {
        const u = Math.min(Math.max(s, 0), 99);
        const c = i.get(o) ?? 0;
        const d = Math.min(Math.max(c, 0), 99);
        const g = l.get(o) ?? 0;
        const h = Math.min(Math.max(g, 0), 99);
        const y = a.get(o) ?? m;
        const C = Math.min(Math.max(m - y, 1), 9999);
        return u * p + d * _ + h * f + C;
    }
    function b() {
        const e = new Map;
        const t = y(o("WAWebRecentEmojiCollection").RecentEmojiCollection.map((e)=>e.id));
        t.forEach((t, n)=>{
            e.set(t, c - n);
        });
        return e;
    }
    const v = r("once")(function() {
        const e = new Map;
        const t = y(s);
        t.forEach((t, n)=>{
            e.set(t, d - n);
        });
        return e;
    });
    function S(e, t) {
        const n = e.split(" ").filter((e)=>e.length > 0);
        if (n.length === 0) {
            return [];
        }
        const r = new Map;
        for (const o of n){
            const a = h(o, t);
            const i = y(a.flatMap((e)=>e.value));
            const l = new Set(i);
            for (const s of l){
                const c = r.get(s) ?? 0;
                r.set(s, c + 1);
            }
        }
        const d = b();
        const m = v();
        const p = R();
        const _ = [];
        for (const [g, S] of r){
            const L = C({
                emoji: g,
                emojiToPickerPosition: p,
                recentEmojiToRank: d,
                top50EmojiToRank: m,
                wordMatchCount: S
            });
            _.push({
                emoji: g,
                rank: L
            });
        }
        _.sort((e, t)=>t.rank - e.rank);
        return _.map((e)=>e.emoji);
    }
    var R = r("once")(function() {
        const e = new Map;
        let t = 0;
        for (const n of u){
            const r = o("WAWebEmoji").EmojiUtil.getEmojisInCategory(n);
            for (const a of r){
                e.set(a, t);
                t++;
            }
        }
        return e;
    });
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.length === 0) {
                return k([], "shortKeyword");
            }
            let n = t[0];
            if (t.length > 1) {
                n = babelHelpers.extends({}, n, t[1]);
            }
            const o = yield e.load();
            const a = new o;
            let i;
            if (r("justknobx")._("2148")) {
                i = Object.entries(n).flatMap(([t, n])=>{
                    const r = t.toLowerCase();
                    const o = Array.from(a.tokenize(r));
                    return o.map((e)=>({
                            value: n,
                            keyword: e,
                            shortKeyword: e.substring(0, 5)
                        }));
                });
            } else {
                i = Object.entries(n).flatMap(([t, n])=>{
                    const r = t.toLowerCase();
                    const o = r.substring(0, 5);
                    return {
                        value: n,
                        keyword: r,
                        shortKeyword: o
                    };
                });
            }
            return k(i, "shortKeyword");
        });
        return E.apply(this, arguments);
    }
    function k(e, t) {
        const n = r("WATrie").fromForwardsStrings(e.map((e)=>e[t]), e);
        return {
            getMatches: function(t) {
                return n.search(t);
            }
        };
    }
    l.emojiSearch = g;
    l.emojiLocaleDictsToTrie = L;
}, 98);