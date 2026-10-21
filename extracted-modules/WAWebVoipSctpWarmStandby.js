__d("WAWebVoipSctpWarmStandby", [
    "WALogger",
    "WAWebVoipGatingUtils",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpBufferDrain",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpConnectionState",
    "WAWebVoipSctpDataChannelThreadManager",
    "WAWebVoipSctpFallbackFamilyOutcome",
    "WAWebVoipStackInterface",
    "WAWebVoipTransportFallbackTracker",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = /^edgeray-[a-z0-9]+-\d+\.wt\.whatsapp\.com$/i;
    let d = "idle";
    let m = null;
    let p = 0;
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (d === "promoted" || d === "closed") {
                return false;
            }
            let e = p;
            if (d === "idle") {
                d = "preconnecting";
                e = ++p;
                m = o("WAWebVoipSctpDataChannelThreadManager").stopDataChannelWorker();
            }
            const t = m;
            if (t != null) {
                try {
                    yield t;
                } catch (error) {
                    if (m === t && e === p) {
                        y();
                    }
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SCTP] Warm standby preparation failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip_sctp_warm_standby_preparation_failed");
                    return false;
                }
                if (m === t) {
                    m = null;
                }
            }
            return d === "preconnecting" && e === p;
        });
        return f.apply(this, arguments);
    }
    function g() {
        return d === "preconnecting" || d === "promoted";
    }
    function h() {
        d = "closed";
        m = null;
    }
    function y() {
        d = "idle";
        m = null;
    }
    function C(e) {
        h();
        for (const [n, r] of o("WAWebVoipSctpConnectionState").sctpConnections){
            if (r.isWebTransportWarmStandby === true) {
                e(n);
            }
        }
    }
    function b(e) {
        C(e);
        y();
    }
    function v(e) {
        const t = o("WAWebVoipGatingUtils").shouldUseOriginalRelayPort();
        const n = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e, {
            portOverride: function(n) {
                if (t) {
                    return n;
                }
                return o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig.TRUE_WEB_CLIENT_RELAY_PORT;
            }
        });
        if (!t) {
            return n;
        }
        for (const r of n.values()){
            if (S(r)) {
                r.iceTcpPort = o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig.WEB_PLATFORM_TCP_VIP_PORT;
            }
        }
        return n;
    }
    function S({ clusterDomain, originalPort }) {
        return originalPort === o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig.FAUX_WEB_CLIENT_RELAY_PORT && clusterDomain != null && c.test(clusterDomain);
    }
    function R(e, t) {
        const n = v(e);
        for (const [a, i] of o("WAWebVoipSctpConnectionState").sctpConnections){
            if (i.isWebTransportWarmStandby === true && !n.has(a)) {
                t(a);
            }
        }
        return E();
    }
    function L(e) {
        let t = 0;
        for (const n of o("WAWebVoipSctpConnectionState").sctpConnections.values()){
            if (n.isWebTransportWarmStandby === true && n.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed && n.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed) {
                t++;
            }
        }
        return Math.max(0, e - t);
    }
    function E() {
        let e = false;
        for (const t of o("WAWebVoipSctpConnectionState").sctpConnections.values()){
            if (t.isWebTransportWarmStandby === true) {
                e = true;
                break;
            }
        }
        if (!e) {
            if (d !== "promoted") {
                y();
            }
            return false;
        }
        d = "promoted";
        m = null;
        let n = false;
        let r = false;
        for (const [l, s] of o("WAWebVoipSctpConnectionState").sctpConnections){
            if (s.isWebTransportWarmStandby === true) {
                o("WAWebVoipSctpFallbackFamilyOutcome").recordSctpFallbackFamilyAttempt(s.relayIp);
                s.isWebTransportWarmStandby = false;
                if (s.peerConnection?.connectionState === "connected") {
                    r = true;
                    k(s);
                }
                if (s.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open) {
                    r = true;
                    o("WAWebVoipSctpFallbackFamilyOutcome").recordSctpFallbackFamilyOpened(s.relayIp);
                    n = true;
                    o("WAWebVoipSctpBufferDrain").drainBuffer(l);
                }
            }
        }
        if (n) {
            o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened();
        }
        return r;
    }
    function k(t) {
        const { id, relayIp, relayPort } = t;
        if (!(relayIp === "" || t.isEarlyPacketRelayReconnect === true || t.isWebTransportWarmStandby === true || !I())) {
            o("WAWebVoipStackInterface").getVoipStackInterface().then((e)=>{
                if (e != null && e.type === "web") {
                    return e.markRelayConnected(relayIp, relayPort);
                }
            }).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] markRelayConnected failed for ",
                    ""
                ])), id).catching(r("getErrorSafe")(t)).sendLogs("voip_sctp_mark_relay_connected_failed");
            });
        }
    }
    function I() {
        try {
            return r("justknobx")._("3110");
        } catch (error) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] elect relay JK unavailable, using fallback=true: ",
                ""
            ])), String(error));
            return true;
        }
    }
    l.prepareWebTransportSctpWarmStandby = _;
    l.shouldUseMainThreadForWebTransportSctp = g;
    l.closeWebTransportSctpWarmStandby = h;
    l.resetWebTransportSctpWarmStandby = y;
    l.cleanupWebTransportSctpWarmStandby = C;
    l.resetWebTransportSctpWarmStandbyAtCallBoundary = b;
    l.getWebTransportSctpWarmStandbyRelayState = v;
    l.activateWebTransportSctpWarmStandbyForRelayList = R;
    l.getWebTransportSctpWarmStandbyConnectionSlots = L;
    l.activateWebTransportSctpWarmStandby = E;
    l.notifyNativeRelayConnected = k;
}, 98);