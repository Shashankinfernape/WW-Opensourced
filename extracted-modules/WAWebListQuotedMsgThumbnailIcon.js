__d("WAWebListQuotedMsgThumbnailIcon", [
    "WAWebMediaUtils",
    "WAWebMsgGetters",
    "WAWebQuotedMsgQuotedMedia.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_msg = e.msg;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebMsgGetters").getProductListHeaderImage
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e_msg.id, r);
        const i = a[0];
        if (!i) {
            return null;
        }
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                className: "xi9e97b"
            };
            t[1] = l;
        } else {
            l = t[1];
        }
        let source;
        if (t[2] !== i) {
            source = o("WAWebMediaUtils").convertToBase64(i);
            t[2] = i;
            t[3] = source;
        } else {
            source = t[3];
        }
        let c;
        if (t[4] !== source) {
            c = <div {...babelHelpers.extends({}, l, {
                children: s.jsx(o("WAWebQuotedMsgQuotedMedia.react").Base64BackgroundImage, {
                    source
                })
            })}/>;
            t[4] = source;
            t[5] = c;
        } else {
            c = t[5];
        }
        return c;
    }
    l.default = u;
}, 98);