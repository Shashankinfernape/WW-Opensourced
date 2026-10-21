__d("WAWebStickerSearchCollection", [
    "WALogger",
    "WAWebBaseCollection",
    "WAWebEmoji",
    "WAWebEmojiKeywordToUnicode",
    "WAWebSearchFirstPartyStickersAction",
    "WAWebStickerGetters",
    "WAWebStickerModel",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = {
        HAPPY: [
            "😂",
            "🤣",
            "😀",
            "😁",
            "😆",
            "🙂",
            "😇",
            "☺\uFE0F",
            "😄",
            "😃"
        ],
        LOVE: [
            "😍",
            "😘",
            "❤\uFE0F",
            "💕",
            "🥰",
            "😗",
            "😙",
            "😻",
            "👩\u200D❤\uFE0F\u200D👩",
            "💐",
            "💌",
            "💛",
            "💚",
            "💙",
            "💜",
            "💓",
            "💘",
            "💏",
            "💑",
            "🌹",
            "🤟",
            "🏩"
        ],
        GREETINGS: [
            "👋",
            "😂",
            "🤣",
            "🙏",
            "✋",
            "🧕",
            "🚶\u200D♀\uFE0F",
            "🚶",
            "👠",
            "🥾",
            "🙈",
            "🦛",
            "🌺",
            "⚡",
            "🎯",
            "🚄",
            "🚅",
            "💒",
            "🛕",
            "🛣\uFE0F",
            "🕉\uFE0F",
            "🔊"
        ],
        SAD: [
            "😭",
            "😔",
            "😢",
            "😞",
            "😟",
            "😕",
            "🙁",
            "☹\uFE0F",
            "😖",
            "😫",
            "😩",
            "🥺",
            "😥",
            "😓",
            "😪",
            "😿",
            "💧",
            "💔"
        ],
        ANGRY: [
            "😠",
            "😡",
            "😤",
            "👺",
            "💢",
            "🗯\uFE0F",
            "👿"
        ],
        CELEBRATE: [
            "🥳",
            "🥂",
            "🎈",
            "🎊",
            "🎉"
        ]
    };
    const c = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.$StickerSearchCollectionImpl$p_1 = new Map;
            e.$StickerSearchCollectionImpl$p_2 = false;
            e.$StickerSearchCollectionImpl$p_4 = true;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.remove = function(n, r) {
            const e = t.prototype.remove.call(this, n, r);
            e.forEach((e)=>{
                if (e != null) {
                    o("WAWebStickerGetters").clearStickerGetterCacheFor(e);
                }
            });
            return e;
        };
        r_prototype.reset = function() {
            this.forEach((e)=>o("WAWebStickerGetters").clearStickerGetterCacheFor(e));
            t.prototype.reset.call(this);
        };
        r_prototype.isFetchingData = function() {
            return this.$StickerSearchCollectionImpl$p_4;
        };
        r_prototype.hasFetchedData = function() {
            return this.$StickerSearchCollectionImpl$p_2;
        };
        r_prototype.setStartFetching = function() {
            this.$StickerSearchCollectionImpl$p_4 = true;
            this.trigger("start_fetching");
        };
        r_prototype.setStopFetching = function() {
            this.$StickerSearchCollectionImpl$p_4 = false;
            this.trigger("stop_fetching");
        };
        r_prototype.search = (()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                if (this.$StickerSearchCollectionImpl$p_3 !== n && this.$StickerSearchCollectionImpl$p_2) {
                    t.prototype.delete.call(this);
                }
                const r = n.trim().toUpperCase();
                if (this.$StickerSearchCollectionImpl$p_1.has(n)) {
                    const a = this.$StickerSearchCollectionImpl$p_1.get(n);
                    if (a != null) {
                        this.add(a);
                        this.$StickerSearchCollectionImpl$p_3 = n;
                        return;
                    }
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "StickerMoodCollection cache was invalid, re-searching."
                    ])));
                }
                const i = [];
                if (Object.hasOwn(u, r)) {
                    i.push(...u[r]);
                } else {
                    const l = o("WAWebEmoji").EmojiUtil.containsOnlyEmoji(r) ? o("WAWebEmoji").EmojiUtil.splitEmojis(r) : o("WAWebEmojiKeywordToUnicode").emojiKeywordToUnicodeSearch(r);
                    if (l == null || l.length === 0) {
                        this.$StickerSearchCollectionImpl$p_3 = n;
                        this.setStopFetching();
                        t.prototype.delete.call(this);
                        return;
                    }
                    i.push(...l);
                }
                this.setStartFetching();
                let c = [];
                try {
                    c = yield o("WAWebSearchFirstPartyStickersAction").searchFirstPartyStickers(i);
                } catch (error) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Sticker search request failed: error: ",
                        ""
                    ])), error).sendLogs("sticker-search-request-failed");
                    this.setStopFetching();
                    return;
                }
                this.$StickerSearchCollectionImpl$p_1.set(n, c);
                this.$StickerSearchCollectionImpl$p_2 = true;
                this.$StickerSearchCollectionImpl$p_3 = n;
                this.add(c);
                this.setStopFetching();
            });
            function a(e) {
                return r.apply(this, arguments);
            }
            return a;
        })();
        r_prototype.searchMood = function(t) {
            return this.search(t);
        };
        r_prototype.delete = function() {
            this.$StickerSearchCollectionImpl$p_1.forEach((e)=>{
                e.forEach(o("WAWebStickerGetters").clearStickerGetterCacheFor);
            });
            t.prototype.delete.call(this);
            this.$StickerSearchCollectionImpl$p_1 = new Map;
            this.$StickerSearchCollectionImpl$p_2 = false;
            this.$StickerSearchCollectionImpl$p_4 = false;
        };
        return r;
    })(o("WAWebBaseCollection").BaseCollection);
    c.model = o("WAWebStickerModel").StickerModel;
    const d = new c;
    l.StickerSearchCollection = d;
}, 98);