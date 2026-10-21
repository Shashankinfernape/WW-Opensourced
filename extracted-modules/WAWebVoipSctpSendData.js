__d("WAWebVoipSctpSendData", [
    "WALogger",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpConnectionState",
    "WAWebVoipSctpDataChannelThreadManager",
    "WAWebVoipSctpPacketBuffering"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    function m({ callbacks, data_, ip, port }) {
        const l = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(ip, port);
        let d = o("WAWebVoipSctpConnectionState").sctpConnections.get(l);
        if (d == null) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] conn not found, creating early ",
                ""
            ])), l);
            d = p(l, callbacks);
        }
        if (d.stats.firstSendRequestTime === 0) {
            d.stats.firstSendRequestTime = Date.now();
        }
        const m = data_ instanceof SharedArrayBuffer ? new Uint8Array(data_).slice().buffer : data_;
        const m_byteLength = m.byteLength;
        const f = o("WAWebVoipRelayConnectionUtils").inspectPacketType(m);
        if (d.isWebTransportWarmStandby === true) {
            o("WAWebVoipSctpPacketBuffering").bufferPacketForConnection(d, m);
            return;
        }
        if (f === o("WAWebVoipRelayConnectionUtils").PacketType.STUN_ALLOC && d.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open && d.sentMedia === true && !d.channelTransferred) {
            const g = callbacks.getIceRestartRxInactivityMs();
            const h = Date.now() - d.lastRxPacketTime;
            if (h > g) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] STUN_ALLOC no rx ",
                    "ms>",
                    "ms, ICE restart ",
                    ""
                ])), h, g, l);
                o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(d.packetBuffer);
                o("WAWebVoipRelayConnectionUtils").bufferPacket(d.packetBuffer, m, d.stats, o("WAWebVoipSctpConnectionManagerConstants").MAX_BUFFER_BYTES);
                callbacks.restartIceProcess(d);
                return;
            }
        }
        if (d.channelTransferred) {
            const y = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
            if (y == null || !y.isActive()) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] transferred but inactive ",
                    ", legacy path"
                ])), l);
                d.channelTransferred = false;
            } else if (d.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open) {
                const C = y.sendPacket(l, m);
                if (!C) {
                    d.stats.droppedPackets++;
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] send failed ",
                        ", pthread shutting down"
                    ])), l);
                }
                if (f === o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN) {
                    if (!d.hasNonStunPacketSent) {
                        d.hasNonStunPacketSent = true;
                    }
                    if (d.sentMedia !== true) {
                        d.sentMedia = true;
                    }
                }
                return;
            }
            o("WAWebVoipSctpPacketBuffering").bufferPacketForConnection(d, m);
            return;
        }
        if (d.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open && d.channel != null) {
            try {
                d.channel.send(m);
                d.stats.sentPackets++;
                d.stats.sentBytes += m_byteLength;
                if (f === o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN) {
                    if (!d.hasNonStunPacketSent) {
                        d.hasNonStunPacketSent = true;
                    }
                    if (d.sentMedia !== true) {
                        d.sentMedia = true;
                    }
                }
            } catch (e) {}
            return;
        }
        o("WAWebVoipSctpPacketBuffering").bufferPacketForConnection(d, m);
    }
    function p(e, callbacks) {
        const n = {
            state: o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
            channel: null,
            peerConnection: null,
            packetBuffer: o("WAWebVoipRelayConnectionUtils").createPacketBuffer(),
            id: e,
            connectionTimeout: null,
            hasReceivedFirstPacket: false,
            hasNonStunPacketSent: false,
            lastRxPacketTime: 0,
            stats: o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
            isReconnecting: false,
            sentMedia: false,
            channelTransferred: false,
            connectionStartTime: 0,
            relayId: 0,
            relayIp: "",
            relayPort: 0,
            iceConnectedTime: 0,
            dtlsStallTimeout: null
        };
        n.connectionTimeout = window.setTimeout(function() {
            if (n.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None) {
                const r = callbacks.getSctpConnectionTimeoutMs();
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] early packet timeout (",
                    "ms) ",
                    ""
                ])), r, e);
                callbacks.failConnection(n, "early_packet_timeout");
            }
        }, callbacks.getSctpConnectionTimeoutMs());
        o("WAWebVoipSctpConnectionState").sctpConnections.set(e, n);
        return n;
    }
    l.sendData = m;
}, 98);