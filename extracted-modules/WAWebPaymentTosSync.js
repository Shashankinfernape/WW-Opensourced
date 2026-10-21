__d("WAWebPaymentTosSync", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebMobilePlatforms",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsPaymentTos",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 7;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.PaymentTos;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                if (o("WAWebMobilePlatforms").isSMB() !== true) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Payment Tos sync: operation not supported, app is not SMB"
                    ])));
                    return t.map(()=>({
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        }));
                }
                if (o("WAWebABProps").getABPropConfigValue("payments_br_pix_on_web") !== true) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Payment Tos sync: unsupported, ABProp check failed"
                    ])));
                    return t.map(()=>({
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        }));
                }
                let r = 0;
                let a = 0;
                const i = t.map((e)=>{
                    if (e.operation !== "set") {
                        r++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    }
                    const paymentTosAction = e.value.paymentTosAction;
                    if (paymentTosAction == null) {
                        a++;
                        return o("WAWebSyncdIndexUtils").malformedActionValue(n.collectionName);
                    }
                    o("WAWebUserPrefsPaymentTos").setPaymentTos(paymentTosAction);
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                });
                if (r > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Payment Tos sync: ",
                        " operations not supported"
                    ])), r);
                }
                if (a > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "PaymentTos sync: ",
                        " malformed mutations"
                    ])), a);
                }
                return i;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.getPaymentTosSetMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(paymentTosAction) {
                const t = o("WATimeUtils").unixTimeMs();
                const n = {
                    paymentTosAction
                };
                const r = o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [],
                    value: n,
                    version: this.getVersion(),
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    timestamp: t,
                    action: this.getAction()
                });
                return r;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const m = new d;
    l.default = m;
}, 98);