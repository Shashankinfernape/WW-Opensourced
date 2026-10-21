__d("WAWebVoipSctpConnectionTeardown", [
    "WAWebNoop",
    "WAWebVoipSctpDataChannelThreadManager"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        let t;
        e.onopen = t = r("WAWebNoop");
        e.onclose = t;
        e.onmessage = t;
        e.onerror = t;
    }
    function s(e) {
        e.onicecandidate = r("WAWebNoop");
        e.oniceconnectionstatechange = r("WAWebNoop");
        e.onconnectionstatechange = r("WAWebNoop");
    }
    function u(t) {
        const t_channel = t.channel;
        if (t_channel != null) {
            e(t_channel);
            t_channel.close();
            t.channel = null;
        }
    }
    function c(e) {
        let t;
        if (e.channelTransferred) {
            if ((t = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread()) != null) {
                t.closeChannel(e.id);
            }
            e.channelTransferred = false;
        }
    }
    function d(e) {
        if (e.connectionTimeout != null) {
            window.clearTimeout(e.connectionTimeout);
            e.connectionTimeout = null;
        }
        if (e.dtlsStallTimeout != null) {
            window.clearTimeout(e.dtlsStallTimeout);
            e.dtlsStallTimeout = null;
        }
    }
    l.detachPeerConnectionHandlers = s;
    l.closeConnectionDataChannel = u;
    l.closeWorkerDataChannel = c;
    l.clearConnectionTimers = d;
}, 98);