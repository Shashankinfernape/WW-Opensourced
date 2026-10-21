__d("WAWebHandleDigitalCommerceSubscriptionNotification", [
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebBackendJobsCommon",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebParseSubscriptionNotification",
    "WAWebSubscriptionNotificationDelivery",
    "WAWebSubscriptions",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new (r("WADeprecatedWapParser"))("digitalCommerceSubscriptionNotificationParser", function(e) {
        e.assertTag("notification");
        const t = e.attrString("id");
        const n = e.attrWapJid("from");
        const r = o("WAWebParseSubscriptionNotification").parseSubscriptionsAndFeatureFlags(e);
        const { featureFlags, subscriptions } = r;
        return {
            stanzaId: t,
            from: n,
            subscriptions,
            featureFlags,
            uiNotification: o("WAWebParseSubscriptionNotification").parseSubscriptionNotification(e)
        };
    });
    function u(stanzaId, from) {
        return o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(stanzaId),
            to: from,
            class: "notification",
            type: "digital_commerce_subscription"
        });
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = s.parse(t);
            if (n.error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), n.error.toString());
                throw n.error;
            }
            const n_success = n.success;
            yield o("WAWebSubscriptions").applySubscriptionsAndFeatureFlags(n_success.subscriptions, n_success.featureFlags, "update");
            const r_uiNotification = n_success.uiNotification;
            if (r_uiNotification != null) {
                o("WAWebSubscriptionNotificationDelivery").deliverSubscriptionNotification(r_uiNotification);
            }
            return u(n_success.stanzaId, n_success.from);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        const t = o("WAWebBackendJobsCommon").getNonCriticalNotificationPriority(!!e.attrs.offline);
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("handleDigitalCommerceSubscriptionNotification", function(e) {
            return c(e.node);
        }, {
            priority: t
        }).waitUntilCompleted({
            node: e
        });
    }
    l.handleDigitalCommerceSubscriptionNotification = c;
    l.handleDigitalCommerceSubscriptionNotificationJob = m;
}, 98);