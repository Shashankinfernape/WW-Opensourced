__d("WAWebProductQuotedMsgThumbnailIcon", [
    "WAWebMediaMsgPreview.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = {
                className: "xi9e97b"
            };
            t[0] = n;
        } else {
            n = t[0];
        }
        let r;
        if (t[1] !== e.msg.mediaData) {
            r = <div {...babelHelpers.extends({}, n, {
                children: s.jsx(o("WAWebMediaMsgPreview.react").MediaMsgPreview, {
                    mediaData: e.msg.mediaData
                })
            })}/>;
            t[1] = e.msg.mediaData;
            t[2] = r;
        } else {
            r = t[2];
        }
        return r;
    }
    l.default = u;
}, 98);