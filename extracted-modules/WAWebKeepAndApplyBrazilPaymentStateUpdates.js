__d("WAWebKeepAndApplyBrazilPaymentStateUpdates", [
    "WALogger",
    "WAWebApplyBrazilPaymentStateUpdatesWithRetries",
    "WAWebBrazilPaymentStateUpdatePayload",
    "WAWebPaymentsGatingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return o("WAWebBrazilPaymentStateUpdatePayload").isBrazilPaymentStateUpdateMsg(e) && f();
    }
    function c(e) {
        return e.filter((e)=>!u(e));
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (!n) {
                yield o("WAWebApplyBrazilPaymentStateUpdatesWithRetries").keepBrazilPaymentStateUpdatesUntilApplied([
                    t
                ]);
            }
            o("WAWebApplyBrazilPaymentStateUpdatesWithRetries").applyThenRemoveStoredBrazilPaymentStateRow(t).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] could not apply the update"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("br-payment-state-apply-failed");
            });
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.filter(u);
            if (o("WAWebPaymentsGatingUtils").isBrazilPaymentStateUpdateSupported()) {
                yield o("WAWebApplyBrazilPaymentStateUpdatesWithRetries").replayPendingBrazilPaymentStateUpdates(e);
            }
            if (t.length !== 0) {
                yield o("WAWebApplyBrazilPaymentStateUpdatesWithRetries").keepBrazilPaymentStateUpdatesUntilApplied(t);
                o("WAWebApplyBrazilPaymentStateUpdatesWithRetries").applyThenRemoveReplacedBrazilPaymentStateRows(t, t).catch((e)=>{
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[br-payment-state] could not apply the batch updates"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("br-payment-state-batch-apply-failed");
                });
            }
        });
        return _.apply(this, arguments);
    }
    function f() {
        return r("justknobx")._("6445");
    }
    l.isRoutedBrazilPaymentStateUpdateMsg = u;
    l.withoutRoutedBrazilPaymentStateUpdates = c;
    l.keepAndApplyBrazilPaymentStateUpdate = d;
    l.keepAndApplyBrazilPaymentStateUpdatesInBatch = p;
}, 98);