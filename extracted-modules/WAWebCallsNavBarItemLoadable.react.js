__d("WAWebCallsNavBarItemLoadable.react", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebVoipGatingUtils",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        try {
            const t = yield r("JSResourceForInteraction")("WAWebCallsNavBarItem.react").__setRef("WAWebCallsNavBarItemLoadable.react").load();
            return t;
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to load WAWebCallsNavBarItem bundle: ",
                ""
            ])), error);
            throw error;
        }
    }), "WAWebCallsNavBarItemLoadable");
    const D3 = r("WAWebLoadable")({
        loader: c,
        loading: function(t) {
            return <></>;
        }
    });
    function m(e) {
        const t = o("react-compiler-runtime").c(3);
        const { activeNavBarItem, updateActiveNavBarItem } = e;
        if (!o("WAWebVoipGatingUtils").isCallingEnabled()) {
            return null;
        }
        let a;
        if (t[0] !== activeNavBarItem || t[1] !== updateActiveNavBarItem) {
            a = <D3 activeNavBarItem={activeNavBarItem} updateActiveNavBarItem={updateActiveNavBarItem}/>;
            t[0] = activeNavBarItem;
            t[1] = updateActiveNavBarItem;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    l.CallsNavBarItemLoadable = m;
}, 98);