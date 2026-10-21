__d("WAWebVoipSctpBufferDrain", [
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionState",
    "WAWebVoipSctpDataChannelThreadManager"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
        if (!(t == null || t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Open || t.isWebTransportWarmStandby === true || t.channel == null)) {
            const n = t.channel;
            while(t.packetBuffer.packets.length > 0){
                const r = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
                const a = t.channelTransferred ? r != null && r.isActive() : n.readyState === "open";
                if (!a) {
                    break;
                }
                const i = o("WAWebVoipRelayConnectionUtils").shiftPacket(t.packetBuffer);
                if (i != null) {
                    const l = i.byteLength;
                    try {
                        if (t.channelTransferred && r != null) {
                            const s = r.sendPacket(e, i);
                            if (!s) {
                                t.stats.droppedPackets++;
                                break;
                            }
                        } else {
                            n.send(i);
                            t.stats.sentPackets++;
                            t.stats.sentBytes += l;
                        }
                    } catch (e) {
                        t.stats.droppedPackets++;
                        break;
                    }
                }
            }
            t.packetBuffer.packets.length;
        }
    }
    l.drainBuffer = e;
}, 98);