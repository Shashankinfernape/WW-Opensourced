__d("WAWebLeaveCommunityModalUtilsLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebLeaveCommunityModalUtils").__setRef("WAWebLeaveCommunityModalUtilsLoadable").load();
    }, "LeaveCommunityModalUtils", {
        onFinalFailure: function(n, r) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[community] leave community modal chunk abandoned after ",
                " attempts"
            ])), r).catching(n).sendLogs("leave-community-modal-chunk-load-failed");
        }
    });
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = ()=>{
                o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Something went wrong. Please try again.")
                }));
            };
            let r;
            try {
                r = yield d();
            } catch (e) {
                n();
                return;
            }
            if (r?.openLeaveCommunityModal == null) {
                n();
                return;
            }
            r.openLeaveCommunityModal(e);
        });
        return p.apply(this, arguments);
    }
    l.openLeaveCommunityModal = m;
}, 226);