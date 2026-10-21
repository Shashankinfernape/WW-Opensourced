__d("WAWebDeprecatedSendIqMainThread", [
    "WADeprecatedSendIq",
    "WAWebCommsGating",
    "WAWebDeprecatedSendIqWorkerProxy"
], function(t, n, r, o, a, i, l) {
    const e = {
        deprecatedSendStanzaAndReturnAck: function(t, n) {
            if (o("WAWebCommsGating").isCommsInWorker()) {
                return o("WAWebDeprecatedSendIqWorkerProxy").deprecatedSendStanzaAndReturnAck(t, n);
            }
            return o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(t, n);
        }
    };
    l.deprecatedSendIqMainThread = e;
}, 98);