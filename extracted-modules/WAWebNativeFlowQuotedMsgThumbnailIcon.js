__d("WAWebNativeFlowQuotedMsgThumbnailIcon", [
    "WAWebMediaMsgPreview.react",
    "WAWebProtobufsE2E.pb",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_msg = e.msg;
        if (e_msg.headerType !== o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.IMAGE) {
            return null;
        }
        const n_mediaData = e_msg.mediaData;
        if (n_mediaData.preview == null && n_mediaData.fullPreviewData == null) {
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
        if (t[1] !== n_mediaData) {
            i = <div {...babelHelpers.extends({}, a, {
                children: s.jsx(o("WAWebMediaMsgPreview.react").MediaMsgPreview, {
                    mediaData: n_mediaData
                })
            })}/>;
            t[1] = n_mediaData;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    l.default = u;
}, 98);