__d("WAWebLocationQuotedMsgThumbnailIcon", [
    "WAWebQuotedMsgQuotedMedia.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_msg = e.msg;
        const n_body = e_msg.body;
        if (n_body == null || n_body === "") {
            return null;
        }
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                className: "xi9e97b"
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== n_body) {
            i = <div {...babelHelpers.extends({}, a, {
                children: s.jsx(o("WAWebQuotedMsgQuotedMedia.react").Base64BackgroundImage, {
                    source: n_body
                })
            })}/>;
            t[1] = n_body;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    l.default = u;
}, 98);