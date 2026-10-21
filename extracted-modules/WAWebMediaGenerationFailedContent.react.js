__d("WAWebMediaGenerationFailedContent.react", [
    "fbt",
    "WAWebEmptyState.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_isVideo = e.isVideo;
        let r;
        if (t[0] !== e_isVideo) {
            const a = e_isVideo ? s._("I can’t generate that video right now. Please try again later.") : s._("I can’t generate that image right now. Please try again later.");
            r = u.jsx(o("WAWebEmptyState.react").Empty, {
                text: a
            });
            t[0] = e_isVideo;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    l.default = c;
}, 226);