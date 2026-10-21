__d("WAWebUprPaymentOptionsDrawerLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebDrawerManager",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebUprPaymentOptionsDrawer.react").__setRef("WAWebUprPaymentOptionsDrawerLoadable").load();
        return e;
    }), "WAWebUprPaymentOptionsDrawer");
    const D6 = r("WAWebLoadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingDrawer.react"), {
                title: s._("Payment options"),
                error: !!t.error
            });
        }
    });
    function m({ info, msg }) {
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(<D6 info={info} msg={msg} onClose={o("WAWebDrawerManager").closeDrawerRight}/>, {
            transition: "slide-left"
        });
    }
    l.WAWebUprPaymentOptionsDrawerLoadable = D6;
    l.openUprPaymentOptionsDrawer = m;
}, 226);