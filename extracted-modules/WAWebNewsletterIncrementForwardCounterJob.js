__d("WAWebNewsletterIncrementForwardCounterJob", [
    "WAWebDefinePersistedJob",
    "WAWebSendForwardCounterIncrement"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebDefinePersistedJob").defineWebPersistedJob().finalStep("sendIncrementRequest", function({ newsletterId: t, retriesRemaining: n, serverId: r }) {
        o("WAWebSendForwardCounterIncrement").sendForwardCounterIncrement({
            newsletterId: t,
            retriesRemaining: n,
            serverId: r
        });
    }).end();
    l.incrementNewsletterForwardCounterJob = e;
}, 98);