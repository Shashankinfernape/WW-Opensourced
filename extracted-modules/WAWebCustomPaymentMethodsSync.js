__d("WAWebCustomPaymentMethodsSync", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCustomPaymentMethodsSyncLogger",
    "WAWebMobilePlatforms",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUprPaymentKeySyncGating",
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
            return o("WAWebSyncdConst").Actions.CustomPaymentMethods;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                if (o("WAWebMobilePlatforms").isSMB()) {
                    const r = o("WAWebABProps").getABPropConfigValue("payments_br_pix_phase_1_seller_sync_enabled") === true;
                    if (!r && !o("WAWebUprPaymentKeySyncGating").isCustomPaymentMethodsSyncEnabled()) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[CustomPaymentMethodsSync] op not supported, ABProp fail"
                        ])));
                        return t.map(()=>({
                                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                            }));
                    }
                } else if (o("WAWebABProps").getABPropConfigValue("br_consumer_pix_sync_receive_web_enabled") !== true) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[CustomPaymentMethodsSync] consumer sync not enabled, ABProp fail"
                    ])));
                    return t.map(()=>({
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        }));
                }
                let a = 0;
                let i = 0;
                const l = t.map((e)=>{
                    const customPaymentMethods = e.operation === "set" ? e.value.customPaymentMethodsAction?.customPaymentMethods : undefined;
                    const actionTarget = e.operation !== "set" || customPaymentMethods?.length === 0 ? o("WAWebCustomPaymentMethodsSyncLogger").SYNC_ACTION_TARGETS.APPLY_REMOVE : o("WAWebCustomPaymentMethodsSyncLogger").SYNC_ACTION_TARGETS.APPLY_STORE;
                    o("WAWebCustomPaymentMethodsSyncLogger").logCustomPaymentMethodsSyncEvent({
                        actionTarget,
                        status: o("WAWebCustomPaymentMethodsSyncLogger").SYNC_STATUS.ATTEMPT
                    });
                    if (e.operation !== "set") {
                        a++;
                        o("WAWebCustomPaymentMethodsSyncLogger").logCustomPaymentMethodsSyncEvent({
                            actionTarget,
                            errorCode: o("WAWebCustomPaymentMethodsSyncLogger").SyncErrorCode.UNSUPPORTED_OPERATION,
                            status: o("WAWebCustomPaymentMethodsSyncLogger").SYNC_STATUS.FAILURE
                        });
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    }
                    if (customPaymentMethods == null) {
                        i++;
                        o("WAWebCustomPaymentMethodsSyncLogger").logCustomPaymentMethodsSyncEvent({
                            actionTarget,
                            errorCode: o("WAWebCustomPaymentMethodsSyncLogger").SyncErrorCode.MALFORMED_MUTATION,
                            status: o("WAWebCustomPaymentMethodsSyncLogger").SYNC_STATUS.FAILURE
                        });
                        return o("WAWebSyncdIndexUtils").malformedActionValue(n.collectionName);
                    }
                    try {
                        o("WAWebBackendApi").frontendFireAndForget("setCustomPaymentMethods", {
                            customPaymentMethods
                        });
                    } catch (error) {
                        o("WAWebCustomPaymentMethodsSyncLogger").logCustomPaymentMethodsSyncEvent({
                            actionTarget,
                            errorCode: o("WAWebCustomPaymentMethodsSyncLogger").SyncErrorCode.FRONTEND_DISPATCH_FAILED,
                            status: o("WAWebCustomPaymentMethodsSyncLogger").SYNC_STATUS.FAILURE
                        });
                        throw error;
                    }
                    o("WAWebCustomPaymentMethodsSyncLogger").logCustomPaymentMethodsSyncEvent({
                        actionTarget,
                        status: o("WAWebCustomPaymentMethodsSyncLogger").SYNC_STATUS.SUCCESS
                    });
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                });
                if (a > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Custom Payment Methods sync: ",
                        " operations not supported"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Custom Payment Methods sync: ",
                        " malformed mutations"
                    ])), i);
                }
                return l;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.getCustomPaymentMethodSetMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(customPaymentMethodsAction) {
                const t = o("WATimeUtils").unixTimeMs();
                const n = {
                    customPaymentMethodsAction
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