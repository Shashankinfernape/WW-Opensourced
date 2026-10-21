__d("WAWebVoipRelayConnectionUtils", [
    "$InternalEnum",
    "WALogger",
    "WAWebUA",
    "WAWebVoipSctpConnectionManagerConstants",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = 0;
    const c = 20000;
    const d = 10 * 1024;
    const m = n("$InternalEnum").Mirrored([
        "None",
        "Connecting",
        "Open",
        "Closed",
        "Failed"
    ]);
    function p(e, t) {
        if (e.includes(":")) {
            return `[${e}]:${t}`;
        }
        return `${e}:${t}`;
    }
    function _() {
        return {
            sentPackets: 0,
            receivedPackets: 0,
            sentBytes: 0,
            receivedBytes: 0,
            firstSendRequestTime: 0,
            firstResponseRecvTime: 0,
            connectionReadyTime: 0,
            droppedPackets: 0
        };
    }
    function f() {
        return {
            packets: [],
            bufferedBytes: 0
        };
    }
    function g(e, t, n, r = d) {
        if (t.byteLength > r) {
            n.droppedPackets++;
            return false;
        }
        while(e.packets.length > 0 && e.bufferedBytes + t.byteLength > r){
            const o = e.packets.shift();
            if (o != null) {
                e.bufferedBytes -= o.byteLength;
                n.droppedPackets++;
            }
        }
        e.packets.push(t);
        e.bufferedBytes += t.byteLength;
        return true;
    }
    function h(e) {
        const t = e.packets.shift();
        if (t != null) {
            e.bufferedBytes -= t.byteLength;
            return t;
        }
        return null;
    }
    function y(e) {
        e.packets = [];
        e.bufferedBytes = 0;
    }
    function C(e) {
        const t = new ArrayBuffer(e.byteLength);
        new Uint8Array(t).set(new Uint8Array(e));
        return t;
    }
    function b(t, n) {
        const a = new Map;
        const { relay_key, relay_tokens, auth_tokens } = t;
        const d = n?.useAuthToken ?? true;
        if (!relay_tokens || relay_tokens.length === 0) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [RelayConnectionUtils] relayTokens empty"
            ])));
            return a;
        }
        for (const m of t.relays){
            if (m.token_id == null || m.token_id >= relay_tokens.length || m.token_id < 0) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [RelayConnectionUtils] invalid token_id ",
                    " relay ",
                    ""
                ])), m.token_id, m.relay_id);
                continue;
            }
            let _ = null;
            if (d && auth_tokens != null && m.auth_token_id != null && m.auth_token_id >= 0 && m.auth_token_id < auth_tokens.length) {
                _ = auth_tokens[m.auth_token_id];
            }
            for (const f of m.addresses){
                if (f.protocol === u) {
                    if (f.ipv4 != null && f.ipv4 !== "" && f.port != null) {
                        const { ipv4, port } = f;
                        const y = n != null && n.portOverride ? n.portOverride(port) : port;
                        const C = p(ipv4, y);
                        const b = {
                            id: C,
                            relayId: m.relay_id,
                            ip: ipv4,
                            port: y,
                            originalPort: port,
                            isIPv6: false,
                            token: relay_tokens[m.token_id],
                            authToken: _ ?? undefined,
                            key: relay_key,
                            name: m.relay_name,
                            enableEdgerayDtlsActiveMode: t.enable_edgeray_dtls_active_mode === true,
                            clusterDomain: m.domain_name
                        };
                        a.set(C, b);
                    }
                    if (f.ipv6 != null && f.ipv6 !== "" && f.port_v6 != null) {
                        const { ipv6, port_v6 } = f;
                        const R = n != null && n.portOverride ? n.portOverride(port_v6) : port_v6;
                        const L = p(ipv6, R);
                        const E = {
                            id: L,
                            relayId: m.relay_id,
                            ip: ipv6,
                            port: R,
                            originalPort: port_v6,
                            isIPv6: true,
                            token: relay_tokens[m.token_id],
                            authToken: _ ?? undefined,
                            key: relay_key,
                            name: m.relay_name,
                            enableEdgerayDtlsActiveMode: t.enable_edgeray_dtls_active_mode === true,
                            clusterDomain: m.domain_name
                        };
                        a.set(L, E);
                    }
                }
            }
        }
        return a;
    }
    function v() {
        if (o("WAWebUA").UA.isSafari) {
            return 1;
        }
        return 0;
    }
    function S() {
        if (o("WAWebUA").UA.isFirefox) {
            return 1;
        }
        return 0;
    }
    function R() {
        return v() === 1 || S() === 1;
    }
    const L = {
        negotiated: true,
        id: 0,
        ordered: false,
        maxRetransmits: 0
    };
    function E(e) {
        const t = e.match(/a=ice-ufrag:([^\r\n]+)/);
        const n = e.match(/a=ice-pwd:([^\r\n]+)/);
        if (t != null && n != null) {
            return {
                ufrag: t[1],
                pwd: n[1]
            };
        }
        return null;
    }
    function k(e) {
        const t = e.match(/a=fingerprint:(\S+)\s+([^\r\n]+)/);
        if (t != null) {
            return {
                algorithm: t[1],
                fingerprint: t[2]
            };
        }
        return null;
    }
    function I(e, t, n) {
        let r = e.replace(/a=ice-ufrag:[^\r\n]+/g, `a=ice-ufrag:${t}`);
        r = r.replace(/a=ice-pwd:[^\r\n]+/g, `a=ice-pwd:${n}`);
        return r;
    }
    function T(e, t, n) {
        return e.replace(/a=fingerprint:[^\r\n]+/g, `a=fingerprint:${t} ${n}`);
    }
    function D(e) {
        let t = e.replace(/a=candidate:[^\r\n]+\r?\n/g, "");
        t = t.replace(/a=end-of-candidates\r?\n?/g, "");
        return t;
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e instanceof ArrayBuffer) {
                return e;
            }
            if (e instanceof Blob) {
                return yield e.arrayBuffer();
            }
            return null;
        });
        return $.apply(this, arguments);
    }
    function P({ customSdp, iceTcpMode, relayConnectionInfo }) {
        const o = [
            N(relayConnectionInfo, iceTcpMode),
            "a=end-of-candidates"
        ].join("\r\n");
        let a = D(customSdp);
        a += `${o}\r\n`;
        return a;
    }
    function N({ iceTcpPort, ip, port }, iceTcpMode) {
        if (iceTcpMode === o("WAWebVoipSctpConnectionManagerConstants").RelayIceTcpMode.TcpOnly && iceTcpPort != null) {
            return `a=candidate:3 1 tcp 1518283007 ${ip} ${iceTcpPort} typ host tcptype passive generation 0 network-cost 5`;
        }
        return `a=candidate:2 1 udp 2122262783 ${ip} ${port} typ host generation 0 network-cost 5`;
    }
    function M(e, t, iceTcpMode) {
        const o = t.enableEdgerayDtlsActiveMode ? "a=setup:active" : "a=setup:passive";
        let customSdp = e.replace(/a=setup:actpass/g, o);
        const i = t.authToken ?? t.token;
        customSdp = I(customSdp, i, t.key);
        customSdp = T(customSdp, "sha-256", "F9:CA:0C:98:A3:CC:71:D6:42:CE:5A:E2:53:D2:15:20:D3:1B:BA:D8:57:A4:F0:AF:BE:0B:FB:F3:6B:0C:A0:68");
        customSdp = customSdp.replace(/a=ice-options:[^\r\n]+\r\n/g, "");
        customSdp = customSdp.replace(/a=max-message-size:[^\r\n]+/g, "a=max-message-size:1500");
        customSdp = P({
            customSdp,
            iceTcpMode,
            relayConnectionInfo: t
        });
        return customSdp;
    }
    const w = n("$InternalEnum").Mirrored([
        "STUN_ALLOC",
        "STUN_BIND",
        "STUN_UNKNOWN",
        "NonSTUN"
    ]);
    function A(e) {
        if (e.byteLength < 2) {
            return w.NonSTUN;
        }
        const t = new Uint8Array(e);
        const n = t[0];
        const r = t[1];
        if ((n & 192) === 0) {
            const o = (n & 63) << 8 | r;
            switch(o){
                case 1:
                    return w.STUN_BIND;
                case 3:
                    return w.STUN_ALLOC;
                default:
                    return w.STUN_UNKNOWN;
            }
        }
        return w.NonSTUN;
    }
    l.CONNECTION_TIMEOUT_MS = c;
    l.ConnectionState = m;
    l.getConnectionIdentifier = p;
    l.createEmptyConnectionStats = _;
    l.createPacketBuffer = f;
    l.bufferPacket = g;
    l.shiftPacket = h;
    l.clearPacketBuffer = y;
    l.copyArrayBuffer = C;
    l.extractRelayConnectionMap = b;
    l.isDcTransferDisabled = R;
    l.BASE_DATA_CHANNEL_OPTIONS = L;
    l.extractIceCredentials = E;
    l.extractDtlsFingerprint = k;
    l.replaceIceCredentials = I;
    l.replaceDtlsFingerprint = T;
    l.removeIceCandidates = D;
    l.dataToArrayBuffer = x;
    l.createAnswerSdp = M;
    l.PacketType = w;
    l.inspectPacketType = A;
}, 98);