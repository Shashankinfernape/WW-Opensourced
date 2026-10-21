__d("WAWebInteractiveQuotedMsgThumbnailIcon", [
    "WAWebMediaMsgPreview.react",
    "WAWebQuotedMsgQuotedMedia.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_msg = e.msg;
        let r;
        if (t[0] !== e_msg.interactiveHeader) {
            r = e_msg.interactiveHeader || {};
            t[0] = e_msg.interactiveHeader;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = r;
        const { mediaType, thumbnail } = a;
        if (mediaType == null) {
            return null;
        }
        let u;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                className: "xi9e97b"
            };
            t[2] = u;
        } else {
            u = t[2];
        }
        let fallbackPreview;
        if (t[3] !== thumbnail) {
            fallbackPreview = thumbnail != null && s.jsx(o("WAWebQuotedMsgQuotedMedia.react").Base64BackgroundImage, {
                source: thumbnail
            });
            t[3] = thumbnail;
            t[4] = fallbackPreview;
        } else {
            fallbackPreview = t[4];
        }
        let d;
        if (t[5] !== e_msg.mediaData || t[6] !== fallbackPreview) {
            d = <div {...babelHelpers.extends({}, u, {
                children: s.jsx(o("WAWebMediaMsgPreview.react").MediaMsgPreview, {
                    mediaData: e_msg.mediaData,
                    fallbackPreview
                })
            })}/>;
            t[5] = e_msg.mediaData;
            t[6] = fallbackPreview;
            t[7] = d;
        } else {
            d = t[7];
        }
        return d;
    }
    l.default = u;
}, 98);