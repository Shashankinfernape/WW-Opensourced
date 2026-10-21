__d("WAWebVoipSctpInboundMessageHandler", [
    "WALogger",
    "WAWebVoipGatingUtils",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpConnectionState",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e) {
        if (o("WAWebVoipGatingUtils").shouldUseOriginalRelayPort()) {
            return e.originalPort ?? e.port;
        }
        if ((e.originalPort ?? e.port) === o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig.TRUE_WEB_CLIENT_RELAY_PORT) {
            return o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig.TRUE_WEB_CLIENT_RELAY_PORT;
        }
        return o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig.FAUX_WEB_CLIENT_RELAY_PORT;
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = o("WAWebVoipSctpConnectionState").sctpConnections.get(n.id);
            if (a?.isWebTransportWarmStandby !== true) {
                const i = r("nullthrows")((yield o("WAWebVoipStackInterface").getVoipStackInterface()));
                if (i.type === "web" && a) {
                    const l = yield o("WAWebVoipRelayConnectionUtils").dataToArrayBuffer(t.data);
                    if (l == null) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [SctpConnectionManager] Unexpected data type: ",
                            ""
                        ])), typeof t.data);
                        return;
                    }
                    a.stats.receivedPackets++;
                    a.stats.receivedBytes += l.byteLength;
                    if (a.stats.firstResponseRecvTime === 0) {
                        a.stats.firstResponseRecvTime = Date.now();
                    }
                    a.lastRxPacketTime = Date.now();
                    if (!a.hasReceivedFirstPacket) {
                        a.hasReceivedFirstPacket = true;
                    }
                    yield i.handleOnTransportMessage(l, n.ip, u(n));
                } else {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] conn not found for ",
                        ""
                    ])), n.id);
                }
            }
        });
        return d.apply(this, arguments);
    }
    l.handleSctpChannelMessage = c;
}, 98);