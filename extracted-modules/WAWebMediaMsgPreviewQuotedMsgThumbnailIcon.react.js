__d("WAWebMediaMsgPreviewQuotedMsgThumbnailIcon.react", [
    "WAWebMediaMsgPreview.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_msg = e.msg;
        const n_mediaData = e_msg.mediaData;
        const { fullPreviewData, preview } = n_mediaData;
        const l = preview != null || fullPreviewData != null;
        if (!l) {
            return null;
        }
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                className: "xi9e97b"
            };
            t[0] = u;
        } else {
            u = t[0];
        }
        let c;
        if (t[1] !== e_msg.mediaData) {
            c = <div {...babelHelpers.extends({}, u, {
                children: s.jsx(o("WAWebMediaMsgPreview.react").MediaMsgPreview, {
                    mediaData: e_msg.mediaData
                })
            })}/>;
            t[1] = e_msg.mediaData;
            t[2] = c;
        } else {
            c = t[2];
        }
        return c;
    }
    l.default = u;
}, 98);