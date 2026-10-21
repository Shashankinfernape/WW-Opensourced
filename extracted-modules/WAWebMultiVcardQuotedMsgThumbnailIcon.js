__d("WAWebMultiVcardQuotedMsgThumbnailIcon", [
    "WAWebDetailImage.react",
    "WAWebProfileImage.react",
    "WAWebQuotedMsgUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = {
                className: "xi9e97b"
            };
            t[0] = n;
        } else {
            n = t[0];
        }
        let a;
        if (t[1] !== e.theme) {
            a = o("WAWebQuotedMsgUtils").getImageSize(e.theme);
            t[1] = e.theme;
            t[2] = a;
        } else {
            a = t[2];
        }
        let i;
        if (t[3] !== a) {
            i = <div {...babelHelpers.extends({}, n, {
                children: s.jsx(r("WAWebProfileImage.react"), {
                    size: a,
                    shape: o("WAWebDetailImage.react").DetailImageShape.Square,
                    quoted: true
                })
            })}/>;
            t[3] = a;
            t[4] = i;
        } else {
            i = t[4];
        }
        return i;
    }
    l.default = u;
}, 98);