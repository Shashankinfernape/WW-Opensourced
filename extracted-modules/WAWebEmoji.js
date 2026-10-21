__d("WAWebEmoji", [
    "invariant",
    "WABitArray",
    "WAMemoizeCache",
    "WAOnceWithReset",
    "WAWebABProps",
    "WAWebEmojiCompile",
    "WAWebEmojiConst",
    "WAWebGetEmojiPathExperimental",
    "compactMap",
    "justknobx",
    "nullthrows",
    "objectEntries"
], function(t, n, r, o, a, i, l, s) {
    const e = "□";
    const u = "\u200D";
    const c = [
        "🏻",
        "🏼",
        "🏽",
        "🏾",
        "🏿"
    ];
    const d = new RegExp(c.join("|"), "g");
    const m = "🧑\u200D🤝\u200D🧑";
    const p = "👭";
    const _ = "👬";
    const f = "👫";
    const g = String.fromCodePoint(128105, 8205, 10084, 65039, 8205, 128139, 8205, 128104);
    const h = String.fromCodePoint(128105, 8205, 10084, 65039, 8205, 128139, 8205, 128105);
    const y = String.fromCodePoint(128104, 8205, 10084, 65039, 8205, 128139, 8205, 128104);
    const C = String.fromCodePoint(129489, 8205, 10084, 65039, 8205, 128139, 8205, 129489);
    const b = String.fromCodePoint(128143);
    const v = String.fromCodePoint(128105, 8205, 10084, 65039, 8205, 128104);
    const S = String.fromCodePoint(128105, 8205, 10084, 65039, 8205, 128105);
    const R = String.fromCodePoint(128104, 8205, 10084, 65039, 8205, 128104);
    const L = String.fromCodePoint(129489, 8205, 10084, 65039, 8205, 129489);
    const E = String.fromCodePoint(128145);
    const k = String.fromCodePoint(129309);
    const I = new Set([
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        b,
        v,
        S,
        R,
        E,
        k
    ]);
    const T = o("WAWebEmojiConst").HEART_EMOJIS.map((e)=>e);
    const D = new Set([
        "\uFE00",
        "\uFE01",
        "\uFE02",
        "\uFE03",
        "\uFE04",
        "\uFE05",
        "\uFE06",
        "\uFE07",
        "\uFE08",
        "\uFE09",
        "\uFE0A",
        "\uFE0B",
        "\uFE0C",
        "\uFE0D",
        "\uFE0E",
        "\uFE0F"
    ]);
    const x = [
        127950,
        65039
    ];
    const $ = [
        127950,
        8205,
        128960
    ];
    const P = x.map((e)=>String.fromCodePoint(e)).join("");
    const N = $.map((e)=>String.fromCodePoint(e)).join("");
    const M = String.fromCodePoint(9917);
    const w = [
        9917,
        57344
    ];
    const A = w.map((e)=>String.fromCodePoint(e)).join("");
    const F = (t)=>t.replace(/\uFE0F/g, "");
    const O = o("WAMemoizeCache").memoizeWithArgs(function(e, t) {
        function n(r = []) {
            if (r.length === t) {
                return [
                    r
                ];
            }
            let o = [];
            for(let a = 0; a < e.length; a++){
                const i = [].concat(r);
                i.push(e[a]);
                o = o.concat(n(i));
            }
            return o;
        }
        return n();
    }, function(e, t) {
        return e.toString() + t;
    });
    class B {
        constructor(){
            var t = this;
            var n;
            this.skinToneVariations = c;
            this.emojiRegex = function() {
                const e = t.$2();
                e.lastIndex = 0;
                return e;
            };
            this.$2 = (n = r("WAOnceWithReset"))(function() {
                const e = t.$4();
                return new RegExp(`(${e})`, "g");
            });
            this.onlyEmojiRegex = function() {
                const e = t.$3();
                e.lastIndex = 0;
                return e;
            };
            this.$3 = n(function() {
                const e = t.$4();
                return new RegExp(`^(${e})+\$`, "g");
            });
            this.splitEmojis = function(e) {
                if (t.containsOnlyEmoji(e) === false) {
                    return null;
                }
                return e.split(t.emojiRegex()).filter(Boolean);
            };
            this.extractAllEmojis = function(e) {
                if (t.containsEmoji(e) === false) {
                    return null;
                }
                return Array.from(e.matchAll(t.emojiRegex())).filter(Boolean).map((e)=>e[1]);
            };
            this.containsEmoji = function(e) {
                return t.emojiRegex().test(e);
            };
            this.containsOnlyEmoji = function(e) {
                return t.onlyEmojiRegex().test(e);
            };
            this.matchLargeEmojiPattern = function(e) {
                if (e != null) {
                    if (e.length > 50 || e.includes(" ")) {
                        return null;
                    }
                    return t.$13(e);
                }
            };
            this.$13 = function(e) {
                const n = [];
                const r = t.emojiRegex();
                for(let o = 0; o < e.length;){
                    r.lastIndex = o;
                    const a = r.exec(e);
                    if (a == null || a.index !== o) {
                        return null;
                    }
                    const i = a[0];
                    if (!D.has(i)) {
                        if (n.length >= 3) {
                            return null;
                        }
                        n.push(i);
                    }
                    o += i.length;
                }
                if (n.length > 0) {
                    return n;
                }
                return null;
            };
            this.normalizeEmojiFromString = function(e) {
                return t.normalizeEmoji(e);
            };
            this.normalizeEmoji = function(e) {
                const n = F(e);
                const r = t.$11();
                const r_unqualifiedToNormalizedEmoji = r.unqualifiedToNormalizedEmoji;
                return r_unqualifiedToNormalizedEmoji.get(n);
            };
            this.normalizeAllEmojis = o("WAMemoizeCache").memoizeWithArgs(function(n) {
                if (n) {
                    return n.replace(t.emojiRegex(), (n, r)=>{
                        if (D.has(r)) {
                            return "";
                        }
                        return t.normalizeEmoji(r) ?? e;
                    });
                }
                return "";
            }, function(e) {
                return e;
            });
            this.getSkinToneVariant = function(e, n) {
                const r = t.$7();
                const o = r.get(e);
                if (o == null) {
                    return null;
                }
                const a = W(n);
                return o.get(a);
            };
            this.$11 = n(function() {
                const e = t.$12();
                const { legacyToEmoji, orderedEmojis } = e;
                const glyphIdToIndex = new Map;
                const emojiToGlyphId = new Map;
                const unqualifiedToNormalizedEmoji = new Map;
                let s = 0;
                orderedEmojis.forEach((e, t)=>{
                    if (!(e === "" || e == null)) {
                        const n = Array.isArray(e) ? e : [
                            e
                        ];
                        n.forEach((e)=>{
                            emojiToGlyphId.set(e, t);
                            const n = F(e);
                            unqualifiedToNormalizedEmoji.set(n, e);
                        });
                        glyphIdToIndex.set(t, s);
                        s++;
                    }
                });
                r("objectEntries")(legacyToEmoji).forEach(([t, n])=>{
                    emojiToGlyphId.set(t, n);
                    const r = F(t);
                    unqualifiedToNormalizedEmoji.set(r, t);
                });
                return {
                    emojiToGlyphId,
                    glyphIdToIndex,
                    unqualifiedToNormalizedEmoji
                };
            });
            this.$7 = n(function() {
                const e = t.$11();
                const e_emojiToGlyphId = e.emojiToGlyphId;
                const r = new Map;
                const o = ()=>{
                    let e;
                    const n = i.replace(d, (t)=>{
                        if (e == null) {
                            e = [];
                        }
                        e.push(t);
                        return "";
                    });
                    if (e == null) {
                        return 0;
                    }
                    const o = e;
                    let a;
                    if (n === `👩${u}🤝${u}👩`) {
                        a = p;
                    } else if (n === `👨${u}🤝${u}👨`) {
                        a = _;
                    } else if (n === `👩${u}🤝${u}👨`) {
                        a = f;
                    } else if (n === L) {
                        a = E;
                    } else if (n === C) {
                        a = b;
                    } else if (n === String.fromCodePoint(129777, 8205, 129778)) {
                        a = k;
                    } else {
                        a = n;
                    }
                    const l = t.normalizeEmoji(a);
                    if (l == null) {
                        return 0;
                    }
                    let s = r.get(l);
                    if (s == null) {
                        s = new Map;
                        s.set("", l);
                        r.set(l, s);
                    }
                    const c = W(o);
                    s.set(c, i);
                };
                let a;
                for (var i of e_emojiToGlyphId.keys()){
                    a = o();
                }
                return r;
            });
            this.$6 = n(function() {
                const e = new Map;
                for (const [r, o] of t.$7().entries()){
                    for (const a of o.values()){
                        e.set(a, r);
                    }
                }
                return e;
            });
            this.$4 = n(function() {
                const e = t.$11();
                const e_emojiToGlyphId = e.emojiToGlyphId;
                return r("WAWebEmojiCompile")([].concat(Array.from(e_emojiToGlyphId.keys()), Array.from(D)).filter(Boolean));
            });
            this.getEmojisInCategory = function(e) {
                return t.$12().categorizedEmojis[e] ?? [];
            };
            this.$8 = n(function() {
                const e = t.$12();
                const e_categorizedEmojis = e.categorizedEmojis;
                const r = new Map;
                Object.entries(e_categorizedEmojis).forEach(([n, a])=>{
                    const i = o("WAWebEmojiConst").CATEGORY_ORDERING.indexOf(n);
                    a.forEach((e)=>{
                        const n = t.normalizeEmoji(e);
                        if (n != null) {
                            r.set(n, i);
                        }
                    });
                });
                return r;
            });
            this.$14 = function(e) {
                if (e === P) {
                    return N;
                }
                if (e === M && (o("WAWebABProps").getABPropConfigValue("use_custom_soccer_ball_for_reaction_enabled") || o("WAWebABProps").getABPropConfigValue("animated_soccer_ball_prod_enabled"))) {
                    return A;
                }
                return e;
            };
            this.applyGlyphTransformations = function(e) {
                return t.$14(e);
            };
            this.getGlyphId = function(e) {
                const n = t.normalizeEmoji(e);
                if (n == null) {
                    return null;
                }
                const r = t.$14(n);
                const o = t.$11();
                const o_emojiToGlyphId = o.emojiToGlyphId;
                return o_emojiToGlyphId.get(r);
            };
            this.getGlyphPath = function(e, n) {
                const r = t.normalizeEmojiFromString(e);
                if (r == null) {
                    return null;
                }
                const a = t.$14(r);
                const i = t.$11();
                const i_emojiToGlyphId = i.emojiToGlyphId;
                const s = i_emojiToGlyphId.get(a);
                if (s == null) {
                    return null;
                }
                return o("WAWebGetEmojiPathExperimental").getGlyphExperimentalPath(a, t.$12().emojiType, n);
            };
            this.getSpritesPath = function(e, t, n, r) {
                return o("WAWebGetEmojiPathExperimental").getEmojiSpritesExperimentalPath(e, t, n, r);
            };
            this.isGlyphCached = function(e) {
                const n = t.$15(e);
                return t.$5().get(n);
            };
            this.markGlyphCached = function(e) {
                const n = t.$15(e);
                t.$5().set(n);
            };
            this.$5 = n(function() {
                return new (r("WABitArray"))(t.$16());
            });
            this.getCssClasses = function(e, n = "small") {
                return [
                    `b${t.getBucket(e)}`,
                    n === "small" ? "emoji" : "emojik",
                    t.$12().emojiType === o("WAWebEmojiConst").EMOJI_TYPE.APPLE ? "apple" : "wa"
                ].join(" ");
            };
            this.getStyle = function(e, n = "small") {
                const r = t.$17(e, n);
                const { xpos, ypos } = r;
                return {
                    backgroundPosition: `-${xpos}px -${ypos}px`
                };
            };
            this.getBucket = function(e) {
                const n = t.$15(e);
                const r = Math.floor(n / o("WAWebEmojiConst").BUCKET_SIZE);
                return `${r}`;
            };
            this.getHeartEmojis = n(function() {
                return r("compactMap")(T, t.normalizeEmoji);
            });
            this.$9 = n(function() {
                const e = t.$16();
                return e - e % o("WAWebEmojiConst").BUCKET_SIZE;
            });
            this.$10 = n(function() {
                return Math.floor(Math.sqrt(t.$16() - t.$9()));
            });
        }
        configure(t) {
            if (t !== this.$1) {
                this.$1 = t;
                this.getHeartEmojis.reset();
                this.$2.reset();
                this.$3.reset();
                this.$4.reset();
                this.$5.reset();
                this.$6.reset();
                this.$7.reset();
                this.$8.reset();
                this.$9.reset();
                this.$10.reset();
                this.$11.reset();
            }
        }
        $12() {
            if (this.$1 == null) {
                s(0, 56544);
            }
            return this.$1;
        }
        isConfigured() {
            return this.$1 != null;
        }
        isEmoji(t) {
            return this.normalizeEmoji(t) != null;
        }
        getSkinToneBase(t) {
            const n = this.normalizeEmoji(t);
            if (n == null) {
                return null;
            }
            return this.$6().get(n) ?? null;
        }
        $16() {
            const e = this.$11();
            const e_glyphIdToIndex = e.glyphIdToIndex;
            return e_glyphIdToIndex.size;
        }
        $17(t, n) {
            const e = this.$15(t);
            const r = e % o("WAWebEmojiConst").BUCKET_SIZE;
            const a = e >= this.$9() ? this.$10() : Math.floor(Math.sqrt(o("WAWebEmojiConst").BUCKET_SIZE));
            const i = o("WAWebEmojiConst").EMOJI_WIDTH[n];
            const l = Math.floor(r / a);
            const s = Math.floor(r % a);
            const xpos = s * i;
            const ypos = l * i;
            return {
                xpos,
                ypos,
                width: i
            };
        }
        $15(t) {
            const e = this.$11();
            const e_glyphIdToIndex = e.glyphIdToIndex;
            return r("nullthrows")(e_glyphIdToIndex.get(t));
        }
        getEmojiAggregate(t) {
            const e = this.getNormalizedOrTofu(t);
            const n = this.getSkinToneBase(e);
            return n ?? F(e);
        }
        getNormalizedOrTofu(n) {
            const t = this.normalizeEmojiFromString(n);
            if (t == null || t === "") {
                return e;
            }
            if (r("justknobx")._("3178")) {
                return t;
            }
            return n;
        }
    }
    function W(e) {
        if (e.every((t)=>t === e[0])) {
            return e[0];
        }
        return e.join("");
    }
    function q(e) {
        return I.has(e);
    }
    const U = new B;
    l.OPEN_BOX_CHAR = e;
    l.PEOPLE_HOLDING_HANDS = m;
    l.WOMEN_HOLDING_HANDS = p;
    l.MEN_HOLDING_HANDS = _;
    l.WOMAN_AND_MAN_HOLDING_HANDS = f;
    l.KISS_WOMAN_MAN = g;
    l.KISS_WOMAN_WOMAN = h;
    l.KISS_MAN_MAN = y;
    l.KISS = b;
    l.COUPLE_WITH_HEART_WOMAN_MAN = v;
    l.COUPLE_WITH_HEART_WOMAN_WOMAN = S;
    l.COUPLE_WITH_HEART_MAN_MAN = R;
    l.COUPLE_WITH_HEART = E;
    l.HANDSHAKE = k;
    l.getPermutations = O;
    l.isBaseMultiSkinToneEmoji = q;
    l.EmojiUtil = U;
}, 98);