__d("WAWebBizAiSmartComposerStatusPlaceholder.react", [
    "fbt",
    "WDSText.react",
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
                className: "xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft"
            };
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            n = <div {...babelHelpers.extends({}, t, {
                "data-testid": "biz_ai_smart_composer_status_placeholder",
                children: <Component type="Body2" colorName="contentDeemphasized">{s._("Getting ready…")}</Component>
            })}/>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    l.default = c;
}, 226);