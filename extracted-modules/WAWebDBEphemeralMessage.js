__d("WAWebDBEphemeralMessage", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAfterReadUtils",
    "WAWebAppTracker",
    "WAWebChatThreadLogging",
    "WAWebDBMessageDelete",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebEphemeralityUtils",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebSchemaMessage",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "pruneExpiredMessages started"
            ]))).tags("ephemeral-messages");
            const t = yield o("WAWebSchemaMessage").getMessageTable().lessThan([
                "expiredTimestamp"
            ], o("WATimeUtils").unixTime(), {
                shouldDecrypt: false
            });
            const n = t.filter((e)=>!o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState));
            if (n.length === 0) {
                return [];
            }
            f(n.map((e)=>({
                    ack: e.ack,
                    afterReadDuration: e.afterReadDuration,
                    chatId: r("WAWebMsgKey").fromString(e.id.toString()).remote
                })));
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.PurgeEphemeral);
            yield o("WAWebDBMessageDelete").removeMessagesFromHistory(n.map((e)=>e.id.toString())).finally(()=>o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PurgeEphemeral));
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "pruneExpiredMessages completed"
            ]))).tags("ephemeral-messages");
            return n;
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                f(e.map((e)=>({
                        ack: e.ack,
                        afterReadDuration: e.afterReadDuration,
                        chatId: e.id.remote
                    })));
                o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.PurgeEphemeral);
                return o("WAWebDBMessageDelete").removeMessagesFromHistory(e.map((e)=>e.id.toString())).finally(()=>o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PurgeEphemeral));
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        if (o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            const ts = o("WATimeUtils").unixTime();
            const n = [];
            for (const r of e){
                const a = r.afterReadDuration;
                if (!(a == null || a <= 0)) {
                    n.push({
                        activityType: "afterReadMsgExpired",
                        ts,
                        chatId: r.chatId,
                        wasUnread: r.ack == null || r.ack < o("WAWebAck").ACK.READ
                    });
                }
            }
            if (n.length > 0) {
                o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging(n);
            }
        }
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ contactId, messageId }) {
            const i = yield (c || (c = n("Promise"))).all([
                o("WAWebSchemaMessage").getMessageTable().get(messageId),
                r("WAWebLidAwareContactsDB").get(contactId)
            ]);
            const l = i[0];
            const s = i[1];
            if (!(l == null || s == null)) {
                const d = r("WAWebMsgKey").fromString(messageId);
                if (!d.fromMe && !(!d.remote.isRegularUser() || d.participant != null)) {
                    const m = o("WAWebWidFactory").createWid(contactId);
                    const p = o("WAWebLidMigrationUtils").toCommonAddressingMode(d.remote, m);
                    const _ = p[0];
                    const f = p[1];
                    if (r("WAWebWid").equals(_, f) && o("WAWebEphemeralityUtils").isEphemeralityDisabledForMessagingWithContact(s)) {
                        const g = l.ephemeralDuration != null && l.ephemeralDuration > 0;
                        const h = l.expiredTimestamp != null;
                        if (!(!g && !h)) {
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "convertMessageNotEphemeralForContactWithEphmeralityDisabled"
                            ])));
                            yield o("WAWebSchemaMessage").getMessageTable().merge(messageId, {
                                ephemeralDuration: 0,
                                ephemeralStartTimestamp: undefined,
                                ephemeralSettingTimestamp: undefined,
                                ephemeralOutOfSync: undefined,
                                expiredTimestamp: undefined,
                                ephemeralSettingUser: undefined
                            });
                        }
                    }
                }
            }
        });
        return h.apply(this, arguments);
    }
    l.pruneExpiredMessages = d;
    l.removeExpiredMessagesFromHistory = p;
    l.convertMessageNotEphemeralForContactWithEphmeralityDisabled = g;
}, 98);