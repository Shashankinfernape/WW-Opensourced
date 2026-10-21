__d("WAWebVoipUiVideoGroupCallLoadable", [
    "JSResourceForInteraction",
    "WAWebFlex.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebSpinner.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        loading: {
            backgroundColor: "x1e6sl3u",
            height: "x5yr21d",
            width: "xh8yej3",
            $$css: true
        }
    };
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebVoipUiVideoGroupCall.react").__setRef("WAWebVoipUiVideoGroupCallLoadable").load();
        return e;
    }), "WAWebVoipUiVideoGroupCallLoadable");
    const d = r("WAWebLoadable")({
        loader: c,
        loading: function(t) {
            const Component = o("WAWebFlex.react").FlexRow;
            return <Component testid="voip_group_call_ui_loading" align="center" justify="center" xstyle={u.loading}>{s.jsx(o("WAWebSpinner.react").Spinner, {
                color: "accent",
                size: 40,
                stroke: 3
            })}</Component>;
        }
    });
    l.requireBundle = c;
    l.WAWebVoipUiVideoGroupCallLoadable = d;
}, 98);