__d("WAWebSubscriptionsBridgeApi", [
    "Promise",
    "WAWebAuraBenefitProviderInit",
    "WAWebAuraRingtoneSubscriptionCheck",
    "WAWebFeatureFlagCollection",
    "WAWebSchemaFeatureFlag",
    "WAWebSchemaSubscription",
    "WAWebSubscriptionCollection",
    "WAWebSubscriptionDesktopNotification",
    "WAWebSubscriptionNotificationStore",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaSubscription").getSubscriptionTable().all();
            o("WAWebSubscriptionCollection").SubscriptionCollection.initializeFromCache(e);
        });
        return u.apply(this, arguments);
    }
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebSchemaFeatureFlag").isFeatureFlagTableAvailable()) {
                const e = yield o("WAWebSchemaFeatureFlag").getFeatureFlagTable().all();
                o("WAWebFeatureFlagCollection").FeatureFlagCollection.initializeFromCache(e);
            }
        });
        return d.apply(this, arguments);
    }
    const m = {
        initializePME: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield (e || (e = n("Promise"))).all([
                    s(),
                    c()
                ]);
                o("WAWebAuraBenefitProviderInit").initAuraBenefitFeatureFlagProvider();
                o("WAWebAuraRingtoneSubscriptionCheck").initSubscriptionCheck();
            });
            function r() {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        updateFeatureFlags: function(t) {
            e: {
                const e = t;
                if ((typeof e === "object" && e !== null || typeof e === "function") && e.command === "update" && "featureFlags" in e) {
                    const n = e.featureFlags;
                    o("WAWebFeatureFlagCollection").FeatureFlagCollection.initializeFromCache(n);
                    break e;
                }
                if ((typeof e === "object" && e !== null || typeof e === "function") && e.command === "rewrite" && "featureFlags" in e) {
                    const r = e.featureFlags;
                    o("WAWebFeatureFlagCollection").FeatureFlagCollection.replaceWith(r);
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            }
            o("WAWebAuraRingtoneSubscriptionCheck").initSubscriptionCheck();
        },
        updateSubscriptions: function(t) {
            e: {
                const e = t;
                if ((typeof e === "object" && e !== null || typeof e === "function") && e.command === "reset") {
                    o("WAWebSubscriptionCollection").SubscriptionCollection.reset();
                    break e;
                }
                if ((typeof e === "object" && e !== null || typeof e === "function") && e.command === "update" && "subscriptions" in e) {
                    const n = e.subscriptions;
                    o("WAWebSubscriptionCollection").SubscriptionCollection.initializeFromCache(n);
                    break e;
                }
                if ((typeof e === "object" && e !== null || typeof e === "function") && e.command === "rewrite" && "subscriptions" in e) {
                    const r = e.subscriptions;
                    o("WAWebSubscriptionCollection").SubscriptionCollection.replaceWith(r);
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            }
        },
        showSubscriptionNotification: function(t) {
            o("WAWebSubscriptionNotificationStore").updateSubscriptionNotification(t);
            const e = o("WAWebSubscriptionNotificationStore").getSubscriptionNotification() === t;
            if (e) {
                o("WAWebSubscriptionDesktopNotification").showSubscriptionDesktopNotification(t);
            }
        }
    };
    l.SubscriptionsBridgeApi = m;
}, 98);