__d("WAWebSubscriptionsSyncV2Sync", [
    "Promise",
    "WALogger",
    "WAWebODS",
    "WAWebSubscriptionSource",
    "WAWebSubscriptions",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 1;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.SubscriptionsSyncV2;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                let i = 0;
                const l = yield (s || (s = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            e: {
                                const t = e;
                                if ((typeof t === "object" && t !== null || typeof t === "function") && t.operation === "set" && "value" in t) {
                                    const n = t.value;
                                    const l = n.subscriptionsSyncV2Action;
                                    if (!l) {
                                        r("WAWebODS").incr("web.app.subscription_sync.syncd.malformed");
                                        return o("WAWebSyncdIndexUtils").malformedActionValue(a.collectionName);
                                    }
                                    const { paidFeature, subscriptions } = l;
                                    const c = (subscriptions ?? []).map((e)=>({
                                            id: e.id ?? "",
                                            tier: e.tier,
                                            status: e.status,
                                            expirationDate: e.endTime != null ? Number(e.endTime) : null,
                                            startTime: e.startTime != null ? Number(e.startTime) : null,
                                            isPlatformChanged: e.isPlatformChanged,
                                            source: e.source != null ? o("WAWebSubscriptionSource").SubscriptionSource.cast(e.source) : null,
                                            creationTime: e.creationTime != null ? Number(e.creationTime) : null
                                        }));
                                    const d = (paidFeature ?? []).map((e)=>({
                                            name: e.name ?? "",
                                            enabled: e.enabled ?? false,
                                            expirationTime: e.expirationTime != null ? Number(e.expirationTime) : null,
                                            limit: e.limit ?? null
                                        }));
                                    yield o("WAWebSubscriptions").applySubscriptionsAndFeatureFlags(c, d, "rewrite");
                                    r("WAWebODS").incr("web.app.subscription_sync.syncd.success");
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                    break e;
                                }
                                if ((typeof t === "object" && t !== null || typeof t === "function") && t.operation === "remove") {
                                    i++;
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                    break e;
                                }
                                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
                            }
                        } catch (e) {
                            r("WAWebODS").incr("web.app.subscription_sync.syncd.error");
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                if (i > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[SubscriptionsSyncV2Sync] ",
                        " REMOVE ops (singleton)"
                    ])), i);
                }
                return l;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        return a;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const c = new u;
    l.default = c;
}, 98);