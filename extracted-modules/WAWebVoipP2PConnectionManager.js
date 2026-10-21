__d("WAWebVoipP2PConnectionManager", [
    "WALogger",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpDataChannelThreadManager",
    "WAWebVoipSctpStatsInstrumentation",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
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
    const oe = {
        urls: "stun:edge-stun.facebook.com:3478"
    };
    let ae = null;
    let ie = null;
    let le = null;
    let se = false;
    let ue = 0;
    const ce = {
        DATA_CHANNEL_LABEL: "wa-web-p2p",
        DATA_CHANNEL_ID: 0,
        CONNECTION_TIMEOUT_MS: 30000,
        MAX_BUFFERED_CANDIDATES: 20
    };
    let de = null;
    let me = null;
    let None = o("WAWebVoipRelayConnectionUtils").ConnectionState.None;
    let _e = false;
    let peerIsWebBrowser = false;
    let ge = false;
    let he = false;
    let ye = null;
    let Ce = false;
    let be = null;
    let ve = 0;
    let Se = null;
    let Re = null;
    let Le = null;
    let remoteUfrag = null;
    let remotePwd = null;
    let remoteAlgo = null;
    let remoteFp = null;
    let De = [];
    let xe = [];
    let $e = false;
    let Pe = false;
    let Ne = null;
    let localTemplate = null;
    let we = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats();
    let Ae = 0;
    let Fe = null;
    let Oe = null;
    let Be = null;
    let We = null;
    let qe = null;
    function Ue() {
        if (de != null && None === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open) {
            return [
                {
                    connectionId: "p2p",
                    peerConnection: de
                }
            ];
        }
        return [];
    }
    function Ve(e) {
        const t = e.match(/candidate:\S+\s+\d+\s+\S+\s+(\d+)\s+(\S+)\s+(\d+)\s+typ\s+\S+/);
        if (t == null) {
            return null;
        }
        const n = parseInt(t[1], 10);
        const r = t[2];
        const o = parseInt(t[3], 10);
        if (r.endsWith(".local")) {
            return null;
        }
        const a = Math.min(255, Math.floor(n / 2 ** 24));
        return {
            ip: r,
            port: o,
            priority: a
        };
    }
    function He(e) {
        const t = e.split(" ");
        if (t.length < 8 || !t[0].startsWith("candidate:") || t[6] !== "typ") {
            return "unparsed";
        }
        return t.map((e, n)=>{
            if (n === 4 || t[n - 1] === "raddr") {
                return ze(e);
            }
            return e;
        }).join(" ");
    }
    function Ge(e) {
        const t = e.split("::");
        if (t.length > 2) {
            return null;
        }
        const n = t[0] === "" ? [] : t[0].split(":");
        const r = t.length === 1 || t[1] === "" ? [] : t[1].split(":");
        let o = n;
        if (t.length === 2) {
            const a = 8 - n.length - r.length;
            if (a < 1) {
                return null;
            }
            const i = new Array(a).fill("0");
            o = [].concat(n, i, r);
        }
        if (o.length !== 8 || o.some((e)=>!/^[0-9a-fA-F]{1,4}$/.test(e))) {
            return null;
        }
        return o;
    }
    function ze(e) {
        if (/^\d{1,3}(\.\d{1,3}){3}$/.test(e)) {
            return e.replace(/\d{1,3}$/, "0");
        }
        if (e.includes(":")) {
            const t = Ge(e);
            if (t == null) {
                return "<ipv6>";
            }
            return [].concat(t.slice(0, 6), [
                "0",
                "0"
            ]).join(":");
        }
        return e;
    }
    function je(e) {
        const t = e.priority * 2 ** 24;
        return `candidate:1 1 UDP ${t} ${e.ip} ${e.port} typ host`;
    }
    function Ke({ asCaller, localTemplate, peerIsWebBrowser, remoteAlgo, remoteCandidates, remoteFp, remotePwd, remoteUfrag }) {
        let p = localTemplate;
        p = o("WAWebVoipRelayConnectionUtils").replaceIceCredentials(p, remoteUfrag, remotePwd);
        p = o("WAWebVoipRelayConnectionUtils").replaceDtlsFingerprint(p, remoteAlgo, remoteFp);
        if (peerIsWebBrowser) {
            if (asCaller) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] SDP: setting remote setup=passive (caller, local DTLS role=active/client)"
                ])));
                p = p.replace(/a=setup:[^\r\n]+/g, "a=setup:passive");
            } else {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] SDP: setting remote setup=active (callee, local DTLS role=passive/server)"
                ])));
                p = p.replace(/a=setup:[^\r\n]+/g, "a=setup:active");
            }
        } else {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] SDP: setting remote setup=active (peer is native, local DTLS role=passive/server)"
            ])));
            p = p.replace(/a=setup:[^\r\n]+/g, "a=setup:active");
        }
        p = o("WAWebVoipRelayConnectionUtils").removeIceCandidates(p);
        const _ = remoteCandidates.map((e)=>`a=${e.candidate}\r\n`).join("");
        const f = p.replace(/\s+$/, "\r\n");
        return f + _;
    }
    function Qe(e) {
        None = e;
        if (Oe != null) {
            Oe(e);
        }
    }
    function Xe() {
        if (Ne != null) {
            window.clearTimeout(Ne);
            Ne = null;
        }
        if (!ge && me != null) {
            try {
                me.close();
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Error closing data channel: ",
                    ""
                ])), error);
            }
        }
        me = null;
        if (de != null) {
            try {
                de.close();
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Error closing peer connection: ",
                    ""
                ])), error);
            }
            de = null;
        }
    }
    function Ye(e) {
        if (None !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed && None !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed) {
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Connection failed, reason: ",
                ""
            ])), e);
            Qe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed);
            Je();
            Xe();
        }
    }
    function Je() {
        if (ge && ye != null) {
            const e = ye;
            const t = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
            if (t != null) {
                t.closeChannel(e);
            }
            Se = ve;
            ge = false;
            ye = null;
        }
    }
    function Ze() {
        if (!(de == null || !Pe)) {
            const e = de;
            const t = xe;
            xe = [];
            for (const n of t){
                const r = je(n);
                e.addIceCandidate(new RTCIceCandidate({
                    sdpMLineIndex: 0,
                    sdpMid: "0",
                    candidate: r
                })).then(()=>{}, (e)=>{
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to add buffered remote candidate: ",
                        ""
                    ])), e);
                });
            }
        }
    }
    function et() {
        return tt.apply(this, arguments);
    }
    function tt() {
        tt = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!(remoteUfrag == null || remotePwd == null || remoteAlgo == null || remoteFp == null || de == null || localTemplate == null) && !(Pe || $e)) {
                const e = de;
                $e = true;
                try {
                    if (_e) {
                        const t = Ke({
                            asCaller: true,
                            localTemplate,
                            peerIsWebBrowser,
                            remoteAlgo,
                            remoteCandidates: [],
                            remoteFp,
                            remotePwd,
                            remoteUfrag
                        });
                        o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [P2PConnectionManager] Applying synthetic answer SDP (caller, ICE role=controlling)"
                        ])));
                        yield e.setRemoteDescription({
                            sdp: t,
                            type: "answer"
                        });
                    } else {
                        const r = Ke({
                            asCaller: false,
                            localTemplate,
                            peerIsWebBrowser,
                            remoteAlgo,
                            remoteCandidates: [],
                            remoteFp,
                            remotePwd,
                            remoteUfrag
                        });
                        o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [P2PConnectionManager] Applying synthetic offer SDP (callee, ICE role=controlled)"
                        ])));
                        yield e.setRemoteDescription({
                            sdp: r,
                            type: "offer"
                        });
                        const a = yield e.createAnswer();
                        let i = a.sdp ?? "";
                        const l = Re;
                        if (l != null) {
                            const s = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(i);
                            if (s != null && s.ufrag !== l.ufrag) {
                                o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [P2PConnectionManager] Answer ufrag ",
                                    " differs from proactive ufrag ",
                                    ", forcing match"
                                ])), s.ufrag, l.ufrag);
                                i = o("WAWebVoipRelayConnectionUtils").replaceIceCredentials(i, l.ufrag, l.pwd);
                            }
                        }
                        yield e.setLocalDescription({
                            type: "answer",
                            sdp: i
                        });
                        Re = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(i);
                        Le = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(i);
                        if (Re == null || Le == null) {
                            o("WALogger").ERROR(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [P2PConnectionManager] Failed to extract credentials from answer SDP"
                            ])));
                            $e = false;
                            Ye("credential_extraction_failed");
                            return;
                        }
                        o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [P2PConnectionManager] Callee local credentials extracted from answer"
                        ])));
                        const u = We;
                        if (u != null) {
                            try {
                                u(Re.ufrag, Re.pwd, Le.algorithm, Le.fingerprint, []);
                            } catch (error) {
                                o("WALogger").ERROR(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [P2PConnectionManager] Failed to send callee transport: ",
                                    ""
                                ])), error);
                            }
                        }
                    }
                    o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Remote description applied successfully"
                    ])));
                    Pe = true;
                    $e = false;
                    Ze();
                } catch (error) {
                    $e = false;
                    Pe = false;
                    o("WALogger").ERROR(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to apply remote description: ",
                        ""
                    ])), error);
                    Ye("remote_description_failed");
                }
            }
        });
        return tt.apply(this, arguments);
    }
    function nt(e) {
        if (e.candidate != null) {
            const r = e.candidate;
            if (r.protocol === "tcp") {
                return;
            }
            const a = {
                sdpMLineIndex: r.sdpMLineIndex ?? 0,
                sdpMid: r.sdpMid ?? "0",
                candidate: r.candidate
            };
            De.push(a);
            if (Be != null) {
                Be(a);
            }
            const i = We;
            if (i != null) {
                const l = Re;
                const s = Le;
                if (l != null && s != null) {
                    const u = Ve(a.candidate);
                    if (u != null) {
                        try {
                            i(l.ufrag, l.pwd, s.algorithm, s.fingerprint, [
                                u
                            ]);
                        } catch (error) {
                            o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [P2PConnectionManager] Failed to send candidate transport: ",
                                ""
                            ])), error);
                        }
                    }
                }
            }
        } else {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] ICE gathering complete"
            ])));
        }
    }
    function rt() {
        if (de != null) {
            const e = de;
            const t = e.iceConnectionState;
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] ICE connection state: ",
                " (isCaller=",
                ", gathering=",
                ", signaling=",
                ")"
            ])), t, String(_e), e.iceGatheringState, e.signalingState);
            if (t === "failed" || t === "disconnected") {
                e.getStats().then((e)=>{
                    e.forEach((e)=>{
                        if (e.type === "candidate-pair") {
                            const t = e;
                            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [P2PConnectionManager] candidate-pair: state=",
                                ", nominated=",
                                ", local=",
                                ", remote=",
                                ""
                            ])), String(t.state), String(t.nominated), String(t.localCandidateId), String(t.remoteCandidateId));
                        } else if (e.type === "local-candidate") {
                            const n = e;
                            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [P2PConnectionManager] local-candidate: ",
                                " ",
                                " port=",
                                ""
                            ])), String(n.candidateType), String(n.protocol), String(n.port));
                        } else if (e.type === "remote-candidate") {
                            const r = e;
                            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [P2PConnectionManager] remote-candidate: ",
                                " ",
                                " port=",
                                ""
                            ])), String(r.candidateType), String(r.protocol), String(r.port));
                        }
                    });
                }).catch((e)=>{
                    o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] getStats failed"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("p2p-getstats-failed");
                });
            }
            if (t === "failed") {
                Ye("ice_connection_failed");
            }
        }
    }
    function ot() {
        let t = "N/A";
        if (we.connectionReadyTime !== 0 && Ae > 0) {
            t = (we.connectionReadyTime - Ae).toString();
        }
        o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Connection stats:\n    ConnectionId: ",
            ",\n    Sent: ",
            " packets,\n    Received: ",
            " packets,\n    Sent Bytes: ",
            " bytes,\n    Received Bytes: ",
            " bytes,\n    Connection Setup Time: ",
            " ms,\n    Transferred to worker: ",
            ""
        ])), ye ?? be ?? "N/A", we.sentPackets, we.receivedPackets, we.sentBytes, we.receivedBytes, t, String(he));
    }
    function at() {
        o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel opened"
        ])));
        Qe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Open);
        we.connectionReadyTime = Date.now();
        if (!ge) {
            o("WAWebVoipSctpStatsInstrumentation").addConnectionSource("p2p", Ue);
        }
        if (Ne != null) {
            window.clearTimeout(Ne);
            Ne = null;
        }
    }
    function it() {
        o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel closed"
        ])));
        if (None !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed && None !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed) {
            Qe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed);
            Xe();
        }
    }
    function lt(e) {
        if (Fe != null) {
            o("WAWebVoipRelayConnectionUtils").dataToArrayBuffer(e.data).then((e)=>{
                if (e != null && Fe != null) {
                    we.receivedPackets++;
                    we.receivedBytes += e.byteLength;
                    Fe(e);
                }
            });
        }
    }
    function st(e) {
        o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel error"
        ])));
        Ye("data_channel_error");
    }
    function ut(e) {
        e.onopen = function() {
            at();
        };
        e.onclose = function() {
            it();
        };
        e.onmessage = function(e) {
            lt(e);
        };
        e.onerror = function(e) {
            st(e);
        };
    }
    function ct(e, t, n, r) {
        return dt.apply(this, arguments);
    }
    function dt() {
        dt = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a) {
            if (de != null) {
                o("WALogger").WARN(U || (U = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] initP2PConnection called while already initialized, cleaning up"
                ])));
                mt();
            }
            se = true;
            o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Initializing P2P connection, caller=",
                ", peerIsWebBrowser=",
                ""
            ])), String(e), String(t));
            _e = e;
            peerIsWebBrowser = t;
            We = a ?? null;
            const i = new RTCPeerConnection({
                iceServers: [].concat(n, [
                    oe
                ])
            });
            de = i;
            i.onicecandidate = function(e) {
                nt(e);
            };
            i.oniceconnectionstatechange = function() {
                rt();
            };
            i.onconnectionstatechange = function() {
                o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] PeerConnection state: ",
                    ""
                ])), i.connectionState);
            };
            i.onicegatheringstatechange = function() {
                o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] ICE gathering state: ",
                    ""
                ])), i.iceGatheringState);
            };
            i.onsignalingstatechange = function() {
                o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Signaling state: ",
                    ""
                ])), i.signalingState);
            };
            const l = i.createDataChannel(ce.DATA_CHANNEL_LABEL, babelHelpers.extends({}, o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS));
            l.binaryType = "arraybuffer";
            me = l;
            const s = o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled();
            const u = s ? null : o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
            if (s) {
                o("WALogger").LOG(j || (j = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] DC transfer disabled for current browser, using main-thread path"
                ])));
            }
            if (u != null && ae != null && le != null) {
                const c = ae;
                const d = le;
                const m = `${c}:${d}`;
                const p = u.transferChannel({
                    channel: l,
                    connectionId: m,
                    ip: c,
                    port: d
                });
                if (p) {
                    ge = true;
                    he = true;
                    ye = m;
                    ve += 1;
                    o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] DataChannel transferred to worker thread as ",
                        ""
                    ])), m);
                } else {
                    o("WALogger").WARN(Q || (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] DataChannel transfer failed, using main-thread path"
                    ])));
                }
            }
            if (!ge) {
                ut(l);
            }
            if (e) {
                const f = yield i.createOffer();
                yield i.setLocalDescription(f);
                const g = f.sdp ?? "";
                localTemplate = g;
                Re = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(g);
                Le = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(g);
                if (Re == null || Le == null) {
                    o("WALogger").ERROR(X || (X = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract local credentials from offer SDP"
                    ])));
                    Ye("credential_extraction_failed");
                    return;
                }
                o("WALogger").LOG(Y || (Y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Caller offer created, local credentials extracted"
                ])));
                const h = We;
                if (h != null && Re != null && Le != null) {
                    o("WALogger").LOG(J || (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Sending initial credentials to remote peer"
                    ])));
                    try {
                        h(Re.ufrag, Re.pwd, Le.algorithm, Le.fingerprint, []);
                    } catch (error) {
                        o("WALogger").ERROR(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [P2PConnectionManager] Failed to send initial transport"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("p2p-caller-send-initial-transport-failed");
                    }
                }
            } else {
                const C = yield i.createOffer();
                const b = C.sdp ?? "";
                localTemplate = b;
                Re = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(b);
                Le = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(b);
                if (Re == null || Le == null) {
                    o("WALogger").ERROR(ee || (ee = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract local credentials from callee template SDP"
                    ]))).sendLogs("p2p-callee-credential-extraction-failed");
                    Ye("credential_extraction_failed");
                    return;
                }
                o("WALogger").LOG(te || (te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Callee template SDP generated, sending proactive credentials"
                ])));
                const v = We;
                if (v != null) {
                    try {
                        v(Re.ufrag, Re.pwd, Le.algorithm, Le.fingerprint, []);
                    } catch (error) {
                        o("WALogger").ERROR(ne || (ne = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [P2PConnectionManager] Failed to send callee initial transport"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("p2p-callee-send-initial-transport-failed");
                    }
                }
            }
            et();
            Ae = Date.now();
            Qe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting);
            Ne = window.setTimeout(function() {
                if (None === o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting) {
                    Ye("connection_timeout");
                }
            }, ce.CONNECTION_TIMEOUT_MS);
        });
        return dt.apply(this, arguments);
    }
    function mt() {
        remoteUfrag = null;
        remotePwd = null;
        remoteAlgo = null;
        remoteFp = null;
        xe = [];
        $e = false;
        Pe = false;
        se = false;
        ue++;
        if (None !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None) {
            o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Cleaning up P2P connection"
            ])));
            if (ge) {
                Ce = true;
                be = ye;
            } else if (Ae > 0) {
                ot();
            }
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("p2p");
            Je();
            Xe();
            Qe(o("WAWebVoipRelayConnectionUtils").ConnectionState.None);
            _e = false;
            Re = null;
            Le = null;
            De = [];
            localTemplate = null;
            We = null;
            if (!Ce) {
                we = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats();
                Ae = 0;
                he = false;
            }
        }
    }
    function pt() {
        return Re;
    }
    function _t() {
        return Le;
    }
    function ft(e) {
        qe = e;
    }
    function gt(e) {
        o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Received remote credentials (ufrag=",
            ", pwd_len=",
            ", algo=",
            ", fp_len=",
            ", isCaller=",
            ")"
        ])), e.ufrag, String(e.pwd.length), e.algorithm, String(e.fingerprint.length), String(_e));
        if (Pe && remoteUfrag != null && remoteUfrag !== e.ufrag) {
            o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Peer ICE restart (ufrag ",
                " -> ",
                ")"
            ])), remoteUfrag, e.ufrag);
            if (qe != null) {
                qe();
            }
        }
        remoteUfrag = e.ufrag;
        remotePwd = e.pwd;
        remoteAlgo = e.algorithm;
        remoteFp = e.fingerprint;
        et();
    }
    function ht(e) {
        if (Pe && de != null) {
            const t = de;
            const n = je(e);
            t.addIceCandidate(new RTCIceCandidate({
                sdpMLineIndex: 0,
                sdpMid: "0",
                candidate: n
            })).then(()=>{}, (e)=>{
                o("WALogger").WARN(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Failed to add remote candidate: ",
                    ""
                ])), e);
            });
        } else {
            if (xe.length < ce.MAX_BUFFERED_CANDIDATES) {
                xe.push(e);
            } else {
                o("WALogger").WARN(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Dropping remote ICE candidate, buffer full (",
                    ")"
                ])), xe.length);
            }
        }
    }
    function yt(e) {
        if (ge) {
            return true;
        }
        if (None === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open && me != null && me.readyState === "open") {
            try {
                me.send(e);
                we.sentPackets++;
                we.sentBytes += e.byteLength;
                return true;
            } catch (error) {
                o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Failed to send P2P data: ",
                    ""
                ])), error);
                return false;
            }
        }
        return false;
    }
    function Ct(e) {
        Fe = e;
    }
    function bt(e) {
        Oe = e;
    }
    function vt(e) {
        Be = e;
    }
    function St() {
        return se;
    }
    function Rt(e) {
        return Lt.apply(this, arguments);
    }
    function Lt() {
        Lt = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = ue;
            try {
                const n = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                const a = n != null && n.type === "web" ? yield n.isWebP2PEnabled(e) : false;
                if (t === ue) {
                    se = a;
                }
            } catch (error) {
                o("WALogger").ERROR(re || (re = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] refreshP2PEnablement failed"
                ]))).catching(r("getErrorSafe")(error));
                if (t === ue) {
                    se = false;
                }
            }
        });
        return Lt.apply(this, arguments);
    }
    function Et(e, t, n) {
        ae = e;
        ie = t;
        le = n;
    }
    function kt(e, t) {
        return t === le && (e === ae || e === ie);
    }
    function It() {
        return ye;
    }
    function Tt(e) {
        return e === ye || Ce && e === be;
    }
    function Dt() {
        if (ge) {
            o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Worker reported P2P channel opened"
            ])));
            at();
        }
    }
    function xt(e) {
        const t = ge || Ce;
        if (t) {
            const n = Se != null && Se !== ve;
            Se = null;
            o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Worker reported P2P channel closed"
            ])));
            if (e != null) {
                we.sentPackets += e.sentPackets;
                we.sentBytes += e.sentBytes;
                we.receivedPackets += e.receivedPackets;
                we.receivedBytes += e.receivedBytes;
                if (e.firstSendTime > 0 && we.firstSendRequestTime === 0) {
                    we.firstSendRequestTime = e.firstSendTime;
                }
                if (e.firstResponseRecvTime > 0 && we.firstResponseRecvTime === 0) {
                    we.firstResponseRecvTime = e.firstResponseRecvTime;
                }
            }
            ot();
            Ce = false;
            be = null;
            we = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats();
            if (n) {
                o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Close was for a superseded worker P2P channel, keeping the rebuilt connection"
                ])));
                return;
            }
            Ae = 0;
            he = false;
            if (ge) {
                if (None !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed && None !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed) {
                    Qe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed);
                }
                ge = false;
                ye = null;
                Xe();
            }
        }
    }
    l.parseSdpCandidateToTransport = Ve;
    l.redactCandidateForLog = He;
    l.initP2PConnection = ct;
    l.cleanupP2PConnection = mt;
    l.getLocalIceCredentials = pt;
    l.getLocalDtlsFingerprint = _t;
    l.registerOnPeerIceRestart = ft;
    l.handleRemoteCredentials = gt;
    l.handleRemoteCandidate = ht;
    l.sendP2PData = yt;
    l.registerOnDataChannelMessage = Ct;
    l.registerOnDataChannelStateChange = bt;
    l.registerOnIceCandidate = vt;
    l.isP2PEnabled = St;
    l.refreshP2PEnablement = Rt;
    l.initP2PVirtualAddresses = Et;
    l.isP2PVirtualAddress = kt;
    l.getP2PConnectionId = It;
    l.isP2PConnectionId = Tt;
    l.handleWorkerP2PChannelOpened = Dt;
    l.handleWorkerP2PChannelClosed = xt;
}, 98);