__d("WAWebVoipSctpConnectionStats", [
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionState"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 8;
    function s(e, t) {
        const n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
        if (n != null) {
            n.stats.sentPackets += t.sentPackets;
            n.stats.sentBytes += t.sentBytes;
            n.stats.receivedPackets += t.receivedPackets;
            n.stats.receivedBytes += t.receivedBytes;
            if (t.firstSendTime > 0 && n.stats.firstSendRequestTime === 0) {
                n.stats.firstSendRequestTime = t.firstSendTime;
            }
            if (t.firstResponseRecvTime > 0 && n.stats.firstResponseRecvTime === 0) {
                n.stats.firstResponseRecvTime = t.firstResponseRecvTime;
            }
        }
    }
    function u() {
        const t = Date.now();
        const n = Array.from(o("WAWebVoipSctpConnectionState").sctpConnections.values());
        const r = [].concat(n.filter((e)=>e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open), n.filter((e)=>e.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Open));
        const a = r.slice(0, e).map((e)=>{
            const a = e.relayConnectionInfo?.name ?? "unknown";
            const i = `${a}@${e.id}(state=${String(e.state)},open=${String(e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)},reconnecting=${String(e.isReconnecting === true)}`;
            if (e.channelTransferred) {
                return `${i},stats=offthread,droppedPackets=${String(e.stats.droppedPackets)})`;
            }
            const l = e.lastRxPacketTime > 0 ? Math.max(0, t - e.lastRxPacketTime) : -1;
            return `${i},stats=mainthread,rxAgeMs=${String(l)},txPackets=${String(e.stats.sentPackets)},rxPackets=${String(e.stats.receivedPackets)},droppedPackets=${String(e.stats.droppedPackets)})`;
        });
        return `total=${String(n.length)};${a.join("|") || "none"}`;
    }
    l.mergeWorkerStats = s;
    l.getSctpRelayDebugSummary = u;
}, 98);