__d("WAWebVoipSctpStatsInstrumentation", [
    "Promise",
    "WALogger",
    "WAWebNoop",
    "WAWebVoipSctpDiagnostics",
    "WAWebVoipStatsTracker",
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
    let f;
    const g = new Map;
    function h() {
        const e = [];
        const t = Array.from(g.values());
        for (const n of t){
            e.push(...n.getConnections());
        }
        return e;
    }
    function y() {
        const e = Array.from(g.values());
        for (const t of e){
            const n = t.getDcThread?.();
            if (n != null && n.isActive()) {
                return n;
            }
        }
        return null;
    }
    function C(t, getConnections, getDcThread) {
        if (g.has(t)) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpStats] Replacing existing connection source '",
                "'"
            ])), t);
        }
        g.set(t, {
            getConnections,
            getDcThread
        });
        if (!L) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpStats] WebRTC stats poll start (",
                "ms)"
            ])), S);
            L = true;
            I();
        }
        if (!D.isPolling()) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpStats] Starting RTT polling (interval: ",
                "ms)"
            ])), o("WAWebVoipStatsTracker").DEFAULT_POLL_INTERVAL_MS);
            x().catch(r("WAWebNoop"));
            D.startPolling({
                intervalMs: o("WAWebVoipStatsTracker").DEFAULT_POLL_INTERVAL_MS,
                onInterval: function() {
                    x().catch(r("WAWebNoop"));
                }
            });
        }
    }
    function b(e) {
        g.delete(e);
        if (g.size === 0) {
            P();
        }
    }
    function v(e) {
        T.delete(e);
        D.remove(e);
    }
    var S = 1000;
    let R = null;
    var L = false;
    function E() {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = h();
            const t = y();
            yield (f || (f = n("Promise"))).all(e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ connectionId, peerConnection }) {
                    try {
                        const a = yield peerConnection.getStats();
                        const i = o("WAWebVoipSctpDiagnostics").findSelectedCandidatePair(a);
                        if (i == null) {
                            return;
                        }
                        const l = i.currentRoundTripTime;
                        if (l != null && t != null && t.isActive()) {
                            const c = i.remoteCandidateId;
                            const d = c != null ? a.get(c) : null;
                            const m = d?.address ?? "";
                            const _ = d?.port ?? 0;
                            if (m !== "" && _ > 0) {
                                const f = Math.round(l * 1000);
                                t.updateIceRtt(f, m, _);
                            }
                        }
                    } catch (error) {
                        o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [SctpStats] getStats failed for ",
                            ": ",
                            ""
                        ])), connectionId, error);
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
        });
        return k.apply(this, arguments);
    }
    function I() {
        if (L) {
            if (R != null) {
                window.clearTimeout(R);
            }
            R = window.setTimeout(function() {
                R = null;
                E().then(I);
            }, S);
        }
    }
    var T = new Map;
    var D = new (o("WAWebVoipStatsTracker")).VoipStatsTracker;
    function x() {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = h();
            const r = [];
            yield (f || (f = n("Promise"))).all(t.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ connectionId, peerConnection }) {
                    try {
                        const i = yield peerConnection.getStats();
                        const l = o("WAWebVoipSctpDiagnostics").findSelectedCandidatePair(i);
                        let dtls = "N/A";
                        i.forEach((e)=>{
                            if (e.type === "transport") {
                                dtls = String(e.dtlsState ?? "N/A");
                            }
                        });
                        r.push({
                            id: connectionId,
                            rtt: l?.currentRoundTripTime,
                            dtls,
                            sent: l?.bytesSent ?? 0
                        });
                    } catch (e) {}
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            let a = null;
            let i = 0;
            for (const l of r){
                const u = l.sent - (T.get(l.id) ?? 0);
                if (u > i) {
                    i = u;
                    a = l;
                }
            }
            for (const c of r){
                T.set(c.id, c.sent);
            }
            if (a != null) {
                const d = a.rtt != null ? Math.round(a.rtt * 1000) : null;
                if (d != null) {
                    D.record(a.id, d);
                }
                const m = D.formatStats(a.id) ?? "N/A";
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpStats] ",
                    " rtt=",
                    "ms (",
                    "), dtls=",
                    ""
                ])), a.id, d != null ? String(d) : "N/A", m, a.dtls);
            }
        });
        return $.apply(this, arguments);
    }
    function P() {
        if (L) {
            L = false;
            if (R != null) {
                window.clearTimeout(R);
                R = null;
            }
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpStats] Stopped WebRTC stats polling"
            ])));
        }
        if (D.isPolling()) {
            const e = D.stopPolling();
            if (e != null) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpStats] Call RTT summary: ",
                    ""
                ])), e);
            }
            T.clear();
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpStats] Stopped RTT polling"
            ])));
        }
    }
    l.addConnectionSource = C;
    l.removeConnectionSource = b;
    l.removeConnectionFromRttStats = v;
}, 98);