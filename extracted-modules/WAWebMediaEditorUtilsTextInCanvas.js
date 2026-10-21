__d("WAWebMediaEditorUtilsTextInCanvas", [
    "WAWebEmoji",
    "WAWebMediaEditorEnumsFonts",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ font, fontSize, maxWidth, originalText }) {
        const i = [];
        for (const l of originalText.split("\n")){
            if (l === "") {
                i.push({
                    text: "",
                    width: 0,
                    words: []
                });
                continue;
            }
            for(var s = l.split(" "), c = "", d = 0, words = [], p = 0; p < s.length; p++){
                const _ = (p !== 0 ? " " : "") + s[p];
                const f = c + _;
                const g = u(f, font, fontSize);
                if (maxWidth > 0 && g > maxWidth && d > 0) {
                    i.push({
                        text: c,
                        width: d,
                        words
                    });
                    c = "";
                    d = 0;
                    words = [];
                    p--;
                } else {
                    c = f;
                    d = g;
                    for (const h of _.split(o("WAWebEmoji").EmojiUtil.emojiRegex())){
                        if (h) {
                            let emojiPath = null;
                            if (o("WAWebEmoji").EmojiUtil.isEmoji(h)) {
                                emojiPath = o("WAWebEmoji").EmojiUtil.getGlyphPath(h, 64);
                            }
                            const C = u(h, font, fontSize);
                            words.push({
                                text: h,
                                width: C,
                                emojiPath
                            });
                        }
                    }
                }
            }
            if (d > 0) {
                i.push({
                    text: c,
                    width: d,
                    words
                });
            }
        }
        return i;
    }
    function u(e, t, n) {
        const a = c();
        const i = r("nullthrows")(a.getContext("2d"));
        i.font = `${n}px ${o("WAWebMediaEditorEnumsFonts").getFontStyle(t).fontFamily}`;
        let l = 0;
        for (const s of e.split(o("WAWebEmoji").EmojiUtil.emojiRegex())){
            if (o("WAWebEmoji").EmojiUtil.isEmoji(s)) {
                l += n;
            } else {
                l += i.measureText(s).width;
            }
        }
        return l;
    }
    function c() {
        if (e == null) {
            e = document.createElement("canvas");
            e.width = 9999;
            e.height = 99;
        }
        return e;
    }
    const d = new Map;
    function m(e, t) {
        const n = `${t}px ${o("WAWebMediaEditorEnumsFonts").getFontStyle(e).fontFamily}`;
        const a = d.get(n);
        if (a != null) {
            return a;
        }
        const i = "ABCDEF";
        const l = Math.round(u(i, e, t));
        const s = t;
        const m = c();
        const p = r("nullthrows")(m.getContext("2d"));
        p.textBaseline = "middle";
        p.font = n;
        p.fillStyle = "red";
        p.fillText(i, 0, s / 2);
        const data = p.getImageData(0, 0, l, s).data;
        let f = Infinity;
        let g = Infinity;
        let h = Infinity;
        for(let y = 0; y < l; y++){
            for(let C = 0; C < s; C++){
                const b = (C * l + y) * 4;
                if (data[b + 3] > 0) {
                    g = Math.min(g, C);
                    f = Math.min(f, y);
                    h = Math.min(h, s - C);
                }
            }
        }
        p.clearRect(0, 0, l, s);
        const v = {
            top: g,
            left: f,
            bottom: h
        };
        d.set(p.font, v);
        return v;
    }
    l.getLines = s;
    l.getTextBounds = m;
}, 98);