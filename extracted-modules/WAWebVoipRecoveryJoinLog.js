__d("WAWebVoipRecoveryJoinLog", [
    "WALogger",
    "WAWebCallCollection",
    "WAWebVoipEventConstants",
    "WAWebVoipInvestigationLogUploadGating",
    "WAWebVoipWaCallEnums",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL);
    const d = 60000;
    const m = 5000;
    const p = {
        groupUpload: {
            reason: "voip-recovery-join-unconnected-group",
            sampling: 1
        },
        oneToOneUpload: {
            reason: "voip-recovery-join-unconnected-1on1",
            sampling: 0.1
        }
    };
    const _ = {
        groupUpload: {
            reason: "voip-recovery-join-short-group",
            sampling: 1
        },
        oneToOneUpload: {
            reason: "voip-recovery-join-short-1on1",
            sampling: 0.01
        }
    };
    let f = null;
    function g(e, t) {
        f = babelHelpers.extends({}, t, {
            call: e,
            joinedAt: Date.now()
        });
        r("WAWebCallCollection").off(c, b);
        r("WAWebCallCollection").on(c, b);
        b();
    }
    function h(e) {
        if (e != null && f?.call === e) {
            return f;
        }
        return null;
    }
    function y(t, n) {
        const r = h(t);
        if (r != null) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI: call ended from the UI ",
                "ms after joining without devices, reason=",
                ", state=",
                ", connected=",
                ", active=",
                ""
            ])), Date.now() - r.joinedAt, n, String(r.call.getState()), String(r.call.wasEverConnected), String(r.call.wasEverActive));
        }
    }
    function C() {
        r("WAWebCallCollection").off(c, b);
        f = null;
    }
    function b() {
        const e = f;
        if (!(e == null || r("WAWebCallCollection").activeCall === e.call)) {
            r("WAWebCallCollection").off(c, b);
            f = null;
            S(e);
            const t = v(e);
            if (t != null) {
                R(e.call.isGroup, t);
            }
        }
    }
    function v({ call, joinedAt }) {
        if (call.getState() === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere) {
            return null;
        }
        if (call.wasEverConnected) {
            if (call.wasEverActive && Date.now() - joinedAt < d) {
                return _;
            }
            return null;
        }
        return p;
    }
    function S(e) {
        const e_call = e.call;
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: call that joined without devices ended ",
            "ms after joining, state=",
            ", connected=",
            ", active=",
            ", microphone off=",
            ", camera off=",
            ", after the guide=",
            ", group=",
            ", call=",
            ""
        ])), Date.now() - e.joinedAt, String(e_call.getState()), String(e_call.wasEverConnected), String(e_call.wasEverActive), String(e.isMicrophoneOff), String(e.isCameraOff), String(e.isAfterGuide), String(e_call.isGroup), e_call.id);
    }
    function R(isGroup, t) {
        if (o("WAWebVoipInvestigationLogUploadGating").isInvestigationLogUploadEnabled()) {
            const n = isGroup ? t.groupUpload : t.oneToOneUpload;
            const r = L(n);
            self.setTimeout(function() {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: uploading logs: ",
                    ""
                ])), r).tags("non-sad").sendLogs(r, {
                    sampling: n.sampling,
                    sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
                });
            }, m);
        }
    }
    function L(e) {
        if (r("gkx")("26258")) {
            return e.reason;
        }
        return `${e.reason}-testing`;
    }
    l.recordRecoveryJoin = g;
    l.getRecoveryJoin = h;
    l.logEndAfterRecoveryJoin = y;
    l.resetRecoveryJoinForTesting = C;
}, 98);