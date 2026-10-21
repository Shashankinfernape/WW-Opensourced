__d("WAWebSystemMessagesUtils", [
    "WAWebEmojiText.react",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        return e instanceof r("WAWebWid") && o("WAWebUserPrefsMeUser").isMeAccount(e);
    }
    function c(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_text = e.text;
        let r;
        if (t[0] !== e_text) {
            r = s.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: e_text
            });
            t[0] = e_text;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    l.isMe = u;
    l.FormattedText = c;
}, 98);