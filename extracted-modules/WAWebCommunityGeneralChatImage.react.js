__d("WAWebCommunityGeneralChatImage.react", [
    "bx",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("bx").getURL(r("bx")("10639"));
    const c = `${window.location.origin}${u}`;
    function d() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <div className="x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1xsqp64 x18d0r48 x1vjfegm" style={{
                backgroundImage: `url(${u})`
            }} aria-hidden/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    l.GeneralChatPlaceholderFullUrl = c;
    l.CommunityGeneralChatImage = d;
}, 98);