__d("WAWebShowScheduledMsgsBulkDeleteToast", [
    "fbt",
    "WAWebActionToast.react",
    "WAWebBulkUnscheduleScheduledMsgs",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e, t, r) {
        const a = o("WAWebBulkUnscheduleScheduledMsgs").bulkUnscheduleScheduledMsgs(e, t).then(()=>{
            const e = s._("Scheduled messages deleted");
            if (r != null) {
                return new (o("WAWebActionToast.react")).ActionType(e, {
                    actionText: r.text,
                    actionHandler: (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            r.handler();
                        });
                        function t() {
                            return e.apply(this, arguments);
                        }
                        return t;
                    })()
                });
            }
            return new (o("WAWebActionToast.react")).ActionType(e);
        });
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebActionToast.react").ActionToast, {
            id: o("WAWebToast.react").genId(),
            initialAction: new (o("WAWebActionToast.react")).ActionType(s._("Deleting scheduled messages")),
            pendingAction: a
        }));
    }
    l.showScheduledMsgsBulkDeleteToast = c;
}, 226);