__d("WAWebDeactivatedUserMsgBarLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebDeactivatedUserMsgBar.react").__setRef("WAWebDeactivatedUserMsgBarLoadable").load();
        return e;
    }), "DeactivatedUserMsgBar");
    const d = r("WAWebLoadable")({
        loader: c,
        renderLoadingImmediately: true,
        loading: function() {
            return <M4Component/>;
        }
    });
    function M4Component() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            t = <div data-testid="deactivated-user-msgbar-loading"><Component type="Body2" colorName="contentDeemphasized">{s._("This person is no longer on WhatsApp.")}</Component></div>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    l.WAWebDeactivatedUserMsgBarLoadable = d;
}, 226);