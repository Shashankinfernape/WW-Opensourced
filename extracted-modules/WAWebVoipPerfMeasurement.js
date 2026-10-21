__d("WAWebVoipPerfMeasurement", [
    "$InternalEnum",
    "WALogger",
    "WAWebVoipCallStateUtils",
    "WAWebVoipWaCallEnums"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = n("$InternalEnum")({
        FIRST_CAMERA_FRAME: 0,
        FIRST_PEER_FRAME: 1
    });
    const c = 2;
    const d = [
        "first_camera_frame",
        "first_peer_frame"
    ];
    let m = null;
    let p = new Array(c).fill(null);
    function _(e) {
        m = {
            isOutgoing: e
        };
        p = new Array(c).fill(null);
    }
    function f() {
        m = null;
        p.fill(null);
    }
    function g(t, n) {
        if (m == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Perf] startMeasurement: no context"
            ])));
            return;
        }
        const r = t;
        if (p[r] == null) {
            p[r] = {
                startTime: self.performance.now(),
                hasLogged: false,
                metadata: n ?? null
            };
        }
    }
    function h(e) {
        const t = m;
        if (t != null) {
            const n = e;
            const r = p[n];
            if (!(r == null || r.hasLogged)) {
                r.hasLogged = true;
                const a = self.performance.now() - r.startTime;
                const i = t.isOutgoing ? "outgoing" : "incoming";
                const l = d[n];
                let u = "";
                if (r.metadata != null) {
                    const c = Object.entries(r.metadata).map(([t, n])=>`${t}=${String(n)}`).join(", ");
                    u = `, ${c}`;
                }
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Perf] ",
                    " (",
                    "",
                    "): ",
                    "ms"
                ])), l, i, u, a);
            }
        }
    }
    function y(e, t) {
        if (e === o("WAWebVoipWaCallEnums").CallState.PreCalling || e === o("WAWebVoipWaCallEnums").CallState.Calling || e === o("WAWebVoipWaCallEnums").CallState.ReceivedCall || e === o("WAWebVoipWaCallEnums").CallState.Rejoining || e === o("WAWebVoipWaCallEnums").CallState.Link) {
            _(t);
        } else if (o("WAWebVoipCallStateUtils").isCallTerminal(e)) {
            f();
        }
        if (o("WAWebVoipCallStateUtils").isCallActive(e)) {
            g(u.FIRST_PEER_FRAME);
        }
    }
    l.PerfMeasurement = u;
    l.startMeasurement = g;
    l.endMeasurement = h;
    l.onCallStateChange = y;
}, 98);