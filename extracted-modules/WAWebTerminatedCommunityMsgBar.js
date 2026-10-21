__d("WAWebTerminatedCommunityMsgBar", [
    "fbt",
    "WAWebCxtUrl",
    "WAWebExternalLink.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = {
                className: "x126k92a"
            };
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            n = <span {...babelHelpers.extends({}, t, {
                "data-testid": "terminated-community-msg-bar",
                children: s._("This community is no longer available. {=m2}", [
                    s._implicitParam("=m2", <Component href={o("WAWebCxtUrl").getCommunityNotAvailableFaqUrl()}>{s._("Learn more")}</Component>)
                ])
            })}/>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    l.default = c;
}, 226);