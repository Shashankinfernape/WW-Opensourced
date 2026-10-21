__d("WAWebEmojiNode", [
    "$InternalEnum",
    "Lexical",
    "WAWebClassnames",
    "WAWebEmoji",
    "WAWebStylesEnv",
    "err",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = n("$InternalEnum").Mirrored([
        "Small",
        "Medium",
        "Large"
    ]);
    const u = {
        emoji: {
            display: "x1rg5ohu",
            verticalAlign: "xxymvpz",
            fontSize: "x1c3i2sq",
            fontFamily: "x19la9d6",
            lineHeight: "x1fc57z9",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "x1ccui7m",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x18pi947",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            color: "x19co3pv",
            caretColor: "x11tp94h",
            width: "xw4jnvo",
            height: "x1qx5ct2",
            backgroundSize: "xfibh0p",
            backgroundRepeat: "xiy17q3",
            backgroundPosition: "x1xsqp64",
            $$css: true
        },
        emojiWin: {
            fontSize: "x1lkfr7t",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        emojiSafari: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "x1im30kd",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1djpfga",
            fontSize: "x1f6kntn",
            marginTop: "xdj266r",
            marginInlineEnd: "xjn30re",
            marginBottom: "xat24cr",
            marginInlineStart: "x1hb08if",
            fontFamily: "xz6nz0p",
            $$css: true
        },
        emojiFirefox: {
            fontSize: "x1lkfr7t",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "x1j8ymqv",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x4tra6z",
            $$css: true
        },
        emojiLarge: {
            fontSize: "x8cw2a4",
            width: "x1247r65",
            height: "xng8ra",
            backgroundSize: "xkclhyd",
            paddingTop: "x1tiyuxx",
            paddingInlineEnd: "x1nzty39",
            paddingBottom: "x1nbhmlj",
            paddingInlineStart: "x12w63v0",
            $$css: true
        },
        emojiMedium: {
            fontSize: "x579bpy",
            width: "x100vrsf",
            height: "x1vqgdyp",
            backgroundSize: "x1umgpko",
            paddingTop: "x1tiyuxx",
            paddingInlineEnd: "x1nzty39",
            paddingBottom: "x1nbhmlj",
            paddingInlineStart: "x12w63v0",
            $$css: true
        },
        innerWin: {
            "::selection_backgroundColor": "xy9tlov",
            "::selection_color": "x1bhl96m",
            $$css: true
        },
        emojiRawFallback: {
            color: "x14ug900",
            $$css: true
        }
    };
    const c = ((t)=>{
        function n({ emoji, emojiSize, key, textEmoji }) {
            let n;
            n = t.call(this, emoji, key) || this;
            n.__textEmoji = textEmoji;
            n.__emojiSize = emojiSize;
            return n;
        }
        babelHelpers.inheritsLoose(n, t);
        n.clone = function(t) {
            return new n({
                emoji: t.__text,
                emojiSize: t.__emojiSize,
                key: t.__key,
                textEmoji: t.__textEmoji
            });
        };
        n.getType = function() {
            return "emoji";
        };
        n.importJSON = function() {
            throw r("err")("Deserialization of EmojiNode is unsupported");
        };
        const n_prototype = n.prototype;
        n_prototype.emoji = function() {
            return this.__text;
        };
        n_prototype.textEmoji = function() {
            return this.__textEmoji;
        };
        n_prototype.createDOM = function() {
            const __text = this.__text;
            const n = document.createElement("span");
            const a = o("WAWebStylesEnv").hasSafariFix && u.emojiSafari;
            const i = o("WAWebStylesEnv").hasFirefoxFix && u.emojiFirefox;
            const l = o("WAWebStylesEnv").isOSWin && u.emojiWin;
            let c = null;
            let d = null;
            switch(this.__emojiSize){
                case s.Small:
                    d = o("WAWebEmoji").EmojiUtil.getGlyphPath(__text, 40);
                    break;
                case s.Medium:
                    d = o("WAWebEmoji").EmojiUtil.getGlyphPath(__text, 64);
                    c = u.emojiMedium;
                    break;
                case s.Large:
                    d = o("WAWebEmoji").EmojiUtil.getGlyphPath(__text, 64);
                    c = u.emojiLarge;
                    break;
            }
            n.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(n.className, this.__emojiSize === s.Small && "emoji", (e || (e = r("stylex")))(u.emoji, a, i, l, c, d == null && u.emojiRawFallback));
            if (d != null) {
                n.style.backgroundImage = `url('${d}')`;
            }
            const m = document.createElement("span");
            m.textContent = __text;
            const p = o("WAWebStylesEnv").isOSWin && u.innerWin;
            m.className = e(p);
            n.appendChild(m);
            return n;
        };
        n_prototype.updateDOM = function(t, { firstChild }) {
            if (firstChild == null) {
                return true;
            }
            const __text = this.__text;
            if (firstChild.textContent !== __text) {
                firstChild.textContent = __text;
            }
            return false;
        };
        n_prototype.exportJSON = function() {
            return babelHelpers.extends({}, t.prototype.exportJSON.call(this), {
                type: "emoji-node"
            });
        };
        return n;
    })(o("Lexical").TextNode);
    function d({ emoji, emojiSize = s.Small, textEmoji }) {
        return new c({
            emoji,
            emojiSize,
            textEmoji
        }).setMode("token");
    }
    function m(e) {
        return e instanceof c;
    }
    l.EmojiSize = s;
    l.EmojiNode = c;
    l.$createEmojiNode = d;
    l.$isEmojiNode = m;
}, 98);