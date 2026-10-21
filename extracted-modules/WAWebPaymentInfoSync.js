__d("WAWebPaymentInfoSync", [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebMobilePlatforms",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
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
            return o("WAWebSyncdConst").Actions.PaymentInfo;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                if (o("WAWebMobilePlatforms").isSMB() !== true) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "payment info sync: operation not supported, app is not SMB"
                    ])));
                    return t.map(()=>({
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        }));
                }
                if (o("WAWebABProps").getABPropConfigValue("order_details_payment_instructions_sync_enabled") !== true) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "payment info sync: unsupported, ABProp not passed"
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
                    const cpiInfo = e.value.paymentInfoAction?.cpi;
                    if (typeof cpiInfo !== "string") {
                        a++;
                        return o("WAWebSyncdIndexUtils").malformedActionValue(n.collectionName);
                    }
                    o("WAWebBackendApi").frontendFireAndForget("setCPIInfo", {
                        cpiInfo
                    });
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                });
                if (r > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "payment info sync: ",
                        " operations not supported"
                    ])), r);
                }
                if (a > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "cpi payment info sync: ",
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
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const m = new d;
    l.default = m;
}, 98);