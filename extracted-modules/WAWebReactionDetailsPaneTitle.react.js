__d("WAWebReactionDetailsPaneTitle.react", [
    "fbt",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        titleText: {
            userSelect: "x1hx0egp",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(6);
        const { count, titleRef } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x1p57kb1 x1iw51ew xde1mab"
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== count) {
            const Component = r("WDSText.react");
            l = <Component type="Body2Emphasized" colorName="contentDeemphasized" xstyle={c.titleText}>{s._("_j{\"*\":\"{number} reactions\",\"_1\":\"1 reaction\"}", [
                s._plural(count, "number")
            ])}</Component>;
            t[1] = count;
            t[2] = l;
        } else {
            l = t[2];
        }
        let d;
        if (t[3] !== l || t[4] !== titleRef) {
            d = <div {...babelHelpers.extends({}, i, {
                ref: titleRef,
                "data-testid": "reaction-count-header",
                children: l
            })}/>;
            t[3] = l;
            t[4] = titleRef;
            t[5] = d;
        } else {
            d = t[5];
        }
        return d;
    }
    l.default = d;
}, 226);