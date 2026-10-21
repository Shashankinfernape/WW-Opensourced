__d("WAWebEmojisPlugin.react", [
    "Lexical",
    "LexicalComposerContext",
    "WAWebEmoji",
    "WAWebEmojiNode",
    "WAWebEmojiVariantCollection",
    "WAWebFontLoader",
    "WAWebLexicalUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebLexicalEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function* u(e) {
        const t = o("WAWebEmoji").EmojiUtil.emojiRegex();
        let n = 0;
        while(true){
            const r = t.exec(e);
            if (!r) {
                break;
            }
            const emoji = r[0];
            const i = r.index;
            const lastIndex = n;
            n = t.lastIndex;
            yield {
                emoji,
                index: i,
                lastIndex
            };
        }
    }
    function c(e, emojiSize) {
        if (e.isSimpleText()) {
            const n = e.getTextContent();
            let r = e;
            for (const a of u(n)){
                const { emoji, index, lastIndex } = a;
                const c = index - lastIndex;
                let d;
                let m;
                if (c === 0) {
                    const p = r.splitText(emoji.length);
                    d = p[0];
                    m = p[1];
                } else {
                    const _ = r.splitText(c, c + emoji.length);
                    d = _[1];
                    m = _[2];
                }
                r = m;
                const f = o("WAWebEmojiNode").$createEmojiNode({
                    emoji,
                    emojiSize,
                    textEmoji: null
                });
                d.replace(f);
            }
        }
    }
    const d = String.fromCodePoint(128077);
    const m = String.fromCodePoint(128078);
    const p = String.fromCodePoint(128578);
    const _ = String.fromCodePoint(128577);
    const f = String.fromCodePoint(128539);
    const g = String.fromCodePoint(128528);
    const h = String.fromCodePoint(128533);
    const y = String.fromCodePoint(128512);
    const C = String.fromCodePoint(128536);
    const b = String.fromCodePoint(128558);
    const v = String.fromCodePoint(10084, 65039);
    const S = String.fromCodePoint(128513);
    const R = String.fromCodePoint(128518);
    const L = String.fromCodePoint(128521);
    const E = String.fromCodePoint(128546);
    const k = {
        "(y)": d,
        "(Y)": d,
        "(n)": m,
        "(N)": m,
        ":-)": p,
        ":-(": _,
        ":-p": f,
        ":-P": f,
        ":-\\": h,
        ":-D": y,
        ":-o": b,
        ";-)": L,
        ":-*": C,
        ":-|": g,
        ":'(": E,
        "^_^": S,
        "<3": v,
        ">_<": R
    };
    const I = 3;
    const T = 2;
    function D(e, emojiSize) {
        if (e.isSimpleText()) {
            const n = o("WAWebLexicalUtils").$getRangeSelection();
            const r = o("WAWebLexicalUtils").$getPreviousRangeSelection();
            const a = r && o("Lexical").$getNodeByKey(r.anchor.key);
            if (!(!n || !n.isCollapsed() || n.anchor.getNode() !== e || a && a !== e)) {
                const i = n.anchor.offset;
                const l = e.getTextContent();
                let textEmoji;
                let u;
                for(let c = T; c <= I; c++){
                    textEmoji = l.slice(i - c, i);
                    u = k[textEmoji];
                    if (u != null) {
                        const d = o("WAWebEmoji").EmojiUtil.getSkinToneBase(u) && o("WAWebEmojiVariantCollection").EmojiVariantCollection.getVariant(u);
                        u = d ?? u;
                        break;
                    }
                }
                if (!(textEmoji == null || textEmoji === "" || u == null || u === "")) {
                    let m;
                    const p = i - textEmoji.length;
                    if (p === 0) {
                        const _ = e.splitText(textEmoji.length);
                        m = _[0];
                    } else {
                        const f = e.splitText(p, p + textEmoji.length);
                        m = f[1];
                    }
                    const g = o("WAWebEmojiNode").$createEmojiNode({
                        emoji: u,
                        emojiSize,
                        textEmoji
                    });
                    m.replace(g);
                }
            }
        }
    }
    function useX(e) {
        const t = o("react-compiler-runtime").c(16);
        const { emojiSize, transformTextEmoji } = e;
        const a = o("LexicalComposerContext").useLexicalComposerContext();
        const i = a[0];
        const l = o("useWAWebABPropConfigValue").useABPropConfigValue("use_custom_soccer_ball_for_reaction_enabled");
        const u = o("useWAWebABPropConfigValue").useABPropConfigValue("animated_soccer_ball_prod_enabled");
        let d;
        let m;
        if (t[0] !== i || t[1] !== emojiSize || t[2] !== transformTextEmoji) {
            d = function() {
                const e = i.registerNodeTransform(o("Lexical").TextNode, function(e) {
                    c(e, emojiSize);
                });
                const t = i.registerNodeTransform(o("Lexical").TextNode, function(e) {
                    if (transformTextEmoji) {
                        D(e, emojiSize);
                    }
                });
                return function() {
                    e();
                    t();
                };
            };
            m = [
                i,
                emojiSize,
                transformTextEmoji
            ];
            t[0] = i;
            t[1] = emojiSize;
            t[2] = transformTextEmoji;
            t[3] = d;
            t[4] = m;
        } else {
            d = t[3];
            m = t[4];
        }
        useEffect(d, m);
        let p;
        if (t[5] !== i || t[6] !== emojiSize) {
            p = function() {
                i.update(function() {
                    const e = [];
                    for (const t of o("WAWebLexicalUtils").textNodesIterator(o("Lexical").$getRoot())){
                        if (o("WAWebEmojiNode").$isEmojiNode(t)) {
                            e.push(t);
                        }
                    }
                    e.forEach((e)=>{
                        e.replace(o("WAWebEmojiNode").$createEmojiNode({
                            emoji: e.emoji(),
                            emojiSize,
                            textEmoji: e.textEmoji()
                        }));
                    });
                });
            };
            t[5] = i;
            t[6] = emojiSize;
            t[7] = p;
        } else {
            p = t[7];
        }
        let _;
        if (t[8] !== i || t[9] !== emojiSize || t[10] !== u || t[11] !== l) {
            _ = [
                i,
                emojiSize,
                l,
                u
            ];
            t[8] = i;
            t[9] = emojiSize;
            t[10] = u;
            t[11] = l;
            t[12] = _;
        } else {
            _ = t[12];
        }
        useEffect(p, _);
        let f;
        if (t[13] !== i) {
            f = function() {
                let e;
                i.update(function() {
                    const t = o("WAWebLexicalUtils").$getPreviousRangeSelection();
                    if (!(!t || !t.isCollapsed())) {
                        const n = t.anchor.getNode();
                        if (n instanceof o("WAWebEmojiNode").EmojiNode) {
                            e = n.textEmoji();
                        }
                    }
                }, {
                    onUpdate: function() {
                        if (e != null) {
                            i.update(function() {
                                if (e != null) {
                                    o("WAWebLexicalUtils").$insertText(e);
                                }
                            }, {
                                skipTransforms: true
                            });
                        }
                    }
                });
                return false;
            };
            t[13] = i;
            t[14] = f;
        } else {
            f = t[14];
        }
        o("useWAWebLexicalEvent").useLexicalCommandListener(i, o("Lexical").KEY_BACKSPACE_COMMAND, f);
        let g;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            g = [];
            t[15] = g;
        } else {
            g = t[15];
        }
        useEffect($, g);
        return null;
    }
    function $() {
        o("WAWebFontLoader").FontLoader.load(o("WAWebFontLoader").Font.NOTO_EMOJI);
    }
    l.default = useX;
}, 98);