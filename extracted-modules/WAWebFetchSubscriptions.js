__d("WAWebFetchSubscriptions", [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebFeatureFlagName",
    "WAWebFetchAdAccountToken",
    "WAWebFetchSubscriptionsQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebSubscriptionSource",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = {
        type: "error"
    };
    const d = e !== void 0 ? e : e = n("WAWebFetchSubscriptionsQuery.graphql");
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield _();
            if (e.type === "success") {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchSubscriptions: success"
                ])));
                return e;
            }
            e.type;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                'fetchSubscriptions: failed as "',
                '"'
            ])), e.type);
            return e;
        });
        return p.apply(this, arguments);
    }
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield r("WAWebNetworkStatus").waitIfOffline();
                const e = yield o("WAPromiseTimeout").promiseTimeout(o("WAWebFetchAdAccountToken").fetchToken(), o("WAWebFetchAdAccountToken").getMaximumAdAccountFetchTimeoutSeconds() * 1000);
                if (e.type !== "success") {
                    e.type;
                    return e;
                }
                const t = yield g(e.token);
                if (t.type === "success") {
                    t.type;
                } else if (t.type === "auth-failure") {
                    o("WAWebFetchAdAccountToken").markTokenAsInvalid();
                } else {
                    t.type;
                }
                return t;
            } catch (e) {
                if (e instanceof o("WACustomError").TimeoutError) {
                    return {
                        type: "timeout"
                    };
                }
                return {
                    type: "error"
                };
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield r("WAWebNetworkStatus").waitIfOffline();
            const l = yield o("WAWebRelayClient").fetchQuery(d, {
                data: {
                    platform: "UNKNOWN"
                }
            }, {
                environmentType: "facebook",
                accessToken: e
            }).catch((e)=>{
                if (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)) {
                    return {
                        type: "auth-failure"
                    };
                }
                if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    return {
                        type: "graphql-error",
                        error: e
                    };
                }
            });
            const s = l?.xwa_get_subscriptions?.subscriptions;
            const u = l?.xwa_get_subscriptions?.feature_flags;
            if (s == null || u == null) {
                return c;
            }
            const m = u.find((e)=>o("WAWebFeatureFlagName").FeatureFlagName.cast(e.name) === o("WAWebFeatureFlagName").FeatureFlagName.NEW_CHATS_LIMIT)?.enabled ?? false;
            return {
                type: "success",
                subscriptions: s.map((e)=>({
                        expirationDate: e.end_time ?? null,
                        id: e.id ?? "",
                        status: y(e.status),
                        creationTime: e.creation_time ?? null,
                        newMessageCappingEnabled: m,
                        tier: e.tier ?? null,
                        source: C(e.source),
                        isPlatformChanged: e.is_platform_changed ?? null,
                        startTime: e.start_time ?? null
                    })),
                featureFlags: u.map((e)=>({
                        name: e.name ?? "",
                        enabled: e.enabled ?? false,
                        expirationTime: e.expiration_time ?? null,
                        limit: e.limit ?? null
                    }))
            };
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        if (e == null) {
            return null;
        }
        return ((e)=>{
            switch(e){
                case "STATUS_ACTIVE":
                    return "ACTIVE";
                case "STATUS_CANCELED":
                    return "CANCELED";
                case "STATUS_DISCOUNT_TRIAL":
                    return "DISCOUNT_TRIAL";
                case "STATUS_EXPIRED":
                    return "EXPIRED";
                case "STATUS_FREE_TRIAL":
                    return "FREE_TRIAL";
                case "STATUS_IN_GRACE_PERIOD":
                    return "IN_GRACE_PERIOD";
                case "STATUS_ON_HOLD":
                    return "ON_HOLD";
                default:
                    return null;
            }
        })(e);
    }
    function C(e) {
        if (e == null) {
            return null;
        }
        return ((e)=>{
            switch(e){
                case "AURA":
                    return o("WAWebSubscriptionSource").SubscriptionSource.AURA;
                case "META_NOVA":
                    return o("WAWebSubscriptionSource").SubscriptionSource.META_NOVA;
                case "SOURCE_BLUE":
                    return o("WAWebSubscriptionSource").SubscriptionSource.BLUE;
                case "SOURCE_PREMIUM":
                    return o("WAWebSubscriptionSource").SubscriptionSource.PREMIUM;
                case "MP4B":
                    return o("WAWebSubscriptionSource").SubscriptionSource.MP4B;
                default:
                    return null;
            }
        })(e);
    }
    l.fetchSubscriptions = m;
}, 98);