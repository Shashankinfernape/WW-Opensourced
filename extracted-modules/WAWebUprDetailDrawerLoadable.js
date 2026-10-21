__d("WAWebUprDetailDrawerLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebOrderDetailDrawerContainer.react").__setRef("WAWebUprDetailDrawerLoadable").load();
        return e;
    }), "WAWebOrderDetailDrawerContainer");
    const D5 = r("WAWebLoadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingDrawer.react"), {
                title: s._("Payment details"),
                error: !!t.error
            });
        }
    });
    function m({ chat, msg, orderInfo, sellerWid }) {
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(<D5 chat={chat} interactiveMessage={msg} onBack={o("WAWebDrawerManager").closeDrawerRight} orderInfo={orderInfo} sellerWid={sellerWid}/>, {
            transition: "slide-left"
        });
    }
    l.openUprDetailDrawer = m;
}, 226);