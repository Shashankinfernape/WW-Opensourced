__d("WAWebBotCommandSuggestionResult.react", [
    "WAWebBotCommandSuggestions.react",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(29);
        const { command, imageWid, onMouseDown, onMouseEnter, onMouseUp, query, selected } = e;
        const { description, name } = command;
        let p;
        if (t[0] !== name || t[1] !== query.length) {
            p = name.slice(0, query.length);
            t[0] = name;
            t[1] = query.length;
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        let f;
        if (t[3] !== name || t[4] !== query.length) {
            f = name.slice(query.length);
            t[3] = name;
            t[4] = query.length;
            t[5] = f;
        } else {
            f = t[5];
        }
        const g = f;
        let h;
        if (t[6] !== selected) {
            h = ({
                0: {
                    className: "x78zum5 x6s0dn4 x1qx5ct2 xyamay9 xl3akx1 x1l90r2v x11ahuha x6ikm8r x10wlt62 x1f6kntn xhslqc4 xlyipyv xuxw1ft xxymvpz"
                },
                1: {
                    className: "x78zum5 x6s0dn4 x1qx5ct2 xyamay9 xl3akx1 x1l90r2v x11ahuha x6ikm8r x10wlt62 x1f6kntn xhslqc4 xlyipyv xuxw1ft xxymvpz x1ru9bj0"
                }
            })[!!selected << 0];
            t[6] = selected;
            t[7] = h;
        } else {
            h = t[7];
        }
        let y;
        if (t[8] !== imageWid) {
            y = imageWid != null && <div className="x17pgkn5 xav9cv8 x1sa5p1d">{s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: imageWid,
                size: 32
            })}</div>;
            t[8] = imageWid;
            t[9] = y;
        } else {
            y = t[9];
        }
        let C;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebEmojiText.react").EmojiText;
            C = <Component className="xyqdw3p x14ug900" text={o("WAWebBotCommandSuggestions.react").QUERY_TRIGGER}/>;
            t[10] = C;
        } else {
            C = t[10];
        }
        let b;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            b = "xyqdw3p x117nqv4 x1v5yvga";
            t[11] = b;
        } else {
            b = t[11];
        }
        let v;
        if (t[12] !== _) {
            const Component = o("WAWebEmojiText.react").EmojiText;
            v = <Component className={b} text={_}/>;
            t[12] = _;
            t[13] = v;
        } else {
            v = t[13];
        }
        let S;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            S = "xyqdw3p x14ug900";
            t[14] = S;
        } else {
            S = t[14];
        }
        let R;
        if (t[15] !== g) {
            const Component = o("WAWebEmojiText.react").EmojiText;
            R = <Component className={S} text={g}/>;
            t[15] = g;
            t[16] = R;
        } else {
            R = t[16];
        }
        let L;
        if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
            L = "xyqdw3p x1hm9lzh xhslqc4 x1yc453h";
            t[17] = L;
        } else {
            L = t[17];
        }
        let E;
        if (t[18] !== description) {
            const Component = o("WAWebEmojiText.react").EmojiText;
            E = <Component className={L} testid="bot-command-description" ellipsify text={description}/>;
            t[18] = description;
            t[19] = E;
        } else {
            E = t[19];
        }
        let k;
        if (t[20] !== onMouseDown || t[21] !== onMouseEnter || t[22] !== onMouseUp || t[23] !== E || t[24] !== h || t[25] !== y || t[26] !== v || t[27] !== R) {
            k = <div {...babelHelpers.extends({}, h, {
                onMouseDown,
                onMouseUp,
                onMouseEnter,
                children: [
                    y,
                    C,
                    v,
                    R,
                    E
                ]
            })}/>;
            t[20] = onMouseDown;
            t[21] = onMouseEnter;
            t[22] = onMouseUp;
            t[23] = E;
            t[24] = h;
            t[25] = y;
            t[26] = v;
            t[27] = R;
            t[28] = k;
        } else {
            k = t[28];
        }
        return k;
    }
    l.default = u;
}, 98);