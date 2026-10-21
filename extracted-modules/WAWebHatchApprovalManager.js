__d("WAWebHatchApprovalManager", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        function e() {
            this.$1 = new Map;
            this.$2 = [];
            this.$3 = new Set;
            this.$4 = [];
        }
        const t = e.prototype;
        t.getPendingApprovals = function() {
            return this.$2;
        };
        t.getApproval = function(t) {
            return this.$1.get(t);
        };
        t.isSettled = function(t) {
            return this.$3.has(t);
        };
        t.upsertApproval = function(t) {
            if (!this.$3.has(t.approvalId)) {
                this.$1.set(t.approvalId, t);
                this.$5();
            }
        };
        t.resolveApproval = function(t) {
            if (this.$1.delete(t)) {
                this.$5();
            }
        };
        t.getFundedCheckout = function(t) {
            return u(this.$1.get(t));
        };
        t.hasCheckoutPaymentOption = function(t, n) {
            return u(this.$1.get(t))?.paymentOptions.some(function(e) {
                return e.paymentId === n;
            }) === true;
        };
        t.applyCheckoutPaymentOption = function(t, n) {
            const e = this.$1.get(t);
            const r = u(e);
            if (e == null || r == null) {
                return false;
            }
            const o = r.paymentOptions.find((e)=>e.paymentId === n);
            if (o == null) {
                return false;
            }
            const a = c(e, o);
            if (a == null) {
                return false;
            }
            this.$1.set(t, a);
            this.$5();
            return true;
        };
        t.settleApproval = function(t) {
            const e = !this.$3.has(t);
            this.$3.add(t);
            if (this.$1.delete(t) || e) {
                this.$5();
            }
        };
        t.subscribe = function(t) {
            const e = this;
            this.$4.push(t);
            let n = false;
            return function() {
                if (!n) {
                    n = true;
                    const r = e.$4.indexOf(t);
                    if (r !== -1) {
                        e.$4.splice(r, 1);
                    }
                }
            };
        };
        t.__resetForTesting = function() {
            this.$1 = new Map;
            this.$2 = [];
            this.$3 = new Set;
            this.$4 = [];
        };
        t.$5 = function() {
            this.$2 = Array.from(this.$1.values());
            for (const e of [].concat(this.$4)){
                e();
            }
        };
        return e;
    })();
    const l = new e;
    const s = l;
    function u(e) {
        return e?.shopifyCheckout ?? e?.browserCheckout;
    }
    function c(e, t) {
        const { browserCheckout: n, shopifyCheckout: r } = e;
        const o = {
            paymentId: t.paymentId,
            paymentMethodLabel: t.paymentMethodLabel,
            cardBrand: t.cardBrand,
            cardLast4: t.cardLast4
        };
        if (r != null) {
            return babelHelpers.extends({}, e, {
                shopifyCheckout: babelHelpers.extends({}, r, o)
            });
        }
        if (n != null) {
            return babelHelpers.extends({}, e, {
                browserCheckout: babelHelpers.extends({}, n, o)
            });
        }
        return null;
    }
    i.default = s;
}, 66);