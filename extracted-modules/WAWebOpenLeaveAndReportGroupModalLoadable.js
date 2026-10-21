__d("WAWebOpenLeaveAndReportGroupModalLoadable", [
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
        return r("JSResourceForInteraction")("WAWebOpenLeaveAndReportGroupModal").__setRef("WAWebOpenLeaveAndReportGroupModalLoadable").load();
    }, "OpenLeaveAndReportGroupModal", {
        onFinalFailure: function(n, r) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[groupspam] leave and report group modal chunk abandoned after ",
                " attempts"
            ])), r).catching(n).sendLogs("leave-and-report-group-modal-chunk-load-failed");
        }
    });
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = ()=>{
                o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Something went wrong. Please try again.")
                }));
            };
            let a;
            try {
                a = yield d();
            } catch (e) {
                r();
                return;
            }
            if (a?.openLeaveAndReportGroupModal == null) {
                r();
                return;
            }
            a.openLeaveAndReportGroupModal(e, t);
        });
        return p.apply(this, arguments);
    }
    l.openLeaveAndReportGroupModal = m;
}, 226);