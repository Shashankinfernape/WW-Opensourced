__d("WAWebVoipSctpConnectionState", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Map;
    const l = new Set;
    const s = new Map;
    const u = new Map;
    const c = new Map;
    i.samePathReconnectAttempts = e;
    i.pendingReconnectTimeouts = l;
    i.connectionOpenedResolvers = s;
    i.sctpConnections = u;
    i.currentRelayState = c;
}, 66);