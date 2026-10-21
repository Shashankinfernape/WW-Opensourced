__d("WAWebGetQuickPayAction", [
    "fbt",
    "WAWebOrderGatingUtils",
    "WAWebShowMessageActionFallbackErrorAction"
], function(t, n, r, o, a, i, l, s) {
    const e = (t)=>({
            label: s._("Pay now on WhatsApp"),
            disabled: t,
            onClick: function() {
                return r("WAWebShowMessageActionFallbackErrorAction")({
                    title: s._("Complete payment on your phone"),
                    body: ""
                });
            }
        });
    function u(t, n) {
        const r = o("WAWebOrderGatingUtils").QuickPayProductTypeGating.cast(t);
        if (r && o("WAWebOrderGatingUtils").isOrderDetailsQuickPayEnabled(r)) {
            return e(n);
        }
        return null;
    }
    l.getQuickPayAction = u;
}, 226);