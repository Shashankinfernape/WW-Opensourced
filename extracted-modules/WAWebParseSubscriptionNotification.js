__d("WAWebParseSubscriptionNotification", [
    "WALogger",
    "WAParsableWapNode",
    "WAWebFeatureFlagName",
    "WAWebSubscriptionSource"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        if (e == null) {
            return null;
        }
        if (e === "AURA") {
            return o("WAWebSubscriptionSource").SubscriptionSource.AURA;
        }
        if (e === "META_NOVA") {
            return o("WAWebSubscriptionSource").SubscriptionSource.META_NOVA;
        }
        if (e === "BLUE") {
            return o("WAWebSubscriptionSource").SubscriptionSource.BLUE;
        }
        if (e === "PREMIUM") {
            return o("WAWebSubscriptionSource").SubscriptionSource.PREMIUM;
        }
        if (e === "MP4B") {
            return o("WAWebSubscriptionSource").SubscriptionSource.MP4B;
        }
        return null;
    }
    function c(e) {
        switch(e){
            case "INFO":
                return "INFO";
            case "SUCCESS":
                return "SUCCESS";
            case "WARNING":
                return "WARNING";
            default:
                return "UNKNOWN";
        }
    }
    function d(e, t) {
        const n = e.maybeChild(t);
        if (n == null) {
            return null;
        }
        try {
            return n.contentString().trim() || null;
        } catch (error) {
            if (error instanceof o("WAParsableWapNode").XmppParsingFailure) {
                return null;
            }
            throw error;
        }
    }
    function m(t) {
        try {
            const notificationType = d(t, "type");
            const r = d(t, "text");
            if (notificationType == null && r == null) {
                return null;
            }
            if (notificationType == null || r == null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sub-notif] dropped: no type or text, id=",
                    ", type=",
                    ""
                ])), t.maybeAttrString("id"), notificationType);
                return null;
            }
            return {
                stanzaId: t.attrString("id"),
                timestamp: t.attrInt("t"),
                notificationType,
                title: d(t, "title"),
                text: r,
                link: d(t, "link"),
                linkText: d(t, "link_text"),
                level: c(d(t, "level"))
            };
        } catch (error) {
            if (error instanceof o("WAParsableWapNode").XmppParsingFailure) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[sub-notif] dropped: parse failed, id=",
                    ", error=",
                    ""
                ])), t.maybeAttrString("id"), error.message);
                return null;
            }
            throw error;
        }
    }
    function p(e) {
        const featureFlags = [];
        let newMessageCappingEnabled = null;
        if (e.hasChild("feature_flags")) {
            const r = e.child("feature_flags");
            r.forEachChildWithTag("feature_flag", function(e) {
                const r = e.attrString("name");
                const a = e.attrString("enabled").toLowerCase() === "true";
                const i = e.maybeAttrString("expiration_time");
                const l = e.maybeAttrString("limit");
                const expirationTime = i != null ? parseInt(i, 10) : null;
                const u = l != null ? parseInt(l, 10) : null;
                featureFlags.push({
                    name: r,
                    enabled: a,
                    expirationTime,
                    limit: u
                });
                if (o("WAWebFeatureFlagName").FeatureFlagName.cast(r) === o("WAWebFeatureFlagName").FeatureFlagName.NEW_CHATS_LIMIT) {
                    newMessageCappingEnabled = a;
                }
            });
        }
        const subscriptions = [];
        if (e.hasChild("subscriptions")) {
            const i = e.child("subscriptions");
            i.forEachChildWithTag("subscription", function(e) {
                const t = e.attrString("status");
                const expirationDate = e.maybeAttrInt("subscription_end_time");
                const creationTime = e.maybeAttrInt("subscription_creation_time");
                const i = e.attrString("id");
                const tier = e.maybeAttrInt("subscription_tier");
                const s = e.maybeAttrString("source");
                const c = u(s);
                const startTime = e.maybeAttrInt("subscription_start_time");
                subscriptions.push({
                    id: i,
                    status: t,
                    expirationDate,
                    creationTime,
                    newMessageCappingEnabled,
                    tier,
                    source: c,
                    startTime
                });
            });
        }
        return {
            subscriptions,
            featureFlags
        };
    }
    l.parseSubscriptionNotification = m;
    l.parseSubscriptionsAndFeatureFlags = p;
}, 98);