__d("WAWebResponsesListDrawerLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "WAWebNewsletterGatingUtils",
    "WAWebResponsesListShimmer.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "react-loadable"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebResponsesListDrawer.react").__setRef("WAWebResponsesListDrawerLoadable").load();
        return e.ResponsesListDrawer;
    }), "ResponsesListDrawer");
    function d() {
        return s._("Responses list");
    }
    function M9Component() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            t = <Component title={d()} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL} onCancel={o("WAWebDrawerManager").closeDrawerRight}/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebDrawerBody.react");
            const Component_1 = r("WAWebDrawer.react");
            n = <Component_1 disableNavigationLogging>{t}<Component>{u.jsx(r("WAWebResponsesListShimmer.react"), {
                description: "WAWebResponsesListDrawerLoading"
            })}</Component></Component_1>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    const p = r("react-loadable")({
        loader: c,
        loading: function(t) {
            if (t.error != null) {
                return u.jsx(r("WAWebLoadingDrawer.react"), {
                    title: d(),
                    error: true
                });
            }
            if (o("WAWebNewsletterGatingUtils").isNewsletterQuestionResponsesShimmerEnabled()) {
                return <M9Component/>;
            }
            return u.jsx(r("WAWebLoadingDrawer.react"), {
                title: d(),
                error: false
            });
        }
    });
    l.ResponsesListDrawerLoadable = p;
}, 226);