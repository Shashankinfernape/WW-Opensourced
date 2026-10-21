__d("WAWebApplyBrazilPaymentStateUpdatesWithRetries", [
    "Promise",
    "WALogger",
    "WAWebApplyBrazilPaymentStateUpdatesLazily",
    "WAWebBrazilPaymentStatePendingUpdates",
    "WAWebRemoveReplacedBrazilPaymentStateRows",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "uniqueBy"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = [
        5000,
        30000,
        120000
    ];
    let f = false;
    function g(e) {
        return R([
            e
        ], function() {
            return o("WAWebRemoveReplacedBrazilPaymentStateRows").removeReplacedBrazilPaymentStateRows([
                e
            ]);
        }, 0);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = new Set(t.map((e)=>e.id.toString()));
            yield r("uniqueBy")(e, function(e) {
                return e.id.toString();
            }).reduce((e, t)=>e.then(()=>R([
                        t
                    ], function() {
                        if (a.has(t.id.toString())) {
                            return o("WAWebRemoveReplacedBrazilPaymentStateRows").removeReplacedBrazilPaymentStateRows([
                                t
                            ]);
                        }
                        return (p || (p = n("Promise"))).resolve();
                    }, 0)), (p || (p = n("Promise"))).resolve());
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                yield o("WAWebBrazilPaymentStatePendingUpdates").savePendingBrazilPaymentStateUpdates(t);
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] could not keep the updates until they apply"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("br-payment-state-pending-save-failed");
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = !f;
            const n = t ? void 0 : new Set(e.map((e)=>e.id.id));
            try {
                const a = yield o("WAWebBrazilPaymentStatePendingUpdates").getPendingBrazilPaymentStateUpdateMsgs(n);
                if (t) {
                    f = true;
                }
                a.forEach((e)=>{
                    g(e);
                });
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] could not replay the pending updates"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("br-payment-state-pending-replay-failed");
            }
        });
        return S.apply(this, arguments);
    }
    function R(e, t, n) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (yield o("WAWebApplyBrazilPaymentStateUpdatesLazily").applyBrazilPaymentStateUpdatesLazily(e)) {
                if (yield I(t)) {
                    yield E(e);
                }
                return;
            }
            const a = _[n];
            if (a == null) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] giving up on updates after their retries"
                ]))).sendLogs("br-payment-state-apply-gave-up");
                return;
            }
            self.setTimeout(function() {
                R(e, t, n + 1).catch((e)=>{
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[br-payment-state] a retried update could not be finished"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("br-payment-state-retry-failed");
                });
            }, a);
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield o("WAWebBrazilPaymentStatePendingUpdates").removePendingBrazilPaymentStateUpdates(e);
            } catch (e) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] could not forget the applied updates"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("br-payment-state-pending-remove-failed");
            }
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield e();
                return true;
            } catch (e) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] could not remove the rows an update resolved"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("br-payment-state-row-removal-failed");
                return false;
            }
        });
        return T.apply(this, arguments);
    }
    l.applyThenRemoveStoredBrazilPaymentStateRow = g;
    l.applyThenRemoveReplacedBrazilPaymentStateRows = h;
    l.keepBrazilPaymentStateUpdatesUntilApplied = C;
    l.replayPendingBrazilPaymentStateUpdates = v;
}, 98);