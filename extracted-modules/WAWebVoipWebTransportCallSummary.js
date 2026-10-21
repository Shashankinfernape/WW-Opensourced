__d("WAWebVoipWebTransportCallSummary", [
    "$InternalEnum",
    "WAWebVoipWaCallEnums"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        Opened: "opened",
        Timeout: "timeout",
        Aborted: "aborted",
        Failed: "failed"
    });
    const s = n("$InternalEnum")({
        Unknown: 0,
        PreAccept: 1,
        PostAcceptPreActive: 2,
        PostActive: 3
    });
    const u = n("$InternalEnum")({
        Unknown: 0,
        NoInboundDatagramTimeout: 1,
        ConnectionTimeout: 2,
        InvalidConfig: 3,
        Aborted: 4,
        HandshakeTimeout: 5,
        ImmediateReject: 6,
        SessionError: 7,
        StreamError: 8,
        WorkerError: 9,
        SendOnFailedConnection: 10,
        GroupCallDisabled: 11,
        NoReadyAfterAcceptTimeout: 12,
        NoReadyDuringRingingTimeout: 13
    });
    class c {
        constructor(){
            this.$1 = [];
            this.$2 = Date.now();
            this.$3 = null;
            this.$4 = null;
            this.$5 = null;
            this.$6 = false;
            this.$7 = false;
            this.$8 = null;
            this.$9 = null;
            this.$10 = null;
            this.$11 = null;
            this.$12 = null;
            this.$13 = null;
            this.$14 = null;
            this.$15 = null;
            this.$16 = false;
        }
        recordEligibility(t, n) {
            this.$4 = t;
            this.$5 = n;
        }
        recordCallStart() {
            this.$2 = Date.now();
        }
        recordCallState(t) {
            if (this.$3 == null && (t === o("WAWebVoipWaCallEnums").CallState.AcceptSent || t === o("WAWebVoipWaCallEnums").CallState.AcceptReceived)) {
                this.$3 = Date.now();
            }
            if (!this.$16 && (t === o("WAWebVoipWaCallEnums").CallState.CallActive || t === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely)) {
                this.$16 = true;
                this.$15 = this.$17();
            }
        }
        recordAttemptStart(t) {
            this.$1.push({
                connectionId: t,
                startMs: Date.now(),
                elapsedMs: null,
                outcome: null,
                likelyCause: null
            });
        }
        recordAttemptComplete(t, n, r) {
            for(let e = this.$1.length - 1; e >= 0; e--){
                const o = this.$1[e];
                if (o.connectionId === t && o.outcome == null) {
                    o.elapsedMs = Date.now() - o.startMs;
                    o.outcome = n;
                    o.likelyCause = r;
                    return;
                }
            }
        }
        recordRelayTrafficSent() {
            this.$6 = true;
        }
        recordFallbackTriggered(t, n) {
            if (!this.$7) {
                const e = Date.now();
                this.$7 = true;
                this.$8 = e;
                this.$9 = t;
                this.$10 = n;
                this.$11 = e - this.$2;
                this.$12 = this.$3 != null ? e - this.$3 : null;
            }
        }
        recordFallbackSctpStart() {
            if (this.$13 == null) {
                this.$13 = this.$17();
            }
        }
        recordFallbackSctpConnected() {
            if (this.$14 == null) {
                this.$14 = this.$17();
            }
        }
        $17() {
            const e = this.$8;
            if (e != null) {
                return Date.now() - e;
            }
            return null;
        }
        hasActivity() {
            return this.$1.length > 0;
        }
        snapshot() {
            let numOpened = 0;
            for (const n of this.$1){
                if (n.outcome === e.Opened) {
                    numOpened++;
                }
            }
            return {
                configEnabled: this.$4,
                runtimeEligible: this.$5,
                connectAttempted: this.$1.length > 0,
                connectOpened: numOpened > 0,
                relayTrafficSent: this.$6,
                fallbackTriggered: this.$7,
                fallbackPhase: this.$9,
                fallbackReason: this.$10,
                fallbackSinceCallStartMs: this.$11,
                fallbackSinceAcceptMs: this.$12,
                fallbackSctpStartMs: this.$13,
                fallbackSctpConnectedMs: this.$14,
                fallbackToFirstActiveMs: this.$15,
                numRelayAttempts: this.$1.length,
                numOpened,
                attempts: this.$1.slice()
            };
        }
    }
    const d = 4;
    let m = new c;
    let p = false;
    let _ = false;
    let f = false;
    let g = null;
    let h = null;
    let y = null;
    const C = new Map;
    function b(e) {
        if (e === o("WAWebVoipWaCallEnums").CallState.Calling || e === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived || e === o("WAWebVoipWaCallEnums").CallState.ReceivedCall || e === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer || e === o("WAWebVoipWaCallEnums").CallState.PreCalling || e === o("WAWebVoipWaCallEnums").CallState.CallBCallStarting) {
            return s.PreAccept;
        }
        if (e === o("WAWebVoipWaCallEnums").CallState.AcceptSent || e === o("WAWebVoipWaCallEnums").CallState.AcceptReceived || e === o("WAWebVoipWaCallEnums").CallState.Rejoining || e === o("WAWebVoipWaCallEnums").CallState.Link) {
            return s.PostAcceptPreActive;
        }
        if (e === o("WAWebVoipWaCallEnums").CallState.CallActive || e === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely) {
            return s.PostActive;
        }
        return s.Unknown;
    }
    function v(e, t = false) {
        if (t && !p && _ && g == null) {
            g = e;
            m.recordCallStart();
            return;
        }
        if (!p && g != null) {
            const n = m.snapshot();
            if (_) {
                h = g;
                y = n;
            }
            if (f) {
                O(g, n);
            }
        }
        m = new c;
        p = false;
        _ = false;
        f = false;
        g = e;
    }
    function S(e, t) {
        f = true;
        m.recordEligibility(e, t);
        F();
    }
    function R(e) {
        g = e;
    }
    function L(e) {
        if (p) {
            m = new c;
            p = false;
            g = null;
        }
        _ = true;
        f = true;
        m.recordAttemptStart(e);
    }
    function E(e, t, n) {
        m.recordAttemptComplete(e, t, n);
        F();
    }
    function k() {
        f = true;
        m.recordRelayTrafficSent();
        F();
    }
    function I(e) {
        m.recordCallState(e);
        F();
    }
    function T(e, t) {
        f = true;
        m.recordFallbackTriggered(b(e), t);
        F();
    }
    function D() {
        m.recordFallbackSctpStart();
        F();
    }
    function x() {
        m.recordFallbackSctpConnected();
        F();
    }
    function $() {
        return _ && m.hasActivity();
    }
    function P() {
        if (_) {
            return m.snapshot();
        }
        return {
            configEnabled: null,
            runtimeEligible: null,
            connectAttempted: false,
            connectOpened: false,
            relayTrafficSent: false,
            fallbackTriggered: false,
            fallbackPhase: null,
            fallbackReason: null,
            fallbackSinceCallStartMs: null,
            fallbackSinceAcceptMs: null,
            fallbackSctpStartMs: null,
            fallbackSctpConnectedMs: null,
            fallbackToFirstActiveMs: null,
            attempts: [],
            numOpened: 0,
            numRelayAttempts: 0
        };
    }
    function N() {
        if (f) {
            return m.snapshot();
        }
        return null;
    }
    function M(e) {
        if (e == null) {
            return null;
        }
        if (f && e === g) {
            return m.snapshot();
        }
        return C.get(e) ?? null;
    }
    function w(e) {
        if (e == null) {
            if (_) {
                return m.snapshot();
            }
            return null;
        }
        if (e === h && y != null) {
            return y;
        }
        if (_ && (g == null || e === g)) {
            return m.snapshot();
        }
        return null;
    }
    function A() {
        const e = m.snapshot();
        if (_) {
            h = g;
            y = e;
        }
        if (f) {
            O(g, e);
        }
        p = true;
    }
    function F() {
        if (p && f) {
            O(g, m.snapshot());
        }
    }
    function O(e, t) {
        if (e != null && (C.set(e, t), !(C.size <= d))) {
            const n = C.keys().next().value;
            if (typeof n === "string") {
                C.delete(n);
            }
        }
    }
    l.WtRelayOutcome = e;
    l.WtFallbackPhase = s;
    l.WtFallbackReason = u;
    l.resetWtCurrentCallActivity = v;
    l.recordWtCallEligibility = S;
    l.updateWtCurrentCallId = R;
    l.recordWtRelayAttemptStart = L;
    l.recordWtRelayAttemptComplete = E;
    l.recordWtRelayTrafficSent = k;
    l.recordWtCallState = I;
    l.recordWtFallbackTriggered = T;
    l.recordWtFallbackSctpStart = D;
    l.recordWtFallbackSctpConnected = x;
    l.hasWtActivityThisCall = $;
    l.getWtCallSummaryIfCurrent = P;
    l.getWtCurrentCallTelemetry = N;
    l.getWtCallTelemetryForCall = M;
    l.getWtCallSummaryForCall = w;
    l.markWtCallSummaryClosed = A;
}, 98);