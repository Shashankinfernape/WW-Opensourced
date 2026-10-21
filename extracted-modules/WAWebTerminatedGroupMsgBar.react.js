__d("WAWebTerminatedGroupMsgBar.react", [
    "fbt",
    "WAWebFlex.react",
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
            const Component = o("WAWebFlex.react").FlexColumn;
            n = <Component align="center"><span {...babelHelpers.extends({}, t, {
                "data-testid": "terminated-group-msg-bar",
                children: s._("This group is no longer available")
            })}/></Component>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    l.default = c;
}, 226);