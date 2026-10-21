__d("WAWebVoipSctpConnectionManager", [
    "Promise",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebReleaseToEventLoop",
    "WAWebVoipDtlsCertAcquire",
    "WAWebVoipGatingUtils",
    "WAWebVoipRelayConnectQpl",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpBufferDrain",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpConnectionState",
    "WAWebVoipSctpConnectionStats",
    "WAWebVoipSctpConnectionTeardown",
    "WAWebVoipSctpDataChannelThreadManager",
    "WAWebVoipSctpDiagnostics",
    "WAWebVoipSctpFallbackFamilyOutcome",
    "WAWebVoipSctpIceTcpFallback",
    "WAWebVoipSctpInboundMessageHandler",
    "WAWebVoipSctpOdsPortLogging",
    "WAWebVoipSctpSendData",
    "WAWebVoipSctpStatsInstrumentation",
    "WAWebVoipSctpWarmStandby",
    "WAWebVoipTransportFallbackTracker",
    "WAWebVoipTsLogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    let M;
    let w;
    let A;
    let F;
    let O;
    let B;
    let W;
    let q;
    let U;
    let V;
    let H;
    let G;
    let z;
    let j;
    let K;
    let Q;
    let X;
    let Y;
    let J;
    let Z;
    let ee;
    let te;
    let ne;
    let re;
    let oe;
    let ae;
    let ie;
    let le;
    let se;
    let ue;
    let ce = 10000;
    let de = 10000;
    function me() {
        return 2 * ce;
    }
    let pe = false;
    function _e() {
        o("WAWebVoipSctpWarmStandby").cleanupWebTransportSctpWarmStandby(Te);
    }
    function fe() {
        o("WAWebVoipSctpWarmStandby").resetWebTransportSctpWarmStandbyAtCallBoundary(Te);
    }
    function ge(e) {
        return o("WAWebVoipSctpWarmStandby").activateWebTransportSctpWarmStandbyForRelayList(e, Te);
    }
    let he = 0;
    let ye = 0;
    let Ce = false;
    function be() {
        Ce = true;
    }
    const ve = new Set;
    const Se = new Set;
    function Re(e) {
        o("WAWebCoreActionsODS").logCallDataChannelRelayError();
        switch(e){
            case "no_first_response_timeout":
                o("WAWebCoreActionsODS").logCallDataChannelRelayErrorNoFirstResponseTimeout();
                break;
            case "remote_close":
                o("WAWebCoreActionsODS").logCallDataChannelRelayErrorRemoteClose();
                break;
            case "rx_stall_timeout":
                o("WAWebCoreActionsODS").logCallDataChannelRelayErrorRxStallTimeout();
                break;
            default:
                o("WAWebCoreActionsODS").logCallDataChannelRelayErrorOnError();
        }
    }
    function Le(e) {
        if (ve.delete(e)) {
            o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent("reconnect_succeeded");
        }
    }
    function Ee(e) {
        if (ve.delete(e)) {
            o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent("reconnect_exhausted");
        }
    }
    function ke() {
        const e = [];
        for (const [n, r] of o("WAWebVoipSctpConnectionState").sctpConnections){
            if (r.peerConnection != null && r.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open) {
                e.push({
                    connectionId: n,
                    peerConnection: r.peerConnection
                });
            }
        }
        return e;
    }
    function Ie(channel, connection, r, context) {
        const d = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
        if (d == null || !d.isActive()) {
            return false;
        }
        const m = o("WAWebVoipSctpConnectionState").currentRelayState.get(r) ?? connection.relayConnectionInfo;
        const p = m?.ip ?? "0.0.0.0";
        const _ = m?.originalPort ?? 0;
        const f = context != null ? ` (${context})` : "";
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [DCThread] Transferring channel for ",
            "",
            ""
        ])), r, f);
        const g = d.transferChannel({
            channel,
            connectionId: r,
            ip: p,
            port: _
        });
        if (g) {
            connection.channelTransferred = true;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Channel ",
                " transferred to pthread",
                ""
            ])), r, f);
        } else {
            connection.channelTransferred = false;
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Transfer failed for ",
                "",
                ", using main-thread handlers"
            ])), r, f);
        }
        return g;
    }
    function Te(e) {
        const t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
        if (t) {
            try {
                ut(e);
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Error cleaning up relay connection ",
                    ": ",
                    ""
                ])), e, error);
            }
        }
    }
    function De(e, t, n, r) {
        return xe.apply(this, arguments);
    }
    function xe() {
        xe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = false, r = false) {
            const a = "wa-web-call";
            const i = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
            if (i && (i.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open || i.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)) {
                Be(e.id);
                return;
            }
            if (i && i.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None) {
                lt(e.id);
            }
            yield rt(e, a, t, n, r);
        });
        return xe.apply(this, arguments);
    }
    function $e(data_, t, n) {
        const a = r("justknobx")._("1929");
        o("WAWebVoipSctpSendData").sendData({
            callbacks: {
                failConnection,
                getIceRestartRxInactivityMs: function() {
                    return de;
                },
                getSctpConnectionTimeoutMs: function() {
                    return me();
                },
                restartIceProcess
            },
            data_,
            ip: t,
            port: a ? n : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig.TRUE_WEB_CLIENT_RELAY_PORT
        });
    }
    function Pe(e) {
        const t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
        if (t == null) {
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] handleDataChannelOpened: connection not found for ",
                ""
            ])), e);
            return;
        }
        if (t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting) {
            t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open;
            t.stats.connectionReadyTime = Date.now();
            t.isReconnecting = false;
            Le(e);
            if (t.isWebTransportWarmStandby !== true) {
                o("WAWebVoipSctpFallbackFamilyOutcome").recordSctpFallbackFamilyOpened(t.relayIp);
                o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened();
            }
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Connection ",
                " state updated to Open (notified from pthread)"
            ])), e);
            o("WAWebVoipSctpStatsInstrumentation").addConnectionSource("relay", ke, o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread);
            if (t.connectionTimeout != null && t.connectionTimeout !== 0) {
                window.clearTimeout(t.connectionTimeout);
                t.connectionTimeout = null;
            }
            o("WAWebVoipTsLogger").logIceConnectionComplete({
                relayId: t.relayId,
                ip: t.relayIp,
                port: t.relayPort
            });
            if (t.isWebTransportWarmStandby !== true) {
                o("WAWebVoipSctpBufferDrain").drainBuffer(e);
            }
            Be(e);
        }
    }
    function Ne(e, t, n, r) {
        const i = e.id;
        if (!(e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed || e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed)) {
            if (e.isWebTransportWarmStandby === true) {
                failConnection(e, t);
                return;
            }
            const l = o("WAWebVoipSctpConnectionState").currentRelayState.get(i);
            const s = e.relayConnectionInfo;
            const u = l == null && s != null;
            const c = l ?? s;
            const d = o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.get(i) ?? 0;
            if (!pe && c != null && d < o("WAWebVoipSctpConnectionManagerConstants").MAX_SAME_PATH_RECONNECT_ATTEMPTS) {
                if (u && !ve.has(i)) {
                    ve.add(i);
                    o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent("transport_failed");
                }
                o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.set(i, d + 1);
                const h = o("WAWebVoipSctpConnectionManagerConstants").SAME_PATH_RECONNECT_BACKOFF_MS[d] ?? 0;
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ",
                    " Same-path reconnecting ",
                    ", reason=",
                    " (attempt ",
                    "/",
                    ", backoff=",
                    "ms)"
                ])), r, i, t, d + 1, o("WAWebVoipSctpConnectionManagerConstants").MAX_SAME_PATH_RECONNECT_ATTEMPTS, h);
                failConnection(e, n, true);
                const y = (n)=>{
                    if (n != null) {
                        o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.delete(n);
                    }
                    if (!pe) {
                        const e = o("WAWebVoipSctpConnectionState").currentRelayState.get(i);
                        const a = e == null;
                        if (a) {
                            if (!ve.has(i)) {
                                ve.add(i);
                                o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent("transport_failed");
                            }
                            o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent("reconnect_attempted");
                        } else {
                            ve.delete(i);
                        }
                        De(e ?? c, "same_path_reconnect").catch((e)=>{
                            if (a) {
                                Ee(i);
                            }
                            o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: ",
                                " Reconnect failed for ",
                                ", reason=",
                                ": ",
                                ""
                            ])), r, i, t, e);
                        });
                    }
                };
                if (h > 0) {
                    var C = window.setTimeout(function() {
                        return y(C);
                    }, h);
                    o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.add(C);
                } else {
                    y(null);
                }
            } else {
                if (!pe) {
                    if (c == null) {
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: ",
                            " No relay info for ",
                            ", cannot same-path reconnect (attempts=",
                            ")"
                        ])), r, i, d);
                    } else {
                        if (u) {
                            Ee(i);
                        }
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: ",
                            " Max same-path reconnect attempts reached for ",
                            " (attempts=",
                            "/",
                            ")"
                        ])), r, i, d, o("WAWebVoipSctpConnectionManagerConstants").MAX_SAME_PATH_RECONNECT_ATTEMPTS);
                    }
                }
                failConnection(e, t);
            }
        }
    }
    function Me(e) {
        const t = e.id;
        if (o("WAWebVoipSctpConnectionState").sctpConnections.get(t) === e) {
            Ne(e, "data_channel_error", "data_channel_error_reconnecting", "[DCThread]");
        }
    }
    function we(e) {
        Ne(e, "ice_connection_failed", "ice_connection_failed_reconnecting", "[SCTP]");
    }
    function Ae(e) {
        const t = (t)=>{
            const e = o("WAWebVoipSctpConnectionState").currentRelayState.get(t);
            if (pe || e == null) {
                return 1;
            }
            ut(t);
            o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.delete(t);
            De(e, "same_path_reconnect").catch((e)=>{
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] reopen failed for ",
                    ": ",
                    ""
                ])), t, e);
            });
        };
        for (const n of e){
            t(n);
        }
    }
    function Fe(e, errorReason) {
        const n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
        if (n == null) {
            o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] handleDataChannelErrored: connection not found for ",
                ""
            ])), e);
            return;
        }
        o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [DCThread] Connection ",
            " errored (notified from pthread)"
        ])), e);
        Re(errorReason);
        if ((errorReason === "no_first_response_timeout" || errorReason === "rx_stall_timeout") && n.peerConnection != null) {
            o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] Collecting getStats snapshot for ",
                ", reason=",
                ""
            ])), e, errorReason);
            o("WAWebVoipSctpDiagnostics").logPeerConnectionStatsForError({
                connectionId: e,
                errorReason,
                peerConnection: n.peerConnection,
                workerStats: n.stats
            }).catch((t)=>{
                o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] Failed to collect getStats for ",
                    ""
                ])), e).catching(r("getErrorSafe")(t));
            }).finally(()=>{
                Me(n);
            });
            return;
        }
        Me(n);
    }
    function Oe(e) {
        return new (ue || (ue = n("Promise")))(function(t) {
            o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.set(e, t);
        });
    }
    function Be(e) {
        const t = o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.get(e);
        if (t != null) {
            t();
            o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.delete(e);
        }
    }
    function We() {
        return qe.apply(this, arguments);
    }
    function qe() {
        qe = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            pe = true;
            he++;
            ye++;
            try {
                o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("relay");
                const e = Array.from(o("WAWebVoipSctpConnectionState").sctpConnections.keys());
                o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Cleaning up ",
                    " connections"
                ])), e.length);
                yield o("WAWebVoipSctpDataChannelThreadManager").stopDataChannelWorker();
                for (const t of e){
                    Te(t);
                }
                o("WAWebVoipSctpConnectionState").currentRelayState.clear();
                o("WAWebVoipTsLogger").cleanup();
                o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] All connections and relay state cleared"
                ])));
            } finally{
                Ve();
                o("WAWebVoipRelayConnectQpl").resetVoipRelayConnectQpl();
                o("WAWebVoipSctpWarmStandby").resetWebTransportSctpWarmStandbyAtCallBoundary(Te);
                o("WAWebVoipSctpIceTcpFallback").resetIceTcpFallback();
                Ce = false;
                pe = false;
            }
        });
        return qe.apply(this, arguments);
    }
    function Ue() {
        he++;
        ye++;
        const e = Array.from(o("WAWebVoipSctpConnectionState").sctpConnections.values());
        o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SctpConnectionManager] Closing ",
            " connections, call continues"
        ])), e.length);
        for (const t of e){
            t.isReconnecting = false;
            Te(t.id);
        }
        o("WAWebVoipSctpConnectionState").currentRelayState.clear();
        Ve();
        o("WAWebVoipSctpWarmStandby").resetWebTransportSctpWarmStandbyAtCallBoundary(Te);
        o("WAWebVoipSctpIceTcpFallback").resetIceTcpFallbackRelayState();
    }
    function Ve() {
        for (const e of o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts){
            window.clearTimeout(e);
        }
        o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.clear();
        for (const t of o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.values()){
            t();
        }
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.clear();
        o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.clear();
        ve.clear();
        Se.clear();
    }
    function He(e, t) {
        return Ge.apply(this, arguments);
    }
    function Ge() {
        Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = he;
            o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Staggered creation: ",
                " connections"
            ])), e.length);
            yield ze(e, 0, n, t);
        });
        return Ge.apply(this, arguments);
    }
    function ze(e, t, n, r) {
        return je.apply(this, arguments);
    }
    function je() {
        je = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a) {
            if (!(t >= e.length) && !(pe || he !== r)) {
                const i = e[t];
                if (i != null) {
                    const { isEarlyPacketRelayReconnect, isWebTransportWarmStandby, relayConnectionInfo } = i;
                    o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] Starting staggered connection ",
                        "/",
                        ": ",
                        ""
                    ])), t + 1, e.length, relayConnectionInfo.id);
                    const c = Oe(relayConnectionInfo.id);
                    De(relayConnectionInfo, a, isEarlyPacketRelayReconnect, isWebTransportWarmStandby);
                    if (t < e.length - 1) {
                        const d = new (ue || (ue = n("Promise")))(function(e) {
                            window.setTimeout(e, o("WAWebVoipSctpConnectionManagerConstants").PER_CONNECTION_STAGGER_DELAY_MS);
                        });
                        yield ue.race([
                            c,
                            d
                        ]);
                    }
                    yield ze(e, t + 1, r, a);
                }
            }
        });
        return je.apply(this, arguments);
    }
    function Ke(e, t, n) {
        if (!(!o("WAWebVoipSctpConnectionState").currentRelayState.has(e) || t == null || t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None || t.hasLoggedEarlyPacketRelayEligible === true)) {
            t.hasLoggedEarlyPacketRelayEligible = true;
            o("WAWebCoreActionsODS").logCallSctpEarlyPacketRelayEligible(n);
        }
    }
    function Qe(e, t, n) {
        return !o("WAWebVoipSctpConnectionState").currentRelayState.has(e) || t == null || n && t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None;
    }
    function Xe(e, t) {
        return Ye.apply(this, arguments);
    }
    function Ye() {
        Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = t?.webTransportWarmStandby === true;
            if (!(r && !(yield o("WAWebVoipSctpWarmStandby").prepareWebTransportSctpWarmStandby()))) {
                ce = Je();
                de = Ze(ce);
                const a = o("WAWebVoipSctpConnectionState").currentRelayState.size === 0 || Ce ? "initial" : "mid_call_relay_update";
                Ce = false;
                he++;
                const i = o("WAWebVoipSctpWarmStandby").getWebTransportSctpWarmStandbyRelayState(e);
                const l = o("WAWebVoipGatingUtils").isCurrentCallGroup();
                const s = e.enable_web_group_early_packet_relay_reconnect === true;
                for (const [c, d] of o("WAWebVoipSctpConnectionState").currentRelayState){
                    if (!i.has(c)) {
                        const m = o("WAWebVoipSctpConnectionState").sctpConnections.get(c);
                        if (o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig.CLOSE_OLD_CONNECTION_BEFORE_CALL_END || r && m?.isWebTransportWarmStandby === true) {
                            Te(c);
                        } else if (m != null && m.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed && m.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed) {
                            m.relayConnectionInfo = d;
                            o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent("retained");
                        }
                    }
                }
                const p = [];
                for (const [f, relayConnectionInfo] of i){
                    const h = o("WAWebVoipSctpConnectionState").sctpConnections.get(f);
                    Ke(f, h, l);
                    const isEarlyPacketRelayReconnect = s && o("WAWebVoipSctpConnectionState").currentRelayState.has(f) && h?.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None;
                    if (Qe(f, h, s)) {
                        p.push({
                            relayConnectionInfo,
                            isEarlyPacketRelayReconnect,
                            isWebTransportWarmStandby: r
                        });
                    }
                }
                o("WAWebVoipSctpConnectionState").currentRelayState.clear();
                for (const [b, v] of i){
                    o("WAWebVoipSctpConnectionState").currentRelayState.set(b, v);
                }
                o("WAWebVoipSctpIceTcpFallback").armIceTcpFallback({
                    getRelays: function() {
                        return o("WAWebVoipSctpConnectionState").currentRelayState.values();
                    },
                    moveToIceTcp: Ae,
                    moveBackToUdp: Ae
                }, r);
                const S = t?.connectionLimit;
                const R = S != null && r ? o("WAWebVoipSctpWarmStandby").getWebTransportSctpWarmStandbyConnectionSlots(S) : S;
                const L = R == null ? p : p.slice(0, R);
                if (L.length > 0) {
                    o("WAWebVoipRelayConnectQpl").maybeStartVoipRelayConnectQpl(!r);
                    const E = e.enable_web_relay_connection_stagger === true && t?.bypassConnectionStagger !== true;
                    if (E) {
                        yield He(L, a);
                    } else {
                        yield (ue || (ue = n("Promise"))).all(L.map((e)=>De(e.relayConnectionInfo, a, e.isEarlyPacketRelayReconnect, e.isWebTransportWarmStandby)));
                    }
                }
            }
        });
        return Ye.apply(this, arguments);
    }
    function Je() {
        try {
            return r("justknobx")._("5402") || 10000;
        } catch (error) {
            o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] timeout JK unavailable, using fallback=10000: ",
                ""
            ])), String(error));
            return 10000;
        }
    }
    function Ze(e) {
        try {
            return r("justknobx")._("5558") || e;
        } catch (error) {
            o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE restart RX inactivity JK unavailable, using fallback=",
                ": ",
                ""
            ])), e, String(error));
            return e;
        }
    }
    function et(e, relayConnectionInfo, n = false) {
        if (!n) {
            e.onopen = function(n) {
                gt(n, relayConnectionInfo.id, e);
            };
            e.onclose = function(e) {
                ht(e, relayConnectionInfo.id);
            };
            e.onmessage = function(e) {
                o("WAWebVoipSctpInboundMessageHandler").handleSctpChannelMessage(e, relayConnectionInfo);
            };
            e.onerror = function(n) {
                o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Data channel error for ",
                    ":"
                ])), relayConnectionInfo.id);
                const r = o("WAWebVoipSctpConnectionState").sctpConnections.get(relayConnectionInfo.id);
                if (r != null && r.channel === e) {
                    const a = r;
                    Re();
                    Ne(a, "data_channel_error", "data_channel_error_reconnecting", "[SCTP]");
                }
            };
        }
    }
    function tt({ connection, context, peerConnection, relayConnectionInfo }) {
        const i = "pre-negotiated";
        const l = babelHelpers.extends({}, o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS, {
            priority: "high"
        });
        const s = peerConnection.createDataChannel(i, l);
        s.binaryType = "arraybuffer";
        let u = false;
        if (o("WAWebVoipSctpWarmStandby").shouldUseMainThreadForWebTransportSctp() || o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled()) {
            o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] DC transfer disabled for ",
                ""
            ])), relayConnectionInfo.id);
        } else {
            u = Ie(s, connection, relayConnectionInfo.id, context);
        }
        connection.channel = s;
        et(s, relayConnectionInfo, u);
        return s;
    }
    function nt(e, t, n) {
        const r = n != null ? ` ${n}` : "";
        e.oniceconnectionstatechange = function() {
            const e_iceConnectionState = e.iceConnectionState;
            o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE state->",
                " ",
                "",
                ""
            ])), e_iceConnectionState, t, r);
            const a = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
            if (a) {
                if (e_iceConnectionState === "connected") {
                    a.iceConnectedTime = Date.now();
                    o("WAWebVoipSctpOdsPortLogging").logCallIceConnectedForPort(a.relayPort);
                    o("WAWebVoipSctpOdsPortLogging").logCallDtlsStartedForPort(a.relayPort);
                    if (a.dtlsStallTimeout != null) {
                        window.clearTimeout(a.dtlsStallTimeout);
                    }
                    a.dtlsStallTimeout = window.setTimeout(function() {
                        a.dtlsStallTimeout = null;
                        const e_connectionState = e.connectionState;
                        if (e_connectionState !== "connected") {
                            const i = Date.now() - a.iceConnectedTime;
                            o("WALogger").WARN(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [SCTP] DTLS stall: ICE connected ",
                                "ms ago (threshold=",
                                "ms) but PC state is '",
                                "' for ",
                                "",
                                ""
                            ])), i, ce, e_connectionState, t, r);
                            o("WAWebVoipSctpOdsPortLogging").logCallDtlsFailedStallForPort(a.relayPort);
                            Ne(a, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]");
                        }
                    }, ce);
                }
                if (e_iceConnectionState === "failed") {
                    o("WAWebVoipSctpOdsPortLogging").logCallIceFailedForPort(a.relayPort);
                    we(a);
                }
            }
            o("WAWebVoipSctpIceTcpFallback").noteRelayIceState(t, e_iceConnectionState);
        };
        e.onconnectionstatechange = function() {
            const e_connectionState = e.connectionState;
            o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] PC state->",
                " ",
                "",
                ""
            ])), e_connectionState, t, r);
            const a = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
            if (a) {
                if (e_connectionState === "connected" && a.dtlsStallTimeout != null && (window.clearTimeout(a.dtlsStallTimeout), a.dtlsStallTimeout = null, o("WAWebVoipSctpOdsPortLogging").logCallDtlsConnectedForPort(a.relayPort), a.iceConnectedTime > 0)) {
                    const i = Date.now() - a.iceConnectedTime;
                    o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SCTP] DTLS handshake completed in ",
                        "ms for ",
                        "",
                        ""
                    ])), i, t, r);
                }
                if (e_connectionState === "connected") {
                    o("WAWebVoipSctpDiagnostics").logSelectedCandidatePair({
                        connectionId: t,
                        peerConnection: e
                    });
                    o("WAWebVoipRelayConnectQpl").endVoipRelayConnectQplSuccess(a.isWebTransportWarmStandby !== true);
                    if (a.isEarlyPacketRelayReconnect === true && a.hasLoggedEarlyPacketRelayReconnectConnected !== true) {
                        a.hasLoggedEarlyPacketRelayReconnectConnected = true;
                        o("WAWebCoreActionsODS").logCallSctpEarlyPacketRelayReconnectEvent("pc_connected");
                    }
                    o("WAWebVoipSctpWarmStandby").notifyNativeRelayConnected(a);
                }
                if (e_connectionState === "failed") {
                    o("WAWebVoipSctpOdsPortLogging").logCallDtlsFailedPcFailedForPort(a.relayPort);
                }
            }
            o("WAWebVoipSctpIceTcpFallback").noteRelayConnectionState(e_connectionState);
        };
    }
    function rt(e, t, n, r, o) {
        return ot.apply(this, arguments);
    }
    function ot() {
        ot = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, isEarlyPacketRelayReconnect, a) {
            let i = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
            if (i && i.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None) {
                i.isEarlyPacketRelayReconnect = isEarlyPacketRelayReconnect;
                i.isWebTransportWarmStandby = a;
                i.hasLoggedEarlyPacketRelayReconnectConnected = false;
                i.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting;
                i.connectionStartTime = Date.now();
                i.relayConnectionInfo = e;
                i.relayId = e.relayId;
                i.relayIp = e.ip;
                i.relayPort = e.port;
                if (i.connectionTimeout != null && i.connectionTimeout !== 0) {
                    window.clearTimeout(i.connectionTimeout);
                    i.connectionTimeout = null;
                }
                o("WALogger").LOG(j || (j = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] early conn->connecting ",
                    " buf=",
                    ""
                ])), e.id, i.packetBuffer.bufferedBytes);
            } else {
                i = {
                    state: o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting,
                    channel: null,
                    peerConnection: null,
                    packetBuffer: o("WAWebVoipRelayConnectionUtils").createPacketBuffer(),
                    id: e.id,
                    relayConnectionInfo: e,
                    connectionTimeout: null,
                    hasReceivedFirstPacket: false,
                    hasNonStunPacketSent: false,
                    lastRxPacketTime: 0,
                    stats: o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
                    isReconnecting: false,
                    sentMedia: false,
                    connectionStartTime: Date.now(),
                    channelTransferred: false,
                    relayId: e.relayId,
                    relayIp: e.ip,
                    relayPort: e.port,
                    iceConnectedTime: 0,
                    dtlsStallTimeout: null,
                    isEarlyPacketRelayReconnect,
                    hasLoggedEarlyPacketRelayReconnectConnected: false,
                    isWebTransportWarmStandby: a
                };
                if (!a) {
                    o("WAWebVoipSctpFallbackFamilyOutcome").recordSctpFallbackFamilyAttempt(i.relayIp);
                }
                o("WAWebVoipSctpConnectionState").sctpConnections.set(i.id, i);
            }
            if (isEarlyPacketRelayReconnect) {
                o("WAWebCoreActionsODS").logCallSctpEarlyPacketRelayReconnectEvent("attempted");
            }
            const l = i;
            i.connectionTimeout = window.setTimeout(function() {
                if (l.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting) {
                    o("WALogger").WARN(K || (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SCTP] Connection timeout (",
                        "ms) in Connecting state for ",
                        ""
                    ])), me(), e.id);
                    failConnection(l, "connection_timeout");
                }
            }, me());
            let s = false;
            if (!o("WAWebVoipSctpWarmStandby").shouldUseMainThreadForWebTransportSctp() && !o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled()) {
                s = yield yt();
            }
            if (pe) {
                lt(e.id);
                Be(e.id);
                return false;
            }
            o("WAWebVoipTsLogger").logIceConnectionStart({
                relayId: e.relayId,
                ip: e.ip,
                port: e.port
            });
            o("WAWebVoipSctpOdsPortLogging").logCallIceStartedForPort(e.port);
            try {
                const d = {};
                d.certificates = [
                    (yield o("WAWebVoipDtlsCertAcquire").acquireDtlsCert(n))
                ];
                yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
                if (pe) {
                    lt(e.id);
                    Be(e.id);
                    return false;
                }
                if (it(i)) {
                    o("WALogger").WARN(Q || (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] Aborting stale connect for ",
                        " after certificate acquisition"
                    ])), e.id);
                    o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(i);
                    return false;
                }
                const m = Date.now();
                const p = new RTCPeerConnection(d);
                const _ = Date.now() - m;
                if (_ > o("WAWebVoipSctpConnectionManagerConstants").SLOW_WEBRTC_SETUP_THRESHOLD_MS) {
                    o("WALogger").WARN(X || (X = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SCTP] slow RTCPeerConnection ctor ",
                        ": ",
                        "ms"
                    ])), e.id, _);
                }
                i.peerConnection = p;
                p.onicecandidate = function(t) {
                    if (!t.candidate) {
                        o("WALogger").LOG(Y || (Y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [SctpConnectionManager] ICE gathering complete for ",
                            ""
                        ])), e.id);
                    }
                };
                nt(p, e.id);
                tt({
                    connection: i,
                    peerConnection: p,
                    relayConnectionInfo: e
                });
                const f = Date.now();
                const g = yield p.createOffer();
                yield p.setLocalDescription(g);
                const h = g.sdp || "";
                const y = o("WAWebVoipSctpIceTcpFallback").createRelayAnswerSdp(h, e);
                yield p.setRemoteDescription({
                    sdp: y,
                    type: "answer"
                });
                if (it(i)) {
                    o("WALogger").WARN(J || (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] Aborting stale connect for ",
                        " after setRemoteDescription"
                    ])), e.id);
                    o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(i);
                    o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(i);
                    o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(p);
                    p.close();
                    i.peerConnection = null;
                    return false;
                }
                o("WAWebVoipSctpIceTcpFallback").noteRelayIceStarted(me());
                const C = Date.now() - f;
                if (C > o("WAWebVoipSctpConnectionManagerConstants").SLOW_WEBRTC_SETUP_THRESHOLD_MS) {
                    o("WALogger").WARN(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] Slow SDP negotiation for ",
                        ": ",
                        "ms"
                    ])), e.id, C);
                }
                const b = p.iceConnectionState;
                const v = i.channel?.readyState ?? "unknown";
                o("WALogger").LOG(ee || (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] SDP done ",
                    " DC=",
                    " ICE=",
                    ""
                ])), e.id, v, b);
                return true;
            } catch (error) {
                o("WALogger").ERROR(te || (te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] createDataChannel failed: ",
                    ""
                ])), error);
                failConnection(i, "channel_creation_failed");
                return false;
            }
        });
        return ot.apply(this, arguments);
    }
    function at(e) {
        const e_stats = e.stats;
        let a = "N/A";
        if (e_stats.connectionReadyTime !== 0 && e.connectionStartTime > 0) {
            a = (e_stats.connectionReadyTime - e.connectionStartTime).toString();
        }
        const i = o("WAWebVoipSctpConnectionState").currentRelayState.get(e.id)?.name ?? "N/A";
        o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SCTP] stats relay=",
            " id=",
            " txPkt=",
            " rxPkt=",
            " txB=",
            " rxB=",
            ""
        ])), i, e.id, e_stats.sentPackets, e_stats.receivedPackets, e_stats.sentBytes, e_stats.receivedBytes);
        o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SCTP] stats bufB=",
            " bindT=",
            "ms"
        ])), e.packetBuffer.bufferedBytes, a);
    }
    function it(e) {
        return pe || o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) !== e;
    }
    function lt(e) {
        const t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
        if (t) {
            o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(t);
            o("WAWebVoipSctpConnectionTeardown").closeWorkerDataChannel(t);
            o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t);
            const n = t.peerConnection;
            if (n) {
                o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n);
                n.close();
                t.peerConnection = null;
            }
            at(t);
            o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer);
            if (t.isReconnecting == null || !t.isReconnecting) {
                o("WAWebVoipSctpOdsPortLogging").logCallSctpConnectionCleanedUpForPort(t.relayPort);
                o("WAWebVoipSctpConnectionState").sctpConnections.delete(e);
                o("WAWebVoipSctpStatsInstrumentation").removeConnectionFromRttStats(e);
                if (o("WAWebVoipSctpConnectionState").sctpConnections.size === 0) {
                    o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("relay");
                }
            }
        }
    }
    function failConnection(e, t, n = false) {
        if (e && e.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed && e.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed) {
            if (!n) {
                Ee(e.id);
            }
            o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Failing (closing) connection for ",
                ", reason: ",
                ""
            ])), e.id, t);
            o("WAWebVoipSctpOdsPortLogging").logCallSctpConnectionFailedForPort(e.relayPort);
            if (e.relayIp !== "") {
                o("WAWebVoipTsLogger").logIceConnectionFailed({
                    relayId: e.relayId,
                    ip: e.relayIp,
                    port: e.relayPort
                }, 1);
            }
            e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed;
            lt(e.id);
            Be(e.id);
        }
    }
    function ut(e) {
        const t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
        if (t && (t.isReconnecting == null || !t.isReconnecting)) {
            t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed;
            lt(e);
            Be(e);
        }
    }
    function ct(e, t) {
        return it(e) || ye !== t;
    }
    function dt({ connection, replacementPeerConnection, stage }) {
        o("WALogger").WARN(M || (M = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SctpConnectionManager] Aborting stale ICE restart for ",
            " at ",
            ""
        ])), connection.id, stage);
        o("WAWebCoreActionsODS").logCallSctpIceRestartAbortedStale(stage);
        connection.isReconnecting = false;
        o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(connection);
        if (o("WAWebVoipSctpConnectionState").sctpConnections.get(connection.id) === connection) {
            lt(connection.id);
            mt(connection.id);
            return;
        }
        o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(connection);
        if (replacementPeerConnection != null) {
            o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(replacementPeerConnection);
            replacementPeerConnection.close();
        }
        connection.peerConnection = null;
    }
    function mt(e) {
        const t = o("WAWebVoipSctpConnectionState").currentRelayState.get(e);
        if (!(pe || t == null)) {
            o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Reconnecting ",
                " after aborted ICE restart"
            ])), e);
            De(t, "same_path_reconnect").catch((t)=>{
                o("WALogger").ERROR(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Reconnect after aborted ICE restart failed for ",
                    ": ",
                    ""
                ])), e, t);
            });
        }
    }
    function pt(e) {
        if (!Se.has(e)) {
            Se.add(e);
            o("WALogger").WARN(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE restart skip: cleanup in progress ",
                ""
            ])), e);
            o("WAWebCoreActionsODS").logCallSctpIceRestartSkippedCleanupInProgress();
        }
    }
    function restartIceProcess(e) {
        return ft.apply(this, arguments);
    }
    function ft() {
        ft = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.isReconnecting !== true) {
                if (pe) {
                    pt(e.id);
                    return;
                }
                const t = ye;
                o("WALogger").LOG(ne || (ne = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Restarting ICE process for connection ",
                    ""
                ])), e.id);
                if (!e.hasNonStunPacketSent) {
                    o("WALogger").WARN(re || (re = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SCTP] ICE restart skip: no non-STUN sent ",
                        ""
                    ])), e.id);
                    return;
                }
                const n = o("WAWebVoipSctpConnectionState").currentRelayState.get(e.id);
                if (!n) {
                    o("WALogger").WARN(oe || (oe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SCTP] ICE restart skip: no relay info ",
                        ""
                    ])), e.id);
                    return;
                }
                const r = e.peerConnection;
                if (!r) {
                    o("WALogger").WARN(ae || (ae = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SCTP] ICE restart skip: no PC ",
                        ""
                    ])), e.id);
                    return;
                }
                const a = e.packetBuffer;
                e.isReconnecting = true;
                e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting;
                if (e.peerConnection) {
                    o("WALogger").LOG(ie || (ie = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] Closing previous connection for ",
                        ""
                    ])), e.id);
                    window.clearTimeout(e.connectionTimeout ?? undefined);
                    e.connectionTimeout = null;
                    o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(e);
                    const l = e.peerConnection;
                    if (l) {
                        o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(l);
                        l.close();
                    }
                }
                try {
                    e.hasReceivedFirstPacket = false;
                    e.sentMedia = false;
                    const s = {};
                    s.certificates = [
                        (yield o("WAWebVoipDtlsCertAcquire").acquireDtlsCert("ice_restart"))
                    ];
                    if (ct(e, t)) {
                        dt({
                            connection: e,
                            replacementPeerConnection: null,
                            stage: "cert_acquire"
                        });
                        return;
                    }
                    const u = new RTCPeerConnection(s);
                    e.peerConnection = u;
                    e.iceConnectedTime = 0;
                    if (e.dtlsStallTimeout != null) {
                        window.clearTimeout(e.dtlsStallTimeout);
                        e.dtlsStallTimeout = null;
                    }
                    nt(u, e.id, "(ICE restart)");
                    tt({
                        connection: e,
                        context: "ICE restart",
                        peerConnection: u,
                        relayConnectionInfo: n
                    });
                    e.packetBuffer = a;
                    if (e.isWebTransportWarmStandby !== true) {
                        o("WAWebVoipSctpFallbackFamilyOutcome").recordSctpFallbackFamilyAttempt(e.relayIp);
                    }
                    o("WAWebVoipSctpConnectionState").sctpConnections.set(e.id, e);
                    const c = yield u.createOffer({
                        iceRestart: false
                    });
                    yield u.setLocalDescription(c);
                    const d = c.sdp || "";
                    const m = o("WAWebVoipSctpIceTcpFallback").createRelayAnswerSdp(d, n);
                    yield u.setRemoteDescription({
                        sdp: m,
                        type: "answer"
                    });
                    if (ct(e, t)) {
                        dt({
                            connection: e,
                            replacementPeerConnection: u,
                            stage: "negotiation"
                        });
                        return;
                    }
                    o("WALogger").LOG(le || (le = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] ICE restart completed for connection ",
                        ""
                    ])), e.id);
                } catch (error) {
                    o("WALogger").ERROR(se || (se = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] ICE restart failed for connection ",
                        ": ",
                        ""
                    ])), e.id, error);
                    failConnection(e, "ice_restart_failed");
                }
            }
        });
        return ft.apply(this, arguments);
    }
    function gt(e, t, n) {
        const r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
        if (r) {
            if (r.channel == null || r.channel !== n) {
                o("WALogger").WARN(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Ignoring stale DataChannel open for ",
                    ""
                ])), t);
                try {
                    n.close();
                } catch (error) {
                    o("WALogger").WARN(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] Error closing stale DataChannel for ",
                        ": ",
                        ""
                    ])), t, error);
                }
                return;
            }
            if (r.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting) {
                return;
            }
            r.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open;
            r.stats.connectionReadyTime = Date.now();
            r.isReconnecting = false;
            Le(t);
            if (r.isWebTransportWarmStandby !== true) {
                o("WAWebVoipSctpFallbackFamilyOutcome").recordSctpFallbackFamilyOpened(r.relayIp);
                o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened();
            }
            if (r.connectionTimeout != null && r.connectionTimeout !== 0) {
                window.clearTimeout(r.connectionTimeout);
                r.connectionTimeout = null;
            }
            o("WAWebVoipSctpStatsInstrumentation").addConnectionSource("relay", ke, o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread);
            const l = r.connectionStartTime > 0 ? Date.now() - r.connectionStartTime : 0;
            const s = o("WAWebVoipSctpConnectionState").currentRelayState.get(t)?.name ?? "N/A";
            o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] DC opened ",
                " relay=",
                " ",
                "ms"
            ])), t, s, l);
            o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE done id=",
                " ip=",
                " port=",
                ""
            ])), r.relayId, r.relayIp, r.relayPort);
            o("WAWebVoipTsLogger").logIceConnectionComplete({
                relayId: r.relayId,
                ip: r.relayIp,
                port: r.relayPort
            });
            if (r.isWebTransportWarmStandby !== true) {
                o("WAWebVoipSctpBufferDrain").drainBuffer(t);
            }
            Be(t);
        }
    }
    function ht(e, t) {
        const n = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
        if (n) {
            o("WALogger").LOG(U || (U = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] DataChannel closed by relay for ",
                ", reconnecting"
            ])), t);
            Re("remote_close");
            Ne(n, "remote_close", "remote_close_reconnecting", "[SCTP]");
        }
    }
    function yt() {
        return o("WAWebVoipSctpDataChannelThreadManager").initDataChannelWorker(function() {
            return ce;
        });
    }
    l.markSctpEnteredViaWebTransportFallback = o("WAWebVoipSctpFallbackFamilyOutcome").markSctpEnteredViaWebTransportFallback;
    l.reportSctpFallbackFamilyOutcome = o("WAWebVoipSctpFallbackFamilyOutcome").reportSctpFallbackFamilyOutcome;
    l.resetSctpFallbackFamilyOutcome = o("WAWebVoipSctpFallbackFamilyOutcome").resetSctpFallbackFamilyOutcome;
    l.getSctpRelayDebugSummary = o("WAWebVoipSctpConnectionStats").getSctpRelayDebugSummary;
    l.mergeWorkerStats = o("WAWebVoipSctpConnectionStats").mergeWorkerStats;
    l.cleanupWebTransportSctpWarmStandby = _e;
    l.resetWebTransportSctpWarmStandbyAtCallBoundary = fe;
    l.activateWebTransportSctpWarmStandbyForRelayList = ge;
    l.markSctpCallIdentityChanged = be;
    l.sendWAWebVoipDataToRelay = $e;
    l.handleDataChannelOpened = Pe;
    l.handleDataChannelErrored = Fe;
    l.cleanupAllConnections = We;
    l.closeAllRelayConnections = Ue;
    l.handleRelayListUpdate = Xe;
}, 98);