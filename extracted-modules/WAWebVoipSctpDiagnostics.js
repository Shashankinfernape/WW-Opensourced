__d("WAWebVoipSctpDiagnostics", [
    "Promise",
    "WALogger",
    "asyncToGeneratorRuntime"
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
    const f = 1000;
    function g(e) {
        if (e != null) {
            return String(e);
        }
        return "N/A";
    }
    function h(e) {
        if (e != null) {
            return `${Math.round(e * 1000)}ms`;
        }
        return "N/A";
    }
    function y(e) {
        if (e == null) {
            return "N/A";
        }
        const o = e.address ?? "N/A";
        const a = g(e.port);
        const i = e.protocol ?? "N/A";
        const l = e.candidateType ?? "N/A";
        const s = e.tcpType != null ? `/${e.tcpType}` : "";
        return `${o}:${a}/${i}/${l}${s}`;
    }
    function C(e) {
        if (e == null) {
            return "N/A";
        }
        const r = e.protocol ?? "N/A";
        const o = e.candidateType ?? "N/A";
        const a = e.tcpType != null ? `/${e.tcpType}` : "";
        return `${r}/${o}${a}`;
    }
    function b(e, t) {
        const n = t != null ? e.get(t) : null;
        if (n != null && n.type === "candidate-pair") {
            return n;
        }
        return null;
    }
    function v(e) {
        let n = null;
        let r = null;
        e.forEach((e)=>{
            if (e.type === "transport") {
                n = e.selectedCandidatePairId ?? n;
            } else {
                if (e.type === "candidate-pair" && e.nominated === true) {
                    r = e;
                }
            }
        });
        return b(e, n) ?? r;
    }
    function S(e, t) {
        const n = t != null ? e.get(t) : null;
        if (n != null && (n.type === "local-candidate" || n.type === "remote-candidate")) {
            return n;
        }
        return null;
    }
    function R(e, t) {
        if (t == null) {
            return "N/A";
        }
        const n = S(e, t.localCandidateId);
        const r = S(e, t.remoteCandidateId);
        return `state=${g(t.state)} ${`nominated=${g(t.nominated)} `}${`rtt=${h(t.currentRoundTripTime)} `}${`tx=${g(t.bytesSent)} `}${`rx=${g(t.bytesReceived)} `}${`local=${y(n)} `}${`remote=${y(r)}`}`;
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ connectionId, peerConnection }) {
            try {
                const r = yield T({
                    connectionId,
                    peerConnection,
                    reason: "pc_connected"
                });
                if (r == null) {
                    return;
                }
                const a = v(r);
                const i = S(r, a?.localCandidateId);
                const l = S(r, a?.remoteCandidateId);
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] selected pair ",
                    " local=",
                    " remote=",
                    ""
                ])), connectionId, C(i), y(l));
            } catch (error) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] selected pair lookup failed for ",
                    ": ",
                    ""
                ])), connectionId, error);
            }
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ connectionId, errorReason, peerConnection, workerStats }) {
            const i = yield T({
                connectionId,
                peerConnection,
                reason: errorReason
            });
            if (i != null) {
                let l = "N/A";
                let s = "N/A";
                const u = [];
                i.forEach((e)=>{
                    if (e.type === "transport") {
                        const t = e;
                        l = `dtls=${g(t.dtlsState)} ${`tx=${g(t.bytesSent)} `}${`rx=${g(t.bytesReceived)} `}${`pair=${g(t.selectedCandidatePairId)}`}`;
                    } else if (e.type === "sctp-transport") {
                        const n = e;
                        s = `srtt=${h(n.smoothedRoundTripTime)} ${`cwnd=${g(n.congestionWindow)} `}${`rwnd=${g(n.receiverWindow)} `}${`mtu=${g(n.mtu)} `}${`unack=${g(n.unackData)}`}`;
                    } else if (e.type === "data-channel") {
                        const o = e;
                        u.push(`id=${g(o.dataChannelIdentifier ?? e.id)} ${`label=${g(o.label)} `}${`state=${g(o.state)} `}${`msgTx=${g(o.messagesSent)} `}${`msgRx=${g(o.messagesReceived)} `}${`bytesTx=${g(o.bytesSent)} `}${`bytesRx=${g(o.bytesReceived)}`}`);
                    }
                });
                const c = R(i, v(i));
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] getStats snapshot ",
                    " reason=",
                    " pc=",
                    " ice=",
                    " workerTxPkt=",
                    " workerRxPkt=",
                    " transport=",
                    " sctp=",
                    ""
                ])), connectionId, errorReason, peerConnection.connectionState, peerConnection.iceConnectionState, workerStats.sentPackets, workerStats.receivedPackets, l, s);
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] getStats datachannel ",
                    " reason=",
                    " ",
                    ""
                ])), connectionId, errorReason, u.length > 0 ? u.join(" ; ") : "N/A");
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] getStats pair ",
                    " reason=",
                    " ",
                    ""
                ])), connectionId, errorReason, c);
            }
        });
        return I.apply(this, arguments);
    }
    function T({ connectionId, peerConnection, reason }) {
        const l = peerConnection.getStats();
        return new (_ || (_ = n("Promise")))(function(t) {
            let n = false;
            const a = window.setTimeout(function() {
                if (!n) {
                    n = true;
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SCTP] getStats snapshot timed out after ",
                        "ms for ",
                        ", reason=",
                        ""
                    ])), f, connectionId, reason);
                    t(null);
                }
            }, f);
            l.then((e)=>{
                if (!n) {
                    n = true;
                    window.clearTimeout(a);
                    t(e);
                }
            }).catch((e)=>{
                if (!n) {
                    n = true;
                    window.clearTimeout(a);
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SCTP] getStats snapshot failed for ",
                        ", reason=",
                        ": ",
                        ""
                    ])), connectionId, reason, e);
                    t(null);
                }
            });
        });
    }
    l.findSelectedCandidatePair = v;
    l.logSelectedCandidatePair = L;
    l.logPeerConnectionStatsForError = k;
}, 98);