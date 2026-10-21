__d("WAWebBrokerMainConnect", [
    "WAWebBrokerConnectionManager",
    "WAWebBrokerProtocolHandshake",
    "WAWebInvocationDispatcher",
    "WAWebInvocationHandler"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = new MessageChannel;
        const { port1, port2 } = t;
        r("WAWebInvocationHandler").respondTo(port1);
        r("WAWebBrokerConnectionManager").init();
        r("WAWebInvocationDispatcher").setConnectionManager(r("WAWebBrokerConnectionManager"));
        r("WAWebBrokerConnectionManager").connectVia(port1);
        e.postMessage(o("WAWebBrokerProtocolHandshake").buildHandshakePayload(port2), [
            port2
        ]);
    }
    l.default = e;
}, 98);