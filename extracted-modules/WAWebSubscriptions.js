__d("WAWebSubscriptions", [
    "WAExponentialBackoff",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebFetchSubscriptions",
    "WAWebSchemaFeatureFlag",
    "WAWebSchemaSubscription",
    "WAWebSubscriptionsGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsSubscription",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = {
        minTimeout: 5000,
        maxTimeout: 30000,
        retries: 10
    };
    const m = 86400 * 1000;
    const p = [
        "ACTIVE",
        "FREE_TRIAL",
        "IN_GRACE_PERIOD"
    ];
    function _(e) {
        return e instanceof o("WAWebBackendErrors").ServerStatusCodeError && e.statusCode === 500;
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebSubscriptionsGatingUtils").subscriptionFetchEnabled()) {
                const t = o("WAWebUserPrefsSubscription").getNextSubscriptionQuery() - Date.now();
                if (t > 0) {
                    yield o("WAPromiseDelays").delayMs(t);
                }
                try {
                    yield o("WAExponentialBackoff").exponentialBackoff(d, function(t, n) {
                        return E().catch((r)=>{
                            if (_(r)) {
                                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "[sub-mgr] query failed, retriable: ",
                                    " fail=",
                                    ""
                                ])), r.message, n);
                                return t(r);
                            }
                            throw r;
                        });
                    });
                } catch (e) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Subscriptions manager pull failed, error: ",
                        ""
                    ])), e).verbose().sendLogs("Subscriptions manager run failed");
                    if (!_(e)) {
                        return;
                    }
                }
                o("WAWebUserPrefsSubscription").setNextSubscriptionQuery(Date.now() + m);
                yield o("WAPromiseDelays").delayMs(m);
                if (o("WAWebUserPrefsMeUser").getMaybeMePnUser()) {
                    f();
                }
            }
        });
        return g.apply(this, arguments);
    }
    function h(e, t, n) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = "update") {
            yield v(e, n);
            yield R(t, n);
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return e.map((e)=>{
            const a = {
                id: e.id,
                isAutoRenewing: e.status === "ACTIVE",
                isDeactivated: !p.includes(e.status),
                expirationDate: e.expirationDate !== void 0 ? parseInt(e.expirationDate, 10) : void 0,
                creationTime: e.creationTime !== void 0 ? parseInt(e.creationTime, 10) : void 0,
                newMessageCappingEnabled: e.newMessageCappingEnabled,
                tier: e.tier ?? null,
                status: e.status ?? null,
                source: e.source ?? null,
                isPlatformChanged: e.isPlatformChanged ?? null,
                startTime: e.startTime != null ? parseInt(e.startTime, 10) : null
            };
            if (e.status === "CANCELED" && (a.expirationDate || 0) > Date.now() / 1000) {
                a.isDeactivated = false;
            }
            return a;
        });
    }
    function b(e) {
        return e.map((e)=>({
                id: e.name,
                enabled: e.enabled,
                expirationTime: e.expirationTime ?? null,
                limit: e.limit ?? null
            }));
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = C(e);
            e: {
                if (t === "update") {
                    yield o("WAWebSchemaSubscription").getSubscriptionTable().bulkCreateOrMerge(n);
                    o("WAWebBackendApi").frontendFireAndForget("updateSubscriptions", {
                        command: "update",
                        subscriptions: n
                    });
                    break e;
                }
                if (t === "rewrite") {
                    yield o("WAWebSchemaSubscription").getSubscriptionTable().clear();
                    if (n.length) {
                        yield o("WAWebSchemaSubscription").getSubscriptionTable().bulkCreate(n);
                    }
                    o("WAWebBackendApi").frontendFireAndForget("updateSubscriptions", {
                        command: "rewrite",
                        subscriptions: n
                    });
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            }
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!o("WAWebSchemaFeatureFlag").isFeatureFlagTableAvailable()) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "subscription sync, feature flags table not available"
                ])));
                return;
            }
            const n = b(e);
            e: {
                if (t === "update") {
                    yield o("WAWebSchemaFeatureFlag").getFeatureFlagTable().bulkCreateOrMerge(n);
                    o("WAWebBackendApi").frontendFireAndForget("updateFeatureFlags", {
                        command: "update",
                        featureFlags: n
                    });
                    break e;
                }
                if (t === "rewrite") {
                    yield o("WAWebSchemaFeatureFlag").getFeatureFlagTable().clear();
                    if (n.length) {
                        yield o("WAWebSchemaFeatureFlag").getFeatureFlagTable().bulkCreate(n);
                    }
                    o("WAWebBackendApi").frontendFireAndForget("updateFeatureFlags", {
                        command: "rewrite",
                        featureFlags: n
                    });
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            }
        });
        return L.apply(this, arguments);
    }
    function E() {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebUserPrefsMeUser").getMaybeMePnUser()) {
                const e = yield o("WAWebFetchSubscriptions").fetchSubscriptions();
                if (e.type === "success" && e.subscriptions != null) {
                    h(e.subscriptions, e.featureFlags ?? [], "rewrite");
                    return;
                }
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "subscription sync: GraphQL fetch failed with type: ",
                    ""
                ])), e.type).verbose().sendLogs("premium-subscriptions-fetch-error", {
                    sampling: 0.01
                });
                throw e.type === "error" || e.type === "graphql-error" ? new (o("WAWebBackendErrors")).ServerStatusCodeError(500) : r("err")(`Failed to fetch subscriptions via GraphQL: ${e.type}`);
            }
        });
        return k.apply(this, arguments);
    }
    l.runSubscriptionsManager = f;
    l.applySubscriptionsAndFeatureFlags = h;
    l.query = E;
}, 98);