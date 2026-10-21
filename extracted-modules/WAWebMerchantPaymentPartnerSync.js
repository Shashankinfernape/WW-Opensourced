__d("WAWebMerchantPaymentPartnerSync", [
    "WALogger",
    "WAWebMobilePlatforms",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
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
            return o("WAWebSyncdConst").Actions.MerchantPaymentPartner;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                if (o("WAWebMobilePlatforms").isSMB() !== true) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[MerchantPaymentPartner] unsupported: not SMB"
                    ])));
                    return t.map(()=>({
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        }));
                }
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MerchantPaymentPartner] unsupported: ABProp failed"
                ])));
                return t.map(()=>({
                        actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                    }));
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const c = new u;
    Object.freeze(c);
    l.default = c;
}, 98);