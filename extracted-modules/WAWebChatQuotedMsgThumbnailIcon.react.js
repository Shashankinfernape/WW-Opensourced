__d("WAWebChatQuotedMsgThumbnailIcon.react", [
    "WAWebQuotedMsgQuotedMedia.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_msg = e.msg;
        if (!e_msg.thumbnail) {
            return null;
        }
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                className: "xi9e97b"
            };
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] !== e_msg.thumbnail) {
            a = <div {...babelHelpers.extends({}, r, {
                children: s.jsx(o("WAWebQuotedMsgQuotedMedia.react").Base64BackgroundImage, {
                    source: e_msg.thumbnail
                })
            })}/>;
            t[1] = e_msg.thumbnail;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    l.default = u;
}, 98);