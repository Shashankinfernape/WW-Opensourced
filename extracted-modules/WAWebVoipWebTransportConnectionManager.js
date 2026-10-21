__d("WAWebVoipWebTransportConnectionManager", [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebVoipCallStateUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipTsLogger",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWebTransportCallSummary",
    "WAWebVoipWebTransportDataChannelThreadManager",
    "asyncToGeneratorRuntime",
    "err",
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
    const B = 8;
    const W = 3;
    const q = 500;
    const U = 8;
    const V = 32;
    const H = 32 * 1024;
    const G = 1000;
    const z = new Map;
    let j = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats();
    let K = 0;
    let Q = 0;
    let X = null;
    const Y = new Map;
    let J = new Map;
    let Z = 0;
    const ee = new Map;
    const te = new Set;
    const ne = new Set;
    let re = false;
    let oe = false;
    let ae = false;
    let ie = false;
    let le = false;
    let se = false;
    let ue = null;
    const ce = {
        aborted: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
        handshake_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout,
        connection_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout
    };
    let de = null;
    let me = null;
    let pe = false;
    let _e = false;
    let fe = null;
    function ge(t) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Fallback handler registered"
        ])));
        de = t;
    }
    function he(e) {
        me = e;
    }
    function ye() {
        Pe();
        De();
        gt();
        Ce();
        ae = true;
        te.clear();
        ne.clear();
        se = false;
        ue = null;
        pe = false;
        ke = false;
        _e = false;
        o("WAWebVoipGatingUtils").resetWebTransportFallbackState();
    }
    function Ce() {
        if (Y.size > 0) {
            o("WAWebVoipWebTransportDataChannelThreadManager").stopWebTransportDataChannelWorker().catch((e)=>{
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Failed to stop stale worker"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("webtransport-stale-worker-stop-failed");
            });
            for (const e of Array.from(Y.keys())){
                ct(e);
            }
        }
        ee.clear();
        te.clear();
        ne.clear();
        if (!ie) {
            J.clear();
            fe = null;
        }
    }
    function be(e) {
        if (ie) {
            ie = false;
            if (!e) {
                J.clear();
                fe = null;
                return;
            }
            Se();
        }
    }
    function ve() {
        se = true;
        if (!we()) {
            if (Ae()) {
                xe();
                return;
            }
            const e = ue;
            if (e != null) {
                Oe(e, true);
            }
        }
    }
    function Se() {
        if (!(re || !ae || pe || !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled())) {
            yt();
            ht();
            xe();
        }
    }
    let Re = null;
    let Le = null;
    let Ee = false;
    var ke = false;
    function Ie() {
        if (!(Ee || Re != null)) {
            const e = q;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout armed at ",
                "ms"
            ])), e);
            Re = window.setTimeout(function() {
                return Me(e);
            }, e);
        }
    }
    function Te() {
        if (Re != null) {
            window.clearTimeout(Re);
            Re = null;
        }
    }
    function De() {
        if (Le != null) {
            window.clearTimeout(Le);
            Le = null;
        }
    }
    function xe() {
        if (!(!o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() || pe || we() || !Ae())) {
            const e = q;
            if (Le == null) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] WebTransport readiness timeout armed at ",
                    "ms"
                ])), e);
                Le = window.setTimeout(function() {
                    Le = null;
                    $e(e, se ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason.NoReadyAfterAcceptTimeout : o("WAWebVoipWebTransportCallSummary").WtFallbackReason.NoReadyDuringRingingTimeout);
                }, e);
            }
        }
    }
    function $e(e, t) {
        if (!we()) {
            const n = [];
            for (const [a, i] of Y){
                if (J.has(a) && i.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting) {
                    n.push(a);
                }
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] WebTransport readiness budget expired with no current connection open (budget=",
                "ms)"
            ])), e);
            Oe(t, true, function() {
                for (const e of n){
                    o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(e, o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout, "connection_timeout");
                }
            });
        }
    }
    function Pe() {
        Ne();
    }
    function Ne() {
        Te();
        Ee = false;
        le = false;
    }
    function Me(e) {
        Re = null;
        const t = [];
        for (const [r, a] of Y){
            if (a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting) {
                t.push(r);
            }
        }
        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout expired: no inbound datagram in ",
            "ms"
        ])), e);
        Oe(o("WAWebVoipWebTransportCallSummary").WtFallbackReason.NoInboundDatagramTimeout, true, function() {
            for (const e of t){
                o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(e, o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout, "handshake_timeout");
            }
        });
    }
    function we() {
        for (const [t, n] of Y){
            if (J.has(t) && n.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open) {
                return true;
            }
        }
        return false;
    }
    function Ae() {
        for (const [t, n] of Y){
            if (J.has(t) && n.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting && !n.cleanupRequested) {
                return true;
            }
        }
        return false;
    }
    function Fe(e) {
        if (e) {
            return false;
        }
        if (oe) {
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: current relay preconnect pass is still starting sibling attempts"
            ])));
            return true;
        }
        if (we()) {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still open"
            ])));
            return true;
        }
        if (o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() && !Ee && Ae()) {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still connecting"
            ])));
            return true;
        }
        return false;
    }
    function Oe(e, t = false, n) {
        if (re) {
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: tearing down"
            ])));
            return false;
        }
        if (pe) {
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: already fell back this call"
            ])));
            return false;
        }
        const r = o("WAWebVoipLocalCallStateStore").getLocalCallState();
        if (r === o("WAWebVoipWaCallEnums").CallState.CallStateEnding || r === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere) {
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: call ended or resolved elsewhere (state=",
                ")"
            ])), String(r));
            return false;
        }
        if (Fe(t)) {
            return false;
        }
        const a = de;
        if (a == null) {
            if (!_e) {
                _e = true;
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Skipping fallback: no handler registered (fallback abprop off)"
                ])));
                o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpSkippedDisabled();
            }
            return false;
        }
        pe = true;
        o("WAWebVoipWebTransportCallSummary").recordWtFallbackTriggered(r, e);
        n?.();
        o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpTriggered();
        o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Triggering SCTP fallback"
        ])));
        try {
            a(fe);
        } catch (error) {
            o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Fallback handler threw: ",
                ""
            ])), error).sendLogs("webtransport-fallback-handler-fail");
        }
        return true;
    }
    function Be(e) {}
    function We(e, t) {
        return {
            state: o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
            workerConnectionCreated: false,
            cleanupRequested: false,
            packetBuffer: o("WAWebVoipRelayConnectionUtils").createPacketBuffer(),
            id: e,
            connectionTimeout: null,
            stats: o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
            localDroppedPackets: 0,
            workerOversizedPackets: 0,
            workerOversizedBytes: 0,
            workerMaxDatagramSize: null,
            connectionStartTime: 0,
            relayId: t.relayId,
            relayIp: t.ip,
            relayPort: t.port,
            clusterDomain: t.clusterDomain ?? null,
            relayConnectionInfo: t
        };
    }
    function qe(e) {
        const n = J.get(e);
        return n ?? Y.get(e)?.relayConnectionInfo;
    }
    function Ue(e) {
        if (e.connectionTimeout != null) {
            window.clearTimeout(e.connectionTimeout);
            e.connectionTimeout = null;
        }
    }
    function Ve(e, t, n) {
        const a = J.has(t);
        Ue(e);
        o("WAWebVoipWebTransportDataChannelThreadManager").getWebTransportDataChannelThread()?.close(t);
        e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed;
        if (!re) {
            o("WAWebCoreActionsODS").logCallWebtransportConnectFailed();
            const i = e.clusterDomain;
            if (i != null) {
                o("WAWebVoipTsLogger").logWebtransportConnectionFailed(`https://${i}/webtransport`);
            }
        }
        const e_clusterDomain = e.clusterDomain;
        if (e_clusterDomain != null && ee.get(e_clusterDomain) === t) {
            ee.delete(e_clusterDomain);
        }
        const s = Y.get(t) === e;
        if (s) {
            Y.delete(t);
        }
        if (a && s) {
            ue = n;
            Oe(n);
        }
    }
    const He = /^wt\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.fna\.whatsapp\.net$/i;
    function Ge({ authToken, clusterDomain, token }) {
        if (clusterDomain == null || !ze(clusterDomain)) {
            o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Invalid clusterDomain: ",
                ""
            ])), clusterDomain ?? "null").sendLogs("webtransport-invalid-cluster-domain");
            return null;
        }
        const a = `https://${clusterDomain}/webtransport`;
        const i = new URLSearchParams;
        i.set("token", token);
        if (authToken != null) {
            i.set("auth", authToken);
        }
        return `${a}?${i.toString()}`;
    }
    function ze(e) {
        return e.endsWith(".whatsapp.com") || He.test(e);
    }
    function je(e) {
        const t = Y.get(e.connectionId);
        if (t != null) {
            if (e.event === "first_stun_datagram_sent") {
                if (J.has(e.connectionId) && e.relayGeneration === Z) {
                    pt();
                }
                return;
            }
            if (e.event === "first_relay_datagram_sent") {
                if (J.has(e.connectionId) && e.relayGeneration === Z) {
                    o("WAWebVoipWebTransportCallSummary").recordWtRelayTrafficSent();
                }
                return;
            }
            if (e.event === "first_datagram") {
                if (J.has(e.connectionId) && e.relayGeneration === Z && !Ee) {
                    Ee = true;
                    De();
                    Te();
                    if (!pe && !ke) {
                        ke = true;
                        if (me != null) {
                            me();
                        }
                    }
                }
                return;
            }
            if (e.stats != null) {
                t.stats.sentPackets = e.stats.sentPackets;
                t.stats.sentBytes = e.stats.sentBytes;
                t.stats.receivedPackets = e.stats.receivedPackets;
                t.stats.receivedBytes = e.stats.receivedBytes;
                t.stats.droppedPackets = e.stats.droppedPackets;
                t.workerOversizedPackets = e.stats.oversizedPackets ?? 0;
                t.workerOversizedBytes = e.stats.oversizedBytes ?? 0;
                t.workerMaxDatagramSize = e.stats.maxDatagramSize ?? null;
            }
            const i = t.clusterDomain;
            if (i != null && ee.get(i) === e.connectionId) {
                ee.delete(i);
            }
            if (e.event === "closed") {
                t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed;
                o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Worker connection closed for ",
                    ""
                ])), e.connectionId);
                if (t.cleanupRequested) {
                    lt(e.connectionId);
                }
                return;
            }
            if (e.event === "error") {
                t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed;
                o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Worker connection failed for ",
                    ": ",
                    ""
                ])), e.connectionId, e.error?.message ?? "unknown");
                if (J.has(e.connectionId)) {
                    const c = Ke(e.error?.source);
                    ue = c;
                    Oe(c);
                } else {
                    lt(e.connectionId);
                }
            }
        }
    }
    function Ke(e) {
        switch(e){
            case "session":
                return o("WAWebVoipWebTransportCallSummary").WtFallbackReason.SessionError;
            case "stream":
                return o("WAWebVoipWebTransportCallSummary").WtFallbackReason.StreamError;
            default:
                return o("WAWebVoipWebTransportCallSummary").WtFallbackReason.WorkerError;
        }
    }
    const Qe = "WebTransport connect aborted";
    function Xe(e) {
        const t = (n)=>{
            if (e != null && typeof e === "object" && n in e) {
                return e[n];
            }
        };
        const n = t("name");
        const r = t("message");
        const o = t("stack");
        const a = t("source");
        const i = t("streamErrorCode");
        const wtHasStreamErrorCode = i != null;
        return {
            errorName: n != null ? String(n) : "unknown",
            errorMessage: r != null ? String(r) : String(e),
            errorStack: o != null ? String(o) : "no-stack",
            wtSource: a != null ? String(a) : "n/a",
            wtStreamErrorCode: wtHasStreamErrorCode ? String(i) : "n/a",
            wtHasStreamErrorCode
        };
    }
    function Ye({ errorMessage, errorName, wtHasStreamErrorCode, wtSource }, elapsedMs) {
        if (errorName === "NotSupportedError") {
            return "invalid_config";
        }
        if (errorName !== "WebTransportError" && errorMessage === Qe) {
            return "aborted";
        }
        if (errorName === "WebTransportError" && wtSource === "session") {
            if (!wtHasStreamErrorCode && elapsedMs >= 3000 && elapsedMs <= 6000) {
                return "handshake_timeout";
            }
            if (elapsedMs >= 0 && elapsedMs < 100) {
                return "immediate_reject";
            }
            return "session_error";
        }
        if (errorName === "WebTransportError" && wtSource === "stream") {
            return "stream_error";
        }
        return "unknown";
    }
    function Je(error, connectionStartTime, workerConnectionCreated) {
        const elapsedMs = connectionStartTime != null && connectionStartTime > 0 ? Date.now() - connectionStartTime : -1;
        const o = Xe(error);
        const { errorMessage, errorName, errorStack, wtSource, wtStreamErrorCode } = o;
        return {
            errorName,
            errorMessage,
            errorStack,
            wtSource,
            wtStreamErrorCode,
            elapsedMs,
            transportState: workerConnectionCreated ? "constructed" : "null",
            likelyCause: Ye(o, elapsedMs)
        };
    }
    const Ze = 512;
    const et = 64;
    function tt(e, t) {
        if (e > 0) {
            return e;
        }
        return t;
    }
    function nt() {
        return {
            incomingMaxBufferedDatagrams: tt(r("justknobx")._("6438"), Ze),
            outgoingMaxBufferedDatagrams: tt(r("justknobx")._("6439"), et),
            outgoingMaxAgeMs: Math.max(0, r("justknobx")._("6440"))
        };
    }
    function rt(e) {
        return ot.apply(this, arguments);
    }
    function ot() {
        ot = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { id, clusterDomain } = e;
            if (!(clusterDomain != null && ee.has(clusterDomain))) {
                if (clusterDomain != null) {
                    ee.set(clusterDomain, id);
                }
                o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Connecting to ",
                    ""
                ])), id);
                o("WAWebCoreActionsODS").logCallWebtransportConnectAttempted();
                if (clusterDomain != null) {
                    o("WAWebVoipTsLogger").logWebtransportConnectionStart(`https://${clusterDomain}/webtransport`);
                }
                let a = Y.get(id);
                if (a == null) {
                    a = We(id, e);
                    Y.set(id, a);
                }
                a.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting;
                a.connectionStartTime = Date.now();
                o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptStart(id);
                a.connectionTimeout = window.setTimeout(function() {
                    if (a != null && a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting) {
                        o("WALogger").WARN(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [WebTransportConnectionManager] Connection timeout for ",
                            ""
                        ])), id);
                        if (!re) {
                            o("WAWebCoreActionsODS").logCallWebtransportConnectFailByCategory("connection_timeout");
                        }
                        o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(id, o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout, "connection_timeout");
                        Ve(a, id, o("WAWebVoipWebTransportCallSummary").WtFallbackReason.ConnectionTimeout);
                    }
                }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS);
                try {
                    const i = Ge(e);
                    if (i == null) {
                        if (!re) {
                            o("WAWebCoreActionsODS").logCallWebtransportConnectFailByCategory("invalid_config");
                        }
                        o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(id, o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed, "invalid_config");
                        Ve(a, id, o("WAWebVoipWebTransportCallSummary").WtFallbackReason.InvalidConfig);
                        return;
                    }
                    const l = yield o("WAWebVoipWebTransportDataChannelThreadManager").initWebTransportDataChannelWorker();
                    const s = o("WAWebVoipWebTransportDataChannelThreadManager").getWebTransportDataChannelThread();
                    if (!l || s == null) {
                        const u = r("err")("WebTransport worker is unavailable");
                        u.name = "NotSupportedError";
                        throw u;
                    }
                    s.registerStateHandler(je);
                    a.workerConnectionCreated = true;
                    yield s.connect(id, i, e.ip, e.port, Z, nt());
                    const c = Y.get(id);
                    if (c == null || c !== a || c.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting || c.cleanupRequested || pe) {
                        o("WALogger").WARN(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [WebTransportConnectionManager] Connection ",
                            " was cleaned up during establishment, closing worker connection"
                        ])), id);
                        if (!pe) {
                            o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(id, o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted, "cleaned_up");
                        }
                        if (pe && c === a && !a.cleanupRequested) {
                            lt(id);
                        }
                        s.close(id);
                        return;
                    }
                    Ue(a);
                    a.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open;
                    a.stats.connectionReadyTime = Date.now();
                    if (J.has(id)) {
                        ue = null;
                        De();
                    }
                    o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(id, o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Opened, null);
                    o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection opened for ",
                        ""
                    ])), id);
                    o("WAWebCoreActionsODS").logCallWebtransportConnectSucceeded();
                    const d = a.clusterDomain;
                    if (d != null) {
                        o("WAWebVoipTsLogger").logWebtransportConnectionComplete(`https://${d}/webtransport`);
                    }
                    it(id);
                } catch (error) {
                    const p = Je(error, a.connectionStartTime, a.workerConnectionCreated);
                    if (Y.get(id) !== a && p.likelyCause === "aborted") {
                        return;
                    }
                    o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(id, ce[p.likelyCause] ?? o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed, p.likelyCause);
                    if (!re) {
                        o("WAWebCoreActionsODS").logCallWebtransportConnectFailByCategory(p.likelyCause);
                    }
                    const _ = o("WALogger").ERROR(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Failed to connect to ",
                        " after ",
                        "ms: likelyCause=",
                        " name=",
                        " message=",
                        " wtSource=",
                        " wtStreamErrorCode=",
                        " transport=",
                        " stack=",
                        ""
                    ])), id, p.elapsedMs, p.likelyCause, p.errorName, p.errorMessage, p.wtSource, p.wtStreamErrorCode, p.transportState, p.errorStack);
                    if (!o("WAWebVoipCallStateUtils").isCallTerminal(o("WAWebVoipLocalCallStateStore").getLocalCallState()) && !we() && p.likelyCause !== "aborted") {
                        _.sendLogs("webtransport-connect-fail");
                    }
                    Ve(a, id, at(p.likelyCause));
                }
            }
        });
        return ot.apply(this, arguments);
    }
    function at(likelyCause) {
        switch(likelyCause){
            case "aborted":
                return o("WAWebVoipWebTransportCallSummary").WtFallbackReason.Aborted;
            case "connection_timeout":
                return o("WAWebVoipWebTransportCallSummary").WtFallbackReason.ConnectionTimeout;
            case "handshake_timeout":
                return o("WAWebVoipWebTransportCallSummary").WtFallbackReason.HandshakeTimeout;
            case "immediate_reject":
                return o("WAWebVoipWebTransportCallSummary").WtFallbackReason.ImmediateReject;
            case "invalid_config":
                return o("WAWebVoipWebTransportCallSummary").WtFallbackReason.InvalidConfig;
            case "session_error":
                return o("WAWebVoipWebTransportCallSummary").WtFallbackReason.SessionError;
            case "stream_error":
                return o("WAWebVoipWebTransportCallSummary").WtFallbackReason.StreamError;
            case "unknown":
                return o("WAWebVoipWebTransportCallSummary").WtFallbackReason.Unknown;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${likelyCause}`);
                })();
        }
    }
    function it(e) {
        const t = Y.get(e);
        if (!(t == null || t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)) {
            const n = o("WAWebVoipWebTransportDataChannelThreadManager").getWebTransportDataChannelThread();
            for(let r = o("WAWebVoipRelayConnectionUtils").shiftPacket(t.packetBuffer); r != null;){
                if (n == null || !n.send(e, r)) {
                    t.localDroppedPackets++;
                }
                r = o("WAWebVoipRelayConnectionUtils").shiftPacket(t.packetBuffer);
            }
        }
    }
    function lt(e) {
        const t = Y.get(e);
        if (t != null) {
            Ue(t);
            o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer);
            o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Connection ",
                " stats - sent: ",
                " (",
                " bytes), received: ",
                " (",
                " bytes), dropped: ",
                ""
            ])), e, t.stats.sentPackets, t.stats.sentBytes, t.stats.receivedPackets, t.stats.receivedBytes, st(t));
            if (t.workerOversizedPackets > 0) {
                o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Connection ",
                    " oversized datagrams - dropped: ",
                    " (",
                    " bytes), max size: ",
                    ""
                ])), e, t.workerOversizedPackets, t.workerOversizedBytes, t.workerMaxDatagramSize ?? "unknown");
            }
            const r = t.clusterDomain;
            if (r != null && ee.get(r) === e) {
                ee.delete(r);
            }
            Y.delete(e);
        }
    }
    function st(e) {
        return e.stats.droppedPackets + e.localDroppedPackets;
    }
    function ut(e, t) {
        const droppedPackets = e.stats.droppedPackets;
        const r = o("WAWebVoipRelayConnectionUtils").bufferPacket(e.packetBuffer, t, e.stats);
        const a = e.stats.droppedPackets - droppedPackets;
        if (a > 0) {
            e.stats.droppedPackets = droppedPackets;
            e.localDroppedPackets += a;
        }
        return r;
    }
    function ct(e) {
        const t = Y.get(e);
        if (!(t == null || t.cleanupRequested)) {
            o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Cleaning up connection ",
                ""
            ])), e);
            Ue(t);
            o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer);
            const n = o("WAWebVoipWebTransportDataChannelThreadManager").getWebTransportDataChannelThread();
            if (t.workerConnectionCreated && t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed && t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed && n != null) {
                t.cleanupRequested = true;
                n.close(e);
                return;
            }
            lt(e);
        }
    }
    function dt(e, t, n) {
        return mt.apply(this, arguments);
    }
    function mt() {
        mt = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (!re) {
                const r = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(t, n);
                let a = Y.get(r);
                const i = qe(r);
                if (a == null) {
                    if (i == null) {
                        if (_t(r, e)) {
                            return;
                        }
                        const l = Array.from(J.keys()).join(",");
                        o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [WebTransportConnectionManager] No relay info for ",
                            ", skipping send (pruned candidate). knownRelays=[",
                            "]"
                        ])), r, l);
                        return;
                    }
                    const s = i.clusterDomain;
                    const u = s != null ? ee.get(s) : undefined;
                    const c = u != null ? Y.get(u) : undefined;
                    if (c != null) {
                        a = c;
                    } else {
                        a = We(r, i);
                        Y.set(r, a);
                    }
                }
                if (a.stats.firstSendRequestTime === 0) {
                    a.stats.firstSendRequestTime = Date.now();
                }
                const d = o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) !== o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN;
                if (d && J.has(r) && a.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Open && !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled()) {
                    pt();
                }
                if (a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open) {
                    const p = o("WAWebVoipWebTransportDataChannelThreadManager").getWebTransportDataChannelThread()?.send(a.id, o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e));
                    if (p !== true) {
                        a.localDroppedPackets++;
                    }
                    return;
                }
                if (!Ct(d, a)) {
                    const _ = ut(a, o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e));
                    if (!_) {
                        o("WALogger").WARN(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [WebTransportConnectionManager] Dropping packet for ",
                            ": size ",
                            " exceeds max buffer size"
                        ])), r, e.byteLength);
                    }
                    if ((a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None || a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed) && i != null && J.has(r)) {
                        rt(i);
                    }
                }
            }
        });
        return mt.apply(this, arguments);
    }
    function pt() {
        if (!le) {
            le = true;
            Ie();
        }
    }
    function _t(e, t) {
        if (J.size > 0 || !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() || o("WAWebVoipRelayConnectionUtils").inspectPacketType(t) === o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN) {
            return false;
        }
        return ft(e, t);
    }
    function ft(e, t) {
        if (K >= V || Q + t.byteLength > H) {
            return false;
        }
        let n = z.get(e);
        const r = n == null;
        if (n == null) {
            if (z.size >= U) {
                return false;
            }
            n = o("WAWebVoipRelayConnectionUtils").createPacketBuffer();
            z.set(e, n);
        }
        const length = n.packets.length;
        const n_bufferedBytes = n.bufferedBytes;
        const j_droppedPackets = j.droppedPackets;
        if (o("WAWebVoipRelayConnectionUtils").bufferPacket(n, o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(t), j)) {
            if (j.droppedPackets > j_droppedPackets) {
                o("WALogger").WARN(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Dropped oldest early STUN packet at per-relay limit"
                ])));
            }
            K += n.packets.length - length;
            Q += n.bufferedBytes - n_bufferedBytes;
            if (X == null) {
                X = window.setTimeout(gt, G);
            }
            return true;
        }
        if (r) {
            z.delete(e);
        }
        o("WALogger").WARN(T || (T = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Dropped oversized early STUN packet"
        ])));
        return false;
    }
    function gt() {
        if (X != null) {
            window.clearTimeout(X);
            X = null;
        }
        z.clear();
        j = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats();
        K = 0;
        Q = 0;
    }
    function ht() {
        for (const [t, n] of z){
            const r = J.get(t);
            if (r != null) {
                K -= n.packets.length;
                Q -= n.bufferedBytes;
                for(let a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n); a != null;){
                    dt(a, r.ip, r.port);
                    a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n);
                }
                z.delete(t);
            }
        }
        if (z.size === 0 && X != null) {
            window.clearTimeout(X);
            X = null;
        }
    }
    function yt() {
        let e = false;
        oe = true;
        try {
            for (const t of J.values()){
                const n = t.clusterDomain;
                const r = n != null && ze(n) ? n : null;
                const o = n ?? t.id;
                if (!(te.has(o) || r != null && ne.size >= W)) {
                    te.add(o);
                    if (r != null) {
                        ne.add(r);
                    }
                    e = true;
                    rt(t);
                }
            }
        } finally{
            oe = false;
        }
        const a = ue;
        if (!(!e || a == null || we() || Ae())) {
            Oe(a);
        }
    }
    function Ct(e, t) {
        if (t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed) {
            if (e) {
                Oe(o("WAWebVoipWebTransportCallSummary").WtFallbackReason.SendOnFailedConnection);
            }
            t.localDroppedPackets++;
            return true;
        }
        if (e) {
            return false;
        }
        t.localDroppedPackets++;
        return true;
    }
    function bt(e) {
        o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update"
        ])));
        fe = e;
        const n = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
        if (St(n)) {
            o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only();
        }
        const r = vt(n);
        const a = new Set;
        for (const i of r.values()){
            const l = i.clusterDomain;
            if (l != null) {
                a.add(l);
            }
        }
        let s = 0;
        for (const [c, d] of Y){
            const m = r.get(c);
            if (m != null) {
                d.relayConnectionInfo = m;
                continue;
            }
            if (d.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed && d.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed) {
                const p = d.clusterDomain;
                if (p != null && a.has(p)) {
                    if (ee.get(p) === c) {
                        ee.delete(p);
                    }
                    ct(c);
                    continue;
                }
                s++;
            }
        }
        Z++;
        J = r;
        Ne();
        o("WAWebVoipWebTransportDataChannelThreadManager").getWebTransportDataChannelThread()?.resetDatagramHealth(Z);
        if (o("WAWebVoipCallStateUtils").isCallTerminal(o("WAWebVoipLocalCallStateStore").getLocalCallState())) {
            ie = true;
        } else {
            Se();
        }
    }
    function vt(e) {
        const t = new Set;
        for (const n of e.values()){
            if (!n.isIPv6) {
                t.add(n.relayId);
            }
        }
        const r = new Map;
        for (const [a, i] of e){
            if (!(i.isIPv6 && t.has(i.relayId))) {
                r.set(a, i);
            }
        }
        return r;
    }
    function St(e) {
        if (e.size === 0) {
            return false;
        }
        for (const t of e.values()){
            if (!t.isIPv6) {
                return false;
            }
        }
        return true;
    }
    function Rt() {
        ae = false;
        De();
        re = true;
    }
    function Lt() {
        const e = Array.from(Y.values());
        const t = [].concat(e.filter((e)=>e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open), e.filter((e)=>e.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Open));
        const n = t.slice(0, B).map((e)=>{
            const name = e.relayConnectionInfo.name;
            const n = `${name}@${e.id}(state=${String(e.state)},open=${String(e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)}`;
            const r = e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed || e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed;
            if (r) {
                return `${n},stats=final,txPackets=${String(e.stats.sentPackets)},rxPackets=${String(e.stats.receivedPackets)},droppedPackets=${String(st(e))})`;
            }
            return `${n},stats=offthread,droppedPackets=${String(st(e))})`;
        });
        return `total=${String(e.length)};${n.join("|") || "none"}`;
    }
    function Et(e = true) {
        o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Closing all connections"
        ])));
        for (const t of Array.from(Y.keys())){
            ct(t);
        }
        const n = o("WAWebVoipWebTransportDataChannelThreadManager").stopWebTransportDataChannelWorker();
        n.finally(()=>{
            for (const [t, n] of Y){
                if (n.cleanupRequested) {
                    lt(t);
                }
            }
        });
        J.clear();
        ie = false;
        te.clear();
        ne.clear();
        gt();
        ee.clear();
        ke = false;
        Te();
        De();
        if (re) {
            Pe();
            pe = false;
            _e = false;
            fe = null;
        }
        if (e) {
            o("WAWebVoipWebTransportCallSummary").markWtCallSummaryClosed();
        }
        o("WAWebVoipTsLogger").cleanup();
        re = false;
    }
    l.registerFallbackHandler = ge;
    l.registerHealthyHandler = he;
    l.resetFallbackStateForNewCall = ye;
    l.resolvePendingFastSetupForNewCall = be;
    l.handleCallAccepted = ve;
    l.registerPacketHandler = Be;
    l.sendData = dt;
    l.handleRelayListUpdate = bt;
    l.prepareForEndCall = Rt;
    l.getWebTransportRelayDebugSummary = Lt;
    l.closeAllConnections = Et;
}, 98);