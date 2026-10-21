__d("WAWebVoipSctpIceTcpFallback", [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpIceTcpFallbackODS"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = 3000;
    const _ = 40000;
    const f = 6000;
    const g = 2;
    let h = null;
    let y = null;
    let C = null;
    let b = null;
    let v = false;
    let S = false;
    let R = false;
    let L = null;
    let E = false;
    const k = new Set;
    let I = 0;
    let T = 0;
    const D = new Set;
    function x(t, n) {
        const r = $(n.id);
        if (r !== o("WAWebVoipSctpConnectionManagerConstants").RelayIceTcpMode.Off) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE-TCP mode=",
                " ",
                " tcpPort=",
                ""
            ])), r, n.id, n.iceTcpPort ?? "none");
        }
        return o("WAWebVoipRelayConnectionUtils").createAnswerSdp(t, n, r);
    }
    function $(e) {
        if (D.has(e)) {
            return o("WAWebVoipSctpConnectionManagerConstants").RelayIceTcpMode.TcpOnly;
        }
        return o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig.RELAY_ICE_TCP_MODE;
    }
    function P(e, t) {
        if (!(t || o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig.RELAY_ICE_TCP_MODE === o("WAWebVoipSctpConnectionManagerConstants").RelayIceTcpMode.TcpOnly || h != null)) {
            h = e;
            if (v) {
                W();
            }
        }
    }
    function N() {
        S = true;
        if (R) {
            H("after_accept");
        }
    }
    function M(e) {
        if (!v) {
            v = true;
            C = window.setTimeout(U, Math.min(e, _));
        }
        if (h != null) {
            W();
        }
    }
    function w(e, t) {
        if (t === "connected") {
            B(e);
        } else if (t === "failed") {
            V();
        }
    }
    function A(e) {
        if (e === "failed") {
            V();
        }
    }
    function F() {
        O();
        S = false;
    }
    function O() {
        for (const e of [
            y,
            C,
            b
        ]){
            if (e != null) {
                window.clearTimeout(e);
            }
        }
        y = null;
        C = null;
        b = null;
        h = null;
        v = false;
        R = false;
        L = null;
        E = false;
        k.clear();
        D.clear();
    }
    function B(e) {
        if (!D.has(e)) {
            E = true;
            return;
        }
        const t = L;
        if (b != null && t != null) {
            window.clearTimeout(b);
            b = null;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE-TCP fallback connected ",
                " after ",
                "ms"
            ])), e, Date.now() - T);
            o("WAWebVoipSctpIceTcpFallbackODS").logCallSctpIceTcpFallback(G(t).tcpConnected);
        }
    }
    function W() {
        if (!(y != null || R)) {
            I = Date.now();
            y = window.setTimeout(q, p);
        }
    }
    function q() {
        y = null;
        R = true;
        if (S) {
            H("after_accept");
        }
    }
    function U() {
        C = null;
        V();
    }
    function V() {
        if (!S) {
            H("before_accept");
        }
    }
    function H(e) {
        const t = h;
        if (!(t == null || L != null || E || k.has(e))) {
            k.add(e);
            const n = G(e);
            const { fired, label, off, skipped } = n;
            const s = K(t.getRelays(), e === "after_accept");
            if (s.length === 0) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE-TCP fallback",
                    " skipped: no relay has a TCP VIP"
                ])), label);
                o("WAWebVoipSctpIceTcpFallbackODS").logCallSctpIceTcpFallback(skipped);
                return;
            }
            const m = Date.now() - I;
            if (!z(e)) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE-TCP fallback",
                    " off: no UDP relay connected within ",
                    "ms, would retry ",
                    " over TCP"
                ])), label, m, s.join(","));
                o("WAWebVoipSctpIceTcpFallbackODS").logCallSctpIceTcpFallback(off);
                return;
            }
            L = e;
            for (const p of s){
                D.add(p);
            }
            T = Date.now();
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE-TCP fallback",
                ": no UDP relay connected within ",
                "ms, retrying ",
                " over TCP"
            ])), label, m, s.join(","));
            t.moveToIceTcp(s);
            o("WAWebVoipSctpIceTcpFallbackODS").logCallSctpIceTcpFallback(fired);
            b = window.setTimeout(function() {
                return j(e);
            }, f);
        }
    }
    function G(e) {
        switch(e){
            case "after_accept":
                return {
                    fired: "fired_after_accept",
                    label: "",
                    off: "off_after_accept",
                    reverted: "reverted_after_accept",
                    skipped: "skipped_no_tcp_vip_after_accept",
                    tcpConnected: "tcp_connected_after_accept"
                };
            case "before_accept":
                return {
                    fired: "fired_before_accept",
                    label: " before accept",
                    off: "off_before_accept",
                    reverted: "reverted_before_accept",
                    skipped: "skipped_no_tcp_vip_before_accept",
                    tcpConnected: "tcp_connected_before_accept"
                };
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function z(e) {
        switch(e){
            case "after_accept":
                return o("WAWebABProps").getABPropConfigValue("web_voip_tcp_connection_fallback");
            case "before_accept":
                return o("WAWebABProps").getABPropConfigValue("web_voip_tcp_connection_fallback_before_accept");
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function j(e) {
        b = null;
        const n = Array.from(D);
        D.clear();
        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SCTP] ICE-TCP fallback: no TCP relay connected in ",
            "ms, returning ",
            " to UDP"
        ])), f, n.join(","));
        o("WAWebVoipSctpIceTcpFallbackODS").logCallSctpIceTcpFallback(G(e).reverted);
        h?.moveBackToUdp(n);
    }
    function K(e, t) {
        const n = Array.from(e);
        const r = Q(new Set(n.map((e)=>e.relayId)).size, t);
        const o = [];
        const a = [];
        for (const i of n){
            if (i.iceTcpPort != null) {
                if (!o.includes(i.relayId)) {
                    if (o.length >= r) {
                        continue;
                    }
                    o.push(i.relayId);
                }
                a.push(i.id);
            }
        }
        return a;
    }
    function Q(size, t) {
        if (t && size > 1) {
            return Math.min(g, size - 1);
        }
        return Math.min(g, size);
    }
    l.createRelayAnswerSdp = x;
    l.armIceTcpFallback = P;
    l.noteIceTcpFallbackCallAccepted = N;
    l.noteRelayIceStarted = M;
    l.noteRelayIceState = w;
    l.noteRelayConnectionState = A;
    l.resetIceTcpFallback = F;
    l.resetIceTcpFallbackRelayState = O;
}, 98);