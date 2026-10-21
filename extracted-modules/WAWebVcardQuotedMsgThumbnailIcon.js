__d("WAWebVcardQuotedMsgThumbnailIcon", [
    "WAWebDetailImage.react",
    "WAWebMsgGetters",
    "WAWebProfileImage.react",
    "WAWebProfilePicThumbCollection",
    "WAWebQuotedMsgUtils",
    "WAWebVcardParsingUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(11);
        const { msg, theme } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "xi9e97b"
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        let wid;
        if (t[1] !== msg) {
            wid = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.getThumbnailWidFromVcard(o("WAWebMsgGetters").getVcard(msg));
            t[1] = msg;
            t[2] = wid;
        } else {
            wid = t[2];
        }
        let thumb;
        if (t[3] !== msg) {
            thumb = o("WAWebVcardParsingUtils").vcardThumbnail(o("WAWebMsgGetters").getVcard(msg));
            t[3] = msg;
            t[4] = thumb;
        } else {
            thumb = t[4];
        }
        let c;
        if (t[5] !== theme) {
            c = o("WAWebQuotedMsgUtils").getImageSize(theme);
            t[5] = theme;
            t[6] = c;
        } else {
            c = t[6];
        }
        let d;
        if (t[7] !== wid || t[8] !== thumb || t[9] !== c) {
            d = <div {...babelHelpers.extends({}, i, {
                children: s.jsx(r("WAWebProfileImage.react"), {
                    wid,
                    thumb,
                    quoted: true,
                    shape: o("WAWebDetailImage.react").DetailImageShape.Square,
                    size: c
                })
            })}/>;
            t[7] = wid;
            t[8] = thumb;
            t[9] = c;
            t[10] = d;
        } else {
            d = t[10];
        }
        return d;
    }
    l.default = u;
}, 98);