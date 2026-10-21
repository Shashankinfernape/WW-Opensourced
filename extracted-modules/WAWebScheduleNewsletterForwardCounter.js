__d("WAWebScheduleNewsletterForwardCounter", [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebRestOperations",
    "WAWebScheduledOperations",
    "WAWebSendForwardCounterIncrement",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    const e = [
        "delaySeconds"
    ];
    let s;
    let u;
    const c = 1000;
    function d(e) {
        if (!o("WAWebRestOperations").isRestOperationGateEnabled()) {
            o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().fireAndForget(o("WAWebPersistedJobDefinitions").jobSerializers.incrementNewsletterForwardCounter({
                delayedTime: o("WATimeUtils").futureUnixTime(e.delaySeconds),
                newsletterId: e.newsletterId,
                retriesRemaining: e.retriesRemaining,
                serverId: e.serverId
            }));
            return;
        }
        m(e).catch((e)=>{
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[ForwardCounter][Increment] Failed to schedule the increment"
            ]))).catching(r("getErrorSafe")(e)).tags("newsletter-forward-counter").sendLogs("forward-counter-schedule-error");
        });
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = t.delaySeconds;
            const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            yield o("WAPromiseDelays").delayMs(r * c);
            yield o("WAWebScheduledOperations").scheduleOperation(o("WAWebScheduledOperations").ScheduledOperation.INCREMENT_NEWSLETTER_FORWARD_COUNTER, function() {
                o("WAWebSendForwardCounterIncrement").sendForwardCounterIncrement(a);
                return (u || (u = n("Promise"))).resolve();
            });
        });
        return p.apply(this, arguments);
    }
    l.scheduleForwardCounterIncrement = d;
}, 98);