__d("WAWebHandleNewsletterNotification", [
    "$InternalEnum",
    "WADeprecatedWapParser",
    "WALogger",
    "WAParsableWapNode",
    "WAPromiseQueue",
    "WAWebNewsletterHandleLiveUpdatesNotification",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = n("$InternalEnum")({
        LiveUpdates: "live_updates"
    });
    const d = new (o("WAPromiseQueue")).PromiseQueueMap;
    const m = new (r("WADeprecatedWapParser"))("incomingNewsletterNotificationParser", function(t) {
        const n = t.mapFirstChild(function(e) {
            return e.tag();
        });
        const firstChildTag = c.cast(n);
        const i = t.attrFromJid();
        if (firstChildTag == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][notification] Failed to cast ",
                ""
            ])), n).tags("newsletter").sendLogs("newsletter-failed-to-cast-notification");
            throw r("err")(`Failed to cast ${n}`);
        }
        if (i.type !== "newsletter") {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][notification] Unexpected from "
            ]))).tags("newsletter").sendLogs(`newsletter-wrong-notification-sender-type-${i.type}`);
            throw r("err")(`Unexpected from ${i.type}`);
        }
        return {
            firstChildTag,
            from: i.newsletterJid
        };
    });
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = m.parseOrThrow(e);
                const { firstChildTag, from } = t;
                return yield d.enqueue(from, function() {
                    switch(firstChildTag){
                        case c.LiveUpdates:
                            return o("WAWebNewsletterHandleLiveUpdatesNotification").handleNewsletterLiveUpdatesNotification(e);
                    }
                });
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][notification] Failed to parse notification"
                ]))).tags("newsletter").sendLogs("failed-to-parse-newsletter-notification");
                throw new (o("WAParsableWapNode")).XmppParsingFailure("incomingNewsletterNotificationParser", error instanceof Error ? error.name : `${typeof error} was thrown rather than an Error`);
            }
        });
        return _.apply(this, arguments);
    }
    l.default = p;
}, 98);